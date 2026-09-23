// Overview content for the Rexton brand page (/markalar/rexton) — the
// "Brand Overview" section right after the Hero. Renders through the
// shared, cross-brand BrandPageOverview component.
//
// Kuruluş yılı, Siemens/Sivantos geçmişi ve WS Audiology grup ilişkisi
// bağımsız kaynaklarla doğrulanmış genel şirket bilgileridir — yayından
// önce son bir insan kontrolü önerilir.

export interface RextonOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface RextonOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: RextonOverviewCard[];
}

export const rextonOverview: RextonOverviewContent = {
  badge: "REXTON'A HIZLI BAKIŞ",
  heading: "Rexton'ı 30 Saniyede Tanıyın",
  intro: "Rexton hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "calendar", label: "Kuruluş", value: "1955" },
    { icon: "map-pin", label: "Menşei", value: "Almanya (WS Audiology)" },
    { icon: "sparkles", label: "Marka Felsefesi", value: "Güvenilir mühendislik + erişilebilir bağlantı" },
    { icon: "cpu", label: "Öne Çıkan Seri", value: "Reach, BiCore, MCore" },
    { icon: "users", label: "Hedef Kullanıcı", value: "Kanıtlanmış bir markadan güvenilir teknoloji arayanlar" },
    { icon: "bluetooth", label: "Bağlantı", value: "Reach ailesiyle güncel bağlantı özellikleri" },
  ],
};
