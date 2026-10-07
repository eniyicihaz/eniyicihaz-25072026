# BRAND_MIGRATION.md

> **Durum:** ACTIVE · Teknik belge · Faz 1 Commit 3 · Oluşturulma: 2026-10-07
> **Amaç:** Eski marka, wordmark ve geçersiz iddia referanslarının sitede nasıl tespit edilip dönüştürüleceğini tanımlar. Bir **iş listesi ve yöntem** belgesidir.
> **Kaynak sırası:** Marka gerçekleri ve kurallar SoT'tadır (BRAND_SOT §1–§5, BUSINESS_SOT §2, §3, §12, PRODUCT_SOT §1–§2, ASSET_SOT §1). Bu belge onları tekrar etmez. Çelişkide SoT geçerlidir.
> **Sınır:** Bu commit'te hiçbir kod, içerik, görsel, logo veya favicon değiştirilmez. Uygulama Faz 2 ve Faz 3'te, her adım ayrı onayla yapılır (MASTER_PLAN.md §7).

---

## 1. Hedef Durum (SoT'tan)

| Konu | Hedef | Kaynak |
|---|---|---|
| Marka | Tek marka "Avrasya İşitme Cihazları"; ilk kullanımdan sonra "Avrasya İşitme" | BRAND_SOT §1 |
| Alan adı | eniyicihaz.com yalnızca alan adı; marka veya entity adı değil | BRAND_SOT §1 |
| Logo | İki gerçek logo (yatay, kare); erişilebilir ad "Avrasya İşitme Cihazları" | ASSET_SOT §1 |
| Tagline | Yalnızca logonun parçası; metne, title'a, schema'ya taşınmaz. Yeni slogan üretilmez | BRAND_SOT §2 |
| Kuruluş / Darıca | Kuruluş ile Darıca merkezinin açılışı ayrı anlatılır | BUSINESS_SOT §2 |
| E-posta | Birincil ve form e-postası SoT'taki adres | BUSINESS_SOT §3 |
| Marka sayısı | "18 marka"; yalnızca bağlam gerektirdiğinde | PRODUCT_SOT §1 |

## 2. Yöntem: Önce Yeniden Tarama

- BRAND_SOT §4 ve §5'teki envanter **2026-10-06 tarihli bir anlık görüntüdür**. Sayıları sabit gerçek olarak kabul edilmez.
- **Faz 2 başlamadan önce `src/` ve ilgili veri dosyaları yeniden taranır.** Yeni tarama sonucu bu belgedeki iş listesine işlenir.
- Her bulgu üç sınıftan birine konur:
  1. **Kesin hatalı:** SoT ile açıkça çelişiyor.
  2. **Dolaylı sorunlu:** Tek başına yanlış değil ama yanlış izlenim yaratıyor (ör. kuruluş yılı ile Darıca aynı cümlede).
  3. **Doğrulama bekleyen:** Karar için SoT'ta bilgi eksik; kullanıcıdan teyit alınmadan değiştirilmez.
- Kod yorumları içerik değildir; düzeltme listesine girmez, ama yanıltıcıysa ayrıca not edilir.
- Değişiklik planı tarama sonucuyla birlikte onaya sunulur; onaysız toplu değiştirme yapılmaz.
- Bu tarama, Faz 2'nin sayfa bazlı içerik ve hero audit'inin bir parçasıdır (TEMPLATES.md §6). Marka/iddia düzeltmesi yapılan bir sayfanın içeriği bu nedenle otomatik olarak "korunmuş" sayılmaz.

## 3. İş Listesi

Konum bilgileri yeniden taramada güncellenir. "Faz" sütunu MASTER_PLAN.md §7'ye göredir.

### 3.1 Marka adı ve wordmark (Faz 3)
| # | Madde | Hedef | Not |
|---|---|---|---|
| M1 | Header wordmark (eski marka adı metin olarak sabit) | Yatay logo (masaüstü) / kare logo (dar alan) | Logo dosyalarının projeye alınması ayrı adım (ASSET_SOT §1) |
| M2 | Footer wordmark | Logo; koyu zeminde kontrast testi | Koyu zemin varyantı [VERİ BEKLENİYOR] |
| M3 | Logo bağlantılarının aria-label'ları | "Avrasya İşitme Cihazları" | BRAND_SOT §1 |
| M4 | Header tagline (üstünlük ifadesi içeren eski metin) | Kaldırılır; yerine yeni slogan yazılmaz | BRAND_SOT §2, MASTER_PLAN B3 |
| M5 | Footer tagline | Kalıp kalmayacağına karar verilir | BRAND_SOT §2 |
| M6 | Title ekleri (eski marka eki ve kısa ek karışık) | Gerektiğinde "\| Avrasya İşitme Cihazları"; mekanik değil | BRAND_SOT §1, QUALITY_GATES.md §1 |
| M7 | `og:site_name` | "Avrasya İşitme Cihazları" | — |
| M8 | Schema'daki işletme/organizasyon adı | "Avrasya İşitme Cihazları"; yapı SCHEMA_GRAPH kararına bağlı | SCHEMA_GRAPH.md |
| M9 | Metin içinde eski markanın marka gibi kullanımı | Tek marka diline çevrilir; alan adı yalnızca URL/e-posta bağlamında | — |
| M10 | Favicon seti (eski marka harfi) | Kare logodan türetilen ikon; türetme onayla | ASSET_SOT §1 |
| M11 | YouTube kullanıcı adı ve sosyal hesap adları | Değişip değişmeyeceği kullanıcı kararı | [KULLANICIDAN BİLGİ GEREKLİ] (BRAND_SOT §4) |

### 3.2 Kuruluş / Darıca / ekip ifadeleri (Faz 2)
| # | Madde | Hedef |
|---|---|---|
| D1 | Kuruluş yılını Darıca'daki varlıkla birleştiren ifadeler (hero, istatistik, meta description, site içi arama verisi dahil) | Kuruluş ve Darıca açılışı ayrı ifade edilir (BUSINESS_SOT §2) |
| D2 | "Aynı adres" ve "aynı ekip" kalıpları | Kaldırılır (ekip 2009'dan beri aynı değil: BUSINESS_SOT §2) |
| D3 | Kuruluş yılını Kocaeli'deki varlığa bağlayan istatistikler | Kaldırılır veya doğru bağlama çevrilir |
| D4 | "SGK anlaşması kuruluştan beri" anlamı taşıyan ifadeler | Doğrulama bekleyen (BRAND_SOT §5, C4–C5); teyit gelmeden değiştirilmez ve yeni yerde kullanılmaz |
| D5 | Kişi deneyimi ile organizasyondaki süreyi birleştiren her ifade | Ayrı kavramlar (BUSINESS_SOT §4) |
| D6 | Marka geçmişini anlatan ve Darıca iddiası içermeyen "2009" ifadeleri | Korunabilir; yeniden taramada bağlamı kontrol edilir |

Ayrıntılı önceki envanter: BRAND_SOT §5 (yalnızca referans; yeniden tarama esastır).

### 3.3 Marka sayısı (Faz 2)
| # | Madde | Hedef |
|---|---|---|
| N1 | "18+" biçimindeki marka sayısı metinleri | **Bağlama göre** ele alınır: marka sayısını anlatıyorsa "18" olarak düzeltilir; sayının hiç gerekmediği yerde kaldırılması değerlendirilir. Toplu bul-değiştir yapılmaz |
| N2 | "Yaklaşık 20" gibi yuvarlanmış sayılar | "18" (PRODUCT_SOT §1) |
| N3 | Title/meta'ya eklenmiş marka sayısı | Mekanik eklenmişse kaldırılır (QUALITY_GATES.md §1) |

### 3.4 E-posta (Faz 2, hukuki metin onayıyla)
| # | Madde | Hedef |
|---|---|---|
| E1 | KVKK metinlerinde geçen eski e-posta adresi | SoT'taki birincil adres (BUSINESS_SOT §3, §6). KVKK hukuki metin olduğu için değişiklik ayrı onayla |
| E2 | Diğer yerlerde eski e-posta | Yeniden taramada kontrol |

### 3.5 İddialar ve dil (Faz 2–5)
| # | Madde | Hedef |
|---|---|---|
| C1 | Üstünlük ifadeleri (BRAND_SOT §3 listesi) | Kaldırılır |
| C2 | "Yetkili bayi" ve benzeri yetki iddiaları | **Bu belge karar vermez.** Durum [DOĞRULAMA GEREKLİ] (PRODUCT_SOT §1). Sitede bulunursa "doğrulama bekleyen" sınıfına alınır ve karar kullanıcıya sunulur |
| C3 | Deneme dili ("ücretsiz" ile nitelenmiş deneme ifadeleri) | SERVICE_SOT §1.5 kanonik ifadesi; merkezdeki demo ayrı anlatılır |
| C4 | "Yaygın ağ" ifadesi ve ilgili sayfa | Doğrulanmadan kullanılmaz (BUSINESS_SOT §5) |
| C5 | "Klinik" terimi | "Merkez" (CONTENT_ARCHITECTURE.md §9) |
| C6 | NuEar / Starkey adlandırması | Doğrulama bekleyen (PRODUCT_SOT §2); karar verilmez |
| C7 | Görsele gömülü fiyat (pil kampanyası hero görseli) | Metin katmanına alınması değerlendirilir; kampanya bitince kaldırılır (PRODUCT_SOT §5) |

### 3.6 NAP ve dış kayıtlar (Faz 3 audit)
| # | Madde | Hedef |
|---|---|---|
| G1 | Maps'te görünen ad | GBP/NAP audit'inde incelenir; **değiştirme kararı verilmez** (LOCAL_SOT §1, GOOGLE_SOT §1) |
| G2 | Telefon numaralarının sabit kodlanmış kullanımı | Tek kaynak; üç numara ve rolleri (CONVERSION_SOT §1) |

## 4. Uygulama Kuralları (ileriki fazlar için)

- Her madde grubu ayrı plan ve onayla uygulanır; marka geçişi tek seferde ve onaysız yapılmaz.
- Değişiklikten önce ve sonra ilgili desenler için tarama raporu alınır.
- Title değişiklikleri sayfa sayfa niyete göre yazılır; toplu sonek değişimi yapılmaz.
- Logo entegrasyonunda performans (boyut, width/height) ve koyu zemin kontrastı test edilir (IMAGE_GUIDELINES.md §8).
- Her uygulama QUALITY_GATES.md §12 kapılarından geçer; build ve görsel kontrol yapılır.
- Production'a çıkış ayrı ve açık onay gerektirir.

## 5. İlgili Belgeler
- BRAND_SOT §4–§5: önceki envanter (anlık görüntü).
- SCHEMA_GRAPH.md: schema adı ve yapısı.
- IMAGE_GUIDELINES.md §8: logo ve favicon prensipleri.
- DOC_MIGRATION_MAP.md: belge tarafındaki marka dönüşümü.
