# BRAND_CRITERIA_SPECIFICATION.md

> Ana sayfada "Bu Süreçte Hangi Hizmeti Alırsınız?" bölümünü karşılayan yer (`docs/HOMEPAGE_SPECIFICATION.md`'deki "BrandCriteria" ile aynı). **Bu dosya, zaten üretimde olan gerçek içeriği belgeler.** Kod içermez.
>
> **Kanonik kaynaklar:** amaç/hikâye ve sayfa mimarisi → `docs/HOMEPAGE_SPECIFICATION.md` · gerçekler → `COMPANY.md` (özellikle §17 coğrafi hiyerarşi) · ton/iddia disiplini → `PRINCIPLES.md §5` · görsel dil → `DESIGN_SYSTEM_GUIDE.md §6` · yayın kriterleri → `QUALITY_GATES.md`.

## 1. ÖNEMLİ — bu bir jenerik/paylaşılan modül, yalnızca ana sayfaya özel değil

`src/components/brands/BrandCriteria/BrandCriteria.astro`, kod yorumuna göre "M3 of the modular hub-page system" — yani ana sayfa dışında **`/isitme-cihazlari`, `/hizmetlerimiz`, `/bilgi-merkezi` ve `/iletisim`'de de** aynı component kullanılıyor, her sayfaya kendi `data` prop'uyla. Bu spesifikasyon yalnızca **ana sayfadaki örneğini** (`homeServices` verisi) belgeler; component'in kendisi homepage-exclusive değildir ve homepage için özel olarak değiştirilmemelidir.

## 2. Bu bölüm neden gerekli — mimari gerekçe

"Hangi hizmete ihtiyacım var?" sorusuna cevap veren tek bölüm budur. Kaldırılırsa, ana sayfadan 6 gerçek hizmet sayfasına giden hub-spoke bağlantı kaybolur. **Korunuyor, değiştirilmiyor.**

## 3. Gerçek içerik — ana sayfa örneği (`src/data/home/services.ts`, `homeServices`)

- Eyebrow: "Hizmetlerimiz"
- H2: "Bu Süreçte Hangi Hizmeti Alırsınız?"
- Intro: **"Darıca'daki merkezimizde, işitme sağlığınızın her aşamasında ihtiyaç duyabileceğiniz gerçek hizmetleri sunuyoruz."**
- 6 hizmet kartı (gerçek link): Ücretsiz İşitme Testi (`/degerlendirme/ucretsiz-isitme-testi`), İşitme Cihazı Uygulaması (`/uygulama-ayar/cihaz-uygulama`), Kişiye Özel Cihaz Seçimi (`/rehberler/cihaz-secim-rehberi`), Kulak Kalıbı Uygulamaları (`/uygulama-ayar/kalip-alimi`), Teknik Servis (`/servis-bakim/teknik-servis`), SGK Danışmanlığı (`/sgk-isitme-cihazi-odemesi`).
- Kapanış: "Hangi hizmete ihtiyacınız olduğundan emin değilseniz, ücretsiz görüşmede birlikte netleştirebiliriz." + "Tüm hizmetlerimizi inceleyin →" (`/hizmetlerimiz`).

`homeServices`, kod yorumuna göre bilinçli olarak `/iletisim`'in eşdeğer verisinden (`contactServices`) ayrı bir dosya — "iki bağımsız yayınlanmış sayfayı birbirine bağımlı kılmamak için." Bu bir eksiklik değil, bilinçli bir tasarım kararı.

## 4. Amaç değerlendirmesi (5 kriter)

- **Kullanıcı amacı:** Süreç içinde hangi hizmete ihtiyaç duyacağını netleştirmek.
- **SEO amacı:** Görünür h2 + gerçek h3'ler, 6 gerçek hizmet sayfasına hub-spoke link.
- **Local SEO amacı:** Intro cümlesindeki **tek** "Darıca'daki merkezimizde" ifadesi — ana merkez (COMPANY.md §17 kademe 1) sinyalini doğal biçimde taşır. **Buraya Gebze/Çayırova eklenmedi** — bilinçli: Trust bölümü zaten bu ismleri doğal cümlede taşıyor; aynı isimleri burada da tekrarlamak QUALITY_GATES.md §2'nin keyword-stuffing yasağını ihlal ederdi. Coğrafi hiyerarşi sayfa genelinde dağıtılmış durumda, tek bölümde yığılmamış.
- **GEO/AI Search amacı:** Hizmetler gerçek, doğrulanabilir, entity-tutarlı (SEARCH_STRATEGY §4).
- **Dönüşüm amacı:** Hub link + "birlikte netleştirebiliriz" — düşük baskılı, uygun konumda.

## 5. Atomic Design (mevcut yapı)

- **Organism (paylaşılan/jenerik):** `src/components/brands/BrandCriteria/BrandCriteria.astro` — tip tanımları component dosyasının kendi içinde (`BrandCriterion`, `BrandCriteriaContent`), ayrı `.types.ts` yok.
- **Veri (yalnızca ana sayfaya özel):** `src/data/home/services.ts` (`homeServices`).

## 6. Definition of Done

Mevcut durum yukarıdaki 5 kriteri karşılıyor — değişiklik gerekmiyor. Bu dosya mevcut durumun onaylı kaydıdır.
