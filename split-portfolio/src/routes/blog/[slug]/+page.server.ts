import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	// 1. Define the path to your post
	// We use absolute paths via process.cwd() to ensure it works everywhere
	const filePath = path.resolve(`src/lib/posts/${slug}.md`);

	try {
		// 2. Read the file as raw, plain text
		const fileContent = fs.readFileSync(filePath, 'utf-8');

		// 3. Use gray-matter to split metadata (frontmatter) from the body
		const { data, content } = matter(fileContent);

		return {
			post: {
				...data, // This contains title, date, description
				content: content // This is the raw markdown text string
			}
		};
	} catch (e) {
		console.error(e);
		throw error(404, 'Post not found');
	}
};
