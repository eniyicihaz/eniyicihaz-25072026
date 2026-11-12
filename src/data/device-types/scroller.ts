// "Cihaz türleri kulakta nerede durur?" — Starkey tarzı kaydırmalı bölümün verisi (IIC → CIC → ITC → ITE → BTE → RIC).
// Yeni iddia yok: ad, konum ve kısa metin, sitedeki 8 profilin (data/isitme-cihazlari/types.ts) kendi alanlarıdır;
// bağlantılar mevcut detay sayfalarına gider. Görseller sitede zaten kullanılan TEMSİLİ cihaz görselleridir.
//
// KULAK: gerçek bir kulak fotoğrafı depoda yok. Konum, AÇIKÇA TEMSİLİ bir şematik çizimle (EarDiagram.astro) ve
// "konum çubuğu" ile anlatılır; ürün fotoğrafı çizimin üzerine yerleştirilmez. Gerçek bir kulak görseli sağlanırsa
// aşağıdaki `earImage` doldurulur ve her adıma `pin` (kulak görseli üzerinde % koordinat + ölçek/dönüş) eklenir.
import { typeProfiles } from "../isitme-cihazlari/types";
import { imageSrcset } from "../../lib/responsive-images";

export interface ScrollerPin {
  /** Kulak görseli üzerinde cihaz merkezi, % (0–100). */
  x: number;
  y: number;
  /** Cihaz görselinin kulak görseline göre ölçeği (1 = kulak görselinin %30 genişliği). */
  scale?: number;
  /** Derece. */
  rotate?: number;
}

export interface ScrollerStep {
  id: string;
  abbr: string;
  name: string;
  /** Kısa konum etiketi (profilin kendi cümlelerinden). */
  zone: string;
  /** Konum çubuğundaki 0–2 grup: 0 kanal içi, 1 kepçe/kanal girişi, 2 kulak arkası. */
  zoneGroup: 0 | 1 | 2;
  howUsed: string;
  visibility: string;
  href: string;
  linkLabel: string;
  image: { src: string; srcset?: string; width: number; height: number; alt: string };
  pin?: ScrollerPin;
}

export interface ScrollerEarImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Gerçek kulak görseli sağlanınca doldurulur (yok = kulak katmanı çizilmez). */
export const scrollerEarImage: ScrollerEarImage | undefined = undefined;

const byId = (id: string) => {
  const p = typeProfiles.find((x) => x.id === id);
  if (!p) throw new Error(`device-types/scroller: profile "${id}" not found in types.ts`);
  return p;
};

// Sıra: kulak kanalının derininden kulak arkasına. zone metinleri profillerin "whatIs/howUsed" cümlelerinden türetildi.
const ORDER: Array<{ id: string; abbr: string; zone: string; zoneGroup: 0 | 1 | 2; href: string; linkLabel: string }> = [
  { id: "iic", abbr: "IIC", zone: "Kulak kanalının derininde", zoneGroup: 0, href: "/isitme-cihazlari/gorunmez-cic/", linkLabel: "Görünmez (CIC/IIC) cihazları inceleyin" },
  { id: "cic", abbr: "CIC", zone: "Tamamen kulak kanalının içinde", zoneGroup: 0, href: "/isitme-cihazlari/gorunmez-cic/", linkLabel: "Görünmez (CIC/IIC) cihazları inceleyin" },
  { id: "itc", abbr: "ITC", zone: "Kulak kanalının girişinde", zoneGroup: 1, href: "/isitme-cihazlari/kulak-ici-ite/", linkLabel: "Kulak içi (ITE/ITC) cihazları inceleyin" },
  { id: "kulak-ici-ite", abbr: "ITE", zone: "Kulak kepçesinin ve kanalının içinde", zoneGroup: 1, href: "/isitme-cihazlari/kulak-ici-ite/", linkLabel: "Kulak içi (ITE) cihazları inceleyin" },
  { id: "kulak-arkasi-bte", abbr: "BTE", zone: "Kulağın arkasında", zoneGroup: 2, href: "/isitme-cihazlari/kulak-arkasi-bte/", linkLabel: "Kulak arkası (BTE) cihazları inceleyin" },
  { id: "tur-ric-rite", abbr: "RIC", zone: "Gövde kulak arkasında, alıcı kulak kanalında", zoneGroup: 2, href: "/isitme-cihazlari/#ric-rite", linkLabel: "RIC / RITE'yi ayrıntılı okuyun" },
];

export const scrollerSteps: ScrollerStep[] = ORDER.map((o) => {
  const p = byId(o.id);
  const img = p.image;
  if (!img) throw new Error(`device-types/scroller: profile "${o.id}" has no image in types.ts`);
  return {
    id: o.id,
    abbr: o.abbr,
    name: p.name,
    zone: o.zone,
    zoneGroup: o.zoneGroup,
    howUsed: p.facts.howUsed,
    visibility: p.facts.visibility,
    href: o.href,
    linkLabel: o.linkLabel,
    image: { src: img.src, srcset: imageSrcset(img.src), width: img.width, height: img.height, alt: img.alt },
  };
});

export const scrollerGroups = [
  { id: 0, label: "Kulak kanalının içinde" },
  { id: 1, label: "Kanal girişi ve kulak kepçesi" },
  { id: 2, label: "Kulağın arkasında" },
] as const;
