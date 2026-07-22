import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const all_posts = import.meta.glob('$lib/posts/*.md', { 
        query: '?raw', 
        import: 'default', 
        eager: true 
    });

	const post = all_posts[]
	const { title, date, description } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		description
	};
};