// "Uzman Yorumu" section for the /neden-orijinal/guvenilir-teknoloji
// page. Renders through the shared BrandPageExpertOpinion component.
// Framed as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page, here
// reinforcing the practical takeaway (verification, not diagnosis).

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const guvenilirTeknolojiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Bir işitme cihazının performansı kadar, orijinal olması ve faturalı, garanti belgeli, seri numarası doğrulanabilir bir cihaz olması da uzun vadeli güvenilirlik açısından önemlidir. Ruhsatlı işitme cihazı merkezi olarak müşterilerimize her zaman fatura, garanti belgesi ve seri numarası kontrolünün önemini hatırlatıyoruz.",
  note: "Ürününüzün orijinalliğinden emin değilseniz, seri numarası doğrulaması için bizimle iletişime geçebilirsiniz.",
  accentColor: "#1d4ed8",
  accentColorBadgeBg: "rgb(29 78 216 / 0.08)",
  accentColorBadgeBorder: "rgb(29 78 216 / 0.35)",
  accentColorBadgeText: "#1e40af",
};
