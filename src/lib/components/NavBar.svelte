<script lang="ts">
    import {adjustHSL, hexToHSL} from "$lib/utils/colors";
    import {localizeHref} from "$paraglide/runtime";
    import {m} from "$paraglide/messages"
    import AccessibilityBottomSheet from "$lib/components/AccessibilityBottomSheet.svelte";

    const {
        color = $bindable("#3F6836"),
        class: klass = "",
    }: {
        color?: string,
        class?: string,
    } = $props()

    const hsl = $derived(hexToHSL(color))
    const navBarColor = $derived(adjustHSL(hsl, 25, 85))
    const saturatedHSL = $derived(adjustHSL(hsl, 60, 25))
    const darkHsl = $derived(adjustHSL(hsl, 80, 5))
    const lightHSL = $derived(adjustHSL(hsl, 60, 70))
    const extraLightHSL = $derived(adjustHSL(hsl, 20, 90))

    const hslToString = (hsl: [number, number, number]): string => `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`
    const hslToRgbaString = (hsl: [number, number, number], alpha: number): string => `hsla(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%, ${alpha})`

    const navBarColorString = $derived(hslToRgbaString(navBarColor, 0.5))
    const saturatedHSLString = $derived(hslToString(saturatedHSL))
    const lightHSLString = $derived(hslToString(lightHSL))
    const extraLightHSLString = $derived(hslToString(extraLightHSL))
    const darkHSLString = $derived(hslToString(darkHsl))

    let accessibilityBottomSheetOpened = $state(false);
</script>

<header
        class={["w-full flex justify-center md:mt-8 fixed z-50 pointer-events-none md:px-4", klass]}
        style:--darkHSLString={darkHSLString}
        style:--extraLightHSLString={extraLightHSLString}
        style:--lightHSLString={lightHSLString}
        style:--navBarColorString={navBarColorString}
        style:--saturatedHSLString={saturatedHSLString}
>
    <div class="items-center flex flex-col lg:w-[75%] xl:w-[50%] w-full overflow-hidden pointer-events-auto">

        <div class="w-full flex items-center justify-between md:gap-6 gap-2 nav-container md:rounded-full">
            <div class="logo">
                <a class="size-12 md:size-fit md:p-0 m-1" href={localizeHref("/")}>
                    <svg fill="none" height="47" viewBox="0 0 39 47" width="39" xmlns="http://www.w3.org/2000/svg">
                        <title>Jules' Logo</title>
                        <rect fill="black" height="26.6479" transform="rotate(6 20.832 9.15419)" width="10.7747"
                              x="20.832"
                              y="9.15419"/>
                        <path d="M20.832 9.1542L21.1486 6.14262C22.9345 6.33033 23.3547 9.42545 24.9993 9.59219C25.0795 9.60032 25.1553 9.60831 25.2272 9.61616L27.9758 9.90504C27.9758 9.90504 27.9758 9.90504 27.9758 9.90504C29.4729 9.89882 30.0783 7.08118 31.8643 7.26889L31.5477 10.2805L27.9758 9.90504C26.3492 9.9118 26.9721 9.80665 25.2272 9.61616L20.832 9.1542Z"
                              fill="black"/>
                        <path d="M27.355 4.35905C27.2501 5.357 26.3799 7.91038 26.3799 7.91038C25.7845 7.84781 23.5932 5.79058 23.7831 3.98363C23.888 2.98568 24.7726 2.26072 25.759 2.36439C26.7453 2.46806 27.4599 3.3611 27.355 4.35905Z"
                              fill="#DB3232"/>
                        <path d="M29.7363 4.60933C29.5464 6.41628 26.9752 7.97295 26.3799 7.91038C26.3799 7.91038 26.0595 5.23186 26.1644 4.23391C26.2693 3.23596 27.1539 2.511 28.1402 2.61467C29.1266 2.71834 29.8412 3.61138 29.7363 4.60933Z"
                              fill="#DB3232"/>
                        <path d="M21.6805 6.8075C21.6805 6.8075 21.1616 5.85508 20.6165 5.47773C19.4443 4.66621 17.9678 5.05206 16.6837 5.67334C15.4801 6.25561 14.6128 8.19605 14.6128 8.19605"
                              stroke="black"/>
                        <path d="M10.0786 14.1136C10.4344 11.2147 14.6129 8.19604 14.6129 8.19604C14.6129 8.19604 18.0161 12.7763 17.1275 15.768C16.3862 18.2635 12.4221 20.4497 12.4221 20.4497C12.4221 20.4497 9.75644 16.7383 10.0786 14.1136Z"
                              fill="#89BD70"/>
                        <path d="M14.6129 8.19604C14.6129 8.19604 10.4344 11.2147 10.0786 14.1136C9.75644 16.7383 12.4221 20.4497 12.4221 20.4497C12.4221 20.4497 16.3862 18.2635 17.1275 15.768C18.0161 12.7763 14.6129 8.19604 14.6129 8.19604ZM14.6129 8.19604C13.3501 11.9366 12.9882 14.0983 12.973 18.0717"
                              stroke="black"/>
                        <rect fill="black" height="16.3521" transform="rotate(6 5.70923 27.0518)" width="6.58456"
                              x="5.70923"
                              y="27.0518"/>
                        <path d="M14.8989 34.1073C11.6247 33.7632 11.6436 30.7203 11.6436 30.7203L10.694 39.7551C10.694 39.7551 11.4415 44.0964 19.4782 44.9411C27.515 45.7858 28.4646 36.7511 28.4646 36.7511L18.7874 31.4712C18.7874 31.4712 18.1732 34.4515 14.8989 34.1073Z"
                              fill="black" stroke="black"/>
                        <path d="M28.4647 36.7511C28.4647 36.7511 29.6109 34.4357 30.6621 33.0237C31.7133 31.6118 32.2326 29.535 32.2326 29.535"
                              stroke="black"/>
                        <path d="M31.2507 24.56C30.8785 26.507 32.2326 29.535 32.2326 29.535C32.2326 29.535 35.2716 27.87 35.9183 25.9641C36.6872 23.6978 34.4361 20.0231 34.4361 20.0231C34.4361 20.0231 31.6583 22.4279 31.2507 24.56Z"
                              fill="#89BD70"/>
                        <path d="M32.2326 29.535C32.2326 29.535 30.8785 26.507 31.2507 24.56C31.6583 22.4279 34.4361 20.0231 34.4361 20.0231C34.4361 20.0231 36.6872 23.6978 35.9183 25.9641C35.2716 27.87 32.2326 29.535 32.2326 29.535ZM32.2326 29.535C33.4089 27.499 33.8576 26.2912 34.0246 23.9381"
                              stroke="black"/>
                        <path d="M7.64143 25.6356L7.96061 24.2436L8.27979 22.8515" stroke="black"
                              stroke-linecap="round"/>
                        <path d="M4.62696 25.6253L3.72058 24.5324L2.81421 23.4396" stroke="black"
                              stroke-linecap="round"/>
                        <path d="M3.40133 28.9345L2.03788 28.5666L0.674438 28.1988" stroke="black"
                              stroke-linecap="round"/>
                    </svg>
                </a>
            </div>

            <div class="w-20 md:block hidden"></div>

            <nav class="flex-grow">
                <ul class="flex-grow-0 flex flex-row items-center justify-center md:gap-4">
                    <li><a href={localizeHref("/#works")}>
                        {m.my_work().toUpperCase()}
                    </a></li>
                    <li><a href={localizeHref("/about")}>
                        {m.about().toUpperCase()}
                    </a></li>
                </ul>
            </nav>

            <div class="flex">
                <button aria-label={m.download_resume()} class="me-4 cursor-pointer" id="download-cv-btn"
                        onclick={() => window.open('/CV - POUVREAUX Jules - Développement.pdf', '_blank')}>
                    <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4418_4825)">
                            <path d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                  fill="white"
                                  opacity="0.4" style="fill: var(--fillg);"/>
                            <path d="M15.8002 2.21048C15.3902 1.80048 14.6802 2.08048 14.6802 2.65048V6.14048C14.6802 7.60048 15.9202 8.81048 17.4302 8.81048C18.3802 8.82048 19.7002 8.82048 20.8302 8.82048C21.4002 8.82048 21.7002 8.15048 21.3002 7.75048C19.8602 6.30048 17.2802 3.69048 15.8002 2.21048Z"
                                  fill="white" style="fill: var(--fillg);"/>
                            <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z"
                                  fill="white" style="fill: var(--fillg);"/>
                            <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z"
                                  fill="white" style="fill: var(--fillg);"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_4418_4825">
                                <rect fill="white" height="24" width="24"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <a class="me-4" href="#contact" id="contact-btn">
                    {m.contact().toUpperCase()}
                </a>
            </div>
        </div>

        <button aria-label={m.accessibility()} class="nav-container rounded-b-xl"
                onclick={() => accessibilityBottomSheetOpened = true}>
            {m.accessibility().toUpperCase()}
        </button>
    </div>
</header>

<AccessibilityBottomSheet
        bind:opened={accessibilityBottomSheetOpened}
        dismiss={() => accessibilityBottomSheetOpened = false}
/>

<style>
    .nav-container {
        backdrop-filter: blur(30px);
        background-color: var(--navBarColorString);
    }

    button.nav-container {
        padding: 0.5rem 2rem 1rem;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        cursor: pointer;
        transition: background 0.2s, padding 0.3s cubic-bezier(0.175, 1, 0.175, 2);

        &:hover {
            background: rgba(255, 255, 255, 0.2);
            padding-left: 2.5rem;
            padding-right: 2.5rem;
        }
    }

    a {
        display: flex;
        padding: 12px 24px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 1000px;
        background: rgba(0, 0, 0, 0.00);
        color: #000;
        text-align: center;
        font-size: 1rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        transition: background 0.2s, padding 0.3s cubic-bezier(0.175, 1, 0.175, 2);

        @media (max-width: 768px) {
            padding: 12px 16px;
            font-size: 12px;
        }

        &:hover {
            background: rgba(255, 255, 255, 0.5);
            padding: 12px 32px;

            @media (max-width: 768px) {
                padding: 12px 20px;
            }
        }
    }

    #download-cv-btn, #contact-btn {
        display: flex;
        padding: 12px 24px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: var(--saturatedHSLString);
        color: var(--extraLightHSLString);
        border-radius: 1000px;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        transition: scale 0.3s cubic-bezier(0.175, 1, 0.175, 2), background 0.2s, color 0.2s;

        @media (max-width: 768px) {
            font-size: 12px !important;
            padding: 10px 16px !important;
        }
    }

    #download-cv-btn:hover, #contact-btn:hover {
        background: var(--lightHSLString);
        color: var(--darkHSLString);
        scale: 1.1;
    }
</style>