// "Cihaz Deneme Nedir ve Neden Önemlidir?" section for the
// /uygulama-ayar/cihaz-deneme page. Renders through the shared
// BrandPageIntro component. Service-process genre, same as the two
// prior siblings — no self-diagnosis disclaimer; paragraph 4 sets the
// honest expectation that the trial period has a defined duration and
// isn't open-ended.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const cihazDenemeIntro: BrandPageIntroContent = {
  badge: "CİHAZ DENEME NEDİR?",
  heading: "Cihaz Deneme Nedir ve Neden Önemlidir?",
  paragraphs: [
    "Cihaz deneme, size önerilen işitme cihazını satın almadan önce günlük hayatınızda gerçek koşullarda test etmenizi sağlayan bir süreçtir.",
    "Kısa bir klinik denemesinin aksine, cihaz deneme süreci; ev, iş ve sosyal ortamlarınızda günler veya haftalar boyunca gerçek kullanım deneyimi kazanmanıza imkân tanır.",
    "Bu süreç, doğru cihazı seçtiğinizden emin olmanızı sağlamayı amaçlar; deneme süresi boyunca herhangi bir satın alma yükümlülüğünüz bulunmaz.",
    "Deneme süresi, önerilen model ve stok durumuna göre değişebilir; net süre ve koşullar randevu sırasında sizinle paylaşılır.",
  ],
  stats: [
    { value: "Satın Alma Yükümlülüğü Yok", label: "Temel İlke" },
    { value: "Günler / Haftalar", label: "Deneme Süresi" },
    { value: "Gerçek Yaşam Koşulları", label: "Test Ortamı" },
    { value: "Ara Kontrol Desteği", label: "Süreç Boyunca" },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
