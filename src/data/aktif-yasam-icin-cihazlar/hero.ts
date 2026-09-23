// Hero content for the "Aktif Yaşam İçin Cihazlar" product page
// (/ihtiyaciniza-gore/aktif-yasam-icin-cihazlar). Renders through the
// shared BrandPageHero component — same component every
// /isitme-cihazlari/*, /teknolojiler/* and /ihtiyaciniza-gore/* page
// uses. Seventh and final page of the "İhtiyacınıza Göre" product-page
// series (see header.data.ts's devicesMega third column). Like Yaşlılar
// İçin Cihazlar, this page's axis is a practical-needs profile rather
// than a clinical classification — here, an active/mobile daily
// lifestyle (sport, outdoor activity, frequent travel) rather than age.
//
// accentColor: gri-600 / gray (#4b5563) — the last remaining distinct
// Tailwind named hue not yet used as any page's primary accent across
// every prior series this session (grayscale family already used:
// slate #475569 for Görünmez, stone #57534e for İleri Derece, zinc
// #52525b for Tek Taraflı); every other named hue is exhausted by this
// point (BTE'nin mavisi #2563eb, ITE'nin moru #7c3aed, Şarj Edilebilir'in
// zümrüt yeşili #059669, Bluetooth'un camgöbeği #0891b2, Çocuklara
// Özel'in gülü #e11d48, Suya Dayanıklı'nın deniz mavisi-yeşili #0d9488,
// Yapay Zeka Destekli'nin çividi #4f46e5, Gürültü Engelleme'nin eflatunu
// #c026d3, Konuşma Odaklı'nın turuncusu #ea580c, Kablosuz Bağlantı'nın
// misket limonu #65a30d, Şarjlı Teknolojiler'in kırmızısı #dc2626,
// Uzaktan Kontrol'ün gök mavisi #0284c7, Tinnitus'un moru #9333ea, Hafif
// İşitme Kaybı'nın pembesi #db2777, Orta Derece'nin yeşili #16a34a, Çok
// İleri Derece'nin koyu kehribarı #92400e, Yaşlılar İçin Cihazlar'ın
// sarısı #ca8a04). heroBackground follows the same layered "Hero
// Background System" recipe as those pages, with the hue swapped for
// gray.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const aktifYasamIcinCihazlarHero: BrandPageHeroContent = {
  badge: "İHTİYACINIZA GÖRE · AKTİF YAŞAM İÇİN CİHAZLAR",
  headingLines: ["Aktif Yaşam İçin Cihaz", "Seçim Rehberi"],
  paragraphs: [
    "Spor yapan, sık seyahat eden veya hareketli bir günlük yaşam süren kullanıcılar için işitme cihazı seçerken; güvenli oturma, ter ve neme dayanıklılık ile uzun pil ömrü gibi pratik ihtiyaçlar öne çıkar.",
    "Aktif bir yaşam tarzını sürdüren kullanıcılar için rüzgar gürültüsü azaltma, sağlam yapı ve hızlı şarj gibi özellikleri öne çıkaran cihaz seçeneklerini Avrasya İşitme'de bir araya getirdik.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "KULLANICI PROFİLİ",
      accent: "#4b5563",
      title: "Hareketli Bir Yaşam Tarzı Sürdürenler İçin",
      description: "Spor, doğa yürüyüşü veya sık seyahat gibi aktif bir günlük yaşamı olan kullanıcılar bu grupta değerlendirilir.",
    },
    {
      label: "GÜVENLİ OTURMA",
      accent: "#374151",
      title: "Hareket Sırasında Yerinde Kalan Tasarım Öne Çıkar",
      description: "Egzersiz veya hızlı hareketler sırasında cihazın güvenli bir şekilde yerinde kalması sıkça öncelik verilen bir konudur.",
    },
    {
      label: "DAYANIKLILIK",
      accent: "#1f2937",
      title: "Ter ve Neme Dayanıklı Sistemler Sıkça Tercih Edilir",
      description: "Yüksek IP koruma sınıfına sahip modeller, aktif kullanım sırasında ter ve neme karşı ek güven sağlayabilir.",
    },
  ],
  image: {
    src: "/images/signia/models/styletto.webp",
    alt: "Aktif yaşam süren kullanıcılar için hafif ve şarj edilebilir tasarımıyla öne çıkan Signia Styletto işitme cihazı görseli",
  },
  floatingCard: {
    title: "Signia Styletto",
    description: "İnce, hafif ve hızlı şarj edilebilir tasarım.",
  },
  accentColor: "#4b5563",
  accentColorHover: "#374151",
  accentColorSoft: "rgb(75 85 99 / 0.12)",
  accentColorBorder: "rgb(75 85 99 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(75,85,99,0.35) 0%, rgba(75,85,99,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #18181b 60%, #1f2937 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#374151",
  heroWaveOpacity: "0.18",
};
