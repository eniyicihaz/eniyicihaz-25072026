// "Hafif İşitme Kaybı Nedir?" + "Nasıl Anlaşılır?" section for the
// /ihtiyaciniza-gore/hafif-isitme-kaybi page. Renders through the shared
// BrandPageIntro component. Paragraph 3 is the load-bearing disclaimer:
// this page is general information, not a self-diagnosis tool — the only
// way to confirm degree and type is a proper audiometric test.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const hafifIsitmeKaybiIntro: BrandPageIntroContent = {
  badge: "HAFİF İŞİTME KAYBI NEDİR?",
  heading: "Hafif İşitme Kaybı Nedir ve Nasıl Anlaşılır?",
  paragraphs: [
    "Hafif işitme kaybı, uluslararası sınıflandırmaya göre 26-40 desibel (dB) işitme eşiği aralığını ifade eden bir işitme kaybı derecesidir.",
    "Bu derecedeki kayıp genellikle fısıltı sesini, uzak mesafeden gelen konuşmaları veya kalabalık ortamlarda sessiz sesli konuşmaları duymakta güçlük olarak kendini gösterir.",
    "Kesin derece ve tip, yalnızca bir odyometrist tarafından yapılan işitme testi (odyometri) ile belirlenebilir; bu sayfa genel bir bilgilendirme amacı taşır, kendi kendine tanı koymak için kullanılmamalıdır.",
    "Hafif derecede işitme kaybı olan birçok kişi, farkında olmadan sesleri daha yüksek sesle dinleme veya karşısındakinden tekrar etmesini isteme gibi alışkanlıklar geliştirebilir.",
  ],
  stats: [
    { value: "26-40 dB", label: "İşitme Eşiği Aralığı" },
    { value: "Fısıltı ve Uzak Ses", label: "Sıkça Etkilenen Alan" },
    { value: "Odyometri ile Belirlenir", label: "Kesin Tanı Yöntemi" },
    { value: "İnce RIC / CIC", label: "Sıkça Tercih Edilen Modeller" },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
