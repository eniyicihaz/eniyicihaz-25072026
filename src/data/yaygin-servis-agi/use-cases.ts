// "Yaygın Servis Ağımızda Sunduğumuz Güvenceler" teaser grid for the
// /neden-orijinal/yaygin-servis-agi page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped
// to the concrete service assurances Avrasya İşitme provides instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const yayginServisAgiUseCases: BrandPageTechnologyContent = {
  badge: "ÖNE ÇIKAN GÜVENCELER",
  heading: "Servis Sürecinde Sunduğumuz Güvenceler",
  intro: "Servis sürecinde sunduğumuz somut güvencelere daha yakından bakalım.",
  items: [
    {
      label: "EĞİTİMLİ EKİP",
      title: "Üretici Eğitimi Almış Ekip",
      description: "Servis işlemlerini yürüten ekibimiz üretici eğitimlerine katılmıştır.",
    },
    {
      label: "ORİJİNAL PARÇA",
      title: "Orijinal Yedek Parça Tercihi",
      description: "Onarımlarda cihaza uygun orijinal yedek parça kullanılmasına özen gösterilir.",
    },
    {
      label: "HIZLI SÜREÇ",
      title: "Belirli Teslim Süreleri",
      description: "Teknik serviste teslim 3 gün, onarımda 1–3 gün içindedir.",
    },
    {
      label: "GARANTİ KORUMASI",
      title: "Garantinizi Koruyan Servis Süreci",
      description: "Garanti işlemleri ücretsizdir; garanti kapsamındaki cihazlar gerektiğinde dış servise gönderilir.",
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
