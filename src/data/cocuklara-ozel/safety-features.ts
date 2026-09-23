// "Çocuk Cihazlarında Öne Çıkan Güvenlik ve Kullanım Özellikleri" teaser
// grid for the /isitme-cihazlari/cocuklara-ozel page. Renders through the
// shared BrandPageTechnology component (6-card grid), same technique the
// BTE page's use-cases.ts uses for everyday-scenario coverage, here scoped
// to child-specific safety and usage features instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const cocuklaraOzelSafetyFeatures: BrandPageTechnologyContent = {
  badge: "GÜVENLİK VE KULLANIM ÖZELLİKLERİ",
  heading: "Çocuk Cihazlarında Öne Çıkan Güvenlik ve Kullanım Özellikleri",
  intro: "Çocuklara özel modelleri standart modellerden ayıran temel özelliklere daha yakından bakalım.",
  items: [
    {
      label: "GÜVENLİK",
      title: "Kilitli Pil Kapağı",
      description: "Küçük pillerin kazara yutulmasını önlemeye yardımcı olan özel kilit mekanizması içerir.",
    },
    {
      label: "TASARIM",
      title: "Renkli ve Eğlenceli Seçenekler",
      description: "Çocuğun cihazı sahiplenmesini kolaylaştıran canlı renk ve desen seçenekleri sunar.",
    },
    {
      label: "DAYANIKLILIK",
      title: "Sağlam ve Neme Dayanıklı Gövde",
      description: "Oyun ve hareket sırasında oluşabilecek darbelere ve hafif neme karşı dayanıklıdır.",
    },
    {
      label: "BÜYÜME UYUMU",
      title: "Kolayca Yenilenebilir Kulak Kalıbı",
      description: "Yumuşak silikon kalıplar, büyüyen kulağa göre sık aralıklarla kolayca uyarlanabilir.",
    },
    {
      label: "OKUL",
      title: "Roger/FM Sistemleriyle Sınıf Uyumu",
      description: "Öğretmen mikrofonundan gelen ses doğrudan cihaza aktarılarak sınıf gürültüsünün etkisi azaltılır.",
    },
    {
      label: "TAKİP",
      title: "Ebeveyn Uygulamasıyla Uzaktan İzleme",
      description: "Bazı modellerde ebeveynler cihazın durumunu ve ayarlarını uygulama üzerinden takip edebilir.",
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
  accentColorHoverBorder: "rgb(225 29 72 / 0.5)",
};
