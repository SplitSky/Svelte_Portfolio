<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta
		name="description"
		content={data.post.description}
	/>
</svelte:head>

<article>
	<h1>{data.post.title}</h1>
	<p>
		<small>{data.post.date}</small>
	</p>
	<p>{data.post.description}</p>\
	<hr />
</article>