// "Uzaktan Ayar Oturumunda Neler Yapılabilir?" teaser grid for the
// /uygulama-ayar/uzaktan-ayar page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here scoped to the concrete
// adjustment types realistically handled in a remote session.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const uzaktanAyarUseCases: BrandPageTechnologyContent = {
  badge: "UZAKTAN AYAR OTURUMUNDA NELER YAPILABİLİR",
  heading: "Uzaktan Ayar Oturumunda Neler Yapılabilir?",
  intro: "Bir uzaktan ayar oturumunda değerlendirilebilecek gerçekçi ayar türlerine daha yakından bakalım.",
  items: [
    {
      label: "SES SEVİYESİ",
      title: "Genel Ses Seviyesi Güncellemesi",
      description: "Genel ses seviyenizde küçük bir artış veya azaltma yapılabilir.",
    },
    {
      label: "PROGRAM İNCE AYARI",
      title: "Mevcut Program Üzerinde İnce Ayar",
      description: "Daha önce oluşturulmuş bir dinleme programında küçük düzeltmeler yapılabilir.",
    },
    {
      label: "GÜRÜLTÜ AZALTMA",
      title: "Gürültü Azaltma Hassasiyeti",
      description: "Gürültü azaltma seviyesinde geri bildiriminize göre küçük bir güncelleme yapılabilir.",
    },
    {
      label: "GERİ BİLDİRİM KONTROLÜ",
      title: "Islık Sesi (Feedback) Kontrolü",
      description: "Hafif bir ıslık sesi şikayeti, uzaktan yapılan bir ayarla değerlendirilebilir.",
    },
    {
      label: "KULLANIM DANIŞMANLIĞI",
      title: "Kullanım Sorunu Danışmanlığı",
      description: "Cihazınızın günlük kullanımıyla ilgili sorularınız oturum sırasında yanıtlanabilir.",
    },
    {
      label: "SONRAKİ ADIM PLANLAMASI",
      title: "Sonraki Randevunun Planlanması",
      description: "Gerekirse, kapsamlı bir değerlendirme için yüz yüze randevu birlikte planlanır.",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
  accentColorHoverBorder: "rgb(22 163 74 / 0.5)",
};
