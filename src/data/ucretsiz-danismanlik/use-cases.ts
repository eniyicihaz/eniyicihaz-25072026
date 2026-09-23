// "Ücretsiz Danışmanlık Sürecimizde Neler Sunuyoruz?" teaser grid for
// the /neden-orijinal/ucretsiz-danismanlik page. Renders through the
// shared BrandPageTechnology component (6-card grid), same technique
// the BTE page's use-cases.ts uses for everyday-scenario coverage, here
// scoped to the concrete consultancy scope Avrasya İşitme provides
// instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const ucretsizDanismanlikUseCases: BrandPageTechnologyContent = {
  badge: "DANIŞMANLIK KAPSAMI",
  heading: "Ücretsiz Danışmanlık Sürecimizde Neler Sunuyoruz?",
  intro: "Danışmanlık sürecinde sunduğumuz somut adımlara daha yakından bakalım.",
  items: [
    {
      label: "İŞİTME TESTİ",
      title: "Ücretsiz ve Kapsamlı İşitme Testi",
      description: "Odyometrist eşliğinde yapılan ücretsiz işitme testiyle mevcut durumunuz değerlendirilir.",
    },
    {
      label: "İHTİYAÇ ANALİZİ",
      title: "Yaşam Tarzınıza Uygun İhtiyaç Analizi",
      description: "Günlük yaşamınıza uygun cihaz özelliklerini birlikte belirliyoruz.",
    },
    {
      label: "CİHAZ ÖNERİSİ",
      title: "Kişiye Özel Cihaz Önerisi",
      description: "İhtiyacınıza ve bütçenize uygun cihaz seçeneklerini sunuyoruz.",
    },
    {
      label: "DEMO DENEME",
      title: "Karar Öncesi Demo Cihaz Deneyimi",
      description: "Karar vermeden önce cihazı günlük yaşamınızda deneyebilirsiniz.",
    },
    {
      label: "SGK DESTEĞİ",
      title: "SGK Süreci Hakkında Bilgilendirme",
      description: "SGK desteği ve uygunluk kriterleri hakkında bilgi veriyoruz.",
    },
    {
      label: "SÜREKLİ DESTEK",
      title: "Satış Sonrası Danışmanlık Desteği",
      description: "Cihaz teslim edildikten sonra da sorularınız için yanınızdayız.",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorHoverBorder: "rgb(13 148 136 / 0.5)",
};
