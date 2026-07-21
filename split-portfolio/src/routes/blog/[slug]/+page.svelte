<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>

<h1>{data.post.title}</h1>

{@html data.post.html}