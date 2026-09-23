// "Aksesuarlarınızı Yenilerken İzlenecek Adımlar" section for the
// /neden-orijinal/orijinal-aksesuar page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — repurposed here, same
// technique used on the three prior pages, as an ordered set of
// accessory-renewal steps rather than a severity ladder or process for
// a different subject.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const orijinalAksesuarEvolution: BrandPageTechEvolutionContent = {
  badge: "AKSESUAR YENİLEME ADIMLARI",
  heading: "Aksesuarlarınızı Yenilerken İzlenecek Adımlar",
  intro: "Aksesuar ihtiyacınızı doğru şekilde karşılamak için izleyebileceğiniz dört adımlık bir süreci bir araya getirdik.",
  stages: [
    {
      era: "Cihaz Modelinizi Belirleyin",
      whatItBrought: "Aksesuar ihtiyacınızı doğru belirlemek için cihazınızın marka ve model bilgisini kontrol edin.",
      bestFor: "Sürecin ilk adımı",
      families: ["Model Tespiti"],
    },
    {
      era: "İhtiyacınıza Uygun Aksesuarı Seçin",
      whatItBrought: "Kulak ucu, filtre, pil veya şarj aksesuarı gibi ihtiyacınıza uygun orijinal ürünü belirleyin.",
      bestFor: "Doğru aksesuar seçimi",
      families: ["Aksesuar Seçimi"],
    },
    {
      era: "Yetkili Kanaldan Temin Edin",
      whatItBrought: "Seçtiğiniz aksesuarı yetkili satış noktasından orijinal olarak temin edin.",
      bestFor: "Orijinallik güvencesi",
      families: ["Yetkili Temin"],
    },
    {
      era: "Düzenli Değişim Takvimi Oluşturun",
      whatItBrought: "Filtre ve kulak ucu gibi sarf malzemelerini önerilen sıklıkta değiştirerek performansı koruyun.",
      bestFor: "Uzun vadeli bakım",
      families: ["Düzenli Değişim"],
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
