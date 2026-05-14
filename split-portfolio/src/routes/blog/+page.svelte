<script>
	import './global.css';
	
	// Blog posts data - add new posts here
	const blogPosts = [
		{
			id: 1,
			title: "Building a TCP-based Message Queue from Scratch",
			excerpt: "In this series, I'll explore how to build a distributed message queue system from the ground up using only TCP. We'll cover connection management, reliability, ordering, and more.",
			tags: ["Distributed Systems", "Networking", "TCP/IP", "Kafka"],
			date: "2024-01-15",
			readTime: "12 min read"
		},
		{
			id: 2,
			title: "Understanding Event-Driven Architecture Deep Dive",
			excerpt: "A comprehensive guide to event-driven architecture patterns, message brokering, and building scalable event systems in modern applications.",
			tags: ["Architecture", "Event-Driven", "Microservices"],
			date: "2024-01-10",
			readTime: "8 min read"
		},
		{
			id: 3,
			title: "Data Pipeline Security Best Practices",
			excerpt: "Learn how to secure your data pipelines end-to-end with proper authentication, authorization, encryption, and monitoring strategies.",
			tags: ["Security", "Data Engineering", "DevSecOps"],
			date: "2024-01-05",
			readTime: "10 min read"
		}
	];

	// Individual blog post view
	let currentPost = null;
</script>

<main class="min-h-screen bg-gray-900 font-sans text-white">
	<!-- Blog Header -->
	<section class="px-4 py-16 border-b border-gray-800">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
				Tech Blog
			</h1>
			<p class="text-xl text-gray-300">Technical write-ups on distributed systems, infrastructure, security, and how things work under the hood.</p>
			
			<!-- Search -->
			<div class="mt-8 max-w-md mx-auto">
				<input type="text" placeholder="Search posts..." class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500">
			</div>
		</div>
	</section>

	<!-- Blog Posts Grid -->
	<section class="px-4 py-12">
		<div class="max-w-6xl mx-auto">
			{#if blogPosts.length === 0}
				<div class="text-center py-16 text-gray-400">
					<p>No posts yet. Check back soon!</p>
				</div>
			{:else}
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each blogPosts as post}
						<article class="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onclick="currentPost = {post.id}; renderBlogPost();">
							<!-- Video/Image Preview Placeholder -->
							<div class="aspect-video bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center">
								<span class="text-4xl">📹</span>
							</div>
							<div class="p-6">
								<div class="flex items-center gap-3 mb-3 text-sm text-gray-400">
									<span>{post.readTime}</span>
									<span class="text-gray-600">•</span>
									<span>{formatDate(post.date)}</span>
								</div>
								<h2 class="text-xl font-bold mb-2 line-clamp-2 text-white hover:text-blue-400 transition-colors">{post.title}</h2>
								<p class="text-gray-300 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
								<div class="flex flex-wrap gap-2">
									{#each post.tags as tag}
										<span class="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300 hover:bg-gray-600 transition-colors">{tag}</span>
									{/each}
								</div>
							</div>
						</article>
					{/each}
				</div>
			{/if}
		</div>
	</section>

	<!-- Blog Post Detail View -->
	{#if currentPost}
		<section class="px-4 py-12 border-t border-gray-800">
			<div class="max-w-4xl mx-auto">
				<button onclick="currentPost = null" class="mb-6 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
					← Back to Blog
				</button>
				
				<article>
					<h1 class="text-4xl font-bold mb-6">{blogPosts.find(p => p.id === currentPost)?.title}</h1>
					
					<div class="flex items-center gap-6 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-800">
						<span>{blogPosts.find(p => p.id === currentPost)?.readTime}</span>
						<span class="text-gray-600">•</span>
						<span>{formatDate(blogPosts.find(p => p.id === currentPost)?.date)}</span>
					</div>

					<!-- Blog Content with Markdown Support -->
					<div class="prose prose-invert max-w-none">
						<!-- The actual markdown content would be rendered here -->
						<p class="text-gray-300 leading-relaxed mb-6">
							This is where your technical write-up content would appear. You can use Markdown for formatting, 
							code blocks, diagrams, and more. The blog supports embedding images from local files or URLs,
							and YouTube videos.
						</p>

						<!-- Image Embed Example -->
						<div class="my-8">
							<p class="text-gray-400 mb-2"><strong>Note:</strong> Add your local images to <code>static/images</code> and reference them.</p>
							<blockquote class="p-6 bg-gray-800 rounded-lg border-l-4 border-blue-500">
								<p class="text-gray-300 italic">
									Image embed example: @img('/images/your-image.png')
								</p>
							</blockquote>
						</div>

						<!-- YouTube Video Embed Example -->
						<div class="my-8 bg-gray-800 rounded-xl overflow-hidden">
							<iframe 
								src="https://www.youtube.com/embed/your-video-id" 
								title="YouTube video player" 
							 frameborder="0" 
							 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
							 allowfullscreen
							 class="w-full aspect-video">
							</iframe>
						</div>

						<!-- Code Block Example -->
						<div class="my-8 overflow-hidden rounded-xl border border-gray-700">
							<div class="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
								<span class="text-sm text-gray-400">terminal</span>
							</div>
							<pre class="p-4 overflow-x-auto"><code class="text-gray-300">
# Example code block formatting
console.log("Hello from your blog!");
const message = "Technical write-ups are here!";
console.log(message);
							</code></pre>
						</div>

						<!-- Another Image Embed -->
						<div class="my-8 bg-gray-800 rounded-xl overflow-hidden">
							<blockquote class="p-6 flex items-center gap-4 border-l-4 border-green-500">
								<span class="text-4xl">📊</span>
								<div>
									<p class="text-gray-300 italic mb-2">
										Architecture diagram or system overview image would go here.
									</p>
									<p class="text-sm text-gray-400">Add to <code>static/images/</code> and reference.</p>
								</div>
							</blockquote>
						</div>

						<!-- More YouTube Video -->
						<div class="my-8 bg-gray-800 rounded-xl overflow-hidden">
							<iframe 
								src="https://www.youtube.com/embed/another-video-id" 
								title="YouTube video player 2" 
							 frameborder="0" 
							 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
							 allowfullscreen
							 class="w-full aspect-video">
							</iframe>
						</div>

						<!-- Conclusion Section -->
						<div class="my-8 p-6 bg-gradient-to-r from-blue-900/20 to-green-900/20 rounded-xl border border-gray-700">
							<h3 class="text-xl font-semibold mb-4 text-white">Key Takeaways</h3>
							<ul class="space-y-2 text-gray-300">
								<li>✅ Always understand the fundamentals before building on top</li>
								<li>✅ Documentation is crucial for long-term maintainability</li>
								<li>✅ Security should be considered from day one</li>
								<li>✅ Scalability requires careful planning and testing</li>
							</ul>
						</div>

						<p class="text-gray-300 leading-relaxed mb-6">
							Continue writing your technical content here. Use Markdown for:
							<code class="bg-gray-800 px-2 py-1 rounded text-blue-400">headings</code>, 
							<code class="bg-gray-800 px-2 py-1 rounded text-blue-400">lists</code>, 
							<code class="bg-gray-800 px-2 py-1 rounded text-blue-400">code blocks</code>, 
							and more!
						</p>

						<!-- Call to Action -->
						<div class="my-8 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-gray-700 text-center">
							<h3 class="text-xl font-semibold mb-4 text-white">Want to see more?</h3>
							<p class="text-gray-300 mb-6">Subscribe to get notified when new posts are published.</p>
							<input type="email" placeholder="Enter your email" class="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-purple-500">
						</div>
					</div>

					<div class="mt-8 flex gap-4 border-t border-gray-800 pt-6">
						<a href="/" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">Home</a>
						<a href="/blog" class="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors">All Posts</a>
					</div>
				</article>
			</div>
		</section>
	{/if}

	<!-- Footer -->
	<footer class="px-4 py-8 border-t border-gray-800">
		<div class="max-w-4xl mx-auto flex justify-center gap-6 text-sm text-gray-400">
			<a href="/" class="hover:text-blue-400 transition-colors">Home</a>
			<a href="/resume" class="hover:text-blue-400 transition-colors">Resume</a>
			<span>© 2024 Tomasz Neska. Built with 💜 for learning.</span>
		</div>
	</footer>
</main>

<script>
	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { 
			month: 'short', 
			day: 'numeric',
			year: 'numeric' 
		});
	}

	// Add markdown rendering functionality here
</script>