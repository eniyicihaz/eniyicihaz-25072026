// "Teknolojiler" deep-dive hub for the /rehberler/uyum-sureci page.
// Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior series. icon values
// are limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "brain" is a near-literal fit
// for the brain's own neuroplastic recalibration; "layers" for the
// staged, environment-by-environment exposure method; "smartphone" for
// app-based usage-data tracking during adaptation; "radio" for the
// structured follow-up support's communication-based nature.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const uyumSureciTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Uyum Sürecini Destekleyen Yaklaşımlar",
  intro: "Her bileşeni seçerek nasıl çalıştığını inceleyebilirsiniz. Bu bölüm, uyum sürecinizi nasıl desteklediğimizi anlatır.",
  items: [
    {
      id: "beynin-yeniden-kalibrasyonu",
      icon: "brain",
      navLabel: "Beynin Yeniden Kalibrasyonu",
      title: "Beynin Yeniden Kalibrasyonu (Nöroplastisite)",
      lead: "Beyin, yeniden duymaya başladığı sesleri anlamlandırmayı öğrenirken doğal bir esneklik (nöroplastisite) gösterir.",
      howItWorks: "Düzenli kullanım, beynin işitsel merkezlerinin yeni ses girdisine uyum sağlamasına yardımcı olur; bu süreç zamanla daha otomatik hale gelir.",
      advantages: [
        "Sürecin bilimsel temelini anlamanıza yardımcı olur",
        "Neden zaman gerektirdiğini açıklamaya katkı sağlar",
        "Sabırlı bir yaklaşımın önemini gösterir",
      ],
      models: ["Nöroplastisite Süreci"],
      expertNote: "Bu genel bir açıklamadır; kişisel süreciniz odyometristinizle birlikte takip edilir.",
    },
    {
      id: "kademeli-maruziyet-yontemi",
      icon: "layers",
      navLabel: "Kademeli Maruziyet Yöntemi",
      title: "Kademeli Maruziyet Yöntemi",
      lead: "Sessiz ortamlardan başlayıp kademeli olarak daha karmaşık ortamlara geçmek, uyum sürecini desteklemeye yardımcı olabilir.",
      howItWorks: "Önce tanıdık ve sakin ortamlarda kullanılan cihaz, zamanla gürültülü ve sosyal ortamlarda da kullanılmaya başlanır.",
      advantages: [
        "Ani bir bunalma hissini azaltmaya yardımcı olabilir",
        "Güveninizi kademeli olarak artırmanıza yardımcı olur",
        "Farklı ortamlardaki performansı gözlemlemenizi sağlar",
      ],
      models: ["Kademeli Maruziyet"],
      expertNote: "Kademeli yaklaşım, uygulama randevunuzda sizinle birlikte planlanır.",
    },
    {
      id: "kullanim-verisi-takibi",
      icon: "smartphone",
      navLabel: "Kullanım Verisi Takibi",
      title: "Kullanım Verisi Takibi",
      lead: "Bazı cihazlar, günlük kullanım sürenizi ve ortam tercihlerinizi kaydederek uyum sürecinizi takip etmeye yardımcı olabilir.",
      howItWorks: "Cihazınız kullanım verilerini kaydeder; bu veriler, takip randevularınızda geri bildiriminizle birlikte değerlendirilir.",
      advantages: [
        "Uyum sürecinizin ilerleyişine objektif bir bakış sunar",
        "Kişiye özel programlama kararlarına katkı sağlar",
        "İlerlemenizi somut olarak görmenize yardımcı olabilir",
      ],
      models: ["Veri Kaydı Destekli Modeller"],
      expertNote: "Detaylı bilgi için Kişiye Özel Programlama sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "takip-randevusu-destegi",
      icon: "radio",
      navLabel: "Takip Randevusu Desteği",
      title: "Yapılandırılmış Takip Randevusu Desteği",
      lead: "Uyum süreci boyunca planlanan takip randevuları, deneyiminizi düzenli olarak paylaşmanıza imkân tanır.",
      howItWorks: "Belirli aralıklarla planlanan görüşmelerde, o ana kadarki deneyiminiz dinlenir ve gerekirse küçük ayarlar yapılır.",
      advantages: [
        "Süreç boyunca yalnız bırakılmamanızı sağlar",
        "Erken aşamada küçük sorunların fark edilmesine yardımcı olur",
        "Uzun vadeli memnuniyetinizi desteklemeye katkı sağlar",
      ],
      models: ["Takip Randevusu"],
      expertNote: "Detaylı bilgi için Kontrol Randevusu sayfamızı inceleyebilirsiniz.",
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
