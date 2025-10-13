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
            strategy: ["localStorage", "preferredLanguage", "url", "baseLocale"],
            urlPatterns: [
                {
                    pattern: "/:path(.*)?",
                    localized: [
                        ["fr", "/fr/:path(.*)?"],
                        ["en", "/en/:path(.*)?"],
                    ],
                },
            ],
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
