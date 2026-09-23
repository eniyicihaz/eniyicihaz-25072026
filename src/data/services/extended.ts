// M6 (Extended) content for the /hizmetlerimiz hub page. Renders through
// the now-generic BrandExtended component. Mirrors header.data.ts's
// servicesMega "Uygulama & Ayar" and "Servis & Bakım" columns (12
// pages) — the two service stages after initial assessment (which M2's
// showcase already covers). No per-item logo art, so each card uses a
// lucide icon instead.

import {
  Sliders,
  Headphones,
  Ruler,
  Radio,
  CalendarCheck,
  Wrench,
  RefreshCcw,
  Sparkles,
  BatteryCharging,
  ShieldCheck,
  PackageSearch,
} from "lucide-astro";
import type { BrandExtendedContent } from "../../components/brands/BrandExtended/BrandExtended.astro";

export const servicesExtended: BrandExtendedContent = {
  eyebrow: "Uygulama, Ayar, Servis ve Bakım",
  heading: "Diğer Hizmet Sayfalarımız",
  intro:
    "Değerlendirme sonrasında ihtiyaç duyabileceğiniz uygulama, ayar, servis ve bakım hizmetlerimizi de inceleyebilirsiniz.",
  brands: [
    { name: "Cihaz Uygulama", href: "/uygulama-ayar/cihaz-uygulama", icon: Sliders },
    { name: "Kişiye Özel Programlama", href: "/uygulama-ayar/kisiye-ozel-programlama", icon: Sliders },
    { name: "Cihaz Deneme", href: "/uygulama-ayar/cihaz-deneme", icon: Headphones },
    { name: "Kalıp Alımı", href: "/uygulama-ayar/kalip-alimi", icon: Ruler },
    { name: "Uzaktan Ayar", href: "/uygulama-ayar/uzaktan-ayar", icon: Radio },
    { name: "Kontrol Randevusu", href: "/uygulama-ayar/kontrol-randevusu", icon: CalendarCheck },
    { name: "Teknik Servis", href: "/servis-bakim/teknik-servis", icon: Wrench },
    { name: "Periyodik Bakım", href: "/servis-bakim/periyodik-bakim", icon: RefreshCcw },
    { name: "Cihaz Temizliği", href: "/servis-bakim/cihaz-temizligi", icon: Sparkles },
    { name: "Pil & Aksesuar", href: "/servis-bakim/pil-aksesuar", icon: BatteryCharging },
    { name: "Garanti İşlemleri", href: "/servis-bakim/garanti-islemleri", icon: ShieldCheck },
    { name: "Onarım Takibi", href: "/servis-bakim/onarim-takibi", icon: PackageSearch },
  ],
};
