<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
    
	let { data } = $props();
    const posts = $derived(data.posts || []);
</script>

<h1 class="mb-10 text-3xl font-bold pb-8 pt-6">Technical Blog</h1>

<ul class="post-list">
	{#each posts as post}
		<li>
			<BlogCard
				title={post.title}
				slug={post.slug}
				date={new Date(post.date)}
				description={post.description}
				tags={post.tags}
			/>
		</li>
	{/each}
</ul>

{#if posts.length === 0}
    <p>No posts available.</p>
{/if}

<style>
	.post-list {
		list-style: none;
		padding: 0;
	}
	.post-list li {
		margin-bottom: 1.5rem;
	}
</style>
