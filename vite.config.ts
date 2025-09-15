import {paraglideVitePlugin} from '@inlang/paraglide-js'
import tailwindcss from '@tailwindcss/vite';
import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';
import {enhancedImages} from "@sveltejs/enhanced-img";

export default defineConfig({
    plugins: [
        enhancedImages(),
        paraglideVitePlugin({
            project: './project.inlang',
            outdir: './src/paraglide',
            strategy: ["url", "baseLocale"],
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
