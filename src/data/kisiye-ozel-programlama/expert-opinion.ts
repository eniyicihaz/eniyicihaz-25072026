// "Uzman Yorumu" section for the /uygulama-ayar/
// kisiye-ozel-programlama page. Renders through the shared
// BrandPageExpertOpinion component. Framed as the clinic's own general
// assessment, not a named/personal testimonial — same safe pattern used
// on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const kisiyeOzelProgramlamaExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "İlk ayar bir başlangıç noktasıdır; gerçek fark, geri bildiriminizi dinleyerek yaptığımız ince ayarlarla ortaya çıkar. Bu yüzden takip randevularını sürecin ayrılmaz bir parçası olarak görüyoruz.",
  note: "İnce ayar randevunuz hakkında bilgi almak veya randevu oluşturmak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
