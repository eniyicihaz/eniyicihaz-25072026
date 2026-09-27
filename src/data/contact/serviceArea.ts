// "Hizmet Bölgeleri" section for the /iletisim page. Renders through the
// new ContactServiceArea component. Hub-city model (SEARCH_STRATEGY.md
// §10), using only COMPANY.md §17's real tiers — İzmit/Körfez are
// deliberately excluded (not in COMPANY.md, regardless of what any
// outside source suggests; a finalized decision, not an oversight).
//
// `href` is wired up for Darıca, Gebze and Çayırova now that their real
// landing pages exist (ContactServiceArea already renders `item.href` as
// a real link when present, plain text otherwise — no component change
// needed, exactly as anticipated). Dilovası/Tuzla/Pendik stay text-only:
// no dedicated page exists for them and none is planned.

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
      href: "/darica-isitme-cihazlari/",
    },
    {
      name: "Gebze",
      tier: "oncelikli",
      description: "Gebze'den merkezimize kolayca ulaşabilirsiniz.",
      href: "/gebze-isitme-cihazlari/",
    },
    {
      name: "Çayırova",
      tier: "oncelikli",
      description: "Çayırova'dan merkezimize kolayca ulaşabilirsiniz.",
      href: "/cayirova-isitme-cihazlari/",
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
