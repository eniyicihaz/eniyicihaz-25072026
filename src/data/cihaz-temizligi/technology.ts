// "Teknolojiler" deep-dive hub for the /servis-bakim/cihaz-temizligi
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior series. icon values
// are limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "radio" for the electronic
// UV-sterilizing dry-aid kit's genuinely electronic nature; "layers"
// for the cleaning kit's physical tool components; "radar" for the
// humidity-indicator card's sensing/monitoring function (consistent
// with its detection mapping across the site); "smartphone" for the
// app-based cleaning reminder.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const cihazTemizligiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Cihaz Temizliğinde Kullanılabilecek Araçlar",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kullanılabilecek araçlar, ihtiyacınıza göre değişebilir.",
  items: [
    {
      id: "kuru-saklama-kutusu",
      icon: "radio",
      navLabel: "Kuru Saklama Kutusu",
      title: "Elektronik Kuru Saklama (Dry-Aid) Kutusu",
      lead: "Bazı saklama kutuları, cihazınızı gece boyunca aktif olarak kurutan elektronik bir sistem içerir.",
      howItWorks: "Kutu, hafif bir ısı veya UV ışığı kullanarak cihazınızın içindeki nemi gece boyunca uzaklaştırır.",
      advantages: [
        "Standart bir kutuya göre daha etkili nem giderme sağlar",
        "Nemli iklimlerde veya terlemeye yatkın kullanıcılar için faydalı olabilir",
        "Gece boyunca otomatik olarak çalışır",
      ],
      models: ["Elektronik Kuru Saklama Kutusu"],
      expertNote: "Elektronik kuru saklama kutusu isteğe bağlı bir aksesuardır; detaylı bilgi için Pil & Aksesuar sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "temizlik-kiti-bilesenleri",
      icon: "layers",
      navLabel: "Temizlik Kiti Bileşenleri",
      title: "Temizlik Kiti Bileşenleri",
      lead: "Temel bir temizlik kiti; yumuşak bir fırça, balmumu teli ve kuru bir bezden oluşur.",
      howItWorks: "Fırça yüzey tozunu alır, balmumu teli kulak ucundaki görünür kiri nazikçe çıkarır, bez ise genel silme için kullanılır.",
      advantages: [
        "Günlük temizlik için yeterli ve basit bir çözüm sunar",
        "Cihaza zarar vermeyecek şekilde tasarlanmıştır",
        "Kolayca yanınızda taşıyabileceğiniz kompakt bir settir",
      ],
      models: ["Standart Temizlik Kiti"],
      expertNote: "Temizlik kiti, ilk uygulama randevunuzda size tanıtılır.",
    },
    {
      id: "nem-gostergesi",
      icon: "radar",
      navLabel: "Nem Göstergesi",
      title: "Nem Göstergesi Kartı",
      lead: "Bazı saklama kutularında bulunan nem göstergesi kartı, kutu içindeki nem seviyesini renk değişimiyle gösterir.",
      howItWorks: "Kart, ortam nemine duyarlı bir malzemeden yapılır ve nem seviyesine göre renk değiştirir.",
      advantages: [
        "Kurutucu malzemenin ne zaman değiştirilmesi gerektiğini gösterir",
        "Saklama koşullarınız hakkında görsel bir geri bildirim sunar",
        "Kullanımı kolay ve pratiktir",
      ],
      models: ["Nem Göstergeli Saklama Kutuları"],
      expertNote: "Nem göstergesi her saklama kutusunda bulunmayabilir.",
    },
    {
      id: "bakim-hatirlaticisi",
      icon: "smartphone",
      navLabel: "Bakım Hatırlatıcısı",
      title: "Uygulama Üzerinden Bakım Hatırlatıcısı",
      lead: "Bazı akıllı telefon uygulamaları, günlük temizlik ve periyodik bakım için size hatırlatma gönderebilir.",
      howItWorks: "Uygulama, belirlediğiniz sıklığa göre temizlik veya bakım zamanının geldiğini bildirim olarak size iletir.",
      advantages: [
        "Düzenli bir rutin oluşturmanıza yardımcı olur",
        "Periyodik bakım zamanınızı unutmamanızı sağlar",
        "Kullanımı isteğe bağlı ve ücretsizdir",
      ],
      models: ["Hatırlatıcı Destekli Uygulamalar"],
      expertNote: "Hatırlatıcı özelliği, kullandığınız uygulamaya göre değişebilir.",
    },
  ],
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0284c7",
  accentColorNavActiveBg: "rgb(14 165 233 / 0.1)",
  accentColorCalloutBg: "rgb(14 165 233 / 0.06)",
  accentColorCalloutLabel: "#0284c7",
};
