// Hero content for the "Pil & Aksesuar" page (/servis-bakim/
// pil-aksesuar). Renders through the shared BrandPageHero component —
// same component every content page this session uses. Fourth page of
// the "Servis & Bakım" series (see header.data.ts's servicesMega third
// column), following Teknik Servis, Periyodik Bakım and Cihaz
// Temizliği. Cihaz Temizliği's own technology.ts explicitly
// cross-references this page for accessory details — this page
// delivers on that promise.
//
// Distinct from every prior sibling: this is a catalog/info page about
// the actual products — battery types (disposable zinc-air vs.
// rechargeable lithium-ion) and accessories (chargers, dry-storage
// boxes, retention clips, spare domes/filters) — rather than an
// appointment-based service. evolution.ts is repurposed as a selection
// guide rather than a clinic-visit sequence.
//
// accentColor: sarı-600 / yellow-600 (#ca8a04) — fourth color in the
// fresh accent rotation opened for the "Servis & Bakım" column; evokes
// power/energy fittingly for a battery-focused page, and is a full
// hue-family away from the sitewide --color-warning token (#d97706)
// used in every page's "Dikkat Edilmesi Gerekenler" section.
//
// Hero image: Sonic Enchant Şarjlı, a fresh rechargeable model not yet
// used by any prior page this session, and thematically apt for a
// battery/accessory-focused page (verified in public/images/sonic/
// models/enchant-sarjli.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const pilAksesuarHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · SERVİS & BAKIM · PİL & AKSESUAR",
  headingLines: ["Pil & Aksesuar", "Seçenekleri Nelerdir?"],
  paragraphs: [
    "Pil ve aksesuar seçenekleri, işitme cihazınızın gücünü ve günlük kullanımını destekleyen çinko-hava piller, şarjlı sistemler, saklama kutuları ve yedek parçaları kapsar.",
    "Avrasya İşitme'de, cihazınıza uygun pil ve aksesuar seçeneklerini birlikte belirliyor, doğru kullanım konusunda size rehberlik ediyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "ÇİNKO-HAVA VEYA ŞARJLI",
      accent: "#ca8a04",
      title: "İki Ana Güç Seçeneği Sunulur",
      description: "Cihazınıza göre tek kullanımlık çinko-hava pil veya şarjlı lityum-iyon sistem tercih edilebilir.",
    },
    {
      label: "UYUMLU AKSESUARLAR",
      accent: "#a16207",
      title: "Cihazınıza Özel Aksesuarlar Bulunur",
      description: "Saklama kutusu, temizlik kiti ve yedek parçalar cihaz modelinize uygun şekilde sunulur.",
    },
    {
      label: "KİŞİYE ÖZEL REHBERLİK",
      accent: "#854d0e",
      title: "Size Uygun Seçeneği Birlikte Belirleriz",
      description: "İhtiyacınıza ve kullanım alışkanlığınıza göre en uygun pil ve aksesuar seçeneğini öneriyoruz.",
    },
  ],
  image: {
    src: "/images/sonic/models/enchant-sarjli.webp",
    alt: "Şarjlı lityum-iyon sistemiyle çalışan Sonic Enchant Şarjlı işitme cihazı görseli",
  },
  floatingCard: {
    title: "Sonic Enchant Şarjlı",
    description: "Lityum-iyon şarjlı sistemle çalışan modellerden biri.",
  },
  accentColor: "#ca8a04",
  accentColorHover: "#a16207",
  accentColorSoft: "rgb(202 138 4 / 0.12)",
  accentColorBorder: "rgb(202 138 4 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(202,138,4,0.35) 0%, rgba(202,138,4,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #241d08 60%, #854d0e 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#a16207",
  heroWaveOpacity: "0.18",
};
