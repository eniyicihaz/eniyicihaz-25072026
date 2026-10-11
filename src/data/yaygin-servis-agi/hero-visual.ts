// Üretici Yetkili Servis Desteği hero'sundaki illüstrasyon (/neden-orijinal/yaygin-servis-agi).
//
// Bilgilendirici bir illüstrasyondur: harita, şube işareti, marka logosu duvarı, servis noktası sayısı, süre, ücret veya
// otomatik takip/bildirim göstermez. Her ifadenin kaynağı:
//   18 MARKA        hero.ts paragraf 2 + authority-map.ts hub: "18 markanın tamamı için üretici servis yetkisi" (işletme sahibi, 2026-10-07)
//   kart 1          authority-map.ts "Üretici Yetkisi ve Servis Kapsamı"
//   kart 2          authority-map.ts "Cihaza Uygun Teknik Değerlendirme"
//   kart 3          authority-map.ts "Garanti Koşullarının İncelenmesi"
// Bilerek YER ALMAYANLAR: "18 servis noktası/şube" izlenimi, Türkiye haritası, ücretsiz işlem veya her arızanın garanti kapsamında
// olduğu anlamı, kesin süre. Fiziksel hizmet noktası yalnızca hero metninde (Darıca merkez) belirtilir; görselde konum yoktur.

export const yayginServisAgiHeroVisual = {
  label: "18 markada üretici servis yetkisi (bilgilendirici şema)",
  count: "18",
  countLabel: "MARKA",
  countNote: "Üretici servis yetkisi",
  cards: [
    { icon: "badge", title: "Üretici Servis Yetkisi" },
    { icon: "search", title: "Uygun Teknik Değerlendirme" },
    { icon: "file", title: "Garanti Koşullarının İncelenmesi" },
  ] as { icon: "badge" | "search" | "file"; title: string }[],
};
