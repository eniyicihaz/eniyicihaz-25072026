> **DURUM: GÜNCELLEME BEKLİYOR** (Faz 1 durum bandı, 2026-10-07). Bu spesifikasyon, ilgili bölüm uygulama fazında Faz 2 sayfa ve hero audit'inden (`docs/tech/TEMPLATES.md` §6) geçtikten sonra güncellenecektir. İçindeki işletme bilgileri, marka ifadeleri ve iddialar SoT ile doğrulanmadan kullanılmaz. Bu belgenin aşağıdaki içeriği Faz 1'de **değiştirilmedi**. Çelişki olursa öncelik: SoT (`docs/source-of-truth/*`) > `MASTER_PLAN.md` > kök belgeler > `docs/strategy/*` ve `docs/tech/*` > bu belge. Ayrıntı: `docs/tech/DOC_MIGRATION_MAP.md` §5–§6.

# HOMEPAGE_SPECIFICATION.md

> Ana sayfanın hikâyesi, psikolojik yolculuğu ve bölüm mimarisi. Bu belge sayfaya özel bir **uygulama spesifikasyonudur** — anayasal referansların (COMPANY, PRINCIPLES, DESIGN_SYSTEM_GUIDE, SEARCH_STRATEGY, IMPLEMENTATION_STANDARD, QUALITY_GATES) yerine geçmez, onları ana sayfaya uygular.
>
> **2026-09 birleştirme notu:** Bu doküman, önceden ayrı iki dosya olan `HOMEPAGE_CREATIVE_DIRECTION.md` (hikâye/mimari) ve `HOMEPAGE_MOODBOARD.md` (sanat yönü özeti) birleştirilerek oluşturuldu — ikisi aynı konuyu farklı ayrıntı seviyesinde ele alıyordu ve ikisi de artık gerçek `src/pages/index.astro` ile uyuşmayan bir 10-bölümlük mimari taşıyordu. O iki dosya artık arşiv/tarihsel durumdadır ve içerikleri buraya taşınmıştır (silinmediler, kısa bir yönlendirme notuna indirgendiler). Bölüm mimarisi o aşamada **gerçek, doğrulanmış 11-bölüm yapısına** güncellenmişti.
>
> **2026-09 genişletme notu (dördüncü aşama — TARİHSEL KAYIT, beşinci aşamada 10 bölüme indirildi; aşağıdaki "mevcut" işaretleri ve "bkz. tablo" atıfları eski 20 bölümlü yapıya aittir):** Orijinal 11 bölüm (aşağıda "mevcut" olarak işaretli) hiçbiri değiştirilmeden/kaldırılmadan korundu. Aralarına, ayrı bir gap-analysis + blueprint sürecinde onaylanan 9 yeni bölüm eklendi — amaç: gerçek interaktif karar aracı, görselli cihaz karşılaştırması, gerçek ürün vitrini, Darıca/Gebze/Çayırova/Kocaeli'ye görünür internal link (önceden homepage'den bu 4 landing page'e neredeyse hiç link yoktu) ve güçlü bir SSS. Her yeni bölümün kendi taslak spesifikasyonu var (bkz. tablo). Bu 9 bölüm, orijinal "Noise→Signal" akustik yoğunluk yayının bir parçası **değildir** — kendi başlarına Local SEO/GEO/CRO katmanını temsil ederler; bu yüzden aşağıdaki tabloda "Akustik yoğunluk" sütunları bu satırlar için boş bırakılmıştır (icat edilmemiştir).
>
> **2026-09 birleştirme notu (beşinci aşama — 20 → 10 bölüm):** Kullanıcı kararıyla ana sayfa daha kısa, öz ve güçlü bir vitrine dönüştürüldü: 20 bölümlük sayfa **10 ana bölüme** indirildi; detay içerikler ilgili alt sayfalarda kalır. Amaç içerik kaybı değil, **tekrarları ve bölüm ek yükünü azaltmak** — aynı bilgi (ör. "süreç" ya da "Darıca/Gebze/Çayırova") artık üç ayrı bölümde değil, tek bölümde anlatılır. Aşağıdaki "Bölüm Mimarisi" tablosu bu 10 bölümlük yapıyı anlatır; önceki 20 bölümlü yapı (dördüncü aşama) tarihsel kayıttır ve bu belgeden çıkarılmıştır. **Bölüm sayısı hedefi 10'dur; "20'yi korumak" yönünde bir optimizasyon yapılmaz.**

## Kanonik kaynaklar (SSoT)

Buradaki Brand DNA, karakter ve görsel dil kavramları burada *tanımlanmaz*; kalıcı dokümanlarda tanımlıdır:
- Brand DNA (Purpose→…→Brand Character), kişilik/ton, güven → **PRINCIPLES.md §1 / §4 / §7**
- İçerik ve iddia politikası, CTA → **PRINCIPLES.md §5 / §9**
- Görsel dil (Noise → Signal) → **DESIGN_SYSTEM_GUIDE.md §6 Visual Language**
- Şirket gerçekleri (adres, telefon, hizmetler, markalar) ve coğrafi öncelik hiyerarşisi → **COMPANY.md** (özellikle §17)
- Arama/AI görünürlüğü → **SEARCH_STRATEGY.md** · İmplementasyon kalitesi → **IMPLEMENTATION_STANDARD.md** · Yayın kriterleri → **QUALITY_GATES.md**

Her bölüm uygulanırken zincir sınanır: `Brand DNA → Brand Character → PRINCIPLES → DESIGN_SYSTEM → Implementation → QUALITY_GATES`. Çelişki halinde kanonik doküman esastır.

## Bağlam

Header, Mega Menu ve Footer premium seviyede. Ana sayfa artık boş değildir — 10 ana bölümden oluşan üretime alınmış bir vitrindir (bkz. Bölüm Mimarisi). Amaç: Türkiye'nin en premium işitme cihazı ana sayfası. Bağlayıcı akış (PRINCIPLES §3): önce bilgilendir → güven inşa et → iletişime yönlendir → temin imkânı. Tasarım dili: slate + tek mavi, lacivert footer, katmanlı ışık gölgeleri, elle yazılmış hareket, tam erişilebilirlik.

---

## Manifesto (ana sayfa sesi)
> Brand DNA'nın kopya olarak ifadesi. Karakter: Sakin Usta (PRINCIPLES §1/§4). Ton: güven bırakır, korku değil.

> Duymak, hayatın içinde kalmaktır.
> Ve iyi bir işitme, sesin yüksekliğiyle değil, netliğiyle ölçülür.
>
> Bizim işimiz sesi yükseltmek değil, netleştirmek —
> gürültüyü sinyale, karmaşayı berraklığa çevirmek.
>
> Size yol gösterirken de aynısını yaparız:
> önce dinler, sonra anlatırız; satmadan önce anlamaya çalışırız.
> On sekiz dünya markası arasından en pahalıyı değil,
> kulağınıza ve hayatınıza en uygun olanı öneririz.
>
> Çünkü netlik bizim için bir teknoloji değil, bir dürüstlük biçimidir.
> Acele ettirmez, baskı yapmayız; kararı, doğru bilgiyle, size bırakırız.
>
> **Daha net duyun, hayata daha yakın olun.**

---

## Büyük Fikir & Görsel Dil
**"Yeniden duymak, yeniden bağlanmaktır."** Ana sayfa katalog değil; kopuştan bağlanmaya bir yolculuk. Ürün değil, hayatın sesi.

**Metafor — Gürültüden Sinyale** (Canonical Source: DESIGN_SYSTEM_GUIDE.md §6). Netlik optik "blur→focus" ile değil, akustik dille anlatılır: dağınık dalgaların tek temiz sinyale hizalanması. Cihazdan bağımsız, erişilebilir, zamansız; "kamera" değil "işitme" der.

**Üç katmanlı dil** (eşit değil, farklı irtifa — bu yüzden çarpışmazlar):
1. **İnsan hikâyesi** — "neden umursayayım?" (kopya, gerçek yüzler). Sabit ruh.
2. **Akustik dil (noise→signal)** — "markanın fikri ne?" (hero grafiği, geçişler, veri). Konsantre imza.
3. **Premium arayüz** (ışık/derinlik/mikro-motion) — "üst düzey mi?" (malzeme, detay). Görünmez bitiş.

**Şef kuralı:** Her bölümde tek katman lider; üçü aynı anda full ses = gürültü.

**Taşıyıcı fikir:** Akustik dalga başta gürültü, sonda harmoni — kullanıcının yolculuğunu tüm scroll boyunca anlatır. Dekor değil, anlatının kendisi.

**İki şart:** (1) *Kasıtlı sessizlikler* — akustik her yerde olursa duvar kâğıdı olur; rest bir nefestir. (2) *Değişmez gramer* — aynı çizgi DNA'sı, tek mavi + slate, aynı easing (`cubic-bezier(0.22,1,0.36,1)`), aynı çözünme yönü.

**Premium/glass uyarısı:** Aşırı cam = generic + soğuk/klinik. "Sıcak premium": gradient değil katmanlı ışık gölgesi; baharat gibi, okunabilirliği asla yenmez.

**Ton:** sıcak, onurlu, umutlu, bilimsel. "Klinik ama soğuk değil; lüks ama gösterişsiz."

---

## Psikolojik Yolculuk
"Burası farklı" → "Beni anlıyorlar" → "Aa, gerçekten böyle" → "Şimdi anladım" → "Bu bana uygun" → "Doğru ellerdeyim" → "Kendi markasını değil bana uygunu öneriyor" → "Bilgiye devam edebilirim" → "Bir konuşmayla başlayalım."

> **Not (2026-09):** Orijinal yolculukta yer alan "Korkacak bir şey yok, denemesi ücretsiz" ve "Başkaları da yaşadı" duyguları, **ilk (eski, 10 bölümlük) taslaktaki** "Süreç & Deneme" ve "Gerçek Hikâyeler" bölümlerine bağlıydı (o taslağın 7 ve 8 numaraları — bugünkü 10 bölümlük mimarideki #7/#8 ile ilgisi yoktur). Bu iki eski bölüm hiç üretime alınmadı. Bugünkü karşılıkları: "denemesi ücretsiz" duygusu **kısmen** karşılanır — #7 HomeJourney'nin "Dene" adımı (`/uygulama-ayar/cihaz-deneme`) ve #9 SSS'deki "Cihazı satın almadan önce deneyebilir miyim?" sorusu deneme imkânını söyler; "ücretsiz" vurgusu bu bölümlerde açıkça yer almaz. "Başkaları da yaşadı" duygusu (Gerçek Hikâyeler) sayfanın hiçbir yerinde karşılanmıyor. Bu bilinen bir boşluktur, gizlenmemiştir.

## Bölüm Mimarisi (GÜNCEL — gerçek `src/pages/index.astro` ile doğrulanmış, 10 ana bölüm)

*Ritim: hero → editoryal/interaktif hikâye → görsel panel → karşılaştırma → chooser → showroom → hizmet yolculuğu → gerçek merkez/yerel → bilgi/SSS → CTA.*

`index.astro` `<main>` içinde tam **10 `<section>`** render eder; her ana bölüm tek bir `<section>` ve tek bir `<h2>`'dir (gömülü alt parçalar `<div>` + gizli `<h3>` kullanır). Birleşik bölümler `src/components/home/` altındaki `Home*` componentleridir; mevcut componentler yeniden yazılmadan, opsiyonel `embedded` prop'uyla (varsayılan kapalı — diğer sayfalar etkilenmez) içeri alınır.

| # | Ana bölüm (component) | Birleştirdikleri | Amaç | CTA / Linkler | Not |
|---|---|---|---|---|---|
| 1 | **Hero** (`Hero`) | — | Kim / ne / nerede | ✔ Ücretsiz İşitme Testi | **Dokunulmadı.** Carousel aynen korunur. Spec: `HERO_SPECIFICATION.md` |
| 2 | **HomeStory** | Empathy + SoundRoom + Solution | Tek hikâye: günlük hayattaki işitme anları → "Bazen mesele yalnızca sesi duymak değildir." (tek `<h2>`) → SoundRoom interaktif deneyimi → Solution'ın 3 kısa gerçeği | — (bilgi/deneyim) | Empathy ve SoundRoom `embedded`; SoundRoom kaydırıcısı ve Empathy scroll-reveal'ı aynen çalışır. Solution'ın kilitli metni (`solution.data.ts`) kompakt satır olarak. Specler: `EMPATHY_`, `SOUND_ROOM_`, `SOLUTION_SPECIFICATION.md` |
| 3 | **BuyingCriteria** | — (ayrı kalır) | "İşitme Cihazı Seçerken Nelere Bakılır?" — büyük özel görsel + bilgi paneli | ~ `/isitme-cihazlari` hub linki | Görsel henüz yok → `ImagePlaceholder` (görünür metin içermez, geçici). Spec: `BUYING_CRITERIA_SPECIFICATION.md` |
| 4 | **HomeExplore** | CategoryExplorer + DeviceComparison | "İşitme Cihazlarını Keşfedin ve Karşılaştırın" — 7 cihaz tipi tek tabloda (görsel yuvası + isim + kısa karşılaştırma) | ✔ 7× `/isitme-cihazlari/*` (kolon başlığı + "İnceleyin" satırı) + hub linki | Yalnızca en önemli **5 kriter** (Öne çıkan yön, Görünürlük, Güç aralığı, Şarj/pil, Kablosuz bağlantı). Gerçek `<table>`; yatay scroll container tablonun **dışında**, ilk kolon sticky. Kesin olmayan hücreler "Modele göre değişebilir" (PRINCIPLES §5). Specler: `CATEGORY_EXPLORER_`, `DEVICE_COMPARISON_SPECIFICATION.md` |
| 5 | **Chooser** | — (ayrı kalır) | "Size Hangi Çözüm Uygun?" — gerçek interaktif tercih rehberi (3 soru) | ~ sonuç linkleri (en fazla 3 tip) + `/iletisim` | Ağırlıklı skorlama (`weights`), sıralı sonuç; teşhis/kesin öneri **değil**. Spec: `CHOOSER_SPECIFICATION.md` |
| 6 | **HomeShowroom** | Brands + Model Showcase | Marka logoları (marquee) + 5 gerçek model, tek bölümde — "kendi markasını değil bana uygunu öneriyor" | ✔ model kartları → `/markalar/{slug}`, logolar → marka sayfaları, hub linki | `Brands` + `BrandPageModels` `embedded` (`compact`); mevcut doğrulanmış ürün görselleri. Model vitrini ayrı section **değildir**. Specler: `BRANDS_`, `MODEL_SHOWCASE_SPECIFICATION.md` |
| 7 | **HomeJourney** | BrandCriteria (hizmetler) + Guide + Service Journey | Tek yolculuk: **Değerlendir → Seç → Dene → Ayarla → Servis**; her adım gerçek sayfaya link | ✔ ücretsiz işitme testi, cihaz seçim rehberi, cihaz deneme, kişiye özel ayar, teknik servis + "Ayrıca": online işitme testi, evde hizmet, kulak kalıbı, tüm hizmetler | Aynı bilgi üç bölümde tekrarlanmaz. SGK burada değil, #8'de. Specler: `SERVICE_JOURNEY_`, `BRAND_CRITERIA_`, `GUIDE_SPECIFICATION.md` |
| 8 | **HomeLocal** | Trust + CenterGallery + ServiceNetwork + SGK teaser | "Darıca'daki Gerçek Merkezimiz" — tek local/entity bölümü, **Darıca en güçlü katman** | ✔ 4 landing page: `/darica-isitme-cihazlari/`, `/gebze-isitme-cihazlari/`, `/cayirova-isitme-cihazlari/`, `/kocaeli-isitme-cihazlari/` + kompakt SGK kutusu → `/sgk-isitme-cihazi-odemesi` | Gerçek Darıca fotoğrafları (`/images/pages/hakkimizda-*.webp`, stok yok). Hiyerarşi (COMPANY.md §17): Darıca (birincil) → Gebze + Çayırova → Kocaeli (bölgesel) → Dilovası/Tuzla/Pendik yalnızca yardımcı metin (sayfa/link yok). Trust'ın 3 doğrulanmış gerçeği chip olarak. SGK ayrı section **değildir**. Specler: `CENTER_NETWORK_`, `SGK_TEASER_`, `TRUST_SPECIFICATION.md` |
| 9 | **HomeKnowledge** | KnowledgeGate + Homepage FAQ | Üst: Bilgi Merkezi girişi (rehber linkleri + hub); alt: 6 gerçek SSS (native `<details>`, 2 sütun) | ✔ rehber linkleri, `/bilgi-merkezi`, soru başına link | "Cihazım arızalanırsa" sorusu kaldırıldı (Teknik Servis #7'de linkli). Specler: `KNOWLEDGE_GATE_`, `HOMEPAGE_FAQ_SPECIFICATION.md` |
| 10 | **Closing** (`Closing`) | — | İletişime geçme / Dönüşüm — Darıca odaklı | ✔ Ücretsiz İşitme Testi, telefon (randevu için), WhatsApp, yol tarifi (footer'daki gerçek Google Business Profile linki) | Mevcut final CTA; destekleyici cümle Darıca'ya odaklandı. Spec: `CLOSING_SPECIFICATION.md` |

**Homepage'de artık render EDİLMEYENLER:** `DailyLife` (component/data dosyaları ileride kullanım için diskte duruyor), ayrı `SgkTeaser`, ayrı `Trust`, ayrı `Guide`, ayrı model vitrini section'ı ve ayrı `ServiceNetwork`. Bunların içeriği yukarıdaki birleşik bölümlerin içinde yaşar. Eski spec dosyaları (`archive/DAILY_LIFE_SPECIFICATION.md` vb.) o bölümlerin ayrıntısı için referans olarak kalır; ana sayfadaki yerleşim **bu belgeye** göredir.

**Dokunulmayanlar:** Hero carousel; landing page'ler (`/darica-…`, `/gebze-…`, `/cayirova-…`, `/kocaeli-…`); sayfa `<title>`/`description`; `MedicalBusiness` JSON-LD (Hero slayt 1'in tanım cümlesiyle birebir — GEO non-contradiction); canonical (`https://www.eniyicihaz.com/`) ve sitemap.

**Akustik yay ve ritim:** Orijinal Noise→Signal iki tepesi korunur — **SoundRoom** (#2 içinde, deneyim zirvesi) ve **Closing** (#10, çözünüm zirvesi). Birleşik bölümlerin (#3–#9) akustik yoğunluk değeri, önceki aşamalarda olduğu gibi, bilinçli olarak tanımsızdır (icat edilmemiştir). Tasarım ritmi: Hero → editoryal/interaktif (#2) → görsel panel (#3) → karşılaştırma (#4) → chooser (#5) → showroom (#6) → hizmet yolculuğu (#7) → gerçek merkez/yerel (#8) → bilgi/SSS (#9) → CTA (#10). Birleşik bölümler, eski sayfanın tekrarlayan "eyebrow + ortalı H2" kalıbı yerine sola hizalı editoryal başlık (`HomeBlockHeader`) ve split layout kullanır.

**Görseller:** Stok görsel kullanılmaz. Gerçek Darıca fotoğrafları ve doğrulanmış ürün görselleri kullanılır. Henüz olmayan özel görseller (BuyingCriteria büyük görseli, HomeExplore kolon görselleri) geçici `ImagePlaceholder` ile durur — bu **kalıcı tasarım değildir**, gerçek görsel gelince değiştirilir; placeholder ziyaretçiye "henüz eklenmedi" gibi iç not göstermez.

**Yaklaşık yükseklik (dev ölçümü, tam sayfa):** 1440 px ≈ 7.700 px · 1024 px ≈ 9.700 px · 768 px ≈ 11.200 px · 390 px ≈ 13.800 px (önceki 20 bölümlü yapı: ≈ 14.700 / 16.200 / 19.750 / 21.800 px).

**Kaldırılan bölümler (tarihsel):** Önceki mimaride yer alan **"7 · Süreç & Deneme"** ve **"8 · Gerçek Hikâyeler"** üretime hiç alınmadı. Bu iki eski numaralı bölüm (eski taslağın 7 ve 8 numaraları; bugünkü mimarideki #7/#8 ile karıştırılmamalı) bu dokümandan çıkarılmıştır; gelecekte gerçekten ihtiyaç doğarsa (SEARCH_STRATEGY.md §19 Search Governance ilkesiyle tutarlı biçimde: "gerçek ve tekrar eden bir ihtiyaç" varsa) yeniden değerlendirilebilir. "Başkaları da yaşadı" duygusu (Gerçek Hikâyeler) sayfada halen karşılanmıyor — bilinen bir boşluktur.

---

## Kesişen İlkeler
- **Netlik motifi:** sayfa indikçe gürültü→sinyal hizalanması artar (akustik; optik blur değil).
- **İnteraktiflik:** yalnızca işitme sektörünün yapabileceği görsel-duyusal an (Sound Room).
- **Rahatsız etmeyen çağrı:** hafif, bunaltmayan randevu/telefon erişimi.
- **Görsel süreklilik:** katmanlı ışık gölgesi + %3 film-grain + noktalı grid dili tüm sayfada (footer ile aynı).
- **Scroll-koreografisi:** IntersectionObserver kademeli reveal (footer failsafe + reduced-motion deseni).

**Sektörden kopuş:** görsel-sessiz Duyma Deneyimi · ürün gridi yerine şiirsel açılış · marka bağımsızlığını güven argümanına çevirmek · süreci "danışma/deneme" çerçevesi · arayüzün netliği canlandırması.

---

## Bölüm Bazlı Sanat Yönü — nerede aranır

Hero'nun tam sanat yönü, tipografi ölçeği, renk/ışık, kompozisyon ve motion detayı bu dokümanda **tekrar edilmez** — Canonical Source: `HERO_SPECIFICATION.md` (bu belge, önceden ayrı duran `HOMEPAGE_MOODBOARD.md`'nin Hero bölümüyle aynı içeriği zaten kapsıyordu; tekrar önlemek için tek yuva `HERO_SPECIFICATION.md` olarak sabitlendi). Diğer belgelenmiş bölümler için kendi spesifikasyon dosyalarına bakın (yukarıdaki tablo).
