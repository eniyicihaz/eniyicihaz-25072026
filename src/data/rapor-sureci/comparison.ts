// "SGK'nın Kabul Ettiği Rapor ile Özel Hastane Raporu" comparison table
// for the /sgk/rapor-sureci page. Renders through the existing,
// already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated.
//
// Rewritten after the owner's confirmation that, in the centre's real
// MEDULA process, hearing-aid reports obtained from PRIVATE hospitals are
// NOT accepted by SGK. The previous "Devlet Hastanesi vs Özel Hastane
// (SGK Anlaşmalı)" table presented the private route as a valid option
// (validity "with an SGK agreement", "more flexible appointments", "an
// option for some users") and was removed in full.
//
// Rules for this table: only the owner-confirmed fact and its practical
// consequence; NO claim about which public hospitals/clinics may issue
// the report (not source-verified here); NO statutory-obligation wording
// beyond what the owner confirmed; no durations or fees.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const raporSureciComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "SGK'nın Kabul Ettiği Rapor ile Özel Hastane Raporu",
  intro: "Raporun nereden alındığı, SGK işleminde kullanılıp kullanılamayacağını etkiler. Yanlış yönlenmemeniz için farkı aşağıdaki tabloda özetledik.",
  primaryLabel: "SGK'nın Kabul Ettiği Rapor",
  secondaryLabel: "Özel Hastane Raporu",
  rows: [
    {
      feature: "SGK Ödemesinde Kullanım",
      primary: "SGK'nın kabul ettiği rapor ve MEDULA işlem sürecine uygun olması gerekir.",
      secondary: "SGK tarafından kabul edilmez.",
    },
    {
      feature: "Avrasya İşitme Uygulaması",
      primary: "Rapor ve reçete, MEDULA üzerinden yürütülen işlem sürecinde kullanılır.",
      secondary: "Avrasya İşitme'nin MEDULA üzerinden yürüttüğü işlem sürecinde özel hastanelerden alınan raporlar kabul edilmemektedir.",
    },
    {
      feature: "Başvurmadan Önce",
      primary: "Raporu nereden alacağınız konusunda merkezimizden bilgi alabilirsiniz.",
      secondary: "Özel hastaneye başvurmadan önce merkezimizle görüşmeniz, kabul edilmeyen bir rapor için gereksiz işlem ve zaman kaybını önler.",
    },
  ],
  note: "Bu tablo, Avrasya İşitme'nin MEDULA üzerinden yürüttüğü işlem sürecindeki uygulamayı özetler; mevzuat metni değildir. Hangi kuruluşa başvuracağınız konusunda merkezimizden bilgi alabilirsiniz.",
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
