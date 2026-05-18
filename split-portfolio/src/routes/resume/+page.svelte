<script>
	import { slide } from 'svelte/transition';

	// Data remains the same as your CV
	const experiences = [
		{
			id: 1,
			company: 'Bury Council',
			role: 'Data Engineer',
			location: 'Bury, UK',
			period: 'Dec 2024 - Present',
			description: [
				'Architected and deployed a modular HR data pipeline using Azure Synapse and Oracle SQL.',
				'Developed a scalable PySpark-based architecture for real-time employee hierarchy views.',
				'Created CI/CD pipelines in Azure DevOps to automate ETL deployment.',
				'Led Agile sprint practices, managing delivery schedules and technical decisions.'
			],
			tags: ['Azure Synapse', 'PySpark', 'Python', 'Azure DevOps', 'SQL', 'Agile']
		},
		{
			id: 2,
			company: 'Cloud Perspective',
			role: 'Data Consultant',
			location: 'Manchester, UK',
			period: 'Sept 2023 - Dec 2024',
			description: [
				'Managed large-scale data migrations (up/to 2M records) for enterprise clients.',
				'Built a SOAP API connector to streamline Salesforce and Informatica MDM integration.',
				'Engineered custom Apex classes within Salesforce to optimize client workflows.',
				'Developed Python and Bash automation scripts, reducing manual efforts by 40%.'
			],
			tags: ['Salesforce', 'Informatica IDMC', 'Python', 'Bash', 'Apex', 'SOAP API']
		},
		{
			id: 3,
			company: 'University of Manchester',
			role: 'Summer Intern - Data Scientist',
			location: 'Manchester, UK',
			period: 'Jun 2022 - Aug 2022',
			description: [
				'Developed an API-based analytics pipeline using Python and MongoDB.',
				'Optimized data processing time by 30% through efficient ETL design.',
				'Created interactive dashboards using Matplotlib for research insights.'
			],
			tags: ['Python', 'MongoDB', 'AWS', 'Matplotlib', 'Linux']
		}
	];

	let expandedId = $state(null);

	function toggle(id) {
		expandedId = expandedId === id ? null : id;
	}
</script>

<div class="timeline-container">
	<header>
		<h2>EXPERIENCE_LOG</h2>
		<p>Reverse Chronological Trace</p>
	</header>

	<div class="timeline-track">
		<!-- The central vertical line -->
		<div class="central-line"></div>

		{#each experiences as exp, i (exp.id)}
			<!-- We determine side based on index: even = left, odd = right -->
			<div
				class="timeline-item {i % 2 === 0 ? 'side-left' : 'side-right'}"
				class:is-expanded={expandedId === exp.id}
				onclick={() => toggle(exp.id)}
			>
				<!-- The Dot on the line -->
				<div class="node">
					<div class="inner-node"></div>
				</div>

				<div class="content-card">
					<div class="summary">
						<span class="role">{exp.role}</span>
						<span class="period">{exp.period}</span>
						<div class="company-loc">
							{exp.company} • {exp.location}
						</div>
					</div>

					{#if expandedId === exp.id}
						<div class="details" transition:slide={{ duration: 400 }}>
							<ul class="description-list">
								{#each exp.description as bullet}
									<li>{bullet}</li>
								{/each}
							</ul>
							<div class="tags-container">
								{#each exp.tags as tag}
									<span class="tag">{tag}</span>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.timeline-container {
		max-width: 1000px;
		margin: 4rem auto;
		padding: 2rem;
		color: #e0e0e0;
		font-family: 'Inter', sans-serif;
	}

	header {
		border-left: 4px solid #00ff41;
		padding-left: 1.5rem;
		margin-bottom: 4rem;
	}

	h2 { margin: 0; color: #00ff41; font-family: monospace; }
	header p { opacity: 0.6; margin: 0.5rem 0 0 0; text-transform: uppercase; font-size: 0.8rem; }

	/* The Track */
	.timeline-track {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	/* The Line - Fixed in the center of the container */
	.central-line {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 2px;
		height: 100%;
		background: linear-gradient(to bottom, #00ff41, transparent);
		opacity: 0.3;
	}

	.timeline-item {
		position: relative;
		width: 100%;
		display: flex;
		margin-bottom: 2rem;
		cursor: pointer;
	}

	/* Left Side Logic */
	.side-left {
		justify-content: flex-start;
	}
	.side-left .content-card {
		margin-right: 50%; /* Push content to the left of the center line */
		text-align: right;
		padding-right: 2rem;
	}

	/* Right Side Logic */
	.side-right {
		justify-content: flex-end;
	}
	.side-right .content-card {
		margin-left: 50%; /* Push content to the right of the center line */
		text-align: left;
		padding-left: 2rem;
	}

	/* The Node (The dot on the line) */
	.node {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 16px;
		height: 16px;
		background: #0a0a0a;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
	}

	.inner-node {
		width: 8px;
		height: 8px;
		background: #333;
		border-radius: 50%;
		transition: all 0.3s ease;
	}

	.is-expanded .inner-node {
		background: #00ff41;
		box					box-shadow: 0 0 8px #00ff41;
	}

	/* The Content Card */
	.content-card {
		width: 45%; /* Keep it from hitting the line too hard */
		background: #161616;
		padding: 1.5rem;
		border-radius: 8px;
		border: 1px solid #222;
		transition: border-color 0.3s ease, transform 0.3s ease;
	}

	.is-expanded .content-card {
		border-color: #00ff41;
	}

	.role {
		display: block;
		font-weight: bold;
		font-size: 1.2rem;
		color: #fff;
	}

	.period {
		display: block;
		font-family: monospace;
		color: #00ff41;
		font-size: 0.85rem;
		margin-bottom: 0.5rem;
	}

	.company-loc {
		font-size: 0.9rem;
		opacity: 0.7;
	}

	/* Details Expansion */
	.details {
		margin-top: 1.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid #222;
		text-align: left; /* Reset text alignment for bullets regardless of side */
	}

	/* Ensure text in left-side expansion isn't right-aligned */
	.side-left .details {
		text-align: left;
	}

	.description-list {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.description-list li {
		font-size: 0.9rem;
		color: #bbb;
		margin-bottom: 0.75rem;
		position: relative;
		padding-left: 1.2rem;
	}

	.description-list li::before {
		content: "→";
		position: absolute;
		left: 0;
		color: #00ff41;
	}

	.tags-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.tag {
		background: #222;
		color: #00ff41;
		font-size: 0.7rem;
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
		font-family: monospace;
	}
</style>
