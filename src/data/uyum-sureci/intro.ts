// "Uyum Süreci Nedir ve Neden Önemlidir?" section for the /rehberler/
// uyum-sureci page. Renders through the shared BrandPageIntro
// component. Educational genre, same as the three prior Rehberler
// siblings — paragraph 4 is the load-bearing honesty flag: persistent
// discomfort is not something to simply wait out, and should prompt a
// Kontrol Randevusu or Kişiye Özel Programlama.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const uyumSureciIntro: BrandPageIntroContent = {
  badge: "UYUM SÜRECİ NEDİR?",
  heading: "Uyum Süreci Nedir ve Neden Önemlidir?",
  paragraphs: [
    "İşitme kaybı yaşandığında, beyin zamanla bazı seslere daha az maruz kalır; işitme cihazı kullanmaya başladığınızda, beyninizin bu sesleri yeniden anlamlandırmayı öğrenmesi belirli bir süre alır.",
    "Bu süreç, İlk Kullanım Rehberi'nde ele aldığımız ilk günlerin ötesine geçen, genellikle haftalar hatta aylar süren daha uzun bir alışma yolculuğudur.",
    "Uzun süredir tedavi edilmemiş bir işitme kaybından sonra cihaz kullanmaya başlayanlarda, bu uyum süreci daha uzun sürebilir; bu durum normaldir ve zamanla iyileşme eğilimindedir.",
    "Uyum sürecinde hafif bir alışma hissi beklenebilir; ancak sürekli bir rahatsızlık yaşıyorsanız, bunu bekleyip geçmesini ummak yerine Kontrol Randevusu veya Kişiye Özel Programlama ile değerlendirilmesini önermekteyiz.",
  ],
  stats: [
    { value: "Haftalar / Aylar", label: "Genel Süre" },
    { value: "Beyin Yeniden Kalibrasyonu", label: "Temel Mekanizma" },
    { value: "Kişiden Kişiye Değişir", label: "Gerçekçi Beklenti" },
    { value: "Takip Randevularıyla Desteklenir", label: "Destek Şekli" },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
