<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	// Replace this with your real data or load it dynamically
	const projects = [
		{
			title: 'Broker',
			description: 'A broker service that handles real‑time data streams.',
			problem: 'Solving latency and reliability for high‑frequency trading.',
			tech: ['SvelteKit', 'WebSocket', 'TypeScript'],
			github: 'https://github.com/yourname/broker'
		},
		{
			title: 'ResData',
			description: 'A responsive data dashboard for monitoring metrics.',
			problem: 'Providing instant insights into server health.',
			tech: ['Svelte', 'D3.js', 'GraphQL'],
			github: 'https://github.com/yourname/resdata'
		}
		// …add more projects in order of impressiveness
	];
</script>

<h1>Projects</h1>
{#each projects as project}
	<ProjectCard {...project} />
{/each}
