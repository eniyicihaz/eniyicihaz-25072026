// "Devlet Hastanesi ile Özel Hastane Heyet Raporu Karşılaştırması"
// comparison table for the /sgk/rapor-sureci page. Renders through the
// existing, already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated.
// Deliberately contains no specific day counts or fees — a timeless,
// qualitative comparison distinct from every prior comparison across
// the site.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const raporSureciComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Devlet Hastanesi ile Özel Hastane Heyet Raporu Karşılaştırması",
  intro: "Tam teşekküllü devlet ve özel hastanelerde rapor süreci arasındaki temel farkları aşağıdaki tabloda özetledik.",
  primaryLabel: "Devlet Hastanesi",
  secondaryLabel: "Özel Hastane (SGK Anlaşmalı)",
  rows: [
    {
      feature: "Rapor Geçerliliği",
      primary: "SGK tarafından geçerli kabul edilir.",
      secondary: "SGK anlaşması bulunması koşuluyla geçerli kabul edilir.",
    },
    {
      feature: "Randevu Süreci",
      primary: "Randevu yoğunluğu hastaneye göre değişebilir.",
      secondary: "Randevu süreci genellikle daha esnek olabilir.",
    },
    {
      feature: "Muayene Ücreti",
      primary: "SGK güvencesi kapsamında değerlendirilir.",
      secondary: "SGK anlaşması kapsamına göre değişebilir.",
    },
    {
      feature: "Heyet Toplantı Sıklığı",
      primary: "Hastanenin kendi programına göre belirlenir.",
      secondary: "Hastanenin kendi programına göre belirlenir.",
    },
    {
      feature: "Kimler İçin Uygundur",
      primary: "Bulunduğu bölgede tam teşekküllü devlet hastanesi olan kullanıcılar için uygundur.",
      secondary: "Daha esnek randevu süreci arayan kullanıcılar için bir seçenek olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; hangi hastanenin size uygun olduğu konusunda merkezimizden bilgi alabilirsiniz.",
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
