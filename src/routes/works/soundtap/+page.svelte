<script lang="ts">
    import {setPageColor} from "$lib/stores/page.store";
    import {m} from "$paraglide/messages.js";
    import WorkLayout from "$lib/components/WorkLayout.svelte";

    const items = [
        {title: m.soundtap_heading_idea(), href: "#the-idea-behind-soundtap"},
        {title: m.soundtap_heading_problem(), href: "#the-problem"},
        {title: m.soundtap_heading_design(), href: "#the-design"},
        {title: m.soundtap_heading_development(), href: "#the-development"},
    ];

    $effect(() => {
        setPageColor("#DDDBFF")
    })
</script>

<svelte:head>
    <title>Soundtap - Skip tracks with your device's volume buttons</title>
    <meta content="A showcase of Soundtap: exploring the idea, design, and development of an innovative audio project for creative problem solving."
          name="description"/>
    <meta content="A showcase of Soundtap: exploring the idea, design, and development of an innovative audio project for creative problem solving."
          property="og:description"/>
</svelte:head>

<WorkLayout TOCItems={items}
            coverAlt={m.soundtap_image_alt()}
            coverHref="/images/soundtap/cover.webp"
            playStoreHref="https://play.google.com/store/apps/details?id=fr.angel.soundtap"
            video="/images/soundtap/video.mp4"
>
    <section
            class="lg:max-w-[50vw] min-w-[300px] w-full flex flex-col items-start justify-start gap-4"
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

        <section id="the-design">
            <h1>{m.soundtap_heading_design()}</h1>
            <p>
                {m.soundtap_design_p1()}
            </p>
            <img alt={m.soundtap_image_alt()} class="image" src="/images/soundtap/3.webp"/>
            <p>
                {m.soundtap_design_p2()}
            </p>
        </section>
        <section id="the-development">
            <h1>{m.soundtap_heading_development()}</h1>
            <p>
                {m.soundtap_development_p1()}
            </p>
            <p>
                {m.soundtap_development_p2()}
            </p>
        </section>
    </section>
</WorkLayout>