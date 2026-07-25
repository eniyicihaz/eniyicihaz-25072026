# EMPATHY_SPECIFICATION.md

> Ana sayfa Empati bölümünün referans standardı. Hero'nun kurduğu görsel dile (Noise → Signal, imza easing, `data-rise`/`data-anim` deseni) sadık kalır ama akustik yoğunluğu bilinçli olarak sessizliğe indirir — bu bölümde söz hikâyededir, akustik dilde değil. Doküman Astro geliştirmesinde doğrudan kullanılacak; kod içermez, yalnızca Art Direction ve spesifikasyon tanımlar.
>
> **Kanonik kaynaklar:** amaç/hikâye → `HOMEPAGE_CREATIVE_DIRECTION.md` (Bölüm 1 · Empati) · sayfa ritmi → `HOMEPAGE_MOODBOARD.md` · ton/kırmızı çizgiler → `PRINCIPLES.md §4/§5` · token & görsel sistem → `DESIGN_SYSTEM_GUIDE.md` + `src/ds/styles/base/variables.css` · Hero'nun kurduğu değişmez gramer → `docs/HERO_SPECIFICATION.md`. Çelişkide kanonik doküman esastır.
>
> **Sabit çerçeve (moodboard):** Amaç = "Görülmek" · Lider katman = hikâye · Kompozisyon = dar kolon, ortalı, şiirsel satırlar · Işık/Gölge = neredeyse düz (○) · Noise→Signal = tek soluk çizgi (○) · CTA = yok.

---

# 1. Empati'nin Psikolojik Amacı

**Kullanıcının zihninde ne değişmeli?** Hero'da "burası farklı, sakin ve güvenilir" hissetti. Empati'de bu genel izlenim kişiselleşir: *"Bunu ben de yaşıyorum. Beni tarif ediyorlar."* Bilgi verilmez, teşhis konmaz — yalnızca tanınma. Kullanıcı bu bölümden çıkarken utanç değil, hafiflik hissetmeli: "Yalnız değilim, ve bu konuşulabilir bir şey."

**Neden Hero'dan hemen sonra?** Hero güveni *kurumsal* düzeyde kurdu (marka sakin, dürüst, uzman). Empati bunu *kişisel* düzeye indirir — kurumdan insana geçiş. Sıra önemli: önce "bu marka güvenilir" (Hero), sonra "bu marka beni anlıyor" (Empati).

**Neden Sound Room'a buradan geçiliyor?** Empati "bunu ben de yaşıyorum" dedirtir ama çözümü henüz göstermez — yalnızca *sorunun tanınmasında* durur. Bu bilinçli bir gerilim yaratır: "Peki ne yapılabilir?" Sound Room tam bu soruya cevap verir.

---

# 2. Story Architecture

| Perde | İşlev | Ton |
|---|---|---|
| **Başlangıç** | Evrensel, tehdit içermeyen bir an | Gözlemsel, herkesin bildiği |
| **Gelişme** | Kamusaldan mahremiyete daralma | Hâlâ hafif, henüz ağırlaşmamış |
| **Duygusal zirve** | Adı konmamış duygunun isimlendirilmesi | Sakin, dürüst — dramatik DEĞİL |
| **Geçiş** | Tanınmadan umuda/eyleme köprü | Sakin özgüven, davet |

**Kırmızı çizgi kontrolü:** Zirve satırı "kayıp/korku/hüzün" kelimelerinden kaçınır. Geçiş satırı zirveyi hemen yeniden çerçeveler — kullanıcı hüzünde bırakılmaz, çünkü Core Emotion **Güven**'dir, keder değil (PRINCIPLES §1). Dört perde, daha fazla değil: bu bir kompozisyon değil, bir *nefes*.

---

# 3. Art Direction

**Genel atmosfer:** Hero'nun kendinden emin açılışından sonra bir *duraklama*. Sayfa neredeyse boş; kullanıcı okumaya zorlanmaz, davet edilir.

**Minimalizm seviyesi:** Sayfanın en sade anı (Tarafsızlık ile birlikte). Kart yok, ikon yok, fotoğraf yok, buton yok. Yalnızca tipografi ve bir tek çizgi.

**Beyaz alan kullanımı:** Aşırı cömert. Satırlar arası boşluk, satırın kendisinden daha "yüksek" hissettirir — sayfa kullanıcıyı acele ettirmez (PRINCIPLES §4).

**Akustik dil yoğunluğu:** "○ tek soluk çizgi" — Hero'nun 9 çizgilik zengin sinyal alanının Sound Room'a giderken inceldiği ilk durak. Tek, çok ince, çok düşük opaklıkta yatay bir çizgi; sanki bir ton hâlâ sürüyor ama zayıflıyor. Metinle asla yarışmaz.

**Noise → Signal burada nasıl çalışır:** Hero "poised" idi (zengin ama sakin). Empati'de sinyal neredeyse sessizliğe iner — yoğunluk yayının kasıtlı bir *rest*'i. Başlangıç'ta çizgi düz/sabit; zirveye yaklaşırken hafifçe titreşir/incelir; Geçiş'te tekrar sakinleşir ve Sound Room'un ilk ipucunu verir.

**Motion karakteri:** Yavaş, düşünceli, sıralı. Her satır kendi anını bekler; hiçbir şey aynı anda iki kez hareket etmez. Sıçrama, ölçek, dekoratif efekt yok.

---

# 4. Typography Direction

| Özellik | Yön |
|---|---|
| **Boyut** | Hero başlığından küçük, gövde metninden büyük — `--font-size-2xl`/`--font-size-3xl` arası, `clamp()`. |
| **Ağırlık** | `--font-weight-normal`/`--font-weight-medium` — bold değil. |
| **Satır aralığı** | `--line-height-relaxed` (1.75) veya daha fazlası. |
| **Okuma ritmi** | Tek seferde bir satır; sayfa scroll mesafesi 4 perdeye kendi anını verecek kadar uzatılır. |
| **Cümle uzunluğu** | Kasıtlı kısa (5–10 kelime), şiirsel kırık cümleler. |
| **Duygusal vurgu** | Satır satır renk kayması: erken satırlar `--color-text-muted`, zirve satırı `--color-text` — cümle düzeyinde küçük bir Noise→Signal yankısı (soluktan nete), **renk tokenlarıyla**, opaklıkla değil. |
| **Hizalama** | Ortalı, dar kolon. |

---

# 5. Motion Language

- **Reveal:** Her satır kendi görünürlük eşiğine (~%65–70) ulaştığında bağımsız belirir — satır-başına tetik (Hero'nun section-başına tetiğinden farklı).
- **Delay:** Ekstra gecikme yok; ama bir satır belirirken öncekinin animasyonu bitmiş olur — hep sıralı, asla çakışmaz.
- **Easing:** İmza eğri `cubic-bezier(0.22, 1, 0.36, 1)` (Hero/Footer ile birebir — değişmez gramer).
- **Opacity:** 0 → 1, `translateY` ~16–20px (Hero'nun 12px'inden biraz daha büyük — satırlar seyrek, her biri kendi girişini hak ediyor).
- **Blur:** **Kullanılmıyor — kasıtlı.** Blur→focus, markanın reddettiği optik netlik metaforudur. Yalnızca opacity + translateY + satır-düzeyinde renk-netleşmesi kullanılır.
- **Scroll davranışı:** Scroll-jacking/pinning yok — kullanıcı scroll hızını her zaman kontrol eder. "Her perdeye kendi anı" hissi yalnızca cömert dikey boşlukla (`min-height`/büyük `margin-block`) elde edilir.
- **Reduced motion:** Tüm satırlar anında, tam görünür, son renklerinde render edilir; akustik çizgi sakin/sabit durur.

---

# 6. Atomic Design Architecture

- **Atoms**
  - `EmpathyLine.astro` — tek perde/satır; `text`, `emphasis?: boolean` prop'ları.
  - `EmpathySignalThread.astro` — tek, soluk akustik çizgi (`HeroSignalField`'ın sadeleştirilmiş kardeşi — 1 çizgi, mask-image yok).
- **Molecules:** Yok — 4 `EmpathyLine`'ın dizilimi organism seviyesinde ele alınır (YAGNI; perde sayısı artarsa `EmpathyVerse` molecule'üne yükseltilebilir).
- **Organism**
  - `Empathy.astro` — düzeni kurar, tek paylaşılan `IntersectionObserver` + `data-anim` state machine'i yönetir; `sr-only` `<h2>` içerir.
- **Data/type sözleşmesi:** `empathy.data.ts` (sıralı `{ text, emphasis? }[]`), `empathy.types.ts`.
- **Yeniden kullanılan altyapı:** `data-rise`/`data-anim` deseni, failsafe timeout + `prefers-reduced-motion` bail deseni (Hero/FooterCta ile birebir).

---

# 7. Design Tokens

| İhtiyaç | Karşılanma |
|---|---|
| **Spacing** | `--space-20`/`--space-24`; component-scoped `--empathy-line-gap` bunlardan `clamp()` ile türetilir. |
| **Opacity** | Ham opacity yerine **renk tokenı**: `--color-text-muted` → `--color-text`. |
| **Surface** | Değişiklik yok — `--color-background`. |
| **Radius** | Yok — kutu/kart yok, kasıtlı boş. |
| **Motion (easing)** | `cubic-bezier(0.22, 1, 0.36, 1)` component-scoped `--empathy-ease` olarak Hero deseniyle aynı şekilde tanımlanır. |
| **Typography** | Mevcut ölçek yeterli. |

---

# 8. Accessibility

- Görünmez (`sr-only`) `<h2>` bölümü adlandırır; 4 satır düz `<p>`. `EmpathySignalThread` tamamen dekoratif → `aria-hidden="true"`.
- Reveal başlangıç durumu yalnızca script çalışabildiğinde uygulanır; JS olmasa da metin tam görünür kalır.
- DOM sırası = görsel sıra = okuma sırası.
- Her satır durumu (muted/emphasis) token tabanlı → garanti AA+.
- İnteraktif eleman yok; klavye tuzağı riski yok.
- `prefers-reduced-motion`: tüm satırlar anında tam görünür.

---

# 9. Performance

- Yalnızca `opacity`/`transform` animasyonlu.
- `mask-image` kullanılmaz (Hero'nun scroll-jank dersi); kenar solması gerekiyorsa ucuz `linear-gradient` arka plan tercih edilir.
- 4 satır için tek paylaşılan `IntersectionObserver`.
- LCP adayı değil (katlama altı, salt metin). CLS riski yok (SSR, yalnızca opacity/transform).

---

# 10. Design Review Checklist

- Duygusal perde iniyor: "anlaşıldım", "teşhis edildim"/"korkutuldum" değil.
- Sıfır interaktif eleman, sıfır CTA.
- Tek akustik çizgi, `aria-hidden`, zar zor fark edilir.
- Sıralı reveal gerçekten scroll konumuna bağlı.
- Reduced-motion: tam etkili, hareketsiz.
- `mask-image` yok.
- AA+ kontrast her durumda.
- Ham değer yok — yalnızca DS token + component-scoped türevleri.
- `sr-only` `<h2>` mevcut.
- Scroll-jacking yok.

---

# 11. Creative North Star

Bu bölümün tek amacı kullanıcıya işitme kaybını anlatmak değildir. Amacı, kullanıcının **kendisini anlatılmış hissetmesini** sağlamaktır.

Empati bölümü başarıya ulaştığında kullanıcı şu düşünceyle devam etmelidir:

> "İşitme kaybından bahsetmiyorlar.
> Benden bahsediyorlar."

Bu his oluşmuyorsa, bölüm psikolojik amacına ulaşamamış demektir. Her tasarım kararı — tipografi, boşluk, hareket, metin, ritim ve görsel dil — bu hedefi desteklemelidir.

Empati; bilgi veren bir bölüm değil, kullanıcı ile marka arasında **ilk duygusal bağın kurulduğu** bölümdür.

**Değerlendirme ölçütü:** Kod yazılırken veya ileride revizyon yapılırken bu bölümün değerlendirme ölçütü teknik doğruluk değil, bu hissin oluşup oluşmadığıdır. §10'daki checklist teknik/erişilebilirlik/performans tarafını doğrular; ama nihai kabul kriteri her zaman bu North Star'dır.
