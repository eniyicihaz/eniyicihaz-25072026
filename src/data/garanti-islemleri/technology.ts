// "Teknolojiler" deep-dive hub for the /servis-bakim/garanti-islemleri
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior series. icon values
// are limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "brain" for the digital
// warranty-registration record (consistent with its record/analysis
// mapping elsewhere); "globe" for the manufacturer's cross-location
// warranty network (consistent with its network mapping on Teknik
// Servis's own "üretici servis ağı" item); "smartphone" for the
// digital warranty document/QR code some brands use; "layers" for the
// physical replacement-part tracking under warranty.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const garantiIslemleriTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Garanti Sürecinde Kullanılan Sistemler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, cihaz markasına göre değişebilir.",
  items: [
    {
      id: "garanti-kayit-sistemi",
      icon: "brain",
      navLabel: "Garanti Kayıt Sistemi",
      title: "Dijital Garanti Kayıt Sistemi",
      lead: "Cihazınızın garanti bilgileri, satın alma anında dijital bir sisteme kaydedilir.",
      howItWorks: "Seri numaranız ve satın alma tarihiniz, üreticinin garanti takip sistemine işlenir.",
      advantages: [
        "Garanti durumunuzun hızlıca sorgulanmasını sağlar",
        "Belge kaybı durumunda bile kayıt üzerinden doğrulama yapılabilir",
        "Süreç boyunca şeffaflık sağlar",
      ],
      models: ["Dijital Garanti Kaydı"],
      expertNote: "Kayıt sistemi, cihaz markasına göre değişebilir.",
    },
    {
      id: "uretici-garanti-agi",
      icon: "globe",
      navLabel: "Üretici Garanti Ağı",
      title: "Üreticinin Yetkili Garanti Ağı",
      lead: "Garanti kapsamındaki onarımlar, üreticinin kendi yetkili servis ağı üzerinden yürütülür.",
      howItWorks: "Garanti kapsamında olduğu doğrulanan cihaz, üreticinin yetkili servis merkezine yönlendirilir.",
      advantages: [
        "Orijinal parçalarla onarım yapılmasını garanti eder",
        "Üreticinin kendi kalite standartlarına uygun bir süreç sağlar",
        "Resmi ve belgeli bir onarım süreci sunar",
      ],
      models: ["Yetkili Garanti Servisi"],
      expertNote: "Detaylı bilgi için Teknik Servis sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "dijital-garanti-belgesi",
      icon: "smartphone",
      navLabel: "Dijital Garanti Belgesi",
      title: "Dijital Garanti Belgesi",
      lead: "Bazı markalar, fiziksel belgeye ek olarak dijital bir garanti belgesi veya QR kod sunar.",
      howItWorks: "Cihazınızın kutusunda veya faturanızda yer alan bir kod üzerinden garanti bilgilerinize dijital olarak ulaşabilirsiniz.",
      advantages: [
        "Fiziksel belge kaybı riskini azaltır",
        "Garanti bilgilerine hızlı erişim sağlar",
        "Süreci daha pratik hale getirir",
      ],
      models: ["Dijital Garanti Belgeli Modeller"],
      expertNote: "Bu özellik her markada bulunmayabilir.",
    },
    {
      id: "parca-degisim-kaydi",
      icon: "layers",
      navLabel: "Parça Değişim Kaydı",
      title: "Garanti Kapsamlı Parça Değişim Kaydı",
      lead: "Garanti kapsamında değiştirilen parçalar, cihazınızın servis geçmişine kaydedilir.",
      howItWorks: "Değiştirilen her parça, tarih ve neden bilgisiyle birlikte cihazın servis kaydına işlenir.",
      advantages: [
        "Cihazınızın servis geçmişinin izlenebilir olmasını sağlar",
        "Gelecekteki değerlendirmelerde referans oluşturur",
        "Şeffaf bir kayıt tutulmasına katkı sağlar",
      ],
      models: ["Servis Geçmişi Kaydı"],
      expertNote: "Servis kaydınızı talep etmeniz durumunda sizinle paylaşılabilir.",
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
