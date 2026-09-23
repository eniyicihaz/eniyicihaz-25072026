// Hero content for the "Şarjlı Teknolojiler" product page
// (/teknolojiler/sarjli-teknolojiler). Renders through the shared
// BrandPageHero component — same component every /isitme-cihazlari/* and
// /teknolojiler/* page uses. Fifth page of the "Teknolojilere Göre"
// product-page series (see header.data.ts's devicesMega -> second
// column). Deliberately scoped apart from the already-built Şarj
// Edilebilir Cihazlar page (/isitme-cihazlari/sarj-edilebilir), which
// owns the buying-guide framing (rechargeable vs disposable-battery
// device choice, charging methods as user-facing features, device-family
// coverage); this page instead goes under the hood into the battery and
// charge-management engineering itself.
//
// accentColor: kırmızı / red (#dc2626) — evokes a charging-indicator LED,
// and is distinct from every prior page's accent across all three series
// (BTE'nin mavisi #2563eb, ITE'nin moru #7c3aed, Şarj Edilebilir'in
// yeşili #059669, Bluetooth'un camgöbeği #0891b2, Çocuklara Özel'in gülü
// #e11d48, Görünmez'in grafiti #475569, Suya Dayanıklı'nın deniz
// mavisi-yeşili #0d9488, Yapay Zeka Destekli'nin çividi #4f46e5, Gürültü
// Engelleme'nin eflatunu #c026d3, Konuşma Odaklı'nın turuncusu #ea580c,
// Kablosuz Bağlantı'nın misket limonu #65a30d). heroBackground follows
// the same layered "Hero Background System" recipe as those pages, with
// the hue swapped for red.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const sarjliTeknolojilerHero: BrandPageHeroContent = {
  badge: "TEKNOLOJİLERE GÖRE · ŞARJLI TEKNOLOJİLER",
  headingLines: ["Şarjlı", "Teknolojiler"],
  paragraphs: [
    "Şarjlı teknolojiler; lityum-iyon pil kimyasından akıllı şarj yönetim sistemlerine, hızlı şarj devrelerinden pil sağlığı takibine kadar işitme cihazlarının şarj altyapısını oluşturan mühendislik bileşenlerinin tümünü kapsar.",
    "Şarj edilebilir cihazının arkasındaki teknolojiyi daha yakından tanımak isteyen kullanıcılar için Avrasya İşitme'de sıkça değerlendirdiğimiz bir konudur.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "LİTYUM-İYON PİL",
      accent: "#dc2626",
      title: "Yüksek Enerji Yoğunluklu Hücre Teknolojisi",
      description: "Lityum-iyon piller, küçük hacimde yüksek enerji kapasitesi sunarak gün boyu kullanım sağlar.",
    },
    {
      label: "AKILLI ŞARJ YÖNETİMİ",
      accent: "#b91c1c",
      title: "Aşırı Şarja ve Isınmaya Karşı Koruma",
      description: "Dahili şarj yönetim devresi, pil ömrünü korumak için şarj akımını ve sıcaklığı sürekli denetler.",
    },
    {
      label: "ŞARJ DÖNGÜSÜ ÖMRÜ",
      accent: "#991b1b",
      title: "Yüzlerce Şarj Döngüsüne Dayanıklı Tasarım",
      description: "Modern lityum-iyon hücreler, yıllar süren kullanım boyunca yüzlerce şarj döngüsünü kaldırabilecek şekilde tasarlanır.",
    },
  ],
  image: {
    src: "/images/widex/models/smartric.webp",
    alt: "Gelişmiş lityum-iyon pil ve akıllı şarj yönetim teknolojisine sahip işitme cihazı görseli",
  },
  floatingCard: {
    title: "Akıllı Pil Yönetimi",
    description: "Şarj döngüsünü ve pil sağlığını sürekli optimize eder.",
  },
  accentColor: "#dc2626",
  accentColorHover: "#b91c1c",
  accentColorSoft: "rgb(220 38 38 / 0.12)",
  accentColorBorder: "rgb(220 38 38 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(220,38,38,0.35) 0%, rgba(220,38,38,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #240a0a 60%, #3b0f0f 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#b91c1c",
  heroWaveOpacity: "0.18",
};
