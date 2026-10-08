# ASSET_SOURCE_OF_TRUTH.md

> **Durum:** ACTIVE · Faz 0 · Oluşturulma: 2026-10-06 · Son güncelleme: 2026-10-07 (Faz 0 son bilgi aktarımı)
> **Amaç:** Görsel varlıkların tek kaynağı: logolar ve kullanım standardı, gerçek merkez fotoğrafları, diğer görseller, video, izinler ve kullanılmayacak varlıklar.
> **Faz 0 sınırı:** Hiçbir görsel kopyalanmaz, taşınmaz, düzenlenmez veya üretilmez. Logo projeye alınmaz. Favicon üretilmez.

**Kurallar** (tam metin: `BUSINESS_SOURCE_OF_TRUTH.md` §0)
- **Etiketler:** [DOĞRULANDI] · [MEVCUT BELGELERDE VAR] · [KULLANICIDAN BİLGİ GEREKLİ] · [ERİŞİM GEREKLİ] · [MEVCUT — AUDIT GEREKLİ] · [TIME-SENSITIVE] · [VERİ BEKLENİYOR] · [DOĞRULAMA GEREKLİ] · [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] · [ESKİ / GEÇERSİZ]
- **Çatışma hiyerarşisi:** Kullanıcının güncel doğrulaması > SoT [DOĞRULANDI] > MASTER STRATEGY > DECISIONS > strateji/teknik belgeler > eski dokümanlar > koddan çıkarılan varsayım.
- **Güvenlik:** Credential bilgisi yazılmaz.

---

## 1. Logo Asset'leri

| Bilgi | Yatay / dikdörtgen logo | Kare logo |
|---|---|---|
| Dosya adı | `avrasya-isitme-cihazlari-logosu.webp` | `Avrasya İşitme Logo Tasarımı.webp` |
| Konum | `C:\Users\PARAYI KOKLAYAN ADAM\Downloads\` (**projede değil**) | `C:\Users\PARAYI KOKLAYAN ADAM\Downloads\` (**projede değil**) |
| Format | WebP (VP8X + ALPH + VP8; kayıplı, alfa kanalı var) | WebP (VP8X + ALPH + VP8; kayıplı, alfa kanalı var) |
| Boyut | 1774 × 887 px · 153.736 bayt | 1278 × 1230 px · 175.754 bayt (kareye yakın) |
| SHA-256 (ilk 16 karakter) | `3E63CB8C6F44FB60` | `EF21C0A0FA45CD72` |
| İçerik | Solda kulak/ses dalgası simgesi; sağda "Avrasya" / "İşitme Cihazları"; altta tagline | Üstte simge; altta "Avrasya" / "İşitme Cihazları" ve tagline |
| Tagline | "İŞİTME SAĞLIĞI İÇİN GÜVENİLİR DESTEK" (yalnızca logonun parçası) | Aynı |
| Durum | [DOĞRULANDI] (gerçek marka logosu; işletme sahibi sağladı) | [DOĞRULANDI] |
| Son doğrulama | 2026-10-06 | 2026-10-06 |
| Freshness | STATIC | STATIC |

### Logo kullanım standardı ([DOĞRULANDI], A1)
| Asset | Kullanım alanı |
|---|---|
| **Yatay logo** | Masaüstü header, footer, geniş kurumsal alanlar, uygun OG ve sosyal paylaşım alanları, schema `logo` |
| **Kare logo** | Mobil ve dar alanlar, avatar ve profil alanları, GBP'deki uygun görsel alanları, favicon/ikon üretiminde temel kaynak |
| **Favicon** | Yazılı yatay ya da kare logo favicon'a **sıkıştırılmaz**. **Favicon için kare logodan ikon türetilebilir** [DOĞRULANDI, İşletme sahibi, 2026-10-07]. Türetme işlemi Faz 0'da yapılmaz; asset fazında yapılır |

**Ortak kurallar**
- Logo yeniden çizilmez, değiştirilmez, yeni marka üretilmez.
- Erişilebilir ad (alt / aria-label): **"Avrasya İşitme Cihazları"**.
- Tagline site metnine, title'a, schema'ya veya meta description'a taşınmaz.

**Projeye alma (Faz 3, onayla)**
- Önerilen konum ve ASCII adlar:
  - `public/images/brand/avrasya-isitme-cihazlari-logo-yatay.webp`
  - `public/images/brand/avrasya-isitme-cihazlari-logo-kare.webp`
- Orijinal dosyalar değiştirilmez.

**İyileştirme varyantları** [VERİ BEKLENİYOR] (engel değil)
- Tagline'sız yatay sürüm
- Koyu zemin sürümü (footer koyu lacivert)
- SVG/vektör
- Yalnızca simgeden oluşan favicon ikonu
- Alfa kanalı mevcut; zeminin gerçekten şeffaf olduğu koyu zeminde test edilecek

## 2. Gerçek Merkez Fotoğrafları (işletmeye ait, gerçek: D1)

| Dosya (`public/images/…`) | Boyut | Dosya boyutu | Görünen içerik (dosya adı / alt metne göre) | Durum | Kullanıldığı veri dosyaları |
|---|---|---|---|---|---|
| `pages/hakkimizda-tabela-cadde.webp` | 1448 × 1086 | 241.528 B | Cadde cephesi ve tabelalar (tabelada işletme numaraları görünüyor) | [DOĞRULANDI] (D1) | `data/{darica,hakkimizda,home}/center-gallery.ts`, `data/ucretsiz-isitme-testi/local.ts` |
| `pages/hakkimizda-bekleme-alani.webp` | 1536 × 1024 | 151.862 B | Bekleme alanı | [DOĞRULANDI] (D1) | `data/{darica,hakkimizda,home}/center-gallery.ts`, `data/isitme-cihazi-markalari/local.ts` |
| `pages/hakkimizda-danisma-odasi.webp` | 1214 × 1295 | 118.008 B | Danışma odası | [DOĞRULANDI] (D1) | `data/{darica,hakkimizda,home}/center-gallery.ts`, `data/isitme-cihazi-fiyatlari/local.ts` |
| `pages/hakkimizda-isitme-testi-odasi.webp` | 1537 × 1023 | 78.056 B | İşitme testi odası | [DOĞRULANDI] (D1) | `data/{darica,hakkimizda,home}/center-gallery.ts`, `data/isitme-cihazlari/local.ts` |
| `pages/hakkimizda-hero-marka-duvari.webp` | 1537 × 1023 | 93.024 B | Marka duvarı | [DOĞRULANDI] (D1) | `data/hakkimizda/hero.ts` |
| `pages/isitme-testi-odyometri-odasi.webp` | 1536 × 1024 | 168.344 B | Odyometri odası | [DOĞRULANDI] (D1) | `data/ucretsiz-isitme-testi/hero.ts` |
| `heroes/avrasya-isitme-merkezi-darica.webp` | 1672 × 941 | 126.112 B | Merkez resepsiyon/bekleme alanı | [DOĞRULANDI] (D1) | `data/darica/hero.ts`, ana sayfa hero (`components/hero/Hero/hero.data.ts`) |

**Notlar**
- Bu fotoğraflar gerçek olmadıkları gerekçesiyle **değiştirilmez**.
- **Kullanıcı kaynaklı bir "kullanmayın" listesi yoktur** [DOĞRULANDI, İşletme sahibi, 2026-10-07].
  - Gerçek merkez, ekip, cihaz ve mekân fotoğraflarının kullanımını engelleyen bir kısıt yoktur.
  - Bu, her fotoğrafın her yerde otomatik kullanılacağı anlamına gelmez. Her fotoğrafın uygunluğu image audit'te ayrıca değerlendirilir:
    - section uygunluğu
    - tekrar kullanım
    - kalite ve çözünürlük
    - mobil görünüm
    - performans ve loading/fetchpriority
    - alt metin ve dosya adı
    - OG kullanımı ve schema ilişkisi
- İleride yalnızca şu açılardan denetlenir: alaka, tekrar kullanım, kalite, boyut, kırpma, alt metin, dosya adı, width/height, fetchpriority, performans, responsive kullanım.
- **Bilinen durum** [MEVCUT BELGELERDE VAR]:
  - Dört merkez fotoğrafı yedi sayfada tekrar kullanılıyor.
  - `CenterGallery`, `CorporateHero` ve `HomeLocal` bileşenlerinde width/height eksik.
- Orijinal yüksek çözünürlüklü dosyalar ve çekim tarihleri: [KULLANICIDAN BİLGİ GEREKLİ].

## 3. Diğer Görseller

| Grup | Bilgi | Durum |
|---|---|---|
| Hero slaytları | `heroes/isitme-testi-darica.webp`, `heroes/kocaeli-isitme-cihazlari.webp`, `heroes/darica-gebze-cayirova-hizmet-bolgesi.webp`, `heroes/isitme-cihazi-turleri.webp`, `heroes/isitme-cihazi-markalari.webp`, `heroes/isitme-cihazi-pili-fiyati.webp` (görselin içinde fiyat var, bkz. PRODUCT_SOT §5) | Gerçek fotoğraf mı, tasarım mı: [KULLANICIDAN BİLGİ GEREKLİ] |
| Marka ürün görselleri | `public/images/<marka>/models/*` (62 dosya), `pages/<marka>-hero.webp` | [MEVCUT BELGELERDE VAR]. Üretici kullanım izni: [KULLANICIDAN BİLGİ GEREKLİ] |
| Marka logoları | `public/images/brands/*-logo-seffaf.webp` (19 dosya) | [MEVCUT BELGELERDE VAR] |
| Varsayılan OG görseli | `public/images/og/og-default.jpg` (1200 × 630; tüm sayfalarda OG ve schema `image` olarak kullanılıyor: `MainLayout.astro`, `lib/schema.ts`; alt metni cadde cephesini tarif ediyor) | [MEVCUT BELGELERDE VAR]. Sayfa tipine göre OG kararı Faz 3'te |
| SGK görselleri | `pages/sgk-2026-odeme-tablosu.webp`, `pages/sgk-isitme-cihazi.webp` | [MEVCUT BELGELERDE VAR] [TIME-SENSITIVE] (tablo tutar içeriyor) |
| Favicon seti | `public/favicon.svg` (mavi kare + "E"), `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` | [MEVCUT BELGELERDE VAR]. Eski markayı çağrıştırıyor. Şimdilik kalır |
| Kullanılmayan dosyalar (site analizi) | `brands/starkey-logo-seffaf.webp`, `heroes/hero-01..03.webp`, `oticon/models-full/*` (12), `ui/mega-menu-hizmetlerimiz.webp`; ayrıca birebir aynı iki kopya `isitme-cihazi-markalari.webp` (`pages/` ve `heroes/`) | [MEVCUT BELGELERDE VAR]. Silme kararı ayrı onayla |

## 4. Eksik Varlıklar ve İzinler

| Bilgi | Durum | Kullanım |
|---|---|---|
| Ekip fotoğrafları + yazılı KVKK rızası | [KULLANICIDAN BİLGİ GEREKLİ] | Ekip, Hakkımızda |
| Dış cephe / drone, servis tezgâhı, kalıp atölyesi, test anı (rızalı) fotoğrafları | [KULLANICIDAN BİLGİ GEREKLİ] | Darıca hub, hizmet sayfaları |
| Video ve sosyal medya görselleri (kullanılabilir olanlar) | [KULLANICIDAN BİLGİ GEREKLİ] | Rehberler |
| Kullanılması istenmeyen görseller | **Yok.** Kullanıcı kaynaklı bir kısıt yok; uygunluk teknik/UX/SEO audit'inde değerlendirilir [DOĞRULANDI, 2026-10-07] | — |
| Fotoğraf ve video izinlerinin nasıl alındığı | [KULLANICIDAN BİLGİ GEREKLİ] | BUSINESS_SOT §6 |
