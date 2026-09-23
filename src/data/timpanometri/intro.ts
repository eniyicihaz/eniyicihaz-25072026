// "Timpanometri Nedir ve Neyi Değerlendirir?" section for the
// /degerlendirme/timpanometri page. Renders through the shared
// BrandPageIntro component. Same health-content safety discipline as
// the two prior pages — paragraph 4 is the load-bearing disclaimer:
// general information, not a self-diagnosis tool.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const timpanometriIntro: BrandPageIntroContent = {
  badge: "TİMPANOMETRİ NEDİR?",
  heading: "Timpanometri Nedir ve Neyi Değerlendirir?",
  paragraphs: [
    "Timpanometri, orta kulaktaki hava basıncını ve kulak zarının (timpanik membran) hareketliliğini ölçen objektif bir testtir.",
    "Test sırasında kulak kanalına yerleştirilen küçük bir prob, hava basıncını değiştirerek kulak zarının bu değişime verdiği tepkiyi ölçer; sonuçlar bir timpanogram üzerinde kaydedilir.",
    "Timpanometri, orta kulaktaki sıvı birikimi, kulak zarı hareket bozuklukları veya östaki borusu işlev bozukluğu gibi durumların tespitine yardımcı olabilir; ancak kesin tanı için bir KBB uzmanının değerlendirmesi gerekir.",
    "Bu sayfa genel bir bilgilendirme amacı taşır, kendi kendine tanı koymak için kullanılmamalıdır; timpanometri sonuçları her zaman diğer test bulgularıyla birlikte bir uzman tarafından yorumlanmalıdır.",
  ],
  stats: [
    { value: "Objektif Test", label: "Test Türü" },
    { value: "Birkaç Saniye", label: "Uygulama Süresi" },
    { value: "Timpanogram", label: "Sonuç Grafiği" },
    { value: "Odyometriyi Tamamlar", label: "Kullanım Amacı" },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
};
