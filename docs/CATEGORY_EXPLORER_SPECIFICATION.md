# CATEGORY_EXPLORER_SPECIFICATION.md

> Ana sayfanın "Discovery" (keşif) bölümü — Solution'ın verdiği bilgiden sonra, kullanıcıyı somut cihaz tiplerine yönlendiren durak (`docs/HOMEPAGE_SPECIFICATION.md`'deki "CategoryExplorer" ile aynı yer, index.astro'nun kendi mimari yorumunda "cihazları keşfetme" rolü). **Bu dosya, zaten üretimde olan gerçek içeriği belgeler — yeni kopya/tasarım icat etmez.** Kod içermez.
>
> **Kanonik kaynaklar:** amaç/hikâye ve sayfa mimarisi → `docs/HOMEPAGE_SPECIFICATION.md` · ton/iddia disiplini → `PRINCIPLES.md §5` · görsel dil → `DESIGN_SYSTEM_GUIDE.md §6` · SEO/internal linking felsefesi → `SEARCH_STRATEGY.md §6/§15` · yayın kriterleri → `QUALITY_GATES.md`.

## 1. Bu bölüm neden gerekli — mimari gerekçe

`src/pages/index.astro`'nun kendi yorum satırı, ana sayfayı "Local Entity Hub + Discovery + CRO mimarisi" olarak tanımlar; CategoryExplorer bu üç sütundan **Discovery**'i tek başına karşılar. Kaldırılırsa, ana sayfada "hangi cihaz tipleri var" sorusuna cevap veren tek nokta kaybolur ve zaten var olan 7 gerçek `/isitme-cihazlari/*` alt sayfasına ana sayfadan giden tek hub-spoke bağlantısı ortadan kalkar (SEARCH_STRATEGY.md §15 Hub-and-Spoke ilkesi). Bu nedenle **korunuyor, değiştirilmiyor**.

## 2. Gerçek içerik (mevcut üretim, `src/data/category-explorer/category-explorer.data.ts`)

- Eyebrow: "İşitme Cihazı Çeşitleri"
- Görünür H2: "Size Uygun İşitme Cihazı Tipini Keşfedin"
- Intro: "Kulak yapınıza, işitme kaybı derecenize ve günlük kullanım tercihinize göre farklı cihaz tipleri uygun olabilir."
- 7 kart, her biri gerçek bir `/isitme-cihazlari/*` alt sayfasına link ve tek açıklayıcı cümle: Kulak Arkası (BTE), Kulak İçi (ITE), Görünmez (CIC), Şarj Edilebilir, Bluetooth Özellikli, Çocuklara Özel, Suya Dayanıklı.
- Kapanış: "Tüm cihaz tiplerini inceleyin →" → `/isitme-cihazlari`.

Hiçbir kart/link uydurma değil — hepsi gerçekten yayında olan sayfalara işaret ediyor (kod yorumu: "no new URL invented").

## 3. Amaç değerlendirmesi (5 kriter)

- **Kullanıcı amacı:** Cihaz tiplerini somut, karşılaştırılabilir biçimde keşfetmek.
- **SEO amacı:** Görünür `<h2 id="category-explorer-title">` + `aria-labelledby` — ana sayfanın sr-only bölümlerinden farklı olarak burası "gerçek, gezilebilir bir konu" (kod yorumu). 7 gerçek hub-spoke linki, SEARCH_STRATEGY §15'in Internal Linking stratejisini doğrudan uyguluyor.
- **Local SEO amacı:** Yok — bilinçli olarak yok. Cihaz tipi bilgisi (BTE/ITE/CIC vb.) lokasyona bağlı değildir; buraya coğrafi isim eklemek QUALITY_GATES.md §2'nin "doğal olmayan ekleme" yasağını ihlal ederdi.
- **GEO/AI Search amacı:** Her kart tek, kendi başına yeterli bir tanım cümlesi taşıyor — SEARCH_STRATEGY §8'in "Definition" AEO kalıbına uygun.
- **Dönüşüm amacı:** Yumuşak (hub link) — kullanıcı henüz keşif aşamasında, sert CTA bu noktada erken olurdu.

## 4. Atomic Design (mevcut yapı)

- **Organism:** `src/components/category-explorer/CategoryExplorer/CategoryExplorer.astro`
- **Atom:** `CategoryCard.astro`
- **Veri:** `src/data/category-explorer/category-explorer.data.ts` (component klasörü dışında — bilinçli, CategoryExplorerItem/Content tipleri de burada tanımlı)

## 5. Erişilebilirlik / Responsive (mevcut)

Yatay kaydırmalı kart rayı; H2 görünür ve `aria-labelledby` ile section'a bağlı. Responsive davranış QUALITY_GATES.md §8 Responsive QA Gate kapsamında (390–1920px) doğrulanır — bu dosya kapsamında yeni bir gereksinim tanımlanmaz.

## 6. Definition of Done

Bu bölüm zaten üretimde ve yukarıdaki 5 kriteri karşılıyor — bir "yapılacaklar" listesi değil, **mevcut durumun onaylı kaydıdır**. Gelecekte içerik değişirse (yeni cihaz tipi eklenirse vb.), bu dosya güncellenir.
