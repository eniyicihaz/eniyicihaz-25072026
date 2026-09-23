// Hero content for the "İleri Derece İşitme Kaybı" product page
// (/ihtiyaciniza-gore/ileri-derece-isitme-kaybi). Renders through the
// shared BrandPageHero component — same component every
// /isitme-cihazlari/*, /teknolojiler/* and /ihtiyaciniza-gore/* page
// uses. Third page of the "İhtiyacınıza Göre" product-page series (see
// header.data.ts's devicesMega third column), following Hafif and Orta
// Derece İşitme Kaybı. A health-classification topic — copy is
// deliberately careful throughout: self-diagnosis is never implied, and
// every section points back to a proper audiometric evaluation
// (odyometri) as the only way to confirm degree and type.
//
// accentColor: taş grisi / stone (#57534e) — a deliberately more muted,
// weightier tone chosen to echo the increased severity of this degree,
// distinct from every prior page's accent across all four series (BTE'nin
// mavisi #2563eb, ITE'nin moru #7c3aed, Şarj Edilebilir'in zümrüt yeşili
// #059669, Bluetooth'un camgöbeği #0891b2, Çocuklara Özel'in gülü
// #e11d48, Görünmez'in grafiti (slate) #475569, Suya Dayanıklı'nın deniz
// mavisi-yeşili #0d9488, Yapay Zeka Destekli'nin çividi #4f46e5, Gürültü
// Engelleme'nin eflatunu #c026d3, Konuşma Odaklı'nın turuncusu #ea580c,
// Kablosuz Bağlantı'nın misket limonu #65a30d, Şarjlı Teknolojiler'in
// kırmızısı #dc2626, Uzaktan Kontrol'ün gök mavisi #0284c7, Tinnitus'un
// moru #9333ea, Hafif İşitme Kaybı'nın pembesi #db2777, Orta Derece'nin
// yeşili #16a34a). heroBackground follows the same layered "Hero
// Background System" recipe as those pages, with the hue swapped for
// stone.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const ileriDereceIsitmeKaybiHero: BrandPageHeroContent = {
  badge: "İHTİYACINIZA GÖRE · İLERİ DERECE İŞİTME KAYBI",
  headingLines: ["İleri Derece İşitme Kaybı", "İçin Cihaz Rehberi"],
  paragraphs: [
    "İleri derece işitme kaybı (56-70 dB), yüksek sesle konuşulsa bile konuşmaları anlamakta zorluk yaşanabildiği, güçlü amplifikasyon gerektiren bir işitme kaybı derecesidir.",
    "Bu derecede işitme kaybı yaşayan kullanıcılar için, güçlü ses gücü sunan modellerden gelişmiş gürültü ve konuşma desteğine kadar Avrasya İşitme'de sıkça değerlendirdiğimiz cihaz seçeneklerini bir araya getirdik.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "DERECE ARALIĞI",
      accent: "#57534e",
      title: "56-70 dB İşitme Eşiği",
      description: "İleri derece işitme kaybı, uluslararası sınıflandırmaya göre 56-70 desibel işitme eşiği aralığını ifade eder.",
    },
    {
      label: "GÜÇLÜ AMPLİFİKASYON",
      accent: "#44403c",
      title: "Yüksek Ses Gücüne Sahip Modeller",
      description: "Bu derecedeki kayıplarda, konuşmaları anlaşılır kılmak için daha güçlü amplifikasyon kapasiteli cihazlar gerekir.",
    },
    {
      label: "GELİŞMİŞ DESTEK ÖZELLİKLERİ",
      accent: "#292524",
      title: "Gürültü ve Konuşma Desteği Öne Çıkar",
      description: "İleri dereceli kayıplarda, gürültü azaltma ve yönlü mikrofon gibi gelişmiş özellikler sıkça değerlendirilir.",
    },
  ],
  image: {
    src: "/images/phonak/models/naida.webp",
    alt: "İleri derece işitme kaybında sıkça tercih edilen, güçlü amplifikasyon kapasiteli kulak arkası işitme cihazı görseli",
  },
  floatingCard: {
    title: "İleri Dereceye Uygun",
    description: "Bu derece için sıkça önerilen güçlü ve dayanıklı modeller.",
  },
  accentColor: "#57534e",
  accentColorHover: "#44403c",
  accentColorSoft: "rgb(87 83 78 / 0.12)",
  accentColorBorder: "rgb(87 83 78 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(87,83,78,0.35) 0%, rgba(87,83,78,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #1c1a18 60%, #292524 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#44403c",
  heroWaveOpacity: "0.18",
};
