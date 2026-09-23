// FAQ hub for the /sgk/cocuklarda-sgk page. Renders through the shared
// BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Questions are deliberately
// distinct from the pillar page's own FAQ (which already covers
// "Çocuklarda SGK ödemesi neden farklıdır?" at a general level) to
// avoid duplicating content — this page goes deeper into the pediatric
// process itself.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const cocuklardaSgkFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Çocuklarda SGK Süreci Hakkında Merak Edilenler",
  intro: "Yenidoğan taramasından okul dönemi takibine kadar en çok sorulan sorular.",
  decisionCard: {
    title: "Çocuğunuzun Süreci İçin Yönlendirme Almak İster misiniz?",
    points: ["Ücretsiz danışmanlık", "Pediatrik değerlendirme yönlendirmesi", "Aile odaklı süreç", "Uzman rehberliği"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Süreç hangi yaşta başlayabilir?",
          answer:
            "Yenidoğan işitme taraması doğumdan kısa süre sonra yapılabilir; şüpheli bir sonuç alındığında değerlendirme süreci hemen başlatılabilir.",
        },
        {
          question: "Pediatrik odyolojik değerlendirme nasıl bulunur?",
          answer:
            "Çocuğunuz için uygun pediatrik değerlendirme merkezini yönlendirmek üzere bizimle iletişime geçebilirsiniz.",
        },
      ],
    },
    {
      label: "Okul Dönemi",
      items: [
        {
          question: "Çocuğum büyüdükçe cihazın değiştirilmesi gerekir mi?",
          answer:
            "Çocuğun işitme ihtiyaçları zamanla değişebilir; cihaz yenileme konusunda detaylı bilgi için Yenileme Hakkı sayfamızı inceleyebilirsiniz.",
        },
        {
          question: "Okulda cihazla ilgili bir sorun yaşanırsa ne yapmalıyım?",
          answer:
            "Cihazla ilgili teknik bir sorun yaşandığında, en kısa sürede bizimle iletişime geçerek destek alabilirsiniz.",
        },
      ],
    },
    {
      label: "Belgeler",
      items: [
        {
          question: "Çocuğum için hangi belgeler gerekiyor?",
          answer:
            "Çocuğun kendi kimlik belgesine ek olarak veli veya vasi belgesi de istenir; tüm belge listesi için Gerekli Belgeler sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Destek",
      items: [
        {
          question: "Çocuklarda destek tutarı neden farklı?",
          answer:
            "SGK, erken müdahalenin önemi nedeniyle çocuk yaş gruplarını ayrı bir kategori olarak değerlendirir; güncel tutarlar için SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
