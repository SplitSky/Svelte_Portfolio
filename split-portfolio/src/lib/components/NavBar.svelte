<script>
	import { slide } from 'svelte/transition';
	import { fly } from 'svelte/transition';

	// State for mobile menu toggle
	let isOpen = false;

	const navLinks = [
		{ name: 'About', href: '/about' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Resume', href: '/resume' }
	];

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<nav
	class="sticky top-0 z-50 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
>
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo / Brand -->
			<div class="flex flex-shrink-0 items-center">
				<a href="/" class="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white">
					DEV<span class="text-indigo-600">.</span>PORTFOLIO
				</a>
			</div>

			<!-- Desktop Menu (Hidden on mobile) -->
			<div class="hidden space-x-8 md:flex">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
					>
						{link.name}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button (Hidden on desktop) -->
			<div class="flex items-center md:hidden">
				<button
					on:click={toggleMenu}
					type="button"
					class="text-zinc-600 hover:text-indigo-600 focus:outline-none dark:text-zinc-400"
					aria-label="Toggle menu"
				>
					<span class="sr-only">Open main menu</span>
					{#if !isOpen}
						<!-- Hamburger Icon -->
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="lag" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
						</svg>
					{:else}
						<!-- Close Icon -->
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Dropdown Menu -->
	{#if isOpen}
		<div
			transition:slide={{ duration: 300 }}
			class="border-b border-zinc-200 bg-white md:hidden dark:border-zinc-800 dark:bg-zinc-950"
		>
			<div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
				{#each navLinks as link}
					<a
						href={link.href}
						on:click={closeMenu}
						class="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 transition-all hover:bg-zinc-50 hover:text-indigo-600 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-indigo-400"
					>
						{link.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>

<style>
	/* Custom transitions for a smoother feel */
	:global(.transition-colors) {
		transition: color 0.2s ease-in-out;
	}
</style>
