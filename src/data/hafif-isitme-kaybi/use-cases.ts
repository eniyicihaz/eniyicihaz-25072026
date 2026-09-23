// "Hafif İşitme Kaybında Öne Çıkan Cihaz Özellikleri" teaser grid for the
// /ihtiyaciniza-gore/hafif-isitme-kaybi page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped to
// the practical device features commonly matched to this degree instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const hafifIsitmeKaybiUseCases: BrandPageTechnologyContent = {
  badge: "ÖNE ÇIKAN ÖZELLİKLER",
  heading: "Hafif İşitme Kaybında Öne Çıkan Cihaz Özellikleri",
  intro: "Bu dereceye sıkça eşlik eden cihaz özelliklerine daha yakından bakalım.",
  items: [
    {
      label: "GÖRÜNÜRLÜK",
      title: "İnce ve Az Fark Edilen Tasarım",
      description: "Hafif kayıplarda görünürlüğü önceliklendiren ince RIC ve kulak içi modeller sıkça tercih edilir.",
    },
    {
      label: "AÇIK KULAK KALIBI",
      title: "Açık Kulak Kalıbıyla Doğal Ses Algısı",
      description: "Hafif kayıplarda, kulak kanalını tam kapatmayan açık kalıplar doğal ses algısını korumaya yardımcı olur.",
    },
    {
      label: "OTOMATİK AYAR",
      title: "Basit ve Otomatik Ayar Seçenekleri",
      description: "Bu derece için tasarlanan modeller genellikle sade, kolay kullanılan ayarlarla sunulur.",
    },
    {
      label: "GÜRÜLTÜ AZALTMA",
      title: "Temel Düzey Gürültü Azaltma",
      description: "Kalabalık ortamlarda konuşmayı takip etmeyi kolaylaştıran temel gürültü azaltma özellikleri sıkça bulunur.",
    },
    {
      label: "BAĞLANTI",
      title: "Telefon ve TV ile Kablosuz Bağlantı",
      description: "Bluetooth özellikli modeller, telefon görüşmelerini ve TV sesini doğrudan cihaza aktarabilir.",
    },
    {
      label: "PİL SEÇENEKLERİ",
      title: "Şarjlı veya Pilli Seçenekler",
      description: "Hafif kayıplara yönelik modeller hem şarjlı hem pilli seçeneklerle sunulabilir.",
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
  accentColorHoverBorder: "rgb(219 39 119 / 0.5)",
};
