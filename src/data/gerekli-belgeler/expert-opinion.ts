// "Uzman Yorumu" section for the /sgk/gerekli-belgeler page. Renders
// through the shared BrandPageExpertOpinion component. Framed as the
// clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const gerekliBelgelerExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Başvurularda en sık karşılaştığımız gecikme nedeni, eksik veya güncel olmayan bir belgenin fark edilmeden randevuya getirilmesidir. Bu yüzden belge listenizi randevunuzdan önce sizinle birlikte kontrol ediyoruz.",
  note: "Belge hazırlığınız hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
