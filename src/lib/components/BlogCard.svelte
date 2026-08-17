<script>
	import { resolve } from '$app/paths';
	/** @type {{ title: string, slug: string, date: Date, description: string, tags: string[] }} */
	let { title, slug, date, description, tags = [] } = $props();
	
	function formatDate(d) {
		return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
	}

</script>

<a href={resolve('/blog/[slug]', {slug: slug})} class="card">
	<div class="glow"></div>
	<div class="card-content">
		<header class="card-header">
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
		</header>

		<div class="card-body">
			<h2 class="title">{title}</h2>
			{#if description}
				<p class="description">{description}</p>
			{/if}
		</div>

		<footer class="card-footer">
			<span class="read-more">
				Read post 
				<span class="arrow">→</span>
			</span>
		</footer>
	</div>
</a>

<style>
	.card {
		display: block;
		position: relative;
		text-duration: none;
		text-decoration: none;
		/* Increased border radius for a less "square" look */
		border-radius: 24px; 
		/* Glassmorphism effect */
		background: rgba(255, 255, 255, 0.03);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid rgba(255, 255, 255, 0.08);
		
		overflow: hidden;
		transition: 
			transform 0.4s cubic-bezier(0.23, 1, 0.32, 1),
			border-color 0.4s ease,
			box-shadow 0.4s ease;
	}

	/* The "Glow" background effect */
	.glow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: radial-gradient(
			800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
			rgba(255, 255, 255, 0.06),
			transparent 40%
		);
		opacity: 0;
		transition: opacity 0.5s ease;
		pointer-events: none;
	}

	.card:hover {
		transform: translateY(-8px) scale(1.01);
		border-color: rgba(255, 255, 255, 0.2);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
	}

	.card:hover .glow {
		opacity: 1;
	}

	.card-content {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		/* This ensures the footer is always pushed to the bottom, 
		   helping with height consistency */
		min-height: 100%; 
	}

	.card-header {
		margin-bottom: 1.5rem;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	time {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: rgba(255, 255, 255, 0.4);
		font-weight: 500;
	}

	.tags {
		display: flex;
		gap: 0.5rem;
	}

	.tag {
		font-size: 0.65rem;
		padding: 0.25rem 0.75rem;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 100px; /* Pill shape */
		color: rgba(255, 255, 255, 0.6);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.card-body {
		flex-grow: 1; /* This pushes the footer down */
	}

	.title {
		font-size: 1.5rem;
		line-height: 1.3;
		color: #ffffff;
		margin: 0 0 0.75rem 0;
		transition: color 0.3s ease;
	}

	.card:hover .title {
		color: #fff; /* Slight brightness shift */
	}

	.description {
		font-size: 1rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.5);
		margin: 0;
	}

	.card-footer {
		margin-top: 2rem;
	}

	.read-more {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.3);
		transition: color 0.3s ease, gap 0.3s ease;
	}

	.arrow {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.card:hover .read-more {
		color: rgba(255, 255, 255, 0.9);
	}

	.card:hover .arrow {
		transform: translateX(5px);
	}
</style>
