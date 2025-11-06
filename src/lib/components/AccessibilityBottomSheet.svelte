<script lang="ts">
    import {m} from "$paraglide/messages"

    const {
        opened = $bindable(false),
        dismiss = () => {}
    }: {
        opened: boolean;
        dismiss: () => void;
    } = $props();

    let startY = 0;
    let currentY = 0;
    let isDragging = $state(false);
    let translateY = $state(0);
    let isVisible = $state(false);
    let isMounted = $state(false);

    // Text size state (1 = 100%, 1.5 = 150%, etc.)
    let textSize = $state(1);

    // Load saved text size on mount
    $effect(() => {
        const saved = localStorage.getItem('textSize');
        if (saved) {
            textSize = parseFloat(saved);
            applyTextSize(textSize);
        }
    });

    function applyTextSize(size: number) {
        // Modify the root font-size (default is 16px)
        document.documentElement.style.fontSize = `${size * 100}%`;
        localStorage.setItem('textSize', size.toString());
    }

    $effect(() => {
        const saved = localStorage.getItem('textSize');
        if (saved) {
            textSize = parseFloat(saved);
            applyTextSize(textSize);
        }
    });

    function increaseTextSize() {
        if (textSize < 1.4) {
            textSize = Math.min(2, textSize + 0.1);
            applyTextSize(textSize);
        }
    }

    function decreaseTextSize() {
        if (textSize > 0.8) {
            textSize = Math.max(0.8, textSize - 0.1);
            applyTextSize(textSize);
        }
    }

    function resetTextSize() {
        textSize = 1;
        applyTextSize(textSize);
    }

    let isMobile = $state(false);

    $effect(() => {
        // Check if screen width is mobile-sized
        const checkMobile = () => {
            isMobile = window.matchMedia('(max-width: 768px)').matches;
        };

        checkMobile();

        // Listen for window resize
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    });

    $effect(() => {
        if (opened) {
            isMounted = true;
            requestAnimationFrame(() => {
                isVisible = true;
            });
        } else {
            isVisible = false;
            translateY = 0;
            const timeout = setTimeout(() => {
                isMounted = false;
            }, 300);
            return () => clearTimeout(timeout);
        }

        if (opened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    })

    function handleTouchStart(e: TouchEvent) {
        startY = e.touches[0].clientY;
        isDragging = true;
    }

    function handleTouchMove(e: TouchEvent) {
        if (!isDragging) return;

        currentY = e.touches[0].clientY;
        const diff = currentY - startY;

        if (diff > 0) {
            translateY = diff;
        }
    }

    function handleTouchEnd() {
        isDragging = false;

        if (translateY > 100) {
            dismiss();
        } else {
            translateY = 0;
        }
    }

    let accessibilityFont = $state(false);

    $effect(() => {
        const saved = localStorage.getItem('accessibilityFont');
        if (saved) {
            accessibilityFont = saved === 'true';
            applyAccessibilityFont(accessibilityFont);
        }
    });

    function applyAccessibilityFont(enabled: boolean) {
        if (enabled) {
            document.documentElement.style.setProperty('font-family', 'OpenDyslexic3, sans-serif');
            document.documentElement.setAttribute('data-accessibility-font', 'true');
        } else {
            document.documentElement.style.removeProperty('font-family');
            document.documentElement.removeAttribute('data-accessibility-font');
        }
        localStorage.setItem('accessibilityFont', enabled.toString());
    }


    function toggleAccessibilityFont() {
        accessibilityFont = !accessibilityFont;
        applyAccessibilityFont(accessibilityFont);
    }
</script>

{#if isMounted}
    <div class="bg-black/20 w-screen h-screen fixed top-0 z-100 transition-opacity duration-300"
         style="opacity: {isVisible ? 1 : 0};"
         onclick={dismiss}
         aria-hidden="true"
    >
    </div>

    <div class="w-screen bg-white fixed bottom-0 z-1000 rounded-t-[15vw] max- transition-transform duration-300 p-6 items-center flex flex-col"
         style="transform: translateY({isDragging ? translateY + 'px' : (isVisible ? 0 : 100) + '%'}); transition-duration: {isDragging ? '0ms' : '300ms'};"
         ontouchstart={handleTouchStart}
         ontouchmove={handleTouchMove}
         ontouchend={handleTouchEnd}
         role="dialog"
         aria-modal="true"
         aria-label={m.accessibility_settings()}
    >
        {#if isMobile}
            <div class="bg-gray-300 w-16 h-1 rounded-full absolute top-4 left-1/2 -translate-x-1/2"></div>
        {:else}
            <button class="bg-gray-100 py-2 w-[20vw] rounded-full absolute top-4 left-1/2 -translate-x-1/2 cursor-pointer hover:bg-gray-200 transition-colors"
            onclick={dismiss} aria-label="Close accessibility settings">
                {m.close().toUpperCase()}
            </button>
        {/if}

        <div class="flex flex-col gap-8 max-w-3xl w-full py-16">
            <div class="mt-16">
                <h2 class="text-xl font-bold mb-4">{m.text_size()}</h2>

                <div class="flex items-center h-10 mb-4">
                    <button
                            onclick={decreaseTextSize}
                            disabled={textSize <= 0.8}
                            class="px-4 py-2 bg-black text-white rounded-l-full disabled:opacity-50"
                            aria-label="Decrease text size"
                    >
                        A-
                    </button>

                    <span class="flex-1 h-full flex items-center justify-center text-center font-medium bg-black/10" aria-live="polite">
                    {Math.round(textSize * 100)}%
                </span>

                    <button
                            onclick={increaseTextSize}
                            disabled={textSize >= 1.4}
                            class="px-4 py-2 bg-black text-white rounded-r-full disabled:opacity-50"
                            aria-label="Increase text size"
                    >
                        A+
                    </button>
                    <button
                            onclick={resetTextSize}
                            class="px-4 py-2 bg-gray-200 rounded ms-4"
                    >
                        {m.reset_to_default()}
                    </button>
                </div>


                <p class="mt-4 text-sm text-gray-600">
                    {m.preview_text()}
                </p>
            </div>

            <div>
                <div class="flex gap-2 items-center">
                    <h2 class="text-xl font-bold">{m.accessibility_font()}</h2>

                    <label class="relative flex justify-between items-center group p-2 text-xl">
                        <input onchange={toggleAccessibilityFont} bind:checked={accessibilityFont} type="checkbox" class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
                        <span class="w-16 h-8 flex items-center flex-shrink-0 ml-0 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-6 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1 group-hover:bg-green-200"></span>
                    </label>
                </div>


                <p class="text-sm text-gray-600 font-opendyslexic3 mt-4">
                    {m.preview_text()}
                </p>
            </div>
        </div>
    </div>
{/if}
