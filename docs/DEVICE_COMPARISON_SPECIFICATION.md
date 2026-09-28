# DEVICE_COMPARISON_SPECIFICATION.md

> **⚠ ESKİ 20 BÖLÜMLÜ HOMEPAGE PLANINA AİT SPESİFİKASYON (2026-09).** Ayrı Device Comparison bölümü artık **yok**; CategoryExplorer ile birleşerek #4 `HomeExplore` oldu ve tablo **5 kritere** indirildi (Öne çıkan yön, Görünürlük, Güç aralığı, Şarj/pil, Kablosuz bağlantı). Bu spec'teki daha geniş kriter tablosu tarihsel kayıttır; veri kaynağı (`device-comparison.data.ts`) hâlâ kullanılır. Güncel ana sayfa mimarisi (10 ana bölüm) için tek doğru kaynak: `HOMEPAGE_SPECIFICATION.md`. Bu belge, o bölümün **içerik/gerekçe kaydı** olarak durur; bölüm numaraları, "yeni pozisyon N", "TASLAK — henüz üretimde değil" ve "ayrı section" ifadeleri eski 20 bölümlü sıraya aittir, geçerli değildir. Dosya, kod yorumlarından hâlâ referans alındığı için arşive taşınmamıştır.

> **TASLAK — henüz üretimde değil.** Ana sayfaya eklenmesi planlanan yeni bölüm: Görselli İşitme Cihazı Karşılaştırması. CategoryExplorer'ın (pozisyon 5) yatay rayında tek tek gezilen 7 gerçek cihaz tipini, şimdi yan yana, somut bir tablo/grid'de karşılaştırır — "keşfet"ten "karşılaştır"a geçiş. Kod içermez; yalnızca içerik/tasarım/erişilebilirlik taslağıdır.
>
> **Kanonik kaynaklar:** sayfa mimarisi/sıra → `docs/HOMEPAGE_SPECIFICATION.md` (yeni pozisyon 6) · ton/iddia disiplini → `PRINCIPLES.md §5` (doğrulanmamış genelleme yasak) · görsel dil → `docs/DESIGN_SYSTEM.md` · internal linking → `SEARCH_STRATEGY.md §15` · yayın kriterleri → `QUALITY_GATES.md`.
>
> **Sabit çerçeve:** Amaç = "somut, yan yana karşılaştırma" · Lider katman = görsel + tablo verisi · Tasarım deseni = comparison (üstte görsel, altta tablo) · CTA = yok (Bölüm 7 Chooser zaten karar adımını taşıyor).
>
> **Referans ilkesi:** Mayo Clinic/HearingLife tarzı karşılaştırma tablolarının *mantığı* (görsel+tablo birlikteliği) alınır, tasarım/metin/düzen birebir kopyalanmaz — Avrasya İşitme'nin slate+mavi diline özgün olarak uyarlanır.

---

## 1. Amaç ve Sıradaki Yeri

CategoryExplorer kullanıcıyı 7 tiple tek tek tanıştırdı (rail, sırayla gezilir). Bu bölüm aynı 7 tipi **eşzamanlı görünür** kılar — kullanıcı ileri geri gezmeden farkları görebilir. CategoryExplorer'ın hemen ardından (pozisyon 6), Chooser'dan (pozisyon 7, kişisel karar) hemen önce durur: "önce genel tabloyu gör, sonra sana özel olanı bul" akışı.

**Bu bölüm ne DEĞİLDİR:** CategoryExplorer'ın tekrarı değil (CategoryExplorer = keşif rayı, tek cümlelik tanıtım; bu bölüm = çok-kriterli tablo). Chooser'ın da yerini almaz (bu bölüm objektif/genel, Chooser kişiselleştirilmiş).

---

## 2. İçerik (taslak)

**Eyebrow:** "Karşılaştırın"
**Başlık (H2):** "İşitme Cihazı Tiplerini Karşılaştırın"
**Intro:** "Yedi cihaz tipinin öne çıkan özelliklerine göz atın; kesin uygunluk, işitme değerlendirmenizde netleşir."

**Kolonlar (7 tip — CategoryExplorer ile birebir aynı 7 gerçek `/isitme-cihazlari/*` sayfası, yeni URL icat edilmez):** Kulak Arkası (BTE) · Kulak İçi (ITE) · Görünmez (CIC) · Şarj Edilebilir · Bluetooth Özellikli · Çocuklara Özel · Suya Dayanıklı.

**Satırlar (kriterler) — her hücre ya kısa, doğrulanabilir bir ifade ya da "Modele göre değişebilir" (kullanıcı kuralı: doğrulanmamış genelleme yok):**

| Kriter | BTE | ITE | CIC | Şarjlı | Bluetooth | Çocuk | Su Direnci |
|---|---|---|---|---|---|---|---|
| Güç aralığı | Geniş | Modele göre değişebilir | Modele göre değişebilir | Modele göre değişebilir | Modele göre değişebilir | Modele göre değişebilir | Modele göre değişebilir |
| Görünürlük | Standart | Az görünür | Neredeyse görünmez | Modele göre değişebilir | Modele göre değişebilir | Standart | Modele göre değişebilir |
| Şarj/Pil | Modele göre değişebilir | Modele göre değişebilir | Modele göre değişebilir | Şarjlı | Modele göre değişebilir | Modele göre değişebilir | Modele göre değişebilir |
| Kablosuz bağlantı | Modele göre değişebilir | Modele göre değişebilir | Modele göre değişebilir | Modele göre değişebilir | Bluetooth destekli | Modele göre değişebilir | Modele göre değişebilir |
| Su/nem direnci | Modele göre değişebilir | Modele göre değişebilir | Modele göre değişebilir | Modele göre değişebilir | Modele göre değişebilir | Modele göre değişebilir | Yüksek |

> Tablo taslak niteliğindedir — her hücrenin nihai metni, implementasyon öncesi CategoryExplorer'ın kendi doğrulanmış açıklama cümleleriyle (`category-explorer.data.ts`) çapraz kontrol edilerek kilitlenecek. **Kırmızı çizgi:** Bir hücrede belirsizlik varsa (marka/modele göre gerçekten değişiyorsa) "Modele göre değişebilir" yazılır — asla iddialı bir genelleme uydurulmaz (PRINCIPLES §5, kullanıcı onayı).

**Kapanış:** "Size uygun olanı birlikte netleştirelim." → Bölüm 7 (Chooser)'a yumuşak geçiş cümlesi (ayrı bir CTA değil, sonraki bölüme doğal bir köprü).

---

## 3. Tasarım Deseni / Art Direction

**Desen:** comparison — üstte 7 kolonun her biri için gerçek/gerçekçi temsili cihaz görseli (ikon DEĞİL — kullanıcı onayı: CategoryExplorer'daki ikonlar tekrar kullanılmayacak), altta kriter × tip tablosu.

**Kompozisyon:**
- **Desktop (≥1024px):** Gerçek `<table>` (KulakArkasiComparison'ın "div-grid değil, gerçek tablo" kararıyla tutarlı — semantik + erişilebilirlik). Üst satır: 7 görsel + tip adı (her biri kendi `/isitme-cihazlari/*` sayfasına linkli). Alt satırlar: kriterler, kolon başına hücre.
- **Tablet (768–1023px):** Tablo daralır; gerekirse yalnızca en öne çıkan 4-5 tip görünür, "Tümünü gör" ile yatay scroll'a geçilebilir.
- **Mobile (<768px) — kullanıcı onayı gereksinimi ("kullanışlı responsive çözüm"):** Önerilen çözüm: **yatay scroll'lu gerçek tablo, ilk kolon (kriter adları) `position: sticky` ile sabit** — kullanıcı yana kaydırırken hangi satırda olduğunu kaybetmez, tablo semantiği (ve dolayısıyla erişilebilirlik/SEO) korunur. Alternatif (accordion — her tip kendi kartına döner) daha az bilgi yoğunluklu olduğu için birincil öneri değildir, ama implementasyon sırasında kullanılabilirlik testiyle karşılaştırılabilir.

**Görsel dil:** Kart/gölge dili `KulakArkasiComparison.astro`'nunkiyle tutarlı (badge+heading+intro header, aynı `--radius`/`--shadow` tokenları); yeni bir görsel dil icat edilmez.

---

## 4. Internal Link Planı

7 kolon başlığı/görseli → ilgili `/isitme-cihazlari/*` sayfası (CategoryExplorer ile birebir aynı 7 URL, tekrar).

## 5. SEO/GEO Amacı

"kulak içi mi kulak arkası mı", "şarjlı mı pilli mi işitme cihazı", "görünmez işitme cihazı özellikleri" gibi karşılaştırmalı arama niyetlerini doğrudan karşılar; gerçek `<table>` yapısı hem erişilebilirlik hem de arama motorlarının tabloyu doğru ayrıştırması için tercih edilir (SEARCH_STRATEGY §14 Semantic HTML).

## 6. Gerekli Görseller

**Yeni görsel gerekli (kullanıcı onayı: gerçek veya gerçekçi temsili işitme cihazı görselleri, ikon değil).** 7 adet — her cihaz tipi için bir görsel. İki olası kaynak, implementasyon öncesi karara bağlanmalı:
1. Marka model fotoğraflarından (`/images/{brand}/models/*.webp`) o tipi temsil eden birer gerçek ürün fotoğrafı seçmek (ör. BTE için Phonak Bolero/Sky, ITE için Signia Styletto) — captionda "örnek/temsili görsel" ifadesiyle tek bir markaya/modele özel olmadığı netleştirilir.
2. Veya her tip için özel üretilmiş, marka-nötr temsili görsel/render.
Kullanıcıya bu iki seçenek sorulmalı; stok görsel kullanılmaz.

## 7. Atomic Design (planlanan)

Tam eşleşen mevcut component yok. `KulakArkasiComparison.astro`'nun gerçek-`<table>` + kart/shadow dili en yakın emsal ama o **2 kolonlu** (primary/secondary "vs" formatı); burada **7 kolonlu** yeni bir tablo yapısı gerekir — `KulakArkasiComparisonRow` tipinin N-kolonlu bir genellemesi (ör. `cells: Record<deviceTypeSlug, string>`). `BrandPageModels.astro`'nun görsel-kart deseni "üstte görsel" satırı için stil emsali. Yeni organizma kendi klasöründe (`DeviceComparison/`), diğer homepage bölümleriyle tutarlı.

## 8. Erişilebilirlik

- Gerçek `<table>` + `<caption>`/`<th scope="col">`/`<th scope="row">` — ekran okuyucu hücre-kriter-tip ilişkisini doğru anonslar.
- Mobilde sticky ilk kolon `aria`/klavye gezintisini bozmamalı (yatay scroll konteyneri `tabindex="0"` + görünür scroll ipucu).
- Görseller anlamlı `alt` (tip adı + "örnek görsel").
- Kontrast AA+, token tabanlı.

## 9. Design Review Checklist

- Hiçbir hücrede doğrulanmamış genelleme yok — belirsiz olan her yerde "Modele göre değişebilir".
- CategoryExplorer'ın ikonları tekrar kullanılmadı.
- 7 kolon, CategoryExplorer ile birebir aynı 7 gerçek URL'e işaret ediyor.
- Mobilde tablo kullanılabilir (sticky kolon + yatay scroll test edildi).
- Gerçek `<table>` semantiği korunuyor (div-grid değil).
