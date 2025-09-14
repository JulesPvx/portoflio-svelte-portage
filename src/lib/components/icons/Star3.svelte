<script lang="ts">
    const {
        class: klass = '',
        ...rest
    }: {
        class?: string
    } = $props();
</script>

<svg {...rest} class={klass} fill="none" viewBox="0 0 48 47"
     xmlns="http://www.w3.org/2000/svg">
    <mask height="47" id="mask0_81_89" maskUnits="userSpaceOnUse" style="mask-type:luminance" width="48" x="0" y="0">
        <path d="M48 0.226074H0V46.4502H48V0.226074Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_81_89)">
        <path d="M21.5836 1.64253C22.5977 -0.246077 25.4023 -0.246077 26.4163 1.64253L32.8735 13.6691C33.1322 14.151 33.54 14.5437 34.0406 14.7929L46.529 21.0112C48.4903 21.9877 48.4903 24.6886 46.529 25.665L34.0406 31.8833C33.54 32.1325 33.1322 32.5252 32.8735 33.0073L26.4163 45.0336C25.4023 46.9224 22.5977 46.9224 21.5836 45.0336L15.1264 33.0073C14.8677 32.5252 14.4599 32.1325 13.9595 31.8833L1.47087 25.665C-0.490291 24.6886 -0.490291 21.9877 1.47087 21.0112L13.9595 14.7929C14.4599 14.5437 14.8677 14.151 15.1264 13.6691L21.5836 1.64253Z"
              fill="url(#paint0_radial_81_89)"/>
    </g>
    <defs>
        <radialGradient cx="0" cy="0" gradientTransform="translate(37.5 40) rotate(-63.9582) scale(48.9719 32.29)"
                        gradientUnits="userSpaceOnUse" id="paint0_radial_81_89"
                        r="1">
            <stop stop-color="#E8F6E1" stop-opacity="0.25"/>
            <stop offset="1" stop-color="#E8F6E1"/>
        </radialGradient>
    </defs>
</svg>