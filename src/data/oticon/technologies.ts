// M3 (Technologies) content for the Oticon brand page (/markalar/oticon),
// directly under About (M2). Independent of the /markalar hub page's
// M1...M8 modules — its own data namespace, only ever holding this one
// brand's content.
//
// Six general technology themes, all consistent with Oticon's real, public
// technology direction (AI-assisted sound processing, BrainHearing, wireless
// connectivity, rechargeable systems) — no invented specs, no performance
// numbers, no marketing language.

export interface OticonTechnology {
  label: string;
  title: string;
  description: string;
}

export interface OticonTechnologiesContent {
  badge: string;
  heading: string;
  intro: string;
  items: OticonTechnology[];
}

export const oticonTechnologies: OticonTechnologiesContent = {
  badge: "OTICON TEKNOLOJİLERİ",
  heading: "Oticon'u Farklı Kılan Teknolojiler",
  intro:
    "Oticon'un işitme cihazlarında kullandığı temel teknoloji yaklaşımları.",
  items: [
    {
      label: "BRAIN",
      title: "BrainHearing®",
      description: "Beynin sesi doğal şekilde işleme sürecini destekleyen temel yaklaşım.",
    },
    {
      label: "AI",
      title: "Yapay Zekâ Destekli Ses İşleme",
      description: "Ortamı sürekli analiz ederek sesi gerçek zamanlı olarak dengeler.",
    },
    {
      label: "AUDIO",
      title: "Doğal Ses Kalitesi",
      description: "Konuşma ve çevresel sesler arasında daha dengeli, doğal bir denge kurar.",
    },
    {
      label: "CONNECTIVITY",
      title: "Kablosuz Bağlantı",
      description: "Telefon, TV ve diğer cihazlarla kesintisiz bağlantı imkânı sunar.",
    },
    {
      label: "COMFORT",
      title: "Konforlu Kullanım",
      description: "Hafif ve ergonomik tasarımıyla uzun süreli kullanımda konfor sağlar.",
    },
    {
      label: "RECHARGE",
      title: "Şarj Edilebilir Sistem",
      description: "Günlük kullanım için pratik ve sürdürülebilir şarj çözümleri sunar.",
    },
  ],
};
