<script lang="ts">
    import projects from '$lib/data/projects.json';
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import {localizeHref} from "$paraglide/runtime";
    import * as m from "$paraglide/messages"

    const midpoint = Math.ceil(projects.length / 2);

    function getMessage(key: string) {
        const fn = (m as any)[key];
        return typeof fn === 'function' ? fn() : String(fn ?? key);
    }
</script>

<div class="bg-black/5 max-w-[1280px] w-full lg:min-w-[1000px] h-full rounded-[84px] lg-:rounded-[128px] flex flex-row p-[24px] lg:p-[64px] gap-[24px]">

    <div class="w-1/2 flex-col gap-[24px] hidden lg:flex">
        <div class="w-full flex flex-col p-[64px] items-center">
            <h2 class="my-works font-gluten text-[3rem] font-bold text-center">
                {m.my_work()}
            </h2>
            <p class="mt-4 text-justify">
                {m.my_work_description()}
            </p>
        </div>
        <ul class="flex-col gap-[24px] flex">
            {#each projects.slice(midpoint) as project}
                <ProjectCard
                        image={project.image}
                        mask={project.mask}
                        color={project.color}
                        onContainer={project.onContainer}
                        title={project.title}
                        body={getMessage(project.body)}
                        href={localizeHref(project.href)}
                />
            {/each}
        </ul>
    </div>

    <ul class="w-1/2 flex-col gap-[24px] hidden lg:flex">
        {#each projects.slice(0, midpoint) as project}
            <ProjectCard
                    image={project.image}
                    mask={project.mask}
                    color={project.color}
                    onContainer={project.onContainer}
                    title={project.title}
                    body={getMessage(project.body)}
                    href={localizeHref(project.href)}
            />
        {/each}
    </ul>

    <div class="flex-col gap-[24px] flex lg:hidden">
        <div class="w-full flex flex-col p-[24px] items-center">
            <h2 class="my-works font-gluten text-[3rem] font-bold text-center">
                {m.my_work()}
            </h2>
            <p class="mt-4 text-justify">
                {m.my_work_description()}
            </p>
        </div>
        <ul class="flex-col gap-[24px] flex">
            {#each projects as project}
                <ProjectCard
                        image={project.image}
                        mask={project.mask}
                        color={project.color}
                        onContainer={project.onContainer}
                        title={project.title}
                        body={getMessage(project.body)}
                        href={localizeHref(project.href)}
                />
            {/each}
        </ul>
    </div>
</div>