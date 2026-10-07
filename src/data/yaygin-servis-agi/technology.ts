// "Teknolojiler" deep-dive hub for the /neden-orijinal/yaygin-servis-agi
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior page. icon values are
// limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "globe" for the nationwide
// technician network (consistent with its distribution/network mapping
// on the two prior pages); "radar" for the diagnostic evaluation process
// (consistent with its detection/scanning mapping elsewhere); "layers"
// for the physical spare-parts inventory (consistent with its hardware/
// parts mapping on Uzun Ömürlü Cihazlar); "smartphone" for the
// app/portal-based warranty registration and service-history system
// (consistent with its mapping on Güvenilir Teknoloji).

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const yayginServisAgiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Servis Sürecinde Sıkça Bir Arada Sunulan Güvenceler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, marka ve modele göre değişebilir.",
  items: [
    {
      id: "egitimli-servis-ekibi",
      icon: "globe",
      navLabel: "Eğitimli Servis Ekibi",
      title: "Üretici Eğitimi Almış Servis Ekibi",
      lead: "Sattığımız 18 markanın teknik servis işlemleri Darıca'daki merkezimizde yürütülür.",
      howItWorks: "Servis işlemlerini yürüten ekibimiz üretici eğitimlerine katılmıştır; garanti kapsamındaki cihazlar gerektiğinde dış servise gönderilir.",
      advantages: [
        "Sattığımız 18 markanın tamamını kapsar",
        "Tutarlı bir hizmet kalitesi sunar",
        "Garanti işlemlerini ücretsiz olarak yürütür",
      ],
      models: ["Sattığımız 18 Marka"],
      expertNote: "Servis randevusu için bizimle iletişime geçebilirsiniz.",
    },
    {
      id: "hizli-degerlendirme-sureci",
      icon: "radar",
      navLabel: "Hızlı Değerlendirme Süreci",
      title: "Hızlı Ön Değerlendirme Süreci",
      lead: "Cihazınız, servise geldiğinde bir ön değerlendirmeden geçirilir.",
      howItWorks: "Teknisyen, cihazı çeşitli testlerden geçirerek sorunun kaynağını belirler ve size süreç hakkında bilgi verir.",
      advantages: [
        "Sorunun kaynağını hızlı bir şekilde belirlemeye yardımcı olur",
        "Gereksiz bekleme sürelerini azaltır",
        "Şeffaf bir süreç sunar",
      ],
      models: ["Hızlı Değerlendirme Süreci Uygulanan Modeller"],
      expertNote: "Değerlendirme süresi, arızanın türüne göre değişebilir.",
    },
    {
      id: "orijinal-parca-envanteri",
      icon: "layers",
      navLabel: "Orijinal Parça Envanteri",
      title: "Orijinal Yedek Parça Temini",
      lead: "Onarımlarda ihtiyaç duyulan orijinal yedek parçalar, parçanın türüne göre temin edilir.",
      howItWorks: "Gerekli parça belirlendikten sonra temin edilir; temin süresi parçaya göre değişebilir.",
      advantages: [
        "Onarım sürecini hızlandırmaya yardımcı olur",
        "Orijinal parça temin riskini azaltır",
        "Cihazın performansını orijinal seviyede korur",
      ],
      models: ["Orijinal Yedek Parça"],
      expertNote: "Nadir kullanılan parçalarda temin süresi değişebilir.",
    },
    {
      id: "garanti-kayit-sistemi",
      icon: "smartphone",
      navLabel: "Garanti Kayıt Sistemi",
      title: "Servis Geçmişi ve Garanti Kayıt Sistemi",
      lead: "Her servis işlemi, cihazın garanti kayıt sistemine işlenerek takip edilebilir hâle getirilir.",
      howItWorks: "Yapılan işlemler, üreticinin resmi kayıt sistemine kaydedilir; bu sayede cihazın servis geçmişi izlenebilir olur.",
      advantages: [
        "Servis geçmişinin şeffaf bir şekilde takip edilmesini sağlar",
        "Garanti kapsamının doğru şekilde uygulanmasına yardımcı olur",
        "İleride yaşanabilecek anlaşmazlıkları önlemeye yardımcı olur",
      ],
      models: ["Garanti Kayıt Sistemine Sahip Modeller"],
      expertNote: "Kayıt sistemi kapsamı marka ve modele göre değişebilir.",
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
