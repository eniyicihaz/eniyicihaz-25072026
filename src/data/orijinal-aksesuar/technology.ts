// "Teknolojiler" deep-dive hub for the /neden-orijinal/orijinal-aksesuar
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior page. icon values are
// limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "dna" for the personalized,
// ear-shape-specific fit of tips/molds (consistent with its custom-fit
// mapping on Görünmez/Konuşma Odaklı/Aktif Yaşam); "radar" for the
// protective filter membrane (consistent with its "koruyucu membran"
// mapping on Suya Dayanıklı); "layers" for the physical battery/charging
// hardware (consistent with its mapping on Uzun Ömürlü Cihazlar and
// Şarjlı Teknolojiler); "bluetooth" for TV/phone streaming accessories
// (consistent with its wireless-connectivity mapping across the site).
// The pil/şarj and streaming items cross-reference the pages that
// already own those technologies' full deep dives rather than
// re-explaining them here.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const orijinalAksesuarTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Orijinal Aksesuarlarda Sıkça Bir Arada Sunulan Bileşenler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, marka ve modele göre değişebilir.",
  items: [
    {
      id: "kulak-uclari-kaliplar",
      icon: "dna",
      navLabel: "Kulak Uçları ve Kalıplar",
      title: "Kişiye Özel Kulak Uçları ve Kalıplar",
      lead: "Kulak uçları ve özel kalıplar, cihazınızın kulağınıza tam ve konforlu bir şekilde oturmasını sağlar.",
      howItWorks: "Kulak ucu, cihazın hoparlör ucuna takılır ve kulak kanalınızın şekline uygun boy ve tipte seçilir; özel kalıplar ise kulağınızın ölçüsü alınarak üretilir.",
      advantages: [
        "Kulağa tam ve konforlu bir uyum sağlar",
        "Ses sızıntısını azaltmaya yardımcı olur",
        "Cihazın yerinde kalmasına katkı sağlar",
      ],
      models: ["Orijinal Kulak Ucu ve Kalıp Seçenekleri"],
      expertNote: "Size uygun boy ve tip, odyometristiniz tarafından belirlenir.",
    },
    {
      id: "cerumen-filtreleri",
      icon: "radar",
      navLabel: "Cerumen Filtreleri",
      title: "Koruyucu Cerumen (Kulak Kiri) Filtreleri",
      lead: "Cerumen filtreleri, cihazın hoparlörünü kulak kirinden koruyarak ses kalitesinin korunmasına yardımcı olur.",
      howItWorks: "İnce, gözenekli bir filtre, hoparlör girişine yerleştirilir; sesin geçişine izin verirken kulak kirinin cihaza girmesini engeller.",
      advantages: [
        "Hoparlörü kulak kirine karşı korur",
        "Ses kalitesinin korunmasına yardımcı olur",
        "Düzenli değişimle hijyenik kullanım sağlar",
      ],
      models: ["Orijinal Cerumen Filtreli Modeller"],
      expertNote: "Filtre değişim sıklığı, kullanım yoğunluğuna göre değişebilir.",
    },
    {
      id: "pil-sarj-aksesuarlari",
      icon: "layers",
      navLabel: "Pil ve Şarj Aksesuarları",
      title: "Orijinal Pil ve Şarj Aksesuarları",
      lead: "Orijinal piller ve şarj aksesuarları, cihazınıza uygun güç desteği sağlayacak şekilde üretilir.",
      howItWorks: "Piller, cihazın enerji ihtiyacına uygun kapasite ve boyutta üretilir; şarj kutuları ise cihazla uyumlu şarj hızı ve güvenlik standartlarına göre tasarlanır.",
      advantages: [
        "Cihaza uygun ve güvenli güç desteği sağlar",
        "Pil ömrünü ve performansını korumaya yardımcı olur",
        "Uyumsuz şarj kaynaklı hasar riskini azaltır",
      ],
      models: ["Orijinal Pil ve Şarj Aksesuarlı Modeller"],
      expertNote: "Detaylı bilgi için Şarj Edilebilir Cihazlar sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "tv-telefon-streaming",
      icon: "bluetooth",
      navLabel: "TV ve Telefon Streaming Aksesuarları",
      title: "Orijinal TV ve Telefon Streaming Aksesuarları",
      lead: "Orijinal streaming aksesuarları, TV ve telefon sesini doğrudan cihazınıza aktarmanızı sağlar.",
      howItWorks: "Aksesuar, TV veya telefonunuza bağlanır ve sesi kablosuz olarak doğrudan işitme cihazınıza iletir.",
      advantages: [
        "TV sesini net ve doğrudan alma imkânı sunar",
        "Telefon görüşmelerini doğrudan cihazdan dinleme imkânı sağlar",
        "Ayrı bir kulaklık taşıma ihtiyacını ortadan kaldırır",
      ],
      models: ["Streaming Aksesuarı Uyumlu Modeller"],
      expertNote: "Detaylı bilgi için Bluetooth Özellikli Cihazlar sayfamızı inceleyebilirsiniz.",
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
