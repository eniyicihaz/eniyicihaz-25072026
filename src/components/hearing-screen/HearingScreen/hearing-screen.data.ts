// Content + tuning data for the HearingScreen organism. Kept out of the
// .astro/.ts component logic per PROJECT_ARCHITECTURE.md §4 ("Veri
// Component İçinde Yazılmaz"). Every user-facing string here has already
// been screened against PRINCIPLES.md §5 (no diagnostic/guarantee
// language) and the implementation plan's locked rules (§5.1, §6, §9).
import type { Ear, FrequencyHz, OutcomeBand, OverallProfileKey } from "./hearing-screen.types";

export const FREQUENCIES: FrequencyHz[] = [500, 1000, 2000, 4000, 8000];

export const EAR_ORDER: Ear[] = ["right", "left"];

export const EAR_LABEL: Record<Ear, string> = {
  right: "Sağ Kulak",
  left: "Sol Kulak",
};

/**
 * Adaptive engine tuning. All levels are RELATIVE step indices (0–9), never
 * dB/dB HL — see plan §4/§5/§6. `comfortStep` is the ceiling the algorithm
 * may never exceed (the user's own comfort-tone level, fixed in §4).
 */
export const engineConfig = {
  frequencies: FREQUENCIES,
  earOrder: EAR_ORDER,
  comfortStep: 9,
  startStep: 6,
  // Per-frequency starting step override — 4000/8000 Hz start a notch
  // closer to the comfort ceiling since they naturally need more relative
  // level to be audible (headphone/speaker high-end rolloff + normal
  // age-related sensitivity), reducing wasted trials walking up from a
  // uniformly-low start on every high-frequency run. Falls back to
  // `startStep` for any frequency not listed here.
  startStepByFrequency: {
    500: 6,
    1000: 6,
    2000: 6,
    4000: 7,
    8000: 7,
  } as Record<FrequencyHz, number>,
  minStep: 0,
  reversalsTarget: 3,
  maxTrialsPerFrequency: 8,
  // Classic coarse-then-fine bracketing: bigger steps before the first
  // reversal (find the crossing point fast), then single-step refinement
  // — makes the 3-reversal/8-trial budget realistically reachable even
  // when the true crossing is far from `startStep`.
  coarseStepSize: 2,
  fineStepSize: 1,
  catchTrialRate: 0.15,
  toneDurationMs: 1200,
  fadeMs: 20,
  interTrialSilenceMs: 400,
  autoAdvanceTimeoutMs: 4000,
  // Linear gain at comfortStep=9; each step down multiplies by levelRatio.
  comfortGain: 0.5,
  levelRatio: 0.72,
  // Absolute ceiling no trial's gain may ever exceed, regardless of step
  // or comfortGain (plan §4/§6, item 2 of the locked safety checklist).
  masterSafetyGain: 0.6,
  referenceFrequency: 1000 as FrequencyHz,
  // Outcome classification — LOW finalStep means the tone was still heard
  // even very quiet (relative to the user's own comfort level), which is
  // GOOD sensitivity; HIGH finalStep means it was only detected near the
  // comfort ceiling, i.e. poor sensitivity at that frequency. (This
  // direction was previously inverted — see classify() in
  // HearingScreen.astro — a real bug that made "always heard" runs
  // classify as "missed" and vice versa.)
  comfortableMaxStep: 3,
  strainedMaxStep: 6,
};

/** §5.1 — the ONLY three sentences a user ever sees for a frequency outcome. */
export const NEUTRAL_OUTCOME_COPY: Record<OutcomeBand, string> = {
  comfortable: "Bu sesi rahat algıladınız.",
  strained: "Bu seste biraz zorlandınız.",
  missed: "Bu sesi algılamakta zorlandınız.",
};

export const persistentDisclaimer =
  "Bu bir online tarama / ön değerlendirmedir, klinik işitme testi değildir. Ses seviyeleri dB olarak ölçülmez; yalnızca göreli bir karşılaştırma yapılır. Cihazınızın sesini rahat bir düzeyde tutun.";

export const screenIntroContent = {
  eyebrow: "ADIM 1 · HAZIRLIK",
  heading: "Taramaya Başlamadan Önce",
  bullets: [
    "Sessiz bir ortamda, kulaklığınızı (kablolu veya Bluetooth) takarak devam edin.",
    "Bu, bir tarama algoritmasıdır — klinik bir işitme eşiği testi değildir.",
    "Ortalama süre 3–4 dakikadır; sağ ve sol kulak ayrı ayrı test edilir.",
    "Tamamen ücretsizdir; isim, telefon veya e-posta gibi hiçbir bilgi istenmez.",
    "iPhone kullanıyorsanız yan taraftaki sessiz anahtarının kapalı olduğundan emin olun.",
  ],
  startLabel: "Başlat",
  disclaimer: persistentDisclaimer,
};

/** "Önemli Bilgilendirme" panel — shown right before the Start button. */
export const preTestNoticeContent = {
  heading: "Önemli Bilgilendirme",
  paragraphs: [
    "Bu çevrim içi işitme taraması, bilgisayar veya mobil cihazınız ve kullandığınız kulaklık üzerinden yapılan, ön değerlendirme amaçlı bir taramadır.",
    "Kullanılan cihaz ve kulaklıkların kalibrasyonu yapılamadığı için sonuçlar klinik işitme testi veya gerçek dB HL ölçümü olarak değerlendirilmemelidir.",
    "Sonuç ekranındaki grafik, tarama sırasında verdiğiniz yanıtları görsel bir profil olarak gösterir.",
    "İşitmenizle ilgili kesin değerlendirme için profesyonel odyolojik test gereklidir.",
  ],
};

export const headphoneCheckContent = {
  eyebrow: "ADIM 2 · KULAKLIK KONTROLÜ",
  comfortHeading: "Rahat Ses Seviyenizi Ayarlayın",
  comfortDescription:
    "Cihazınızın ses düzeyini rahatça duyabileceğiniz, sizi hiç rahatsız etmeyen orta bir seviyeye getirin. Aşağıdaki butona basınca bu seviyede bir referans tonu duyacaksınız.",
  playComfortLabel: "Referans Tonunu Çal",
  channelHeading: "Şimdi Kulak Kontrolü Yapalım",
  channelDescription: "Aşağıdaki butona basınca bir ses duyacaksınız. Bu ses hangi kulağınızdan geldi?",
  playChannelLabel: "Kontrol Tonunu Çal",
  channelAnswers: [
    { value: "left", label: "Sol Kulaktan" },
    { value: "right", label: "Sağ Kulaktan" },
    { value: "both", label: "İkisinden Birden" },
    { value: "unsure", label: "Emin Değilim" },
  ] as const,
  continueLabel: "Teste Başla",
};

export const testTrialContent = {
  listenPrompt: "Sesi dikkatlice dinleyin.",
  question: "Sesi duydunuz mu?",
  helper: "Bir ses duyduysanız Duydum, duymadıysanız Duymadım butonuna basın.",
  heardLabel: "Duydum",
  notHeardLabel: "Duymadım",
  stopLabel: "Sesi Durdur",
  footnote: "Bu bir tarama algoritmasıdır, klinik eşik testi değildir.",
  pausedHeading: "Tarama Duraklatıldı",
  resumeLabel: "Devam Et",
};

export const resultProfileContent = {
  heading: "Online Tarama Sonucunuz",
  subheading: "Tarama sırasında verdiğiniz yanıtların özeti",
  chartTitle: "Tarama Profili",
  chartCaption:
    "Bu grafik, çevrim içi tarama sırasında verdiğiniz yanıtların görsel profilidir. Klinik odyogram veya dB HL ölçümü değildir.",
  // Row order top→bottom mirrors a real audiogram's "quieter/better on top"
  // convention — familiar/professional-reading without ever being a
  // numeric/continuous (and therefore falsely precise) axis.
  chartRowLabels: {
    comfortable: "Rahat Algılama",
    strained: "Kısmi Zorlanma",
    missed: "Belirgin Zorlanma",
  } as Record<OutcomeBand, string>,
  chartFrequencyLabels: {
    500: "500",
    1000: "1K",
    2000: "2K",
    4000: "4K",
    8000: "8K",
  } as Record<FrequencyHz, string>,
  chartLegend: {
    right: "Sağ Kulak",
    left: "Sol Kulak",
  },
  detailsLabel: "Metinsel Özet",
  intro: "Aşağıda, taramanız sırasında kulak ve frekans bazında verdiğiniz yanıtların nötr bir özeti yer alıyor.",
  channelWarning:
    "Kulaklığınızın sol/sağ kanal ayrımı bu tarama sırasında doğrulanamadı; sonuçları buna göre değerlendirin.",
  guessingWarning:
    "Bazı yanıtlarınız, ses hiç çalınmadığı anlarda da \"Duydum\" şeklindeydi — bu, sonucun güvenilirliğini azaltabilir.",
  disclaimer: persistentDisclaimer,
  restartLabel: "Taramayı Yeniden Başlat",
};

/**
 * Overall, whole-screening profile — one of three fixed, non-diagnostic
 * summaries chosen purely from how many of the 10 (ear x frequency)
 * outcomes landed in "missed"/"strained" (plan §4.3). Never a clinical
 * classification — no "işitme kaybı"/"normal işitme"/degree language.
 */
export const overallProfileThresholds = {
  comfortableMaxStrained: 1, // missedCount===0 && strainedCount<=1 → "comfortable"
  someStrainMaxMissed: 2, // missedCount 1–2 → "some-strain"; missedCount>=3 → "multi-strain"
};

export const overallProfileContent: Record<
  OverallProfileKey,
  { title: string; body: string; ctaLine: string | null }
> = {
  comfortable: {
    title: "Tarama sırasında sesleri genel olarak rahat algıladınız.",
    body: "Çevrim içi taramada sesleri algılama konusunda belirgin bir zorlanma görülmedi.",
    ctaLine: null,
  },
  "some-strain": {
    title: "Bazı sesleri algılamakta zorlandınız.",
    body: "Tarama sırasında bazı frekanslarda sesleri algılamakta daha fazla zorlandığınız görüldü.",
    ctaLine: "Profesyonel bir işitme değerlendirmesi için Darıca'daki merkezimizde görüşmenizde fayda var.",
  },
  "multi-strain": {
    title: "Tarama sırasında birden fazla ses bölgesinde zorlanma görüldü.",
    body: "Bu çevrim içi tarama kesin bir tanı koymaz. İşitmenizin daha ayrıntılı değerlendirilmesi için profesyonel bir işitme testi yaptırmanızda fayda var.",
    ctaLine: "Profesyonel bir işitme değerlendirmesi için Darıca'daki merkezimizde görüşmenizde fayda var.",
  },
};
