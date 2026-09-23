// "Tinnitus Değerlendirmesi Nedir ve Neyi Kapsar?" section for the
// /degerlendirme/tinnitus-degerlendirme page. Renders through the
// shared BrandPageIntro component. Same health-content safety
// discipline as every prior Değerlendirme page — final paragraph is the
// load-bearing disclaimer: general information, not a self-diagnosis
// tool.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const tinnitusDegerlendirmeIntro: BrandPageIntroContent = {
  badge: "TİNNİTUS DEĞERLENDİRMESİ NEDİR?",
  heading: "Tinnitus Değerlendirmesi Nedir ve Neyi Kapsar?",
  paragraphs: [
    "Tinnitus değerlendirmesi, dışarıdan bir ses kaynağı olmadan duyulan çınlama, uğultu veya vınlama gibi şikayetlerin olası nedenlerini araştırmaya yönelik kapsamlı bir işitme muayenesidir.",
    "Değerlendirme; şikayetinizin öyküsünü almakla başlar, odyometrik işitme testiyle devam eder ve tinnitus'un perdesini ile şiddetini ölçen eşleştirme yöntemleriyle tamamlanır.",
    "Tinnitus, tek başına bir hastalık değil; işitme kaybı, kulak enfeksiyonu, gürültüye maruziyet veya bazı ilaçlar gibi farklı nedenlere işaret edebilen bir semptomdur.",
    "Bu sayfa genel bir bilgilendirme amacı taşır, kendi kendine tanı koymak için kullanılmamalıdır; tinnitus şikayetinizin nedeni yalnızca bir odyometrist ve gerektiğinde bir KBB uzmanı tarafından değerlendirilebilir.",
  ],
  stats: [
    { value: "Detaylı Öykü", label: "İlk Adım" },
    { value: "Odyometri + Eşleştirme", label: "Test Kapsamı" },
    { value: "THI Anketi", label: "Etki Ölçümü" },
    { value: "Gerekirse KBB", label: "Yönlendirme" },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
