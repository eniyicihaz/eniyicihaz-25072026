// Onarım Takibi hero'sundaki "dijital servis kaydı ve bilgilendirme akışı" illüstrasyonu (/servis-bakim/onarim-takibi).
//
// Bu yalnızca bilgilendirici bir illüstrasyondur; müşterinin girdiği bir panel, canlı takip, otomatik bildirim veya
// gerçek zamanlı durum göstermez. Her ifadenin kaynağı:
//   kart     hero.ts paragraf 1: "teslim ettiğinizde dijital bir servis kaydı oluşturulur" + "kurum içi kayıt" (işletme tanımı)
//   düğüm 1  teknik-servis/hero-process.ts adım 2: "Cihazınız merkezimizde uzmanımızca ilk kez değerlendirilir"
//   düğüm 2  teknik-servis/hero-process.ts adım 3: "Merkezde çözülemeyen cihaz teknik servise gönderilir; çözülebilen sorunlarda bu adıma gerek kalmaz"
//            → "gerekirse" ayrımı görselde kesikli çizgiyle gösterilir (her cihaz teknik servise gitmez)
//   düğüm 3  teknik-servis/hero-process.ts adım 5 + hero.ts paragraf 2: personel gerektiğinde SMS/WhatsApp ile MANUEL bilgilendirir
//   kartlar  hero.ts paragraf 2 + features[2]: güncel durum telefonla veya WhatsApp'tan sorulur (bağlantılar hero.ts CTA'larından)
// Bilerek YER ALMAYANLAR: süre/teslim günü, ücret, "canlı / anlık takip / otomatik bildirim" ifadeleri, durum yüzdesi veya ilerleme çubuğu.

export interface HeroVisualNode {
  /** Masaüstü etiketi. */
  title: string;
  /** Mobilde (<720 px) gösterilen kısaltma; aynı bilgiyi korur. */
  short: string;
  note: string;
  /** Yalnızca belirli durumlarda gerçekleşen adım: çizgisi kesikli çizilir. */
  optional?: boolean;
}

export const onarimTakibiHeroVisual = {
  label: "Dijital servis kaydı ve bilgilendirme akışı (bilgilendirici şema)",
  record: {
    title: "Dijital Servis Kaydı",
    note: "Teslimde oluşturulan kurum içi kayıt",
  },
  nodes: [
    { title: "Merkezde İlk Değerlendirme", short: "İlk Değerlendirme", note: "Cihaz merkezde incelenir" },
    { title: "Gerekirse Teknik Servis", short: "Gerekirse Teknik Servis", note: "Merkezde çözülemezse", optional: true },
    { title: "Teknik Kontrol Sonrası Bilgilendirme", short: "Kontrol Sonrası Bilgilendirme", note: "Personelimiz manuel bilgilendirir" },
  ] as HeroVisualNode[],
  contacts: {
    phone: { title: "Telefonla Bilgi Alın", note: "Güncel durumu sorun" },
    whatsapp: { title: "WhatsApp ile Bilgi Alın", note: "Güncel durumu yazın" },
  },
};
