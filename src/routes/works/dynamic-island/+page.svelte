<script lang="ts">
    import {onMount} from "svelte";
    import {setPageColor} from "$lib/stores/page.store";
    import TOC from "$lib/components/TOC.svelte";
    import {m} from "$paraglide/messages.js";

    const items = [
        {href: '#introduction', title: m.introduction()},
        {href: '#notifications', title: m.notifications()},
        {href: '#media-control', title: m.media_control()},
        {href: '#battery', title: m.battery_status()},
        {href: '#customization', title: m.customization()},
        {href: '#themes', title: m.themes()},
    ];

    $effect(() => {
        setPageColor("#F5C58E")
    })

    onMount(() => {
        const section = document.getElementById('section')!;
        const div = document.getElementById('toc-container')!;

        const setDivHeight = () => {
            const sectionHeight = section.offsetHeight;
            div.style.height = `${sectionHeight}px`;
        };

        try {
            setDivHeight();
        } catch {
        }
        window.addEventListener('resize', setDivHeight);
    })
</script>

<svelte:head>
    <title>Dynamic Island</title>
</svelte:head>

<div class="flex flex-col items-center justify-center w-full py-48 min-px-[16vw] relative">
    <div class="px-8">
        <img alt={m.dynamic_island_image_alt()} class="rounded-3xl w-full" src="/images/dynamic-island/cover.webp"/>
        <div class="absolute hidden lg:block" id="toc-container">
            <div class="sticky top-0 mt-[256px] pt-8">
                <TOC items={items}/>
            </div>
        </div>
    </div>
    <section class="lg:max-w-[50vw] px-8 min-w-[300px] w-full mt-32 flex flex-col items-start justify-start gap-4"
             id="section">

        <section class="scroll-mt-16" id="introduction">
            <h1>{m.dynamic_island_intro_title()}</h1>
            <p>{m.dynamic_island_intro_paragraph_1()}</p>
            <img alt={m.dynamic_island_image_alt()} class="image" src="/images/dynamic-island/1.webp"/>
            <p>{m.dynamic_island_intro_paragraph_2()}</p>
        </section>

        <section class="scroll-mt-16" id="notifications">
            <h1>{m.dynamic_island_notifications_title()}</h1>
            <p>{m.dynamic_island_notifications_paragraph_1()}</p>
            <img alt={m.dynamic_island_image_alt()} class="image" src="/images/dynamic-island/2.webp"/>
            <p>{m.dynamic_island_notifications_paragraph_2()}</p>
        </section>

        <section class="scroll-mt-16" id="media-control">
            <h1>{m.dynamic_island_media_title()}</h1>
            <p>{m.dynamic_island_media_paragraph_1()}</p>
            <img alt={m.dynamic_island_image_alt()} class="image" src="/images/dynamic-island/3.webp"/>
            <p>{m.dynamic_island_media_paragraph_2()}</p>
        </section>
        <section class="scroll-mt-16" id="battery">
            <h1>{m.dynamic_island_battery_title()}</h1>
            <p>{m.dynamic_island_battery_paragraph_1()}</p>
            <img alt={m.dynamic_island_image_alt()} class="image" src="/images/dynamic-island/4.webp"/>
            <p>{m.dynamic_island_battery_paragraph_2()}</p>
        </section>
        <section class="scroll-mt-16" id="customization">
            <h1>{m.dynamic_island_customization_title()}</h1>
            <p>{m.dynamic_island_customization_paragraph_1()}</p>
            <img alt={m.dynamic_island_image_alt()} class="image" src="/images/dynamic-island/5.webp"/>
            <p>{m.dynamic_island_customization_paragraph_2()}</p>
        </section>
        <section class="scroll-mt-16" id="themes">
            <h1>{m.dynamic_island_themes_title()}</h1>
            <p>{m.dynamic_island_themes_paragraph_1()}</p>
            <img alt={m.dynamic_island_image_alt()} class="image" src="/images/dynamic-island/6.webp"/>
            <p>{m.dynamic_island_themes_paragraph_2()}</p>
        </section>
    </section>
</div>

<style>
    h1 {
        font-size: 2rem;
        font-weight: 700;
        margin-top: 4rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1.2rem;
        font-weight: 400;
    }

    .image {
        border-radius: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    @media (min-width: 768px) {
        h1 {
            font-size: 3rem;
            font-weight: 700;
            margin-top: 4rem;
            margin-bottom: 0.5rem;
        }

        p {
            font-size: 1.2rem;
            font-weight: 400;
        }

        .image {
            border-radius: 2rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
    }
</style>