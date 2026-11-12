// Yerel sayfalar (Darıca / Gebze / Çayırova / Kocaeli) için "İlgili Sayfalar" blokları — YENİ BİLGİ YOK.
// Açıklamalar hedef sayfaların kendi içeriğindeki doğrulanmış cümlelerdir (LOCAL_SOURCE_OF_TRUTH). Yerel sayfaların bağlantı
// kümeleri BİLİNÇLİ OLARAK FARKLIDIR (doorway yasağı): her sayfa kendi niyetine göre 4–5 bağlantı verir, birbirinin kopyası olmaz.
// Şube yoktur: Gebze/Çayırova bağlantıları "gelenler için ulaşım" olarak adlandırılır, şube gibi sunulmaz.
import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

const style = {
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};

const test = { label: "Ücretsiz İşitme Testi", description: "Merkezimizde ücretsiz işitme testi hakkında bilgi alın.", href: "/degerlendirme/ucretsiz-isitme-testi/" };
const sgk = { label: "SGK İşitme Cihazı Ödemesi", description: "SGK katkı payı ve rapor süreci hakkında bilgi alın.", href: "/sgk-isitme-cihazi-odemesi/" };
const evde = { label: "Evde Hizmet", description: "Kocaeli'nin tamamında ve İstanbul Anadolu Yakası'nda randevulu evde hizmet.", href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/" };
const darica = { label: "Darıca Merkezimiz", description: "Tek fiziksel merkezimizin adresi, ulaşımı, saatleri ve ilk ziyaret bilgisi.", href: "/darica-isitme-cihazlari/" };
const gebze = { label: "Gebze'den Merkezimize", description: "Gebze'den Darıca merkezimize ulaşım, randevu ve SGK işlem desteği.", href: "/gebze-isitme-cihazlari/" };
const cayirova = { label: "Çayırova'dan Merkezimize", description: "Çayırova'dan Darıca merkezimize ulaşım ve evde hizmet bilgisi.", href: "/cayirova-isitme-cihazlari/" };
const kocaeli = { label: "Kocaeli İşitme Cihazları", description: "Kocaeli ilçelerinden merkezimize ulaşım ve Kocaeli genelinde evde hizmet.", href: "/kocaeli-isitme-cihazlari/" };
const uzaktan = { label: "Uzaktan Ayar", description: "Uygun cihazlarda küçük ayarlar için merkeze gelmeden destek.", href: "/uygulama-ayar/uzaktan-ayar/" };

const block = (heading: string, links: Array<{ label: string; description: string; href: string }>): BrandPageRelatedContentContent => ({
  badge: "İLGİLİ İÇERİKLER",
  heading,
  links,
  ...style,
});

export const daricaRelated = block("Merkezimizden Önce ve Sonra", [test, sgk, evde, gebze, cayirova]);
export const gebzeRelated = block("Gebze'den Gelenler İçin İlgili Sayfalar", [darica, test, sgk, uzaktan]);
export const cayirovaRelated = block("Çayırova'dan Gelenler İçin İlgili Sayfalar", [darica, test, sgk, evde]);
export const kocaeliRelated = block("Kocaeli'de Nereden Başlamalı?", [darica, gebze, cayirova, evde]);
