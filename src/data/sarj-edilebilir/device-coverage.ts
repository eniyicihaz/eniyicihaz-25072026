// "Hangi Cihaz Tiplerinde Şarjlı Seçenek Bulunur?" section for the
// /isitme-cihazlari/sarj-edilebilir page. Reuses the shared
// BrandPageTechEvolution component — its "stage" shape (era / what it
// brought / who it's for / tags), same technique the BTE page uses to
// represent a progression. Şarj edilebilirlik bir cihaz tipi değil, bir
// güç seçeneği olduğundan burada BTE/ITE'nin dB seviyesi yerine, şarjlı
// seçeneğin fiziksel cihaz ailelerine göre bulunabilirliği anlatılır —
// bu, sayfayı hem BTE hem ITE master sayfalarına doğal şekilde bağlar.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const sarjEdilebilirDeviceCoverage: BrandPageTechEvolutionContent = {
  badge: "CİHAZ TİPİNE GÖRE",
  heading: "Hangi Cihaz Tiplerinde Şarjlı Seçenek Bulunur?",
  intro: "Şarj edilebilirlik, belirli bir cihaz tipi değil bir güç seçeneğidir; bulunabilirliği cihazın fiziksel ailesine göre değişir.",
  stages: [
    {
      era: "Kulak Arkası (BTE / RIC)",
      whatItBrought: "Şarjlı teknoloji ilk ve en yaygın olarak kulak arkası ailesinde, özellikle RIC modellerinde sunulur; daha büyük gövde daha yüksek kapasiteli pil barındırabilir.",
      bestFor: "Hafiften çok ileri dereceye kadar geniş bir kayıp aralığında şarjlı kullanım isteyenler",
      families: ["Şarjlı BTE", "Şarjlı RIC"],
    },
    {
      era: "Kulak İçi (ITE / ITC)",
      whatItBrought: "Bazı üreticiler tam kabuk ITE ve ITC modellerinde de şarj edilebilir seçenekler sunar; ancak gövde küçüklüğü nedeniyle bu seçenek her marka ve modelde bulunmayabilir.",
      bestFor: "Görünürlüğü öncelik gören, hafif-orta dereceli kayıplara sahip kullanıcılar",
      families: ["Şarjlı ITE", "Şarjlı ITC"],
    },
    {
      era: "En Küçük Kulak İçi Alt Tipleri (CIC / IIC)",
      whatItBrought: "Gövde boyutu en küçük olan bu alt tiplerde şarj edilebilir seçenekler oldukça sınırlıdır; çoğu model geleneksel değiştirilebilir pille çalışır.",
      bestFor: "Görünürlüğü en üst düzeyde önceleyen, pil değişimine razı kullanıcılar",
      families: ["Genellikle Pilli"],
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
