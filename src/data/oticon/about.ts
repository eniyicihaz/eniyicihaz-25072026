// M2 (About) content for the Oticon brand page (/markalar/oticon), directly
// under the Hero. Independent of the /markalar hub page's M1...M8 modules —
// its own data namespace, only ever holding this one brand's content.
//
// Purpose is not to sell — it's to explain Oticon's philosophy and general
// technology approach. Content stays at the level of real, publicly known
// facts about Oticon (Danish origin, the BrainHearing philosophy already
// introduced in the Hero, its real model families) — no invented specs, no
// performance claims, no marketing language.

export interface OticonAboutContent {
  badge: string;
  heading: string;
  paragraphs: string[];
}

export const oticonAbout: OticonAboutContent = {
  badge: "OTICON MARKASI",
  heading: "Oticon İşitme Cihazları Hakkında",
  paragraphs: [
    "Oticon, işitme cihazı teknolojisine yaklaşımını BrainHearing® felsefesi üzerine kurar. Bu yaklaşım, sesi yalnızca yükseltmek yerine, beynin sesi doğal şekilde işleme sürecini desteklemeyi amaçlar.",
    "Danimarka merkezli marka, uzun yıllara dayanan işitme teknolojisi deneyimini, günlük yaşamda daha doğal ve konforlu bir duyma deneyimi sunmaya yönlendirir.",
    "Intent, Real, Own SI ve Zeal gibi farklı model ailelerinde bu felsefe, kullanıcının yaşam tarzına ve işitme ihtiyacına göre şekillenir.",
  ],
};
