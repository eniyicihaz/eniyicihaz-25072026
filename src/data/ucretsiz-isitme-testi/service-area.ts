// "Gebze ve Çayırova'dan Darıca'ya İşitme Testi İçin" — redesign plan §2,
// Bölüm 11. Renders through the existing ContactServiceArea component
// (already generic, zero code changes). Same real tier structure as
// /iletisim's src/data/contact/serviceArea.ts (COMPANY.md §17 is the
// single source of truth for which regions are real service areas — not
// repeated/reinvented here), rewritten with this page's own
// test/appointment framing rather than duplicating the /iletisim
// wording verbatim (redesign plan §1: "no SEO city-swap spam pages" —
// this is one real section on the real service page, not a clone page).
import type { ContactServiceAreaContent } from "../../components/contact/ContactServiceArea/ContactServiceArea.astro";

export const ucretsizIsitmeTestiServiceArea: ContactServiceAreaContent = {
  eyebrow: "HİZMET BÖLGELERİ",
  heading: "Gebze ve Çayırova'dan Darıca'ya İşitme Testi İçin",
  intro: "Merkezimiz Darıca'da; Gebze ve Çayırova'dan da kolayca ulaşıp aynı gün randevu alabilirsiniz.",
  tierLabels: {
    merkez: "Merkez",
    oncelikli: "Öncelikli Hizmet Bölgeleri",
    cevre: "Çevre İlçeler",
  },
  items: [
    {
      name: "Darıca",
      tier: "merkez",
      description: "Ücretsiz işitme testi merkezimiz Darıca'dadır; adres ve yol tarifi için yukarıdaki konum kartını inceleyebilirsiniz.",
    },
    {
      name: "Gebze",
      tier: "oncelikli",
      description: "Gebze'den randevu alarak merkezimize kolayca ulaşabilir, aynı gün test olabilirsiniz.",
    },
    {
      name: "Çayırova",
      tier: "oncelikli",
      description: "Çayırova'dan da randevu alarak merkezimize ulaşabilir, aynı gün test olabilirsiniz.",
    },
    {
      name: "Dilovası",
      tier: "cevre",
      description: "Dilovası çevresinden de işitme testi için bizi arayabilirsiniz.",
    },
    {
      name: "Tuzla",
      tier: "cevre",
      description: "Tuzla çevresinden de işitme testi için bizi arayabilirsiniz.",
    },
    {
      name: "Pendik",
      tier: "cevre",
      description: "Pendik çevresinden de işitme testi için bizi arayabilirsiniz.",
    },
  ],
  closing:
    "Listede yer almayan bir bölgeden ulaşmak istiyorsanız, size yardımcı olup olamayacağımızı öğrenmek için bizi aramanız yeterli.",
};
