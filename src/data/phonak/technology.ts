// Technology teaser grid for the Phonak brand page (/markalar/phonak) —
// short, 6-item overview (see PHONAK MASTER BLUEPRINT §6.4). Renders
// through the shared BrandPageTechnology component. No invented specs or
// performance numbers — every item restates the same real, already-
// established facts used in hero.ts/overview.ts.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const phonakTechnology: BrandPageTechnologyContent = {
  badge: "PHONAK TEKNOLOJİLERİ",
  heading: "Phonak'ı Farklı Kılan Teknolojiler",
  intro: "Phonak'ın işitme cihazlarında kullandığı temel teknoloji yaklaşımları.",
  items: [
    {
      label: "CONNECT",
      title: "Evrensel Bağlantı",
      description: "Ayrı bir aksesuara gerek kalmadan hem iPhone hem Android ile doğrudan Bluetooth bağlantısı kurar.",
    },
    {
      label: "SPEECH",
      title: "Konuşma Odaklı Ses İşleme",
      description: "Gürültülü ortamlarda konuşmanın anlaşılırlığını artırmaya odaklanan ses işleme yaklaşımı kullanır.",
    },
    {
      label: "CHARGE",
      title: "Şarjlı Sistemler",
      description: "Lityum-iyon şarjlı modellerle günlük kullanım için pratik çözümler sunar.",
    },
    {
      label: "APP",
      title: "myPhonak Uygulaması",
      description: "Cihaz ayarlarını, ses seviyesini ve bağlantı durumunu akıllı telefondan yönetme imkânı sunar.",
    },
    {
      label: "ROGER",
      title: "Roger Uyumluluğu",
      description: "Uygun modeller, kalabalık ve gürültülü ortamlarda konuşma anlaşılırlığını artıran Roger mikrofon sistemleriyle çalışabilir.",
    },
    {
      label: "BUILD",
      title: "Dayanıklı Tasarım",
      description: "Günlük kullanım koşullarına uygun, dayanıklı yapı ile üretilir.",
    },
  ],
  // Precomputed rgb() decomposition of #0ea5e9 — same design freedom as
  // hero.ts's accent fields, kept distinct from Oticon's green.
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorHoverBorder: "rgb(14 165 233 / 0.5)",
};
