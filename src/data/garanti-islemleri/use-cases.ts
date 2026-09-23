// "Garanti Kapsamında Neler Yer Alır?" teaser grid for the
// /servis-bakim/garanti-islemleri page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here scoped to the concrete
// coverage questions users have.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const garantiIslemleriUseCases: BrandPageTechnologyContent = {
  badge: "GARANTİ KAPSAMINDA NELER YER ALIR",
  heading: "Garanti Kapsamında Neler Yer Alır?",
  intro: "Garanti sürecinizle ilgili sıkça sorulan kapsam konularına daha yakından bakalım.",
  items: [
    {
      label: "ÜRETİM HATASI",
      title: "Üretim Kaynaklı Sorunlar",
      description: "Cihazın üretiminden kaynaklanan teknik sorunlar garanti kapsamında değerlendirilir.",
    },
    {
      label: "KAPSAM DIŞI DURUMLAR",
      title: "Kullanıcı Kaynaklı Hasarlar",
      description: "Su teması, düşme veya yetkisiz müdahale gibi durumlar genellikle kapsam dışındadır.",
    },
    {
      label: "GEREKLİ BELGELER",
      title: "Fatura ve Garanti Belgesi",
      description: "Garanti talebi için satın alma faturası ve garanti belgesi gereklidir.",
    },
    {
      label: "GARANTİ SÜRESİ",
      title: "Marka ve Modele Göre Değişen Süre",
      description: "Garanti süresi, cihaz markası ve modeline göre değişebilir.",
    },
    {
      label: "GARANTİ DEVRİ",
      title: "İkinci El Devrinde Garanti Durumu",
      description: "Garantinin ikinci el satışta devredilip devredilmeyeceği modele göre değişir.",
    },
    {
      label: "KOLAY DEĞİŞİM İLE FARKI",
      title: "Garanti ile Kolay Değişim Arasındaki Fark",
      description: "Garanti üretim hatalarını kapsarken, Kolay Değişim memnuniyet ve ihtiyaç değişikliğini kapsar.",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
  accentColorHoverBorder: "rgb(79 70 229 / 0.5)",
};
