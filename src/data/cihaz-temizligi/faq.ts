// FAQ hub for the /servis-bakim/cihaz-temizligi page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const cihazTemizligiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Cihaz Temizliği Hakkında Merak Edilenler",
  intro: "Sıklık, malzemeler ve saklama konusunda en çok sorulan sorular.",
  decisionCard: {
    title: "Doğru Temizlik Yöntemini Öğrenmek İster misiniz?",
    points: ["Ücretsiz temizlik kiti tanıtımı", "Kişiye özel gösterim", "Doğru saklama önerileri", "Basit ve hızlı"],
    ctaLabel: "Bize Ulaşın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Cihazımı ne sıklıkla temizlemeliyim?",
          answer:
            "Günlük olarak, yumuşak bir bezle silmeniz ve gece kuru bir kutuda saklamanız önerilir.",
        },
        {
          question: "Cihazımı su ile temizleyebilir miyim?",
          answer:
            "Hayır; cihazınızı asla su, alkol veya kimyasal temizleyicilerle temizlemeyin, bu elektronik bileşenlere zarar verebilir.",
        },
      ],
    },
    {
      label: "Malzemeler",
      items: [
        {
          question: "Hangi temizlik malzemelerini kullanmalıyım?",
          answer:
            "Yumuşak, kuru bir bez ve gerekiyorsa balmumu temizleme teli yeterlidir; bu araçlar temizlik kitinde bulunur.",
        },
        {
          question: "Elektronik kuru saklama kutusu kullanmam gerekir mi?",
          answer:
            "Zorunlu değildir; ancak nemli iklimlerde veya sık terleyen kullanıcılar için faydalı bir aksesuar olabilir.",
        },
      ],
    },
    {
      label: "Saklama",
      items: [
        {
          question: "Cihazımı gece takılı bırakabilir miyim?",
          answer:
            "Hayır; gece boyunca kuru bir saklama kutusunda tutmanız önerilir.",
        },
      ],
    },
    {
      label: "Sorun Durumunda",
      items: [
        {
          question: "Temizlik sonrası ses sorunu devam ederse ne yapmalıyım?",
          answer:
            "Bu durumda balmumu filtresi veya tüp yenilenmesi gerekebilir; Periyodik Bakım veya Teknik Servis değerlendirmesi önerilir.",
        },
      ],
    },
  ],
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0284c7",
};
