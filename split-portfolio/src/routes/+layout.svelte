<script>
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />

<main class="container">
	<slot />
</main>

<style global>
	:root {
		--bg: #000;
		--text: #fff;
		--card-bg: #111;
	}

	body,
	html {
		margin: 0;
		padding: 0;
		font-family: system-ui, sans-serif;
		background: var(--bg);
		color: var(--text);
		min-height: 100vh;
	}
	.container {
		max-width: 800px;
		margin: auto;
		padding: 1rem;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}

	/* Simple card style */
	.card {
		background: var(--card-bg);
		padding: 1rem;
		border-radius: 0.5rem;
		margin-bottom: 1rem;
	}
</style>
