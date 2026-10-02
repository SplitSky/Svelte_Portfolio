<script lang="ts">
	import { resolve } from '$app/paths';
	/** @type {{ title: string, slug: string, date: Date, description: string, tags: string[] }} */
	let { title, slug, date, description, tags = [] } = $props();
	
	function formatDate(d: Date) {
		return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
	}

</script>

<a href={resolve('/blog/[slug]', {slug: slug})} class="group relative rounded-lg">
	<div class="flex min-h-full flex-col p-8">
		<header class="mb-6">
			<div class="flex flex-wrap items-center gap-3">
				<time datetime={date.toISOString()} class="text-xs font-medium uppercase tracking-widest text-white/40">{formatDate(date)}</time>
				{#if tags.length > 0}
					<div class="flex gap-2">
						{#each tags as tag}
							<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-large text-white/60">{tag}</span>
						{/each}
					</div>
				{/if}
			</div>
		</header>

		<div class="flex-grow">
			<h2 class="mb-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-white">{title}</h2>
			{#if description}
				<p class="text-lg leading-relaxed text-white/50">{description}</p>
			{/if}
		</div>

		<footer class="mt-8">
			<span class="inline-flex items-center gap-2 text-sm font-bold text-white/30 transition-all duration-300 group-hover:text-white group-hover:[&_span]:translate-x-1 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]">
				Read post 
				<span>→</span>
			</span>
		</footer>
	</div>
</a>

<style>
	a {
		position: relative;
	}
	a:hover::before {
		opacity: 1;
	}
</style>
