<script lang="ts">
    import LinkText from "$lib/components/LinkText.svelte";
    import PrimaryButton from "$lib/components/PrimaryButton.svelte";
    import SecondaryButton from "$lib/components/SecondaryButton.svelte";
    import TonalButton from "$lib/components/TonalButton.svelte";
    import {localizeHref} from "$paraglide/runtime.js";
    import * as m from "$paraglide/messages";

    const birthdate = new Date('2006-09-16')

    function getAge(date: Date): number {
        const today = new Date();
        let age = today.getFullYear() - date.getFullYear();
        const m = today.getMonth() - date.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
            age--;
        }
        return age;
    }
</script>

<div class="w-full bg-[#B7DEA4] flex flex-row">
    <div class="md:w-1/2 flex-grow lg:m-32 md:m-16 m-8 md:my-32 my-24 justify-center flex flex-col">
        <h4 class="font-gluten text-5xl">
            {m.who_am_i()}
        </h4>

        <span class="paragraph mt-12">
            {@html m.who_am_i_intro_1({
                year: getAge(birthdate)
            })}

            <LinkText href="https://www.instagram.com/paeelluu/" text={m.photography()}>
                <img alt="my photos" class="w-full h-full object-cover" loading='eager'
                     src="/images/photos_cover.webp"/>
            </LinkText>

            {m.and()}
            <span class="font-notoColorEmoji">📸</span>

            <LinkText href="https://open.spotify.com/playlist/4qv8ROhIT4UcbPhzNhXE1P?si=8546e0c050e944ca"
                      text={m.music()}>
                <img alt="favorite music" class="w-full h-full object-cover" loading='eager'
                     src="/images/music_cover.webp"/>
            </LinkText>

            <span class="font-notoColorEmoji">🎶</span>.
        </span>

        <span class="paragraph mt-4">
            {m.who_am_i_intro_2()}

            <br/>

            <LinkText disabled text={m.tools_and_frameworks()}>
                <img alt="my tools and frameworks" class="w-full h-full object-cover" loading='eager'
                     src="/images/frameworks_cover.webp"/>
            </LinkText>.
        </span>

        <span class="paragraph mt-4">
            {m.who_am_i_intro_3()}

            <LinkText href="https://github.com/JulesPvx" text="GitHub">
                <img alt="github" class="w-full h-full object-cover" loading='eager'
                     src="/images/github_cover.webp"/>
            </LinkText>

            {m.who_am_i_intro_4()}

            <LinkText borderColor="#0F4E30" href="https://fr.fiverr.com/julespvx" text="Fiverr">
                <img alt="Fiverr" class="w-full h-full object-cover" loading='eager'
                     src="/images/fiverr_cover.webp"/>
            </LinkText>
            {m.who_am_i_intro_5()}
        </span>

        <div class="flex md:flex-row gap-4 flex-col mt-16">
            <PrimaryButton class="md:w-fit w-full" href={localizeHref("#contact")}>
                {m.reach_out()}
            </PrimaryButton>
            <TonalButton class="md:w-fit w-full" href={localizeHref("/about")}>
                {m.more_about_me()}
            </TonalButton>
        </div>
    </div>
    <div class="w-1/2 py-56 me-32 justify-center lg:flex hidden flex-col items-end relative overflow-visible">
        <div class="img h-[418px] w-[278px] translate-x-[0vw] rotate-[8deg] translate-y-[15vh] overflow-hidden">
            <enhanced:img alt="alt"
                          class="object-cover size-full"
                          src="/src/lib/assets/images/270d8f7117b3f8e26e5e958c696ca9c3.webp"/>
        </div>
        <div class="img h-[418px] w-[278px] -translate-x-[5vw] rotate-[2deg] translate-y-[-18vh] overflow-hidden">
            <enhanced:img alt="alt" class="object-cover size-full"
                          src="/src/lib/assets/images/7884342bb12d04e70f4a54e4abaf44b6.webp"/>
        </div>
        <div class="-translate-x-[15vw] rotate-[-8deg] h-[418px] w-[278px] flex items-center justify-center">
            <div class="img size-full overflow-hidden">
                <enhanced:img alt="alt" class="object-cover size-full" loading='eager'
                              src="/src/lib/assets/images/img.webp"/>
            </div>
            <SecondaryButton class="absolute bottom-0 translate-y-1/2" href="">
                {m.see_more()}
            </SecondaryButton>
        </div>
    </div>
</div>
<svg class="absolute w-full mt-[-2.5vh]"
     fill="none" viewBox="0 0 1440 38" xmlns="http://www.w3.org/2000/svg">
    <path d="M-21 19H1604" stroke="black" stroke-dasharray="76 76" stroke-linecap="round"
          stroke-width="38"/>
</svg>

<style>
    .paragraph {
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 115%; /* 27.6px */
        font-family: Gluten, sans-serif;
    }

    .img {
        position: absolute;
        border-radius: 48px;
        border: 10px solid #697C61;
        transition: all 0.3s cubic-bezier(0.175, 1, 0.175, 2);
        background-color: rgba(0, 0, 0, 0.4);
    }

</style>