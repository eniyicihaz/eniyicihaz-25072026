// "Yenileme Hakkı Nedir?" section for the /sgk/yenileme-hakki page.
// Renders through the shared BrandPageIntro component. Paragraph 4 is
// the load-bearing accuracy disclaimer — deliberately points to the
// pillar page and the clinic for the current renewal period rather
// than stating a specific figure here. See hero.ts for the rationale.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const yenilemeHakkiIntro: BrandPageIntroContent = {
  badge: "YENİLEME HAKKI NEDİR?",
  heading: "SGK İşitme Cihazı Yenileme Hakkı Nedir?",
  paragraphs: [
    "SGK, kullanılmakta olan işitme cihazının belirli bir süre sonunda yeniden SGK desteği kapsamında yenilenmesine imkân tanır.",
    "Bu süre dolmadan önce de, cihazın onarılamaz şekilde arızalanması veya işitme kaybının belirgin şekilde ilerlemesi gibi durumlarda erken yenileme talebinde bulunulabilir.",
    "Erken yenileme talepleri, güncel bir sağlık kurulu raporu ve durumu açıklayan gerekçeyle birlikte değerlendirilir.",
    "Bu sayfa, yenileme hakkının genel mantığını anlatır; güncel yenileme süresi ve şartları için SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi sayfamızı veya merkezimizi inceleyebilirsiniz.",
  ],
  stats: [
    { value: "Periyodik Hak", label: "Standart Yenileme" },
    { value: "Gerekçeli Başvuru", label: "Erken Yenileme" },
    { value: "Güncel Rapor", label: "Gerekli Belge" },
    { value: "Güncel Süre SGK Rehberinde", label: "Kesin Süre" },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
