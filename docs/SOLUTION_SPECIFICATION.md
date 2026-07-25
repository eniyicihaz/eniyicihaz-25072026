# SOLUTION_SPECIFICATION.md

> Ana sayfanın üçüncü bölümü — Sound Room'un deneyimini anlamlandıran, sakin bir "rest" durağı (`HOMEPAGE_CREATIVE_DIRECTION.md` Bölüm 3 "Bilgilendir" ile aynı yer). Doküman Astro geliştirmesinde doğrudan kullanılacak; kod içermez, yalnızca Art Direction ve spesifikasyon tanımlar.
>
> **Kanonik kaynaklar:** amaç/hikâye → `HOMEPAGE_CREATIVE_DIRECTION.md` (Bölüm 3) · sayfa ritmi → `HOMEPAGE_MOODBOARD.md` · ton/etik sınırlar → `PRINCIPLES.md §5/§6` · görsel dil → `DESIGN_SYSTEM_GUIDE.md §6` · Hero/Empati/Sound Room'un kurduğu değişmez gramer → ilgili spesifikasyon dosyaları. Çelişkide kanonik doküman esastır.
>
> **Sabit çerçeve:** Amaç = "Bilgilendirir, yetkinlikle güven kurar" · Lider katman = hikâye + bilgi · Kompozisyon = giriş cümlesi + 3 sakin gerçek kartı · Işık/Gölge = ○–◐ hafif · Noise→Signal = ◐ okunabilir, işlevsel çizgiler · CTA = **yok** (dönüşüm bu bölüme ait değil, bkz. §1).

---

# 1. Psikolojik Amaç ve Kapsam

Sound Room kullanıcıya netliği hissettirdi; bu bölüm *neden böyle olduğunu* sakince açıklar. Core Emotion **Güven**, buradaki karşılığı **yetkinlik**tir — teşhis değil, genel ve bilimsel bir anlayış.

**Bu bölümün sahiplenmediği şey — dönüşüm.** Tek sorumluluğu anlamaktır; hiçbir CTA, buton veya "şimdi harekete geçin" daveti içermez. Randevu/uzman daveti bir sonraki bölüme (Rehber) aittir. Bu bölüm yalnızca yumuşak bir geçiş cümlesiyle kapanır (§3/§6).

---

# 2. Story Architecture

**Giriş:** Az önce kaydırıcıda hissedilen şeye referansla açılır — "bu size ne olduğunu" değil, "bu genel olarak nasıl işliyor"u anlatır.

**Üç gerçek (kilitli sıra, her biri önceki bölüme geri bağlanır):**

| # | Başlık | Neden bu sırada / bağlantı |
|---|---|---|
| 1 | Yavaş gelişir | Empati'nin "yavaşça uzaklaşmak" satırına doğrudan geri bağlanır — ani değil, kademeli. |
| 2 | Yaygındır | Psikolojik çıktıyı (§4 önceki tur) doğrudan karşılar: "yalnız değilsiniz." |
| 3 | Bazı sesler önce solar | Sound Room'un altı izinin (trafik→konuşma→...→çocuk kahkahası) *neden* o sırayla netleştiğini açıklar — deneyimin bilimsel karşılığı. |

**Kapanış:** Teşhis değil, bir sonraki adıma zemin — "Bunu anlamak ilk adım; sırada size özel olan var." (yumuşak köprü, CTA değil).

**Kilitli kopya:**
- Sr-only başlık: *"Neden böyle oluyor?"*
- Bağlam cümlesi: *"Az önce hissettiğiniz şeyin, oldukça basit bir açıklaması var."*
- Kart 1 — Başlık: *"Yavaş gelişir"* · Gövde: *"İşitme kaybı çoğu zaman bir anda değil, yıllar içinde ve fark edilmeden ilerler."*
- Kart 2 — Başlık: *"Yaygındır"* · Gövde: *"Belirli bir yaştan sonra pek çok kişide görülür — yalnız olduğunuzu düşünmenize gerek yok."*
- Kart 3 — Başlık: *"Bazı sesler önce solar"* · Gövde: *"Kuş sesi, fısıltı ya da çocuk gülüşü gibi ince sesler genellikle önce netliğini kaybeder — az önce kaydırıcıda hissettiğiniz gibi."*
- Kapanış cümlesi: *"Bunu anlamak ilk adım; sırada size özel olan var."*

---

# 3. Art Direction

Sound Room'un zirvesinden sonra bir **iniş** — sakin, düzenli, az uyaranlı; DESIGN_SYSTEM §6'nın "kasıtlı sessizlik"i. Üç kart yan yana/alt alta, eşit ağırlıkta, hiçbiri diğerinden görsel olarak baskın değil. **Görseller açıklamayı destekler, onun yerine geçmez** — her kartta en fazla küçük, soyut bir simge (anatomik diyagram, kesit çizim, kırmızı "hasar" bölgesi YOK); asıl anlam her zaman metindedir.

Akustik dil burada geri planda, destekleyici: her kartın üstünde ince, sabit (etkileşimsiz) bir çizgi — Sound Room'un izlerinin "dinlenmiş" hali, okunabilir ve işlevsel, asla dekoratif kaos değil (moodboard: "◐ okunabilir bilimsel").

---

# 4. Visual Moodboard

- **Renk** — Aynı slate + tek mavi (Hero/Empati/Sound Room ile birebir); kartlar `--color-surface` zemin, `--color-border` kenarlık.
- **Işık** — Düz, nötr; Sound Room'un cam paneli burada tekrarlanmaz (o istisna yalnızca kendi bölümünde kalır).
- **Kartlar** — Eşit boyut, sade köşe yuvarlaklığı (`--radius-lg`/`--radius-xl`), gerçek yükseklik hissi için hafif gölge (`--shadow-sm`), dekoratif değil.
- **İkon/çizgi** — Anatomik değil, soyut ve tekil (ör. ince yatay bir çizgi ya da nokta grubu) — DESIGN_SYSTEM §6 ilkesi: her akustik öğe bilgi taşır, dekor değil.

---

# 5. Composition

### Desktop (≥1024px)
Ortalı içerik, `--container-lg`. Üstte bağlam cümlesi; altında 3 kart eşit genişlikte yan yana (grid). En altta, kartlardan ayrık, sade kapanış cümlesi.

### Tablet (768–1023px)
Kartlar 2+1 veya tek sütun akabilir; eşit ağırlık korunur.

### Mobile (<768px)
Kartlar tek sütun, alt alta; her biri tam genişlik, dokunma hedefi gerektirmez (interaktif değil, salt bilgi).

---

# 6. Typography Direction

Empati'nin şiirsel kırıklığından biraz daha **açıklayıcı ama hâlâ sıcak**. Kart başlıkları kısa ve net (`--font-size-lg`, `--font-weight-semibold`); gövde metni sade, kısa cümleler (`--font-size-md`/`--color-text-muted`, `--line-height-relaxed`). Teknik terim yok — hepsi zaten gündelik dille yazıldı (PRINCIPLES §5 gereği ekstra glossing gerekmiyor). Kapanış cümlesi bağlam cümlesiyle aynı ton, CTA gibi görünmeyecek kadar sade (buton değil, düz metin).

---

# 7. Motion Language

Bu bölüm kasıtlı bir **rest**: Sound Room'un zirvesinden sonra beynin nefes aldığı yer. Giriş, Hero'nun tek-seferlik `data-rise` deseniyle — üç kart hafif kademeli belirir (ör. 0/120/240ms gecikme, imza easing `cubic-bezier(0.22,1,0.36,1)`), Empati'nin scroll-tetiklemeli tek-tek beliren satırlarından farklı olarak tek girişte, kısa bir iç gecikmeyle. Kartların üstündeki ince çizgi statiktir, etkileşime girmez, sürekli hareket etmez. `prefers-reduced-motion`: tüm kartlar anında tam görünür.

---

# 8. Atomic Design Architecture

**Component Decision Tree kontrolü:** `data-rise`/`data-anim` giriş deseni (Hero/Empati/Sound Room ile aynı) yeniden kullanılır; yeni bir motion mekanizması icat edilmez.

- **Atoms:** `SolutionFactCard.astro` — başlık + gövde + ince statik çizgi; `title`, `body` prop'ları.
- **Molecules:** Yok — 3 kartın dizilimi organism seviyesinde ele alınır (Empati'deki YAGNI kararıyla tutarlı).
- **Organism:** `Solution.astro` — bağlam cümlesi + 3 kart + kapanış cümlesini kurar, tek giriş animasyonunu yönetir. **CTA içermez.**
- **Data/type sözleşmesi:** `solution.data.ts` (`heading`, `contextSentence`, `facts: {title, body}[3]`, `closingSentence`), `solution.types.ts`.

---

# 9. Design Tokens

Yeni token gerekmiyor: mevcut spacing/radius/shadow/typography ölçeği yeterli. Giriş easing'i için component-scoped `--solution-ease` (Hero/Empati/Sound Room ile aynı imza değer — artık **beşinci** tekrar; `--ease-signature` DS tokenına yükseltme önerisi giderek güçleniyor, bağımsız bir DESIGN_SYSTEM iyileştirmesi olarak kalır).

---

# 10. Accessibility

- Sr-only `<h2>` bölümü adlandırır (Empati/Sound Room ile aynı recipe).
- Her kart gerçek, erişilebilir metin (dekoratif değil); kart başlığı `<h3>` olabilir (h2'nin altında doğru anahat).
- Üstteki ince çizgi tamamen dekoratif → `aria-hidden="true"`.
- Hiçbir interaktif eleman yok — CTA olmadığından klavye tuzağı/odak yönetimi riski yok.
- Kontrast: tüm metin token tabanlı, AA+ garantili (Empati/Sound Room disiplini).
- `prefers-reduced-motion`: kartlar anında tam görünür.

---

# 11. Performance

Yalnızca `opacity`/`transform` (Hero/Empati/Sound Room ile aynı disiplin). `mask-image`/`backdrop-filter` yok — bu bölümde ihtiyaç da yok (kartlar basit, düz yüzeyler). Statik metin ağırlıklı, LCP/CLS riski yok.

---

# 12. Design Review Checklist

- "Neden böyle oluyor?" sorusuna gerçekten cevap veriyor mu — yoksa genel bir sağlık metni gibi mi duruyor?
- Kullanıcı "yalnız değilim" hissediyor mu (Kart 2 testi).
- Kart 3, Sound Room'un altı izinin sırasını gerçekten açıklıyor mu (geri bağlantı testi).
- Hiçbir CTA/buton yok — dönüşüm bu bölümde değil.
- Korkutucu/klinik görsel yok (kesit, kırmızı "hasar" bölgesi, doktor stok fotoğrafı).
- Jargon yok ya da varsa aynı cümlede sadeleştirilmiş.
- Reduced motion: kartlar anında tam görünür.

---

# 13. Creative North Star

Kullanıcı bu bölümden çıkarken şunu düşünmeli: *"Şimdi anlıyorum — ve yalnız değilim, bu sandığım kadar korkutucu değilmiş."* Bir tıp dersi almış gibi değil, güvenilir bir arkadaştan sakin bir açıklama duymuş gibi hissetmeli. Bu his oluşmuyorsa — kullanıcı yalnızca soyut bir sağlık bilgisi okuduysa, kendini tanınmış hissetmediyse — bölüm amacına ulaşmamış demektir.
