// M4 (Heritage / About) content for the Oticon brand page
// (/markalar/oticon), directly under Technologies (M3). Independent of the
// /markalar hub page's M1...M8 modules — its own data namespace, only ever
// holding this one brand's content.
//
// Left: editorial copy, deliberately not repeating the model list already
// covered in Hero/About (M2) a third time — just origin + BrainHearing.
// Right: a quiet editorial stat list (no cards, no KPI boxes), reusing only
// real, publicly known facts about Oticon (founded 1904, Danish, the
// BrainHearing® trademark already established elsewhere on this page) —
// "millions of users" / "global brand" stay deliberately unquantified,
// since no specific verified figure exists to cite.

export interface OticonHeritageStat {
  value: string;
  label: string;
}

export interface OticonHeritageContent {
  badge: string;
  heading: string;
  paragraphs: string[];
  stats: OticonHeritageStat[];
}

export const oticonHeritage: OticonHeritageContent = {
  badge: "OTICON HAKKINDA",
  heading: "100 Yılı Aşkın İşitme Teknolojisi Deneyimi",
  paragraphs: [
    "Oticon, Danimarka merkezli, dünyanın en köklü işitme cihazı üreticilerinden biridir. 1904 yılında kurulan marka, bugün pek çok ülkede milyonlarca kullanıcı tarafından tercih edilmektedir.",
    "Marka, yaklaşık yüz yıllık deneyimini, sesi yalnızca yükseltmek yerine beynin sesi doğal şekilde işleme sürecini destekleyen BrainHearing® yaklaşımıyla birleştirir.",
  ],
  stats: [
    { value: "1904", label: "Kuruluş Yılı" },
    { value: "100+", label: "Yıl Deneyim" },
    { value: "Danimarka", label: "Global Marka Kökeni" },
    { value: "Milyonlarca", label: "Kullanıcı" },
    { value: "BrainHearing®", label: "Marka Felsefesi" },
  ],
};
