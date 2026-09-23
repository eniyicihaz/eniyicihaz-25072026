// "SGK Katkı Payı Nedir?" section for the /sgk/katki-payi page.
// Renders through the shared BrandPageIntro component. Paragraph 4 is
// the load-bearing accuracy disclaimer — deliberately points to the
// real SGK pillar page for current TL figures rather than restating
// any dated amount here. See hero.ts for the full rationale.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const sgkKatkiPayiIntro: BrandPageIntroContent = {
  badge: "SGK KATKI PAYI NEDİR?",
  heading: "SGK Katkı Payı Nedir?",
  paragraphs: [
    "SGK, uygunluk şartlarını karşılayan sigortalılar için işitme cihazı alımında belirli bir destek tutarı sağlar; bu tutar, yaş grubunuza ve çalışan veya emekli olma durumunuza göre değişir.",
    "Seçtiğiniz cihazın fiyatı, SGK'nın sağladığı destek tutarının üzerindeyse, aradaki fark katkı payı olarak sizin tarafınızdan karşılanır.",
    "Emekliler için destek tutarı genellikle daha yüksektir; ancak bu tutarın bir kısmı, SGK tarafından belirlenen bir oranda maaştan kesinti olarak uygulanabilir.",
    "Bu sayfa, katkı payının nasıl hesaplandığını genel hatlarıyla anlatır; güncel SGK destek tutarları zaman içinde değişebileceğinden, en güncel rakamlar için SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi sayfamızı inceleyebilirsiniz.",
  ],
  stats: [
    { value: "Yaş Grubuna Göre", label: "Destek Tutarı" },
    { value: "Çalışan / Emekli Ayrımı", label: "Kategori Farkı" },
    { value: "Cihaz Fiyatı - SGK Desteği", label: "Katkı Payı Formülü" },
    { value: "Güncel Rakamlar SGK Rehberinde", label: "Kesin Tutar" },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
