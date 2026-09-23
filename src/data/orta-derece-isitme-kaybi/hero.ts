// Hero content for the "Orta Derece İşitme Kaybı" product page
// (/ihtiyaciniza-gore/orta-derece-isitme-kaybi). Renders through the
// shared BrandPageHero component — same component every
// /isitme-cihazlari/*, /teknolojiler/* and /ihtiyaciniza-gore/* page
// uses. Second page of the "İhtiyacınıza Göre" product-page series (see
// header.data.ts's devicesMega third column), following Hafif İşitme
// Kaybı. A health-classification topic — copy is deliberately careful
// throughout: self-diagnosis is never implied, and every section points
// back to a proper audiometric evaluation (odyometri) as the only way to
// confirm degree and type.
//
// accentColor: yeşil / green (#16a34a) — a category accent distinct from
// every prior page's accent across all four series (BTE'nin mavisi
// #2563eb, ITE'nin moru #7c3aed, Şarj Edilebilir'in zümrüt yeşili
// #059669, Bluetooth'un camgöbeği #0891b2, Çocuklara Özel'in gülü
// #e11d48, Görünmez'in grafiti #475569, Suya Dayanıklı'nın deniz
// mavisi-yeşili #0d9488, Yapay Zeka Destekli'nin çividi #4f46e5, Gürültü
// Engelleme'nin eflatunu #c026d3, Konuşma Odaklı'nın turuncusu #ea580c,
// Kablosuz Bağlantı'nın misket limonu #65a30d, Şarjlı Teknolojiler'in
// kırmızısı #dc2626, Uzaktan Kontrol'ün gök mavisi #0284c7, Tinnitus'un
// moru #9333ea, Hafif İşitme Kaybı'nın pembesi #db2777). heroBackground
// follows the same layered "Hero Background System" recipe as those
// pages, with the hue swapped for green.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const ortaDereceIsitmeKaybiHero: BrandPageHeroContent = {
  badge: "İHTİYACINIZA GÖRE · ORTA DERECE İŞİTME KAYBI",
  headingLines: ["Orta Derece İşitme Kaybı", "İçin Cihaz Rehberi"],
  paragraphs: [
    "Orta derece işitme kaybı (41-55 dB), normal ses tonundaki günlük konuşmaları takip etmekte belirgin zorluk yaşanmaya başladığı bir işitme kaybı derecesidir.",
    "Bu derecede işitme kaybı yaşayan kullanıcılar için, dengeli ses gücü sunan standart modellerden gürültülü ortam desteğine kadar Avrasya İşitme'de sıkça değerlendirdiğimiz cihaz seçeneklerini bir araya getirdik.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "DERECE ARALIĞI",
      accent: "#16a34a",
      title: "41-55 dB İşitme Eşiği",
      description: "Orta derece işitme kaybı, uluslararası sınıflandırmaya göre 41-55 desibel işitme eşiği aralığını ifade eder.",
    },
    {
      label: "DENGELİ SES GÜCÜ",
      accent: "#15803d",
      title: "Günlük Konuşmalar İçin Yeterli Amplifikasyon",
      description: "Bu derecedeki kayıplarda, normal ses tonundaki konuşmaları net duyabilmek için orta düzey amplifikasyon gerekir.",
    },
    {
      label: "GÜRÜLTÜ DESTEĞİ",
      accent: "#166534",
      title: "Kalabalık Ortamlarda Ek Destek",
      description: "Orta dereceli kayıplarda, gürültü azaltma ve yönlü mikrofon özellikleri sıkça değerlendirilir.",
    },
  ],
  image: {
    src: "/images/oticon/models/real.webp",
    alt: "Orta derece işitme kaybında sıkça tercih edilen, dengeli ses gücüne sahip kulak arkası işitme cihazı görseli",
  },
  floatingCard: {
    title: "Orta Dereceye Uygun",
    description: "Bu derece için sıkça önerilen dengeli ve güçlü modeller.",
  },
  accentColor: "#16a34a",
  accentColorHover: "#15803d",
  accentColorSoft: "rgb(22 163 74 / 0.12)",
  accentColorBorder: "rgb(22 163 74 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(22,163,74,0.35) 0%, rgba(22,163,74,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0a2013 60%, #0f331d 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#15803d",
  heroWaveOpacity: "0.18",
};
