# BTE_3D_VIEWER.md

> **Durum:** ACTIVE · Teknik / dahili üretim belgesi · Oluşturulma: 2026-11-12
> **Amaç:** Sitedeki kulak arkası (BTE) cihaz görüntüleyicisinin **neden yeniden yapıldığını**, hangi yöntemlerin karşılaştırıldığını, markasız 3B modelin **nasıl üretildiğini**, dosya boyutlarını, görsel kalite kontrolünü, test ve performans ölçümlerini ve bakım adımlarını kaydeder.
> **Yayın durumu:** 2026-11-12'de işletme sahibi yayın onayı verdi; bu belge yayın commit'inin parçasıdır (`docs/DECISIONS.md`, yayın kaydı). Aşağıdaki "commit / push / deploy yapılmadı" notları yazıldıkları andaki durumu anlatır.
> **Önceki belge:** `VIEWER_360.md` (kaldırılan kare dizili görüntüleyicinin tarihsel kaydı; kulak şeması bölümü hâlâ geçerli).
> **Ek (2026-11-12, aynı gün):** Sahibinin isteğiyle ana sayfa hero'sunda süzülen cihaz görseli de bu modelin karesiyle değiştirildi → **§12**.

---

## 1. Eski görüntüleyicinin tespiti

- **Tek ortak bileşendi** (`src/components/viewer360/Viewer360.astro` + `viewer360.client.js`, veri: `src/data/viewer360.ts`) ve **iki sayfada** kullanılıyordu: ana sayfa (`/`, cihaz türleri bölümünün ardından) ve `/isitme-cihazlari/kulak-arkasi-bte/` ("Nedir?" bölümünün ardından). Başka kullanım yoktu.
- **Neden kötü görünüyordu** (karelere tek tek bakılarak):
  1. Kaynak, WhatsApp'tan geçmiş **480×854** bir videoydu; kareler 720 ve 1080 px'e **büyütülmüştü** → gerçek ayrıntı yok, yüzeyler "boyanmış" gibi.
  2. Arka plan ayırma dar açılarda bozuluyordu → kenarlar **köşeli ve lekeli** (özellikle cihaz kameraya yandan/uçtan bakarken).
  3. Şeffaf kanca tutucu klipsin arkasında kaldığı için **yarıda kesikti**; **ses tüpü ve kulak kalıbı hiç yoktu**.
  4. Cihaz yan yatmış duruyordu (takıldığı duruşta değil); kullanılmış, tek bir gerçek cihazdı.
  5. Yalnızca yatay eksende, **5°'lik 72 adım** vardı → dönüş akıcı değildi; dikey inceleme yoktu.
  6. Ağırdı: bir tur için **1,5 MB** (720 px) veya **2,4 MB** (1080 px) kare.

## 2. Araştırılan yöntemler ve karar

Bu bilgisayarda Blender kurulu değildi; Node.js 24, Astro 7.1 / Vite 8, Chrome ve ekran kartı (RTX 3050 + Intel UHD) vardı. **Ücretli servis, API veya abonelik kullanılmadı.** Blender'ın resmî **4.5.16 LTS taşınabilir (zip) sürümü** blender.org'dan geçici klasöre indirildi (SHA-256 sağlaması resmî dosyayla doğrulandı); sisteme hiçbir şey kurulmadı.

| Yöntem | Kalite | Boyut (ölçülen) | Bakım | Karar |
|---|---|---|---|---|
| **A. Modelden önceden çizilmiş kare dizisi** | Kare başına en yüksek (ışın izleme) | Tur başına ≈ 1,5–2,5 MB; dikey açı için birkaç kat | Kolay | **Reddedildi:** gerçek 3B değil (istenen: "dönen model gerçekten 3D olmalı", dikey inceleme) |
| **B. Google `<model-viewer>` 4.4.0** | Standart ışıkta gövde iyi; **şeffaf parçalar başarısız** (aşağıda) | Kod **1.044 KB** ham / **282 KB** gzip / 230 KB brotli (three.js içinde) | En kolay (bildirimsel) | **Reddedildi** |
| **C. three.js 0.187 ile özel görüntüleyici** | Özel stüdyo ışığı + şeffaf parçalar için kenar soğurma eki | Kod **640 KB** ham / **160 KB** gzip / 132 KB brotli | Orta (çalışma zamanı ≈ 840 satır, yorumlar dahil) | **SEÇİLDİ** |
| D. Barındırılan servisler (Sketchfab, Spline vb.) | — | Üçüncü taraf istekleri, izleme, marka | — | Reddedildi (üçüncü taraf, gizlilik, performans) |

**B ile C aynı modelle yan yana denendi** (aynı PBR değerleri GLB'ye yazılarak, `model-viewer` "neutral" ışık + "neutral" ton eşleme + gölge):

- Sayfa zemini tuvalin arkasından göründüğünde (en yaygın kurulum) kanca, tüp ve kulak kalıbı **bembeyaz lekeler** olarak çizildi (three.js'in geçirgenlik geçişi saydam tuvalde zemini beyaz varsayıyor).
- Sahne içi fon (`skybox-image`) verildiğinde şeffaf parçalar **soluk, kenarsız birer gölge** gibi kaldı; gövde de daha düz göründü.
- Özel görüntüleyicide fon sahnenin içine boyanır, ışık kameraya sabit bir stüdyodur ve şeffaf malzemeye kenar soğurma eklenmiştir → kanca/tüp/kalıp açık zeminde de okunur.

Üçüncü neden boyuttur: özel paket, `model-viewer` paketinin gzip boyutunun **%57**'sidir. Karşılaştırma görseli: inceleme klasöründe `karsilastirma-model-viewer.jpg`.

**Model biçimi:** glTF 2.0 ikili (**GLB**) — three.js belgelerinin önerdiği biçim ("Where possible, we recommend using glTF"; `threejs.org/manual/pages/loading-3d-models.html`). Sıkıştırma: **meshopt** (çözücü 7,5 KB gzip, pakete gömülü, ek istek yok). Draco denendi: dosya 217 KB ama çözücü ayrı (wasm 279 KB + sarmalayıcı 57 KB) → toplamda kazanç yok, dağıtım daha karmaşık.

Bu belgede 1 KB = 1024 bayttır.

| Sıkıştırma (76 bin üçgenlik ara sürümde ölçüldü) | Dosya | gzip | brotli |
|---|---:|---:|---:|
| Ham Blender çıktısı | 1.381 KB | 1.124 KB | 750 KB |
| Yalnızca nicemleme | 1.069 KB | 739 KB | 504 KB |
| meshopt "medium" | 467 KB | 314 KB | 279 KB |
| **meshopt "high" (seçildi)** | **316 KB** | 193 KB | 176 KB |
| Draco | 217 KB | 199 KB | 193 KB |

## 3. BTE referans araştırması

- **RNID** (`rnid.org.uk/…/behind-the-ear/`, sayfa güncellemesi 27.05.2026): BTE'de mikrofonlar kulağın arkasında durur; **kulak kalıplı BTE** sesi "a piece of clear, flexible tubing" ile "custom-made" bir kulak kalıbına iletir; **açık uyumlu BTE** ise "very thin, clear tubing" ve "a small, soft tip (called a dome)" kullanır. Sayfa kancayı, düğmeleri ve pil kapağını anlatmıyor.
- **BIS belgesi** (`bis.gov.in/…/Hearing-Aid-Corrected-16-Pg-TJ_organized.pdf`): **okunamadı.** `www.bis.gov.in` ve `bis.gov.in` bu ağdan DNS'te çözülmüyor (iki ayrı araçla denendi); Internet Archive'da kopyası yok. Bu belgeden hiçbir bilgi kullanılmadı.
- Parça biçimleri için açık erişimli iki **NHS kullanım kılavuzu** görsel referans alındı (South Tees "A guide to changing hearing aid tubing"; Wirral "How to fit a right ear mould and a Behind the Ear Hearing Aid"): gövde, sert şeffaf kanca ("hook"), kancanın ucuna geçen şeffaf tüp, tüpün dik açıyla girdiği kulak kalıbı; kalıpta "canal insert" ve kulak kıvrımının altına oturan üst uç.
- Bu kaynaklardan **oran ve parça dizilimi** alındı; hiçbir ürünün biçimi, rengi veya ayırt edici ayrıntısı kopyalanmadı.

## 4. Model

**Ne olduğu:** markasız, logosuz, yazısız, **özgün (jenerik)** bir kulak arkası cihaz. Klasik BTE'dir (kanca + tüp + kulak kalıbı); kanal içi alıcılı (RIC) değildir: ince kablo ve kulak içi hoparlör **yoktur**. Takıldığı duruşta (dik) gösterilir.

| Parça | Tasarım |
|---|---|
| Gövde | İki yarım kabuk (inci grisi metalik + vernik); sırtta ve önde ayrım çizgisi. Boy ≈ 35 mm, derinlik en çok 11,5 mm, kalınlık en çok 7,9 mm |
| Pil kapağı | Mat grafit; eğik ayrım çizgisi, tırnak çıkıntısı, iki yanda menteşe pimi |
| Denetimler | Sırtta ses ayar düğmesi (iki ucu yüksek), program düğmesi, iki mikrofon açıklığı — hepsi kabuktaki gerçek yuvalarda |
| Bilezik + nozul | Metal bilezik; şeffaf kancanın içinden görünen vida dişli nozul |
| Kulak kancası | Sert şeffaf plastik, incelen kavis, ucunda tüpün geçtiği tırnak |
| Ses tüpü | Şeffaf, dış çap 3,2 mm; kancadan inip dirsekle kalıba girer |
| Kulak kalıbı | "İskelet" tip, pembe-şeffaf: kulak kepçesi çukurunu izleyen kenar, heliks çentiği, kanal parçası, ses kanalı, havalandırma deliği |

**Ölçüler (model):** 35,3 × 40,7 × 14,0 mm (genişlik × yükseklik × derinlik). **Renk seçimi:** sitenin lacivert/mavi paletine uyan nötr gümüş gri + grafit; pembe-şeffaf kalıp gerçek akrilik kalıpların yaygın görünümüdür.

**Nasıl üretildi** (`tools/bte-model/build_bte.py`, 1.255 satır, Blender Python; elle çizim yok, dış varlık yok, doku yok):

1. **Orta çizgi + kesitler.** Gövde ve kanca tek bir eğri (14 denetim noktası) üzerinde, süper-elips kesitlerle tanımlanır; ölçüler betiğin başındaki tabloda milimetre olarak durur.
2. **Ayrım çizgileri gerçek geometridir.** Her parça, kenarı çizgiyi izleyen ayrı bir yüzeydir; kenarlar 0,07 mm yuvarlatılıp 0,42 mm derinliğinde duvara döner (çizgi genişliği 0,10 mm). Düğme yuvaları kabuk kenarının yuvayı dolanmasıyla açılır. **Boole işlemi ve doku kullanılmadı** → yakınlaştırınca bulanıklaşmaz.
3. **Kulak kalıbı** bir uzaklık alanı (SDF) olarak modellenir: dış hat + kenar genişliği + kanal parçası yumuşak geçişlerle birleştirilir, ses kanalı ve havalandırma delikleri çıkarılır, hafif organik düzensizlik eklenir; yüzey Blender'la gelen OpenVDB ile çıkarılır, normaller alandan hesaplanır.
4. **Dışa aktarım:** metre, +Y yukarı, sınır kutusunun ortasında; sonra `optimize.mjs` (aynı malzemeli parçaları birleştirir, meshopt).

| | |
|---|---|
| Biçim | **glTF 2.0 ikili (.glb)**, `EXT_meshopt_compression` + `KHR_mesh_quantization` (konum 14 bit, normal 12 bit) |
| Dosya | **`src/components/bte3d/bte-generic.glb` — 284,1 KB** (290.928 bayt); gzip 168 KB; ham Blender çıktısı 1.237 KB |
| Geometri | **67.902 üçgen**, 35.231 köşe, **8 çizim çağrısı**, doku **yok** |
| Üçgen dağılımı | Gövde 20.984 (+ çizgi duvarları 3.680) · kulak kalıbı 18.474 · pil kapağı, nozul, tırnak 8.572 · kanca 6.776 · tüp 4.736 · düğmeler 3.376 · bilezik ve pimler 1.304 |

Yayımlanan adres içerik özetlidir (`/_astro/bte-generic-<özet>.glb`) → mevcut `/_astro/*` kuralıyla kalıcı önbelleğe alınır; `_headers` değişmedi.

## 5. Görüntüleyici

Dosyalar: `src/components/bte3d/BteViewer3D.astro` (işaretleme, stil, satır içi önyükleyici), `bte3d.client.js` (çalışma zamanı), `bte-generic.glb`, `src/data/bte3d.ts` (metinler, poster yolları), `public/images/bte3d/` (4 poster dosyası). Tek yeni bağımlılık: **`three@0.187.0`** (sürüm sabit; nedeni §9).

**Çizim**

- **Stüdyo ışığı yazılımla kurulur** (dosya indirilmez) ve **kameraya sabittir**: cihaz dönerken parlamalar yüzeyde kayar, kullanıcıya dönük yüz hep aydınlıktır. Arka duvar bilinçli olarak koyudur → metal ve şeffaf parçaların kenarları koyu kalır.
- **Fon sahnenin içine boyanır** (bileşenin CSS değişkenlerinden okunur) → şeffaf parçalar gerçek fonu kırarak gösterir; poster ile canlı kare aynı zemini taşır.
- **Kenar soğurma eki:** three.js geçirgen malzemede yansımayı geçen ışığın üstüne ekler ama geçen ışığı koyulaştırmaz; açık fonda şeffaf parça silikleşir. Fiziksel malzemenin parça gölgelendiricisine eklenen tek satır, geçen ışığı sıyırma açılarda soğurur (gerçek camın "kenarı koyu" görünümü).
- **Zemin gölgesi** bir kez pişirilir (cihazın üstten görünüşü → bulanıklaştırma) ve cihazla birlikte yatayda döner; kare başına ek maliyeti yoktur.
- Ton eşleme: Khronos PBR Neutral (ürün renkleri için tasarlanmış). Keskinlik: ekran yoğunluğu kadar, en çok 2×; düşük yoğunluklu ekranda 1,5×; kareler sürekli 30 ms'yi aşarsa çözünürlük kendiliğinden bir kademe düşer.

**Etkileşim**

| Gereksinim | Uygulama |
|---|---|
| Cihazın üzerine basılı tutup sürükleme | Pointer Events (fare, kalem, dokunmatik); bırakınca kısa süre kendi hızıyla döner |
| Tam 360° yatay dönüş | Sınırsız (testte 8 sürüklemede 651°) |
| Dikey inceleme | Alttan **30°**, üstten **46°** ile sınırlı (cihaz baş aşağı çevrilemez) |
| Mobilde sayfa kaydırması | Hareket **dikey** başlarsa sayfa kayar; **yatay** başlarsa cihaz döner ve aynı hareketle dikey açı da değişir. CSS `touch-action: pan-y` + `touchmove` denetimi birlikte çalışır. Fare tekerleği hiç dinlenmez |
| Otomatik dönüş | 26 sn/tur; görünür olunca ve model inince başlar. Kullanıcı dokununca **durur ve kendiliğinden yeniden başlamaz** (kullanıcıyla çakışmaz); düğmeyle başlatılır/durdurulur |
| Başlangıç görünümü | Düğme veya Home; en kısa yoldan döner, yakınlaştırma da sıfırlanır |
| Yakınlaştırma | 1× / 1,45× / 2× (düğmeler, +/−). Yakınlaştırılmışken dikey açı kadrajı da taşır: yukarıdan bakınca kanca ve bilezik, aşağıdan bakınca pil kapağı ortaya gelir |
| Klavye | Sahne odaklanabilir: ←/→ 15° (Shift ile 45°), ↑/↓ 10°, Home, Boşluk/Enter, +/−, Esc |
| Ekran okuyucu | `role="group"` + `aria-roledescription`, gerçek `alt`, `aria-live` durum ("Görünüm: sırt: düğmeler ve mikrofon açıklıkları, yukarıdan"); tuval `aria-hidden` |
| Azaltılmış hareket | `prefers-reduced-motion` veya erişilebilirlik panelindeki "hareketi azalt" → kendiliğinden dönmez, yumuşatma ve savrulma kapalı; düğmeyle başlatılabilir |
| Dokunma hedefleri | Denetim düğmeleri 52 × 52 px |

**Yükleme sırası (performans kuralı: sayfa açılışına hiçbir istek eklenmez)**

1. HTML'de yalnızca işaretleme, stil ve **1,3 KB'lık satır içi önyükleyici** vardır; poster `<img>`'i saydam yer tutucudur.
2. Sayfanın kendi yüklemesi bittikten (`load` + 250 ms) **ve** görüntüleyici görünür alana 600 px yaklaştıktan sonra: önce **poster** (12–17 KB), sonra **kod** ve **model** istenir. Kullanıcı görüntüleyiciye dokunur/odaklanırsa beklenmez.
3. Kurulumun ağır adımları ayrı görevlere bölünür ve tarayıcının boş anlarına bırakılır; ilk kare çizilince tuval posterin üstünde belirir. **Poster, canlı sahnenin başlangıç karesinin birebir pikselleridir** → geçişte görüntü oynamaz.
4. **Veri tasarrufu (Save-Data) veya 2g:** yalnızca poster iner; etiket "3 boyutlu görünümü açmak için dokunun" olur.
5. **WebGL yoksa, kod/model inemezse veya JavaScript kapalıysa** poster kalır; çalışmayan denetimler gizlenir ve (JavaScript açıksa) kısa bir not gösterilir. **WebGL bağlamı kaybolursa** (tarayıcı ekran kartı belleğini geri alırsa) poster görünür, bağlam geri gelince ışık ve gölge yeniden üretilip canlı görünüme dönülür.

`?worker&url` notu: önyükleyici, çalışma zamanı dosyasını `import clientUrl from "./bte3d.client.js?worker&url"` ile alır. Vite bu sorguyla dosyayı bağımlılıklarıyla (three.js) **ayrı, tek dosyalık bir paket** yapar ve yalnızca adresini verir; içe aktarma bir metne çözüldüğü için önyükleyici satır içi kalır. (Çalışma zamanı dosyası bir "worker" olarak çalıştırılmaz; normal `<script type="module">` ile yüklenir. Aynı içe aktarma Astro'nun sunucu tarafında (`---` bloğunda) yapılırsa paket yayımlanmaz — denendi.)

## 6. Kullanıldığı sayfalar ve kaldırılanlar

| Sayfa | Yerleşim | Zemin | Alt bağlantı |
|---|---|---|---|
| `/` (ana sayfa) | Cihaz türleri bölümünün ardından (eskisiyle aynı yer) | açık marka zemini | "Kulak arkası (BTE) cihazları inceleyin" |
| `/isitme-cihazlari/kulak-arkasi-bte/` | "Nedir?" bölümünün ardından (eskisiyle aynı yer) | beyaz | yok (sayfa kendine bağlanmaz) |

İki sayfada **aynı bileşen, aynı model, aynı görünüm**. Başlık ("Kulak Arkası Cihazı Her Açıdan İnceleyin") korundu. Değişen metinler, eski görüntüleyiciye özgü olup artık doğru olmayanlardır: etiket "360° Görünüm" → "360° · 3 Boyutlu Görünüm"; giriş cümlesine "ses tüpünü ve kulak kalıbını" eklendi; alt metin ve not yeniden yazıldı ("Gerçek bir … cihazın döner tabla kaydından hazırlanmıştır" → "Temsili üç boyutlu modeldir; belirli bir marka veya modeli göstermez. …"). Sayfa içi bağlantı: `#bte-3d` (eski `#v360-title-bte-kahve` artık yok; sitede ona bağlanan yer yoktu).

**Kaldırılan eski dosyalar** (hepsi izlenmeyen/commit edilmemiş dosyalardı; yedekleri oturumun geçici klasöründe):

- `src/components/viewer360/Viewer360.astro`, `src/components/viewer360/viewer360.client.js`
- `src/data/viewer360.ts`
- `public/images/viewer360/bte-kahve/720/kare-01…72.webp` (72 dosya, 1,5 MB) ve `…/1080/kare-01…72.webp` (72 dosya, 2,4 MB)

Derlemede `viewer360` / `v360` geçen **hiçbir sayfa kalmadı** (113 HTML dosyasında 0). `reference-assets/` klasörüne **dokunulmadı**. Hero'daki cihaz görseli (`hero-device-bte-*`) ilk teslimde kapsam dışıydı ve değişmemişti; sahibinin ardından gelen isteğiyle yeni modelin karesiyle değiştirildi (**§12**; eski dosyalar silinmedi).

## 7. Görsel kalite kontrolü

Kontrol sitede çizilen gerçek görüntü üzerinden yapıldı (derlenmiş sayfa, başsız Chrome, WebGL); Blender renderları yalnızca geometri ön kontrolüdür.

- **Açılar:** dış yüz, iç yüz, sırt, ön kenar, dört çapraz, üstten (80°), alttan (−80°), üstten/alttan çapraz — 1× ve 2× yakınlaştırmada. Görseller inceleme klasöründedir.
- **Süreklilik (ölçüm, `t-3d-sweep.cjs`):** tam tur 5°'lik 72 adımda üç dikey açıda çizildi; ardışık kareler arasındaki fark medyanın en çok 1,6 katı (sıçrama yok), 360° sonunda görüntü başlangıçla **birebir aynı**; dikey aralık ve yakınlaştırma boyunca da sıçrama yok.
- **Bulunup düzeltilenler:** (1) ilk kulak kalıbı düz bir halkaydı, yapay görünüyordu → anatomik dış hatlı iskelet kalıp olarak yeniden kuruldu; (2) şeffaf parçalar açık zeminde kayboluyordu → koyu arka duvarlı stüdyo + kenar soğurma; (3) kalıbın delik kenarları pürüzlüydü (ağ sadeleştirme) → daha ince çözünürlük, daha büyük pah, alandan hesaplanan normaller; (4) kanal parçası köşeli duruyordu → kısaltılıp yuvarlatıldı; (5) ipucu etiketi cihazın altına biniyordu → kadraj ve etiket ölçüleri ayarlandı (ölçümle doğrulandı).
- **Sonuç:** bozuk geometri, iç içe geçen parça (tüp kalıbın kanalından, kanca tırnağı tüpün içinden bilinçli olarak geçer), kopuk tüp/kanca, dönüşte biçim bozulması, sıçrama, yazı veya marka işareti **yok**.

**Açıkça söylenmesi gerekenler**

- Model **temsilidir**; işletmenin sattığı belirli bir cihazı göstermez. Bölümün altındaki not bunu söyler.
- Gerçek zamanlı çizimdir (ışın izleme değil): şeffaf parçalarda gerçek kırılma ve iç yansıma **yaklaşıktır**; 2× yakınlaştırmada kalıbın içinde arkadaki yüzeyler çizgiler hâlinde görünür.
- Kulak kalıbı kişiye özel bir parçadır; buradaki biçim genel bir örnektir, gerçek bir kulak ölçüsünden alınmamıştır.
- Kalitenin yeterliliği konusunda son söz işletme sahibinindir.

## 8. Testler

Tümü üretim derlemesinde, başsız masaüstü Chrome'da (Intel UHD, ANGLE/D3D11); ayrıca Microsoft Edge'de (aynı motor) açılış denemesi yapıldı. **Gerçek telefonda test yapılmadı**; mobil sonuçlar ekran/dokunma öykünmesidir. Safari/iOS ve Firefox'ta **denenmedi** (bu bilgisayarda kurulu değiller). Test betikleri oturumun geçici klasöründedir (depoda değil); aşağıda adlarıyla anılır.

| Test | Kapsam | Sonuç |
|---|---|---|
| Davranış (`t-3d.cjs`) | Tembel yükleme sırası, otomatik dönüş, fare (yatay, dikey sınırlar, tam tur, savrulma), tekerlek, düğmeler, klavye, dokunmatik (dikey kaydırma ↔ yatay döndürme), azaltılmış hareket, ekran dışı duraklama, hata durumları, Save-Data, JavaScript kapalı, WebGL kapalı, yerleşim kayması | **80 / 80** (BTE sayfası) + **80 / 80** (ana sayfa) |
| Süreklilik + poster (`t-3d-sweep.cjs`) | §7; poster = ilk canlı kare | **16 / 16**; PNG farkı 0, AVIF 0,6 / 255, WebP 0,75 / 255 |
| Yerleşim (`t-3d-layout.cjs`) | 320 / 390 / 820 / 1440 px × 2 sayfa: sahne ve denetimler ekranda, cihaz tam turda sahnenin içinde ve etiketin üstünde, düğmeler ≥ 48 px | **8 / 8** |
| Bağlam kaybı (`t-3d-ctx.cjs`) | WebGL bağlamı bilerek düşürüldü ve geri getirildi | Kayıpta poster, dönüşte aynı canlı görüntü; hata yok |
| axe (`t-3d-axe.cjs`) | 2 sayfa × 2 genişlik × (çalışıyor / hata durumu) | Görüntüleyicide **0 ihlal** (ayrıca bkz. §10) |
| Yatay taşma | 112 sayfa × 7 genişlik × 2 yazı ölçeği = 1.568 yükleme (görüntüleyicideki son iki küçük stil ayarından önce); ardından son derlemede görüntüleyicinin bulunduğu 2 sayfa × 7 × 2 = 28 yükleme | **0** ve **0** |
| Statik denetim (`qa.mjs`) | canonical, başlık, H1, alt, JSON-LD (469), iç bağlantı, site haritası, 127 yönlendirme kaynağı | **Tümü geçti** |
| Sunucu düzeyi | 254 yönlendirme satırı, 112 URL, güvenlik başlıkları | **Sorun yok** |
| Önceki turun diğer testleri | Hero, kaydırmalı bölüm, carousel, araçlar, açık/kapalı, erişilebilirlik paneli, iletişim çubuğu (36), gizli odak (112 sayfa), WhatsApp (696 bağlantı) | Öncekiyle **aynı** |

Geliştirme sunucusunda (`astro dev`, 127.0.0.1:4399) da model iner ve çalışır; geliştirmede önyükleyici satır içi değil ayrı bir modüldür (yalnızca geliştirmeye özgü).

## 9. Performans

**Sayfa açılışı (Lighthouse 13.6.0, mobil öykünme, simüle Slow 4G, yerel brotli sunucusu; "önce" = eski görüntüleyicili derleme, aynı gün; koşular sırayla dönüşümlü)**

| Sayfa | | Performans (5 koşu) | LCP medyan (5 koşu) | CLS | TBT | İndirilen | İstek |
|---|---|---|---|---:|---:|---:|---:|
| **Ana sayfa** | önce | 100 (5/5) | 1,09 s (1,10/1,09/1,09/0,94/1,08) | 0 | 0 ms | 203 KB | 13 |
| | **sonra** | **100** (5/5) | **1,09 s** (1,09/1,09/1,08/1,09/0,96) | 0 | 4 ms | 203 KB | 13 |
| **Kulak Arkası (BTE)** | önce | 99 (99/100/99/99/99) | 1,80 s (1,81/0,94/1,80/1,80/1,80) | 0 | 29 ms | 140 KB | 11 |
| | **sonra** | **99** (5/5) | **1,80 s** (5/5) | 0 | 69 ms | 140 KB | 11 |
| **Darıca** | önce | 99 (5/5) | 1,96 s | 0 | 57 ms | 169 KB | 10 |
| | **sonra** | **99** (5/5) | **1,95 s** | 0 | 59 ms | 169 KB | 10 |
| **Phonak** | önce | 99 (96/99/99/99/99) | 2,25 s (2,18/2,25×4) | 0 | 50 ms | 201 KB | 14 |
| | **sonra** | **99** (99/97/98/99/99) | **2,25 s** (5/5) | 0 | 53 ms | 201 KB | 14 |

**Okuma:** dört sayfada skor, LCP, indirilen bayt ve istek sayısı **aynı**; "hızlandı" iddiası yoktur. TBT medyanındaki fark (BTE 29 → 69 ms) simüle ölçümün koşudan koşuya oynaklık bandındadır: BTE sayfasında tek koşular **önce** 29/45/0/92/0 ms, **sonra** 22/97/69/83/0 ms; Phonak'ta önce 48–187 ms, sonra 49–131 ms. Skoru etkilememiştir, ama "TBT değişmedi" de denemez — bu ölçümle ayırt edilemiyor. Ana sayfadaki ilk koşu çifti, test sunucusu henüz açılmadan alındığı için atılıp yeniden koşturuldu.

Sayfa açılışında görüntüleyiciye ait **hiçbir istek yok** (poster, kod, model: 0). HTML büyümesi: ana sayfa +0,4 KB, BTE sayfası +0,4 KB (brotli).

**Görüntüleyiciye yaklaşınca inenler**

| | Yeni (3B) | Eski (kare dizisi) |
|---|---:|---:|
| Poster | 12–17 KB | (ilk kare) 19–32 KB |
| Kod | 640 KB ham → **132 KB brotli** / 160 KB gzip | 11,5 KB ham → 3,6 KB brotli |
| İçerik | model **284 KB** | 72 kare: **1,5 MB** (720 px) veya **2,4 MB** (1080 px) |
| **Toplam aktarım** | **≈ 0,42 MB** (gzip ile 0,45 MB) | ≈ 1,5–2,4 MB |

Model dosyası için aktarım sıkıştırması **varsayılmadı** (Cloudflare'in varsayılan sıkıştırma listesinde `model/gltf-binary` olduğu doğrulanamadı); sıkıştırma dosyanın içindedir.

**Çalışma zamanı (aynı makine; Intel UHD tümleşik ekran kartı — telefon yerine geçmez, yalnızca fikir verir)**

| Sahne | Tuval | Otomatik dönüşte kare süresi |
|---|---|---|
| Masaüstü 720 × 540 | 1077 × 807 | ortalama 7,2–7,6 ms, %95'i ≤ 13,8 ms (5 ölçüm) |
| Telefon 358 × 358 (3× ekran) | 712 × 712 | ortalama 6,9 ms |
| Tablet 720 × 540 (2× ekran) | 1436 × 1076 | ortalama 13,4 ms, %95'i ≤ 20,7 ms |

Sürüklerken de aynıdır (ortalama 7,2–8,8 ms). Beş ölçümde en uzun tek kare 14–56 ms idi; bir ölçümde sürükleme sırasında **bir kez 305 ms'lik takılma** görüldü ve sonraki dört ölçümde tekrarlanmadı (nedeni belirlenemedi; o sırada makinede başka bir tarayıcı testi yeni bitmişti).

Görünür alana yaklaşmadan modelin hazır olmasına kadar (yerel sunucu, ağ gecikmesi yok): **≈ 0,84 sn**. Bu sırada iki uzun görev ölçüldü (**≈ 0,2 sn**'şer): stüdyo ışık haritasının üretimi ve ilk karenin gölgelendirici derlemesi. İkisi de ekran kartı sürücüsünde geçer ve bölünemez; sayfa açılışında değil, sonradan ve tarayıcının boş anında çalışır. Görünür değilken ve hareket yokken hiçbir kare çizilmez (ölçüldü).

## 10. Yapılamayan, eksik kalan ve karar bekleyenler

- **Gerçek telefon/tablet testi yok.** Tüm mobil sonuçlar masaüstü Chrome öykünmesidir. Özellikle iPhone Safari'de dokunma davranışı ve düşük donanımlı Android'de kare hızı gerçek cihazda görülmelidir.
- **Safari ve Firefox'ta denenmedi.** WebGL 2 gerektirir (güncel tarayıcıların hepsinde var); yoksa poster gösterilir.
- **BIS belgesi okunamadı** (§3).
- ~~**Hero görseli ile görüntüleyici farklı cihazları gösteriyor.**~~ **Giderildi (aynı gün):** sahibi "hero'ya da yeni modelin karesini koy" dedi; hero'da süzülen cihaz artık görüntüleyicinin başlangıç karesidir (§12). Sahibinin fotoğrafından kesilmiş önceki görsel silinmedi.
- **Yakınlaştırma ortadan yapılır;** serbest kaydırma (pan) yoktur. Üst ve alt uçlar dikey açıyla kadraja gelir (§5).
- **Önceden var olan, bu işle ilgisiz bir erişilebilirlik bulgusu:** "Yukarı" (sayfa başına dön) düğmesinin görünen metni "Yukarı", erişilebilir adı "Sayfanın başına dön" (axe `label-content-name-mismatch`). Eski derlemede de var; kapsam dışı olduğu için **düzeltilmedi**, kayda geçirildi.
- **Blender kalıcı olarak kurulmadı.** Taşınabilir sürüm oturumun geçici klasöründedir (≈ 880 MB); model yeniden üretilecekse blender.org'dan yeniden indirilebilir.

## 11. Bakım

- **Biçim/ölçü değişikliği:** `tools/bte-model/README.md` (Blender betiği → `optimize.mjs` → `make-posters.cjs` → `make-hero-frame.cjs`). Model değişirse **posterler ve hero karesi yeniden üretilmelidir** (yoksa poster ilk canlı kareyle, hero da görüntüleyiciyle uyuşmaz).
- **Renk/malzeme/ışık:** `bte3d.client.js` → `makeMaterials()`, `studioEnvironment()`. Değişiklikten sonra posterler ve hero karesi yeniden üretilir.
- **Metinler:** `src/data/bte3d.ts`. Marka/model iddiası eklenmemeli; modelin temsili olduğu notu kalmalı.
- **three.js sürümü sabittir (0.187.0).** Kenar soğurma eki, fiziksel malzemenin parça gölgelendiricisindeki `#include <transmission_fragment>` satırına ve `geometryNormal` / `geometryViewDir` adlarına dayanır. Sürüm yükseltilirse `t-3d-sweep.cjs` ve görsel kontrol yeniden yapılmalıdır.
- **Önyükleyiciye dinamik `import()` eklenmemeli** (satır içi betikte Vite'ın ön-yükleme sarmalayıcısı tanımsız kalır); `?worker&url` içe aktarması olduğu gibi kalmalıdır.
- **Yeni bir sayfaya eklemek:** `<BteViewer3D />` (isteğe bağlı `tone="plain"`, `headingLevel={3}`). Bir sayfada birden çok kez kullanılmamalıdır (başlık `id`'si tektir).

## 12. Ek (2026-11-12): ana sayfa hero'sundaki cihaz görseli

> **Kaynak:** işletme sahibinin, bu belgenin ilk teslimindeki soruya (§10) verdiği yanıt: "Hero'ya da yeni modelin karesini koy." Yalnızca yerel çalışma ağacında; commit / push / deploy yapılmadı.

### 12.1 Ne değişti

Ana sayfanın hero'sunda, merkez fotoğrafının sağ üstünde süzülen cihaz görseli değişti. Önceki görsel sahibinin fotoğrafından kesilmiş gerçek (kahverengi) cihazdı; yenisi **3B görüntüleyicinin başlangıç karesidir**: aynı model, aynı malzeme, aynı ışık, aynı açı (−32°, 0°). Böylece hero ile görüntüleyici aynı cihazı gösterir.

| | Önce | Sonra |
|---|---|---|
| Dosyalar | `hero-device-bte-{320,480}.{avif,webp}` (480×394, yatay) | `hero-device-bte3d-{240,360}.{avif,webp}` (3:4, dik: 240×320 ve 360×480) |
| Boyut | AVIF 7,1 / 10,8 KB · WebP 12,1 / 19,9 KB | AVIF **9,3 / 15,5 KB** · WebP 23,6 / 41,0 KB |
| Değişen kaynak | — | `src/data/home/hero.ts` (kayıt), `src/components/home/HeroDeviceStage.astro` (sahne stili), `src/components/home/HomeHero.astro` (üstte ayrılan boşluk) |

Derlemede **yalnızca ana sayfanın HTML'i değişti** ve 4 görsel dosyası eklendi; diğer 112 sayfa, görüntüleyicinin kodu (`bte3d.client-BwwNItdv.js`) ve modeli bayt bayt öncekiyle aynıdır (iki derleme dosya dosya karşılaştırıldı). Görüntüleyici koduna dokunulmadı. Eski görsel dosyaları (`hero-device-bte-*`) **silinmedi**; kullanılmıyor. Geri dönmek için `hero.ts` içindeki `deviceStage` kaydı eski dosya adları ve `480 × 394` ölçüsüyle değiştirilir (yatay görsel için sahne stili duruyor).

Görsel dekoratiftir (`alt=""`), marka/model iddiası taşımaz; hareketi (süzülme, ses dalgaları), yüklemeden sonra başlaması, `prefers-reduced-motion` davranışı ve `fetchpriority="low"` **öncekiyle aynıdır**. Hero'da WebGL/three.js **yüklenmez**; bu yalnızca sabit bir görseldir. Modelin temsili olduğu notu görüntüleyici bölümünde durur; hero'ya ayrıca metin eklenmedi.

### 12.2 Kare nasıl üretildi (`tools/bte-model/make-hero-frame.cjs`)

1. Betik, geliştirme sunucusundaki BTE sayfasını açar ve görüntüleyicinin **canlı sahnesine** erişir (three.js'in her çizimin başında çağırdığı `scene.onBeforeRender` üzerinden; yayımlanan kodda sahneye dışarıdan erişim yoktur ve eklenmedi — betik bu yüzden yalnızca `astro dev` ile çalışır).
2. Zemin gölgesi gizlenir (hero'nun kendi CSS gölgesi var), çizim yoğunluğu 4×'e çıkarılır (tuval 2872 × 2152 px).
3. Başlangıç görünümü **iki kez** çizilir: düz siyah ve düz beyaz fon. İki kare arasındaki fark her pikselde fonun ne kadar göründüğünü verir: `alfa = 1 − min(beyaz − siyah)`. Gövde tam opak, **kanca / tüp / kulak kalıbı gerçekten saydam** çıkar; hero'nun zemini arkalarından görünür. Renk, açık zemin üzerinde görüntüleyicideki görünümü birebir verecek şekilde çözülür (hero zemini açıktır).
4. Cihaz (1248 × 1666 px) 3:4 bir kutuya ortalanır, 240 ve 360 px genişliğe küçültülür; tam şeffaf piksellerin rengi kenar renginden doldurulur (kayıplı sıkıştırmada koyu saçak olmasın diye), AVIF (kalite 50) ve WebP (kalite 80, alfa 85) yazılır. Kalite ayarı ölçümle seçildi: AVIF 44 / 50 / 56 / 64 yan yana büyütülerek karşılaştırıldı; 50'de açık ve koyu zeminde görünür fark yoktu.

**Doğrulama — bu kare gerçekten görüntüleyicinin karesi mi?** Karenin opak pikselleri, görüntüleyicinin posteriyle (başlangıç karesinin tam tuval pikselleri, §5) karşılaştırıldı: 77.512 pikselde en büyük kanal farkı **ortalama 1,5 / 255, medyan 1, %95'i ≤ 4**. Kalan farklar ayrım çizgisi ve düğme kenarlarındadır (iki çizimin örnekleme yoğunluğu farklı: 4× ↔ 1,5×).

### 12.3 Yerleşim

Yeni görsel dik olduğu için sahne ölçüleri yeniden kuruldu; sabit piksel yerine **fotoğrafın genişliğiyle orantılıdır**, böylece her ekran genişliğinde aynı kompozisyon korunur:

- Sahne genişliği `clamp(100px, fotoğraf genişliğinin %23,5'i, 150px)`, yükseklik bunun 4/3'ü.
- Sağdan pay fotoğraf genişliğinin %12,7'si: cihazın alt ucu (pil kapağı) fotoğrafta, duvardaki "AVRASYA İŞİTME CİHAZLARI" tabelası ile çerçeveli pano arasındaki **düz duvara** gelir; ikisinin de yazısını örtmez.
- Cihaz fotoğrafın üst kenarına fotoğraf genişliğinin %4,4'ü kadar biner. Fotoğrafın piksellerinden ölçüldü (hepsi fotoğraf genişliğinin oranı): tabelanın harfleri yatayda %80'de biter ve sağ ucunda üst kenarları %7,3'tedir; panonun çerçevesi %86'da başlar ve sol üst köşesi %5,9'dadır; aradaki %80–86 düz duvardır.

| Ekran genişliği | Sahne (önce → sonra) | Hero yüksekliği (önce → sonra) |
|---|---|---|
| 1440 px | 190 × 156 → 150 × 200 | 675 → 675 px (değişmedi; fotoğraf 24 px aşağı kaydı) |
| 1280 / 1024 px | 190 × 156 → 132 × 176 / 104 × 138 | değişmedi (metin sütunu daha uzun) |
| 820 px | 176 × 144 → 150 × 200 | 1181 → 1223 px (+42) |
| 390 px | 132 × 108 → 100 × 133 | 1235 → 1261 px (+26) |
| 320 px | 132 × 108 → 100 × 133 | 1286 → 1315 px (+29) |

Süzülme hareketinin en alçak evresinde cihazın kutusu fotoğrafın üst kenarından 1440 px'te 32,6 px, 390 px'te 18,7 px aşağı iner (ikisi de fotoğraf genişliğinin ≈ %5,1–5,2'si; sayfada ölçüldü, hareket cihazı yalnızca yukarı taşır). Bu, tabelanın (%7,3) ve panonun köşesinin (%5,9) üstünde kalır: 1440 px'te tabelaya ≈ 14 px, 390 px'te ≈ 7 px pay vardır.

Denenip elenen yerleşimler (hepsi gerçek sayfada çizilip yan yana bakıldı): köşeye yaslı ve 36 px binen (pil kapağı çerçeveli panonun köşesini örtüyordu), 14 px binen (cihaz fotoğrafın kenarına "konmuş" gibi duruyordu), fotoğrafa hiç binmeyen (derinlik kayboluyor, hero daha da uzuyordu).

### 12.4 Testler ve ölçüm

Üretim derlemesinde, başsız masaüstü Chrome'da; "önce" = bu değişiklikten hemen önceki derleme. **Gerçek telefonda test yapılmadı**; mobil sonuçlar öykünmedir. Safari ve Firefox'ta denenmedi.

| Test | Sonuç |
|---|---|
| Hero sahnesi (masaüstü, masaüstü + azaltılmış hareket, telefon) | Görsel ilk anda hazır; hareket yüklemeden sonra başlıyor; azaltılmış harekette yok; **CLS 0**; LCP öğesi öncekiyle aynı (masaüstü: merkez fotoğrafı, telefon: açıklama paragrafı); konsol temiz |
| Yatay taşma — ana sayfa × 11 genişlik (320–1920 px) × 2 yazı ölçeği | **0 / 22** |
| axe — ana sayfa dahil 7 sayfa × 2 genişlik | İhlal yok |
| 3B görüntüleyici davranışı, ana sayfa | **80 / 80** |
| Erişilebilirlik paneli, statik denetim, sunucu düzeyi (254 yönlendirme) | Öncekiyle aynı, sorun yok |
| Geliştirme sunucusu (127.0.0.1:4399) | Yeni görsel ve yerleşim geliyor (bayat stil modülü yüzünden sunucu yeniden başlatıldı) |

Kayda geçen, **bu değişiklikle ilgisiz** bulgu: ana sayfa 308 px'ten dar ekranda yatay taşıyor (280 px'te 28 px). Önceki derlemede de birebir aynı; 320 px ve üstü temiz. Düzeltilmedi (kapsam dışı).

**Sayfa açılışı — ana sayfa (Lighthouse 13.6.0, mobil öykünme, simüle Slow 4G, yerel brotli sunucusu, sırayla dönüşümlü 5'er koşu)**

| | Performans | LCP medyan | CLS | TBT (tek koşular) | İndirilen | İstek |
|---|---|---|---:|---|---:|---:|
| önce | 100 (100/100/100/99/100) | 1,08 s (1,08/1,08/1,08/0,94/1,08) | 0 | 51 / 38 / 0 / 132 / 0 ms | 203 KB | 13 |
| **sonra** | **100** (99/100/100/100/100) | **1,08 s** (0,94/1,08/1,09/0,94/1,08) | 0 | 147 / 29 / 0 / 55 / 68 ms | 205 KB | 13 |

**Okuma:** skor, LCP, CLS ve istek sayısı **aynı**; "hızlandı" iddiası yoktur. Sayfa **2 KB ağırlaştı**: hero cihaz görselinin aktarımı 7.517 → 9.750 bayt (şeffaf parçaların alfa kanalı ayrıntılı), HTML +57 bayt (brotli). TBT tek koşuları iki derlemede de aynı oynaklık bandındadır (0–147 ms); bu ölçümle ayırt edilemez. Görüntüleyiciye ait istek sayfa açılışında hâlâ **yok** (hero görseli sabit bir resimdir, görüntüleyicinin parçası değildir).

### 12.5 Açıkça söylenmesi gerekenler

- Hero'daki cihaz artık işletmenin gerçek cihazının fotoğrafı **değil**, temsili modelin karesidir. Kalitenin ve bu tercihin yeterliliği konusunda son söz sahibinindir.
- Şeffaf parçalar (kanca, tüp, kalıp) hero'nun açık zemininde **soluk** görünür; saydam oldukları için zeminin rengini alırlar. Görüntüleyicide de böyledir.
- AVIF desteklemeyen eski tarayıcılarda WebP iner (23,6 / 41,0 KB); bu durumda sayfa ölçülenden ≈ 14 KB daha ağırdır.
- Kullanılmayan iki eski görsel takımı var. `hero-device-bte-*` (sahibinin fotoğrafından kesilmiş önceki hero görseli) depoda ve yayında durur ama hiçbir sayfa istemez; geri dönüş yolu olarak bırakıldı. `hero-device-ric-*` (daha eski temsili görsel; kaynağı belgelenmemiş) yayın commit'ine **alınmadı**, yalnızca yerel çalışma ağacındadır. İkisinin de silinip silinmeyeceği sahibinin kararıdır.
- İnceleme görselleri: `docs/tech/bte-3d-inceleme/` (en üstteki "Ana sayfa hero'su" bölümü: dört ekran genişliği, eski ↔ yeni karşılaştırması, karenin açık ve koyu zemindeki hâli). Bu klasör yalnızca yerel çalışma ağacındadır; depoya eklenmedi.
