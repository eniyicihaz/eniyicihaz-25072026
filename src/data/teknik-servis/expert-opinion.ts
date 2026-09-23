// "Uzman Yorumu" section for the /servis-bakim/teknik-servis page.
// Renders through the shared BrandPageExpertOpinion component. Framed
// as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const teknikServisExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Bir arıza fark ettiğinizde önce yerinde teşhis yapmayı önemsiyoruz; birçok sorun sandığınızdan daha basit bir çözüme sahip olabilir. Kapsamlı bir onarım gerektiğinde de süreci sizinle şeffaf bir şekilde paylaşıyoruz.",
  note: "Teknik servis talebiniz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
