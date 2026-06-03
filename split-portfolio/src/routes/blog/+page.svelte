<script lang="ts">
	import type { PageData } from './$types';
	let { data }: PageData = $props();
</script>

<h1>Blog</h1>
<p>Welcome to my thoughts on backend engineering and Svelte.</p>

<ul class="post-list">
	{#each data.posts as post}
		<li>
			<!-- This link takes you to /blog/your-post-slug -->
			<a href="/blog/{post.slug}">{post.title}</a>
		</li>
	{/each}
</ul>

<style>
	.post-list {
		list-style: none;
		padding: 0;
	}
	.post-list li {
		margin: 1rem 0;
	}
	a {
		font-size: 1.2rem;
		text-decoration: none;
		color: #333;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
