<script>
	import ProcessBulletPoint from '$lib/components/ProcessBulletPoint.svelte';

	let resume = $state({
	  name: 'Tomasz Neska',
	  title: 'Senior Data Architect & Engineer',
	  bio: 'Experienced Software Engineer with a strong background in Data, Physics and Computer Science. Proven track record designing scalable data architectures, leading security initiatives, and building full-stack solutions using modern technologies',
	  experience: [
	    {
	      role: 'Data Architecture & Senior Security Officer',
	      company: 'Bury Council',
	      duration: 'Sep 2025 - Present',
	      desc: ['Designed council-wide data architecture using Microsoft Fabric and PowerBI. Established CI/CD pipelines, reduced cloud spend by £40k/year, and led the team as sole line manager.',
          'Implemented the CI/CD stack from the ground up, establishing project management, governance, and deployment procedures now used across the data function allowing shipping into production on a weekly cadence',
          'Designed and delivered a single source of truth for enterprise HR data, now being extended into Adult and Children\'s Services to strengthen data governance and reporting ahead of OFSTED and other statutory inspections.',
          'Led the migration from Azure Synapse to Microsoft Fabric, including a custom scheduler with distributed cross- workspace data sharing and real-time logging for execution time and read/write monitoring',
          'Acted as the primary technical point of contact for the Head of Data & Insight, owning the development, deployment, and governance decisions department wide',
          'Led training workshops and data days, upskilling the performance and compliance department to build and maintain their own data tools',
        ],
	      highlightedWords: ['Microsoft Fabric', 'PowerBI', 'CI/CD']
	    },
	    {
	      role: 'Data Engineer',
	      company: 'Bury Council',
	      duration: 'Dec 2024 - Sep 2025',
	      desc: ['Architected modular HR pipelines using Azure Synapse and PySpark. Created CI/CD in Azure DevOps to automate ETL deployment, reducing manual intervention.',
          'Developed a scalable PySpark-based architecture to maintain real-time views of internal employee hierarchies, improving HR reporting accuracy and data alignment across reports.',
          'Created CI/CD pipelines in Azure DevOps to automate deployment and testing of ETL assets, reducing manual intervention and accelerating delivery timelines across environments.',
          'Recovered a failed land migration project by reverse-engineering incomplete vendor outputs and building a reusable data ingestion and cleansing pipeline using PySpark and T-SQL.',
          'Provided informal architectural leadership across data services by defining coding standards, maintaining delivery schedules, and directing technical decisions across multi-source pipelines.',
          'Designed scalable, modular pipelines across HR and Child services domains forming the basis of a unified data platform.',
        ],
	      highlightedWords: ['Azure Synapse', 'PySpark', 'CI/CD', 'Azure DevOps']
	    },
	    {
	      role: 'Data Consultant',
	      company: 'Cloud Perspective',
	      duration: 'Sept 2023 - Dec 2024',
	      desc: [
          'Conceptualised and carried out complex data migration and integration projects for enterprise clients using Salesforce and Informatica IDMC (CDI, CAI). Managed data migrations for datasets up to 2 million records, guaranteeing 99.5% data accuracy and timely delivery across enterprise software, telecommunications, automotive, and hospitality industries.',
          'Delivered comprehensive demos to clients, gathered requirements, and collaborated with stakeholders to ensure business needs were translated into actionable technical solutions, resulting in 100% client satisfaction and 5 successful large-scale deployments.',
          'Built a SOAP API connector with a CAI process to streamline integration between Salesforce and Informatica MDM for data merges. This enabled efficient and automated merging of records, improving data synchronisation and eliminating manual reconciliation.',
          'Engineered and customised Apex classes within Salesforce to improve functionality and streamline client workflows, reducing processing times and supporting effective data governance.',
          'Streamlined data validation, transformation, and deployment processes by creating and enhancing Python and Bash automation scripts, reducing manual efforts by 40% and enabling complex business logic. Also contributed to recreating the Informatica CC360 matching algorithm off-platform, improving Informatica\'s data matching and deduplication capabilities, which contributed to improved data quality.',
        ],
	      highlightedWords: ['Salesforce', 'Informatica IDMC', 'CAI', 'Apex']
	    },
	    {
	      role: 'Internship - Software Engineer',
	      company: 'University of Manchester',
	      duration: 'Jun 2022 - Aug 2022',
	      desc: [
          'Developed and managed an API-based data analytics pipeline using Python and MongoDB for the extraction, transformation, and loading of large datasets from JSON files, resulting in a 30% reduction in ',
          'Applied advanced Python libraries such as Pandas and Numpy to enhance data cleaning, enrichment, and standardisation processes, increasing data accuracy by 15% for experimentation purposes.',
          'Produced interactive dashboards using Matplotlib to deliver visual insights, optimising decision-making by 40%. Leveraged AWS services to host the API while managing Linux-based virtual machines to ensure network-wide accessibility.',
          'Created visually compelling dashboards and interactive reports using Matplotlib to effectively communicate trends and insights, leading to a 20% increase in the research team\'s adoption of data-driven strategies.',
        ],
	      highlightedWords: ['Python', 'MongoDB', 'Pandas', 'Numpy', 'Matplotlib', 'AWS']
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

  let jobCount = $derived(resume.experience.length);

</script>

<!-- MAIN CONTAINER -->
  
  <!-- HEADER SECTION -->
  <header class="py-8 text-center md:text-left mb-8 pb-6 border-b border-gray-100">
    <h1 class="text-3xl font-bold text-white-900 tracking-tight">{resume.name}</h1>
    <p class="mt-2 text-xl text-white-600 font-medium">{resume.title}</p>
    <p class="mt-4 text-white-600 leading-relaxed max-w-2xl">
      {resume.bio}
    </p>
  </header>
    
  <!-- EXPERIENCE -->
  <article class="pb-8">
    <h2 class="text-xl font-bold text-white-900 mb-4 flex items-center gap-2">
      Work Experience 
      <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">{jobCount} roles</span>
    </h2>

    {#each resume.experience as job (job)}
      <div class="group relative pl-4 pb-2 border-l-2 border-gray-200 hover:border-red-500 transition-colors">
        <h3 class="font-semibold text-lg text-white-800 group-hover:text-red-700">{job.role}</h3>
        <p class="text-sm font-medium text-red-600 mb-1">{job.company} — {job.duration}</p>
        {#each job.desc as bullet_point (bullet_point)}
        <div class="pl-4">
          <ProcessBulletPoint text={bullet_point} keywords={job.highlightedWords}></ProcessBulletPoint>
        </div>
        {/each}
      </div>
    {/each}
  </article>
      
  <!-- SKILLS -->
  <section class="pb-8">
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
  <section class="pb-10">
    <h2 class="text-xl font-bold text-white-900 mb-4">Education</h2>
    {#each resume.education as edu (edu.school)}
      <div class="mb-3 last:mb-0">
        <p class="font-semibold text-red-800">{edu.degree}</p>
        <p class="text-sm text-white-600">{edu.school} — {edu.year}</p>
        <p class="text-sm text-white-500">Relevant coursework: Object Oriented C++, Computational Physics, Complex Variables and Vector Spaces, Statistical Mechanics</p>
      </div>
    {/each}
  </section>

