// FAQ hub for the /ihtiyaciniza-gore/aktif-yasam-icin-cihazlar page.
// Renders through the shared BrandPageFaq component. FAQPage schema is
// generated inside the component itself from these items. The price
// question never states a figure — only the variables that shape price —
// same restraint every brand/category page's faq.ts uses. The
// sudden-onset question is answered with clear urgency, directing the
// reader to seek care promptly rather than schedule routinely.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const aktifYasamIcinCihazlarFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Aktif Yaşam İçin İşitme Cihazları Hakkında Merak Edilenler",
  intro: "Güvenli oturma, dayanıklılık ve pil ömrü hakkında en çok sorulan sorular.",
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
          question: "Aktif yaşam için cihaz seçimi ne anlama gelir?",
          answer:
            "Belirli bir işitme kaybı derecesini değil; spor, seyahat veya yoğun hareketlilik içeren bir günlük yaşam tarzını sürdüren kullanıcıların pratik ihtiyaçlarını (güvenli oturma, dayanıklılık, pil ömrü gibi) ön planda tutan bir yaklaşımı ifade eder.",
        },
        {
          question: "İşitme kaybım aniden başladı, ne yapmalıyım?",
          answer:
            "Ani başlayan işitme kaybı acil bir durum olabilir; vakit kaybetmeden bir kulak burun boğaz uzmanına başvurmanız önerilir.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Spor yaparken işitme cihazı kullanmak güvenli midir?",
          answer:
            "Uygun koruma sınıfına ve güvenli oturma özelliğine sahip modeller, çoğu spor aktivitesinde güvenle kullanılabilir; yüzme gibi özel aktiviteler için üretici önerileri kontrol edilmelidir.",
        },
        {
          question: "Yüzerken de kullanabilir miyim?",
          answer:
            "Yüksek IP koruma sınıfına sahip bazı modeller yüzme sırasında kullanılabilir; ancak bu modele göre değişir ve üretici tarafından açıkça belirtilmelidir. Detaylı bilgi için Suya Dayanıklı Cihazlar sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Antrenman sonrası cihaza nasıl bakmalıyım?",
          answer:
            "Ter ve nem birikimini önlemek için cihazın kuru bir bezle silinmesi ve düzenli olarak havalandırılması önerilir; bazı modeller için kurutma kutusu da değerlendirilebilir.",
        },
        {
          question: "Rüzgarlı havalarda cihazımdan uğultu sesi geliyor, normal mi?",
          answer:
            "Rüzgar kaynaklı gürültü yaygın bir durumdur; rüzgar gürültüsü azaltma özelliğine sahip modeller bu etkiyi azaltmaya yardımcı olabilir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, aktif yaşam odaklı modelleri karşılıyor mu?",
          answer:
            "SGK desteği kullanıcının aktivite düzeyine göre değil, sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Detaylar SGK rehber sayfamızda yer almaktadır.",
        },
        {
          question: "Aktif yaşam için cihaz fiyatını ne belirler?",
          answer:
            "Fiyatı; koruma sınıfı, güvenli oturma özellikleri, pil teknolojisi, marka ve model belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#4b5563",
  accentColorBadgeBg: "rgb(75 85 99 / 0.08)",
  accentColorBadgeBorder: "rgb(75 85 99 / 0.35)",
  accentColorBadgeText: "#374151",
};
