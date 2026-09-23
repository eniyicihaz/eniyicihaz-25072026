// "Aktif Yaşam İçin Cihaz Seçimi Nedir?" section for the
// /ihtiyaciniza-gore/aktif-yasam-icin-cihazlar page. Renders through the
// shared BrandPageIntro component. Unlike every other need-based page in
// this series, this page's axis is not a clinical classification at
// all — paragraph 1 makes that explicit. Paragraph 3 is still the
// load-bearing disclaimer every page in the series carries: general
// information, not a self-diagnosis tool.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const aktifYasamIcinCihazlarIntro: BrandPageIntroContent = {
  badge: "AKTİF YAŞAM İÇİN CİHAZLAR NEDİR?",
  heading: "Aktif Yaşam İçin Cihaz Seçimi Nedir ve Kimler İçin Uygundur?",
  paragraphs: [
    "Aktif yaşam için cihaz seçimi, belirli bir işitme kaybı derecesini değil; spor, seyahat veya yoğun hareketlilik içeren bir günlük yaşam tarzını sürdüren kullanıcıların pratik ihtiyaçlarını ön planda tutan bir yaklaşımı ifade eder.",
    "Bu kullanıcı grubunda genellikle güvenli oturma, ter ve neme dayanıklılık, rüzgar gürültüsünün azaltılması ve uzun pil ömrü gibi özellikler öncelikli olarak değerlendirilir.",
    "İşitme kaybının türü ve derecesi, yalnızca bir odyometrist tarafından yapılan işitme testi (odyometri) ile belirlenebilir; bu sayfa genel bir bilgilendirme amacı taşır, kendi kendine tanı koymak için kullanılmamalıdır.",
    "Yoğun fiziksel aktivite sırasında kullanılacak cihazların seçiminde, genel sağlık durumunuzu ve aktivite düzeyinizi bir odyometristle birlikte değerlendirmeniz önerilir.",
  ],
  stats: [
    { value: "Spor & Seyahat", label: "Yaygın Kullanım Alanı" },
    { value: "Güvenli Oturma", label: "Sıkça Öncelik Verilen Özellik" },
    { value: "Odyometri ile Belirlenir", label: "Kesin Tanı Yöntemi" },
    { value: "Yüksek IP Koruma", label: "Sıkça Değerlendirilen Standart" },
  ],
  accentColor: "#4b5563",
  accentColorBadgeBg: "rgb(75 85 99 / 0.08)",
  accentColorBadgeBorder: "rgb(75 85 99 / 0.35)",
  accentColorBadgeText: "#374151",
};
