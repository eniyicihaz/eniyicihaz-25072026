// "Katkı Payını Etkileyen Faktörler" teaser grid for the
// /sgk/katki-payi page. Renders through the shared BrandPageTechnology
// component (6-card grid), same technique every prior series'
// use-cases.ts uses, here scoped to the concrete factors that shape
// your final contribution amount — no specific TL figures, consistent
// with this page's accuracy discipline.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const sgkKatkiPayiUseCases: BrandPageTechnologyContent = {
  badge: "KATKI PAYINI ETKİLEYEN FAKTÖRLER",
  heading: "Katkı Payınızı Etkileyen Faktörler Nelerdir?",
  intro: "Ödeyeceğiniz katkı payını şekillendiren faktörlere daha yakından bakalım.",
  items: [
    {
      label: "YAŞ GRUBU",
      title: "Yaş Grubunuz",
      description: "SGK destek tutarları, farklı yaş grupları için farklı şekilde belirlenir.",
    },
    {
      label: "ÇALIŞMA DURUMU",
      title: "Çalışan veya Emekli Olmanız",
      description: "Emekliler için destek tutarı genellikle daha yüksektir, ancak bir kesinti uygulanabilir.",
    },
    {
      label: "CİHAZ FİYATI",
      title: "Seçtiğiniz Cihazın Fiyatı",
      description: "SGK destek tutarını aşan fiyat farkı, katkı payınızı doğrudan etkiler.",
    },
    {
      label: "ANLAŞMALI MERKEZ",
      title: "SGK Anlaşmalı Merkez Tercihi",
      description: "Destekten yararlanmak için cihazın anlaşmalı bir merkezden temin edilmesi gerekir.",
    },
    {
      label: "PİL DESTEĞİ",
      title: "Yıllık Pil Desteği",
      description: "Cihaz desteğine ek olarak, düzenli pil ihtiyacınız için de ayrı bir destek uygulanır.",
    },
    {
      label: "RAPOR GEÇERLİLİĞİ",
      title: "Rapor ve Reçete Geçerlilik Süresi",
      description: "Geçerli bir rapor ve reçete olmadan katkı payı hesaplaması uygulanamaz.",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
  accentColorHoverBorder: "rgb(22 163 74 / 0.5)",
};
