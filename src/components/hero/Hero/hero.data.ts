// Hero content — 6-slide carousel.
//
// Slide 1 is the existing, already-approved "Darıca / Yerel Güven +
// Premium" slide, carried over unchanged in substance: real Darıca photo,
// badge/context/subhead, 3 CTAs (test/ara/whatsapp), brandLock. Source of
// truth for its facts: COMPANY.md (2009, SGK anlaşmalı, 18+ marka, Darıca
// §17 ana merkez). `contextSentence`-equivalent body[0] is the same
// canonical entity-definition sentence used verbatim in
// src/data/contact/hero.ts's `definitionSentence` — do not reword without
// updating /iletisim in the same change (GEO non-contradiction,
// SEARCH_STRATEGY.md §9).
//
// Slide 2's visual is a real image (isitme-cihazi-turleri.webp) — an
// AI-generated decorative concept image commissioned for this project
// specifically to illustrate the hearing-aid-types topic, NOT a stock
// photo and NOT presented/captioned as a real photo of Avrasya's own
// center (that distinction stays exclusive to slide 1's real photo). Its
// native ratio (1811:868 ≈ 2.09) is wider than the shared 1672:941 visual
// frame, so it uses `fit: "contain"` — "cover" would crop the outer
// devices, which the brief explicitly forbids. Slide 2 also gets its own
// 4-card info row (infoCards) — same visual recipe as slide 1's
// trustItems, rendered in the same reserved footer-card slot (see
// Hero.astro's `.hero__footer-cards`), never a stock photo.
//
// Slide 3's visual (isitme-testi-darica.webp) is likewise an AI-generated
// concept image — NOT a real photo of Avrasya's own staff, patients, or
// testing room, and NOT captioned as one (its alt text describes it only
// as a generic hearing-test scene). Same `fit: "contain"` treatment as
// slide 2 (native ratio ≈2.09 vs the shared 1672:941 frame). Its infoCards
// describe the free-test flow in soft, conversational terms ("birlikte
// değerlendirelim", "ölçelim") — deliberately NOT phrased as a fixed
// clinical protocol, matching the informal, reassuring tone of the rest of
// this slide.
//
// Slide 4's visual (isitme-cihazi-markalari.webp) replaces the earlier
// 18-logo mosaic panel with a single AI-generated concept image (devices +
// a decorative ring of brand marks). Its alt text is deliberately generic
// ("...temsil eden kavramsal görsel") and does NOT assert this is a
// literal, complete inventory of every brand shown — the real, exhaustive
// 18-brand list stays the authoritative one on /markalar (Brands.astro),
// unchanged by this decorative image. Native ratio (1536:1024 = 1.5) is
// narrower than the shared 1672:941 frame, so `fit: "contain"` pillarboxes
// left/right instead of cropping — same reasoning as slides 2–3, just the
// opposite axis.
//
// Slide 5's visual (darica-gebze-cayirova-hizmet-bolgesi.webp) is an
// AI-generated conceptual aerial city/service-area graphic with 4 labeled
// map pins (Darıca, Gebze, Çayırova, Kocaeli) — NOT a real satellite/drone
// photo of these places, and its alt text says so explicitly. Its native
// ratio (1672:941) happens to match the shared frame almost exactly
// (1.7768 vs 1.7779), so it uses the default `cover` fit like slide 1's
// photo — no letterbox/pillarbox needed, negligible crop. Its infoCards
// name the same 4 places the image's own pins show, each with a short,
// non-SEO-stuffed subtitle — not a district-by-district service claim,
// just a quick "we're reachable from here too" read.
//
// Slides 2–6 are new. Each links to a real, already-verified page —
// no invented URL:
//   Slide 2 → /isitme-cihazlari (gerçek hub sayfası)
//   Slide 3 → /degerlendirme/ucretsiz-isitme-testi (gerçek — online test
//              sayfasıyla /degerlendirme/online-isitme-testi KARIŞTIRILMAZ)
//   Slide 4 → /markalar (gerçek hub sayfası)
//   Slide 5 → /iletisim (gerçek — "Bize Ulaşın")
//   Slide 6 → /servis-bakim/pil-aksesuar (gerçek, tek pil/aksesuar sayfası)
//
// Slide 6's "50 TL'den başlayan fiyatlarla" is a deliberate, explicit,
// user-approved exception to PRINCIPLES §5 / COMPANY.md §23's default
// "no price, ever" rule — approved for this exact amount only, not a
// general precedent. It is NOT sourced from COMPANY.md and must be kept in
// sync manually if the real price changes.
//
// The price is currently expressed inside slide 6's own image (the
// "50 TL'den başlayan fiyatlarla" banner is baked into
// isitme-cihazi-pili-fiyati.webp), not as separate HTML/CSS — the earlier
// `priceHighlight: {amount, suffix}` text treatment was deliberately
// removed from this slide's data to avoid showing the same price twice.
// The `priceHighlight` field/type and `.hero-slide__price-amount` /
// `.hero-slide__price-suffix` CSS in HeroSlide.astro are unused now but
// left in place (no other design change requested) — they'll render again
// automatically if a future image drops the baked-in price and this field
// is set again.
//
// Slide 6's visual (isitme-cihazi-pili-fiyati.webp) is a product image
// showing real hearing-aid battery brands (Duracell, VARTA, Rayovac),
// several battery sizes, and the price banner described above — supplied
// by the user as the intended product shot for this slide, not an
// invented or stock substitute. Native ratio (1672:941) matches the
// shared frame almost exactly, same as slide 5, so it uses the default
// `cover` fit — no letterbox/pillarbox needed. Its infoCards name the same
// 3 brands plus the size set shown in the image.
//
// Only slide 1 is `headingLevel: "h1"` — the page's single H1. Slides 2–6
// are "h2". Only slide 1 has `secondaryCtas`/`brandLock`. Slide 1's
// `visual.kind === "photo"` is the real, user-supplied center photo;
// slides 2, 3, and 4's are AI-generated concept images (never presented as
// real photos/a literal brand inventory); slide 5's is an AI-generated
// conceptual map graphic; slide 6's is a real product shot of the actual
// battery brands sold. The real, exhaustive 18-brand data set still lives
// in Brands.astro's own brands.data.ts and is unaffected by this file. All
// six slides now have real visuals — no `visual.kind === "placeholder"`
// remains in use.
import type { HeroContent } from "./hero.types";

export const hero: HeroContent = {
  slides: [
    {
      id: "darica-avrasya",
      eyebrow: "Darıca, Kocaeli · SGK Anlaşmalı İşitme Merkezi",
      heading: "Duymak,\nanlamaktır.",
      headingLevel: "h1",
      body: [
        "Avrasya İşitme Cihazları, Darıca, Kocaeli'de bulunan SGK anlaşmalı bir işitme cihazı satış ve uygulama merkezidir.",
        "İşitme kaybı yalnızca duymamak değildir. Anlamak, iletişim kurmak ve sevdiklerinizle bağ kurmaktır.",
      ],
      cta: { label: "Ücretsiz İşitme Testi", href: "/iletisim" },
      secondaryCtas: [
        { label: "Bizi Arayın", href: "tel:+905337733199" },
        { label: "WhatsApp'tan Yaz", href: "https://wa.me/905337733199" },
      ],
      brandLock: "Eniyicihaz.com güvencesiyle, Avrasya İşitme uzmanlığıyla.",
      visual: {
        kind: "photo",
        image: {
          src: "/images/heroes/avrasya-isitme-merkezi-darica.webp",
          alt: "Avrasya İşitme Cihazları'nın Darıca'daki merkezinin resepsiyon ve bekleme alanı",
          width: 1672,
          height: 941,
        },
      },
    },
    {
      id: "isitme-cihazlari",
      eyebrow: "İşitme Cihazları",
      heading: "Size Uygun İşitme Cihazını Birlikte Bulalım",
      headingLevel: "h2",
      body: [
        "Kulak arkası, kulak içi, şarjlı ve Bluetooth özellikli seçeneklerden ihtiyacınıza en uygun olanı birlikte belirleriz.",
      ],
      cta: { label: "İşitme Cihazlarını Keşfet", href: "/isitme-cihazlari" },
      visual: {
        kind: "photo",
        image: {
          src: "/images/heroes/isitme-cihazi-turleri.webp",
          alt: "Kulak arkası, kulak içi, şarjlı ve Bluetooth özellikli işitme cihazı türlerini gösteren kavramsal görsel",
          width: 1811,
          height: 868,
        },
      },
      infoCards: [
        { icon: "ear", title: "Kulak Arkası", description: "Kullanımı kolay, farklı ihtiyaçlara uygun seçenekler." },
        { icon: "headphones", title: "Kulak İçi", description: "Kompakt ve daha az görünür çözümler." },
        { icon: "battery-charging", title: "Şarjlı", description: "Günlük kullanımda pratik şarjlı seçenekler." },
        { icon: "bluetooth", title: "Bluetooth", description: "Telefon, TV ve uyumlu cihazlarla kablosuz bağlantı." },
      ],
    },
    {
      id: "ucretsiz-test",
      eyebrow: "Ücretsiz İşitme Testi",
      heading: "İşitmenizi Ücretsiz Değerlendirelim",
      headingLevel: "h2",
      body: [
        "Uzman bir odyolog eşliğinde, baskısız ve ücretsiz bir işitme değerlendirmesiyle başlayın.",
      ],
      cta: { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi" },
      visual: {
        kind: "photo",
        image: {
          src: "/images/heroes/isitme-testi-darica.webp",
          alt: "Bir işitme testi sürecini betimleyen kavramsal görsel",
          width: 1814,
          height: 867,
        },
      },
      infoCards: [
        { icon: "message-circle", title: "Ön Görüşme", description: "İhtiyacınızı birlikte değerlendirelim" },
        { icon: "activity", title: "İşitme Ölçümü", description: "İşitme durumunuzu ölçelim" },
        { icon: "clipboard-check", title: "Sonuç Değerlendirmesi", description: "Ölçüm sonuçlarını birlikte inceleyelim" },
        { icon: "lightbulb", title: "Çözüm Planı", description: "Size uygun seçenekleri konuşalım" },
      ],
    },
    {
      id: "markalar",
      eyebrow: "Markalar",
      heading: "Dünya Markaları, Size Uygun Çözümler",
      headingLevel: "h2",
      body: [
        "Tek bir markaya bağlı değiliz; 18'den fazla dünya markası arasından size en uygun olanı öneriyoruz.",
      ],
      cta: { label: "Markaları Keşfet", href: "/markalar" },
      visual: {
        kind: "photo",
        image: {
          src: "/images/heroes/isitme-cihazi-markalari.webp",
          alt: "İşitme cihazlarını ve farklı işitme cihazı markalarını temsil eden kavramsal görsel",
          width: 1536,
          height: 1024,
          objectPosition: "50% 45%",
        },
      },
      infoCards: [
        { icon: "layout-grid", title: "18+ Marka", description: "Farklı seçenekleri değerlendirin" },
        { icon: "cpu", title: "Farklı Teknolojiler", description: "İhtiyacınıza uygun çözümler" },
        { icon: "shapes", title: "Farklı Tasarımlar", description: "Kulak arkası ve kulak içi seçenekler" },
        { icon: "user-check", title: "Uzman Desteği", description: "Seçenekleri birlikte değerlendirelim" },
      ],
    },
    {
      id: "hizmet-bolgesi",
      eyebrow: "Hizmet Bölgemiz",
      heading: "Darıca, Gebze ve Çayırova'da Yanınızdayız",
      headingLevel: "h2",
      body: [
        "Darıca merkezimizin yanı sıra Gebze ve Çayırova'dan da kolayca ulaşabilirsiniz.",
      ],
      cta: { label: "Darıca Merkezimizi İncele", href: "/darica-isitme-cihazlari/" },
      visual: {
        kind: "photo",
        image: {
          src: "/images/heroes/darica-gebze-cayirova-hizmet-bolgesi.webp",
          alt: "Darıca, Gebze, Çayırova ve Kocaeli'yi işaretleyen, hizmet bölgesini temsil eden kavramsal şehir görseli",
          width: 1672,
          height: 941,
        },
      },
      infoCards: [
        { icon: "map-pin", title: "Darıca", description: "Ana merkezimiz" },
        { icon: "navigation", title: "Gebze", description: "Kolay ulaşım" },
        { icon: "map-pinned", title: "Çayırova", description: "Kolay ulaşım" },
        { icon: "map", title: "Kocaeli", description: "Hizmet bölgemiz" },
      ],
    },
    {
      id: "piller",
      eyebrow: "İşitme Cihazı Pilleri",
      heading: "İşitme Cihazı Pilleri",
      headingLevel: "h2",
      body: ["Cihazınıza uygun pil ve aksesuar seçeneklerini birlikte belirliyoruz."],
      cta: { label: "Pilleri İncele", href: "/servis-bakim/pil-aksesuar" },
      visual: {
        kind: "photo",
        image: {
          src: "/images/heroes/isitme-cihazi-pili-fiyati.webp",
          alt: "Duracell, VARTA ve Rayovac işitme cihazı pillerini ve '50 TL'den başlayan fiyatlarla' mesajını gösteren ürün görseli",
          width: 1672,
          height: 941,
        },
      },
      infoCards: [
        { icon: "battery", title: "Duracell", description: "İşitme cihazı pili" },
        { icon: "battery", title: "VARTA", description: "İşitme cihazı pili" },
        { icon: "battery", title: "Rayovac", description: "İşitme cihazı pili" },
        { icon: "layers", title: "10 · 13 · 312 · 675", description: "Farklı pil ölçüleri" },
      ],
    },
  ],
  trustItems: [
    { icon: "award", value: "2009'dan beri", label: "Güvenle yanınızdayız" },
    { icon: "shield", value: "SGK Anlaşmalı", label: "Merkez" },
    { icon: "users", value: "Kişiye Özel", label: "Yaklaşım" },
    { icon: "gem", value: "18+ Marka", label: "Konusunda Uzman" },
  ],
};
