<script lang="ts">
    import {setPageColor} from "$lib/stores/page.store";
    import {onMount} from "svelte";
    import {m} from "$paraglide/messages.js";
    import WorkLayout from "$lib/components/WorkLayout.svelte";

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

<WorkLayout TOCItems={items}
            coverAlt={m.streamy_kids_image_alt()}
            coverHref="/images/streamy_kids/cover.webp"
>
    <blockquote class="border-l-4 mb-8 border-yellow-400/70 p-4 pl-6 text-lg font-pecita bg-white/40 rounded-lg">
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
</WorkLayout>