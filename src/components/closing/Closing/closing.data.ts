import type { ClosingContent } from "./closing.types";
import { company } from "../../footer/Footer/data/company";
import { contactConfig } from "../../../config/contact";

// Locked content — CLOSING_SPECIFICATION.md §2. CTA label matches
// Hero/Guide exactly ("tek ses" consistency). Phone number/href match the
// existing Header/Footer contact data (COMPANY.md) — no new number invented.
export const closing: ClosingContent = {
  message: "Bir konuşmayla başlayalım.",
  supportingSentence: "Darıca'daki merkezimizde, hazır olduğunuzda sizi bekliyoruz.",
  cta: { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi/" },
  secondaryContact: {
    lead: `Randevu için bizi arayın (telefonla ${contactConfig.phoneReach.untilLabel}):`,
    label: contactConfig.phone.display,
    href: contactConfig.phone.href,
    whatsapp: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
    directions: { label: "Yol tarifi al", href: company.directionsHref },
  },
  reassurance: "Baskı yok, sadece bir konuşma.",
};
