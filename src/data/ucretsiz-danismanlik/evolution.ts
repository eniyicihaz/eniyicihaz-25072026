// "Ücretsiz Danışmanlık Süreci Nasıl İşler?" section for the
// /neden-orijinal/ucretsiz-danismanlik page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — repurposed here, same
// technique used on the four prior pages, as an ordered set of
// consultancy-process steps rather than a severity ladder or a
// different process for another subject.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const ucretsizDanismanlikEvolution: BrandPageTechEvolutionContent = {
  badge: "DANIŞMANLIK SÜRECİ",
  heading: "Ücretsiz Danışmanlık Süreci Nasıl İşler?",
  intro: "Randevunuzdan cihaz kararına kadar izlenen dört adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "Ücretsiz İşitme Testi",
      whatItBrought: "Odyometrist eşliğinde yapılan işitme testiyle mevcut durumunuz değerlendirilir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Odyometri"],
    },
    {
      era: "İhtiyaç ve Yaşam Tarzı Değerlendirmesi",
      whatItBrought: "Günlük yaşamınız, kullanım alışkanlıklarınız ve önceliklerinize göre ihtiyaçlarınız belirlenir.",
      bestFor: "Kişiye özel öneri temeli",
      families: ["İhtiyaç Analizi"],
    },
    {
      era: "Cihaz Önerisi ve Demo Deneyimi",
      whatItBrought: "Size uygun cihaz seçenekleri sunulur ve karar öncesinde deneme imkânı sağlanır.",
      bestFor: "Bilinçli karar verme",
      families: ["Demo Deneyimi"],
    },
    {
      era: "SGK ve Fiyat Bilgilendirmesi",
      whatItBrought: "SGK desteği ve fiyatlandırma hakkında net bilgi verilir.",
      bestFor: "Şeffaf karar süreci",
      families: ["SGK ve Fiyat Bilgisi"],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
