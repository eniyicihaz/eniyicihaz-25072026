// "Görünmez Cihazlarda Uygunluk Kriterleri" teaser grid for the
// /isitme-cihazlari/gorunmez-cic page. Renders through the shared
// BrandPageTechnology component (6-card grid) — the ITE master page uses
// this same component for its four size sub-types (device-types.ts), but
// that topic is already covered there; this slot is repurposed instead
// for the one topic genuinely central to CIC/IIC candidacy and not
// covered on the ITE page: the practical factors that determine whether
// someone is a good fit for the smallest, custom-shell sub-types.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const gorunmezCicCandidacy: BrandPageTechnologyContent = {
  badge: "UYGUNLUK KRİTERLERİ",
  heading: "Görünmez Cihazlarda Uygunluk Kriterleri Nelerdir?",
  intro: "CIC/IIC'nin size uygun olup olmadığını belirleyen pratik faktörlere daha yakından bakalım.",
  items: [
    {
      label: "KANAL BOYUTU",
      title: "Kulak Kanalının Yeterli Büyüklükte Olması",
      description: "CIC/IIC üretimi için kulak kanalının belirli bir minimum boyutu karşılaması gerekir.",
    },
    {
      label: "KAYIP DERECESİ",
      title: "Hafif – Orta/İleri Derece Kayıp Aralığı",
      description: "Küçük gövde nedeniyle genellikle hafif ile orta-ileri dereceli kayıplarla sınırlıdır.",
    },
    {
      label: "EL BECERİSİ",
      title: "Takma, Çıkarma ve Pil Değişimine Uygun El Becerisi",
      description: "Küçük boyutu nedeniyle günlük kullanım belirli bir el becerisi gerektirir.",
    },
    {
      label: "KANAL YAPISI",
      title: "Kanalın Anatomik Uygunluğu",
      description: "Aşırı eğimli veya dar kanal yapılarında CIC/IIC üretimi teknik olarak zor olabilir.",
    },
    {
      label: "NEM VE KULAK YAĞI",
      title: "Kulak Yağı ve Nem Üretim Düzeyi",
      description: "Yoğun kulak yağı üretimi olan kullanıcılarda daha sık bakım ihtiyacı doğabilir.",
    },
    {
      label: "ESTETİK ÖNCELİK",
      title: "Görünürlüğün Önceliklendirilme Düzeyi",
      description: "Cihazın fark edilmemesi kullanıcı için ne kadar önemliyse CIC/IIC o kadar öne çıkan bir seçenektir.",
    },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
  accentColorHoverBorder: "rgb(71 85 105 / 0.5)",
};
