// "Marka Değil, Size Uyan Çözüm." — Marka Danışmanlığı hero (plan §C).
// Renders through the new DecisionCockpit component. accentColor: amber
// (#b45309) — deliberately distinct from the 3 sibling neden-orijinal
// pages this one links to (guvenilir-teknoloji=blue, yaygin-servis-agi=
// orange, orijinal-aksesuar=violet).
import { contactConfig } from "../../config";
import type { DecisionCockpitContent } from "../../components/shared/DecisionCockpit/DecisionCockpit.astro";

export const markaDanismanligiHero: DecisionCockpitContent = {
  eyebrow: "MARKA DANIŞMANLIĞI",
  heading: "Marka Değil, Size Uyan Çözüm.",
  subheading: "Marka ve model ailelerini, ihtiyacınıza göre birlikte değerlendirelim.",
  paragraph:
    "İşitme ihtiyacı, günlük yaşam ve beklenti kişiden kişiye farklıdır. Bu farkı tanımak, hangi marka ve model ailesinin size uygun olabileceğine karar vermenin ilk adımıdır.",
  ctaPrimary: { label: "Bizi Arayın", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  panelLabel: "Karar Masası",
  panelCaption: "Bu kriterler, danışmanlık sırasında ihtiyacınızı birlikte tanımlamak için bir başlangıç noktasıdır.",
  criteria: [
    { label: "İşitme İhtiyacı", position: 62 },
    { label: "Günlük Yaşam", position: 74 },
    { label: "Teknoloji Seviyesi", position: 48 },
    { label: "Bağlantı İhtiyacı", position: 66 },
    { label: "Kullanım Kolaylığı", position: 80 },
    { label: "Cihaz Formu", position: 55 },
  ],
  accentColor: "#b45309",
};
