// "Şarj Edilebilir Nedir?" + "Nasıl Çalışır?" section for the
// /isitme-cihazlari/sarj-edilebilir page. Renders through the shared
// BrandPageIntro component. The "nasıl çalışır" explanation is folded
// into this same section's paragraphs, same technique the ITE page uses.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const sarjEdilebilirIntro: BrandPageIntroContent = {
  badge: "ŞARJ EDİLEBİLİR NEDİR?",
  heading: "Şarj Edilebilir İşitme Cihazı Nedir ve Nasıl Çalışır?",
  paragraphs: [
    "Şarj edilebilir işitme cihazı, değiştirilebilir çinko-hava pil yerine dahili, yeniden şarj edilebilir bir lityum-iyon pil kullanan işitme cihazı tipidir.",
    "Bu teknoloji belirli bir fiziksel cihaz tipi değildir; hem kulak arkası (BTE/RIC) hem de kulak içi (ITE/ITC) ailelerinde sunulabilen bir güç seçeneğidir.",
    "Çalışma prensibi şöyledir: cihaz gece boyunca şarj kutusuna yerleştirilir, kutudaki temas noktaları veya kablosuz şarj sistemi üzerinden pil doldurulur; sabah cihaz tam şarjlı olarak kullanıma hazır hâle gelir.",
    "Şarj kutusunun boyutu ve özellikleri (taşınabilir powerbank işlevi, dezenfeksiyon gibi ek fonksiyonlar) üreticiye göre değişebilir.",
  ],
  stats: [
    { value: "Gece Şarj, Gündüz Kullanım", label: "Tipik Kullanım Döngüsü" },
    { value: "BTE / RIC / ITE / ITC", label: "Bulunabildiği Cihaz Tipleri" },
    { value: "Lityum-İyon", label: "Pil Teknolojisi" },
    { value: "Yıllar İçinde Kademeli Azalma", label: "Pil Kapasitesi Ömrü" },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
