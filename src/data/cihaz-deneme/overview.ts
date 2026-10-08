// Cihaz Deneme — "İki aşama" bloğu (Faz 2 P2). Eski "Hızlı bilgiler" kartları
// (birden fazla marka vb.) kaldırıldı; yalnızca kanonik deneme modeli.
// Kaynak: SERVICE_SOURCE_OF_TRUTH H7 (demo: ücretsiz, ~20 dk, randevu gerekli),
// H28 (satın alarak 7 güne kadar deneme; uygun bulunmazsa kesintisiz iade),
// §1.5 (kulak içi cihazlar 7 günlük deneme dışında; merkezde demo).
export interface CihazDenemeStage {
  label: string;
  title: string;
  points: string[];
}

export const cihazDenemeModel = {
  eyebrow: "DENEME MODELİ",
  heading: "İki Aşamada Cihaz Deneme",
  intro: "Merkezdeki demo ile satın alarak yapılan deneme ayrı iki uygulamadır.",
  stages: [
    {
      label: "1. Aşama",
      title: "Merkezde Ücretsiz Demo",
      points: [
        "Yaklaşık 20 dakika sürer.",
        "Ücretsizdir ve randevuyla yapılır.",
        "Darıca'daki merkezimizde gerçekleşir.",
      ],
    },
    {
      label: "2. Aşama",
      title: "Satın Alarak 7 Güne Kadar Deneme",
      points: [
        "Cihaz bedeli ödenir ve cihaz en fazla 7 gün günlük hayatta kullanılır.",
        "Uygun bulunmazsa cihaz iade alınır; ödenen tutar kesintisiz iade edilir.",
      ],
    },
  ] as CihazDenemeStage[],
  note: "Kulak içi cihazlar 7 günlük deneme kapsamı dışındadır; bu cihazlar merkezimizde demo olarak denenebilir.",
};
