// Evde İşitme Cihazı Hizmeti — SSS (Faz 2 P2): 11 sorudan 6'ya. Yalnızca
// doğrulanmış olgular (bölge, ücretsiz, randevulu, 10–60 dk, merkez
// kapsamı doğrultusunda). Evde hangi işlemlerin yapıldığına dair soru
// ("evde deneme", "evde satış", "evde test güvenilir mi") işletme sahibinden
// teyit gelene kadar çıkarıldı.
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const evdeHizmetFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Evde Hizmet Hakkında Merak Edilenler",
  intro: "Bölge, randevu ve süreçle ilgili kısa cevaplar.",
  categories: [
    {
      label: "Evde Hizmet",
      items: [
        {
          question: "Evde hizmeti hangi bölgelerde veriyorsunuz?",
          answer: "Kocaeli'nin tamamında ve İstanbul Anadolu Yakası'nın tüm ilçelerinde. Fiziksel merkezimiz yalnızca Darıca'dadır.",
        },
        {
          question: "Evde hizmet ücretli mi, randevu gerekiyor mu?",
          answer: "Evde hizmet ücretsizdir ve randevuyla planlanır. Gün ve saati belirlemek için bizi arayabilir veya WhatsApp'tan yazabilirsiniz.",
        },
        {
          question: "Evde hizmeti nasıl talep ederim?",
          answer: "Telefon veya WhatsApp'tan bize ulaşıp adresinizi ve ihtiyacınızı iletmeniz yeterli; size uygun bir randevu günü birlikte belirlenir.",
        },
        {
          question: "Evde hizmet ne kadar sürer?",
          answer: "Süre yapılacak işleme göre değişir; yaklaşık 10 ile 60 dakika arasındadır.",
        },
        {
          question: "Evde hangi işlemler yapılabiliyor?",
          answer: "Evde hizmet, merkezimizde verdiğimiz hizmetlerin kapsamı doğrultusunda sunulur. Hangi işlemin evde yapılabileceğini randevuda birlikte netleştiriyoruz.",
        },
      ],
    },
    {
      label: "Sağlık",
      items: [
        {
          question: "Ani işitme kaybı yaşarsam ne yapmalıyım?",
          answer: "Ani gelişen bir işitme kaybı, ağrı veya akıntı fark ederseniz evde hizmet talep etmeden önce en kısa sürede bir sağlık kuruluşuna başvurmanızı öneririz.",
        },
      ],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
