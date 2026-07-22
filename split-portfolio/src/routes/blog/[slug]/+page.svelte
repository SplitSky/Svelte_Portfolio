<script lang="ts">
	let { content, title, date, description } = $props();

		//title: "Hello World"
		//date: "2023-10-25"
		//description: "description"
		//tags: [svelte, code]
	console.log("title")

</script>

<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content={description}
	/>
</svelte:head>

<article>
	<h1>{title}</h1>
	<p>
		<small>{date}</small>
	</p>
	<p>{description}</p>\
	<svlete:component this={content} />
</article>