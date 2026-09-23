// "Aktif Yaşam İçin Öne Çıkan Cihaz Özellikleri" teaser grid for the
// /ihtiyaciniza-gore/aktif-yasam-icin-cihazlar page. Renders through the
// shared BrandPageTechnology component (6-card grid), same technique the
// BTE page's use-cases.ts uses for everyday-scenario coverage, here
// scoped to the practical device features commonly matched to this need
// group instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const aktifYasamIcinCihazlarUseCases: BrandPageTechnologyContent = {
  badge: "ÖNE ÇIKAN ÖZELLİKLER",
  heading: "Aktif Yaşam İçin Öne Çıkan Cihaz Özellikleri",
  intro: "Bu ihtiyaç grubuna sıkça eşlik eden cihaz özelliklerine daha yakından bakalım.",
  items: [
    {
      label: "GÜVENLİ OTURMA",
      title: "Hareket Sırasında Yerinde Kalan Tasarım",
      description: "İnce kancalar veya özel tutucular, egzersiz sırasında cihazın yerinde kalmasına yardımcı olabilir.",
    },
    {
      label: "DAYANIKLILIK",
      title: "Ter ve Neme Dayanıklı Yapı",
      description: "Yüksek IP koruma sınıfına sahip modeller, aktif kullanım sırasında ek güven sağlayabilir.",
    },
    {
      label: "RÜZGAR GÜRÜLTÜSÜ",
      title: "Açık Havada Net Konuşma Algısı",
      description: "Gelişmiş mikrofon teknolojileri, rüzgar kaynaklı gürültüyü azaltmaya yardımcı olabilir.",
    },
    {
      label: "PİL ÖMRÜ",
      title: "Hızlı Şarj ve Uzun Kullanım Süresi",
      description: "Şarj edilebilir sistemler, yoğun bir günü tamamlamaya yetecek pil ömrü sunabilir.",
    },
    {
      label: "BAĞLANTI",
      title: "Egzersiz Sırasında Telefon ve Müzik Bağlantısı",
      description: "Bluetooth özellikli modeller, antrenman sırasında sesi doğrudan cihaza aktarabilir.",
    },
    {
      label: "HAFİFLİK",
      title: "Hafif ve Az Fark Edilen Tasarım",
      description: "İnce ve hafif modeller, aktif kullanım sırasında rahatsızlık hissini azaltmaya yardımcı olabilir.",
    },
  ],
  accentColor: "#4b5563",
  accentColorBadgeBg: "rgb(75 85 99 / 0.08)",
  accentColorBadgeBorder: "rgb(75 85 99 / 0.35)",
  accentColorBadgeText: "#374151",
  accentColorHoverBorder: "rgb(75 85 99 / 0.5)",
};
