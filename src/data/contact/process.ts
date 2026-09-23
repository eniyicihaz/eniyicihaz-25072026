// "Ziyaret Süreci" section for the /iletisim page — answers "merkeze
// geldiğimde ne olacak?" (SEARCH_STRATEGY.md §8 HowTo AEO pattern).
// Renders through the shared, generic BrandBuyingGuide component (a
// numbered-list shape, already used this session for a self-assessment
// framing elsewhere — here used in its more literal "step-by-step
// process" sense). The eight stages mirror COMPANY.md §11 Hizmet Süreci
// exactly, in order — nothing invented, nothing reordered.

import type { BrandBuyingGuideContent } from "../../components/brands/BrandBuyingGuide/BrandBuyingGuide.astro";

export const contactProcess: BrandBuyingGuideContent = {
  eyebrow: "Merkeze Geldiğimde Ne Olacak?",
  heading: "Ziyaret Süreciniz Nasıl İşler?",
  intro:
    "İlk iletişiminizden satış sonrası desteğe kadar süreç sekiz adımda ilerler.",
  criteria: [
    {
      title: "İletişim",
      description: "Telefon veya WhatsApp üzerinden bize ulaşarak sürecinizi başlatırsınız.",
    },
    {
      title: "Randevu",
      description: "Size uygun bir randevu zamanı belirleriz.",
    },
    {
      title: "İşitme Değerlendirmesi",
      description: "Merkezimizde ücretsiz işitme testinizi ve değerlendirmenizi yaparız.",
    },
    {
      title: "Cihaz Önerisi",
      description: "Değerlendirme sonucuna göre size uygun cihaz seçeneklerini öneririz.",
    },
    {
      title: "Deneme Süreci",
      description: "İlgilendiğiniz cihazı satın almadan önce deneyebilirsiniz.",
    },
    {
      title: "Satış",
      description: "Karar verdiğinizde, SGK desteğiniz varsa bunu da hesaba katarak süreci tamamlarız.",
    },
    {
      title: "Uygulama",
      description: "Cihazınızı kişiye özel olarak uygular, kullanım eğitimini birlikte yaparız.",
    },
    {
      title: "Satış Sonrası Destek",
      description: "Cihaz tesliminden sonra da kontrol, bakım ve teknik servis ile yanınızda oluruz.",
    },
  ],
  closing:
    "Sürecin herhangi bir adımında sorularınız olursa, bizi aramaktan çekinmeyin.",
};
