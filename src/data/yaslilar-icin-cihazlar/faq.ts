// FAQ hub for the /ihtiyaciniza-gore/yaslilar-icin-cihazlar page. Renders
// through the shared BrandPageFaq component. FAQPage schema is generated
// inside the component itself from these items. The price question never
// states a figure — only the variables that shape price — same restraint
// every brand/category page's faq.ts uses. The sudden-onset question is
// answered with clear urgency, directing the reader to seek care
// promptly rather than schedule routinely.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const yaslilarIcinCihazlarFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Yaşlılar İçin İşitme Cihazları Hakkında Merak Edilenler",
  intro: "Yaşa bağlı işitme kaybı, kullanım kolaylığı ve aile desteği hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Hâlâ karar veremediniz mi?",
    points: ["Ücretsiz işitme testi", "Demo cihaz denemesi", "Uzman odyometrist desteği", "SGK danışmanlığı"],
    ctaLabel: "Hemen İletişime Geç",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Yaşa bağlı işitme kaybı (presbiakuzi) nedir?",
          answer:
            "Zamanla iç kulaktaki işitme hücrelerinde meydana gelen değişiklikler sonucu ortaya çıkan, genellikle her iki kulağı simetrik ve kademeli olarak etkileyen bir işitme kaybı türüdür.",
        },
        {
          question: "İşitme kaybım aniden başladı, ne yapmalıyım?",
          answer:
            "Ani başlayan işitme kaybı, kademeli yaşa bağlı kayıptan farklı bir durumdur; vakit kaybetmeden bir kulak burun boğaz uzmanına başvurmanız önerilir.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Kaç yaşından itibaren işitme cihazı kullanılabilir?",
          answer:
            "Yaş tek başına belirleyici değildir; işitme cihazı ihtiyacı, bir odyometristin yaptığı işitme testi sonucuna göre değerlendirilir.",
        },
        {
          question: "El becerimde zorluk yaşıyorum, hangi cihazlar daha uygun olur?",
          answer:
            "Şarj edilebilir sistemler ve büyük, kolay erişilebilir kontrollere sahip modeller, el becerisiyle ilgili zorluk yaşayan kullanıcılar için sıkça değerlendirilir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Aile bireylerimin cihazımın ayarlarına erişmesi mümkün mü?",
          answer:
            "Bazı sistemlerde, sizin yetkilendirmenizle aile bireyleri veya odyometrist uzaktan destek sağlayabilir; bu özelliğin kapsamı üreticiye ve modele göre değişir.",
        },
        {
          question: "Cihazın bakımını kim yapacak, kendim mi yapmalıyım?",
          answer:
            "Günlük temizlik genellikle kullanıcı tarafından yapılabilir; teknik bakım ve periyodik kontroller ise klinikte gerçekleştirilir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, yaşlı kullanıcılar için ek bir destek sağlıyor mu?",
          answer:
            "SGK desteği yaşa göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Detaylar SGK rehber sayfamızda yer almaktadır.",
        },
        {
          question: "Yaşlılar için cihaz fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen özellikler (kolay kullanım, şarj kolaylığı, uzaktan destek), marka ve model, teknoloji seviyesi belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
};
