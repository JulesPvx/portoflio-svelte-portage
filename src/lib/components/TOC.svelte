<script lang="ts">
    import {onMount} from "svelte";

    const {
        items,
        disableHoverEffect = false,
        ...rest
    }: {
        items: { title: string; href: string }[];
        disableHoverEffect?: boolean;
        [key: string]: any;
    } = $props();

    onMount(() => {
        function setupTOC() {
            const tocLinks = document.querySelectorAll('#toc-container a');

            const hrefs = Array.from(tocLinks).map((link: Element) => link.getAttribute('href'));
            const potentialSections = hrefs.map(href => href ? document.querySelector(href) : null);
            const sections: Element[] = potentialSections.filter(Boolean) as Element[];

            function setActiveLink() {
                let activeSectionIndex = -1; // Initialize with -1 to indicate no active section
                let minDistanceFromTop = Infinity; // Track the smallest distance of a section from the viewport top

                sections.forEach((section, index) => {
                    // TypeScript needs assurance that section is not null here, but we've already filtered out nulls.
                    const sectionTop = section.getBoundingClientRect().top;

                    // Check if sectionTop is within the viewport and is the closest to the viewport top
                    if (sectionTop >= 0 && sectionTop < minDistanceFromTop) {
                        minDistanceFromTop = sectionTop;
                        activeSectionIndex = index;
                    }
                });

                tocLinks.forEach((link, index) => {
                    if (index === activeSectionIndex) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }

            window.addEventListener('scroll', setActiveLink);
        }

        document.addEventListener('DOMContentLoaded', setupTOC);
        document.addEventListener('astro:page-load', setupTOC);
    })
</script>

<div {...rest}>
    <div class:hover:scale-[1.02]={!disableHoverEffect}
         class:hover:shadow-lg={!disableHoverEffect}
         id="container">
        <ul class="flex flex-col gap-2">
            {#each items as item}
                <li><a href={item.href}>{item.title}</a></li>
            {/each}
        </ul>
    </div>
</div>

<style>
    #container {
        background: rgba(0, 0, 0, 0.10);
        padding: 32px;
        min-width: 5vw;
        border-radius: 24px;
        transition: box-shadow 0.2s ease, all 0.3s cubic-bezier(0.175, 1, 0.175, 2);
    }

    #container a {
        color: #17320A;
        font-family: Satoshi, sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        transition: font-weight 0.2s;
    }

    #container a:hover {
        font-weight: 900;
    }
</style>