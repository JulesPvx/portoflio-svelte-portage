<script lang="ts">
    import {setPageColor} from "$lib/stores/page.store";
    import TOC from "$lib/components/TOC.svelte";
    import {onMount} from "svelte";
    import {m} from "$paraglide/messages.js";
    import PlayStoreButton from "$lib/components/PlayStoreButton.svelte";

    const items = [
        {title: m.soundtap_heading_idea(), href: "#the-idea-behind-soundtap"},
        {title: m.soundtap_heading_problem(), href: "#the-problem"},
        {title: m.soundtap_heading_design(), href: "#the-design"},
        {title: m.soundtap_heading_development(), href: "#the-development"},
    ];

    $effect(() => {
        setPageColor("#DDDBFF")
    })

    onMount(() => {
        const section = document.getElementById('section');
        const div = document.getElementById('toc-container');
        const div2 = document.getElementById('video-container')!;

        if (!section || !div) return;

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
    <title>Soundtap - Skip tracks with your device's volume buttons</title>
    <meta content="A showcase of Soundtap: exploring the idea, design, and development of an innovative audio project for creative problem solving."
          name="description"/>
    <meta content="A showcase of Soundtap: exploring the idea, design, and development of an innovative audio project for creative problem solving."
          property="og:description"/>
</svelte:head>

<div class="flex flex-col items-center justify-center w-full md:py-48 py-32 min-px-[16vw] relative">
    <div class="px-8">
        <img alt={m.soundtap_image_alt()} class="rounded-3xl w-full" src="/images/soundtap/cover.webp"/>
        <div class="absolute hidden lg:block" id="toc-container">
            <div class="sticky top-0 mt-[256px] pt-8 max-w-0">
                <TOC items={items}/>

                <PlayStoreButton class="!w-[20vw] mt-6"
                                 href="https://play.google.com/store/apps/details?id=fr.angel.soundtap"
                                 icon="/images/soundtap_icon.webp">
                    Get it on Google Play
                </PlayStoreButton>
            </div>
        </div>

        <div class="absolute right-0 mr-8 hidden lg:block" id="video-container">
            <div class="sticky top-0 mt-[256px] pt-8 w-[20vw]">
                <video autoplay class="rounded-3xl" loop muted playsinline>
                    <source src="/images/soundtap/video.mp4" type="video/mp4"/>
                    {m.video_not_supported()}
                </video>
            </div>
        </div>
    </div>
    <section
            class="lg:max-w-[50vw] px-8 min-w-[300px] w-full md:mt-32 mt-4 flex flex-col items-start justify-start gap-4"
            id="section">

        <section class="scroll-mt-16" id="the-idea-behind-soundtap">
            <h1>{m.soundtap_heading_idea()}</h1>
            <p>
                {m.soundtap_idea_p1()}
            </p>
            <img alt={m.soundtap_image_alt()} class="image" src="/images/soundtap/1.webp"/>
            <p>
                {m.soundtap_idea_p2()}
            </p>
        </section>

        <section class="scroll-mt-16" id="the-problem">
            <h1>{m.soundtap_heading_problem()}</h1>
            <p>
                {m.soundtap_problem_p1()}

                {m.soundtap_problem_p2()}
            </p>
            <img alt={m.soundtap_image_alt()} class="image" src="/images/soundtap/2.webp"/>
            <p>
                {m.soundtap_problem_p3()}
            </p>
        </section>

        <section class="scroll-mt-16" id="the-design">
            <h1>{m.soundtap_heading_design()}</h1>
            <p>
                {m.soundtap_design_p1()}
            </p>
            <img alt={m.soundtap_image_alt()} class="image" src="/images/soundtap/3.webp"/>
            <p>
                {m.soundtap_design_p2()}
            </p>
        </section>
        <section class="scroll-mt-16" id="the-development">
            <h1>{m.soundtap_heading_development()}</h1>
            <p>
                {m.soundtap_development_p1()}
            </p>
            <p>
                {m.soundtap_development_p2()}
            </p>
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