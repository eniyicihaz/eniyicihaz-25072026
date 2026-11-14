// Bakım ve Teknik Destek hero'sundaki illüstrasyon (/neden-orijinal/yaygin-servis-agi).
//
// Bilgilendirici bir illüstrasyondur: harita, şube işareti, marka logosu duvarı, servis noktası sayısı, süre, ücret veya
// otomatik takip/bildirim göstermez. Her ifadenin kaynağı:
//   orta kutu       hero.ts paragraf 2: farklı marka ve modellerde bakım ve teknik destek (sayı ve yetki iddiası YOK; işletme sahibi, 2026-11-14)
//   kart 1          authority-map.ts "Marka ve Modele Göre Kapsam"
//   kart 2          authority-map.ts "Cihaza Uygun Teknik Değerlendirme"
//   kart 3          authority-map.ts "Garanti Koşullarının İncelenmesi"
// Bilerek YER ALMAYANLAR: marka sayısı, üretici yetkisi/yetkili servis izlenimi, servis noktası/şube izlenimi, Türkiye haritası, ücretsiz işlem veya her arızanın garanti kapsamında
// olduğu anlamı, kesin süre. Fiziksel hizmet noktası yalnızca hero metninde (Darıca merkez) belirtilir; görselde konum yoktur.

export const yayginServisAgiHeroVisual = {
  label: "Farklı marka ve modellerde bakım ve teknik destek (bilgilendirici şema)",
  countLabel: "TEKNİK DESTEK",
  countNote: "Farklı marka ve modeller",
  cards: [
    { icon: "tool", title: "Marka ve Modele Göre Kapsam" },
    { icon: "search", title: "Uygun Teknik Değerlendirme" },
    { icon: "file", title: "Garanti Koşullarının İncelenmesi" },
  ] as { icon: "tool" | "search" | "file"; title: string }[],
};
