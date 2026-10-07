> **DURUM: GÜNCELLEME BEKLİYOR** (Faz 1 durum bandı, 2026-10-07). Bu spesifikasyon, ilgili bölüm uygulama fazında Faz 2 sayfa ve hero audit'inden (`docs/tech/TEMPLATES.md` §6) geçtikten sonra güncellenecektir. İçindeki işletme bilgileri, marka ifadeleri ve iddialar SoT ile doğrulanmadan kullanılmaz. Bu belgenin aşağıdaki içeriği Faz 1'de **değiştirilmedi**. Çelişki olursa öncelik: SoT (`docs/source-of-truth/*`) > `MASTER_PLAN.md` > kök belgeler > `docs/strategy/*` ve `docs/tech/*` > bu belge. Ayrıntı: `docs/tech/DOC_MIGRATION_MAP.md` §5–§6.

# BUYING_CRITERIA_SPECIFICATION.md

> **⚠ ESKİ 20 BÖLÜMLÜ HOMEPAGE PLANINA AİT SPESİFİKASYON (2026-09).** Bölüm **hâlâ ayrı** ve geçerli; yalnızca sayfadaki konumu değişti (bugün #3). Bölüm numaraları/komşuluk varsayımları (ör. "CategoryExplorer'dan önce") eski 20 bölümlü sıraya göredir. Güncel ana sayfa mimarisi (10 ana bölüm) için tek doğru kaynak: `HOMEPAGE_SPECIFICATION.md`. Bu belge, o bölümün **içerik/gerekçe kaydı** olarak durur; bölüm numaraları, "yeni pozisyon N", "TASLAK — henüz üretimde değil" ve "ayrı section" ifadeleri eski 20 bölümlü sıraya aittir, geçerli değildir. Dosya, kod yorumlarından hâlâ referans alındığı için arşive taşınmamıştır.

> **TASLAK — henüz üretimde değil.** Ana sayfaya eklenmesi planlanan yeni bölüm: "İşitme Cihazı Seçerken Nelere Bakılır?" Solution'ın ("neden böyle oluyor") verdiği bilgiden CategoryExplorer'ın ("tipleri keşfet") somut keşfine geçişte, kararı bilgiyle destekleyen sakin bir editoryal durak. Kod içermez; yalnızca içerik/tasarım/erişilebilirlik taslağıdır.
>
> **Kanonik kaynaklar:** sayfa mimarisi/sıra → `docs/HOMEPAGE_SPECIFICATION.md` (bu bölüm, mevcut 11'in dışında, yeni pozisyon 4) · ton/iddia disiplini → `PRINCIPLES.md §5/§11` (teşhis/kesinlik dili yasak) · görsel dil → `docs/DESIGN_SYSTEM.md` · SEO/AEO → `SEARCH_STRATEGY.md §7/§8` · yayın kriterleri → `QUALITY_GATES.md`.
>
> **Sabit çerçeve:** Amaç = "kararı bilgiyle donatmak" · Lider katman = hikâye + görsel · Tasarım deseni = full-width image + info panel · CTA = yok/hafif (hub link yeterli, Guide/Closing'in CTA'sını tekrar etmez).

---

## 1. Amaç ve Sıradaki Yeri

**Kullanıcı zihninde ne değişmeli?** Solution kullanıcıya "neden böyle oluyor"u açıkladı; CategoryExplorer'a girmeden önce kullanıcı "peki ben neye göre seçeceğim?" sorusunu taşıyor olmalı. Bu bölüm o soruyu, tek tek cihaz tipine girmeden, **genel ve dürüst kriterlerle** cevaplar — bir satış konuşması değil, bir danışman notu.

**Neden burada (Solution ile CategoryExplorer arasında):** Kullanıcı önce kriterleri bilmeli, sonra tipleri (CategoryExplorer, pozisyon 5) ve karşılaştırmayı (Bölüm 6) görmeli — sıra tersine çevrilirse (önce tipler, sonra kriterler) kullanıcı neye göre bakacağını bilmeden 7 kartı tarar.

**Bu bölüm ne DEĞİLDİR:** Bir ürün karşılaştırması değil (o Bölüm 6'nın işi), bir teşhis aracı değil, fiyat/bütçe kriteri içermez (PRINCIPLES — fiyat iddiası/vaadi yasağı).

---

## 2. İçerik (taslak)

**Eyebrow:** "Karar Vermeden Önce"
**Başlık (H2, görünür):** "İşitme Cihazı Seçerken Nelere Bakılır?"
**Giriş cümlesi:** "Doğru cihaz, markadan çok, sizin gündelik ihtiyaçlarınıza göre belirlenir. İşte gözden geçirmenizde fayda olan birkaç gerçek kriter."

**4-5 kriter (ikon + başlık + tek cümle, iddiasız/genel-geçer audiology bilgisi):**

| # | Başlık | Açıklama | Ton kontrolü |
|---|---|---|---|
| 1 | İşitme kaybının derecesi | Hafif, orta veya ileri derece kayıplar farklı güç aralığı gerektirebilir. | Kesinlik yok — "gerektirebilir", teşhis değil |
| 2 | Günlük ortamınız | Sessiz bir ev mi, kalabalık/gürültülü bir iş ortamı mı — kullanım ortamınız cihaz tipini etkiler. | Genel-geçer, marka/model iması yok |
| 3 | Görünürlük tercihiniz | Kimileri fark edilmeyen bir cihaz ister, kimileri kullanım kolaylığını önceliklendirir — ikisi de geçerli bir tercihtir. | Yargısız, iki seçeneği de eşit sunar |
| 4 | Şarj mı, pil mi | Günlük şarj alışkanlığı mı, pil değiştirme kolaylığı mı sizin için daha pratik? | Nötr, üstünlük iddiası yok |
| 5 (opsiyonel) | Bağlantı ihtiyacınız | Telefon, TV gibi cihazlarla kablosuz bağlantı önemliyse bu da bir kriterdir. | Genel-geçer |

**Kapanış / hafif çıkış:** "Bu kriterleri birlikte netleştirmek isterseniz, ücretsiz değerlendirmemizde konuşabiliriz." → `/isitme-cihazlari` hub linkine veya `/rehberler/cihaz-secim-rehberi`'ne yumuşak link (sert CTA değil, Guide/Closing'in CTA'sını burada tekrarlamaz).

**Kırmızı çizgi:** Hiçbir kriter belirli bir markayı/modeli işaret etmez; "en iyi/ideal" gibi üstünlük dili yok (PRINCIPLES §5).

---

## 3. Tasarım Deseni / Art Direction

**Desen:** Full-width image + info panel — sayfada CategoryExplorer'ın yatay rayından ve Solution'ın kart düzeninden görsel olarak ayrışan, sakin/editoryal bir "büyük görsel + metin paneli" kompozisyonu.

**Kompozisyon:**
- **Desktop (≥1024px):** Büyük, tam genişlik (veya `--container-xl` sınırlı) kavramsal/yaşam görseli; üzerine (alt kısımda, okunabilirliği koruyan bir gradient/scrim ile) veya görselin yanına (split, görsel %55–60 / panel %40–45) bindirilmiş bilgi paneli — 4-5 kriter panelin içinde kompakt bir liste olarak.
- **Tablet (768–1023px):** Split ise dikey yığın (görsel üstte, panel altta) — Solution/Trust'ın tablet esnekliğiyle tutarlı.
- **Mobile (<768px):** Görsel üstte (daha kısa aspect-ratio), panel altında tam genişlik; kriter listesi dikey, ikon+başlık+açıklama.

**Görsel dil:** Sıcak, gerçekçi, "klinik ama soğuk değil" (HOMEPAGE_SPECIFICATION.md'nin genel tonu). Panel zemini `--color-surface`, ince `--color-border`, yeni bir "glass" efekti icat edilmez (SoundRoom'un cam paneli sayfada bilinçli tek istisna — burada tekrarlanmaz).

**Motion:** Tek seferlik `data-rise` girişi (kurulu desen), performatif animasyon yok.

---

## 4. Internal Link Planı

- `/isitme-cihazlari` (hub) — hafif çıkış linki.
- `/rehberler/cihaz-secim-rehberi` — kriterleri derinleştiren rehber sayfasına link.

## 5. SEO/GEO Amacı

"işitme cihazı nasıl seçilir", "işitme cihazı seçerken nelere dikkat edilir" arama niyetlerini editoryal, AEO-uyumlu bir cevap bloğunda karşılar (SEARCH_STRATEGY §8 — Definition/How-to kalıbına yakın, ama liste keyword-stuffing değildir). Local SEO amacı yok — bilinçli olarak yok (bu, coğrafyadan bağımsız bir karar kriteri bölümü; QUALITY_GATES §2'nin "doğal olmayan ekleme" yasağı burada da geçerli).

## 6. Gerekli Görseller

**Yeni görsel gerekli (kullanıcı onayı: özel üretilmiş, stok olmayan, premium kavramsal/lifestyle görsel; gerçek Avrasya merkezi fotoğrafı KULLANILMAYACAK — o rol Bölüm 14'te).** Öneri: bir kişinin gündelik, sıcak bir anında (ör. konuşma/dinleme anı, doğal ışık, klinik olmayan bir ortam) çekilmiş veya özel üretilmiş kavramsal bir kompozisyon. Ürün/cihaz görünmesi gerekmez — bu bölüm cihaz değil, karar süreci hakkındadır. Üretimden önce kullanıcıya görsel taslağı/moodboard onaya sunulmalı.

## 7. Atomic Design (planlanan)

Tam eşleşen mevcut component yok. `src/components/shared/ExperienceHero/ExperienceHero.astro` ve `CorporateHero.astro`'nun "büyük görsel + panel" görsel grameri (split oranları, scrim/overlay tekniği) ilham alınır — ama bunlar page-hero'ları (sayfa başına bir kez kullanılan H1 taşıyıcılar), burada mid-page bir organizma olarak yeniden inşa edilmeli (kendi klasöründe, `BuyingCriteria/` gibi, diğer homepage bölümlerinin geleneğine uygun). Kriter listesi için yeni bir `BuyingCriterionItem` atomu (ikon+başlık+açıklama) yeterli, `TrustFact.astro`'nun sade (kart zemini yok) yaklaşımına yakın olabilir.

## 8. Erişilebilirlik

- Görünür `<h2>`, `aria-labelledby` (CategoryExplorer'ın "gerçek, gezilebilir konu" ilkesiyle tutarlı).
- Görsel üzerine bindirilen panelde metin kontrastı AA+ garantili (scrim/overlay kontrast testinden geçmeli).
- Dekoratif görsel `alt=""` veya panelin bir parçası değilse anlamlı `alt` — implementasyonda netleşir.
- `prefers-reduced-motion`: giriş animasyonu anında tam görünür hale gelir.

## 9. Design Review Checklist

- Hiçbir kriter marka/model işaret etmiyor.
- Fiyat/bütçe kriteri yok.
- Görsel stok değil, özel üretilmiş/lifestyle.
- Panel metni görsel üzerinde her koşulda okunabilir (kontrast).
- CTA yok veya çok hafif — Guide/Closing'in CTA'sı tekrar edilmiyor.
