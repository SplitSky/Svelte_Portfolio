<script>
	// --- DATA & STATE (Svelte 5 Runes) ---
	let name = $state('Tomasz Neska');
	let role = $state('Full Stack Developer');
	let bio = $state('Building digital experiences with precision and passion.');

	// An array of objects using $state.
	// In Svelte 5, updating a property inside an object in an array is reactive!
	let projects = $state([
		{
			id: 1,
			title: 'Nebula Dashboard',
			description: 'A high-performance data visualization tool.',
			likes: 0
		},
		{
			id: 2,
			title: 'Aura Mobile App',
			description: 'Social networking app with focus on privacy.',
			likes: 0
		},
		{
			id: 3,
			title: 'Zenith E-commerce',
			description: 'Modern shopping experience using SvelteKit.',
			likes: 0
		}
	]);

	let skills = ['Svelte 5', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'];

	// Derived state: automatically updates whenever project likes change
	let totalLikes = $derived(projects.reduce((acc, p) => acc + p.likes, 0));

	function handleLike(id) {
		const project = projects.find((p) => p.id === id);
		if (project) {
			project.likes += 1;
		}
	}
</script>

<main>
	<!-- NAVIGATION -->
	<nav>
		<div class="logo">AD<span>.</span></div>
		<div class="nav-links">
			<a href="#work">Work</a>
			<a href="#about">About</a>
			<a href="#contact" class="btn-small">Contact</a>
		</div>
	</nav>

	<!-- HERO SECTION -->
	<header class="hero">
		<div class="badge">Available for freelance</div>
		<h1>{name}</h1>
		<p class="subtitle">{role}</p>
		<div class="hero-glow"></div>
	</header>

	<!-- PROJECTS SECTION -->
	<section id="work" class="section">
		<h2 class="section-title">Featured Projects</h2>
		<div class="project-grid">
			{#each projects as project}
				<div class="card">
					<h3>{project.title}</h3>
					<p>{project.description}</p>
					<div class="card-footer">
						<button onclick={() => handleLike(project.id)} class="like-btn">
							💜 {project.likes}
						</button>
						<span class="tag">Case Study</span>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- SKILLS SECTION -->
	<section id="about" class="section">
		<h2 class="section-title">Skills & Expertise</h2>
		<div class="skills-container">
			{#each skills as skill}
				<span class="skill-badge">{skill}</span>
			{/each}
		</div>
		<p class="bio-text">{bio}</p>
	</section>

	<!-- STATS BAR (Demonstrating $derived) -->
	<div class="stats-bar">
		<p>Total Project Loves: <strong>{totalLikes}</strong></p>
	</div>

	<!-- FOOTER -->
	<footer>
		<p>&copy; {new Date().getFullYear()} {name}. Built with Svelte 5.</p>
	</footer>
</main>

<style>
	/* --- THEME VARIABLES --- */
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #0a0a0a; /* Deep Black */
		color: #ffffff; /* White Text */
		font-family:
			'Inter',
			-apple-system,
			BlinkMacSystemFont,
			sans-serif;
		line-height: 1.6;
	}

	/* --- LAYOUT --- */
	main {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.section {
		padding: 5rem 0;
	}

	/* --- NAVIGATION --- */
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 0;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 800;
		letter-spacing: -1px;
	}

	.logo span {
		color: #a855f7; /* Purple Accent */
	}

	.nav-links {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.nav-links a {
		text-decoration: none;
		color: #ccc;
		font-size: 0.9rem;
		transition: color 0.3s;
	}

	.nav-links a:hover {
		color: #a855f7;
	}

	.btn-small {
		padding: 0.5rem 1rem;
		border: 1px solid #a855f7;
		border-radius: 20px;
		color: #a855f7 !important;
	}

	/* --- HERO SECTION --- */
	.hero {
		position: relative;
		padding: 8rem 0 4rem;
		text-align: center;
	}

	.badge {
		display: inline-block;
		background: rgba(168, 85, 247, 0.1);
		color: #a855f7;
		padding: 0.5rem 1rem;
		border-radius: 100px;
		font-size: 0.8rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
		border: 1px solid rgba(168, 85, 247, 0.3);
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

	.subtitle {
		font-size: 1.25rem;
		color: #888;
		margin-top: 1rem;
	}

	/* Purple glow effect behind hero */
	.hero-glow {
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 300px;
		height: 300px;
		background: #a855f7;
		filter: blur(120px);
		opacity: 0.15;
		z-index: -1;
	}

	/* --- PROJECTS SECTION --- */
	.section-title {
		font-size: 2rem;
		margin-bottom: 3rem;
		border-left: 4px solid #a855f7;
		padding-left: 1rem;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.card {
		background: #161616;
		border: 1px solid #222;
		padding: 2rem;
		border-radius: 16px;
		transition:
			transform 0.3s,
			border-color 0.3s;
	}

	.card:hover {
		transform: translateY(-10px);
		border-color: #a855f7;
	}

	.card h3 {
		margin: 0 0 1rem 0;
		font-size: 1.4rem;
	}

	.card p {
		color: #aaa;
		font-size: 0.95rem;
		margin-bottom: 2rem;
	}

	.card-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.like-btn {
		background: transparent;
		border: none;
		color: #fff;
		cursor: pointer;
		font-size: 1rem;
		transition: transform 0.2s;
	}

	.like-btn:active {
		transform: scale(1.4);
	}

	.tag {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: #a855f7;
		font-weight: bold;
	}

	/* --- SKILLS SECTION --- */
	.skills-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-bottom: 2rem;
	}

	.skill-badge {
		background: #1a1a1a;
		padding: 0.5rem 1.2rem;
		border-radius: 8px;
		font-size: 0.9rem;
		color: #ddd;
		border: 1px solid #333;
	}

	.bio-text {
		color: #888;
		max-width: 600px;
	}

	/* --- FOOTER & STATS --- */
	.stats-bar {
		background: #161616;
		padding: 1rem;
		text-align: center;
		border-top: 1px solid #222;
		border-bottom: 1px solid #222;
		margin: 4rem 0;
	}

	.stats-bar strong {
		color: #a855f7;
	}

	footer {
		text-align: center;
		padding: 4rem 0;
		color: #444;
		font-size: 0.8rem;
	}
</style>
