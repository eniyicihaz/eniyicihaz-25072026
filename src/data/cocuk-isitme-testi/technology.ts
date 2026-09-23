// "Teknolojiler" deep-dive hub for the /degerlendirme/cocuk-isitme-testi
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior page. icon values are
// limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "radar" for the newborn
// screening's detection method (consistent with its detection/scanning
// mapping across the site); "brain" for ABR's direct measurement of
// brainstem/neural response; "dna" for play audiometry's personalized,
// age-adapted engagement approach (consistent with its personalization
// mapping elsewhere); "globe" for the holistic, family-inclusive
// evaluation process.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const cocukIsitmeTestiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Çocuk İşitme Testinde Sıkça Bir Arada Uygulanan Yöntemler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, çocuğun yaşına göre değişebilir.",
  items: [
    {
      id: "yenidogan-taramasi",
      icon: "radar",
      navLabel: "Yenidoğan Taraması",
      title: "Yenidoğan İşitme Taraması (OAE)",
      lead: "Yenidoğan işitme taraması, doğumdan kısa süre sonra uygulanan ve iç kulağın seslere verdiği tepkiyi ölçen objektif bir testtir.",
      howItWorks: "Bebeğin kulağına yerleştirilen küçük bir prob aracılığıyla ses verilir; iç kulaktaki tüylü hücrelerin bu sese verdiği yanıt (otoakustik emisyon) ölçülür.",
      advantages: [
        "Doğum sonrası erken dönemde uygulanabilir",
        "Bebeğin uyanık olmasını gerektirmez",
        "İşitme kaybının erken tespitine yardımcı olabilir",
      ],
      models: ["Yenidoğan İşitme Taraması"],
      expertNote: "Tarama sonucu \"geçmedi\" çıkması, kesin bir işitme kaybı tanısı anlamına gelmez; ileri değerlendirme gerekebilir.",
    },
    {
      id: "abr-testi",
      icon: "brain",
      navLabel: "İşitsel Beyin Sapı Yanıtı (ABR)",
      title: "İşitsel Beyin Sapı Yanıtı (ABR) Testi",
      lead: "ABR testi, sese karşı işitsel sinir yolunda oluşan elektriksel aktiviteyi ölçen objektif bir testtir.",
      howItWorks: "Bebeğin başına yerleştirilen küçük elektrotlar aracılığıyla, kulaklıktan verilen seslere karşı beyin sapındaki elektriksel yanıtlar kaydedilir; test genellikle bebek uyurken uygulanır.",
      advantages: [
        "Bebeğin aktif katılımını gerektirmez",
        "İşitsel sinir yolunun bütünlüğü hakkında bilgi sağlar",
        "Yenidoğan taramasını tamamlayan bir değerlendirme sunar",
      ],
      models: ["İşitsel Beyin Sapı Yanıtı Testi"],
      expertNote: "ABR testi genellikle yenidoğan taraması sonrası ileri değerlendirme gerektiğinde uygulanır.",
    },
    {
      id: "oyun-odyometrisi",
      icon: "dna",
      navLabel: "Oyun Odyometrisi",
      title: "Oyun Tabanlı Odyometri",
      lead: "Oyun odyometrisi, erken çocukluk döneminde çocuğun ses duyduğunda bir oyuna katılmaya teşvik edildiği davranışsal bir testtir.",
      howItWorks: "Çocuk, ses duyduğunda bir küpü kutuya atmak veya oyuncağı hareket ettirmek gibi basit bir eylemi gerçekleştirmeye teşvik edilir; bu sayede işitme eşiği belirlenir.",
      advantages: [
        "Çocuğun yaşına uygun, eğlenceli bir test deneyimi sunar",
        "Aktif katılım gerektiren daha kesin bir eşik ölçümü sağlar",
        "Çocuğun dikkatini koruyacak şekilde tasarlanmıştır",
      ],
      models: ["Oyun Odyometrisi"],
      expertNote: "Yöntem, çocuğun yaşına ve gelişim düzeyine göre uyarlanır.",
    },
    {
      id: "aile-katilimli-degerlendirme",
      icon: "globe",
      navLabel: "Aile Katılımlı Değerlendirme",
      title: "Aile Katılımlı Değerlendirme Süreci",
      lead: "Çocuk işitme testi süreci, ailenin gözlemleri ve katılımıyla birlikte bütüncül bir şekilde yürütülür.",
      howItWorks: "Test öncesinde ailenin gözlemleri ve çocuğun gelişim geçmişi dinlenir; test sırasında ve sonrasında aile bilgilendirilerek sürece dahil edilir.",
      advantages: [
        "Değerlendirmenin daha bütüncül olmasını sağlar",
        "Ailenin süreç hakkında bilgi sahibi olmasına yardımcı olur",
        "Çocuğun test sırasında daha rahat olmasına katkı sağlayabilir",
      ],
      models: ["Aile Katılımlı Değerlendirme"],
      expertNote: "Sonuçlar ve sonraki adımlar, aile ile birlikte detaylıca değerlendirilir.",
    },
  ],
  accentColor: "#f97316",
  accentColorBadgeBg: "rgb(249 115 22 / 0.08)",
  accentColorBadgeBorder: "rgb(249 115 22 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorNavActiveBg: "rgb(249 115 22 / 0.1)",
  accentColorCalloutBg: "rgb(249 115 22 / 0.06)",
  accentColorCalloutLabel: "#c2410c",
};
