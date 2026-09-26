// Hizmet Bölgemiz — ContactServiceArea üzerinden render edilir. Kocaeli,
// ayrı bir tier item olarak değil (Darıca zaten Kocaeli içinde, peer
// göstermek yanıltıcı olurdu), kapanış cümlesinde geniş bölgesel bağlam
// olarak geçiyor.
import type { ContactServiceAreaContent } from "../../components/contact/ContactServiceArea/ContactServiceArea.astro";

export const hakkimizdaServiceArea: ContactServiceAreaContent = {
  eyebrow: "HİZMET BÖLGEMİZ",
  heading: "Darıca Merkezli, Çevresine Yakın Hizmet",
  intro: "Merkezimiz Darıca'da; Gebze ve Çayırova'dan gelen danışanlarımıza da hizmet veriyoruz.",
  tierLabels: {
    merkez: "Merkez",
    oncelikli: "Öncelikli Hizmet Bölgeleri",
    cevre: "Çevre İlçeler",
  },
  items: [
    {
      name: "Darıca",
      tier: "merkez",
      description: "Merkezimiz Darıca'dadır; adres ve yol tarifi için yukarıdaki konum kartını inceleyebilirsiniz.",
    },
    {
      name: "Gebze",
      tier: "oncelikli",
      description: "Gebze'den randevu alarak merkezimize kolayca ulaşabilirsiniz.",
    },
    {
      name: "Çayırova",
      tier: "oncelikli",
      description: "Çayırova'dan da randevu alarak merkezimize ulaşabilirsiniz.",
    },
  ],
  closing: "Kocaeli genelinde farklı bir bölgeden ulaşmak istiyorsanız, size yardımcı olup olamayacağımızı öğrenmek için bizi aramanız yeterli.",
};
