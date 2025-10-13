<script lang="ts">
    import PlayStoreIcon from '$lib/assets/icons/Google_Play_Arrow_logo.svg';

    const {
        href,
        icon,
        children,
        class: klass = '',
        ...rest
    }: {
        href: string;
        icon: string;
        class?: string;
        children: any;
    } = $props();
</script>

<a {...rest} class={klass} href={href} rel="noopener noreferrer" target="_blank">
    <img alt="Play Store" class="h-6" src={PlayStoreIcon} style="height: 24px; width: 24px;"/>
    {@render children?.()}
</a>

<style>
    a {
        width: fit-content;
        padding: 16px 32px;
        display: flex;
        flex-direction: row;
        gap: 8px;
        justify-content: center;
        align-items: center;
        border-radius: 1000px;
        background: #000;
        color: #FFF;
        font-family: Gluten, sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        transition: all 0.3s cubic-bezier(0.175, 1, 0.175, 2), background 0.2s ease;
        text-align: center;

        &:hover {
            font-weight: 500;
        }
    }
</style>