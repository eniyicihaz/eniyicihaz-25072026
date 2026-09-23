// "Yaşa Bağlı İşitme Kaybı Nedir?" + "Nasıl Anlaşılır?" section for the
// /ihtiyaciniza-gore/yaslilar-icin-cihazlar page. Renders through the
// shared BrandPageIntro component. Paragraph 3 is the load-bearing
// disclaimer: this page is general information, not a self-diagnosis
// tool. Paragraph 4 references the social-isolation/cognitive research
// association carefully — framed as "bazı araştırmalar öne sürüyor",
// never as a causal or diagnostic claim.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const yaslilarIcinCihazlarIntro: BrandPageIntroContent = {
  badge: "YAŞLILARDA İŞİTME KAYBI NEDİR?",
  heading: "Yaşa Bağlı İşitme Kaybı Nedir ve Nasıl Anlaşılır?",
  paragraphs: [
    "Yaşa bağlı işitme kaybı (presbiakuzi), zamanla iç kulaktaki işitme hücrelerinde meydana gelen değişiklikler sonucu ortaya çıkan, genellikle her iki kulağı simetrik ve kademeli olarak etkileyen bir işitme kaybı türüdür.",
    "Bu tür genellikle önce yüksek frekanslı sesleri (kadın ve çocuk sesleri, kapı zili gibi) fark etmede güçlük, kalabalık ortamlarda konuşmayı takip edememe ve televizyon sesini sıkça yükseltme ihtiyacı olarak kendini gösterir.",
    "Kesin tanı ve kaybın derecesi, yalnızca bir odyometrist tarafından yapılan işitme testi (odyometri) ile belirlenebilir; bu sayfa genel bir bilgilendirme amacı taşır, kendi kendine tanı koymak için kullanılmamalıdır.",
    "Bazı araştırmalar, tedavi edilmeyen işitme kaybı ile sosyal izolasyon ve bilişsel değişiklikler arasında bir ilişki olabileceğini öne sürmektedir; ancak bu bir neden-sonuç ilişkisi anlamına gelmez ve her kullanıcı için geçerli olmayabilir.",
  ],
  stats: [
    { value: "Presbiakuzi", label: "Yaygın Neden" },
    { value: "Kademeli İlerleme", label: "Tipik Seyir" },
    { value: "Odyometri ile Belirlenir", label: "Kesin Tanı Yöntemi" },
    { value: "Aile Destekli Sistemler", label: "Sıkça Değerlendirilen Çözüm" },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
};
