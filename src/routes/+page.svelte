<script>
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

		const typingSpeed = 150; // milliseconds per character
		
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
</script>

<header class="hero">
	<div class="badge">Available for projects</div>
		<h1><span>{displayText}</span><span class="cursor" class:blinking={isTypingComplete}>|</span></h1>
	<p class="subtitle">{title}</p>
	<div class="hero-glow"></div>
</header>

<style>
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
		background: linear-gradient(to bottom, #fff 60%, #666);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
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

	/* Cursor blinks after typing completes */
	.cursor.blinking {
		animation: blink 0.7s infinite;
	}

	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}

	.hero-glow {
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 300px;
		height: 300px;
		background: var(--accent);
		filter: blur(120px);
		opacity: 0.15;
		z-index: -1;
	}

</style>
