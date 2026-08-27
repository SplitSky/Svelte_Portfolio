<script>
	import TimelineItem from "$lib/components/TimelineItem.svelte";
	import { describe } from "node:test";

	let steps = [
		{
			title: 'First Project',
			description: 'First description',
			state: 'complete'
		},
		{
			title: 'Second Project',
			description: 'Second description',
			state: 'pending'
		},
		{
			title: 'Third Project',
			description: 'Third description',
			state: 'current'
		}

	]
</script>

{#each steps as step}
	<TimelineItem {...step} />
{/each}