// "Doğru Pil veya Aksesuarı Nasıl Seçersiniz?" section for the
// /servis-bakim/pil-aksesuar page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — repurposed here as a
// selection-guide sequence rather than a clinic-appointment sequence,
// same flexible reuse technique as Cihaz Temizliği's own daily-routine
// framing.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const pilAksesuarEvolution: BrandPageTechEvolutionContent = {
  badge: "SEÇİM REHBERİ",
  heading: "Doğru Pil veya Aksesuarı Nasıl Seçersiniz?",
  intro: "Cihaz modelinizi belirlemekten kullanım rehberliğine kadar izlenen beş adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "Cihaz Modelinizi Belirleme",
      whatItBrought: "Cihazınızın marka ve modeli, uygun pil ve aksesuar seçeneklerini belirlemenin ilk adımıdır.",
      bestFor: "Sürecin ilk adımı",
      families: ["Model Belirleme"],
    },
    {
      era: "İhtiyacınızı Tanımlama",
      whatItBrought: "Pil mi, saklama kutusu mu, yoksa yedek parça mı ihtiyacınız olduğunu birlikte netleştiririz.",
      bestFor: "İhtiyaç tanımlama",
      families: ["İhtiyaç Belirleme"],
    },
    {
      era: "Uyumluluk Kontrolü",
      whatItBrought: "Seçtiğiniz ürünün cihazınızla uyumlu olduğu kontrol edilir.",
      bestFor: "Doğru seçim",
      families: ["Uyumluluk Kontrolü"],
    },
    {
      era: "Seçim ve Deneme",
      whatItBrought: "Şarjlı sisteme geçiş gibi büyük kararlar için, mümkünse önce deneme fırsatı sunulur.",
      bestFor: "Karar desteği",
      families: ["Deneme Fırsatı"],
    },
    {
      era: "Kullanım Rehberliği",
      whatItBrought: "Seçtiğiniz ürünü doğru şekilde nasıl kullanacağınız size gösterilir.",
      bestFor: "Sürecin tamamlanması",
      families: ["Kullanım Rehberliği"],
    },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
};
