// M6 (Extended) content for the /isitme-cihazlari hub page. Renders
// through the now-generic BrandExtended component. Mirrors
// header.data.ts's devicesMega "Teknolojilere Göre" and "İhtiyacınıza
// Göre" columns (14 pages), plus "Suya Dayanıklı Cihazlar" — the one
// device-type page M2's showcase left out to keep its grid at a clean
// 6 cards — so all 21 devicesMega sub-pages are reachable from this
// hub. No per-item logo art (unlike /markalar's brand logos), so each
// card uses a lucide icon instead.

import {
  Droplets,
  Brain,
  Volume2,
  MessageSquareText,
  Wifi,
  Zap,
  Smartphone,
  Waves,
  Volume1,
  VolumeX,
  EarOff,
  Users,
  Activity,
} from "lucide-astro";
import type { BrandExtendedContent } from "../../components/brands/BrandExtended/BrandExtended.astro";

export const devicesExtended: BrandExtendedContent = {
  eyebrow: "Teknolojilere ve İhtiyaca Göre",
  heading: "Diğer Cihaz ve Teknoloji Sayfalarımız",
  intro:
    "Öne çıkan cihaz türlerinin yanı sıra, aşağıdaki teknoloji ve ihtiyaç odaklı sayfalarımızı da inceleyebilirsiniz.",
  brands: [
    { name: "Suya Dayanıklı Cihazlar", href: "/isitme-cihazlari/suya-dayanikli", icon: Droplets },
    { name: "Yapay Zeka Destekli Cihazlar", href: "/teknolojiler/yapay-zeka-destekli", icon: Brain },
    { name: "Gürültü Engelleme Teknolojisi", href: "/teknolojiler/gurultu-engelleme", icon: Volume2 },
    { name: "Konuşma Odaklı Teknolojiler", href: "/teknolojiler/konusma-odakli", icon: MessageSquareText },
    { name: "Kablosuz Bağlantı Özellikleri", href: "/teknolojiler/kablosuz-baglanti", icon: Wifi },
    { name: "Şarjlı Teknolojiler", href: "/teknolojiler/sarjli-teknolojiler", icon: Zap },
    { name: "Uzaktan Kontrol Özellikleri", href: "/teknolojiler/uzaktan-kontrol", icon: Smartphone },
    { name: "Tinnitus (Kulak Çınlaması) Çözümleri", href: "/teknolojiler/tinnitus-cozumleri", icon: Waves },
    { name: "Hafif İşitme Kaybı", href: "/ihtiyaciniza-gore/hafif-isitme-kaybi", icon: Volume1 },
    { name: "Orta Derece İşitme Kaybı", href: "/ihtiyaciniza-gore/orta-derece-isitme-kaybi", icon: Volume2 },
    { name: "İleri Derece İşitme Kaybı", href: "/ihtiyaciniza-gore/ileri-derece-isitme-kaybi", icon: VolumeX },
    { name: "Çok İleri Derece İşitme Kaybı", href: "/ihtiyaciniza-gore/cok-ileri-derece-isitme-kaybi", icon: VolumeX },
    { name: "Tek Taraflı İşitme Kaybı", href: "/ihtiyaciniza-gore/tek-tarafli-isitme-kaybi", icon: EarOff },
    { name: "Yaşlılar İçin Cihazlar", href: "/ihtiyaciniza-gore/yaslilar-icin-cihazlar", icon: Users },
    { name: "Aktif Yaşam İçin Cihazlar", href: "/ihtiyaciniza-gore/aktif-yasam-icin-cihazlar", icon: Activity },
  ],
};
