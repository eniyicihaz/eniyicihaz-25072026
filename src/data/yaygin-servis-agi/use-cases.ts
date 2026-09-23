// "Yaygın Servis Ağımızda Sunduğumuz Güvenceler" teaser grid for the
// /neden-orijinal/yaygin-servis-agi page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped
// to the concrete service assurances Avrasya İşitme provides instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const yayginServisAgiUseCases: BrandPageTechnologyContent = {
  badge: "ÖNE ÇIKAN GÜVENCELER",
  heading: "Yaygın Servis Ağımızda Sunduğumuz Güvenceler",
  intro: "Servis sürecinde sunduğumuz somut güvencelere daha yakından bakalım.",
  items: [
    {
      label: "SERTİFİKALI TEKNİSYEN",
      title: "Marka Sertifikalı Teknisyen Desteği",
      description: "Yetkili servis teknisyenlerimiz, ilgili markalar tarafından eğitilmiş ve sertifikalandırılmıştır.",
    },
    {
      label: "ORİJİNAL PARÇA",
      title: "Her Onarımda Orijinal Yedek Parça",
      description: "Tüm onarım süreçlerinde yalnızca orijinal yedek parçalar kullanılır.",
    },
    {
      label: "HIZLI SÜREÇ",
      title: "Hızlı Değerlendirme ve Geri Dönüş",
      description: "Cihazınız kısa sürede değerlendirilir ve size bilgi verilir.",
    },
    {
      label: "GARANTİ KORUMASI",
      title: "Garantinizi Koruyan Servis Süreci",
      description: "Yetkili serviste yapılan işlemler garantinizi geçersiz kılmaz.",
    },
    {
      label: "ŞEFFAF SÜREÇ",
      title: "Belgeli ve Şeffaf Servis Süreci",
      description: "Her servis işlemi belgelenir ve süreç şeffaf bir şekilde yürütülür.",
    },
    {
      label: "TEST VE KONTROL",
      title: "Teslim Öncesi Performans Testi",
      description: "Onarılan her cihaz, teslim edilmeden önce performans testinden geçirilir.",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorHoverBorder: "rgb(234 88 12 / 0.5)",
};
