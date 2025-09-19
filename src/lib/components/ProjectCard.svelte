<script lang="ts">
    import {m} from '$paraglide/messages'

    const {
        image,
        mask,
        onContainer,
        color,
        title,
        body,
        href
    }: {
        image: string;
        mask: string;
        color: string;
        onContainer: string;
        title: string;
        body: string;
        href: string;
    } = $props()

    const headMaskHTML = $state(import(`../assets/masks/${mask}.svg?raw`))
</script>

<li class="principle-card w-1/4 flex flex-col md:p-[64px] p-[32px] group cursor-pointer relative"
    style:background={color}>
    <a aria-label="Link to {title}" class="w-full h-full absolute top-0 left-0 z-50" href={href}></a>

    {#await headMaskHTML}
        <div class="loading-placeholder"></div>
    {:then module}
        {@const encodedHeadMask = encodeURIComponent(module.default)}
        {@const maskStyle = `url('data:image/svg+xml,${encodedHeadMask}')`}

        <div style:--mask-image={maskStyle}>
            <img alt={title} class="spec-logo aspect-square" loading='lazy' src={`images/${image}.webp`}/>
        </div>
    {/await}

    <h2 class="mt-8 group-hover:font-black transition-all font-normal"
        style:color={onContainer}>{title}</h2>
    <p class="mt-4 group-hover:font-light transition-all"
       style:color={onContainer}>{body}</p>
    <a class="mt-8 transition-all font-medium group-hover:font-black "
       href={href} id="button"
       style:background={onContainer}
       style:color={color}>{m.explore_further()}</a>
</li>

<style>
    .principle-card:hover {
        border-radius: 100px;
        scale: 1.05;
    }

    .principle-card {
        transition: all 0.3s cubic-bezier(0.175, 1, 0.175, 2);
        overflow: hidden;
        list-style: none;
        width: 100%;
        background-image: none;
        border-radius: 64px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
    }

    #button {
        display: flex;
        height: 51px;
        padding: 16px 64px;
        justify-content: center;
        align-items: center;
        gap: 32px;
        flex-shrink: 0;
        border-radius: 1000px;
        text-align: center;
        font-size: 12px;
        font-style: normal;
        line-height: normal;
    }

    @media (min-width: 768px) {

        #button {
            font-size: 20px;
        }
    }

    .spec-logo {
        mask-image: var(--mask-image);
        -webkit-mask-image: var(--mask-image); /* For WebKit browsers */
        mask-size: cover;
        -webkit-mask-size: cover;
        object-fit: cover;
        object-position: center;
    }

    h2 {
        color: #000;
        font-size: 36px;
        font-style: normal;
        line-height: normal;
    }

    p {
        color: #000;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
</style>