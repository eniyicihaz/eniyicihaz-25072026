// "Tek Taraflı İşitme Kaybı Nedir?" + "Nasıl Anlaşılır?" section for the
// /ihtiyaciniza-gore/tek-tarafli-isitme-kaybi page. Renders through the
// shared BrandPageIntro component. Paragraph 3 is the load-bearing
// disclaimer: this page is general information, not a self-diagnosis
// tool. Paragraph 4 is this page's one real departure from the sibling
// degree pages: sudden-onset unilateral loss is flagged as a genuine
// urgent-care scenario, not just "see a professional eventually".

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const tekTarafliIsitmeKaybiIntro: BrandPageIntroContent = {
  badge: "TEK TARAFLI İŞİTME KAYBI NEDİR?",
  heading: "Tek Taraflı İşitme Kaybı Nedir ve Nasıl Anlaşılır?",
  paragraphs: [
    "Tek taraflı işitme kaybı (unilateral işitme kaybı), bir kulakta normal veya normale yakın işitme sürerken diğer kulakta hafif ile çok ileri derece arasında değişebilen bir işitme kaybı olması durumudur.",
    "Bu tür genellikle sesin geldiği yönü belirlemekte güçlük, gürültülü ortamlarda konuşmayı takip edememe ve kötü duyan taraftan gelen seslerin fark edilmemesi (baş gölgesi etkisi) olarak kendini gösterir.",
    "Kesin tanı ve kaybın derecesi, yalnızca bir odyometrist tarafından yapılan işitme testi (odyometri) ile belirlenebilir; bu sayfa genel bir bilgilendirme amacı taşır, kendi kendine tanı koymak için kullanılmamalıdır.",
    "Ani başlayan tek taraflı işitme kaybı, acil bir kulak burun boğaz değerlendirmesi gerektirebilir; bu nedenle ani gelişen kayıplarda vakit kaybetmeden bir uzmana başvurulması önemlidir.",
  ],
  stats: [
    { value: "Tek Kulak", label: "Etkilenen Taraf" },
    { value: "Baş Gölgesi Etkisi", label: "Sıkça Yaşanan Zorluk" },
    { value: "Odyometri ile Belirlenir", label: "Kesin Tanı Yöntemi" },
    { value: "CROS / BiCROS", label: "Sıkça Değerlendirilen Sistemler" },
  ],
  accentColor: "#52525b",
  accentColorBadgeBg: "rgb(82 82 91 / 0.08)",
  accentColorBadgeBorder: "rgb(82 82 91 / 0.35)",
  accentColorBadgeText: "#3f3f46",
};
