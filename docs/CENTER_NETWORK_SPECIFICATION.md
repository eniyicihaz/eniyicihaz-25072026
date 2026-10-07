> **DURUM: GÜNCELLEME BEKLİYOR** (Faz 1 durum bandı, 2026-10-07). Bu spesifikasyon, ilgili bölüm uygulama fazında Faz 2 sayfa ve hero audit'inden (`docs/tech/TEMPLATES.md` §6) geçtikten sonra güncellenecektir. İçindeki işletme bilgileri, marka ifadeleri ve iddialar SoT ile doğrulanmadan kullanılmaz. Bu belgenin aşağıdaki içeriği Faz 1'de **değiştirilmedi**. Çelişki olursa öncelik: SoT (`docs/source-of-truth/*`) > `MASTER_PLAN.md` > kök belgeler > `docs/strategy/*` ve `docs/tech/*` > bu belge. Ayrıntı: `docs/tech/DOC_MIGRATION_MAP.md` §5–§6.

# CENTER_NETWORK_SPECIFICATION.md

> **⚠ ESKİ 20 BÖLÜMLÜ HOMEPAGE PLANINA AİT SPESİFİKASYON (2026-09).** CenterGallery ve ServiceNetwork artık ayrı bölümler **değil**; Trust ve SGK ile birlikte #8 `HomeLocal` tek local/entity bölümünde birleşti. Hiyerarşi (Darıca → Gebze + Çayırova → Kocaeli → Dilovası/Tuzla/Pendik yardımcı metin) ve 4 landing page linki korunur. Güncel ana sayfa mimarisi (10 ana bölüm) için tek doğru kaynak: `HOMEPAGE_SPECIFICATION.md`. Bu belge, o bölümün **içerik/gerekçe kaydı** olarak durur; bölüm numaraları, "yeni pozisyon N", "TASLAK — henüz üretimde değil" ve "ayrı section" ifadeleri eski 20 bölümlü sıraya aittir, geçerli değildir. Dosya, kod yorumlarından hâlâ referans alındığı için arşive taşınmamıştır.

> **TASLAK — henüz üretimde değil.** Ana sayfaya eklenmesi planlanan yeni bölüm: "Darıca'daki Gerçek Merkezimiz + Hizmet Ağı" (birleşik split-layout). Trust'ın (pozisyon 13, sessiz fact-sütunları) hemen ardından, homepage'in **en güçlü güven bölümü** ve **en kritik internal-linking düzeltmesi**. Kod içermez; yalnızca içerik/tasarım/erişilebilirlik taslağıdır.
>
> **Kanonik kaynaklar:** coğrafi hiyerarşi (tek doğruluk kaynağı) → `COMPANY.md §17` · sayfa mimarisi/sıra → `docs/HOMEPAGE_SPECIFICATION.md` (yeni pozisyon 14) · doğrudan reuse edilecek component'ler → `src/components/shared/CenterGallery/CenterGallery.astro`, `src/components/contact/ContactServiceArea/ContactServiceArea.astro` · Hub-şehir modeli → `SEARCH_STRATEGY.md §10` · doorway/scaled page yasağı → `QUALITY_GATES.md §2`.
>
> **Sabit çerçeve:** Amaç = "gerçekliği kanıtlamak + hizmet ağını görünür kılmak" · Lider katman = hikâye + gerçek fotoğraf · Tasarım deseni = split-layout (real-center photography + service-area) · CTA = yumuşak (her hizmet bölgesi kendi linkine gider, ayrı bir "Ücretsiz Test" CTA'sı tekrarlanmaz — Guide/Closing zaten verdi).
>
> **Neden birleşik:** Kullanıcının 2 ayrı fikri (Darıca merkezi + hizmet ağı) burada bilinçli olarak tek bölümde birleştirildi — ikisi de "yerel/coğrafi güven" ailesine ait; ayrı tutulsaydı art arda iki "local" bölüm gibi tekrar hissettirirdi.

---

## 1. Amaç ve Sıradaki Yeri

Trust, kullanıcıya *sözle* "2009'dan beri, Darıca merkezli" dedi. Bu bölüm aynı iddiayı **gerçek fotoğrafla kanıtlar** — Trust'ın hemen ardından, sözden görsele geçiş. Aynı bölümde, kullanıcının nereden geldiğine bakılmaksızın "bana hizmet veriyorlar mı?" sorusunu COMPANY.md §17'nin gerçek hiyerarşisiyle cevaplar.

**Bu bölümün ikinci, eşit derecede kritik görevi:** Araştırmada doğrulandı — homepage şu an `/gebze-isitme-cihazlari/`, `/cayirova-isitme-cihazlari/`, `/kocaeli-isitme-cihazlari/` sayfalarının **hiçbirine** linklemiyor; `/darica-isitme-cihazlari/` yalnızca Hero'nun 1 slaytından. Bu bölüm bu boşluğu kapatan **tek, ana** yerdir.

---

## 2. İçerik (taslak)

**Sol/üst blok — Darıca Gerçek Merkezi (CenterGallery reuse):**
- Badge: "Merkezimiz"
- Başlık: "Darıca'daki Gerçek Merkezimiz"
- Paragraf 1: "Darıca'daki merkezimiz; karşılama, işitme değerlendirmesi, cihaz uygulaması ve kişiye özel ayarın yapıldığı fiziksel bir mekandır." (Darıca sayfasındaki kilitli metinle birebir — GEO non-contradiction, aynı cümle iki yerde çelişmez)
- 4 gerçek fotoğraf: danışma odası (feature), bekleme alanı, işitme testi odası, cadde tabelası (location image) — **`daricaCenterGallery` ile aynı, zaten mevcut dosyalar.**
- Konum altyazısı: "Cadde üzerinde, kolay bulunabilir bir konumdayız."

**Sağ/alt blok — Hizmet Ağı (ContactServiceArea deseninden uyarlanmış, 3 kademeli anlatım):**
- Başlık: "Nereden Ulaşabilirsiniz?"
- **Darıca** (birincil, görsel olarak en büyük/ilk): "Ana merkezimiz burada." → `/darica-isitme-cihazlari/`
- **Gebze + Çayırova** (öncelikli, ikinci ağırlıkta): "Merkezimize kolayca ulaşabileceğiniz öncelikli hizmet bölgelerimiz." → `/gebze-isitme-cihazlari/`, `/cayirova-isitme-cihazlari/` (iki ayrı link)
- **Kocaeli** (bölgesel — COMPANY.md §17'nin 3. kademesi, Darıca'yı da kapsayan il-düzeyi çerçeve; bir "ilçe" gibi listelenmez, kendi cümlesiyle sunulur): "Kocaeli genelinde de danışmanlık ve bilgi desteği sunuyoruz." → `/kocaeli-isitme-cihazlari/`
- **Dilovası, Tuzla, Pendik** (yardımcı — yalnızca metin, kendi sayfası yok, COMPANY.md §17'nin "yalnızca doğrudan sorulduğunda" ilkesiyle tutarlı): "Dilovası, Tuzla ve Pendik'ten de bizi arayarak ulaşabilirsiniz."

**Kırmızı çizgi:** Hiçbir yeni coğrafi hiyerarşi icat edilmedi — sıra ve kademe adları birebir COMPANY.md §17'den. Landing page'lerin kendi içeriği burada tekrarlanmaz, yalnızca varlığına işaret edilir (QUALITY_GATES §2 doorway/scaled page yasağı — bu bölüm bir "mini Gebze sayfası" değildir, yalnızca gerçek Gebze sayfasına bir kapıdır).

---

## 3. Tasarım Deseni / Art Direction

**Desen:** split-layout — sayfada ilk kez iki farklı gerçek veri kümesinin (fotoğraf galerisi + hizmet listesi) yan yana durduğu kompozisyon; Bölüm 4'ün (büyük görsel+panel) tek-görsel yaklaşımından ve Trust'ın saf metin yaklaşımından görsel olarak ayrışır.

**Kompozisyon:**
- **Desktop (≥1024px):** İki kolon (~55/45 veya 50/50) — sol: `CenterGallery`'nin mevcut düzeni (feature image + 2 destek görsel + konum görseli); sağ: 4 kademeli hizmet listesi, Darıca kartı görsel olarak en büyük/vurgulu, alt kademeler küçülen tipografi/ağırlıkla.
- **Tablet (768–1023px):** Dikey yığın — galeri üstte, hizmet listesi altta.
- **Mobile (<768px):** Aynı dikey yığın, galeri `CenterGallery`'nin zaten sahip olduğu mobile davranışı kullanır.

**Görsel dil:** Fotoğraflar gerçek, sıcak, kurumsal poz değil (zaten üretimde, `/hakkimizda` ve `/darica-isitme-cihazlari`'nda kanıtlanmış). Hizmet listesi harita görseli **kullanmaz** (kullanıcı onayı, açık karar: varsayılan metin/ikon tabanlı liste — özel harita görseli istenirse ayrı bir görsel kararı gerekir).

---

## 4. Internal Link Planı

`/darica-isitme-cihazlari/`, `/gebze-isitme-cihazlari/`, `/cayirova-isitme-cihazlari/`, `/kocaeli-isitme-cihazlari/` — **dördü de görünür, gerçek link.** Bu, homepage'in bugüne kadarki en büyük internal-linking eksiğini kapatır.

## 5. SEO/GEO Amacı

Homepage'in **en kritik internal-linking düzeltmesi.** GEO entity map'ini (Avrasya İşitme → Darıca → Gebze/Çayırova → Kocaeli) hem görsel hem link grafiğiyle kurar (SEARCH_STRATEGY §4 Entity Strategy, §10 Hub-Şehir Modeli). Hub-and-Spoke ilkesi (§15) gereği, homepage güçlü bir hub olarak bu 4 sayfaya authority akıtır.

## 6. Gerekli Görseller

**Yok — zaten mevcut.** `public/images/pages/hakkimizda-danisma-odasi.webp`, `-bekleme-alani.webp`, `-isitme-testi-odasi.webp`, `-tabela-cadde.webp` (doğrulandı, `/hakkimizda` ve `/darica-isitme-cihazlari`'nda zaten kullanılıyor).

## 7. Atomic Design (planlanan)

**Doğrudan reuse:** `CenterGallery.astro` (fotoğraflar, `daricaCenterGallery` verisiyle veya homepage'e özel yeni bir kopyasıyla — aynı gerçek fotoğraflar, homepage'e uyarlanmış kısa metin) + `ContactServiceArea.astro`/`serviceArea.ts` deseni (hizmet katmanları, `href` destekli — mevcut `serviceArea.ts`'de Darıca/Gebze/Çayırova zaten linkli; **Kocaeli için ayrı bir satır/cümle eklenmesi gerekiyor**, mevcut veri yapısı bunu zaten destekliyor, yalnızca yeni bir veri girişi). İkisini split-layout'ta birleştiren ince, yeni bir wrapper organizma (`CenterNetwork.astro`, kendi klasöründe) yazılır — görsel dil icat edilmez, yalnızca iki kanıtlanmış deseni yan yana getirir.

## 8. Erişilebilirlik

`CenterGallery.astro` ve `ContactServiceArea.astro`'nun zaten üretimde kanıtlanmış erişilebilirlik davranışı (görsel `alt` metinleri, link odak göstergeleri) korunur. Split-layout'ta iki kolonun DOM sırası, mobilde okunan sırayla (galeri → hizmet listesi) tutarlı olmalı (kaynak sırası = görsel sıra, yalnızca CSS ile tersine çevrilmez).

## 9. Design Review Checklist

- 4 landing page'in hepsine görünür, gerçek link var.
- Coğrafi hiyerarşi (sıra, kademe adları) birebir COMPANY.md §17'den — yeni bir hiyerarşi icat edilmedi.
- Landing page içeriği burada tekrarlanmadı (doorway/scaled page yasağı ihlali yok).
- Harita görseli kullanılmadı (açık karar gereği varsayılan: metin/ikon liste).
- Gerçek fotoğraflar kullanıldı, yeni görsel üretilmedi.
- Darıca görsel olarak en vurgulu/büyük kademe — geri planda kalmadı.
