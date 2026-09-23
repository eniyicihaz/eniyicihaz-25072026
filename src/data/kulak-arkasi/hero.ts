// Hero content for the "Kulak Arkası (BTE)" product page
// (/isitme-cihazlari/kulak-arkasi-bte). Renders through the shared
// BrandPageHero component — the same component every /markalar/{brand}
// Hero uses, fed by this page's own data. First page of the "İşitme
// Cihazları" product-page series (see header.data.ts's devicesMega ->
// "İşitme Cihazı Çeşitleri" column) — the master template every future
// product page (Kulak İçi, Şarjlı, Bluetooth, Görünmez, ...) is meant to
// copy the structure of.
//
// accentColor: kurumsal mavi (#2563eb / --color-primary), per the brief —
// unlike brand pages, this is a category page, not a brand, so it uses the
// site's own primary blue rather than inventing a new accent.
// heroBackground follows the Widex/Signia "Hero Background System" layered
// composition (dark base, diagonal gradient into a blue-tinted black, one
// soft glow behind the device, recolorable wave) — same recipe, blue not
// teal/purple.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const kulakArkasiHero: BrandPageHeroContent = {
  badge: "İŞİTME CİHAZI ÇEŞİTLERİ · KULAK ARKASI (BTE)",
  headingLines: ["Kulak Arkası (BTE)", "İşitme Cihazları"],
  paragraphs: [
    "Hafif işitme kaybından çok ileri dereceye kadar geniş bir aralıkta kullanılabilen kulak arkası (BTE) işitme cihazları, dayanıklılığı ve güçlü ses çıkışıyla öne çıkar.",
    "Bluetooth bağlantı, şarj edilebilir pil ve çocuklardan yaşlılara kadar geniş bir kullanıcı kitlesine uygun modelleriyle Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "GÜÇ ARALIĞI",
      accent: "#2563eb",
      title: "Hafiften Çok İleri Dereceye",
      description: "Diğer cihaz tiplerinin yetersiz kaldığı ileri derece kayıplarda dahi etkili amplifikasyon sağlar.",
    },
    {
      label: "DAYANIKLILIK",
      accent: "#1d4ed8",
      title: "Sağlam ve Uzun Ömürlü Gövde",
      description: "Kulak dışında konumlanan gövdesi sayesinde nem ve kulak kirinden daha az etkilenir.",
    },
    {
      label: "KULLANIM KOLAYLIĞI",
      accent: "#1e40af",
      title: "Büyük Kumandalar, Kolay Kullanım",
      description: "Daha büyük gövdesi; pil değişimi ve ses ayarını el becerisi sınırlı kullanıcılar için de kolaylaştırır.",
    },
  ],
  image: {
    src: "/images/pages/oticon-hero.webp",
    alt: "Kulak arkası (BTE) tipi çift işitme cihazı görseli",
  },
  floatingCard: {
    title: "Geniş Uyumluluk",
    description: "Hemen hemen her derece ve tipteki işitme kaybında değerlendirilebilir.",
  },
  accentColor: "#2563eb",
  accentColorHover: "#1d4ed8",
  accentColorSoft: "rgb(37 99 235 / 0.12)",
  accentColorBorder: "rgb(37 99 235 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0a1220 60%, #0f1f3a 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#1d4ed8",
  heroWaveOpacity: "0.18",
};
