// "Tinnitus Desteği Nedir?" + "Nasıl Çalışır?" section for the
// /teknolojiler/tinnitus-cozumleri page. Renders through the shared
// BrandPageIntro component. Paragraph 1 explicitly frames tinnitus as a
// symptom requiring medical evaluation, and paragraph 2 explicitly states
// the built-in feature is a support option, not a treatment — same
// restraint the site applies everywhere else, but foregrounded here given
// the health-adjacent subject.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const tinnitusCozumleriIntro: BrandPageIntroContent = {
  badge: "TİNNİTUS DESTEĞİ NEDİR?",
  heading: "Tinnitus Desteği Nedir ve Nasıl Çalışır?",
  paragraphs: [
    "Tinnitus (kulak çınlaması), dışarıdan bir ses kaynağı olmadan algılanan çınlama, uğultu veya ıslık sesi hissidir; birçok farklı nedeni olabilir ve mutlaka bir kulak burun boğaz uzmanı değerlendirmesi gerektirir.",
    "İşitme cihazlarındaki tinnitus destek özelliği bir tedavi veya iyileştirme yöntemi değildir; hafif ve rahatlatıcı sesler üreterek çınlamanın fark edilme düzeyini azaltmaya yardımcı olmayı hedefleyen bir destek seçeneğidir.",
    "Bu özellik belirli bir fiziksel cihaz tipi değildir; hem kulak arkası (BTE/RIC) hem de kulak içi (ITE/ITC) ailelerinde sunulabilen bir ses üreteci teknolojisidir.",
    "Ses türü, seviyesi ve kullanım programı, işitme profilinize ve tercihlerinize göre bir odyometrist tarafından belirlenir.",
  ],
  stats: [
    { value: "Beyaz Gürültü, Doğa Sesleri, Fraktal Ton", label: "Yaygın Ses Türleri" },
    { value: "Kişiye Özel Ayarlanır", label: "Ses Seviyesi ve Türü" },
    { value: "Destek Amaçlı", label: "Kullanım Amacı" },
    { value: "Odyometrist Değerlendirmesi Gerekir", label: "Öncelikli Adım" },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
};
