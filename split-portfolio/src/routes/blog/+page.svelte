<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import type { PageProps } from './$lib/types'; // Ensure path is correct
    
	let { data }: PageProps = $props();
    
    // SAFETY: Fallback to empty array if posts are missing
    const posts = $derived(data.posts || []);
</script>

<h1 class="mb-6 text-3xl font-bold">Technical Blog</h1>

<ul class="post-list">
	{#each posts as post}
		<!-- FIX: Wrapped in <li> for valid HTML -->
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
    /* Add margin to the list item so cards don't touch */
	.post-list li {
		margin-bottom: 1.5rem;
	}
</style>
