// "Mevcut Cihazınızdan Memnun Değilseniz" — redesign plan §1, Bölüm 7.
// Renders through BrandPageExpertOpinion (unchanged). Reframed around
// the "maybe it's not the device itself" idea — no diagnostic or
// technical-cause claims, only a hedged, consultative invitation to
// review the existing device together (PRINCIPLES §5).
import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const cihazDenemeExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "MEVCUT CİHAZINIZDAN MEMNUN DEĞİLSENİZ",
  heading: "Belki Sorun Cihazın Kendisi Değil, Ayarlarıdır",
  quote:
    "Bir işitme cihazından beklenen faydayı görmemek, her zaman cihazın kendisiyle ilgili olmayabilir; programlama, kulak kalıbı veya kullanım koşulları da deneyiminizi doğrudan etkiler. Bu yüzden yeni bir cihaza karar vermeden önce mevcut cihazınızı birlikte gözden geçirmenizi öneriyoruz.",
  note: "Mevcut cihazınızı kontrol ettirmek veya yeni bir model denemek için bizimle iletişime geçebilirsiniz.",
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
