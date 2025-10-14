<script lang="ts">
    import {setPageColor} from "$lib/stores/page.store";
    import {onMount} from "svelte";
    import {m} from "$paraglide/messages.js";
    import WorkLayout from "$lib/components/WorkLayout.svelte";

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
    <title>Obsidian - Secure, Privacy-Focused App Management</title>
    <meta content="A secure, privacy-focused overview of Obsidian: policy enforcement, data protection, remote management, and development insights."
          name="description"/>
    <meta content="A secure, privacy-focused overview of Obsidian: policy enforcement, data protection, remote management, and development insights."
          property="og:description"/>
</svelte:head>

<WorkLayout TOCItems={items}
            coverAlt={m.obsidian_image_alt()}
            coverHref="/images/obsidian/cover.webp"
>

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
</WorkLayout>