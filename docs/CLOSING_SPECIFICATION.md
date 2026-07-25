# CLOSING_SPECIFICATION.md

> Ana sayfanın son bölümü, Footer'dan hemen önce — altı bölümün kurduğu her şeyin doğal son cümlesi (`HOMEPAGE_CREATIVE_DIRECTION.md` Bölüm 9 "Dönüşüm" ile aynı yer). Doküman Astro geliştirmesinde doğrudan kullanılacak; kod içermez, yalnızca Art Direction ve spesifikasyon tanımlar.
>
> **Kanonik kaynaklar:** amaç/hikâye → `HOMEPAGE_CREATIVE_DIRECTION.md` (Bölüm 9) · CTA sistemi/ton → `PRINCIPLES.md §8/§9/§4` · gerçek iletişim bilgisi → `COMPANY.md` · görsel dil → `DESIGN_SYSTEM_GUIDE.md §6`. Çelişkide kanonik doküman esastır.
>
> **Mimari karar (kilitli):** Closing, ana sayfanın **tek** kapanış/CTA bölümüdür. `FooterCta` (Footer'ın bağımsız promosyon paneli) kaldırılır; Footer yalnızca navigasyon + şirket bilgisine döner. Sıcak glow/grain reçetesi `FooterCta`'dan buraya taşınır — yeni görsel dil icat edilmez, mevcut biri yer değiştirir.
>
> **Sabit çerçeve:** Amaç = "Rahat bir davet, ikna değil" · Lider katman = hikâye + premium yüzey · Kompozisyon = kapanış mesajı + destekleyici cümle + tek CTA + ikincil iletişim + güvence · Işık/Gölge = ● panel + glow (Footer geçişi) — ama Hero'dan yüksek sesli değil · Noise→Signal = ● tek, hizalanmış sinyal (sayfanın çözünüm kapanışı) · CTA = tek, birincil.

---

# 1. Psikolojik Amaç

İkna değil, **izin**. Kullanıcı zaten inanıyor (Trust bunu verdi); bu bölüm yalnızca küçük bir sonraki eylemi kolaylaştırır. Hedef: *"Konuşmaya hazırım"* — *"ikna oldum"* değil.

---

# 2. Story Architecture

**Kapanış mesajı** → **destekleyici cümle** → **birincil CTA** → **ikincil iletişim (destekleyici, rekabet etmeyen)** → **küçük güvence**. Yeni bir argüman yok; altı bölümün söylediklerinin doğal son cümlesi.

**Kilitli kopya:**
- Sr-only başlık: *"Bir konuşmayla başlayalım"*
- Kapanış mesajı: *"Bir konuşmayla başlayalım."*
- Destekleyici cümle: *"Hazır olduğunuzda, biz buradayız."*
- Birincil CTA: **"Ücretsiz İşitme Testi"** (Hero/Guide ile aynı, kilitli etiket — "tek ses" tutarlılığı).
- İkincil iletişim: *"ya da bizi arayın:"* + gerçek telefon (`0533 773 31 99`, Header ile aynı, COMPANY.md).
- Güvence cümlesi: *"Baskı yok, sadece bir konuşma."*

**Kırmızı çizgi kontrolü:** Aciliyet/kıtlık/indirim/"en iyi" dili yok (PRINCIPLES §5). İkincil iletişim düz metin/link'tir, buton değildir — asla birincil CTA ile görsel olarak yarışmaz (refinement 2).

---

# 3. Art Direction

Sayfanın en sıcak anlarından biri — ama **Hero'dan yüksek sesli değil**. Hero'nun glow+grain katman tekniği (artık `FooterCta`'dan boşalan) burada yeniden kullanılır: yumuşak radyal glow + `--texture-grain`, aynı tokenlar, aynı teknik — yeni bir "promosyon paneli" icat edilmez. Katı, ışıklandırılmış CTA (mevcut `CtaButton` solid reçetesi), büyütülmemiş, banner değil.

**Noise→Signal kapanışı:** Bu bölüm, sayfanın açılışında (Hero) başlayan "gürültü → sinyal" hikâyesinin son, hizalanmış anıdır — Sound Room'un zirvesinden, Empati/Solution/Guide/Trust'ın sessizliklerinden sonra, tek ve sakin bir sinyalle kapanır. Yeni bir görsel deney değil, Hero'nun kendi imzasının yankısı.

---

# 4. Visual Moodboard

- **Renk** — Aynı slate + tek mavi; CTA `--color-primary`, glow çok düşük opaklıkta aynı mavi.
- **Katmanlar** — (1) sıcak yüzey, (2) düşük opaklık radyal glow, (3) `--texture-grain` (Hero'nun aynı reçetesi, tiled, `will-change` ile katman izole — Hero Design Review dersi burada da geçerli).
- **CTA** — Mevcut `CtaButton` (solid), tek, ortada veya sola hizalı — sahnenin geri kalanıyla aynı ağırlıkta.
- **İkincil iletişim** — Düz metin/link, küçük, `--color-text-muted` — asla CTA'nın rengini/boyutunu almaz.

---

# 5. Composition

### Desktop (≥1024px)
`--container-lg`, ortalı. Kapanış mesajı (display-scale ama Hero'dan küçük) → destekleyici cümle → CTA + ikincil iletişim (yan yana veya CTA altında, küçük) → güvence cümlesi (en altta, fısıltı).

### Tablet (768–1023px)
Aynı dikey istif, daralan genişlik.

### Mobile (<768px)
CTA tam genişlik (≥48px, mevcut `CtaButton` zaten karşılıyor); ikincil iletişim CTA'nın altında, küçük, dokunulabilir `tel:` linki.

---

# 6. Typography Direction

Sessiz özgüven, tek net mesaj. Kapanış mesajı Hero'nun headline ölçeğine yakın ama daha küçük (`clamp()`, DS scale dışı — Hero ile aynı gerekçe). Destekleyici cümle `--font-size-lg`/muted. İkincil iletişim ve güvence cümlesi `--font-size-sm`/`--color-text-soft` — fısıltı düzeyinde, CTA'yı asla gölgelemez.

---

# 7. Motion Language

Sayfanın en yumuşak hareketi — Trust'tan bile durgun. Tek seferlik `data-rise` girişi (kurulu desen), kutlama/dikkat çekme yok. Glow statiktir veya en fazla çok hafif, sabit genlikte bir "nefes" (Hero'nun idle davranışına akraba) — asla performatif. `prefers-reduced-motion`: her şey anında tam görünür, glow'un hafif nefesi de durur.

---

# 8. Atomic Design Architecture

**Component Decision Tree kontrolü:** CTA için mevcut `src/components/shared/CtaButton/CtaButton.astro` **yeniden kullanılır**. `--texture-grain` tokenı (zaten `variables.css`'te) yeniden kullanılır. Yeni bir atom gerekmiyor — içerik (başlık, cümle, ikincil link, güvence) tek organism içinde düz elemanlarla kurulur (Solution/Guide/Trust'ın YAGNI disipliniyle tutarlı).

- **Organism:** `Closing.astro` — glow/grain katmanlarını, kapanış mesajını, destekleyici cümleyi, `CtaButton`'ı, ikincil telefon linkini ve güvence cümlesini kurar; tek giriş animasyonunu yönetir.
- **Data/type sözleşmesi:** `closing.data.ts` (`heading`, `message`, `supportingSentence`, `cta: {label, href}`, `secondaryContact: {label, href}`, `reassurance`), `closing.types.ts`.
- **Kaldırılan:** `src/components/footer/Footer/organisms/FooterCta/` ve onu Footer'a bağlayan referanslar — bağımsız promosyon paneli olarak kaldırılır (bkz. mimari karar). Footer'ın geri kalanı (nav, şirket bilgisi) dokunulmaz.

---

# 9. Design Tokens

Yeni token gerekmiyor: `--texture-grain`, `--color-primary`, `--shadow-*`, mevcut spacing/typography ölçeği yeterli. Giriş easing'i için component-scoped `--closing-ease` (artık sekizinci tekrar; `--ease-signature` DS tokenına yükseltme önerisi bağımsız bir iyileştirme olarak kalır).

---

# 10. Accessibility

- Sr-only `<h2>` bölümü adlandırır.
- CTA, mevcut `CtaButton`'ın erişilebilirlik reçetesini miras alır (görünür focus ring, ≥48px hedef).
- İkincil iletişim gerçek bir `<a href="tel:...">` linktir — erişilebilir, odaklanabilir, ama görsel olarak buton gibi stillendirilmez (refinement 2).
- Glow/grain tamamen dekoratif, `aria-hidden`.
- Kontrast: tüm metin token tabanlı, AA+ garantili.
- `prefers-reduced-motion`: her şey anında tam görünür.

---

# 11. Performance

Yalnızca `opacity`/`transform` (kurulu disiplin). Grain katmanı Hero'nun dersini izler: küçük, tekrarlayan karo + `will-change: transform` ile katman izolasyonu — tam bölüm boyutunda yeniden çizim yok.

**İstisna (kilitli):** `--fcta`/glow katmanının (`.closing::before`) `mask-image` kullanımı, `FooterCta`'dan **aynen migrate edildiği** için istisnadır — §3'ün "aynı teknik, yeniden kullanılır" kararıyla tutarlıdır. Bu katman zaten `will-change: transform` ile kendi compositor katmanına izole edilmiştir (Hero'nun mask-image + tam-boyut-yeniden-çizim dersinin asıl riski budur ve burada zaten giderilmiştir). "mask-image yok" kuralı, bu istisna dışındaki **yeni** dekoratif katmanlar için geçerliliğini korur.

---

# 12. Design Review Checklist

- İkincil iletişim, birincil CTA ile görsel olarak yarışıyor mu — yarışmamalı.
- Aciliyet/kıtlık/indirim/"en iyi" dili yok.
- Tek birincil CTA — rekabet eden ikinci bir CTA yok.
- Footer'da artık bağımsız bir promosyon paneli yok — yalnızca nav + şirket bilgisi.
- Glow/grain Hero'nun performans dersini uyguluyor (küçük karo, `will-change`); glow katmanının migrate edilmiş `mask-image`'ı §11'deki kilitli istisna kapsamında — yeni bir dekoratif katman aynı istisnadan yararlanamaz.
- Reduced motion: her şey anında tam görünür, glow'un nefesi de durur.
- Sayfa gerçekten bir "rahatlama" hissiyle mi bitiyor, yoksa bir satış kapanışı gibi mi duruyor?

---

# 13. Creative North Star

Ana sayfa bir **rahatlama** hissiyle bitmeli. Kullanıcı, ulaşmanın basitçe doğal bir sonraki adım olduğunu hissetmeli — bir satış kapanışı değil, bir davetin sessizce açık kalan kapısı. *"Konuşmaya hazırım"* — *"ikna oldum"* değil.
