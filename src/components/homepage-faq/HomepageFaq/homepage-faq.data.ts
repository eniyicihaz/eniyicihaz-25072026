import type { HomepageFaqContent } from "./homepage-faq.types";

// Locked content — docs/HOMEPAGE_FAQ_SPECIFICATION.md §2. Seven real
// questions, natural language, no keyword stuffing. Deliberately no price
// question — this site never states a price/contribution figure outside
// each fact's own verified page (PRINCIPLES §5); question 2 only points to
// /sgk-isitme-cihazi-odemesi rather than stating a number here.
export const homepageFaq: HomepageFaqContent = {
  eyebrow: "Sık Sorulan Sorular",
  heading: "Merak Edilenler",
  items: [
    {
      question: "İşitme testi gerçekten ücretsiz mi?",
      answer: "Evet, ilk değerlendirme herhangi bir ücret veya taahhüt içermez.",
      href: "/degerlendirme/ucretsiz-isitme-testi/",
      linkLabel: "Ücretsiz işitme testi hakkında",
    },
    {
      question: "SGK işitme cihazı masraflarını karşılıyor mu?",
      answer: "SGK anlaşmalı bir merkez olarak, kapsam ve katkı payı sürecinde size rehberlik ediyoruz; detaylar kişiye göre değişir.",
      href: "/sgk-isitme-cihazi-odemesi/",
      linkLabel: "SGK süreci hakkında",
    },
    {
      question: "Cihazı satın almadan önce deneyebilir miyim?",
      answer: "Evet, karar vermeden önce cihazı deneme imkânı sunuyoruz.",
      href: "/uygulama-ayar/cihaz-deneme/",
      linkLabel: "Cihaz deneme hakkında",
    },
    {
      question: "Randevu almak için ne yapmalıyım?",
      answer: "Telefon, WhatsApp veya iletişim formuyla bizimle iletişime geçmeniz yeterli.",
      href: "/iletisim/",
      linkLabel: "İletişim bilgilerimiz",
    },
    {
      question: "Gebze veya Çayırova'dan merkeze nasıl ulaşırım?",
      answer: "Merkezimiz Darıca'da; Gebze ve Çayırova'dan kolayca ulaşabilirsiniz.",
      href: "/iletisim/",
      linkLabel: "Konum ve yol tarifi",
    },
    {
      question: "Çocuklar için de işitme cihazı seçeneğiniz var mı?",
      answer: "Evet, çocuklara özel tasarlanmış cihaz seçenekleri sunuyoruz.",
      href: "/isitme-cihazlari/cocuklara-ozel/",
      linkLabel: "Çocuklara özel cihazlar",
    },
    {
      question: "Cihazım arızalanırsa ne yapmalıyım?",
      answer: "Teknik servis desteğiyle bakım ve arıza süreçlerinde yanınızdayız.",
      href: "/servis-bakim/teknik-servis/",
      linkLabel: "Teknik servis hakkında",
    },
  ],
};
