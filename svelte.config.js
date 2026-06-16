import adapter from '@sveltejs/adapter-node';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        alias: {
            "$paraglide/*": "src/paraglide/*"
        },
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
        }),
        csp: {
            mode: 'auto',
            directives: {
                'script-src': ['self', 'unsafe-inline', 'https://umami.julespvx.fr'],
                'connect-src': ['self', 'https://umami.julespvx.fr']
            }
        }
    }
};

export default config;
