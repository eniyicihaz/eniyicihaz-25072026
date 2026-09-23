// Technology teaser grid for the Bernafon brand page (/markalar/bernafon)
// — short, 6-item overview. Renders through the shared
// BrandPageTechnology component.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const bernafonTechnology: BrandPageTechnologyContent = {
  badge: "BERNAFON TEKNOLOJİLERİ",
  heading: "Bernafon'u Farklı Kılan Teknolojiler",
  intro: "Bernafon'un işitme cihazlarında kullandığı temel teknoloji yaklaşımları.",
  items: [
    {
      label: "MOTION",
      title: "Smart Sensor",
      description: "Baş ve vücut hareketlerinizi algılayarak yönlülük ve gürültü azaltma ayarlarını otomatik uyarlamaya yardımcı olur.",
    },
    {
      label: "AI",
      title: "Machine Learning 2.0",
      description: "Farklı dinleme ortamlarına uyum sağlamaya yardımcı olan makine öğrenmesi destekli ses işleme yaklaşımı.",
    },
    {
      label: "FOCUS",
      title: "Smart Directionality",
      description: "Grup konuşmalarında konuşmayı takip etmeye yardımcı olan yönlü mikrofon yaklaşımı.",
    },
    {
      label: "QUIET",
      title: "Smart Noise Reduction",
      description: "Rahatsız edici arka plan gürültüsünü azaltmaya yardımcı olan bir yaklaşım sunar.",
    },
    {
      label: "APP",
      title: "Easy Control-A Uygulaması",
      description: "Ses ayarlarını ve programlarını akıllı telefondan yönetmenizi sağlar.",
    },
    {
      label: "CHARGE",
      title: "Şarjlı Sistemler",
      description: "Lityum-iyon şarjlı modellerle günlük kullanım için pratik çözümler sunar.",
    },
  ],
  // Precomputed rgb() decomposition of #DA291C.
  accentColor: "#DA291C",
  accentColorBadgeBg: "rgb(218 41 28 / 0.08)",
  accentColorBadgeBorder: "rgb(218 41 28 / 0.35)",
  accentColorBadgeText: "#B01E15",
  accentColorHoverBorder: "rgb(218 41 28 / 0.5)",
};
