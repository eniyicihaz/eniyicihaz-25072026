// Brand story for the ReSound brand page (/markalar/resound) — combines
// Oticon's separate About+Heritage sections into one, same pattern used
// for Phonak, Signia and Widex. Renders through the shared BrandPageIntro
// component. Founding details and GN Group affiliation are general,
// well-known corporate facts, flagged for a final human check before
// publishing.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const resoundIntro: BrandPageIntroContent = {
  badge: "RESOUND MARKASI",
  heading: "ReSound İşitme Cihazları Hakkında",
  paragraphs: [
    "ReSound, kökleri 1943 yılında Danavox adıyla kurulan, bugün Danimarka merkezli GN Grubu'na bağlı bir işitme cihazı markasıdır.",
    "Marka, kablosuz bağlantı teknolojilerinde erken adım atan yaklaşımıyla tanınır; ReSound Nexia, Auracast (Bluetooth LE Audio) yayın sesi desteğini sunan ilk işitme cihazı ailelerinden biri olmuştur.",
    "Vivia, Nexia, Omnia, Savi, ENZO Q ve Key gibi ürün ailelerinde bu yaklaşım, kullanıcının işitme ihtiyacına ve bağlantı beklentisine göre şekillenir.",
  ],
  stats: [
    { value: "1943", label: "Kuruluş Yılı (Danavox)" },
    { value: "Danimarka", label: "Kökeni" },
    { value: "GN Grubu", label: "Bağlı Olduğu Grup" },
    { value: "Auracast", label: "Öncü Olduğu Teknoloji" },
  ],
  // Precomputed rgb() decomposition of #AA1835 — kept distinct from
  // Oticon's green, Phonak's blue, Signia's purple and Widex's teal.
  accentColor: "#AA1835",
  accentColorBadgeBg: "rgb(170 24 53 / 0.08)",
  accentColorBadgeBorder: "rgb(170 24 53 / 0.35)",
  accentColorBadgeText: "#8B1330",
};
