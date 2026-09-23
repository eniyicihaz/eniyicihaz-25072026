// "Kablosuz Bağlantı Teknolojisinin Gelişimi" section for the
// /teknolojiler/kablosuz-baglanti page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags), same technique the Konuşma
// Odaklı page's evolution.ts uses for its own technology timeline — here
// mapped onto the genuine progression from telecoil through today's NFMI
// ear-to-ear synchronization.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const kablosuzBaglantiEvolution: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİNİN GELİŞİMİ",
  heading: "Kablosuz Bağlantı Teknolojisinin Gelişimi",
  intro: "Kablosuz bağlantı teknolojisi, işitme cihazlarında zaman içinde farklı aşamalardan geçerek bugünkü çok protokollü ekosisteme ulaştı.",
  stages: [
    {
      era: "Telesarmal (Telecoil) Sistemleri",
      whatItBrought: "İşitme cihazlarındaki en eski kablosuz teknolojilerden biri olan telesarmal, manyetik döngü sistemleriyle doğrudan ses alımı sağladı.",
      bestFor: "Toplu alan sistemleri arayan kullanıcılar",
      families: ["Telesarmal Destekli Modeller"],
    },
    {
      era: "Analog FM Sistemleri",
      whatItBrought: "Öğretmen veya konuşmacının taktığı verici mikrofonun sesini radyo frekansı üzerinden doğrudan cihaza aktaran ilk nesil uzaktan mikrofon sistemleri yaygınlaştı.",
      bestFor: "Sınıf ve toplantı ortamında net ses arayanlar",
      families: ["Analog FM Sistemleri"],
    },
    {
      era: "Dijital Roger Teknolojisi",
      whatItBrought: "Dijital sinyal işlemeye dayanan Roger sistemleri, daha net ve daha az parazitli bir uzaktan mikrofon deneyimi sundu.",
      bestFor: "Gelişmiş uzaktan mikrofon deneyimi isteyenler",
      families: ["Roger Uyumlu Modeller"],
    },
    {
      era: "Kulaktan Kulağa Kablosuz Senkronizasyon (NFMI)",
      whatItBrought: "Düşük güçlü manyetik indüksiyon teknolojisi, iki cihaz arasında kesintisiz ve düşük gecikmeli bir bağlantı kurmayı mümkün kıldı.",
      bestFor: "Çift taraflı cihaz kullanan, binaural uyum isteyenler",
      families: ["NFMI Destekli Modeller"],
    },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
};
