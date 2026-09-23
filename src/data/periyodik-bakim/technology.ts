// "Teknolojiler" deep-dive hub for the /servis-bakim/periyodik-bakim
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior series. icon values
// are limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "radar" for the general
// wear-and-tear scan (consistent with its detection/scanning mapping
// across the site); "layers" for the physical wax-guard/tubing
// component swap; "radio" for the microphone/receiver port's
// sound-pathway nature; "brain" for the post-maintenance function test
// (consistent with its verification/analysis mapping elsewhere).

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const periyodikBakimTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Periyodik Bakımda Kullanılan Yöntemler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, cihaz tipine göre değişebilir.",
  items: [
    {
      id: "asinma-taramasi",
      icon: "radar",
      navLabel: "Aşınma Taraması",
      title: "Genel Aşınma Taraması",
      lead: "Cihazınızın gövdesi ve bağlantı noktaları, görünür aşınma belirtileri açısından incelenir.",
      howItWorks: "Cihaz, tüp bağlantı noktaları, gövde bütünlüğü ve genel fiziksel durum açısından görsel olarak kontrol edilir.",
      advantages: [
        "Erken aşınma belirtilerinin fark edilmesine yardımcı olur",
        "Olası sorunların önceden tespit edilmesini sağlar",
        "Bakım kararlarına objektif bir temel oluşturur",
      ],
      models: ["Genel Aşınma Taraması"],
      expertNote: "Belirgin bir hasar tespit edilirse, Teknik Servis değerlendirmesi önerilir.",
    },
    {
      id: "balmumu-filtresi-ve-tup-degisimi",
      icon: "layers",
      navLabel: "Filtre ve Tüp Değişimi",
      title: "Balmumu Filtresi ve Tüp Değişimi",
      lead: "Aşınan veya tıkanan balmumu filtresi ve tüp, uygun yenileriyle değiştirilir.",
      howItWorks: "Mevcut filtre ve tüp çıkarılır; cihaz modelinize uygun yeni parçalar takılır.",
      advantages: [
        "Ses kalitesini olumsuz etkileyen tıkanıklıkları giderir",
        "Cihazın konforlu kullanımını destekler",
        "Basit ama etkili bir bakım adımıdır",
      ],
      models: ["Filtre ve Tüp Değişimi"],
      expertNote: "Parça uyumluluğu, cihaz markası ve modeline göre değişir.",
    },
    {
      id: "mikrofon-ve-hoparlor-temizligi",
      icon: "radio",
      navLabel: "Mikrofon ve Hoparlör Temizliği",
      title: "Mikrofon ve Hoparlör Portu Temizliği",
      lead: "Ses girişi ve çıkışını sağlayan mikrofon ve hoparlör portları, biriken toz ve kirden temizlenir.",
      howItWorks: "Özel bir temizlik aracıyla, mikrofon ve hoparlör açıklıklarındaki birikintiler nazikçe giderilir.",
      advantages: [
        "Ses netliğinin korunmasına yardımcı olur",
        "Mikrofon hassasiyetinin sürdürülmesine katkı sağlar",
        "Düzenli yapıldığında büyük tıkanıklıkları önleyebilir",
      ],
      models: ["Port Temizliği"],
      expertNote: "Günlük temizlik önerileri için Cihaz Temizliği sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "bakim-sonrasi-fonksiyon-testi",
      icon: "brain",
      navLabel: "Fonksiyon Testi",
      title: "Bakım Sonrası Fonksiyon Testi",
      lead: "Yapılan bakımın ardından, cihazın düzgün çalıştığını doğrulamak için kısa bir fonksiyon testi yapılır.",
      howItWorks: "Cihazın ses çıkışı, mikrofon hassasiyeti ve genel işlevleri hızlıca test edilir.",
      advantages: [
        "Bakımın etkili olduğunu doğrular",
        "Olası bir sorunun bakım sırasında fark edilmesini sağlar",
        "Kliniği güvenle terk etmenizi sağlar",
      ],
      models: ["Fonksiyon Testi"],
      expertNote: "Testte bir sorun tespit edilirse, uygun bir sonraki adım birlikte belirlenir.",
    },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
  accentColorNavActiveBg: "rgb(101 163 13 / 0.1)",
  accentColorCalloutBg: "rgb(101 163 13 / 0.06)",
  accentColorCalloutLabel: "#4d7c0f",
};
