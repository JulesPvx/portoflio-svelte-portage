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
