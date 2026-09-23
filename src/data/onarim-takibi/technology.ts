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
  badge: "TEKNOLOJİLER",
  heading: "Onarım Takibinde Kullanılan Sistemler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, onarımın türüne göre değişebilir.",
  items: [
    {
      id: "durum-takip-sistemi",
      icon: "brain",
      navLabel: "Durum Takip Sistemi",
      title: "Dijital Durum Takip Sistemi",
      lead: "Cihazınız teslim alındığında, sürecin her aşamasını kaydeden dijital bir takip kaydı oluşturulur.",
      howItWorks: "Cihazınızın teşhis, onarım ve kalite kontrolü aşamaları, bu kayıt üzerinde güncellenir.",
      advantages: [
        "Sürecin şeffaf bir şekilde izlenmesini sağlar",
        "Herhangi bir aşamada durumun hızlıca sorgulanmasına imkân tanır",
        "İletişim geçmişinizin tek bir yerde tutulmasını sağlar",
      ],
      models: ["Dijital Takip Kaydı"],
      expertNote: "Takip kaydı, onarımın türüne göre farklı aşamalar içerebilir.",
    },
    {
      id: "otomatik-bildirim-sistemi",
      icon: "smartphone",
      navLabel: "Otomatik Bildirim Sistemi",
      title: "SMS ve WhatsApp Bildirim Sistemi",
      lead: "Önemli aşama değişikliklerinde, tercih ettiğiniz kanaldan otomatik bir bildirim alırsınız.",
      howItWorks: "Takip kaydındaki durum güncellendiğinde, sisteminiz size kayıtlı numaranız üzerinden bir bildirim gönderir.",
      advantages: [
        "Durumu öğrenmek için aramanıza gerek kalmaz",
        "Önemli gelişmelerden anında haberdar olursunuz",
        "Tercih ettiğiniz kanaldan bilgilendirilirsiniz",
      ],
      models: ["Otomatik Bildirim"],
      expertNote: "Bildirim kanalı tercihinizi bizimle paylaşabilirsiniz.",
    },
    {
      id: "uretici-kargo-takibi",
      icon: "globe",
      navLabel: "Üretici Kargo Takibi",
      title: "Üretici Servisi Kargo Takibi",
      lead: "Cihazınız üretici servisine gönderildiyse, kargo süreci de takip kaydına dahil edilir.",
      howItWorks: "Üreticiye gönderim ve geri dönüş kargo bilgileri, takip kaydınıza işlenir.",
      advantages: [
        "Cihazınızın fiziksel olarak nerede olduğu hakkında fikir verir",
        "Üretici servisi süresinin şeffaf bir şekilde izlenmesini sağlar",
        "Beklenmedik kargo gecikmelerinin fark edilmesine yardımcı olur",
      ],
      models: ["Üretici Servisi Kargo Takibi"],
      expertNote: "Kargo süresi, üretici servis merkezinin konumuna göre değişebilir.",
    },
    {
      id: "canli-destek-hatti",
      icon: "radio",
      navLabel: "Canlı Destek Hattı",
      title: "Canlı Destek Hattı",
      lead: "Sürecin herhangi bir aşamasında, telefon veya WhatsApp üzerinden doğrudan bizimle iletişime geçebilirsiniz.",
      howItWorks: "Bizi aradığınızda veya yazdığınızda, cihazınızın takip kaydına bakılarak güncel durum sizinle paylaşılır.",
      advantages: [
        "Anlık ve doğrudan bir bilgi kanalı sunar",
        "Merak ettiğiniz her soruyu sorabilmenizi sağlar",
        "Süreç boyunca sizi yalnız bırakmaz",
      ],
      models: ["Canlı Destek"],
      expertNote: "Destek hattımıza normal çalışma saatlerimiz içinde ulaşabilirsiniz.",
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
  accentColorNavActiveBg: "rgb(192 38 211 / 0.1)",
  accentColorCalloutBg: "rgb(192 38 211 / 0.06)",
  accentColorCalloutLabel: "#a21caf",
};
