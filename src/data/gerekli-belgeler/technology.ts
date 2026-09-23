// "Belge Sisteminin Bileşenleri" deep-dive hub for the
// /sgk/gerekli-belgeler page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior series. icon values are limited to the component's
// fixed set (brain/dna/globe/radar/bluetooth/smartphone/radio/layers)
// — "layers" for the multi-category document structure; "globe" for
// the nationwide SGK provizyon system; "smartphone" for checking
// documents via e-Devlet; "radar" for tracking which documents are
// still missing.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const gerekliBelgelerTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Belge Sisteminin Bileşenleri",
  intro: "Her bileşeni seçerek nasıl çalıştığını inceleyebilirsiniz. Bu bölüm, belge sürecinin arkasındaki sistemin nasıl işlediğini anlatır.",
  items: [
    {
      id: "belge-kategorileri",
      icon: "layers",
      navLabel: "Belge Kategorileri",
      title: "Temel ve Duruma Özel Belge Kategorileri",
      lead: "Belgeler, herkes için gerekli temel belgeler ve duruma özel ek belgeler olmak üzere iki kategoride toplanır.",
      howItWorks: "Rapor, reçete ve kimlik belgeleri herkesten istenir; çocuk, emekli veya yenileme durumuna göre bu listeye ek belgeler eklenebilir.",
      advantages: [
        "Hangi belgenin herkesten istendiğini netleştirir",
        "Durumunuza özel ek belgeleri önceden görmenizi sağlar",
        "Başvuru sırasında sürpriz eksiklerin önüne geçer",
      ],
      models: ["Belge Kategorileri"],
      expertNote: "Size özel güncel belge listesi için randevunuzda bilgi alabilirsiniz.",
    },
    {
      id: "sgk-provizyon-sistemi",
      icon: "globe",
      navLabel: "SGK Provizyon Sistemi",
      title: "SGK'nın Ülke Genelindeki Provizyon Sistemi",
      lead: "Belgeleriniz onaylandıktan sonra, SGK'nın provizyon sistemine işlenerek başvurunuz aktif hale gelir.",
      howItWorks: "Anlaşmalı merkez, belgelerinizi SGK'nın sistemine işler; bu işlem sonucunda başvurunuzun durumu sistem üzerinden görüntülenebilir hale gelir.",
      advantages: [
        "Ülke genelinde standart bir işleyiş sağlar",
        "Manuel kayıt hatalarını azaltır",
        "Başvurunuzun durumunu şeffaf hale getirir",
      ],
      models: ["SGK Provizyon Sistemi"],
      expertNote: "Sistem, SGK mevzuatındaki güncellemelere göre periyodik olarak güncellenir.",
    },
    {
      id: "dijital-belge-sorgulama",
      icon: "smartphone",
      navLabel: "Dijital Belge Sorgulama",
      title: "e-Devlet Üzerinden Belge Sorgulama",
      lead: "Rapor ve reçeteniz gibi bazı belgeleri e-Devlet uygulaması üzerinden dijital olarak sorgulayabilirsiniz.",
      howItWorks: "e-Devlet uygulamasına giriş yaparak, ilgili belgelerinizin güncel durumunu ve geçerlilik bilgilerini görüntüleyebilirsiniz.",
      advantages: [
        "Belgelerinizi dijital olarak görüntüleyebilirsiniz",
        "Güncellik durumunu anlık olarak kontrol edebilirsiniz",
        "Süreç şeffaflığını artırır",
      ],
      models: ["e-Devlet Sorgulama"],
      expertNote: "e-Devlet şifreniz yoksa, PTT şubelerinden temin edebilirsiniz.",
    },
    {
      id: "eksik-belge-takibi",
      icon: "radar",
      navLabel: "Eksik Belge Takibi",
      title: "Eksik Belgelerinizi Önceden Tespit Etme",
      lead: "Randevunuz öncesinde belge listenizi birlikte gözden geçirerek eksik belge riskini azaltıyoruz.",
      howItWorks: "Durumunuza göre gereken belgeleri sizinle birlikte kontrol ederiz; eksik bir belge varsa randevunuzdan önce tamamlamanız için size bilgi veririz.",
      advantages: [
        "Randevu gününde sürpriz eksiklerle karşılaşmazsınız",
        "Süreç daha hızlı ilerler",
        "Belirsizlik hissini azaltır",
      ],
      models: ["Eksik Belge Takibi"],
      expertNote: "Belge listenizi kontrol ettirmek için randevunuzdan önce bizimle iletişime geçebilirsiniz.",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
  accentColorNavActiveBg: "rgb(79 70 229 / 0.1)",
  accentColorCalloutBg: "rgb(79 70 229 / 0.06)",
  accentColorCalloutLabel: "#4338ca",
};
