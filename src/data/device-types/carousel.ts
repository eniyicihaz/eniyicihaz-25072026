// Cihaz türü carousel'i (ana sayfa, "İşitme Cihazı Türleri") — yeni içerik yok.
//
// Altı kart, cihazın kulaktaki yerine göre altı türdür: IIC → CIC → ITC → ITE → BTE → RIC. Ad, kısa açıklama, görsel ve
// bağlantı "kulakta nerede durur" bölümüyle AYNI tek kaynaktan gelir (scroller.ts → isitme-cihazlari/types.ts); böylece
// iki bölüm birbirinden farklı bir şey söyleyemez. Görseller sitede zaten kullanılan TEMSİLİ cihaz görselleridir
// (marka/model iddiası taşımaz). Bağlantılar mevcut sayfalara gider; IIC/CIC ve ITC/ITE aynı detay sayfasını paylaşır,
// RIC için ayrı detay sayfası olmadığından /isitme-cihazlari/ sayfasındaki RIC bölümüne gider.
//
// Özelliğe göre ayrılan dört sayfa (şarjlı, Bluetooth, çocuk, suya dayanıklı) carousel'den çıkmadı: ana sayfada
// carousel'in altında ayrı bir bağlantı satırı olarak durur (bkz. HomeExplore.astro, `deviceFeatureLinks`).
import { categoryExplorer } from "../category-explorer/category-explorer.data";
import { scrollerSteps } from "./scroller";

export interface DeviceTypeCard {
  /** Kısaltma rozeti (IIC, CIC …). */
  abbr?: string;
  name: string;
  description: string;
  href: string;
  image: { src: string; srcset?: string; width: number; height: number; alt: string };
}

export const deviceTypeCards: DeviceTypeCard[] = scrollerSteps.map((s) => ({
  abbr: s.abbr,
  name: s.name,
  // Kısa açıklama: kulaktaki konum + profilin kendi "görünürlük" cümlesi.
  description: `${s.zone}. ${s.visibility}`,
  href: s.href,
  image: s.image,
}));

const TYPE_HREFS = new Set(deviceTypeCards.map((c) => c.href));

/** Kulaktaki yere göre değil, ÖZELLİĞE göre ayrılan mevcut sayfalar (carousel kartı olmayanlar). */
export const deviceFeatureLinks: Array<{ label: string; href: string }> = categoryExplorer.items
  .filter((item) => !TYPE_HREFS.has(item.href))
  .map((item) => ({ label: item.name, href: item.href }));
