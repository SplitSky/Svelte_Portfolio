import type { PageLoad, EntryGenerator } from './$types';
import { error } from '@sveltejs/kit';
import matter from 'gray-matter';
import { marked } from 'marked';

export const prerender = true;

const modules = import.meta.glob('$lib/posts/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
}) as Record<string, string>;

export const entries: EntryGenerator = () => {
    return Object.keys(modules).map((path) => ({
        slug: path.split('/').pop()?.replace('.md', '') ?? ''
    }));
};

export const load: PageLoad = async ({ params }) => {
    const path = Object.keys(modules).find((p) => p.endsWith(`/${params.slug}.md`));

    if (!path) {
        throw error(404, `Post "${params.slug}" not found`);
    }

    const raw = modules[path];
    const { data, content } = matter(raw);

    if (!data.title || !data.date) {
        throw error(500, `Post "${params.slug}" is missing required frontmatter`);
    }

    const html = await marked.parse(content);

    return {
        post: {
            slug: params.slug,
            title: data.title as string,
            date: data.date as string,
            description: (data.description as string) ?? '',
            tags: (data.tags as string[]) ?? [],
            html
        }
    };
};