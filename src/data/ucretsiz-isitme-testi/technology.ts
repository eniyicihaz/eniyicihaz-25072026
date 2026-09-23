// "Teknolojiler" deep-dive hub for the /degerlendirme/
// ucretsiz-isitme-testi page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior page. icon values are limited to the component's fixed
// set (brain/dna/globe/radar/bluetooth/smartphone/radio/layers) —
// "radar" for odyometri's threshold-detection method (consistent with
// its detection/scanning mapping across the site); "layers" for
// timpanometri's physical middle-ear/eardrum measurement; "dna" for the
// age-specific, personalized approach children's testing requires
// (consistent with its personalization mapping elsewhere); "brain" for
// tinnitus's neurological/perceptual nature. Each item cross-references
// its own future dedicated page in this series (or the already-built
// Tinnitus Çözümleri page) rather than re-explaining the full procedure
// here.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const ucretsizIsitmeTestiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Değerlendirme Sürecinde Sıkça Bir Arada Sunulan Testler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, ihtiyacınıza göre değişebilir.",
  items: [
    {
      id: "odyometri",
      icon: "radar",
      navLabel: "Odyometri",
      title: "Odyometri ile İşitme Eşiği Ölçümü",
      lead: "Odyometri, işitme eşiğinizi belirlemek için farklı frekans ve şiddetteki seslere verdiğiniz tepkilerin ölçüldüğü temel işitme testidir.",
      howItWorks: "Kulaklık aracılığıyla farklı frekanslarda sesler verilir; her sesi duyduğunuzda belirtmeniz istenir ve duyabildiğiniz en düşük şiddet seviyesi kaydedilir.",
      advantages: [
        "İşitme kaybının varlığını ve derecesini objektif olarak ortaya koyar",
        "Sonuçlar bir odyogram üzerinde kolay anlaşılır şekilde sunulur",
        "Cihaz önerisi için temel veri sağlar",
      ],
      models: ["Odyometri Testi"],
      expertNote: "Odyometrinin çalışma prensibi hakkında detaylı bilgi için Odyometri sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "timpanometri",
      icon: "layers",
      navLabel: "Timpanometri",
      title: "Timpanometri ile Orta Kulak Değerlendirmesi",
      lead: "Timpanometri, orta kulaktaki basınç ve kulak zarının hareketliliğini değerlendiren tamamlayıcı bir testtir.",
      howItWorks: "Kulak kanalına yerleştirilen küçük bir prob aracılığıyla hava basıncı değiştirilir ve kulak zarının bu değişime verdiği tepki ölçülür.",
      advantages: [
        "Orta kulak sorunlarının tespitine yardımcı olur",
        "Kulak zarı hareketliliği hakkında bilgi sağlar",
        "Odyometri sonuçlarını tamamlayıcı bir değerlendirme sunar",
      ],
      models: ["Timpanometri Testi"],
      expertNote: "Detaylı bilgi için Timpanometri sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "cocuk-isitme-testi",
      icon: "dna",
      navLabel: "Çocuk İşitme Testi",
      title: "Yaşa Uygun Çocuk İşitme Testi",
      lead: "Çocuklarda işitme testi, yaşa uygun yöntemlerle ve çocuğun dikkatini koruyacak şekilde uygulanır.",
      howItWorks: "Çocuğun yaşına göre oyun tabanlı yöntemler veya standart odyometri teknikleri kullanılarak işitme durumu değerlendirilir.",
      advantages: [
        "Erken tespit, dil ve konuşma gelişimini desteklemeye yardımcı olabilir",
        "Çocuğun yaşına uygun, konforlu bir test deneyimi sunar",
        "Aile bilgilendirmesiyle birlikte yürütülür",
      ],
      models: ["Çocuk İşitme Testi"],
      expertNote: "Detaylı bilgi için Çocuk İşitme Testi sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "tinnitus-degerlendirme",
      icon: "brain",
      navLabel: "Tinnitus Değerlendirme",
      title: "Kulak Çınlaması İçin Ek Değerlendirme",
      lead: "Kulak çınlaması (tinnitus) şikayeti olan kullanıcılar için işitme testine ek bir değerlendirme süreci uygulanabilir.",
      howItWorks: "Standart işitme testine ek olarak, çınlamanın özellikleri ve şiddeti hakkında değerlendirme yapılır.",
      advantages: [
        "Çınlamanın işitme kaybıyla ilişkisini değerlendirmeye yardımcı olur",
        "Uygun yönlendirme ve destek seçeneklerinin belirlenmesine katkı sağlar",
        "Kapsamlı bir değerlendirme sunar",
      ],
      models: ["Tinnitus Değerlendirmesi"],
      expertNote: "Detaylı bilgi için Tinnitus (Kulak Çınlaması) Çözümleri sayfamızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
  accentColorNavActiveBg: "rgb(8 145 178 / 0.1)",
  accentColorCalloutBg: "rgb(8 145 178 / 0.06)",
  accentColorCalloutLabel: "#0e7490",
};
