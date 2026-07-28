// Segments (product tier guide) for the Oticon brand page
// (/markalar/oticon), directly under Comparison. Independent of the
// /markalar hub page's M1...M8 modules — its own data namespace.
//
// All series/model+tier pairings are the same real data already
// established in the Comparison table (Zeal, Intent, Real, Own SI, Opn S,
// Zircon, Ruby, Xceed, Play PX) — no invented tiers or specs. No price
// figures anywhere (COMPANY.md: prices are never published), so the
// eyebrow reads "Segment Rehberi", not "Fiyat Rehberi" like the old
// reference — this section never states or implies a price.
//
// Order is deliberate: premium first, decreasing prominence toward the
// bottom, driving the component's own progressively-quieter visual
// treatment (see OticonSegments.astro).

export interface OticonSegment {
  name: string;
  description: string;
  models: string[];
  tier: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface OticonSegmentsContent {
  badge: string;
  heading: string;
  intro: string;
  segments: OticonSegment[];
}

export const oticonSegments: OticonSegmentsContent = {
  badge: "SEGMENT REHBERİ",
  heading: "Oticon İşitme Cihazı Serileri ve Segmentleri",
  intro: "Oticon işitme cihazları farklı teknoloji seviyeleri, özellikler ve kullanıcı ihtiyaçlarına göre çeşitli segmentlerde sunulmaktadır.",
  segments: [
    {
      tier: 1,
      name: "Premium Segment",
      description: "Oticon'un en gelişmiş teknolojilerini içeren üst düzey modeller.",
      models: ["Zeal", "Intent 1", "Real 1"],
    },
    {
      tier: 2,
      name: "Üst Segment",
      description: "Yüksek performans ve gelişmiş konuşma anlama özellikleri.",
      models: ["Intent 2-3", "Real 2-3", "Opn S 1", "Own SI 1-2"],
    },
    {
      tier: 3,
      name: "Orta Segment",
      description: "Günlük kullanım için güçlü performans sunan modeller.",
      models: ["Zircon 1-2", "Opn S 2-3", "Ruby 1"],
    },
    {
      tier: 4,
      name: "Ekonomik Segment",
      description: "Temel ihtiyaçlara yönelik uygun maliyetli çözümler.",
      models: ["Ruby 2", "Jet PX"],
    },
    {
      tier: 5,
      name: "Power Segment",
      description: "İleri ve çok ileri derece işitme kayıpları için.",
      models: ["Xceed 1", "Xceed 2", "Xceed 3"],
    },
    {
      tier: 6,
      name: "Pediatrik Segment",
      description: "Çocuk kullanıcılar için geliştirilmiş özel modeller.",
      models: ["Play PX 1-2", "Opn Play 1-2", "Xceed Play 1-2"],
    },
  ],
};
