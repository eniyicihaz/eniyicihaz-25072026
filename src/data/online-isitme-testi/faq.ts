// FAQ hub for the /degerlendirme/online-isitme-testi page. Renders
// through the shared BrandPageFaq component (FAQPage schema generated
// inside the component from these items). Every answer stays inside
// the neutral/non-diagnostic language locked in the implementation
// plan §5.1 — no "işitme kaybı" / "normal işitme" / dB claims anywhere.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const onlineIsitmeTestiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Online İşitme Testi Hakkında Merak Edilenler",
  intro: "Taramanın güvenilirliği, teknik işleyişi ve sonrasında olacaklar hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Merkezimizde Ücretsiz İşitme Testi",
    points: [
      "Ücretsiz işitme testi",
      "Odyometrist eşliğinde test",
      "SGK anlaşmalı merkez",
    ],
    ctaLabel: "Bizi Arayın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Güvenilirlik",
      items: [
        {
          question: "Online işitme testi güvenilir mi?",
          answer:
            "Online işitme taraması, kulaklığınızın ve cihazınızın özellikleri bilinmediği için yalnızca genel bir ön fikir verir; merkezimizde odyometrist eşliğinde yapılan işitme testinin yerini tutmaz. Kesin bir değerlendirme için bir odyometriste danışmanızı öneririz.",
        },
        {
          question: "Bu tarama merkezdeki işitme testinin yerini tutar mı?",
          answer:
            "Hayır. Online tarama yalnızca bir ön değerlendirmedir; merkezimizde odyometrist eşliğinde yapılan işitme testinin yerini tutmaz.",
        },
      ],
    },
    {
      label: "Teknik",
      items: [
        {
          question: "Sonuçlar dB veya dB HL cinsinden mi gösterilir?",
          answer:
            "Hayır. Kulaklığınızın ve cihazınızın kalibrasyonu bilinmediğinden hiçbir sonuç dB veya dB HL biriminde gösterilmez; sonuç ekranı yalnızca her frekans için \"rahat algıladınız\" veya \"zorlandınız\" gibi nötr, göreli ifadeler kullanır.",
        },
        {
          question: "Kulaklık kullanmak zorunlu mu?",
          answer:
            "Evet; sağ ve sol kulağın ayrı ayrı test edilebilmesi için kulaklık (kablolu veya Bluetooth) kullanmanız gerekir. Hoparlörle yapılan bir tarama, kulaklar arası ayrımı ve oda gürültüsü etkisini ortadan kaldıramaz.",
        },
        {
          question: "Bluetooth kulaklıkla test yapabilir miyim?",
          answer:
            "Evet, ancak bazı Bluetooth cihazlarda sol/sağ kanal ayrımı net olmayabilir. Bu yüzden test başlamadan önce kısa bir kanal kontrolü yapılır; kanal ayrımı doğrulanamazsa sonuç ekranında bu açıkça belirtilir.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Test ne kadar sürer?",
          answer: "Ortalama 3–4 dakika sürer; sağ ve sol kulak için toplam 5 frekans test edilir.",
        },
        {
          question: "Verilerim kaydediliyor mu, kişisel bilgi girmem gerekiyor mu?",
          answer:
            "Hayır. Tarama tamamen ücretsizdir ve isim, telefon, e-posta gibi hiçbir kişisel bilgi istenmez. Sonucunuz yalnızca tarayıcınızda, o oturum boyunca tutulur; hiçbir sunucuya gönderilmez.",
        },
      ],
    },
    {
      label: "Sonrası",
      items: [
        {
          question: "Sonucum \"zorlandınız\" çıkarsa ne yapmalıyım?",
          answer:
            "Bu, bir tanı değil; yalnızca bir ön işarettir. Bir sonraki adım olarak Darıca'daki merkezimizde ücretsiz, odyometrist eşliğinde işitme testi için randevu almanızı öneririz.",
        },
      ],
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
