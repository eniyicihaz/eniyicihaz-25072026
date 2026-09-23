// "Görünmez Cihaz Edinme Süreci Nasıl İşler?" section for the
// /isitme-cihazlari/gorunmez-cic page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — unlike the BTE/ITE pages (dB
// severity progression), the Şarj Edilebilir page (device-family
// coverage), the Bluetooth page (technology timeline) or the Çocuklara
// Özel page (age-stage progression), here the slot maps onto the genuine
// four-step custom-fabrication process that is specific to CIC/IIC
// (kulak izi alma -> laboratuvar üretimi -> teslim), a topic the ITE
// master page's device-types.ts does not cover.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const gorunmezCicFittingProcess: BrandPageTechEvolutionContent = {
  badge: "CİHAZLANDIRMA SÜRECİ",
  heading: "Görünmez Cihaz Edinme Süreci Nasıl İşler?",
  intro: "CIC/IIC, kulak kanalınıza özel üretildiğinden standart modellere göre birkaç ek adım gerektirir.",
  stages: [
    {
      era: "1. Kulak Kanalı Değerlendirmesi ve İşitme Testi",
      whatItBrought: "Kulak kanalının boyutu ve şekli görsel olarak değerlendirilir; işitme testiyle CIC/IIC'nin uygunluğu belirlenir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Odyometrik Değerlendirme"],
    },
    {
      era: "2. Kulak İzi Alımı",
      whatItBrought: "Kulak kanalınızın tam ölçüsü, yumuşak bir malzemeyle alınan izle kayıt altına alınır.",
      bestFor: "Kalıbın kişiye özel üretimi için gerekli adım",
      families: ["Kulak İzi Alımı"],
    },
    {
      era: "3. Kalıbın Laboratuvarda Üretimi",
      whatItBrought: "Alınan iz, üretici laboratuvarında kulak kanalınıza özel tek parça kabuğun üretilmesinde kullanılır.",
      bestFor: "Üretim süreci",
      families: ["Kişiye Özel Üretim"],
    },
    {
      era: "4. Teslim, Yerleştirme ve İnce Ayar",
      whatItBrought: "Cihaz teslim edilir, yerleşimi kontrol edilir ve işitme profilinize göre ince ayarlar yapılır.",
      bestFor: "Sürecin son adımı",
      families: ["Teslim ve Programlama"],
    },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
};
