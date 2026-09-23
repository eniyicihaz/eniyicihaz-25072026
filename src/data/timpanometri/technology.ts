// "Teknolojiler" deep-dive hub for the /degerlendirme/timpanometri page.
// Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior page. icon values are
// limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "radar" for the pressure-
// detection measurement (consistent with its detection/scanning mapping
// across the site); "layers" for the physical eardrum-membrane
// mechanics; "brain" for the acoustic reflex's neuromuscular response;
// "smartphone" for the digital timpanogram reporting system (consistent
// with its mapping on Odyometri's own odyogram-recording item).

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const timpanometriTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Timpanometride Sıkça Bir Arada Ölçülen Değerler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, ihtiyacınıza göre değişebilir.",
  items: [
    {
      id: "orta-kulak-basinci",
      icon: "radar",
      navLabel: "Orta Kulak Basıncı",
      title: "Orta Kulak Basıncı Ölçümü",
      lead: "Orta kulak basıncı ölçümü, kulak zarının arkasındaki basıncın normal aralıkta olup olmadığını belirler.",
      howItWorks: "Kulak kanalına yerleştirilen prob, hava basıncını kademeli olarak değiştirir ve kulak zarının farklı basınç seviyelerindeki tepkisini kaydeder.",
      advantages: [
        "Orta kulaktaki sıvı birikimi gibi durumların tespitine yardımcı olabilir",
        "Östaki borusu işlevini dolaylı olarak değerlendirmeye yardımcı olur",
        "Hızlı ve objektif bir ölçüm sunar",
      ],
      models: ["Orta Kulak Basıncı Ölçümü"],
      expertNote: "Anormal basınç sonuçlarında bir KBB değerlendirmesi önerilebilir.",
    },
    {
      id: "kulak-zari-hareketliligi",
      icon: "layers",
      navLabel: "Kulak Zarı Hareketliliği",
      title: "Kulak Zarı Hareketliliği Ölçümü",
      lead: "Kulak zarı hareketliliği ölçümü, timpanik membranın basınç değişimlerine ne kadar esnek tepki verdiğini değerlendirir.",
      howItWorks: "Kulak zarının farklı basınç seviyelerinde gösterdiği hareket miktarı ölçülür ve bir timpanogram eğrisi olarak kaydedilir.",
      advantages: [
        "Kulak zarının esnekliği hakkında bilgi sağlar",
        "Sıvı birikimi veya sertleşme gibi durumların belirtilerini gösterebilir",
        "Odyometri sonuçlarını yorumlamaya katkı sağlar",
      ],
      models: ["Kulak Zarı Hareketliliği Ölçümü"],
      expertNote: "Timpanogram eğrisinin tipi, odyometristiniz tarafından değerlendirilir.",
    },
    {
      id: "akustik-refleks",
      icon: "brain",
      navLabel: "Akustik Refleks",
      title: "Akustik Refleks Ölçümü",
      lead: "Akustik refleks ölçümü, yüksek şiddetteki seslere karşı orta kulak kaslarının verdiği refleks tepkisini değerlendirir.",
      howItWorks: "Belirli bir şiddetin üzerindeki sesler verilir ve orta kulaktaki kasların bu seslere karşı refleks olarak kasılıp kasılmadığı ölçülür.",
      advantages: [
        "İşitme yolunun bütünlüğü hakkında ek bilgi sağlar",
        "Bazı işitsel sinir durumlarının değerlendirilmesine katkı sağlayabilir",
        "Objektif bir tamamlayıcı ölçüm sunar",
      ],
      models: ["Akustik Refleks Ölçümü"],
      expertNote: "Bu ölçüm her cihazda veya her hastada standart olarak uygulanmayabilir.",
    },
    {
      id: "timpanogram-raporu",
      icon: "smartphone",
      navLabel: "Timpanogram Raporu",
      title: "Timpanogram Kaydı ve Raporlama",
      lead: "Tüm ölçüm sonuçları, dijital bir sistem üzerinde timpanogram hâline getirilerek kaydedilir ve raporlanır.",
      howItWorks: "Test sırasında elde edilen veriler, timpanometri cihazı tarafından dijital olarak kaydedilir ve anlaşılır bir grafik rapor hâline getirilir.",
      advantages: [
        "Sonuçların odyometri raporuyla birlikte değerlendirilmesini kolaylaştırır",
        "Zaman içindeki değişimlerin karşılaştırılmasına imkan tanır",
        "Gerekirse KBB uzmanıyla paylaşılabilir bir rapor sunar",
      ],
      models: ["Dijital Timpanogram Raporu"],
      expertNote: "Timpanogram raporunuzun bir kopyasını talep edebilirsiniz.",
    },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
  accentColorNavActiveBg: "rgb(147 51 234 / 0.1)",
  accentColorCalloutBg: "rgb(147 51 234 / 0.06)",
  accentColorCalloutLabel: "#7e22ce",
};
