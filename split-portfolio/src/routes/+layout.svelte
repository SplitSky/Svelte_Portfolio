<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<!-- Import Tailwind CSS once -->
<link rel="stylesheet" href="/app.css" />

<div class="flex min-h-screen flex-col bg-gray-100 text-gray-900">
	<!-- Navigation bar at the top -->
	<header class="flex items-center justify-between bg-gray-800 px-8 py-4 shadow-sm">
		<h1 class="text-xl font-semibold">Portfolio site</h1>
		<nav class="space-x-6">
			<a href="/" class="text-indigo-400 transition-colors duration-200 hover:text-indigo-200"
				>Home</a
			>
			<a href="/about" class="text-indigo-400 transition-colors duration-200 hover:text-indigo-200"
				>About</a
			>
			<a
				href="/contact"
				class="text-indigo-400 transition-colors duration-200 hover:text-indigo-200">Contact</a
			>
		</nav>
	</header>

	<!-- Page content goes in this slot -->
	<main class="container mx-auto flex-grow px-4 py-8">
		<slot />
	</main>

	<!-- Optional footer -->
	<footer class="bg-gray-800 py-4 text-center text-white">
		© {new Date().getFullYear()} Tomasz Neska
	</footer>
</div>
