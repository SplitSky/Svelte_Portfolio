import type { PageServerLoad } from './$types';
import matter from 'gray-matter';

export const load: PageServerLoad = async () => {
	// Updated for latest Vite: using query instead of as
	const postFiles = import.meta.glob('/src/lib/posts/*.md', { 
		query: '?raw', 
		import: 'default', 
		eager: true 
	});

	const posts = Object.entries(postFiles).map(([filepath, fileContent]) => {
		const slug = filepath.split('/').pop()?.replace('.md', '') || '';
		
		const { data } = matter(fileContent as string);

		return {
			slug,
			title: data.title || 'Untitled Post',
			date: data.date || new Date().toISOString()
		};
	});

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
};
