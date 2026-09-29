<script lang="ts">
	import BlogCard from './BlogCard.svelte';
	
	/** @type {{ posts: { slug: string, title: string, date: string, description?: string, tags?: string[] }[] }}} */
	let { posts = [] } = $props();

	const lastThreePosts = $derived(posts.slice(0, 3));
</script>

<section class="blog-gallery">
	<div class="gallery-header">
		<h2 class="section-title">Latest from the Blog</h2>
		<a href="/blog" class="view-all-link">View all posts →</a>
	</div>

	{#if lastThreePosts.length > 0}
		<div class="posts-grid">
			{#each lastThreePosts as post (post.slug)}
				<BlogCard 
					title={post.title}
					slug={post.slug}
					date={new Date(post.date)}
					description={post.description || ''}
					tags={post.tags || []}
				/>
			{/each}
		</div>
	{:else}
		<p class="no-posts">No blog posts yet.</p>
	{/if}
</section>

<style>
	.blog-gallery {
		margin: 4rem 0;
		padding: 2rem;
		background: rgba(255, 255, 255, 0.01);
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.04);
	}

	.gallery-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.section-title {
		font-size: 1.75rem;
		color: var(--text-main);
		margin: 0;
	}

	.view-all-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		color: var(--accent);
		text-decoration: none;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	.view-all-link:hover {
		background: rgba(255, 255, 255, 0.1);
		transform: translateX(4px);
	}

	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 1.5rem;
	}

	.no-posts {
		text-align: center;
		color: var(--text-muted);
		font-size: 1.125rem;
		padding: 2rem;
	}

	@media (max-width: 768px) {
		.blog-gallery {
			margin: 2rem 0;
			padding: 1rem;
		}

		.gallery-header {
			flex-direction: column;
			align-items: flex-start;
		}

		.posts-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
