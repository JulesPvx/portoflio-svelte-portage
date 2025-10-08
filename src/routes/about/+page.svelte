<script lang="ts">
    import {onMount} from 'svelte';
    import About from '$lib/components/About.svelte';
    import AboutMobile from '$lib/components/AboutMobile.svelte';

    let isMobile = false;

    onMount(() => {
        const checkViewport = () => {
            isMobile = window.innerWidth < 500;
        };

        // Check on mount
        checkViewport();

        // Listen for resize events
        window.addEventListener('resize', checkViewport);

        // Cleanup
        return () => {
            window.removeEventListener('resize', checkViewport);
        };
    });
</script>

{#if isMobile}
    <AboutMobile/>
{:else}
    <About/>
{/if}

