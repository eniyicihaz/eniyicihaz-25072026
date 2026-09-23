// "Cihaz Seçim Rehberi Nedir ve Neden Önemlidir?" section for the
// /rehberler/cihaz-secim-rehberi page. Renders through the shared
// BrandPageIntro component. Educational genre, same as İşitme Kaybı
// Nedir? — paragraph 4 is the load-bearing disclaimer: this is a
// general decision framework, not a substitute for a professional
// evaluation.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const cihazSecimRehberiIntro: BrandPageIntroContent = {
  badge: "CİHAZ SEÇİM REHBERİ NEDİR?",
  heading: "Cihaz Seçim Rehberi Nedir ve Neden Önemlidir?",
  paragraphs: [
    "Onlarca farklı marka ve modelin bulunduğu işitme cihazı dünyasında, size en uygun seçeneği bulmak kafa karıştırıcı olabilir.",
    "Doğru seçim; işitme kaybınızın derecesi ve türü, günlük yaşam tarzınız, bütçeniz, form faktörü tercihiniz ve ihtiyaç duyduğunuz ek özellikler gibi birden fazla faktörün birlikte değerlendirilmesiyle ortaya çıkar.",
    "En pahalı veya en yeni teknolojiye sahip cihaz, her kullanıcı için en uygun seçenek anlamına gelmez; önemli olan, sizin gerçek ihtiyaçlarınızla örtüşen modeldir.",
    "Bu rehber genel bir çerçeve sunar; size özel öneri, yalnızca bir işitme testi ve bir odyometristle yapılacak değerlendirme sonrasında netleşir.",
  ],
  stats: [
    { value: "Derece ve Tür", label: "İlk Faktör" },
    { value: "Yaşam Tarzı", label: "İkinci Faktör" },
    { value: "Bütçe ve SGK", label: "Üçüncü Faktör" },
    { value: "Kişiye Özel Öneri", label: "Sonuç" },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
