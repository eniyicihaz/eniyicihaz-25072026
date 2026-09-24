// Hizmet Bölgeleri — Kişiye Özel Ayar, plan §3/Bölüm 7. Renders through
// the existing ContactServiceArea (zero code changes). Aynı gerçek tier
// yapısı (COMPANY.md §17), bu sayfanın kendi "ayar randevusu" çerçevesiyle
// yeniden yazıldı.
import type { ContactServiceAreaContent } from "../../components/contact/ContactServiceArea/ContactServiceArea.astro";

export const kisiyeOzelAyarServiceArea: ContactServiceAreaContent = {
  eyebrow: "HİZMET BÖLGELERİ",
  heading: "Gebze ve Çayırova'dan Darıca'ya Ayar Randevusu İçin",
  intro: "Merkezimiz Darıca'da; Gebze ve Çayırova'dan da kolayca ulaşıp kişiye özel ayar randevunuzu alabilirsiniz.",
  tierLabels: {
    merkez: "Merkez",
    oncelikli: "Öncelikli Hizmet Bölgeleri",
    cevre: "Çevre İlçeler",
  },
  items: [
    {
      name: "Darıca",
      tier: "merkez",
      description: "Kişiye özel ayar merkezimiz Darıca'dadır; adres ve yol tarifi için yukarıdaki konum kartını inceleyebilirsiniz.",
    },
    {
      name: "Gebze",
      tier: "oncelikli",
      description: "Gebze'den randevu alarak merkezimize kolayca ulaşabilir, cihazınızın ayarını yaptırabilirsiniz.",
    },
    {
      name: "Çayırova",
      tier: "oncelikli",
      description: "Çayırova'dan da randevu alarak merkezimize ulaşabilir, ayar sürecine başlayabilirsiniz.",
    },
    {
      name: "Dilovası",
      tier: "cevre",
      description: "Dilovası çevresinden de kişiye özel ayar için bizi arayabilirsiniz.",
    },
    {
      name: "Tuzla",
      tier: "cevre",
      description: "Tuzla çevresinden de kişiye özel ayar için bizi arayabilirsiniz.",
    },
    {
      name: "Pendik",
      tier: "cevre",
      description: "Pendik çevresinden de kişiye özel ayar için bizi arayabilirsiniz.",
    },
  ],
  closing: "Listede yer almayan bir bölgeden ulaşmak istiyorsanız, size yardımcı olup olamayacağımızı öğrenmek için bizi aramanız yeterli.",
};
