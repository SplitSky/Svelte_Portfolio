<script lang="ts">
	export interface NavItem {
		name: string;
		href: string;
	}

	export let items: NavItem[] = [
		{name: "Home", href="/"},
		{name: "About", href="/about"},
		{name: "Blog", href="/blog"},
		{name: "Projects", href="/projects"},
	];
</script>

<nav class="bg-gray-800 text-white px-4 py-3">
	<div class="max-w-7xl mx-auto flex items-center justify-between">
		<a href="/" class="font-bold text-xl">Portfolio</a>
			<ul class="flex space-x-6">
				{#each items as item}
				<li>
					<a href={item.href} class="hover:text-gray-300 transition-colors duration-200" class:font-semibold{$page.url.pathname=== item.href}>
					{item.name}
					</a>
				</li>
				{/each}
			</ul>
		</a>
	</div>
</nav>
