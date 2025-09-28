<script lang="ts">
    import {setPageColor} from "$lib/stores/page.store";
    import TOC from "$lib/components/TOC.svelte";
    import {onMount} from "svelte";
    import {m} from "$paraglide/messages.js";

    const items = [
        {href: '#challenge', title: m.streamy_kids_toc_challenge()},
        {href: '#contribution', title: m.streamy_kids_toc_contribution()},
        {href: '#solution', title: m.streamy_kids_toc_solution()},
        {href: '#impact', title: m.streamy_kids_toc_impact()},
    ];

    $effect(() => {
        setPageColor("#ebf078")
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
    <title>{m.streamy_kids_page_title()}</title>
    <meta content={m.streamy_kids_page_description()} name="description"/>
    <meta content={m.streamy_kids_page_description()} property="og:description"/>
</svelte:head>

<div class="flex flex-col items-center justify-center w-full py-48 min-px-[16vw] relative">
    <div class="px-8">
        <img alt={m.streamy_kids_image_alt()} class="rounded-3xl w-full" src="/images/streamy_kids/cover.webp"/>
        <div class="absolute hidden lg:block" id="toc-container">
            <div class="sticky top-0 mt-[256px] pt-8 max-w-0">
                <TOC class="w-full" items={items}/>
            </div>
        </div>

        <!--<div class="absolute right-0 mr-8 hidden lg:block" id="video-container">
            <div class="sticky top-0 mt-[256px] pt-8 w-[20vw]">
                <video autoplay class="rounded-3xl" loop muted playsinline>
                    <source src="/images/streamy_kids/video.mp4" type="video/mp4"/>
                    {m.video_not_supported()}
                </video>
            </div>
        </div>-->
    </div>
    <section class="lg:max-w-[50vw] px-8 min-w-[300px] w-full mt-32 flex flex-col items-start justify-start gap-4"
             id="section">

        <blockquote class="border-l-4 border-yellow-400/70 p-4 pl-6 text-lg font-pecita bg-white/40 rounded-lg">
            {m.streamy_kids_quote_attribution()}
        </blockquote>

        <section class="scroll-mt-16" id="challenge">
            <h1>{m.streamy_kids_toc_challenge()}</h1>
            <p>{m.streamy_kids_challenge_p1()}</p>
            <img alt={m.streamy_kids_image_alt()} class="image" src="/images/streamy_kids/1.webp"/>
            <p>{m.streamy_kids_challenge_p2()}</p>
        </section>

        <section class="scroll-mt-16" id="contribution">
            <h1>{m.streamy_kids_toc_contribution()}</h1>
            <p>{m.streamy_kids_contribution_p1()}</p>
            <img alt={m.streamy_kids_image_alt()} class="image" src="/images/streamy_kids/2.webp"/>
            <p>{m.streamy_kids_contribution_p2()}</p>
        </section>

        <section class="scroll-mt-16" id="solution">
            <h1>{m.streamy_kids_toc_solution()}</h1>
            <p>{m.streamy_kids_solution_p1()}</p>
            <img alt={m.streamy_kids_image_alt()} class="image" src="/images/streamy_kids/3.webp"/>
            <p>{m.streamy_kids_solution_p2()}</p>
        </section>

        <section class="scroll-mt-16" id="impact">
            <h1>{m.streamy_kids_toc_impact()}</h1>
            <p>{m.streamy_kids_impact_p1()}</p>
            <img alt={m.streamy_kids_image_alt()} class="image" src="/images/streamy_kids/4.webp"/>
            <p>{m.streamy_kids_impact_p2()}</p>
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