// Brand story for the Audifon brand page (/markalar/audifon). Renders
// through the shared BrandPageIntro component. KIND-Grubu ilişkisi ve
// Kölleda/Thüringen üretim merkezi bilgisi bağımsız kaynaklarla
// doğrulanmıştır; yayından önce son bir insan kontrolü önerilir.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const audifonIntro: BrandPageIntroContent = {
  badge: "AUDIFON MARKASI",
  heading: "Audifon Hakkında",
  paragraphs: [
    "Audifon, Almanya'nın işitme akustiği alanındaki en büyük aile işletmesi olan KIND-Grubu'na bağlı bir markadır.",
    "Ürünler, Kölleda/Thüringen'deki üretim merkezinde Ar-Ge'den seri üretime kadar %100 Almanya'da geliştirilir ve üretilir; 65'ten fazla ülkeye ulaştırılır.",
    "Audifon, Cosma Chip Technology üzerine kurulu rega ve sino serisi işitme sistemlerinin yanı sıra, tinnitus'a özel Sueno Pro çözümüyle de bilinir.",
  ],
  stats: [
    { value: "KIND-Grubu", label: "Bağlı Olduğu Grup" },
    { value: "Kölleda, Almanya", label: "Üretim Merkezi" },
    { value: "65+", label: "Ülkeye Ulaşan Dağıtım Ağı" },
    { value: "Cosma Chip", label: "Öne Çıkan Teknoloji" },
  ],
  // Precomputed rgb() decomposition of #E2001A.
  accentColor: "#E2001A",
  accentColorBadgeBg: "rgb(226 0 26 / 0.08)",
  accentColorBadgeBorder: "rgb(226 0 26 / 0.35)",
  accentColorBadgeText: "#B50015",
};
