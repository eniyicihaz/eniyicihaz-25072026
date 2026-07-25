// Company / contact — source of truth: COMPANY.md
import type { CompanyInfo } from "../footer.types";

export const company: CompanyInfo = {
  brand: "Eniyicihaz.com",
  legalName: "Avrasya İşitme Cihazları",
  tagline: "2009'dan beri güvenilir işitme sağlığı hizmeti",
  about:
    "Avrasya İşitme Cihazları; işitme değerlendirmesi, cihaz uygulaması ve teknik servis hizmetleri sunan SGK anlaşmalı bir işitme merkezidir.",
  address:
    "Fevziçakmak Mah. Dr. Zeki Acar Cad. No:77/7 Asansör 1. Kat, Darıca / Kocaeli",
  directionsHref: "#",
  phones: [
    { label: "Cep", number: "0533 773 31 99", href: "tel:+905337733199" },
    { label: "Merkez", number: "0262 656 32 77", href: "tel:+902626563277" },
  ],
  email: "eniyicihaz@gmail.com",
  hours: [
    { days: "Hafta içi", time: "08:45 – 19:00" },
    { days: "Cumartesi", time: "09:00 – 19:00" },
    { days: "Pazar", time: "Kapalı" },
  ],
  sgkLabel: "SGK Anlaşmalı İşitme Merkezi",
};
