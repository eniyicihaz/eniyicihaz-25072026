// Hero content for the "Konuşma Odaklı" product page
// (/teknolojiler/konusma-odakli). Renders through the shared
// BrandPageHero component — same component every /isitme-cihazlari/* and
// /teknolojiler/* page uses. Third page of the "Teknolojilere Göre"
// product-page series (see header.data.ts's devicesMega -> second
// column), following Yapay Zeka Destekli and Gürültü Engelleme.
//
// accentColor: turuncu / orange (#ea580c) — a category accent distinct
// from every prior page's accent across both series (BTE'nin mavisi
// #2563eb, ITE'nin moru #7c3aed, Şarj Edilebilir'in yeşili #059669,
// Bluetooth'un camgöbeği #0891b2, Çocuklara Özel'in gülü #e11d48,
// Görünmez'in grafiti #475569, Suya Dayanıklı'nın deniz mavisi-yeşili
// #0d9488, Yapay Zeka Destekli'nin çividi #4f46e5, Gürültü Engelleme'nin
// eflatunu #c026d3). heroBackground follows the same layered "Hero
// Background System" recipe as those pages, with the hue swapped for
// orange.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const konusmaOdakliHero: BrandPageHeroContent = {
  badge: "TEKNOLOJİLERE GÖRE · KONUŞMA ODAKLI",
  headingLines: ["Konuşma Odaklı", "Teknolojiler"],
  paragraphs: [
    "Konuşma odaklı teknolojiler, yönlü mikrofon sistemleri ve gelişmiş sinyal işleme yöntemleriyle karşınızdaki kişinin sesini diğer ortam seslerinden ayırarak öne çıkarmayı hedefleyen işitme cihazı özellikleridir.",
    "Kalabalık ortamlarda karşılıklı sohbeti takip etmekte zorlanan, konuşma netliğini önceliklendiren kullanıcılar için Avrasya İşitme'de sıkça değerlendirdiğimiz bir teknolojidir.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "YÖNLÜ MİKROFON",
      accent: "#ea580c",
      title: "Karşınızdaki Sesi Öne Çıkarır",
      description: "Yönlü mikrofon sistemi, önden gelen konuşma sesine odaklanarak yan ve arka sesleri geri plana alır.",
    },
    {
      label: "BİNAURAL SENKRONİZASYON",
      accent: "#c2410c",
      title: "İki Cihaz Birlikte Çalışır",
      description: "Sağ ve sol cihaz kablosuz olarak senkronize çalışarak konuşmanın geldiği yönü daha iyi belirlemeye yardımcı olur.",
    },
    {
      label: "OTOMATİK ODAKLANMA",
      accent: "#9a3412",
      title: "Ortama Göre Otomatik Devreye Girer",
      description: "Kalabalık bir ortama girildiğinde yönlü odaklanma otomatik olarak aktifleşebilir.",
    },
  ],
  image: {
    src: "/images/resound/models/nexia.webp",
    alt: "Yönlü mikrofon ve konuşma odaklı teknolojiye sahip işitme cihazı görseli",
  },
  floatingCard: {
    title: "Konuşmaya Odaklanma",
    description: "Karşınızdaki kişinin sesini öne çıkarmaya yardımcı olur.",
  },
  accentColor: "#ea580c",
  accentColorHover: "#c2410c",
  accentColorSoft: "rgb(234 88 12 / 0.12)",
  accentColorBorder: "rgb(234 88 12 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(234,88,12,0.35) 0%, rgba(234,88,12,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #241207 60%, #3b1d0a 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#c2410c",
  heroWaveOpacity: "0.18",
};
