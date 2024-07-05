import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    optimizeDeps: {
        esbuildOptions: {
            target: "esnext",
        },
        exclude: ["@peerbit/any-store"],
    },
    build: {
        target: "esnext",
    },
	plugins: [sveltekit()]
});
