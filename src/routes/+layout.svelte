<script lang="ts">
    import '../app.css';
    import favicon from '$lib/assets/favicon.svg';
    import Footer from "$lib/components/Footer.svelte";
    import NavBar from "$lib/components/NavBar.svelte";
    import {adjustHSL, hexToHSL} from "$lib/utils/colors";
    import {pageColor} from "$lib/stores/page.store";
    import {locales, localizeHref} from '$paraglide/runtime';
    import {page} from '$app/state';

    let {children} = $props()

    let color = $derived($pageColor ?? "#3F6836")

    const hsl = $derived(hexToHSL(color))
    const hslToString = (hsl: [number, number, number]): string => `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`

    const backgroundColor = $derived(adjustHSL(hsl, 25, 90))
    const backgroundColorString = $derived(hslToString(backgroundColor))
</script>

<svelte:head>
    <title>Jules' Portfolio</title>
    <link href={favicon} rel="icon"/>
    <link href="https://julespvx.fr/fr/" hreflang="fr" rel="alternate"/>
    <link href="https://julespvx.fr/en/" hreflang="en" rel="alternate"/>
    <link href="https://julespvx.fr/" hreflang="x-default" rel="alternate"/>
    <meta content="website" property="og:type"/>
    <meta content="Jules Pouvreaux" name="author"/>
    <meta content="Jules Pouvreaux, Portfolio, Developer, Designer, Web Development, Mobile Development, Full-Stack, Projects, Skills"
          name="keywords"/>
    <meta content="Jules' Portfolio - Full-Stack Developer | Web & Mobile Expert" property="og:title"/>
    <meta content="A portfolio showcasing the projects and skills of Jules Pouvreaux, a passionate developer and designer."
          name="description"/>
    <meta content="A portfolio showcasing the projects and skills of Jules Pouvreaux, a passionate developer and designer."
          property="og:description"/>
    <meta content="https://julespvx.fr/images/preview_1.webp" property="og:image"/>
    <meta content="#3F6836" name="theme-color"/>

    <!-- Canonical URL -->
    <meta content="https://julespvx.fr/" property="og:url"/>
    <link href="https://julespvx.fr{page.url.pathname}" rel="canonical"/>

    <!-- Facebook Meta Tags -->
    <meta content="https://julespvx.fr/" property="og:url">
    <meta content="website" property="og:type">
    <meta content="Jules' Portfolio" property="og:title">
    <meta content="A portfolio showcasing the projects and skills of Jules Pouvreaux, a passionate developer and designer."
          property="og:description">
    <meta content="https://julespvx.fr/images/preview_1.webp" property="og:image">

    <!-- Twitter Meta Tags -->
    <meta content="summary_large_image" name="twitter:card">
    <meta content="julespvx.fr" property="twitter:domain">
    <meta content="https://julespvx.fr/" property="twitter:url">
    <meta content="Jules' Portfolio" name="twitter:title">
    <meta content="A portfolio showcasing the projects and skills of Jules Pouvreaux, a passionate developer and designer."
          name="twitter:description">
    <meta content="https://julespvx.fr/images/preview_1.webp" name="twitter:image">
</svelte:head>

<div class="w-full min-h-screen flex flex-col justify-between items-center"
     style:--background-color={backgroundColorString}>
    <NavBar bind:color={color}/>
    <main class="w-full">
        {@render children?.()}
    </main>
    <Footer color={color}/>
</div>

<div style="display:none">
    {#each locales as locale}
        <a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
    {/each}
</div>

<style>
    div {
        background-color: var(--background-color);
        transition: background-color 0.5s ease;
    }
</style>
