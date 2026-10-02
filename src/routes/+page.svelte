<script lang="ts">
	import BlogGallery from '$lib/components/BlogGallery.svelte';
	import { type Project } from '$lib/types';
	import { getBlogPosts, type Post } from '$lib/utils/posts';
	import icon_looking from '$lib/assets/overlooking_character.png';

	let name = $state('Tomasz Neska');
	let title = $state('Senior Software Engineer - Data Architect');

	// Typing effect state
	let displayText = $state('');
	let isTypingComplete = $state(false)
	let charIndex = 0;

	$effect(() => {
		isTypingComplete = false;
		charIndex = 0;
		displayText = '';

		const typingSpeed = 150; // ms
		
		const intervalId = setInterval(() => {
			if (charIndex < name.length) {
				displayText += name[charIndex];
				charIndex++;
			} else {
				isTypingComplete = true;
				clearInterval(intervalId);
			}
		}, typingSpeed);

		return () => clearInterval(intervalId);
	});

	const allPosts = $state<Post[]>([]); // dynamic project population
	
	$effect(() => {
		getBlogPosts().then(posts => {
			allPosts.splice(0, allPosts.length, ...posts);
		});
	});

	const lastThreePosts = $derived(allPosts.slice(0, 3)); // splice the arryay for last 3 posts
</script>

<header class="hero">
	<div class="badge">Available for projects</div>
		<h1><span>{displayText}</span><span class="cursor">|</span></h1>
	<p class="subtitle">{title}</p>
</header>
<div class="icon_looking_div"> <!-- // NOTE: This background color is #050505 -->
	<img 
		src={icon_looking}
		alt="icon looking"
		class="icon-img"
	/>
</div>

<main class="content">
	<BlogGallery posts={lastThreePosts} />
</main>

<style>
	.icon_looking_div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hero {
		position: relative;
		padding: 6rem 0;
		text-align: center;
	}

	h1 {
		font-size: clamp(3rem, 10vw, 5rem);
		margin: 0;
		letter-spacing: -2px;
		line-height: 1;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: baseline;
	}

	.cursor {
		font-weight: bold;
		color: var(--accent);
		margin-left: 2px;
		opacity: 1;
		min-width: 1ch;
		text-align: left;
	}

	.content {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
	}

</style>
