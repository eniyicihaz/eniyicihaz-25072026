// "Etkinlik Sürecine Daha Yakından Bakış" deep-dive hub for the
// /blog/etkinlikler page. Renders through the shared BrandPageEcosystem
// component (nav + <details>/<summary> panels), same as every prior
// series. icon values are limited to the component's fixed set
// (brain/dna/globe/radar/bluetooth/smartphone/radio/layers) — "globe"
// for the global/nationwide awareness-day concept (a genuine literal
// fit); "smartphone" for checking events via phone/WhatsApp; "layers"
// for the multiple event categories; "radar" for tracking upcoming
// events in the reader's area. No specific dates — see hero.ts for the
// accuracy rationale.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const etkinliklerTechnology: BrandPageEcosystemContent = {
  badge: "SÜRECE DAHA YAKINDAN BAKIŞ",
  heading: "Etkinlik Sürecine Daha Yakından Bakış",
  intro: "Her başlığı seçerek etkinlik sürecinin nasıl işlediğini daha ayrıntılı inceleyebilirsiniz.",
  items: [
    {
      id: "farkindalik-gunleri",
      icon: "globe",
      navLabel: "Farkındalık Günleri",
      title: "Dünya Genelindeki Farkındalık Günleri",
      lead: "İşitme sağlığıyla ilgili dünya genelinde kutlanan farkındalık günlerinde etkinliklere katılım gösterebiliyoruz.",
      howItWorks: "Bu günlerde, işitme sağlığı konusunda toplumu bilgilendirmeye yönelik etkinlikler düzenleyebilir veya katılım sağlayabiliyoruz.",
      advantages: [
        "İşitme sağlığı konusunda toplumsal farkındalığa katkı sağlar",
        "Genel bilgilendirme fırsatı sunar",
        "Bölgenizdeki etkinliklerden haberdar olmanızı sağlar",
      ],
      models: ["Farkındalık Günleri"],
      expertNote: "Güncel etkinlik takvimimiz için bizi arayabilirsiniz.",
    },
    {
      id: "etkinlik-bilgisi-icin-iletisim",
      icon: "smartphone",
      navLabel: "Etkinlik Bilgisi İçin İletişim",
      title: "Telefon veya WhatsApp Üzerinden Bilgi Alma",
      lead: "Etkinliklerimizi öğrenmenin en hızlı yolu, bize doğrudan ulaşmaktır.",
      howItWorks: "Aradığınızda veya yazdığınızda, o dönem planlanan etkinlikler hakkında size bilgi veririz.",
      advantages: [
        "Hızlı ve doğrudan bilgi alırsınız",
        "Bölgenizdeki etkinlikleri öğrenebilirsiniz",
        "Katılım şartlarını netleştirebilirsiniz",
      ],
      models: ["Telefon / WhatsApp"],
      expertNote: "Kurumsal işbirliği talepleriniz için de aynı kanallardan bize ulaşabilirsiniz.",
    },
    {
      id: "etkinlik-kategorileri",
      icon: "layers",
      navLabel: "Etkinlik Kategorileri",
      title: "Farklı Etkinlik Kategorileri",
      lead: "Etkinliklerimiz, hedef kitleye göre farklı kategorilerde düzenlenebilir.",
      howItWorks: "Okul taraması, kurumsal işbirliği veya yaşlı bakımı gibi kategorilerden hangisinin sizin için uygun olduğu birlikte değerlendirilir.",
      advantages: [
        "Size veya kurumunuza uygun kategoriyi birlikte belirleriz",
        "Farklı ihtiyaçlara uygun seçenekler sunar",
        "Şeffaf bir planlama süreci sağlar",
      ],
      models: ["Etkinlik Kategorileri"],
      expertNote: "Kategoriler dönemsel olarak değişebilir; güncel bilgi için bizi arayabilirsiniz.",
    },
    {
      id: "bolgenizdeki-etkinlikler",
      icon: "radar",
      navLabel: "Bölgenizdeki Etkinlikler",
      title: "Bölgenizdeki Etkinlikleri Takip Etme",
      lead: "Sizin için uygun olabilecek bir etkinlik hakkında sizi bilgilendirmek isteriz.",
      howItWorks: "İletişim bilgilerinizi paylaşmanız durumunda, bölgenizde planlanan bir etkinlik olduğunda sizinle iletişime geçebiliriz.",
      advantages: [
        "Etkinlik fırsatlarını kaçırma riskinizi azaltır",
        "Size özel bir hatırlatma alabilirsiniz",
        "Katılımınızı rahatça planlayabilirsiniz",
      ],
      models: ["Etkinlik Takibi"],
      expertNote: "Bilgilendirme talebiniz için bizimle iletişime geçebilirsiniz.",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorNavActiveBg: "rgb(5 150 105 / 0.1)",
  accentColorCalloutBg: "rgb(5 150 105 / 0.06)",
  accentColorCalloutLabel: "#047857",
};
