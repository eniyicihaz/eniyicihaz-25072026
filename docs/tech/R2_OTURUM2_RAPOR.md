# R2_OTURUM2_RAPOR.md — İkinci Geliştirme Turu, son teslim raporu

> **Durum:** ACTIVE · Teslim raporu · 2026-11-11
> **Kapsam:** İşletme sahibinin "Avrasya İşitme — İkinci Geliştirme Turu" talimatının §17'sindeki A–J başlıkları.
> **Tek cümle:** Bütün değişiklikler yereldedir, test edilmiştir; **commit, push, deploy ve Cloudflare değişikliği yapılmamıştır** — canlıya alma, işletme sahibinin onayını bekliyor.
> **Nerede bakılır:** `http://127.0.0.1:4399` (geliştirme sunucusu çalışıyor; durdurmak için `npx astro dev stop`).
> **2026-11-12 notu:** Bu rapordaki **360° görüntüleyici (kare dizisi) artık yok.** İşletme sahibi görsel kalitesini kabul edilemez buldu; bileşen ve kareler kaldırıldı, yerine markasız 3B model geldi. Güncel durum: `BTE_3D_VIEWER.md` ve `docs/DECISIONS.md` (2026-11-12 kaydı). Raporun görüntüleyiciyle ilgili satırları (A, E, D'deki BTE ölçümü, I'daki "101 kontrol") o günün kaydıdır. Aynı gün sahibinin isteğiyle **hero'da süzülen cihaz görseli de** (bu raporda "4 hero görseli, `hero-device-bte-*`") yeni modelin karesiyle değiştirildi; eski dosyalar silinmedi, kullanılmıyor (`BTE_3D_VIEWER.md` §12).

---

## A. Genel sonuç

**Tamamlananlar**

- **360° görüntüleyici gerçek karelerle çalışıyor** (ana sayfa + Kulak Arkası sayfası): sahibinin videosundan 72 kare, sürükle-döndür, otomatik dönüş, klavye, yakınlaştırma, azaltılmış hareket.
- **Hero'da gerçek cihaz görseli** (aynı cihazın fotoğraftan kesilmiş hâli), süzülme animasyonuyla.
- **Altı kartlı cihaz türü carousel'i** (IIC, CIC, ITC, ITE, BTE, RIC) ve **kaydırmalı "kulakta nerede durur" bölümü** (temsili kulak şemasıyla).
- **112 sayfanın tamamı tek tek okundu**; nesnel hatalar düzeltildi (94 sayfada görünür metin değişti).
- **İç bağlantı katmanı:** 47 sayfada 139 düz metin atıf gerçek bağlantıya çevrildi.
- **Performans korunuyor:** ana sayfa 100, Darıca 99, Phonak 99 (aynı gün ölçülen temelle aynı seviye).
- **320 px ve büyütülmüş yazı uyumu:** 112 sayfa × 7 genişlik × 2 yazı ölçeğinde yatay taşma 0.
- **Yönlendirmeler Cloudflare Pages öykünmesinde test edildi:** 254 kural satırının tamamı doğru.
- **R2, F5, F6, F8, F9, F10, F11** çalışıyor ve yeniden test edildi.

**Kısmen tamamlananlar**

- **Gerçek 3D model (GLB) üretilmedi.** 480p tek eksenli çekimden güvenilir geometri çıkmıyor; iyi hazırlanmış kare dizisi kullanıldı (talimatın izin verdiği yol).
- **360° çözünürlüğü kaynakla sınırlı:** video 480p olduğu için sahne 640 px ile sınırlandı; yandan (ince) açılarda görüntü yumuşak.
- **İçerik iyileştirme önerileri (410 madde)** yazıldı ama uygulanmadı — üslup/yapı kararıdır.
- **Çayırova ve Kocaeli sayfaları ince** (özgün yerel veri yok); uydurma içerik yazılmadı.

**Bekleyenler (işletme sahibinin kararı veya malzemesi)** — ayrıntı §"Karar bekleyenler".

---

## B. Sayfa envanteri

**Talimattaki sayıların doğrulanması:** 103 mevcut sayfa + 9 hub = **112 URL** (+ 404 = 113 derlenen sayfa) ✔ · 122 eski URL yönlendirmesi ✔ (dosyada toplam 127 kaynak yol) · 20 yönlendirilmemiş eski URL ✔ · Önceki turların değişiklikleri: oturum başında çalışma ağacında **215 değişmiş dosya + 76 izlenmeyen giriş** vardı (talimattaki "205" yerine gerçek sayı); hepsi korundu.

| Ölçüt | Sayfa |
|---|---:|
| Tek tek incelenen | **112 / 112** |
| İçeriği (görünür metni) güncellenen | **94** |
| — hero başlığındaki bitişik satır düzeltmesini içeren | 82 |
| H1'i yeniden yazılan | 1 (Gebze) |
| Meta açıklaması değişen | 3 |
| Başlık etiketi / canonical değişen | 0 / 0 |
| Tasarımı/bileşeni değişen | Ana sayfa, `/isitme-cihazlari/`, `/isitme-cihazlari/kulak-arkasi-bte/`, `/uygulama-ayar/kisiye-ozel-ayar/`; ayrıca **tüm sayfalarda** 320–359 px üst çubuk, CTA, iletişim çubuğu ve SSS odak düzeltmesi |
| **Yalnızca denetlenen** | **12:** `/degerlendirme/`, `/degerlendirme/ucretsiz-isitme-testi/`, `/ihtiyaciniza-gore/`, `/kvkk/` + 4 KVKK belgesi, `/neden-orijinal/`, `/rehberler/`, `/segmentler/`, `/uygulama-ayar/cihaz-deneme/` |

Sayfa sayfa kayıt: `docs/tech/page-review/` (G1–G8 bulgu dosyaları, `sayfa-degisiklik-ozeti.tsv`).

---

## C. SEO ve GEO

| Konu | Yapılan |
|---|---|
| **Darıca** | Meta açıklaması ziyaret niyetine göre yeniden yazıldı (156 karakter). Mahalle ayrıntısı **genişletilmedi**. |
| **Gebze** | H1: "Gebze'den Darıca Merkezimize: İşitme Testi ve İşitme Cihazı Hizmetleri" — şube olmadığı ilk satırda. |
| **Çayırova** | Otopark cümlesi eklendi. Sayfa hâlâ ince (≈ 410 kelime); gerçek yerel veri gerekir. |
| **Üç sayfanın özgünlüğü** | Korundu; değişiklikler sayfaya özeldir, kopya metin eklenmedi. |
| **Structured data** | 469 JSON-LD bloğunun tamamı ayrıştırılıyor, `@id` ilişkileri sağlam. `WebPage` varsayılan açıklamasından "en iyi" çıkarıldı; fiyat sayfasının `WebPage` düğümü fiyatsız. Yeni varlık, şube, puan veya yorum **eklenmedi**. |
| **İç bağlantılar** | 139 atıf bağlantısı / 47 sayfa; site haritasına 5 eksik sayfa; ana sayfaya 4 özellik bağlantısı; yanlış hedefli kart etiketleri düzeltildi. |
| **Meta** | 3 açıklama. Ana sayfa başlığı 63 karakter — işletme adı içerdiği için dokunulmadı. |
| **GEO** | Google Search Central "AI features and your website" sayfası 2026-11-11'de okundu: yapay zekâ özetleri için **ek gereksinim, özel işaretleme veya özel dosya yok**; standart SEO uygulamaları geçerli. Bu yüzden `llms.txt` ya da "yapay zekâya özel şema" eklenmedi. Yapılan somut iş: 82 sayfada makinece bitişik okunan başlıklar ("Phonakİşitme Cihazları") düzeltildi; şema ile görünür metin uyumu; iç bağlantılar; alt metinler (eksik 0). |

**Doğrulanamayanlar:** Google İşletme Profili ile tutarlılık karşılaştırılamadı (bağlayıcının yetkisi dolmuş). Search Console bu oturumda yeniden sorgulanmadı (mevcut veri: 2026-05-01 → 2026-11-09). Sıralama garantisi verilmez.

---

## D. Performans

**Ölçüm koşulları:** Lighthouse 13.6.0 · mobil öykünme · simüle Slow 4G (1,6 Mbps / 150 ms, 4× CPU) · yerel brotli sunucu · 3 koşu, medyan. "Önce" = oturum başındaki kaynakların aynı gün yeniden derlenmiş hâli. **Laboratuvar ölçümüdür; gerçek telefonda ölçüm yapılmadı.**

| Sayfa | | Lighthouse | LCP | CLS | İndirilen |
|---|---|---:|---:|---:|---:|
| Ana sayfa | önce | 100 | 1,08 s | 0 | 207 KB |
| | **sonra** | **100** | **1,09 s** | 0 | 203 KB |
| Darıca | önce | 99 | 1,96 s | 0 | 169 KB |
| | **sonra** | **99** | **1,96 s** | 0 | 169 KB |
| Phonak | önce | 99 | 2,25 s | 0 | 200 KB |
| | **sonra** | **99** | **2,25 s** | 0 | 201 KB |
| Kulak Arkası (BTE) | önce | 99 | 1,80 s | 0 | 137 KB |
| | **sonra** | **99** | **1,80 s** | 0 | 140 KB |

- **Okuma:** Değerler temel seviyede; "hızlandı" iddiası yok. Görüntüleyici ilk açılışa **hiçbir kare ve hiçbir betik** eklemiyor.
- **Darıca/Phonak'ın asıl iyileşmesi** bu turun ilk oturumundandır (Darıca 95 → 99, LCP 2,85 → 1,95 s; Phonak 96 → 99, LCP 2,70 → 2,25 s) ve korunuyor.
- **Ölçümün yakaladığı gerileme:** ilk uygulamada BTE sayfası LCP'si 1,81 → 2,03 s çıkmıştı; iki adımda giderildi. BTE'de simülasyon koşudan koşuya oynuyor: 13 koşunun 3'ünde 1,95 s görüldü (temelde 10 koşuda hiç). Hedefin (2,5 s) altında; "hiç fark yok" denmiyor.
- **Dört kategori (12 sayfa):** erişilebilirlik / en iyi uygulamalar / SEO **100 / 100 / 100**; performans 98–100; CLS 0.
- **INP ölçülemedi.** Ayrıntı: `docs/tech/PERFORMANCE_LCP.md` §8.

---

## E. Ürün deneyimleri

| Soru | Yanıt |
|---|---|
| 360° için kullanılan yöntem | **B — çok açılı kare dizisi.** Videodaki tek tam turdan 72 kare (5° aralık); arka plan ve tutucu ayrıldı, netleştirildi, ölçek/konum eşitlendi. İki boy: 720 px (≈ 1,36 MB) ve 1080 px (≈ 2,32 MB) WebP. |
| Gerçek fotoğraf ve video kareleri | Görüntüleyicinin 72 karesinin tamamı sahibinin videosundandır. Hero görseli 76 fotoğraftan biridir. Ham dosyalar siteye **eklenmedi**. |
| Yapay zekâ ile üretilen eksik açılar | **Yok.** Video tam turu kapsadığı için açı üretmek gerekmedi. Yapay zekâ yalnızca arka plan ayırma ve netleştirmede kullanıldı. Tek istisna: 72 karenin 1'inde klipsin kapattığı ≈ 34 px²'lik kenar komşu piksellerle kapatıldı. |
| Gerçek GLB oluşturulabildi mi? | **Hayır.** 480p, tek eksenli çekim güvenilir geometri vermez; denenmedi. Daha iyi çekim önerisi `VIEWER_360.md` §8'de. |
| Etkileşimler çalışıyor mu? | **Evet** — 84 + 17 otomatik kontrol geçti. |
| Hero animasyonu | Gerçek cihaz kesimi; hafif süzülme + ince ses dalgası (yalnızca CSS). Statik görsel önce gelir, hareket yüklemeden sonra başlar; azaltılmış harekette durur; CLS 0. |
| Kaydırmalı kulak deneyimi | `/isitme-cihazlari/` sayfasında: yapışkan sahne, altı tür, kulak şeması **açıkça "temsilidir"** notuyla. Sayfa kaydırması kilitlenmiyor; mobilde doğal dikey akış. |

**Sınır:** Kaynak video 480p olduğundan sahne 640 px, yakınlaştırma en çok 1,5×.

---

## F. UX özellikleri

| Özellik | Durum | Kanıt |
|---|---|---|
| **R2** Sayfaya özel WhatsApp mesajı | Çalışıyor | 112 sayfa, 696 bağlantı, hepsi hazır mesajlı; 102 farklı mesaj; Türkçe karakter kodlama hatası 0; tek numara |
| **F5** Açık/kapalı | Çalışıyor | 6 saat senaryosu (açık, mesai sonrası, pazar, resmî tatil, arife → gösterilmez, tablo dışı → gösterilmez), yabancı saat dilimli tarayıcıda |
| **F6** Erişilebilirlik paneli | Çalışıyor | Yazı %100–150, yüksek kontrast, hareketi azalt, kalıcılık; axe ihlali 0 |
| **F8** SGK adım rehberi | Çalışıyor | İşaretler yazdırma kopyasına taşınıyor; PDF üretiliyor |
| **F9** Hizmet sihirbazı | Çalışıyor | 19 sonuç bağlantısının tamamı 200; yeniden başlatma |
| **F10** Cihaz karşılaştırma | Çalışıyor | En çok 3 tür; fiyat ifadesi yok |
| **F11** Evde hizmet mini akışı | Çalışıyor | Bölge + ihtiyaç → WhatsApp mesajı; bölge dışı uyarısı |

Form üzerinden kişisel veri toplama **başlatılmadı**.

---

## G. Eski URL ve yönlendirmeler

- **122 mevcut yönlendirme:** satırları değişmedi. Cloudflare Pages öykünmesinde (`wrangler pages dev`, yerel) **254 kural satırının tamamı 301 + doğru hedef + hedef 200**; hiçbiri ana sayfaya gitmiyor.
- **20 eski URL:** **19'u karar bekliyor** (404 + `noindex` dönüyor). **1'i yönlendirildi:** `/isitme-kaybi-beli%CC%87rti%CC%87leri%CC%87` — mevcut `/isitme-kaybi-belirtileri` kuralının bozuk kodlanmış yazımı; niyet ve hedef aynı. İstenmezse `_redirects` sonundaki iki satır silinir.
- **Kullanıcı kararı bekleyen 19 URL:** 12 model sayfası (Oticon More ×4, Signia Intuis ×3, Signia CROS Silk, ReSound Linx Quattro ×2, ReSound ONE ×2), 5 konu sayfası (kim icat etti + 2 yazım hatası, ehliyet, ani işitme kaybı), `/kaynaklar`, `/pediatrik-isitme-kaybi`. Toplam etki: 6 ayda 48 tıklama / 3.759 gösterim. Her biri için Search Console verisi, olası hedef, öneri, gerekçe ve **risk**: `docs/tech/REDIRECT_AUDIT.md`.

---

## H. Değiştirilen dosyalar

**Bu oturum:** 283 dosya değişti · 241 dosya eklendi · 0 dosya silindi. **Tam liste:** `docs/tech/R2_OTURUM2_DOSYA_LISTESI.md`.

| Alan | Değişen |
|---|---:|
| İçerik verisi (`src/data/`) | 239 |
| Bileşenler (`src/components/`) | 26 |
| Sayfalar (`src/pages/`) | 7 |
| Düzen / ara katman / yapılandırma | 3 |
| Tasarım sistemi stilleri | 2 |
| Belgeler | 5 |
| `public/_redirects` | 1 |

- **Yeni bileşenler/dosyalar:** `src/components/device-types/EarDiagram.astro`, `src/components/viewer360/viewer360.client.js`, `src/lib/ref-links.ts`; yeniden yazılan `Viewer360.astro`.
- **Yeni görseller:** 144 görüntüleyici karesi (`public/images/viewer360/bte-kahve/720` ve `/1080`), 4 hero görseli (`hero-device-bte-*`).
- **Önemli teknik değişiklikler:** görüntüleyici kodu tembel modül; iç bağlantı ara katmanı; `MainLayout` şema ad/açıklama alanları; marka adlarında yerel ayara duyarlı büyük harf; SSS panellerinde odak düzeltmesi; 320 px düzeni.

---

## I. Test sonuçları

**Başarılı (son derlemede)**

| Test | Sonuç |
|---|---|
| Astro üretim derlemesi | 113 sayfa |
| Statik denetim (canonical, başlık, açıklama, H1, hiyerarşi, alt metin, JSON-LD, iç bağlantı, site haritası, robots, yönlendirme) | Tüm kontroller geçti |
| Yönlendirmeler (Pages öykünmesi) | 254 / 254 |
| 360° görüntüleyici | 84 / 84 + 17 / 17 |
| Carousel okları | 7 genişlikte geçti |
| Kaydırmalı bölüm, hero animasyonu | Geçti |
| Etkileşim araçları, açık/kapalı, erişilebilirlik paneli | Geçti |
| axe (7 sayfa × 2 genişlik) | İhlal 0 |
| Gizli bölgede odaklanabilir öğe (112 sayfa) | 0 |
| Yatay taşma (112 sayfa × 7 genişlik × 2 ölçek = 1.568 yükleme) | 0 |
| İletişim çubuğu sığma (36 kombinasyon) | 0 hata |
| WhatsApp bağlantıları (696) | Kodlama hatası 0 |
| Lighthouse | §D |

**Testlerin bulduğu ve düzeltilen hatalar** (hepsi bu oturumda kapandı): görüntüleyici posterinin sayfa açılışında inmesi; tembel modül denemesinde görüntüleyicinin hiç çalışmaması; ipucu etiketinin taşması; carousel oklarının iletişim kutusu altında kalması; 320 px'te her sayfada 27 px taşma (eskiden beri vardı); "Kişiye Özel Ayar" grafiği taşması (eskiden beri); iletişim çubuğunda "WhatsApp" düğmesi taşması (eskiden beri); iç bağlantıların kapalı SSS panellerinde klavye odağı alması (bu oturumda oluşmuştu, 24 sayfa); başlık kuralımın büyütülmüş yazıda `/hakkimizda/` sayfasını taşırması (bu oturumda oluşmuştu).

**Başarısız:** Yok.

**Eksik / kapsam dışı bırakılan:** `astro check` 37 tür hatası bildiriyor; tamamı dokunulmayan, yayımlanmayan tasarım sistemi demo sayfalarında (`src/pages/_ds/…`). Bu oturumda değişen dosyalarda hata yok; düzeltilmedi.

**Erişim olmadığı için doğrulanamayanlar**

- **Gerçek mobil cihaz testi yapılmadı.** Tüm mobil sonuçlar masaüstü Chrome'da ekran/dokunma/ağ öykünmesidir.
- **Canlı Cloudflare** denenmedi (yalnızca yerel Pages öykünmesi).
- **Google İşletme Profili** karşılaştırması yapılamadı (bağlayıcı yetkisi dolmuş).
- **Search Console** bu oturumda yeniden sorgulanmadı.
- **INP** ölçülemedi.

---

## J. Son durum

| | |
|---|---|
| Git dalı | `main` |
| HEAD | `abb1025` (oturum başındakiyle aynı) |
| Çalışma ağacı | 456 değişmiş dosya + 85 izlenmeyen giriş (hepsi yerel, commit edilmemiş) |
| Staged değişiklik | **0** |
| Stash | 0 |
| Commit / push / deploy | **Yapılmadı** |
| Cloudflare / canlı site | **Dokunulmadı** |
| Force push, reset, clean, rebase, [CI Skip] | **Yapılmadı** |

---

## Karar bekleyenler (işletme sahibi)

1. **Canlıya alma onayı.**
2. **Randevu anlatımı** sayfalar arasında farklı ("randevusuz ziyaret kabul edilir" ↔ "randevu almanızı öneririz"). Tek cümle seçilmeli.
3. **Deneme dili** ve "Kolay Değişim güvencesi" (kaynak belgede kayıtlı değil).
4. **"Üretici servis yetkisi / yetkili" ifadeleri** (kaynak belgede doğrulama bekliyor).
5. **SGK:** yenileme süresi hiçbir sayfada yazmıyor; "katkı payı" iki zıt anlamda kullanılıyor; ödeme tablosu görselinde eski logo ve "DUYMANIN EN İYİ YOLU" yazısı var.
6. **Çocuk sayfaları** merkezde yapılmayan testleri merkez süreci gibi anlatıyor.
7. **Marka kartlarında görsel–etiket uyuşmazlıkları** (9 sayfada 10 kart).
8. **19 eski URL** (adres adres).
9. **`reference-assets/` klasörü** (≈ 26 MB ham fotoğraf/video) depoya alınsın mı?
10. **Daha iyi 360° çekimi** istenirse çözünürlük sınırı kalkar.

Ayrıntı: `docs/tech/page-review/README.md` §3.
