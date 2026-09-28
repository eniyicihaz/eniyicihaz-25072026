# MODEL_SHOWCASE_SPECIFICATION.md

> **⚠ ESKİ 20 BÖLÜMLÜ HOMEPAGE PLANINA AİT SPESİFİKASYON (2026-09).** Ayrı Model Showcase bölümü artık **yok**; aynı model verisi (`src/data/home/models.ts`) #6 `HomeShowroom` içinde marka logolarıyla tek bölümde, `BrandPageModels` `compact` + `embedded` olarak render edilir. Güncel ana sayfa mimarisi (10 ana bölüm) için tek doğru kaynak: `HOMEPAGE_SPECIFICATION.md`. Bu belge, o bölümün **içerik/gerekçe kaydı** olarak durur; bölüm numaraları, "yeni pozisyon N", "TASLAK — henüz üretimde değil" ve "ayrı section" ifadeleri eski 20 bölümlü sıraya aittir, geçerli değildir. Dosya, kod yorumlarından hâlâ referans alındığı için arşive taşınmamıştır.

> **TASLAK — henüz üretimde değil.** Ana sayfaya eklenmesi planlanan yeni bölüm: Model Vitrini. Brands'in (pozisyon 10, marka marquee'si) hemen ardından, "18+ marka" soyutluğunu somut, gerçek 4-6 ürünle kanıtlar. Kod içermez; yalnızca içerik/tasarım/erişilebilirlik taslağıdır.
>
> **Kanonik kaynaklar:** sayfa mimarisi/sıra → `docs/HOMEPAGE_SPECIFICATION.md` (yeni pozisyon 11) · doğrudan reuse edilecek component → `src/components/brand-page/BrandPageModels/BrandPageModels.astro` · aynı mantığın zaten üretimdeki emsali → `src/data/cihaz-deneme/models.ts` (`/uygulama-ayar/cihaz-deneme` sayfası) · ürün/fiyat iddiası yasağı → `SEARCH_STRATEGY.md §11`, `PRINCIPLES.md §5`.
>
> **Sabit çerçeve:** Amaç = "marka bağımsızlığını gerçek ürünle kanıtlamak" · Lider katman = ürün fotoğrafı · Tasarım deseni = product showcase (carousel/grid) · CTA = kart başına "İncele" (marka sayfasına).

---

## 1. Amaç ve Sıradaki Yeri

Brands bölümü 18 marka logosunu marquee'de gösterdi — geniş ama soyut bir "kapsam" iddiası. Model Vitrini bunu **somutlaştırır**: kullanıcı gerçek, isimlendirilmiş birkaç ürünü görür. BrandCriteria'dan (hizmetler) önce, Brands'ten hemen sonra durur: "markalarımız bunlar → işte gerçek birkaç örneği → şimdi hizmet sürecimiz."

**Kritik mimari bulgu:** Bu bölümün ihtiyaç duyduğu her şey zaten üretimde kanıtlanmış durumda — `BrandPageModels.astro` component'i ve onun `/uygulama-ayar/cihaz-deneme` sayfasında kullanılan `cihazDenemeModels` verisi, **tam olarak** istenen mantığı (gerçek ürün fotoğrafı + marka sayfasına link + model sayfası yoksa uydurma URL üretmeme) zaten uyguluyor. Bu bölüm, o kanıtlanmış deseni homepage'e özel yeni bir 4-6 modelli seçkiyle tekrar kullanır.

---

## 2. İçerik (taslak — homepage'e özel seçki, kullanıcı onayı: farklı markalardan ve mümkün olduğunca farklı cihaz tipinden dengeli)

**Eyebrow:** "Gerçek Ürünler"
**Başlık (H2):** "Birkaç Gerçek Modelle Tanışın"
**Intro:** "18'den fazla markanın binlerce seçeneğinden, farklı ihtiyaçlara örnek birkaç model."

**Önerilen 5 model (doğrulanmış, gerçekten mevcut ürün verisinden — `src/data/{brand}/models.ts` içinde bulundu, uydurulmadı):**

| Model | Marka | Tip/etiket | Görsel (doğrulanan yol) | Link |
|---|---|---|---|---|
| Oticon Intent | Oticon | AI, Bluetooth, Kulak Arkası (RIC) | `/images/oticon/models/intent.webp` | `/markalar/oticon` |
| Phonak Audéo | Phonak | RIC, Bluetooth, Şarjlı | `/images/phonak/models/audeo.webp` | `/markalar/phonak` |
| Signia Styletto | Signia | Şarjlı, Kulak İçi | `/images/signia/models/styletto.webp` | `/markalar/signia` |
| Widex SmartRIC | Widex | Bluetooth, Şarjlı | `/images/widex/models/smartric.webp` | `/markalar/widex` |
| Phonak Naída | Phonak | Power/Güçlü Kayıplar, Bluetooth, Şarjlı | `/images/phonak/models/naida.webp` | `/markalar/phonak` |

**Opsiyonel 6.:** ReSound Vivia (Bluetooth) — zaten `cihazDenemeModels`'te doğrulanmış, ama Phonak iki kez temsil edildiği için (Audéo + Naída) tercih sırası implementasyonda gözden geçirilebilir; hedef "farklı marka" dengesiyse ReSound Vivia, Naída'nın yerine de düşünülebilir.

**Açık nokta (implementasyon öncesi doğrulanmalı, uydurulmadı):** Yukarıdaki 5 model gerçek proje verisinden doğrulandı; ancak her görselin **dosya olarak var olduğu** (yalnızca veri dosyasında referans olarak görüldü) implementasyon anında `public/images/{brand}/models/` içinde tekrar teyit edilmeli. Phonak Bolero gibi bazı modellerin kendi veri dosyasında "henüz fotoğrafı sağlanmadı, marka logosuna işaret ediyor" notu olduğu doğrulandı — bu yüzden yalnızca gerçek fotoğrafı teyit edilmiş modeller seçildi.

**Kırmızı çizgi:** Hiçbir modelde fiyat/teklif/kesin uygunluk iddiası yok (SEARCH_STRATEGY §11 — ürün şemasında fiyat asla eklenmez).

---

## 3. Tasarım Deseni / Art Direction

**Desen:** product showcase — `BrandPageModels.astro`'nun zaten kanıtlanmış görsel dili (kart + görsel + etiket rozetleri + "İncele" linki) birebir kullanılır; yeni bir görsel dil icat edilmez.

**Kompozisyon:**
- **Desktop (≥1024px):** `BrandPageModels`'in mevcut grid/carousel düzeni (kartlar yan yana, 4-5 kart görünür alan).
- **Tablet/Mobile:** `BrandPageModels`'in zaten sahip olduğu responsive davranış (yatay scroll veya grid daralması — mevcut component'in kendi çözümü, yeniden icat edilmez).

**Görsel dil:** Marka-özel accent renkleri (her modelin kendi markasının rengi — `BrandPageModels`'in `accentColor` prop mantığı) ya da homepage'in tek-mavi diline sadeleştirilmiş tek bir accent — implementasyon kararı; homepage'in "tek mavi" disiplinine (HOMEPAGE_SPECIFICATION.md) daha sadık olan ikinci seçenek tercih edilir.

---

## 4. Internal Link Planı

Her kart → kendi `/markalar/{slug}` sayfası (5 karttan Phonak 2 kez tekrarlanıyorsa `/markalar/phonak`'a 2 link — kabul edilebilir, aynı sayfaya farklı ürün bağlamından gelen linkler). Model detay sayfası olmayan hiçbir ürün için uydurma URL üretilmez (kullanıcı onayı) — hepsi mevcut, gerçek `/markalar/*` sayfalarına gider.

## 5. SEO/GEO Amacı

Gerçek ürün adı entity'lerini (Oticon Intent, Phonak Audéo, Signia Styletto, Widex SmartRIC, Phonak Naída) homepage'e bağlar — GEO açısından Product/Brand ilişkisini güçlendirir (SEARCH_STRATEGY §4 Entity Strategy). Fiyat/teklif bilgisi asla eklenmez.

## 6. Gerekli Görseller

**Yok — zaten mevcut.** 5 model için gerçek ürün fotoğrafları zaten `public/images/{brand}/models/` altında (implementasyon anında dosya varlığı son kez teyit edilecek).

## 7. Atomic Design (planlanan)

**Doğrudan reuse, yeni component gerekmiyor:** `BrandPageModels.astro` aynen kullanılır. Yeni ihtiyaç yalnızca veri: `src/data/home/models.ts` (adı taslak) — `BrandPageModelsContent` tipini implement eden, yukarıdaki 5 modelin homepage'e özel badge/heading/intro'suyla birlikte. **Veri yapısı zaten genişletilebilir** (`href` alanı opsiyonel, `BrandPageProduct` tipi zaten model sayfası olan/olmayan ürünleri aynı şekilde taşıyabiliyor) — ileride model detay sayfaları eklenirse, yalnızca ilgili `href` güncellenir, yapı değişmez.

## 8. Erişilebilirlik

`BrandPageModels.astro` zaten üretimde kanıtlanmış erişilebilirlik davranışını taşıyor (kart linkleri, görsel `alt` metinleri, odak göstergesi) — bu bölüm için ek bir erişilebilirlik riski yaratmaz, mevcut component'in disiplinine güvenilir.

## 9. Design Review Checklist

- Seçilen 5(-6) model gerçek, doğrulanmış proje verisinden — uydurulmadı.
- Marka çeşitliliği var (4 farklı marka), tip çeşitliliği var (RIC/BTE-power, kulak içi, AI, Bluetooth).
- Hiçbir link uydurma model-sayfası URL'ine gitmiyor — hepsi `/markalar/*`.
- Fiyat/teklif iddiası yok.
- `BrandPageModels.astro` değiştirilmedi, yalnızca yeni veriyle çağrıldı.
