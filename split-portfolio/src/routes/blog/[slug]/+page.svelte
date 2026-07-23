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
			<ul class="tags text-black">
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
	.content :global(h1) {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 2rem 0 1rem;
	}

	.content :global(h2) {
		font-size: 2rem;
		font-weight: 600;
		margin: 1.75rem 0 0.75rem;
	}

	.content :global(h3) {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 1.5rem 0 0.5rem;
	}

	.content :global(p) {
		margin: 1rem 0;
		line-height: 1.7;
	}

	.content :global(ul),
	.content :global(ol) {
		margin: 1rem 0;
		padding-left: 2rem;
	}

	.content :global(li) {
		margin: 0.4rem 0;
	}

	.content :global(a) {
		color: dodgerblue;
		text-decoration: underline;
	}

	.content :global(pre) {
		padding: 1rem;
		border-radius: 8px;
		background: #222;
		color: #fff;
		overflow-x: auto;
	}

	.content :global(code) {
		font-family: monospace;
	}

	.content :global(blockquote) {
		border-left: 4px solid #ccc;
		padding-left: 1rem;
		margin: 1rem 0;
		font-style: italic;
	}
</style>