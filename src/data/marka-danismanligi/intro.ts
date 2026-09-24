// Marka Seçmeden Önce İhtiyacınızı Tanıyın — Marka Danışmanlığı, plan §D
// Bölüm 1. Renders through the existing BrandPageIntro (zero code
// changes). İlk paragraf, Darıca/Gebze/Çayırova'dan gelen kullanıcıların
// farklı ihtiyaçlarla geldiği gerçek bağlamı kuruyor.
import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const markaDanismanligiIntro: BrandPageIntroContent = {
  badge: "MARKA SEÇMEDEN ÖNCE İHTİYACINIZI TANIYIN",
  heading: "Doğru Marka, Doğru İhtiyaçla Başlar",
  paragraphs: [
    "Darıca'daki merkezimize başvuran, Gebze ve Çayırova'dan gelen danışanlarımızın işitme kaybı düzeyi, günlük yaşamı ve teknolojiden beklentisi birbirinden farklı olabilir. Bu farklar, hangi markanın hangi kullanıcıya daha uygun olabileceğini şekillendirir.",
    "Bir markayı diğerinden üstün göstermek yerine, farklı markaların farklı teknoloji yaklaşımlarını sizin ihtiyacınıza göre birlikte değerlendiriyoruz. Amaç \"en iyi marka\" değil, size uyan çözümdür.",
  ],
  stats: [
    { value: "18", label: "Marka Seçeneği" },
    { value: "Marka Bağımsız", label: "Yaklaşım" },
    { value: "İhtiyaç Odaklı", label: "Değerlendirme" },
  ],
  accentColor: "#b45309",
  accentColorBadgeBg: "rgb(180 83 9 / 0.08)",
  accentColorBadgeBorder: "rgb(180 83 9 / 0.35)",
  accentColorBadgeText: "#92400e",
};
