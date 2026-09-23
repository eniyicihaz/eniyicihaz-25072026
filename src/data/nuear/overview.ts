// Overview content for the NuEar brand page (/markalar/nuear) — the
// "Brand Overview" section right after the Hero. Renders through the
// shared, cross-brand BrandPageOverview component.
//
// Six quick-scan facts, not new information — each restates something
// established in intro.ts/technology.ts at a glance. Founding year and
// Starkey affiliation are general, well-known corporate facts (same
// confidence level as the other five brand pages' equivalents) —
// recommended for a final human check before publishing.

export interface NuEarOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface NuEarOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: NuEarOverviewCard[];
}

export const nuearOverview: NuEarOverviewContent = {
  badge: "NUEAR'A HIZLI BAKIŞ",
  heading: "NuEar'ı 30 Saniyede Tanıyın",
  intro: "NuEar hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "calendar", label: "Kuruluş", value: "1976" },
    { icon: "map-pin", label: "Menşei", value: "ABD (Starkey Grubu)" },
    { icon: "sparkles", label: "Marka Felsefesi", value: "Bağlantılı ve sağlık odaklı işitme deneyimi" },
    { icon: "cpu", label: "Öne Çıkan Teknoloji", value: "NXG AI ses işleme" },
    { icon: "bluetooth", label: "Bağlantı Özellikleri", value: "Hear Circle uygulaması + Bluetooth" },
    { icon: "users", label: "Hedef Kullanıcı", value: "Sağlığını ve aktivitesini işitmeyle birlikte takip etmek isteyenler" },
  ],
};
