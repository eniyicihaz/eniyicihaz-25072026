# TRUST_SPECIFICATION.md

> Ana sayfanın Güven bölümü — Guide'ın verdiği süreç güveninden sonra, sağlayıcının kendisine dair son soruyu cevaplayan sessiz durak (`docs/HOMEPAGE_SPECIFICATION.md` "Güven" bölümüyle aynı yer). Doküman Astro geliştirmesinde doğrudan kullanılacak; kod içermez, yalnızca Art Direction ve spesifikasyon tanımlar.
>
> **Kanonik kaynaklar:** amaç/hikâye → `docs/HOMEPAGE_SPECIFICATION.md` · gerçekler ve coğrafi hiyerarşi → `COMPANY.md` (özellikle §17) · içerik/iddia disiplini → `PRINCIPLES.md §5/§7` · görsel dil → `DESIGN_SYSTEM_GUIDE.md §6` · yayın kriterleri → `QUALITY_GATES.md`. Çelişkide kanonik doküman esastır.
>
> **Sabit çerçeve:** Amaç = "Doğru ellerdeyim dedirtir" · Lider katman = hikâye · Kompozisyon = giriş cümlesi + 3 doğrulanabilir gerçek + (üretimde eklenen) hizmet bölgesi cümlesi + kapanış · Işık/Gölge = ○ neredeyse düz · Noise→Signal = ○ fısıltı · CTA = **yok** (Guide zaten verdi; burada tekrar CTA yorgunluğu yaratılmaz).
>
> **Üretim notu — bu spesifikasyondan sapma ve nedeni (2026-09 itibarıyla senkronize edildi):** Gerçek üretim (`trust.data.ts`), bu spesifikasyonun ilk hâlinde olmayan bir `serviceAreaSentence` alanı ekledi: *"Darıca merkezli; Gebze ve Çayırova'dan da kolayca ulaşabilirsiniz."* (kısa, yalnızca COMPANY.md §17'nin ana merkez + öncelikli kademesini kullanan bir form; §17'nin tam 4 kademeli dökümü tekrarlanmaz, ayrıntı `/iletisim` sayfasına linklenir). Gerçek 1'in açıklaması da coğrafi bağlam kazandı: *"...aynı ekiple, Darıca, Kocaeli'deki merkezimizde yıllardır hizmet veriyor."* (bu spesifikasyonun ilk hâli yalnızca "aynı adreste" diyordu, yer adı vermiyordu). Bu ekleme, kod yorumuna göre `HOMEPAGE_CREATIVE_DIRECTION.md`'nin (bkz. `docs/HOMEPAGE_SPECIFICATION.md`) Güven bölümü için başta istenen ama ilk turda uygulanmayan coğrafi bağlamı tamamlar; yeni bir iddia eklemez, yalnızca COMPANY.md §17'ye izlenebilir bir gerçeği ifade eder.

---

# 1. Psikolojik Amaç

İkna değil, **sessiz doğrulama**. Kullanıcı Guide'da süreci anladı; son soru: *"Peki bu gerçekten kim?"* Core Emotion **Güven**, burada merkezin **gerçekliği, sürekliliği ve profesyonel güvenilirliği** olarak ifade edilir — iddiayla değil, doğrulanabilir özgüllükle (2009, SGK anlaşmalı, uzman kadro).

**Süreklilik ilkesi:** Güven yalnızca ilk ziyaretle değil, uzun vadeli destek beklentisiyle de pekişir — bu yüzden kapanış cümlesi kıdemi değil, *devam eden* bir ilişkiyi vurgular (bkz. §2).

---

# 2. Story Architecture

**Giriş:** Karardan önce bilinmesi gereken birkaç gerçeğe zemin hazırlar.
**Üç gerçek (doğrulanabilir, COMPANY.md), sırası kilitli:** kıdem/süreklilik → resmî ilişki (SGK) → yetkinlik (uzman kadro). **Süreklilik her zaman ilk gerçektir** — diğer kanıtlardan önce gelir, çünkü güvenin zemini önce zamanla kurulur (refinement 1).
**Kapanış:** İlk ziyaretle sınırlı olmayan bir ilişki hissini kurar — ama **yeni bir kanıt/iddia eklemez**, yalnızca yukarıdaki üç gerçeği (özellikle süreklilik gerçeğini) yeniden çerçeveler (refinement 2).

**Kilitli kopya (2026-09 itibarıyla gerçek üretimle senkronize edildi):**
- Sr-only başlık: *"Neden burası?"*
- Bağlam cümlesi: *"Kararınızı vermeden önce, bilmeniz gereken birkaç gerçek."*
- Gerçek 1 (her zaman ilk) — Başlık: *"2009'dan beri"* · Açıklama: *"Avrasya İşitme, aynı ekiple, Darıca, Kocaeli'deki merkezimizde yıllardır hizmet veriyor."* (coğrafi kısım COMPANY.md §17'nin ana merkez kademesine dayanır)
- Gerçek 2 — Başlık: *"SGK anlaşmalı"* · Açıklama: *"Resmî olarak SGK ile anlaşmalı bir işitme merkeziyiz."* (üretimde `/sgk-isitme-cihazi-odemesi` sayfasına bağlantı eklendi)
- Gerçek 3 — Başlık: *"Uzman kadro"* · Açıklama: *"Odyolog ve odyometristlerden oluşan, alanında yetkin bir ekip."*
- **Hizmet bölgesi cümlesi (üretimde eklendi):** *"Darıca merkezli; Gebze ve Çayırova'dan da kolayca ulaşabilirsiniz."* → `/iletisim` sayfasına link (COMPANY.md §17'nin ana merkez + öncelikli kademesinin kısa formu; tam 4 kademeli döküm burada tekrarlanmaz)
- Kapanış cümlesi: *"Bu ilişki, ilk ziyaretle sınırlı değil — 2009'dan beri süregelen aynı güvenle devam ediyor."*

**Kırmızı çizgi kontrolü:** Hiçbir sayı/unvan COMPANY.md dışında üretilmedi; "en iyi/bir numara/lider" ya da ölçülemez üstünlük ifadesi yok (PRINCIPLES §5).

---

# 3. Art Direction

Sayfanın en alçak sesli anlarından biri — moodboard "○ fısıltı". Solution'ın kart düzeninden bilinçli olarak **daha da sade**: bordür/gölge/yüzey yok, yalnızca tipografik ritim ve ince bir dikey ayraç. Bu, art arda üç bölümün (Solution, Guide, Trust) aynı "kart" bileşenini tekrarlamasını önler — her bölüm kendi sessizlik derecesine sahip.

**Fotoğraf kararı:** Moodboard "gerçek fotoğraf" öneriyor, ama bu turda gerçek/doğrulanmış bir fotoğraf varlığı yok. Stok/kurumsal poz kullanmak anti-pattern listesini ihlal eder — bu yüzden bu spesifikasyon **metin-öncelikli** ilerler; fotoğraf, gerçek görsel temin edildiğinde ayrı bir iyileştirme olarak eklenebilir, şimdi icat edilmez.

**Rozet/logo/sertifika yok** — hiçbir görsel "kanıt objesi" eklenmez; gerçekler yalnızca kendi sözleriyle durur.

---

# 4. Visual Moodboard

- **Renk** — Aynı slate + tek mavi; vurgu rengi burada CTA olmadığı için kullanılmaz — gerçek başlıkları `--color-text`, açıklamalar `--color-text-muted` (Solution'ın renk-hiyerarşisiyle tutarlı, ama kart zemini yok).
- **Ayraç** — İnce, dikey, `--color-border` — üç gerçek arasında sessiz bir bölücü, dekoratif değil.
- **Boşluk** — Solution'dan da cömert; bu bölüm göz için bir "durma noktası"dır.

---

# 5. Composition

### Desktop (≥1024px)
`--container-lg`, ortalı. Üstte bağlam cümlesi; altında 3 gerçek yatay sırada, aralarında ince dikey ayraç (Guide'ın yatay bağlayıcı çizgisinden farklı — burada ayırıcı, birleştirici değil); ardından (üretimde eklenen) hizmet bölgesi cümlesi, `/iletisim` linkiyle; en altta kapanış cümlesi.

### Tablet (768–1023px)
3 gerçek tek sütuna döner, dikey ayraç yatay kısa çizgiye döner (Solution'daki tablet esnekliğiyle tutarlı).

### Mobile (<768px)
Gerçekler dikey, aralarında ince yatay ayraç.

---

# 6. Typography Direction

Guide'ın "yol gösterici" tonundan **düz, kendinden emin**e geçiş: gerçek başlıkları kısa ve iddiasız (`--font-size-lg`/`--font-weight-semibold`), ünlem yok. Açıklamalar tek cümle (`--font-size-md`/`--color-text-muted`). Bağlam ve kapanış cümleleri Solution/Guide ile aynı kayıt (`--font-size-lg`, muted, ortalı).

---

# 7. Motion Language

Guide'dan bile daha durgun. Tek seferlik `data-rise` girişi (kurulu desen), hafif kademe (0/120/240ms, imza easing) üç gerçek arasında. Ayraç statiktir, hiçbir zaman hareket etmez. Performatif hiçbir hareket yok — bu bölüm bir "gösteri" değil, bir "durgunluk"tur. `prefers-reduced-motion`: her şey anında tam görünür.

---

# 8. Atomic Design Architecture

**Component Decision Tree kontrolü:** `data-rise`/`data-anim` giriş deseni (Hero/Solution/Guide ile aynı) yeniden kullanılır. Solution'ın kart bileşeni **bilinçli olarak yeniden kullanılmaz** — bu bölüm daha sessiz bir kayıt gerektirir (kart zemini yok), bu yüzden yeni, daha sade bir atom haklı çıkar.

- **Atoms:** `TrustFact.astro` — başlık + açıklama, kart zemini yok; `title`, `description` prop'ları.
- **Molecules:** Yok — 3 gerçeğin dizilimi + ayraç organism seviyesinde ele alınır (Solution/Guide'daki YAGNI kararıyla tutarlı).
- **Organism:** `Trust.astro` — bağlam cümlesi + 3 `TrustFact` + ayraçlar + kapanış cümlesini kurar, tek giriş animasyonunu yönetir. **CTA içermez.**
- **Data/type sözleşmesi:** `trust.data.ts` (`heading`, `contextSentence`, `facts: {title, description, href?, linkLabel?}[3]`, `serviceAreaSentence`, `serviceAreaHref`, `closingSentence`), `trust.types.ts`.

---

# 9. Design Tokens

Yeni token gerekmiyor. Giriş easing'i için component-scoped `--trust-ease` (Hero/Footer/Empati/Sound Room/Solution/Guide ile aynı imza değer — artık **yedinci** tekrar; `--ease-signature` DS tokenına yükseltme önerisi bağımsız bir DESIGN_SYSTEM iyileştirmesi olarak kalır).

---

# 10. Accessibility

- Sr-only `<h2>` bölümü adlandırır; her gerçeğin başlığı `<h3>` (h2 altında doğru anahat).
- Dikey/yatay ayraç tamamen dekoratif → `aria-hidden="true"`.
- Kontrast: tüm metin token tabanlı, AA+ garantili.
- Hiçbir interaktif eleman yok — CTA olmadığından odak/klavye riski yok.
- `prefers-reduced-motion`: her şey anında tam görünür.

---

# 11. Performance

Yalnızca `opacity`/`transform` (kurulu disiplin). `mask-image`/`backdrop-filter` yok — ihtiyaç da yok. Statik metin ağırlıklı, LCP/CLS riski yok.

---

# 12. Design Review Checklist

- Her gerçek COMPANY.md'ye kadar izlenebiliyor mu — uydurma sayı/unvan yok.
- "En iyi/bir numara/lider" ya da ölçülemez üstünlük ifadesi yok.
- Logo duvarı, sertifika ızgarası veya abartılı başarı vitrini yok.
- CTA yok — Guide'ın CTA'sı tekrar edilmiyor.
- Kapanış cümlesi süreklilik hissini taşıyor mu — ve **yeni bir kanıt/iddia eklemiyor**, yalnızca sunulan üç gerçeği yeniden çerçeveliyor mu.
- Gerçek 1 her zaman süreklilik (2009'dan beri) — başka bir kanıt önce gelmiyor.
- Üç gerçek eşit ağırlıkta — hiçbiri diğerine baskın değil.
- Reduced motion: her şey anında tam görünür.

---

# 13. Creative North Star

Kullanıcı bu bölümden çıkarken şunu düşünmeli: *"Doğru yerdeyim."* İkna edilmiş değil, kendi gözüyle doğrulamış gibi hissetmeli — bir reklam panosu değil, bir kimlik kartı okumuş gibi. Bu his oluşmuyorsa — kullanıcı yalnızca bir başarı listesi okuduysa — bölüm amacına ulaşmamış demektir.
