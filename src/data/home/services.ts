// "Hizmetlerimiz Özeti" — homepage services summary (plan §B position 6).
// Renders through the shared, generic BrandCriteria component (extended
// this round with an optional `closingCta` link — see
// BrandCriteria.astro). Same 6 real, verified services as /iletisim's
// src/data/contact/services.ts (COMPANY.md §6) — kept as a separate file
// rather than a forced shared import to avoid coupling two independently
// shipped pages, but the facts/hrefs are identical by construction.

import { Stethoscope, Sliders, Compass, Wrench, HandCoins, Ruler } from "lucide-astro";
import type { BrandCriteriaContent } from "../../components/brands/BrandCriteria/BrandCriteria.astro";

export const homeServices: BrandCriteriaContent = {
  eyebrow: "Hizmetlerimiz",
  heading: "Bu Süreçte Hangi Hizmeti Alırsınız?",
  intro:
    "Darıca'daki merkezimizde, işitme sağlığınızın her aşamasında ihtiyaç duyabileceğiniz gerçek hizmetleri sunuyoruz.",
  criteria: [
    {
      icon: Stethoscope,
      title: "Ücretsiz İşitme Testi",
      description: "Uzman odyometristlerimizle işitme durumunuzu ücretsiz olarak değerlendiriyoruz.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      icon: Sliders,
      title: "İşitme Cihazı Uygulaması",
      description: "Seçtiğiniz cihazı size özel olarak uyguluyor ve kullanım eğitimi veriyoruz.",
      href: "/uygulama-ayar/cihaz-uygulama",
    },
    {
      icon: Compass,
      title: "Kişiye Özel Cihaz Seçimi",
      description: "İşitme kaybınıza ve yaşam tarzınıza uygun cihazı birlikte belirliyoruz.",
      href: "/rehberler/cihaz-secim-rehberi",
    },
    {
      icon: Ruler,
      title: "Kulak Kalıbı Uygulamaları",
      description: "İhtiyaç duyulan modeller için kişiye özel kulak kalıbı alıyoruz.",
      href: "/uygulama-ayar/kalip-alimi",
    },
    {
      icon: Wrench,
      title: "Teknik Servis",
      description: "Cihazınızdaki arıza ve bakım ihtiyaçlarında teknik servis desteği sunuyoruz.",
      href: "/servis-bakim/teknik-servis",
    },
    {
      icon: HandCoins,
      title: "SGK Danışmanlığı",
      description: "SGK katkı payı, rapor süreci ve gerekli belgeler konusunda yol gösteriyoruz.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  closing: "Hangi hizmete ihtiyacınız olduğundan emin değilseniz, ücretsiz görüşmede birlikte netleştirebiliriz.",
  closingCta: { label: "Tüm hizmetlerimizi inceleyin", href: "/hizmetlerimiz" },
};
