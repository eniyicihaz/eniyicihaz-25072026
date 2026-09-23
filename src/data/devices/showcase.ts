// M2 (Showcase) content for the /isitme-cihazlari hub page. Renders
// through the now-generic BrandShowcase component. Mirrors
// header.data.ts's devicesMega "İşitme Cihazı Çeşitleri" column exactly
// — the seven physical device-type pages. No per-item logo art exists
// for device types (unlike brand logos), so each card uses a lucide
// icon instead (BrandShowcase.astro's icon fallback).

import { Ear, Headphones, BatteryCharging, Bluetooth, Baby, EyeOff, Droplets } from "lucide-astro";
import type { BrandShowcaseContent } from "../../components/brands/BrandShowcase/BrandShowcase.astro";

export const devicesShowcase: BrandShowcaseContent = {
  eyebrow: "İşitme Cihazı Çeşitleri",
  heading: "Size Uygun Cihaz Türünü Keşfedin",
  subhead:
    "Kulak yapınıza, işitme kaybınıza ve günlük kullanım tercihinize uygun cihaz türünü inceleyin.",
  ctaLabel: "İncele",
  brands: [
    { name: "Kulak Arkası (BTE)", href: "/isitme-cihazlari/kulak-arkasi-bte", icon: Ear },
    { name: "Kulak İçi (ITE)", href: "/isitme-cihazlari/kulak-ici-ite", icon: Headphones },
    { name: "Şarj Edilebilir Cihazlar", href: "/isitme-cihazlari/sarj-edilebilir", icon: BatteryCharging },
    { name: "Bluetooth Özellikli Cihazlar", href: "/isitme-cihazlari/bluetooth-ozellikli", icon: Bluetooth },
    { name: "Çocuklara Özel Cihazlar", href: "/isitme-cihazlari/cocuklara-ozel", icon: Baby },
    { name: "Görünmez (CIC) Cihazlar", href: "/isitme-cihazlari/gorunmez-cic", icon: EyeOff },
  ],
};
