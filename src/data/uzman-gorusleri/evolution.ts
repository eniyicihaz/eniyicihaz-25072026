// "En Sık Duyulan 5 Yanlış Bilgi" section for the
// /blog/uzman-gorusleri page. Reuses the shared BrandPageTechEvolution
// component — repurposed here as a myth-vs-fact sequence rather than a
// chronological process: "era" holds the myth, "whatItBrought" holds
// the corrected general information. General audiological consensus
// only, hedged language, no diagnosis.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const uzmanGorusleriEvolution: BrandPageTechEvolutionContent = {
  badge: "EN SIK DUYULAN YANLIŞ BİLGİLER",
  heading: "En Sık Duyduğumuz 5 Yanlış Bilgi",
  intro: "Kliniğimizde en sık karşılaştığımız yanlış inanışları ve yerine bilinmesi gerekenleri bir araya getirdik.",
  stages: [
    {
      era: "\"İşitme cihazları sesi rahatsız edici şekilde yükseltir\"",
      whatItBrought: "Güncel cihazlar kişiye özel programlanır; amaç sesi rahatsız edici şekilde yükseltmek değil, ihtiyacınıza uygun, konforlu bir işitme deneyimi sunmaktır.",
      bestFor: "Konfor endişesi",
      families: ["Yanlış Bilgi #1"],
    },
    {
      era: "\"İşitme kaybı yalnızca yaşlılarda görülür\"",
      whatItBrought: "İşitme kaybı her yaş grubunda görülebilir; gürültüye maruz kalma, genetik faktörler ve bazı sağlık durumları gençlerde de etkili olabilir.",
      bestFor: "Yaş algısı",
      families: ["Yanlış Bilgi #2"],
    },
    {
      era: "\"İşitme cihazı kullanmak beni yaşlı gösterir\"",
      whatItBrought: "Günümüzde küçük, göze çarpmayan ve hatta görünmez model seçenekleri mevcuttur; detaylı bilgi için Görünmez (CIC) Cihazlar sayfamızı inceleyebilirsiniz.",
      bestFor: "Görünürlük endişesi",
      families: ["Yanlış Bilgi #3"],
    },
    {
      era: "\"Hafif işitme kaybında cihaza gerek yok, beklenebilir\"",
      whatItBrought: "Erken müdahale genellikle önerilir; işitme kaybının uzun süre desteklenmeden bırakılması, uyum sürecini zamanla zorlaştırabilir.",
      bestFor: "Erteleme eğilimi",
      families: ["Yanlış Bilgi #4"],
    },
    {
      era: "\"İşitme cihazı normal işitmeyi birebir geri getirir\"",
      whatItBrought: "İşitme cihazları işitmeyi önemli ölçüde destekler, ancak doğal işitmenin birebir aynısı değildir; bir uyum süreci gerektirir.",
      bestFor: "Beklenti yönetimi",
      families: ["Yanlış Bilgi #5"],
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
