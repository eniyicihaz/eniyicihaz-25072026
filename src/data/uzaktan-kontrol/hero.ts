// Hero content for the "Uzaktan Kontrol" product page
// (/teknolojiler/uzaktan-kontrol). Renders through the shared
// BrandPageHero component — same component every /isitme-cihazlari/* and
// /teknolojiler/* page uses. Sixth page of the "Teknolojilere Göre"
// product-page series (see header.data.ts's devicesMega -> second
// column), following Yapay Zeka Destekli, Gürültü Engelleme, Konuşma
// Odaklı, Kablosuz Bağlantı and Şarjlı Teknolojiler.
//
// accentColor: gök mavisi / sky (#0284c7) — a category accent distinct
// from every prior page's accent across all three series (BTE'nin
// mavisi #2563eb, ITE'nin moru #7c3aed, Şarj Edilebilir'in yeşili
// #059669, Bluetooth'un camgöbeği #0891b2, Çocuklara Özel'in gülü
// #e11d48, Görünmez'in grafiti #475569, Suya Dayanıklı'nın deniz
// mavisi-yeşili #0d9488, Yapay Zeka Destekli'nin çividi #4f46e5, Gürültü
// Engelleme'nin eflatunu #c026d3, Konuşma Odaklı'nın turuncusu #ea580c,
// Kablosuz Bağlantı'nın misket limonu #65a30d, Şarjlı Teknolojiler'in
// kırmızısı #dc2626). heroBackground follows the same layered "Hero
// Background System" recipe as those pages, with the hue swapped for sky.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const uzaktanKontrolHero: BrandPageHeroContent = {
  badge: "TEKNOLOJİLERE GÖRE · UZAKTAN KONTROL",
  headingLines: ["Uzaktan Kontrol", "Özellikleri"],
  paragraphs: [
    "Uzaktan kontrol özellikleri; akıllı telefon uygulaması veya fiziksel bir uzaktan kumanda üzerinden ses seviyesi ve program değişikliği yapmanızı, hatta bazı durumlarda odyometristinizin cihazınızı uzaktan ayarlamasını sağlayan teknolojilerdir.",
    "Cihazını kolayca ayarlamak isteyen veya kliniğe gelmeden uzaktan destek almak isteyen kullanıcılar için Avrasya İşitme'de sıkça değerlendirdiğimiz bir teknolojidir.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "UYGULAMA İLE KONTROL",
      accent: "#0284c7",
      title: "Telefonunuzdan Kolay Ayar",
      description: "Ses seviyesi ve dinleme programları, akıllı telefon uygulaması üzerinden hızlıca değiştirilebilir.",
    },
    {
      label: "FİZİKSEL UZAKTAN KUMANDA",
      accent: "#0369a1",
      title: "Uygulama Gerektirmeyen Basit Kontrol",
      description: "Akıllı telefon kullanmayan kullanıcılar için ayrı bir fiziksel uzaktan kumanda seçeneği sunulabilir.",
    },
    {
      label: "UZAKTAN DESTEK (TELEAUDIOLOGY)",
      accent: "#075985",
      title: "Kliniğe Gelmeden Uzman Desteği",
      description: "Bazı modellerde odyometristiniz, video görüşme sırasında cihaz ayarlarınızı uzaktan güncelleyebilir.",
    },
  ],
  image: {
    src: "/images/resound/models/vivia.webp",
    alt: "Uygulama üzerinden uzaktan kontrol ve uzaktan destek özelliğine sahip işitme cihazı görseli",
  },
  floatingCard: {
    title: "Uzaktan Ayar Desteği",
    description: "Odyometrist, video görüşme ile ayarlarınızı güncelleyebilir.",
  },
  accentColor: "#0284c7",
  accentColorHover: "#0369a1",
  accentColorSoft: "rgb(2 132 199 / 0.12)",
  accentColorBorder: "rgb(2 132 199 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(2,132,199,0.35) 0%, rgba(2,132,199,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #071b26 60%, #0a2a3b 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0369a1",
  heroWaveOpacity: "0.18",
};
