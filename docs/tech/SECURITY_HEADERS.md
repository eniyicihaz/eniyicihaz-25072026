# SECURITY_HEADERS.md

> **Durum:** ACTIVE · Teknik belge · Oluşturulma: 2026-11-11 (2. tur)
> **Amaç:** `public/_headers` (Cloudflare Pages) kararlarını, yerel test sonuçlarını ve **bilinçle uygulanmayan** başlıkların (CSP, HSTS) kademeli geçiş planını kaydeder.
> **Sınır:** `_headers` yalnızca dağıtımda (Cloudflare Pages) etkili olur; dağıtım **ayrı onay** ister. Canlı Cloudflare ayarlarına dokunulmadı.

---

## 1. Uygulanan başlıklar (`public/_headers`)

| Başlık | Değer | Neden güvenli |
|---|---|---|
| `X-Content-Type-Options` | `nosniff` | MIME tahminini kapatır; tüm dosyalar doğru `Content-Type` ile sunuluyor (HTML/CSS/JS/WebP/AVIF/WOFF2/SVG) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Tarayıcı varsayılanıyla aynı; yalnızca açık hâle getirir. GA4/Google çağrıları referrer'ı sayfa içinden okur, etkilenmez |
| `X-Frame-Options` | `SAMEORIGIN` | Sitenin başka sitelerde çerçevelenmesini (clickjacking) engeller. Sitenin **kendisi** Google Haritalar'ı çerçeveler (giden yön) — etkilenmez |
| `Permissions-Policy` | `camera=(), microphone=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=(), geolocation=(self)` | Sitede bu API'lerin hiçbiri kullanılmıyor (kaynak taraması); `geolocation=(self)` varsayılanla aynıdır (Haritalar gömmesine izin vermez, harita yine açılır) |
| `Cache-Control` `/_astro/*` | `public, max-age=31536000, immutable` | Derleme çıktısı içerik özetli dosya adı kullanır; değişirse adı da değişir |
| `Cache-Control` `/fonts/*` | `public, max-age=31536000, immutable` | Yazı tipi dosyaları (`inter-latin.woff2`, `inter-latin-ext-tr.woff2`) içerik değişirse **yeni adla** yayımlanmalıdır (kural: aynı adla değiştirmeyin) |

HTML için ek önbellek başlığı **yok** (Pages varsayılanı: her seferinde doğrulama). `/images/*` için de eklenmedi: dosya adları içerik özetli değil; aynı adla görsel değiştirilirse eski görsel kalabilir (öneri: görsel değişince dosya adı değiştirmek, sonra 7–30 günlük önbellek eklemek).

## 2. Yerel test (dağıtım öncesi)

`scratchpad/serve3.cjs`, `_headers` dosyasını Cloudflare Pages söz dizimiyle ayrıştırıp her yanıta uygular. Başlıklar açıkken şunlar denendi:

- Başlıklar yanıtlarda görüldü (`curl`/tarayıcı): 4 güvenlik başlığı + `/_astro/*`, `/fonts/*` için `immutable`.
- 112 sitemap URL'si, **390 px mobil** gerçek tarayıcıda yüklendi: **0 konsol hatası, 0 başarısız istek, 0 HTTP ≥ 400** (başlıklar açıkken).
- Etkileşimli bileşenler (carousel, kaydırmalı bölüm, sihirbazlar, erişilebilirlik paneli, yazdırma) başlıklar açıkken çalıştı.
- Çerçeveleme: aynı kaynaklı çerçeve (test düzeneği) çalıştı; çapraz kaynak çerçeveleme `X-Frame-Options`'la engellenir (tarayıcı davranışı).

## 3. Bilinçle uygulanmayanlar

### 3.1 Content-Security-Policy (CSP)

**Uygulanmadı.** Üretimde yerelde birebir test edilemeyen bileşenler var:

- Cloudflare Web Analytics işaretçisi (kenarda enjekte edilir → `static.cloudflareinsights.com`)
- GA4/GTM (onayla yüklenir → `www.googletagmanager.com`, `www.google-analytics.com`, `*.analytics.google.com`)
- Google Haritalar gömmesi (`www.google.com/maps/embed`), Google Business Profile bağlantıları
- Satır içi betikler (`is:inline`: erişilebilirlik tercihi, içindekiler, hero) ve `style` öznitelikleri

Test edilmemiş bir CSP analitiği/haritayı **sessizce** keser. Önerilen kademeli geçiş:

1. `Content-Security-Policy-Report-Only` ile yayımlayın (bir toplayıcı uç nokta veya `report-uri` hizmeti seçildikten sonra; Cloudflare tarafında yeni ayar gerektirmez, yalnızca `_headers` satırıdır).
2. Başlangıç taslağı (raporlama modunda denenecek):
   `default-src 'self'; img-src 'self' data:; font-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://cloudflareinsights.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com; frame-src https://www.google.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'`
3. En az iki hafta rapor izleyin; ihlal listesi boşalınca **zorlayıcı** başlığa geçin. Satır içi betikler için `'unsafe-inline'` yerine nonce/hash gerekir (derleme değişikliği; ayrı iş).

### 3.2 Strict-Transport-Security (HSTS)

**Uygulanmadı.** Geri alınması bir yıla kadar sürebilen bir karardır. Önce: (a) tüm alt alan adlarının HTTPS'inin doğrulanması, (b) `max-age=300` ile başlayıp kademeli artırma, (c) `includeSubDomains`/`preload` ayrı karar. Cloudflare "Always Use HTTPS" ayarı panel tarafında olduğundan **dokunulmadı**.

## 4. Kontrol listesi (dağıtımdan sonra)

- `curl -sI https://www.eniyicihaz.com/` → 4 güvenlik başlığı görünüyor.
- `curl -sI https://www.eniyicihaz.com/_astro/<dosya>` → `immutable`.
- Tarayıcı konsolunda hata yok; GA4 (onaydan sonra) ve Cloudflare Web Analytics isteği gidiyor; iletişim sayfası haritası açılıyor.
