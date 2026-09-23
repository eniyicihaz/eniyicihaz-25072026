// M5 (Buying Guide) content for the /hizmetlerimiz hub page. Renders
// through the now-generic BrandBuyingGuide component. Same
// self-assessment-questions framing as devices/buying-guide.ts (distinct
// from brands' declarative criteria list), here scoped to figuring out
// which SERVICE you actually need.

import type { BrandBuyingGuideContent } from "../../components/brands/BrandBuyingGuide/BrandBuyingGuide.astro";

export const servicesBuyingGuide: BrandBuyingGuideContent = {
  eyebrow: "Randevu Öncesi",
  heading: "Hangi Hizmete İhtiyacınız Olduğunu Netleştirin",
  intro:
    "Randevu almadan önce kendinize sormanız faydalı olacak birkaç soruyu bir araya getirdik.",
  criteria: [
    {
      title: "Daha Önce İşitme Testi Yaptırdım mı?",
      description:
        "Yaptırmadıysanız, sürecinize ücretsiz işitme testiyle başlamanız önerilir.",
    },
    {
      title: "Cihazım Var mı, Yeni mi Alacağım?",
      description:
        "Mevcut bir cihazınız varsa ayar veya bakım hizmetleri, yeni alım öncesindeyseniz değerlendirme hizmetleri öncelikli olur.",
    },
    {
      title: "Cihazımda Teknik Bir Sorun mu Var?",
      description:
        "Ses kesintisi, düşük performans gibi belirtiler varsa teknik servis desteği gerekebilir.",
    },
    {
      title: "En Son Ne Zaman Bakım Yaptırdım?",
      description:
        "Uzun süredir bakım yaptırmadıysanız, periyodik bakım randevusu almanız faydalı olabilir.",
    },
    {
      title: "Cihazım Hâlâ Garanti Kapsamında mı?",
      description:
        "Garanti durumunuzu bilmiyorsanız, garanti işlemleri sayfamızdan veya merkezimizden bilgi alabilirsiniz.",
    },
    {
      title: "Merkeze Gelmem Mümkün mü?",
      description:
        "Merkeze gelmeniz zorsa, bazı ihtiyaçlarınız uzaktan ayar hizmetiyle karşılanabilir.",
    },
    {
      title: "SGK Desteğinden Yararlanıyor muyum?",
      description:
        "SGK süreciyle ilgili sorularınız için Bilgi Merkezi'mizdeki SGK & Haklar sayfalarını inceleyebilirsiniz.",
    },
  ],
  closing:
    "Bu soruları netleştirdikten sonra, size en uygun hizmeti ve randevu zamanını birlikte belirleyebiliriz.",
};
