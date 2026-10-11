// "Teknolojiler" deep-dive hub for the /servis-bakim/onarim-takibi
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior series. icon values
// are limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "brain" for the digital
// status-tracking record (consistent with its record/analysis mapping
// elsewhere, e.g. Garanti İşlemleri's own "garanti kayıt sistemi");
// "smartphone" for the SMS/WhatsApp notification channel; "globe" for
// the manufacturer's cross-location shipping/tracking network
// (consistent with its network mapping on Teknik Servis's and Garanti
// İşlemleri's own items); "radio" for the live phone support line's
// communication-based nature.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const onarimTakibiTechnology: BrandPageEcosystemContent = {
  badge: "BİLMENİZ GEREKENLER",
  heading: "Bilgi Alırken Bilmeniz Gerekenler",
  intro: "Durum bilgisinin telefon, WhatsApp ve manuel bilgilendirme yoluyla nasıl alınacağı yukarıdaki Durum Bilgisi Nasıl Alınır? alanında anlatılmıştır. Burada kaydın ve sürecin sınırları yer alır; kapsam, onarımın türüne göre değişebilir.",
  items: [
    {
      id: "kayit-kapsami",
      icon: "brain",
      navLabel: "Servis Kaydı Neyi Gösterir?",
      title: "Servis Kaydı Neyi Gösterir?",
      lead: "Dijital servis kaydı, cihazınızın serviste hangi genel aşamada olduğunu kayıt altında tutar.",
      howItWorks: "Kayıt dakika dakika bir izleme sunmaz ve müşteriye açık bir panel değildir; durumu sorduğunuzda kayda bakılarak güncel bilgi paylaşılır.",
      advantages: [
        "Servis sürecinin genel aşamalarının kayıt altında tutulmasını sağlar",
        "Durum sorulduğunda güncel bilginin paylaşılmasına yardımcı olur",
      ],
      models: ["Servis Kaydı"],
      expertNote: "Kayıt, onarımın türüne göre farklı aşamalar içerebilir.",
    },
    {
      id: "uretici-kargo-takibi",
      icon: "globe",
      navLabel: "Teknik Servisteki Cihazlar",
      title: "Teknik Servise Gönderilen Cihazlar",
      lead: "Cihazınız teknik servise gönderildiyse, bu aşamadaki süre teknik servise bağlıdır.",
      howItWorks: "Cihazınızın durumunu merkezimizden sorabilirsiniz; teknik servisteki aşamalar hakkındaki bilgi, merkezimizin elindeki bilgiyle sınırlıdır.",
      advantages: [
        "Teknik servisteki süreç hakkında merkezimizden bilgi alabilirsiniz",
        "Gecikme olursa sizinle iletişime geçilir",
      ],
      models: ["Teknik Servis"],
      expertNote: "Teknik serviste geçen süre, marka ve modele göre değişebilir.",
    },
    {
      id: "gecikme-ek-degerlendirme",
      icon: "radio",
      navLabel: "Süre ve Gecikme",
      title: "Süre, Gecikme ve Ek Değerlendirme",
      lead: "Beklenenden uzun süren işlemlerde veya ek değerlendirme gerektiğinde sizinle iletişime geçilir.",
      howItWorks: "Süre arızanın türüne ve gerektiğinde teknik servisin veya yedek parçanın beklenmesine göre değişir; tahmini onarım süresi ve varsa ücret teknik servisteki ilk teknik kontrolden sonra bildirilir.",
      advantages: [
        "Süre beklentisi, teknik servisteki ilk teknik kontrolden sonra netleşir",
        "Gecikme veya ek değerlendirme durumunda iletişim kurulur",
      ],
      models: ["Süre ve Gecikme"],
      expertNote: "Beklenen süreden belirgin bir gecikme fark ederseniz bizimle iletişime geçebilirsiniz.",
    },
  ],
  noteLabel: "Servis Bilgisi",
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
  accentColorNavActiveBg: "rgb(192 38 211 / 0.1)",
  accentColorCalloutBg: "rgb(192 38 211 / 0.06)",
  accentColorCalloutLabel: "#a21caf",
};
