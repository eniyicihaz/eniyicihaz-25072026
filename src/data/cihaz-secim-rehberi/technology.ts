// "Teknolojiler" deep-dive hub for the /rehberler/cihaz-secim-rehberi
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior series — here
// repurposed as the analytical tools behind the guidance process
// itself rather than device hardware. icon values are limited to the
// component's fixed set (brain/dna/globe/radar/bluetooth/smartphone/
// radio/layers) — "brain" for the needs-analysis process; "layers" for
// comparing multiple stacked brand/model options; "dna" for
// personalization across brands (consistent with its personalization
// mapping elsewhere); "bluetooth" is a direct, literal fit for
// connectivity compatibility.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const cihazSecimRehberiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Seçim Sürecini Destekleyen Yaklaşımlar",
  intro: "Her bileşeni seçerek nasıl çalıştığını inceleyebilirsiniz. Bu bölüm, doğru cihazı bulma sürecini nasıl desteklediğimizi anlatır.",
  items: [
    {
      id: "ihtiyac-analizi",
      icon: "brain",
      navLabel: "İhtiyaç Analizi",
      title: "Kişisel İhtiyaç Analizi",
      lead: "İşitme testi sonucunuz ve günlük yaşam alışkanlıklarınız birlikte değerlendirilerek bir ihtiyaç profili oluşturulur.",
      howItWorks: "Odyometristiniz, test sonuçlarınızı ve sizinle yaptığı görüşmeyi bir araya getirerek size uygun özellik setini belirler.",
      advantages: [
        "Kişisel ihtiyaçlarınıza dayalı somut bir başlangıç noktası sunar",
        "Gereksiz özelliklere yönelmenizi önlemeye yardımcı olur",
        "Karar sürecinizi hızlandırır",
      ],
      models: ["İhtiyaç Analizi Süreci"],
      expertNote: "İhtiyaç analizi, ücretsiz işitme testinizle birlikte gerçekleştirilir.",
    },
    {
      id: "coklu-marka-karsilastirma",
      icon: "layers",
      navLabel: "Çoklu Marka Karşılaştırma",
      title: "Çoklu Marka ve Model Karşılaştırması",
      lead: "İhtiyacınıza uygun birden fazla marka ve modelin özellikleri yan yana karşılaştırılır.",
      howItWorks: "Belirlenen ihtiyaç profiline uygun modeller listelenir; performans, konfor ve bütçe açısından karşılaştırılır.",
      advantages: [
        "Farklı seçenekleri objektif olarak karşılaştırmanızı sağlar",
        "Karar vermeden önce net bir tablo sunar",
        "Bütçenize uygun alternatifleri görmenize yardımcı olur",
      ],
      models: ["Karşılaştırmalı Değerlendirme"],
      expertNote: "Karşılaştırma, stok durumuna göre değişen modellerle sınırlı olabilir.",
    },
    {
      id: "kisisellestirme-secenekleri",
      icon: "dna",
      navLabel: "Kişiselleştirme Seçenekleri",
      title: "Markalar Arası Kişiselleştirme Seçenekleri",
      lead: "Renk, form ve programlama seçenekleri, seçtiğiniz markaya göre farklılık gösterebilir.",
      howItWorks: "Her markanın kendine özgü kişiselleştirme seçenekleri, seçim sürecinde sizinle birlikte incelenir.",
      advantages: [
        "Cihazınızın kişisel tercihlerinize uygun olmasını sağlar",
        "Estetik ve işlevsellik arasında denge kurmanıza yardımcı olur",
        "Markalar arası farkları somut olarak görmenizi sağlar",
      ],
      models: ["Kişiselleştirme Seçenekleri"],
      expertNote: "Kişiselleştirme kapsamı, marka ve modele göre değişir.",
    },
    {
      id: "baglanti-uyumlulugu",
      icon: "bluetooth",
      navLabel: "Bağlantı Uyumluluğu",
      title: "Akıllı Telefon Bağlantı Uyumluluğu",
      lead: "Değerlendirilen modellerin, kullandığınız akıllı telefonla uyumluluğu kontrol edilir.",
      howItWorks: "Cihazın Bluetooth özellikleri, telefonunuzun işletim sistemiyle uyumluluğu açısından incelenir.",
      advantages: [
        "Satın alma sonrası uyumluluk sorunlarını önlemeye yardımcı olur",
        "Günlük kullanım beklentinizin karşılanmasını destekler",
        "Uygulama tabanlı özelliklerden faydalanmanızı sağlar",
      ],
      models: ["Bağlantı Uyumluluğu Kontrolü"],
      expertNote: "Uyumluluk, telefon markası ve işletim sistemi sürümüne göre değişebilir.",
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
