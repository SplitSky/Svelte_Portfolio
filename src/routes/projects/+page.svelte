<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { type Project } from '$lib/types';
	import bunny from '$lib/assets/mango_bun.png';
	
	const projects: Project[] = [
			{
				title: 'cloudy_message_broker',
				description: 'Rust implemenation of a message queue broker',
				github: "https://github.com/SplitSky/cloudy_message_broker",
				href: '#',
				tags: ['Rust'],
				status: 'wip',
			},
		]

</script>

<div class="container">
	<div class="row">
		<div class="hero-box">
			<img 
				src={bunny}
				alt="Bunny at Hack-A-Bot event"
				class="bunny-img"
			/>
			<div class="bunny-content">
				<h2 class="hero-title">Projects!</h2>
				<p class="hero-text">
					Here is a list of projects I worked on, abandoned and on some ocassions even finished!
				</p>
			</div>
		</div>
	</div>
	<h2 style="margin-bottom: 1.5rem;">My Projects</h2>
	<ul class="post-list">
		{#each projects as project}
		<li>
			<ProjectCard 
				title={project.title}
				description={project.description}
				tags={project.tags}
				status={project.status}
				github={project.github}
			/>
		</li>
		{/each}
		<li>
			<ProjectCard 
				title="CloudySkies"
				description="Distributed File Storage Engine. Loosely based on the Google File System but with leaderless replication"
				tags={['Rust']}
				status="wip"
				github="https://github.com/SplitSky/CloudySkies"
			/>
		</li>
		<li>
			<ProjectCard 
				title="Svelte_Portfolio"
				description="This website! It's the full portfolio source code in Svelte 5 with Runes"
				tags={['Svelte']}
				status="live"
				github="https://github.com/SplitSky/CloudySkies"
			/>
		</li>
		<li>
			<ProjectCard 
				title="resdata"
				description="Source code for my Master's project. FastAPI engine powering Jupyter notebooks. Proof of concept for high-throughput nano-material research"
				tags={['Python','FastAPI','MongoDB']}
				status="archived"
				github="https://github.com/SplitSky/CloudySkies"
			/>
		</li>
		<li>
			<ProjectCard 
				title="resdata"
				description="Source code for my Master's project. FastAPI engine powering Jupyter notebooks. Proof of concept for high-throughput nano-material research"
				tags={['Python','FastAPI','MongoDB']}
				status="archived"
				github="https://github.com/SplitSky/CloudySkies"
			/>
		</li>
	</ul>
</div>

<style>
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;
}

.row {
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
	margin-bottom: 2rem;
}

.hero-box {
	display: flex;
	flex-direction: row;
	gap: 2rem;
	align-items: center;
	margin-bottom: 3rem;
	padding: 2rem;
	background: rgba(255, 255, 255, 0.02);
	border-radius: 12px;
}

.bunny-img {
	max-width: 200px;
	height: auto;
	flex-shrink: 0;
}

.bunny-content {
	flex: 1;
	min-width: 0; /* Allows text to wrap properly */
}

.hero-title {
	font-size: 1.5rem;
	color: var(--text-main);
	margin-bottom: 1rem;
}

.hero-text {
	font-size: 1rem;
	color: var(--text-muted);
	line-height: 1.7;
}

.post-list {
	list-style: none;
	padding: 0;
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	gap: 1.5rem;
}

.post-list li {
	margin-bottom: 0;
}

@media (max-width: 768px) {
	.hero-box {
		flex-direction: column;
		text-align: center;
	}
	
	.bunny-img {
		max-width: 150px;
	}

}
</style>