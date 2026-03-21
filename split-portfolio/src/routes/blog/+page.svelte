<script>
	// Dummy data – replace with real posts or load from .md files
	const posts = [
		{
			slug: 'first-post',
			title: 'First Post',
			date: '2024‑03‑01',
			summary: 'A brief look at my latest project.'
		},
		{
			slug: 'second-post',
			title: 'Second Post',
			date: '2024‑02‑20',
			summary: 'Thoughts on modern web development.'
		}
		// …add up to 10 posts before pagination kicks in
	];
</script>

<h1>Blog</h1>
{#each posts as post}
	<div class="card">
		<a href={`/blog/${post.slug}`} style="font-weight:bold;">
			{post.title}
		</a>
		<span>{post.date}</span>
	</div>
{/each}
