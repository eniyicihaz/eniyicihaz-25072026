// "Hizmet Bölgeleri" section for the /iletisim page. Renders through the
// new ContactServiceArea component. Hub-city model (SEARCH_STRATEGY.md
// §10), using only COMPANY.md §17's real tiers — İzmit/Körfez are
// deliberately excluded (not in COMPANY.md, regardless of what any
// outside source suggests; a finalized decision, not an oversight).
//
// `href` stays undefined for every item today (no dedicated region
// landing pages exist yet) — ContactServiceArea renders these as plain
// text, never as a link to a page that doesn't exist. The day a real
// Darıca/Gebze/Çayırova page ships, wiring it up here is a one-line data
// edit, not a component change (see the plan's §6).

export type ServiceAreaTier = "merkez" | "oncelikli" | "cevre";

export interface ServiceAreaItem {
  name: string;
  tier: ServiceAreaTier;
  description: string;
  href?: string;
}

export interface ContactServiceAreaContent {
  eyebrow: string;
  heading: string;
  intro: string;
  tierLabels: Record<ServiceAreaTier, string>;
  items: ServiceAreaItem[];
  closing: string;
}

export const contactServiceArea: ContactServiceAreaContent = {
  eyebrow: "Hizmet Bölgeleri",
  heading: "Hangi Bölgelerden Ulaşabilirsiniz?",
  intro:
    "Merkezimiz Darıca'da; çevresindeki bölgelerden de kolayca ulaşabilirsiniz.",
  tierLabels: {
    merkez: "Merkez",
    oncelikli: "Öncelikli Hizmet Bölgeleri",
    cevre: "Çevre İlçeler",
  },
  items: [
    {
      name: "Darıca",
      tier: "merkez",
      description: "Merkezimiz Darıca'da bulunur; adres ve yol tarifi için yukarıdaki konum kartını inceleyebilirsiniz.",
    },
    {
      name: "Gebze",
      tier: "oncelikli",
      description: "Gebze'den merkezimize kolayca ulaşabilirsiniz.",
    },
    {
      name: "Çayırova",
      tier: "oncelikli",
      description: "Çayırova'dan merkezimize kolayca ulaşabilirsiniz.",
    },
    {
      name: "Dilovası",
      tier: "cevre",
      description: "Dilovası çevresinden de hizmet almak için bizi arayabilirsiniz.",
    },
    {
      name: "Tuzla",
      tier: "cevre",
      description: "Tuzla çevresinden de hizmet almak için bizi arayabilirsiniz.",
    },
    {
      name: "Pendik",
      tier: "cevre",
      description: "Pendik çevresinden de hizmet almak için bizi arayabilirsiniz.",
    },
  ],
  closing:
    "Listede yer almayan bir bölgeden ulaşmak istiyorsanız, size yardımcı olup olamayacağımızı öğrenmek için bizi aramanız yeterli.",
};
