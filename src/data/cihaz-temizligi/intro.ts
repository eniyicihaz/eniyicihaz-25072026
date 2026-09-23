// "Cihaz Temizliği Neden Önemlidir?" section for the /servis-bakim/
// cihaz-temizligi page. Renders through the shared BrandPageIntro
// component. Service/education genre, same as the two prior siblings
// — no self-diagnosis disclaimer; paragraph 4 is the load-bearing
// safety caution: never use water, alcohol or chemical cleaners.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const cihazTemizligiIntro: BrandPageIntroContent = {
  badge: "CİHAZ TEMİZLİĞİ NEDEN ÖNEMLİDİR?",
  heading: "Cihaz Temizliği Neden Önemlidir?",
  paragraphs: [
    "Gün içinde biriken kir, nem ve kulak yağı, işitme cihazınızın ses kalitesini zamanla olumsuz etkileyebilir; düzenli günlük temizlik bu birikimi en aza indirmeye yardımcı olur.",
    "Doğru temizlik, yalnızca yumuşak, kuru bir bez ve önerilen aksesuarlarla yapılmalıdır; su, alkol veya kimyasal temizleyiciler cihazınıza kalıcı zarar verebilir.",
    "Günlük temizliğin yanı sıra, cihazınızın gece boyunca kuru ve nemden korunmuş bir şekilde saklanması da performansının korunmasına katkı sağlar.",
    "Günlük temizlik, balmumu filtresi veya tüp gibi parçaların profesyonelce yenilenmesinin yerini almaz; bu tür ihtiyaçlar için Periyodik Bakım sayfamızı inceleyebilirsiniz.",
  ],
  stats: [
    { value: "Günde Birkaç Dakika", label: "Zaman İhtiyacı" },
    { value: "Yumuşak Kuru Bez", label: "Önerilen Malzeme" },
    { value: "Su ve Kimyasal Yok", label: "Kaçınılması Gerekenler" },
    { value: "Kuru Kutuda Saklama", label: "Gece Rutini" },
  ],
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0284c7",
};
