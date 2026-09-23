// Technology teaser grid for the ReSound brand page (/markalar/resound) —
// short, 6-item overview. Renders through the shared BrandPageTechnology
// component.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const resoundTechnology: BrandPageTechnologyContent = {
  badge: "RESOUND TEKNOLOJİLERİ",
  heading: "ReSound'u Farklı Kılan Teknolojiler",
  intro: "ReSound'un işitme cihazlarında kullandığı temel teknoloji yaklaşımları.",
  items: [
    {
      label: "SPATIAL",
      title: "M&RIE (Mikrofon & Alıcı)",
      description: "Kulak kanalına yerleştirilen ek bir mikrofonla daha doğal bir mekansal işitme deneyimi hedefler.",
    },
    {
      label: "BROADCAST",
      title: "Auracast (Bluetooth LE Audio)",
      description: "Uygun ortamlarda yayın sesine doğrudan bağlanmayı sağlayan yeni nesil kablosuz standardı.",
    },
    {
      label: "AI",
      title: "Derin Öğrenme Destekli İşleme",
      description: "Güncel nesil modellerde, ses ortamını analiz etmeye yardımcı olan yapay zekâ destekli yaklaşım kullanılır.",
    },
    {
      label: "APP",
      title: "ReSound Smart 3D Uygulaması",
      description: "Ses ayarlarını, programları ve bağlantı durumunu akıllı telefondan yönetmenizi sağlar.",
    },
    {
      label: "CARE",
      title: "ReSound Assist",
      description: "Kliniğe gitmeden uzaktan ince ayar ve destek almanızı sağlayan tele-odyoloji hizmeti.",
    },
    {
      label: "CHARGE",
      title: "Şarjlı Sistemler",
      description: "Lityum-iyon şarjlı modellerle günlük kullanım için pratik çözümler sunar.",
    },
  ],
  // Precomputed rgb() decomposition of #AA1835.
  accentColor: "#AA1835",
  accentColorBadgeBg: "rgb(170 24 53 / 0.08)",
  accentColorBadgeBorder: "rgb(170 24 53 / 0.35)",
  accentColorBadgeText: "#8B1330",
  accentColorHoverBorder: "rgb(170 24 53 / 0.5)",
};
