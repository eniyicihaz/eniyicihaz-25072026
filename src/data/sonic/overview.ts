// Overview content for the Sonic brand page (/markalar/sonic) — the
// "Brand Overview" section right after the Hero. Renders through the
// shared, cross-brand BrandPageOverview component.
//
// Kuruluş yılı, Salt Lake City kökeni ve Demant Grubu ilişkisi bağımsız
// kaynaklarla doğrulanmış genel şirket bilgileridir — yayından önce son
// bir insan kontrolü önerilir.

export interface SonicOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface SonicOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: SonicOverviewCard[];
}

export const sonicOverview: SonicOverviewContent = {
  badge: "SONIC'E HIZLI BAKIŞ",
  heading: "Sonic'i 30 Saniyede Tanıyın",
  intro: "Sonic hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "calendar", label: "Kuruluş", value: "1998" },
    { icon: "map-pin", label: "Menşei", value: "Salt Lake City, ABD (Demant Grubu)" },
    { icon: "sparkles", label: "Marka Sloganı", value: "\"Everyday Sounds Better\"" },
    { icon: "cpu", label: "Öne Çıkan Teknoloji", value: "SoundDNA Platformu" },
    { icon: "users", label: "Hedef Kullanıcı", value: "Amerikan mühendisliğinden güvenilir teknoloji arayanlar" },
    { icon: "bluetooth", label: "Öne Çıkan Aile", value: "Enchant, Radiant" },
  ],
};
