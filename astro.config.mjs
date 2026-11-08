// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://antikapitalistaliga.hu',
	integrations: [
		sitemap({
			filter: (page) => !['/velemeny/', '/irasok/'].includes(new URL(page).pathname),
		}),
	],
	redirects: {
		"/velemeny/": "/magazin/velemeny/",
		"/irasok/": "/magazin/essze/",
	},
});
