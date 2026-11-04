# GOOGLE_SOURCE_OF_TRUTH.md

> **Durum:** ACTIVE · Faz 0 · Oluşturulma: 2026-10-06 · Son güncelleme: 2026-11-04 (çerez ve dönüşüm sistemi — §2 ve ilgili envanter satırları)
> **Amaç:** Google ekosisteminin (GBP, Maps, GA4, GTM, Search Console, Ads) ve consent/ölçüm altyapısının **envanteri**.
> Yalnızca proje dosyalarında kayıtlı olanlar işlenir. **Canlı hesaplara erişim istenmez. Hiçbir entegrasyon yeniden kurulmaz.**

**Kurallar** (tam metin: `BUSINESS_SOURCE_OF_TRUTH.md` §0)
- **Etiketler:** [DOĞRULANDI] · [MEVCUT BELGELERDE VAR] · [KULLANICIDAN BİLGİ GEREKLİ] · [ERİŞİM GEREKLİ] · [MEVCUT — AUDIT GEREKLİ] · [TIME-SENSITIVE] · [VERİ BEKLENİYOR] · [DOĞRULAMA GEREKLİ] · [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] · [ESKİ / GEÇERSİZ] · [KULLANICI DOĞRULAMASI] · [HUKUKİ DEĞERLENDİRME GEREKLİ]
  - `[KULLANICI DOĞRULAMASI]`: Kullanıcı tarafından doğrulanması veya teyit edilmesi gereken bilgiler.
  - `[HUKUKİ DEĞERLENDİRME GEREKLİ]`: Hukuk danışmanının değerlendirmesini veya onayını bekleyen konular.
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

> **Kapsam notu:** Aşağıdaki "Site kodu" bilgileri `feat/consent-aware-conversion-events` dalındaki çalışma ağacı koduna aittir; bu dal commit'lenerek `main`'e alınıp Cloudflare Pages üzerinden üretime yayınlanmak üzere hazırlandı (kod `main`'e alındı ve üretime yayınlandı; canlı üretim testi 04.11.2026'da yapıldı, kapsamı ve sınırları için bkz. “Canlı üretim testi (04.11.2026)”). "Yerel test" sonuçları yalnızca yerel site + GTM Önizleme (çalışma alanı 6) ve yerel sunucuda kontrollü test kimliğiyle alınmıştır; **canlı site başarısı olarak okunmamalıdır**.

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
| Kurulum ve AB ayarı | Kurulum: **Automatic setup**. RUM ayarı: **“Enable, excluding visitor data in the EU”**. Panel açıklaması: “The JS Snippet will not be injected for visitors from the EU.” Yani AB ziyaretçilerine JS Snippet enjekte edilmiyor | [DOĞRULANDI] (Cloudflare paneli, Web Analytics > eniyicihaz.com > Manage site; **04.11.2026** tarihinde görüntülenerek doğrulandı) |
| AB ayarının kapsamı | Panelde yalnızca “EU” yazıyor. **AEA ve Birleşik Krallık kapsamı doğrulanmadı**; bu bölgeler için hariç tutma uygulandığı iddia edilmez. AB dışı bir konumdan test edildi (beacon yükleniyor); AB konumundan beacon'ın enjekte edilmediği ayrıca test edilmedi | [DOĞRULAMA GEREKLİ] |
| Ayarın niteliği | Bu, Cloudflare hesabında **gözlemlenen mevcut ayardır**; gelecekte değiştirilebilir. Değişirse metinler ve bu kayıt yeniden gözden geçirilmelidir | [TIME-SENSITIVE] |
| Yayın durumu (AB paragrafı) | AB ziyaretçilerini hariç tutma açıklaması **`b282d70`** commit'iyle `main`'e alındı ve **04.11.2026** tarihinde Cloudflare Pages production ortamına başarıyla yayınlandı (deployment ID: `9c72ad99-1a9c-46a7-b659-f5e663dc358d`). Açıklama canlıda Çerez Politikası §9 ve Aydınlatma Metni §7'de bulunuyor; canlı sayfalar `eniyicihaz.com` ve `www.eniyicihaz.com` üzerinden doğrulandı. Gizlilik Politikası'na ayrıca AB paragrafı eklenmedi. Yürürlük tarihleri `01.10.2026` olarak korundu. Cloudflare panelindeki AB hariç tutma ayarı 04.11.2026 tarihinde görüntülenerek doğrulandı; AEA ve Birleşik Krallık kapsamı doğrulanmadı. Hukuk danışmanının değerlendirmesi gereken konular hâlâ açıktır | [DOĞRULANDI] (Git, Cloudflare Pages paneli ve canlı sayfalar, 04.11.2026) / [DOĞRULAMA GEREKLİ] (AEA, Birleşik Krallık) / [HUKUKİ DEĞERLENDİRME GEREKLİ] |
| Consent ilişkisi | Çerez izin sistemine bağlı **değil**: Google izinleri reddedilse de, tercih yokken de yükleniyor | [DOĞRULANDI] (canlı test) |
| Çerez / depolama | Canlı sayfada Cloudflare'a ait çerez veya localStorage anahtarı görülmedi; Cloudflare belgesi beacon'ın çerez, localStorage, sessionStorage, IndexedDB kullanmadığını belirtiyor | [DOĞRULANDI] (canlı sayfa adları) / [MEVCUT BELGELERDE VAR] (Cloudflare belgesi) |
| Metinlere işlenme | Çerez Politikası §9, Aydınlatma Metni §7 (AB hariç tutma bilgisi dahil) ve Gizlilik Politikası §3'e (atıf) açıklama eklendi; yürürlük tarihleri değiştirilmedi | [DOĞRULANDI] (kod); hukuk onayı bekleniyor |
| Doğrulanamayanlar | Veri saklama süresi, hukuki işleme şartı, yurt dışı aktarım mekanizması, Cloudflare'ın veri işleyen / sorumlu sıfatı, AB dışındaki bölgeler (AEA, Birleşik Krallık) için hariç tutma durumu | [KULLANICIDAN BİLGİ GEREKLİ] / [HUKUKİ DEĞERLENDİRME GEREKLİ] |

### GTM durumu (2026-11-04)

| Bilgi | Değer | Durum |
|---|---|---|
| Container | `GTM-N8H82DDL` (üretimde bu kimlik kullanılacak; derlenmiş pakette başka kimlik yok) | [DOĞRULANDI] |
| Canlı sürüm | **v5** (canlı `gtm.js`: `"version":"5"`; `phone_click_ads`, `whatsapp_click_ads`, `consent_analytics_ready`, `consent_marketing_ready`, `contact_channel` içeriyor). Önceki sürüm v4'te bunlar yoktu | [DOĞRULANDI] (2026-11-04) |
| Çalışma alanı 6 (`olcum-izin-uyumlu-donusum`) | **Yayımlandı (v5).** İçerik: `consent_analytics_ready`, `consent_marketing_ready`, `phone_click_ads`, `whatsapp_click_ads` tetikleyicileri; Google Tag – GA4 (ID 3), GA4 olay etiketleri, Google Ads telefon (ID 21), Google Ads WhatsApp (ID 22), Conversion Linker (ID 23) | [DOĞRULANDI] (salt okunur inceleme ve Önizleme) |
| Telefon ve WhatsApp dönüşümleri | Bağımsız GTM etiketleriyle gönderilir; ikisi de **ikincil** dönüşüm, varsayılan değer 0 TRY, kişiselleştirilmiş reklam kapalı | [KULLANICI DOĞRULAMASI] (Ads hesabı bu çalışmada incelenmedi) |
| Etiket izin kontrolü | Çalışma alanı 6'da etiketlerin “ek izin kontrolü” alanı boş (`notNeeded`); doğru tetiklenme, tetikleyicilerin `consent_*_ready` olaylarına bağlı olmasından geliyor | [DOĞRULANDI] |
| Yeni site + eski v4 | **Sorunluydu** (yerel test): yalnızca reklam izninde Google Tag GA4 `page_view` gönderiyor ve hiçbir Ads dönüşümü ölçülmüyordu. Bu yüzden önce GTM v5 yayımlandı, ardından yeni site | [DOĞRULANDI] (yerel test) |

### GA4 (Admin arayüzü doğrulaması)

| Bilgi | Değer | Durum |
|---|---|---|
| Anahtar etkinlikler (güncel Admin) | **04.11.2026'da GA4 Admin arayüzünden doğrulandı** (mülk `420215643`, Veri görüntüleme > Etkinlikler). “Önemli etkinlikler” listesinde yalnızca `purchase` görünüyor ve onun için “Akış verisi algılanmadı” gösteriliyor. `phone_click`, `whatsapp_click`, `directions_click` ve `hearing_test_cta` güncel Admin ekranında **önemli etkinlik olarak işaretli değil** (“Son etkinlikler” sekmesinde yıldızları boş) | [DOĞRULANDI] (GA4 Admin, 04.11.2026) |
| Son 30 gün olay sayıları | `phone_click` 36, `whatsapp_click` 18, `directions_click` 15, `hearing_test_cta` 6 (denetim raporundaki değerler). Bunlar normal GA4 olay sayılarıdır; **Google Ads dönüşümü veya gerçek müşteri adayı sayısı değildir** | [DOĞRULANDI] (GA4 Data API, 04.11.2026) |
| Data API `isKeyEvent` değerleri | Önceki Data API sorgusunda bazı kayıtlarda `isKeyEvent=true` görüldü. Bu boyut, olayın **toplandığı andaki** bayrağı yansıtır; yani geçmiş olay kayıtlarından kaynaklanabilir ve güncel Admin ayarı değildir. Güncel durum ayrıca Admin arayüzünden kontrol edildi (yukarıdaki satır). 04.11.2026 verisinde hem `true` hem boş değerli satırlar vardı; bu, bayrağın o gün kaldırılmış olabileceğini düşündürür ancak kaldırma saatini kesinleştirmez | [DOĞRULANDI] (Admin) / [DOĞRULAMA GEREKLİ] (bayrağın kaldırıldığı an) |
| Google Ads'e içe aktarma | Önceki dönüşüm denetiminde Google Ads dönüşüm listesinde GA4 kaynaklı bir dönüşüm işlemi görülmedi; yani bu dört olay Ads'e içe aktarılmamış. GA4–Ads bağlantısı (müşteri `5395530793`, kişiselleştirilmiş reklam kapalı) duruyor. Kapsam: Ads dönüşüm listesinin arayüz incelemesi; Ads'in ayrı “içe aktarılan dönüşümler” ekranı ayrıca incelenmedi | [DOĞRULANDI] (Ads dönüşüm listesi) / [DOĞRULAMA GEREKLİ] (içe aktarma ekranı) |
| Veri toplama | GA4 etkinlik verileri normal olarak toplanmaya devam ediyor | [DOĞRULANDI] (Data API, 04.11.2026) |

### Yerel test sonuçları (canlı başarı değildir)

Aşağıdakiler yerel site ve GTM Önizleme (çalışma alanı 6) veya kontrollü test kimliğiyle doğrulandı:
- İlk ziyaret, tümünü reddet, **yalnızca analitik**, **yalnızca reklam**, **ikisi birlikte**, **izin geri alma** ve **yeniden kabul** senaryoları (etiket çalışma/çalışmama ve ağ istekleri).
- Çapraz sekme: A reddedilince B tek yenileme; kısmi izin değişimi; kayıt silinmesi; döngü ve yinelenen olay yok.
- Eski sürümlü ve `method`'suz kayıtta panelin yeniden açılması; yeni sürümlü `accept_all` / `reject_all` / `custom` kayıtların korunması.
- Not: Önizleme gerçek GA4 mülkü ve Ads hesabına yerel (`127.0.0.1`) test isteği göndermiştir.

### Canlı üretim testi (04.11.2026)

**04.11.2026 tarihinde canlı üretim testi yapıldı.** Canlı production sürümü `e017740`, canlı GTM sürümü **v5** idi. Canlı sitede aşağıdaki altı senaryo test edildi ve başarılı oldu:

1. İlk ziyaret: GTM ve Google isteği yüklenmedi.
2. Tümünü reddet: Google etiketleri çalışmadı.
3. Yalnızca analitik izni: GA4 çalıştı, Ads dönüşüm isteği oluşmadı.
4. Yalnızca reklam izni: Ads etiketleri çalıştı, GA4 yüklenmedi.
5. Her iki izin: Telefon ve WhatsApp tıklamalarında ayrı GA4 ve Ads olayları gönderildi; çift tetikleme görülmedi.
6. İzinlerin geri alınması: Consent update gönderildi, sayfa bir kez yenilendi ve reddedilen kategorilerin etiketleri çalışmadı.

Canlı test sırasında gerçek telefon araması veya WhatsApp mesajı başlatılmadı; gerçek müşteri dönüşümü oluşturulmadı.

**Kapsam sınırı:** Bu sonuçlar yalnızca test edilen senaryolar için başarı kanıtıdır. Her olası cihaz, tarayıcı ve coğrafi konumda tüm davranışların doğrulandığı iddia edilmez. Yukarıdaki “Yerel test sonuçları” ayrı bir testtir ve canlı başarı yerine geçmez.

### Açık noktalar

| Konu | Durum |
|---|---|
| Analitik-only testinde GA4 olaylarıyla birlikte Ads alan adına `pagead2.googlesyndication.com/measurement/conversion` isteği gidiyordu (`gcs=G101`). GA4'te `phone_click`, `whatsapp_click`, `directions_click` ve `hearing_test_cta` etkinliklerinin anahtar etkinlik işareti kaldırıldıktan sonra GTM çalışma alanı 6 ile yapılan yerel Önizleme testinde bu istek **görülmedi**: yalnızca analitik izninde GA4 çalıştı, Ads dönüşüm etiketleri çalışmadı; yalnızca reklam izninde Ads telefon ve WhatsApp dönüşümleri `value=0 TRY` ile çalıştı; iki izin birlikte verildiğinde her tıklamada bir GA4 ve bir Ads olayı oluştu. GA4–Google Ads bağlantısı **kaldırılmadı**. Sorun yerel GTM Önizleme testinde giderilmiş görünüyor | [KULLANICI DOĞRULAMASI] (yerel Önizleme; **canlı üretim testi değildir**) — Aynı analitik-only senaryosu canlıda 04.11.2026'da test edildi: GA4 çalıştı, Ads dönüşüm isteği oluşmadı (bkz. “Canlı üretim testi (04.11.2026)”) |
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
| GTM container içeriği (canlı v5), GA4 key event'leri, Ads dönüşümleri | GTM: [DOĞRULANDI] (salt okunur). GA4 key event'leri: [DOĞRULANDI] (Admin, 04.11.2026; bkz. GA4 bölümü). Ads dönüşüm ayarları: [KULLANICI DOĞRULAMASI] / [ERİŞİM GEREKLİ] |
| Consent koşullarının canlı sitede test edilmesi (Tag Assistant / DebugView): analitik-only, reklam-only, iki izin birlikte, geri alma | [DOĞRULANDI] (04.11.2026'da canlı üretim testi yapıldı: altı senaryo, bkz. “Canlı üretim testi (04.11.2026)”; Tag Assistant/DebugView ayrıntı incelemesi ve farklı cihaz/tarayıcı/konum kapsamı doğrulanmadı) |
| Entity ve NAP tutarlılığı (site, GBP, sosyal hesaplar, dizinler) | [MEVCUT — AUDIT GEREKLİ] |
