// "Ücretsiz Danışmanlık Süreci Nasıl İşler?" section for the
// /neden-orijinal/ucretsiz-danismanlik page. Renders through the shared
// BrandPageIntro component. Same trust-topic genre as the four prior
// pages — no self-diagnosis disclaimer here since the subject is the
// consultancy process itself, not a self-assessment; paragraph 4 states
// where the process begins (a proper audiometric evaluation).

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const ucretsizDanismanlikIntro: BrandPageIntroContent = {
  badge: "ÜCRETSİZ DANIŞMANLIK NEDİR?",
  heading: "Ücretsiz Danışmanlık Süreci Nasıl İşler?",
  paragraphs: [
    "Ücretsiz danışmanlık, işitme testinden cihaz önerisine kadar olan süreçte herhangi bir ücret talep edilmeden sunulan uzman desteğini ifade eder.",
    "Süreç; işitme testi, ihtiyaç değerlendirmesi, yaşam tarzınıza uygun cihaz önerileri ve SGK bilgilendirmesi gibi adımları kapsar.",
    "Danışmanlık sürecinde amaç, belirli bir ürünü satmak değil; size gerçekten uygun olan çözümü birlikte belirlemektir.",
    "İşitme kaybınızın türü ve derecesi, yalnızca bir odyometrist tarafından yapılan işitme testi (odyometri) ile belirlenebilir; danışmanlık süreci bu değerlendirmeyle başlar.",
  ],
  stats: [
    { value: "Ücretsiz İşitme Testi", label: "Sürecin İlk Adımı" },
    { value: "Satış Baskısız", label: "Danışmanlık Yaklaşımı" },
    { value: "Kişiye Özel Öneri", label: "Değerlendirme Sonucu" },
    { value: "SGK Bilgilendirmesi", label: "Ek Destek" },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
