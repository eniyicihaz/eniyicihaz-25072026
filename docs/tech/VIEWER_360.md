# VIEWER_360.md

> **Durum:** KISMEN GEÇERSİZ (2026-11-12) · Teknik / dahili üretim belgesi · Oluşturulma: 2026-11-11 (2. tur)
> **2026-11-12 — kare dizili 360° görüntüleyici KALDIRILDI.** İşletme sahibi görsel kaliteyi kabul edilemez buldu (480p videodan büyütülmüş, bulanık ve kenarları bozuk kareler; tüp ve kulak kalıbı yok; yalnızca yatay 5°'lik adımlar). Bileşen, veri dosyası ve 144 kare dosyası siteden çıkarıldı; yerini **markasız, özgün bir 3B model** aldı → **`docs/tech/BTE_3D_VIEWER.md`**.
> Bu belgede **§1–§5 ve §8 yalnızca tarihsel kayıttır** (artık yayında olmayan görüntüleyicinin nasıl üretildiği). **§7 (temsili kulak çizimi) hâlâ geçerlidir.**
> **2026-11-12 (aynı gün, sonradan) — hero'daki gerçek cihaz görseli de DEĞİŞTİ.** Sahibinin isteğiyle ana sayfa hero'sunda süzülen cihaz artık yeni 3B modelin başlangıç karesidir → `BTE_3D_VIEWER.md` §12. **§6 artık yalnızca**, depoda duran ama kullanılmayan `hero-device-bte-*` dosyalarının nasıl üretildiğinin kaydıdır.
> **Amaç (özgün):** Sürükle-döndür 360° cihaz görüntüleyicisinin **hangi gerçek malzemeden, hangi yöntemle** üretildiğini, **yapay zekânın nerede kullanıldığını**, sınırlarını ve yeniden üretme adımlarını kaydeder. Ana sayfa hero'sundaki gerçek cihaz görseli ve "kulakta nerede durur" bölümündeki temsili kulak çizimi de bu belgededir.
> **Yayın durumu:** Bu belgenin anlattığı kare dizili görüntüleyici **hiç yayımlanmadı** (yayından önce kaldırıldı). Belge, 2026-11-12 yayın commit'ine tarihsel kayıt olarak girdi.

---

## 1. Kaynak malzeme (işletme sahibi sağladı)

`reference-assets/hearing-aid-360/Avrasya-Isitme-Cihazi-360-Referanslari/` — **76 fotoğraf + 1 video**, hepsi aynı fiziksel kulak arkası (BTE) cihaz. **Ham dosyalar siteye (`public/`) girmez.**

| Set | İçerik | Teknik | Kullanım |
|---|---|---|---|
| Fotoğraf seti 1 (41 kare, 09:52–09:53) | Cihaz elde ve poşete bağlı, lacivert fon | 1500×2000, iç mekân sarı ışık (cihaz bej/altın görünüyor) | Kanca biçiminin doğrulanması (klips yokken tam kanca görünüyor) |
| Fotoğraf seti 2 (35 kare, 10:22–10:23) | Cihaz metal klipsle güneş enerjili döner tablada, dış mekân | 1500×2000 (bir kısmı 2000×1500), portre modu (zemin bulanık), gün ışığı (cihaz kahverengi) | **Hero görseli** (#73: `…10.23.03 (1).jpeg`); geometri karşılaştırması |
| Video (81,6 sn) | Aynı döner tabla; kamera elde, 6 farklı konumdan | **480×854, 30 kare/sn, H.264 ≈ 1,5 Mb/sn** (WhatsApp sıkıştırması) | **360° kareleri** |

Görsel inceleme (76 fotoğrafın tamamı + videonun 2.446 karesi): cihaz kahverengi gövdeli, üstte tek parça ses/program düğmesi, iki mikrofon deliği, pil kapağı dikişi ve şeffaf kancası olan bir BTE. Üzerinde okunabilir marka/model yazısı yok → sitede **marka/model belirtilmez**.

## 2. Üç yaklaşımın değerlendirmesi

| | A. Gerçek 3B model (GLB) | **B. Çok açılı gerçek kare dizisi — SEÇİLDİ** | C. Eksik açıların yapay zekâ ile üretilmesi |
|---|---|---|---|
| Bu malzemeyle sonuç | **Yeterli kalitede üretilemez.** Klasik fotogrametri (SfM) özelliksiz, tek renk, parlak ve küçük bir cisimde eşleşecek nokta bulamaz; ayrıca cihaz her karede zemine göre döndüğü için zemin maskelenmeden kullanılamaz. Görüntüden-3B üreten modeller görünmeyen yüzleri **uydurur** (kullanıcı kuralı: "farklı bir cihaz uydurma"). | Videoda döner tabla **tam bir tur** dönüyor (30 kare/sn → her 1,7°'de bir gerçek kare). Kare dizisi gerçek cihazın kendisidir. | **Gerek kalmadı:** dönüş açısında eksik yok (216 gerçek kare / tur). Üretken model kullanılmadı; hiçbir açı uydurulmadı. |
| Tarayıcı yükü | model-viewer/three.js ≈ 100–400 KB JS + WebGL | ≈ 3 KB (gzip) JS; WebGL yok | — |
| Karar | **Uygulanmadı** (denenmedi; gerekçe yukarıda). Üretici/tarama kaynaklı gerçek bir GLB gelirse yeniden değerlendirilir. | **Uygulandı** | Uygulanmadı |

**Sınır (dürüstlük notu):** Kaynak video 480p ve telefon arka plana odaklandığı için cihaz hafif **odak dışı**; karede cihaz yalnızca ≈ 200–280 piksel. Sonuç gerçek ve tutarlıdır ama büyük boyutta yumuşak görünür; bu yüzden sahne bilinçli olarak orta boyda (en fazla 640 px) tutuldu ve yakınlaştırma 1,5× ile sınırlandı. Daha iyi sonuç için bkz. §8.

## 3. Üretim hattı (B yaklaşımı)

Betikler oturumun geçici klasöründedir (depoda değil): `sam_video.py`, `pass1_stats.py`, `pass2_build.py`, `pass3_export.py`.

| Adım | Ne yapıldı | Araç | Yapay zekâ mı? |
|---|---|---|---|
| 1. Kare çıkarma | Videonun 2.446 karesi kayıpsız PNG'ye açıldı; 6 kamera konumu incelendi | ffmpeg | Hayır |
| 2. Tur seçimi | Kameranın en sabit olduğu, cihazın tam göründüğü, gökyüzü fonlu yakın çekim: **kaynak kareler 1838–2051** (61,2–68,3. sn). Kamera bu aralıkta yan tutulduğu için kareler 90° döndürüldü | — | Hayır |
| 3. Dönüş periyodu | Bir tur arayla siluet eşleştirme (ölçek/konum eşitlenmiş IoU ≈ 0,90) → **216 kare = 1 tur (7,2 sn)** | NumPy/OpenCV | Hayır |
| 4. Ayırma (maske) | Üç nesne karelerde izlendi: **gövde**, **şeffaf kanca**, **tutucu klips** (klips çıkarılmak için). İşaret noktaları elle verildi | **SAM 2.1 (hiera-base-plus)** | **Evet — yalnızca nesneyi arka plandan ayırmak için** |
| 5. Netleştirme | Cihaz çevresindeki kırpım 4× büyütüldü (sıkıştırma gürültüsü temizlenir, kenar keskinleşir) | **Swin2SR (realworld x4, PSNR)** | **Evet — görüntü iyileştirme; doku/ayrıntı üretmeyen (PSNR odaklı) model seçildi** |
| 6. Kenar düzeltme | Maske sınırı, büyütülmüş görüntüde dar bir bantta renk modeliyle inceltildi; kenar pikselleri arka plan renginden arındırıldı | OpenCV GrabCut | Hayır |
| 7. Eşitleme | Kamera elde olduğundan her karede cihaz gövdesinin konumu sabitlendi; gövde yüksekliğine göre ölçek eşitlendi (0,80–1,25×) | NumPy | Hayır |
| 8. Kanca | Şeffaf kanca arkasındaki sokak/gökyüzünü gösterdiği için **gerçek dış hattı korunarak** nötr cam tonuna çevrildi. Kanca, tutucu klipse girdiği yerde (gövdenin 0,36 yüksekliği altında) yumuşakça bitirildi: **kancanın ucu kaynakta klipsin arkasında kaldığı için karelerde yoktur** | NumPy/OpenCV | Hayır |
| 9. Işık | Tur boyunca güneşli/gölgeli yüz farkı yarı yarıya yumuşatıldı (kazanç 0,81–1,29); hafif keskinleştirme. **Renk tonu değiştirilmedi** | NumPy | Hayır |
| 10. Dışa aktarım | 72 kare (her 3 kaynak karede bir → tam 5° adım), saydam zeminli WebP, iki boyut | Pillow | Hayır |

**Uydurulan hiçbir şey yok:** kare eklenmedi, açı üretilmedi, cihazın biçimi/rengi/düğmeleri değiştirilmedi. Tahmini doldurma yalnızca şu durumda ve çok küçük alanda yapıldı: klipsin gövde kenarından "ısırık" aldığı karelerde (72 karenin 1'inde, ≈ 34 px²) eksik kenar komşu gövde pikselleriyle kapatıldı.

## 4. Çıktı ve dosya sözleşmesi

> **2026-11-12:** Aşağıdaki dosyaların **tümü siteden kaldırıldı** (yedekleri oturumun geçici klasöründedir; depoda hiç yer almadılar). Ham kaynak (`reference-assets/hearing-aid-360/`) yerinde duruyor.

```
public/images/viewer360/bte-kahve/720/kare-01.webp … kare-72.webp     720×480  · 72 dosya · ≈ 1,36 MB (ort. 18,8 KB)
public/images/viewer360/bte-kahve/1080/kare-01.webp … kare-72.webp   1080×720  · 72 dosya · ≈ 2,32 MB (ort. 32,2 KB)
src/data/viewer360.ts                                                 set tanımı (tek kayıt: "bte-kahve")
src/components/viewer360/Viewer360.astro                              bileşen (işaretleme, stil, küçük satır içi önyükleyici)
src/components/viewer360/viewer360.client.js                          çalışma zamanı kodu (tembel yüklenen ayrı dosya)
```

Kare 1 = gövdenin yandan, ışıklı görünümü (poster). Kare numarası arttıkça cihazın kameraya bakan yüzü sağa kayar → veri kaydında `reverse: true` (sağa sürükleme = sonraki kare; cihaz parmağın gittiği yöne döner).

**Derleme güvencesi:** Bileşen, derleme sırasında tüm varyantların tüm karelerinin `public/` altında bulunduğunu doğrular; biri eksikse hiçbir şey çizmez ve uyarı yazar.

**Yerleşim:** ana sayfa (cihaz türleri bölümünün ardından) ve `/isitme-cihazlari/kulak-arkasi-bte/` ("Nedir?" bölümünün ardından; bu sayfada kendine bağlantı çizilmez).

## 5. Etkileşim, erişilebilirlik ve performans

| Gereksinim | Uygulama |
|---|---|
| Cihazın üzerinde basılı tutup sürükleme (fare + dokunmatik), kaydırıcı yok | Pointer Events; `touch-action: pan-y` → dikey kaydırma sayfayı kaydırır, yatay sürükleme döndürür |
| Yavaş otomatik dönüş, durdur/başlat | 10 sn/tur (`requestAnimationFrame`); görünür ve kareler hazır olunca başlar; sürükleme/klavye/düğme durdurur; düğmeyle yeniden başlar |
| Azaltılmış hareket | `prefers-reduced-motion` **veya** erişilebilirlik panelindeki "hareketi azalt" → kendiliğinden başlamaz |
| Klavye | Sahne odaklanabilir: ←/→ 1 kare, Shift+←/→ 5 kare, Home, Boşluk/Enter (otomatik dönüş), +/− (yakınlaştırma), Esc |
| Ekran okuyucu | `role="group"` + `aria-roledescription`, gerçek `alt`, `aria-live` durum ("Görünüm 12 / 72") |
| Yakınlaştırma | 1× / 1,5× (kaynak çözünürlüğü daha fazlasını kaldırmaz) |
| İlk açılış | Sayfa yüklenirken **ne kare ne de görüntüleyici kodu iner** (ayrıntı: aşağıda "Yükleme sırası"). Kareler **kademeli** iner (her 8. → 4. → 2. → hepsi); ilk kare inince poster olarak gösterilir, dörtte biri inince döndürme başlar, eksik karenin yerine en yakın inmiş kare gösterilir |
| Boyut seçimi | Sahne genişliği × DPR'ye göre 720 veya 1080 klasörü |
| Veri tasarrufu | `Save-Data` veya 2g/3g → 720 klasörü, karelerin yarısı (36), otomatik dönüş kendiliğinden başlamaz |
| Dokunma hedefleri | Denetim düğmeleri 52×52 px |
| JavaScript kapalı | `<noscript>` içindeki tek durağan kare gösterilir (döndürme olmadan) |
| Kod inemezse | Önyükleyici durağan ilk kareyi `<img>`'ye yazar; sahne boş kalmaz |

### Yükleme sırası (2026-11-11, ölçüme dayalı düzeltme)

İlk sürümde poster, HTML'de `loading="lazy"` bir `<img>` idi ve görüntüleyici kodu sayfayla birlikte iniyordu. Ölçüm, bunun **BTE sayfasında LCP'yi büyüttüğünü** gösterdi (aynı düzenek, 3 koşu medyanı): Chrome'un yerleşik tembel yüklemesi, görüntüleyici ilk ekranın ≈ 2 ekran altındayken (sahne üstü 2.737 px, ekran 823 px) bile posteri sayfa açılışında istiyordu.

| BTE sayfası (`/isitme-cihazlari/kulak-arkasi-bte/`) | LCP | İndirilen | Açılışta görüntüleyici isteği |
|---|---:|---:|---|
| Oturum öncesi (görüntüleyici yok) | 1,81 s | 137 KB | — |
| İlk sürüm: yerleşik tembel poster + ayrı betik | 2,03 s | 170 KB | poster 28,8 KB + betik 2,3 KB |
| Poster kaldırıldı, betik hâlâ sayfayla | 1,95 s | 142 KB | betik 2,3 KB |
| **Son sürüm: satır içi önyükleyici + tembel modül** | **1,80 s** | 140 KB | **yok** |

Son sürümde sıra şöyledir:

1. **HTML:** `<img>` saydam bir yer tutucudur (`data:` SVG, ağ isteği yok; `width`/`height` yazılı → CLS 0). Sayfada yalnızca ≈ 1 KB'lık (938 bayt) satır içi **önyükleyici** vardır.
2. **Kod (`viewer360.client.js`, içerik özetli ad, `immutable` önbellek):** önyükleyici onu ancak **sayfanın kendi yüklemesi bittikten sonra** (`load` + 250 ms; `load` çok gecikirse 4 sn) **ve** görüntüleyici görünür alana **600 px** yaklaşınca `<script type="module">` ekleyerek yükler.
3. **Kareler:** kod, görüntüleyici görünür alana **200 px** yaklaşınca kademeli indirmeyi başlatır.
4. **Kullanıcı beklemezse:** görüntüleyiciye dokunma, odaklanma veya bir düğmesine basma kodu ve kareleri **o an** başlatır; kod inmeden basılan düğme, kod inince yeniden tıklanır (basış kaybolmaz).

**Bakım notu — önyükleyiciye `import` eklemeyin.** Astro 7, bir bileşen betiğini yalnızca *hiç import içermiyorsa* ve 4 KB'tan küçükse HTML'e gömer. Statik `import` eklenirse betik ayrı dosyaya çıkar ve her sayfa açılışına bir istek eklenir; `import()` eklenirse Vite'ın ön-yükleme sarmalayıcısı satır içi betikte tanımsız kalır ve görüntüleyici hiç çalışmaz (`__VITE_PRELOAD__ is not defined` — bu turda denendi, testler yakaladı). Çalışma zamanı kodu bu yüzden düz JavaScript'tir ve `?url` ile olduğu gibi yayımlanır (küçültülmez: ≈ 11,7 KB ham, ≈ 3,6 KB brotli; yalnızca gerektiğinde iner). Önyükleyici ise 938 bayttır.

**Test (gerçek karelerle, başsız Chrome) — son derlemede tamamı geçti:**

- **84 kontrol** (`t-v360.cjs`) — 1440 / 768 / 390 px, azaltılmış hareket ve BTE sayfası: yüklemede 0 kare ve 0 kod isteği, kaydırınca tembel yükleme (kod tam 1 kez), otomatik dönüş, sürükleme (çeyrek sahne = 18 kare), dokunmatik yatay/dikey ayrımı, klavye, düğmeler, yakınlaştırma, taşma yok, konsol hatası yok.
- **17 kontrol** (`t-v360b.cjs`) — yavaş 4G öykünmesi (1,6 Mbps / 150 ms): sayfa `load` olayından önce kare isteği yok; kaydırınca poster 0,9–1,8 sn'de görünür; kareler inerken ve otomatik dönüş başlarken yerleşim kayması **0**; yüklemeden önce odaklanınca hemen başlar; kod inmeden basılan düğme sonradan etkili olur; kod engellenince durağan kare görünür; JavaScript kapalıyken durağan kare sahneyi doldurur.
- Bu sırada bulunup düzeltilen iki görsel kusur: ipucu etiketinin metni hapın dışına 20 px taşıyordu (svg'nin yüzde `max-width`'i "sığdığı kadar küçül" hesabına 0 katkı verir → genişlik açıkça `max-content` yapıldı; 320 px'te iki satıra kırılır) ve "Otomatik döndür ↔ Dönüşü durdur" etiketi değişirken komşu düğmeler kayıyordu (görünmez boyutlayıcıyla düğme genişliği sabitlendi).

Gerçek telefonda test **yapılmadı**; yukarıdakilerin tümü masaüstü Chrome'da ekran/dokunma/ağ öykünmesidir.

## 6. Hero'daki gerçek cihaz görseli (360°'den ayrı)

> **Artık kullanılmıyor (2026-11-12).** Hero'da süzülen cihaz, 3B modelin karesiyle değiştirildi (`BTE_3D_VIEWER.md` §12). Aşağıdaki dosyalar silinmedi; `src/data/home/hero.ts` → `deviceStage` kaydı eski dosya adları ve 480×394 ölçüsüyle değiştirilirse bu görsel aynen geri gelir (yatay görsel için sahne stili `HeroDeviceStage.astro` içinde duruyor).

`public/images/homepage/hero-device-bte-{320,480}.{avif,webp}` (7–20 KB). Kaynak: fotoğraf seti 2, kare #73 (1500×2000, cihaz net). Gövde fotoğrafın **kendi pikselleridir** (SAM 2.1 ile kesildi; yeniden çizim/renklendirme yok). Şeffaf kanca fotoğrafta arkasındaki yeşil zemini gösterdiği için gerçek dış hattı korunarak nötr cam tonuyla dolduruldu; klipsin tuttuğu yerden sonrası (kanca ucu) yoktur. Görsel dekoratiftir (`alt=""`), marka/model iddiası taşımaz. Hareket yalnızca CSS (`transform`/`opacity`), sayfa yüklendikten sonra ve görünürken çalışır; azaltılmış harekette durur. Önceki temsili görsel dosyaları (`hero-device-ric-*`) artık **kullanılmıyor**; silinmedi (karar sahibinde).

## 7. "Kulakta nerede durur" — temsili kulak çizimi

`src/components/device-types/EarDiagram.astro`: marka renklerinde, bilinçli olarak sade bir **şematik çizim** (gerçek kulak fotoğrafı veya anatomik çizim değildir). Altı tür için cihazın yeri renkli bölge/siluet olarak işaretlenir; **ürün fotoğrafı çizimin üzerine yerleştirilmez**, temsili cihaz görseli ayrı kutuda durur. Bölümde "Kulak çizimi ve cihaz görselleri temsilidir…" notu görünür. Gerçek bir kulak görseli sağlanırsa `scrollerEarImage` + `pin` yolu hâlâ kullanılabilir (`src/data/device-types/scroller.ts`).

## 8. Daha iyi sonuç için önerilen çekim

1. Videoyu **WhatsApp'tan geçirmeden** (özgün dosya; 1080p veya 4K, 60 kare/sn) gönderin.
2. Telefonu **sabitleyin** (tripod/kitap yığını); tek tur yeterli. Cihaza dokunup **odağı cihaza kilitleyin**.
3. **Düz, tek renk arka plan** (beyaz/gri karton), gölgede veya bulutlu havada eşit ışık.
4. Cihazı klipsle **kancanın en ucundan** tutun (kanca tam görünsün) ya da ince misinayla asın.
5. Gerçek 3B model isteniyorsa üreticiden GLB/STEP dosyası veya profesyonel tarama gerekir.

Yeni malzemeyle aynı hat yeniden çalıştırılır; `src/data/viewer360.ts` kaydı ve klasör adı dışında kod değişmez.
