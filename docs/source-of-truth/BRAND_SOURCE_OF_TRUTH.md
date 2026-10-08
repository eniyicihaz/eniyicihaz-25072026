# BRAND_SOURCE_OF_TRUTH.md

> **Durum:** ACTIVE · Faz 0 · Oluşturulma: 2026-10-06 · Son güncelleme: 2026-10-07 (Faz 0 son bilgi aktarımı)
> **Amaç:** Bu dosya şunların tek kaynağıdır:
> - Marka adı kuralları
> - İddia politikası ve yasaklı ifadeler
> - Eski marka referanslarının envanteri
> - Hatalı 2009/Darıca metinleri
> - Renk, yazı tipi ve tasarım tercihleri
>
> Logo dosyaları burada değil, **ASSET_SOURCE_OF_TRUTH**'ta yer alır.

**Kurallar** (tam metin: `BUSINESS_SOURCE_OF_TRUTH.md` §0)
- **Etiketler:** [DOĞRULANDI] · [MEVCUT BELGELERDE VAR] · [KULLANICIDAN BİLGİ GEREKLİ] · [ERİŞİM GEREKLİ] · [MEVCUT — AUDIT GEREKLİ] · [TIME-SENSITIVE] · [VERİ BEKLENİYOR] · [DOĞRULAMA GEREKLİ] · [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] · [ESKİ / GEÇERSİZ]
- **Çatışma hiyerarşisi:** Kullanıcının güncel doğrulaması > SoT'taki [DOĞRULANDI] > MASTER STRATEGY > DECISIONS > diğer strateji/teknik belgeler > eski dokümanlar > koddan çıkarılan varsayım. Kod veya eski içerik, doğrulanmış bilgiyi geçersiz kılamaz.
- **Güvenlik:** Şifre, API key, token, secret, OAuth bilgisi ve kişisel giriş bilgisi bu dosyaya yazılmaz.

---

## 1. Marka Adı Kuralları

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Kullanım | Freshness |
|---|---|---|---|---|---|---|
| Resmî marka | Avrasya İşitme Cihazları | [DOĞRULANDI] | İşletme sahibi (K1) | 2026-10-06 | Entity, Schema, NAP, GBP, title, logo erişilebilir adı | STATIC |
| İlk/resmî kullanım | Bir metinde markanın ilk geçtiği yerde tam ad: "Avrasya İşitme Cihazları" | [DOĞRULANDI] | A2 | 2026-10-06 | Tüm içerik | STATIC |
| Doğal kısa kullanım | "Avrasya İşitme" (ilk kullanımdan sonra) | [DOĞRULANDI] | A2 | 2026-10-06 | Gövde metni | STATIC |
| Schema, NAP ve resmî entity adı | Her zaman "Avrasya İşitme Cihazları" | [DOĞRULANDI] | A2 | 2026-10-06 | Schema, NAP | STATIC |
| Alan adı | eniyicihaz.com. Marka adı olarak kullanılmaz | [DOĞRULANDI] | K1 | 2026-10-06 | URL | STATIC |
| Title eki | Gerektiğinde "\| Avrasya İşitme Cihazları". Her title'a mekanik olarak eklenmez | [DOĞRULANDI] | K1 | 2026-10-06 | Title | STATIC |
| Marka tekrarı | Keyword stuffing'e dönüşmez | [DOĞRULANDI] | A2 | 2026-10-06 | Tüm içerik | STATIC |
| Logo erişilebilir adı (alt / aria-label) | "Avrasya İşitme Cihazları" | [DOĞRULANDI] | A1 | 2026-10-06 | Header, footer | STATIC |
| Eski marka | "Eniyicihaz.com", "EniyiCihaz", "ENİYİCİHAZ" ana marka olarak kullanılmaz | [DOĞRULANDI] | K1 / B3 | 2026-10-06 | Brand migration | STATIC |

## 2. Slogan / Tagline

| Bilgi | Değer | Durum | Kaynak | Not |
|---|---|---|---|---|
| Logo içindeki tagline | "İşitme Sağlığı İçin Güvenilir Destek" | [DOĞRULANDI] (logo asset'inin parçası) | Logo dosyaları | Yalnızca logonun parçası olarak kalır. Site metnine, title'a, schema'ya, meta description'a veya ayrı slogana **taşınmaz**. |
| Eski header tagline'ı | "İşitme Sağlığınız İçin En İyi Çözümler" | **Kullanılmayacak** [DOĞRULANDI] | `src/components/header/Header/header.data.ts:287` | "En iyi" kanıtsız üstünlük iddiası. Brand migration'da kaldırılacak. |
| Footer tagline'ı | "2009'dan beri güvenilir işitme sağlığı hizmeti" | [MEVCUT BELGELERDE VAR] | `src/components/footer/Footer/data/company.ts` | Darıca ile ilgili bir iddia içermiyor. Kalıp kalmayacağına brand migration'da karar verilecek. |
| Yeni slogan | Üretilmeyecek | [DOĞRULANDI] | B3 | — |

## 3. İddia Politikası ve Yasaklı İfadeler

| Kural | Durum | Kaynak |
|---|---|---|
| Kanıtsız üstünlük iddiası kullanılmaz: "en iyi", "en iyi cihaz", "Türkiye'nin en güvenilir", "en kapsamlı", "en premium", "1 numara", "en büyük", "dünyanın en iyisi", "kesin çözüm", "%100 başarı garantisi", "mucize sonuç" | [DOĞRULANDI] | İşletme sahibi + PRINCIPLES.md §5 |
| Tıbbi teşhis veya tedavi vaadi verilmez | [MEVCUT BELGELERDE VAR] | PRINCIPLES.md §5, §11 |
| Rakip kötülenmez | [MEVCUT BELGELERDE VAR] | PRINCIPLES.md §5, §11 |
| Sayısal iddialar (danışan sayısı, oranlar vb.) kayıtla doğrulanmadan yazılmaz | [DOĞRULANDI] | Strateji |
| "Orijinal / yetkili" ifadesi yalnızca yetki belgesi olan markalarda kullanılır | [DOĞRULANDI] | Strateji. Belgeler: PRODUCT_SOT |
| "Ücretsiz" yalnızca gerçekten ücretsiz olan hizmetlerde kullanılır | [DOĞRULANDI] | Strateji. Hizmetler: SERVICE_SOT |
| Şube olmayan yer şube gibi gösterilmez | [DOĞRULANDI] | K7 |
| Uydurma yorum, istatistik, ödül veya sertifika kullanılmaz | [MEVCUT BELGELERDE VAR] | PRINCIPLES.md §7, §11 |
| Doğrulama olmadan kullanılmayacak üstünlük ve otorite ifadeleri: "tek firma", "Türkiye'deki tek merkez", "Türkiye'de ilk / tek", "en ileri teknoloji", "tek biz yapıyoruz" | [DOĞRULANDI] (İşletme sahibi, 2026-10-07) | Son bilgi aktarımı |
| "Yetkili bayi / tüm markaların yetkili bayisiyiz" | **[DOĞRULAMA GEREKLİ]**. Kamuya açık iddia olarak kullanılmaz (PRODUCT_SOT §1) | İşletme sahibi, 2026-10-07 |
| Teknik servis kapsamı ("Türkiye'de satılan tüm cihazlara servis sağlanabilir") yalnızca olgu olarak anlatılır; üstünlük iddiasına dönüştürülmez | [DOĞRULANDI] (İşletme sahibi, 2026-10-07) | SERVICE_SOT §4 |
| Marka sayısı her zaman "18 marka"dır. "18+" ve "yaklaşık 20" kullanılmaz | [DOĞRULANDI] (İşletme sahibi, 2026-10-07) | PRODUCT_SOT §1 |
| "Ücretsiz deneme" ifadesi kullanılmaz. Kanonik ifade: "Cihazı satın alarak 7 güne kadar deneme; uygun bulunmaması halinde ücret iadesi." | [DOĞRULANDI] (İşletme sahibi, 2026-10-07) | SERVICE_SOT §1.5 |
| SGK tutarları ve prosedürleri resmî kaynakla doğrulanmadan kalıcı bilgi gibi yazılmaz | [DOĞRULANDI] (kural, 2026-10-07) | SERVICE_SOT §3 |
| İşletme sahibinin ek olarak istemediği başka ifadeler | [KULLANICIDAN BİLGİ GEREKLİ] | — |

## 4. Eski Marka Referansları Envanteri (değiştirilmedi; brand migration için)

| Desen / alan | Bulunduğu yer | Sayım / not | Durum |
|---|---|---|---|
| "EniyiCihaz" | `src/` içinde | **104 dosya** (çoğu title eki) | [MEVCUT BELGELERDE VAR] |
| "ENİYİ" + "CİHAZ" wordmark | `src/components/header/Header/molecules/Logo/Logo.astro:13`, `src/components/footer/Footer/atoms/FooterBrand/FooterBrand.astro:15-16` | Metin olarak sabit kodlanmış | [MEVCUT BELGELERDE VAR] |
| `name: "ENİYİCİHAZ"` | `src/components/header/Header/header.data.ts:286` | Görünen metni belirlemiyor | [MEVCUT BELGELERDE VAR] |
| aria-label "EniyiCihaz ana sayfa" | `Logo.astro:11`, `FooterBrand.astro:13` | 2 yer | [MEVCUT BELGELERDE VAR] |
| "Eniyicihaz.com" / "Eniyicihaz" | `src/` | 6 / 6 dosya; Organization schema `name`, `og:site_name`, footer `company.brand` | [MEVCUT BELGELERDE VAR] |
| Favicon "E" harfi | `public/favicon.svg`, `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` | Eski markayı çağrıştırıyor | [MEVCUT BELGELERDE VAR] |
| YouTube kullanıcı adı `@EniyiCihaz` | Footer `social.ts` | Dış hesap; değişip değişmeyeceği sorulacak | [KULLANICIDAN BİLGİ GEREKLİ] |
| Kök belgelerde "Eniyicihaz.com birincil marka" | COMPANY.md §1–3, PRINCIPLES.md §2, SEARCH_STRATEGY.md §4–5 | Faz 1'de güncellenecek | [MEVCUT BELGELERDE VAR] |

## 5. Hatalı 2009 / Darıca İfadeleri (değiştirilmedi; sonraki uygulama fazında düzeltilecek)

> **Kural (güncel, 2026-10-07):**
> - 2009 kuruluş yılıdır (Afyon Merkez). Darıca merkezi **Ağustos 2024**'te açılmıştır. Ekip 2009'dan beri aynı ekip değildir.
> - Yasak ifadeler: "2009'dan beri Darıca'da", "2009'dan beri Darıca", "aynı adreste", "Darıca'da yıllardır", "2009'dan beri aynı ekip", "2009'dan beri işitme sektöründe" (Erdinç Kılıç için: organizasyonda 2009'dan beri, işitme sektöründe profesyonel deneyim yaklaşık 6 yıl; farklı kavramlar).

> **Kesin envanter (yeniden tarama: 2026-10-06).** Tarama kapsamı:
> - `src/` içindeki tüm "2009" geçişleri: 20 dosyada 28 satır; bunların 5'i kod yorumu.
> - "aynı adres", "aynı ekip" ve "yıllardır" ifadeleri.
>
> **Toplam 17 ifade, 15 dosyada.** Durumlar 2026-10-07 işletme sahibi bilgisiyle güncellendi:
> - **Kesin hatalı: 12.** A1–A9, ayrıca C1–C3 (2026-10-07 itibarıyla kesin hatalı)
> - **B:** Dolaylı yanlış izlenim (3). B2 ve B3'teki "aynı ekip" ifadesi de kesin hatalı
> - **Hâlâ doğrulama gerektiren: 2.** C4, C5 ("2009'dan beri SGK anlaşmalı")
>
> Sorunsuz kabul edilen geçişler en altta listelenmiştir.

### A. Kesin hatalı: "2009'dan beri Darıca'da" veya "aynı adreste" (9 ifade, 7 dosya)
| # | Dosya:satır | Mevcut ifade | Sorun |
|---|---|---|---|
| A1 | `src/data/darica/hero.ts:15` | "Avrasya İşitme Cihazları, 2009'dan beri Darıca'da SGK anlaşmalı bir işitme merkezi olarak hizmet veriyor…" | Darıca'da 2009'dan beri değil |
| A2 | `src/data/darica/hero.ts:19` | İstatistik: "2009'dan Beri" + "Darıca'da Hizmet" | Aynı |
| A3 | `src/data/hakkimizda/hero.ts:9` | "…2009'dan bu yana Darıca'da işitme değerlendirmesi…" | Aynı |
| A4 | `src/data/hakkimizda/hero.ts:13` | İstatistik: "2009'dan Beri" + "Darıca'da Hizmet" | Aynı |
| A5 | `src/pages/hakkimizda.astro:108` (meta description) | "…2009'dan beri Darıca'da SGK anlaşmalı işitme merkezidir…" | Aynı |
| A6 | `src/data/search/index.ts:30` (site içi arama) | "…2009'dan beri Darıca'da SGK anlaşmalı işitme merkezidir…" | Aynı |
| A7 | `src/data/evde-isitme-cihazi-hizmeti/intro.ts:11` | İstatistik: "2009'dan Beri" + "Darıca'da Hizmet" | Aynı |
| A8 | `src/data/home/center-gallery.ts:17` | "2009'dan beri aynı ekiple, aynı adreste hizmet veriyoruz." | "Aynı adres" yanlış; "aynı ekip" doğrulanmamış (Q1.5) |
| A9 | `src/data/ucretsiz-isitme-testi/local.ts:32` | "Avrasya İşitme 2009'dan beri aynı ekiple ve aynı adreste hizmet veriyor…" | Aynı |

### B. Dolaylı yanlış izlenim (3 ifade, 3 dosya)
| # | Dosya:satır | Mevcut ifade | Sorun |
|---|---|---|---|
| B1 | `src/data/hakkimizda/intro.ts:10` | "…Darıca'da hizmet veren… 2009'dan bu yana… hizmetleri sunuyoruz." | Darıca ile 2009 aynı cümlede; 2009'dan beri Darıca'da izlenimi |
| B2 | `src/data/darica/why-us.ts:10` | Başlık "2009'dan Beri" + "Darıca'da yıllardır aynı ekiple hizmet veriyoruz." | Aynı izlenim; "aynı ekip" doğrulanmamış (Q1.5) |
| B3 | `src/components/trust/Trust/trust.data.ts:18–20` | Başlık "2009'dan beri" + "Avrasya İşitme, aynı ekiple, Darıca, Kocaeli'deki merkezimizde yıllardır hizmet veriyor." | Aynı izlenim; "aynı ekip" doğrulanmamış (Q1.5) |

### C. Başlangıçta doğrulama gerektiren ifadeler (5 ifade, 5 dosya). C1–C3 artık kesin hatalı; C4–C5 açık
| # | Dosya:satır | Mevcut ifade | Durum (2026-10-07) |
|---|---|---|---|
| C1 | `src/data/kocaeli/hero.ts:50` | İstatistik: "2009'dan Beri" + "Kocaeli'de Hizmet" | **Kesin hatalı** [DOĞRULANDI]: Kuruluş Afyon Merkez, Kocaeli'deki merkez Ağustos 2024 |
| C2 | `src/data/isitme-cihazi-fiyatlari/hero.ts:31` | Etiket: "2009'dan beri aynı ekip" | **Kesin hatalı** [DOĞRULANDI]: Ekip 2009'dan beri aynı değil |
| C3 | `src/data/isitme-cihazlari/hero.ts:20` | Etiket: "2009'dan beri aynı ekip" | **Kesin hatalı** [DOĞRULANDI]: Ekip 2009'dan beri aynı değil |
| C4 | `src/data/gebze/copy-blocks.ts:24` | "2009'dan beri SGK anlaşmalı, odyolog ve odyometristlerden oluşan bir ekiple…" | Q1.8: SGK anlaşması 2009'dan beri mi? Ekip yapısı (Q6.1) |
| C5 | `src/data/cayirova/copy-blocks.ts:20` | "2009'dan beri SGK anlaşmalı, odyolog ve odyometristlerden oluşan bir ekiple…" | Q1.8, Q6.1 |

### Sorunsuz kabul edilen "2009" geçişleri (marka geçmişi; Darıca ile ilgili iddia yok)
- `src/components/footer/Footer/data/company.ts:7`: "2009'dan beri güvenilir işitme sağlığı hizmeti"
- `src/components/hero/Hero/hero.data.ts:257`: "2009'dan beri" / "Güvenle yanınızdayız"
- `src/components/trust/Trust/trust.data.ts:37`: "…2009'dan beri süregelen aynı güvenle devam ediyor."
- `src/data/cayirova/hero.ts:27`: "2009'dan Beri" / "Güvenilir Hizmet"
- `src/data/contact/hero.ts:49`: "2009'dan Beri Hizmetinizdeyiz"
- `src/data/hakkimizda/intro.ts:14`: "2009" / "Hizmet Başlangıcı"
- Kod yorumları (5 satır; içerik değildir, düzeltme listesine girmez): `HeroEyebrow.astro:3`, `hero/Hero/hero.data.ts:6`, `darica/why-us.ts:2`, `gebze/copy-blocks.ts:15`, `hakkimizda/hero.ts:2`

> **Sağlama:** 28 "2009" satırı = A'da 9 + B'de 3 (B3'ün "2009" satırı `trust.data.ts:18`) + C'de 5 + sorunsuz içerik 6 + kod yorumu 5.

## 6. Renk / Yazı Tipi / Görsel Kimlik

| Bilgi | Değer | Durum | Kaynak | Not |
|---|---|---|---|---|
| Sitenin mevcut ana rengi | `--color-primary: #2563eb` | [MEVCUT BELGELERDE VAR] | `src/ds/styles/base/variables.css:5` | Logo renkleriyle eşleşmiyor |
| Logo renkleri | Görsel olarak lacivert, mavi, turkuaz ve gri | [MEVCUT BELGELERDE VAR] (görsel gözlem) | Logo dosyaları | **Hex değerleri yok.** Uydurulmaz. |
| Kurumsal renk kodları / marka kılavuzu | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | Logodan ölçüm yapılacaksa ayrıca onay gerekir |
| Site yazı tipi | Inter (self-hosted) | [MEVCUT BELGELERDE VAR] | `public/fonts`, `variables.css` | — |
| Logodaki yazı tipinin adı | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — |
| Gövde metni / dokunma hedefi | 17 px temel hedef / en az 48×48 px | [DOĞRULANDI] | K5 | Kodda şu an 16 px ve 44 px |

## 7. Tasarım Tercihleri (işletme sahibi)

| Bilgi | Değer | Durum | Kaynak | Son doğrulama |
|---|---|---|---|---|
| Tasarım hedefi | **Premium** | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Referans alınabilecek siteler | phonak.com, hearingtracker.com. **Görsel tasarım kopyalanmaz**; yalnızca kalite ve yaklaşım referansı | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Tercihler | Mobile-first; güçlü CTA; erişilebilirlik; en az 48×48 px dokunma hedefi; yaklaşık 17 px gövde metni; modern ve premium görünüm; gerektiğinde kontrollü animasyon | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Mobilde öncelikli 3 eylem | Ara, Yol tarifi, Mesaj (CONVERSION_SOT §5) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Beğenilmeyen siteler / kesinlikle istenmeyen tasarım biçimleri | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — |
| Site renklerinin logo renklerine geçmesi | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — |

> Tasarım tercihleri, erişilebilirlik (48 px / 17 px, kontrast), performans ve Design System kurallarıyla birlikte değerlendirilir.
