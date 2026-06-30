import type { PageLoad } from './$types';

// pre render
export const prerender = true;

export const load: PageLoad = async () => {
    const modules = import.meta.glob('../../lib/posts/*.md', { 
        query: '?raw', 
        import: 'default', 
        eager: true 
    });
    
    const posts = [];

    for (const path in modules) {
        const content = modules[path] as string;
        const slug = path.replace('./', '').replace('.md', '');
        const titleMatch = content.match(/title: "(.*)"/);
        const dateMatch = content.match(/date: "(.*)"/);

        if (titleMatch && dateMatch) {
            posts.push({
                slug,
                title: titleMatch[1],
                date: dateMatch[1]
            });
        }
    }

    // sort by date
    const sortedPosts = posts.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return {
        posts: sortedPosts
    };
}
