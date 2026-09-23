// "Ekonomik Seri İşitme Cihazları Nedir?" section for the /segmentler/
// ekonomik-seri page. Renders through the shared BrandPageIntro
// component. Same candidacy-topic genre as Premium Seri and Standart
// Seri — paragraph 4 states the practical takeaway: tier fit is a joint
// decision with an odyometrist, not a self-diagnosis.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const ekonomikSeriIntro: BrandPageIntroContent = {
  badge: "EKONOMİK SERİ NEDİR?",
  heading: "Ekonomik Seri İşitme Cihazları Nedir?",
  paragraphs: [
    "Ekonomik seri, bir markanın temel işitme ihtiyaçlarını karşılamak üzere tasarladığı, sade ve uygun fiyatlı ürün ailesini ifade eder.",
    "Bu seride yer alan cihazlar; günlük konuşmaları takip etmeye yardımcı olan temel ses yükseltme ve basit kullanım özellikleri sunar.",
    "Ekonomik seri, standart ve premium serilerin sunduğu gelişmiş bağlantı ve kişiselleştirme özelliklerinin çoğunu içermez; ancak temel işitme ihtiyaçları için sade ve erişilebilir bir çözüm sunar.",
    "Size uygun serinin ekonomik olup olmadığı, işitme kaybınızın derecesi, günlük yaşam tarzınız ve bütçeniz göz önünde bulundurularak bir odyometrist ile birlikte belirlenmelidir.",
  ],
  stats: [
    { value: "Temel Teknoloji", label: "Teknoloji Seviyesi" },
    { value: "Sınırlı Bağlantı", label: "Kablosuz Özellikler" },
    { value: "En Uygun Fiyat", label: "Yatırım Düzeyi" },
    { value: "Sade Kullanım", label: "Kullanım Kolaylığı" },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
