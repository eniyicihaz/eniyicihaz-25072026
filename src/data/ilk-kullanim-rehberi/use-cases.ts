// "Bilmeniz Gereken Temel Kontroller" teaser grid for the /rehberler/
// ilk-kullanim-rehberi page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here scoped to concrete operational
// basics rather than product features.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const ilkKullanimRehberiUseCases: BrandPageTechnologyContent = {
  badge: "BİLMENİZ GEREKEN TEMEL KONTROLLER",
  heading: "Bilmeniz Gereken Temel Kontroller",
  intro: "Günlük kullanımda sıkça ihtiyaç duyacağınız temel işlemlere daha yakından bakalım.",
  items: [
    {
      label: "AÇMA / KAPAMA",
      title: "Cihazı Açma ve Kapama",
      description: "Cihazınızı nasıl açıp kapatacağınızı öğrenmek, günlük kullanımın ilk adımıdır.",
    },
    {
      label: "SES SEVİYESİ",
      title: "Ses Seviyesi Ayarı",
      description: "Ortama göre ses seviyenizi nasıl ayarlayacağınızı öğrenebilirsiniz.",
    },
    {
      label: "PROGRAM DEĞİŞİMİ",
      title: "Dinleme Programları Arasında Geçiş",
      description: "Cihazınızda birden fazla program varsa, aralarında nasıl geçiş yapacağınızı öğrenirsiniz.",
    },
    {
      label: "PİL / ŞARJ GÖSTERGESİ",
      title: "Pil veya Şarj Durumunu Kontrol Etme",
      description: "Cihazınızın pil veya şarj seviyesini nasıl kontrol edeceğinizi öğrenebilirsiniz.",
    },
    {
      label: "UYGULAMA BAĞLANTISI",
      title: "Akıllı Telefon Uygulamasına Bağlanma",
      description: "Cihazınızı destekleyen bir uygulama varsa, ilk eşleştirmeyi nasıl yapacağınızı öğrenirsiniz.",
    },
    {
      label: "BASİT SORUN GİDERME",
      title: "Ses Gelmiyorsa Neler Kontrol Edilir",
      description: "Ses gelmemesi gibi basit durumlarda önce kontrol edebileceğiniz adımları öğrenirsiniz.",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorHoverBorder: "rgb(5 150 105 / 0.5)",
};
