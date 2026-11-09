// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const searchDirectory = path.resolve(fileURLToPath(new URL('./dist/pagefind/', import.meta.url)));

function localSearchIndex() {
	return {
		name: 'local-search-index',
		hooks: {
			'astro:server:setup': ({ server }) => {
				server.middlewares.use('/pagefind', async (request, response, next) => {
					try {
						const pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
						const file = path.resolve(searchDirectory, `.${pathname}`);
						if (!file.startsWith(`${searchDirectory}${path.sep}`) && file !== searchDirectory) {
							response.writeHead(403).end();
							return;
						}
						const content = await readFile(file);
						const extension = path.extname(file);
						response.setHeader('Content-Type', extension === '.js' ? 'text/javascript' : extension === '.wasm' ? 'application/wasm' : 'application/octet-stream');
						response.setHeader('Cache-Control', 'no-store');
						response.end(content);
					} catch (error) {
						if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
							response.writeHead(404).end('Search index not found. Run npm run build.');
							return;
						}
						next(error);
					}
				});
			},
		},
	};
}

// https://astro.build/config
export default defineConfig({
	site: 'https://antikapitalistaliga.hu',
	integrations: [
		localSearchIndex(),
		sitemap({
			filter: (page) => !['/velemeny/', '/irasok/'].includes(new URL(page).pathname),
		}),
	],
	redirects: {
		"/velemeny/": "/magazin/velemeny/",
		"/irasok/": "/magazin/essze/",
	},
});
