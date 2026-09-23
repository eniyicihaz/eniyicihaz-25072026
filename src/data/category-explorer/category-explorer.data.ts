// Kategori Keşfi — homepage device-type discovery section. Frames as
// "size uygun tipi keşfedin", not a product catalog: each item is a real
// /isitme-cihazlari sub-page (mirrors header.data.ts's devicesMega
// column and devices/showcase.ts + devices/extended.ts exactly — same 7
// pages, same icons, no new URL invented) with one factual, generic
// sentence about that device category (not a marketing/superiority
// claim — the kind of fact any audiology source would state).

import { Ear, Headphones, EyeOff, BatteryCharging, Bluetooth, Baby, Droplets } from "lucide-astro";

export interface CategoryExplorerItem {
  name: string;
  description: string;
  href: string;
  icon: any;
}

export interface CategoryExplorerContent {
  eyebrow: string;
  heading: string;
  intro: string;
  items: CategoryExplorerItem[];
  hubCta: { label: string; href: string };
}

export const categoryExplorer: CategoryExplorerContent = {
  eyebrow: "İşitme Cihazı Çeşitleri",
  heading: "Size Uygun İşitme Cihazı Tipini Keşfedin",
  intro:
    "Kulak yapınıza, işitme kaybı derecenize ve günlük kullanım tercihinize göre farklı cihaz tipleri uygun olabilir.",
  items: [
    {
      name: "Kulak Arkası (BTE)",
      description: "Geniş güç aralığı sunar; hafiften ileri dereceye kadar çoğu işitme kaybında tercih edilir.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
      icon: Ear,
    },
    {
      name: "Kulak İçi (ITE)",
      description: "Kulak kanalına özel üretilir; takıp çıkarması ve kullanımı kolaydır.",
      href: "/isitme-cihazlari/kulak-ici-ite",
      icon: Headphones,
    },
    {
      name: "Görünmez (CIC)",
      description: "Kulak kanalının derinine yerleşir, dışarıdan neredeyse fark edilmez.",
      href: "/isitme-cihazlari/gorunmez-cic",
      icon: EyeOff,
    },
    {
      name: "Şarj Edilebilir",
      description: "Pil değiştirme derdi olmadan, tek şarjla gün boyu kullanım sağlar.",
      href: "/isitme-cihazlari/sarj-edilebilir",
      icon: BatteryCharging,
    },
    {
      name: "Bluetooth Özellikli",
      description: "Telefon, TV ve diğer cihazlarla doğrudan kablosuz bağlanır.",
      href: "/isitme-cihazlari/bluetooth-ozellikli",
      icon: Bluetooth,
    },
    {
      name: "Çocuklara Özel",
      description: "Büyüyen kulağa uygun, dayanıklı ve güvenli tasarımlarla üretilir.",
      href: "/isitme-cihazlari/cocuklara-ozel",
      icon: Baby,
    },
    {
      name: "Suya Dayanıklı",
      description: "Nem ve tere karşı korumalıdır; aktif ve günlük kullanıma uygundur.",
      href: "/isitme-cihazlari/suya-dayanikli",
      icon: Droplets,
    },
  ],
  hubCta: { label: "Tüm cihaz tiplerini inceleyin", href: "/isitme-cihazlari" },
};
