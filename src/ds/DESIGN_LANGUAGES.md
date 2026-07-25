# Design Languages

Bu Design System, her component için birden fazla tasarım dili (Design
Language) destekler. Component ile görünüm ayrıştırılmıştır:

```
Component  →  Theme Tokens  →  Theme Overrides  →  Docs
```

- **Theme Tokens:** `src/ds/tokens/themes/<theme>.css` — renk, tipografi,
  radius, shadow, spacing, motion, blur, z-index değişkenleri.
- **Theme Overrides:** `src/ds/themes/<theme>/<component>.css` — component
  bazında görünüm override'ları.

Yeni bir tema eklemek için yalnızca `tokens/themes/<new>.css` ve
`themes/<new>/` oluşturmak yeterlidir; hiçbir component dosyası değişmez.

| Tema | İlham | Karakter |
|------|-------|----------|
| Corporate | Enterprise · SAP · IBM · Microsoft | Ciddi, nötr, fonksiyonel |
| Soft | Modern SaaS · Stripe · Linear · Notion | Sakin, ferah, yumuşak |
| Premium | Apple · Framer · Webflow | Gösterişli, dramatik, zengin |
| Glass | VisionOS · Glassmorphism · Blur | Saydam, buzlu cam, katmanlı |
| Dark | GitHub · Raycast · VSCode | Koyu, developer odaklı |

---

## Corporate

**Felsefe:** Güven, netlik ve fonksiyon. Görünüm içeriğin önüne geçmez;
veri yoğun enterprise arayüzlerde hiyerarşi ve okunabilirlik esastır.
Gösteriş minimumda, öngörülebilirlik maksimumda.

**İlham alınan markalar:** SAP Fiori, IBM Carbon, Microsoft Fluent,
Atlassian, Salesforce Lightning.

**Hedef kullanım alanı:** Admin panelleri, ERP/CRM, dashboard'lar,
raporlama araçları, form ağırlıklı iç uygulamalar.

- **Typography:** Nötr sans-serif (system/Inter benzeri), orta ağırlıklar,
  sıkı satır yüksekliği, net boyut kademeleri. Süsleme yok.
- **Radius:** Küçük (0–4px). Keskin, ciddi köşeler.
- **Shadow:** Minimal ve keskin; düşük yayılım. Neredeyse flat, elevation
  ince tonlarla verilir.
- **Motion:** Kısa süreli, yalın geçişler (120–160ms, ease-out). Fonksiyonel
  geri bildirim; dekoratif animasyon yok.
- **Icon stili:** İnce–orta stroke, düz (outline) ikonlar, tutarlı 20/24px
  grid. Nötr renk.
- **Form stili:** Belirgin kenarlıklı input'lar, net label ve yardım metni,
  güçlü hata durumları. Yüksek tıklanabilirlik netliği.
- **Button karakteri:** Solid primary + nötr secondary; düşük radius, keskin
  hover, belirgin focus ring. Fazla efekt yok.
- **Card karakteri:** İnce kenarlık, düşük gölge, sıkı padding; içerik ve
  tablo taşımaya uygun sade yüzey.
- **Accordion karakteri:** Net ayraç çizgileri, belirgin başlık, sade
  chevron; hızlı aç/kapa.
- **Alert karakteri:** Belirgin durum rengi + ikon, sol kenar vurgusu,
  yüksek kontrastlı metin. Net ve resmi.
- **Badge karakteri:** Küçük radius, sabit renk kodlaması (info/success/
  warning/danger), düşük dolgu.
- **Accessibility yaklaşımı:** WCAG AA+ kontrast, güçlü görünür focus,
  klavye ile tam gezinme, durum rengine ek olarak ikon/etiket ile anlam.

---

## Soft

**Felsefe:** Sakinlik ve ferahlık. Modern SaaS ürünlerinin dostane,
düşük gürültülü estetiği; yumuşak yüzeyler ve bol beyaz alanla göz
yormayan bir günlük kullanım deneyimi.

**İlham alınan markalar:** Stripe, Linear, Notion, Vercel, Height.

**Hedef kullanım alanı:** SaaS ürün arayüzleri, üretkenlik araçları,
onboarding akışları, ayar ekranları, modern web uygulamaları.

- **Typography:** Modern geometrik/humanist sans-serif, dengeli ağırlık,
  rahat satır aralığı; yumuşak kontrast.
- **Radius:** Orta (8–12px). Rahat, dostane yuvarlatma.
- **Shadow:** Yumuşak, geniş yayılımlı, düşük opaklık; hafif elevation.
- **Motion:** Akıcı ease-out geçişler (160–220ms), nazik mikro etkileşimler,
  yumuşak hover/lift.
- **Icon stili:** Yuvarlatılmış uçlu, orta stroke outline ikonlar; dostane
  ve tutarlı.
- **Form stili:** Yumuşak köşeli input'lar, hafif kenarlık, sakin focus
  vurgusu, ferah iç boşluk.
- **Button karakteri:** Yumuşak radius, hafif gölge, nazik hover-lift;
  temiz primary/secondary/ghost hiyerarşisi.
- **Card karakteri:** Yuvarlatılmış, yumuşak gölgeli, ferah padding;
  sakin ve modern.
- **Accordion karakteri:** İnce ayraçlar, yumuşak açılım, hafif geçişli
  chevron dönüşü.
- **Alert karakteri:** Yumuşak arka plan tonu, nazik durum rengi, yuvarlak
  köşe; bilgilendirici ama sakin.
- **Badge karakteri:** Yuvarlak (pill) form, hafif dolgu tonları, düşük
  kontrastlı ama okunaklı.
- **Accessibility yaklaşımı:** AA kontrast korunur, focus görünürdür ancak
  yumuşaktır; hareket azaltma (reduced-motion) desteği önemsenir.

---

## Premium

**Felsefe:** Etki ve lüks. Pazarlama ve tanıtım yüzeyleri için tasarlanmış;
büyük tipografi, derinlik ve zengin hareketle güçlü ilk izlenim yaratır.

**İlham alınan markalar:** Apple, Framer, Webflow, Linear (landing),
Superlist.

**Hedef kullanım alanı:** Landing page'ler, ürün lansmanları, pricing ve
feature sayfaları, hero bölümleri, showcase yüzeyleri.

- **Typography:** Büyük, ifadeli başlıklar; güçlü ağırlık kontrastı,
  sıkı başlık satır yüksekliği; display tipografi vurgusu.
- **Radius:** Büyük (16–24px). Belirgin, yumuşak yuvarlatma.
- **Shadow:** Derin, çok katmanlı gölgeler; belirgin elevation ve derinlik.
- **Motion:** Zengin geçişler (250–450ms), reveal/parallax, hover
  derinliği; sahne kompozisyonu.
- **Icon stili:** Dolgulu veya kalın stroke, gradient/vurgu renkli
  aksan ikonları; ifadeli.
- **Form stili:** Büyük, ferah input'lar; belirgin focus glow, gradient
  vurgular, yüksek görünürlük.
- **Button karakteri:** Büyük radius, gradient/solid dolgu, derin gölge,
  belirgin hover-lift ve parlama; çağrı gücü yüksek CTA.
- **Card karakteri:** Büyük yuvarlatma, derin gölge, gradient/asset destekli
  yüzey; gösterişli feature kartları.
- **Accordion karakteri:** Büyük başlık, ferah padding, yumuşak spring
  açılım; premium his.
- **Alert karakteri:** Gradient/derin tonlu arka plan, belirgin ikon,
  büyük radius; dikkat çekici.
- **Badge karakteri:** Pill form, gradient veya canlı dolgu, hafif parlama;
  öne çıkan etiketler.
- **Accessibility yaklaşımı:** Görsel zenginliğe rağmen AA kontrast hedeflenir;
  reduced-motion ile ağır animasyonlar sadeleşir; focus belirgin tutulur.

---

## Glass

**Felsefe:** Derinlik ve hafiflik. Yarı saydam, buzlu cam yüzeylerle
katmanlı ve havadar bir arayüz; ışık ve bulanıklıkla mekân hissi.

**İlham alınan markalar:** Apple VisionOS, macOS, iOS Control Center,
Glassmorphism akımı.

**Hedef kullanım alanı:** Overlay/panel yoğun arayüzler, medya
uygulamaları, widget'lar, floating panel ve HUD yüzeyleri.

- **Typography:** Net, yüksek kontrastlı sans-serif; bulanık zemin üzerinde
  okunabilirliği koruyan orta–kalın ağırlıklar.
- **Radius:** Büyük (16–28px). Yumuşak cam köşeler.
- **Shadow:** Yumuşak dış gölge + iç parlama (inner glow); ışığa dayalı
  elevation.
- **Motion:** Yumuşak, ışık/bulanıklık odaklı geçişler (200–300ms); yüzen
  katman hareketi.
- **Icon stili:** İnce, yarı saydam veya parlak stroke ikonlar; cam yüzeyle
  uyumlu hafif ışık.
- **Form stili:** Yarı saydam input yüzeyleri, ince parlak kenarlık,
  backdrop-blur; içerik zeminden yumuşak ayrışır.
- **Button karakteri:** Yarı saydam dolgu, ince ışık kenarı, blur zemin;
  hover'da parlaklık artışı.
- **Card karakteri:** `backdrop-filter: blur()` ile buzlu cam yüzey,
  yarı saydam arka plan, ince ışık kenarlığı ve derinlik.
- **Accordion karakteri:** Saydam panel, yumuşak blur, ince ayraç ışığı;
  hafif açılım.
- **Alert karakteri:** Yarı saydam renkli cam yüzey, blur zemin, parlak
  kenar; havada duran uyarı hissi.
- **Badge karakteri:** Saydam/parlak pill, ince ışık kenarı, hafif blur.
- **Accessibility yaklaşımı:** Bulanık zeminlerde kontrastı korumak için
  yeterli opaklık ve metin gölgesi; backdrop-filter desteklenmeyen
  ortamlarda opak fallback; reduced-transparency dikkate alınır.

---

## Dark

**Felsefe:** Odak ve verimlilik. Uzun kullanımda göz yormayan koyu yüzeyler,
keskin vurgular ve yüksek okunabilirlikle developer-tool estetiği.

**İlham alınan markalar:** GitHub (dark), Raycast, VSCode, Vercel dark,
Linear dark.

**Hedef kullanım alanı:** Geliştirici araçları, kod/komut arayüzleri,
konsollar, teknik dashboard'lar, düşük ışık ortamları.

- **Typography:** Nötr sans-serif + gerektiğinde monospace; keskin
  okunabilirlik, orta ağırlık, dengeli satır aralığı.
- **Radius:** Küçük–orta (4–8px).
- **Shadow:** Düşük ve ince; derinlik gölgeden çok yüzey tonu farkıyla
  verilir.
- **Motion:** Hızlı, keskin, minimal geçişler (100–150ms); anlık geri bildirim.
- **Icon stili:** İnce–orta stroke outline ikonlar; nötr açık renk, canlı
  vurgu tonu ile durum ikonları.
- **Form stili:** Koyu input yüzeyi, ince açık kenarlık, keskin focus ring
  (vurgu rengi); yüksek kontrastlı metin.
- **Button karakteri:** Küçük radius, düz koyu/solid vurgu dolgu, keskin
  hover ve belirgin focus; verimli ve kompakt.
- **Card karakteri:** Koyu yüzey, ince açık kenarlık, düşük gölge; elevation
  yüzey tonuyla ayrışır.
- **Accordion karakteri:** İnce ayraçlar, kompakt başlık, hızlı aç/kapa;
  koyu zeminli sade panel.
- **Alert karakteri:** Koyu zemin üzerinde canlı durum vurgusu, ince renkli
  kenar; net ve kompakt.
- **Badge karakteri:** Küçük radius, koyu zeminde canlı vurgu dolgusu veya
  ince kenarlıklı ghost form.
- **Accessibility yaklaşımı:** Koyu zeminde AA+ kontrast, keskin görünür
  focus, saf siyah yerine yumuşatılmış koyu tonlar (halation azaltma),
  durum renklerine ikon/etiket eşliği.
