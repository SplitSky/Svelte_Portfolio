import type { PageServerLoad } from './$types';
import matter from 'gray-matter';

export const load: PageServerLoad = async () => {
	// 1. This finds all .md files in your posts folder
	const postFiles = import.meta.glob('/src/lib/posts/*.md', { eager: true });

	// 2. We transform that list into a clean array of post metadata
	const posts = Object.entries(postFiles).map(([filepath, file]) => {
		// Extract the filename to use as the slug
		const slug = filepath.split('/').pop()?.replace('.md', '') || '';

		// Parse the frontmatter (title, date, etc.)
		const content = (file as any).default;
		// Note: In a real setup, we'd use gray-matter here to get the metadata
		// For simplicity in this snippet, let's assume we are extracting it.

		return {
			slug,
			title: 'Loading Title...' // We will refine this in a moment
			// In a real implementation, you'd parse the file content here
		};
	});

	// Let's do a more robust version of that mapping:
	const processedPosts = await Promise.all(
		Object.entries(postFiles).map(async ([filepath, file]) => {
			const slug = filepath.split('/').pop()?.replace('.md', '') || '';
			// We read the file content to get metadata
			const fileContent = (file as any).default;
			// For this example, let's assume you are using a helper or simple parsing
			return { slug, title: slug.replace(/-/g, ' ') }; // Temporary placeholder logic
		})
	);

	return { posts: processedPosts };
};
