// Hizmet Bölgeleri — Marka Danışmanlığı, plan §D. Renders through the
// existing ContactServiceArea (zero code changes). Aynı gerçek tier
// yapısı (COMPANY.md §17), bu sayfanın kendi çerçevesiyle yeniden yazıldı.
import type { ContactServiceAreaContent } from "../../components/contact/ContactServiceArea/ContactServiceArea.astro";

export const markaDanismanligiServiceArea: ContactServiceAreaContent = {
  eyebrow: "HİZMET BÖLGELERİ",
  heading: "Gebze ve Çayırova'dan Marka Danışmanlığı İçin",
  intro: "Merkezimiz Darıca'da; Gebze ve Çayırova'dan da kolayca ulaşıp marka danışmanlığı randevunuzu alabilirsiniz.",
  tierLabels: {
    merkez: "Merkez",
    oncelikli: "Öncelikli Hizmet Bölgeleri",
    cevre: "Çevre İlçeler",
  },
  items: [
    {
      name: "Darıca",
      tier: "merkez",
      description: "Marka danışmanlığı merkezimiz Darıca'dadır; adres ve yol tarifi için yukarıdaki konum kartını inceleyebilirsiniz.",
    },
    {
      name: "Gebze",
      tier: "oncelikli",
      description: "Gebze'den randevu alarak merkezimize kolayca ulaşabilir, marka değerlendirmesi yaptırabilirsiniz.",
    },
    {
      name: "Çayırova",
      tier: "oncelikli",
      description: "Çayırova'dan da randevu alarak merkezimize ulaşabilir, aynı danışmanlık sürecinden faydalanabilirsiniz.",
    },
    {
      name: "Dilovası",
      tier: "cevre",
      description: "Dilovası çevresinden de marka danışmanlığı için bizi arayabilirsiniz.",
    },
    {
      name: "Tuzla",
      tier: "cevre",
      description: "Tuzla çevresinden de marka danışmanlığı için bizi arayabilirsiniz.",
    },
    {
      name: "Pendik",
      tier: "cevre",
      description: "Pendik çevresinden de marka danışmanlığı için bizi arayabilirsiniz.",
    },
  ],
  closing: "Listede yer almayan bir bölgeden ulaşmak istiyorsanız, size yardımcı olup olamayacağımızı öğrenmek için bizi aramanız yeterli.",
};
