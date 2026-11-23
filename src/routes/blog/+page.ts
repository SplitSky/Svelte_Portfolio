export const prerender = true;

export const load = async () => {
    const modules = import.meta.glob('/src/posts/*.md', {eager: true});
    const posts = Object.entries(modules).map(([path, mod]: [string, any]) => ({
        slug: path.split('/').pop()!.replace('.md', ''),
        ...mod.metadata
    }));
    return { posts };
};