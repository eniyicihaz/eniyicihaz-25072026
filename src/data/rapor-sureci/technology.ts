// "Rapor Sisteminin Bileşenleri" deep-dive hub for the
// /sgk/rapor-sureci page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior series. icon values are limited to the component's
// fixed set (brain/dna/globe/radar/bluetooth/smartphone/radio/layers)
// — "brain" for the heyet's clinical decision-making; "globe" for the
// nationwide e-Rapor/MEDULA institutional system; "smartphone" for
// checking report status via e-Devlet; "radar" for tracking the
// report's progress through its stages.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const raporSureciTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Rapor Sisteminin Bileşenleri",
  intro: "Her bileşeni seçerek nasıl çalıştığını inceleyebilirsiniz. Bu bölüm, rapor sürecinin arkasındaki sistemin nasıl işlediğini anlatır.",
  items: [
    {
      id: "heyet-degerlendirmesi",
      icon: "brain",
      navLabel: "Heyet Değerlendirmesi",
      title: "Sağlık Kurulunun Klinik Değerlendirmesi",
      lead: "Sağlık kurulu, test sonuçlarınızı ve muayene bulgularınızı bir araya getirerek raporunuzu düzenler.",
      howItWorks: "Kurulda görevli hekimler, odyometri sonuçlarınızı ve klinik muayene bulgularınızı birlikte değerlendirerek işitme kaybı derecenizi ve cihaz ihtiyacınızı raporlar.",
      advantages: [
        "Birden fazla uzmanın değerlendirmesinden geçer",
        "Klinik bulgularla test sonuçlarını bir arada değerlendirir",
        "Objektif ve standart bir değerlendirme sağlar",
      ],
      models: ["Sağlık Kurulu Raporu"],
      expertNote: "Heyet toplantı sıklığı hastaneye göre değişebilir; randevu almadan önce ilgili hastaneden bilgi almanızı öneririz.",
    },
    {
      id: "e-rapor-sistemi",
      icon: "globe",
      navLabel: "e-Rapor Sistemi",
      title: "Ülke Genelindeki Dijital Rapor Sistemi",
      lead: "Onaylanan raporlar, SGK'nın ülke genelinde kullandığı dijital sisteme işlenir.",
      howItWorks: "Hastane, düzenlediği raporu SGK'nın e-Rapor sistemine işler; bu sayede rapor, ülkenin her yerindeki SGK anlaşmalı merkezlerde geçerli hale gelir.",
      advantages: [
        "Raporu fiziksel olarak taşımanıza gerek kalmaz",
        "Farklı bir şehirdeki merkezde de geçerlidir",
        "Manuel kayıt hatalarını azaltır",
      ],
      models: ["e-Rapor Sistemi"],
      expertNote: "Sistem, SGK mevzuatındaki güncellemelere göre periyodik olarak güncellenir.",
    },
    {
      id: "dijital-rapor-sorgulama",
      icon: "smartphone",
      navLabel: "Dijital Rapor Sorgulama",
      title: "e-Devlet Üzerinden Rapor ve Reçete Sorgulama",
      lead: "Sağlık kurulu raporunuzu ve reçetenizi e-Devlet uygulaması üzerinden dijital olarak sorgulayabilirsiniz.",
      howItWorks: "e-Devlet uygulamasına giriş yaparak, raporunuzun ve reçetenizin güncel durumunu ve geçerlilik bilgilerini görüntüleyebilirsiniz.",
      advantages: [
        "Rapor durumunuzu anlık olarak takip edebilirsiniz",
        "Belgelerinizi dijital olarak görüntüleyebilirsiniz",
        "Süreç şeffaflığını artırır",
      ],
      models: ["e-Devlet Sorgulama"],
      expertNote: "e-Devlet şifreniz yoksa, PTT şubelerinden temin edebilirsiniz.",
    },
    {
      id: "surec-takibi",
      icon: "radar",
      navLabel: "Süreç Takibi",
      title: "Raporunuzun Aşamalarını Takip Etme",
      lead: "Rapor süreci, muayeneden SGK sistemine işlenmesine kadar birkaç ayrı aşamadan oluşur.",
      howItWorks: "Her aşamanın tamamlanma durumu hastane veya e-Devlet üzerinden takip edilebilir; merkezimiz de sürecinizi sizin adınıza takip etmenize yardımcı olur.",
      advantages: [
        "Sürecin hangi aşamada olduğunu bilirsiniz",
        "Olası gecikmeleri erken fark edebilirsiniz",
        "Belirsizlik hissini azaltır",
      ],
      models: ["Süreç Takibi"],
      expertNote: "Sürecinizle ilgili güncel durumu öğrenmek için bizimle iletişime geçebilirsiniz.",
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
