// "Teknolojiler" deep-dive hub for the /rehberler/isitme-kaybi-nedir
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior series — here
// repurposed as an educational deep-dive into the hearing mechanism
// itself rather than device technology. icon values are limited to the
// component's fixed set (brain/dna/globe/radar/bluetooth/smartphone/
// radio/layers) — "layers" is a near-literal fit for the ear's layered
// anatomical pathway; "dna" is a near-literal fit for genetic causes;
// "brain" is a near-literal fit for the brain's role in processing
// sound; "radar" for early-screening detection technology (consistent
// with its detection/scanning mapping across the site).

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const isitmeKaybiNedirTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "İşitme Mekanizması ve Değerlendirme Yöntemleri",
  intro: "Her bileşeni seçerek nasıl çalıştığını inceleyebilirsiniz. Bu bölüm, işitmenin nasıl gerçekleştiğini ve nasıl değerlendirildiğini anlamanıza yardımcı olmayı amaçlar.",
  items: [
    {
      id: "isitme-mekanizmasi",
      icon: "layers",
      navLabel: "İşitme Mekanizması",
      title: "Sesin Kulaktan Beyne Yolculuğu",
      lead: "İşitme, ses dalgalarının dış kulaktan başlayıp orta ve iç kulaktan geçerek işitme siniri yoluyla beyne ulaşmasıyla gerçekleşir.",
      howItWorks: "Ses dalgaları kulak zarını titreştirir, orta kulaktaki kemikçikler bu titreşimi iç kulağa iletir; iç kulaktaki tüylü hücreler titreşimi sinir sinyaline dönüştürür ve beyne gönderir.",
      advantages: [
        "İşitmenin hangi aşamada aksadığını anlamaya yardımcı olur",
        "Farklı işitme kaybı türlerinin nedenini açıklamaya katkı sağlar",
        "Değerlendirme sürecinin mantığını anlamanıza yardımcı olur",
      ],
      models: ["İşitme Yolu"],
      expertNote: "Bu genel bir açıklamadır; kişisel durumunuz bir odyometrist tarafından değerlendirilmelidir.",
    },
    {
      id: "genetik-faktorler",
      icon: "dna",
      navLabel: "Genetik Faktörler",
      title: "Genetik ve Kalıtsal Faktörler",
      lead: "Bazı işitme kaybı türleri, ailesel geçiş gösteren genetik faktörlere bağlı olarak ortaya çıkabilir.",
      howItWorks: "Belirli genetik değişiklikler, iç kulağın gelişimini veya işlevini etkileyerek doğuştan veya ilerleyen bir işitme kaybına yol açabilir.",
      advantages: [
        "Ailesel risk faktörlerinin anlaşılmasına yardımcı olur",
        "Erken tarama kararlarına katkı sağlayabilir",
        "Genetik danışmanlık ihtiyacının belirlenmesine yardımcı olabilir",
      ],
      models: ["Genetik Değerlendirme"],
      expertNote: "Genetik değerlendirme için ilgili bir uzmana yönlendirme yapılabilir.",
    },
    {
      id: "beyin-ve-ses-isleme",
      icon: "brain",
      navLabel: "Beyin ve Ses İşleme",
      title: "Beynin Sesi İşleme Rolü",
      lead: "Kulaktan gelen sinyaller, anlamlı bir sese dönüştürülmek üzere beyinde işlenir.",
      howItWorks: "İşitme siniri yoluyla beyne ulaşan elektriksel sinyaller, beynin işitme merkezlerinde işlenerek konuşma ve seslerin anlamlandırılmasını sağlar.",
      advantages: [
        "Merkezi işitme kaybının nasıl ortaya çıktığını anlamaya yardımcı olur",
        "Kulak sağlığı ile beyin sağlığı arasındaki bağlantıyı gösterir",
        "Kapsamlı bir değerlendirmenin neden önemli olduğunu açıklar",
      ],
      models: ["Merkezi İşitsel İşleme"],
      expertNote: "Merkezi işitsel işleme değerlendirmesi, gerektiğinde ayrı bir uzmanlık alanıdır.",
    },
    {
      id: "erken-tarama-teknolojileri",
      icon: "radar",
      navLabel: "Erken Tarama Teknolojileri",
      title: "Erken Tarama ve Tespit Yöntemleri",
      lead: "Yenidoğan işitme taraması gibi yöntemler, işitme kaybının mümkün olduğunca erken tespit edilmesine yardımcı olur.",
      howItWorks: "Objektif tarama testleri, bebeğin veya çocuğun aktif katılımı olmadan iç kulağın seslere verdiği tepkiyi ölçer.",
      advantages: [
        "Erken tespit, erken destek imkânı sunar",
        "Aktif katılım gerektirmeden uygulanabilir",
        "Risk faktörü taşıyan bireylerde düzenli takibe temel oluşturur",
      ],
      models: ["Erken Tarama Yöntemleri"],
      expertNote: "Detaylı bilgi için Çocuk İşitme Testi sayfamızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorNavActiveBg: "rgb(37 99 235 / 0.1)",
  accentColorCalloutBg: "rgb(37 99 235 / 0.06)",
  accentColorCalloutLabel: "#1d4ed8",
};
