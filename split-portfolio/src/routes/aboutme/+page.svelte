<script>
	// --- STATE (Svelte 5 Runes) ---
	// Using a boolean to toggle between 'Professional' and 'Personal' views
	let viewMode = $state('professional');

	const professionalBio = {
		title: 'Architecting with Precision',
		content:
			'As a Data Architect, I specialize in building the invisible foundations that power modern enterprises. My approach is rooted in the scientific method: rigorous testing, scalable design, and an obsession with data integrity.',
		philosophy: ['Security by Design', 'Scalable Automation', 'Single Source of Truth']
	};

	const personalBio = {
		title: 'Beyond the Pipelines',
		content:
			'Before moving into data architecture, I studied Physics at the University of Manchester. This trained me to look at complex systems and find the underlying patterns.',
		interests: ['Chess Strategy', 'Computational Physics', 'Linux Kernel Exploration']
	};

	function toggleView() {
		viewMode = viewMode === 'professional' ? 'personal' : 'professional';
	}
</script>

<main class="about-page">
	<!-- HERO SECTION -->
	<header class="about-hero">
		<div class="badge">The Story So Far</div>
		<h1>Building systems, <span class="text-accent">one layer at a time.</span></h1>
	</header>

	<!-- INTERACTIVE TOGGLE SECTION -->
	<section class="interaction-section">
		<button class="toggle-btn" onclick={toggleView}>
			Switch to {viewMode === 'professional' ? 'Personal' : 'Professional'} Perspective
		</button>

		<div class="content-card">
			{#if viewMode === 'professional'}
				<div class="fade-in">
					<h2>{professionalBio.title}</h2>
					<p>{professionalBio.content}</p>

					<div class="pillars">
						{#each professionalBio.philosophy as pillar}
							<span class="pillar-tag">{pillar}</span>
						{/each}
					</div>
				</div>
			{:else}
				<div class="fade-in">
					<h2>{personalBio.title}</h2>
					<p>{personalBio.content}</p>

					<div class="pillars">
						{#each personalBio.interests as interest}
							<span class="pillar-tag">{interest}</span>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</section>

	<!-- STATIC INFO SECTION (Education/Background) -->
	<section class="info-grid">
		<div class="info-block">
			<h3 class="text-accent">Foundation</h3>
			<h4>MPhys Physics</h4>
			<p>
				University of Manchester. Developed the mathematical rigor required for high-dimensional
				data analysis and complex system modeling.
			</p>
		</div>

		<div class="info-block">
			<h3 class="text-accent">Approach</h3>
			<h4>Security & Governance</h4>
			<p>
				Implementing robust CI/CD and Azure infrastructures where security is not an afterthought,
				but a core component of the deployment lifecycle.
			</p>
		</div>
	</section>
</main>

<style>
	.about-page {
		padding: 4rem 0;
		max-width: 800px;
		margin: 0 auto;
	}

	/* HERO */
	.about-hero {
		text-align: center;
		margin-bottom: 5rem;
	}

	h1 {
		font-size: 3rem;
		line-height: 1.1;
	}

	/* INTERACTIVE SECTION */
	.interaction-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		margin-bottom: 6rem;
	}

	.toggle-btn {
		background: transparent;
		border: 1px solid var(--accent);
		color: var(--accent);
		padding: 0.8rem 1.5rem;
		border-radius: 30px;
		font-weight: 600;
		transition: all 0.3s ease;
	}

	.toggle-btn:hover {
		background: var(--accent);
		color: white;
	}

	.content-card {
		background: var(--card-bg);
		border: 1px solid var(--border-color);
		padding: 3rem;
		border-radius: 24px;
		width: 100%;
		min-height: 250px;
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
	}

	p {
		font-size: 1.1rem;
		color: var(--text-muted);
		margin-bottom: 2rem;
	}

	/* PILLARS/TAGS */
	.pillars {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.pillar-tag {
		background: var(--accent-soft);
		color: var(--accent);
		padding: 0.4rem 1rem;
		border-radius: 8px;
		font-size: 0.85rem;
		font-weight: bold;
		border: 1px solid rgba(168, 85, 247, 0.2);
	}

	/* INFO GRID */
	.info-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		border-top: 1px solid var(--border-color);
		padding-top: 4rem;
	}

	.info-block h4 {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
	}

	.info-block p {
		font-size: 0.95rem;
	}

	/* ANIMATION */
	.fade-in {
		animation: fadeIn 0.5s ease-out forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* RESPONSIVE */
	@media (max-width: 600px) {
		.info-grid {
			grid-template-columns: 1fr;
		}
		h1 {
			font-size: 2.2rem;
		}
		.content-card {
			padding: 1.5rem;
		}
	}
</style>
