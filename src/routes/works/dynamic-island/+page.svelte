<script lang="ts">
    import {onMount} from "svelte";
    import {setPageColor} from "$lib/stores/page.store";
    import {m} from "$paraglide/messages.js";
    import WorkLayout from "$lib/components/WorkLayout.svelte";

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
    <title>Dynamic Island - iOS portage following Material You design</title>
    <meta content="A modern showcase of Dynamic Island UI features: notifications, media control, battery, customization, and themes. Interactive, responsive design."
          name="description"/>
    <meta content="A modern showcase of Dynamic Island UI features: notifications, media control, battery, customization, and themes. Interactive, responsive design."
          property="og:description"/>
</svelte:head>

<WorkLayout TOCItems={items}
            coverAlt={m.dynamic_island_image_alt()}
            coverHref="/images/dynamic-island/cover.webp"
>
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
</WorkLayout>