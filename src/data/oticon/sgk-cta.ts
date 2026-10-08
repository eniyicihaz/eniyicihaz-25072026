// SGK guide link/conversion CTA for the Oticon brand page
// (/markalar/oticon), directly under the Video Guide and before the
// Final CTA. Independent of the /markalar hub page's M1...M8 modules —
// its own data namespace.
//
// This section's only job is directing the user to the dedicated SGK
// guide page — it is not meant to explain SGK in depth itself. Facts
// reused are the same real, already-established points from the old
// reference page (SGK support isn't brand-specific, a medical report is
// required, current payment criteria apply) — nothing new is claimed.
//
// guideHref points to the site's SGK pillar page (/sgk-isitme-cihazi-odemesi/).

export interface OticonSgkCtaContent {
  badge: string;
  heading: string;
  description: string;
  trustPoints: string[];
  cardBadge: string;
  cardTitle: string;
  cardItems: string[];
  ctaLabel: string;
  guideHref: string;
}

export const oticonSgkCta: OticonSgkCtaContent = {
  badge: "SGK DESTEĞİ",
  heading: "SGK Oticon İşitme Cihazlarını Karşılıyor Mu?",
  description:
    "SGK desteği cihaz markasına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan Oticon kullanıcıları da bu destekten yararlanabilir.",
  trustPoints: ["SGK desteği marka bazlı değildir", "Rapor şartı aranır", "Güncel ödeme kriterleri uygulanır"],
  cardBadge: "GÜNCEL",
  cardTitle: "SGK İşitme Cihazı Rehberi",
  cardItems: ["Başvuru süreci", "Gerekli evraklar", "Güncel ödeme tutarları", "Kimler yararlanabilir", "Sık sorulan sorular"],
  ctaLabel: "SGK Rehberini İncele",
  guideHref: "/sgk-isitme-cihazi-odemesi/",
};
