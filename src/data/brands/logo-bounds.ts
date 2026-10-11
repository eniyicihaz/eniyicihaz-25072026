// /markalar/ Marka Keşif Hero'su için logo içerik sınırları.
//
// public/images/brands/*-logo-seffaf.webp dosyalarının tuval boyutları farklıdır ve çoğunda geniş şeffaf kenar
// vardır (ör. Oticon 1774×887 tuvalde logo yalnızca 1439×357 px). Her dosyanın GERÇEK içerik kutusu (alfa > 48)
// piksel olarak ölçüldü; BrandDiscoveryHero logoyu bu kutuya göre ortalayıp ölçekler (kırpma/ezme yok, oran korunur).
// Logo dosyaları değiştirilmez; yalnızca gösterim penceresi hesaplanır.

export interface LogoBounds {
  /** Tuval genişliği/yüksekliği (px) */
  w: number;
  h: number;
  /** İçerik kutusu: [x0, y0, x1, y1] (px) */
  bbox: [number, number, number, number];
}

export const logoBounds: Record<string, LogoBounds> = {
  "oticon": { w: 1774, h: 887, bbox: [171, 249, 1610, 606] },
  "phonak": { w: 707, h: 353, bbox: [69, 116, 641, 224] },
  "signia": { w: 707, h: 353, bbox: [77, 95, 641, 246] },
  "widex": { w: 707, h: 353, bbox: [73, 98, 674, 249] },
  "resound": { w: 707, h: 353, bbox: [74, 79, 633, 270] },
  "nuear": { w: 612, h: 408, bbox: [48, 158, 584, 239] },
  "vista": { w: 612, h: 408, bbox: [154, 138, 469, 258] },
  "unitron": { w: 612, h: 408, bbox: [105, 140, 541, 235] },
  "bernafon": { w: 612, h: 408, bbox: [97, 157, 536, 249] },
  "philips-hearing": { w: 612, h: 408, bbox: [105, 158, 526, 234] },
  "rexton": { w: 612, h: 408, bbox: [96, 164, 530, 233] },
  "beltone": { w: 612, h: 408, bbox: [93, 161, 526, 238] },
  "sonic": { w: 612, h: 408, bbox: [125, 139, 496, 263] },
  "audio-service": { w: 612, h: 408, bbox: [132, 135, 489, 257] },
  "coselgi": { w: 612, h: 408, bbox: [152, 159, 464, 245] },
  "audifon": { w: 612, h: 408, bbox: [91, 153, 521, 247] },
  "am": { w: 612, h: 408, bbox: [196, 100, 427, 316] },
  "maico": { w: 612, h: 408, bbox: [87, 152, 531, 250] },
};
