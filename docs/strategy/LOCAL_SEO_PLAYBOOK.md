# LOCAL_SEO_PLAYBOOK.md

> **Durum:** ACTIVE · Strateji belgesi · Faz 1 Commit 2 · Oluşturulma: 2026-10-07
> **Amaç:** Yerel SEO'nun nasıl uygulanacağını tanımlar: tek fiziksel merkez modeli, yerel öncelik, yerel sayfa kuralları, yerel bilgi doğrulama yöntemi ve yeni sayfa / konsolidasyon kararları.
> **Kaynak sırası:** İşletme gerçekleri yalnızca SoT'tadır (`docs/source-of-truth/*`). Bu belge onları tekrar etmez, referans verir. Çelişkide SoT geçerlidir (MASTER_PLAN.md §1).
> **Sınır:** Strateji belgesidir. Sayfa, kod, schema veya içerik değişikliği yapmaz. Uygulama ilgili fazda ve ayrı onayla yapılır (MASTER_PLAN.md §7).

---

## 1. Temel Model: Tek Fiziksel Merkez

| Kural | Kaynak |
|---|---|
| Tek fiziksel merkez Darıca'dadır. Gebze, Çayırova ve diğer ilçelerde şube yoktur | LOCAL_SOT §1, MASTER_PLAN K7 |
| İşletme tek entity'dir: Avrasya İşitme Cihazları. eniyicihaz.com yalnızca alan adıdır | BRAND_SOT §1, MASTER_PLAN K1 |
| Merkezde verilen hizmetler (test, deneme, ayar, kalıp, servis, SGK desteği) Darıca merkezine bağlanır | SERVICE_SOT §1 |
| Darıca dışındaki yerel içerik "o bölgeden Darıca merkezimize" modeliyle yazılır | LOCAL_SOT §5–§6 |
| Hiçbir ilçe şube, ofis veya ayrı fiziksel merkez gibi gösterilmez; yerel sayfa için ayrı işletme kaydı (ayrı adres, ayrı NAP) oluşturulmaz | LOCAL_SOT §3, BRAND_SOT §3 |

Kullanılmayacak kalıplar: "Gebze'deki merkezimiz", "Çayırova şubemiz", "Kocaeli genelindeki merkezlerimiz" ve aynı anlama gelen her ifade.

## 2. Yerel Öncelik ve Kapsam

### 2.1 Yerel SEO önceliği
Sıra: **Darıca > Gebze > Çayırova > Kocaeli > diğer** (LOCAL_SOT §3).

| Bölge | Rol | Genişleme koşulu |
|---|---|---|
| Darıca | Ana fiziksel merkez ve yerel otorite merkezi (hub) | İlk iş; diğerlerinin önkoşulu |
| Gebze | İkinci öncelik; "Gebze'den Darıca merkezimize" | Darıca temeli kurulduktan sonra, gerçek veriyle |
| Çayırova | Üçüncü öncelik; Gebze'den farklı kurgu | Gebze'den sonra; doğrulanmış veri olduğu ölçüde |
| Kocaeli | İl düzeyinde yönlendirici sayfa; Darıca'nın ve pillar sayfaların önüne geçmez | Ayrı faz (MASTER_PLAN §7) |
| Diğer | Yalnızca doğal bağlamda anılır; ayrı yerel sayfa önceliği yok | — |

### 2.2 Yerel SEO kapsamı ≠ evde hizmet alanı
Bu iki bilgi **kesin olarak ayrıdır** ve birbirinin yerine kullanılmaz.

| | Yerel SEO kapsamı | Evde hizmet alanı |
|---|---|---|
| Ne anlatır | Hangi bölgeler için yerel içerik önceliği verildiği | Evde hizmetin (H16) fiilen sunulduğu alan |
| Kaynak | LOCAL_SOT §3; özet COMPANY.md §5 | LOCAL_SOT §3, SERVICE_SOT H16; özet COMPANY.md §6 |
| Sonuç | Sayfa açma ve iç link önceliği | Hizmet bilgisi; sayfa açma gerekçesi **değildir** |

Kurallar:
- Evde hizmet verilen bir ilçe, yalnızca bu nedenle yerel sayfa almaz.
- Yerel SEO kapsamı dışındaki bir ilçe (COMPANY.md §5'teki "bilinçli olarak kapsam dışı" listesi), evde hizmet alanında olduğu halde sayfa önceliği almaz. Bu bir çelişki değildir (LOCAL_SOT §3).
- Evde hizmet anlatılırken alan SoT'taki ifadesiyle verilir; ilçe ilçe sayfa üretilmez.

## 3. Darıca: Ana Yerel Hub

### 3.1 Kullanılabilecek doğrulanmış yerel bağlam
Ayrıntılar SoT'tadır; burada yalnızca hangi kategorilerin kullanılabileceği listelenir.

| Kategori | Kaynak | Not |
|---|---|---|
| Açılış (Ağustos 2024) ve kuruluştan ayrımı | BUSINESS_SOT §2, LOCAL_SOT §4 | Kuruluş ile Darıca açılışı aynı cümlede birleştirilmez |
| Adres tarifi ve yakın referanslar | LOCAL_SOT §1, §2 | Metro durağı yeni; YENİDEN DOĞRULA |
| Erişim: asansör, tekerlekli sandalye uygunluğu, otopark varlığı | LOCAL_SOT §2 | Otopark ayrıntısı verilmedi; ayrıntı uydurulmaz |
| Toplu taşıma hatları | LOCAL_SOT §2 | TIME-SENSITIVE; yayından önce kontrol |
| Danışanların geldiği mahalleler | LOCAL_SOT §4 | Mahalle adı listesi doğal bağlamda; mahalle başına sayfa yok |
| Çalışma saatleri, öğle arası, resmî tatil | LOCAL_SOT §1 | Saatler YENİDEN DOĞRULA |
| Walk-in kabulü + hizmet bazında randevu | LOCAL_SOT §2, SERVICE_SOT §2.16 (T5) | İkisi birlikte yazılır |
| İlk ziyaret süresi | LOCAL_SOT §2, SERVICE_SOT §2.15 | — |
| SGK'da genellikle kullanılan hastane | LOCAL_SOT §4, SERVICE_SOT §3 | Resmî kaynak doğrulaması olmadan prosedür ayrıntısı yazılmaz |
| Gerçek merkez fotoğrafları | ASSET_SOT §2 | Bkz. IMAGE_GUIDELINES.md |
| Ekip | BUSINESS_SOT §4 | Bkz. EEAT_AND_EDITORIAL.md |

Henüz kullanılamayacaklar (SoT'ta [KULLANICIDAN BİLGİ GEREKLİ]): Darıca'ya özgü SSS'ler, yerel kurum/etkinlik ilişkileri, yerel basın bağlantıları, otopark ayrıntısı, merkezdeki bölümlerin tam listesi.

### 3.2 Darıca hub'ının içerik görevi
Sıralama tasarım fazında belirlenir; aşağıdaki liste kapsamı tanımlar, sırayı kilitlemez.
1. Kısa cevap: kim, nerede, ne yapar (kanonik tanım: BUSINESS_SOT §1).
2. Ara / Yol tarifi / Mesaj eylemleri (CONVERSION_SOT §5 mobil öncelik sırası).
3. Merkeze ulaşım ve erişim (§3.1).
4. Merkezde verilen hizmetler; her biri kanonik hizmet sayfasına bağlanır (INTENT_MAP.md §3).
5. Ekip ve gerçek merkez deneyimi.
6. SGK sürecinin merkezdeki işleyişi (rakam ve prosedür kilitlemeden; CONTENT_ARCHITECTURE.md §6).
7. İlk ziyaret: ne getirilir, ne kadar sürer (SERVICE_SOT §2.3, §2.15).
8. Yalnızca gerçek SSS'ler (kaynak gelene kadar genel SSS konuları BUSINESS_SOT §10'dan, Darıca'ya özgüymüş gibi sunulmadan).

## 4. Gebze

- Model: "Gebze'den Darıca merkezimize" (LOCAL_SOT §5).
- Kullanılabilecek doğrulanmış veri: müşteri payının yaklaşık değeri (iç bilgi; sayfada yüzde olarak kullanımı ayrıca değerlendirilir), Gebze hatları, SGK'da genellikle kullanılan hastane, evde hizmet alanında olması.
- Henüz yok: mahalleler, Gebze'ye özgü gözlenen ihtiyaç ve sorular ([KULLANICIDAN BİLGİ GEREKLİ]).
- **Gebze sayfası Darıca'nın şehir adı değiştirilmiş kopyası olamaz.** Darıca hub'ındaki bölümler Gebze'ye taşınmaz; Gebze sayfası yalnızca Gebze'den gelen kişinin farklı ihtiyacına (ulaşım, ziyaret planı, SGK'nın Gebze tarafındaki adımı) cevap verir, merkez hizmetleri için Darıca hub'ına ve kanonik hizmet sayfalarına bağlanır.
- Veri azsa sayfa kısa kalır. Boşluk genel metinle doldurulmaz.

## 5. Çayırova

- Model: "Çayırova'dan Darıca merkezimize", **Gebze'den farklı yapı ve başlıklarla** (LOCAL_SOT §6).
- Kullanılabilecek doğrulanmış veri: Çayırova hattı ve evde hizmet alanında olması.
- Müşteri payı, mahalleler, gözlenen ihtiyaç ve sorular: **[VERİ BEKLENİYOR]**.
- **Doğrulanmış veri yoksa içerik üretilmez.** Gebze'nin cevapları, yapısı veya SSS'i Çayırova'ya kopyalanmaz.
- Veri gelene kadar Çayırova için yapılacak iş: mevcut sayfanın Darıca kopyası olan bölümlerinin sadeleştirilmesi (Faz 2) ve Darıca/kanonik sayfalara yönlendirme. Yeni Çayırova içeriği Faz 7'ye ve veriye bağlıdır.

## 6. Kocaeli

- İl düzeyinde yönlendirici sayfa (LOCAL_SOT §7). Darıca hub'ına ve pillar sayfalara yönlendirir.
- Genel konu blokları (cihaz nedir, fiyat neye göre değişir vb.) pillar sayfalarla çakışır; kısaltılıp pillar'a bağlanır (CONTENT_ARCHITECTURE.md §7).
- İl geneli istatistik, uydurma bölgesel bilgi veya ilçe listesiyle doldurma yapılmaz.

## 7. Doorway / City-Swap Yasağı

Kaynak: LOCAL_SOT §3, SERVICE_SOT §6, QUALITY_GATES.md §2 ve §12.3.

**Yasak olanlar**
- Bir sayfanın şehir/ilçe adı değiştirilerek başka bir sayfa olarak yayınlanması.
- Aynı bölüm sırası, aynı H2 seti ve eş anlamlılarla yeniden yazılmış aynı paragraflarla birden fazla yerel sayfa.
- Aynı SSS cevabının birden fazla yerel sayfada tekrarı.
- Şehir adı değiştirilmiş "hizmet bölgesi" blokları (her hizmet sayfasına eklenen kalıp metinler).
- Hizmet × ilçe kombinasyonları için sayfa üretmek (ör. ilçe + cihaz türü, ilçe + marka).
- İlçe başına sayfa açmak için evde hizmet alanını gerekçe göstermek.

**Serbest olanlar**
- Ortak Design System bileşenleri (SERVICE_SOT §6).
- Tek kaynaktan gelen NAP, yasal uyarı ve kanonik tanım cümlesi.
- Yerel sayfadan kanonik hizmet sayfasına kısa, bağlama özgü bağlantı cümlesi.

**Kontrol yöntemi (yayın öncesi)**
1. Yerel sayfalar yan yana konup başlık seti ve bölüm sırası karşılaştırılır; aynıysa geçmez.
2. Paylaşılan cümleler listelenir; yukarıdaki serbest istisnalar dışında paylaşılan cümle kalmamalıdır. Otomatik benzerlik kontrolü henüz yok (ayrı bir iş olarak, ayrı onayla planlanır); o zamana kadar manuel karşılaştırma yapılır.
3. Her yerel sayfada, yalnızca o bölgeye ait ve SoT'ta doğrulanmış en az bir somut bilgi (ulaşım, hastane, gözlenen ihtiyaç vb.) bulunur. Bulunmuyorsa sayfa yeni içerik almaz, yönlendirici/kısa kalır.

## 8. Yerel Bilgi Doğrulama Yöntemi (Local Fact Validation)

Bir yerel bilgi sayfada kullanılmadan önce aşağıdaki adımlardan geçer:

| Adım | Soru | Geçmezse |
|---|---|---|
| 1. Kaynak | Bilgi SoT'ta kayıtlı mı? Durumu [DOĞRULANDI] mı? | Kullanılmaz; SoT'a [KULLANICIDAN BİLGİ GEREKLİ] olarak eklenmesi önerilir |
| 2. Tür | Resmî kurum, hastane prosedürü veya mevzuat içeriyor mu? | [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] tamamlanmadan yalnızca işletmenin operasyonel bilgisi olarak, prosedür kilitlemeden kullanılır |
| 3. Güncellik | [TIME-SENSITIVE] veya YENİDEN DOĞRULA mı? (hatlar, metro durağı, saatler, hastane) | Yayından önce işletme sahibiyle yeniden teyit edilir; teyit tarihi kaydedilir |
| 4. Kapsam | Bilgi gerçekten bu bölgeye mi ait? Başka bölgeden taşınmış mı? | Taşınmış bilgi kullanılmaz |
| 5. İddia | Bilgi üstünlük, şube veya yetki izlenimi yaratıyor mu? | Yeniden yazılır veya kullanılmaz (BRAND_SOT §3) |
| 6. Kayıt | Kullanılan bilgi ve kaynağı sayfa notunda / QA raporunda belirtildi mi? | Yayın kapısından geçmez (QUALITY_GATES.md §12.1) |

Uydurulmayacaklar (LOCAL_SOT başlığı): mahalle, hat, süre, mesafe, hastane, kullanıcı profili, istatistik ve şehir hakkında genel bilgi.

## 9. Yeni Yerel Sayfa mı, Konsolidasyon mu?

### 9.1 Yeni yerel sayfa açılabilir, ancak hepsi birlikte sağlanırsa
1. Bölge yerel SEO kapsamında ve sıradaki önceliği gelmiş (§2.1).
2. Darıca hub'ı QUALITY_GATES kapılarını geçmiş durumda.
3. Mevcut bir sayfanın karşılamadığı ayrı bir niyet var (INTENT_MAP.md §2).
4. O bölgeye ait, SoT'ta doğrulanmış ve sayfayı kendi başına taşıyacak yerel bilgi var (§8).
5. Sayfa mevcut yerel sayfaların hiçbiriyle başlık seti, bölüm sırası veya SSS paylaşmıyor (§7).
6. MASTER_PLAN K6 gerekçelerinden biri yazılı olarak belirtilmiş ve ayrı onay alınmış.

### 9.2 Konsolidasyon / mevcut sayfada kalma tercih edilir, eğer
- Niyet zaten bir kanonik sayfa tarafından karşılanıyorsa (ör. ilçe + hizmet sorgusu → kanonik hizmet sayfası + yerel sayfadaki kısa bağlam).
- Bölgeye özgü doğrulanmış veri yoksa veya tek cümleyi aşmıyorsa.
- Sayfa yalnızca evde hizmet alanında olduğu için açılmak isteniyorsa.
- Önerilen sayfa mevcut bir yerel sayfanın kopyası olacaksa.

### 9.3 Mevcut yerel sayfalar için karar (strateji; uygulama değil)
| Sayfa | Karar | Faz |
|---|---|---|
| `/darica-isitme-cihazlari/` | Ana hub olarak yeniden yazılır | Faz 4 |
| `/gebze-isitme-cihazlari/` | Önce kopya bölümler sadeleştirilir; sonra gerçek veriyle genişletilir | Faz 2 → Faz 6 |
| `/cayirova-isitme-cihazlari/` | Önce sadeleştirme; genişletme veri gelirse | Faz 2 → Faz 7 |
| `/kocaeli-isitme-cihazlari/` | Pillar'larla çakışan bloklar kısaltılır; yönlendirici rol | Faz 8 |
| Hizmet sayfalarındaki şehir adı değiştirilmiş yerel bloklar | Kaldırılır veya sayfaya özgü tek cümleye indirilir | Faz 2 |

URL'ler korunur; yerel sayfa taşıma veya yeniden adlandırma önerilmez.

## 10. GBP, NAP ve Yerel Sinyaller

- Mevcut GBP vardır; yeniden kurulmaz. Profil, ad, kategori ve bağlantılar NAP/GBP audit'inde doğrulanır (GOOGLE_SOT, MASTER_PLAN §7 Faz 3).
- Maps'te görünen ad farkı audit kapsamındadır; bu belge değişiklik kararı vermez (LOCAL_SOT §1).
- NAP tek kaynaktan gelir; üç telefonun rolleri CONVERSION_SOT §1'e göre gösterilir.
- Yorumlar: yalnızca gerçek GBP yorumları, değiştirilmeden ve kaynağına bağlanarak (EEAT_AND_EDITORIAL.md §7).
- Yerel schema tipi ve yerel sayfalarda kullanımı **karara bağlanmadı**; `docs/tech/SCHEMA_GRAPH.md` (planlandı) beklenir.

## 11. İlgili Belgeler
- INTENT_MAP.md: yerel sorgu kümeleri ve kanonik sayfalar.
- CONTENT_ARCHITECTURE.md: pillar/cluster ve yerel ↔ konu bağlantıları.
- EEAT_AND_EDITORIAL.md: ekip ve yorum kuralları.
- IMAGE_GUIDELINES.md: yerel sayfalarda görsel seçimi.
- QUALITY_GATES.md §2, §12.3: yayın kapıları.
