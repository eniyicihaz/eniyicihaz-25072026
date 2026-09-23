// "Teknolojiler" deep-dive hub for the /ihtiyaciniza-gore/
// aktif-yasam-icin-cihazlar page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior feature/need page. icon values are limited to the
// component's fixed set (brain/dna/globe/radar/bluetooth/smartphone/
// radio/layers) — "dna" for the personalized secure-retention hardware
// (consistent with its custom-fit mapping on the Görünmez/Konuşma Odaklı
// pages); "globe" for the IP protection standard (consistent with the
// Suya Dayanıklı page's own IP-standard mapping — its item is
// cross-referenced here rather than re-explained); "radar" for wind-noise
// handling (consistent with the directional-microphone mapping used
// elsewhere); "layers" for the rechargeable battery cell (consistent
// with its mapping on both Suya Dayanıklı and Şarjlı Teknolojiler).

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const aktifYasamIcinCihazlarTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Aktif Yaşam İçin Sıkça Bir Arada Sunulan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "guvenli-oturma",
      icon: "dna",
      navLabel: "Güvenli Oturma Tasarımı",
      title: "Kişiye Özel Güvenli Oturma Sistemleri",
      lead: "İnce kancalar, özel tutucular veya kulak kanalına iyi oturan uçlar, cihazın hareket sırasında yerinde kalmasına yardımcı olabilir.",
      howItWorks: "Cihazın kulak arkası kancası veya kulak içi ucu, kullanıcının kulak yapısına uygun şekilde seçilir; bazı üreticiler ayrıca aktif kullanıcılar için özel olarak tasarlanmış ek tutucu aksesuarlar sunar.",
      advantages: [
        "Egzersiz veya hızlı hareketler sırasında düşme riskini azaltmaya yardımcı olabilir",
        "Uzun süreli kullanımda konforu artırabilir",
        "Farklı kulak yapılarına uygun seçenekler sunar",
      ],
      models: ["Güvenli Oturmalı Modeller"],
      expertNote: "Size en uygun tutucu seçeneği, kulak yapınız ve aktivite düzeyinize göre odyometristinizle birlikte belirlenir.",
    },
    {
      id: "yuksek-ip-korumasi",
      icon: "globe",
      navLabel: "Yüksek IP Koruma Sınıfı",
      title: "Uluslararası IP Koruma Standardı",
      lead: "Uluslararası IP standardına göre test edilen koruma sınıfları, aktif kullanım sırasında ter ve neme karşı ek güven sağlayabilir.",
      howItWorks: "Cihazlar, toz ve suya karşı dayanıklılığını doğrulamak için laboratuvar testlerinden geçirilir; test sonuçlarına göre iki haneli bir IP kodu atanır.",
      advantages: [
        "Ter kaynaklı arıza riskini azaltmaya yardımcı olur",
        "Nemli veya tozlu ortamlarda ek güven sağlar",
        "Marka ve modeller arası nesnel bir kıyaslama imkânı sunar",
      ],
      models: ["IP Sertifikalı Modeller"],
      expertNote: "IP koruma standardının nasıl çalıştığı hakkında detaylı bilgi için Suya Dayanıklı Cihazlar sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "ruzgar-gurultusu-azaltma",
      icon: "radar",
      navLabel: "Rüzgar Gürültüsü Azaltma",
      title: "Açık Havaya Özel Rüzgar Gürültüsü Azaltma",
      lead: "Gelişmiş mikrofon teknolojileri, açık havada rüzgar kaynaklı gürültüyü azaltarak konuşmanın daha net algılanmasına yardımcı olabilir.",
      howItWorks: "Cihazdaki algoritmalar, rüzgarın mikrofonlara çarpmasından kaynaklanan düşük frekanslı gürültü ile konuşma sesini ayırt ederek rüzgar gürültüsünü seçici olarak azaltır.",
      advantages: [
        "Açık havada konuşmayı takip etmeyi kolaylaştırmaya yardımcı olur",
        "Bisiklet, yürüyüş gibi aktivitelerde dinleme çabasını azaltabilir",
        "Genellikle otomatik olarak devreye girer",
      ],
      models: ["Rüzgar Gürültüsü Azaltmalı Modeller"],
      expertNote: "Rüzgar gürültüsü azaltma hassasiyeti üreticiye ve modele göre değişir; ihtiyacınıza uygun sistem uzman değerlendirmesiyle belirlenir.",
    },
    {
      id: "hizli-sarj",
      icon: "layers",
      navLabel: "Hızlı Şarj ve Uzun Pil Ömrü",
      title: "Hızlı Şarj Teknolojisi",
      lead: "Kısa sürede yüksek şarj seviyesine ulaşan sistemler, yoğun bir günü tamamlamaya ve sık seyahat etmeye yardımcı olabilir.",
      howItWorks: "Cihaz, birkaç dakikalık hızlı şarj ile saatler süren kullanım için yeterli enerji depolayabilir; tam şarj ise genellikle tüm günü kapsayan bir kullanım süresi sağlar.",
      advantages: [
        "Sabah kısa sürede tam şarj imkânı sunabilir",
        "Seyahat sırasında pratik bir çözüm olabilir",
        "Küçük pil taşıma ihtiyacını ortadan kaldırır",
      ],
      models: ["Hızlı Şarj Özellikli Modeller"],
      expertNote: "Şarj süresi ve kullanım ömrü hakkında detaylı bilgi için Şarj Edilebilir Cihazlar sayfamızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#4b5563",
  accentColorBadgeBg: "rgb(75 85 99 / 0.08)",
  accentColorBadgeBorder: "rgb(75 85 99 / 0.35)",
  accentColorBadgeText: "#374151",
  accentColorNavActiveBg: "rgb(75 85 99 / 0.1)",
  accentColorCalloutBg: "rgb(75 85 99 / 0.06)",
  accentColorCalloutLabel: "#374151",
};
