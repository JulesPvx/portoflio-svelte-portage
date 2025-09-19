<script lang="ts">
    const {
        icon,
        title,
        color = '#3F6836',
        onContainer,
        href = '#',
    }: {
        icon: string;
        title: string;
        color?: string;
        onContainer?: string;
        href?: string;
    } = $props();

    const iconHTML = $state(import(`../assets/icons/${icon}.svg?raw`))
</script>

<a aria-label={title}
   class="flex flex-row items-center lg:ps-4 lg:py-4 lg:pe-8 ps-2 py-2 pe-2 rounded-full md:pe-4"
   href={href}
   style:--svg-color={onContainer}
   style:background-color={color}
   target="_blank">

    <div class="icon-container lg:h-[56px] lg:w-[56px] h-[48px] w-[48px]">
        {#await iconHTML}
            <div class="loading-placeholder"></div>
        {:then module}
            <div class="w-full h-full flex items-center justify-center p-1 lg:p-0">
                {@html module.default}
            </div>
        {/await}
    </div>

    <h3 class="ms-4 lg:text-[1.25rem] hidden md:block text-[0.85rem]"
        style:color={onContainer}>
        {title}
    </h3>
</a>

<style>
    h3 {
        font-family: Gluten, sans-serif;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
    }

    a {
        transition: all 0.3s cubic-bezier(0.175, 1, 0.175, 2);
    }

    a:hover {
        transform: scale(1.05);
    }

    /* Icon container styles */
    .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden; /* Prevent overflow */
        flex-shrink: 0;
    }

    /* Target SVG elements inside the container */
    .icon-container :global(svg) {
        width: 100% !important;
        height: 100% !important;
        color: var(--svg-color) !important;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain; /* Maintain aspect ratio */
    }
</style>