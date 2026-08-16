<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';

	const name = 'Tomasz Neska';
	let { children } = $props();
</script>

<div class="app-container">
	<NavBar />

	<main>
		{@render children()}
	</main>

	<footer>
		<p>&copy; {new Date().getFullYear()} {name} • Manchester, UK</p>
	</footer>
</div>

<style>
	.app-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1; /* Pushes footer to bottom */
	}

	footer {
		padding: 0.5rem 2rem;
		text-align: center;
		color: #555;
		border-top: 1px solid var(--border-color);
	}
</style>
