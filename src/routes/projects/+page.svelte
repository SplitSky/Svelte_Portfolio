<script lang="ts">
	import ProjectCard from "$lib/components/ProjectCard.svelte";

	type Dictionary  = {
		[key: string]: any;
	};

	let projects: Dictionary[] = [
		{"title": "Title1", "description": "Description goes here and it's long", "tags": ["tag1", "tag2"], "status":'wip', "href": "google.com", "blogSlug":"full-post","github": "github.com"},
        {"title": "Title2", "description": "Description goes here and it's long"},
		{"title": "Title3", "description": "Description goes here and it's long"},
		{"title": "Title4", "description": "Description goes here and it's long"}
	]
	


	// let {
	// 	title,
	// 	description,
	// 	tags = [],
	// 	status = 'wip',
	// 	href = '',
	// 	blogSlug = '',
	// 	github = ''
	// } = $props();
    
</script>

<h1 class="mb-10 text-3xl font-bold pb-8 pt-6">Projects</h1>

<p>Here is a list of all of the projects I have worked on, finished and abandoned! Feel free to have a browse. The more interesting ones have a write-up or I am in the process of writing one</p>

<ul class="post-list">
	{#each projects as project}
		<li>
			<ProjectCard
				title={project.title}
				description={project.description}
				tags={project.tags}
				status={project.status}
				href={project.href}
				blogSlug={project.blogSlug}
				github={project.github}
			/>
		</li>
	{/each}
</ul>

{#if projects.length === 0}
    <p>No projects available.</p>
{/if}

<style>
	.post-list {
		list-style: none;
		padding: 0;
	}
	.post-list li {
		margin-bottom: 1.5rem;
	}
</style>