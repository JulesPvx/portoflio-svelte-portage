<script lang="ts">
    import {onMount} from "svelte";
    import LinkText from "$lib/components/LinkText.svelte";

    onMount(() => {
        const soundPath = "/sounds/honk.mp3";
        const audioElement = new Audio(soundPath);

        // Preload audio
        audioElement.load();

        // Ensure audio is played in response to a user action
        document.getElementById('customShape').addEventListener('click', function () {
            this.classList.add('bounce');
            audioElement.play().catch(e => console.error("Error playing the sound:", e));
            this.addEventListener('animationend', function () {
                this.classList.remove('bounce');
            }, {once: true});
        });

        const svgElement = document.querySelector('#road');
        const sectionElement = svgElement.closest('section');

        const footer = document.getElementById('footer');

        if (footer) {
            footer.style.transform = `translateY(200px)`;
        }

        // Function to set the height
        const adjustSectionHeight = () => {
            const svgHeight = svgElement.getBoundingClientRect().height;
            sectionElement.style.height = `${svgHeight + 400}px`;
        };

        // Initial adjustment
        adjustSectionHeight();

        // Adjust on window resize
        window.addEventListener('resize', adjustSectionHeight);

        const path = document.getElementById('curve');
        const customShapeWrapper = document.getElementById('customShapeWrapper');
        const pathLength = path.getTotalLength();

        function easeOutCubic(x) {
            return Math.pow(x, 0.7);
        }

        function updateCustomShapePosition() {
            const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
            const easedScrollPercentage = easeOutCubic(scrollPercentage);
            const shapePosition = easedScrollPercentage * pathLength;
            const point = path.getPointAtLength(shapePosition);
            const nextPoint = path.getPointAtLength(shapePosition + 1);

            const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);

            const svgWidth = 90;
            const svgHeight = 41;
            const adjustX = point.x - svgWidth / 2;
            const adjustY = point.y - svgHeight / 2;

            customShapeWrapper.setAttribute('transform', `translate(${adjustX}, ${adjustY}) rotate(${angle}, ${svgWidth / 2}, ${svgHeight / 2})`);
        }

        updateCustomShapePosition()
        customShapeWrapper.style.display = 'flex';

        window.addEventListener('scroll', updateCustomShapePosition);
    })
</script>

<svelte:head>
    <title>À propos de Jules Pouvreaux</title>

    <meta content="Jules Pouvreaux: full-stack developer, graphic designer, and multimedia student in Angoulême, France. Explore his projects."
          name="description"/>
    <meta content="Jules Pouvreaux: full-stack developer, graphic designer, and multimedia student in Angoulême, France. Explore his projects."
          property="og:description"/>
</svelte:head>

<section class="pt-24 pb-96 relative content w-full px-4">

    <div class="flex flex-col items-center justify-center" id="about-container">
        <svg class="w-full absolute left-1/2 -translate-x-1/2" fill="none"
             id="road" preserveAspectRatio="xMidYMin slice" viewBox="0 0 600 3878" xmlns="http://www.w3.org/2000/svg">
            <path d="M614 62.5001C614 62.5001 219.554 -115.342 191 313C159.301 776.686 525.122 838.575 528 1308C531.6 1896.06 402.333 1528.5 297 2184.5C212.336 2711.97 991.333 3853 -19.6667 3853"
                  id="curve"
                  stroke="black" stroke-dasharray="50 70" stroke-linecap="round" stroke-opacity="0.1"
                  stroke-width="50"/>
            <g class="relative" id="customShapeWrapper">
                <g id="customShape">
                    <svg fill="none" height="41" viewBox="0 0 90 41"
                         width="90"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M90 11.8047C90 5.28516 84.6571 0 78.0663 0L11.9337 0C5.3429 0 4.17233e-07 5.28516 4.17233e-07 11.8047V29.02C4.17233e-07 35.5396 5.3429 40.8247 11.9337 40.8247H78.0663C84.6571 40.8247 90 35.5396 90 29.02V11.8047Z"
                              fill="#295315"/>
                        <path d="M62.6519 6.39424C62.6519 4.49269 61.0936 2.95119 59.1713 2.95119L23.3702 2.95119C21.4478 2.95119 19.8895 4.49269 19.8895 6.39424V33.9386C19.8895 35.8402 21.4478 37.3817 23.3702 37.3817H59.1713C61.0936 37.3817 62.6519 35.8402 62.6519 33.9386V6.39424Z"
                              fill="#9BDF7E"/>
                    </svg>
                </g>
            </g>
        </svg>

        <!-- TITLE - ABOUT ME -->
        <h1 class="mt-24 mb-12">ABOUT ME</h1>

        <!-- TEXT - ABOUT ME -->
        <div class="flex flex-col gap-y-4 mb-24 px-8 bg-white/20 rounded-xl backdrop-blur-sm py-6">
            <span>
                Hey, I'm Jules, currently studying for a
                <LinkText
                        href="https://iut-angouleme.univ-poitiers.fr/formations/b-u-t-mmi-metiers-du-multimedia-et-de-linternet/"
                        text="diploma in multimedia and internet">
                    <img alt="Internet" class="w-full h-full object-cover object-center"
                         src="/images/internet.webp"/>
                </LinkText>
                at the
                <LinkText href="https://iut-angouleme.univ-poitiers.fr/" text="IUT in Angoulême">
                    <img alt="IUT Angouleme" class="w-full h-full object-cover object-center"
                         src="/images/iut.webp"/>
                </LinkText>
                , France, I am passionate about development and design.
            </span>
            <span>
                I am a full-stack developer, I love to create websites and applications that are both beautiful
                and functional. I am also a graphic designer, I love to create logos, posters, and other visuals. I
                am always looking for new projects to work on, so if you have an idea, feel free to contact me.
            </span>
            <span>
                Always building new projects, I am constantly learning new technologies and improving my skills.
            </span>
        </div>

        <!-- TITLE - NOW -->
        <span aria-hidden="true" class="pointer-events-none absolute h-[400px]" id="now" style="top: 800px;"></span>
        <div class="flex flex-row gap-8 items-center mb-8">
            <h1>TODAY</h1>
        </div>

        <!-- CARD - BUT -->
        <div class="mb-16 px-8">
            <div class="image w-48 relative mx-auto mb-4">
                <img alt="Angouleme" class="w-full h-full object-cover object-center" src="/images/angouleme.webp"/>
                <svg class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 me-4 size-12"
                     fill="none" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_88_321)">
                        <path d="M21.7059 28.0833L25.3693 29.0325L26.6745 23.9955L30.3379 24.9447L29.0326 29.9818L32.696 30.9311L34.9505 22.2307L30.4047 17.1434L23.9604 19.3829L21.7059 28.0833ZM24.187 41.1383C28.7974 38.6842 32.3651 36.2939 34.89 33.9674C37.415 31.6408 38.9583 29.3938 39.5199 27.2263C40.3822 23.8988 40.0274 20.8993 38.4555 18.2278C36.8836 15.5563 34.5559 13.8211 31.4726 13.0222C28.3893 12.2232 25.5119 12.6097 22.8405 14.1816C20.169 15.7535 18.4022 18.2032 17.5399 21.5307C16.9783 23.6982 17.2361 26.4119 18.3134 29.6719C19.3908 32.932 21.3486 36.7541 24.187 41.1383ZM22.9293 45.9922C19.098 40.5363 16.4337 35.7004 14.9362 31.4845C13.4387 27.2686 13.0855 23.6342 13.8766 20.5814C15.0632 16.0023 17.4814 12.7359 21.1314 10.7823C24.7814 8.82867 28.5449 8.35419 32.4219 9.35883C36.2989 10.3635 39.3584 12.606 41.6003 16.0863C43.8422 19.5666 44.3698 23.5964 43.1833 28.1756C42.3922 31.2283 40.3185 34.2338 36.962 37.1919C33.6056 40.1501 28.928 43.0835 22.9293 45.9922Z"
                              fill="#1E4E69"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_88_321">
                            <rect fill="white" height="45.4119" transform="translate(11.3911) rotate(14.5273)"
                                  width="45.4119"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <h4 class="text-center mb-2">Angouleme</h4>
            <p class="text-center">Studying for a BUT in multimedia and Internet</p>
        </div>

        <!-- CARD - FREELANCE -->
        <div class="mb-32 mx-8">
            <div class="image w-48 relative mx-auto mb-4">
                <img alt="Freelancing" class="w-full h-full object-cover object-top" src="/images/freelance.webp"/>
            </div>
            <h4 class="text-center mb-2">Freelancing</h4>
            <p class="text-center">Making progress on my personal projects and working as a freelancer</p>
        </div>

        <!-- TITLE - TIMELINE -->
        <span aria-hidden="true" class="pointer-events-none absolute h-[400px]" id="timeline"
              style="top: 1600px;"></span>
        <div class="flex flex-row gap-4 items-center mb-12 mt-16">
            <h1>TIMELINE</h1>
        </div>

        <!-- TIMELINE -->
        <div class="flex flex-col gap-16 mb-32 mx-8">
            <div class="text-center">
                <span class="year">2006</span>
                <span class="label block mt-2">Born in Angers, France</span>
            </div>

            <div class="text-center">
                <span class="year">2021</span>
                <div class="image w-48 relative mx-auto my-4">
                    <img alt="freelancing" class="w-full h-full object-cover object-top" src="/images/fiverr.webp"/>
                </div>
                <p class="text-center">⭐ Started my freelancing carrier on Fiverr and got my first client</p>
            </div>

            <div class="text-center">
                <span class="year">2022 - 2023</span>
            </div>

            <div class="text-center">
                <span class="year">June 2024</span>
                <div class="image w-48 relative mx-auto my-4">
                    <img alt="baccalaureate" class="w-full h-full object-cover object-top" src="/images/bac.webp"/>
                </div>
                <p class="text-center">I passed my STI2D baccalaureate with honors 🎓📜</p>
            </div>

            <div class="text-center">
                <span class="year">August 2024</span>
                <div class="image w-48 relative mx-auto my-4">
                    <img alt="angouleme" class="w-full h-full object-cover object-top" src="/images/angouleme.webp"/>
                    <svg class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 me-4 size-10"
                         fill="none" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_88_321_2)">
                            <path d="M21.7059 28.0833L25.3693 29.0325L26.6745 23.9955L30.3379 24.9447L29.0326 29.9818L32.696 30.9311L34.9505 22.2307L30.4047 17.1434L23.9604 19.3829L21.7059 28.0833ZM24.187 41.1383C28.7974 38.6842 32.3651 36.2939 34.89 33.9674C37.415 31.6408 38.9583 29.3938 39.5199 27.2263C40.3822 23.8988 40.0274 20.8993 38.4555 18.2278C36.8836 15.5563 34.5559 13.8211 31.4726 13.0222C28.3893 12.2232 25.5119 12.6097 22.8405 14.1816C20.169 15.7535 18.4022 18.2032 17.5399 21.5307C16.9783 23.6982 17.2361 26.4119 18.3134 29.6719C19.3908 32.932 21.3486 36.7541 24.187 41.1383ZM22.9293 45.9922C19.098 40.5363 16.4337 35.7004 14.9362 31.4845C13.4387 27.2686 13.0855 23.6342 13.8766 20.5814C15.0632 16.0023 17.4814 12.7359 21.1314 10.7823C24.7814 8.82867 28.5449 8.35419 32.4219 9.35883C36.2989 10.3635 39.3584 12.606 41.6003 16.0863C43.8422 19.5666 44.3698 23.5964 43.1833 28.1756C42.3922 31.2283 40.3185 34.2338 36.962 37.1919C33.6056 40.1501 28.928 43.0835 22.9293 45.9922Z"
                                  fill="#1E4E69"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_88_321_2">
                                <rect fill="white" height="45.4119" transform="translate(11.3911) rotate(14.5273)"
                                      width="45.4119"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <h4 class="text-center mb-2">Angouleme</h4>
                <p class="text-center">Moving to</p>
            </div>
        </div>

        <!-- TITLE - TO BE CONTINUED -->
        <div class="flex flex-row gap-4 items-center mb-16">
            <h1>TO BE CONTINUED</h1>
        </div>
    </div>
</section>

<style>
    @keyframes bounce {
        0% {
            scale: 1;
            rotate: 0;
        }
        50% {
            scale: 1.1;
        }
        100% {
            scale: 1;
            rotate: 0;
        }
    }

    span {
        font-size: 16px;
        font-weight: 300;
        line-height: 125%;
    }

    p {
        font-size: 16px;
        font-weight: 300;
        line-height: 125%;
    }

    .year {
        color: #17320A;
        text-align: center;
        font-family: Gluten, sans-serif;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 80%;
    }

    .label {
        color: #17320A;
        font-family: Gluten, sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }

    .image {
        border-radius: 20px;
        border: 4px solid #D0DDCA;
        aspect-ratio: 16/10;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.175, 1, 0.175, 2)
    }

    .image:hover {
        scale: 1.05;
        rotate: 1deg;
    }

    h1 {
        color: #17320A;
        text-align: center;
        font-family: Gluten, sans-serif;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    h4 {
        color: #041823;
        font-family: Gluten, sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 115%;
    }
</style>