// Avrasya İşitme Cihazları Kimdir? — BrandPageIntro üzerinden render
// edilir. Paragraflar company.ts'teki gerçek `about`/`tagline` metniyle
// tutarlı; yeni bir iddia eklenmedi.
import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const hakkimizdaIntro: BrandPageIntroContent = {
  badge: "Kurumsal",
  heading: "Avrasya İşitme Cihazları Kimdir?",
  paragraphs: [
    "Avrasya İşitme Cihazları 2009 yılında kurulmuş, SGK anlaşmalı bir işitme merkezidir. Ağustos 2024'te açılan Darıca merkezimizde işitme değerlendirmesi, cihaz uygulaması ve teknik servis hizmetleri sunuyoruz.",
    "Merkezimiz Darıca'da yer alıyor; Gebze ve Çayırova'dan gelen danışanlarımız da bu merkeze gelerek hizmet alıyor.",
  ],
  stats: [
    { value: "2009", label: "Kuruluş Yılı" },
    { value: "SGK Anlaşmalı", label: "İşitme Merkezi" },
    { value: "Darıca", label: "Merkez Konumu" },
    { value: "Satış ve Uygulama", label: "Merkezi" },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
