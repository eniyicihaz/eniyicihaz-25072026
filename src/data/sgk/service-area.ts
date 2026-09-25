// Hizmet Bölgeleri — SGK pillar page, redesign plan §G/§13. Renders
// through the existing ContactServiceArea (zero code changes). Aynı
// gerçek tier yapısı (COMPANY.md §17), bu sayfanın SGK çerçevesiyle
// yeniden yazıldı. SgkTrustBar'ın kendi kısa "Darıca · Gebze · Çayırova"
// güven rozeti bu bölümün yerini tutmuyor (bkz. trustBar.ts'in kendi
// yorumu) — bu, /iletisim'dekiyle aynı tam bölge dökümü.
import type { ContactServiceAreaContent } from "../../components/contact/ContactServiceArea/ContactServiceArea.astro";

export const sgkServiceArea: ContactServiceAreaContent = {
  eyebrow: "HİZMET BÖLGELERİ",
  heading: "Gebze ve Çayırova'dan SGK Süreciniz İçin Darıca'ya",
  intro: "Merkezimiz Darıca'da; Gebze ve Çayırova'dan da kolayca ulaşıp SGK işitme cihazı sürecinizi başlatabilirsiniz.",
  tierLabels: {
    merkez: "Merkez",
    oncelikli: "Öncelikli Hizmet Bölgeleri",
    cevre: "Çevre İlçeler",
  },
  items: [
    {
      name: "Darıca",
      tier: "merkez",
      description: "SGK anlaşmalı merkezimiz Darıca'dadır; adres ve yol tarifi için yukarıdaki konum kartını inceleyebilirsiniz.",
    },
    {
      name: "Gebze",
      tier: "oncelikli",
      description: "Gebze'den randevu alarak merkezimize kolayca ulaşabilir, SGK sürecinizi başlatabilirsiniz.",
    },
    {
      name: "Çayırova",
      tier: "oncelikli",
      description: "Çayırova'dan da randevu alarak merkezimize ulaşabilir, aynı süreçten faydalanabilirsiniz.",
    },
    {
      name: "Dilovası",
      tier: "cevre",
      description: "Dilovası çevresinden de SGK işitme cihazı süreci için bizi arayabilirsiniz.",
    },
    {
      name: "Tuzla",
      tier: "cevre",
      description: "Tuzla çevresinden de SGK işitme cihazı süreci için bizi arayabilirsiniz.",
    },
    {
      name: "Pendik",
      tier: "cevre",
      description: "Pendik çevresinden de SGK işitme cihazı süreci için bizi arayabilirsiniz.",
    },
  ],
  closing: "Listede yer almayan bir bölgeden ulaşmak istiyorsanız, size yardımcı olup olamayacağımızı öğrenmek için bizi aramanız yeterli.",
};
