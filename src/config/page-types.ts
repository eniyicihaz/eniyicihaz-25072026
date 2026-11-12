// Page-level structured-data hints used by MainLayout. Everything here mirrors what the page visibly is.
import type { ServiceMeta, WebPageKind } from "../lib/schema";

/** Pages whose subject is the real business itself (WebPage.about → the MedicalBusiness @id). */
export const ABOUT_BUSINESS = new Set<string>([
  "/",
  "/hakkimizda/",
  "/iletisim/",
  "/darica-isitme-cihazlari/",
  "/gebze-isitme-cihazlari/",
  "/cayirova-isitme-cihazlari/",
  "/kocaeli-isitme-cihazlari/",
]);

export const PAGE_KINDS: Record<string, WebPageKind> = {
  "/hakkimizda/": "AboutPage",
  "/iletisim/": "ContactPage",
  "/isitme-cihazlari/": "CollectionPage",
  "/markalar/": "CollectionPage",
  "/hizmetlerimiz/": "CollectionPage",
  "/bilgi-merkezi/": "CollectionPage",
  "/site-haritasi/": "CollectionPage",
  "/degerlendirme/": "CollectionPage",
  "/uygulama-ayar/": "CollectionPage",
  "/servis-bakim/": "CollectionPage",
  "/teknolojiler/": "CollectionPage",
  "/ihtiyaciniza-gore/": "CollectionPage",
  "/segmentler/": "CollectionPage",
  "/neden-orijinal/": "CollectionPage",
  "/rehberler/": "CollectionPage",
  "/kvkk/": "CollectionPage",
};

/** Pages that describe a service the centre actually provides (SERVICE_SOT): they also get a Service node. */
export const SERVICE_PAGES: Record<string, ServiceMeta> = {
  "/degerlendirme/ucretsiz-isitme-testi/": { name: "Ücretsiz işitme testi", serviceType: "İşitme testi" },
  "/degerlendirme/odyometri/": { name: "Odyometri", serviceType: "Odyometri (işitme eşiği testi)" },
  "/degerlendirme/timpanometri/": { name: "Timpanometri", serviceType: "Orta kulak değerlendirmesi" },
  "/degerlendirme/cocuk-isitme-testi/": { name: "Çocuk işitme testi", serviceType: "Çocuk işitme testi" },
  "/degerlendirme/tinnitus-degerlendirme/": { name: "Tinnitus değerlendirmesi", serviceType: "Tinnitus değerlendirmesi" },
  "/uygulama-ayar/cihaz-deneme/": { name: "İşitme cihazı deneme", serviceType: "Cihaz deneme" },
  "/uygulama-ayar/cihaz-uygulama/": { name: "İşitme cihazı uygulama", serviceType: "Cihaz uygulama" },
  "/uygulama-ayar/evde-isitme-cihazi-hizmeti/": {
    name: "Evde işitme cihazı hizmeti",
    serviceType: "Evde hizmet",
    areaServed: ["Kocaeli", "İstanbul Anadolu Yakası"],
  },
  "/uygulama-ayar/kalip-alimi/": { name: "Kulak kalıbı alımı", serviceType: "Kulak kalıbı" },
  "/uygulama-ayar/kisiye-ozel-ayar/": { name: "Kişiye özel işitme cihazı ayarı", serviceType: "Cihaz ayarı" },
  "/uygulama-ayar/kisiye-ozel-programlama/": { name: "Kişiye özel programlama", serviceType: "Cihaz programlama" },
  "/uygulama-ayar/kontrol-randevusu/": { name: "Kontrol randevusu", serviceType: "Kontrol ve ayar randevusu" },
  "/uygulama-ayar/uzaktan-ayar/": { name: "Uzaktan işitme cihazı ayarı", serviceType: "Uzaktan ayar" },
  "/servis-bakim/teknik-servis/": { name: "İşitme cihazı teknik servisi", serviceType: "Teknik servis" },
  "/servis-bakim/onarim-takibi/": { name: "Onarım takibi", serviceType: "Onarım takibi" },
  "/servis-bakim/periyodik-bakim/": { name: "Periyodik bakım", serviceType: "Periyodik bakım" },
  "/servis-bakim/garanti-islemleri/": { name: "Garanti işlemleri", serviceType: "Garanti işlemleri" },
};

/** Pages where the automatic "Bu sayfada" table of contents makes no sense. */
export const TOC_EXCLUDED = new Set<string>(["/", "/iletisim/", "/site-haritasi/"]);
