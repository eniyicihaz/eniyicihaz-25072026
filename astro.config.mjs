// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// site: gerçek prod adresi (COMPANY.md "Resmi Web Sitesi") — canonical/OG
// etiketleri ve @astrojs/sitemap için gereklidir, aksi halde bunlar göreli
// veya eksik URL üretir.
export default defineConfig({
  site: 'https://www.eniyicihaz.com',
  integrations: [
    sitemap({
      // /ds/* is internal Design System documentation, not real site
      // content — excluded from the sitemap so it isn't submitted to
      // search engines. Everything else is unaffected.
      filter: (page) => !new URL(page).pathname.startsWith('/ds/'),
    }),
  ],
});
