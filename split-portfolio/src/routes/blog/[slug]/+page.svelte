<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.post.title}</title>
	{#if data.post.description}
		<meta name="description" content={data.post.description} />
	{/if}
</svelte:head>

<article>
	<header>
		<h1>{data.post.title}</h1>
		<time datetime={data.post.date}>
			{new Date(data.post.date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</time>

		{#if data.post.tags?.length}
			<ul class="tags">
				{#each data.post.tags as tag}
					<li>{tag}</li>
				{/each}
			</ul>
		{/if}
	</header>

	<div class="content">
		{@html data.post.html}
	</div>
</article>

<style>
	.tags {
		display: flex;
		gap: 0.5rem;
		list-style: none;
		padding: 0;
		margin: 0.5rem 0 0;
	}

	.tags li {
		font-size: 0.85rem;
		padding: 0.15rem 0.6rem;
		border-radius: 999px;
		background: var(--tag-bg, #eee);
	}

	time {
		display: block;
		color: var(--muted, #666);
		font-size: 0.9rem;
	}
</style>