<script lang="ts">
    import {setPageColor} from "$lib/stores/page.store";
    import {onMount} from "svelte";
    import {m} from "$paraglide/messages.js";
    import WorkLayout from "$lib/components/WorkLayout.svelte";

    const items = [
        {href: '#introduction', title: m.introduction()},
        {href: '#design', title: m.features_and_design()},
    ];

    $effect(() => {
        setPageColor("#8EC8F5")
    })

    onMount(() => {
        const section = document.getElementById('section')!;
        const div = document.getElementById('toc-container')!;
        const div2 = document.getElementById('video-container')!;

        const setDivHeight = () => {
            const sectionHeight = section.offsetHeight;
            div.style.height = `${sectionHeight}px`;
            div2.style.height = `${sectionHeight}px`;
        };

        try {
            setDivHeight();
        } catch {
        }
        window.addEventListener('resize', setDivHeight);
    });
</script>

<svelte:head>
    <title>AiCh - AI Project Design Showcase</title>
    <meta content="A modern AI project showcase featuring design highlights, interactive video, and a clear introduction. Discover AiCh’s features and visual story."
          name="description"/>
    <meta content="A modern AI project showcase featuring design highlights, interactive video, and a clear introduction. Discover AiCh’s features and visual story."
          property="og:description"/>
</svelte:head>

<WorkLayout TOCItems={items}
            coverAlt={m.aich_image_alt()}
            coverHref="/images/aich/cover.webp"
            video="/images/aich/video.mp4"
>
    <section class="lg:max-w-[50vw] min-w-[300px] w-full flex flex-col items-start justify-start gap-4"
             id="section">
        <section class="scroll-mt-16" id="introduction">
            <h1>{m.aich_page_title()}</h1>
            <p>{m.aich_intro_paragraph()}</p>
            <img alt={m.aich_image_alt()} class="image" src="/images/aich/1.webp"/>
        </section>

        <section class="scroll-mt-16" id="design">
            <h1>{m.aich_design_title()}</h1>
            <p>{m.aich_design_paragraph()}</p>
            <img alt={m.aich_image_alt()} class="image" src="/images/aich/2.webp"/>
        </section>
    </section>
</WorkLayout>