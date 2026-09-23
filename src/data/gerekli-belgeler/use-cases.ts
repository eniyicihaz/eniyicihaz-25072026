// "Belge Kategorileri" teaser grid for the /sgk/gerekli-belgeler page.
// Renders through the shared BrandPageTechnology component (6-card
// grid), same technique every prior series' use-cases.ts uses, here
// scoped to the document categories that make up an SGK application.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const gerekliBelgelerUseCases: BrandPageTechnologyContent = {
  badge: "BELGE KATEGORİLERİ",
  heading: "Başvurunuzu Oluşturan Belge Kategorileri",
  intro: "SGK başvurunuz, aşağıdaki belge kategorilerinin bir araya getirilmesiyle tamamlanır.",
  items: [
    {
      label: "SAĞLIK KURULU RAPORU",
      title: "Heyet Raporu",
      description: "İşitme kaybınızı ve cihaz ihtiyacınızı belgeleyen resmi rapor.",
    },
    {
      label: "UZMAN HEKİM REÇETESİ",
      title: "İşitme Cihazı Reçetesi",
      description: "Raporunuza ek olarak düzenlenen, cihaz kullanımını öneren reçete.",
    },
    {
      label: "KİMLİK BELGESİ",
      title: "Nüfus Cüzdanı veya Kimlik Kartı",
      description: "Başvuru sahibinin kimlik bilgilerini doğrulamak için istenir.",
    },
    {
      label: "SGK KAYIT BİLGİLERİ",
      title: "Güncel Sigortalılık Bilgisi",
      description: "SGK sisteminde güncel ve doğru sigortalılık durumunun yer alması gerekir.",
    },
    {
      label: "VELİ/VASİ BELGESİ",
      title: "Çocuk Başvurularında Ek Belge",
      description: "18 yaş altındaki başvurularda veli veya vasi bilgisini gösteren belge istenebilir.",
    },
    {
      label: "ÖNCEKİ CİHAZ BİLGİSİ",
      title: "Yenileme Başvurularında Ek Belge",
      description: "Mevcut cihazınıza dair bilgiler, yenileme başvurularında istenebilir.",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
  accentColorHoverBorder: "rgb(79 70 229 / 0.5)",
};
