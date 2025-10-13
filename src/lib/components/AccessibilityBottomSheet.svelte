<script lang="ts">
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

    $effect(() => {
        if (!opened) {
            translateY = 0;
        }

        // Block/unblock scroll
        if (opened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup on unmount
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

        // Only allow dragging down
        if (diff > 0) {
            translateY = diff;
        }
    }

    function handleTouchEnd() {
        isDragging = false;

        if (translateY > 100) {
            // Dismiss if dragged down more than 100px
            dismiss();
        } else {
            // Snap back
            translateY = 0;
        }
    }
</script>

{#if opened}
    <div class="bg-black/20 w-screen h-screen fixed top-0 z-100"
            onclick={dismiss}
            aria-hidden="true"
    >

    </div>

    <div class="w-screen h-64 bg-white fixed bottom-0 z-1000 rounded-t-[15vw]"
         style="transform: translateY({translateY}px); transition-duration: {isDragging ? '0ms' : '300ms'};"
         ontouchstart={handleTouchStart}
         ontouchmove={handleTouchMove}
         ontouchend={handleTouchEnd}
         role="dialog"
         aria-modal="true"
    >
        <div class="bg-gray-300 w-16 h-1 rounded-full absolute top-4 left-1/2 -translate-x-1/2">

        </div>
    </div>
{/if}