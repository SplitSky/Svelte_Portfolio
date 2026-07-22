import type { PageLoad } from './$types';

export const prerender = true;

// Define a type for our post to ensure consistency
interface Post {
    slug: string;
    title: string;
    date: string;
    description?: string;
    tags?: string[];
}

export const load: PageLoad = async () => {
    const modules = import.meta.glob('$lib/posts/*.md', { 
        query: '?raw', 
        import: 'default', 
        eager: true 
    });
    
    const posts: Post[] = [];

    for (const path in modules) {
        const content = modules[path] as string;

        const slug = path.split('/').pop()?.replace('.md', '') || '';
        const titleMatch = content.match(/title:\s*['"]?(.*?)['"]?$/m);
        const dateMatch = content.match(/date:\s*['"]?(.*?)['"]?$/m);
        const descMatch = content.match(/description:\s*['"]?(.*?)['"]?$/m);
        const tagsMatch = content.match(/tags:\s*\[(.*?)\]/);

        if (titleMatch && dateMatch) {
            posts.push({
                slug,
                title: titleMatch[1],
                date: dateMatch[1],
                description: descMatch ? descMatch[1] : '',
                tags: tagsMatch ? tagsMatch[1].split(',').map(t => t.trim()) : []
            });
        }
    }

    const sortedPosts = posts.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return {
        posts: sortedPosts
    };
}