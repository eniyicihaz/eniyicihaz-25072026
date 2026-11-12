# PERFORMANCE_LCP.md

> **Durum:** ACTIVE · Teknik belge · Oluşturulma: 2026-11-11 (2. tur)
> **Amaç:** Darıca ve Phonak sayfalarının LCP teşhisini, yapılan iyileştirmeleri ve **önce/sonra** ölçümlerini kaydeder.
> **Ölçüm düzeneği (önce ve sonra AYNI):** Lighthouse 13.6.0 · mobil emülasyon (Moto G Power sınıfı, 412×823, DPR 1,75) · `--throttling-method=simulate` (Lantern, Slow 4G: 1,6 Mbps / 150 ms RTT, 4× CPU) · **aynı yerel brotli statik sunucu** (`serve2.cjs`, Cloudflare benzeri sıkıştırma) · her sayfa **3 koşu, medyan**. "Önce" = 1. turun son derlemesi (`dist-r1`), "sonra" = bu turun son derlemesi.
> **Sınır:** Laboratuvar ölçümüdür. **INP ölçülemedi** (Lighthouse zaman aralığında etkileşim yok; CrUX/alan verisi API'si bu ortamda kapalıydı). Gerçek kullanıcı (RUM) verisi yayında toplanmalıdır.

---

## 1. Sonuç (medyan, 3 koşu; son derleme, ölçüm sırasında makinede başka iş yokken)

| Sayfa | Performans | LCP | FCP | CLS | TBT | İndirilen | Hedef |
|---|---:|---:|---:|---:|---:|---:|---|
| **Darıca** — önce | 95 | **2,85 s** | 0,94 s | 0 | 80 ms | 314 KB | LCP < 2,5 s |
| **Darıca** — sonra | **99** | **1,95 s** | 0,94 s | 0 | 91 ms | **166 KB** | ✔ karşılandı |
| **Phonak** — önce | 96 | **2,70 s** | 0,94 s | 0 | 95 ms | 272 KB | LCP < 2,5 s |
| **Phonak** — sonra | **99** | **2,25 s** | 0,94 s | 0 | 44 ms | **197 KB** | ✔ karşılandı |
| **Ana sayfa** — önce | 100 | 0,99 s | 0,99 s | 0 | 36 ms | 264 KB | 100'de kalsın |
| **Ana sayfa** — sonra | **100** | 0,98 s | 0,98 s | 0 | 47 ms | **204 KB** | ✔ 100 korundu |

- Koşular (3 koşu): Darıca perf 96/99/99, LCP 1,95 ×3, TBT 208/91/76 ms · Phonak perf 98/99/99, LCP 2,25 ×3, TBT 88/43/44 ms · Ana sayfa perf 100/99/100, LCP 0,94/0,98/0,99, TBT 37/115/47 ms. "Önce" koşuları: Darıca 95 ×3 (LCP 2,85 ×3), Phonak 96/96/94 (LCP 2,70/2,70/2,63), Ana sayfa 100 ×3 (LCP 1,10/0,98/0,99).
- **LCP değerleri simülasyonda kararlıdır** (üç koşuda aynı); **TBT** ise koşular arası oynak (tek koşuda 208 ms çıkabiliyor) — Darıca TBT medyanı 80 → 91 ms **gürültü bandında**, bir iyileşme/kötüleşme olarak yorumlanmamalı.
- **Ana sayfa:** skor 100, LCP 0,99 → 0,98 s, indirilen 264 → 204 KB. Sayfa belgesi yeni bölümlerle (cihaz carousel'i, süzülen cihaz, açık/kapalı satırı, erişilebilirlik paneli) +4,7 KB brotli büyüdü; yazı tipi tasarrufu bunu fazlasıyla karşıladı. (Ölçüm sırasında makinede başka iş çalışırken yapılan bir ara ölçümde ana sayfa LCP 1,08 s çıkmıştı; bu, ölçüm gürültüsüydü ve temiz ölçümde görülmedi — ölçüm sırasında arka plan işi çalıştırmayın.)
- **CLS 0** üç sayfada da (gerçek tarayıcıda `PerformanceObserver` ile de doğrulandı, süzülen cihaz dahil).
- **Dört kategori (tek koşu, 7 sayfa):** erişilebilirlik / en iyi uygulamalar / SEO **100/100/100** hepsinde (ana sayfa, Darıca, Phonak, İşitme Cihazları, SGK, Hizmetlerimiz, Evde Hizmet); performans 96–100, LCP en fazla 2,25 s (Phonak).
- **INP:** ölçülemedi (yukarıdaki sınır). Etkileşim kodu hafif (olay dinleyiciler `passive`, kaydırma `requestAnimationFrame` ile).

## 2. Teşhis: LCP öğesi nedir?

| Sayfa | LCP öğesi | Kaynak | Ayrıntı |
|---|---|---|---|
| Darıca | `img.corporate-hero__image` (gerçek dış cephe fotoğrafı, tam genişlikli hero) | `/images/heroes/darica-dis-cephe-1000.webp` (113 KB) | `fetchpriority=high`, belgede keşfedilebilir, `loading=eager` — **doğru yapılmıştı**. Gözlenen LCP yalnızca ~0,26 s'ydi (TTFB 10 + yük gecikmesi 30 + yükleme 10 + işleme 215 ms) |
| Phonak | `div.brand-page-hero__bg` (CSS arka plan görseli) | `/images/pages/oticon-hero-bg.webp` (18,6 KB) | CSS'te `url()` ile tanımlı (satır içi stil); gözlenen LCP ~0,27 s |

**Neden simülasyonda 2,7–2,85 s?** Lantern, gözlenen LCP anından **önce başlayan tüm istekleri** bant genişliğini paylaşan düğümler sayar. İki sayfada da bu isteklerin yarısından fazlası LCP ile ilgisiz **yazı tipleriydi**: `inter-latin-ext.woff2` **85 KB** + `inter-latin.woff2` **48 KB** = 133 KB, ikisi de "preload". 1,6 Mbps'de yalnızca bunlar ≈ 0,65 s'lik bant genişliği tüketir; üzerine Darıca'da 113 KB'lık hero fotoğrafı, 49 KB'lık belge ve 20 KB'lık logo biner. Yani darboğaz **tek bir yavaş öğe değil, LCP öncesi toplam bayt**.

Kontrol edilen ve **sorun olmayan** noktalar: LCP görseline `loading=lazy` yok; `fetchpriority=high` Darıca'da var; artık/yanlış `rel=preload` yok (yalnızca iki yazı tipi); render-bloklayıcı harici CSS/JS yok (CSS satır içi, betikler `type=module`/geciktirilmiş); CLS 0.

## 3. Yapılan iyileştirmeler

| # | Değişiklik | Etki |
|---|---|---|
| 1 | **Yazı tipi `latin-ext` alt kümesi:** Google'ın 85 KB'lık tam `latin-ext` dosyası (yüzlerce kullanılmayan glif) yerine **yalnızca sitenin kullandığı 6 glif** (Ğ ğ İ Ş ş ₺) → `inter-latin-ext-tr.woff2` **3,3 KB** (`pyftsubset`; aynı değişken eksen, **byte düzeyinde aynı kontur**). `unicode-range` de aynı 6 karaktere indirildi. 113 sayfanın görünür metni tarandı: bu dışında `latin-ext` karakteri yok (→ ve ← zaten önceden sistem yazı tipine düşüyordu) | **−82 KB** her sayfada |
| 2 | **`latin` dosyası DEĞİŞTİRİLMEDİ (48 KB).** Denenen: `wght` ekseninin 100–900 → 400–700'e kısıtlanması (`fontTools.varLib.instancer`) dosyayı 36 KB'a indiriyordu (−12 KB). **Reddedildi:** piksel kıyasında 400 ağırlığı aynı kaldı ama 500/600/700'de kenar pikselleri farklı çıktı (en fazla 157/255, 600 ağırlığında 11.733 kenar pikseli) — `avar` eşlemesi kısıtlanan aralıkta tam yeniden üretilemiyor. Marka tipografisi birebir korunsun diye 12 KB'dan vazgeçildi | 0 |
| 3 | **Darıca hero: AVIF + ara boyut.** Aynı fotoğraf, aynı genişlikler: AVIF 640/800/1000/1600 (q50) önce, WebP yedek (+ yeni 800 w). Mobilde (412 px × 1,75 DPR ≈ 720 px) artık **AVIF 800 w = 38 KB** seçilir (önce 1000 w WebP = 113 KB). Görsel kıyas (kırpılmış cephe/tabela) fark göstermedi; `<picture>` AVIF desteklemeyen tarayıcıda WebP'ye düşer | **−75 KB** Darıca |
| 4 | Önbellek: `public/_headers` ile `/_astro/*` ve `/fonts/*` için `immutable` (yalnızca tekrar ziyaret; laboratuvar sonucunu etkilemez) | Tekrar ziyarette yazı tipi/JS ağdan gelmez |

Toplam: yazı tipi yükü **133 → 51,5 KB** (−82 KB). Phonak'ta yalnızca yazı tipi değişikliği etkili olduğu için LCP 2,70 → 2,25 s.

### Denenip bırakılanlar
- **Logo yeniden kodlama:** 360 w logo 20 KB. WebP q60–80, near-lossless, lossless ve AVIF denendi; en iyisi AVIF ≈ 15 KB (−5 KB). Marka varlığı olduğu ve kazanç küçük olduğu için **dokunulmadı**.
- **Fonts preload'ı kaldırma:** CLS'i (yazı değişiminde kayma) geri getireceğinden denenmedi; alt küme küçüldüğü için preload zaten ucuz.
- **Phonak `oticon-hero-bg.webp` preload:** küçük (18,6 KB) ve sonuç hedefin altında olduğundan eklenmedi.

## 4. Görsel/işlevsel doğrulama

- **Yazı tipi eşdeğerliği (kanıt):** Eski dosyalar (tam `latin` + tam `latin-ext`) ile yeni dosyalar (aynı `latin` + 3,3 KB alt küme) yan yana, 400/500/600/700 ağırlıklarında, `tabular-nums` ve kalın/italik dahil aynı Türkçe metinle (`Çalışma Saatleri: ğüşöçİı ĞÜŞÖÇ ₺ 0123456789 Darıca Avrasya İşitme Cihazları Audéo Naída …`) çizildi: **8.025.600 kanal değerinin 0'ı farklı** (en büyük fark 0). Test: `scratchpad/font-test` (2× DPR, 2200×1216 px).
- **AVIF/WebP:** Aynı kırpımın yan yana karşılaştırması (cephe + tabela): ayırt edilebilir fark yok (38 KB AVIF ≈ 62 KB WebP).
- **Metin kapsamı:** Derlenmiş 113 sayfanın görünür metni tarandı; `latin` + 6 Türkçe-ek glif dışında kalan tek karakterler `→ ← ○` (zaten sistem yazı tipinde çiziliyordu).

## 5. İleride dikkat

- Yeni içerikte `latin` dışı bir karakter (yabancı marka adı vb.) gerekirse `public/fonts/inter-latin-ext.woff2` (asıl dosya yerinde duruyor) yeniden alt kümelenip `fonts.css` `unicode-range`'ine eklenmeli. Yeniden üretim komutu bu belgenin §7'sinde.
- `public/fonts/inter-latin-ext.woff2` (85 KB, asıl `latin-ext`) artık **referans verilmiyor**; yeniden alt kümeleme kaynağı olarak duruyor (sayfa ağırlığına katkısı yok, yalnızca dağıtım boyutu). `inter-latin.woff2` kullanımda ve değişmedi.
- Mobil AVIF/WebP varyantı olmayan diğer hero görselleri (15 dosya `public/images/heroes/`) aynı yöntemle iyileştirilebilir; Darıca ve Phonak dışında hedef gerekmedi.

## 6. Yazı tipi: reddedilen "ağırlık ekseni kısıtlama" denemesi (kayıt)

`inter-latin.woff2`'nin `wght` ekseni 400–700'e kısıtlandığında (36 KB) aynı testte: 400 → **0 fark**; 500 → 308 piksel (en fazla 61/255); 600 → 11.733 piksel (en fazla 157/255); 700 → 1.820 piksel (en fazla 101/255). Gözle ayırt edilemeyen ama bit düzeyinde aynı olmayan kenar kayması. "Görsel fark yok" iddiasını kanıtlayamadığımız için bu deneme **uygulanmadı**; ileride yeniden denenecekse tüm ağırlık sınıfları piksel kıyasından geçmelidir.

## 7. Yeniden üretme

```bash
# yazı tipi: latin-ext → Türkçe 6 glif (latin dosyası olduğu gibi kalır)
PYTHONPATH=<fonttools+brotli> python -m fontTools.subset public/fonts/inter-latin-ext.woff2   --unicodes="U+011E,U+011F,U+0130,U+015E,U+015F,U+20BA" --layout-features='*' --flavor=woff2   --output-file=public/fonts/inter-latin-ext-tr.woff2
# Darıca hero AVIF
node mkavif.cjs public/images/heroes/darica-dis-cephe.webp public/images/heroes/darica-dis-cephe 640,800,1000,1600 50 800
# ölçüm (önce/sonra aynı komut)
./lh3.sh <etiket> <port> 3     # mobil, simulate, 3 koşu → lh-median.cjs medyanları
```

## 8. İkinci oturum ölçümü (2026-11-11): 360° görüntüleyici, yeni hero görseli, altı kartlı carousel sonrası

> **Soru:** Bu oturumda eklenenler (gerçek karelerle 360° görüntüleyici, yeni hero cihaz görseli, altı kartlı carousel, kulak şeması, iç bağlantılar, metin düzeltmeleri) ilk açılışı yavaşlattı mı?
> **Düzenek:** §0'daki ile aynı (Lighthouse 13.6.0 · mobil · `simulate` · aynı makine · brotli q5 yerel sunucu). Sunucu `serve4.cjs`'tir: `serve2.cjs` ile **aynı sıkıştırma**, ek olarak `_headers`/`_redirects` uygular (soğuk yüklemeyi etkilemez).
> **"Önce" nasıl elde edildi:** Oturum başında alınan kaynak anlık görüntüsü (`src` + yapılandırma) karalama alanında **yeniden derlendi** ve "sonra" ile **aynı gün, aynı sunucuyla** ölçüldü. Yani önceki belgedeki rakamlarla değil, aynı koşuda ölçülen temelle karşılaştırılır.

### 8.1 Sonuç (medyan; koşular parantezde)

| Sayfa | | Performans | LCP | CLS | TBT | İndirilen | İstek |
|---|---|---:|---:|---:|---:|---:|---:|
| **Ana sayfa** | önce | 100 (100/99/100) | 1,08 s (1,08/0,98/1,08) | 0 | 41 ms | 207 KB | 12 |
| | **sonra** | **100** (100/100/100) | **1,09 s** (1,10/1,09/1,09) | 0 | 0 ms | **203 KB** | 13¹ |
| **Darıca** | önce | 99 (99/99/98) | 1,96 s (×3) | 0 | 90 ms | 169 KB | 10 |
| | **sonra** | **99** (99/99/99) | **1,96 s** (1,96/1,95/1,96) | 0 | 55 ms | 169 KB | 10 |
| **Phonak** | önce | 99 (98/99/99) | 2,25 s (2,26/2,25/2,25) | 0 | 64 ms | 200 KB | 14 |
| | **sonra** | **99** (95/99/99) | **2,25 s** (×3) | 0 | 56 ms | 201 KB | 14 |
| **Kulak Arkası (BTE)** | önce | 99 (10 koşunun tümü 99–100) | 1,80 s (10 koşu²) | 0 | 89 ms | 137 KB | 10 |
| | **sonra** | **99** (13 koşunun tümü 98–100) | **1,80 s** (13 koşu²) | 0 | 12 ms | **140 KB** | 11¹ |

¹ Fazladan "istek", görüntüleyicinin `data:` biçimindeki saydam yer tutucusudur (0 bayt, ağa gitmez).
² BTE sayfasında simüle LCP koşudan koşuya üç değerden birine oturuyor (≈ 0,94 / 1,80 / 1,95 s): **önce** 10 koşu = 0,94 ×1, 1,80–1,81 ×9; **sonra** 13 koşu = 0,94–0,97 ×3, 1,80–1,81 ×7, 1,95–1,96 ×3. Medyan iki durumda da 1,80 s. 1,95 s değeri temelde hiç görülmedi, sonrasında 13 koşunun 3'ünde görüldü; hedefin (2,5 s) altındadır ama "hiç fark yok" denemez — belge büyüdüğü için (57,0 → 59,5 KB brotli) simülasyonun bu değere oturma olasılığı artmış olabilir. (13 koşunun 3'ü en son derlemede, 10'u ondan yalnızca SSS paneli görünürlük kuralıyla — ≈ 0,2 KB CSS — ayrılan bir önceki derlemede alındı; 7'si temelle **sırayla** koşturuldu ki makine oynaklığı iki tarafa eşit yansısın.)

**Okuma:** Dört sayfada skor ve LCP **temel seviyededir**; bu oturumdaki eklemeler ilk açılışa ölçülebilir bir yük getirmedi. Ana sayfada indirilen bayt 4 KB **azaldı** (yeni hero cihaz görseli 14,8 → 7,3 KB; belge 56,0 → 59,0 KB brotli, +2,9 KB). Belge büyümesi: Darıca +0,3 KB, Phonak +0,2 KB, BTE +2,5 KB. Ana sayfada görüntüleyiciye ait **hiçbir kare ve hiçbir betik** sayfa açılışında inmiyor. "Hızlandı" iddiası yoktur: farklar ölçüm oynaklığı bandındadır (bkz. §1'deki TBT notu).

### 8.2 Ölçümün yakaladığı ve düzeltilen gerileme (BTE sayfası)

İlk uygulamada BTE sayfası LCP'si **1,81 → 2,03 s** çıkmıştı. İki neden, iki düzeltme:

| Adım | BTE LCP (3 koşu) | Açılışta inen görüntüleyici kaynağı |
|---|---|---|
| Oturum öncesi | 1,81 / 1,81 / 1,80 | — |
| İlk sürüm: `<img loading="lazy">` poster + ayrı modül betiği | 0,94 / 2,03 / 2,03 | poster 28,8 KB + betik 2,3 KB |
| Poster HTML'den çıkarıldı (saydam yer tutucu) | 1,95 / 1,09 / 1,95 | betik 2,3 KB |
| Betik de tembel yapıldı (satır içi önyükleyici) | 1,81 / 1,80 / 1,80 | **yok** |

1. **Yerleşik tembel yükleme yeterince tembel değil.** Chrome, `loading="lazy"` görseli görünür alana ≈ 1.250–2.500 px kala ister; görüntüleyici BTE sayfasında 2.737 px aşağıda olduğu hâlde poster sayfa açılışında iniyor ve Lantern onu LCP öncesi yük sayıyordu.
2. **Ayrı modül betiği de LCP öncesi istekti.** Astro bir bileşen betiğini ancak 4 KB'tan küçükse ve `import` içermiyorsa HTML'e gömer; görüntüleyici betiği 4,65 KB olduğu için ayrı dosyaydı.

Çözüm ve bakım notu: `docs/tech/VIEWER_360.md` → "Yükleme sırası".

### 8.3 Dört kategori (tek koşu, 12 sayfa, son derleme)

Erişilebilirlik / en iyi uygulamalar / SEO **100 / 100 / 100** — 12 sayfanın tamamında (ana sayfa, Darıca, Gebze, Çayırova, Phonak, İşitme Cihazları, BTE, SGK, Hizmetlerimiz, Evde Hizmet, Fiyatlar, Kişiye Özel Ayar). Performans 98–100, LCP en fazla 2,26 s (Gebze, Phonak), CLS 0.

Bu ölçüm bir hatayı da yakaladı: "Kişiye Özel Ayar" sayfasında erişilebilirlik **96** çıkmıştı (`aria-hidden-focus`). Neden: bu oturumda eklenen iç bağlantı katmanı, kapalı SSS yanıtlarının içine bağlantı koymuş; kapalı panel `aria-hidden` olduğu hâlde bağlantılara klavyeyle gidilebiliyordu. Tarama: **24 sayfada** aynı durum. Düzeltme: iki SSS bileşeninde kapalı panele `visibility: hidden` (odak sırasından çıkar). Sonra: 112 sayfada **0** (`t-hidden-focus.cjs`), sayfa yeniden **100**.

### 8.4 Yavaş bağlantıda yerleşim kayması (laboratuvar CLS'inin görmediği)

Lighthouse'un `simulate` modu sayfayı kısıtlamasız yükleyip sonucu hesapladığı için **yazı tipi geç geldiğinde** oluşan kaymayı görmez. Gerçek kısıtlamayla (Chrome ağ öykünmesi 1,6 Mbps / 150 ms) BTE sayfasında yükleme sırasındaki kayma ölçüldü: **önce 0,025, sonra 0,015** (hero altındaki giriş bölümü ve içindekiler çubuğu, web yazı tipi yedek yazı tipinin yerini alınca kayıyor). İki değer de "iyi" eşiğinin (0,1) çok altındadır ve bu oturumdan **önce de vardı**; görüntüleyici kareleri inerken ve otomatik dönüş başlarken ek kayma **0**'dır.

### 8.5 Sınırlar

- Tümü **laboratuvar** ölçümüdür (masaüstü Chrome'da mobil öykünme + simüle ağ). **Gerçek telefonda ölçüm yapılmadı.**
- Yerel sunucu HTTP/1.1'dir; canlı site Cloudflare üzerinden HTTP/2/3 ile sunulur. İstek sayısına duyarlı farklar (§8.2) canlıda daha küçük olabilir; mutlak LCP değerleri canlıyla birebir aynı olmaz.
- **INP ölçülemedi** (Lighthouse zaman aralığında etkileşim yok). Alan verisi (CrUX/RUM) yayından sonra izlenmelidir.
- TBT koşudan koşuya oynaktır (aynı derlemede 0–204 ms görüldü); tek koşuluk performans skorları (95–100) buna bağlıdır.

## 9. 2026-11-12 — kare dizili görüntüleyici yerine 3B görüntüleyici

§8.1–§8.2'deki görüntüleyici (`viewer360`) **kaldırıldı**; yerine three.js ile çizilen 3B model geldi (`BTE_3D_VIEWER.md`). Sayfa açılışı kuralı aynıdır: görüntüleyici ilk açılışa **hiçbir istek eklemez** (poster, kod, model sayfa `load` olduktan ve görüntüleyiciye 600 px yaklaşıldıktan sonra istenir).

Aynı düzenek (Lighthouse 13.6.0, mobil öykünme, simüle Slow 4G, yerel brotli sunucusu), **5 koşu medyanı**, iki derleme dönüşümlü koşturuldu ("önce" = eski görüntüleyicili derleme, aynı gün yeniden derlendi):

| Sayfa | Performans önce / sonra | LCP önce / sonra | CLS | İndirilen | İstek | Açılışta görüntüleyici isteği |
|---|---|---|---:|---|---|---:|
| Ana sayfa | 100 / 100 | 1,09 s / 1,09 s | 0 | 203 / 203 KB | 13 / 13 | 0 |
| Kulak Arkası (BTE) | 99 / 99 | 1,80 s / 1,80 s | 0 | 140 / 140 KB | 11 / 11 | 0 |
| Darıca | 99 / 99 | 1,96 s / 1,95 s | 0 | 169 / 169 KB | 10 / 10 | 0 |
| Phonak | 99 / 99 | 2,25 s / 2,25 s | 0 | 201 / 201 KB | 14 / 14 | 0 |

Belge büyümesi: ana sayfa +0,4 KB, BTE +0,4 KB (brotli). Görüntüleyiciye yaklaşınca inen toplam ≈ 0,42 MB'dir (poster 12–17 KB + kod 132 KB brotli + model 284 KB); eski görüntüleyicide bu 1,5–2,4 MB idi. Model hazırlanırken iki ≈ 0,2 sn'lik uzun görev ölçüldü (ekran kartı sürücüsünde gölgelendirici derleme); bunlar sayfa açılışında değil, sonradan ve tarayıcının boş anında çalışır. Ayrıntı, kare süreleri ve sınırlar: `BTE_3D_VIEWER.md` §9–§10. Gerçek telefonda ölçüm **yapılmadı**.

### 9.1 Aynı gün, ek: hero'daki cihaz görseli yeni modelin karesi oldu

Ana sayfa hero'sunda süzülen cihaz görseli (`hero-device-bte-*`) 3B modelin şeffaf zeminli karesiyle (`hero-device-bte3d-*`) değiştirildi; yerleşim buna göre düzenlendi (`BTE_3D_VIEWER.md` §12). Derlemede yalnızca ana sayfanın HTML'i değişti. Aynı düzenek, dönüşümlü **5'er koşu** ("önce" = yukarıdaki tablonun "sonra" derlemesi):

| Ana sayfa | Performans | LCP medyan | CLS | TBT (tek koşular) | İndirilen | İstek |
|---|---|---|---:|---|---:|---:|
| önce | 100 (100/100/100/99/100) | 1,08 s | 0 | 51 / 38 / 0 / 132 / 0 ms | 203 KB | 13 |
| sonra | 100 (99/100/100/100/100) | 1,08 s | 0 | 147 / 29 / 0 / 55 / 68 ms | 205 KB | 13 |

Skor, LCP, CLS ve istek sayısı aynı; sayfa **2 KB ağırlaştı** (görselin aktarımı 7.517 → 9.750 bayt, HTML +57 bayt brotli). LCP öğesi değişmedi (telefonda açıklama paragrafı, masaüstünde merkez fotoğrafı); görsel `fetchpriority="low"` ile gelir. Sayfa açılışında görüntüleyiciye ait istek hâlâ yoktur — hero görseli sabit bir resimdir (dosya adındaki `bte3d` yüzünden istek sayımında görüntüleyiciyle karıştırılmamalı).
