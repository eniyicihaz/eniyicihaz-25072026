// SSS — Evde İşitme Cihazı Hizmeti. Renders through the existing
// BrandPageFaq (FAQPage schema auto-generated). Fiyat rakamı, garanti
// dili veya "her yere hizmet veriyoruz" gibi doğrulanmamış ifade yok.
import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const evdeHizmetFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Evde İşitme Cihazı Hizmeti Hakkında Merak Edilenler",
  intro: "Evde hizmetin kapsamı, süreci ve bölgeden ulaşım hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Evde Hizmet Hakkında Bilgi Almak İster misiniz?",
    points: ["Marka bağımsız değerlendirme", "Darıca, Gebze, Çayırova'da randevulu ziyaret", "Mevcut cihazınızla ilgilenebiliriz", "Gerektiğinde merkeze/KBB'ye yönlendirme"],
    ctaLabel: "Evde Hizmet Talep Et",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Evde işitme cihazı hizmeti nedir?",
          answer: "İşitme değerlendirmesi, cihaz denemesi, cihaz uygulaması ve kişiye özel ayar gibi hizmetlerimizin, ekibimizin evinize gelmesiyle yürütülmesidir.",
        },
        {
          question: "Evde yapılan işitme testi güvenilir mi?",
          answer: "Evde yaptığımız değerlendirme, uzman ekibimiz tarafından yapılan profesyonel bir işitme kontrolüdür. Tıbbi bir bulguya rastlanması durumunda sizi bir KBB uzmanına yönlendiririz.",
        },
        {
          question: "Evde cihaz denemesi mümkün mü?",
          answer: "Evet; uygun görülen cihazları kendi ev ortamınızda, günlük rutininizde deneyebilirsiniz.",
        },
        {
          question: "Evde işitme cihazı satın alabilir miyim?",
          answer: "Evet; ihtiyacınız değerlendirilir, uygun cihaz seçenekleri evinizde gösterilir ve karar sürecinde sorularınız cevaplanır.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Evde hizmet nasıl talep edilir?",
          answer: "Telefon veya WhatsApp'tan bize ulaşarak ihtiyacınızı iletebilir, size uygun bir ev ziyareti saati belirleyebilirsiniz.",
        },
        {
          question: "Evde hizmet ne kadar sürer?",
          answer: "Süre, talep edilen hizmete (değerlendirme, deneme, uygulama veya ayar) göre değişir; randevu sırasında netleşir.",
        },
        {
          question: "Mevcut cihazımı evde kontrol ettirebilir miyim?",
          answer: "Evet; kullandığınız cihazın performansı evde kontrol edilebilir, gerekiyorsa yeniden ayarlanabilir.",
        },
      ],
    },
    {
      label: "Bölgemizden Ulaşım",
      items: [
        {
          question: "Darıca'da evde işitme cihazı hizmeti var mı?",
          answer: "Evet; merkezimiz Darıca'dadır ve ilçe genelinde evde hizmet sunuyoruz.",
        },
        {
          question: "Gebze'den evde hizmet talep edebilir miyim?",
          answer: "Evet; Gebze'den randevu alarak evde işitme cihazı hizmetinden faydalanabilirsiniz.",
        },
        {
          question: "Çayırova'da evde cihaz ayarı yapılıyor mu?",
          answer: "Evet; Çayırova'dan da randevu alarak ekibimizi evinize davet edebilirsiniz.",
        },
      ],
    },
    {
      label: "Ne Zaman Merkeze/Doktora Gitmeliyim?",
      items: [
        {
          question: "Ani işitme kaybı yaşarsam ne yapmalıyım?",
          answer: "Ani gelişen bir işitme kaybı, ağrı veya akıntı fark ederseniz, evde hizmet talep etmeden önce en kısa sürede bir sağlık kuruluşuna başvurmanızı öneririz.",
        },
        {
          question: "Daha fazla cihaz modeli görmek istersem ne yapmalıyım?",
          answer: "Daha geniş bir marka ve model yelpazesini aynı anda karşılaştırmak isterseniz, Darıca'daki merkezimizi ziyaret edebilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
