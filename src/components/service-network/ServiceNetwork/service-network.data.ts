import type { ServiceNetworkContent } from "./service-network.types";

// Locked content — docs/CENTER_NETWORK_SPECIFICATION.md §2. Hierarchy is
// COMPANY.md §17 verbatim (single source of truth) — order and tier names
// are not reinvented here: Darıca (ana merkez) → Gebze + Çayırova
// (öncelikli) → Kocaeli (üst bölgesel otorite, a province-level frame, not
// a fifth district — deliberately not squeezed into the same list shape as
// Gebze/Çayırova) → Dilovası/Tuzla/Pendik (çevre, text-only, no dedicated
// page — QUALITY_GATES §2 doorway/scaled-page rule: no page, no link
// invented). This is the section that gives the homepage its first real,
// visible links to all four district/city landing pages.
export const serviceNetwork: ServiceNetworkContent = {
  eyebrow: "Hizmet Ağımız",
  heading: "Nereden Ulaşabilirsiniz?",
  intro: "Merkezimiz Darıca'da; çevresindeki bölgelerden de kolayca ulaşabilirsiniz.",
  primary: {
    name: "Darıca",
    description: "Ana merkezimiz burada — karşılama, değerlendirme ve cihaz uygulaması bu adreste yapılır.",
    href: "/darica-isitme-cihazlari/",
  },
  priorityLabel: "Öncelikli Hizmet Bölgesi",
  priority: [
    { name: "Gebze", description: "Merkezimize kolayca ulaşabilirsiniz.", href: "/gebze-isitme-cihazlari/" },
    { name: "Çayırova", description: "Merkezimize kolayca ulaşabilirsiniz.", href: "/cayirova-isitme-cihazlari/" },
  ],
  regional: {
    name: "Kocaeli",
    description: "Kocaeli genelinde de danışmanlık ve bilgi desteği sunuyoruz.",
    href: "/kocaeli-isitme-cihazlari/",
  },
  secondaryLabel: "Ayrıca",
  secondarySentence: "Kocaeli'nin diğer ilçelerinden de bizi arayarak ulaşabilirsiniz.",
  closing: "Listede yer almayan bir bölgeden ulaşmak istiyorsanız, bizi aramanız yeterli.",
};
