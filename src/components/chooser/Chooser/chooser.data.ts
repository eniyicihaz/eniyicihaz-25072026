import type { ChooserContent } from "./chooser.types";

// Scoring: each option carries per-type `weights`; the client script sums
// them, ranks by score (ties keep CategoryExplorer's own order) and shows
// up to 3 types scoring at least half of the top one — a preference
// ranking, never one forced answer.
// Locked content — docs/CHOOSER_SPECIFICATION.md §2. This is a preference
// guide, NOT a diagnosis (PRINCIPLES §5/§11 — same ethical discipline as
// SoundRoom, see docs/SOUND_ROOM_SPECIFICATION.md §2). Every option's
// `weights` keys are real /isitme-cihazlari/* hrefs (reused verbatim from
// category-explorer.data.ts's own 7 URLs — no new URL invented); an empty
// object is a neutral answer that pushes no type. The result screen never resolves
// to a single forced answer — Chooser.astro always shows the fallback
// "emin değilseniz" exit alongside any recommendation.
export const chooser: ChooserContent = {
  eyebrow: "Size Özel",
  heading: "Size Hangi Çözüm Uygun?",
  intro: "Üç kısa soru, size uygun olabilecek cihaz tipini göstersin.",
  disclaimer: "Bu sonuç bir tercih önerisidir, tıbbi bir değerlendirme değildir. Kesin öneri için ücretsiz işitme testimize davetlisiniz.",
  questions: [
    {
      id: "q1",
      question: "Hangi ortamda daha çok zorlanıyorsunuz?",
      options: [
        { label: "Sessiz ortamda bile bazı sesleri kaçırıyorum", weights: { "/isitme-cihazlari/kulak-arkasi-bte/": 2, "/isitme-cihazlari/kulak-ici-ite/": 1 } },
        { label: "Kalabalık / gürültülü ortamlarda zorlanıyorum", weights: { "/isitme-cihazlari/bluetooth-ozellikli/": 2, "/isitme-cihazlari/kulak-arkasi-bte/": 1 } },
        { label: "Telefon veya TV'de netlik istiyorum", weights: { "/isitme-cihazlari/bluetooth-ozellikli/": 3 } },
      ],
    },
    {
      id: "q2",
      question: "Görünürlük sizin için ne kadar önemli?",
      options: [
        { label: "Fark edilmesin isterim", weights: { "/isitme-cihazlari/gorunmez-cic/": 3, "/isitme-cihazlari/kulak-ici-ite/": 2 } },
        { label: "Önemli değil, kullanım kolaylığı önceliğim", weights: { "/isitme-cihazlari/kulak-arkasi-bte/": 3, "/isitme-cihazlari/kulak-ici-ite/": 1 } },
      ],
    },
    {
      id: "q3",
      question: "Şarj mı, pil mi tercih edersiniz?",
      options: [
        { label: "Her gün şarj etmek sorun değil", weights: { "/isitme-cihazlari/sarj-edilebilir/": 3 } },
        { label: "Pil değiştirmek daha pratik geliyor / fark etmez", weights: {} },
      ],
    },
  ],
  fallback: {
    label: "Kararsız mı kaldınız?",
    sentence: "Kesin öneri için ücretsiz işitme testimizde birlikte netleştirebiliriz.",
    cta: "Bizimle iletişime geçin",
    href: "/iletisim/",
  },
  restartLabel: "Soruları tekrar yanıtlayın",
};
