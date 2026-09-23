// Ecosystem deep-dive for the ReSound brand page (/markalar/resound) —
// M&RIE, Auracast/Bluetooth LE Audio, and ReSound Assist tele-audiology
// care. Renders through the shared BrandPageEcosystem component
// (Technology Explorer pattern). Deliberately 3 items, mirroring Phonak's,
// Signia's and Widex's depth-over-breadth choice.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const resoundEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "ReSound Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "mrie",
      icon: "radar",
      navLabel: "M&RIE",
      title: "M&RIE Nedir?",
      lead: "Geleneksel iki mikrofonlu yapıya ek olarak, kulak kanalına yerleştirilen üçüncü bir mikrofon içeren ReSound'a özgü tasarım.",
      howItWorks:
        "Kulak kanalındaki mikrofon, kulak kepçesinin doğal olarak şekillendirdiği sesi yakalayarak, dış mikrofonlardan gelen sinyalle birlikte işler; bu da sesin yönünü ve mekansal konumunu daha doğal algılamaya yardımcı olur.",
      advantages: [
        "Ses kaynağının yönünü ve mesafesini daha doğal algılamaya yardımcı olur",
        "Kendi sesini daha doğal duymaya katkı sağlar",
        "Rüzgar gürültüsünün etkisini azaltmaya yardımcı olabilir",
      ],
      models: ["Vivia", "Nexia"],
      expertNote: "M&RIE, ReSound'un mekansal işitmeye yönelik en özgün ve tescilli yaklaşımlarından biridir.",
    },
    {
      id: "auracast",
      icon: "bluetooth",
      navLabel: "Auracast",
      title: "Auracast (Bluetooth LE Audio)",
      lead: "Uygun donanıma sahip ortamlarda (havalimanı, tiyatro, spor salonu gibi) yayın sesine doğrudan bağlanmayı sağlayan yeni nesil kablosuz ses standardı.",
      howItWorks:
        "Auracast destekli bir ortamdaki ses kaynağı, uyumlu işitme cihazlarına doğrudan aktarılabilir; kullanıcı uygun bir yayını seçerek dinleyebilir.",
      advantages: [
        "Kamuya açık uygun ortamlarda doğrudan ses akışı imkânı sunar",
        "Nexia ile birlikte sektörde erken benimsenen bir teknolojidir",
        "Vivia'da özel bir Auracast Asistanı ile desteklenir",
      ],
      models: ["Vivia", "Nexia"],
      expertNote: "Auracast desteğinin yaygınlığı, çevredeki mekanların bu teknolojiyi benimseme hızına bağlıdır.",
    },
    {
      id: "assist",
      icon: "smartphone",
      navLabel: "ReSound Assist",
      title: "ReSound Assist",
      lead: "ReSound Smart 3D uygulaması üzerinden kliniğe gitmeden uzaktan ince ayar ve destek almayı sağlayan tele-odyoloji hizmeti.",
      howItWorks:
        "Kullanıcı uygulama üzerinden bir talep gönderir; uzman, ayarları inceleyip günceller ve yeni ayarlar kablosuz olarak cihaza iletilir.",
      advantages: [
        "Kliniğe gitmeden ince ayar talep etme imkânı sunar",
        "Video görüşme ile uzaktan destek seçeneği sunar",
        "Düzenli takip süreçlerini kolaylaştırabilir",
      ],
      models: ["Vivia", "Nexia", "Omnia"],
      expertNote: "ReSound Assist, uzaktan bakım hizmetlerinin işitme cihazı deneyimine entegre edilmesinin somut bir örneğidir.",
    },
  ],
  // Precomputed rgb() decomposition of #AA1835.
  accentColor: "#AA1835",
  accentColorBadgeBg: "rgb(170 24 53 / 0.08)",
  accentColorBadgeBorder: "rgb(170 24 53 / 0.35)",
  accentColorBadgeText: "#8B1330",
  accentColorNavActiveBg: "rgb(170 24 53 / 0.1)",
  accentColorCalloutBg: "rgb(170 24 53 / 0.06)",
  accentColorCalloutLabel: "#8B1330",
};
