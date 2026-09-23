// Overview content for the Widex brand page (/markalar/widex) — the
// "Brand Overview" section right after the Hero. Renders through the
// shared, cross-brand BrandPageOverview component.
//
// Six quick-scan facts, not new information — each restates something
// established in intro.ts/technology.ts at a glance. Founding year and WS
// Audiology affiliation are general, well-known corporate facts (same
// confidence level as Oticon's "1904", Phonak's "1947" and Signia's
// "2015-2016") — recommended for a final human check before publishing.

export interface WidexOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface WidexOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: WidexOverviewCard[];
}

export const widexOverview: WidexOverviewContent = {
  badge: "WIDEX'E HIZLI BAKIŞ",
  heading: "Widex'i 30 Saniyede Tanıyın",
  intro: "Widex hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "calendar", label: "Kuruluş", value: "1956" },
    { icon: "map-pin", label: "Menşei", value: "Danimarka (WS Audiology Grubu)" },
    { icon: "sparkles", label: "Marka Felsefesi", value: "\"Less is more in natural hearing\" — doğal ses deneyimi" },
    { icon: "cpu", label: "Öne Çıkan Teknoloji", value: "PureSound™ (ZeroDelay ses işleme)" },
    { icon: "bluetooth", label: "Bağlantı Özellikleri", value: "Bluetooth + Widex Moment Uygulaması" },
    { icon: "users", label: "Hedef Kullanıcı", value: "Doğal ses kalitesine ve düşük gecikmeye önem verenler" },
  ],
};
