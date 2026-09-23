// Overview content for the ReSound brand page (/markalar/resound) — the
// "Brand Overview" section right after the Hero. Renders through the
// shared, cross-brand BrandPageOverview component.
//
// Six quick-scan facts, not new information — each restates something
// established in intro.ts/technology.ts at a glance. Founding year and GN
// Group affiliation are general, well-known corporate facts (same
// confidence level as the other four brand pages' equivalents) —
// recommended for a final human check before publishing.

export interface ResoundOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface ResoundOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: ResoundOverviewCard[];
}

export const resoundOverview: ResoundOverviewContent = {
  badge: "RESOUND'A HIZLI BAKIŞ",
  heading: "ReSound'u 30 Saniyede Tanıyın",
  intro: "ReSound hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "calendar", label: "Kuruluş", value: "1943 (Danavox olarak)" },
    { icon: "map-pin", label: "Menşei", value: "Danimarka (GN Grubu)" },
    { icon: "sparkles", label: "Marka Felsefesi", value: "Akıllı bağlantı ve doğal mekansal işitme" },
    { icon: "cpu", label: "Öne Çıkan Teknoloji", value: "M&RIE (kulak kanalı mikrofonu)" },
    { icon: "bluetooth", label: "Bağlantı Özellikleri", value: "Auracast (Bluetooth LE Audio) + Smart 3D uygulaması" },
    { icon: "users", label: "Hedef Kullanıcı", value: "Bağlantıya ve doğal ses deneyimine önem veren kullanıcılar" },
  ],
};
