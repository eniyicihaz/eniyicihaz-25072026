# GOOGLE_SOURCE_OF_TRUTH.md

> **Durum:** ACTIVE · Faz 0 · Oluşturulma: 2026-10-06 · Son güncelleme: 2026-11-04 (çerez ve dönüşüm sistemi — §2 ve ilgili envanter satırları)
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
| **Google Maps** | Kısa link `https://maps.app.goo.gl/vKijvMzNn3D22cy26` + `/iletisim/` harita embed'i | [MEVCUT BELGELERDE VAR] | `company.ts` | — | Embed, kullanıcı ilgili içeriğin “Haritayı yükle” düğmesine bastığında yalnızca o içerik için yükleniyor; kalıcı çerez kategorisi yok (bkz. §2) |
| **Google Tag Manager** | Container `GTM-N8H82DDL` (aktif). Eski container `GTM-NRWFGX8D` bu projede kullanılmıyor | [MEVCUT BELGELERDE VAR] [MEVCUT — AUDIT GEREKLİ] | `src/lib/consent/config.ts` (`DEFAULT_GTM_ID`) | 2026-11-04 | Canlı sürüm **5** (çalışma alanı 6 yayımlandı; canlı `gtm.js` ile doğrulandı) (bkz. §2 “GTM durumu”) |
| **GA4** | Measurement ID `G-9PC230DJCE` (yalnızca kod yorumunda; GTM içinde yüklendiği varsayılıyor) | [MEVCUT BELGELERDE VAR] [MEVCUT — AUDIT GEREKLİ] | `src/lib/consent/config.ts` (yorum) ve GTM çalışma alanları | 2026-11-04 | GA4 etiketleri GTM'de (canlı v5). Key event durumu için bkz. §2 “GA4” |
| GA4 ve GTM varlığı | GA4 ve GTM mevcut (kullanıcı teyidi). Konteyner ve mülk içeriği audit'te doğrulanacak | [DOĞRULANDI] (varlık) [MEVCUT — AUDIT GEREKLİ] | İşletme sahibi | 2026-10-07 | Yeniden kurulmaz |
| **Search Console** | Repoda doğrulama izi yok (DNS ile doğrulanmış olabilir) | [ERİŞİM GEREKLİ] | Kod taraması | — | Mevcut olabilir; "kurulacak" değil, "doğrulanacak" |
| **Google Ads** | Sitede doğrudan Ads etiketi yok; dönüşümler GTM'deki bağımsız etiketlerle gönderiliyor (canlı v5; eski v4'te Ads etiketi yoktu) | [DOĞRULANDI] (GTM çalışma alanı 6 salt okunur incelendi; canlı v5 `gtm.js` içinde `phone_click_ads` / `whatsapp_click_ads` / `consent_*_ready` var) | GTM çalışma alanları, `gtm.js` | 2026-11-04 | Location asset ve hesap tarafı audit'te [ERİŞİM GEREKLİ] |
| Google Ads durumu | Ads hesabı **mevcut**; şu anda **aktif reklam yok** | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Hesap yapısı ve dönüşüm aktarımı audit'te [ERİŞİM GEREKLİ] |
| Meta Pixel | Şu anda **yok**; ileride değerlendirilebilir (consent kapsamına alınması gerekir) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | — |
| Sosyal hesaplar | Instagram, Facebook, TikTok, YouTube (URL'ler: BUSINESS_SOT §3; TikTok URL [KULLANICIDAN BİLGİ GEREKLİ]) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | `sameAs` |
| Merchant Center / diğer Google servisleri | Repoda iz yok | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | Kullanılıyor mu? |
| Bing Webmaster Tools | Repoda iz yok | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | AI arama görünürlüğü için önerilecek |
| Cloudflare (hosting, yönlendirme, bot ayarları) | Repoda yalnızca `_redirects` ve 404 yorumu var. Pages projesi `eniyicihaz-25072026` (production branch `main`) ve **Cloudflare Web Analytics** (bkz. §2 “Cloudflare Web Analytics”) | [DOĞRULANDI] (Pages ve Web Analytics: panelden salt okunur, 2026-11-04) [ERİŞİM GEREKLİ] (bot ayarları vb.) | `public/_redirects`, `src/pages/404.astro` | — | AI botları engelleniyor mu: audit |
| Hesap sahipliği ve yöneticiler (GBP, GA4, GTM, GSC, Ads, Cloudflare) | GBP: Erdinç Kılıç [DOĞRULANDI, 2026-10-07]. Diğerleri: — | GBP dışındakiler: [KULLANICIDAN BİLGİ GEREKLİ] | — | — | **Yalnızca kişi/rol bilgisi.** Giriş bilgisi istenmez ve yazılmaz |

## 2. Consent ve Ölçüm Altyapısı (güncel — 2026-11-04)

> **Kapsam notu:** Aşağıdaki "Site kodu" bilgileri `feat/consent-aware-conversion-events` dalındaki çalışma ağacı koduna aittir; bu dal commit'lenerek `main`'e alınıp Cloudflare Pages üzerinden üretime yayınlanmak üzere hazırlandı (yayın sonucu ve canlı test sonuçları ayrı raporlanır; bu dosyada canlı başarı iddia edilmez). "Yerel test" sonuçları yalnızca yerel site + GTM Önizleme (çalışma alanı 6) ve yerel sunucuda kontrollü test kimliğiyle alınmıştır; **canlı site başarısı olarak okunmamalıdır**.

### Site kodu (dal: `feat/consent-aware-conversion-events`)

| Bilgi | Değer | Durum | Kaynak |
|---|---|---|---|
| Consent kategorileri | `necessary` (kilitli), `analytics`, `marketing`. Üçüncü taraf içerik **kategori değildir** | [DOĞRULANDI] | `src/lib/consent/config.ts` |
| Consent Mode | **Basic**. İlk ziyarette tüm isteğe bağlı izinler `denied` (`ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`). Varsayılan, GTM'den önce yazılır | [DOĞRULANDI] | `src/lib/consent/google.ts` |
| GTM yükleme | GTM yalnızca analitik **veya** reklam izni verildiğinde, `consent default/update` yazıldıktan sonra yüklenir. Tercih yokken veya tümü reddedildiğinde GTM yüklenmez. `<noscript>` GTM yedeği yok | [DOĞRULANDI] | `google.ts` |
| İzin eşlemesi | Analitik → `analytics_storage`. Reklam ölçüm → `ad_storage` + `ad_user_data`. `ad_personalization` **her durumda `denied`** (tek `update` çağrısında sabit) | [DOĞRULANDI] | `google.ts` |
| Çerez paneli | İlk ziyarette alt bant: “Tümünü kabul et”, “Tümünü reddet”, “Tercihleri yönet” (eşit görünüm). Tercih panelinde Zorunlu (kilitli), Analitik, Reklam ölçüm. Footer “Çerez Tercihleri” ile yeniden açılır | [DOĞRULANDI] | `ConsentManager.astro` |
| Tercih kaydı | `localStorage` anahtarı `eniyicihaz:consent`: `{v, ts, method, choices}`. `method`: `accept_all` / `reject_all` / `custom`. İlk ziyarette kayıt oluşmaz. `method`'suz, eski sürümlü veya tutarsız kayıt geçersizdir, silinir ve izin sayılmaz | [DOĞRULANDI] | `store.ts` |
| Politika sürümü | `CONSENT_POLICY_VERSION = "2026-11-04-v2"` — **teknik** sürümdür; hukuki metnin yürürlük tarihiyle karıştırılmaz. Eski sürümlü kayıtta panel yeniden gösterilir | [DOĞRULANDI] | `config.ts` |
| Onay süresi | Süresiz (`CONSENT_MAX_AGE_DAYS = null`) | [DOĞRULANDI] | `config.ts` |
| İzin geri alma | `consent update (denied)` → tercih kaydı → GTM bu sayfada yüklüyse **tek** sayfa yenilemesi. Yenileme yalnızca geri almada olur (ilk kayıt, izin verme ve sayfa açılışı yenilemez); yeni sayfada kayıtlı tercih uygulanır. Reddedilen kategorinin Google çerezleri (`_ga*`, `_gid`, `_gat*` / `_gcl_*`, `_gac_*`, `FPLC`) bizim alan adımızda silinir | [DOĞRULANDI] | `ConsentManager.astro`, `google.ts` |
| Çapraz sekme | `storage` olayı ile tercihler senkronize edilir (`newValue` esas alınır). Silinmiş, geçersiz, `method`'suz veya eski sürümlü kayıt **eski bellek kaydına dönmez**; tüm isteğe bağlı izinler `denied` sayılır. Bellek yedeği yalnızca `localStorage` hiç erişilemezse kullanılır. Bu yol depolamaya yazmaz (olay döngüsü yok) | [DOĞRULANDI] | `store.ts` (`consentFromStorageValue`), `ConsentManager.astro` |
| GA4 (analitik) olayları | `phone_click` (tel:), `whatsapp_click` (wa.me), `directions_click` (Maps), `hearing_test_cta` (ücretsiz test sayfasına giden bağlantılar), `hearing_test_info_click` (yalnızca `data-track-event` işaretli bilgi çipi). **Yalnızca analitik izniyle** `dataLayer`'a yazılır | [DOĞRULANDI] | `events.ts`, `analytics.ts` (`trackEvent`) |
| Reklam olayları | `phone_click_ads`, `whatsapp_click_ads`. **Yalnızca reklam ölçüm izniyle**, yalnızca gerçek `tel:` / `wa.me` tıklamasında, tıklama başına bir kez. Parametreler: `link_location`, `link_type`, `contact_channel` | [DOĞRULANDI] | `events.ts`, `analytics.ts` (`trackAdsEvent`) |
| İzin olayları | `consent_analytics_ready`, `consent_marketing_ready` — ilgili izin verildiğinde ve GTM yüklüyse bir kez `dataLayer`'a yazılır. **Dönüşüm değildir**; yalnızca GTM'de izin hazır tetikleyicisidir | [DOĞRULANDI] | `google.ts` |
| Parametreler ve PII filtresi | GA4 olayları: `link_location`, `link_type`, `cta_label`, `device`, `page_type`, `contact_channel`. Reklam olayları daha dar liste kullanır. İzin listesi + PII deseni filtresi. Telefon numarası, WhatsApp URL'si ve sağlık bilgisi gönderilmez; hat bilgisi yalnızca sabit kanal adıdır (`mobile_main`, `whatsapp_main`, `landline_office`, `ads_line`, `other_phone`) | [DOĞRULANDI] | `analytics.ts`, `contact-channel.ts` |
| Üçüncü taraf gömme | Harita/video, kullanıcı içeriğin kendi “yükle” düğmesine basana kadar yüklenmez; düğme yalnızca o içeriği, o sayfa ziyareti için yükler ve kalıcı tercih yazmaz | [DOĞRULANDI] | `ConsentEmbed.astro`, `ConsentManager.astro` |
| Fontlar | Yerel (`/fonts/`); fontlar için Google isteği yok | [DOĞRULANDI] | `src/ds/styles/base/fonts.css` |
| Kural | Event payload'larına kişisel veya sağlık verisi gönderilmez | [DOĞRULANDI] | İşletme sahibi |

### Cloudflare Web Analytics (teknik performans ölçümü; Google tercihlerinden bağımsız)

| Bilgi | Değer | Durum |
|---|---|---|
| Hizmet | Cloudflare Web Analytics (RUM beacon). Cloudflare panelinde Web Analytics sitesi `eniyicihaz.com`, kurulum **Automatic setup** | [DOĞRULANDI] (panel, salt okunur, 2026-11-04) |
| Yükleme | Beacon sitenin kaynak kodunda **yok** (repo, `dist`); Cloudflare uç noktasında HTML'e enjekte ediliyor (`static.cloudflareinsights.com/beacon.min.js`, `data-cf-beacon` özniteliği: `version`, `token`, `r`, `spa`) | [DOĞRULANDI] (canlı sayfa, tarayıcı) |
| Veri adresi | Ölçüm verisi aynı alan adındaki `https://www.eniyicihaz.com/cdn-cgi/rum` adresine gidiyor (otomatik kurulum; `cloudflareinsights.com/cdn-cgi/rum` değil) | [DOĞRULANDI] (canlı sayfa, ağ isteği) |
| Consent ilişkisi | Çerez izin sistemine bağlı **değil**: Google izinleri reddedilse de, tercih yokken de yükleniyor | [DOĞRULANDI] (canlı test) |
| Çerez / depolama | Canlı sayfada Cloudflare'a ait çerez veya localStorage anahtarı görülmedi; Cloudflare belgesi beacon'ın çerez, localStorage, sessionStorage, IndexedDB kullanmadığını belirtiyor | [DOĞRULANDI] (canlı sayfa adları) / [MEVCUT BELGELERDE VAR] (Cloudflare belgesi) |
| Metinlere işlenme | Çerez Politikası §9, Aydınlatma Metni §7 ve Gizlilik Politikası §3'e açıklama eklendi; yürürlük tarihi değiştirilmedi | [DOĞRULANDI] (kod); hukuk onayı bekleniyor |
| Doğrulanamayanlar | Veri saklama süresi, hukuki işleme şartı, yurt dışı aktarım mekanizması, Cloudflare'ın veri işleyen / sorumlu sıfatı, Web Analytics'te AB/AEA ülkeleri için "ölçümü hariç tut" seçeneğinin bu sitede açık olup olmadığı | [KULLANICIDAN BİLGİ GEREKLİ] / [HUKUKİ DEĞERLENDİRME GEREKLİ] |

### GTM durumu (2026-11-04)

| Bilgi | Değer | Durum |
|---|---|---|
| Container | `GTM-N8H82DDL` (üretimde bu kimlik kullanılacak; derlenmiş pakette başka kimlik yok) | [DOĞRULANDI] |
| Canlı sürüm | **v5** (canlı `gtm.js`: `"version":"5"`; `phone_click_ads`, `whatsapp_click_ads`, `consent_analytics_ready`, `consent_marketing_ready`, `contact_channel` içeriyor). Önceki sürüm v4'te bunlar yoktu | [DOĞRULANDI] (2026-11-04) |
| Çalışma alanı 6 (`olcum-izin-uyumlu-donusum`) | **Yayımlandı (v5).** İçerik: `consent_analytics_ready`, `consent_marketing_ready`, `phone_click_ads`, `whatsapp_click_ads` tetikleyicileri; Google Tag – GA4 (ID 3), GA4 olay etiketleri, Google Ads telefon (ID 21), Google Ads WhatsApp (ID 22), Conversion Linker (ID 23) | [DOĞRULANDI] (salt okunur inceleme ve Önizleme) |
| Telefon ve WhatsApp dönüşümleri | Bağımsız GTM etiketleriyle gönderilir; ikisi de **ikincil** dönüşüm, varsayılan değer 0 TRY, kişiselleştirilmiş reklam kapalı | [KULLANICI DOĞRULAMASI] (Ads hesabı bu çalışmada incelenmedi) |
| Etiket izin kontrolü | Çalışma alanı 6'da etiketlerin “ek izin kontrolü” alanı boş (`notNeeded`); doğru tetiklenme, tetikleyicilerin `consent_*_ready` olaylarına bağlı olmasından geliyor | [DOĞRULANDI] |
| Yeni site + eski v4 | **Sorunluydu** (yerel test): yalnızca reklam izninde Google Tag GA4 `page_view` gönderiyor ve hiçbir Ads dönüşümü ölçülmüyordu. Bu yüzden önce GTM v5 yayımlandı, ardından yeni site | [DOĞRULANDI] (yerel test) |

### GA4 (kullanıcı beyanı)

| Bilgi | Değer | Durum |
|---|---|---|
| Anahtar etkinlikler | `phone_click`, `whatsapp_click`, `directions_click`, `hearing_test_cta` **artık anahtar etkinlik değil**; `purchase` da anahtar etkinlik değil | [KULLANICI DOĞRULAMASI] — GA4 hesabı bu çalışmada incelenmedi; site kodundan bağımsız bir GA4 ayarıdır |
| Veri toplama | GA4 etkinlik verileri normal olarak toplanmaya devam ediyor | [KULLANICI DOĞRULAMASI] |

### Yerel test sonuçları (canlı başarı değildir)

Aşağıdakiler yerel site ve GTM Önizleme (çalışma alanı 6) veya kontrollü test kimliğiyle doğrulandı:
- İlk ziyaret, tümünü reddet, **yalnızca analitik**, **yalnızca reklam**, **ikisi birlikte**, **izin geri alma** ve **yeniden kabul** senaryoları (etiket çalışma/çalışmama ve ağ istekleri).
- Çapraz sekme: A reddedilince B tek yenileme; kısmi izin değişimi; kayıt silinmesi; döngü ve yinelenen olay yok.
- Eski sürümlü ve `method`'suz kayıtta panelin yeniden açılması; yeni sürümlü `accept_all` / `reject_all` / `custom` kayıtların korunması.
- Not: Önizleme gerçek GA4 mülkü ve Ads hesabına yerel (`127.0.0.1`) test isteği göndermiştir.

**Canlı üretim test sonuçları bu dosyaya henüz işlenmedi.** Yeni site canlıya çıktıktan sonra canlı sitede analitik-only, reklam-only ve iki izin birlikte senaryoları ayrıca doğrulanır ve sonuçları ayrı raporlanır; bu dosyadaki "yerel test" sonuçları canlı başarı olarak okunmamalıdır.

### Açık noktalar

| Konu | Durum |
|---|---|
| Analitik-only testinde GA4 olaylarıyla birlikte Ads alan adına `pagead2.googlesyndication.com/measurement/conversion` isteği gidiyordu (`gcs=G101`). GA4'te `phone_click`, `whatsapp_click`, `directions_click` ve `hearing_test_cta` etkinliklerinin anahtar etkinlik işareti kaldırıldıktan sonra GTM çalışma alanı 6 ile yapılan yerel Önizleme testinde bu istek **görülmedi**: yalnızca analitik izninde GA4 çalıştı, Ads dönüşüm etiketleri çalışmadı; yalnızca reklam izninde Ads telefon ve WhatsApp dönüşümleri `value=0 TRY` ile çalıştı; iki izin birlikte verildiğinde her tıklamada bir GA4 ve bir Ads olayı oluştu. GA4–Google Ads bağlantısı **kaldırılmadı**. Sorun yerel GTM Önizleme testinde giderilmiş görünüyor | [KULLANICI DOĞRULAMASI] (yerel Önizleme; **canlı üretim testi değildir**) — üretim yayını sonrası aynı analitik-only senaryosu canlıda tekrar kontrol edilmelidir |
| Çerez Politikası metni koda uyduruldu ancak çerez adı/süre bilgisi içermiyor; yürürlük tarihi (`EFFECTIVE_DATE`) bu dosyada **değiştirilmedi**, hukuk onayı bekleniyor | [DOĞRULAMA GEREKLİ] |
| Üretim yayını (commit, `main`'e alma, Cloudflare Pages otomatik dağıtım) kullanıcının ayrı ve açık onayına bağlıdır | [KULLANICIDAN BİLGİ GEREKLİ] |

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
| GTM container içeriği (canlı v5), GA4 key event'leri, Ads dönüşümleri | GTM: [DOĞRULANDI] (salt okunur). GA4 key event ve Ads dönüşüm ayarları: [KULLANICI DOĞRULAMASI] / [ERİŞİM GEREKLİ] |
| Consent koşullarının canlı sitede test edilmesi (Tag Assistant / DebugView): analitik-only, reklam-only, iki izin birlikte, geri alma | [MEVCUT — AUDIT GEREKLİ] (yerel Önizleme testi yapıldı; canlı test yapılmadı) |
| Entity ve NAP tutarlılığı (site, GBP, sosyal hesaplar, dizinler) | [MEVCUT — AUDIT GEREKLİ] |
