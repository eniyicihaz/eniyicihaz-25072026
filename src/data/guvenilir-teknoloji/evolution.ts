// "Bir Cihazın Orijinalliğini Nasıl Doğrularsınız?" section for the
// /neden-orijinal/guvenilir-teknoloji page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — repurposed here, same
// technique used on the need-based pages, as an ordered set of
// verification steps rather than a severity ladder or feature-priority
// list.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const guvenilirTeknolojiEvolution: BrandPageTechEvolutionContent = {
  badge: "ORİJİNALLİK DOĞRULAMA ADIMLARI",
  heading: "Bir Cihazın Orijinalliğini Nasıl Doğrularsınız?",
  intro: "Satın alma öncesi ve sonrasında izleyebileceğiniz dört adımlık bir doğrulama sürecini bir araya getirdik.",
  stages: [
    {
      era: "Yetkili Bayi Kontrolü",
      whatItBrought: "Ürünü satın almadan önce satıcının markanın resmi yetkili bayi listesinde yer aldığını kontrol edin.",
      bestFor: "Satın alma öncesi ilk adım",
      families: ["Yetkili Bayi Listesi"],
    },
    {
      era: "Fatura ve Garanti Belgesi",
      whatItBrought: "Orijinal ürünler faturalı satılır ve üretici garanti belgesiyle birlikte teslim edilir.",
      bestFor: "Satın alma sırasında kontrol edilecek belgeler",
      families: ["Faturalı Satış"],
    },
    {
      era: "Seri Numarası Doğrulama",
      whatItBrought: "Cihazın seri numarası, üreticinin resmi sistemi üzerinden sorgulanarak orijinalliği teyit edilebilir.",
      bestFor: "Satın alma sonrası doğrulama",
      families: ["Seri Numarası Sorgulama"],
    },
    {
      era: "Resmi Kayıt ve Garanti Aktivasyonu",
      whatItBrought: "Cihazın üretici sistemine kaydedilmesi, garanti ve destek haklarının aktif olduğunu gösterir.",
      bestFor: "Uzun vadeli güvence",
      families: ["Garanti Kaydı"],
    },
  ],
  accentColor: "#1d4ed8",
  accentColorBadgeBg: "rgb(29 78 216 / 0.08)",
  accentColorBadgeBorder: "rgb(29 78 216 / 0.35)",
  accentColorBadgeText: "#1e40af",
};
