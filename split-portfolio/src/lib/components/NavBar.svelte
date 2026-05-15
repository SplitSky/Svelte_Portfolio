<nav>
	<div class="container">
		<div class="logo-section">
			<a href="/" class="logo">Split CV<span class="accent">.</span></a>
		</div>
		<div class="nav-links">
			<a href="/aboutme">About me</a>
			<a href="#blog">Blog</a>
			<a href="#resume">Experience</a>
			<a href="#projects">Projects</a>
			<a href="mailto:TomaszNeska@proton.me" class="contact-btn">Get in Touch</a>
		</div>
	</div>
</nav>

<style>
	nav {
		width: 100%;
		border-bottom: 1px solid var(--border-color);
		background-color: var(--bg-color);
	}

	.container {
		/* Match this to your main max-width */
		max-width: 1000px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: bold;
		text-decoration: none;
		color: white;
	}

	.accent {
		color: var(--accent);
	}

	.nav-links {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.nav-links a {
		text-decoration: none;
		color: var(--text-muted);
		transition: 0.3s;
		font-size: 0.9rem;
	}

	.nav-links a:hover {
		color: var(--accent);
	}

	.contact-btn {
		border: 1px solid var(--accent);
		padding: 0.5rem 1.2rem;
		border-radius: 20px;
		color: var(--accent) !important;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.container {
			flex-direction: column;
			gap: 1rem;
			padding: 1rem;
		}
	}
</style>
