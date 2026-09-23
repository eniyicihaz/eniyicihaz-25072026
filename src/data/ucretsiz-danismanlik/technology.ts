// "Teknolojiler" deep-dive hub for the /neden-orijinal/
// ucretsiz-danismanlik page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior page. icon values are limited to the component's fixed
// set (brain/dna/globe/radar/bluetooth/smartphone/radio/layers) —
// "radar" for the diagnostic hearing-test evaluation (consistent with
// its detection/scanning mapping across the site); "dna" for the
// personalized needs analysis (consistent with its custom/personalization
// mapping elsewhere); "smartphone" for the hands-on demo trial
// experience; "globe" for the SGK institutional/system guidance
// (consistent with its network/system mapping on prior pages).

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const ucretsizDanismanlikTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Danışmanlık Sürecinde Sıkça Bir Arada Sunulan Adımlar",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, ihtiyacınıza göre değişebilir.",
  items: [
    {
      id: "isitme-testi-degerlendirmesi",
      icon: "radar",
      navLabel: "İşitme Testi Değerlendirmesi",
      title: "Ücretsiz İşitme Testi Değerlendirmesi",
      lead: "Danışmanlık sürecimiz, odyometrist eşliğinde yapılan ücretsiz ve kapsamlı bir işitme testiyle başlar.",
      howItWorks: "Odyometrist, çeşitli test yöntemleriyle işitme durumunuzu değerlendirir ve sonuçları sizinle paylaşır.",
      advantages: [
        "İhtiyacınızın objektif bir şekilde belirlenmesini sağlar",
        "Cihaz önerilerinin sağlam bir temele dayanmasını sağlar",
        "Herhangi bir ücret talep edilmez",
      ],
      models: ["Ücretsiz İşitme Testi Kapsamı"],
      expertNote: "İşitme testi sonuçlarınız, danışmanlık sürecinin temelini oluşturur.",
    },
    {
      id: "ihtiyac-analizi",
      icon: "dna",
      navLabel: "Kişiye Özel İhtiyaç Analizi",
      title: "Yaşam Tarzına Özel İhtiyaç Analizi",
      lead: "İşitme testi sonrasında, günlük yaşamınıza ve önceliklerinize uygun bir ihtiyaç analizi yapılır.",
      howItWorks: "Yaşam tarzınız, kullanım ortamlarınız ve beklentileriniz değerlendirilerek size en uygun cihaz özellikleri belirlenir.",
      advantages: [
        "Genel değil, kişiye özel bir değerlendirme sunar",
        "Gereksiz özellikler için fazla ödeme yapılmasını önlemeye yardımcı olur",
        "Günlük yaşamınıza gerçekten uygun bir öneri sağlar",
      ],
      models: ["Kişiye Özel Değerlendirme Kapsamı"],
      expertNote: "İhtiyaç analizi, düzenli aralıklarla güncellenebilir.",
    },
    {
      id: "demo-cihaz-deneyimi",
      icon: "smartphone",
      navLabel: "Demo Cihaz Deneyimi",
      title: "Karar Öncesi Demo Cihaz Deneyimi",
      lead: "Karar vermeden önce, önerilen cihazı günlük yaşamınızda deneme imkânı sunuyoruz.",
      howItWorks: "Size uygun görülen cihaz, belirli bir süreliğine denemeniz için sağlanır; bu süre boyunca deneyiminizi bizimle paylaşabilirsiniz.",
      advantages: [
        "Kararınızı gerçek kullanım deneyimine dayandırmanızı sağlar",
        "Cihazın günlük yaşamınıza uygunluğunu test etme imkânı verir",
        "Satın alma öncesi ek bir güvence sunar",
      ],
      models: ["Demo Deneme Kapsamındaki Modeller"],
      expertNote: "Demo süresi ve kapsamı, cihaz modeline göre değişebilir.",
    },
    {
      id: "sgk-bilgilendirme",
      icon: "globe",
      navLabel: "SGK Bilgilendirme",
      title: "SGK Süreci ve Uygunluk Bilgilendirmesi",
      lead: "Danışmanlık sürecimiz, SGK desteği ve uygunluk kriterleri hakkında bilgilendirmeyi de kapsar.",
      howItWorks: "SGK'nın işitme cihazı desteği kapsamı, gerekli belgeler ve süreç adımları sizinle paylaşılır.",
      advantages: [
        "SGK hakkınızı bilinçli bir şekilde kullanmanıza yardımcı olur",
        "Süreç hakkında net ve güncel bilgi sağlar",
        "Gerekli belgelerin önceden hazırlanmasına yardımcı olur",
      ],
      models: ["SGK Danışmanlığı Kapsamı"],
      expertNote: "Detaylı bilgi için SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi sayfamızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorNavActiveBg: "rgb(13 148 136 / 0.1)",
  accentColorCalloutBg: "rgb(13 148 136 / 0.06)",
  accentColorCalloutLabel: "#0f766e",
};
