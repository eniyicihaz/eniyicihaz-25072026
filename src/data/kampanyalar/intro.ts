// "Kampanyalarımız Nasıl İşler?" section for the /blog/kampanyalar
// page. Renders through the shared BrandPageIntro component. Paragraph
// 3-4 are the load-bearing accuracy disclaimer — deliberately avoids
// stating any specific discount, price or expiry date. See hero.ts for
// the full rationale.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const kampanyalarIntro: BrandPageIntroContent = {
  badge: "KAMPANYALARIMIZ NASIL İŞLER?",
  heading: "Kampanyalarımız Nasıl İşler?",
  paragraphs: [
    "Kliniğimizde, kullanıcılarımıza farklı avantajlar sunmak amacıyla dönem dönem çeşitli kategorilerde kampanyalar düzenliyoruz.",
    "Bu kampanyalar; yeni kullanıcılara yönelik avantajlardan aile paketlerine, sezonluk fırsatlardan sadakat avantajlarına kadar farklı kategorilerde olabiliyor.",
    "Kampanya içerikleri, şartları ve süreleri zaman içinde değişebildiğinden, bu sayfada belirli bir tarih veya oran paylaşmıyoruz.",
    "Güncel ve aktif kampanyalarımız hakkında en doğru bilgiyi almak için bizi aramanızı veya WhatsApp üzerinden yazmanızı öneririz.",
  ],
  stats: [
    { value: "Dönemsel", label: "Kampanya Takvimi" },
    { value: "Farklı Kategoriler", label: "Kampanya Türleri" },
    { value: "Telefon / WhatsApp", label: "Güncel Bilgi" },
    { value: "Şeffaf Şartlar", label: "Randevuda Paylaşılır" },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
