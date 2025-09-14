<script lang="ts">
    const {
        icon,
        title,
        body
    }: {
        icon: string;
        title: string;
        body: string;
    } = $props()

    const iconHTML = $state(import(`../assets/icons/${icon}.svg?raw`))
</script>

<li id="principle-card">
    <div class="icon">
        {#await iconHTML}
            <div class="loading-placeholder"></div>
        {:then module}
            {@html module.default}
        {/await}
    </div>
    <h2 class="mt-8">{title}</h2>
    <p class="mt-4">{body}</p>
</li>

<style>
    #principle-card {
        flex: 1 1 0; /* Grow and shrink equally, initial size 0 */
        min-width: 200px; /* Adjust the minimum width as needed */
        border-radius: 12px;
        padding: 24px;
        transition: all 0.3s cubic-bezier(0.175, 1, 0.175, 2), background 0.2s ease;
    }

    #principle-card:hover {
        background: rgba(245, 245, 245, 0.9);
        border-radius: 12px;
        padding: 24px;
        scale: 1.1;
        rotate: -2deg;
        box-shadow: 0 1px 50px 0 rgba(0, 0, 0, 0.1);
    }

    h2 {
        font-family: Gluten, sans-serif;
        color: #000;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    p {
        color: rgba(0, 0, 0, 0.80);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
</style>