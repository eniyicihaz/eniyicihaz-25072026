// "Kampanya Sürecine Daha Yakından Bakış" deep-dive hub for the
// /blog/kampanyalar page. Renders through the shared BrandPageEcosystem
// component (nav + <details>/<summary> panels), same as every prior
// series. icon values are limited to the component's fixed set
// (brain/dna/globe/radar/bluetooth/smartphone/radio/layers) — "globe"
// for how campaign information reaches users; "smartphone" for
// checking campaigns via phone/WhatsApp; "layers" for the multiple
// campaign categories; "radar" for tracking/reminders. No specific
// figures — see hero.ts for the accuracy rationale.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const kampanyalarTechnology: BrandPageEcosystemContent = {
  badge: "SÜRECE DAHA YAKINDAN BAKIŞ",
  heading: "Kampanya Sürecine Daha Yakından Bakış",
  intro: "Her başlığı seçerek kampanya sürecinin nasıl işlediğini daha ayrıntılı inceleyebilirsiniz.",
  items: [
    {
      id: "kampanya-duyurulari",
      icon: "globe",
      navLabel: "Kampanya Duyuruları",
      title: "Kampanyalarımızdan Nasıl Haberdar Olabilirsiniz?",
      lead: "Güncel kampanyalarımız hakkında en doğru bilgiye doğrudan bizimle iletişime geçerek ulaşabilirsiniz.",
      howItWorks: "Telefon veya WhatsApp üzerinden bize ulaştığınızda, o dönem aktif olan kampanyalar hakkında size bilgi veririz.",
      advantages: [
        "Güncel ve doğrulanmış bilgiye ulaşırsınız",
        "Size uygun kampanyayı birlikte belirleyebilirsiniz",
        "Yanlış veya eski bilgiyle karşılaşma riskini azaltır",
      ],
      models: ["Kampanya Duyuruları"],
      expertNote: "Kampanya bilgisi zamana bağlı olarak değişebilir; en güncel bilgi için bizi aramanızı öneririz.",
    },
    {
      id: "telefon-whatsapp-sorgulama",
      icon: "smartphone",
      navLabel: "Telefon / WhatsApp Sorgulama",
      title: "Telefon veya WhatsApp Üzerinden Sorgulama",
      lead: "Kampanyalarımızı öğrenmenin en hızlı yolu, bize doğrudan ulaşmaktır.",
      howItWorks: "Aradığınızda veya yazdığınızda, durumunuza uygun kampanyaları sizinle birlikte değerlendiririz.",
      advantages: [
        "Hızlı ve doğrudan bilgi alırsınız",
        "Sorularınızı anında sorabilirsiniz",
        "Size özel bir yönlendirme alırsınız",
      ],
      models: ["Telefon / WhatsApp"],
      expertNote: "Yoğun saatlerde WhatsApp üzerinden yazmanız daha hızlı bir yanıt sağlayabilir.",
    },
    {
      id: "kampanya-kategorileri",
      icon: "layers",
      navLabel: "Kampanya Kategorileri",
      title: "Farklı Kampanya Kategorileri",
      lead: "Kampanyalarımız, kullanıcı profiline göre farklı kategorilerde sunulabilir.",
      howItWorks: "Yeni kullanıcı, aile paketi veya sadakat gibi kategorilerden hangisinin size uygun olduğu randevunuzda değerlendirilir.",
      advantages: [
        "Size en uygun kategoriyi birlikte belirleriz",
        "Farklı ihtiyaçlara uygun seçenekler sunar",
        "Şeffaf bir değerlendirme süreci sağlar",
      ],
      models: ["Kampanya Kategorileri"],
      expertNote: "Kategoriler dönemsel olarak değişebilir; güncel kategoriler için bizi arayabilirsiniz.",
    },
    {
      id: "kampanya-takibi",
      icon: "radar",
      navLabel: "Kampanya Takibi",
      title: "Kampanya Zamanlamasını Takip Etme",
      lead: "Sizin için uygun olabilecek bir kampanya döneminde sizi bilgilendirmek isteriz.",
      howItWorks: "İletişim bilgilerinizi paylaşmanız durumunda, ilgilenebileceğiniz bir kampanya döneminde sizinle iletişime geçebiliriz.",
      advantages: [
        "Kampanya fırsatlarını kaçırma riskinizi azaltır",
        "Size özel bir hatırlatma alabilirsiniz",
        "Karar sürecinizi rahatça planlayabilirsiniz",
      ],
      models: ["Kampanya Takibi"],
      expertNote: "Bilgilendirme talebiniz için bizimle iletişime geçebilirsiniz.",
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
  accentColorNavActiveBg: "rgb(192 38 211 / 0.1)",
  accentColorCalloutBg: "rgb(192 38 211 / 0.06)",
  accentColorCalloutLabel: "#a21caf",
};
