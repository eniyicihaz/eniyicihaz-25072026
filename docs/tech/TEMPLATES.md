# TEMPLATES.md

> **Durum:** ACTIVE · Teknik belge · Faz 1 Commit 3 · Oluşturulma: 2026-10-07
> **Amaç:** Sayfa tiplerini, her tipin zorunlu bölümlerini, CTA mimarisini ve kanonik bileşen setini kod yazmadan, uygulamaya hazır biçimde tanımlar. Faz 2 sayfa ve hero audit protokolünü içerir (§6).
> **Kaynak sırası:** SoT > MASTER_PLAN / kök belgeler > `docs/strategy/*` > bu belge. Sayfa niyetleri INTENT_MAP.md'de, yerel kurallar LOCAL_SEO_PLAYBOOK.md'de, içerik yapısı CONTENT_ARCHITECTURE.md'dedir. Çelişkide üst kaynak geçerlidir.
> **Sınır:** Kod, bileşen, CSS veya sayfa değişikliği yapılmaz. Görsel değerler (renk, piksel, token) bu belgede tanımlanmaz; DESIGN_SYSTEM_GUIDE.md ve token katmanında yaşar.

---

## 1. Ortak Kurallar (tüm sayfa tipleri)

| Kural | Ayrıntı | Kaynak |
|---|---|---|
| Mobile-first | Tasarım en dar ekrandan başlar | DESIGN_SYSTEM_GUIDE.md §11, §28 |
| Dokunma hedefi | En az 48×48 px | MASTER_PLAN K5 |
| Gövde metni | Temel değer yaklaşık 17 px; responsive ayarlanabilir | MASTER_PLAN K5 |
| Premium | Mevcut Design System ilkeleriyle sağlanır (sadelik, boşluk, tipografi hiyerarşisi, gerçek fotoğraf, kontrollü hareket); yeni görsel sistem icat edilmez; referans sitelerin tasarımı kopyalanmaz | BRAND_SOT §7, DESIGN_SYSTEM_GUIDE.md §28 |
| Answer-first | İçerik sayfaları kısa doğrudan cevapla başlar | CONTENT_ARCHITECTURE.md §5 |
| Tek niyet | Her sayfanın tek birincil niyeti ve kanonik sahipliği vardır | INTENT_MAP.md §1 |
| Kopya yasağı | Ortak bileşen serbest; ortak metin, aynı H2 seti ve aynı SSS yasak | SERVICE_SOT §6 |
| Breadcrumb | Her sayfada görünür; ebeveyn mantıksal pillar | QUALITY_GATES.md §1 |
| Erişilebilirlik | WCAG 2.1 AA, klavye, görünür odak, azaltılmış hareket | DESIGN_SYSTEM_GUIDE.md §17 |
| Performans | Görsel kuralları IMAGE_GUIDELINES.md §5 | — |
| Schema | Tip eşlemesi karar bekliyor; sayfa tipi için seçenekler SCHEMA_GRAPH.md §5 | — |

## 2. Sayfa Tipleri

Her tip için "zorunlu bölümler" kapsamı tanımlar; görsel sıra ve yerleşim tasarım fazında belirlenir.

### 2.1 Ana sayfa
- **Niyet:** Navigasyonel + yerel; markayı ve merkezi tanıtır, doğru sayfalara dağıtır.
- **Zorunlu:** kısa kanonik tanım, Ara / Yol tarifi / Mesaj, merkez ve ulaşım özeti, ana hizmet yolları (test, cihaz seçimi, deneme, servis, SGK), güven unsurları (yalnızca doğrulanmış), bilgi merkezi girişleri.
- **Yasak:** üstünlük ifadesi, doğrulanmamış istatistik, görsele gömülü fiyat.

### 2.2 Yerel hub (Darıca)
- **Niyet:** Local / transactional.
- **Zorunlu:** LOCAL_SEO_PLAYBOOK.md §3.2 kapsamı.
- **CTA:** Ara, Yol tarifi ilk ekranda; Mesaj.
- **Görsel:** gerçek merkez fotoğrafları (IMAGE_GUIDELINES.md §2).

### 2.3 Yerel ikincil sayfa (Gebze, Çayırova)
- **Niyet:** Local; "bu bölgeden Darıca merkezimize".
- **Zorunlu:** kısa cevap, bölgeye ait doğrulanmış ulaşım/erişim bilgisi, ziyaret planı, Darıca hub'ına ve kanonik hizmet sayfalarına bağlantı, yalnızca bölgeye ait gerçek SSS.
- **Kural:** iki sayfa aynı bölüm sırasını ve H2 setini kullanmaz; veri yoksa sayfa kısa kalır (LOCAL_SEO_PLAYBOOK.md §4–§5, §7).
- **Yasak:** şube dili, Darıca'dan kopyalanmış bölümler, ilgisiz genel cihaz anlatımı.

### 2.4 Bölgesel yönlendirici (Kocaeli)
- **Niyet:** İl düzeyinde local / informational.
- **Zorunlu:** tek merkez bilgisi, Darıca hub'ına yönlendirme, pillar sayfalara bağlantılar.
- **Yasak:** pillar içeriğini tekrar eden uzun genel bloklar, il geneli uydurma istatistik.

### 2.5 Hizmet sayfası
- **Niyet:** Transactional (ör. test, deneme, kalıp, ayar, teknik servis, evde hizmet).
- **Zorunlu:** kısa cevap; kimler için; merkezde nasıl işler (SERVICE_SOT §2 ile uyumlu); süre, ücret durumu ve randevu bilgisi (SERVICE_SOT §1, yalnızca doğrulanmış); ne zaman hekime yönlendirilir (yalnızca SERVICE_SOT §1.2.1); SSS; Ara / Mesaj.
- **Kural:** deneme dili SERVICE_SOT §1.5; "ücretsiz" yalnızca SERVICE_SOT §5 ile uyumlu; walk-in ve randevu birlikte doğru anlatılır.
- **Yasak:** şehir adı değiştirilmiş "hizmet bölgesi" blokları.

### 2.6 Pillar sayfası
- **Niyet:** Informational / commercial investigation.
- **Zorunlu:** kısa cevap, içindekiler, temel kavramlar, cluster bağlantıları, SSS, kaynaklar, inceleme bilgisi (rıza varsa kişi adıyla).
- **CTA:** bağlamsal, baskısız; sayfa sonunda.

### 2.7 Bilgi makalesi / cluster
- **Niyet:** Informational.
- **Zorunlu:** kısa cevap, ayrıntı veya adımlar, "ne zaman merkeze/hekime" bölümü (yalnızca SoT kriterleri), pillar'a ve en az iki ilgili cluster'a bağlantı, kaynaklar, son inceleme tarihi.
- **Yasak:** ilçe adı ekleme, tıbbi vaat, kaynaksız rakam.

### 2.8 Cihaz türü sayfası
- **Niyet:** Commercial investigation.
- **Zorunlu:** kısa cevap, kimlere uygun olabileceği (genel ve kaynaklı), seçimde dikkat edilenler (PRODUCT_SOT §1 seçim mantığı), deneme bilgisi (kulak içi istisnası dahil), cihaz seçim rehberine bağlantı.
- **Görsel:** marka-nötr; tek bir markanın ürünü hero olmaz.

### 2.9 Marka sayfası
- **Niyet:** Commercial / navigational.
- **Zorunlu:** markanın tanımı (kaynaklı ve onaylı), merkezde satış ve servis bilgisi (PRODUCT_SOT §1), uzaktan ayar kapsamı gerektiğinde, seçim rehberine bağlantı.
- **Yasak:** yetki/ilişki iddiası (PRODUCT_SOT §1), doğrulanmamış üretici bilgisi, "en iyi marka" kurgusu.

### 2.10 Hub / listeleme sayfası
- **Niyet:** Navigasyon.
- **Zorunlu:** gerçek bir yönlendirme değeri; her alt sayfa için kısa açıklama. İnce hub açılmaz (CONTENT_ARCHITECTURE.md §7).

### 2.11 İletişim
- **Zorunlu:** NAP (tek kaynak), üç telefon ve rolleri, saatler, harita (onaya bağlı yükleme), yol tarifi, erişim bilgisi, walk-in + randevu açıklaması.

### 2.12 Hakkımızda / Ekip
- **Zorunlu:** kanonik tanım, kuruluş ve Darıca açılışı ayrı, gerçek merkez fotoğrafları.
- **Ekip:** yalnızca yayın rızasıyla (EEAT_AND_EDITORIAL.md §2–§3).

### 2.13 Yasal sayfalar
- Mevcut yapı korunur; hukuki metin değişiklikleri ayrı onayla.

## 3. Kanonik Bileşen Seti (hedef)

Aşağıdaki adlar **işlevsel hedef adlarıdır**. Mevcut bileşenlerle eşleme ve konsolidasyon, IMPLEMENTATION_STANDARD.md §5 gereği her adımda ayrı onayla yapılır. Yeni bileşen ancak DESIGN_SYSTEM_GUIDE.md §26 karar ağacından geçerse oluşturulur.

| İşlev | Hedef bileşen | Not |
|---|---|---|
| Sayfa başlığı | PageHero (varyantlı) | Mevcut çok sayıda hero bileşeni bu işlev altında konsolide edilebilir |
| Kısa cevap | AnswerSummary | Answer-first bloğu |
| SSS | Faq | Görünür SSS; schema kararı SCHEMA_GRAPH'a bağlı |
| Eylem paneli | ActionPanel | Ara / Mesaj / Yol tarifi / Test |
| CTA düğmesi | CtaButton | 48 px hedef; etiket = hedef |
| Breadcrumb | Layout seviyesinde | Görünür |
| Bilgi notu | Notice | Token tabanlı uyarı/not |
| Konum kartı | LocationCard | NAP, saat, harita, yol tarifi |
| Mobil eylem çubuğu | StickyActionBar | Ara / Yol tarifi / Mesaj; consent banner ile çakışmaz |
| Merkez galerisi | CenterGallery | width/height zorunlu |
| Form (ileride) | AppointmentForm | Yalnızca K4 planı ve KVKK onayıyla |

## 4. CTA Mimarisi

| Kural | Kaynak |
|---|---|
| Mobil öncelik sırası: Ara, Yol tarifi, Mesaj | CONVERSION_SOT §5 |
| Header ve birincil CTA'larda yalnızca ana numara | CONVERSION_SOT §3 |
| Diğer iki numara footer ve İletişim'de, rolleriyle | CONVERSION_SOT §1 |
| Etiket = hedef ("Ücretsiz İşitme Testi" test sayfasına gider) | CONVERSION_SOT §3 |
| Transactional ve yerel sayfalarda birincil CTA ilk ekranda; bilgi sayfalarında bağlamsal ve sonda | PRINCIPLES.md §9 |
| Aciliyet ve baskı dili yok | PRINCIPLES.md §9 |
| Deneme CTA'larında kanonik deneme dili; merkezdeki demo ile 7 güne kadar deneme ayrı | SERVICE_SOT §1.5 |
| Mevcut event'ler korunur; CTA'lar mevcut dört event'le ölçülür | MEASUREMENT_PLAN.md §3 |

## 5. Hero Kuralları (tüm tipler)

- Hero, sayfanın birincil niyetini ilk bakışta anlatır; başlık ve görsel aynı konuyu destekler.
- Hero görseli sayfaya uygun seçilir (IMAGE_GUIDELINES.md §2); başka bir sayfanın hero'su aynı rolle tekrar kullanılmaz.
- Hero metninde SoT ile çelişen bilgi (kuruluş/Darıca karışıklığı, eski marka, yanlış sayı) bulunmaz.
- Hero'da istatistik yalnızca doğrulanmış ve bağlamı doğruysa kullanılır.
- Hero görseline fiyat veya zaman duyarlı bilgi gömülmez.

## 6. Faz 2 Sayfa ve Hero Audit Protokolü (kilitli; 2026-10-07)

> Kullanıcı kararı: Faz 2 audit'i yalnızca teknik/SEO hatalarını değil, **sayfa içeriğini ve hero uyumunu** da kapsar. **Bu audit yapılmadan mevcut sayfaların içeriği otomatik olarak korunmaz.**

### 6.1 Kapsam
Her indekslenebilir sayfa tek tek incelenir. Aranan sorunlar:
- Kopya veya near-copy sayfalar.
- Şehir adı değiştirilerek oluşturulmuş sayfalar veya bloklar.
- Aynı veya ilgisiz hero kullanan sayfalar.
- Sayfanın search intent'iyle uyuşmayan hero veya metin.
- Eski veya yanlış işletme bilgisi içeren hero'lar ve metinler (BRAND_MIGRATION.md §3).
- Thin content sayfaları.
- Birbirinin niyetini yiyen (cannibalizing) sayfalar (INTENT_MAP.md §5).

### 6.2 Sayfa kararı (her sayfa için bir tane)
| Karar | Anlamı |
|---|---|
| **KORU** | İçerik niyete uygun, SoT ile tutarlı, özgün; yalnızca küçük düzeltme gerekebilir |
| **YENİDEN YAZ** | Sayfa kalır, URL korunur; içerik niyete ve SoT'a göre yeniden yazılır |
| **BİRLEŞTİR** | İçerik başka bir kanonik sayfaya taşınır; bu URL 301 ile kanonik sayfaya yönlenir |
| **YÖNLENDİR** | Sayfanın ayrı değeri yok; içerik taşınmadan ilgili sayfaya 301 |
| **KALDIR** | Sayfa gereksiz veya yanıltıcı; kaldırma yöntemi (410 / noindex / yönlendirme) ayrıca belirlenir |

### 6.3 Hero kararı (her sayfa için ayrıca)
| Karar | Anlamı |
|---|---|
| **DOĞRU** | Görsel ve metin niyete uygun ve SoT ile tutarlı |
| **DEĞİŞMELİ** | Hero kalır ama görsel veya metin düzeltilmeli (yanlış bilgi, zayıf uyum) |
| **BAŞKA SAYFADAN KOPYA** | Başka bir sayfanın hero'su (görsel ve/veya metin) aynı rolle kullanılmış |
| **İLGİSİZ** | Hero sayfanın konusu veya niyetiyle ilgisiz |

### 6.4 Audit tablosu (her sayfa için bir satır)
| Alan | İçerik |
|---|---|
| URL | — |
| Sayfa tipi (§2) | — |
| Birincil niyet / kanonik sahiplik (INTENT_MAP) | — |
| Tespit edilen sorunlar (§6.1) | — |
| SoT çelişkisi (varsa, kaynak bölümüyle) | — |
| Benzer / çakışan sayfalar | — |
| Sayfa kararı (§6.2) | — |
| Hero kararı (§6.3) | — |
| Gerekçe | — |
| Bağımlılık (eksik SoT verisi, kullanıcı kararı) | — |

### 6.5 Kurallar
- Audit önce **rapor** olarak sunulur; hiçbir sayfa onaysız değiştirilmez, birleştirilmez, yönlendirilmez veya kaldırılmaz.
- BİRLEŞTİR / YÖNLENDİR / KALDIR kararlarında 301 haritası ve iç link güncellemesi aynı planda yer alır.
- Search Console verisi erişilebilirse kararlar trafik ve sorgu verisiyle desteklenir; erişilemezse bu durum raporda belirtilir.
- Eksik SoT verisi nedeniyle karar verilemeyen sayfa "beklemede" işaretlenir; içerik uydurularak doldurulmaz.

## 7. İlgili Belgeler
- INTENT_MAP.md, CONTENT_ARCHITECTURE.md, LOCAL_SEO_PLAYBOOK.md: niyet, içerik ve yerel kurallar.
- IMAGE_GUIDELINES.md: hero ve içerik görselleri.
- SCHEMA_GRAPH.md, MEASUREMENT_PLAN.md: schema ve ölçüm.
- BRAND_MIGRATION.md: eski marka ve yanlış bilgi iş listesi.
- DESIGN_SYSTEM_GUIDE.md §28: Faz 1 tasarım kuralları.
