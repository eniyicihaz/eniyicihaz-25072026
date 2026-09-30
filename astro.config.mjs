// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

// Design-system documentation pages live in src/pages/_ds (the leading underscore keeps Astro's file router from
// producing routes for them, so `astro build` emits none of them). In `astro dev` only, this integration serves
// them at /ds/... exactly as before, so the design system can still be browsed locally.
/** @returns {import('astro').AstroIntegration} */
function dsDevRoutes() {
  return {
    name: 'ds-dev-routes',
    hooks: {
      'astro:config:setup': ({ command, injectRoute, config }) => {
        if (command !== 'dev') return;
        const root = fileURLToPath(config.root);
        const base = join(root, 'src', 'pages', '_ds');
        /** @param {string} dir @returns {string[]} */
        const walk = (dir) =>
          readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
            const p = join(dir, e.name);
            return e.isDirectory() ? walk(p) : e.name.endsWith('.astro') ? [p] : [];
          });
        for (const file of walk(base)) {
          const rel = relative(base, file).split(sep).join('/').replace(/\.astro$/, '');
          if (rel.split('/').some((seg) => seg.startsWith('_'))) continue; // partials (e.g. _list.astro) are not routes
          const pattern = '/ds' + (rel === 'index' ? '' : '/' + rel.replace(/\/index$/, ''));
          injectRoute({ pattern, entrypoint: relative(root, file).split(sep).join('/') });
        }
      },
    },
  };
}

// site: gerçek prod adresi (COMPANY.md "Resmi Web Sitesi") — canonical/OG
// etiketleri ve @astrojs/sitemap için gereklidir, aksi halde bunlar göreli
// veya eksik URL üretir.
export default defineConfig({
  site: 'https://www.eniyicihaz.com',
  integrations: [
    dsDevRoutes(),
    sitemap({
      // Safety net: /ds/* is internal Design System documentation and is not built for production any more;
      // if it ever returns it must still stay out of the sitemap.
      filter: (page) => !new URL(page).pathname.startsWith('/ds/'),
    }),
  ],
});
