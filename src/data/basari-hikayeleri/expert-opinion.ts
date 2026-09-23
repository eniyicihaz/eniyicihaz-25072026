// "Uzman Yorumu" section for the /blog/basari-hikayeleri page. Renders
// through the shared BrandPageExpertOpinion component. Framed as the
// clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every prior page, and especially important
// here given this page's content-integrity discipline (see hero.ts).

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const basariHikayeleriExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "En çok memnuniyet duyduğumuz an, bir kullanıcımızın ailesiyle daha rahat sohbet edebildiğini veya sosyal bir ortama yeniden katıldığını paylaştığı andır. Her sürecin kendine özgü olduğunu bilerek, bu deneyimin sizin için de mümkün olup olmadığını birlikte değerlendirebiliriz.",
  note: "Kendi deneyiminizin nasıl şekillenebileceğini öğrenmek için bizimle iletişime geçebilirsiniz.",
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
