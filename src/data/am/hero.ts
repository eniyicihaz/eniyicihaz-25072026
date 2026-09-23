// Hero content for the A&M brand page (/markalar/am). Renders through
// the shared BrandPageHero component — the same component every other
// brand page on this site uses, fed by this page's own data.
//
// Positioning axis: WS Audiology'nin global üretim ağı üzerinden gelen,
// erişilebilir fiyat noktasında güvenilir teknoloji — A&M'in gerçek,
// doğrulanabilir konumu Sivantos India Private Limited (Bengaluru,
// Hindistan) tarafından üretilen, WS Audiology grubunun (Signia, Widex,
// Rexton, Audio Service ile aynı çatı) bir markası olmasıdır. Diğer 10
// markadan farklı olarak eksen "en yeni teknoloji" değil, "büyük bir
// global grubun mühendislik altyapısını daha erişilebilir bir fiyat
// noktasına taşımak" — NuEar'ın (Starkey/sağlık ekosistemi) veya Vista'nın
// (Sonova/değer serisi) eksenlerinden farklı bir gruba (WS Audiology)
// bağlı, gerçek ve ayrı bir konumlandırma.
//
// accentColor: turuncu (#F3701A), bu projenin kendi gerçek A&M Hearing
// logosundan (/images/brands/am-logo-seffaf.webp — beyaz "A&M Hearing"
// yazısı, turuncu yuvarlatılmış kare zemin üzerinde) doğrudan görsel
// olarak okunarak belirlendi. Vista'nın da turuncu tonlu logosu
// olduğundan (bu set içindeki ikinci turuncu marka), iki marka arasında
// açık bir ayrım için burada daha parlak/doygun bir turuncu, Vista'da ise
// daha kırmızıya yakın bir turuncu ton kullanıldı — ikisi de gerçek logo
// renklerine sadık kalınarak.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const amHero: BrandPageHeroContent = {
  badge: "A&M · WS AUDIOLOGY GRUBU",
  headingLines: ["A&M Hearing ile Güvenilir", "Teknolojiye Erişilebilir Fiyat"],
  paragraphs: [
    "A&M Hearing, dünyanın önde gelen işitme teknolojisi gruplarından WS Audiology'nin (Signia, Widex, Rexton'ın da içinde bulunduğu grup) Hindistan'daki üretim merkezinde geliştirilen XTM serisi işitme cihazlarını sunar.",
    "XTM P12, XTM A4 ve diğer A&M modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "XTM",
      accent: "#F3701A",
      title: "XTM Serisi",
      description: "Farklı güç seviyelerinde sunulan, geniş bir ihtiyaç yelpazesini kapsayan model ailesi.",
    },
    {
      label: "WSA",
      accent: "#F08A47",
      title: "WS Audiology Grubu",
      description: "Signia, Widex ve Rexton ile aynı global grubun mühendislik altyapısından beslenir.",
    },
    {
      label: "IN",
      accent: "#C25710",
      title: "Bengaluru Üretimi",
      description: "Sivantos India Private Limited tarafından, grup standartlarında üretilir.",
    },
  ],
  image: {
    src: "/images/pages/am-hero.webp",
    alt: "A&M Hearing XTM P12 işitme cihazı",
  },
  floatingCard: {
    title: "XTM Serisi",
    description: "Erişilebilir fiyatta, güvenilir grup teknolojisi.",
  },
  accentColor: "#F3701A",
  accentColorHover: "#C25710",
  accentColorSoft: "rgb(243 112 26 / 0.12)",
  accentColorBorder: "rgb(243 112 26 / 0.4)",
  // Hero Background System rollout (2026-07) — same layered dark
  // composition established for Signia, using A&M's own
  // already-researched accent (#F3701A). Oticon/Phonak excluded.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(243,112,26,0.35) 0%, rgba(243,112,26,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #1D0F05 60%, #2E1808 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#C25710",
  heroWaveOpacity: "0.18",
};
