// Hizmet Bölgemiz — ContactServiceArea üzerinden render edilir (P1-B).
// Kurumsal bakış: tek fiziksel merkez + evde hizmet alanı. İletişim
// sayfasındaki hat bazlı ulaşım listesi burada tekrarlanmıyor. Kaynak:
// BUSINESS_SOT (Darıca merkezi Ağustos 2024), LOCAL_SOURCE_OF_TRUTH §3.
import type { ContactServiceAreaContent } from "../../components/contact/ContactServiceArea/ContactServiceArea.astro";

export const hakkimizdaServiceArea: ContactServiceAreaContent = {
  eyebrow: "HİZMET BÖLGEMİZ",
  heading: "Bir Merkez, Daha Geniş Bir Hizmet Alanı",
  intro: "Ağustos 2024'ten bu yana tek fiziksel merkezimiz Darıca'da. Merkeze gelemeyen danışanlarımız için evde hizmet alanımız ise daha geniş.",
  tierLabels: {
    merkez: "Fiziksel Merkez",
    oncelikli: "Evde Hizmet Bölgesi",
    cevre: "Çevre İlçeler",
  },
  items: [
    {
      name: "Darıca",
      tier: "merkez",
      description: "Testten teknik servise kadar tüm hizmetlerimizi verdiğimiz merkezimiz.",
      href: "/darica-isitme-cihazlari/",
    },
    {
      name: "Kocaeli'nin tüm ilçeleri",
      tier: "oncelikli",
      description: "Evde işitme cihazı hizmeti veriyoruz.",
    },
    {
      name: "İstanbul Anadolu Yakası",
      tier: "oncelikli",
      description: "Tüm ilçelerde evde işitme cihazı hizmeti veriyoruz.",
    },
  ],
  closing: "Bölgelere göre toplu taşıma hatlarını İletişim sayfamızda bulabilirsiniz.",
};
