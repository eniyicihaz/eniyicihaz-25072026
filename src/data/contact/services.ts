// "Merkezimizde Neler Yapabilirsiniz?" section for the /iletisim page.
// Renders through the shared, now-link-capable BrandCriteria component
// (see the `href` extension added this session) — six real services from
// COMPANY.md §6, each linking to its own already-existing dedicated page
// (hub-and-spoke internal linking, SEARCH_STRATEGY.md §15). This is the
// page's "why should I come here" answer, distinct from the Ziyaret
// Süreci section (which answers "what happens once I do").

import { Stethoscope, Sliders, Compass, Wrench, HandCoins, Ruler } from "lucide-astro";
import type { BrandCriteriaContent } from "../../components/brands/BrandCriteria/BrandCriteria.astro";

export const contactServices: BrandCriteriaContent = {
  eyebrow: "Merkezimizde Neler Yapabilirsiniz?",
  heading: "Merkezimizde Sizi Neler Bekliyor?",
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
  closing:
    "Hangi hizmete ihtiyacınız olduğundan emin değilseniz, randevunuzda birlikte netleştirebiliriz.",
};
