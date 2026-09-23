// Hero content for the "Hafif İşitme Kaybı" product page
// (/ihtiyaciniza-gore/hafif-isitme-kaybi). Renders through the shared
// BrandPageHero component — same component every /isitme-cihazlari/* and
// /teknolojiler/* page uses. First page of the "İhtiyacınıza Göre"
// product-page series (see header.data.ts's devicesMega -> third column)
// — a new series, distinct from the completed "İşitme Cihazı Çeşitleri"
// and "Teknolojilere Göre" series, hence its own /ihtiyaciniza-gore/
// route prefix. A health-classification topic — copy is deliberately
// careful throughout: self-diagnosis is never implied, and every section
// points back to a proper audiometric evaluation (odyometri) as the only
// way to confirm degree and type.
//
// accentColor: pembe / pink (#db2777) — a category accent distinct from
// every prior page's accent across all three series (BTE'nin mavisi
// #2563eb, ITE'nin moru #7c3aed, Şarj Edilebilir'in yeşili #059669,
// Bluetooth'un camgöbeği #0891b2, Çocuklara Özel'in gülü #e11d48,
// Görünmez'in grafiti #475569, Suya Dayanıklı'nın deniz mavisi-yeşili
// #0d9488, Yapay Zeka Destekli'nin çividi #4f46e5, Gürültü Engelleme'nin
// eflatunu #c026d3, Konuşma Odaklı'nın turuncusu #ea580c, Kablosuz
// Bağlantı'nın misket limonu #65a30d, Şarjlı Teknolojiler'in kırmızısı
// #dc2626, Uzaktan Kontrol'ün gök mavisi #0284c7, Tinnitus'un eflatunu
// (purple) #9333ea). heroBackground follows the same layered "Hero
// Background System" recipe as those pages, with the hue swapped for
// pink.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const hafifIsitmeKaybiHero: BrandPageHeroContent = {
  badge: "İHTİYACINIZA GÖRE · HAFİF İŞİTME KAYBI",
  headingLines: ["Hafif İşitme Kaybı", "İçin Cihaz Rehberi"],
  paragraphs: [
    "Hafif işitme kaybı (26-40 dB), genellikle fısıltı veya uzak sesleri duymakta güçlük olarak fark edilen, günlük konuşmaların çoğunu etkilemeyen bir işitme kaybı derecesidir.",
    "Bu derecede işitme kaybı yaşayan kullanıcılar için, ince ve göze az batan modellerden gürültülü ortam desteğine kadar Avrasya İşitme'de sıkça değerlendirdiğimiz cihaz seçeneklerini bir araya getirdik.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "DERECE ARALIĞI",
      accent: "#db2777",
      title: "26-40 dB İşitme Eşiği",
      description: "Hafif işitme kaybı, uluslararası sınıflandırmaya göre 26-40 desibel işitme eşiği aralığını ifade eder.",
    },
    {
      label: "İNCE VE DİSKRET MODELLER",
      accent: "#be185d",
      title: "Göze Az Batan Cihaz Seçenekleri",
      description: "Bu derecedeki kayıplarda, görünürlüğü öncelik gören ince RIC ve kulak içi modeller sıkça tercih edilir.",
    },
    {
      label: "ERKEN DEĞERLENDİRME",
      accent: "#9d174d",
      title: "Erken Müdahale Önemlidir",
      description: "Hafif derecede bile olsa, erken cihazlandırma günlük iletişim kalitesini korumaya yardımcı olabilir.",
    },
  ],
  image: {
    src: "/images/widex/models/allure.webp",
    alt: "Hafif işitme kaybında sıkça tercih edilen, göze az batan kulak içi işitme cihazı görseli",
  },
  floatingCard: {
    title: "Hafif Dereceye Uygun",
    description: "Bu derece için sıkça önerilen ince ve konforlu modeller.",
  },
  accentColor: "#db2777",
  accentColorHover: "#be185d",
  accentColorSoft: "rgb(219 39 119 / 0.12)",
  accentColorBorder: "rgb(219 39 119 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(219,39,119,0.35) 0%, rgba(219,39,119,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #26071a 60%, #3f0f2a 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#be185d",
  heroWaveOpacity: "0.18",
};
