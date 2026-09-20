<script>
  import { onMount } from 'svelte';

  // --- DATA LAYER (Svelte 5 Runes) ---

	let resume = $state({
	  name: 'Tomasz Neska',
	  title: 'Senior Data Architect & Engineer',
	  bio: 'Experienced Data Professional with a strong background in Physics and Computer Science. Proven track record designing scalable data architectures, leading security initiatives, and building full-stack solutions using modern technologies like Python, AWS, and Svelte.',
	  experience: [
	    {
	      role: 'Data Architecture & Senior Security Officer',
	      company: 'Bury Council',
	      duration: 'Sep 2025 - Present',
	      desc: 'Designed council-wide data architecture using Microsoft Fabric and PowerBI. Established CI/CD pipelines, reduced cloud spend by £40k/year, and led the team as sole line manager.'
	    },
	    {
	      role: 'Data Engineer',
	      company: 'Bury Council',
	      duration: 'Dec 2024 - Sep 2025',
	      desc: 'Architected modular HR pipelines using Azure Synapse and PySpark. Created CI/CD in Azure DevOps to automate ETL deployment, reducing manual intervention.'
	    },
	    {
	      role: 'Data Consultant',
	      company: 'Cloud Perspective',
	      duration: 'Sept 2023 - Dec 2024',
	      desc: 'Executed enterprise data migration and integration projects (Salesforce/Informatica). Delivered custom APIs, Apex classes, and automation scripts reducing manual work by 40%.'
	    },
	    {
	      role: 'Summer Intern - Data Scientist',
	      company: 'University of Manchester',
	      duration: 'Jun 2022 - Aug 2022',
	      desc: 'Built API-based analytics pipelines using Python and MongoDB. Optimized data processing time by 30% and improved decision-making metrics with Matplotlib dashboards.'
	    }
	  ],
	  skills: [
	    'Python', 'C++', 'Rust', 'SQL', 'JavaScript', 'Apex', 'Bash', 
	    'AWS', 'Azure Synapse', 'Docker', 'Kubernetes', 'MongoDB', 
	    'PostgreSQL', 'Oracle', 'Vim', 'Data Analysis', 'DevOps', 'CI/CD'
	  ],
	  education: [
	    {
	      degree: 'MPhys Physics (Second Class Upper Division)',
	      school: 'University of Manchester',
	      year: '2018 - 2023'
	    }
	  ]
	});

  // Computed value (reactive)
  let jobCount = $derived(resume.experience.length);

  // --- MOCK FETCH EXAMPLE ---
  onMount(async () => {
    // const res = await fetch('/api/resume');
    // resume = await res.json();
    console.log("Component mounted");
  });
</script>

<!-- MAIN CONTAINER -->
<div class="max-w-4xl mx-auto px-6 py-12 bg-black shadow-lg rounded-xl border border-gray-100">
  
  <!-- HEADER SECTION -->
  <header class="text-center md:text-left mb-8 pb-6 border-b border-gray-100">
    <h1 class="text-3xl font-bold text-white-900 tracking-tight">{resume.name}</h1>
    <p class="mt-2 text-xl text-white-600 font-medium">{resume.title}</p>
    <p class="mt-4 text-white-600 leading-relaxed max-w-2xl">
      {resume.bio}
    </p>
  </header>

  <!-- MAIN CONTENT GRID (Responsive) -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    <section class="md:col-span-2 space-y-8">
      
      <!-- EXPERIENCE -->
      <article>
        <h2 class="text-xl font-bold text-white-900 mb-4 flex items-center gap-2">
          Work Experience 
          <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">{jobCount} roles</span>
        </h2>

        {#each resume.experience as job (job.company)}
          <div class="group relative pl-4 border-l-2 border-gray-200 hover:border-blue-500 transition-colors">
            <h3 class="font-semibold text-lg text-white-800 group-hover:text-blue-700">{job.role}</h3>
            <p class="text-sm font-medium text-red-600 mb-1">{job.company} — {job.duration}</p>
            <p class="text-gray-600 text-sm leading-relaxed">{job.desc}</p>
          </div>
        {/each}
      </article>

    </section>

    <aside class="space-y-8">
      
      <!-- SKILLS -->
      <section>
        <h2 class="text-xl font-bold text-white-900 mb-4">Skills</h2>
        <div class="flex flex-wrap gap-2">
          {#each resume.skills as skill}
            <span class="px-3 py-1 bg-black-50 text-red-700 rounded-md text-sm font-medium border border-red-100">
              {skill}
            </span>
          {/each}
        </div>
      </section>

      <!-- EDUCATION -->
      <section>
        <h2 class="text-xl font-bold text-white-900 mb-4">Education</h2>
        {#each resume.education as edu (edu.school)}
          <div class="mb-3 last:mb-0">
            <p class="font-semibold text-red-800">{edu.degree}</p>
            <p class="text-sm text-white-600">{edu.school} — {edu.year}</p>
          </div>
        {/each}
      </section>

    </aside>
  </div>
</div>
