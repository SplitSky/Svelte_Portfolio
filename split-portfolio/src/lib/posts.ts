import { marked } from 'marked';
import matter from 'gray-matter';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
}

export interface Post extends PostMeta {
  html: string;
}

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: false,
});

// Vite's import.meta.glob — eager so we can call this from +page.server.ts
const rawPosts = import.meta.glob('/src/lib/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function slugFromPath(path: string): string {
  return path.split('/').pop()!.replace(/\.md$/, '');
}

export function getAllPosts(): PostMeta[] {
  return Object.entries(rawPosts)
    .map(([path, raw]) => {
      const { data } = matter(raw);
      return {
        slug: slugFromPath(path),
        title: data.title ?? 'Untitled',
        date: data.date ? new Date(data.date).toISOString() : new Date(0).toISOString(),
        description: data.description ?? '',
        tags: data.tags ?? [],
      } satisfies PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post | null {
  const entry = Object.entries(rawPosts).find(
    ([path]) => slugFromPath(path) === slug,
  );

  if (!entry) return null;

  const [, raw] = entry;
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? 'Untitled',
    date: data.date ? new Date(data.date).toISOString() : new Date(0).toISOString(),
    description: data.description ?? '',
    tags: data.tags ?? [],
    html: marked(content) as string,
  };
}