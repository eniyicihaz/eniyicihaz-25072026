# GOOGLE_SOURCE_OF_TRUTH.md

> **Durum:** ACTIVE · Faz 0 · Oluşturulma: 2026-10-06 · Son güncelleme: 2026-10-07 (Faz 0 son bilgi aktarımı)
> **Amaç:** Google ekosisteminin (GBP, Maps, GA4, GTM, Search Console, Ads) ve consent/ölçüm altyapısının **envanteri**.
> Yalnızca proje dosyalarında kayıtlı olanlar işlenir. **Canlı hesaplara erişim istenmez. Hiçbir entegrasyon yeniden kurulmaz.**

**Kurallar** (tam metin: `BUSINESS_SOURCE_OF_TRUTH.md` §0)
- **Etiketler:** [DOĞRULANDI] · [MEVCUT BELGELERDE VAR] · [KULLANICIDAN BİLGİ GEREKLİ] · [ERİŞİM GEREKLİ] · [MEVCUT — AUDIT GEREKLİ] · [TIME-SENSITIVE] · [VERİ BEKLENİYOR] · [DOĞRULAMA GEREKLİ] · [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] · [ESKİ / GEÇERSİZ]
- **Çatışma hiyerarşisi:** Kullanıcının güncel doğrulaması > SoT [DOĞRULANDI] > MASTER STRATEGY > DECISIONS > strateji/teknik belgeler > eski dokümanlar > koddan çıkarılan varsayım.
- **Güvenlik:**
  - Bu dosyaya şifre, API key, access token, secret, OAuth credential veya kişisel giriş bilgisi **yazılmaz**.
  - Erişim gereken her yerde yalnızca [ERİŞİM GEREKLİ] veya [MEVCUT — AUDIT GEREKLİ] yazılır.
  - Kayıtlı ID'ler (GTM container, GA4 Measurement ID) sitenin kamuya açık kodunda zaten görünen tanımlayıcılardır, gizli bilgi değildir.

---

## 1. Envanter

| Sistem | Kayıtlı bilgi | Durum | Kaynak | Son doğrulama | Not |
|---|---|---|---|---|---|
| **Google Business Profile** | Mevcut profil var. Sıfırdan kurulmayacak | [DOĞRULANDI] [MEVCUT — AUDIT GEREKLİ] | İşletme sahibi (A3) | 2026-10-06 | Tek geçerli ifade: "Mevcut GBP bulunmaktadır; mevcut profil ve bağlantılar ilerleyen audit fazında doğrulanacaktır." |
| GBP yönetimi | GBP yönetimini **Erdinç Kılıç** yapıyor (yalnızca kişi/rol bilgisi; giriş bilgisi yok) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Yeni GBP oluşturulmayacak; mevcut durum audit edilecek |
| GBP stratejik adı | Avrasya İşitme Cihazları | [DOĞRULANDI] | A3 | 2026-10-06 | Canlı profildeki ad audit'te karşılaştırılacak |
| GBP'ye bağlı Maps yer adı (embed'de) | "Darıca Avrasia İşitme Cihazları" | [MEVCUT BELGELERDE VAR] [MEVCUT — AUDIT GEREKLİ] | `src/components/footer/Footer/data/company.ts` (`mapEmbedSrc`) | — | "Avrasia" yazımı NAP açısından kontrol edilecek |
| Maps'te görünen ad (kullanıcı teyidi) | "Darıca Avrasia İşitme Cihazları". Resmî GBP/NAP audit kapsamında incelenecek; **hemen değiştirme kararı verilmez** | [DOĞRULANDI] (görünen ad) [MEVCUT — AUDIT GEREKLİ] | İşletme sahibi | 2026-10-07 | NAP tutarlılığı |
| **Google Maps** | Kısa link `https://maps.app.goo.gl/vKijvMzNn3D22cy26` + `/iletisim/` harita embed'i | [MEVCUT BELGELERDE VAR] | `company.ts` | — | Embed, consent (thirdParty) sonrası yükleniyor |
| **Google Tag Manager** | Container `GTM-N8H82DDL` (aktif). Eski container `GTM-NRWFGX8D` bu projede kullanılmıyor | [MEVCUT BELGELERDE VAR] [MEVCUT — AUDIT GEREKLİ] | `src/lib/consent/config.ts:41-44` | — | Container içeriği [ERİŞİM GEREKLİ] |
| **GA4** | Measurement ID `G-9PC230DJCE` (yalnızca kod yorumunda; GTM içinde yüklendiği varsayılıyor) | [MEVCUT BELGELERDE VAR] [MEVCUT — AUDIT GEREKLİ] | `src/lib/consent/config.ts:39` | — | Mülk ve key event'ler [ERİŞİM GEREKLİ] |
| GA4 ve GTM varlığı | GA4 ve GTM mevcut (kullanıcı teyidi). Konteyner ve mülk içeriği audit'te doğrulanacak | [DOĞRULANDI] (varlık) [MEVCUT — AUDIT GEREKLİ] | İşletme sahibi | 2026-10-07 | Yeniden kurulmaz |
| **Search Console** | Repoda doğrulama izi yok (DNS ile doğrulanmış olabilir) | [ERİŞİM GEREKLİ] | Kod taraması | — | Mevcut olabilir; "kurulacak" değil, "doğrulanacak" |
| **Google Ads** | Kodda Ads etiketi yok (GTM içinde olabilir) | [ERİŞİM GEREKLİ] | Kod taraması | — | Location asset ve dönüşüm aktarımı audit'te |
| Google Ads durumu | Ads hesabı **mevcut**; şu anda **aktif reklam yok** | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Hesap yapısı ve dönüşüm aktarımı audit'te [ERİŞİM GEREKLİ] |
| Meta Pixel | Şu anda **yok**; ileride değerlendirilebilir (consent kapsamına alınması gerekir) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | — |
| Sosyal hesaplar | Instagram, Facebook, TikTok, YouTube (URL'ler: BUSINESS_SOT §3; TikTok URL [KULLANICIDAN BİLGİ GEREKLİ]) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | `sameAs` |
| Merchant Center / diğer Google servisleri | Repoda iz yok | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | Kullanılıyor mu? |
| Bing Webmaster Tools | Repoda iz yok | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | AI arama görünürlüğü için önerilecek |
| Cloudflare (hosting, yönlendirme, bot ayarları) | Repoda yalnızca `_redirects` ve 404 yorumu var | [ERİŞİM GEREKLİ] | `public/_redirects`, `src/pages/404.astro` | — | AI botları engelleniyor mu: audit |
| Hesap sahipliği ve yöneticiler (GBP, GA4, GTM, GSC, Ads, Cloudflare) | GBP: Erdinç Kılıç [DOĞRULANDI, 2026-10-07]. Diğerleri: — | GBP dışındakiler: [KULLANICIDAN BİLGİ GEREKLİ] | — | — | **Yalnızca kişi/rol bilgisi.** Giriş bilgisi istenmez ve yazılmaz |

## 2. Consent ve Ölçüm Altyapısı (korunacak; yeniden kurulmayacak)

| Bilgi | Değer | Durum | Kaynak |
|---|---|---|---|
| Consent kategorileri | necessary, analytics, marketing, thirdParty | [MEVCUT BELGELERDE VAR] | `src/lib/consent/config.ts:7,30` |
| Consent Mode v2 | Varsayılan durum "denied". Onay sonrası update gönderiliyor. GTM yalnızca onaydan sonra dinamik olarak yükleniyor. Onay geri çekilince Google çerezleri temizleniyor | [MEVCUT BELGELERDE VAR] [MEVCUT — AUDIT GEREKLİ] | `src/lib/consent/google.ts` |
| Onay süresi | Süresiz (`CONSENT_MAX_AGE_DAYS = null`) | [MEVCUT BELGELERDE VAR] | `src/lib/consent/config.ts` |
| Politika sürümü | `CONSENT_POLICY_VERSION = "2026-10-01"` | [MEVCUT BELGELERDE VAR] | `src/lib/consent/config.ts` |
| Dönüşüm event'leri | `phone_click` (tel:), `whatsapp_click` (wa.me), `directions_click` (Maps), `hearing_test_cta` (ücretsiz test sayfasına giden linkler) | [MEVCUT BELGELERDE VAR] [MEVCUT — AUDIT GEREKLİ] | `src/lib/consent/events.ts` |
| Event parametreleri ve PII filtresi | link_location, link_type, cta_label, device, page_type; allow-list + PII deseni filtresi | [MEVCUT BELGELERDE VAR] | `src/lib/consent/analytics.ts` (`src/lib/analytics.ts` boş dosya) |
| Bilinen risk | Yalnızca marketing onayında GTM yükleniyor ama event'ler düşebiliyor (kod okuması) | [MEVCUT — AUDIT GEREKLİ] | `google.ts:324` ↔ `analytics.ts:41` |
| Kural | Event payload'larına kişisel veya sağlık verisi gönderilmez | [DOĞRULANDI] | İşletme sahibi |

## 3. Audit Kontrol Listesi (ilerideki Local SEO / Entity / Analytics fazı; Faz 0'da yapılmaz)

| Kontrol | Durum |
|---|---|
| GBP işletme adı, adres, telefonlar, kategori, çalışma saatleri | [MEVCUT — AUDIT GEREKLİ] |
| GBP web sitesi URL'si ve Google Maps bağlantısı | [MEVCUT — AUDIT GEREKLİ] |
| GBP ↔ web sitesi tutarlılığı (NAP, "Avrasia" yazımı) | [MEVCUT — AUDIT GEREKLİ] |
| GBP ↔ GA4 bağlantısı (varsa) | [ERİŞİM GEREKLİ] |
| GBP ↔ Google Ads / location asset bağlantısı (varsa) | [ERİŞİM GEREKLİ] |
| Mevcut UTM ve kaynak takibi | [ERİŞİM GEREKLİ] |
| Search Console mülkü ve bağlantıları | [ERİŞİM GEREKLİ] |
| GTM container içeriği, GA4 key event'leri, Ads dönüşümleri | [ERİŞİM GEREKLİ] |
| Consent koşullarının çalışırken test edilmesi (Tag Assistant / DebugView) | [MEVCUT — AUDIT GEREKLİ] |
| Entity ve NAP tutarlılığı (site, GBP, sosyal hesaplar, dizinler) | [MEVCUT — AUDIT GEREKLİ] |
