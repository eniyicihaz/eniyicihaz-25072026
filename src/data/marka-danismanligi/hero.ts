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
  subheading: "Farklı markaların farklı teknoloji yaklaşımlarını, ihtiyacınıza göre birlikte değerlendirelim.",
  paragraph:
    "Darıca, Gebze ve Çayırova'dan gelen danışanlarımızın işitme ihtiyacı, günlük yaşamı ve beklentisi birbirinden farklı olabilir. Bu farkı tanımak, hangi markanın size daha uygun olduğuna karar vermenin ilk adımıdır.",
  ctaPrimary: { label: "Ücretsiz Değerlendirme", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Bilgi Al", href: contactConfig.whatsapp.href },
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
