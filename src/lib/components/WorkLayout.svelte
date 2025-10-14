<script lang="ts">
    import TOC from "$lib/components/TOC.svelte";
    import PlayStoreButton from "$lib/components/PlayStoreButton.svelte";
    import {m} from "$paraglide/messages.js";

    const {
        TOCItems,
        playStoreHref,
        video,
        coverHref,
        coverAlt,
        children
    }: {
        TOCItems: {
            title: string;
            href: string;
        }[],
        playStoreHref?: string;
        video?: string;
        coverHref?: string;
        coverAlt?: string;
        children: any;
    } = $props();
</script>

<div class="flex flex-col items-center justify-center w-full md:py-48 py-32 min-px-[16vw] relative" id="work">
    <div class="px-8">
        <img alt={coverAlt} class="rounded-3xl w-full" src={coverHref}/>

        <div class="grid-container">
            <div class="toc-sidebar hidden lg:block">
                <div class="pt-8">
                    <TOC disableHoverEffect items={TOCItems}/>
                    {#if playStoreHref}
                        <PlayStoreButton class="w-full mt-6" href={playStoreHref}>
                            Get it on Google Play
                        </PlayStoreButton>
                    {/if}
                </div>
            </div>

            <div class="px-2 lg:px-12 min-w-[300px]">
                {@render children()}
            </div>

            {#if video}
                <div class="video-sidebar hidden lg:block">
                    <div class="pt-8">
                        <video autoplay class="rounded-3xl w-[20vw]" loop muted playsinline>
                            <source src={video} type="video/mp4"/>
                            {m.video_not_supported()}
                        </video>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>

<style global>
    #work {
        :global(section) {
            scroll-margin-top: calc(var(--spacing) * 32)
        }

        .grid-container {
            display: grid;
            grid-template-columns: 1fr 50vw 1fr;
            margin-top: 8rem;

            @media (max-width: 1023px) {
                grid-template-columns: 1fr;
            }
        }

        .toc-sidebar,
        .video-sidebar {
            align-self: start;
            overflow-y: auto;
            position: sticky;
            top: 0;
        }

        .toc-sidebar > div,
        .video-sidebar > div {
            position: static;
            overflow-y: auto;
        }

        :global(h1) {
            font-size: 2rem;
            font-weight: 700;
            margin-top: 4rem;
            margin-bottom: 0.5rem;
        }

        :global(h1:first-child) {
            margin-top: 0;
        }

        :global(p) {
            font-size: 1.2rem;
            font-weight: 400;
        }

        :global(.image) {
            border-radius: 1.5rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
            :global(h1) {
                font-size: 3rem;
                font-weight: 700;
                margin-top: 4rem;
                margin-bottom: 0.5rem;
            }

            :global(p) {
                font-size: 1.2rem;
                font-weight: 400;
            }

            :global(.image) {
                border-radius: 2rem;
                margin-top: 1rem;
                margin-bottom: 1rem;
            }
        }
    }
</style>