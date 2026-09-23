// "Orta Derece İşitme Kaybı Nedir?" + "Nasıl Anlaşılır?" section for the
// /ihtiyaciniza-gore/orta-derece-isitme-kaybi page. Renders through the
// shared BrandPageIntro component. Paragraph 3 is the load-bearing
// disclaimer: this page is general information, not a self-diagnosis
// tool — the only way to confirm degree and type is a proper audiometric
// test.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const ortaDereceIsitmeKaybiIntro: BrandPageIntroContent = {
  badge: "ORTA DERECE İŞİTME KAYBI NEDİR?",
  heading: "Orta Derece İşitme Kaybı Nedir ve Nasıl Anlaşılır?",
  paragraphs: [
    "Orta derece işitme kaybı, uluslararası sınıflandırmaya göre 41-55 desibel (dB) işitme eşiği aralığını ifade eden bir işitme kaybı derecesidir.",
    "Bu derecedeki kayıp genellikle normal ses tonundaki konuşmaları takip etmekte belirgin zorluk, televizyon veya radyo sesini sıkça yükseltme ihtiyacı ve grup sohbetlerinde geride kalma hissi olarak kendini gösterir.",
    "Kesin derece ve tip, yalnızca bir odyometrist tarafından yapılan işitme testi (odyometri) ile belirlenebilir; bu sayfa genel bir bilgilendirme amacı taşır, kendi kendine tanı koymak için kullanılmamalıdır.",
    "Orta derece işitme kaybı olan kişiler, genellikle hafif dereceye göre cihazlandırmayı daha belirgin bir ihtiyaç olarak fark eder.",
  ],
  stats: [
    { value: "41-55 dB", label: "İşitme Eşiği Aralığı" },
    { value: "Normal Ton Konuşma", label: "Sıkça Etkilenen Alan" },
    { value: "Odyometri ile Belirlenir", label: "Kesin Tanı Yöntemi" },
    { value: "Standart RIC / BTE", label: "Sıkça Tercih Edilen Modeller" },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
