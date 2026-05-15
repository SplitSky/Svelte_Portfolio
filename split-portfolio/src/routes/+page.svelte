<script>
	// ... All your $state and logic stays exactly as you had it ...
	let name = $state('Tomasz Neska');
	let title = $state('Senior Software Engineer - Data Architect');
	// ... (rest of your existing code)
</script>

<header class="hero">
	<div class="badge">Available for projects</div>
	<h1>{name}</h1>
	<p class="subtitle">{title}</p>
	<div class="hero-glow"></div>
</header>

<!-- All your sections (Experience, Projects, Skills) stay here -->
<!-- ... (rest of your existing HTML) -->

<style>
	/* ONLY styles unique to this page */
	.hero {
		position: relative;
		padding: 6rem 0;
		text-align: center;
	}

	h1 {
		font-size: clamp(3rem, 10vw, 5rem);
		margin: 0;
		letter-spacing: -2px;
		line-height: 1;
		background: linear-gradient(to bottom, #fff 60%, #666);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.hero-glow {
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 300px;
		height: 300px;
		background: var(--accent);
		filter: blur(120px);
		opacity: 0.15;
		z-index: -1;
	}

	/* Project Cards and Section Titles stay here... */
	.section-title {
		border-left: 4px solid var(--accent);
		padding-left: 1rem;
		margin-bottom: 2rem;
	}

	.card {
		background: #111;
		border: 1px solid var(--border-color);
		padding: 2rem;
		border-radius: 16px;
		transition: 0.3s;
	}
</style>
