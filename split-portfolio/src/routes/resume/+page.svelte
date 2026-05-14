<script>
	import './global.css';
	
	// Resume data - you can update this with your actual resume content
	const resumeData = {
		name: "Tomasz Neska",
		title: "Data Infrastructure Engineer | Data Architect",
		location: "Manchester, UK",
		contact: {
			email: "tomasz@example.com",
			linkedin: "linkedin.com/in/tomaszneska",
			github: "github.com/tomaszneska"
		},
		summary: `I build data systems that work well at scale and don't fall over. Currently working as a Data Architect and Senior Security Officer where I own the full technical stack - CI/CD, governance, pipelines, infrastructure and security for an organisation's entire data function.`,
		skills: {
			technical: [
				"Data Engineering", "Cloud Infrastructure (AWS, Azure)", "Security", 
				"Distributed Systems", "Kafka", "CI/CD Pipelines", "Governance",
				"Python", "Java", "Scala", "Go", "TypeScript", "SQL", "PostgreSQL", "Redis"
			],
			methodologies: [
				"AWS Well-Architected Framework", "Data Mesh", "Event-Driven Architecture",
				"Zero Trust Security", "Infrastructure as Code", "DevSecOps"
			]
		},
		experience: [
			{
				company: "Current Role",
				title: "Data Architect & Senior Security Officer",
				duration: "Present",
				description: `Own the full technical stack - CI/CD, governance, pipelines, infrastructure and security for an organisation's entire data function.`
			},
			{
				company: "Previous Company",
				title: "Data Engineer / Architect",
				duration: "20XX - 20XX",
				description: `Delivered migrations across millions of records, built full-stack apps from the ground up, and architected pipelines.`
			}
		],
		education: [
			{
				institution: "University of Manchester",
				degree: "MPhys in Physics",
				description: `Built high-throughput data systems for optics research`
			}
		],
	_projects: [
		{
			name: "TCP Message Queue (In Progress)",
			description: "Building a TCP-based message queue from scratch to understand what Kafka actually solves at the layer below the API.",
			status: "In Progress"
		}
	]
};
</script>

<main class="min-h-screen bg-gray-900 font-sans text-white">
	<!-- Header -->
	<header class="px-4 py-12 border-b border-gray-800">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-5xl font-bold mb-2">{resumeData.name}</h1>
			<p class="text-xl text-gray-300 mb-6">{resumeData.title}</p>
			<div class="flex justify-center gap-4">
				<a href={`mailto:{resumeData.contact.email}`} class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">Email</a>
				<a href="{resumeData.contact.linkedin}" target="_blank" class="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">LinkedIn</a>
				<a href="{resumeData.contact.github}" target="_blank" class="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">GitHub</a>
			</div>
		</div>
	</header>

	<!-- Summary -->
	<section class="px-4 py-12 border-b border-gray-800">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-2xl font-bold mb-4 text-white">Summary</h2>
			<p class="text-lg leading-relaxed text-gray-300">{resumeData.summary}</p>
		</div>
	</section>

	<!-- Skills -->
	<section class="px-4 py-12 border-b border-gray-800">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-2xl font-bold mb-6 text-white">Technical Skills</h2>
			
			<div class="mb-8">
				<h3 class="text-xl font-semibold mb-4 text-gray-200">Programming & Languages</h3>
				<div class="flex flex-wrap gap-2">
					{#each resumeData.skills.technical.slice(0, 12) as skill}
						<span class="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">{skill}</span>
					{/each}
				</div>
			</div>

			<div>
				<h3 class="text-xl font-semibold mb-4 text-gray-200">Core Competencies</h3>
				<div class="flex flex-wrap gap-2">
					{#each resumeData.skills.technical.slice(12) as skill}
						<span class="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">{skill}</span>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Experience -->
	<section class="px-4 py-12 border-b border-gray-800">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-2xl font-bold mb-6 text-white">Experience</h2>
			{#each resumeData.experience as exp}
				<div class="mb-8 last:mb-0">
					<div class="flex items-center gap-4 mb-2">
						<h3 class="text-xl font-semibold text-white">{exp.title}</h3>
						<span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">{exp.duration}</span>
					</div>
					<p class="text-lg font-medium text-blue-400 mb-2">{exp.company}</p>
					<p class="text-gray-300 leading-relaxed">{exp.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Education -->
	<section class="px-4 py-12 border-b border-gray-800">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-2xl font-bold mb-6 text-white">Education</h2>
			{#each resumeData.education as edu}
				<div class="mb-8 last:mb-0">
					<h3 class="text-xl font-semibold text-white">{edu.degree}</h3>
					<p class="text-lg text-blue-400 mb-2">{edu.institution}</p>
					<p class="text-gray-300">{edu.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Current Project -->
	<section class="px-4 py-12">
		<div class="max-w-4xl mx-auto bg-gray-800 rounded-xl p-8">
			<h2 class="text-2xl font-bold mb-4 text-white">🚀 In Progress</h2>
			{#each resumeData._projects as project}
				<div class="mb-6 last:mb-0">
					<h3 class="text-xl font-semibold text-white mb-2">{project.name}</h3>
					<p class="text-gray-300 leading-relaxed">{project.description}</p>
					<span class="mt-2 inline-block px-3 py-1 bg-green-900 rounded-full text-sm text-green-300">{project.status}</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- Navigation -->
	<footer class="px-4 py-8 border-t border-gray-800">
		<div class="max-w-4xl mx-auto flex justify-center gap-6">
			<a href="/" class="text-blue-400 hover:text-blue-300 transition-colors">← Home</a>
			<a href="/blog" class="text-green-400 hover:text-green-300 transition-colors">Blog →</a>
		</div>
	</footer>
</main>

<style global>
	html {
		font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
	}
	body {
		min-height: 100vh;
	}
</style>