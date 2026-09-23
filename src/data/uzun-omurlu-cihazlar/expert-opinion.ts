// "Uzman Yorumu" section for the /neden-orijinal/uzun-omurlu-cihazlar
// page. Renders through the shared BrandPageExpertOpinion component.
// Framed as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page, here
// reinforcing the practical takeaway (maintenance routine, not a
// warranty claim).

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const uzunOmurluCihazlarExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Bir işitme cihazının uzun ömürlü olması, yalnızca ürün kalitesine değil; düzenli bakıma ve orijinal yedek parça kullanımına da bağlıdır; bu nedenle müşterilerimize periyodik kontrolün önemini her zaman hatırlatıyoruz.",
  note: "Cihazınızın ömrünü uzatmak için önerilen bakım sıklığı ve yöntemleri hakkında bizimle iletişime geçebilirsiniz.",
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
