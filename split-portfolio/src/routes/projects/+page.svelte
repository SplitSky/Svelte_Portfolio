<script lang="ts">
	import ProjectCard from "$lib/components/ProjectCard.svelte";

    interface Project {
        title: string;
        description: string;
        tags?: string[];
        status?: "archived" | "wip" | "live";
        blogSlug?: string;
        github?: string;
    }

    const myProjects: Project[] = [
        {
            title: "Resdata - API for nano-materials",
            description: "This project formed a basis for my thesis and also was a foundational step into bringing me into the world of APIs. I wrote a re-trospective on this project.",
            tags: ["Python", "FastAPI", "MongoDB"],
            status: "archived",
            blogSlug: "resdata_retrospective",
            github: "https://github.com/SplitSky/resdata"
        },
        {
            title: "This Portfolio",
            description: "The re-write of my old portfolio into Svelte 5 and also my technical blog. I am mostly a backend dev but designing something felt refreshing!",
            tags: ["Svelte", "Github"],
            status: "wip",
            blogSlug: "welcome",
            github: "https://github.com/SplitSky/Svelte_Portfolio"
        }
    ]

</script>

<div class="flex flex-col md:flex-row items-center gap-2">
    <div class="w-full md:w-2/3">
        <h1 class="text-2xl font-bold">Side Projects! - Things I built, broke or abandoned</h1>
        <p class="text-gray-600">The status badges tell you what happened! I have been coding for a while. Mostly at my job. Here is a group of stuff that I am more or less proud of or just things I amuse myself after work. Some of them have write-ups if you are interested.</p>
    </div>
    <div class="w-full md:w-[30%]">
        <img src="/images/mango_bun.png" width="10px" alt="Mango the bun" class="rounded-lg w-full h-auto" />
    </div>
</div>

<div class="p-8">
    {#each myProjects as project}
        <div class="w-full md:flex-row items-center gap-2">
            <ProjectCard {...project} />
        </div>
        
    {/each}
</div>


