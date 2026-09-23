// "Etkinliklerimiz Nasıl İşler?" section for the /blog/etkinlikler
// page. Renders through the shared BrandPageIntro component. Paragraph
// 3-4 are the load-bearing accuracy disclaimer — deliberately avoids
// stating any specific past or upcoming event date. See hero.ts for
// the full rationale.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const etkinliklerIntro: BrandPageIntroContent = {
  badge: "ETKİNLİKLERİMİZ NASIL İŞLER?",
  heading: "Etkinliklerimiz Nasıl İşler?",
  paragraphs: [
    "İşitme sağlığı farkındalığını desteklemek amacıyla, kliniğimiz dönem dönem çeşitli toplum sağlığı etkinliklerine katılım gösterebiliyor.",
    "Bu etkinlikler; farkındalık günlerinden okul taramalarına, kurumsal işbirliklerinden ücretsiz test günlerine kadar farklı kategorilerde olabiliyor.",
    "Etkinlik takvimi ve katılım şartları zaman içinde değişebildiğinden, bu sayfada belirli bir tarih paylaşmıyoruz.",
    "Güncel etkinlik takvimimiz hakkında en doğru bilgiyi almak için bizi aramanızı veya WhatsApp üzerinden yazmanızı öneririz.",
  ],
  stats: [
    { value: "Dönemsel", label: "Etkinlik Takvimi" },
    { value: "Farklı Kategoriler", label: "Etkinlik Türleri" },
    { value: "Telefon / WhatsApp", label: "Güncel Bilgi" },
    { value: "Okul ve Kurumlarla", label: "İşbirliği" },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
