// "Teknolojiler" deep-dive hub for the /neden-orijinal/kolay-degisim
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior page. icon values are
// limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "smartphone" for the demo/trial
// evaluation (consistent with its demo-experience mapping on Ücretsiz
// Danışmanlık); "dna" for the personalized needs-change transition
// (consistent with its custom/personalization mapping elsewhere);
// "radar" for defect inspection/detection (consistent with its
// detection/scanning mapping across the site); "globe" for the
// authorized-channel exchange network (consistent with its
// distribution-network mapping on the four prior pages). The demo item
// cross-references the page that already owns that process's full deep
// dive rather than re-explaining it here.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const kolayDegisimTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Değişim Sürecinde Sıkça Bir Arada Sunulan Bileşenler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, ürün ve duruma göre değişebilir.",
  items: [
    {
      id: "deneme-sureci-degerlendirmesi",
      icon: "smartphone",
      navLabel: "Deneme Süreci Değerlendirmesi",
      title: "Demo Deneyimine Dayalı Değerlendirme",
      lead: "Demo cihaz deneme sürecinde edindiğiniz deneyim, değişim değerlendirmesinin temelini oluşturur.",
      howItWorks: "Deneme süresi boyunca cihazla ilgili geri bildirimleriniz kaydedilir; beklentilerinizi karşılamayan noktalar birlikte değerlendirilir.",
      advantages: [
        "Kararınızı gerçek kullanım deneyimine dayandırmanızı sağlar",
        "Uygun olmayan bir seçimi erken aşamada fark etmenize yardımcı olur",
        "Değişim sürecini daha isabetli hale getirir",
      ],
      models: ["Demo Değerlendirmesi Kapsamındaki Modeller"],
      expertNote: "Demo süreciyle ilgili detaylı bilgi için Ücretsiz Danışmanlık sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "ihtiyac-degisikligi-gecisi",
      icon: "dna",
      navLabel: "İhtiyaç Değişikliği Geçişi",
      title: "İhtiyaç Değişikliğinde Model Geçişi",
      lead: "İşitme durumunuz veya yaşam tarzınız değiştiğinde, ihtiyacınıza uygun bir model geçişi değerlendirilebilir.",
      howItWorks: "Güncel ihtiyaçlarınız yeniden değerlendirilir ve mevcut cihazınıza kıyasla daha uygun bir model önerisi sunulur.",
      advantages: [
        "Değişen ihtiyaçlara uyum sağlamanıza yardımcı olur",
        "Uzun vadeli kullanıcı memnuniyetini destekler",
        "Gereksiz bir yeniden başlangıç yerine kademeli bir geçiş sunar",
      ],
      models: ["Model Geçişi Değerlendirmesi Kapsamı"],
      expertNote: "Geçiş koşulları, mevcut cihazınızın durumuna ve satın alma tarihine göre değişebilir.",
    },
    {
      id: "uretim-hatasi-tespiti",
      icon: "radar",
      navLabel: "Üretim Hatası Tespiti",
      title: "Üretim Kaynaklı Sorun İnceleme Süreci",
      lead: "Cihazınızda üretim kaynaklı bir sorun olduğunu düşünüyorsanız, detaylı bir inceleme süreciyle durum tespit edilir.",
      howItWorks: "Cihaz, yetkili teknisyen tarafından incelenir; sorunun üretim kaynaklı olup olmadığı belirlenir ve buna göre değişim süreci başlatılır.",
      advantages: [
        "Sorunun kaynağını net bir şekilde ortaya koyar",
        "Haklı durumlarda hızlı bir değişim süreci sağlar",
        "Şeffaf ve belgeli bir değerlendirme sunar",
      ],
      models: ["Üretim Hatası Değerlendirmesi Kapsamı"],
      expertNote: "İnceleme süreci, ürünün markasına ve modeline göre birkaç gün sürebilir.",
    },
    {
      id: "yetkili-kanal-degisim-agi",
      icon: "globe",
      navLabel: "Yetkili Kanal Değişim Ağı",
      title: "Yetkili Distribütörlük Üzerinden Değişim",
      lead: "Değişim süreci, yetkili distribütörlük ağımız üzerinden yürütülür; bu sayede süreç güvenilir ve izlenebilir olur.",
      howItWorks: "Değişim talebiniz, yetkili distribütörlük kanalı üzerinden üreticiyle koordineli bir şekilde yürütülür.",
      advantages: [
        "Sürecin her aşamasının izlenebilir olmasını sağlar",
        "Üretici standartlarına uygun bir değişim süreci sunar",
        "Yetkisiz kanallarda bulunmayan bir güvence sağlar",
      ],
      models: ["Yetkili Kanal Değişim Kapsamı"],
      expertNote: "Değişim süreciyle ilgili güncel bilgi için bizimle iletişime geçebilirsiniz.",
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
  accentColorNavActiveBg: "rgb(225 29 72 / 0.1)",
  accentColorCalloutBg: "rgb(225 29 72 / 0.06)",
  accentColorCalloutLabel: "#be123c",
};
