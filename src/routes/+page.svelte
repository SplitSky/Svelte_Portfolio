<script>
	let name = $state('Tomasz Neska');
	let title = $state('Senior Software Engineer - Data Architect');
</script>

<header class="hero">
	<div class="badge">Available for projects</div>
	<h1>{name}</h1>
	<p class="subtitle">{title}</p>
	<div class="hero-glow"></div>
</header>

<style>
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
		background-clip: text;
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

</style>
