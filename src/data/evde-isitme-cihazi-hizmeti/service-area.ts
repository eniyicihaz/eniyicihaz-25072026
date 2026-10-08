// Evde Hizmet Bölgesi — ContactServiceArea üzerinden render edilir (P1-B).
// Kapsam yalnızca SoT'tan: Kocaeli'nin tamamı ve İstanbul Anadolu
// Yakası'nın tüm ilçeleri (LOCAL_SOURCE_OF_TRUTH §3, SERVICE_SOT H16:
// ücretsiz, randevu gerekli). Önceki "Darıca, Gebze ve Çayırova'da" kapsamı
// gerçek alanı daraltıyordu; "kısa sürede adresinize ulaşırız" gibi
// doğrulanmamış süre vaadi kaldırıldı. Evde hizmet verilen bölgeler şube
// olarak gösterilmez.
import type { ContactServiceAreaContent } from "../../components/contact/ContactServiceArea/ContactServiceArea.astro";

export const evdeHizmetServiceArea: ContactServiceAreaContent = {
  eyebrow: "EVDE HİZMET BÖLGESİ",
  heading: "Kocaeli Genelinde ve İstanbul Anadolu Yakası'nda Evde Hizmet",
  intro: "Evde işitme cihazı hizmetini Kocaeli'nin tüm ilçelerinde ve İstanbul Anadolu Yakası'nın tüm ilçelerinde veriyoruz.",
  tierLabels: {
    merkez: "Merkez",
    oncelikli: "Evde Hizmet Bölgesi",
    cevre: "Çevre İlçeler",
  },
  items: [
    {
      name: "Darıca",
      tier: "merkez",
      description: "Tek fiziksel merkezimiz Darıca'dadır; merkeze gelebilenler hizmetlerimizi burada da alabilir.",
    },
    {
      name: "Kocaeli",
      tier: "oncelikli",
      description: "Kocaeli'nin tüm ilçeleri evde hizmet bölgemizdedir.",
    },
    {
      name: "İstanbul Anadolu Yakası",
      tier: "oncelikli",
      description: "Anadolu Yakası'nın tüm ilçeleri evde hizmet bölgemizdedir.",
    },
  ],
  closing: "Evde hizmet ücretsizdir ve randevuyla planlanır; uygun gün ve saati birlikte belirlemek için bizi arayabilirsiniz.",
};
