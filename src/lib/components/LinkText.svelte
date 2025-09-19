<script lang="ts">

    const {
        href = '#',
        text = 'Link Text',
        target = '_blank',
        disabled = false,
        borderColor = '#3F6836',
        children
    }: {
        href?: string;
        text: string;
        target?: string;
        disabled?: boolean;
        borderColor?: string;
        children?: any;
    } = $props();
</script>

{#if disabled}
    <span class="relative link-text">
        <span class="trigger text">{text}</span>

        <div class="pointer-events-none absolute-center-overlay inset-0 w-[250px] h-[150px]"
             style:border-color={borderColor}>
            {@render children()}
        </div>
    </span>
{:else}
    <a class="relative" href={href} target={target}>
        <span class="trigger text">{text}</span>

        <div class="pointer-events-none absolute-center-overlay inset-0 w-[250px] h-[150px]"
             style:border-color={borderColor}>
            {@render children()}
        </div>
    </a>
{/if}

<style>
    .link-text {
        font-family: inherit;
        font-size: inherit;
    }

    .text {
        font-family: inherit;
        position: relative;
        color: #3F6836;
        font-size: inherit;
        font-style: normal;
        font-weight: 400;
        line-height: 115%;
        transition: all 0.3s cubic-bezier(0.175, 1, 0.175, 2);
    }

    .text::after {
        position: absolute;
        content: '';
        top: -10px;
        right: -10px;
        left: -10px;
        bottom: -10px;
    }

    .text:hover {
        font-weight: bold;
    }

    .absolute-center-overlay {
        position: absolute;
        overflow: hidden;
        top: auto;
        bottom: 100%;
        left: 50%;
        transform: translate(-50%, -20%) scale(0.5) rotate(15deg); /* Adjusted for initial state */
        justify-content: center;
        align-items: center;
        background: #000000;
        border-radius: 24px;
        border: 4px solid;
        box-shadow: 0 1px 50px 0 rgba(0, 0, 0, 0.1);
        aspect-ratio: 16/9;
        opacity: 0; /* Start fully transparent */
        transition: all 0.3s cubic-bezier(0.175, 1, 0.175, 2), transform 0.3s cubic-bezier(0.175, 1, 0.175, 2);
        transform-origin: bottom center; /* Scales from the bottom center */
    }

    .trigger:hover + .absolute-center-overlay {
        display: flex; /* Show on hover */
        opacity: 1; /* Fade in to full opacity */
        transform: translate(-50%, -20%) scale(1) rotate(0deg); /* Scale to normal size */
    }
</style>