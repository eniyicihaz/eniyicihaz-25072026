// "Şarj Teknolojisi Türleri" section for the /isitme-cihazlari/
// sarj-edilebilir page. Renders through the shared BrandPageTechnology
// component (card grid) — same technique the ITE page's device-types.ts
// uses to repurpose this slot for a topic-specific classification, here
// the real charging-method variants instead of BTE's "Kullanım Alanları".

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const sarjEdilebilirChargingTypes: BrandPageTechnologyContent = {
  badge: "ŞARJ TEKNOLOJİSİ TÜRLERİ",
  heading: "Şarj Yöntemleri Arasındaki Farklar",
  intro: "Şarj edilebilir kategorisi tek bir yöntem değil, farklı şarj teknolojilerinden oluşan bir gruptur.",
  items: [
    {
      label: "EN YAYGIN",
      title: "Temaslı (Kontak) Şarj",
      description: "Cihaz, şarj kutusundaki metal temas noktalarına oturtularak doldurulur; en yaygın ve uygun maliyetli şarj yöntemidir.",
    },
    {
      label: "KABLOSUZ",
      title: "İndüksiyonlu (Kablosuz) Şarj",
      description: "Cihaz, metal temas noktası olmadan elektromanyetik indüksiyon yoluyla şarj olur; nem ve toza karşı ek koruma sağlayabilir.",
    },
    {
      label: "HIZLI ŞARJ",
      title: "Hızlı Şarj Desteği",
      description: "Bazı modeller, kısa süreli hızlı şarjla bile birkaç saatlik kullanım sağlayabilir; unutulan günler için pratik bir yedek sunar.",
    },
    {
      label: "TAŞINABİLİR",
      title: "Powerbank Özellikli Şarj Kutusu",
      description: "Bazı şarj kutuları dahili bataryasıyla prizsiz ortamlarda da birden fazla şarj döngüsü sağlayabilir.",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorHoverBorder: "rgb(5 150 105 / 0.5)",
};
