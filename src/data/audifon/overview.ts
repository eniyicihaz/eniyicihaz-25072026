// Overview content for the Audifon brand page (/markalar/audifon) — the
// "Brand Overview" section right after the Hero. Renders through the
// shared, cross-brand BrandPageOverview component.
//
// KIND-Grubu ilişkisi, Kölleda/Thüringen konumu ve Cosma Chip Technology
// bağımsız kaynaklarla doğrulanmış genel şirket bilgileridir — yayından
// önce son bir insan kontrolü önerilir.

export interface AudifonOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface AudifonOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: AudifonOverviewCard[];
}

export const audifonOverview: AudifonOverviewContent = {
  badge: "AUDIFON'A HIZLI BAKIŞ",
  heading: "Audifon'u 30 Saniyede Tanıyın",
  intro: "Audifon hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "map-pin", label: "Menşei", value: "Kölleda, Almanya (KIND-Grubu)" },
    { icon: "sparkles", label: "Marka Felsefesi", value: "Aile şirketi mirası + tinnitus'a özel teknoloji" },
    { icon: "cpu", label: "Öne Çıkan Teknoloji", value: "Cosma Chip Technology" },
    { icon: "users", label: "Uzmanlık Alanı", value: "Tinnitus çözümleri (Sueno Pro)" },
    { icon: "calendar", label: "Üretim", value: "Ar-Ge'den seri üretime %100 Almanya" },
    { icon: "bluetooth", label: "Hedef Kullanıcı", value: "Tinnitus şikayeti olan veya Alman mühendisliğine değer veren kullanıcılar" },
  ],
};
