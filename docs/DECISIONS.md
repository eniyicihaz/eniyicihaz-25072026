# Architectural Decisions

> Bu dosya canlı bir karar günlüğüdür — yeni her mimari karar, tarihli yeni bir madde olarak eklenir; eski kararlar silinmez, aşıldıklarında not düşülerek korunur.

## 2026-07-16

> **Durum notu (2026-09-26):** Bu tarihteki kararlardan üçü sonradan fiilen aşıldı — aşağıda madde madde işaretlendi. Kayıt, gerçek olanı yansıtması için silinmedi; ne karar verildiği ve neden değiştiği görünür kalsın diye korundu.

- Büyük componentler numaralandırılacak (Hero001, CTA001...) — **AŞILDI:** gerçek uygulama numarasız, betimleyici isimler kullanıyor (`Hero`, `Closing`, `Trust`...). Bkz. `docs/PROJECT_ARCHITECTURE.md` §6 (2026-09-26'da koda göre güncellendi).
- UI componentleri isim bazlı olacak (Button, Input, Badge...) — geçerli, uygulanmaya devam ediyor.
- Her component kendi klasöründe bulunacak. — geçerli.
- Her component kendi CSS dosyasına sahip olacak. — kısmen geçerli; gerçek uygulamada çoğu component Astro'nun scoped `<style>` bloğunu kullanıyor, ayrı `.css` dosyası yalnızca birkaç `*.tokens.css` dosyasında var. Bu maddenin tam kod-seviyesi denetimi bu turun kapsamı dışında bırakıldı.
- Design Token sistemi kullanılacak. — geçerli.
- Dark Mode ilk sürümde olmayacak. — **AŞILDI (kısmen):** canlı site hâlâ Light-only (bu kısım hâlâ geçerli), ama `/ds/` demo kataloğu için ayrı, canlı siteden bağımsız bir Dark tema alt sistemi zaten mevcut. Bkz. `docs/DESIGN_SYSTEM.md` Kapsam notu ve `src/ds/README.md`.
- Dokümantasyon üç dosya ile sınırlandırıldı. — **AŞILDI:** proje artık 20'den fazla `.md` dokümanına sahip (COMPANY, PRINCIPLES, DESIGN_SYSTEM_GUIDE, SEARCH_STRATEGY, IMPLEMENTATION_STANDARD, QUALITY_GATES + `docs/` altında çok sayıda spesifikasyon dosyası). Bu sınır fiilen terk edildi.

## 2026-09-26

- Coğrafi Local SEO/GEO önceliği resmî olarak 4 kademeli hiyerarşiye bağlandı: Darıca (ana merkez) → Gebze/Çayırova (öncelikli) → Kocaeli (üst bölgesel otorite) → Dilovası/Tuzla/Pendik (ikincil/çevre). Tek kaynak: COMPANY.md §17.
- `QUALITY_GATES.md` oluşturuldu — SEO, Local SEO, GEO/AI Search, Schema, Canonical, Sitemap, 404/Link QA, Responsive QA, Build & Release, Production Deploy Approval için ayrı, kontrol edilebilir yayın kapıları tanımlandı.
- `docs/HOMEPAGE_CREATIVE_DIRECTION.md` ve `docs/HOMEPAGE_MOODBOARD.md` arşivlendi; içerikleri, gerçek 11-bölüm ana sayfa mimarisiyle senkronize edilerek yeni `docs/HOMEPAGE_SPECIFICATION.md`'de birleştirildi.
- `HERO_SPECIFICATION.md` ve `TRUST_SPECIFICATION.md`'nin "kilitli kopya" bölümleri, gerçek üretim koduyla (`hero.data.ts`, `trust.data.ts`) senkronize edildi.
- `IMPLEMENTATION_GUIDE.md` (Header brifi) tamamlanmış/tarihsel olarak işaretlendi.
- Bu tur yalnızca dokümantasyon değişikliğidir; hiçbir `.astro`/`.ts`/`.css`/production kodu değiştirilmedi.
> **Durum notu (2026-10-07):** 2026-09-26 tarihli "4 kademeli coğrafi hiyerarşi" kararındaki sıra (Gebze/Çayırova aynı kademe) **AŞILDI**. Güncel sıra K7'dedir: Darıca > Gebze > Çayırova > Kocaeli > diğer hizmet alanları. Eski kayıt silinmedi.

## 2026-10-06 (Strateji kilitleme)

> Kaynak: kullanıcı onayları. Gerekçe ve ayrıntı: `MASTER_PLAN.md` §3. İşletme verisi: `docs/source-of-truth/*`.

- **K1 Marka:** Tek ve resmî marka "Avrasya İşitme Cihazları"; eniyicihaz.com yalnızca alan adı. Title eki "| Avrasya İşitme Cihazları" yalnızca gerektiğinde, mekanik olmadan.
- **K2 Telefon:** Ana numara (telefon + WhatsApp) header ve birincil CTA'larda; diğer iki numara footer ve İletişim'de rol etiketiyle.
- **K3 Fiyat / kampanya:** Zaman duyarlı bilgiler tarih ve kaynakla tutulur, görsele gömülmez. (Pil kampanyasının güncelliği 2026-10-07'de doğrulandı; aşağıya bkz.)
- **K4 Form:** İleride kısa randevu / ücretsiz test talebi formu; sağlık verisi yok; ayrı KVKK ve altyapı planı.
- **K5 UX:** Mobile-first; dokunma hedefi en az 48×48 px; gövde metni temel değeri 17 px.
- **K6 Sayfa açma:** Keyword başına sayfa yok; aynı niyet tek kanonik sayfada; doorway yok.
- **K7 Yerel model:** Tek fiziksel merkez Darıca; Gebze ve Çayırova şube değil; yerel SEO önceliği Darıca > Gebze > Çayırova > Kocaeli.
- **A1 Logo:** Gerçek logo dosyaları kullanılır; logo yeniden çizilmez; erişilebilir ad marka adı; tagline site metnine kopyalanmaz.
- **A2 Marka kullanımı:** İlk ve resmî kullanımda tam ad; sonraki doğal kullanımda kısa ad.
- **A3 GBP:** Mevcut GBP vardır; sıfırdan kurulmaz; audit ileride yapılır.
- **B1 Belge mimarisi:** `MASTER_PLAN.md` + `docs/strategy/` + `docs/tech/`. Belgeler silinmez veya hemen taşınmaz; önce eşleme (DOC_MIGRATION_MAP).
- **B2 Kuruluş / Darıca ayrımı:** Kuruluş bilgisi ile Darıca merkezinin açılışı ayrı tutulur. "2009'dan beri Darıca'da" ifadesi yasak. (Darıca açılış tarihi 2026-10-07'de netleşti; aşağıya bkz.)
- **B3 Marka gösterimi:** "ENİYİCİHAZ" ve "En İyi" içeren tagline kullanılmaz; yeni slogan üretilmez.
- **D1:** Sitedeki gerçek merkez fotoğrafları işletmeye aittir ve gerçektir.
- **D2:** Üç gerçek işletme telefonu vardır; rolleri K2'de.

## 2026-10-07 (Faz 0: Business & Governance Foundation tamamlandı)

- `docs/source-of-truth/` altında 8 SoT dosyası ve `FAZ0_QUESTIONNAIRE.md` oluşturuldu (commit `f02b7c4`). **İşletme gerçeklerinin birinci kaynağı SoT'tur.**
- SoT çatışma hiyerarşisi kabul edildi: kullanıcının güncel doğrulaması > SoT [DOĞRULANDI] > MASTER_PLAN > DECISIONS > strateji/teknik belgeler > eski belgeler > koddan çıkarılan varsayım.
- SoT güvenlik kuralı: şifre, API key, token, secret, OAuth bilgisi ve özel kurum numarası yazılmaz.
- Faz 0'da işletme sahibinin doğruladığı ve önceki kayıtların yerine geçen bilgiler (ayrıntı SoT'ta):
  - Darıca merkezinin açılışı Ağustos 2024; önceki "yaklaşık 3 yıl" kaydı geçersiz (BUSINESS_SOT §2).
  - Ekip 2009'dan beri aynı değil. Erdinç Kılıç'ın organizasyondaki süresi ile sektör deneyimi farklı kavramlar (BUSINESS_SOT §4).
  - Birincil ve form e-postası aynı adres (BUSINESS_SOT §3).
  - 18 marka satılıyor; başka satılan marka yok (PRODUCT_SOT §1).
  - 7 güne kadar deneme "satın alarak deneme; uygun bulunmazsa ücret iadesi" olarak anlatılır; merkezdeki demo ayrı; kulak içi cihazlar 7 günlük eve deneme kapsamı dışında (SERVICE_SOT §1.5).
  - Walk-in kabul edilir; hizmet bazında randevu gerekliliği devam eder (SERVICE_SOT T5).
  - Kullanıcı kaynaklı bir "kullanılmayacak fotoğraf" listesi yok (ASSET_SOT §2).
- **Karar verilmemiş konular** (karar gibi yazılmaz):
  - Yetkili bayi iddiası: [DOĞRULAMA GEREKLİ]
  - NuEar–Starkey ilişkisi ve adlandırması: [DOĞRULAMA GEREKLİ]
  - SGK güncel tutar ve prosedürleri: [TIME-SENSITIVE], [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ]
  - Cihaz fiyatlarının sitede yayınlanması: henüz kararlaştırılmadı
  - Maps'te görünen "Avrasia" adı: audit'te incelenecek; değiştirme kararı yok
  - Schema varlık/tip modeli: teknik doğrulama sonrası, Faz 3 uygulamasından önce kesinleşecek

## 2026-10-07 (Faz 1 planı onaylandı)

- **F1-1:** `OWNER_INPUTS.md` oluşturulmayacak. Görevini SoT ve `FAZ0_QUESTIONNAIRE.md` üstlenir; plan dosyasındaki 158 soruluk güvenlik kopyası `docs/tech/DOC_MIGRATION_MAP.md` §7'de eşlendi.
- **F1-2:** `COMPANY.md` kısa kanonik özet olur ve ayrıntılar için SoT'a referans verir.
- **F1-3:** COMPANY'deki yerel SEO kapsam listesi korunur; evde hizmet alanı ayrı başlıkta yazılır.
- **F1-4:** Faz 1 ayrı dalda (`docs/phase-1-strategy-architecture`) 3 commit ile yürür: (1) anayasa belgeleri, (2) strategy, (3) tech + bantlar. Her commit kullanıcı onayıyla atılır.
- **F1-5:** Plan dosyasındaki eski sürümlerin temizliği Faz 1'de yapılmaz; ayrı onayla yapılır.
- Faz 1 düzeltmeleri:
  - Eski audit sayıları sabit gerçek olarak kullanılmaz.
  - Consent davranışı bug olarak varsayılmaz, yeniden audit edilir.
  - Schema tip kararları kilitlenmez.
  - "18 marka" bilgisi title ve meta'ya mekanik olarak eklenmez.
- `MASTER_PLAN.md` kilitli ana plan olarak oluşturuldu; plan dosyasındaki strateji sürümlerinin yerine geçer.

## 2026-10-07 (Faz 1 kapanışı: Faz 2 temel audit kapısı)

- Faz 1 kapanış audit'i yapıldı; Faz 1 geçti. Yeni plan katmanı gerekmiyor.
- **Faz 2 temel audit kapısı (kilitli):** Faz 2'de her indekslenebilir sayfa için iki ayrı karar zorunludur.
  - **Sayfa:** KORU / YENİDEN YAZ / BİRLEŞTİR / YÖNLENDİR / KALDIR
  - **Hero:** DOĞRU / DEĞİŞMELİ / BAŞKA SAYFADAN KOPYA / İLGİSİZ
- Audit yapılmadan mevcut sayfa içeriği ve mevcut hero otomatik olarak korunmuş kabul edilmez.
- Özellikle incelenecekler: duplicate / near-copy sayfalar; şehir adı değiştirilmiş sayfalar; ilgisiz hero; başka sayfadan kopyalanmış hero; search intent ile uyuşmayan hero veya metin; eski veya yanlış işletme bilgisi; thin content; cannibalization; yanlış CTA / yanlış hedef.
- Audit önce rapor olarak sunulur; uygulama ayrı onayla yapılır. Ayrıntı: `MASTER_PLAN.md` §7.1, `docs/tech/TEMPLATES.md` §6.
- Belge tutarlılık düzeltmeleri: oluşturulmuş Faz 1 belgelerindeki "planlandı" işaretleri güncellendi; QUALITY_GATES §1 niyet sınıflarına "Local" eklendi; DESIGN_SYSTEM_GUIDE ve IMPLEMENTATION_STANDARD'daki otorite cümleleri SoT hiyerarşisine göre düzeltildi (işletme gerçeklerinin kanonik kaynağı SoT; COMPANY.md kısa kanonik özet).

## 2026-10-11 (K-Fiyat-1: Fiyat sayfası için sayfaya özel fiyat istisnası)

> Kaynak: işletme sahibinin kesin kararı (2026-10-11). Global fiyat yayımlama yasağı kaldırılmadı.

- **Kapsam yalnızca `/isitme-cihazi-fiyatlari/`.** Bu sayfada şu mesaj yayımlanır: "2026 yılında yapay zekâ destekli yeni nesil işitme cihazları 20.000 TL'den başlayan fiyatlarla." ve "9 taksite kadar ödeme imkânı".
- Mesaj hero, kısa cevap, "Fiyat ve Ödeme Seçenekleri" bölümü, ilgili SSS cevapları ve bu sayfanın meta title/description alanlarında kullanılır. Tek veri kaynağı: `src/data/isitme-cihazi-fiyatlari/pricing.ts`.
- Mesaja KDV, SGK katkısı veya tek/çift cihaz koşulu eklenmez; dipnotla zayıflatılmaz. Banka, kart, faiz, vade farkı veya kampanya bitişi gibi doğrulanmamış ödeme koşulları yazılmaz; "faizsiz", "vade farksız", "tüm kartlara", "her bütçeye uygun" ifadeleri kullanılmaz.
- **Diğer bütün sayfalarda yasak aynen sürer:** fiyat rakamı ve taksit sayısı başka bir sayfaya eklenmez.
- **Şema yasağı bu sayfada da sürer:** `Product`, `Offer`, `priceRange` veya başka bir yapılandırılmış veri alanına fiyat yazılmaz. FAQPage, görünür SSS metnini aynen yansıttığı için fiyat cümlesi yalnızca görünür cevap metni olarak yer alır.
- Fiyat ve taksit [TIME-SENSITIVE]'dır; değiştiğinde yalnızca `pricing.ts` ve PRODUCT_SOT §4 güncellenir.
- İlgili belgelerdeki istisna referansları: PRINCIPLES.md §5, QUALITY_GATES.md §4, COMPANY.md (Fiyat bilgisi), PRODUCT_SOT §4, INTENT_MAP D4.

## 2026-11-11 (Kurumsal tasarım yenilemesi, hub sayfaları, yerel ve teknik SEO)

> Kaynak: işletme sahibinin talimatı (kurumsal yenileme + Darıca/Gebze/Çayırova yerel SEO) ve "Avrasya İşitme: Tasarım, UX ve Dönüşüm Araştırma Raporu". Uygulama yerelde yapıldı; commit/push/deploy ayrı onay bekliyor.

- **Marka sunumu (A1/B3 uygulandı):** Header ve footer'da gerçek logo kullanılıyor; "ENİYİCİHAZ" yazı logosu ve "En İyi" içeren tagline kaldırıldı. Palet logodan ölçüldü (`docs/tech/DESIGN_REFRESH.md`). Marka gerçekleri değişmedi.
- **Birincil CTA:** Header ve ana sayfa hero'sunda birincil eylem "Ücretsiz İşitme Testi" (mevcut sayfaya gider); telefon ve WhatsApp ikincil (ana numara, K2). Olay adları değişmedi; yeni yüzey `contact_dock` yalnızca `link_location` değeridir.
- **Mobil/masaüstü sabit iletişim (ContactDock):** her sayfada. Çerez bandı daha kompakt; kabul/ret eşit görünürlükte. Analitik izni olmadan hiçbir ölçüm başlamaz (davranış değişmedi).
- **11 üst kategori URL'si:** 9'u hub, 2'si 301 (`/sgk/`, `/blog/`). Ayrıntı: `docs/tech/REDIRECTS_AND_HUBS.md`.
- **Eski model/konu URL'leri:** yalnızca yakın ve anlamlı hedefi olanlar 301 (122 URL); diğerleri karar bekliyor (aynı belge §3.1). Hiçbiri ana sayfaya yönlendirilmedi.
- **Breadcrumb ve yapılandırılmış veri merkezileştirildi:** `MainLayout` rota ağacından breadcrumb UI + `BreadcrumbList`, her sayfaya `WebPage` (türü: Collection/About/Contact), 17 hizmet sayfasına `Service` üretir. Mevcut `Organization`, `WebSite`, `MedicalBusiness` ve `FAQPage` düğümleri ve `@id` ilişkileri korunur; yeni şube/adres/telefon/puan/yorum eklenmedi. `Organization.foundingDate: "2009"` eklendi (SoT'ta doğrulanmış, sitede görünür).
- **Form:** eklenmedi (K4: ayrı KVKK ve altyapı planı gerekir). Geri arama/randevu talebi formu bekliyor.
- **Başlıklar:** 60 karakteri aşan 14 sayfa başlığından marka eki çıkarıldı (QUALITY_GATES §1: marka eki yalnızca gerektiğinde).

## 2026-11-11 (Tur 2: LCP, etkileşimli bölümler, erişilebilirlik, yerel SEO)

> Kaynak: işletme sahibinin 2. tur talimatı. Uygulama yerelde yapıldı; commit/push/deploy ayrı onay bekliyor. Ayrıntılar: `docs/tech/PERFORMANCE_LCP.md`, `VIEWER_360.md`, `SECURITY_HEADERS.md`, `OPEN_STATUS.md`, `CALLBACK_FORM_PREP.md`, `REDIRECT_AUDIT.md`, `PAGE_CONTROL_MATRIX.md`.

- **LCP (Darıca/Phonak):** Teşhis: LCP öğesi doğru yüklenmişti; simülasyon darboğazı LCP öncesi toplam bayt (133 KB yazı tipi preload'ı). Yazı tipi `latin-ext` dosyası sitenin kullandığı 6 glife (Ğ ğ İ Ş ş ₺, 3,3 KB) indirildi — çıktı **piksel düzeyinde aynı** (4 ağırlık, 0 fark); `latin` dosyası **değiştirilmedi** (ağırlık ekseni kısıtlaması 12 KB kazandırıyor ama 500–700 ağırlıklarında kenar piksellerini 157/255'e kadar kaydırdığı için reddedildi). Darıca hero'ya AVIF eklendi. Önce/sonra ve sınırlar: `PERFORMANCE_LCP.md`.
- **Ana sayfa hero'su:** Gerçek merkez fotoğrafı (D1) **korundu**; sitede zaten bulunan şeffaf zeminli gerçek ürün görseli (kırpılmış) fotoğrafın üzerine süzülen **dekoratif, temsili** öğe olarak eklendi (marka/model iddiası yok, alt metin boş). Statik görüntü HTML'de hazır; hareket yalnızca CSS transform/opacity ve sayfa yüklendikten sonra başlar; `prefers-reduced-motion` ve erişilebilirlik panelindeki "hareketi azalt" onurlandırılır. CLS 0.
- **360° görüntüleyici:** Bileşen hazır ve sentetik karelerle test edildi, **gerçek malzeme yok → hiçbir sayfada yayında değil**. Sahte 360° (tek görseli döndürme) yapılmaz. Malzeme sözleşmesi ve GLB/kare/sprite karşılaştırması: `VIEWER_360.md`.
- **Kulakta nerede durur (Starkey tarzı):** `/isitme-cihazlari/` sayfasında yapışkan görsel + adımlar (IIC → CIC → ITC → ITE → BTE → RIC), metinler sitedeki tür profillerinin kendi alanları. **Gerçekçi kulak görseli yok ve uydurulmadı**: konum metin + "konum çubuğu" ile anlatılır; `earImage`/`pin` veri alanları kulak görseli gelince cihazı o görsel üzerinde konumlandırır. Kaydırma kilitlenmez; mobilde doğal dikey akış.
- **Carousel / karşılaştırma aracı / sihirbazlar:** Yalnızca mevcut sayfa ve mevcut içerik (yeni bilgi yok); veri toplanmaz; fiyat/tanı yok.
- **WhatsApp:** Numara değişmedi; yalın `wa.me` bağlantılarına sayfaya özel hazır mesaj `src/middleware.ts` ile (dev ve derlemede) eklenir. Konum sayfalarında "…'dan yazıyorum" denmez; mesaj yalnızca "bilgi almak istiyorum" düzeyindedir. Zaten `?text=` taşıyan bağlantılara dokunulmaz.
- **Erişilebilirlik paneli:** Yazı boyutu (%100/115/130/150), yüksek kontrast, hareketi azalt; tercihler yalnızca cihazda (`localStorage` `eic-a11y`, çerez değil). **Çerez politikası metnine bu depolama anahtarının eklenmesi önerilir** (hukuki metin bu turda değiştirilmedi).
- **Açık/kapalı göstergesi:** İstanbul saati; doğrulanamıyorsa (arife, tatil tablosu kapsamı dışı) "açık" denmez. Tatil tablosu 2026–2027 **ikincil kaynaklardan**; her Ocak'ta güncellenmeli (`OPEN_STATUS.md`).
- **Güvenlik başlıkları:** `public/_headers` (dört güvenlik başlığı + `immutable` önbellek) yerelde test edildi. **CSP ve HSTS uygulanmadı** (üretim bileşenleri yerelde test edilemez / geri alınması zor); kademeli plan `SECURITY_HEADERS.md`.
- **Geri arama formu:** Onay/saklama/e-posta kararları yok → yalnızca görsel + teknik hazırlık; **hiçbir sayfada kullanılmıyor, ağ isteği yok** (`CALLBACK_FORM_PREP.md`).
- **Yönlendirme denetimi:** 20 yönlendirilmemiş eski URL tek tek incelendi; **hiçbirine yönlendirme eklenmedi** (alakasız hedef yok / sahibinin kararı gerekir). Mevcut 122 kural korunur (`REDIRECT_AUDIT.md`).
- **Yerel SEO (Search Console 2026-05-01→11-09):** Aranan biçim "[ilçe] işitme cihazları (merkezi)" (çoğul). Darıca başlık/H1 çoğul biçime çekildi; Gebze/Çayırova/Kocaeli zaten çoğuldu. Dört yerel sayfaya **birbirinin kopyası olmayan** ilgili-sayfa blokları eklendi (şube yok vurgusu korundu). Yerel talep küçük (Darıca ≈ 160 gösterim, Gebze ≈ 75, Çayırova ≈ 0): sıralama vaadi verilmez.
- **Yazı boyutu uyumu:** Büyütülmüş yazıda yatay taşma taraması 16 sayfa × 3 genişlik × 4 ölçek (192 kombinasyon): 0 taşma. Düzeltmeler: rem tabanlı `minmax(Nrem,1fr)` ızgaraları `min(Nrem,100%)`, iletişim düğmeleri `nowrap`'tan sarmalıya, SGK rozeti, hero hâlesi, sabit iletişim çubuğu, uzun sözcük kırma (yalnızca büyütülmüş modda).

## 2026-11-11 (Tur 2, ikinci oturum: gerçek 360° görüntüleyici, 112 sayfa içerik denetimi, 320 px uyumu)

> Kaynak: işletme sahibinin "İkinci Geliştirme Turu" talimatı ve sağladığı `reference-assets/hearing-aid-360/` malzemesi (76 fotoğraf + 1 video, tek bir kulak arkası cihaz). Uygulama yerelde yapıldı; commit/push/deploy ayrı onay bekliyor. Bu kayıt, yukarıdaki "Tur 2" kaydının **bazı maddelerini günceller** (360° artık yayında; kulak şeması var; 1 eski URL yönlendirildi). Ayrıntılar: `docs/tech/VIEWER_360.md`, `PERFORMANCE_LCP.md` §8, `REDIRECT_AUDIT.md` §5–6, `docs/tech/page-review/`.

- **360° görüntüleyici artık gerçek karelerle yayında (yerelde):** ana sayfa ve `/isitme-cihazlari/kulak-arkasi-bte/`. Yöntem **B (çok açılı kare dizisi)**: sahibinin videosundaki tek tam turdan 72 kare (5° aralık). **Kare üretilmedi, açı uydurulmadı**; yapay zekâ yalnızca arka plan/tutucu ayırma (SAM 2.1) ve netleştirme (Swin2SR) için kullanıldı. **GLB (yöntem A) yapılmadı:** 480p tek eksenli çekimden güvenilir geometri çıkmaz. **Üretken tamamlama (yöntem C) gerekmedi:** video tam turu kapsıyor. Kaynak 480p olduğundan sahne 640 px ile sınırlı tutuldu; daha iyi çekim önerisi belgede.
- **Hero cihaz görseli:** aynı gerçek cihazın fotoğraftan kesilmiş hâli (`hero-device-bte-*`). Kanca şeffaf parça olarak gerçek dış hattıyla çizildi. Eski `hero-device-ric-*` dosyaları silinmedi (referanssız duruyor).
- **Cihaz türleri carousel'i altı tür:** IIC, CIC, ITC, ITE, BTE, RIC (sitedeki tür profillerinden; yeni bilgi yok). Oklar ortaya alındı — sağa yaslıyken sabit iletişim kutusunun altında kalıyor, tıklama WhatsApp bağlantısına gidiyordu (ölçüm).
- **Kulakta konum şeması:** `EarDiagram.astro` **şematik ve açıkça "temsilidir"** notludur; fotoğraf gibi sunulmaz. Gerçekçi kulak görseli hâlâ yok ve uydurulmadı.
- **112 sayfanın tamamı tek tek okundu** (8 grup, sayfa başına 13 kontrol; bulgular `docs/tech/page-review/G1…G8`). Uygulananlar yalnızca **nesnel düzeltmelerdir**: yazım/dilbilgisi, bitişik çıkan hero başlıkları (82 sayfa), yasaklı üstünlük/garanti ifadeleri, "klinik → merkez", "balmumu → kulak kiri", marka adlarında büyük harf bozulması. Sayfa bazında ne değişti: `page-review/sayfa-degisiklik-ozeti.tsv` (94 sayfada görünür metin değişti; 12 sayfa yalnızca denetlendi).
- **İşletme bilgisi içeren hiçbir cümle değiştirilmedi.** Denetimin bulduğu çelişkiler (randevu anlatımı, deneme dili, "yetkili servis" ifadeleri, SGK yenileme süresi, çocuk testleri kapsamı, unvanlar, marka kartı görsel–etiket uyuşmazlıkları) **sahibinin kararına bırakıldı** (`page-review/README.md` §3).
- **İç bağlantı katmanı (`src/lib/ref-links.ts`):** metinde adı geçen ama bağlantısı olmayan sayfa atıfları ("… sayfamızı inceleyebilirsiniz") derlemede bağlantıya çevrilir: 139 atıf / 47 sayfa. Yan etkisi ölçümle bulundu ve giderildi: kapalı SSS panellerine giren bağlantılara klavyeyle gidilebiliyordu (24 sayfa) → paneller kapalıyken `visibility: hidden`.
- **Yerel SEO:** Darıca meta açıklaması ziyaret niyetine göre yeniden yazıldı; Gebze H1 "Gebze'den Darıca Merkezimize: …" (şube olmadığı ilk satırda); Çayırova'ya otopark cümlesi. Mahalle ayrıntısı **eklenmedi** (doğrulama bekliyor).
- **Şema:** `WebPage` varsayılan açıklamasından "en iyi" çıkarıldı; fiyat sayfasının `WebPage` düğümü fiyatsız (K-Fiyat-1 ile uyum). Yeni varlık/şube/puan eklenmedi.
- **Performans kuralı:** görüntüleyici ilk açılışa **hiçbir istek eklemez** (ne kare ne betik). İlk sürümde BTE sayfası LCP'si 1,81 → 2,03 s çıkmıştı; ölçümle bulundu, iki adımda temel seviyeye (1,80 s) indirildi. Ana sayfa 100, Darıca 99, Phonak 99 korunuyor (aynı düzenek, aynı gün ölçülen temelle).
- **320 px ve büyütülmüş yazı (WCAG 1.4.10):** önceki turda test edilmeyen 320–359 px genişlikte **her sayfa** üst çubuk yüzünden 27 px yatay kayıyordu (temelde de vardı). Düzeltildi: üst çubuk boşlukları/logo kademesi, CTA düğmesi sarma, başlıklarda uzun sözcük kırma, iletişim çubuğu sütunları, "Kişiye Özel Ayar" grafiği. Tarama: 112 sayfa × 7 genişlik × 2 yazı ölçeği = 1.568 yükleme, **0 taşma**.
- **Eski URL'ler:** 20'den **1'i yönlendirildi** (#18: `/isitme-kaybi-belirtileri` kuralının bozuk kodlanmış yazımı; niyet ve hedef aynı; `wrangler pages dev` ile doğrulandı). **19'u karar bekliyor**; her biri için risk tablosu yazıldı. Mevcut 122 kural değişmedi.
- **Doğrulanamayanlar (açıkça):** gerçek telefon testi yok (tümü masaüstü Chrome öykünmesi); canlı Cloudflare kenarı denenmedi (yalnızca yerel Pages öykünmesi); Search Console bu oturumda yeniden sorgulanmadı; INP ölçülemedi.
- **`astro check`:** 37 hata, tamamı bu oturumda dokunulmayan tasarım sistemi demo sayfalarında (`src/pages/_ds/…`, yayımlanmaz); değişen dosyalarda hata yok. Düzeltilmedi (kapsam dışı), kayda geçirildi.

## 2026-11-12 (360° görüntüleyici yeniden yapıldı: kare dizisi kaldırıldı, markasız 3B model geldi)

> Kaynak: işletme sahibinin "360° BTE görüntüleyicisini yeniden tasarlama" talimatı. Sahibi, bir önceki kayıttaki kare dizili görüntüleyiciyi **görsel açıdan kabul edilemez** buldu; "küçük düzeltmelerle kurtarılmaması", tamamen kaldırılması ve yerine markasız, gerçekçi, gerçekten 3B bir kulak arkası cihaz konması istendi. Uygulama yerelde yapıldı; commit/push/deploy ayrı onay bekliyor. Bu kayıt, yukarıdaki kaydın **ilk maddesini geçersiz kılar** (360° artık kare dizisi değil). Ayrıntı: `docs/tech/BTE_3D_VIEWER.md`.

- **Kaldırılan:** `Viewer360` bileşeni, çalışma zamanı dosyası, `src/data/viewer360.ts` ve `public/images/viewer360/` altındaki 144 kare. Derlemede eski görüntüleyiciye ait hiçbir iz yok. `reference-assets/` (ham malzeme) ve hero'daki gerçek cihaz görseli **yerinde**.
- **Neden kötüydü (tespit):** 480p videodan büyütülmüş kareler, dar açılarda bozulan arka plan ayırma, yarıda kesik kanca, tüp ve kulak kalıbı yok, yalnızca yatay 5°'lik adımlar.
- **Yeni görüntüleyici:** `src/components/bte3d/` — three.js 0.187.0 ile gerçek 3B; ana sayfa ve `/isitme-cihazlari/kulak-arkasi-bte/` (eskisiyle aynı iki yer, aynı başlık). Sürükleyerek tam 360° dönüş, dikeyde alttan 30° / üstten 46°, otomatik dönüş (kullanıcı dokununca durur, kendiliğinden yeniden başlamaz), başlangıca dönüş, 1× / 1,45× / 2× yakınlaştırma, klavye, azaltılmış hareket; mobilde dikey kaydırma engellenmez.
- **Model özgün ve markasızdır:** `tools/bte-model/build_bte.py` ile sıfırdan, parametrik üretildi (Blender 4.5 LTS taşınabilir sürüm; kurulum yok, ücretli servis yok). Yazı, logo, marka işareti yok; hiçbir üreticinin modeli kopyalanmadı. Klasik BTE'dir (gövde + şeffaf kanca + ses tüpü + kulak kalıbı); RIC değildir. Sayfada "Temsili üç boyutlu modeldir; belirli bir marka veya modeli göstermez" notu durur.
- **Yöntem seçimi ölçüme dayanır:** Google `<model-viewer>` aynı modelle denendi; standart ayarlarda şeffaf parçalar (kanca, tüp, kalıp) beyaz leke ya da soluk gölge olarak çıktı ve paketi 282 KB gzip'ti. Özel görüntüleyici (kameraya sabit stüdyo ışığı, sahne içi fon, şeffaf malzemede kenar soğurma) 160 KB gzip. Önceden çizilmiş kare dizisi "gerçek 3B" şartını karşılamadığı için elendi.
- **Boyutlar:** model `bte-generic.glb` **284 KB** (glTF ikili, meshopt; 67.902 üçgen, doku yok); kod 640 KB ham / 132 KB brotli; poster 12–17 KB. Görüntüleyiciye yaklaşınca inen toplam ≈ 0,42 MB (eskisi 1,5–2,4 MB).
- **Performans kuralı korunur:** görüntüleyici ilk açılışa **hiçbir istek eklemez**. Aynı gün, dönüşümlü 5'er koşu: ana sayfa 100 / 1,09 s, BTE 99 / 1,80 s, Darıca 99 / 1,95 s, Phonak 99 / 2,25 s — hepsi öncekiyle aynı; CLS 0. "Hızlandı" iddiası yoktur.
- **Tek yeni bağımlılık:** `three@0.187.0` (sürüm sabit: şeffaf malzemedeki küçük gölgelendirici eki bu sürümün yapısına dayanır).
- **Metin değişiklikleri yalnızca doğruluk içindir:** eski not "Gerçek bir kulak arkası cihazın döner tabla kaydından hazırlanmıştır…" artık doğru olmadığı için değişti; giriş cümlesine tüp ve kulak kalıbı eklendi; etiket "360° · 3 Boyutlu Görünüm" oldu. İşletme bilgisi içeren hiçbir cümleye dokunulmadı.
- **Testler:** görüntüleyici davranışı 80 kontrol × 2 sayfa, dönüş sürekliliği + poster eşleşmesi 16, yerleşim 8, axe (görüntüleyicide 0 ihlal), tam site taşma taraması 1.568 yüklemede 0, statik denetim ve önceki turun testleri — hepsi geçti.
- **Doğrulanamayanlar (açıkça):** gerçek telefon/tablet testi yok; Safari ve Firefox'ta denenmedi; talimattaki BIS belgesi bu ağdan açılamadı (DNS) ve kullanılmadı; canlı Cloudflare kenarı denenmedi.
- **Sahibinin kararına bırakılanlar:** modelin görsel olarak yeterli bulunup bulunmadığı; ana sayfa hero'sundaki gerçek (kahverengi) cihaz fotoğrafının yeni modelle değiştirilip değiştirilmeyeceği (hero bu işin kapsamında değildi, değişmedi).
- **Kapsam dışı bulgu (düzeltilmedi):** "Yukarı" düğmesinin görünen metni ile erişilebilir adı uyuşmuyor (axe `label-content-name-mismatch`); eski derlemede de var.

## 2026-11-12 (ek: ana sayfa hero'sundaki cihaz görseli yeni modelin karesi oldu)

> Kaynak: işletme sahibinin, yukarıdaki kayıtta kendisine bırakılan karara verdiği yanıt: "Hero'ya da yeni modelin karesini koy." Uygulama yerelde yapıldı; commit/push/deploy ayrı onay bekliyor. Bu kayıt, yukarıdaki kaydın "hero'daki gerçek cihaz görseli yerinde" ifadesini ve "sahibinin kararına bırakılanlar"daki hero maddesini **günceller**. Ayrıntı: `docs/tech/BTE_3D_VIEWER.md` §12.

- **Değişen:** hero'da süzülen cihaz artık 3B görüntüleyicinin **başlangıç karesidir** (aynı model, malzeme, ışık, açı; şeffaf zeminli). Hero ile görüntüleyici aynı cihazı gösterir. Görsel dekoratiftir (`alt=""`), marka/model iddiası taşımaz; hero'da three.js/WebGL yüklenmez.
- **Nasıl üretildi:** `tools/bte-model/make-hero-frame.cjs` — canlı sahne siyah ve beyaz fonda iki kez çizilir, şeffaflık aradaki farktan çıkarılır (kanca, tüp, kalıp gerçekten saydam). Görüntüleyici koduna dokunulmadı. Karenin opak pikselleri posterle karşılaştırıldı: medyan fark 1 / 255.
- **Yerleşim:** görsel dik (3:4) olduğu için sahne yeniden kuruldu; ölçüler fotoğrafın genişliğiyle orantılı. Cihazın alt ucu fotoğrafta tabela ile çerçeveli pano arasındaki düz duvara gelir, ikisinin de yazısını örtmez (fotoğraf piksellerinden ve sayfada ölçüldü). Hero yüksekliği masaüstünde aynı; tablette +42 px, telefonda +26–29 px.
- **Kapsam:** derlemede yalnızca ana sayfanın HTML'i değişti ve 4 görsel eklendi; diğer 112 sayfa ile görüntüleyicinin kodu ve modeli bayt bayt aynı.
- **Ölçüm (aynı düzenek, dönüşümlü 5'er koşu):** ana sayfa 100 / LCP 1,08 s / CLS 0 — öncekiyle aynı; sayfa **2 KB ağırlaştı** (görsel 7,5 → 9,8 KB). "Hızlandı" iddiası yoktur.
- **Silinmeyenler:** sahibinin fotoğrafından kesilmiş önceki hero görseli (`hero-device-bte-*`) ve daha eski `hero-device-ric-*` dosyaları duruyor (kullanılmıyor). Geri dönüş tek kayıt değişikliğidir (`src/data/home/hero.ts`). Silinmeleri sahibinin kararı.
- **Doğrulanamayanlar:** gerçek telefon/tablet, Safari ve Firefox denenmedi.
- **Kapsam dışı bulgu (düzeltilmedi):** ana sayfa 308 px'ten dar ekranda yatay taşıyor; önceki derlemede de aynı (320 px ve üstü temiz).

## 2026-11-12 (yayın: işletme sahibinin açık onayıyla tek commit)

> Kaynak: işletme sahibinin "Üretim ortamına yayınlama onayı" talimatı. Çalışma ağacındaki tasarım yenilemesi, SEO çalışmaları, sayfa güncellemeleri, 3B BTE görüntüleyici ve hero değişikliği tek commit olarak `main`'e alındı; yayın, deponun mevcut Cloudflare Pages bağlantısıyla yapılır (yeni proje yok, Cloudflare ayarı değişmedi). Yukarıdaki kayıtlarda geçen "commit/push/deploy ayrı onay bekliyor" ifadeleri yazıldıkları günün durumudur.

- **Commit'e alınanlar:** sitenin kaynağı ve varlıkları (`src/`, `public/`), `package.json` / `package-lock.json` (canlıdaki sürüme göre tek yeni bağımlılık `three@0.187.0`), 3B modelin kaynağı ve üretim betikleri (`tools/bte-model/`), teknik belgeler (`docs/`).
- **Bilinçli olarak commit'e alınmayanlar** (hepsi yerel çalışma ağacında duruyor; hiçbiri silinmedi):
  - `reference-assets/` — sahibinin ham fotoğraf ve videoları (≈ 26 MB).
  - `docs/tech/bte-3d-inceleme/` — görsel inceleme ekran görüntüleri (≈ 4 MB).
  - `docs/tech/page-review/` — 112 sayfalık içerik denetiminin çıktıları (sahibinin kararını bekleyen işletme bilgisi çelişkileri dahil). Bu belgede ve `PAGE_CONTROL_MATRIX.md` / `R2_OTURUM2_*` içinde geçen `page-review/…` atıfları bu yerel klasörü gösterir.
  - `docs/tech/MEASUREMENT_BASELINE.md` — Search Console / GA4 başlangıç sayıları (depo herkese açık olduğu için dışarıda bırakıldı; istenirse eklenir).
  - `public/images/homepage/hero-device-ric-*` — kullanılmayan, kaynağı belgelenmemiş eski temsili görseller.
- **İlk kez canlıya çıkan sunucu davranışları:** `public/_headers` (dört güvenlik başlığı; `/_astro/*` ve `/fonts/*` için kalıcı önbellek; CSP ve HSTS yok) ve `public/_redirects` içindeki eski URL yönlendirmeleri (toplam 127 kaynak yol). İkisi de yalnızca Cloudflare Pages'te etkilidir; yerelde öykünmeyle sınanmıştı.
- **Eski 360° dosyaları:** kare dizili görüntüleyicinin bileşeni, veri dosyası ve 144 karesi hiç commit edilmemişti ve çalışma ağacından kasıtlı olarak kaldırılmıştı; depoda ve derlemede izi yoktur.
- **Doğrulanamayanlar:** gerçek telefon ve Safari testi yapılmadı; canlı doğrulama masaüstü Chrome ve dokunma öykünmesiyle yapılır.
