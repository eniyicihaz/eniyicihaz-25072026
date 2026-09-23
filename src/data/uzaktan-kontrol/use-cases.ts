// "Uzaktan Kontrol Özellikleriyle Neler Yapabilirsiniz?" teaser grid for
// the /teknolojiler/uzaktan-kontrol page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped to
// remote-control-specific scenarios instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const uzaktanKontrolUseCases: BrandPageTechnologyContent = {
  badge: "KULLANIM ALANLARI",
  heading: "Uzaktan Kontrol Özellikleriyle Neler Yapabilirsiniz?",
  intro: "Uzaktan kontrolün günlük yaşamın hangi anlarında fark yarattığına daha yakından bakalım.",
  items: [
    {
      label: "SES SEVİYESİ",
      title: "Ses Seviyesini Anında Ayarlayın",
      description: "Ortam gürültüsüne göre ses seviyesini telefonunuzdan veya kumandadan hızlıca değiştirebilirsiniz.",
    },
    {
      label: "PROGRAM DEĞİŞİMİ",
      title: "Farklı Dinleme Programları Arasında Geçiş Yapın",
      description: "Restoran, ev, dış mekan gibi farklı programlar arasında kolayca geçiş yapabilirsiniz.",
    },
    {
      label: "UZAKTAN DESTEK",
      title: "Video Görüşmeyle İnce Ayar Alın",
      description: "Odyometristiniz, video görüşme sırasında cihaz ayarlarınızı uzaktan güncelleyebilir.",
    },
    {
      label: "AİLE TAKİBİ",
      title: "Bakım Verenin Durumu Takip Etmesini Sağlayın",
      description: "Bazı uygulamalar, aile üyelerinin cihaz durumunu uzaktan görmesine imkân tanır.",
    },
    {
      label: "GİZLİ KONTROL",
      title: "Fark Ettirmeden Ayar Yapın",
      description: "Telefon üzerinden yapılan ayarlar, sosyal ortamlarda fark ettirmeden değişiklik yapmanızı sağlar.",
    },
    {
      label: "RANDEVU TASARRUFU",
      title: "Küçük Ayarlar İçin Kliniğe Gelmeyin",
      description: "Basit ayar güncellemeleri için uzaktan destek oturumu yeterli olabilir.",
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorHoverBorder: "rgb(2 132 199 / 0.5)",
};
