// "Standart Seri İşitme Cihazları Nedir?" section for the /segmentler/
// standart-seri page. Renders through the shared BrandPageIntro
// component. Same candidacy-topic genre as Premium Seri — paragraph 4
// states the practical takeaway: tier fit is a joint decision with an
// odyometrist, not a self-diagnosis.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const standartSeriIntro: BrandPageIntroContent = {
  badge: "STANDART SERİ NEDİR?",
  heading: "Standart Seri İşitme Cihazları Nedir?",
  paragraphs: [
    "Standart seri, bir markanın günlük kullanım ihtiyaçlarını karşılamak üzere tasarladığı, dengeli bir teknoloji seviyesi sunan ürün ailesini ifade eder.",
    "Bu seride yer alan cihazlar; otomatik ses ayarı, temel yönlü mikrofon desteği ve genellikle temel düzeyde kablosuz bağlantı gibi özellikler sunar.",
    "Standart seri, premium serinin sunduğu en gelişmiş özelliklerin tamamını içermese de, günlük yaşamın büyük bölümünde ihtiyaç duyulan işlevleri karşılayacak şekilde tasarlanır.",
    "Size uygun serinin standart olup olmadığı, işitme kaybınızın derecesi, günlük yaşam tarzınız ve bütçeniz göz önünde bulundurularak bir odyometrist ile birlikte belirlenmelidir.",
  ],
  stats: [
    { value: "Dengeli Teknoloji", label: "Teknoloji Seviyesi" },
    { value: "Temel Bağlantı", label: "Kablosuz Özellikler" },
    { value: "Fiyat-Performans", label: "Yatırım Dengesi" },
    { value: "Geniş Kullanıcı Kitlesi", label: "Tercih Sıklığı" },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
