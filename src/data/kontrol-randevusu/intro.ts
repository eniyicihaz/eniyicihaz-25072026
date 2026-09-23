// "Kontrol Randevusu Nedir ve Neden Önemlidir?" section for the
// /uygulama-ayar/kontrol-randevusu page. Renders through the shared
// BrandPageIntro component. Service-process genre, same as the five
// prior siblings — no self-diagnosis disclaimer; paragraph 4 is the
// honest boundary: sudden changes shouldn't wait for the next scheduled
// control.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const kontrolRandevusuIntro: BrandPageIntroContent = {
  badge: "KONTROL RANDEVUSU NEDİR?",
  heading: "Kontrol Randevusu Nedir ve Neden Önemlidir?",
  paragraphs: [
    "Kontrol randevusu, herhangi bir şikayetiniz olmasa dahi işitme durumunuzun ve cihazınızın performansının düzenli aralıklarla birlikte gözden geçirildiği önleyici bir ziyarettir.",
    "Kişiye özel programlamanın aksine, kontrol randevusu belirli bir şikayet veya memnuniyetsizlik üzerine değil; sabit bir sıklıkla, önleyici amaçla planlanır.",
    "Randevu sırasında kısa bir işitme yeniden değerlendirmesi, cihaz performans kontrolü ve kulak ile kalıbın fiziksel muayenesi birlikte yapılır.",
    "Önerilen sıklık kişiden kişiye değişir; ancak randevunuzu beklemeden önce cihazınızda veya işitmenizde ani bir değişiklik fark ederseniz, vakit kaybetmeden bizimle iletişime geçmeniz önerilir.",
  ],
  stats: [
    { value: "Önleyici Yaklaşım", label: "Temel Amaç" },
    { value: "İşitme + Cihaz Kontrolü", label: "Kapsam" },
    { value: "6-12 Ay Aralıkla", label: "Genel Öneri" },
    { value: "Kişiye Göre Değişir", label: "Gerçek Sıklık" },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
};
