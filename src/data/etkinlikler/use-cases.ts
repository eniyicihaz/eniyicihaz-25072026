// "Etkinlik Kategorileri" teaser grid for the /blog/etkinlikler page.
// Renders through the shared BrandPageTechnology component (6-card
// grid), same technique every prior series' use-cases.ts uses, here
// scoped to the general, conceptual event categories the clinic may
// take part in — deliberately no specific dates, consistent with this
// page's accuracy discipline. "Dünya İşitme Günü" references the real,
// globally-established WHO awareness day (well-known general
// knowledge) without claiming specific past participation details for
// this clinic.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const etkinliklerUseCases: BrandPageTechnologyContent = {
  badge: "ETKİNLİK KATEGORİLERİ",
  heading: "Katılım Gösterebileceğimiz Etkinlik Kategorileri",
  intro: "Dönem dönem katılım gösterdiğimiz etkinlikler genellikle aşağıdaki kategorilerden birine girer.",
  items: [
    {
      label: "FARKINDALIK GÜNLERİ",
      title: "Dünya İşitme Günü Etkinlikleri",
      description: "Dünya genelinde kutlanan işitme sağlığı farkındalık günlerinde etkinliklere katılım gösterebiliyoruz.",
    },
    {
      label: "OKUL TARAMALARI",
      title: "Okullarla İşbirliği Taramaları",
      description: "Öğrencilerde olası işitme kayıplarının erken fark edilmesine yönelik okul işbirlikleri.",
    },
    {
      label: "YAŞLI BAKIMI",
      title: "Yaşlı Bakım Merkezi Ziyaretleri",
      description: "Bakım merkezi sakinlerine yönelik bilgilendirme ve değerlendirme etkinlikleri.",
    },
    {
      label: "ÜCRETSİZ TEST GÜNLERİ",
      title: "Toplu Değerlendirme Günleri",
      description: "Belirli günlerde toplu işitme değerlendirmesi imkânı sunan etkinlikler.",
    },
    {
      label: "KURUMSAL İŞBİRLİĞİ",
      title: "İş Yeri Bilgilendirme Etkinlikleri",
      description: "Kurumlarla birlikte çalışanlara yönelik düzenlenen bilgilendirme etkinlikleri.",
    },
    {
      label: "SAĞLIK SEMİNERLERİ",
      title: "İşitme Sağlığı Seminerleri",
      description: "İşitme sağlığı konusunda genel bilgilendirme amaçlı seminer ve sohbet toplantıları.",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorHoverBorder: "rgb(5 150 105 / 0.5)",
};
