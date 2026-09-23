// "İşitme Cihazlarında Bluetooth Teknolojisinin Gelişimi" section for the
// /isitme-cihazlari/bluetooth-ozellikli page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — unlike the BTE/ITE pages
// (dB severity progression) or the Şarj Edilebilir page (device-family
// coverage), here the slot maps onto a genuine technology timeline: how
// Bluetooth connectivity in hearing aids evolved from streamer accessories
// to today's direct, low-energy connection.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const bluetoothEvolution: BrandPageTechEvolutionContent = {
  badge: "TEKNOLOJİNİN GELİŞİMİ",
  heading: "İşitme Cihazlarında Bluetooth Teknolojisinin Gelişimi",
  intro: "Bluetooth bağlantısı, işitme cihazlarında zaman içinde farklı aşamalardan geçerek bugünkü doğrudan bağlantı deneyimine ulaştı.",
  stages: [
    {
      era: "Klasik Bluetooth + Aracı Cihaz (Streamer)",
      whatItBrought: "İlk nesil kablosuz bağlantı, işitme cihazının kendisi yerine boyunda veya cepte taşınan ayrı bir 'streamer' aksesuarı üzerinden çalışırdı.",
      bestFor: "Erken dönem kablosuz bağlantı arayan kullanıcılar",
      families: ["Streamer Aksesuarlı Eski Modeller"],
    },
    {
      era: "Doğrudan Bağlantı (Made for iPhone / Android)",
      whatItBrought: "Ayrı bir aracı cihaza gerek kalmadan, işitme cihazının doğrudan telefonla eşleşmesini sağlayan standartlar yaygınlaştı.",
      bestFor: "Aracı cihaz taşımadan pratik bağlantı isteyen kullanıcılar",
      families: ["Made for iPhone Modelleri", "ASHA Destekli Android Modelleri"],
    },
    {
      era: "Bluetooth Düşük Enerji Sesi (LE Audio) ve Auracast",
      whatItBrought: "Daha düşük pil tüketimiyle çalışan ve toplu alanlarda yayın dinlemeyi (Auracast) mümkün kılan yeni nesil standart kademeli olarak yaygınlaşıyor.",
      bestFor: "En güncel bağlantı teknolojisini önceliklendiren kullanıcılar",
      families: ["LE Audio Destekli Yeni Nesil Modeller"],
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
