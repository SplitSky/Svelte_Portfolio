<script>
	/** @type {{ title: string, slug: string, date: Date, description: string, tags: string[] }} */
	let { title, slug, date, description, tags = [] } = $props();

	function formatDate(d) {
		return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>

<a href="/blog/{slug}" class="card">
	<div class="card-inner">
		<div class="meta">
			<time datetime={date.toISOString()}>{formatDate(date)}</time>
			{#if tags.length > 0}
				<div class="tags">
					{#each tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			{/if}
		</div>
		<h2 class="title">{title}</h2>
		{#if description}
			<p class="description">{description}</p>
		{/if}
		<span class="read-more">Read post →</span>
	</div>
</a>

<style>
	.card {
		display: block;
		text-decoration: none;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		background: linear-gradient(
			135deg,
			rgba(255, 255, 255, 0.04) 0%,
			rgba(255, 255, 255, 0.01) 100%
		);
		transition:
			border-color 0.2s ease,
			background 0.2s ease,
			transform 0.2s ease;
		position: relative;
		overflow: hidden;
	}

	/* The signature "light beam" edge accent */
	.card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	.card:hover {
		border-color: rgba(255, 255, 255, 0.25);
		background: linear-gradient(
			135deg,
			rgba(255, 255, 255, 0.07) 0%,
			rgba(255, 255, 255, 0.02) 100%
		);
		transform: translateY(-2px);
	}

	.card:hover::before {
		opacity: 1;
	}

	.card-inner {
		padding: 1.75rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	time {
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.4);
		letter-spacing: 0.05em;
		font-family: 'Inter', sans-serif;
		text-transform: uppercase;
	}

	.tags {
		display: flex;
		gap: 0.4rem;
		flex-wrap: wrap;
	}

	.tag {
		font-size: 0.7rem;
		padding: 0.2rem 0.5rem;
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 3px;
		color: rgba(255, 255, 255, 0.45);
		font-family: 'Inter', sans-serif;
		letter-spacing: 0.04em;
	}

	.title {
		font-family: 'DM Serif Display', serif;
		font-size: 1.5rem;
		font-weight: 400;
		color: #ffffff;
		line-height: 1.25;
		margin: 0;
	}

	.description {
		font-family: 'Inter', sans-serif;
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.55);
		line-height: 1.6;
		margin: 0;
	}

	.read-more {
		font-family: 'Inter', sans-serif;
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.35);
		letter-spacing: 0.04em;
		margin-top: 0.25rem;
		transition: color 0.2s ease;
	}

	.card:hover .read-more {
		color: rgba(255, 255, 255, 0.75);
	}
</style>
