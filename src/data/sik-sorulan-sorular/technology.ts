// "Sürece Daha Yakından Bakış" deep-dive hub for the
// /blog/sik-sorulan-sorular page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior series. icon values are limited to the component's
// fixed set (brain/dna/globe/radar/bluetooth/smartphone/radio/layers)
// — "globe" for the clinic's service area; "smartphone" for contact
// channels; "layers" for what happens during a first visit
// (multi-step); "radar" for ongoing follow-up/support.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const sikSorulanSorularTechnology: BrandPageEcosystemContent = {
  badge: "SÜRECE DAHA YAKINDAN BAKIŞ",
  heading: "Sürece Daha Yakından Bakış",
  intro: "Her başlığı seçerek ilgili konuda daha ayrıntılı bilgiye ulaşabilirsiniz.",
  items: [
    {
      id: "hizmet-bolgesi",
      icon: "globe",
      navLabel: "Hizmet Bölgesi",
      title: "Hangi Bölgelere Hizmet Veriyoruz?",
      lead: "Merkezimiz Darıca, Gebze, Çayırova, Dilovası, Tuzla ve Pendik bölgelerinde hizmet vermektedir.",
      howItWorks: "Bu bölgelerden randevu alarak merkezimizi ziyaret edebilir, işitme testinizden cihaz uygulamanıza kadar tüm süreci bizimle yürütebilirsiniz.",
      advantages: [
        "Bölgenizdeki güvenilir bir merkeze kolayca ulaşabilirsiniz",
        "Randevu sonrası takip süreciniz de aynı merkezde devam eder",
        "SGK anlaşmalı merkez avantajından yararlanabilirsiniz",
      ],
      models: ["Hizmet Bölgesi"],
      expertNote: "Bölgenizle ilgili sorularınız için bizi arayabilirsiniz.",
    },
    {
      id: "iletisim-kanallari",
      icon: "smartphone",
      navLabel: "İletişim Kanalları",
      title: "Bizimle Nasıl İletişime Geçebilirsiniz?",
      lead: "Telefon ve WhatsApp üzerinden bize kolayca ulaşabilir, randevu talep edebilirsiniz.",
      howItWorks: "Size uygun kanaldan bize ulaştığınızda, sorularınızı yanıtlar ve size uygun bir randevu zamanı belirleriz.",
      advantages: [
        "Size en uygun iletişim kanalını seçebilirsiniz",
        "Hızlı bir şekilde geri dönüş alırsınız",
        "Randevu öncesinde sorularınızı netleştirebilirsiniz",
      ],
      models: ["Telefon / WhatsApp"],
      expertNote: "Yoğun saatlerde WhatsApp üzerinden yazmanız daha hızlı bir yanıt sağlayabilir.",
    },
    {
      id: "ilk-ziyaret",
      icon: "layers",
      navLabel: "İlk Ziyaret",
      title: "İlk Ziyaretinizde Neler Olur?",
      lead: "İlk ziyaretiniz, genellikle bir görüşme ve işitme testi ile başlar.",
      howItWorks: "Uzman ekibimiz önce sizinle genel bir görüşme yapar, ardından ücretsiz işitme testinizi gerçekleştirir ve sonuçları sizinle paylaşır.",
      advantages: [
        "Sürecin ne şekilde ilerleyeceğini önceden bilirsiniz",
        "İlk ziyarette temel sorularınızın yanıtını alırsınız",
        "Bir sonraki adımı birlikte planlarsınız",
      ],
      models: ["İlk Ziyaret"],
      expertNote: "İlk ziyaretinize herhangi bir belge getirmeniz gerekmez; varsa önceki işitme raporlarınızı getirebilirsiniz.",
    },
    {
      id: "takip-sureci",
      icon: "radar",
      navLabel: "Takip Süreci",
      title: "Cihaz Sonrası Takip Nasıl İşler?",
      lead: "Cihaz teslim edildikten sonra süreç bitmez; düzenli kontrol randevularıyla sizi takip ederiz.",
      howItWorks: "Belirli aralıklarla kontrol randevuları planlayarak cihazınızın doğru çalıştığından ve size uygun ayarlandığından emin oluruz.",
      advantages: [
        "Cihazınızla ilgili sorunları erken fark edebilirsiniz",
        "Ayarlarınız ihtiyacınıza göre güncellenebilir",
        "Süreç boyunca yalnız değilsiniz",
      ],
      models: ["Kontrol Randevusu"],
      expertNote: "Kontrol randevusu sıklığı hakkında detaylı bilgi için Kontrol Randevusu sayfamızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorNavActiveBg: "rgb(2 132 199 / 0.1)",
  accentColorCalloutBg: "rgb(2 132 199 / 0.06)",
  accentColorCalloutLabel: "#0369a1",
};
