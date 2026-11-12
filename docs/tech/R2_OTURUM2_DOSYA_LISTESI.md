# R2_OTURUM2_DOSYA_LISTESI.md

> **Durum:** ACTIVE · Teknik belge · Oluşturulma: 2026-11-11 (2. tur, ikinci oturum) · **Otomatik üretildi**
> **Amaç:** İkinci oturumda değişen ve eklenen dosyaların **tam listesi**. Kaynak: oturum başında alınan içerik özeti (SHA-1) listesi ile oturum sonundaki çalışma ağacının karşılaştırması (`node_modules`, `dist`, `.git`, `.astro`, `.wrangler`, `.claude`, `.vscode` hariç).
> **Not:** Bu liste yalnızca **bu oturumun** farkıdır. Oturum başında çalışma ağacında zaten bulunan (commit edilmemiş) önceki tur değişiklikleri burada sayılmaz; onlar olduğu gibi korunmuştur. **Hiçbir dosya silinmedi.**

**Özet:** 283 dosya değişti · 241 dosya eklendi · 0 dosya silindi.

## 1. Eklenen dosyalar

### 1.1 Kod, belge ve tekil görseller

- `docs/tech/R2_OTURUM2_DOSYA_LISTESI.md`
- `docs/tech/R2_OTURUM2_RAPOR.md`
- `docs/tech/page-review/G1-kurumsal-yerel-hub.md`
- `docs/tech/page-review/G2-pillar.md`
- `docs/tech/page-review/G3-cihaz-turu-segment.md`
- `docs/tech/page-review/G4-markalar.md`
- `docs/tech/page-review/G5-degerlendirme-uygulama-ayar.md`
- `docs/tech/page-review/G6-servis-neden-orijinal.md`
- `docs/tech/page-review/G7-teknoloji-ihtiyaca-gore.md`
- `docs/tech/page-review/G8-sgk-rehber-blog-kvkk.md`
- `docs/tech/page-review/README.md`
- `docs/tech/page-review/sayfa-degisiklik-ozeti.tsv`
- `docs/tech/page-review/uygulanan-metin-duzeltmeleri.tsv`
- `public/images/homepage/hero-device-bte-320.avif`
- `public/images/homepage/hero-device-bte-320.webp`
- `public/images/homepage/hero-device-bte-480.avif`
- `public/images/homepage/hero-device-bte-480.webp`
- `src/components/device-types/EarDiagram.astro`
- `src/components/viewer360/viewer360.client.js`
- `src/lib/ref-links.ts`

### 1.2 360° görüntüleyici kareleri (son üretim dosyaları)

- `public/images/viewer360/bte-kahve/1080/` — 72 dosya (`kare-01.webp` … `kare-72.webp`)
- `public/images/viewer360/bte-kahve/720/` — 72 dosya (`kare-01.webp` … `kare-72.webp`)

### 1.3 Ham referans malzeme (işletme sahibinin koyduğu; siteye **eklenmez**, derlemeye girmez)

- `reference-assets/hearing-aid-360/` — 77 dosya (fotoğraflar + 1 video). Depoya alınıp alınmayacağı sahibinin kararıdır.

## 2. Değişen dosyalar

### Bileşenler (`src/components/`) — 26 dosya

- `src/components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro`
- `src/components/brand-page/BrandPageFaq/BrandPageFaq.astro`
- `src/components/brand-page/BrandPageHero/BrandPageHero.astro`
- `src/components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro`
- `src/components/brand-page/OnarimTakibiHero/OnarimTakibiHero.astro`
- `src/components/brand-page/SgkKatkiPayiHero/SgkKatkiPayiHero.astro`
- `src/components/brand-page/SikSorulanSorularHero/SikSorulanSorularHero.astro`
- `src/components/brand-page/TeknikServisHero/TeknikServisHero.astro`
- `src/components/brand-page/YayginServisAgiHero/YayginServisAgiHero.astro`
- `src/components/brands/BrandFaq/BrandFaq.astro`
- `src/components/brands/BrandHero/BrandHero.astro`
- `src/components/brands/KnowledgeHero/KnowledgeHero.astro`
- `src/components/brands/ServicesHero/ServicesHero.astro`
- `src/components/contact-dock/ContactDock/ContactDock.astro`
- `src/components/contact/ContactHero/ContactHero.astro`
- `src/components/device-types/DeviceTypeCarousel.astro`
- `src/components/device-types/DeviceTypeScroller.astro`
- `src/components/header/Header/Header.astro`
- `src/components/header/Header/molecules/Logo/Logo.astro`
- `src/components/home/HeroDeviceStage.astro`
- `src/components/home/HomeExplore.astro`
- `src/components/shared/CtaButton/CtaButton.astro`
- `src/components/shared/ExperienceHero/ExperienceHero.astro`
- `src/components/shared/HomeVisitFlow/HomeVisitFlow.astro`
- `src/components/shared/SoundProfileHero/SoundProfileHero.astro`
- `src/components/viewer360/Viewer360.astro`

### Sayfalar (`src/pages/`) — 7 dosya

- `src/pages/_ds/components/time-picker.astro`
- `src/pages/darica-isitme-cihazlari.astro`
- `src/pages/index.astro`
- `src/pages/isitme-cihazi-fiyatlari.astro`
- `src/pages/isitme-cihazlari/kulak-arkasi-bte.astro`
- `src/pages/servis-bakim/periyodik-bakim.astro`
- `src/pages/uygulama-ayar/uzaktan-ayar.astro`

### Düzen, ara katman, kitaplık, yapılandırma (`src/layouts`, `src/middleware.ts`, `src/lib`, `src/config`) — 3 dosya

- `src/config/site-map.ts`
- `src/layouts/MainLayout.astro`
- `src/middleware.ts`

### Tasarım sistemi stilleri (`src/ds/`) — 2 dosya

- `src/ds/styles/base/a11y-prefs.css`
- `src/ds/styles/base/typography.css`

### İçerik verisi (`src/data/`) — 239 dosya

- `src/data/` (2): `hubs.ts`, `viewer360.ts`
- `src/data/aktif-yasam-icin-cihazlar/` (4): `considerations.ts`, `expert-opinion.ts`, `ideal-user.ts`, `intro.ts`
- `src/data/basari-hikayeleri/` (4): `advantages.ts`, `faq.ts`, `hero.ts`, `intro.ts`
- `src/data/bluetooth/` (1): `expert-opinion.ts`
- `src/data/brand-simple/` (1): `build.ts`
- `src/data/brand-unique/` (12): `audifon.ts`, `beltone.ts`, `bernafon.ts`, `build.ts`, `coselgi.ts`, `maico.ts`, `nuear.ts`, `philips-hearing.ts`, `resound.ts`, `rexton.ts`, `topic-links.ts`, `widex.ts`
- `src/data/brands/` (1): `expert-support.ts`
- `src/data/cayirova/` (1): `copy-blocks.ts`
- `src/data/cihaz-deneme/` (1): `comparison.ts`
- `src/data/cihaz-secim-rehberi/` (2): `advantages.ts`, `use-cases.ts`
- `src/data/cihaz-temizligi/` (6): `considerations.ts`, `evolution.ts`, `faq.ts`, `intro.ts`, `technology.ts`, `use-cases.ts`
- `src/data/cihaz-uygulama/` (2): `final-cta.ts`, `ideal-user.ts`
- `src/data/cocuk-isitme-testi/` (1): `faq.ts`
- `src/data/cocuklara-ozel/` (4): `advantages.ts`, `expert-opinion.ts`, `ideal-user.ts`, `intro.ts`
- `src/data/cocuklarda-sgk/` (2): `faq.ts`, `use-cases.ts`
- `src/data/cok-ileri-derece-isitme-kaybi/` (4): `advantages.ts`, `comparison.ts`, `expert-opinion.ts`, `intro.ts`
- `src/data/device-types/` (2): `carousel.ts`, `scroller.ts`
- `src/data/ekonomik-seri/` (2): `advantages.ts`, `considerations.ts`
- `src/data/etkinlikler/` (8): `advantages.ts`, `comparison.ts`, `considerations.ts`, `faq.ts`, `final-cta.ts`, `hero.ts`, `ideal-user.ts`, `intro.ts`
- `src/data/evde-isitme-cihazi-hizmeti/` (2): `final-cta.ts`, `hero.ts`
- `src/data/garanti-islemleri/` (2): `advantages.ts`, `faq.ts`
- `src/data/gebze/` (1): `hero.ts`
- `src/data/gorunmez-cic/` (4): `expert-opinion.ts`, `faq.ts`, `ideal-user.ts`, `intro.ts`
- `src/data/gurultu-engelleme/` (1): `expert-opinion.ts`
- `src/data/guvenilir-teknoloji/` (1): `advantages.ts`
- `src/data/hafif-isitme-kaybi/` (2): `expert-opinion.ts`, `intro.ts`
- `src/data/hakkimizda/` (1): `center-gallery.ts`
- `src/data/home/` (1): `hero.ts`
- `src/data/ileri-derece-isitme-kaybi/` (2): `expert-opinion.ts`, `intro.ts`
- `src/data/ilk-kullanim-rehberi/` (2): `considerations.ts`, `related-content.ts`
- `src/data/isitme-cihazi-fiyatlari/` (2): `faq.ts`, `page.ts`
- `src/data/isitme-cihazi-markalari/` (1): `profiles.ts`
- `src/data/isitme-cihazlari/` (2): `faq.ts`, `types.ts`
- `src/data/isitme-kaybi-nedir/` (1): `intro.ts`
- `src/data/kablosuz-baglanti/` (3): `advantages.ts`, `expert-opinion.ts`, `related-content.ts`
- `src/data/kalip-alimi/` (3): `advantages.ts`, `ideal-user.ts`, `technology.ts`
- `src/data/kampanyalar/` (4): `advantages.ts`, `hero.ts`, `ideal-user.ts`, `intro.ts`
- `src/data/kisiye-ozel-programlama/` (3): `final-cta.ts`, `related-content.ts`, `technology.ts`
- `src/data/knowledge/` (3): `expert-support.ts`, `faq.ts`, `showcase.ts`
- `src/data/kocaeli/` (2): `copy-blocks.ts`, `faq.ts`
- `src/data/kolay-degisim/` (2): `faq.ts`, `ideal-user.ts`
- `src/data/kontrol-randevusu/` (6): `advantages.ts`, `final-cta.ts`, `ideal-user.ts`, `related-content.ts`, `technology.ts`, `use-cases.ts`
- `src/data/konusma-odakli/` (2): `expert-opinion.ts`, `related-content.ts`
- `src/data/kulak-arkasi/` (5): `advantages.ts`, `comparison.ts`, `expert-opinion.ts`, `hero.ts`, `technology.ts`
- `src/data/kulak-ici/` (1): `expert-opinion.ts`
- `src/data/nuear/` (5): `advantages.ts`, `ecosystem.ts`, `faq.ts`, `ideal-user.ts`, `technology.ts`
- `src/data/odyometri/` (3): `ideal-user.ts`, `intro.ts`, `technology.ts`
- `src/data/onarim-takibi/` (1): `considerations.ts`
- `src/data/online-isitme-testi/` (2): `faq.ts`, `related-content.ts`
- `src/data/orijinal-aksesuar/` (3): `final-cta.ts`, `hero.ts`, `intro.ts`
- `src/data/orta-derece-isitme-kaybi/` (2): `expert-opinion.ts`, `intro.ts`
- `src/data/periyodik-bakim/` (12): `advantages.ts`, `comparison.ts`, `considerations.ts`, `evolution.ts`, `faq.ts`, `final-cta.ts`, `hero.ts`, `ideal-user.ts`, `intro.ts`, `recommended-brands.ts`, `technology.ts`, `use-cases.ts`
- `src/data/pil-aksesuar/` (5): `advantages.ts`, `comparison.ts`, `faq.ts`, `recommended-brands.ts`, `use-cases.ts`
- `src/data/premium-seri/` (7): `advantages.ts`, `faq.ts`, `hero.ts`, `ideal-user.ts`, `intro.ts`, `technology.ts`, `use-cases.ts`
- `src/data/rapor-sureci/` (1): `considerations.ts`
- `src/data/resound/` (5): `advantages.ts`, `ecosystem.ts`, `faq.ts`, `ideal-user.ts`, `technology.ts`
- `src/data/sarj-edilebilir/` (3): `considerations.ts`, `expert-opinion.ts`, `hero.ts`
- `src/data/sarjli-teknolojiler/` (3): `expert-opinion.ts`, `recommended-brands.ts`, `use-cases.ts`
- `src/data/search/` (1): `index.ts`
- `src/data/services/` (1): `decision.ts`
- `src/data/sgk/` (1): `insight.ts`
- `src/data/sik-sorulan-sorular/` (5): `final-cta.ts`, `hero.ts`, `ideal-user.ts`, `intro.ts`, `use-cases.ts`
- `src/data/site-haritasi/` (1): `index.ts`
- `src/data/standart-seri/` (2): `advantages.ts`, `ideal-user.ts`
- `src/data/suya-dayanikli/` (2): `expert-opinion.ts`, `ideal-user.ts`
- `src/data/tek-tarafli-isitme-kaybi/` (5): `advantages.ts`, `considerations.ts`, `expert-opinion.ts`, `intro.ts`, `recommended-brands.ts`
- `src/data/teknik-servis/` (1): `hero.ts`
- `src/data/timpanometri/` (1): `comparison.ts`
- `src/data/tinnitus-cozumleri/` (1): `expert-opinion.ts`
- `src/data/tinnitus-degerlendirme/` (2): `comparison.ts`, `intro.ts`
- `src/data/uyum-sureci/` (2): `comparison.ts`, `intro.ts`
- `src/data/uzaktan-ayar/` (10): `advantages.ts`, `comparison.ts`, `considerations.ts`, `expert-opinion.ts`, `faq.ts`, `final-cta.ts`, `hero.ts`, `ideal-user.ts`, `intro.ts`, `technology.ts`
- `src/data/uzaktan-kontrol/` (11): `advantages.ts`, `comparison.ts`, `considerations.ts`, `evolution.ts`, `expert-opinion.ts`, `faq.ts`, `hero.ts`, `ideal-user.ts`, `recommended-brands.ts`, `technology.ts`, `use-cases.ts`
- `src/data/uzman-gorusleri/` (6): `evolution.ts`, `expert-opinion.ts`, `faq.ts`, `intro.ts`, `technology.ts`, `use-cases.ts`
- `src/data/uzun-omurlu-cihazlar/` (4): `considerations.ts`, `final-cta.ts`, `hero.ts`, `technology.ts`
- `src/data/yapay-zeka-destekli/` (3): `expert-opinion.ts`, `faq.ts`, `related-content.ts`
- `src/data/yaslilar-icin-cihazlar/` (7): `comparison.ts`, `evolution.ts`, `expert-opinion.ts`, `faq.ts`, `ideal-user.ts`, `intro.ts`, `technology.ts`
- `src/data/yenileme-hakki/` (2): `considerations.ts`, `related-content.ts`

### Belgeler (`docs/`) — 5 dosya

- `docs/DECISIONS.md`
- `docs/tech/PAGE_CONTROL_MATRIX.md`
- `docs/tech/PERFORMANCE_LCP.md`
- `docs/tech/REDIRECT_AUDIT.md`
- `docs/tech/VIEWER_360.md`

### Genel dosyalar (`public/`) — 1 dosya

- `public/_redirects`

## 3. Silinen dosyalar

Yok.
