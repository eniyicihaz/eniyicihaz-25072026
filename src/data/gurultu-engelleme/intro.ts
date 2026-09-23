// "Gürültü Engelleme Nedir?" + "Nasıl Çalışır?" section for the
// /teknolojiler/gurultu-engelleme page. Renders through the shared
// BrandPageIntro component. The "nasıl çalışır" explanation is folded
// into this same section's paragraphs, same technique every
// /isitme-cihazlari/* and /teknolojiler/* feature page uses.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const gurultuEngellemeIntro: BrandPageIntroContent = {
  badge: "GÜRÜLTÜ ENGELLEME NEDİR?",
  heading: "Gürültü Engelleme Teknolojisi Nedir ve Nasıl Çalışır?",
  paragraphs: [
    "Gürültü engelleme teknolojisi, işitme cihazının mikrofonlarına ulaşan sesi sürekli analiz ederek istenmeyen gürültü bileşenlerini tespit eden ve seviyesini azaltan bir dijital sinyal işleme sürecidir.",
    "Bu teknoloji belirli bir fiziksel cihaz tipi değildir; hem kulak arkası (BTE/RIC) hem de kulak içi (ITE/ITC) ailelerinde sunulabilen bir işlemci özelliğidir.",
    "Çalışma prensibi şöyledir: cihaz, gelen sesi konuşma ve gürültü bileşenlerine ayırır; sabit ve tahmin edilebilir gürültü kaynaklarının (klima uğultusu, trafik sesi gibi) seviyesini azaltarak konuşmanın görece daha belirgin kalmasını hedefler.",
    "Gürültü engelleme kapsamı ve etkinliği (sabit gürültü, rüzgar gürültüsü, ani ses baskılama) üreticiye ve seçilen modele göre değişebilir.",
  ],
  stats: [
    { value: "Gerçek Zamanlı", label: "Analiz Şekli" },
    { value: "Sabit Gürültü, Rüzgar, Ani Ses", label: "Azaltılan Gürültü Türleri" },
    { value: "Dijital Sinyal İşleme (DSP)", label: "Kullanılan Teknoloji" },
    { value: "Modelden Modele Değişir", label: "Etkinlik Seviyesi" },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
