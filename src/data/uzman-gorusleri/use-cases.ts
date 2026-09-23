// "Diğer Yaygın Sorular ve Kısa Yanıtları" teaser grid for the
// /blog/uzman-gorusleri page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here covering additional common
// misconceptions distinct from the five in evolution.ts, to avoid
// duplication within the same page. General audiological consensus
// only, hedged language.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const uzmanGorusleriUseCases: BrandPageTechnologyContent = {
  badge: "DİĞER YAYGIN SORULAR",
  heading: "Sık Karşılaştığımız Diğer Sorular",
  intro: "Kliniğimizde sıkça duyduğumuz birkaç soruyu ve genel yanıtlarını daha bir araya getirdik.",
  items: [
    {
      label: "TEK KULAK YETERLİ Mİ?",
      title: "\"Tek kulakta cihaz kullanmak yeterli mi?\"",
      description: "İki kulakta da işitme kaybı varsa, genellikle her iki kulağın da desteklenmesi önerilir; kesin öneri kişisel değerlendirmeye göre değişir.",
    },
    {
      label: "GENÇLERDE İŞİTME KAYBI",
      title: "\"İşitme kaybı sadece genetik midir?\"",
      description: "Genetik faktörlerin yanı sıra yüksek sesli ortamlara maruz kalma gibi çevresel etkenler de işitme kaybına katkıda bulunabilir.",
    },
    {
      label: "CİHAZA ALIŞMA SÜRESİ",
      title: "\"Cihaza alışmak uzun sürer mi?\"",
      description: "Alışma süresi kişiden kişiye değişir; detaylı bilgi için Uyum Süreci sayfamızı inceleyebilirsiniz.",
    },
    {
      label: "TİNNİTUS VE İŞİTME KAYBI",
      title: "\"Kulak çınlaması her zaman işitme kaybı anlamına mı gelir?\"",
      description: "Tinnitus işitme kaybıyla ilişkili olabilir, ancak tek başına işitme kaybı olduğu anlamına gelmez; ayrı bir değerlendirme gerektirir.",
    },
    {
      label: "CİHAZ FİYATI VE KALİTE",
      title: "\"En pahalı cihaz her zaman en iyisi midir?\"",
      description: "En uygun cihaz, fiyatından çok kişinin işitme kaybına ve yaşam tarzına uygunluğuyla belirlenir.",
    },
    {
      label: "SGK VE MARKA SEÇİMİ",
      title: "\"SGK desteği sadece belirli markalarda mı geçerli?\"",
      description: "SGK desteği marka bazında değil, belirlenen teknik kriterlere göre uygulanır.",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorHoverBorder: "rgb(124 58 237 / 0.5)",
};
