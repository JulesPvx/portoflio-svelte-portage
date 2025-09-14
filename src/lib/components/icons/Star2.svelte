<script lang="ts">
    const {
        class: klass = '',
        ...rest
    }: {
        class?: string
    } = $props();
</script>

<svg {...rest} class={klass} fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_79_28)">
        <mask height="48" id="mask0_79_28" maskUnits="userSpaceOnUse" style="mask-type:luminance" width="48" x="0"
              y="0">
            <path d="M48 0H0V48H48V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_79_28)">
            <path d="M21.5836 1.47087C22.5977 -0.490291 25.4023 -0.490291 26.4163 1.47087L32.8735 13.9595C33.1322 14.4599 33.54 14.8677 34.0406 15.1264L46.529 21.5836C48.4903 22.5977 48.4903 25.4023 46.529 26.4163L34.0406 32.8735C33.54 33.1322 33.1322 33.54 32.8735 34.0406L26.4163 46.529C25.4023 48.4903 22.5977 48.4903 21.5836 46.529L15.1264 34.0406C14.8677 33.54 14.4599 33.1322 13.9595 32.8735L1.47087 26.4163C-0.490291 25.4023 -0.490291 22.5977 1.47087 21.5836L13.9595 15.1264C14.4599 14.8677 14.8677 14.4599 15.1264 13.9595L21.5836 1.47087Z"
                  fill="url(#paint0_radial_79_28)"/>
        </g>
    </g>
    <defs>
        <radialGradient cx="0" cy="0"
                        gradientTransform="translate(31.7194 28.9486) rotate(105.955) scale(22.1208 14.129)"
                        gradientUnits="userSpaceOnUse" id="paint0_radial_79_28"
                        r="1">
            <stop offset="0.275" stop-color="#3F6836"/>
            <stop offset="1" stop-color="#3F6836" stop-opacity="0.8"/>
        </radialGradient>
        <clipPath id="clip0_79_28">
            <rect fill="white" height="48" width="48"/>
        </clipPath>
    </defs>
</svg>