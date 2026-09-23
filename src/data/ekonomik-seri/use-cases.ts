// "Ekonomik Seride Öne Çıkan Özellikler" teaser grid for the
// /segmentler/ekonomik-seri page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped
// to the feature set commonly bundled into a brand's economy tier.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const ekonomikSeriUseCases: BrandPageTechnologyContent = {
  badge: "ÖNE ÇIKAN ÖZELLİKLER",
  heading: "Ekonomik Seride Öne Çıkan Özellikler",
  intro: "Ekonomik seride sıkça bulunan özelliklere daha yakından bakalım.",
  items: [
    {
      label: "TEMEL SES YÜKSELTME",
      title: "Günlük Konuşmaları Takip Etmeye Yardımcı Olur",
      description: "Ekonomik seri, temel ses yükseltme ile günlük konuşmaları takip etmeye yardımcı olur.",
    },
    {
      label: "SADE KULLANIM",
      title: "Basit ve Anlaşılır Kontrol",
      description: "Az sayıda ayar seçeneği, günlük kullanımı kolaylaştırır.",
    },
    {
      label: "PİLLİ SEÇENEKLER",
      title: "Uygun Fiyatlı Pilli Seçenekler",
      description: "Ekonomik seri modeller genellikle pilli seçeneklerle sunulur.",
    },
    {
      label: "ORİJİNAL GARANTİ",
      title: "Üretici Garantisi ile Sunulur",
      description: "Ekonomik seri modeller de orijinal ürün ve üretici garantisiyle sunulur.",
    },
    {
      label: "TEKNİK SERVİS",
      title: "Yetkili Teknik Servis Desteği",
      description: "Ekonomik seri modeller de yetkili teknik servis desteğinden faydalanabilir.",
    },
    {
      label: "GİRİŞ SEVİYESİ",
      title: "İlk Cihaz Deneyimi İçin Uygun",
      description: "Ekonomik seri, işitme cihazı kullanımına yeni başlayanlar için pratik bir giriş noktası sunar.",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
  accentColorHoverBorder: "rgb(22 163 74 / 0.5)",
};
