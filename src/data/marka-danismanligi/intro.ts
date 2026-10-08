// Marka Seçmeden Önce İhtiyacınızı Tanıyın — Marka Danışmanlığı, plan §D
// Bölüm 1. Renders through the existing BrandPageIntro (zero code
// changes). İlk paragraf, Darıca/Gebze/Çayırova'dan gelen kullanıcıların
// farklı ihtiyaçlarla geldiği gerçek bağlamı kuruyor.
import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const markaDanismanligiIntro: BrandPageIntroContent = {
  badge: "MARKA SEÇMEDEN ÖNCE İHTİYACINIZI TANIYIN",
  heading: "Doğru Marka, Doğru İhtiyaçla Başlar",
  paragraphs: [
    "İşitme kaybı düzeyi, günlük yaşam ve teknolojiden beklenti kişiden kişiye farklıdır. Bu farklar, hangi markanın veya model ailesinin hangi kullanıcıya daha uygun olabileceğini şekillendirir.",
    "Bir markayı diğerinden üstün göstermek yerine, marka ve model ailelerini sizin ihtiyacınıza göre birlikte değerlendiriyoruz. Amaç \"en iyi marka\" değil, size uyan çözümdür.",
  ],
  stats: [
    { value: "18", label: "Marka Seçeneği" },
    { value: "Ücretsiz", label: "İşitme Testi" },
    { value: "İhtiyaç Odaklı", label: "Değerlendirme" },
  ],
  accentColor: "#b45309",
  accentColorBadgeBg: "rgb(180 83 9 / 0.08)",
  accentColorBadgeBorder: "rgb(180 83 9 / 0.35)",
  accentColorBadgeText: "#92400e",
};
