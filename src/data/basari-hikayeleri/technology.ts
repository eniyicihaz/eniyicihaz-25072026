// "Yaşam Alanlarına Daha Yakından Bakış" deep-dive hub for the
// /blog/basari-hikayeleri page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior series. icon values are limited to the component's
// fixed set (brain/dna/globe/radar/bluetooth/smartphone/radio/layers)
// — used here loosely/metaphorically since this topic isn't technical;
// "brain" for cognitive/family engagement, "globe" for social
// participation, "smartphone" for staying connected in work life,
// "radar" for self-awareness/mental wellbeing. No named/dated
// testimonials — see hero.ts for the rationale.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const basariHikayeleriTechnology: BrandPageEcosystemContent = {
  badge: "YAŞAM ALANLARI",
  heading: "Yaşam Alanlarına Daha Yakından Bakış",
  intro: "Her başlığı seçerek, ilgili yaşam alanında genel olarak neyin değişebileceğini inceleyebilirsiniz.",
  items: [
    {
      id: "aile-ici-iletisim",
      icon: "brain",
      navLabel: "Aile İçi İletişim",
      title: "Aile İçi Sohbetlerde Rahatlama",
      lead: "Sürekli \"tekrar eder misin?\" demek zorunda kalmak, hem konuşan hem dinleyen için yorucu olabilir.",
      howItWorks: "Konuşmaları daha net duyabilmek, aile içi sohbetleri takip etmeyi kolaylaştırarak günlük etkileşimi rahatlatabilir.",
      advantages: [
        "Sohbetleri tekrar ettirme ihtiyacını azaltabilir",
        "Aile içi yanlış anlaşılmaları azaltabilir",
        "Birlikte geçirilen zamanın kalitesini artırabilir",
      ],
      models: ["Aile İçi İletişim"],
      expertNote: "Bu değişim, kullanım süresine ve uyum sürecine göre kademeli olarak ortaya çıkabilir.",
    },
    {
      id: "sosyal-hayata-katilim",
      icon: "globe",
      navLabel: "Sosyal Hayata Katılım",
      title: "Sosyal Ortamlara Daha Rahat Katılım",
      lead: "Kalabalık ortamlarda konuşmaları takip edememek, zamanla sosyal ortamlardan uzaklaşmaya yol açabilir.",
      howItWorks: "Gürültülü ortamlarda konuşmayı daha net duyabilmek, davetlere ve sosyal etkinliklere katılım konusundaki isteksizliği azaltabilir.",
      advantages: [
        "Sosyal davetlere katılım isteğini artırabilir",
        "Kalabalık ortamlarda konuşmayı takip etmeyi kolaylaştırabilir",
        "Sosyal izolasyon hissini azaltmaya yardımcı olabilir",
      ],
      models: ["Sosyal Hayat"],
      expertNote: "Sosyal katılımdaki değişim kişinin genel yaşam tarzına göre farklılık gösterebilir.",
    },
    {
      id: "is-hayatinda-baglanti",
      icon: "smartphone",
      navLabel: "İş Hayatında Bağlantı",
      title: "İş Ortamında Daha Rahat İletişim",
      lead: "Toplantılarda veya telefon görüşmelerinde konuşmaları kaçırma endişesi, iş performansını etkileyebiliyor.",
      howItWorks: "Bağlantılı cihazlar sayesinde telefon görüşmeleri ve toplantılar daha net takip edilebilir hale gelebilir.",
      advantages: [
        "Toplantılarda konuşmaları takip etmeyi kolaylaştırabilir",
        "Telefon görüşmelerinde netliği artırabilir",
        "İş ortamında özgüveni destekleyebilir",
      ],
      models: ["İş Hayatı"],
      expertNote: "İş ortamına uygun özellikler için randevunuzda ihtiyacınızı birlikte değerlendirebiliriz.",
    },
    {
      id: "zihinsel-refah",
      icon: "radar",
      navLabel: "Zihinsel Refah",
      title: "Günlük Yorgunluğun Azalması",
      lead: "Sesleri anlamak için sürekli çaba göstermek, zamanla zihinsel yorgunluğa yol açabiliyor.",
      howItWorks: "Sesleri daha net duyabilmek, bu çabayı azaltarak günün sonunda hissedilen yorgunluğun azalmasına katkı sağlayabilir.",
      advantages: [
        "Gün içindeki zihinsel yorgunluğu azaltabilir",
        "Konsantrasyonu kolaylaştırabilir",
        "Genel yaşam kalitesine katkı sağlayabilir",
      ],
      models: ["Zihinsel Refah"],
      expertNote: "Bu gözlemler geneldir; kişisel deneyiminiz farklılık gösterebilir.",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorNavActiveBg: "rgb(234 88 12 / 0.1)",
  accentColorCalloutBg: "rgb(234 88 12 / 0.06)",
  accentColorCalloutLabel: "#c2410c",
};
