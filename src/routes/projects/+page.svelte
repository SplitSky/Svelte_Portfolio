<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import bunny from '$lib/assets/mango_bun.png';
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
		<li>
			<ProjectCard 
				title="Project One"
				description="Project description"
				tags={['Svelte', 'TypeScript']}
				status="live"
				href="#"
			/>
		</li>
		<li>
			<ProjectCard 
				title="Project Two"
				description="Another project description"
				tags={['SvelteKit', 'Tailwind']}
				status="wip"
				github="#"
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