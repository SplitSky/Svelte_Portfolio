<script>
	export let title;
	export let description;
	export let problem;
	export let tech = [];
	export let github;
</script>

<div class="card">
	<h2>{title}</h2>
	<p>{description}</p>
	<p><strong>Problem:</strong> {problem}</p>
	<p><strong>Tech:</strong> {tech.join(', ')}</p>
	<a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
</div>
