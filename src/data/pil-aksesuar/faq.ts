// FAQ hub for the /servis-bakim/pil-aksesuar page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const pilAksesuarFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Pil ve Aksesuar Hakkında Merak Edilenler",
  intro: "Pil türleri, aksesuar seçenekleri ve bakım konusunda en çok sorulan sorular.",
  decisionCard: {
    title: "Size Uygun Pil veya Aksesuarı Öğrenmek İster misiniz?",
    points: ["Çinko-hava ve şarjlı seçenekler", "Uyumlu aksesuarlar", "Kişiye özel öneri", "Kullanım rehberliği"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Hangi pil türü bana uygun?",
          answer:
            "Bu, cihaz modelinize ve kullanım alışkanlığınıza göre değişir; ihtiyacınıza en uygun seçeneği birlikte belirleriz.",
        },
        {
          question: "Şarjlı sisteme sonradan geçebilir miyim?",
          answer:
            "Bu, mevcut cihaz modelinize bağlıdır; bazı modeller şarjlı seçeneğe geçişe uygun olmayabilir.",
        },
      ],
    },
    {
      label: "Kullanım",
      items: [
        {
          question: "Çinko-hava pil ne kadar dayanır?",
          answer:
            "Pil ömrü, kullanım süresine ve cihaz özelliklerine göre değişir; genellikle birkaç gün ile bir hafta arasında değişebilir.",
        },
        {
          question: "Şarjlı pil bir gecede tam şarj olur mu?",
          answer:
            "Çoğu modelde evet; ancak tam şarj süresi cihaz markası ve moduna göre değişebilir.",
        },
      ],
    },
    {
      label: "Bakım",
      items: [
        {
          question: "Şarjlı pilim zamanla zayıflarsa ne yapmalıyım?",
          answer:
            "Şarjlı piller zamanla kapasite kaybedebilir; bu durumda profesyonel bir değerlendirme için bizimle iletişime geçmeniz önerilir.",
        },
      ],
    },
    {
      label: "Güvenlik",
      items: [
        {
          question: "Kullanılmış pilleri nasıl imha etmeliyim?",
          answer:
            "Kullanılmış pilleri normal çöpe atmak yerine, uygun bir geri dönüşüm noktasına bırakmanız önerilir.",
        },
      ],
    },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
};
