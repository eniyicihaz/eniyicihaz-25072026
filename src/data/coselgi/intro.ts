// Brand story for the Coselgi brand page (/markalar/coselgi). Renders
// through the shared BrandPageIntro component. Widex bağlılığı ve
// Acoustic Environment Technology bağımsız kaynaklarla doğrulanmıştır.
// Kuruluş yılı (1961) yalnızca tek bir kaynakta bulunmuştur ve bu
// projede tam güvenle doğrulanamamıştır — yayından önce insan kontrolü
// önerilir; bu nedenle stats bölümünde kuruluş yılına yer verilmedi.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const coselgiIntro: BrandPageIntroContent = {
  badge: "COSELGI MARKASI",
  heading: "Coselgi Hakkında",
  paragraphs: [
    "Coselgi, dünyanın önde gelen işitme teknolojisi markalarından, Danimarka merkezli Widex'e bağlı bir markadır.",
    "Marka, Acoustic Environment Technology ile restoran, sokak, ev ve toplantı gibi farklı akustik ortamları analiz ederek ses ayarlarını otomatik olarak optimize etmeyi hedefler.",
    "Coselgi, Mojo ve Effect olmak üzere iki ana ürün ailesinde BTE, RIC, mRIC ve kulak içi (CIC) gibi farklı yerleşim seçenekleri sunar ve 30 ülkede satılmaktadır.",
  ],
  stats: [
    { value: "Widex", label: "Bağlı Olduğu Marka" },
    { value: "Danimarka", label: "Kökeni" },
    { value: "30", label: "Ülkede Dağıtım" },
    { value: "Mojo / Effect", label: "Ürün Aileleri" },
  ],
  // Precomputed rgb() decomposition of #1595D8.
  accentColor: "#1595D8",
  accentColorBadgeBg: "rgb(21 149 216 / 0.08)",
  accentColorBadgeBorder: "rgb(21 149 216 / 0.35)",
  accentColorBadgeText: "#0F74AC",
};
