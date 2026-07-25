# HERO_SPECIFICATION.md

> Ana sayfa Hero bölümünün referans standardı. Bu Hero, tüm ana sayfa görsel dilinin *referans bileşenidir* — diğer bölümler bu spesifikasyonun kurduğu dile uyar. Doküman Astro geliştirmesinde doğrudan kullanılacak; kod içermez, yalnızca Art Direction ve spesifikasyon tanımlar.
>
> **Kanonik kaynaklar:** hikâye/amaç → `HOMEPAGE_CREATIVE_DIRECTION.md` · ton/içerik/güven → `PRINCIPLES.md §1/§4/§5/§7` · token & görsel sistem → `DESIGN_SYSTEM_GUIDE.md` + `src/ds/styles/base/variables.css` · gerçekler → `COMPANY.md` · implementasyon kalitesi → `IMPLEMENTATION_STANDARD.md`. Çelişkide kanonik doküman esastır.
>
> **Kilitli kopya:** Eyebrow `2009'DAN BERİ · SGK ANLAŞMALI` · Headline **"Duymak, anlamaktır."** · Alt metin "Mesele sesin ne kadar yüksek olduğu değil, ne kadar anlaşılıyor olduğu." · CTA **"Ücretsiz İşitme Testi"** · Tagline *"Daha net duyun, hayata daha yakın olun."*

---

# 1. Hero Art Direction

## Anlatmak istediği duygu
**Sakin özgüven ve sessiz bir hayranlık.** Heyecan değil, telaş değil, aciliyet değil — *rahatlama* ve *doğru ellerde olma* hissi. Hero, markanın el sıkışıdır: sakin, dürüst, emin. Kullanıcı bir ürün vitrinine değil, ışıkla dolu ve huzurlu bir uzmanlık alanına girdiğini hisseder.

## İlk 5 saniye
1. "Burası farklı — sıradan bir işitme sitesi değil." (tanınma)
2. "Sakin ve premium; nefes alabiliyorum." (baskısızlık = güven)
3. "Bu insanlar ne yaptığını biliyor." (sessiz özgüven)

Kullanıcı bağırılmadığını, kandırılmadığını, acele ettirilmediğini hisseder. Netlik bir vaat olarak *anlatılmaz*, arayüz tarafından *gerçekleştirilir*.

## Brand DNA bağlantısı
- **Purpose** (hayatın içinde kalmak) → Hero ürünü değil, bir insan gerçeğini merkeze alır: "Duymak, anlamaktır."
- **Core Emotion** (Güven) → dağınıklığın yokluğu, ölçülü boşluk ve kusursuz hizalama güven üretir.
- **Core Philosophy** (Netlik) → Hero netliği *sahneler*: gürültü → sinyal çözülür, yerleşim son derece berraktır.
- **Brand Character** (Sakin Usta) → aceleci olmayan, baskısız, sessizce uzman bir ton.

> Zincir kontrolü: Purpose → Promise → Netlik → Güven → Sakin Usta → Noise→Signal. Hepsi Hero'da hissedilmeli.

---

# 2. Creative References — alınan prensipler (kopya değil)

| Referans | Alınan prensip | Bizim yorumumuz |
|---|---|---|
| **Apple** | Tek fikir + devasa nefes alanı; tipografinin duyguyu taşıması | Ürün yerine *fikir* kahraman: "Duymak, anlamaktır." Görsel değil, tip anlatır. |
| **Linear** | Mühendislik hassasiyeti; "sessiz teknik"; ölçülü glow; kusursuz focus | Motion dekoratif değil, *tasarlanmış* hisseder; hassas hizalama. |
| **Stripe** | Kusursuz detayla güven; canlı ama sakin arka plan | Güveni cilayla kur; akustik alan "yaşayan ama sakin" bir zemin. |
| **Notion** | Minimalizm içinde sıcaklık, samimiyet | Minimal ama soğuk değil — sağlık/yaş kitlesi için insani sıcaklık. |
| **Vercel** | Yüksek kontrast, keskinlik, özgüven | Kontrastı *netlik* için kullan; ama yaş kitlesi için yumuşat. |
| **Nothing** | Ayırt edici, sahiplenilebilir görsel imza; dürüst/ham teknoloji | Bizim imzamız = akustik sinyal alanı; dürüstlük = abartısızlık. |
| **Sonos** | Sesi görselleştirmek; sakin ev-içi premium | Ses dalgasını marka diline çevirmek (noise→signal). |
| **Bang & Olufsen** | Akustik lüks; malzeme dürüstlüğü; zamansız zarafet; zanaat olarak ses | Akustik-lüks dokusu, zamansızlık; ses bir iddia değil zanaat. |

**Sentez:** Apple/Notion'un *sıcak ölçülülüğü* + Linear/Stripe'ın *mühendislik-sakinliği ve detay-güveni* + Nothing/Sonos/B&O'nun *sesi-görselleştiren imzası ve akustik malzemesi* → işitmeye özgü tek bir dil: **sıcak premium, sahnelenmiş netlik, görünür kılınan ses.**

---

# 3. Visual Moodboard

- **Renk** — Slate tuval (`#ffffff` → `#f8fafc`), yakın-siyah slate metin (`#0f172a`), tek güçlü mavi (`--color-primary #2563eb`) yalnızca *çözülmüş sinyal* ve birincil CTA'da. İkinci vurgu yok. Derinlik çıpası için footer lacivertinin fısıltısı (opsiyonel).
- **Işık** — Tek, yumuşak üst ışık. Derinlik gradient'le değil, katmanlı ışık/inset gölgeyle. Sinyalin arkasında çok düşük opaklıkta mavi radyal glow (Stripe/Linear ruhu).
- **Malzeme** — "Temiz kâğıt + ışık." Yüzeyler ince mat kâğıt; CTA katı, aydınlatılmış fiziksel bir tuş gibi (inset ışık). Sıcaklık için opsiyonel %3 film-grain (footer ile süreklilik).
- **Boşluk** — Cömert; Hero büyük ölçüde havadır. 1440/48px grid; fikir sakin bir merkez kolonda durur. Boşluk mesajın kendisidir: "acelemiz yok."
- **Tipografi** — Inter; büyük başlıkta sıkı negatif tracking; uppercase tracked eyebrow; insani okunabilir alt metin. Duyguyu tip taşır, görsele gerek yok.
- **Noise → Signal dili** — Başlığın arkasında/altında yatay ince çizgi/partikül alanı; açılışta dağınık ve soluk (noise) → tek sakin hizalı mavi sinyale çözülür (signal). Akustik metaforun görünür hali.
- **Katmanlar** — (1) kâğıt tuval, (2) soluk mavi glow + opsiyonel grain, (3) akustik sinyal alanı (`aria-hidden`), (4) tip + CTA. Z-derinliği ağır gölgeyle değil ışıkla kurulur.
- **Kontrast** — Okunabilirlik için yüksek (AA+), ama sakin: kontrast dram için değil *anlaşılırlık* için (DESIGN_SYSTEM §6). Tek mavi, tek kromatik kontrasttır.
- **Akustik metafor** — Ses; kaostan uyuma çözülen dalga/frekans olarak. İşitmeye özgü (optik değil).
- **Premium hissi** — Ölçülülük, hizalama ve detay tutarlılığından (DESIGN_SYSTEM §2). "Pahalı" = görünmez zanaat, süsleme değil.

---

# 4. Hero Composition (wireframe seviyesi — anlatım)

### Desktop (≥1024px · container 1440 / 48px yan boşluk)
- Yükseklik ~ `min(88vh, 900px)`; içerik dikey ortalı, tek kolon; metin max-genişliği ~720px.
- Dikey istif (ortalı): **Eyebrow** → **Headline** → **Subheadline** → **CTA** (tek) → **Trust Row** → (altta ince) **Tagline** + marka kilidi.
- **Akustik sinyal alanı** başlığın arkasında/çevresinde yatay bir bant olarak yaşar; metin kolonundan geniştir, kenarlara doğru bleed eder ama 48px marja değmeden söner.
- En altta ortada sessiz **scroll ipucu** ("Netliği görün ↓").

### Tablet (768–1023px · 24px yan boşluk)
- Aynı ortalı istif; headline `clamp` ile küçülür; sinyal alanı daralır; Trust Row iki satıra sarabilir. CTA belirgin kalır.

### Mobile (<768px · 16px yan boşluk)
- Ortalı istif; headline okunabilir büyüklüğe iner (2–3 satır); sinyal alanı sadeleşir (daha az çizgi, yine çözülür).
- **CTA tam genişlik**, dokunulabilir (≥48px yükseklik), katlama üstünde (near-fold). Eyebrow ve Trust Row alt alta; scroll ipucu küçük/opsiyonel. Yükseklik ~ `min(90vh, içerik)`.

---

# 5. Typography Direction

Tüm ölçüler `variables.css` token'larına ve `clamp()` display ölçeğine dayanır. Hizalama: ortalı, ortak baseline; dikey ritim 4px ölçeğinde.

| Öğe | Font / Ağırlık | Boyut | Tracking | Renk | Not |
|---|---|---|---|---|---|
| **Eyebrow** | Inter 600 | `--font-size-sm` (0.875rem) | `+0.1em` uppercase | `--color-primary` (küçükse `#1d4ed8`) | "·" ayraçlı; tabular-nums (2009) |
| **Headline** | Inter 700 | `clamp(2.5rem, 1.5rem + 4vw, 4.25rem)` | `-0.025em` | `--color-text #0f172a` | line-height ~1.08; virgül bir *duraklama* verir (çözülmenin yankısı) |
| **Subheadline** | Inter 400–450 | `clamp(1.125rem, 1rem + 0.6vw, 1.375rem)` | `-0.01em` | `--color-text-muted #475569` | line-height 1.55 (yaş kitlesi); max ~34rem |
| **CTA** | Inter 600 | ~1.0625rem | `0` | `#fff` / zemin `--color-primary` | Mevcut CTA reçetesi: 56px, radius-lg (12), katmanlı inset ışık |
| **Trust Row** | Inter 500 | `--font-size-sm` (0.875rem) | `0` | `--color-text-soft/muted` | "·" ayraçlı; SGK · 2009 · uzman odyolog sinyalleri |
| **Tagline** | Inter 400 | `--font-size-sm` | `0` | `--color-text-soft` | Fısıltı; marka imzası |

**Dikey ritim:** eyebrow→headline `--space-4/5` (16–20px) · headline→subhead `--space-5/6` (20–24px) · subhead→CTA `--space-8` (32px) · CTA→trust `--space-6` (24px) · trust→tagline `--space-4` (16px).

---

# 6. Motion Direction

**Konsept:** Sayfa açılırken "gürültü → sinyal" *sahnelenir*. Akustik alan dağınık/soluk başlar, tip yerine otururken tek sakin sinyale hizalanır. Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (imza). Toplam ~900ms, sonra neredeyse durgun idle.

| An | Ne olur |
|---|---|
| **0ms** | Tuval görünür (kâğıt + soluk glow). Tip `opacity:0`, `translateY:12px`. Sinyal alanı var ama dağınık/soluk (opacity ~0.15, çizgiler hizasız). Layout stabil (FOUC yok). |
| **0–300ms** | Eyebrow önce belirir (opacity 0→1, y 12→0). Sinyal alanı yakınsamaya başlar — çizgiler yatay baseline'a kayar, opacity 0.15→0.30. |
| **300–600ms** | Headline yerine oturur (opacity 0→1, y 12→0), sinyalin ~%70 hizalanmasıyla senkron; mavi, hizalanan çizgiye sızmaya başlar. Subheadline başlar. |
| **600–900ms** | Subheadline tamamlanır; sinyal tam temiz hizaya *oturur* (1–2px overshoot ile hafif "settle") — görsel "çözülme". CTA en son belirir (opacity + scale 0.98→1), son vuruş. |
| **Idle (>900ms)** | Hizalanmış sinyal esasen durur; opsiyonel çok hafif "nefes" (opacity 0.9↔1, ~6s) — ama önce sakinlik; tamamen statik de olabilir. Scroll ipucu nazikçe pulse eder. |

**Noise → Signal detayı:** Çizgiler bağımsız ince stroke'lardır. *Noise* = rastgele dikey ofset + düşük opaklık + hafif yatay jitter. *Signal* = hepsi tek baseline'da, eşit aralık, tek mavi, keskin. Yakınsama Hero'nun ruhudur; bir kez koreografilenir, agresif döngü yapmaz. Scroll'da sinyal Empati'ye doğru tek ince çizgiye incelir.

**Reduced Motion (`prefers-reduced-motion: reduce`):** Yakınsama animasyonu yok, translate/scale yok. Her şey son halinde anında render edilir: tip görünür, sinyal alanı zaten hizalı (statik mavi sinyal), CTA görünür. En fazla tüm Hero'da tek, nazik opacity fade-in (≤200ms) kabul edilebilir. Scroll ipucu statik. Hareketsiz de tam etkili.

---

# 7. Accessibility (Hero özelinde)

- **Semantik / Screen Reader:** Headline = sayfadaki tek `<h1>`. Eyebrow başlık değil (`<p>`/`<span>`). Subheadline `<p>`. Akustik sinyal alanı dekoratif → `aria-hidden="true"`, odaklanılamaz. CTA gerçek `<a>`/`<button>`, etiket "Ücretsiz İşitme Testi". Trust Row gerçek metin (yalnız görsel değil). Okuma sırası: eyebrow → h1 → subhead → CTA → trust → tagline. Harekete bağlı hiçbir anlam yok.
- **Kontrast (AA+):** headline `#0f172a`/`#fff` ≈ 19:1 (AAA) · subhead `#475569`/`#fff` ≈ 7:1 (AAA) · CTA `#fff`/`#2563eb` ≈ 4.7:1 (AA, ≥4.5 garanti) · eyebrow küçükse `#1d4ed8` tercih (pay için). Sinyal alanı dekoratif → düşük kontrast, asla metinle yarışmaz.
- **Reduced Motion:** §6'daki senaryo uygulanır.
- **Keyboard:** CTA odaklanabilir; görünür focus ring `--focus-ring` (`0 0 0 2px #fff, 0 0 0 4px rgb(37 99 235 / 0.35)`). Mantıklı tab sırası. Scroll ipucu interaktifse odaklanabilir, değilse dekoratif.
- **Dokunmatik alanlar:** CTA ≥48px yükseklik (spec 56px); mobilde tam genişlik veya ≥44px. Scroll ipucu tıklanabilirse dokunma alanı ≥44px. Yanlış dokunmayı önleyecek aralık.
- **Zoom / Reflow:** tip `clamp` ile ölçeklenir; %200 zoom'da kırpma yok; tek kolona akar; yatay scroll oluşmaz.

---

# 8. Definition of Done — Hero Specification

Bu doküman, Hero'nun referans standardıdır. Astro geliştirmesi başladığında (adım 9) karşılanması gereken kabul kriterleri:

- Zincir hissediliyor: Purpose · Güven · Sakin Usta · Noise→Signal (§1).
- Kilitli kopya birebir kullanıldı; garanti/korku/aciliyet/fiyat yok (PRINCIPLES §4/§5).
- Görsel dil §3'e sadık: slate + tek mavi, katmanlı ışık, tek akustik imza.
- Kompozisyon 3 breakpoint'te §4'teki gibi; mobilde CTA near-fold ve tam genişlik.
- Tipografi §5 token/ölçek/ritmine uyuyor.
- Motion §6 timeline'ına uyuyor; reduced-motion tam etkili.
- Erişilebilirlik §7: tek `<h1>`, `aria-hidden` sinyal, AA+ kontrast, focus ring, ≥44–48px dokunmatik.
- Mevcut token sistemi kullanıldı; hiçbir ham "magic" değer yok (DESIGN_SYSTEM §5).

Bu Hero onaylandıktan sonra, kurduğu görsel dil diğer 9 bölüme taşınır.
