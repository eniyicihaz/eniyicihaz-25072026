// "Teknolojiler" deep-dive hub for the /degerlendirme/
// tinnitus-degerlendirme page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior Değerlendirme page. icon values are limited to the
// component's fixed set (brain/dna/globe/radar/bluetooth/smartphone/
// radio/layers) — "radar" for the pitch-matching frequency search
// (consistent with its detection/scanning mapping across the site);
// "layers" for the loudness-matching level comparison; "brain" for the
// THI questionnaire's subjective-impact scoring; "radio" for the
// masking-threshold trial's sound-based nature (consistent with
// tinnitus-cozumleri's own "radio" mapping for its sound generator).

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const tinnitusDegerlendirmeTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Tinnitus Değerlendirmesinde Kullanılan Yöntemler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, şikayetinize göre değişebilir.",
  items: [
    {
      id: "perde-eslestirme",
      icon: "radar",
      navLabel: "Perde Eşleştirmesi",
      title: "Perde (Frekans) Eşleştirmesi",
      lead: "Perde eşleştirmesi, duyduğunuz çınlamaya en yakın frekansı belirlemeye yarayan bir ölçüm yöntemidir.",
      howItWorks: "Size farklı frekanslarda referans sesler dinletilir; hangi sesin çınlamanıza en çok benzediğini belirtmeniz istenir.",
      advantages: [
        "Çınlamanızın karakterini size özel bir referansla tanımlar",
        "Takip değerlendirmelerinde karşılaştırma imkânı sağlar",
        "Objektif bir kayıt oluşturur",
      ],
      models: ["Perde Eşleştirme Değerlendirmesi"],
      expertNote: "Eşleştirilen frekans, tinnitus'un şiddetinin bir göstergesi değildir; yalnızca karakterini tanımlar.",
    },
    {
      id: "siddet-eslestirme",
      icon: "layers",
      navLabel: "Şiddet Eşleştirmesi",
      title: "Şiddet (Loudness) Eşleştirmesi",
      lead: "Şiddet eşleştirmesi, çınlamanızın algılanan yüksekliğini bir referans sesle karşılaştırarak ölçer.",
      howItWorks: "Belirlenen perdedeki referans sesin seviyesi kademeli olarak artırılır; sizden bu sesin çınlamanızla eşit yükseklikte olduğu noktayı belirtmeniz istenir.",
      advantages: [
        "Çınlamanızın algılanan şiddetini sayısal olarak kaydeder",
        "Zaman içindeki değişimi takip etmeye yardımcı olur",
        "Anket sonuçlarını tamamlayan objektif bir veri sunar",
      ],
      models: ["Şiddet Eşleştirme Değerlendirmesi"],
      expertNote: "Algılanan şiddet, günden güne değişkenlik gösterebilir; tek bir ölçüm kesin bir referans olarak alınmaz.",
    },
    {
      id: "thi-anketi",
      icon: "brain",
      navLabel: "THI Anketi",
      title: "THI (Tinnitus Handicap Inventory) Anketi",
      lead: "THI anketi, tinnitus'un günlük yaşamınıza olan etkisini fonksiyonel, duygusal ve katastrofik boyutlarıyla ölçen standart bir değerlendirme aracıdır.",
      howItWorks: "Bir dizi soruya verdiğiniz yanıtlar puanlanarak, tinnitus'un yaşam kalitenize etkisini gösteren bir toplam skor elde edilir.",
      advantages: [
        "Şikayetin öznel etkisini sayısal olarak ortaya koyar",
        "Zaman içindeki değişimi objektif olarak izlemeye imkân tanır",
        "Uygun yönlendirme kararlarına katkı sağlar",
      ],
      models: ["THI Anket Değerlendirmesi"],
      expertNote: "Skor yüksekliği tek başına tedavi kararını belirlemez; diğer bulgularla birlikte değerlendirilir.",
    },
    {
      id: "maskeleme-denemesi",
      icon: "radio",
      navLabel: "Maskeleme Denemesi",
      title: "Maskeleme Eşiği Denemesi",
      lead: "Maskeleme denemesi, çınlamanızı hafifçe örtebilecek en düşük ses seviyesini araştıran bir ölçümdür.",
      howItWorks: "Çınlamanıza yakın bir gürültü sesi kademeli olarak artırılır; sesin çınlamayı ne düzeyde örttüğü sizinle birlikte değerlendirilir.",
      advantages: [
        "Ses üreteci desteğinin faydalı olup olmayacağı hakkında fikir verir",
        "Kişiye özel bir başlangıç referansı oluşturur",
        "Tinnitus Çözümleri sayfamızdaki cihaz tabanlı desteğin planlanmasına katkı sağlar",
      ],
      models: ["Maskeleme Eşiği Denemesi"],
      expertNote: "Detaylı bilgi için Tinnitus Çözümleri sayfamızı inceleyebilirsiniz.",
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
