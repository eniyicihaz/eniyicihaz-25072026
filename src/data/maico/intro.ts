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
    "MAICO, 1937 yılında Minneapolis'te, işitme test cihazlarını daha kullanılabilir hale getirmek amacıyla kuruldu ve \"audiometer\" (odyometre) terimini literatüre kazandıran şirket olarak bilinir.",
    "1991'de Robert Bosch GmbH'nin odyoloji bölümüyle birleşen MAICO, 1995 yılında Demant Grubu'na (Oticon, Bernafon ve Sonic ile aynı çatı) katıldı.",
    "Bugün Berlin merkezli MAICO Diagnostics GmbH, odyolojik ölçüm cihazlarındaki köklü mirasını Demant Grubu'nun işitme cihazı mühendisliğiyle bir araya getirir.",
  ],
  stats: [
    { value: "1937", label: "Kuruluş Yılı" },
    { value: "Minneapolis → Berlin", label: "Kökeni" },
    { value: "Demant Grubu", label: "Bağlı Olduğu Grup (1995'ten bu yana)" },
    { value: "1991", label: "Bosch Odyoloji Bölümüyle Birleşme" },
  ],
  // Precomputed rgb() decomposition of #10233F.
  accentColor: "#10233F",
  accentColorBadgeBg: "rgb(16 35 63 / 0.08)",
  accentColorBadgeBorder: "rgb(16 35 63 / 0.35)",
  accentColorBadgeText: "#0A1830",
};
