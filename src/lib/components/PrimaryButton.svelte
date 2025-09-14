<script lang="ts">
    const {
        href,
        class: klass,
        children
    }: {
        href: string;
        class?: string;
        children: any;
    } = $props();
</script>

<a class={klass} href={href}>
    {@render children?.()}
</a>

<style>
    a {
        padding: 16px 32px;
        justify-content: center;
        align-items: center;
        border-radius: 1000px;
        background: #3F6836;
        color: #FFF;
        font-family: Gluten, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        transition: all 0.3s cubic-bezier(0.175, 1, 0.175, 2), background 0.2s ease;

        &:hover {
            background: #182e18;
            font-weight: bold;
        }
    }
</style>