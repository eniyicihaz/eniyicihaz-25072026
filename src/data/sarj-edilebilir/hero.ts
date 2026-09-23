// Hero content for the "Şarj Edilebilir" product page
// (/isitme-cihazlari/sarj-edilebilir). Renders through the shared
// BrandPageHero component — same component the Kulak Arkası (BTE) and
// Kulak İçi (ITE) master pages use. Third page of the "İşitme Cihazları"
// product-page series (see header.data.ts's devicesMega -> "İşitme
// Cihazı Çeşitleri" column).
//
// accentColor: zümrüt yeşili (#059669) — a category accent distinct from
// BTE's mavi (#2563eb) and ITE's mor (#7c3aed), scoped entirely to this
// page's own data (no shared design-system token touched).
// heroBackground follows the same layered "Hero Background System" recipe
// as BTE/ITE, with the hue swapped for emerald.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const sarjEdilebilirHero: BrandPageHeroContent = {
  badge: "İŞİTME CİHAZI ÇEŞİTLERİ · ŞARJ EDİLEBİLİR",
  headingLines: ["Şarj Edilebilir", "İşitme Cihazları"],
  paragraphs: [
    "Değiştirilebilir pil yerine dahili lityum-iyon pil kullanan şarj edilebilir işitme cihazları, şarj kutusuna yerleştirilerek tek dokunuşla dolar ve gün boyu kullanıma hazır hâle gelir.",
    "Pil değiştirme zahmetini ortadan kaldıran bu teknoloji; el becerisi sınırlı kullanıcılardan yoğun tempolu yaşam sürenlere kadar geniş bir kullanıcı kitlesi için Avrasya İşitme'de sıkça değerlendirdiğimiz bir seçenektir.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "KULLANIM SÜRESİ",
      accent: "#059669",
      title: "Tek Şarjla Gün Boyu Kullanım",
      description: "Gece boyunca şarj kutusunda dolan cihaz, sabah tam şarjlı olarak kullanıma hazır hâle gelir.",
    },
    {
      label: "PİL DEĞİŞTİRME YOK",
      accent: "#047857",
      title: "Küçük Pillerle Uğraşmak Yok",
      description: "Değiştirilebilir pil ve pil kapağı olmadığından günlük kullanım belirgin şekilde basitleşir.",
    },
    {
      label: "ÇEVRE DOSTU",
      accent: "#065f46",
      title: "Daha Az Pil Atığı",
      description: "Tek kullanımlık pillere kıyasla daha az atık üretir, uzun vadede çevreye daha az yük bindirir.",
    },
  ],
  image: {
    src: "/images/signia/models/pure.webp",
    alt: "Şarj kutusunda duran, şarj edilebilir kulak arkası işitme cihazı çifti görseli",
  },
  floatingCard: {
    title: "Gece Şarj, Gündüz Kullanım",
    description: "Şarj kutusuna yerleştirilen cihaz, tek gecede tam dolar.",
  },
  accentColor: "#059669",
  accentColorHover: "#047857",
  accentColorSoft: "rgb(5 150 105 / 0.12)",
  accentColorBorder: "rgb(5 150 105 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(5,150,105,0.35) 0%, rgba(5,150,105,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #06201a 60%, #08331f 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#047857",
  heroWaveOpacity: "0.18",
};
