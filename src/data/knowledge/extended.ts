// M6 (Extended) content for the /bilgi-merkezi hub page. Renders through
// the now-generic BrandExtended component. Mirrors header.data.ts's
// knowledgeMega "SGK & Haklar" and "Blog & Haberler" columns (12 pages)
// — the two content categories after the flagship guides (which M2's
// showcase already covers). No per-item logo art, so each card uses a
// lucide icon instead.

import {
  Landmark,
  FileText,
  Users,
  Baby,
  RefreshCcw,
  HelpCircle,
  Sparkles,
  ShieldQuestion,
  HeartHandshake,
  Search,
  Gift,
  CalendarDays,
} from "lucide-astro";
import type { BrandExtendedContent } from "../../components/brands/BrandExtended/BrandExtended.astro";

export const knowledgeExtended: BrandExtendedContent = {
  eyebrow: "SGK & Haklar ve Blog & Haberler",
  heading: "Diğer Bilgi Merkezi Sayfalarımız",
  intro:
    "Rehberlerimizin yanı sıra, aşağıdaki SGK süreçleri ve güncel içerik sayfalarımızı da inceleyebilirsiniz.",
  brands: [
    { name: "SGK Katkı Payı", href: "/sgk/katki-payi", icon: Landmark },
    { name: "Rapor Süreci", href: "/sgk/rapor-sureci", icon: FileText },
    { name: "Gerekli Belgeler", href: "/sgk/gerekli-belgeler", icon: FileText },
    { name: "Çocuklarda SGK", href: "/sgk/cocuklarda-sgk", icon: Baby },
    { name: "Yenileme Hakkı", href: "/sgk/yenileme-hakki", icon: RefreshCcw },
    { name: "SGK Sık Sorulanlar", href: "/sgk-isitme-cihazi-odemesi#sgk-faq-title", icon: HelpCircle },
    { name: "Yeni Teknolojiler", href: "/blog/yeni-teknolojiler", icon: Sparkles },
    { name: "Uzman Görüşleri", href: "/blog/uzman-gorusleri", icon: ShieldQuestion },
    { name: "Başarı Hikayeleri", href: "/blog/basari-hikayeleri", icon: HeartHandshake },
    { name: "Sık Sorulan Sorular", href: "/blog/sik-sorulan-sorular", icon: Search },
    { name: "Kampanyalar", href: "/blog/kampanyalar", icon: Gift },
    { name: "Etkinlikler", href: "/blog/etkinlikler", icon: CalendarDays },
  ],
};
