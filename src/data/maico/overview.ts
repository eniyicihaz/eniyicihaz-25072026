// Overview content for the Maico brand page (/markalar/maico) — the
// "Brand Overview" section right after the Hero. Renders through the
// shared, cross-brand BrandPageOverview component.
//
// Kuruluş yılı, Demant Grubu ilişkisi ve Berlin konumu bağımsız
// kaynaklarla doğrulanmış genel şirket bilgileridir — yayından önce son
// bir insan kontrolü önerilir.

export interface MaicoOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface MaicoOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: MaicoOverviewCard[];
}

export const maicoOverview: MaicoOverviewContent = {
  badge: "MAICO'YA HIZLI BAKIŞ",
  heading: "MAICO'yu 30 Saniyede Tanıyın",
  intro: "MAICO hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "calendar", label: "Kuruluş", value: "1937" },
    { icon: "map-pin", label: "Menşei", value: "Minneapolis, ABD → Berlin, Almanya" },
    { icon: "sparkles", label: "Marka Felsefesi", value: "Odyolojik ölçüm bilimi mirası" },
    { icon: "cpu", label: "Bağlı Olduğu Grup", value: "Demant Grubu (1995'ten bu yana)" },
    { icon: "users", label: "Hedef Kullanıcı", value: "Köklü bir markadan güvenilir teknoloji arayanlar" },
    { icon: "bluetooth", label: "Yerleşim Seçenekleri", value: "Bluetooth'lu, kulak arkası ve kulak içi" },
  ],
};
