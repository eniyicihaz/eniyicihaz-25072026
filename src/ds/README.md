# `src/ds/` — Design System Demo / Katalog

Bu klasör, projenin **`/ds/` demo/katalog Pattern Library'sini** barındırır — Atom seviyesi UI bileşenlerinin, çoklu tasarım diliyle (Corporate/Soft/Premium/Glass/Dark) sergilendiği bir referans/showcase alanıdır.

## Bu klasörün kapsamı NEDİR

- `src/ds/tokens/themes/*.css`, `src/ds/themes/*/*.css` — 5 tema (Corporate, Soft, Premium, Glass, Dark) için token ve component override'ları.
- `src/ds/DESIGN_LANGUAGES.md` — bu 5 temanın felsefe/karakter tanımı.
- `src/ds/COMPONENT_THEMING.md` — component × tema eşleşme tablosu (büyük ölçüde henüz boş şablon).
- `src/ds/components/` — Pattern Library'nin kendi Atom bileşenleri.
- `src/ds/styles/base/variables.css` — **canlı sitenin de kullandığı** temel token dosyası (bkz. aşağıda "Kapsam NE DEĞİL").

## Bu klasörün kapsamı NE DEĞİL

`/ds/` demo kataloğu, canlı sitenin (`src/pages`, `src/components`, `src/layouts`) kendisi **değildir**:

- Canlı sitede `data-theme`, `theme-dark` vb. hiçbir 5-tema referansı kullanılmaz; canlı site tek bir görsel dile (Light-only) sahiptir.
- `/ds/*` rotaları XML sitemap'ten hariç tutulur ve `noindex, nofollow` ile işaretlidir (bkz. `astro.config.mjs`, `src/ds/layouts/DSLayout.astro`) — arama motorlarına ve gerçek kullanıcı deneyimine yönelik değildir.
- `src/ds/DESIGN_LANGUAGES.md` ve `src/ds/COMPONENT_THEMING.md`'deki 5 temadan hiçbiri canlı site için kanonik değildir.

**İstisna:** `src/ds/styles/base/variables.css` bu genel kuralın dışındadır — canlı site `MainLayout.astro` üzerinden bu dosyayı doğrudan import eder ve gerçek, tek doğruluk kaynağı token dosyasıdır. Canlı sitenin tasarım kuralları için Canonical Source: `docs/DESIGN_SYSTEM.md`.

## Özet

| Soru | Cevap |
|---|---|
| Canlı sitenin tasarım kuralı nerede? | `docs/DESIGN_SYSTEM.md` |
| Canlı sitenin gerçek token dosyası nerede? | `src/ds/styles/base/variables.css` (bu klasörde, ama canlı site tarafından da kullanılır) |
| `/ds/` demo kataloğunun tema sistemi nerede? | `src/ds/DESIGN_LANGUAGES.md`, `src/ds/COMPONENT_THEMING.md` |
| `/ds/` kataloğu arama motorlarında görünür mü? | Hayır — `noindex, nofollow` + sitemap dışı |
