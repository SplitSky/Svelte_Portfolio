<script>
	/**
	 * @type {{
	 *   year: string,
	 *   title: string,
	 *   company: string,
	 *   location?: string,
	 *   description: string,
	 *   tags?: string[],
	 *   current?: boolean
	 * }}
	 */
	let { year, title, company, location = '', description, tags = [], current = false } = $props();
</script>

<div class="item" class:current>
	<!-- Left: year + connector line -->
	<div class="timeline-col">
		<div class="node">
			<div class="dot"></div>
		</div>
		<div class="line"></div>
	</div>

	<!-- Right: content -->
	<div class="content">
		<div class="year-label">{year}</div>
		<h3 class="title">{title}</h3>
		<div class="company-row">
			<span class="company">{company}</span>
			{#if location}
				<span class="location">· {location}</span>
			{/if}
			{#if current}
				<span class="badge">Current</span>
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
</div>

<style>
	.item {
		display: grid;
		grid-template-columns: 3.5rem 1fr;
		gap: 0 1.5rem;
		position: relative;
	}

	/* Timeline column */
	.timeline-col {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.node {
		width: 3.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 0.25rem;
		flex-shrink: 0;
	}

	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.5);
		background: #000;
		position: relative;
		z-index: 1;
		transition:
			background 0.2s,
			border-color 0.2s;
	}

	.item.current .dot {
		background: #ffffff;
		border-color: #ffffff;
		box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
	}

	.line {
		flex: 1;
		width: 1px;
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.03));
		margin-top: 0.4rem;
		min-height: 1.5rem;
	}

	/* Content */
	.content {
		padding-bottom: 2.5rem;
	}

	.year-label {
		font-family: 'Inter', sans-serif;
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.35);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		margin-bottom: 0.35rem;
	}

	.title {
		font-family: 'DM Serif Display', serif;
		font-size: 1.3rem;
		font-weight: 400;
		color: #ffffff;
		margin: 0 0 0.3rem;
		line-height: 1.2;
	}

	.company-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-bottom: 0.75rem;
	}

	.company {
		font-family: 'Inter', sans-serif;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.6);
		font-weight: 500;
	}

	.location {
		font-family: 'Inter', sans-serif;
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.3);
	}

	.badge {
		font-family: 'Inter', sans-serif;
		font-size: 0.65rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 3px;
		padding: 0.15rem 0.4rem;
		color: rgba(255, 255, 255, 0.55);
	}

	.description {
		font-family: 'Inter', sans-serif;
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.55);
		line-height: 1.65;
		margin: 0 0 0.75rem;
	}

	.tags {
		display: flex;
		gap: 0.4rem;
		flex-wrap: wrap;
	}

	.tag {
		font-size: 0.7rem;
		padding: 0.2rem 0.5rem;
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 3px;
		color: rgba(255, 255, 255, 0.38);
		font-family: 'Inter', sans-serif;
		letter-spacing: 0.03em;
	}
</style>
