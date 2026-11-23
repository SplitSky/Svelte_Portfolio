import {error} from '@sveltejs/kit';
import type { Component } from "svelte";

type Post = {
    default: Component;
    metadata: {
        title: string;
        date: string;
        description?: string;
        tags?: string[];
    };
};

// find every markdown file in the posts folder
const posts = import.meta.glob<Post>('/src/lib/posts/*.md');
console.log(posts);

export function entries() { // create one page per file
    const slugs = [];
    for (const path in posts) {
        console.log(path);
        const slug = path.replace('/src/lib/posts', '').replace('.md', ''); // name slugs after files without .md
        slugs.push({slug});
    }
    return slugs;
}

export async function load({params}) {
    const path = `/src/lib/posts/${params.slug}.md`; // define path for post
    console.log(path);
    const loadPost = posts[path]; // fetch just one post
    console.log(loadPost);

    if (!loadPost) {
        error(404, `Post "${params.slug}" not found`); // raise error if not found
    }

    console.log("potato");
    const post = await loadPost();
    const meta = post.metadata;
    if (!meta.title || !meta.date) {
        error(500, 'Post "${params.slug}" is missing a title or date');
    }
    return {
        Content: post.default,
        slug: params.slug,
        title: meta.title,
        date: meta.date,
        description: meta.description,
        tags: meta.tags ?? []
    };
}