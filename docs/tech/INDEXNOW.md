# INDEXNOW.md

> **Durum:** HAZIR — yerelde uygulandı ve test edildi; **henüz commit/push/deploy edilmedi** (yayın ayrı onay gerektirir) · Teknik belge · Oluşturulma: 2026-11-19
> **Amaç:** Her Cloudflare Pages dağıtımından sonra yalnızca **yeni / içeriği değişen / silinen / kalıcı taşınan** URL'leri IndexNow'a bildirmek; 115 URL'nin tamamını her deploy'da göndermemek.
> **Kapsam:** `www.eniyicihaz.com` (apex 301 verir; IndexNow ana makinesi hep `www`). Sitenin çıktısına, SEO yapısına, görsellere ve performansa dokunmaz: tek site çıktısı değişikliği `dist` köküne eklenen 32 baytlık anahtar dosyasıdır.
> **Köken:** Bing Webmaster Tools denetimi (2026-11-19): IndexNow kurulu değildi, Bing'deki dizin kopyaları bayattı.

---

## 1. Verilen kararlar

| Konu | Karar |
|---|---|
| Uç nokta | `https://api.indexnow.org/indexnow` (tek uç nokta; gönderim katılımcı motorlarla paylaşılır — SSS) |
| İlk çalışma | **Bootstrap**: yalnızca mevcut URL imzalarını kaydeder, **hiçbir şey göndermez** |
| 301 ile taşınan, daha önce sitemap'te olan eski URL'ler | Bildirilir (eski URL gönderilir; hedefi sitemap'te olmalı) |
| Toplu değişiklik koruması | Bir çalışmada **30'dan fazla** veya uygun URL'lerin **%40'ından fazlası** yeni/değişen ise otomatik gönderim durur |
| Günlük emniyet çalıştırması (`schedule`) | **Yok** |
| Anahtar dosyasına `noindex` başlığı | **Yok** (`_headers` değişmedi) |
| Eski 404 URL'lerin silinen bildirimi | **Sahibinin ayrı onayı olmadan yapılmaz** (bkz. §8) |
| `lastmod` | Bu işin dışında tutuldu; ayrı uygulandı (`docs/tech/SITEMAP_LASTMOD.md`). Sitemap'e `lastmod` eklenmesi IndexNow'u etkilemez (§11 orada) |

## 2. Parçalar

| Dosya | Görev |
|---|---|
| `public/<anahtar>.txt` | IndexNow anahtar dosyası. Astro `public/` içeriğini `dist` köküne kopyalar → `https://www.eniyicihaz.com/<anahtar>.txt`. İçerik = dosya adı, **32 bayt, satır sonu yok**. |
| `tools/indexnow/indexnow.mjs` | Bağımlılıksız Node (≥ 20) betiği: sitemap → canlı sayfalar → imza → karşılaştırma → (isteğe bağlı) POST. |
| `tools/indexnow/indexnow.test.mjs` | Ağ kullanmayan birim/uçtan uca testler (`node --test tools/indexnow/indexnow.test.mjs`). |
| `.github/workflows/indexnow.yml` | Tetikleyici + önceki durumu getirme + betiği çalıştırma + yeni durumu saklama. |
| `docs/tech/INDEXNOW.md` | Bu belge. |

Değişmeyenler: `astro.config.mjs`, `src/`, `package.json` (yeni bağımlılık/komut yok), `public/_headers`, `public/_redirects`, `robots.txt`, sitemap. Betik ve iş akışı `dist`'e girmez, siteye çalışma zamanı etkisi yoktur.

## 3. Çalışma akışı

1. **Tetikleyici.** Cloudflare Pages GitHub'a "Deployment" kaydı yazmaz; her dağıtım için `Cloudflare Pages` adlı bir **check run** yazar (başarıda başlık "Deployed successfully"). İş akışı `check_run: completed` olayını dinler ve yalnızca şunlarda çalışır: uygulama `cloudflare-workers-and-pages`, ad `Cloudflare Pages`, sonuç `success`, **dal `main`** (dal önizlemeleri de aynı adlı check run üretir). Elle çalıştırma (`workflow_dispatch`) ayrıca vardır.
2. **Bekleme.** Dağıtımın canlıya yansıması için 60 sn. Commit `src/` veya `public/` içeriğine dokunduysa ama hiç değişiklik bulunmadıysa **bir kez** 2 dk sonra yeniden bakılır (yansıma gecikmesi olabilir; CSS-only değişikliklerde gerçekten 0 çıkabilir).
3. **Sitemap.** Canlı `sitemap-index.xml` → `sitemap-0.xml` okunur. 10'dan az URL = sitemap bozuk sayılır, çalışma durur. Yalnızca `https://www.eniyicihaz.com/...` (sorgu/parça yok) kabul edilir.
4. **Sayfa denetimi.** Her URL `redirect: manual` ile çekilir (eşzamanlılık 6). Bildirime uygun olmak için: HTTP 200 · `text/html` · `X-Robots-Tag`/meta robots'ta `noindex` yok · **kendine dönük canonical** · `<main>` var. Uygun olmayan URL **hiçbir zaman gönderilmez** (yalnızca raporlanır).
5. **İçerik imzası** (§4) hesaplanır ve önceki durumla karşılaştırılır.
6. **Silinen/taşınan** (§5) belirlenir, **koruma önlemleri** (§6) uygulanır.
7. **Gönderim.** Kalan liste **tek bir POST** ile gider; 200/202 başarıdır. Başarılıysa yeni durum yazılır ve artifact olarak saklanır.

Gönderim gövdesi:

```json
{ "host": "www.eniyicihaz.com", "key": "<anahtar>", "keyLocation": "https://www.eniyicihaz.com/<anahtar>.txt", "urlList": ["https://www.eniyicihaz.com/…"] }
```

## 4. İçerik imzası — neyi izler, neyi izlemez

**Girer:** başlık · meta açıklama · canonical · `<main>` içindeki görünür metin · `<main>` içindeki bağlantı hedefleri (parçasız) · görsel `alt` + dosya adı (içerik özeti eki hariç, ör. `f.Abcd1234.webp` → `f.webp`) · JSON-LD (biçimden bağımsız).

**Girmez:** üst bilgi/alt bilgi (`<main>` dışı) · CSS/stil · betikler · sınıf adları ve `style` · yorumlar · Cloudflare e-posta kodlaması. Yani **yalnızca görsel/yapısal değişiklikler IndexNow'a gitmez**; sitedeki içerik, alt metin, bağlantı veya şema değişince gider.

**Neden ham HTML özeti kullanılmıyor (ölçüm, 2026-11-19):** Cloudflare E-posta Adresi Gizleme her **istekte** rastgele anahtar kullandığından aynı sayfanın iki ardışık çekimi **115/115 sayfada** farklı HTML döndü; ham özet her deploy'da 115 sahte "değişti" üretirdi. Normalleştirilmiş imzada iki çekim arası fark **0/115**. Yerel `dist` ile Cloudflare'in derlediği canlı sürüm aynı imzayı **111/115** sayfada verdi (kalan 4 KVKK sayfası yalnızca e-posta çevirisi nedeniyle ayrışır; betik her iki imzayı da canlıdan aldığı için bu fark sorun çıkarmaz).

**Kararlılık denetimi:** Her çalışmada örnek sayfalar (ilk URL, bir `/kvkk/` sayfası ve eşit aralıklı diğerleri; toplam 5) ikişer kez çekilir. İmzalar farklıysa betik **durur** (çıkış kodu 1); amaç, imza gürültüsünün toplu sahte bildirime dönüşmesini engellemektir.

## 5. URL sınıflandırma politikası

| Durum | Ne yapılır |
|---|---|
| Sitemap'te, 200, uygun, durumda yok | **Yeni** → gönderilir |
| Sitemap'te, uygun, imza değişmiş | **Değişen** → gönderilir |
| Sitemap'te, uygun, imza aynı | Gönderilmez |
| Sitemap'te ama uygun değil (404, 301, noindex, canonical farklı, hata…) | **Gönderilmez**, raporlanır; durumu ilerlemez (düzelince aday olur) |
| Durumda vardı, sitemap'ten düştü, canlıda **404/410** | **Silinen** → gönderilir (SSS: silinen sayfalar 404/410 iken bildirilmeli) |
| Durumda vardı, sitemap'ten düştü, **301/308** ve hedef sitemap'te | **Taşınan** → eski URL gönderilir (SSS: yönlendirilen URL'ler gönderilmeli; eski/yeni ayrımı belirtilmiyor, eski URL seçildi) |
| Durumda vardı, sitemap'ten düştü, 200 / geçici yönlendirme / hedef sitemap dışı | Yok sayılır (gönderilmez) |
| Durumda vardı, sitemap'ten düştü, 5xx/ağ hatası | Korunur; sonraki çalışmada yeniden bakılır |
| **Hiç bilinmeyen** (durumda olmayan) bir 404 URL | **Asla otomatik gönderilmez** |

Gönderilen silinen/taşınan URL'ler durumdan düşer. Cloudflare `_redirects` 404/410 dönemez; silinen sayfa, dosya yok olduğu için `404.html` ile 404 koduyla döner — IndexNow bunu kabul eder (410 için Pages Function gerekir; yapılmadı).

## 6. Koruma önlemleri

- **`--send` kapısı:** Betikte `--send` verilmedikçe hiçbir koşulda POST yoktur (kuru çalıştırma). Test + mutasyon denemesiyle doğrulandı.
- **Toplu değişiklik koruması:** Yeni+değişen sayısı **> 30** veya **> %40** (uygun URL'ler üzerinden) ise otomatik gönderim yapılmaz; iş akışı uyarı yazar. Silinen+taşınan için aynı eşik (önceki durum kayıt sayısı üzerinden) ayrıca uygulanır. Doğruysa elle `confirm_bulk` ile çalıştırılır. Korunan URL'lerin durumu ilerlemez; onaylı çalıştırmada gider. (`--all` bu eşiği bilinçli olarak atlar.)
- **Debounce:** Aynı URL 10 dk içinde tekrar gönderilmez (IndexNow SSS: aynı URL için en az 5 dk).
- **Anahtar doğrulaması:** `--send` ile çalışırken anahtar dosyası canlıda `200`, `text/plain`, gövde = anahtar olmalı; değilse gönderim durur (deploy öncesi çalıştırma POST atmaz).
- **Başarısız POST:** 5xx ve ağ hatası 2 kez yeniden denenir (10 sn, 60 sn). **4xx (429 dahil) yeniden denenmez.** Başarısızlıkta durum dosyası **yazılmaz**; aynı URL'ler sonraki çalışmada yeniden aday olur.
- **Tek POST:** Çalışma başına tek istek (10.000 URL tavanı aşılırsa parçalanır).
- **Genel `User-Agent`:** `IndexNowNotifier/1.0`.

## 7. Anahtar

- **Üretim:** `node -e "process.stdout.write(require('crypto').randomBytes(16).toString('hex'))"` → 32 onaltılık karakter. Protokol: 8–128 karakter, `a-z A-Z 0-9 -`.
- **Konum:** `public/<anahtar>.txt`, içerik yalnızca anahtar (UTF-8, BOM/satır sonu yok). Betik anahtarı `public/*.txt` içinde **tek** eşleşen dosyadan bulur ve içeriğin ada eşitliğini doğrular; ikinci bir yapılandırma kaynağı yoktur. (`core.autocrlf=true` olan makinelerde de sorun çıkmaz: dosyada satır sonu yok.)
- **Gizli değildir.** Protokol gereği dosya herkese açık olmak zorundadır; depo herkese açık olduğu için anahtar commit'te de görünür. İş akışı **sır kullanmaz**.
- **Döndürme:** Yeni anahtar üret → yeni `public/<yeni>.txt` ekle, eskisini sil → deploy. İlk gönderimde arama motorları yeni anahtarı doğrular (SSS). Şüpheli kullanım olursa aynı yol izlenir.
- **Doğrulama (deploy sonrası):** `https://www.eniyicihaz.com/<anahtar>.txt` → `200`, `Content-Type: text/plain; charset=utf-8`, `Content-Length: 32`, gövde = anahtar. İlk POST'ta `200` veya `202` normaldir; `403` anahtar uyuşmazlığı, `422` ana makine/anahtar şeması veya erişilemeyen dosya demektir.

## 8. Durum saklama, bootstrap ve elle çalıştırma

**Durum:** Her URL için `{ sig, notifiedAt }` — iş akışının kendi **artifact**'ında (`indexnow-state`, 90 gün) saklanır; depoya commit/etiket/dal **yazılmaz** (ek dal Cloudflare'de önizleme build'i tetiklerdi). Sonraki çalışma, adı `indexnow-state` olan **en yeni süresi dolmamış** artifact'ı okur.

**Bootstrap:** Durum yoksa (ilk çalışma ya da artifact süresi doldu/silindi) betik yalnızca imzaları kaydeder, **hiçbir şey göndermez**. Bozuk (JSON'u okunamayan) durum dosyası ise sessizce bootstrap'a dönmez, hata verir.

**Elle çalıştırma** (Actions → IndexNow → Run workflow):

| Girdi | Anlam |
|---|---|
| `mode = dry-run` (varsayılan) | Hiçbir şey gönderilmez, durum yazılmaz; ne gönderileceğini gösterir |
| `mode = diff` | Yalnızca değişenler (otomatik çalışmayla aynı) |
| `mode = all` | Tüm uygun URL'ler (bir kerelik tam gönderim; IndexNow SSS tüm siteyi göndermeyi önermez ama yeniden tasarım sonrası tam gönderimi kabul edilebilir sayar) |
| `confirm_bulk` | Toplu değişiklik korumasını bilinçli aş |
| `extra_removed_urls` | Boşlukla ayrılmış tam URL'ler. Yalnızca **404/410** (veya sitemap'e 301) **doğrulanırsa** gönderilir. **Sahibin AYRI onayı olmadan kullanılmaz** (Bing'de duran yaklaşık 35 eski 404 adres için tek seferlik bildirim bu yolla yapılabilir) |

**Yerel kullanım** (kuru çalıştırma — POST yok):

```sh
node tools/indexnow/indexnow.mjs                       # bootstrap önizlemesi
node tools/indexnow/indexnow.mjs --state d.json        # önceki duruma göre ne gönderileceğini göster
node tools/indexnow/indexnow.mjs --out-state y.json    # durumu (başarılı sayarak) yaz
node --test tools/indexnow/indexnow.test.mjs           # testler (ağ yok)
```

## 9. Sorun giderme

| Belirti | Olası neden / yapılacak |
|---|---|
| İş akışı hiç çalışmıyor | `check_run` tetikleyicisinin üçüncü taraf (Cloudflare) check run'ında çalıştığı **ilk gerçek dağıtımda doğrulanmalıdır**. Çalışmazsa `workflow_dispatch` ile elle çalıştırın ve bu belgeye not düşün. |
| "Önceki durum YOK → bootstrap" her seferinde | Artifact üretilmiyor/okunamıyor (izin `actions: read`, ad `indexnow-state`). |
| "Kararlılık denetimi BAŞARISIZ" | Aynı sayfa iki çekimde farklı imza verdi; Cloudflare/şablon gürültüsü. Normalleştirmeyi (`normalizeHtml`/`contentSignature`) gözden geçirin; **gönderim yapılmaz.** |
| "TOPLU DEĞİŞİKLİK KORUMASI" | Çok sayıda sayfa değişti. Beklenen bir toplu içerik değişikliği ise `confirm_bulk` ile elle çalıştırın. |
| POST `403` | Anahtar dosyası canlıda yok/içerik eşleşmiyor (§7 doğrulaması). |
| POST `422` | URL'ler `www.eniyicihaz.com` ana makinesine ait değil, anahtar şemaya uymuyor ya da anahtar dosyası erişilemiyor. |
| POST `429` | Çok fazla istek; `Retry-After`'e uyun, aynı URL'yi 10 dk içinde tekrar göndermeyin. |
| POST `202` | İlk istekte normal (anahtar doğrulaması bekleniyor). |

## 10. Bilinçli olarak YOK / sınırlar

- Günlük emniyet çalıştırması yok. Tetikleyici çalışmazsa elle çalıştırılır.
- Anahtar dosyası için `noindex` başlığı yok; dosya hiçbir yerden bağlı değildir.
- Eski 404 adreslerin otomatik toplu bildirimi yok; yalnızca daha önce sitemap'te olup sonradan silinen URL'ler (yukarıdaki kuralla) otomatik bildirilir.
- IndexNow **indekslemeyi veya sıralamayı garanti etmez**; arama motoruna "bu URL değişti" der. Bing Webmaster'daki bayat "izin yok" kayıtları ve eski adresler yeniden taramayla düzelir.
- Belgede (indexnow.org) uç nokta listesinde Google yoktur; Google için sitemap yolu aynen kalır.
- `www` ile `www`'suz ana makinenin protokolde eşdeğer sayılıp sayılmadığı belgelerde belirtilmez; bu yüzden hep `www` + açık `keyLocation` kullanılır.

## 11. Geri alma

İş akışını devre dışı bırakmak/silmek yeterlidir (site etkilenmez). Anahtarı iptal etmek için `public/<anahtar>.txt` silinir (sonraki gönderimler `403` alır). Betik ve test dosyaları siteden bağımsızdır.

## 12. İlk yayın sonrası doğrulama listesi

1. Anahtar URL'si: `200`, `text/plain`, 32 bayt, gövde = anahtar (§7).
2. Sitemap hâlâ 115 URL; başlık/canonical/yönlendirme davranışı değişmemiş.
3. Actions'ta ilk (bootstrap) çalışma: "Önceki durum YOK", POST yok, `indexnow-state` artifact'ı oluşmuş.
4. İş akışını elle `dry-run` ile çalıştır: 0 gönderilecek URL beklenir.
5. (Sahibinin onayıyla) tek seferlik `mode=all` ve/veya `extra_removed_urls`.
6. Ertesi gün Bing Webmaster → IndexNow bölümünü salt okunur kontrol et.
7. Sonraki gerçek deploy'da yalnızca değişen URL'lerin gittiğini iş akışı özetinden doğrula.
