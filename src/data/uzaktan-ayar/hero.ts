// Hero content for the "Uzaktan Ayar" page (/uygulama-ayar/
// uzaktan-ayar). Renders through the shared BrandPageHero component —
// same component every content page this session uses. Fifth page of
// the "Uygulama & Ayar" series (see header.data.ts's servicesMega
// second column), following Cihaz Uygulama, Kişiye Özel Programlama,
// Cihaz Deneme and Kalıp Alımı.
//
// IMPORTANT genre note: the existing /teknolojiler/uzaktan-kontrol page
// (devicesMega's "Teknolojilere Göre" series) already explains the
// remote-control/TeleCare TECHNOLOGY itself in depth — app control,
// physical remotes, video-call-based teleaudiology, AI suggestions —
// as a cross-brand device feature. This page deliberately does NOT
// re-explain that technology. Instead, it covers the SERVICE side: how
// booking and running an actual remote-adjustment session with THIS
// clinic works (eligibility check, session structure, security,
// limitations on what can be handled remotely). This mirrors the same
// successful genre split already used for Tinnitus Değerlendirme
// (assessment service) vs. Tinnitus Çözümleri (device technology).
// related-content.ts and considerations.ts both point back to Uzaktan
// Kontrol for the full technology explanation.
//
// accentColor: yeşil / green-600 (#16a34a) — fifth color in the fresh
// accent rotation opened for the "Uygulama & Ayar" column; reused from
// elsewhere on the site since that page lives in a different mega-menu
// column and never co-appears with this one. Deliberately distinct
// from Uzaktan Kontrol's own sky-blue (#0284c7) so the two pages read
// as clearly separate even when cross-linked side by side.
//
// Hero image: MAICO Bluetooth Serisi, a fresh model not yet used by any
// prior page this session, and thematically apt for a
// connectivity-based remote session (verified in public/images/maico/
// models/bluetooth-serisi.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const uzaktanAyarHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · UYGULAMA & AYAR · UZAKTAN AYAR",
  headingLines: ["Uzaktan Ayar", "Hizmeti Nasıl İşler?"],
  paragraphs: [
    "Uzaktan ayar, uygun bir cihaza sahipseniz, kliniğe gelmeden video görüşme üzerinden odyometristinizle bağlanıp küçük ayar güncellemeleri almanızı sağlayan bir hizmettir.",
    "Avrasya İşitme'de, uygunluk kontrolünden güvenli video görüşme oturumuna kadar uzaktan ayar sürecini aynı özenle yürütüyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "KLİNİĞE GELMEDEN",
      accent: "#16a34a",
      title: "Video Görüşmeyle Bağlanırsınız",
      description: "Uygun cihazınızla, kliniğe gelmeden odyometristinizle görüşebilirsiniz.",
    },
    {
      label: "GÜVENLİ OTURUM",
      accent: "#15803d",
      title: "Yalnızca Sizin Onayınızla Erişilir",
      description: "Cihazınıza uzaktan erişim, yalnızca oturum süresince ve sizin onayınızla gerçekleşir.",
    },
    {
      label: "SINIRLARI BELİRGİN",
      accent: "#166534",
      title: "Her Ayar Uzaktan Yapılamayabilir",
      description: "Bazı durumlarda, uzaktan oturum sonrası yüz yüze bir randevu önerilebilir.",
    },
  ],
  image: {
    src: "/images/maico/models/bluetooth-serisi.webp",
    alt: "Uzaktan ayar oturumunda kullanılabilecek MAICO Bluetooth Serisi işitme cihazı görseli",
  },
  floatingCard: {
    title: "MAICO Bluetooth Serisi",
    description: "Uzaktan ayar için uygun bağlantılı modellerden biri.",
  },
  accentColor: "#16a34a",
  accentColorHover: "#15803d",
  accentColorSoft: "rgb(22 163 74 / 0.12)",
  accentColorBorder: "rgb(22 163 74 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(22,163,74,0.35) 0%, rgba(22,163,74,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0a2015 60%, #166534 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#15803d",
  heroWaveOpacity: "0.18",
};
