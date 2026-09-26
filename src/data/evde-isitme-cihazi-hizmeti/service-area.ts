// Evde Hizmet Bölgesi — ContactServiceArea üzerinden render edilir. Aynı
// gerçek tier yapısı (COMPANY.md §17), bu sayfanın "biz size geliriz"
// çerçevesiyle yeniden yazıldı.
import type { ContactServiceAreaContent } from "../../components/contact/ContactServiceArea/ContactServiceArea.astro";

export const evdeHizmetServiceArea: ContactServiceAreaContent = {
  eyebrow: "EVDE HİZMET BÖLGESİ",
  heading: "Darıca, Gebze ve Çayırova'da Evde Hizmet",
  intro: "Evde işitme cihazı hizmetimiz öncelikli olarak Darıca, Gebze ve Çayırova'da sunulmaktadır.",
  tierLabels: {
    merkez: "Merkez",
    oncelikli: "Öncelikli Hizmet Bölgeleri",
    cevre: "Çevre İlçeler",
  },
  items: [
    {
      name: "Darıca",
      tier: "merkez",
      description: "Merkezimiz Darıca'dadır; ilçe genelinde evde hizmet için ekibimiz kısa sürede adresinize ulaşabilir.",
    },
    {
      name: "Gebze",
      tier: "oncelikli",
      description: "Gebze'den randevu alarak evde işitme cihazı hizmetinden faydalanabilirsiniz.",
    },
    {
      name: "Çayırova",
      tier: "oncelikli",
      description: "Çayırova'dan da randevu alarak ekibimizi evinize davet edebilirsiniz.",
    },
    {
      name: "Dilovası",
      tier: "cevre",
      description: "Dilovası çevresinden de evde hizmet için bizi arayabilirsiniz.",
    },
  ],
  closing: "Kocaeli genelinde listede yer almayan bir bölgeden ulaşmak istiyorsanız, size yardımcı olup olamayacağımızı öğrenmek için bizi aramanız yeterli.",
};
