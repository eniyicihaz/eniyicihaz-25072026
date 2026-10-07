// Kocaeli landing page — bespoke Hero verisi. CorporateHero'nun (Darıca/
// Gebze/Çayırova'da kullanılan) standart "fotoğraf + alt bantta stats
// kartı" düzeni yerine, Kocaeli sayfasına özgü, page-scoped bir Hero
// markup'ı kullanılıyor (bkz. kocaeli-isitme-cihazlari.astro) — bu yüzden
// CorporateHeroContent değil, kendi yerel arayüzü tanımlanıyor. Yeni bir
// SHARED component icat edilmedi; bu sadece bu sayfaya özel bir markup +
// page-scoped CSS.
//
// Görsel: kullanıcının sağladığı, projeye özel hazırlanmış gerçek Hero
// görseli (kocaeli-isitme-cihazlari.webp) — Darıca/Gebze/Çayırova'nın
// hiçbirinde kullanılan görsel değil. Panoramik bir Kocaeli körfezi
// manzarası üzerine Darıca/Gebze/Çayırova/Kocaeli konum işaretleri ve
// işitme cihazı ürünleri yerleştirilmiş bir kompozit/kavramsal görsel —
// gerçek bir "merkez fotoğrafı" değil, bu yüzden imageAlt bunu açıkça
// tanımlıyor.
import { contactConfig } from "../../config/contact";

export interface KocaeliHeroStat {
  value: string;
  label: string;
}

export interface KocaeliHeroCta {
  label: string;
  href: string;
  variant?: "solid" | "outline";
}

export interface KocaeliHeroContent {
  badge: string;
  heading: string;
  subheading: string;
  image: string;
  imageAlt: string;
  stats: KocaeliHeroStat[];
  ctas: KocaeliHeroCta[];
}

export const kocaeliHero: KocaeliHeroContent = {
  badge: "Kocaeli ve Çevresi",
  heading: "Kocaeli İşitme Cihazları",
  subheading:
    "Kocaeli'de işitme cihazı arıyorsanız; değerlendirmeden cihaz seçimine, SGK sürecinden cihaz sonrası desteğe kadar ihtiyacınız olan bilgiyi tek sayfada bulabilirsiniz. Darıca, Gebze ve Çayırova'dan da kolayca ulaşabilirsiniz.",
  image: "/images/heroes/kocaeli-isitme-cihazlari.webp",
  imageAlt:
    "Kocaeli körfezini, Darıca, Gebze ve Çayırova konum işaretlerini ve işitme cihazı modellerini gösteren panoramik kavramsal görsel",
  stats: [
    { value: "SGK Anlaşmalı", label: "İşitme Merkezi" },
    { value: "18 Marka", label: "Seçenek Sunuyoruz" },
    { value: "Ağustos 2024", label: "Darıca Merkezi Açılışı" },
  ],
  ctas: [
    { label: "Ücretsiz Değerlendirme Al", href: "/degerlendirme/ucretsiz-isitme-testi/" },
    { label: "Bizi Arayın", href: contactConfig.phone.href, variant: "outline" },
  ],
};
