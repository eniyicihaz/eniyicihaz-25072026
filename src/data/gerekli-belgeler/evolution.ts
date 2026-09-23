// "Belgelerinizi Nasıl Hazırlarsınız?" section for the
// /sgk/gerekli-belgeler page. Reuses the shared BrandPageTechEvolution
// component in its original "stage" sense (era / what it brought / who
// it's for / tags) — repurposed here as the document-gathering sequence.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const gerekliBelgelerEvolution: BrandPageTechEvolutionContent = {
  badge: "HAZIRLIK ADIMLARI",
  heading: "Belgelerinizi Nasıl Hazırlarsınız?",
  intro: "Temel belgelerin toplanmasından randevuya gelmenize kadar izlenen dört adımı bir araya getirdik.",
  stages: [
    {
      era: "Rapor ve Reçetenin Tamamlanması",
      whatItBrought: "Sağlık kurulu raporunuz ve reçeteniz, başvurunun temelini oluşturan ilk iki belgedir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Rapor ve Reçete"],
    },
    {
      era: "Kimlik ve SGK Bilgilerinin Kontrolü",
      whatItBrought: "Kimlik belgeniz ve SGK'ya kayıtlı bilgilerinizin güncel olduğundan emin olunur.",
      bestFor: "Kimlik doğrulama",
      families: ["Kimlik Belgeleri"],
    },
    {
      era: "Duruma Özel Ek Belgelerin Belirlenmesi",
      whatItBrought: "Çocuk, emekli veya yenileme durumuna göre gerekebilecek ek belgeler netleştirilir.",
      bestFor: "Ek belge tespiti",
      families: ["Ek Belgeler"],
    },
    {
      era: "Belgelerin Randevuya Getirilmesi",
      whatItBrought: "Tüm belgeler bir araya getirilerek randevunuzda merkezimize veya SGK anlaşmalı hastaneye iletilir.",
      bestFor: "Sürecin tamamlanması",
      families: ["Randevu"],
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
