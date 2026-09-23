// "İleri Derece İşitme Kaybı Nedir?" + "Nasıl Anlaşılır?" section for the
// /ihtiyaciniza-gore/ileri-derece-isitme-kaybi page. Renders through the
// shared BrandPageIntro component. Paragraph 3 is the load-bearing
// disclaimer: this page is general information, not a self-diagnosis
// tool — the only way to confirm degree and type is a proper audiometric
// test.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const ileriDereceIsitmeKaybiIntro: BrandPageIntroContent = {
  badge: "İLERİ DERECE İŞİTME KAYBI NEDİR?",
  heading: "İleri Derece İşitme Kaybı Nedir ve Nasıl Anlaşılır?",
  paragraphs: [
    "İleri derece işitme kaybı, uluslararası sınıflandırmaya göre 56-70 desibel (dB) işitme eşiği aralığını ifade eden bir işitme kaybı derecesidir.",
    "Bu derecedeki kayıp genellikle yüksek sesle konuşulsa bile konuşmaları anlamakta zorluk, telefon görüşmelerinde belirgin güçlük ve kalabalık ortamlarda neredeyse hiç takip edememe olarak kendini gösterir.",
    "Kesin derece ve tip, yalnızca bir odyometrist tarafından yapılan işitme testi (odyometri) ile belirlenebilir; bu sayfa genel bir bilgilendirme amacı taşır, kendi kendine tanı koymak için kullanılmamalıdır.",
    "İleri derece işitme kaybı olan kişilerde, cihazlandırma genellikle daha güçlü ve kapsamlı özelliklere sahip modelleri gerektirir.",
  ],
  stats: [
    { value: "56-70 dB", label: "İşitme Eşiği Aralığı" },
    { value: "Yüksek Ses Bile Zor", label: "Sıkça Etkilenen Alan" },
    { value: "Odyometri ile Belirlenir", label: "Kesin Tanı Yöntemi" },
    { value: "Güçlü RIC / BTE", label: "Sıkça Tercih Edilen Modeller" },
  ],
  accentColor: "#57534e",
  accentColorBadgeBg: "rgb(87 83 78 / 0.08)",
  accentColorBadgeBorder: "rgb(87 83 78 / 0.35)",
  accentColorBadgeText: "#44403c",
};
