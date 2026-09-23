// Overview content for the Unitron brand page (/markalar/unitron) — the
// "Brand Overview" section right after the Hero. Renders through the
// shared, cross-brand BrandPageOverview component.
//
// Kuruluş yılı, Kitchener/Ontario konumu ve Sonova Grubu ilişkisi
// bağımsız kaynaklarla doğrulanmış genel şirket bilgileridir — yayından
// önce son bir insan kontrolü önerilir.

export interface UnitronOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface UnitronOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: UnitronOverviewCard[];
}

export const unitronOverview: UnitronOverviewContent = {
  badge: "UNITRON'A HIZLI BAKIŞ",
  heading: "Unitron'u 30 Saniyede Tanıyın",
  intro: "Unitron hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "calendar", label: "Kuruluş", value: "1964 (Kitchener, Ontario)" },
    { icon: "map-pin", label: "Menşei", value: "Kanada (Sonova Grubu)" },
    { icon: "sparkles", label: "Marka Felsefesi", value: "Binaural ağ + Kanada-Alman mühendisliği" },
    { icon: "cpu", label: "Öne Çıkan Teknoloji", value: "AutoFocus 360 + Sonova PRISM Çipi" },
    { icon: "users", label: "Hedef Kullanıcı", value: "Konuşmayı takip etmeyi önemseyen kullanıcılar" },
    { icon: "bluetooth", label: "Öne Çıkan Aile", value: "Blu, Moxi Vivante, Stride" },
  ],
};
