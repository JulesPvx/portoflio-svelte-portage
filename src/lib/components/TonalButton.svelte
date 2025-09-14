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
        display: flex;
        padding: 16px 32px;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        border-radius: 73px;
        background: #75A86A;
        color: #FFF;
        font-family: Gluten, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        transition: all 0.3s cubic-bezier(0.175, 1, 0.175, 2), background 0.2s ease;

        &:hover {
            background: #4e7546;
            font-weight: bold;
        }
    }
</style>