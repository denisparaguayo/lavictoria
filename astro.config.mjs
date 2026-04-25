// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://marmolerialavictoria.com',
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
		server: {
			allowedHosts: true,
		},
		preview: {
			allowedHosts: true,
		},
	},
	legacy: {
		collections: true,
	},
});
