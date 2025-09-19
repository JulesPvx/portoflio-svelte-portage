<script lang="ts">
    import {setPageColor} from "$lib/stores/page.store";
    import TOC from "$lib/components/TOC.svelte";
    import {onMount} from "svelte";
    import {m} from "$paraglide/messages.js";

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

<div class="flex flex-col items-center justify-center w-full py-48 min-px-[16vw] relative">
    <div class="px-8">
        <img alt={m.aich_image_alt()} class="rounded-3xl w-full" src="/images/aich/cover.webp"/>
        <div class="absolute hidden lg:block" id="toc-container">
            <div class="sticky top-0 mt-[256px] pt-8">
                <TOC items={items}/>
            </div>
        </div>

        <div class="absolute right-0 mr-8 hidden lg:block" id="video-container">
            <div class="sticky top-0 mt-[256px] pt-8 w-[21vw]">
                <video autoplay class="rounded-3xl" loop muted playsinline>
                    <source src="/images/aich/video.mp4" type="video/mp4"/>
                    {m.video_not_supported()}
                </video>
            </div>
        </div>
    </div>
    <section class="lg:max-w-[50vw] px-8 min-w-[300px] w-full mt-32 flex flex-col items-start justify-start gap-4"
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