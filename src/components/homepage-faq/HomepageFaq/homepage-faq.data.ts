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
    },
    {
      question: "SGK işitme cihazı masraflarını karşılıyor mu?",
      answer: "SGK anlaşmalı bir merkez olarak, kapsam ve katkı payı sürecinde size rehberlik ediyoruz; detaylar kişiye göre değişir.",
    },
    {
      question: "Cihazı satın almadan önce deneyebilir miyim?",
      answer: "Merkezimizde yaklaşık 20 dakikalık ücretsiz demoyla deneyebilirsiniz; günlük hayatta denemek için cihazı satın alarak 7 güne kadar kullanabilirsiniz; uygun bulmazsanız ödediğiniz tutarın tamamı iade edilir. Kulak içi cihazlar 7 günlük denemeye dahil değildir.",
    },
    {
      question: "Randevu almak için ne yapmalıyım?",
      answer: "Bizi telefonla arayabilir veya WhatsApp'tan yazabilirsiniz. Randevusuz da gelebilirsiniz; işitme testi ve cihaz ayarı gibi hizmetler randevuyla verildiği için önceden aramanızı öneririz.",
      href: "/iletisim/",
      linkLabel: "İletişim bilgilerimiz",
    },
    {
      question: "Gebze veya Çayırova'dan merkeze nasıl ulaşırım?",
      answer: "Merkezimiz Darıca'dadır. Gebze'den 502, 440, 510 ve 515; Çayırova'dan 550 numaralı otobüs hatlarıyla gelebilirsiniz. Hat bilgileri değişebilir.",
    },
    {
      question: "Çocuklar için de işitme cihazı seçeneğiniz var mı?",
      answer: "Evet, çocuklara özel tasarlanmış cihaz seçenekleri sunuyoruz.",
    },
    {
      question: "Cihazım arızalanırsa ne yapmalıyım?",
      answer: "Teknik servis desteğiyle bakım ve arıza süreçlerinde yanınızdayız.",
      href: "/servis-bakim/teknik-servis/",
      linkLabel: "Teknik servis hakkında",
    },
  ],
};
