// M2 (Showcase) content for the /bilgi-merkezi hub page. Renders through
// the now-generic BrandShowcase component. Mirrors header.data.ts's
// knowledgeMega "Rehberler" column exactly — the flagship educational
// guide pages. No per-item logo art exists for guide topics (unlike
// brand logos), so each card uses a lucide icon instead.

import { Stethoscope, Compass, BookOpen, Sparkles, BatteryCharging, HeartHandshake } from "lucide-astro";
import type { BrandShowcaseContent } from "../../components/brands/BrandShowcase/BrandShowcase.astro";

export const knowledgeShowcase: BrandShowcaseContent = {
  eyebrow: "Rehberler",
  heading: "En Çok Okunan Rehberlerimiz",
  subhead:
    "İşitme sağlığı yolculuğunuzun her aşamasında yanınızda olan temel rehberlerimizi inceleyin.",
  ctaLabel: "Rehberi Oku",
  brands: [
    { name: "İşitme Kaybı Nedir?", href: "/rehberler/isitme-kaybi-nedir", icon: Stethoscope },
    { name: "Cihaz Seçim Rehberi", href: "/rehberler/cihaz-secim-rehberi", icon: Compass },
    { name: "İlk Kullanım Rehberi", href: "/rehberler/ilk-kullanim-rehberi", icon: BookOpen },
    { name: "Cihaz Bakımı", href: "/servis-bakim/periyodik-bakim", icon: Sparkles },
    { name: "Pil Kullanımı", href: "/servis-bakim/pil-aksesuar", icon: BatteryCharging },
    { name: "Uyum Süreci", href: "/rehberler/uyum-sureci", icon: HeartHandshake },
  ],
};
