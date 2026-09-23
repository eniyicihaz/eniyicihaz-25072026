// Technology teaser grid for the NuEar brand page (/markalar/nuear) —
// short, 6-item overview. Renders through the shared BrandPageTechnology
// component.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const nuearTechnology: BrandPageTechnologyContent = {
  badge: "NUEAR TEKNOLOJİLERİ",
  heading: "NuEar'ı Farklı Kılan Teknolojiler",
  intro: "NuEar'ın işitme cihazlarında kullandığı temel teknoloji yaklaşımları.",
  items: [
    {
      label: "AI",
      title: "NXG AI Ses İşleme",
      description: "Farklı dinleme ortamlarını analiz ederek konuşmayı öne çıkarmaya yardımcı olan güncel nesil yaklaşım.",
    },
    {
      label: "HEALTH",
      title: "Aktivite ve Sağlık Takibi",
      description: "Hear Circle uygulaması üzerinden adım sayısı ve genel aktivite takibi yapılabilir.",
    },
    {
      label: "SAFETY",
      title: "Düşme Anında Bildirim",
      description: "Uygun modellerde, bir düşme meydana geldiğinde seçilen kişilere bildirim gönderilebilen bir özellik sunar.",
    },
    {
      label: "CARE",
      title: "Uzaktan Profesyonel Ayar",
      description: "Kliniğe gitmeden, uzaktan ince ayar talep etme imkânı sunar.",
    },
    {
      label: "APP",
      title: "Hear Circle Uygulaması",
      description: "Ses ayarlarını, programları ve bağlantı durumunu akıllı telefondan yönetmenizi sağlar.",
    },
    {
      label: "CHARGE",
      title: "Şarjlı Sistemler",
      description: "Lityum-iyon şarjlı modellerle günlük kullanım için pratik çözümler sunar.",
    },
  ],
  // Precomputed rgb() decomposition of #E4002B.
  accentColor: "#E4002B",
  accentColorBadgeBg: "rgb(228 0 43 / 0.08)",
  accentColorBadgeBorder: "rgb(228 0 43 / 0.35)",
  accentColorBadgeText: "#B7001F",
  accentColorHoverBorder: "rgb(228 0 43 / 0.5)",
};
