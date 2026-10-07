# BUSINESS_SOURCE_OF_TRUTH.md

> **Durum:** ACTIVE · Faz 0 · Oluşturulma: 2026-10-06 · Son güncelleme: 2026-10-07 (Faz 0 son bilgi aktarımı)
> **Amaç:** Avrasya İşitme Cihazları için tek kaynak. Kapsadığı konular:
> - İşletme kimliği ve tarihçesi
> - Yasal yapı
> - Ekip ve uzmanlık (E-E-A-T)
> - KVKK
> - Rakipler
> - İş hedefleri
> - Hedef kitle
> - Sık sorular
> - Bilgi Merkezi konu havuzu
>
> Bu dosya içerik üretmez. Yalnızca doğrulanmış ya da doğrulanması gereken işletme gerçeklerini kaydeder.

---

## 0. Ortak Kurallar (tüm Source of Truth dosyalarında geçerli)

### 0.1 Durum etiketleri
| Etiket | Anlamı |
|---|---|
| **[DOĞRULANDI]** | İşletme sahibi açıkça ve güncel olarak doğruladı. |
| **[MEVCUT BELGELERDE VAR]** | Proje belgelerinde veya kodda yazıyor, ama işletme sahibi ayrıca teyit etmedi. **Sitede yazıyor olması doğrulama sayılmaz.** |
| **[KULLANICIDAN BİLGİ GEREKLİ]** | İşletme sahibinden cevap bekleniyor. |
| **[ERİŞİM GEREKLİ]** | Dış bir sisteme (GBP, GA4, GTM, GSC, Ads vb.) bakmak gerekiyor. |
| **[MEVCUT — AUDIT GEREKLİ]** | Sistem mevcut; ayrıntıları ilerideki audit fazında doğrulanacak. |
| **[TIME-SENSITIVE]** | Zamanla değişir; periyodik doğrulama gerekir. |
| **[VERİ BEKLENİYOR]** | Bilgi henüz yok. Gelene kadar içerikte veya schema'da kullanılmaz. |
| **[DOĞRULAMA GEREKLİ]** | İşletme sahibi bilgi verdi, ama hukuki/kurumsal açıdan çelişkili olabilir ya da kamuya açık iddia olarak kilitlenmeden önce ayrıca doğrulanmalı. **Kamuya açık içerikte kullanılmaz.** |
| **[WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ]** | Mevzuat, resmî tutar veya prosedür bilgisi. Canlı resmî kaynakla (SGK, SUT vb.) doğrulanmadan kalıcı bilgi olarak kullanılmaz. |
| **[ESKİ / GEÇERSİZ]** | Daha önce kaydedilmiş ama artık geçerli olmayan bilgi. Yalnızca değişiklik kaydı için tutulur, hiçbir yerde kullanılmaz. |

### 0.2 Kayıt metadata standardı
Her önemli bilgi şu alanlarla tutulur: **Bilgi · Değer · Durum · Kaynak · Son doğrulama · İlgili belge · Kullanım · Freshness**.
- **Freshness:** `STATIC` (değişmez) · `YENİDEN DOĞRULA (periyot)` · `GÜNCEL TUTULMALI`.
- Kullanıcı doğrulaması olmayan bilgide "Son doğrulama" alanına `—` yazılır.

### 0.3 Çatışma hiyerarşisi
Bilgiler çelişirse öncelik sırası şöyledir:
1. Kullanıcının açık ve güncel doğrulaması (son söylenen, önceki çelişkili bilginin yerine geçer)
2. Source of Truth içindeki **[DOĞRULANDI]** kayıt
3. Kilitli MASTER STRATEGY
4. `docs/DECISIONS.md`
5. Diğer strateji ve teknik belgeler
6. Eski dokümanlar
7. Mevcut kod veya metinden çıkarılan varsayım

**Kod ya da eski içerik, doğrulanmış işletme bilgisini geçersiz kılamaz.**

### 0.4 Güvenlik kuralı
- Bu dosyalarda şu bilgiler hiçbir şekilde saklanmaz: şifre, API key, access token, secret, OAuth credential, kişisel giriş bilgisi, özel kurum kimlik numarası (ör. SGK sözleşme/tesis numarası).
- Erişim gereken sistemlerde yalnızca **[ERİŞİM GEREKLİ]** veya **[MEVCUT — AUDIT GEREKLİ]** yazılır.
- Herkese açık tanımlayıcılar (ör. GTM container ID, sosyal profil URL'si) kaydedilebilir.

### 0.5 Sabit gerçekler (kilitli; tekrar sorulmaz)
**Kimlik**
- Resmî marka: **Avrasya İşitme Cihazları**. Kısa kullanım: **Avrasya İşitme**.
- **eniyicihaz.com** yalnızca alan adıdır, marka adı değildir.
- İşletme sahibi: **Erdinç Kılıç**.

**Tarihçe**
- Kuruluş: **2009, Afyon Merkez**.
- Darıca merkezinin açılışı: **Ağustos 2024**.
- Bu ifadeler **yasaktır**:
  - "2009'dan beri Darıca'da" ve aynı anlamı taşıyan her ifade
  - "2009'dan beri aynı ekip"
- Ekip 2009'dan beri aynı ekip değildir. Erdinç Kılıç 2009'dan beri organizasyonun içindedir; işitme sektöründeki profesyonel deneyimi yaklaşık 6 yıldır. Bunlar farklı kavramlardır. "2009'dan beri işitme sektöründe" ifadesi kullanılmaz.

**Merkez ve iletişim**
- **Tek fiziksel merkez Darıca'dadır.** Gebze ve Çayırova şube değildir.
- Evde hizmet alanı daha geniştir: Kocaeli'nin tamamı ve İstanbul Anadolu Yakası'nın tüm ilçeleri (bkz. LOCAL_SOT).
- Telefonlar:
  - **0533 773 31 99**: ana numara, telefon ve WhatsApp
  - **0543 386 63 60**: ofis mobil
  - **0262 656 32 77**: ofis sabit
- E-posta: **eniyicihaz@gmail.com** hem birincil e-posta hem form hedef adresidir.
- **Mevcut bir Google Business Profile (GBP) vardır.** Sıfırdan kurulmaz; ilerideki audit fazında doğrulanır. Profili Erdinç Kılıç yönetiyor.

**Görseller**
- İki gerçek logo dosyası vardır: yatay WebP ve kareye yakın WebP (bkz. ASSET_SOT).
- Sitedeki gerçek merkez fotoğrafları işletmeye aittir ve gerçektir. Kullanıcının "kullanılmasın" dediği bir fotoğraf **yoktur**.

**Markalar**
- **18 marka satılıyor; başka satılan marka yok.** "Yaklaşık 20 marka" ve "18+ marka" ifadeleri kullanılmaz (bkz. PRODUCT_SOT).

**Deneme**
- Kanonik ifade: "**Cihazı satın alarak 7 güne kadar deneme; uygun bulunmaması halinde ücret iadesi.**"
- "Ücretsiz deneme" ifadesi kullanılmaz.
- Merkezdeki yaklaşık 20 dakikalık ücretsiz demo (H7), eve verilen 7 günlük denemeden (H28) ayrıdır.
- **Kulak içi cihazlar** eve verilen 7 günlük deneme kapsamına girmez; bu cihazlarda merkezde demo/deneme yapılabilir (bkz. SERVICE_SOT §1.5).
- Bu kural işletmenin mevcut uygulamasıdır, yasal hak iddiası değildir.

**İddialar**
- "Yetkili bayi / tüm markaların yetkili bayisiyiz" iddiası **[DOĞRULAMA GEREKLİ]**. Kamuya açık iddia olarak kullanılmaz.

---

## 1. İşletme Kimliği

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | İlgili belge | Kullanım | Freshness |
|---|---|---|---|---|---|---|---|
| Resmî marka adı | Avrasya İşitme Cihazları | [DOĞRULANDI] | İşletme sahibi (K1) | 2026-10-07 | BRAND_SOT | Entity, schema, NAP, title, GBP | STATIC |
| Kısa marka kullanımı | Avrasya İşitme (ilk kullanımdan sonra, doğal metinde) | [DOĞRULANDI] | İşletme sahibi (A2) | 2026-10-07 | BRAND_SOT | Metin | STATIC |
| Alan adı | eniyicihaz.com (marka adı olarak kullanılmaz) | [DOĞRULANDI] | İşletme sahibi (K1) | 2026-10-07 | BRAND_SOT | URL, e-posta alan adı | STATIC |
| İşletme sahibi | Erdinç Kılıç | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | §4 | E-E-A-T, Hakkımızda | STATIC |
| Sahibin adının kamuya açık gösterilmesi | Ekip bilgisi olarak kullanılabileceği belirtildi (§4, E-E-A-T). "İşletme sahibi" unvanıyla gösterim kararı ayrıca verilmedi | Ekip olarak: [DOĞRULANDI] · Sahip unvanıyla gösterim: [KULLANICIDAN BİLGİ GEREKLİ] | İşletme sahibi | 2026-10-07 | §4 | Hakkımızda | — |
| Vergi levhasındaki tam ticari unvan | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | — | Schema `legalName`, KVKK | STATIC |
| KVKK metinlerinde kullanılan veri sorumlusu unvanı | "Avrasya İşitme Cihazları Satış ve Uygulama Merkezi" | [MEVCUT BELGELERDE VAR] | `src/data/kvkk/common.ts` | — | §6 | KVKK sayfaları | STATIC |
| Şirket türü | Şahıs şirketi | [MEVCUT BELGELERDE VAR] | COMPANY.md §1 | — | — | Hakkımızda, KVKK | STATIC |
| Kanonik işletme tanımı (öneri; olgular doğrulandı) | "Avrasya İşitme Cihazları 2009 yılında kurulmuştur. Darıca'daki merkezimiz Ağustos 2024'te açılmıştır." | Olgular [DOĞRULANDI]; cümle önerisi | İşletme sahibi | 2026-10-07 | MASTER STRATEGY | Hakkımızda, schema `description`, GEO | STATIC |
| SGK statüsü | SGK anlaşmalı işitme merkezi; SGK işlemleri merkez tarafından yürütülüyor (SERVICE_SOT §3) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | SERVICE_SOT | Güven, SGK sayfaları | YENİDEN DOĞRULA (yıllık) |
| SGK sözleşme tarihi ve tesis numarası | **Kamuya açık içerikte yazılmaz** (özel kurum kimlik bilgisi) | [DOĞRULANDI] (kural) | İşletme sahibi | 2026-10-07 | §0.4 | — | STATIC |
| Sağlık Bakanlığı / ÜTS kaydı veya satış merkezi izni | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | — | E-E-A-T | YENİDEN DOĞRULA |
| Mesleki dernek veya oda üyeliği | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | — | Schema `memberOf` | YENİDEN DOĞRULA |

## 2. Tarihçe

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Kullanım | Freshness |
|---|---|---|---|---|---|---|
| Kuruluş yılı | 2009 | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Business, E-E-A-T, entity, schema `foundingDate` | STATIC |
| Kuruluş yeri | Afyon Merkez | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Hakkımızda | STATIC |
| Darıca merkezinin açılışı | **Ağustos 2024** | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Darıca hub, Hakkımızda, LOCAL_SOT | STATIC |
| ~~Darıca merkezinin hizmet süresi: "yaklaşık 3 yıl"~~ | — | [ESKİ / GEÇERSİZ] | Önceki kayıt (2026-10-06) | — | Yerine "Ağustos 2024'te açıldı" kullanılır | — |
| Erdinç Kılıç'ın organizasyondaki süresi | 2009'dan beri organizasyonun içinde | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | §4, E-E-A-T | STATIC |
| Ekip 2009'dan beri aynı mı? | **Hayır.** Ekip 2009'dan beri aynı ekip değildir | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | İddia düzeltmesi (BRAND_SOT §5) | STATIC |
| Kullanım kuralı | "2009'dan beri işitme alanında" serbest. Yasak ifadeler: "2009'dan beri Darıca'da", "2009'dan beri Darıca'daki merkez", "aynı adreste", "2009'dan beri aynı ekip" | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Tüm içerik | STATIC |
| Hatalı veya doğrulanacak 2009/Darıca/ekip ifadeleri (sitede) | Envanter BRAND_SOT §5'te | [MEVCUT BELGELERDE VAR] | BRAND_SOT §5 | — | Sonraki uygulama fazında düzeltme | — |

## 3. İletişim Kimlikleri (NAP dışı)

> Adres, telefon ve saatler için LOCAL_SOT'a; telefon rolleri ve CTA kullanımı için CONVERSION_SOT'a bakın.

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Kullanım | Freshness |
|---|---|---|---|---|---|---|
| **Birincil e-posta** | **eniyicihaz@gmail.com** | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Footer, İletişim, schema `email` | STATIC |
| **Form hedef e-postası** | **eniyicihaz@gmail.com** (birincil e-postayla aynı; form adresi uyumsuzluğu yok) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | İleride iletişim/randevu formu (CONVERSION_SOT §2) | STATIC |
| avrasyaisitme@gmail.com | Birincil e-posta **değildir**. Şu an KVKK metinlerinde geçiyor (`src/data/kvkk/common.ts`) | Birincil olarak: [ESKİ / GEÇERSİZ] · Kodda geçmesi: [MEVCUT BELGELERDE VAR] | İşletme sahibi (birincil düzeltmesi) | 2026-10-07 | KVKK metinlerinin güncellenmesi sonraki fazda | — |
| KEP adresi | erdinc.kilic.3@hs01.kep.tr | [MEVCUT BELGELERDE VAR] | `src/data/kvkk/common.ts` | — | KVKK | YENİDEN DOĞRULA |
| Diğer alan adları | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | Yönlendirme, entity | — |
| Sosyal hesaplar (aktif) | Instagram, Facebook, TikTok, YouTube | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Footer, schema `sameAs` | YENİDEN DOĞRULA |
| Facebook URL | https://www.facebook.com/daricaisitmecihazi | [MEVCUT BELGELERDE VAR] | footer `social.ts` | — | Footer, `sameAs` | YENİDEN DOĞRULA |
| Instagram URL | https://www.instagram.com/avrasyaisitme | [MEVCUT BELGELERDE VAR] | footer `social.ts` | — | Footer, `sameAs` | YENİDEN DOĞRULA |
| YouTube URL | https://www.youtube.com/@EniyiCihaz | [MEVCUT BELGELERDE VAR] | footer `social.ts` | — | Footer, `sameAs` | YENİDEN DOĞRULA |
| TikTok URL | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | Footer, `sameAs` | — |
| Kanal ve sayfa adlarının yeni markaya göre değişip değişmeyeceği | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | BRAND_SOT | — |

## 4. Ekip / Uzmanlık / E-E-A-T

> Hiçbir isim, unvan, eğitim veya sertifika tahmin edilmez. Kişilerin eğitim bilgileri birbirine karıştırılmaz.

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Kullanım | Freshness |
|---|---|---|---|---|---|---|
| **Erdinç Kılıç**: unvan ve eğitim | Odym. · **Odyometri mezunu** | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Ekip, Person schema | STATIC |
| Erdinç Kılıç: rol | İşletme sahibi. 2009'dan beri organizasyonda. İçerikleri ve gözden geçirilen işletme bilgilerini kontrol eden kişi ("inceleyen") | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Ekip, "İnceleyen" alanı | STATIC |
| Erdinç Kılıç: organizasyondaki süre | 2009'dan beri organizasyonun içinde | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Hakkımızda, ekip | STATIC |
| Erdinç Kılıç: işitme sektöründeki profesyonel deneyim | Yaklaşık 6 yıl | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Ekip, E-E-A-T | YENİDEN DOĞRULA (yıllık) |
| İki bilginin ilişkisi | **Çelişki değildir; farklı kavramlardır.** "Organizasyon içinde bulunma süresi" (2009'dan beri) ile "işitme sektöründeki profesyonel deneyim" (yaklaşık 6 yıl) ayrı yazılır. **"2009'dan beri işitme sektöründe" ya da benzeri bir ifade kesinlikle oluşturulmaz** | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Tüm içerik | STATIC |
| Erdinç Kılıç: diller | İngilizce | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | İletişim, ekip | STATIC |
| Erdinç Kılıç: sertifikalar | Bilirkişilik sertifikası mevcut; üretici eğitimleri mevcut. Sertifika adı, kurumu ve yılı: [KULLANICIDAN BİLGİ GEREKLİ] | [DOĞRULANDI] (varlık) | İşletme sahibi | 2026-10-07 | E-E-A-T | YENİDEN DOĞRULA |
| **Sunay Özgür**: unvan ve eğitim | Od. · **Odyoloji mezunu** | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Ekip, Person schema | STATIC |
| Sunay Özgür: deneyim | Yaklaşık 28 yıl | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Ekip | YENİDEN DOĞRULA (yıllık) |
| Sunay Özgür: diller | İngilizce, Almanca, Rusça | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | İletişim, ekip | STATIC |
| Sunay Özgür: eğitimler | Üretici eğitimleri mevcut. Ayrıntı: [KULLANICIDAN BİLGİ GEREKLİ] | [DOĞRULANDI] (varlık) | İşletme sahibi | 2026-10-07 | E-E-A-T | YENİDEN DOĞRULA |
| **Birsen Şahin**: unvan | Teknik servis personeli | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Ekip | STATIC |
| Birsen Şahin: deneyim | Yaklaşık 12 yıl | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Ekip | YENİDEN DOĞRULA (yıllık) |
| Birsen Şahin: eğitimler | Üretici eğitimleri mevcut. Ayrıntı: [KULLANICIDAN BİLGİ GEREKLİ] | [DOĞRULANDI] (varlık) | İşletme sahibi | 2026-10-07 | E-E-A-T | YENİDEN DOĞRULA |
| Hizmetleri yapan personel | Üç kişi de 40 hizmetin tamamını yapabiliyor (SERVICE_SOT §1.1) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | SERVICE_SOT | YENİDEN DOĞRULA (personel değişiminde) |
| Okul adları ve mezuniyet yılları | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | Profil | — |
| Ekip fotoğrafları ve yayın rızası (KVKK) | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | ASSET_SOT | — |
| Mevcut sitede isimli uzman | Yok (isimsiz "uzman görüşü" blokları var) | [MEVCUT BELGELERDE VAR] | Site analizi | — | E-E-A-T boşluğu | — |
| E-E-A-T için kullanılabilecek gerçek unsurlar | 2009'dan gelen işletme geçmişi; Darıca merkezinin Ağustos 2024'te açılması; ekip eğitimleri (yukarıda); üretici eğitimleri; Noah ve İŞİTSOFT altyapısı; deneme süreci; SGK işlemleri; takip süreci; yedek cihaz uygulaması; evde hizmet | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | E-E-A-T içerikleri | YENİDEN DOĞRULA |

## 5. Doğrulanması veya Kaldırılması Gereken İşletme İddiaları

| İddia | Kaynak | Durum | Not |
|---|---|---|---|
| "Türkiye geneli yaygın ağ" (güçlü yön) | COMPANY.md §13 | [KULLANICIDAN BİLGİ GEREKLİ] | Tek merkez gerçeğiyle çelişiyor. Doğrulanmazsa kaldırılacak. |
| "İşitme Kooperatifi", "Anlaşmalı İşitme Merkezi Ağı" (iş ortakları) | COMPANY.md §16 | [KULLANICIDAN BİLGİ GEREKLİ] | Ad ve belge gerekli. |
| "Yedek işitme cihazı" | COMPANY.md §12 | [DOĞRULANDI] (2026-10-07) | Hizmet veriliyor ve ücretsiz; onarım sürecinde yedek cihaz sağlanıyor (SERVICE_SOT H22, H32, §4). |
| "3D kalıp atölyesi" | COMPANY.md §12 | Hizmet: [DOĞRULANDI] · "Atölye" ifadesi: [KULLANICIDAN BİLGİ GEREKLİ] | 3D kulak kalıbı hizmeti veriliyor (H9). Kalıp üretiminin ve atölyenin merkezde olup olmadığı doğrulanmadı. |
| "Yetkili bayi / tüm markaların yetkili bayisiyiz" | Kullanıcı açıklaması ("bayilik anlaşması kalktı, bu yüzden yetkili bayi diyebiliriz") | **[DOĞRULAMA GEREKLİ]** | Hukuki ve kurumsal açıdan çelişkili olabilir. Kamuya açık iddia olarak kilitlenmez, kullanılmaz. |
| "Türkiye'nin en güvenilir / en iyi / tek / ilk / en ileri teknoloji" ve benzeri ifadeler | COMPANY.md §2, §5, §22; eski metinler | Kullanılmaz [DOĞRULANDI] | Doğrulanmamış üstünlük iddiası (BRAND_SOT §3). |

## 6. KVKK / Yasal

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Kullanım | Freshness |
|---|---|---|---|---|---|---|
| KVKK belgeleri | Büyük ölçüde mevcut: Aydınlatma Metni (KVK-AYD-04), Gizlilik Politikası (WEB-GIZ-05), Çerez Politikası (WEB-CRZ-06), İlgili Kişi Başvuru Formu (KVK-FRM-14) | [DOĞRULANDI] (büyük ölçüde mevcut) / içerik [MEVCUT BELGELERDE VAR] | İşletme sahibi; `src/data/kvkk/*` | 2026-10-07 | `/kvkk/*` | YENİDEN DOĞRULA (mevzuat değişiminde) |
| Yürürlük tarihi | 01.10.2026 | [MEVCUT BELGELERDE VAR] | `src/data/kvkk/common.ts` | — | KVKK sayfaları | YENİDEN DOĞRULA |
| KVKK metinlerindeki e-posta | avrasyaisitme@gmail.com geçiyor. Birincil e-posta eniyicihaz@gmail.com olduğundan güncellenmesi gerekiyor (sonraki uygulama fazı; hukuki metin olduğu için onaylı) | [MEVCUT BELGELERDE VAR] → güncelleme gerekli | `src/data/kvkk/common.ts` | — | KVKK sayfaları | — |
| Form için aydınlatma ve açık rıza metni, veri saklama süresi | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | CONVERSION_SOT §2 | — |
| Fotoğraf, video ve yorum kullanım izinlerinin alınma şekli | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | ASSET_SOT | — |
| Çerez onayı geçerlilik süresi | Kodda süresiz (`CONSENT_MAX_AGE_DAYS = null`) | [MEVCUT BELGELERDE VAR] | `src/lib/consent/config.ts` | — | GOOGLE_SOT | Tercih: [KULLANICIDAN BİLGİ GEREKLİ] |
| İade/cayma uygulamasının hukuki değerlendirmesi | — | [VERİ BEKLENİYOR] (ayrı hukuk audit'i) | — | — | SERVICE_SOT §2.14 | — |

## 7. Rakipler ve Farklılaşma

| Bilgi | Durum | Not |
|---|---|---|
| Bilinen yakın rakipler (yalnızca biliniyorsa) | [KULLANICIDAN BİLGİ GEREKLİ] | Rakip adı tahmin edilmez. |
| Kanıtlanabilir farklar ve güçlü hizmetler | Doğrulanmış operasyonel unsurlar: 40 hizmet, H7 ve H28 deneme yapısı, onarımda yedek cihaz, 18 markanın tamamında teknik servis, evde hizmet, Noah ve İŞİTSOFT altyapısı [DOĞRULANDI] | Bunlar "farklılaşma" iddiası olarak değil, olgu olarak kullanılır. "Tek", "ilk", "en iyi" türü ifadeye dönüştürülmez. |
| Danışanların tavsiye ederken en sık söylediği şey | [KULLANICIDAN BİLGİ GEREKLİ] | — |

## 8. İşletme Hedefleri

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Kullanım |
|---|---|---|---|---|---|
| Temel dönüşüm hedefleri | 1) Telefon, 2) WhatsApp, 3) İşitme cihazı satışı, 4) Fiziksel merkeze ziyaret | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | CONVERSION_SOT |
| 3 aylık hedef | Telefon ve mesajları artırmak | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | KPI |
| 1 yıllık hedef | Ayda 20–30 fiziksel hasta. **Minimum hedef: ayda 20 fiziksel merkez hastası** | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | KPI |
| 3 yıllık hedef | Kocaeli ve hedeflenen hizmet alanlarında arama sonuçlarında çok güçlü görünürlük | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | SEO/GEO stratejisi |
| Hedef bölge önceliği | Darıca > Gebze > Çayırova > Kocaeli > diğer hizmet alanları | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | LOCAL_SOT |
| Büyütülmek istenen hizmetler | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | Öncelik |
| COMPANY.md'deki eski marka hedefleri ("en kapsamlı bilgi platformu") | Üstünlük ifadesi içeriyor; Faz 1'de yeniden yazılacak | [MEVCUT BELGELERDE VAR] | COMPANY.md §22 | — | — |

## 9. Hedef Kitle ve Müşteri Profili

| Bilgi | Değer | Durum | Kaynak | Son doğrulama |
|---|---|---|---|---|
| Ana yaş grubu | **50+** | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Ana problem ifadesi | "**Duyuyorum ama anlamıyorum.**" | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Ana endişe | Fiyat / performans | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Kararı veren | İşitme cihazı kullanıcısı | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Geliş kaynakları | Tabela, tavsiye, Google (SERVICE_SOT §2.1) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Hedef kitle (eski belgede) | İşitme kaybı yaşayan yetişkinler (18+, 40+, 60+, 65+); aileleri; karar veren yakınlar; emekliler; SGK kullanıcıları; ilk kez cihaz kullananlar | [MEVCUT BELGELERDE VAR]. Güncel ana grup ve karar verici yukarıdaki doğrulanmış kayıtlardır | COMPANY.md §10, §18 | — |

## 10. Sık Sorular (gerçek kullanıcı dilinden)

| Bilgi | Değer | Durum | Kaynak | Son doğrulama |
|---|---|---|---|---|
| Gerçek SSS konuları (20+ soru, kullanıcı tarafından verildi) | Fiyat; en iyi marka; SGK; tinnitus; görünürlük; şarjlı / pilli; iki kulak; alışma süreci; garanti / servis; IIC / BTE; su dayanıklılığı; bakım; fiyat farkları; uygulama / telefon; takip; uyurken kullanım; cihazın ötmesi; kulaktan düşmesi; konuşmayı anlamama; basınç hissi; filtre / tıkanma | [DOĞRULANDI] (konu listesi) | İşletme sahibi | 2026-10-07 |
| Soruların kullanıcı ağzından tam metinleri | Bu SoT'a yalnızca konu listesi aktarıldı. Tam metinler ayrıca kaydedilmeli (Bilgi Merkezi içerik bankası) | [KULLANICIDAN BİLGİ GEREKLİ] (metinlerin SoT'a aktarımı) | — | — |
| Kullanım kuralı | Bu sorular ileride gerçek kullanıcı diliyle içerik üretmek için kullanılır. Cevaplar tıbbi iddia içermez | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Eski belgede listelenen konu başlıkları | COMPANY.md §21 | [MEVCUT BELGELERDE VAR] | — | — |

## 11. Bilgi Merkezi Konu Havuzu

| Bilgi | Değer | Durum | Kaynak | Son doğrulama |
|---|---|---|---|---|
| Temel konu kümeleri | İşitme kaybı; işitme testi; işitme cihazı fiyatları; işitme cihazının faydaları; işitme cihazı seçimi; işitme cihazı türleri; cihaz kullanımı; cihaz bakımı; teknik servis; SGK; pil; şarjlı / pilli cihaz; tinnitus; telefon / TV; gürültü; yaşlılarda işitme; çocuklarda işitme; cihaz sorunları; alışma süreci; garanti | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| İçerik kuralları | Thin content üretilmez. Yanlış bilgi veya sağlık iddiası oluşturulmaz | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Güvenilir kaynak adayları | SGK / SUT, WHO, EHIMA, EuroTrak, MarkeTrak | [DOĞRULANDI] (aday liste) | İşletme sahibi | 2026-10-07 |
| İçerik bankası girdisi | §10'daki gerçek SSS konuları; SERVICE_SOT §2 hasta süreci | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Danışanlara en sık anlatılan konular ve pratik öneriler (serbest metin) | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — |

## 12. MASTER STRATEGY ve Önceki SoT: Geçersiz Kılınan İfadeler (değişiklik kaydı)

> Aşağıdaki ifadeler **geçersizdir**; yalnızca sağ sütundaki ifade kullanılır. Plan dosyasındaki eski sürümler güvenlik kopyası olarak korunur.

| Geçersiz ifade | Geçerli ifade |
|---|---|
| "GBP doğrulanmadı / erişim bekleniyor / GBP var mı?" | "Mevcut GBP bulunmaktadır; mevcut profil ve bağlantılar ilerleyen audit fazında doğrulanacaktır." |
| "Eniyicihaz.com birincil marka" / ayrı "Eniyicihaz.com" Organization düğümü | Tek marka ve tek entity: Avrasya İşitme Cihazları. eniyicihaz.com yalnızca alan adı |
| İki telefonlu NAP; "0543 numarası doğrulanmalı" | Üç numara ve rolleri |
| "Gerçek merkez görselleri AI olabilir" | Gerçek merkez fotoğrafları işletmeye aittir (D1) |
| "2009'dan beri Darıca'da…" | Kuruluş 2009 (Afyon Merkez); Darıca merkezi Ağustos 2024 |
| **"Darıca merkezi yaklaşık 3 yıldır"** (B2, 2026-10-06) | **Darıca merkezi Ağustos 2024'te açıldı** (2026-10-07) |
| "2009'dan beri aynı ekip" | Ekip 2009'dan beri aynı değil; Erdinç Kılıç 2009'dan beri organizasyonda |
| "Yaklaşık 20 marka" / "18+ marka" | 18 marka |
| "Ücretsiz 7 günlük deneme" | "Cihazı satın alarak 7 güne kadar deneme; uygun bulunmaması halinde ücret iadesi." (H7 ücretsiz demo ayrı) |
| "avrasyaisitme@gmail.com birincil e-posta" | eniyicihaz@gmail.com (birincil ve form) |
| "Kullanılmaması gereken fotoğraf listesi" | Böyle bir liste yok |
| "Logo asset'i yok" / "kısa ad kuralı açık" | İki logo mevcut (A1); kısa ad kuralı (A2) |
