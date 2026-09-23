// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// site: gerçek prod adresi (COMPANY.md "Resmi Web Sitesi") — canonical/OG
// etiketleri ve @astrojs/sitemap için gereklidir, aksi halde bunlar göreli
// veya eksik URL üretir.
export default defineConfig({
  site: 'https://www.eniyicihaz.com',
  integrations: [sitemap()],
});
