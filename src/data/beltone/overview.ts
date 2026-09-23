// Overview content for the Beltone brand page (/markalar/beltone) — the
// "Brand Overview" section right after the Hero. Renders through the
// shared, cross-brand BrandPageOverview component.
//
// Kuruluş yılı, Chicago kökeni ve GN Grubu ilişkisi bağımsız kaynaklarla
// doğrulanmış genel şirket bilgileridir — yayından önce son bir insan
// kontrolü önerilir.

export interface BeltoneOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface BeltoneOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: BeltoneOverviewCard[];
}

export const beltoneOverview: BeltoneOverviewContent = {
  badge: "BELTONE'A HIZLI BAKIŞ",
  heading: "Beltone'u 30 Saniyede Tanıyın",
  intro: "Beltone hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "calendar", label: "Kuruluş", value: "1940" },
    { icon: "map-pin", label: "Menşei", value: "Chicago, ABD (GN Grubu)" },
    { icon: "sparkles", label: "Marka Felsefesi", value: "Amerikan mirası + yapay zekâ destekli işleme" },
    { icon: "cpu", label: "Öne Çıkan Teknoloji", value: "Envision DNN İşleme (2025)" },
    { icon: "bluetooth", label: "Bağlantı", value: "Bluetooth LE Audio / Auracast (Boost Max S)" },
    { icon: "users", label: "Hedef Kullanıcı", value: "Güncel teknolojiyi köklü bir markadan arayanlar" },
  ],
};
