// "Şarjlı Teknolojide Öne Çıkan Mühendislik Özellikleri" teaser grid for
// the /teknolojiler/sarjli-teknolojiler page. Renders through the shared
// BrandPageTechnology component (6-card grid) — unlike the BTE page's
// use-cases.ts (everyday scenarios) or the Şarj Edilebilir page's
// charging-types.ts (contact/inductive/fast/powerbank charging methods
// as a user-facing feature), this slot is repurposed for the engineering
// properties themselves, keeping this page's technical framing distinct
// from its sibling's buying-guide framing.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const sarjliTeknolojilerUseCases: BrandPageTechnologyContent = {
  badge: "MÜHENDİSLİK ÖZELLİKLERİ",
  heading: "Şarjlı Teknolojide Öne Çıkan Mühendislik Özellikleri",
  intro: "Şarj altyapısını oluşturan temel mühendislik bileşenlerine daha yakından bakalım.",
  items: [
    {
      label: "PİL KİMYASI",
      title: "Yüksek Enerji Yoğunluklu Lityum-İyon Hücreler",
      description: "Küçük hacimde yüksek kapasite sunan lityum-iyon pil kimyası, gün boyu kullanım sağlar.",
    },
    {
      label: "GÜVENLİK",
      title: "Aşırı Şarj ve Isınma Koruması",
      description: "Dahili şarj yönetim devresi, akım ve sıcaklığı sürekli denetleyerek güvenli şarj sağlar.",
    },
    {
      label: "DÖNGÜ ÖMRÜ",
      title: "Yüzlerce Şarj Döngüsüne Dayanıklılık",
      description: "Modern hücreler, yıllar süren düzenli kullanıma dayanacak şekilde mühendislik edilir.",
    },
    {
      label: "HIZLI ŞARJ",
      title: "Optimize Edilmiş Hızlı Şarj Devreleri",
      description: "Gelişmiş şarj devreleri, kısa sürede yüksek oranda şarj imkânı sunabilir.",
    },
    {
      label: "PİL TAKİBİ",
      title: "Uygulama Üzerinden Pil Sağlığı İzleme",
      description: "Bazı modeller, şarj döngüsü ve pil sağlığı verilerini uygulama üzerinden sunar.",
    },
    {
      label: "ÇEVRE",
      title: "Daha Az Pil Atığı",
      description: "Tekrar kullanılabilir pil kimyası, tek kullanımlık pillere kıyasla daha az atık üretir.",
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
  accentColorHoverBorder: "rgb(220 38 38 / 0.5)",
};
