// Hero content for the "Yaşlılar İçin Cihazlar" product page
// (/ihtiyaciniza-gore/yaslilar-icin-cihazlar). Renders through the shared
// BrandPageHero component — same component every /isitme-cihazlari/*,
// /teknolojiler/* and /ihtiyaciniza-gore/* page uses. Sixth page of the
// "İhtiyacınıza Göre" product-page series (see header.data.ts's
// devicesMega third column). Unlike the dB-degree ladder or the
// laterality-based Tek Taraflı page, this page's axis is age-related
// practical needs (ease of use, family/caregiver involvement, charging
// simplicity) rather than a clinical classification — copy stays
// info-only throughout, with sudden-onset loss flagged separately from
// routine, gradual age-related change.
//
// accentColor: sarı-600 / yellow (#ca8a04) — a category accent distinct
// from every prior page's accent across all series (BTE'nin mavisi
// #2563eb, ITE'nin moru #7c3aed, Şarj Edilebilir'in zümrüt yeşili
// #059669, Bluetooth'un camgöbeği #0891b2, Çocuklara Özel'in gülü
// #e11d48, Görünmez'in grafiti (slate) #475569, Suya Dayanıklı'nın deniz
// mavisi-yeşili #0d9488, Yapay Zeka Destekli'nin çividi #4f46e5, Gürültü
// Engelleme'nin eflatunu #c026d3, Konuşma Odaklı'nın turuncusu #ea580c,
// Kablosuz Bağlantı'nın misket limonu #65a30d, Şarjlı Teknolojiler'in
// kırmızısı #dc2626, Uzaktan Kontrol'ün gök mavisi #0284c7, Tinnitus'un
// moru #9333ea, Hafif İşitme Kaybı'nın pembesi #db2777, Orta Derece'nin
// yeşili #16a34a, İleri Derece'nin taş grisi #57534e, Çok İleri
// Derece'nin koyu kehribarı #92400e, Tek Taraflı'nın çinko grisi
// #52525b). heroBackground follows the same layered "Hero Background
// System" recipe as those pages, with the hue swapped for yellow.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const yaslilarIcinCihazlarHero: BrandPageHeroContent = {
  badge: "İHTİYACINIZA GÖRE · YAŞLILAR İÇİN CİHAZLAR",
  headingLines: ["Yaşlılar İçin İşitme Cihazı", "Seçim Rehberi"],
  paragraphs: [
    "Yaşa bağlı işitme kaybı (presbiakuzi), ilerleyen yaşla birlikte sıkça karşılaşılan ve genellikle kademeli ilerleyen bir işitme kaybı türüdür; günlük iletişimi, aile ilişkilerini ve sosyal yaşamı doğrudan etkileyebilir.",
    "Yaşlı kullanıcılar için kolay kullanım, aile destekli uzaktan ayar ve şarj kolaylığı gibi pratik ihtiyaçları ön planda tutan cihaz seçeneklerini Avrasya İşitme'de bir araya getirdik.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "YAYGINLIK",
      accent: "#ca8a04",
      title: "Yaşa Bağlı İşitme Kaybı Sıkça Görülür",
      description: "İlerleyen yaşla birlikte iç kulaktaki işitme hücrelerinde zamanla meydana gelen değişiklikler, işitme kaybına yol açabilir.",
    },
    {
      label: "KULLANIM KOLAYLIĞI",
      accent: "#a16207",
      title: "Büyük Kontroller ve Sade Tasarım Öne Çıkar",
      description: "Basit menüler ve kolay erişilebilir kontroller, günlük kullanımı kolaylaştırmaya yardımcı olabilir.",
    },
    {
      label: "AİLE DESTEĞİ",
      accent: "#854d0e",
      title: "Uzaktan Ayar ile Aile Desteği Sıkça Değerlendirilir",
      description: "Bazı sistemler, aile bireylerinin sürece dahil olmasına imkan tanıyan uzaktan destek seçenekleri sunar.",
    },
  ],
  image: {
    src: "/images/resound/models/key.webp",
    alt: "Yaşlı kullanıcılar için sade ve kolay kullanım özellikleriyle öne çıkan ReSound Key işitme cihazı görseli",
  },
  floatingCard: {
    title: "ReSound Key",
    description: "Sade ve kolay kullanım odaklı giriş seviyesi model.",
  },
  accentColor: "#ca8a04",
  accentColorHover: "#a16207",
  accentColorSoft: "rgb(202 138 4 / 0.12)",
  accentColorBorder: "rgb(202 138 4 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(202,138,4,0.35) 0%, rgba(202,138,4,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #1c1502 60%, #422006 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#a16207",
  heroWaveOpacity: "0.18",
};
