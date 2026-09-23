// "Teknolojiler" deep-dive hub for the /sgk/katki-payi page. Renders
// through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior series. icon values
// are limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "globe" for SGK's own
// institutional/nationwide support system; "layers" for the
// age-group/category classification structure; "smartphone" is a
// direct, literal fit for checking your e-rapor/e-reçete via the
// e-Devlet mobile app; "brain" for the annual battery-support tracking
// record (consistent with its record-keeping mapping elsewhere).

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const sgkKatkiPayiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "SGK Destek Sisteminin Bileşenleri",
  intro: "Her bileşeni seçerek nasıl çalıştığını inceleyebilirsiniz. Bu bölüm, SGK destek sisteminin nasıl işlediğini anlatır.",
  items: [
    {
      id: "sgk-destek-sistemi",
      icon: "globe",
      navLabel: "SGK Destek Sistemi",
      title: "SGK'nın Ülke Genelindeki Destek Sistemi",
      lead: "SGK, tüm anlaşmalı merkezlerde geçerli olan standart bir destek sistemi üzerinden işitme cihazı katkısı sağlar.",
      howItWorks: "Sigortalılık bilgileriniz SGK sistemine kayıtlıdır; anlaşmalı bir merkezden alım yaptığınızda destek tutarı bu sistem üzerinden otomatik olarak uygulanır.",
      advantages: [
        "Ülke genelinde standart ve tutarlı bir uygulama sağlar",
        "Anlaşmalı merkezler arasında şeffaf bir süreç sunar",
        "Manuel hesaplama hatalarını azaltmaya yardımcı olur",
      ],
      models: ["SGK Destek Sistemi"],
      expertNote: "Sistem, SGK mevzuatındaki güncellemelere göre periyodik olarak güncellenir.",
    },
    {
      id: "yas-grubu-siniflandirmasi",
      icon: "layers",
      navLabel: "Yaş Grubu Sınıflandırması",
      title: "Yaş Grubu Sınıflandırması",
      lead: "SGK, destek tutarlarını farklı yaş gruplarına göre kademeli olarak belirler.",
      howItWorks: "Kimlik bilgilerinizdeki doğum tarihi esas alınarak, hangi yaş grubuna girdiğiniz sistem tarafından belirlenir.",
      advantages: [
        "Çocuklara yönelik özel destek düzenlemelerine imkân tanır",
        "Yaşa uygun bir destek yapısı sunar",
        "Kategorinizi önceden tahmin etmenizi sağlar",
      ],
      models: ["Yaş Grubu Kategorileri"],
      expertNote: "Güncel yaş aralıkları için SGK rehberimizi inceleyebilirsiniz.",
    },
    {
      id: "dijital-rapor-sorgulama",
      icon: "smartphone",
      navLabel: "Dijital Rapor Sorgulama",
      title: "e-Devlet Üzerinden Rapor ve Reçete Sorgulama",
      lead: "Sağlık kurulu raporunuzu ve reçetenizi e-Devlet uygulaması üzerinden dijital olarak sorgulayabilirsiniz.",
      howItWorks: "e-Devlet uygulamasına giriş yaparak, işitme cihazı raporunuzun ve reçetenizin güncel durumunu görüntüleyebilirsiniz.",
      advantages: [
        "Belgelerinizi fiziksel olarak taşımanıza gerek kalmaz",
        "Rapor durumunuzu anlık olarak takip edebilirsiniz",
        "Süreç şeffaflığını artırır",
      ],
      models: ["e-Devlet Sorgulama"],
      expertNote: "e-Devlet şifreniz yoksa, PTT şubelerinden temin edebilirsiniz.",
    },
    {
      id: "yillik-pil-destegi-takibi",
      icon: "brain",
      navLabel: "Yıllık Pil Desteği Takibi",
      title: "Yıllık Pil Desteği Takibi",
      lead: "SGK, cihaz desteğine ek olarak yıllık bir pil desteği de sağlar; bu destek sistem üzerinden takip edilir.",
      howItWorks: "Yıl içinde kullandığınız pil desteği, SGK sistemi üzerinden kayıt altına alınır ve belirlenen yıllık sınır dahilinde uygulanır.",
      advantages: [
        "Düzenli pil ihtiyacınızın bir kısmının karşılanmasına yardımcı olur",
        "Yıllık kullanım durumunuzu takip etmenizi sağlar",
        "Bütçe planlamanıza katkı sağlar",
      ],
      models: ["Yıllık Pil Desteği"],
      expertNote: "Güncel pil destek tutarı için SGK rehberimizi inceleyebilirsiniz.",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
  accentColorNavActiveBg: "rgb(22 163 74 / 0.1)",
  accentColorCalloutBg: "rgb(22 163 74 / 0.06)",
  accentColorCalloutLabel: "#15803d",
};
