import type { ClosingContent } from "./closing.types";

// Locked content — CLOSING_SPECIFICATION.md §2. CTA label matches
// Hero/Guide exactly ("tek ses" consistency). Phone number/href match the
// existing Header/Footer contact data (COMPANY.md) — no new number invented.
export const closing: ClosingContent = {
  message: "Bir konuşmayla başlayalım.",
  supportingSentence: "Hazır olduğunuzda, biz buradayız.",
  cta: { label: "Ücretsiz İşitme Testi", href: "/iletisim" },
  secondaryContact: {
    lead: "ya da bizi arayın:",
    label: "0533 773 31 99",
    href: "tel:+905337733199",
  },
  reassurance: "Baskı yok, sadece bir konuşma.",
};
