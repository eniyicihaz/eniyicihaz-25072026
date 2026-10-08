# SCHEMA_GRAPH.md

> **Durum:** ACTIVE · Teknik karar belgesi · Faz 1 Commit 3 · Oluşturulma: 2026-10-07
> **Amaç:** Yapısal veri (schema) için seçenekleri, değerlendirme ve doğrulama kriterlerini belgelemek. **Varlık ve tip modeli bu belgede kilitlenmez.**
> **Kaynak sırası:** İşletme gerçekleri SoT'tadır (LOCAL_SOT §1, §3; BUSINESS_SOT §1–§3; CONVERSION_SOT §1). Çelişkide SoT geçerlidir.
> **Sınır:** Schema kodu yazılmaz, mevcut schema değiştirilmez. Karar Faz 3 uygulamasından önce, ayrı onayla verilir (MASTER_PLAN.md §4, §7).

---

## 1. Karar Durumu

| Konu | Durum |
|---|---|
| İşletme varlık modeli (tek düğüm mü, organizasyon + yerel işletme ayrımı mı) | **Karar bekliyor** |
| İşletme tipi (MedicalBusiness, başka bir LocalBusiness alt tipi veya genel LocalBusiness) | **Karar bekliyor** |
| Yerel sayfalarda (Gebze, Çayırova, Kocaeli) schema kullanımı | **Karar bekliyor**; sınırlar §3'te sabit |
| Sayfa düzeyi tipler (WebPage, BreadcrumbList vb.) | Seçenekler §5'te; kesin eşleme Faz 3 |

**Karar yöntemi:** Faz 3'ten önce şu üçü birlikte değerlendirilir:
1. Schema.org tip tanımları ve hiyerarşisi (güncel sürüm).
2. Google'ın güncel structured data yönergeleri (LocalBusiness, Organization, Breadcrumb, FAQ ve genel yönergeler).
3. Gerçek işletme modeli: tek fiziksel merkez Darıca, daha geniş evde hizmet alanı (LOCAL_SOT §1, §3).

Karar DECISIONS.md'ye işlenir; ardından bu belge "karar verildi" bölümüyle güncellenir.

## 2. Gerçek İşletme Modeli (değişmez girdiler)

| Girdi | Kaynak |
|---|---|
| Tek işletme entity'si: Avrasya İşitme Cihazları | BRAND_SOT §1 |
| eniyicihaz.com bir web sitesi alan adıdır; ayrı organizasyon/entity değildir | BRAND_SOT §1, BUSINESS_SOT §12 |
| Tek fiziksel merkez Darıca; adres, koordinat, saatler | LOCAL_SOT §1 (adres, koordinat ve saatler NAP audit'inde YENİDEN DOĞRULA) |
| Ana telefon ve diğer iki numaranın rolleri | CONVERSION_SOT §1; schema/NAP/GBP telefon biçimi [VERİ BEKLENİYOR] (LOCAL_SOT §1) |
| Kuruluş yılı | BUSINESS_SOT §2 |
| Evde hizmet alanı fiziksel merkezden geniştir | LOCAL_SOT §3, SERVICE_SOT H16 |
| Gebze, Çayırova ve diğer ilçelerde şube yoktur | LOCAL_SOT §1 |
| Sosyal profiller (`sameAs` adayları) | BUSINESS_SOT §3 (URL'ler YENİDEN DOĞRULA; TikTok URL [KULLANICIDAN BİLGİ GEREKLİ]) |
| Logo | ASSET_SOT §1 (projeye alınması Faz 3) |

## 3. Değişmeyen İlkeler (karar ne olursa olsun)

1. **Tek işletme entity'si.** Eski markayla ayrı bir organizasyon düğümü oluşturulmaz.
2. **Şube izlenimi yok.** Gebze, Çayırova veya başka bir ilçe için ayrı adresli/ayrı NAP'lı işletme düğümü oluşturulmaz. Yerel sayfalar, varsa, tek işletme düğümüne referans verir.
3. **Fiyat yok.** Fiyat, para birimi, Offer veya "başlangıç fiyatı" alanı eklenmez; fiyat yayınlama kararı verilmedi (PRODUCT_SOT §4).
4. **Sahte rating/review yok.** AggregateRating veya Review, uydurma ya da site içinde seçilmiş yorumlarla üretilmez.
5. **Yalnızca görünür ve doğrulanmış bilgi.** Schema'daki her alan sayfada kullanıcıya görünür ve SoT'ta [DOĞRULANDI] durumundadır. [DOĞRULAMA GEREKLİ], [KULLANICIDAN BİLGİ GEREKLİ] veya resmî doğrulama bekleyen bilgi schema'ya girmez (QUALITY_GATES.md §4, §12.8).
6. **Person yalnızca yayın rızasıyla.** Ekip bilgisi rıza tamamlanmadan Person olarak işaretlenmez (EEAT_AND_EDITORIAL.md §3).
7. **Yetki iddiası yok.** Marka ilişkisi (ör. yetkili bayi) schema'da ifade edilmez; durum [DOĞRULAMA GEREKLİ] (PRODUCT_SOT §1).
8. **Tagline schema'ya taşınmaz** (BRAND_SOT §2).

## 4. İşletme Varlığı: Seçenekler

### 4.1 Model seçenekleri
| Seçenek | Yapı | Artı | Eksi / risk |
|---|---|---|---|
| A. Tek yerel işletme düğümü | İşletme tek düğüm (LocalBusiness alt tipi); WebSite yayıncısı bu düğüm | Gerçek modele en yakın (tek merkez); entity karışıklığı en düşük | Organizasyon düzeyindeki bilgiler (logo, sosyal profiller) aynı düğümde toplanır; tip seçimi kritik olur |
| B. Organizasyon + yerel işletme | Organization düğümü + ona bağlı tek yerel işletme düğümü (Darıca) | Kurum ile fiziksel konum ayrımı netleşir; ileride ikinci konum açılırsa genişler | Tek konumlu işletmede gereksiz karmaşıklık; iki düğümün ad/URL tutarlılığı ek denetim ister; yanlış kurulursa iki ayrı işletme izlenimi |
| C. Mevcut yapının düzeltilmesi | Mevcut düğümler korunur, adlar ve bağlantılar düzeltilir | En küçük kod değişikliği | Mevcut yapı audit edilmeden kabul edilemez (§6) |

### 4.2 Tip seçenekleri
| Tip | Artı | Eksi / doğrulanacak |
|---|---|---|
| MedicalBusiness | İşitme sağlığı hizmetini yansıtır; LocalBusiness alt tipidir | Tıbbi hizmet izlenimi kapsamı; GBP birincil kategorisiyle uyumu audit'te kontrol edilir |
| MedicalClinic | Daha spesifik | "Klinik" ifadesi terminolojiyle çelişir (CONTENT_ARCHITECTURE.md §9); hekim hizmeti izlenimi riski |
| Store / ürün satışı odaklı alt tip | Cihaz satışını yansıtır | Test, ayar, servis gibi hizmet ağırlığını eksik anlatır |
| Genel LocalBusiness | En düşük yanlış sınıflandırma riski | Daha az anlamsal bilgi |

Değerlendirme kriterleri:
- GBP birincil kategorisiyle tutarlılık (GBP audit sonucu; GOOGLE_SOT §3).
- Schema.org tanımının işletmenin gerçekte yaptığı işi doğru anlatması (SERVICE_SOT §1).
- Google'ın ilgili rich result türü için zorunlu ve önerilen alanların doğrulanmış verilerle karşılanabilmesi.
- Terminoloji ve iddia kurallarıyla çelişmemesi (BRAND_SOT §3).

### 4.3 Hizmet alanı
- Fiziksel adres yalnızca Darıca merkezidir.
- Evde hizmet alanı ve yerel SEO kapsamı ayrı bilgilerdir (LOCAL_SEO_PLAYBOOK.md §2.2). Hizmet alanının schema'da ifade biçimi (ör. `areaServed`) kararla birlikte belirlenir; ilçe listesi şube izlenimi verecek biçimde kullanılmaz.

## 5. Sayfa Düzeyi Tipler (seçenekler)

| Tip | Ne zaman | Koşul |
|---|---|---|
| WebSite | Site geneli | Yayıncı tek işletme entity'si |
| WebPage (ve uygun alt tipleri) | Her sayfa | İçerik görünür olmalı |
| BreadcrumbList | Her sayfa | Görünür breadcrumb ile birebir (QUALITY_GATES.md §4) |
| FAQPage | Yalnızca görünür SSS bloğu olan sayfa | Görünür soru-cevapla birebir; zengin sonuç beklentisi Google'ın güncel kısıtlarına göre değerlendirilir |
| Article / MedicalWebPage | Rehber ve bilgi makaleleri | Görünür inceleme bilgisi ve tarih varsa |
| Service | Merkez hizmet sayfaları | Fiyatsız; hizmet bilgisi SERVICE_SOT §1 ile uyumlu |
| Person | Ekip | Yalnızca yayın rızasıyla |
| ItemList | Listeleme sayfaları | Görünür listeyle uyumlu |
| Product / Offer / AggregateRating / Review | — | Kullanılmaz (§3) |

## 6. Mevcut Durum (audit gerekli)

- Mevcut schema, eski marka adını kullanan ayrı bir organizasyon düğümü ve bazı sayfalarda yerel işletme düğümü içeriyor [MEVCUT BELGELERDE VAR] (BRAND_SOT §4, ASSET_SOT §3). Bu bilgi Faz 0 öncesi taramaya dayanır.
- Faz 3'ten önce mevcut schema **yeniden taranır**: hangi sayfada hangi tip, alan değerleri, yerel sayfalardaki kullanım, `image` ve `description` tutarlılığı.
- Sonuçlar bu belgeye "Mevcut durum (yeniden tarama)" olarak eklenir; sayılar o taramaya dayanır.

## 7. Doğrulama Adımları (uygulamadan önce ve sonra)

**Uygulamadan önce**
1. §1'deki karar verilmiş ve DECISIONS.md'ye işlenmiş.
2. Kullanılacak her alan SoT'ta [DOĞRULANDI] ve sayfada görünür.
3. NAP ve telefon biçimi NAP/GBP audit'iyle netleşmiş.
4. Önerilen JSON-LD yapısı örnek sayfa tipleri için yazılı olarak incelenmiş (bu belgeye eklenir).

**Uygulamadan sonra**
1. Rich Results Test ve Schema Markup Validator ile her sayfa tipi test edilir.
2. Hata ve uyarılar giderilmeden release yapılmaz.
3. Görünür içerik ↔ schema tutarlılığı örnek sayfalarda manuel kontrol edilir.
4. Search Console'daki yapısal veri raporları (erişim sağlanınca) izlenir.

## 8. İlgili Belgeler
- QUALITY_GATES.md §4, §12.8: schema kapıları.
- LOCAL_SEO_PLAYBOOK.md §1, §10: tek merkez modeli.
- BRAND_MIGRATION.md M8: schema adı.
- TEMPLATES.md: sayfa tipleri.
