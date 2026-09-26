# BRANDS_SPECIFICATION.md

> Ana sayfanın "Tarafsızlık / marka bağımsızlığı" bölümü (`docs/HOMEPAGE_SPECIFICATION.md`'deki "Brands" ile aynı). **Bu dosya, zaten üretimde olan gerçek içeriği belgeler.** Kod içermez.
>
> **Kanonik kaynaklar:** amaç/hikâye ve sayfa mimarisi → `docs/HOMEPAGE_SPECIFICATION.md` · gerçek marka listesi → `COMPANY.md §8` · ton/iddia disiplini → `PRINCIPLES.md §5` · görsel dil → `DESIGN_SYSTEM_GUIDE.md §6` · yayın kriterleri → `QUALITY_GATES.md`.

## 1. Bu bölüm neden gerekli — mimari gerekçe

Sitenin "tek markaya bağlı değiliz" konumlandırmasını kanıtlayan tek bölüm. SEARCH_STRATEGY.md §4'ün tanımladığı "üretici entity'leri" ilişkisini (Signia, Oticon, Phonak vb.) ana sayfada tek başına taşır; kaldırılırsa bu güven sinyali ana sayfadan tamamen kaybolur. **Korunuyor, değiştirilmiyor.**

## 2. Gerçek içerik (mevcut üretim, `src/components/brands/Brands/brands.data.ts`)

- Badge: "18+ Dünya Markası"
- H2: "18'den Fazla Dünya Markasıyla Çalışıyoruz"
- Subhead: "Tek bir markaya bağlı değiliz; işitme kaybınıza ve yaşam tarzınıza göre, aralarından size en uygun olanı öneriyoruz."
- 18 gerçek marka logosu (marquee), her biri `/markalar/{slug}`'a link: Oticon, Phonak, Signia, Widex, ReSound, NuEar, Vista, Unitron, Bernafon, Philips Hearing, Rexton, Beltone, Sonic, Audio Service, Coselgi, Audifon, A&M, Maico — COMPANY.md §8'deki 18 markanın tamamıyla birebir örtüşüyor.
- Güven satırı: "SGK Anlaşmalı İşitme Cihazları — Tüm SGK kapsamındaki işlemleriniz için uzman desteği sağlıyoruz." → `/sgk-isitme-cihazi-odemesi`.
- Kapanış: "Tüm markaları inceleyin →" → `/markalar`.

## 3. Amaç değerlendirmesi (5 kriter)

- **Kullanıcı amacı:** "Kendi markasını değil, bana uygunu mu öneriyor?" sorusuna güvence.
- **SEO amacı:** Görünür h2, 18 gerçek marka sayfasına + `/markalar`'a hub-spoke link.
- **Local SEO amacı:** Yok — bilinçli olarak yok. Marka-nötr içeriğe coğrafi isim eklemek yapay olurdu; bu bölümün işlevi lokasyonla değil, marka bağımsızlığıyla ilgili.
- **GEO/AI Search amacı:** Entity-ilişki sinyali (her ürün grubu belirli üretici markalarla ilişkilidir — SEARCH_STRATEGY §5).
- **Dönüşüm amacı:** Hub link, düşük baskı.

## 4. Erişilebilirlik notu (mevcut, doğrulandı)

Gerçek (ilk) logo seti `alt={brand.name}` taşır; aria-hidden döngü/tekrar seti `alt=""` ile boş bırakılmış — ekran okuyucunun aynı markayı iki kez anons etmesini önleyen doğru desen.

## 5. Atomic Design (mevcut yapı)

- **Organism:** `src/components/brands/Brands/Brands.astro`
- **Veri/Tip:** `brands.data.ts`, `brands.types.ts` (component klasöründe, co-located)

## 6. Definition of Done

Mevcut durum yukarıdaki 5 kriteri karşılıyor — değişiklik gerekmiyor. Bu dosya mevcut durumun onaylı kaydıdır.
