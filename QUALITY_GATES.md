# QUALITY_GATES.md

> Bu doküman, projenin teknik anayasalarından biridir. IMPLEMENTATION_STANDARD.md'nin *component/build seviyesi* "Definition of Done"ına karşılık gelen, **sayfa/release seviyesi operasyonel Definition of Done**'dır: bir sayfa veya bir release, ancak burada tanımlanan kapılardan (gate) geçtiğinde yayına/production'a hazır sayılır.
>
> Bu doküman **prensip değil, kontrol edilebilir ve test edilebilir kriter** içerir. "Neden" sorusunun cevabı (SEO/Local SEO/GEO felsefesi) SEARCH_STRATEGY.md'de, "nasıl inşa ederiz" DESIGN_SYSTEM_GUIDE.md'de, "component kalitesi" IMPLEMENTATION_STANDARD.md'de yaşar — bu doküman onları tekrar etmez, yalnızca yayın öncesi somut kontrol listesini tutar.
>
> **Diğer dokümanlarla ilişki:**
> - İşletme gerçekleri burada tekrarlanmaz. Canonical Source: `docs/source-of-truth/*` (SoT).
> - Coğrafi öncelik ve evde hizmet alanı burada tekrarlanmaz. Canonical Source: LOCAL_SOT §3; özeti COMPANY.md §5–§6.
> - SEO/GEO felsefesi burada tekrarlanmaz. Canonical Source: SEARCH_STRATEGY.md.
> - Component build kalitesi burada tekrarlanmaz. Canonical Source: IMPLEMENTATION_STANDARD.md.
> - Kilitli strateji: MASTER_PLAN.md.
>
> **Güncelleme:** 2026-10-07 (Faz 1). §12'de yeni kapılar eklendi. Eski bölümlerin durumu için bkz. `docs/tech/DOC_MIGRATION_MAP.md` §4.

---

# 0. Kapsam ve Kullanım

Bu gate'ler, yeni bir sayfa yayınlanmadan önce, mevcut bir sayfa önemli ölçüde değiştirildiğinde ve her production release öncesinde uygulanır. Her gate, "geçti/geçmedi" biçiminde değerlendirilebilecek somut kriterler içerir — muğlak veya yalnızca yorumla değerlendirilebilecek madde bu dokümana eklenmez.

Bir gate'in bir kriteri bu projede henüz otomatikleştirilmemiş olabilir (ör. otomatik bir link-checker script'i yok); bu durumda kriter **manuel olarak** (kod okuma, tarayıcıda gezinme, derlenmiş çıktıyı inceleme) doğrulanır — ama yine de atlanmaz.

---

# 1. SEO Gate

Bir sayfa, aşağıdakilerin **tamamı** doğrulanmadan yayınlanmaz:

- [ ] **Search Intent** — Sayfanın hizmet ettiği tek arama niyeti (Informational / Commercial Investigation / Transactional / Local / Navigational — bkz. SEARCH_STRATEGY.md §7, `docs/strategy/INTENT_MAP.md` §2) açıkça belirlenebiliyor; sayfa birden fazla niyete aynı ağırlıkla hizmet etmeye çalışmıyor.
- [ ] **Title** — Her sayfanın kendine özgü, jenerik olmayan bir `<title>`'ı var (MainLayout'un varsayılanına düşmüyor) ve sayfanın konusunu içeriyor.
  - Marka eki ("| Avrasya İşitme Cihazları") yalnızca gerektiğinde eklenir.
  - Marka sayısı gibi işletme bilgileri title/meta'ya **mekanik olarak eklenmez**; yalnızca sayfanın search intent'i ve içerik amacı için gerçekten anlamlıysa kullanılır.
- [ ] **Meta Description** — Her sayfanın kendine özgü bir meta description'ı var; boş veya kopyalanmış değil.
- [ ] **H1/H2 Hiyerarşisi** — Sayfada tam olarak **bir** `<h1>` var; alt başlıklar mantıksal sırayla ilerliyor (bir `<h3>`, kendinden önce bir `<h2>` olmadan görünmüyor).
- [ ] **Canonical** — Bkz. Bölüm 5 Canonical Gate (bağımsız gate, burada tekrar edilmez).
- [ ] **Indexability/Noindex** — Sayfanın index durumu (indexlenir / `noindex`) kasıtlı bir karardır; yanlışlıkla `noindex` bırakılmış veya yanlışlıkla indexlenmeye açılmış (ör. `/ds/*`, taslak sayfa) bir sayfa yok.
- [ ] **OG/Twitter Card** — Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) ve Twitter Card etiketleri mevcut ve sayfanın gerçek içeriğiyle tutarlı; jenerik/placeholder görsel değil.
- [ ] **Internal Linking** — Sayfa en az bir ilgili hub/cluster içeriğe (SEARCH_STRATEGY.md §6, §15) bağlanıyor; hiçbir sayfa izole (orphan) bırakılmıyor (bkz. Bölüm 6, 404/Link QA Gate).
- [ ] **Breadcrumb** — Sayfa, site hiyerarşisindeki yerini gösteren bir breadcrumb'a sahip (ana sayfa ve üst kategori dahil).
- [ ] **Duplicate/Thin Content** — Sayfa, sitede zaten var olan başka bir sayfayla yalnızca küçük farklarla (ör. yalnızca şehir adı değişmiş) aynı değil; sayfa, konusunu gerçekten karşılayacak derinlikte.
- [ ] **Orphan Page** — Sayfaya sitenin başka hiçbir yerinden (menü, footer, ilgili içerik, breadcrumb) gerçek bir link yok durumu oluşmuyor (bkz. Bölüm 6).

---

# 2. Local SEO Gate

> Coğrafi öncelik burada **tekrar edilmez**. Canonical Source: LOCAL_SOT §3; özeti COMPANY.md §5. Yerel SEO önceliği (Darıca > Gebze > Çayırova > Kocaeli > diğer) ile evde hizmet alanı **ayrı bilgilerdir** (COMPANY.md §6).

- [ ] **Hiyerarşiye Uyum** — Sayfada geçen her ilçe/il adı yerel SEO kapsamıyla (LOCAL_SOT §3) tutarlı. Evde hizmet verilen bir ilçe şube ya da fiziksel merkez gibi sunulmuyor; kapsamda tanımlı olmayan bir ilçe/il "hizmet bölgesi" gibi gösterilmiyor.
- [ ] **Doğal Kullanım (Keyword Stuffing Yasağı)** — Konum adı, doğal bir cümle içinde en fazla anlamlı sıklıkta geçiyor; başlıkta/metinde yapay şekilde tekrarlanmıyor (somut eşik: aynı ilçe adının bir sayfada mekanik olarak >3-4 kez, bağlamsız biçimde tekrarlanması bu gate'i geçemez — sayı bir "limit" değil, "doğal mı yoksa zorlama mı" sorusunun somutlaştırılmış hâlidir).
- [ ] **Zorla Ekleme Yasağı** — Konum adı, konuyla ilgisi olmayan bir sayfaya (ör. genel bir bilgi/rehber sayfasına) yalnızca "Local SEO için" eklenmiş değil; yalnızca gerçekten yerel bağlamı olan sayfalarda (ana sayfa, iletişim, hizmet sayfaları) kullanılıyor.
- [ ] **NAP Tutarlılığı** — İsim/Adres/Telefon ve telefon rolleri, sayfa içinde SoT'taki (LOCAL_SOT §1, CONVERSION_SOT §1) biçimle birebir aynı; kısaltma veya farklı format yok.
- [ ] **Google Business Profile Hizalaması** — Sayfada verilen kategori/hizmet alanı/çalışma saatleri, GBP profiliyle çelişmiyor (manuel çapraz kontrol — bu proje kapsamında GBP'ye programatik erişim yok).
- [ ] **Local Entity Tutarlılığı** — İşletme, coğrafi bağlamda da her zaman tek marka olarak anılıyor: ilk ve resmî kullanımda "Avrasya İşitme Cihazları", doğal sonraki kullanımlarda "Avrasya İşitme" (BRAND_SOT §1, SEARCH_STRATEGY.md §4). eniyicihaz.com yalnızca alan adıdır; marka/entity adı olarak kullanılmaz.
- [ ] **Doorway/Scaled Local Page Yasağı** — Aynı hizmet/içerik sayfasının, yalnızca ilçe adı değiştirilerek çoğaltılmış bir kopyası (ör. "/darica-isitme-cihazi", "/gebze-isitme-cihazi" gibi neredeyse özdeş içerikli sayfalar seti) oluşturulmuyor. Her bölgesel içerik, o bölgeye özgü gerçek bir farkla var olmalı; farkı yoksa sayfa açılmaz.

---

# 3. GEO / AI Search Gate

> AI-crawler erişim politikası ve `llms.txt` bu gate'te **zorunlu bir teknik uygulama olarak varsayılmaz** — bunlar SEARCH_STRATEGY.md §9'a bağlı, henüz karara bağlanmamış açık stratejik konulardır (bkz. Bölüm 3.1). Bu gate yalnızca, bir karar verildiğinde o kararla sayfanın tutarlı olup olmadığını kontrol eder.

- [ ] **Entity-First İçerik** — Sayfa, bir anahtar kelime dizisi değil, tanımlı bir entity (SEARCH_STRATEGY.md §4) etrafında kurulmuş; entity ilk cümlelerde net şekilde tanımlanıyor.
- [ ] **Atıf-Hazır (Citation-Ready) Yazım** — En az bir paragraf/bölüm, sayfanın geri kalanına ihtiyaç duymadan tek başına doğru ve eksiksiz bir cevap sunuyor (SEARCH_STRATEGY.md §9 "Kendi Başına Yeterli Cevap Birimleri").
- [ ] **Direkt-Cevap Yapıları** — Definition/Comparison/FAQ/HowTo/Checklist kalıplarından **gerçekten uygun olan** en az biri kullanılmış; sayfa buna uygun değilse bir kalıp zorla eklenmemiş (SEARCH_STRATEGY.md §8 kuralı: "mevcut olmayan bir soruyu icat etmek değil").
- [ ] **Yapısal Çıkarılabilirlik** — Bilgi net başlıklar, kısa paragraflar, listeler ve (uygunsa) tablolarla sunuluyor; bir makine tarafından kolayca ayrıştırılabilir.
- [ ] **E-E-A-T Sinyalleri** — Deneyim/Uzmanlık/Yetkinlik/Güven sinyallerinden (SEARCH_STRATEGY.md §13) en az ilgili olanları sayfada somut biçimde mevcut. Hepsi SoT'taki [DOĞRULANDI] kayıtlara izlenebilir olmalı (BUSINESS_SOT §1–§4). Kuruluş (2009) ile Darıca merkezinin açılışı (Ağustos 2024) ayrı yazılır.
- [ ] **Çelişkisizlik** — Sayfadaki hiçbir gerçek (adres, hizmet, marka ilişkisi, coğrafi kapsam), sitenin başka bir yerindeki aynı gerçekle çelişmiyor.
- [ ] **AI-Üretimli İçerik İçin İnsan Onayı** — Sayfanın herhangi bir kısmı yapay zekâ yardımıyla üretildiyse, yayın öncesi bir insan tarafından fiilen okunup onaylandı (PRINCIPLES.md §12).
- [ ] **AI-Crawler Erişim Tutarlılığı** — `robots.txt`'te tanımlı AI-crawler kuralları (varsa) ile sayfanın gerçek indexlenebilirlik durumu çelişmiyor.

## 3.1 Açık Strateji Kararları (bu gate'in kapsamı DIŞINDA — uygulama değil, değerlendirme konusu)

- **AI-crawler erişim politikası** (GPTBot, ClaudeBot, PerplexityBot vb. için `robots.txt` kuralları) — henüz karara bağlanmamıştır. Karar verildiğinde SEARCH_STRATEGY.md §9'a eklenir, bu gate'e yalnızca "tutarlılık kontrolü" olarak yansır.
- **`llms.txt`** — bu dosyanın oluşturulup oluşturulmayacağı, oluşturulacaksa neyi kapsayacağı, henüz karara bağlanmamış bir stratejik konudur; bu gate onun varlığını zorunlu koşmaz. Karar SEARCH_STRATEGY.md'ye işlendiğinde bu bölüm güncellenir.

---

# 4. Schema Gate

> Sayfa tipi↔şema eşleştirmesinin kavramsal çerçevesi SEARCH_STRATEGY.md §11'dedir; bu gate onu operasyonel bir kontrol listesine çevirir.

- [ ] **Şema Tipi Kararı Var mı?** — Varlık ve tip modeli (tek düğüm / Organization + yerel işletme; MedicalBusiness veya başka bir LocalBusiness alt tipi; yerel sayfalarda kullanım) **henüz kilitlenmedi**. Bir şema uygulanmadan önce `docs/tech/SCHEMA_GRAPH.md`'deki karar ve doğrulama kriterleri tamamlanmış olmalı: Schema.org yapısı, Google structured data uygunluğu ve gerçek işletme modeli birlikte değerlendirilir. Karar yoksa şema uygulanmaz.
- [ ] **BreadcrumbList** — Her sayfada, gerçek site hiyerarşisiyle birebir örtüşen bir BreadcrumbList şeması var.
- [ ] **Kurumsal Kimlik Verisi** — İşletme kimliği şeması yalnızca SoT'taki [DOĞRULANDI] verilerle dolduruluyor (ad, adres, telefon, çalışma saatleri). Uydurma alan yok; [DOĞRULAMA GEREKLİ] veya [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] etiketli bilgi şemaya girmiyor.
- [ ] **FAQPage — Yalnızca Gerçek FAQ Varsa** — FAQPage şeması, yalnızca sayfada kullanıcının **görebileceği** gerçek soru-cevap bloğu varsa eklenir; görünmeyen/gizli soru-cevap için şema üretilmez.
- [ ] **Article vb. — Yalnızca Uygun Sayfalarda** — Article şeması yalnızca gerçekten makale/rehber niteliğindeki sayfalarda kullanılır; ürün veya hizmet sayfasına Article şeması eklenmez.
- [ ] **Görünür İçerik/Şema Tutarlılığı** — Şemada beyan edilen her bilgi, sayfada kullanıcının gerçekten gördüğü içerikle birebir örtüşüyor; kullanıcının görmediği bir bilgi şemaya yazılmıyor.
- [ ] **Sahte Şema Yasağı** — Uydurma rating, review, award, sertifika şeması yok.
- [ ] **Fiyat/Offer Yasağı** — Sitede cihaz fiyatı yayınlanmasına dair karar verilmediği için (PRODUCT_SOT §4, PRINCIPLES.md §5) hiçbir şemaya fiyat, para birimi veya "başlangıç fiyatı" alanı eklenmiyor.

---

# 5. Canonical Gate

- [ ] **Her İndexlenebilir Sayfada Canonical Var** — `noindex` olmayan her sayfa, kendine (self-referencing) veya doğru hedefe işaret eden bir `<link rel="canonical">` etiketine sahip.
- [ ] **`www.eniyicihaz.com` Standardı** — Tüm canonical URL'ler `https://www.eniyicihaz.com` kök alan adını kullanıyor; `eniyicihaz.com` (www'suz) veya `http://` varyantı canonical olarak görünmüyor.
- [ ] **Trailing Slash Standardı** — Site genelinde tek bir trailing-slash kuralı (sonda `/` var ya da yok, tutarlı biçimde) uygulanıyor; aynı sayfanın hem `/sayfa` hem `/sayfa/` biçimi farklı canonical'lara işaret etmiyor.
- [ ] **Canonical/Sitemap/Indexability Üçlü Tutarlılığı** — Bir sayfa `noindex` ise sitemap'te yer almıyor; sitemap'te yer alan bir sayfanın canonical'ı kendi gerçek URL'sinden başka bir yere işaret etmiyor.
- [ ] **Redirect Zinciri Kontrolü** — Hiçbir canonical URL, bir redirect'in (3xx) hedefi değil; canonical her zaman son, gerçek, 200 döndüren URL'e işaret ediyor.

---

# 6. Sitemap Gate

- [ ] **XML Sitemap Build Kontrolü** — `npm run build` sonrası üretilen sitemap dosyası (`sitemap-index.xml` / `sitemap-0.xml`) hatasız üretiliyor ve gerçek sayfa sayısıyla makul biçimde örtüşüyor.
- [ ] **`/ds/*` Hariç Tutma** — `astro.config.mjs`'teki mevcut `filter` (bkz. `!new URL(page).pathname.startsWith('/ds/')`) korunuyor; derlenmiş sitemap'te `/ds/` altında hiçbir URL yok.
- [ ] **Noindex/404/Redirect URL'lerin Dışında Kalması** — `noindex` olarak işaretli, 404 döndüren veya bir redirect'in kaynağı olan hiçbir URL sitemap'te yer almıyor.
- [ ] **Canonical URL Uyumu** — Sitemap'teki her URL, o sayfanın kendi canonical'ıyla birebir aynı (bkz. Bölüm 5).
- [ ] **Beklenmeyen URL Değişimi Kontrolü** — Bir release sonrası sitemap'teki toplam URL sayısı ve URL listesi, o release'te yapılan değişikliklerle (kaç sayfa eklendi/kaldırıldı) açıklanabilir; beklenmedik bir URL kaybı veya artışı varsa release durdurulup araştırılır.

---

# 7. 404 / Link QA Gate

- [ ] **Gerçek Route Karşılığı** — Sayfadaki her internal `href`, gerçekten var olan bir route'a karşılık geliyor (derlenmiş `dist/` çıktısında veya dev server'da fiilen 200 dönüyor).
- [ ] **404 Taraması** — Sitede, kullanıcıyı bilerek veya bilmeyerek bir 404 sayfasına götüren hiçbir link yok.
- [ ] **`#` Placeholder Yasağı** — Hiçbir gerçek navigasyon linki `href="#"` değil (yalnızca gerçek, sayfa-içi bir çapa hedefliyorsa `#anchor-id` biçimi istisnadır).
- [ ] **Boş `href` Yasağı** — Hiçbir `<a>` etiketi boş (`href=""`) veya `href` özniteliği eksik değil.
- [ ] **Eski Slug Kontrolü** — Bir sayfa yeniden adlandırıldığında/taşındığında, eski slug'a giden hiçbir iç link kalmıyor; eski slug'a dışarıdan gelebilecek trafik için gerekiyorsa 301 redirect kuruluyor (bkz. Redirect Chain maddesi).
- [ ] **Redirect Chain** — Hiçbir URL, birden fazla redirect adımından (A→B→C) geçmiyor; her redirect doğrudan son hedefe gidiyor.
- [ ] **Orphan Page** — Sitedeki her gerçek sayfa, en az bir başka sayfadan (menü, footer, breadcrumb, ilgili içerik, site haritası) gerçek bir linkle erişilebilir; hiçbir sayfa yalnızca URL'i bilinerek ulaşılabilir durumda bırakılmıyor.

---

# 8. Responsive QA Gate

**Zorunlu viewport genişlikleri (değiştirilemez):** `390 / 430 / 768 / 1024 / 1280 / 1440 / 1920` px.

Her yeni veya önemli ölçüde değiştirilen sayfada, mümkün olduğunca **gerçek tarayıcı + kod seviyesi** kontrol yapılır (bu projede daha önce Playwright ile örneği kurulmuştur — bkz. proje geçmişi):

- [ ] **Horizontal Overflow** — Her 7 viewport'ta `document.documentElement.scrollWidth <= clientWidth` (yatay scroll oluşmuyor).
- [ ] **Header/Sticky Overlap** — Sticky header, altındaki içerikle (özellikle sayfa başlığı, breadcrumb) hiçbir viewport'ta çakışmıyor.
- [ ] **Breakpoint Geçişleri** — 7 viewport arasındaki ara genişliklerde de (ör. 500px, 900px) ani/kırık bir düzen sıçraması yok.
- [ ] **Grid/Card Taşması** — Grid/kart düzenlerinde hiçbir öğe komşusunun üzerine taşmıyor veya konteynerinden dışarı çıkmıyor.
- [ ] **Typography Overflow** — Uzun kelime/başlıklar taşma veya kesilme yaratmıyor (`overflow-wrap`/`word-break` gerektiği yerde uygulanmış).
- [ ] **Image Aspect Ratio** — Görseller `layout shift` yaratacak biçimde deforme olmuyor; en-boy oranı korunuyor.
- [ ] **Navigation/Mega Menu** — Header, mega menü ve mobil menü her viewport'ta doğru açılıyor/kapanıyor, taşmıyor.
- [ ] **Modal/Overlay** — Modal/overlay bileşenleri (ör. arama overlay'i) her viewport'ta ekrana sığıyor, arka planı doğru kilitliyor.
- [ ] **Footer** — Footer sütunları her viewport'ta düzgün kırılıyor, taşmıyor.
- [ ] **Touch Target** — Dokunulabilir öğeler (buton, link, form kontrolü) her viewport'ta **en az 48×48 px** (MASTER_PLAN K5).
- [ ] **Uzun Metin** — Gerçek (ideal olmayan, uzun) içerikle test edilmiş; kısa placeholder metinle değil.
- [ ] **CLS/Layout Shift Riski** — Görsel/font/reklam yükleme kaynaklı beklenmeyen bir layout shift yok (boyutları önceden tanımlı `width`/`height` veya `aspect-ratio`).

---

# 9. Build & Release Gate

Sıra bağlayıcıdır; bir adım geçmeden bir sonrakine geçilmez:

1. [ ] `npx astro check` — tip/derleme hatası yok (mevcut, bilinen, ilgisiz DS-demo hataları dışında yeni hata yok).
2. [ ] `npm run build` — sıfır hata, sayfa sayısı beklenen artış/azalışla açıklanabilir.
3. [ ] **Broken-link audit** — Bölüm 7 (404/Link QA Gate).
4. [ ] **Sitemap audit** — Bölüm 6 (Sitemap Gate).
5. [ ] **Canonical audit** — Bölüm 5 (Canonical Gate).
6. [ ] **Schema audit** — Bölüm 4 (Schema Gate).
7. [ ] **Responsive browser QA** — Bölüm 8 (Responsive QA Gate).
8. [ ] `git diff` review — değişen dosyaların tamamı gözden geçirildi; kapsam dışı/istenmeyen bir değişiklik yok.
9. [ ] Commit — yalnızca ilgili değişiklikler tek/ayrı commit(ler) halinde, açık bir mesajla.
10. [ ] Push — `origin/main`'e push (yalnızca kullanıcının o işlem için ayrıca talimat verdiği durumda, bkz. Bölüm 10).

---

# 10. Production Deploy Gate

- [ ] **Açık Onay Zorunludur** — Kullanıcının, **o release için özel ve ayrı** bir onayı olmadan hiçbir production deploy işlemi başlatılmaz. Önceki bir onay, sonraki bir release için geçerli sayılmaz.
- [ ] **Manuel Deploy Tetiklenmez** — Cloudflare Pages (veya eşdeğeri) üzerinden manuel bir "yeni deployment" işlemi başlatılmaz; yayına alma yalnızca `origin/main`'e push sonrası mevcut GitHub entegrasyonu üzerinden otomatik gerçekleşir.
- [ ] **Push Öncesi Durdurma** — Push öncesi herhangi bir eksik, şüpheli veya beklenmeyen dosya/değişiklik fark edilirse işlem durdurulur ve kullanıcıya bildirilir; varsayım yapılarak devam edilmez.

---

# 11. Doküman Otoritesi

Bu doküman; SoT, MASTER_PLAN.md ve projenin diğer temel referanslarıyla (COMPANY.md, PRINCIPLES.md, DESIGN_SYSTEM_GUIDE.md, SEARCH_STRATEGY.md, IMPLEMENTATION_STANDARD.md) birlikte referans katmanını oluşturur. Yetki alanları:
- **SoT:** işletme gerçekleri (birinci kaynak)
- **MASTER_PLAN.md:** kilitli strateji
- **COMPANY.md:** SoT'un özeti
- **PRINCIPLES.md:** davranış
- **DESIGN_SYSTEM_GUIDE.md:** yapı
- **SEARCH_STRATEGY.md:** keşfedilebilirlik felsefesi
- **IMPLEMENTATION_STANDARD.md:** component/build kalitesi
- **Bu doküman:** **sayfa/release seviyesi operasyonel yayın kapısı**

Bir çelişki ortaya çıkarsa:
- Olgusal bilgi, coğrafi öncelik ve hizmet alanı: SoT
- Strateji: MASTER_PLAN.md ve SEARCH_STRATEGY.md
- Operasyonel kontrol listesi: bu doküman

Sistem büyüdükçe bu doküman da güncellenir; ancak güncelleme yapılmadığı sürece burada yazılan kapılar bağlayıcıdır.

---

# 12. Faz 1 Ek Kapıları (2026-10-07)

> Bu bölüm Faz 1'de eklendi (MASTER_PLAN.md §8). Önceki bölümleri geçersiz kılmaz; onlara ek olarak uygulanır. Yeni sayfa, önemli içerik değişikliği ve her production release öncesinde geçerlidir. İşletme bilgisi burada tekrarlanmaz; kaynak her zaman SoT'tur (`docs/source-of-truth/*`).

## 12.1 Business Truth Check
- [ ] Sayfadaki her işletme gerçeği (kimlik, kuruluş, Darıca merkezinin açılışı, ekip, hizmet, deneme, servis, marka, telefon, adres, saat, hizmet alanı) SoT'ta **[DOĞRULANDI]** olarak kayıtlı.
- [ ] [DOĞRULAMA GEREKLİ], [KULLANICIDAN BİLGİ GEREKLİ], [VERİ BEKLENİYOR] veya [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] etiketli bilgi, kesin bilgi gibi yayınlanmıyor.
- [ ] [TIME-SENSITIVE] bilgi (ör. SGK tutarları, kampanya ve fiyat bilgisi) yalnızca kaynağı ve son kontrol tarihiyle, yayın kararı verilmişse kullanılıyor.
- [ ] Kod veya eski metin, SoT'taki doğrulanmış bilgiyle çelişiyorsa SoT esas alınıyor (MASTER_PLAN.md §1).

## 12.2 Forbidden Claim Check
- [ ] BUSINESS_SOT §12 ve BRAND_SOT §3'teki geçersiz/yasak ifadeler sayfada yok. Özellikle:
  - Kuruluş (2009) ile Darıca merkezinin açılışını (Ağustos 2024) birleştiren ifadeler ("2009'dan beri Darıca'da" ve benzerleri).
  - "2009'dan beri aynı ekip", "2009'dan beri işitme sektöründe".
  - Kanıtsız üstünlük ifadeleri ("en iyi", "en güvenilir", "Türkiye'nin en …", "1 numara").
  - "ENİYİCİHAZ" / "EniyiCihaz" / "Eniyicihaz.com"un marka adı olarak kullanımı.
- [ ] "Ücretsiz deneme" ifadesi kullanılmıyor. Deneme dili SERVICE_SOT §1.5'e uyuyor (merkezde deneme ile satın alarak deneme ayrı; kulak içi cihaz istisnası).
- [ ] "Yetkili bayi" veya benzeri yetki iddiası, ilgili marka için SoT'ta doğrulanmadan kullanılmıyor.
- [ ] Tıbbi teşhis/tedavi vaadi yok; tıbbi bilgi kaynaklı ve insan onaylı (PRINCIPLES.md §5, §12).

## 12.3 Duplicate / Local Doorway Check
- [ ] Sayfa, aynı niyete hizmet eden mevcut bir sayfanın kopyası değil; yeni sayfa açma gerekçesi MASTER_PLAN K6'ya uyuyor (farklı niyet, ihtiyaç, konu, yerel ihtiyaç veya güçlü mimari gerekçe).
- [ ] Yerel sayfalarda yalnızca ilçe adı değiştirilmiş blok, şablon cümle veya tekrar eden SSS yok.
- [ ] Gebze ve Çayırova içerikleri birbirinin kopyası değil; birinin verisi diğerine taşınmıyor.
- [ ] Hiçbir ilçe şube veya fiziksel merkez gibi gösterilmiyor; tek fiziksel merkez Darıca (LOCAL_SOT §1).
- [ ] Yerel SEO kapsamı ile evde hizmet alanı karıştırılmıyor (COMPANY.md §5–§6).

## 12.4 SEO Intent Check
- [ ] Sayfanın tek bir birincil niyeti ve buna uygun birincil CTA'sı tanımlı (SEARCH_STRATEGY.md §7).
- [ ] Aynı niyete hizmet eden başka bir kanonik sayfa yok; varsa kanibalizasyon çözülmeden yayınlanmıyor.
- [ ] Title, H1 ve ilk paragraf aynı niyete hizmet ediyor; marka eki ve işletme bilgileri mekanik olarak eklenmemiş (Bölüm 1, Title).

## 12.5 E-E-A-T Check
- [ ] Deneyim, uzmanlık ve güven sinyalleri yalnızca SoT'taki doğrulanmış kayıtlara dayanıyor (BUSINESS_SOT §4: ekip ve uzmanlık).
- [ ] Kişilerin eğitim ve deneyim bilgileri birbirine karıştırılmıyor; organizasyondaki süre ile sektör deneyimi ayrı tutuluyor.
- [ ] Kişi adı, fotoğrafı veya unvanı yalnızca paylaşım izni olan bilgiyle kullanılıyor.
- [ ] YMYL içerikte kaynak gösteriliyor ve içerik insan tarafından onaylanmış.

## 12.6 Technical Safety Check
- [ ] Değişiklik yalnızca onaylanan kapsamdaki dosyalara dokunuyor; istenmeyen refactor, bağımlılık veya mimari değişiklik yok (IMPLEMENTATION_STANDARD.md).
- [ ] URL, canonical, sitemap, yönlendirme ve index durumu bilinçli olarak korunuyor ya da değiştiriliyor (Bölüm 5–7).
- [ ] Build hatasız tamamlanıyor (Bölüm 9).
- [ ] Repoda veya dokümanlarda şifre, API key, token, secret ya da kişisel giriş bilgisi yok.

## 12.7 Consent / PII Check
- [ ] Analytics ve pazarlama etiketleri yalnızca ilgili onay kategorisi verildikten sonra çalışıyor; mevcut consent altyapısının davranışı varsayımla değil, test edilerek değerlendiriliyor.
- [ ] Event parametrelerinde kişisel veri (ad, telefon, e-posta, sağlık bilgisi) yok.
- [ ] Form eklenirse (MASTER_PLAN K4): sağlık verisi toplanmıyor, alanlar asgari, KVKK aydınlatması ve onayı ayrı plan ve onayla tamamlanmış.
- [ ] Mevcut event adları onaysız değiştirilmiyor.

## 12.8 Schema Validation Before Implementation
- [ ] Şema tipi ve varlık modeli kararı alınmadan şema kodu yazılmıyor (Bölüm 4).
- [ ] Uygulamadan önce önerilen yapı Schema.org tanımlarıyla ve Google structured data yönergeleriyle karşılaştırılıyor; gerçek işletme modeliyle (tek fiziksel merkez) tutarlı.
- [ ] Uygulama sonrası Rich Results Test / Schema Markup Validator ile doğrulama yapılıyor; hatalar giderilmeden release yapılmıyor.
- [ ] Şemada fiyat, sahte puan/yorum veya doğrulanmamış bilgi yok.

## 12.9 Mobile / Accessibility / Conversion Check
- [ ] Dokunma hedefleri en az 48×48 px; gövde metni temel değeri 17 px (MASTER_PLAN K5).
- [ ] 7 viewport testi (Bölüm 8), klavye erişimi ve görünür odak sağlanıyor.
- [ ] CTA etiketi gittiği yeri doğru anlatıyor; telefon ve WhatsApp CTA'ları ana numarayı kullanıyor, diğer numaralar rolleriyle gösteriliyor (CONVERSION_SOT §1).
- [ ] Randevu ve ziyaret dili SoT'a uyuyor: randevusuz gelinebilir; bazı hizmetler randevu gerektirir (SERVICE_SOT §2.16).
- [ ] Baskı ve aciliyet dili yok (PRINCIPLES.md §9).

## 12.10 Production Approval Gate
- [ ] Çalışma sırası izlendi: ANALİZ → PLAN → ONAY → UYGULAMA → TEST/QA → ONAY → PRODUCTION.
- [ ] Commit, push ve deploy her biri kullanıcının **ayrı ve açık** onayıyla yapılıyor; bir adım için verilen onay sonrakini kapsamıyor (Bölüm 10).
- [ ] Release öncesi bu bölümdeki ve Bölüm 1–9'daki kapıların sonucu kullanıcıya raporlandı.
