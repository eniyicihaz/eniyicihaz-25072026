// Overview content for the Bernafon brand page (/markalar/bernafon) — the
// "Brand Overview" section right after the Hero. Renders through the
// shared, cross-brand BrandPageOverview component.
//
// Six quick-scan facts, not new information — each restates something
// established in intro.ts/technology.ts at a glance. Founding year and
// Demant Group affiliation are general, well-known corporate facts (same
// confidence level as the other six brand pages' equivalents) —
// recommended for a final human check before publishing.

export interface BernafonOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface BernafonOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: BernafonOverviewCard[];
}

export const bernafonOverview: BernafonOverviewContent = {
  badge: "BERNAFON'A HIZLI BAKIŞ",
  heading: "Bernafon'u 30 Saniyede Tanıyın",
  intro: "Bernafon hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "calendar", label: "Kuruluş", value: "1946" },
    { icon: "map-pin", label: "Menşei", value: "İsviçre (Demant Grubu)" },
    { icon: "sparkles", label: "Marka Felsefesi", value: "Hareketi algılayan, konuşma anlaşılırlığı odaklı işitme" },
    { icon: "cpu", label: "Öne Çıkan Teknoloji", value: "Smart Sensor + Machine Learning 2.0" },
    { icon: "bluetooth", label: "Bağlantı Özellikleri", value: "Easy Control-A uygulaması + Bluetooth" },
    { icon: "users", label: "Hedef Kullanıcı", value: "Konuşma anlaşılırlığını ve otomatik uyumu önemseyen kullanıcılar" },
  ],
};
