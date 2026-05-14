<script>
	// 1. Move your tech stack to a data array
	const techStack = [
		'Data Engineering',
		'Cloud Infrastructure',
		'Security',
		'Distributed Systems',
		'Kafka',
		'Azure',
		'AWS',
		'Python', // Easy to add more!
		'Terraform'
	];
</script>

<main class="min-h-screen bg-gray-900 font-sans text-white">
	<!-- Hero / Main section -->
	<section class="flex flex-col items-center justify-center px-4 py-20">
		<h1 class="mb-4 text-center text-4xl font-bold text-white">
			Tomasz Neska - Data Infrastructure Engineer
		</h1>
		<p class="mb-8 max-w-md text-center text-lg leading-relaxed text-gray-300">
			Data Architect & Senior Security Officer | Manchester
		</p>
		<p class="mb-8 max-w-md text-center text-lg leading-relaxed text-gray-300">
			I build data systems that work well at scale and don't fall over. Currently I am working as a
			Data Architect where I own the full technical stack - CI/CD, governance, pipelines,
			infrastructure and security for an organisation's entire data function.
		</p>
		<p class="mb-8 max-w-md text-center text-lg leading-relaxed text-gray-300">
			My background spans data engineering, enterprise architecture, cloud infrastructure, and
			security. I have delivered migrations across millions of records, built full-stack apps from
			the ground up, and architected pipelines across Azure, AWS, Salesforce, and Informatica.
		</p>
		<p class="mb-12 max-w-md text-center text-lg leading-relaxed text-gray-300">
			I also have an MPhys in Physics from the University of Manchester, where I built
			high-throughput data systems for optics research.
		</p>

		<!-- Current Project Highlight -->
		<div class="mt-16 max-w-2xl rounded-xl border border-gray-700 bg-gray-800 p-6 text-center">
			<h2 class="mb-4 text-2xl font-bold text-white">
				Currently Building: TCP-based Message Queue from Scratch
			</h2>
			<p class="text-gray-300">
				I'm building a TCP-based message queue to understand what Kafka actually solves at the layer
				below the API. Coming soon with detailed write-ups on distributed systems, networking, and
				message queuing protocols.
			</p>
		</div>
	</section>

	<!-- Tech Stack Badge -->
	<section class="px-4 py-12">
		<div class="mx-auto max-w-4xl">
			<h3 class="mb-6 text-center text-xl font-semibold text-gray-200">Tech Stack</h3>
			<div class="flex flex-wrap justify-center gap-3">
				<!-- 2. Use an each loop to render the badges -->
				{#each techStack as tool}
					<span
						class="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-gray-300"
					>
						{tool}
					</span>
				{/each}
			</div>
		</div>
	</section>
</main>

<style global>
	html {
		font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
	}
	body {
		min-height: 100vh;
	}
</style>
