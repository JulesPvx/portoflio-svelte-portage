<script lang="ts">
    import PrimaryButton from "$lib/components/PrimaryButton.svelte";
    import WordRotate from "$lib/components/WordRotate.svelte";
    import WhoAmI from "$lib/components/WhoAmI.svelte";
    import PrincipleCard from "$lib/components/PrincipleCard.svelte";
    import Star2 from "$lib/components/icons/Star2.svelte";
    import MyWorks from "$lib/components/MyWorks.svelte";
    import {resetPageColor} from "$lib/stores/page.store";
    import {m} from "$paraglide/messages.js";
    import {localizeHref} from "$paraglide/runtime";
    import TonalButton from "$lib/components/TonalButton.svelte";

    $effect(() => {
        resetPageColor()
    })
</script>

<section class="w-full flex flex-col items-center pt-56 mb-16 sm:mb-8 md:mb-0" id="TOP">
    <div class="flex flex-col">
        <div class="flex flex-row">
            <svg class="md:size-[200px] size-[100px]"
                 fill="none" height="47" viewBox="0 0 39 47" width="39" xmlns="http://www.w3.org/2000/svg">
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
            <div class="flex flex-col md:mt-[4rem] mt-[2rem]">
                <h1 class="text-start font-gluten md:text-7xl text-4xl font-extralight">
                    Jules<br/>Pouvreaux
                </h1>

                <div class="flex flex-row items-center md:text-2xl text-xl">
                    <h4 class="text-start font-gluten font-extralight">
                        {m.building()}
                    </h4>
                    <WordRotate
                            class="ms-2 text-start font-gluten font-light"
                            duration={3000}
                            words={[m.your_projects(), m.my_dream(), m.your_future()]}
                    />
                </div>
            </div>
        </div>
        <div class="flex gap-4">
            <PrimaryButton class="mt-16 w-fit hidden sm:block" href={localizeHref("#contact")}>
                {m.get_in_touch()}
            </PrimaryButton>
            <TonalButton class="mt-16 w-fit" href={localizeHref("#contact")}>
                {m.learn_more_about_me()}
            </TonalButton>
        </div>
    </div>
</section>
<section>
    <div class="w-full h-[13.5vw] pointer-events-none">
        <svg class="w-full absolute"
             fill="none" viewBox="0 0 1440 197" xmlns="http://www.w3.org/2000/svg">
            <path d="M627.19 193.749C363.209 200.512 -21 1.24913 -21 1.24913V196.5H1684V193.749C1684 193.749 1415.18 16.6463 1219.36 1.24913C976.935 -17.8137 870.287 187.521 627.19 193.749Z"
                  fill="#B7DEA4"/>
        </svg>
        <svg class="w-full absolute -mt-[2.5vh]"
             fill="none" viewBox="0 0 1440 232" xmlns="http://www.w3.org/2000/svg">
            <path d="M-21 20.2491C-21 20.2491 363.097 219.512 627 212.749C870.026 206.521 976.643 1.18635 1219 20.2491C1414.75 35.6463 1683.5 212.749 1683.5 212.749"
                  stroke="black" stroke-dasharray="76 76" stroke-linecap="round" stroke-width="38"/>
        </svg>
    </div>
    <WhoAmI/>
</section>
<section class="grided w-full bg-[#E8F6E1] flex flex-col px-[10vw] py-32">
    <h4 class="font-gluten md:text-7xl text-6xl md:mt-11">
        {m.my_principles()}
    </h4>
    <ul class="md:gap-16 gap-4 md:mt-32 mt-8">
        <PrincipleCard
                body={m.design_for_humans_description()}
                icon="eye"
                title={m.design_for_humans()}
        />
        <PrincipleCard
                body={m.attention_to_detail_description()}
                icon="star"
                title={m.attention_to_detail()}
        />
        <PrincipleCard
                body={m.accessibility_first_description()}
                icon="flower"
                title={m.accessibility_first()}
        />
        <PrincipleCard
                body={m.user_feedback_description()}
                icon="user"
                title={m.user_feedback()}
        />
    </ul>
    <div class="flex flex-row w-full max-w-full lg:max-w-[50%] items-center md:mt-24 mt-12 gap-8"
         id="principles-tip">
        <Star2 class="w-[56px] h-[56px]"/>
        <h4 class="font-gluten text-xs">
            {m.principles_description()}
        </h4>
    </div>
</section>
<svg class="w-full mt-[-2.5vh]"
     fill="none" viewBox="0 0 1440 38" xmlns="http://www.w3.org/2000/svg">
    <path d="M-21 19H1604" stroke="black" stroke-dasharray="76 76" stroke-linecap="round"
          stroke-width="38"/>
</svg>
<section class="w-full flex flex-col md:py-32 py-[48px] mt-[-2.5vh] items-center md:px-[48px] px-[16px]"
         id="works">
    <MyWorks/>
</section>
<svg class="w-full mt-[-2.5vh] mb-24"
     fill="none" viewBox="0 0 1440 38" xmlns="http://www.w3.org/2000/svg">
    <path d="M-21 19H1604" stroke="black" stroke-dasharray="76 76" stroke-linecap="round"
          stroke-width="38"/>
</svg>

<style>
    .grided ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    @media (max-width: 768px) {
        .grided ul {
            grid-template-columns: 1fr;
        }
    }

    #principles-tip {
        border-radius: 12px;
        padding: 24px;
        transition: all 0.3s cubic-bezier(0.175, 1, 0.175, 2), background 0.2s ease;

        &:hover {
            background: #F5F5F5;
            border-radius: 12px;
            padding: 24px;
            scale: 1.1;
            rotate: -2deg;
            box-shadow: 0 1px 50px 0 rgba(0, 0, 0, 0.1);
        }
    }

    span > a {
        position: relative;
        color: #3F6836;
        text-decoration: underline;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 115%; /* 27.6px */
        font-family: Gluten, sans-serif;
        transition: all 0.3s cubic-bezier(0.175, 1, 0.175, 2);
    }

    span > a:hover {
        font-weight: bold;
    }

    .my-works {
        color: #000;
        text-align: center;
        font-family: Gluten, sans-serif;
        font-size: 64px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
    }

    .my-works-description {
        color: #000;
        text-align: justify;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .grided {
        background-size: 150px 150px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.10) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.10) 1px, transparent 1px);
        background-position-x: 75px;
        background-position-y: 75px;
    }
</style>