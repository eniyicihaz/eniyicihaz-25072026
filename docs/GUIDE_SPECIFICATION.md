# GUIDE_SPECIFICATION.md

> Ana sayfanın dördüncü bölümü — Solution'ın bıraktığı "sırada ne var?" sorusuna cevap veren, belirsizliği kaldıran durak (`HOMEPAGE_CREATIVE_DIRECTION.md` Bölüm 4 "Rehber" ile aynı yer). Doküman Astro geliştirmesinde doğrudan kullanılacak; kod içermez, yalnızca Art Direction ve spesifikasyon tanımlar.
>
> **Kanonik kaynaklar:** amaç/hikâye → `HOMEPAGE_CREATIVE_DIRECTION.md` (Bölüm 4) · ton/CTA sistemi → `PRINCIPLES.md §3/§4/§9` · gerçek süreç bilgisi (ücretsiz test/değerlendirme/deneme) → `COMPANY.md` · görsel dil → `DESIGN_SYSTEM_GUIDE.md §6`. Çelişkide kanonik doküman esastır.
>
> **Sabit çerçeve:** Amaç = "Belirsizliği kaldırır, ikna etmez" · Lider katman = hikâye · Kompozisyon = giriş cümlesi + 3 adımlık yol + tek CTA · Işık/Gölge = ◐ hafif kart lift · Noise→Signal = ◐ işlevsel bağlayıcı çizgi (yol) · CTA = **var** — ilk kez, ama bölümün görsel kahramanı değil.

---

# 1. Psikolojik Amaç

Solution "neden"i anlattı; Guide şimdi "şimdi ne olacak?" belirsizliğini kaldırır. İkna değil, **öngörülebilirlik**. Kullanıcı süreci önceden, bütün olarak görür — bu, adım adım sürüklenmekten çok daha güven verici.

**Bu bölümün CTA'sı hakkında:** Solution'ın kapanışı ("sırada size özel olan var") burada karşılık bulur — bu, hikâyenin doğal bir sonraki adımıdır, ayrı bir "satış anı" değil. Süreç kendini anlattıkça, bir uzmanla konuşmak zaten anlatının bir parçası gibi hissettirir; CTA bunun yalnızca son cümlesidir (PRINCIPLES §9 "Uzman CTA" katmanı).

---

# 2. Story Architecture

**Giriş:** "Bunu tek başınıza çözmenize gerek yok" duygusunu açık şekilde kurar.
**Üç adım (gerçek, doğrulanmış süreç — COMPANY.md/PRINCIPLES §8):** kısa görüşme → ücretsiz değerlendirme → ücretsiz deneme. Uydurma/kişiselleştirilmiş bir "quiz" değildir; gerçek, herkese aynı şekilde işleyen bir süreçtir.
**Kapanış:** Tek, sakin CTA — hikâyenin son cümlesi.

**Kilitli kopya:**
- Sr-only başlık: *"Şimdi ne olacak?"*
- Bağlam cümlesi: *"Bunu tek başınıza çözmenize gerek yok — süreç oldukça basit."*
- Adım 1 — Başlık: *"Kısa bir konuşma"* · Açıklama: *"Ne yaşadığınızı dinleriz; baskı yok, taahhüt yok."*
- Adım 2 — Başlık: *"Ücretsiz değerlendirme"* · Açıklama: *"Uzman bir odyolog işitmenizi birlikte netleştirir."*
- Adım 3 — Başlık: *"Ücretsiz deneme"* · Açıklama: *"İsterseniz, karar vermeden önce cihazı deneyin."*
- CTA: **"Ücretsiz İşitme Testi"** (Hero ile aynı, kilitli etiket — "tek ses" tutarlılığı, PRINCIPLES §2).

---

# 3. Art Direction

Solution'ın düz "rest" halinden hafifçe canlı: moodboard'un "◐ kart lift" yönü — adımlar arasında çok hafif derinlik (Solution'ın tamamen düz kartlarından bir tık fazla). Adımlar arasında ince, statik bir bağlayıcı çizgi — bir "yol" olarak okunur, dekoratif değil, sırayı gösterir (DESIGN_SYSTEM §6: her akustik öğe bilgi taşır).

**CTA, bölümün görsel kahramanı değildir.** Aynı `CtaButton` reçetesi (Hero/Footer ile birebir), aynı ölçek — büyütülmüş, ışıklandırılmış veya öne çıkarılmış bir "hero buton" değil; hikâyenin doğal son cümlesi kadar sakin durur.

**CTA, üç adımlık hikâyenin tamamlanışına görsel olarak bağlıdır** — üçüncü adımın hemen ardından, aynı akışın/yüzeyin içinde durur; ayrı bir promosyon bloğu, panel veya arka plan değişimi olarak sunulmaz.

**Hiçbir adım diğerlerine görsel olarak baskın olamaz.** Üç adım da aynı boyut, ağırlık ve vurguda kalır — hiçbiri daha büyük, daha koyu veya öne çıkarılmış bir rozet/renk almaz.

---

# 4. Visual Moodboard

- **Renk** — Aynı slate + tek mavi; vurgu rengi bu bölümde yalnızca CTA'ya ayrılır (adım numaraları/çizgi nötr kalır — DESIGN_SYSTEM §7 kıt kaynak ilkesi).
- **Adım rozetleri** — Küçük, sayılı (1/2/3), nötr zemin, hafif `--shadow-sm` lift.
- **Bağlayıcı çizgi** — İnce, sabit, `--color-border-hover` — Solution'ın "rested line" DNA'sının yatay/dikey yol hali.
- **CTA** — Mevcut `CtaButton` (solid variant), başka hiçbir görsel ağırlık eklenmez.

---

# 5. Composition

### Desktop (≥1024px)
`--container-lg`, ortalı. Üstte bağlam cümlesi; altında 3 adım yatay sırada, aralarında ince bağlayıcı çizgi (adım rozetlerinin arkasından geçer); CTA üçüncü adımın hemen altında/devamında, aynı akışın içinde — ayrı bir panel veya arka plan bloğu değil.

### Tablet (768–1023px)
Aynı yatay sıra korunur ya da 3 adım tek sütuna döner (bağlayıcı çizgi dikeye geçer) — Solution'daki tablet esnekliğiyle tutarlı.

### Mobile (<768px)
Adımlar dikey, bağlayıcı çizgi dikey; CTA tam genişlik, ≥48px dokunma hedefi (mevcut CtaButton reçetesi zaten karşılıyor).

---

# 6. Typography Direction

Solution'ın açıklayıcı tonundan **yol gösterici**ye geçiş: adım başlıkları kısa ve net (`--font-size-lg`/`--font-weight-semibold`), açıklamalar tek cümle (`--font-size-md`/`--color-text-muted`). Bağlam cümlesi Solution'ınkiyle aynı kayıt (`--font-size-lg`, muted, ortalı). Buyurgan değil, "birlikte bakalım" havası (PRINCIPLES §4).

---

# 7. Motion Language

Tüm yol **tek bakışta** görünür — ekran ekran ilerleyen bir wizard değildir. Giriş, Solution'ın deseniyle aynı: tek seferlik `data-rise`, adımlar arasında hafif kademe (ör. 0/120/240ms, imza easing). Bağlayıcı çizgi statiktir, hareket etmez. CTA, diğer her şeyle birlikte belirir — ayrıca vurgulanmış bir giriş animasyonu almaz (görsel kahraman değil, §3). `prefers-reduced-motion`: her şey anında tam görünür.

---

# 8. Atomic Design Architecture

**Component Decision Tree kontrolü:** CTA için mevcut `src/components/shared/CtaButton/CtaButton.astro` **yeniden kullanılır** — yeni bir buton icat edilmez. `data-rise`/`data-anim` giriş deseni (Hero/Solution ile aynı) yeniden kullanılır.

- **Atoms:** `GuideStep.astro` — adım numarası, başlık, açıklama; `index`, `title`, `description` prop'ları.
- **Molecules:** Yok — 3 adımın dizilimi + bağlayıcı çizgi organism seviyesinde ele alınır (Solution'daki YAGNI kararıyla tutarlı).
- **Organism:** `Guide.astro` — bağlam cümlesi + 3 `GuideStep` + bağlayıcı çizgi + `CtaButton`'ı kurar, tek giriş animasyonunu yönetir.
- **Data/type sözleşmesi:** `guide.data.ts` (`heading`, `contextSentence`, `steps: {title, description}[3]`, `cta: {label, href}`), `guide.types.ts`.

---

# 9. Design Tokens

Yeni token gerekmiyor. Giriş easing'i için component-scoped `--guide-ease` (Hero/Footer/Empati/Sound Room/Solution ile aynı imza değer — artık **altıncı** tekrar; `--ease-signature` DS tokenına yükseltme önerisi bağımsız bir DESIGN_SYSTEM iyileştirmesi olarak kalır).

---

# 10. Accessibility

- Sr-only `<h2>` bölümü adlandırır. Adımlar semantik olarak `<ol>`/`<li>` — gerçekten sıralı bir süreç (div değil).
- Bağlayıcı çizgi tamamen dekoratif → `aria-hidden="true"`.
- CTA, mevcut `CtaButton`'ın erişilebilirlik reçetesini olduğu gibi miras alır (görünür focus ring, ≥48px hedef).
- Kontrast: tüm metin token tabanlı, AA+ garantili.
- `prefers-reduced-motion`: her şey anında tam görünür.

---

# 11. Performance

Yalnızca `opacity`/`transform` (kurulu disiplin). `mask-image`/`backdrop-filter` yok. Statik metin + tek buton, LCP/CLS riski yok.

---

# 12. Design Review Checklist

- Kullanıcı süreci "bütün olarak" görüyor mu — yoksa adım adım mı ilerletiliyor (wizard riski)?
- Adımlar gerçek, doğrulanmış süreçle uyuşuyor mu (COMPANY.md) — uydurma adım yok.
- CTA görsel olarak abartılı değil — sahnenin geri kalanıyla aynı ağırlıkta.
- CTA, üçüncü adımın devamı gibi duruyor mu — ayrı bir promosyon bloğu değil.
- Üç adımdan hiçbiri diğerlerine boyut/ağırlık/renk olarak baskın değil.
- Hiçbir aciliyet/baskı dili yok.
- `CtaButton` yeniden kullanıldı, yeni buton icat edilmedi.
- Reduced motion: her şey anında tam görünür.

---

# 13. Creative North Star

Kullanıcı bu bölümden çıkarken şunu düşünmeli: *"Bunu tek başıma çözmek zorunda değilim."* Bir form doldurmuş ya da bir satış konuşması dinlemiş gibi değil, bir arkadaşın yol tarif etmesini dinlemiş gibi hissetmeli. CTA bu hissin bir parçası olmalı — ayrı, öne çıkarılmış bir "satış anı" değil.
