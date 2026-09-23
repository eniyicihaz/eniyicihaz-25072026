// Contact configuration — single source of truth for phone/WhatsApp
// across the site. Same real, already-established number used
// throughout the project (Header, Oticon brand page) — not a new value,
// just centralized so components stop hardcoding tel:/wa.me links.

export const contactConfig = {
  phone: {
    display: "0533 773 31 99",
    href: "tel:+905337733199",
  },
  whatsapp: {
    href: "https://wa.me/905337733199",
  },
};
