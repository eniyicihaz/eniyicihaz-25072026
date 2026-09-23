// "Daha Derin Bakış: Sık Sorulan Konular" deep-dive hub for the
// /blog/uzman-gorusleri page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior series. icon values are limited to the component's
// fixed set (brain/dna/globe/radar/bluetooth/smartphone/radio/layers)
// — "brain" for the genuine brain-hearing/neuroplasticity connection;
// "globe" for the general prevalence of hearing loss (kept
// deliberately non-numeric to avoid unverified statistics); "smartphone"
// for debunking the "cihazlar karmaşık" myth; "layers" for debunking
// the "her cihaz aynı" myth via personalization/tiers.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const uzmanGorusleriTechnology: BrandPageEcosystemContent = {
  badge: "DAHA DERİN BAKIŞ",
  heading: "Bazı Konulara Daha Yakından Bakalım",
  intro: "Her başlığı seçerek daha ayrıntılı genel bilgiye ulaşabilirsiniz.",
  items: [
    {
      id: "beyin-ve-isitme-iliskisi",
      icon: "brain",
      navLabel: "Beyin ve İşitme İlişkisi",
      title: "İşitme Kaybının Beyinle İlişkisi",
      lead: "İşitme, yalnızca kulakla değil, beyinle birlikte gerçekleşen bir süreçtir.",
      howItWorks: "Beyin, işitsel sinyalleri sürekli olarak işler ve yorumlar; uzun süre desteklenmeyen bir işitme kaybı, bu işlemenin zamanla zorlaşmasına katkıda bulunabilir.",
      advantages: [
        "Erken müdahalenin önemini daha iyi anlamanızı sağlar",
        "Uyum sürecinin neden zaman aldığını açıklar",
        "Bilinçli bir bekleme kararı almanıza yardımcı olur",
      ],
      models: ["Beyin-İşitme İlişkisi"],
      expertNote: "Bu konu hakkında daha fazla bilgi için Uyum Süreci sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "isitme-kaybi-ne-kadar-yaygin",
      icon: "globe",
      navLabel: "İşitme Kaybı Ne Kadar Yaygın?",
      title: "İşitme Kaybı Sandığınızdan Daha Yaygındır",
      lead: "İşitme kaybı, dünya genelinde geniş bir yaş aralığını etkileyen yaygın bir sağlık konusudur.",
      howItWorks: "Yaşlanma, gürültüye maruz kalma, genetik faktörler ve bazı sağlık durumları işitme kaybına katkıda bulunabilir; bu nedenle işitme kaybı tek bir gruba özgü değildir.",
      advantages: [
        "Yalnız olmadığınızı anlamanıza yardımcı olur",
        "Konunun ciddiyetini doğru bir çerçevede değerlendirmenizi sağlar",
        "Erken değerlendirmeye teşvik eder",
      ],
      models: ["İşitme Kaybının Yaygınlığı"],
      expertNote: "Kendi durumunuz hakkında en doğru bilgiyi bir işitme testiyle öğrenebilirsiniz.",
    },
    {
      id: "cihazlar-karmasik-mi",
      icon: "smartphone",
      navLabel: "Cihazlar Karmaşık mı?",
      title: "\"Cihazları Kullanmak Zor mu?\" Sorusuna Yanıt",
      lead: "Güncel işitme cihazları, günlük kullanımı kolaylaştıracak şekilde tasarlanıyor.",
      howItWorks: "Birçok cihaz, basit bir mobil uygulama üzerinden kontrol edilebiliyor; ayrıca kullanım eğitimi randevunuzda size adım adım gösteriliyor.",
      advantages: [
        "Kullanım kaygısını azaltır",
        "Uygulama üzerinden kolay kontrol sağlar",
        "Eğitim desteğiyle süreci kolaylaştırır",
      ],
      models: ["Kullanım Kolaylığı"],
      expertNote: "Cihaz kullanımı hakkında endişeleriniz varsa, randevunuzda birlikte deneyebiliriz.",
    },
    {
      id: "her-cihaz-ayni-mi",
      icon: "layers",
      navLabel: "Her Cihaz Aynı mı?",
      title: "\"Tüm Cihazlar Aynı mı?\" Sorusuna Yanıt",
      lead: "İşitme cihazları arasında teknoloji seviyesi, form faktörü ve özellik bakımından önemli farklar vardır.",
      howItWorks: "Cihazlar; giriş seviyesinden üst segmente kadar farklı teknoloji katmanlarında sunulur ve kişinin işitme kaybına, yaşam tarzına göre seçilir.",
      advantages: [
        "Size uygun teknoloji seviyesini anlamanızı sağlar",
        "Gereğinden fazla veya az özellikli bir cihaz seçme riskini azaltır",
        "Bütçenize uygun bir seçim yapmanıza yardımcı olur",
      ],
      models: ["Teknoloji Segmentleri"],
      expertNote: "Segmentler hakkında detaylı bilgi için Premium Seri ve Standart Seri sayfalarımızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorNavActiveBg: "rgb(124 58 237 / 0.1)",
  accentColorCalloutBg: "rgb(124 58 237 / 0.06)",
  accentColorCalloutLabel: "#6d28d9",
};
