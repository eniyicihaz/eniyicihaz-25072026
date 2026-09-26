// Avrasya İşitme Cihazları Kimdir? — BrandPageIntro üzerinden render
// edilir. Paragraflar company.ts'teki gerçek `about`/`tagline` metniyle
// tutarlı; yeni bir iddia eklenmedi.
import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const hakkimizdaIntro: BrandPageIntroContent = {
  badge: "Kurumsal",
  heading: "Avrasya İşitme Cihazları Kimdir?",
  paragraphs: [
    "Avrasya İşitme Cihazları, Darıca'da hizmet veren, SGK anlaşmalı bir işitme merkezidir. 2009'dan bu yana işitme değerlendirmesi, cihaz uygulaması ve teknik servis hizmetleri sunuyoruz.",
    "Merkezimiz Darıca'da yer alıyor; Gebze ve Çayırova'dan gelen danışanlarımıza da aynı süreç ve aynı özenle hizmet veriyoruz.",
  ],
  stats: [
    { value: "2009", label: "Hizmet Başlangıcı" },
    { value: "SGK Anlaşmalı", label: "İşitme Merkezi" },
    { value: "Darıca", label: "Merkez Konumu" },
    { value: "Satış ve Uygulama", label: "Merkezi" },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
