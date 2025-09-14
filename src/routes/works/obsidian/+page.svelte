<script lang="ts">
    import {setPageColor} from "$lib/stores/page.store";
    import TOC from "$lib/components/TOC.svelte";
    import {onMount} from "svelte";
    import {m} from "$paraglide/messages.js";

    const items = [
        {href: '#what-is-obsidian', title: m.obsidian_heading_what_is()},
        {href: '#policy-enforcement', title: m.obsidian_heading_policy_enforcement()},
        {href: '#data-privacy', title: m.obsidian_heading_data_privacy()},
        {href: '#remote-management', title: m.obsidian_heading_remote_management()},
        {href: '#secret-password', title: m.obsidian_heading_secret_password()},
        {href: '#the-development', title: m.obsidian_heading_development()},
    ];

    $effect(() => {
        setPageColor("#8100EF")
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
    });
</script>

<svelte:head>
    <title>Obsidian</title>
</svelte:head>

<div class="flex flex-col items-center justify-center w-full py-48 min-px-[16vw] relative">
    <div class="px-8">
        <img alt={m.obsidian_image_alt()} class="rounded-3xl w-full" src="/images/obsidian/cover.webp"/>
        <div class="absolute hidden lg:block" id="toc-container">
            <div class="sticky top-0 mt-[256px] pt-8">
                <TOC items={items}/>
            </div>
        </div>
    </div>
    <section class="lg:max-w-[50vw] px-8 min-w-[300px] w-full mt-32 flex flex-col items-start justify-start gap-4"
             id="section">

        <section class="scroll-mt-16" id="what-is-obsidian">
            <h1>{m.obsidian_heading_what_is()}</h1>
            <p>{m.obsidian_what_is_p1()}</p>
            <img alt={m.obsidian_image_alt()} class="image" src="/images/obsidian/1.webp"/>
            <p>{m.obsidian_what_is_p2()}</p>
        </section>

        <section class="scroll-mt-16" id="policy-enforcement">
            <h1>{m.obsidian_heading_policy_enforcement()}</h1>
            <p>{m.obsidian_policy_enforcement_p1()}</p>
            <img alt={m.obsidian_image_alt()} class="image" src="/images/obsidian/2.webp"/>
            <p>{m.obsidian_policy_enforcement_p2()}</p>
        </section>

        <section class="scroll-mt-16" id="data-privacy">
            <h1>{m.obsidian_heading_data_privacy()}</h1>
            <p>{m.obsidian_data_privacy_p1()}</p>
            <img alt={m.obsidian_image_alt()} class="image" src="/images/obsidian/3.webp"/>
            <p>{m.obsidian_data_privacy_p2()}</p>
        </section>
        <section class="scroll-mt-16" id="remote-management">
            <h1>{m.obsidian_heading_remote_management()}</h1>
            <p>{m.obsidian_remote_management_p1()}</p>
            <img alt={m.obsidian_image_alt()} class="image" src="/images/obsidian/4.webp"/>
            <p>{m.obsidian_remote_management_p2()}</p>
        </section>
        <section class="scroll-mt-16" id="secret-password">
            <h1>{m.obsidian_heading_secret_password()}</h1>
            <p>{m.obsidian_secret_password_p1()}</p>
            <img alt={m.obsidian_image_alt()} class="image" src="/images/obsidian/5.webp"/>
            <p>{m.obsidian_secret_password_p2()}</p>
        </section>
        <section class="scroll-mt-16" id="the-development">
            <h1>{m.obsidian_heading_development()}</h1>
            <p>{m.obsidian_development_p1()}</p>
            <br/>
            <p>{m.obsidian_development_p2()}</p>
            <br/>
            <p>{m.obsidian_development_p3()}</p>
            <br/>
            <p>{m.obsidian_development_p4()}</p>
        </section>
    </section>
</div>

<style>
    h1 {
        font-size: 2rem;
        font-weight: 700;
        margin-top: 4rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1.2rem;
        font-weight: 400;
    }

    .image {
        border-radius: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    @media (min-width: 768px) {
        h1 {
            font-size: 3rem;
            font-weight: 700;
            margin-top: 4rem;
            margin-bottom: 0.5rem;
        }

        p {
            font-size: 1.2rem;
            font-weight: 400;
        }

        .image {
            border-radius: 2rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
    }
</style>