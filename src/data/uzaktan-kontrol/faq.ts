// FAQ hub for the /teknolojiler/uzaktan-kontrol page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. The price question never states a
// figure — only the variables that shape price — same restraint every
// brand/category page's faq.ts uses.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const uzaktanKontrolFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Uzaktan Kontrol Özellikleri Hakkında Merak Edilenler",
  intro: "Uzaktan kontrol ve uzaktan destek özellikleri, çalışma şekli ve uygunluk kriterleri hakkında en çok sorulan sorular.",
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
          question: "Uzaktan destek (TeleCare) nedir?",
          answer:
            "Odyometristinizin, video görüşme sırasında cihazınızın temel ayarlarını uzaktan güncelleyebildiği bir hizmettir; kliniğe gelmeden küçük ayar değişiklikleri yapılabilir.",
        },
        {
          question: "Uzaktan destek yüz yüze randevunun yerini tutar mı?",
          answer:
            "Hayır, tamamen değil. Uzaktan destek genellikle küçük ayar güncellemeleri için uygundur; ilk programlama ve karmaşık ayarlamalar için yüz yüze randevu gerekebilir.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Uzaktan kontrol herkese uygun mudur?",
          answer:
            "Çoğu kullanıcı için faydalı bir özelliktir; ancak uygunluk, teknoloji kullanım alışkanlığınıza ve internet erişiminize göre değerlendirilir.",
        },
        {
          question: "İnternet bağlantısı olmayan kullanıcılar için bir alternatif var mı?",
          answer:
            "Evet, akıllı telefon veya internet kullanmayan kullanıcılar için ayrı bir fiziksel uzaktan kumanda seçeneği değerlendirilebilir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "İlk kurulum nasıl yapılır?",
          answer:
            "Uzaktan destek özelliğinin ilk kurulumu genellikle klinikte yapılan bir randevu ile başlar; uygulama tanıtımı ve eşleştirme bu randevuda gerçekleştirilir.",
        },
        {
          question: "Uzaktan destek oturumu ne kadar sürer?",
          answer:
            "Süre, yapılacak ayar değişikliğinin kapsamına göre değişir; genellikle kısa bir video görüşme yeterli olur.",
        },
        {
          question: "Uygulama üzerinden yapılan ayarlar kalıcı mıdır?",
          answer:
            "Evet, uygulama üzerinden yapılan program ve ses seviyesi değişiklikleri cihaza kaydedilir ve sonraki kullanımlarda geçerli olur.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, uzaktan kontrol özellikli işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği uzaktan kontrol özelliğine göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan kullanıcılar bu özelliklere sahip cihazlar için de destekten yararlanabilir.",
        },
        {
          question: "Uzaktan kontrol özellikli işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, cihaz tipi (BTE/RIC veya ITE), uygulama ve uzaktan destek kapsamı belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
