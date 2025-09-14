import {paraglideVitePlugin} from '@inlang/paraglide-js'
import tailwindcss from '@tailwindcss/vite';
import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';

export default defineConfig({
    plugins: [
        paraglideVitePlugin({
            project: './project.inlang',
            outdir: './src/paraglide',
            strategy: ["localStorage", "preferredLanguage", "url", "baseLocale"],
        }),
        tailwindcss(),
        sveltekit()
    ],
    build: {
        rollupOptions: {
            output: {
                experimentalMinChunkSize: 500_000,
            }
        }
    }
});
