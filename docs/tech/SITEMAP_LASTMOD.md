# SITEMAP_LASTMOD.md

> **Durum:** HAZIR — yerelde uygulandı ve test edildi; **henüz commit/push/deploy edilmedi** (yayın ayrı onay gerektirir) · Teknik belge · Oluşturulma: 2026-11-20
> **Amaç:** Sitemap'teki sayfa bazlı `<lastmod>` tarihlerinin **doğru, gerçek ve yalnızca gerektiğinde** güncellenmesini sağlamak.
> **Bağlayıcılık:** Bu belge lastmod kurallarının **tek normatif kaynağıdır.** `CLAUDE.md` ve `QUALITY_GATES.md` §6 yalnızca buraya işaret eder; kural değişecekse burada değişir.
> **Kapsam:** `astro.config.mjs` (`serialize`), `tools/lastmod/*`. Site HTML'ine, SEO yapısına, görsellere, IndexNow anahtarına ve GitHub Actions iş akışına dokunmaz.

---

## 1. Kalıcı kurallar

### 1.1 Tarihlerin doğruluğu
- Her sayfanın tarihi **kendisine aittir** (sayfa başına bir manifest kaydı).
- **Bütün sayfalara aynı tarih yazılmaz.** (`verify`, tüm sayfalar aynı tarihteyse HATA verir.) Gerçek bir toplu içerik değişikliği birçok sayfayı aynı ana taşıyabilir (başlangıçta 83 sayfa 14 Kasım 2026'da); bu yalnızca gerçekten değişen sayfalar için geçerlidir.
- **Build tarihi, deploy tarihi veya her çalışma anındaki `new Date()` sayfalara uygulanmaz.** Tarih yalnızca manifestten okunur; `astro.config.mjs`'te tarih üreten kod yoktur (bir test bunu korur).
- Tarih **yalnızca sayfanın anlamlı içeriği değiştiğinde** güncellenir (§1.2–§1.4).
- **Tahmini, uydurma veya doğrulanamayan tarih kullanılmaz.** Manifestte kaydı olmayan sayfa için tarih uydurulmaz; doğrulanmış tarih elle `--set` ile verilir. Tarihi bilinmeyen sayfa lastmod'suz kalabilir (`lastmod` isteğe bağlıdır).
- Tarihler **UTC ISO 8601** biçimindedir (`YYYY-MM-DDThh:mm:ss.sssZ`), gerçek bir andır, depo başlangıcından (2026-07-25) sonradır ve gelecekte değildir. Geçersiz değer sitemap'e yazılmaz (build düşmez) ve manifest doğrulaması hata verir.

### 1.2 Tarihi ilerleten değişiklikler
- Sayfanın **ana içerik metninin anlamlı** değişmesi: eklenen + silinen **≥ 10 kelime** (küçük değişiklikler birikimli sayılır, §3).
- **Hizmet, fiyat, telefon, çalışma saati, SGK bilgisi, ürün veya hasta bilgilendirmesi** gibi gerçek bilgilerin güncellenmesi (kelime sayısından bağımsız; bkz. §1.3 istisnası ve §4 "inceleme" durumları).
- Yeni içerik eklenmesi veya eski içeriğin kaldırılması; yeni sayfa.

### 1.3 Tek başına tarihi ilerletmeyen değişiklikler
CSS, renk, yazı tipi, boşluk ve tasarım · görsel optimizasyonu veya dosya boyutu/adının değişmesi · **ALT metni** düzeltmeleri · yalnızca **JSON-LD** veya teknik SEO düzenlemeleri · yalnızca **başlık (`<title>`) ve meta açıklaması** · **menü, üstbilgi, altbilgi** veya ortak arayüz (ana metin dışı) · kodun yeniden düzenlenmesi veya build alınması.

**İstisna — önemli bilgi:** Fiyat, telefon veya hizmet gibi önemli bir gerçek bilgi **yalnızca yapılandırılmış veride** (JSON-LD, başlık, meta) değişmişse bu **göz ardı edilmez**; betik sayfayı "elle inceleme" (`İNCELE:YAPILI`) olarak raporlar ve karar beklenir.

### 1.4 Belirsiz değişiklikler
- Değişikliğin anlamlı olup olmadığı açık değilse tarih **otomatik ilerletilmez**: sayfa "inceleme" durumuna alınır; kullanıcıya bildirilir veya `--hold` ile bilinçli bekletilir. Karar: `--advance` (tarihi ilerlet), `--settle` (kaydet, ilerletme), `--hold` (bekle).
- **Betiğin görmediği gerçek bilgiler:** Betik yalnızca sayı/iletişim desenlerini yakalar (§4.2). Hizmet kapsamı, SGK koşulu, ürün özelliği gibi *sözel* bir bilgi güncellemesi 10 kelimenin altındaysa `KÜÇÜK` görünür; bu durumda değişiklik gerçek bir bilgi güncellemesiyse `--advance` ile **elle** ilerletilir.

### 1.5 Bildirim kuralı
İçerik değişikliği kullanıcıya anlatılırken **lastmod etkisi de belirtilir**:
- "Darıca sayfasının metni değişti → lastmod güncellenecek."
- "Yalnızca görsel (veya CSS/ALT/başlık/menü) değişti → lastmod değişmeyecek."
- "Telefon numarası değişti → lastmod güncellenmesi değerlendirilecek ve raporlanacak (N sayfa inceleme bekliyor)."

İçerik değiştiği hâlde lastmod güncellenmediyse veya güncellenmesi gerekip yapılmadıysa işlem raporunda **nedeni yazılır.**

---

## 2. Sistem nasıl çalışır

```
tools/lastmod/lastmod.json ──(build sırasında okunur)──▶ astro.config.mjs: serialize() ──▶ dist/sitemap-0.xml       (<lastmod> sayfa başına)
        ▲                                                                                  dist/sitemap-index.xml   (<lastmod> = en yeni sayfa tarihi)
        │  yalnızca bu betik yazar (elle düzenlenmez)
tools/lastmod/lastmod.mjs ── check / update --write ◀── derlenmiş dist ↔ manifest (+ taban: HEAD'in derlemesi)
```

- **`serialize()`** (`createSerialize`, `lastmod-lib.mjs`): yalnızca manifesttaki **geçerli** tarihi yazar. URL listesi, sırası ve diğer alanlar değişmez; `changefreq`/`priority` **eklenmez** (Google yok sayar, Bing büyük ölçüde yok sayar). Manifest yok/bozuksa build düşmez; lastmod'suz sitemap üretilir ve build günlüğüne `[lastmod]` uyarısı düşer.
- **sitemap-index `<lastmod>`:** `@astrojs/sitemap` bunu alt sitemap'teki **en yeni sayfa tarihinden** türetir (build zamanından değil).
- **İki imza:** `sig` = `<main>` görünür metni. `fsig` = önemli bilgiler (§4.2). CSS, ALT, JSON-LD (bilgisiz), bağlantı, başlık, meta, menü/üstbilgi/altbilgi, betik ve yorum değişiklikleri **`sig`'i değiştirmez.**
- **Neden git tarihi değil:** `git log` tarihleri toplu aktarım (5. commit 1166 veri dosyası), tasarım ve teknik commit'lerle kirlidir; Cloudflare'in klonu sığ olabilir (doğrulanmadı) ve bu durumda tüm sayfalar aynı tarihi alırdı. Bu yüzden tarihler kalıcı bir manifestte tutulur.

## 3. Manifest (`tools/lastmod/lastmod.json`)

```json
{ "version": 1, "note": "…", "pages": { "/darica-isitme-cihazlari/": { "lastmod": "2026-11-14T20:25:22.000Z", "sig": "…", "fsig": "…", "drift": 0 } } }
```

| Alan | Anlam |
|---|---|
| anahtar | sitemap yolu; `/` ile başlar, `/` ile biter (`/` ana sayfa) |
| `lastmod` | son **anlamlı** içerik değişikliğinin yayına girdiği an (UTC ISO) |
| `sig` | o tarihte kayıtlı ana metin imzası |
| `fsig` | önemli bilgi imzası |
| `drift` | eşik altı (küçük) değişikliklerin **birikimli** kelime sayısı; `drift` + yeni değişiklik ≥ 10 olunca tarih ilerler ve `drift` sıfırlanır |

Dosya **deterministik** yazılır (yollar sıralı, alan sırası sabit). Elle düzenlenmez; `update --write` değişmeyen sayfaların kayıtlarını bayt düzeyinde aynen korur.

## 4. Betik

```sh
npm run build                                          # önce derle (dist/)
node tools/lastmod/lastmod.mjs check                   # salt okunur rapor; çıkış 1 = işlenecek bir şey var
node tools/lastmod/lastmod.mjs update                  # KURU ÇALIŞTIRMA (varsayılan): ne olacağını gösterir
node tools/lastmod/lastmod.mjs update --write          # manifesti yazar
node tools/lastmod/lastmod.mjs verify                  # manifest ↔ sitemap (dist) doğrulaması
node tools/lastmod/lastmod.mjs verify --live           # manifest ↔ CANLI sitemap (deploy sonrası)
node --test tools/lastmod/lastmod.test.mjs             # testler (ağ/build yok)
```

| Seçenek | Anlam |
|---|---|
| `--baseline-ref <ref>` | karşılaştırma tabanı olarak derlenecek git ref (varsayılan **HEAD**). Taban `node_modules/.cache/lastmod-baseline/<sha>` altında bir kez (≈8 sn) derlenir ve önbelleğe alınır (git'in yok saydığı klasör). |
| `--baseline <dist>` / `--no-baseline` | hazır taban kullan / tabansız çalış (büyüklük bilinemez → ana metni değişen sayfalar "inceleme" olur) |
| `--threshold <n>` | anlamlı değişiklik eşiği (varsayılan **10** kelime) |
| `--hold <url>` | sayfayı **bilinçli beklet**: manifest değişmez, rapor "BEKLETİLİYOR" der, çıkış kodunu bozmaz. Tekrarlanabilir. |
| `--advance <url>` | elle incelenen sayfanın tarihini **ilerlet** (`lastmod = --at`) |
| `--settle <url>` | değişikliği **kaydet ama tarihi ilerletme** (imza güncellenir) |
| `--advance-all-review` | inceleme durumundaki (taban/ana metin sorunu olmayan) tüm sayfaları ilerlet — telefon gibi site geneli gerçek bilgi değişimleri için |
| `--set <url>=<ISO>` | **doğrulanmış** bir tarihi elle yaz (kanıtı olan durumlar; kayıt eksikse tek yol) |
| `--at <ISO>` | yazılacak an (varsayılan: şimdi). Geçersiz, gelecekteki veya mevcut tarihten eski değer **reddedilir.** |
| `--write` | `update`'te manifesti yaz (yoksa kuru çalıştırma; `--dry-run` aynı şeydir) |

URL'ler yol (`/darica-isitme-cihazlari/`) veya tam adres olarak verilebilir.

**Sayfa durumları ve yapılacaklar**

| Durum | Anlam | `update --write` / yapılacak |
|---|---|---|
| `ANLAMLI` | ana metin eşik (birikim dahil) ≥ 10 kelime değişti | tarih **ilerler**, `drift` = 0 |
| `KÜÇÜK` | eşik altı değişiklik | tarih **ilerlemez**; imza güncellenir, `drift` birikir |
| `YENİ` | taban dahil hiçbir yerde yok | `lastmod` = `--at` |
| `ARTIK KAYIT` | manifestte var, sitemap'te yok | kayıt silinir |
| `İNCELE:BİLGİ` | ana metin **ve** önemli bilgi değişti | **elle:** `--advance` / `--settle` / `--hold` |
| `İNCELE:YAPILI` | ana metin aynı, önemli bilgi yalnızca JSON-LD/başlık/metada değişti | **elle** (§1.3 istisnası) |
| `İNCELE:TABAN` | taban yok → büyüklük bilinemez | tabanla yeniden çalıştır veya elle karar |
| `İNCELE:ESKİ` | manifest, tabanla (HEAD) uyumsuz — önceki bir değişiklikte betik çalıştırılmamış | `--baseline-ref <eski commit>` ile bak; elle karar |
| `İNCELE:KAYIT` | sayfa tabanda var ama manifestte yok | tarih **uydurulmaz**; kanıtlı tarihle `--set` |
| `İNCELE:MAIN` | `<main>` çözümlenemedi | sayfayı düzelt |
| `BEKLETİLİYOR` | `--hold` verildi | hiçbir şey yazılmaz |

Çıkış kodları: `0` temiz · `1` işlenecek/karar bekleyen sayfa var (veya `verify` hatası) · `2` kullanım/dosya hatası.

### 4.1 Eşik ve birikim
Eşik, ana metindeki **eklenen + silinen kelime** toplamıdır (çoklu küme farkı). Birkaç küçük düzeltme `drift`'te birikir; toplam 10'a ulaşınca tarih ilerler. Eşik; yazım düzeltmesi, noktalama ve tek kelimelik değişikliklerin tarihi ilerletmesini önler.

### 4.2 Önemli bilgi (kelime sayısından bağımsız)
`fsig`; görünür ana metin, `<title>`, meta açıklama ve **tüm JSON-LD metinlerinden** şunları çıkarır: **telefon** (örn. `0262 656 32 77`, `+905337733199`), **tutar** (`20.000`, `25000 TL`), **taksit sayısı**, **yüzde**, **saat** (`08:45`), **e-posta** ve JSON-LD'deki `telephone`, `email`, `opens`, `closes`, `dayOfWeek`, `openingHours`, `streetAddress`, `addressLocality`, `postalCode`, `price*`, `serviceType` alanları. Bu kümelerden biri değişirse sayfa 2 kelimelik bir değişiklikte bile **otomatik ilerletilmez, elle incelemeye** düşer (gerçek sitede ölçüldü: §6). Tarih (`14.11.2026`), yıl ve sürüm numarası bilgi sayılmaz.

## 5. İçerik değişikliğinde izlenecek prosedür

1. **Hangi sayfa(lar) etkileniyor?** Sayfa kaynağı ↔ URL: `src/pages/x.astro` ve `x/index.astro` → `/x/`; `markalar/phonak/[aile].astro` → `/markalar/phonak/<aile>/`. Veri/ortak bileşen düzenlemelerinde etkilenen sayfaları **tahmin etme**; `check` çıktısı listeler.
2. `npm run build` → `node tools/lastmod/lastmod.mjs check`: eski (taban) ve yeni ana metin imzaları karşılaştırılır; her sayfa için durum ve büyüklük görülür.
3. Anlamlı değişiklik varsa önce `update` (kuru çalıştırma), sonra `update --write`. "İnceleme" sayfalarına karar ver (`--advance` / `--settle` / `--hold`).
4. **Tarihi yalnızca gerçekten yayınlanacak içerik için güncelle:** `update --write` taslak aşamasında değil, yayına çıkacak commit'ten **hemen önce** çalıştırılır. Yayın ertelenirse manifesti geri al, yayın günü yeniden çalıştır.
5. **Yayın iptal edilirse veya deploy başarısız olursa** manifesti eski doğru duruma getir: commit öncesi `git checkout -- tools/lastmod/lastmod.json`; commit sonrası önceki commit'teki sürümü geri yükle (`git checkout <önceki> -- tools/lastmod/lastmod.json`). İçerik geri alındıysa manifest de geri alınır.
6. `npm run build` → `node tools/lastmod/lastmod.mjs verify`: manifestteki her sayfa tarihi sitemap çıktısıyla eşleşmeli. Deploy sonrası: `verify --live`.
7. **Değişmeyen sayfaların tarihleri değişmemeli:** `git diff tools/lastmod/lastmod.json` yalnızca ilgili sayfaları göstermelidir. Beklenmedik bir sayfa görünüyorsa durup incele.
8. **İşlem raporunda lastmod etkisini yaz** (§1.5). Manifest, ilgili içerik değişikliğiyle **aynı commit'e** girer.

## 6. Değişiklik türü → lastmod etkisi (gerçek sitede, gerçek build ile ölçüldü, 2026-11-20)

| Değişiklik (gerçek kaynak düzenlemesi) | `check` sonucu | lastmod |
|---|---|---|
| Yalnızca CSS (`OpenStatus` rengi) | 115/115 `UNCHANGED` | **değişmez** |
| Yalnızca ALT metni (işitme testi hero) | 115/115 `UNCHANGED` | **değişmez** |
| Yalnızca başlık + meta açıklama (`hakkimizda`) | 115/115 `UNCHANGED` | **değişmez** |
| Yalnızca menü etiketi (üstbilgi) | 115/115 `UNCHANGED` | **değişmez** |
| SSS cevabına ~27 kelime (işitme testi sayfası) | **1** sayfa `ANLAMLI` (+20 kelime) | o sayfa **güncellenir** |
| Aynı yerde 3 kelimelik düzeltme | 1 sayfa `KÜÇÜK` | **değişmez** (birikir) |
| Yalnızca JSON-LD telefon | **9** sayfa `İNCELE:YAPILI` | **elle karar** |
| Görünür merkez telefonu (tek kaynak) | **15** sayfa `İNCELE:BİLGİ` (2 kelime bile) | **elle karar** |
| Yeni sayfa | 1 `YENİ` | yeni kayıt eklenir |
| Sayfa kaldırıldı | 1 `ARTIK KAYIT` | kayıt silinir |
| `update --write` (SSS değişikliği) | manifestte **1** sayfa, sitemap'te **1** URL değişti; `verify` başarılı; sitemap-index tarihi o sayfanın tarihi | yalnızca o sayfa |

Geçmiş verisi de aynı sonucu verir: 37 ortak (≥10 sayfada kullanılan) bileşen/veri değişikliği içeren commit'in 16'sı hiçbir sayfanın ana metnini değiştirmedi; geniş ortak bileşen (≥50 sayfa) değişikliklerinin sayfa × commit çiftlerinin %86,2'sinde ana metin aynı kaldı.

## 7. Yeni sayfa, silinen sayfa, URL değişikliği

- **Yeni sayfa:** build + `check` → `YENİ`; `update --write` sayfaya `lastmod = --at` ve imzaları yazar. Sitemap'e giren her sayfanın manifestte kaydı olmalıdır; eksik kayıt `verify`'da hata verir.
- **Silinen sayfa:** `ARTIK KAYIT` → `update --write` kaydı siler. (IndexNow silinen/301 bildirimi ayrıdır: `INDEXNOW.md` §5.)
- **URL değişikliği / yeniden adlandırma:** eski yol `ARTIK KAYIT`, yeni yol `YENİ` olur: yeni URL kendi yayın tarihini alır (eski tarih taşınmaz; sayfa aramada yeni bir URL'dir). Eski URL için 301 `public/_redirects` ile ayrıca yönetilir (`docs/tech/REDIRECTS_AND_HUBS.md`).
- **Başka yolla eksik kalan kayıt:** `İNCELE:KAYIT` → tarih uydurma; kanıtlı tarihle `--set /yol/=2026-…Z`.

## 8. Build ve sitemap doğrulaması

1. `npm run build` hatasız; `dist/sitemap-0.xml` ve `dist/sitemap-index.xml` üretildi.
2. `node tools/lastmod/lastmod.mjs verify` başarılı: her sitemap URL'sinin manifest kaydı var, tarihler eşleşiyor, artık kayıt yok, tarihler geçerli, tüm sayfalar aynı tarihte değil, sitemap-index tarihi en yeni sayfa tarihine eşit.
3. **URL listesi ve sırası değişmemeli** (`QUALITY_GATES.md` §6): sitemap'ten `<lastmod>` etiketleri çıkarıldığında önceki sitemap ile bayt bayt aynı olmalıdır.
4. Yalnızca `sitemap-*.xml` dosyaları değişmeli; diğer `dist/` dosyaları (HTML, CSS, JS, `_headers`, `_redirects`, `robots.txt`) aynı kalmalı.
5. Deploy sonrası `verify --live` ve (gerekirse) IndexNow Actions çalışmasında `POST` olmadığı kontrol edilir.

## 9. Hatalı tarihlerin önlenmesi (savunma katmanları)

| Katman | Ne yapar |
|---|---|
| `createSerialize` | geçersiz/gelecek/eski tarihi sitemap'e **yazmaz** (kütüphane geçersiz tarihte build'i düşürürdü; deneyle doğrulandı), uyarı verir |
| `validateManifest` | biçim, tarih geçerliliği, eksik imza, hatalı yol, negatif birikim |
| `update` | `--at` doğrulanır (geçersiz/gelecek/mevcut tarihten eski → reddedilir); üretilen manifest geçersizse **yazılmaz** |
| `update` varsayılanı | kuru çalıştırma; yazmak için bilinçli `--write` |
| `classifyPages` | tarih yalnızca ana metin eşiği veya yeni sayfa ile ilerler; belirsiz durumlar "inceleme"; kaydı olmayan sayfaya tarih verilmez |
| `verify` | manifest ↔ sitemap eşleşmesi; tüm sayfa aynı tarihse hata; geleceğe/geçmişe taşan değerler |
| testler | 47 test + 18 mutasyon denemesi (kuralları bozan her değişiklik bir testi kırar) |

## 10. Başlangıç tarihleri ve dayanakları

Başlangıç manifesti, `main` geçmişinin **56 durumunun tamamı derlenerek** (hepsi başarılı) her sayfanın ana metin imzasının commit commit karşılaştırılmasıyla üretildi. Yayın zamanı, GitHub'da Cloudflare Pages check run'ının tamamlanma saatidir (50 commit'te doğrudan; 6 `[CI Skip]` commit'te bir sonraki deploy). Dayanak commit'inin, o sayfanın import kümesinden dosya değiştirdiği **104/104** metin değişikliğinde doğrulandı.

| Tarih (UTC) | Commit | Sayfa | Dayanak |
|---|---|---|---|
| 2026-09-30T22:40:23Z | `b1b9598` | 1 | KVKK başvuru formu sayfası oluşturuldu |
| 2026-10-08T22:35:04Z | `81b0f29` | 2 | PR #2 "phase-2-p0-truth": `degerlendirme/ucretsiz-isitme-testi`, `uygulama-ayar/cihaz-deneme` |
| 2026-11-03T23:56:21Z | `c3f573f` | 1 | `kvkk/gizlilik-politikasi` (Cloudflare Web Analytics açıklaması; `[CI Skip]`, sonraki deploy) |
| 2026-11-12T04:58:56Z | `8cd13a6` | 21 | "Publish site refresh": 14 sayfanın metni + 7 yeni hub sayfası |
| 2026-11-14T07:30:12Z | `dfab0ed` | 2 | `kvkk/aydinlatma-metni`, `kvkk/cerez-politikasi` (gizlilik açıklamaları) |
| 2026-11-14T09:32:26Z | `7c69e9c` | 3 | Phonak `cros`, `naida`, `sky` sayfaları oluşturuldu |
| 2026-11-14T20:25:22Z | `c72e354` | **83** | Widex/Signia/Rexton kaldırıldı, "10+ marka" ve nötr destek ifadeleri (sayfa başına medyan 22 kelime): **gerçek toplu içerik değişikliği** |
| 2026-11-16T21:52:18Z | `1184df4` | 2 | `/iletisim/` ve `/sgk-isitme-cihazi-odemesi/`: iletişim/saat mesajı (**sahibin kararıyla** 16 Kasım) |

**Karar notları:** Anlamlı eşik 10 kelime. Başlık/meta tek başına tarihi ilerletmez. 83 sayfanın aynı ana (14 Kasım) sahip olması gerçek toplu değişikliğe dayandığı için korunur. **Ortak/arayüz commit'leri içerik sayılmadı:** harita onay metni (`b1b9598`, `5b36a99`, `dfab0ed`), CTA/iletişim mikro-metni (`1184df4`), çerez paneli metni (`43ca51a`). Bunlardan etkilenen **16 sayfa ihtiyatlı (arayüz öncesi) tarihle** kaydedildi; `/iletisim/` ve `/sgk-isitme-cihazi-odemesi/` ise yukarıdaki sahibin kararıyla 16 Kasım'dır. Başlangıçta tüm sayfaların `drift` değeri 0'dır (sonradan olan <10 kelimelik düzeltmeler birikime sayılmadı).

## 11. IndexNow ile ilişki

Etkileşim yoktur: IndexNow betiği sitemap'ten yalnızca `<loc>` URL'lerini okur (`<lastmod>` eklenince aynı URL kümesini verir — gerçek fonksiyonlarla sınandı) ve sayfa imzasını sayfa HTML'inden hesaplar. Yalnızca manifest/sitemap değişen bir commit hiçbir sayfa imzasını değiştirmez, IndexNow bir şey göndermez. Manifest `src/` veya `public/` altında **olmadığı** için iş akışının "içeriğe dokundu" bekleyişi de tetiklenmez. IndexNow anahtarı ve iş akışı bu işte değiştirilmedi.

## 12. Geri alma

- **Tüm sistemi kaldırmak:** bu işin commit'ini geri al (`astro.config.mjs`'ten `serialize` ve manifest yükleme, `tools/lastmod/`, belge ve kural satırları kalkar) → sitemap `lastmod`'suz eski haline döner. Arama motorlarında kalıcı bir iz kalmaz (yalnızca önbelleğe alınmış tarihler zamanla önemsizleşir).
- **Hızlı devre dışı bırakma:** manifestte `pages`'i boşaltmak yeterlidir (build düşmez, lastmod yazılmaz).
- **Tek sayfa hatası:** o sayfanın kaydını düzelt/sil, `verify` çalıştır.

## 13. Sınırlar ve bilinenler

- Betik ve testler **CI'da çalışmaz** (GitHub Actions iş akışı değiştirilmedi); yerelde çalıştırılır. Unutma riski `QUALITY_GATES.md` §6 maddesi ve `CLAUDE.md` ile azaltılır.
- Tarih, betiğin `update --write` çalıştığı andır (commit'ten hemen önce; deploy'dan ≈ dakikalar önce). Başlangıç tarihleri ise gerçek deploy saatleridir.
- Önemli bilgi tespiti sayı/iletişim desenlerine dayanır; sözel bilgi güncellemeleri için §1.4.
- **Google ve Bing'in `lastmod`'u fiilen ne kadar kullandığı doğrulanamaz:** Google yalnızca tutarlı ve doğrulanabilir biçimde doğruysa kullanır ve `changefreq`/`priority`'yi yok sayar; Bing tarama planlamasında kullanmayı planladığını açıklamış, ancak sürekli aynı/güncel tarihleri geçersiz sayabileceğini belirtmiştir. Bu bir sıralama faktörü değil, tarama sinyalidir.
- Taban derlemesi `git archive` + `tar` + `astro build` kullanır; yalnızca `node_modules` kurulu bir makinede çalışır.

## 14. Testler

`node --test tools/lastmod/lastmod.test.mjs` (47 test; ağ ve build kullanmaz): tarih doğrulama; imza duyarlılığı (içerik değişir, tasarım/ALT/JSON-LD/başlık/meta/menü değişmez); önemli bilgi (telefon/fiyat/saat/taksit/e-posta, yalnızca JSON-LD); sınıflandırma matrisi ve eşik kenarları; birikim; planın uygulanması (değişmeyen kayıtlar bayt düzeyinde aynı); manifest yükleme/bozuk dosya; `serialize` (gerçek `sitemap` kütüphanesiyle); `verify`; CLI uçtan uca (kuru çalıştırma, `--write`, `--hold`, `--advance`, `--settle`, `--at`, `--set`, yeni/silinen sayfa, `--no-baseline`, `--live`); kural koruması (`astro.config.mjs`'te tarih üretimi yok, `item.lastmod` tek yerde atanır, gerçek manifest geçerli).
