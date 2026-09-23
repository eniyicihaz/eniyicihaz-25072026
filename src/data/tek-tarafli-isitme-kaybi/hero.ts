// Hero content for the "Tek Taraflı İşitme Kaybı" product page
// (/ihtiyaciniza-gore/tek-tarafli-isitme-kaybi). Renders through the
// shared BrandPageHero component — same component every
// /isitme-cihazlari/*, /teknolojiler/* and /ihtiyaciniza-gore/* page
// uses. Fifth page of the "İhtiyacınıza Göre" product-page series (see
// header.data.ts's devicesMega third column), following the completed
// four-page dB-degree ladder (Hafif/Orta/İleri/Çok İleri). Unlike those
// four, this page covers a different classification axis entirely —
// laterality (which ear is affected), not severity — so it does not
// extend the degree ladder; instead it deliberately cross-references the
// Kablosuz Bağlantı page's existing CROS/BiCROS Ecosystem item rather
// than re-explaining that technology's internals. A health-classification
// topic — copy is deliberately careful throughout: self-diagnosis is
// never implied, and every section points back to a proper audiometric
// evaluation (odyometri), with sudden-onset cases flagged as needing
// urgent ENT (KBB) attention.
//
// accentColor: çinko grisi / zinc (#52525b) — a category accent distinct
// from every prior page's accent across all four series (BTE'nin mavisi
// #2563eb, ITE'nin moru #7c3aed, Şarj Edilebilir'in zümrüt yeşili
// #059669, Bluetooth'un camgöbeği #0891b2, Çocuklara Özel'in gülü
// #e11d48, Görünmez'in grafiti (slate) #475569, Suya Dayanıklı'nın deniz
// mavisi-yeşili #0d9488, Yapay Zeka Destekli'nin çividi #4f46e5, Gürültü
// Engelleme'nin eflatunu #c026d3, Konuşma Odaklı'nın turuncusu #ea580c,
// Kablosuz Bağlantı'nın misket limonu #65a30d, Şarjlı Teknolojiler'in
// kırmızısı #dc2626, Uzaktan Kontrol'ün gök mavisi #0284c7, Tinnitus'un
// moru #9333ea, Hafif İşitme Kaybı'nın pembesi #db2777, Orta Derece'nin
// yeşili #16a34a, İleri Derece'nin taş grisi #57534e, Çok İleri
// Derece'nin koyu kehribarı #92400e). heroBackground follows the same
// layered "Hero Background System" recipe as those pages, with the hue
// swapped for zinc.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const tekTarafliIsitmeKaybiHero: BrandPageHeroContent = {
  badge: "İHTİYACINIZA GÖRE · TEK TARAFLI İŞİTME KAYBI",
  headingLines: ["Tek Taraflı İşitme Kaybı", "İçin Cihaz Rehberi"],
  paragraphs: [
    "Tek taraflı işitme kaybı, yalnızca bir kulağı etkileyen ve genellikle sesin geldiği yönü belirlemekte ve gürültülü ortamlarda konuşmayı takip etmekte belirgin zorluğa yol açan bir işitme kaybı türüdür.",
    "Bu türde işitme kaybı yaşayan kullanıcılar için, kablosuz aktarım sistemlerinden yönlü mikrofon desteğine kadar Avrasya İşitme'de sıkça değerlendirdiğimiz cihaz seçeneklerini bir araya getirdik.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "TÜR",
      accent: "#52525b",
      title: "Yalnızca Bir Kulağı Etkiler",
      description: "Tek taraflı işitme kaybı, bir kulakta normal veya normale yakın işitme sürerken diğer kulakta belirgin bir kayıp olması durumudur.",
    },
    {
      label: "SES YÖNÜ ALGISI",
      accent: "#3f3f46",
      title: "Sesin Geldiği Yönü Belirlemekte Güçlük",
      description: "İki kulaklı (binaural) işitme olmadığından, sesin hangi yönden geldiğini anlamak zorlaşabilir.",
    },
    {
      label: "KABLOSUZ AKTARIM",
      accent: "#27272a",
      title: "CROS / BiCROS Sistemleri Sıkça Değerlendirilir",
      description: "İyi duyan kulağa sesi kablosuz olarak aktaran sistemler, tek taraflı kayıplarda sıkça değerlendirilen bir seçenektir.",
    },
  ],
  image: {
    src: "/images/phonak/models/cros.webp",
    alt: "Tek taraflı işitme kaybında iyi duyan kulağa sesi kablosuz olarak aktaran CROS sistemine sahip işitme cihazı görseli",
  },
  floatingCard: {
    title: "CROS Sistemi",
    description: "İyi duyan kulağa sesi kablosuz olarak aktarır.",
  },
  accentColor: "#52525b",
  accentColorHover: "#3f3f46",
  accentColorSoft: "rgb(82 82 91 / 0.12)",
  accentColorBorder: "rgb(82 82 91 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(82,82,91,0.35) 0%, rgba(82,82,91,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #18181b 60%, #27272a 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#3f3f46",
  heroWaveOpacity: "0.18",
};
