// "Gebze ve Çayırova'dan Darıca'ya Cihaz Denemek İçin" — redesign plan
// §1/§6, Bölüm 9. Renders through the existing ContactServiceArea
// component (zero code changes). Same real tier structure as /iletisim
// and the redesigned Ücretsiz İşitme Testi page (COMPANY.md §17 is the
// single source of truth for real service areas) — rewritten with this
// page's own trial-appointment framing rather than duplicated wording.
import type { ContactServiceAreaContent } from "../../components/contact/ContactServiceArea/ContactServiceArea.astro";

export const cihazDenemeServiceArea: ContactServiceAreaContent = {
  eyebrow: "HİZMET BÖLGELERİ",
  heading: "Gebze ve Çayırova'dan Darıca'ya Cihaz Denemek İçin",
  intro: "Merkezimiz Darıca'da; Gebze ve Çayırova'dan da kolayca ulaşıp cihaz deneme randevunuzu alabilirsiniz.",
  tierLabels: {
    merkez: "Merkez",
    oncelikli: "Öncelikli Hizmet Bölgeleri",
    cevre: "Çevre İlçeler",
  },
  items: [
    {
      name: "Darıca",
      tier: "merkez",
      description: "Cihaz deneme merkezimiz Darıca'dadır; adres ve yol tarifi için yukarıdaki konum kartını inceleyebilirsiniz.",
    },
    {
      name: "Gebze",
      tier: "oncelikli",
      description: "Gebze'den randevu alarak merkezimize kolayca ulaşabilir, cihaz denemeye başlayabilirsiniz.",
    },
    {
      name: "Çayırova",
      tier: "oncelikli",
      description: "Çayırova'dan da randevu alarak merkezimize ulaşabilir, cihaz denemeye başlayabilirsiniz.",
    },
    {
      name: "Dilovası",
      tier: "cevre",
      description: "Dilovası çevresinden de cihaz denemek için bizi arayabilirsiniz.",
    },
    {
      name: "Tuzla",
      tier: "cevre",
      description: "Tuzla çevresinden de cihaz denemek için bizi arayabilirsiniz.",
    },
    {
      name: "Pendik",
      tier: "cevre",
      description: "Pendik çevresinden de cihaz denemek için bizi arayabilirsiniz.",
    },
  ],
  closing: "Listede yer almayan bir bölgeden ulaşmak istiyorsanız, size yardımcı olup olamayacağımızı öğrenmek için bizi aramanız yeterli.",
};
