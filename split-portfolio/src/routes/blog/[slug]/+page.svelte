<script lang="ts">
	import { marked } from 'marked';
	import type { PageData } from './$types';

	let { data }: PageData = $props();

	// Use a Svelte 5 Rune ($derived) to convert markdown to HTML
	// whenever the data changes.
	const htmlContent = $derived(marked.parse(data.post.content));
</script>

<article class="mx-auto max-w-2xl px-4 py-10">
	<header class="mb-8">
		<p class="text-sm text-gray-500">{data.post.date}</p>
		<h1 class="text-4xl font-bold">{data.post.title}</h1>
		<p class="mt-2 text-lg text-gray-600">{data.post.description}</p>
	</header>

	<hr class="my-8" />

	<!-- 
    The {@html} tag is the magic piece. 
    It tells Svelte: "This string contains HTML, please render it as real elements."
    The 'prose' class from Tailwind Typography makes this look beautiful.
  -->
	<div class="prose prose-slate lg:prose-xl dark:prose-invert">
		{@html htmlContent}
	</div>
</article>
