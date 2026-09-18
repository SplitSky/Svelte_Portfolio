<script lang="ts">
	const techStack = [
		{ name: 'Python', category: 'Backend' },
		{ name: 'C++', category: 'Systems' },
		{ name: 'Rust', category: 'Systems' },
		{ name: 'SQL', category: 'Database' },
		{ name: 'FastAPI', category: 'Backend' },
		{ name: 'PySpark', category: 'Distributed' },
		{ name: 'MongoDB', category: 'Database' },
		{ name: 'PostgreSQL', category: 'Database' },
		{ name: 'AWS', category: 'Cloud' },
		{ name: 'Azure', category: 'Cloud' },
		{ name: 'Docker', category: 'DevOps' },
		{ name: 'Kubernetes', category: 'DevOps' },
	];

	const categories = Array.from(new Set(techStack.map((t) => t.category)));

	let hoveredTech = $state<string | null>(null);
</script>

<div class="tech-stack-section">
	<h2>Tech Stack</h2>
	
	<div class="stack-grid">
		{#each categories as category}
			<div class="category-column">
				<h3>{category}</h3>
				<ul class="tech-list">
					{#each techStack.filter((t) => t.category === category) as tech}
							<span class="tech-name">{tech.name}</span>
					{/each}
				</ul>
			</div>
		{/each}
	</div>

	<style>
		.tech-stack-section {
			margin: 4rem auto;
			max-width: 1000px;
		}

		h2 {
			color: #00ff41;
			font-family: 'Inter', sans-serif;
			font-size: 2rem;
			margin-bottom: 3rem;
			border-left: 4px solid #00ff41;
			padding-left: 1.5rem;
		}

		.stack-grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			gap: 3rem;
		}

		.category-column h3 {
			color: var(--text-main);
			font-size: 1.1rem;
			margin-bottom: 1.5rem;
			padding-bottom: 0.75rem;
			border-bottom: 1px solid var(--border-color);
			text-transform: uppercase;
			letter-spacing: 0.05em;
		}

		.tech-list {
			list-style: none;
			padding: 0;
			margin: 0;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		.tech-item {
			color: var(--text-muted);
			font-size: 1.25rem;
			cursor: default;
			padding: 0.5rem 0.75rem;
			border-radius: 6px;
			transition: all 0.3s ease;
			position: relative;
			overflow: hidden;
		}

		.tech-item::before {
			content: '';
			position: absolute;
			left: -100%;
			top: 50%;
			width: 100px;
			height: 2px;
			background: linear-gradient(90deg, transparent, #00ff41);
			transition: left 0.5s ease;
		}

		.tech-item.active::before {
			left: -100%;
			animation: sweep 0.6s ease-out forwards;
		}

		@keyframes sweep {
			to { left: 100%; }
		}

		.tech-item:hover {
			color: #00ff41;
			padding-left: 1rem;
			background: rgba(0, 255, 65, 0.05);
		}

		@media (max-width: 768px) {
			h2 { font-size: 1.5rem; }
			
			.stack-grid {
				grid-template-columns: repeat(2, 1fr);
				gap: 2rem;
			}
		}

		@media (max-width: 480px) {
			.stack-grid {
				grid-template-columns: 1fr;
			}
		}
	</style>
</div>