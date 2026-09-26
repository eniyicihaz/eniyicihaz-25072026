# HOMEPAGE_SPECIFICATION.md

> Ana sayfanın hikâyesi, psikolojik yolculuğu ve bölüm mimarisi. Bu belge sayfaya özel bir **uygulama spesifikasyonudur** — anayasal referansların (COMPANY, PRINCIPLES, DESIGN_SYSTEM_GUIDE, SEARCH_STRATEGY, IMPLEMENTATION_STANDARD, QUALITY_GATES) yerine geçmez, onları ana sayfaya uygular.
>
> **2026-09 birleştirme notu:** Bu doküman, önceden ayrı iki dosya olan `HOMEPAGE_CREATIVE_DIRECTION.md` (hikâye/mimari) ve `HOMEPAGE_MOODBOARD.md` (sanat yönü özeti) birleştirilerek oluşturuldu — ikisi aynı konuyu farklı ayrıntı seviyesinde ele alıyordu ve ikisi de artık gerçek `src/pages/index.astro` ile uyuşmayan bir 10-bölümlük mimari taşıyordu. O iki dosya artık arşiv/tarihsel durumdadır ve içerikleri buraya taşınmıştır (silinmediler, kısa bir yönlendirme notuna indirgendiler). Bölüm mimarisi aşağıda **gerçek, doğrulanmış 11-bölüm yapısına** güncellenmiştir.

## Kanonik kaynaklar (SSoT)

Buradaki Brand DNA, karakter ve görsel dil kavramları burada *tanımlanmaz*; kalıcı dokümanlarda tanımlıdır:
- Brand DNA (Purpose→…→Brand Character), kişilik/ton, güven → **PRINCIPLES.md §1 / §4 / §7**
- İçerik ve iddia politikası, CTA → **PRINCIPLES.md §5 / §9**
- Görsel dil (Noise → Signal) → **DESIGN_SYSTEM_GUIDE.md §6 Visual Language**
- Şirket gerçekleri (adres, telefon, hizmetler, markalar) ve coğrafi öncelik hiyerarşisi → **COMPANY.md** (özellikle §17)
- Arama/AI görünürlüğü → **SEARCH_STRATEGY.md** · İmplementasyon kalitesi → **IMPLEMENTATION_STANDARD.md** · Yayın kriterleri → **QUALITY_GATES.md**

Her bölüm uygulanırken zincir sınanır: `Brand DNA → Brand Character → PRINCIPLES → DESIGN_SYSTEM → Implementation → QUALITY_GATES`. Çelişki halinde kanonik doküman esastır.

## Bağlam

Header, Mega Menu ve Footer premium seviyede. Ana sayfa artık boş değildir — 11 bölümden oluşan üretime alınmış bir sayfadır (bkz. Bölüm Mimarisi). Amaç: Türkiye'nin en premium işitme cihazı ana sayfası. Bağlayıcı akış (PRINCIPLES §3): önce bilgilendir → güven inşa et → iletişime yönlendir → temin imkânı. Tasarım dili: slate + tek mavi, lacivert footer, katmanlı ışık gölgeleri, elle yazılmış hareket, tam erişilebilirlik.

---

## Manifesto (ana sayfa sesi)
> Brand DNA'nın kopya olarak ifadesi. Karakter: Sakin Usta (PRINCIPLES §1/§4). Ton: güven bırakır, korku değil.

> Duymak, hayatın içinde kalmaktır.
> Ve iyi bir işitme, sesin yüksekliğiyle değil, netliğiyle ölçülür.
>
> Bizim işimiz sesi yükseltmek değil, netleştirmek —
> gürültüyü sinyale, karmaşayı berraklığa çevirmek.
>
> Size yol gösterirken de aynısını yaparız:
> önce dinler, sonra anlatırız; satmadan önce anlamaya çalışırız.
> On sekiz dünya markası arasından en pahalıyı değil,
> kulağınıza ve hayatınıza en uygun olanı öneririz.
>
> Çünkü netlik bizim için bir teknoloji değil, bir dürüstlük biçimidir.
> Acele ettirmez, baskı yapmayız; kararı, doğru bilgiyle, size bırakırız.
>
> **Daha net duyun, hayata daha yakın olun.**

---

## Büyük Fikir & Görsel Dil
**"Yeniden duymak, yeniden bağlanmaktır."** Ana sayfa katalog değil; kopuştan bağlanmaya bir yolculuk. Ürün değil, hayatın sesi.

**Metafor — Gürültüden Sinyale** (Canonical Source: DESIGN_SYSTEM_GUIDE.md §6). Netlik optik "blur→focus" ile değil, akustik dille anlatılır: dağınık dalgaların tek temiz sinyale hizalanması. Cihazdan bağımsız, erişilebilir, zamansız; "kamera" değil "işitme" der.

**Üç katmanlı dil** (eşit değil, farklı irtifa — bu yüzden çarpışmazlar):
1. **İnsan hikâyesi** — "neden umursayayım?" (kopya, gerçek yüzler). Sabit ruh.
2. **Akustik dil (noise→signal)** — "markanın fikri ne?" (hero grafiği, geçişler, veri). Konsantre imza.
3. **Premium arayüz** (ışık/derinlik/mikro-motion) — "üst düzey mi?" (malzeme, detay). Görünmez bitiş.

**Şef kuralı:** Her bölümde tek katman lider; üçü aynı anda full ses = gürültü.

**Taşıyıcı fikir:** Akustik dalga başta gürültü, sonda harmoni — kullanıcının yolculuğunu tüm scroll boyunca anlatır. Dekor değil, anlatının kendisi.

**İki şart:** (1) *Kasıtlı sessizlikler* — akustik her yerde olursa duvar kâğıdı olur; rest bir nefestir. (2) *Değişmez gramer* — aynı çizgi DNA'sı, tek mavi + slate, aynı easing (`cubic-bezier(0.22,1,0.36,1)`), aynı çözünme yönü.

**Premium/glass uyarısı:** Aşırı cam = generic + soğuk/klinik. "Sıcak premium": gradient değil katmanlı ışık gölgesi; baharat gibi, okunabilirliği asla yenmez.

**Ton:** sıcak, onurlu, umutlu, bilimsel. "Klinik ama soğuk değil; lüks ama gösterişsiz."

---

## Psikolojik Yolculuk
"Burası farklı" → "Beni anlıyorlar" → "Aa, gerçekten böyle" → "Şimdi anladım" → "Bu bana uygun" → "Doğru ellerdeyim" → "Kendi markasını değil bana uygunu öneriyor" → "Bilgiye devam edebilirim" → "Bir konuşmayla başlayalım."

> **Not (2026-09):** Orijinal yolculukta yer alan "Korkacak bir şey yok, denemesi ücretsiz" ve "Başkaları da yaşadı" duyguları, aşağıdaki 7 ve 8 numaralı "Süreç & Deneme" ve "Gerçek Hikâyeler" bölümlerine bağlıydı. Bu iki bölüm üretime alınmadı (bkz. Bölüm Mimarisi) — bu duygular şu an sayfanın hiçbir yerinde karşılanmıyor. Bu bilinen bir boşluktur, gizlenmemiştir.

## Bölüm Mimarisi (GÜNCEL — gerçek `src/pages/index.astro` ile doğrulanmış, 11 bölüm)

*Ritim: önce hisset (0–1), sonra deneyimle (2), sonra anla (3), sonra keşfet/karşılaştır (4–6), sonra süreci anla (7), sonra güven (8), sonra bilgiye devam et (9), sonra davet (10).*

| # | Bölüm (component) | Amaç (index.astro'nun kendi yorumu) | Lider katman | Akustik yoğunluk | CTA | Kendi spesifikasyonu |
|---|---|---|---|---|---|---|
| 0 | **Hero** | Kim / ne / nerede | akustik | zengin ama sakin (poised) | ✔ Ücretsiz İşitme Testi | `HERO_SPECIFICATION.md` |
| 1 | **Empathy** | Farkındalık | hikâye | neredeyse görünmez tek çizgi | — | `EMPATHY_SPECIFICATION.md` |
| 2 | **SoundRoom** | Deneyim ★ WOW | akustik | zirve kontrast (kullanıcı çözer) | — (etkileşim) | `SOUND_ROOM_SPECIFICATION.md` |
| 3 | **Solution** | Anlama | hikâye + akustik | okunabilir, işlevsel çizgiler | ~ Bilgi CTA | `SOLUTION_SPECIFICATION.md` |
| 4 | **CategoryExplorer** | Cihazları keşfetme | — | — | — | `CATEGORY_EXPLORER_SPECIFICATION.md` |
| 5 | **BrandCriteria** | Hizmetlerimiz özeti / hizmetleri anlama (`homeServices` verisiyle) | — | — | — | `BRAND_CRITERIA_SPECIFICATION.md` |
| 6 | **Brands** | Marka bağımsızlığı | hikâye | fısıltı → sessizlik (rest) | — | `BRANDS_SPECIFICATION.md` |
| 7 | **Guide** | Süreci anlama | hikâye + akustik | işlevsel çizgi | ✔ Uzman testi daveti | `GUIDE_SPECIFICATION.md` |
| 8 | **Trust** | Yerel güven | hikâye | fısıltı → sessizlik (rest) | — | `TRUST_SPECIFICATION.md` |
| 9 | **KnowledgeGate** | Bilgi merkezi girişi / bilgiye devam etme | — | — | — | `KNOWLEDGE_GATE_SPECIFICATION.md` |
| 10 | **Closing** | İletişime geçme / Dönüşüm | hikâye + premium | tek, hizalanmış sinyal (çözünüm) | ✔ güçlü (form/ara/gel) | `CLOSING_SPECIFICATION.md` |

**Ritim okuması:** ışık ve Noise→Signal iki tepe yapar — **Sound Room** (deneyim zirvesi) ve **Closing** (çözünüm zirvesi); aralarında bilinçli sessizlikler (Empathy, Brands, Trust) nefes verir.

> **Güncelleme (2026-09-26):** `CategoryExplorer`, `BrandCriteria` ve `Brands`/`KnowledgeGate` için spesifikasyon dosyaları artık yazılmıştır (yukarıdaki tablo). Her biri için önce "bu bölüm gerçekten gerekli mi" değerlendirmesi yapıldı (Ana Sayfa Local SEO/GEO Uygulama Planı, 2026-09-26) — dördü de index.astro'nun kendi belgelenmiş "Local Entity Hub + Discovery + CRO" mimarisinde ayrı, kaldırılamaz bir rol taşıdığı için korundu; içerikleri değiştirilmedi, yalnızca zaten üretimde olan gerçek içerik belgelendi. `BrandCriteria`'nın homepage'e özel olmayan, `/isitme-cihazlari`/`/hizmetlerimiz`/`/bilgi-merkezi`/`/iletisim`'de de kullanılan jenerik bir modül olduğu kendi spesifikasyonunda ayrıca not edilmiştir.

**Kaldırılan bölümler:** Önceki mimaride yer alan **"7 · Süreç & Deneme"** ve **"8 · Gerçek Hikâyeler"** üretime hiç alınmadı. Bunlar bu dokümandan çıkarılmıştır; gelecekte gerçekten ihtiyaç doğarsa (SEARCH_STRATEGY.md §19 Search Governance ilkesiyle tutarlı biçimde: "gerçek ve tekrar eden bir ihtiyaç" varsa) yeniden değerlendirilebilir.

---

## Kesişen İlkeler
- **Netlik motifi:** sayfa indikçe gürültü→sinyal hizalanması artar (akustik; optik blur değil).
- **İnteraktiflik:** yalnızca işitme sektörünün yapabileceği görsel-duyusal an (Sound Room).
- **Rahatsız etmeyen çağrı:** hafif, bunaltmayan randevu/telefon erişimi.
- **Görsel süreklilik:** katmanlı ışık gölgesi + %3 film-grain + noktalı grid dili tüm sayfada (footer ile aynı).
- **Scroll-koreografisi:** IntersectionObserver kademeli reveal (footer failsafe + reduced-motion deseni).

**Sektörden kopuş:** görsel-sessiz Duyma Deneyimi · ürün gridi yerine şiirsel açılış · marka bağımsızlığını güven argümanına çevirmek · süreci "danışma/deneme" çerçevesi · arayüzün netliği canlandırması.

---

## Bölüm Bazlı Sanat Yönü — nerede aranır

Hero'nun tam sanat yönü, tipografi ölçeği, renk/ışık, kompozisyon ve motion detayı bu dokümanda **tekrar edilmez** — Canonical Source: `HERO_SPECIFICATION.md` (bu belge, önceden ayrı duran `HOMEPAGE_MOODBOARD.md`'nin Hero bölümüyle aynı içeriği zaten kapsıyordu; tekrar önlemek için tek yuva `HERO_SPECIFICATION.md` olarak sabitlendi). Diğer belgelenmiş bölümler için kendi spesifikasyon dosyalarına bakın (yukarıdaki tablo).
