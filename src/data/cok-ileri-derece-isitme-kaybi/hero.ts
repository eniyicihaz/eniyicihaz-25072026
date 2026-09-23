// Hero content for the "Çok İleri Derece İşitme Kaybı" product page
// (/ihtiyaciniza-gore/cok-ileri-derece-isitme-kaybi). Renders through the
// shared BrandPageHero component — same component every
// /isitme-cihazlari/*, /teknolojiler/* and /ihtiyaciniza-gore/* page
// uses. Fourth and final degree page of the "İhtiyacınıza Göre"
// product-page series' dB ladder (see header.data.ts's devicesMega third
// column), following Hafif, Orta and İleri Derece İşitme Kaybı. A
// health-classification topic — copy is deliberately careful throughout:
// self-diagnosis is never implied, and every section points back to a
// proper audiometric evaluation (odyometri) and, where relevant, a
// multidisciplinary KBB assessment as the only way to confirm degree,
// type and the full range of options.
//
// accentColor: koyu kehribar / deep amber-bronze (#92400e) — a
// deliberately dark, weighty shade distinct from the small-scale warning
// badge amber (#d97706) used contextually across every Considerations
// section, and distinct from every prior page's accent across all four
// series (BTE'nin mavisi #2563eb, ITE'nin moru #7c3aed, Şarj Edilebilir'in
// zümrüt yeşili #059669, Bluetooth'un camgöbeği #0891b2, Çocuklara
// Özel'in gülü #e11d48, Görünmez'in grafiti #475569, Suya Dayanıklı'nın
// deniz mavisi-yeşili #0d9488, Yapay Zeka Destekli'nin çividi #4f46e5,
// Gürültü Engelleme'nin eflatunu #c026d3, Konuşma Odaklı'nın turuncusu
// #ea580c, Kablosuz Bağlantı'nın misket limonu #65a30d, Şarjlı
// Teknolojiler'in kırmızısı #dc2626, Uzaktan Kontrol'ün gök mavisi
// #0284c7, Tinnitus'un moru #9333ea, Hafif İşitme Kaybı'nın pembesi
// #db2777, Orta Derece'nin yeşili #16a34a, İleri Derece'nin taş grisi
// #57534e). heroBackground follows the same layered "Hero Background
// System" recipe as those pages, with the hue swapped for deep amber.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const cokIleriDereceIsitmeKaybiHero: BrandPageHeroContent = {
  badge: "İHTİYACINIZA GÖRE · ÇOK İLERİ DERECE İŞİTME KAYBI",
  headingLines: ["Çok İleri Derece İşitme Kaybı", "İçin Cihaz Rehberi"],
  paragraphs: [
    "Çok ileri derece işitme kaybı (71 dB ve üzeri), konuşmaların büyük bölümünün güçlü amplifikasyon olmadan duyulamadığı, en yüksek düzeyde ses gücü gerektiren bir işitme kaybı derecesidir.",
    "Bu derecede işitme kaybı yaşayan kullanıcılar için, en yüksek kapasiteli power BTE modellerden kapsamlı destek özelliklerine kadar Avrasya İşitme'de sıkça değerlendirdiğimiz cihaz seçeneklerini bir araya getirdik.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "DERECE ARALIĞI",
      accent: "#92400e",
      title: "71 dB ve Üzeri İşitme Eşiği",
      description: "Çok ileri derece işitme kaybı, uluslararası sınıflandırmaya göre 71 desibel ve üzeri işitme eşiğini ifade eder.",
    },
    {
      label: "EN YÜKSEK AMPLİFİKASYON",
      accent: "#78350f",
      title: "Power BTE Modeller Öne Çıkar",
      description: "Bu derecedeki kayıplarda, en yüksek ses gücü kapasitesine sahip power BTE modeller sıkça değerlendirilir.",
    },
    {
      label: "KAPSAMLI DEĞERLENDİRME",
      accent: "#451a03",
      title: "Multidisipliner Yaklaşım Önemlidir",
      description: "Çok ileri derece kayıplarda, işitme cihazı ve gerektiğinde diğer tıbbi seçenekler bir arada değerlendirilebilir.",
    },
  ],
  image: {
    src: "/images/oticon/models/xceed.webp",
    alt: "Çok ileri derece işitme kaybında sıkça tercih edilen, en yüksek amplifikasyon kapasitesine sahip power BTE işitme cihazı görseli",
  },
  floatingCard: {
    title: "Çok İleri Dereceye Uygun",
    description: "Bu derece için sıkça önerilen en güçlü modeller.",
  },
  accentColor: "#92400e",
  accentColorHover: "#78350f",
  accentColorSoft: "rgb(146 64 14 / 0.12)",
  accentColorBorder: "rgb(146 64 14 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(146,64,14,0.35) 0%, rgba(146,64,14,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #201207 60%, #331d0a 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#78350f",
  heroWaveOpacity: "0.18",
};
