# QUALITY_GATES.md

> Bu doküman, projenin teknik anayasalarından biridir. IMPLEMENTATION_STANDARD.md'nin *component/build seviyesi* "Definition of Done"ına karşılık gelen, **sayfa/release seviyesi operasyonel Definition of Done**'dır: bir sayfa veya bir release, ancak burada tanımlanan kapılardan (gate) geçtiğinde yayına/production'a hazır sayılır.
>
> Bu doküman **prensip değil, kontrol edilebilir ve test edilebilir kriter** içerir. "Neden" sorusunun cevabı (SEO/Local SEO/GEO felsefesi) SEARCH_STRATEGY.md'de, "nasıl inşa ederiz" DESIGN_SYSTEM_GUIDE.md'de, "component kalitesi" IMPLEMENTATION_STANDARD.md'de yaşar — bu doküman onları tekrar etmez, yalnızca yayın öncesi somut kontrol listesini tutar.
>
> **Diğer dokümanlarla ilişki:** Coğrafi öncelik listesi burada tekrarlanmaz — Canonical Source: COMPANY.md §17. SEO/GEO felsefesi burada tekrarlanmaz — Canonical Source: SEARCH_STRATEGY.md. Component build kalitesi burada tekrarlanmaz — Canonical Source: IMPLEMENTATION_STANDARD.md.

---

# 0. Kapsam ve Kullanım

Bu gate'ler, yeni bir sayfa yayınlanmadan önce, mevcut bir sayfa önemli ölçüde değiştirildiğinde ve her production release öncesinde uygulanır. Her gate, "geçti/geçmedi" biçiminde değerlendirilebilecek somut kriterler içerir — muğlak veya yalnızca yorumla değerlendirilebilecek madde bu dokümana eklenmez.

Bir gate'in bir kriteri bu projede henüz otomatikleştirilmemiş olabilir (ör. otomatik bir link-checker script'i yok); bu durumda kriter **manuel olarak** (kod okuma, tarayıcıda gezinme, derlenmiş çıktıyı inceleme) doğrulanır — ama yine de atlanmaz.

---

# 1. SEO Gate

Bir sayfa, aşağıdakilerin **tamamı** doğrulanmadan yayınlanmaz:

- [ ] **Search Intent** — Sayfanın hizmet ettiği tek arama niyeti (Informational / Commercial Investigation / Navigational / Transactional — bkz. SEARCH_STRATEGY.md §7) açıkça belirlenebiliyor; sayfa birden fazla niyete aynı ağırlıkla hizmet etmeye çalışmıyor.
- [ ] **Title** — Her sayfanın kendine özgü, jenerik olmayan bir `<title>`'ı var (MainLayout'un varsayılanına düşmüyor); sayfanın konusunu ve (uygunsa) marka adını içeriyor.
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

> Coğrafi hiyerarşinin kendisi burada **tekrar edilmez** — Canonical Source: COMPANY.md §17 (Darıca → Gebze/Çayırova → Kocaeli → Dilovası/Tuzla/Pendik).

- [ ] **Hiyerarşiye Uyum** — Sayfada geçen her ilçe/il adı, COMPANY.md §17'de tanımlı hiyerarşiyle tutarlı; dokümanda tanımlı olmayan bir ilçe/il "hizmet bölgesi" gibi sunulmuyor.
- [ ] **Doğal Kullanım (Keyword Stuffing Yasağı)** — Konum adı, doğal bir cümle içinde en fazla anlamlı sıklıkta geçiyor; başlıkta/metinde yapay şekilde tekrarlanmıyor (somut eşik: aynı ilçe adının bir sayfada mekanik olarak >3-4 kez, bağlamsız biçimde tekrarlanması bu gate'i geçemez — sayı bir "limit" değil, "doğal mı yoksa zorlama mı" sorusunun somutlaştırılmış hâlidir).
- [ ] **Zorla Ekleme Yasağı** — Konum adı, konuyla ilgisi olmayan bir sayfaya (ör. genel bir bilgi/rehber sayfasına) yalnızca "Local SEO için" eklenmiş değil; yalnızca gerçekten yerel bağlamı olan sayfalarda (ana sayfa, iletişim, hizmet sayfaları) kullanılıyor.
- [ ] **NAP Tutarlılığı** — İsim/Adres/Telefon, sayfa içinde COMPANY.md'deki biçimle birebir aynı; kısaltma veya farklı format yok.
- [ ] **Google Business Profile Hizalaması** — Sayfada verilen kategori/hizmet alanı/çalışma saatleri, GBP profiliyle çelişmiyor (manuel çapraz kontrol — bu proje kapsamında GBP'ye programatik erişim yok).
- [ ] **Local Entity Tutarlılığı** — "Avrasya İşitme", "Eniyicihaz.com" gibi entity isimleri, coğrafi bağlamda da her zaman aynı biçimde anılıyor (SEARCH_STRATEGY.md §4).
- [ ] **Doorway/Scaled Local Page Yasağı** — Aynı hizmet/içerik sayfasının, yalnızca ilçe adı değiştirilerek çoğaltılmış bir kopyası (ör. "/darica-isitme-cihazi", "/gebze-isitme-cihazi" gibi neredeyse özdeş içerikli sayfalar seti) oluşturulmuyor. Her bölgesel içerik, o bölgeye özgü gerçek bir farkla var olmalı; farkı yoksa sayfa açılmaz.

---

# 3. GEO / AI Search Gate

> AI-crawler erişim politikası ve `llms.txt` bu gate'te **zorunlu bir teknik uygulama olarak varsayılmaz** — bunlar SEARCH_STRATEGY.md §9'a bağlı, henüz karara bağlanmamış açık stratejik konulardır (bkz. Bölüm 3.1). Bu gate yalnızca, bir karar verildiğinde o kararla sayfanın tutarlı olup olmadığını kontrol eder.

- [ ] **Entity-First İçerik** — Sayfa, bir anahtar kelime dizisi değil, tanımlı bir entity (SEARCH_STRATEGY.md §4) etrafında kurulmuş; entity ilk cümlelerde net şekilde tanımlanıyor.
- [ ] **Atıf-Hazır (Citation-Ready) Yazım** — En az bir paragraf/bölüm, sayfanın geri kalanına ihtiyaç duymadan tek başına doğru ve eksiksiz bir cevap sunuyor (SEARCH_STRATEGY.md §9 "Kendi Başına Yeterli Cevap Birimleri").
- [ ] **Direkt-Cevap Yapıları** — Definition/Comparison/FAQ/HowTo/Checklist kalıplarından **gerçekten uygun olan** en az biri kullanılmış; sayfa buna uygun değilse bir kalıp zorla eklenmemiş (SEARCH_STRATEGY.md §8 kuralı: "mevcut olmayan bir soruyu icat etmek değil").
- [ ] **Yapısal Çıkarılabilirlik** — Bilgi net başlıklar, kısa paragraflar, listeler ve (uygunsa) tablolarla sunuluyor; bir makine tarafından kolayca ayrıştırılabilir.
- [ ] **E-E-A-T Sinyalleri** — Deneyim/Uzmanlık/Yetkinlik/Güven sinyallerinden (SEARCH_STRATEGY.md §13) en az ilgili olanları sayfada somut biçimde mevcut (ör. SGK anlaşmalı statü, 2009'dan beri, uzman kadro — hepsi COMPANY.md'ye izlenebilir).
- [ ] **Çelişkisizlik** — Sayfadaki hiçbir gerçek (adres, hizmet, marka ilişkisi, coğrafi kapsam), sitenin başka bir yerindeki aynı gerçekle çelişmiyor.
- [ ] **AI-Üretimli İçerik İçin İnsan Onayı** — Sayfanın herhangi bir kısmı yapay zekâ yardımıyla üretildiyse, yayın öncesi bir insan tarafından fiilen okunup onaylandı (PRINCIPLES.md §12).
- [ ] **AI-Crawler Erişim Tutarlılığı** — `robots.txt`'te tanımlı AI-crawler kuralları (varsa) ile sayfanın gerçek indexlenebilirlik durumu çelişmiyor.

## 3.1 Açık Strateji Kararları (bu gate'in kapsamı DIŞINDA — uygulama değil, değerlendirme konusu)

- **AI-crawler erişim politikası** (GPTBot, ClaudeBot, PerplexityBot vb. için `robots.txt` kuralları) — henüz karara bağlanmamıştır. Karar verildiğinde SEARCH_STRATEGY.md §9'a eklenir, bu gate'e yalnızca "tutarlılık kontrolü" olarak yansır.
- **`llms.txt`** — bu dosyanın oluşturulup oluşturulmayacağı, oluşturulacaksa neyi kapsayacağı, henüz karara bağlanmamış bir stratejik konudur; bu gate onun varlığını zorunlu koşmaz. Karar SEARCH_STRATEGY.md'ye işlendiğinde bu bölüm güncellenir.

---

# 4. Schema Gate

> Sayfa tipi↔şema eşleştirmesinin kavramsal çerçevesi SEARCH_STRATEGY.md §11'dedir; bu gate onu operasyonel bir kontrol listesine çevirir.

- [ ] **Sayfa Tipine Uygun Şema** — Kurumsal/ana sayfa → Organization; hizmet/bölge içeriği → LocalBusiness/MedicalBusiness türü; ürün/cihaz sayfası → Product (fiyat/Offer **eklenmeden**); bilgi/rehber → Article; adım adım içerik → HowTo/ItemList; navigasyon → BreadcrumbList.
- [ ] **BreadcrumbList** — Her sayfada, gerçek site hiyerarşisiyle birebir örtüşen bir BreadcrumbList şeması var.
- [ ] **MedicalBusiness/Organization** — Kurumsal kimlik şeması, yalnızca COMPANY.md'deki gerçek verilerle (ad, adres, telefon, çalışma saatleri) dolduruluyor; uydurma alan yok.
- [ ] **FAQPage — Yalnızca Gerçek FAQ Varsa** — FAQPage şeması, yalnızca sayfada kullanıcının **görebileceği** gerçek soru-cevap bloğu varsa eklenir; görünmeyen/gizli soru-cevap için şema üretilmez.
- [ ] **Article vb. — Yalnızca Uygun Sayfalarda** — Article şeması yalnızca gerçekten makale/rehber niteliğindeki sayfalarda kullanılır; ürün veya hizmet sayfasına Article şeması eklenmez.
- [ ] **Görünür İçerik/Şema Tutarlılığı** — Şemada beyan edilen her bilgi, sayfada kullanıcının gerçekten gördüğü içerikle birebir örtüşüyor; kullanıcının görmediği bir bilgi şemaya yazılmıyor.
- [ ] **Sahte Şema Yasağı** — Uydurma rating, review, award, sertifika şeması yok.
- [ ] **Fiyat/Offer Yasağı** — Fiyat bilgisi yayımlanmadığından (COMPANY.md §23, PRINCIPLES.md §5), hiçbir sayfada `Product`/`Offer` şemasına fiyat, para birimi veya "başlangıç fiyatı" alanı eklenmiyor.

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
- [ ] **Touch Target** — Dokunulabilir öğeler (buton, link, form kontrolü) 390–430px'te minimum 44–48px yükseklikte.
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

Bu doküman, projenin diğer temel referanslarıyla (COMPANY.md, PRINCIPLES.md, DESIGN_SYSTEM_GUIDE.md, SEARCH_STRATEGY.md, IMPLEMENTATION_STANDARD.md) eşdeğer bağlayıcılığa sahiptir. Altısı birlikte projenin tam referans katmanını oluşturur: COMPANY.md gerçekleri (coğrafi hiyerarşi dahil), PRINCIPLES.md davranışı, DESIGN_SYSTEM_GUIDE.md yapıyı, SEARCH_STRATEGY.md keşfedilebilirlik felsefesini, IMPLEMENTATION_STANDARD.md component/build kalitesini, bu doküman ise **sayfa/release seviyesi operasyonel yayın kapısını** yönetir.

Bir çelişki ortaya çıkarsa: coğrafi/olgusal bilgi COMPANY.md, felsefe/strateji SEARCH_STRATEGY.md, operasyonel kontrol listesi bu doküman esas alınır. Sistem büyüdükçe bu doküman da güncellenir; ancak güncelleme yapılmadığı sürece burada yazılan gate'ler bağlayıcıdır.
