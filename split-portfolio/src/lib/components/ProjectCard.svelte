<script>
	/**
	 * @type {{
	 *   title: string,
	 *   description: string,
	 *   tags?: string[],
	 *   status?: 'live' | 'wip' | 'archived',
	 *   href?: string,        // external link to the project
	 *   blogSlug?: string,    // slug of a related blog post
	 *   github?: string,      // github URL
	 * }}
	 */
	let {
		title,
		description,
		tags = [],
		status = '',
		href = '',
		blogSlug = '',
		github = ''
	} = $props();

	const statusLabel = { live: 'Live', wip: 'In Progress', archived: 'Archived' };
</script>

<div class="card">
	<!-- Top beam accent -->
	<div class="beam"></div>

	<div class="card-body">
		<div class="header-row">
			<h3 class="title">{title}</h3>
			{#if status}
				<span class="status status--{status}">{statusLabel[status] ?? status}</span>
			{/if}
		</div>

		<p class="description">{description}</p>

		{#if tags.length > 0}
			<div class="tags">
				{#each tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		{/if}
	</div>

	{#if href || blogSlug || github}
		<div class="links">
			{#if href}
				<a {href} target="_blank" rel="noopener noreferrer" class="link link--primary">
					Visit project ↗
				</a>
			{/if}
			{#if github}
				<a href={github} target="_blank" rel="noopener noreferrer" class="link"> GitHub ↗ </a>
			{/if}
			{#if blogSlug}
				<a href="/blog/{blogSlug}" class="link"> Read post → </a>
			{/if}
		</div>
	{/if}
</div>

<style>
	.card {
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		background: linear-gradient(
			160deg,
			rgba(255, 255, 255, 0.05) 0%,
			rgba(255, 255, 255, 0.01) 100%
		);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		transition:
			border-color 0.2s ease,
			transform 0.2s ease;
		position: relative;
	}

	.card:hover {
		border-color: rgba(255, 255, 255, 0.22);
		transform: translateY(-2px);
	}

	/* The light beam accent at top */
	.beam {
		height: 1px;
		background: linear-gradient(
			90deg,
			transparent 0%,
			rgba(255, 255, 255, 0.4) 50%,
			transparent 100%
		);
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	.card:hover .beam {
		opacity: 1;
	}

	.card-body {
		padding: 1.5rem 1.75rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.header-row {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.75rem;
	}

	.title {
		font-family: 'DM Serif Display', serif;
		font-size: 1.2rem;
		font-weight: 400;
		color: #ffffff;
		margin: 0;
		line-height: 1.2;
	}

	.status {
		font-family: 'Inter', sans-serif;
		font-size: 0.65rem;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		border-radius: 3px;
		padding: 0.2rem 0.5rem;
		white-space: nowrap;
		flex-shrink: 0;
		margin-top: 0.1rem;
	}

	.status--live {
		border: 1px solid rgba(255, 255, 255, 0.25);
		color: rgba(255, 255, 255, 0.6);
	}

	.status--wip {
		border: 1px solid rgba(255, 255, 255, 0.15);
		color: rgba(255, 255, 255, 0.4);
	}

	.status--archived {
		border: 1px solid rgba(255, 255, 255, 0.08);
		color: rgba(255, 255, 255, 0.25);
	}

	.description {
		font-family: 'Inter', sans-serif;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.52);
		line-height: 1.65;
		margin: 0;
	}

	.tags {
		display: flex;
		gap: 0.35rem;
		flex-wrap: wrap;
		margin-top: 0.25rem;
	}

	.tag {
		font-size: 0.68rem;
		padding: 0.18rem 0.45rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 3px;
		color: rgba(255, 255, 255, 0.35);
		font-family: 'Inter', sans-serif;
		letter-spacing: 0.03em;
	}

	.links {
		display: flex;
		gap: 0;
		border-top: 1px solid rgba(255, 255, 255, 0.07);
	}

	.link {
		flex: 1;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.7rem 1rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.78rem;
		color: rgba(255, 255, 255, 0.35);
		text-decoration: none;
		letter-spacing: 0.03em;
		transition:
			color 0.15s,
			background 0.15s;
		border-right: 1px solid rgba(255, 255, 255, 0.07);
	}

	.link:last-child {
		border-right: none;
	}

	.link:hover {
		color: rgba(255, 255, 255, 0.85);
		background: rgba(255, 255, 255, 0.03);
	}

	.link--primary {
		color: rgba(255, 255, 255, 0.55);
	}

	.link--primary:hover {
		color: #ffffff;
	}
</style>
