import { error } from '@sveltejs/kit';
import matter from 'gray-matter';
import { marked } from 'marked';

const posts = import.meta.glob('$lib/posts/*.md', {
	query: '?raw',
	import: 'default'
});

export async function load({ params }) {
	const path = `/src/lib/posts/${params.slug}.md`;

	const loader = posts[path];

	if (!loader) {
		throw error(404, 'Post not found');
	}

	const markdown = await loader();

	const { data, content } = matter(markdown);

	return {
		post: {
			slug: params.slug,
			...data,
			html: marked.parse(content)
		}
	};
}