// Hero content for the "Tinnitus Çözümleri" product page
// (/teknolojiler/tinnitus-cozumleri). Renders through the shared
// BrandPageHero component — same component every /isitme-cihazlari/* and
// /teknolojiler/* page uses. Seventh and final page of the
// "Teknolojilere Göre" product-page series (see header.data.ts's
// devicesMega -> second column). A health-adjacent topic — copy is
// deliberately careful throughout: the built-in sound generator is
// framed as a support/comfort feature, never a treatment or cure, and
// every section reinforces that an ENT/audiological evaluation comes
// first (same restraint the site already applies to every other clinical
// claim).
//
// accentColor: eflatun / purple (#9333ea) — chosen for its calm,
// soothing association, distinct from every prior page's accent across
// all three series (BTE'nin mavisi #2563eb, ITE'nin moru #7c3aed, Şarj
// Edilebilir'in yeşili #059669, Bluetooth'un camgöbeği #0891b2,
// Çocuklara Özel'in gülü #e11d48, Görünmez'in grafiti #475569, Suya
// Dayanıklı'nın deniz mavisi-yeşili #0d9488, Yapay Zeka Destekli'nin
// çividi #4f46e5, Gürültü Engelleme'nin eflatunu (fuchsia) #c026d3,
// Konuşma Odaklı'nın turuncusu #ea580c, Kablosuz Bağlantı'nın misket
// limonu #65a30d, Şarjlı Teknolojiler'in kırmızısı #dc2626, Uzaktan
// Kontrol'ün gök mavisi #0284c7). heroBackground follows the same layered
// "Hero Background System" recipe as those pages, with the hue swapped
// for purple.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const tinnitusCozumleriHero: BrandPageHeroContent = {
  badge: "TEKNOLOJİLERE GÖRE · TİNNİTUS ÇÖZÜMLERİ",
  headingLines: ["Tinnitus (Kulak Çınlaması)", "Çözümleri"],
  paragraphs: [
    "Tinnitus (kulak çınlaması) destek özellikleri, işitme cihazına entegre ses üreteci teknolojisiyle hafif, rahatlatıcı sesler üreterek çınlamanın fark edilme düzeyini azaltmaya yardımcı olmayı hedefleyen bir destek seçeneğidir.",
    "Kulak çınlamasından rahatsızlık duyan ve işitme kaybıyla birlikte bu konuda destek arayan kullanıcılar için Avrasya İşitme'de sıkça değerlendirdiğimiz bir özelliktir.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "SES ÜRETECİ TEKNOLOJİSİ",
      accent: "#9333ea",
      title: "Rahatlatıcı Sesler Üretir",
      description: "Beyaz gürültü, doğa sesleri veya fraktal tonlar gibi hafif sesler üreterek çınlamaya odaklanmayı azaltmaya yardımcı olur.",
    },
    {
      label: "KİŞİYE ÖZEL AYAR",
      accent: "#7e22ce",
      title: "Ses Türü ve Seviyesi Kişiselleştirilir",
      description: "Ses türü ve seviyesi, işitme profilinize ve tercihlerinize göre bir odyometrist tarafından ayarlanır.",
    },
    {
      label: "UYGULAMA ÜZERİNDEN YÖNETİM",
      accent: "#6b21a8",
      title: "İhtiyaç Anında Kolay Erişim",
      description: "Bazı modellerde ses üreteci, akıllı telefon uygulaması üzerinden açılıp kapatılabilir.",
    },
  ],
  image: {
    src: "/images/widex/models/moment-sheer.webp",
    alt: "Dahili ses üreteci ile tinnitus destek özelliğine sahip işitme cihazı görseli",
  },
  floatingCard: {
    title: "Rahatlatıcı Ses Desteği",
    description: "İhtiyaç anında hafif, rahatlatıcı sesler üretir.",
  },
  accentColor: "#9333ea",
  accentColorHover: "#7e22ce",
  accentColorSoft: "rgb(147 51 234 / 0.12)",
  accentColorBorder: "rgb(147 51 234 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(147,51,234,0.35) 0%, rgba(147,51,234,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #1a0a26 60%, #2b0f3f 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#7e22ce",
  heroWaveOpacity: "0.18",
};
