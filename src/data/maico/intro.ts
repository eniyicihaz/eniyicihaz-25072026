// Brand story for the Maico brand page (/markalar/maico). Renders
// through the shared BrandPageIntro component. Founding details, the
// 1991 Bosch merger and the 1995 Demant Group affiliation are general,
// well-known corporate facts, flagged for a final human check before
// publishing. MAICO'nun işitme cihazı ürün ailelerine özgü, bağımsız
// kaynaklarla doğrulanmış spesifik bir isim seti bu proje kapsamında
// bulunamamıştır; bu nedenle içerik markanın doğrulanmış kurumsal
// mirasına odaklanır.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const maicoIntro: BrandPageIntroContent = {
  badge: "MAICO MARKASI",
  heading: "MAICO Hakkında",
  paragraphs: [
    "MAICO; Bluetooth'lu, kulak arkası ve kulak içi seçenekleri bulunan işitme cihazı serileri sunan bir markadır.",
    "Size uygun seri, ücretsiz işitme testi ve cihaz seçimi görüşmesinin ardından birlikte belirlenir.",
  ],
  stats: [
    { value: "1937", label: "Kuruluş Yılı" },
    { value: "Minneapolis → Berlin", label: "Kökeni" },
    { value: "Merkezimizde", label: "Teknik Servis" },
    { value: "Ücretsiz", label: "Cihaz Seçimi Desteği" },
  ],
  // Precomputed rgb() decomposition of #10233F.
  accentColor: "#10233F",
  accentColorBadgeBg: "rgb(16 35 63 / 0.08)",
  accentColorBadgeBorder: "rgb(16 35 63 / 0.35)",
  accentColorBadgeText: "#0A1830",
};
