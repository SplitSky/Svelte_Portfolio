<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<h1 class="mb-6 text-3xl font-bold">Technical Blog</h1>

<ul class="post-list">
	{#each data.posts as post}
		<li>
			<a href="/blog/{post.slug}" class="post-link">
				<span class="post-title">{post.title}</span>
				<span class="post-date">{new Date(post.date).toLocaleDateString()}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	.post-list {
		list-style: none;
		padding: 0;
	}
	.post-list li {
		margin-bottom: 1.5rem;
	}
	.post-link {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: #222;
		transition: opacity 0.2s;
	}
	.post-link:hover {
		opacity: 0.7;
	}
	.post-title {
		font-size: 1.25rem;
		font-weight: 600;
	}
	.post-date {
		font-size: 0.875rem;
		color: #666;
	}
</style>
