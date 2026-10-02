<script lang="ts">
	import BlogCard from './BlogCard.svelte';
	
	/** @type {{ posts: { slug: string, title: string, date: string, description?: string, tags?: string[] }[] }}} */
	let { posts = [] } = $props();

	const lastThreePosts = $derived(posts.slice(0, 3));
</script>

<section class="mx-auto max-w-7xl px-4 py-8 sm:py-12 md:px-6 lg:mx-auto">
	<div class="rounded-2xl border border-white/4 bg-white/5 p-6 sm:p-8 md:mb-12 lg:mb-0 xl:flex xl:items-center xl:justify-between xl:gap-8">
		<h2 class="text-3xl font-bold text-white xl:text-[2.25rem]">Latest from the Blog</h2>
		<a href="/blog" class="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20 hover:translate-x-1">
			View all posts 
			<span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
		</a>
	</div>

	{#if lastThreePosts.length > 0}
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
		<p class="mx-auto max-w-md text-center text-lg text-white/60">No blog posts yet.</p>
	{/if}
</section>
