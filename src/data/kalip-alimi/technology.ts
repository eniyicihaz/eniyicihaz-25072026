// "Teknolojiler" deep-dive hub for the /uygulama-ayar/kalip-alimi
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior series. icon values
// are limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "radar" for digital ear scanning
// (consistent with its detection/scanning mapping across the site);
// "layers" for the silicone impression material's physical composition;
// "dna" for the uniquely personal shape and color customization
// (consistent with this session's established personalization mapping
// for the icon); "globe" for the venting channel's airflow function.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const kalipAlimiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Kalıp Alımında Kullanılan Yöntemler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, tercih edilen yönteme göre değişebilir.",
  items: [
    {
      id: "dijital-kulak-taramasi",
      icon: "radar",
      navLabel: "Dijital Kulak Taraması",
      title: "Dijital Kulak Taraması",
      lead: "Bazı kliniklerde, geleneksel kalıp malzemesi yerine dijital bir tarayıcıyla kulak kanalının üç boyutlu görüntüsü alınabilir.",
      howItWorks: "Küçük bir tarayıcı probu kulak kanalına yerleştirilir ve kanalın iç yüzeyi dijital olarak haritalandırılır.",
      advantages: [
        "Fiziksel malzeme kullanmadan ölçü alınmasını sağlayabilir",
        "Dijital verinin laboratuvara hızlı iletilmesine imkân tanır",
        "Ölçüm tekrarlanabilirliğini artırabilir",
      ],
      models: ["Dijital Tarama Yöntemi"],
      expertNote: "Dijital tarama her klinikte veya her durumda mevcut olmayabilir.",
    },
    {
      id: "silikon-kalip-malzemesi",
      icon: "layers",
      navLabel: "Silikon Kalıp Malzemesi",
      title: "Silikon Kalıp Malzemesi",
      lead: "Geleneksel yöntemde, yumuşak bir silikon malzeme kulak kanalınıza yerleştirilerek şeklini alır.",
      howItWorks: "İki bileşenli silikon malzeme karıştırılır, kulak kanalına enjekte edilir ve birkaç dakika içinde sertleşerek kalıbı oluşturur.",
      advantages: [
        "Uzun süredir güvenilirliği kanıtlanmış bir yöntemdir",
        "Kulak kanalının ince detaylarını hassas şekilde kopyalayabilir",
        "Çoğu klinikte yaygın olarak uygulanabilir",
      ],
      models: ["Silikon Kalıp Yöntemi"],
      expertNote: "Malzeme türü ve sertliği, kalıbın kullanım amacına göre seçilir.",
    },
    {
      id: "kisiye-ozel-sekil-ve-renk",
      icon: "dna",
      navLabel: "Kişiye Özel Şekil ve Renk",
      title: "Kişiye Özel Şekil ve Renk Seçenekleri",
      lead: "Üretilen kalıp, yalnızca sizin kulak kanalınızın şekline göre biçimlenir; malzeme ve renk tercihine göre kişiselleştirilebilir.",
      howItWorks: "Laboratuvar, alınan ölçüyü temel alarak kalıbı üretir; tercih ettiğiniz renk ve malzeme sertliği üretime yansıtılır.",
      advantages: [
        "Herkes için benzersiz bir uyum sağlar",
        "Cilt tonuna uygun veya dikkat çekici renk seçenekleri sunabilir",
        "Malzeme sertliği konfor tercihine göre ayarlanabilir",
      ],
      models: ["Kişiye Özel Kalıp Üretimi"],
      expertNote: "Renk ve malzeme seçenekleri, çalışılan laboratuvara göre değişebilir.",
    },
    {
      id: "ventilasyon-kanali-tasarimi",
      icon: "globe",
      navLabel: "Ventilasyon Kanalı Tasarımı",
      title: "Ventilasyon (Havalandırma) Kanalı Tasarımı",
      lead: "Kalıbın içine açılan küçük bir kanal, kulak kanalında hava akışının sürmesine ve dolgunluk hissinin azalmasına yardımcı olabilir.",
      howItWorks: "Üretim sırasında kalıbın içine, işitme kaybınızın derecesine uygun çap ve uzunlukta bir havalandırma kanalı açılır.",
      advantages: [
        "Kulakta dolgunluk (oklüzyon) hissini azaltmaya yardımcı olabilir",
        "Kendi sesinizi daha doğal duymanıza katkı sağlayabilir",
        "İşitme kaybı derecenize göre kişiselleştirilebilir",
      ],
      models: ["Ventilasyon Kanallı Kalıplar"],
      expertNote: "Kanal boyutu, işitme kaybı derecenize göre odyometrist tarafından belirlenir.",
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
  accentColorNavActiveBg: "rgb(219 39 119 / 0.1)",
  accentColorCalloutBg: "rgb(219 39 119 / 0.06)",
  accentColorCalloutLabel: "#be185d",
};
