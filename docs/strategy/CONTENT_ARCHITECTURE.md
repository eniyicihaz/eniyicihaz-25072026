# CONTENT_ARCHITECTURE.md

> **Durum:** ACTIVE · Strateji belgesi · Faz 1 Commit 2 · Oluşturulma: 2026-10-07
> **Amaç:** Bilgi Merkezi için pillar/cluster yapısını, içerik bankasını, iç link mantığını, answer-first yapıyı ve YMYL kaynak kurallarını tanımlar. Konsolidasyon adaylarını listeler.
> **Kaynak sırası:** Konu havuzu BUSINESS_SOT §11, gerçek sorular BUSINESS_SOT §10, hasta süreci SERVICE_SOT §2. Çelişkide SoT geçerlidir.
> **Sınır:** Strateji belgesidir. Bu commit'te hiçbir mevcut sayfa değiştirilmez, birleştirilmez, yönlendirilmez veya silinmez.

---

## 1. İlkeler

1. **Thin content üretilmez** (BUSINESS_SOT §11). Bir sayfa, konusunu gerçekten cevaplayacak doğrulanmış bilgi yoksa açılmaz.
2. **Bir niyet, bir kanonik sayfa** (INTENT_MAP.md §1).
3. **Gruplama üç eksenlidir:** search intent, topical authority (pillar/cluster) ve kullanıcı yolculuğu (SERVICE_SOT §2'deki P1–P15).
4. **Answer-first:** Her içerik sayfası, sayfa sorusuna ilk paragrafta kısa ve tek başına doğru bir cevapla başlar (§5).
5. **Sağlık içeriği YMYL'dir:** kaynaklı yazılır ve insan onayından geçer (§6, EEAT_AND_EDITORIAL.md §5).
6. **Yerel bilgi bilgi içeriğine zorla eklenmez.** Ulusal bilgi sayfalarına ilçe adı eklenmez (QUALITY_GATES.md §2).

## 2. Pillar / Cluster Haritası

Konu havuzu: BUSINESS_SOT §11. Mevcut URL'ler korunur; "Boşluk" sütunu yeni sayfa kararı değildir, INTENT_MAP.md §6 koşullarına bağlıdır.

| Pillar | Pillar sayfası (mevcut) | Mevcut cluster'lar | Boşluk (aday) | Yolculuk aşaması |
|---|---|---|---|---|
| İşitme kaybı | `/rehberler/isitme-kaybi-nedir/` | `/ihtiyaciniza-gore/*` (derece ve tek taraflı), yaşlılar için | Belirtiler; çocuklarda işitme; yaşlılarda işitme | Şüphe |
| İşitme testi | `/degerlendirme/ucretsiz-isitme-testi/` | Odyometri, timpanometri, çocuk testi, tinnitus değerlendirme, online test | — | Test (P5) |
| İşitme cihazı türleri | `/isitme-cihazlari/` | Kulak arkası, kulak içi, görünmez, şarjlı, Bluetooth, suya dayanıklı, çocuklara özel | RIC (satılıp satılmadığı [KULLANICIDAN BİLGİ GEREKLİ], PRODUCT_SOT §3); şarjlı / pilli karşılaştırma | Seçim (P7) |
| Cihaz seçimi | `/rehberler/cihaz-secim-rehberi/` | Segmentler, teknolojiler | — | Seçim (P7) |
| Fiyat ve SGK | `/isitme-cihazi-fiyatlari/` + `/sgk-isitme-cihazi-odemesi/` | `/sgk/*` | — | Maliyet, SGK (P9) |
| Deneme ve uygulama | `/uygulama-ayar/cihaz-deneme/` | Kalıp, uygulama, ayar, programlama, uzaktan ayar, kontrol, evde hizmet | — | Deneme, teslim (P8, P10) |
| Kullanım ve alışma | `/rehberler/ilk-kullanim-rehberi/` | `/rehberler/uyum-sureci/` | Telefon / TV kullanımı; gürültülü ortam; cihaz sorunları (ötme, düşme, basınç hissi, tıkanma) | Kullanım (P11–P12) |
| Bakım ve servis | `/servis-bakim/teknik-servis/` | Periyodik bakım, temizlik, onarım takibi, garanti, pil ve aksesuar | — | Takip (P13) |
| Tinnitus | `/teknolojiler/tinnitus-cozumleri/` | Tinnitus değerlendirme | — | Şüphe / test |
| Markalar | `/isitme-cihazi-markalari/` | `/markalar/*` (18 marka) | — | Seçim |
| Yerel | `/darica-isitme-cihazlari/` | Gebze, Çayırova, Kocaeli | — | Bkz. LOCAL_SEO_PLAYBOOK.md |

Notlar:
- "Kullanım ve alışma" ile "Bakım ve servis", gerçek kullanıcı sorularının en yoğun olduğu alandır (BUSINESS_SOT §10) ve en büyük fayda boşluğu buradadır.
- Marka sayfalarındaki üretici bilgilerinin kaynağı ve onaylayan kişi [KULLANICIDAN BİLGİ GEREKLİ] (PRODUCT_SOT §1). Yeni marka iddiası eklenmez.

## 3. İçerik Bankası

| Girdi | Kaynak | Kullanım |
|---|---|---|
| Gerçek SSS konuları (21 konu) | BUSINESS_SOT §10 | SSS blokları, cluster başlıkları, soru biçimli H2'ler |
| Soruların tam kullanıcı metinleri | [KULLANICIDAN BİLGİ GEREKLİ] | Aktarıldığında soru düzeyinde eşleme |
| Hasta süreci P1–P15 | SERVICE_SOT §2 | "Nasıl işler" içerikleri, süreç anlatımı |
| Hizmet kayıtları H1–H40 | SERVICE_SOT §1 | Hizmet sayfalarının olgu temeli (ücret, randevu, süre) |
| KBB yönlendirme kriterleri | SERVICE_SOT §1.2, §1.2.1 | "Ne zaman hekime başvurulur" bölümleri; liste genişletilmez |
| Kullanım eğitimi ve takip uygulaması | SERVICE_SOT §2.11–§2.13 | Alışma ve bakım içerikleri |
| Ana problem ifadesi ve hedef kitle | BUSINESS_SOT §9 | Ton ve giriş cümleleri |
| Danışanlara en sık anlatılan konular, pratik öneriler | [KULLANICIDAN BİLGİ GEREKLİ] | Sorun giderme ve bakım rehberleri |
| En sık arızalar ve ilk çözüm önerileri | [KULLANICIDAN BİLGİ GEREKLİ] (SERVICE_SOT §4) | Cihaz sorunları rehberi |

Kural: İçerik bankasında olmayan bir soru "kullanıcı sık soruyor" diye sunulmaz. Soru icat edilmez (SEARCH_STRATEGY.md §8).

## 4. Boşluk İçeriklerinin Önceliği

Öneri sırası (her biri INTENT_MAP.md §6 koşullarına ve uzman onayına bağlıdır):
1. Cihaz sorunları rehberi (ötme, düşme, basınç hissi, filtre/tıkanma, konuşmayı anlamama): gerçek SSS'lerin çoğunu karşılar.
2. Telefon ve TV kullanımı.
3. Gürültülü ortamda kullanım.
4. Şarjlı / pilli karşılaştırma (mevcut iki sayfanın çakışması çözülmeden açılmaz, INTENT_MAP.md §5).
5. Çocuklarda ve yaşlılarda işitme (mevcut sayfalarla ilişkisi netleştirilerek).
6. RIC (ancak ürün olarak satıldığı doğrulanırsa).

## 5. Answer-First Yapısı

Her içerik sayfası için:
1. **İlk paragraf:** Sayfa sorusuna doğrudan cevap, yaklaşık 40–60 kelime. Sayfanın geri kalanı olmadan da doğru olmalı.
2. **Ardından:** ayrıntı, karşılaştırma veya adımlar; soru biçimli H2'ler yalnızca gerçek sorular için.
3. **Ne zaman merkeze / hekime başvurulmalı:** yalnızca SoT'taki kriterlerle (SERVICE_SOT §1.2.1).
4. **Kaynaklar ve inceleme bilgisi** (§6).
5. **Bağlamsal CTA:** bilgi sayfalarında sonda ve baskısız; transactional sayfalarda ilk ekranda (PRINCIPLES.md §9).

Özet cevap kanonik tanımla veya SoT'la çelişen bir rakam, süre ya da vaat içermez.

## 6. YMYL ve Kaynaklandırma Kuralları

| Kural | Ayrıntı |
|---|---|
| Kaynak zorunlu | Tıbbi, teknik veya istatistiksel her iddia ya güvenilir bir dış kaynağa ya da SoT'taki [DOĞRULANDI] kayda dayanır |
| Kaynak adayları | SGK / SUT, WHO, EHIMA, EuroTrak, MarkeTrak (BUSINESS_SOT §11). Liste aday listedir; her kullanımda kaynağın güncelliği kontrol edilir |
| Tıbbi sınır | Teşhis veya tedavi vaadi yok; işitme cihazının tedavi edeceği iddiası yok. Belirti anlatımı KBB yönlendirme kriterleriyle sınırlı kalır ve liste genişletilmez |
| İşletme uygulaması ≠ genel kural | Merkezin uygulamaları (kullanım süreleri, kontrol sıklığı, iade uygulaması) "merkezimizde" bağlamıyla yazılır; genel tıbbi veya hukuki kural gibi sunulmaz (SERVICE_SOT §2) |
| Hukuk sınırı | İade/cayma yalnızca işletmenin mevcut uygulaması olarak anlatılır; "yasal olarak" türü sonuç üretilmez (SERVICE_SOT §2.14) |
| İnceleme | YMYL içerik yayından önce içerik inceleyicisinin onayından geçer (EEAT_AND_EDITORIAL.md §4–§5) |
| Tarih | Zaman duyarlı bilgi içeren sayfada son inceleme tarihi gösterilir |

### 6.1 SGK içerikleri
- SGK ödeme tutarları, pil desteği, SUT hükümleri, kurul/rapor prosedürü ve yenileme süresi **resmî kaynakla doğrulanmadan kalıcı rakam veya prosedür olarak yazılmaz** (SERVICE_SOT §3, BRAND_SOT §3).
- Sitedeki mevcut tutarların güncelliği doğrulanmadı; tarihi geçmiş tutar kesin bilgi gibi sunulmaz.
- Doğrulama sonrası kullanılırsa: kaynak bağlantısı, "itibarıyla" tarihi ve son kontrol tarihi birlikte verilir.
- Merkezin SGK işleyişi (işlemlerin merkezde yürütülmesi, başlangıç senaryoları, merkez içi süre) işletme bilgisi olarak anlatılabilir (SERVICE_SOT §3).
- Hastane adları yalnızca "genellikle kullanılan" bağlamında ve resmî prosedür ayrıntısı eklenmeden kullanılır.

### 6.2 Fiyat
- Cihaz fiyatı yayınlama kararı verilmedi (PRODUCT_SOT §4). Fiyat tutarı yazılmaz.
- Fiyat niyetine cevap modeli: fiyatı belirleyen etkenler + doğrulanmış SGK bilgisi + ücretsiz işitme testi daveti.
- Pil kampanyası zaman duyarlıdır; kalıcı içeriğe veya schema'ya alınmaz (PRODUCT_SOT §5).

### 6.3 Deneme ve marka dili
- Deneme: SERVICE_SOT §1.5 kanonik ifadesi; "ücretsiz deneme" ifadesi kullanılmaz; merkezdeki demo (H7) ile 7 güne kadar deneme (H28) ayrı anlatılır; kulak içi istisnası belirtilir.
- "18 marka" yalnızca bağlam gerektirdiğinde kullanılır; title/meta'ya mekanik eklenmez (DECISIONS.md, 2026-10-07).

## 7. Konsolidasyon Adayları (bu commit'te uygulanmaz)

Karar Search Console verisi ve ayrı onayla verilir. Konsolidasyon gerekirse 301 ve iç link güncellemesi aynı işte yapılır.

| Aday | Gerekçe | Önerilen yön |
|---|---|---|
| `/blog/kampanyalar/`, `/blog/etkinlikler/`, `/blog/basari-hikayeleri/` | Gerçek içerik yok (PRODUCT_SOT §5, site analizi) | Gerçek içerik gelene kadar noindex veya kaldırma; uydurma içerikle doldurulmaz |
| `/blog/uzman-gorusleri/`, `/blog/yeni-teknolojiler/` | İnce; teknoloji/rehber sayfalarıyla çakışma | İlgili pillar'a birleştirme |
| `/blog/sik-sorulan-sorular/` | Genel SSS merkezi olabilir | Koruma ve içerik bankasıyla güçlendirme |
| `/neden-orijinal/*` (7 sayfa) | Tekrarlı ve ince | 1–2 güçlü sayfa |
| `/neden-orijinal/yaygin-servis-agi/` | "Yaygın ağ" iddiası tek merkez gerçeğiyle çelişiyor (BUSINESS_SOT §5) | İddia doğrulanmadan kullanılmaz; teknik servis olgusu (SERVICE_SOT §4) üstünlük iddiası olmadan anlatılır |
| `/segmentler/*` (3 sayfa) | Fiyat niyetiyle çakışma | Fiyat veya seçim pillar'ında bölüm |
| `/sgk/katki-payi/` ↔ SGK pillar | Niyet çakışması | INTENT_MAP.md §5 |
| `/isitme-cihazlari/sarj-edilebilir/` ↔ `/teknolojiler/sarjli-teknolojiler/` | Niyet çakışması | INTENT_MAP.md §5 |
| `/neden-orijinal/marka-danismanligi/` ↔ `/neden-orijinal/ucretsiz-danismanlik/` | Aynı hizmet (H6) | Tek kanonik anlatım |
| Klasör kökleri (index'i olmayan klasörler) | Breadcrumb ebeveyni yok | İlgili pillar'a 301 veya gerçek hub (karar Faz 3) |

## 8. İç Link Mantığı

| Kural | Ayrıntı |
|---|---|
| Pillar ↔ cluster | Pillar tüm cluster'larını listeler; her cluster pillar'ına ve en az iki ilgili cluster'a bağlanır |
| Yolculuk bağlantısı | Her sayfa, kullanıcının sıradaki adımına bağlanır (ör. test → cihaz seçimi → deneme → SGK) |
| Yerel ↔ hizmet | Darıca hub merkez hizmetlerine; merkez hizmet sayfaları "merkezimiz" bağlamında Darıca hub'ına bağlanır. Ulusal bilgi sayfaları yerel sayfaya zorla bağlanmaz |
| Gebze / Çayırova / Kocaeli | Her zaman Darıca hub'ına bağlanır; hizmet ayrıntısı için kanonik sayfaya gider |
| Anchor metni | Hedefi tarif eder; "Detaylı İncele", "Tıklayın" gibi jenerik metinler kullanılmaz |
| Footer | Yapay link ağı kurulmaz; footer ana gezinme içindir |
| Kırık / placeholder link | `#` hedefli link ve üretilmiş id'ye bağlı anchor kullanılmaz (QUALITY_GATES.md §7) |
| Breadcrumb | Ebeveyn, klasör değil mantıksal pillar olur (uygulama Faz 3) |

## 9. Terminoloji

- İşletme için "merkez" kullanılır; "klinik" kullanılmaz.
- Marka: ilk kullanımda "Avrasya İşitme Cihazları", sonra "Avrasya İşitme" (BRAND_SOT §1).
- Hizmet adları SERVICE_SOT §1'deki kayıt adlarıyla tutarlı tutulur.

## 10. İlgili Belgeler
- INTENT_MAP.md: niyet ve kanonik sayfa eşlemesi.
- EEAT_AND_EDITORIAL.md: yazar, inceleyen, kaynak ve editoryal süreç.
- LOCAL_SEO_PLAYBOOK.md: yerel içerik kuralları.
- IMAGE_GUIDELINES.md: içerik görselleri.
