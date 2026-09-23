// "Premium Seri İşitme Cihazları Nedir?" section for the
// /segmentler/premium-seri page. Renders through the shared
// BrandPageIntro component. Unlike the "Neden Orijinal" series, this
// page is back to a candidacy/fit topic (like the İhtiyacınıza Göre
// pages) rather than a trust topic — paragraph 4 states the practical
// takeaway: tier fit is a joint decision with an odyometrist, not a
// self-diagnosis.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const premiumSeriIntro: BrandPageIntroContent = {
  badge: "PREMIUM SERİ NEDİR?",
  heading: "Premium Seri İşitme Cihazları Nedir?",
  paragraphs: [
    "Premium seri, bir markanın sunduğu en üst düzey teknolojiyi, en gelişmiş ses işleme algoritmalarını ve en kapsamlı bağlantı özelliklerini bir araya getiren ürün ailesini ifade eder.",
    "Bu seride yer alan cihazlar; karmaşık dinleme ortamlarında bile net ses ayrımı, otomatik ortam algılama ve yapay zeka destekli kişiselleştirme gibi özellikler sunar.",
    "Premium seri, genellikle markaların en güncel nesil teknolojisini temsil eder ve standart veya ekonomik serilere göre daha kapsamlı bir özellik setine sahiptir.",
    "Size uygun serinin premium olup olmadığı, işitme kaybınızın derecesi, günlük yaşam tarzınız ve bütçeniz göz önünde bulundurularak bir odyometrist ile birlikte belirlenmelidir.",
  ],
  stats: [
    { value: "En Güncel Teknoloji", label: "Teknoloji Seviyesi" },
    { value: "Tam Bağlantı", label: "Kablosuz Özellikler" },
    { value: "Yapay Zeka Destekli", label: "Ses İşleme" },
    { value: "En Kapsamlı Garanti", label: "Güvence" },
  ],
  accentColor: "#eab308",
  accentColorBadgeBg: "rgb(234 179 8 / 0.08)",
  accentColorBadgeBorder: "rgb(234 179 8 / 0.35)",
  accentColorBadgeText: "#a16207",
};
