// Overview content for the Vista brand page (/markalar/vista) — the
// "Brand Overview" section right after the Hero. Renders through the
// shared, cross-brand BrandPageOverview component.
//
// Sonova Grubu ilişkisi ve Soundsuite OS teknolojisi bağımsız kaynaklarla
// doğrulanmış genel şirket bilgileridir — yayından önce son bir insan
// kontrolü önerilir.

export interface VistaOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface VistaOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: VistaOverviewCard[];
}

export const vistaOverview: VistaOverviewContent = {
  badge: "VISTA'YA HIZLI BAKIŞ",
  heading: "Vista'yı 30 Saniyede Tanıyın",
  intro: "Vista hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "map-pin", label: "Bağlı Olduğu Grup", value: "Sonova (İsviçre)" },
    { icon: "sparkles", label: "Marka Felsefesi", value: "Sonova teknolojisi + erişilebilir fiyat" },
    { icon: "cpu", label: "Öne Çıkan Teknoloji", value: "Soundsuite OS" },
    { icon: "users", label: "Hedef Kullanıcı", value: "Bütçe önceliği olan, güvenilir bir grup arayanlar" },
    { icon: "bluetooth", label: "Öne Çıkan Kademeler", value: "Vista V, Vista B" },
    { icon: "calendar", label: "Yerleşim Seçenekleri", value: "Bluetooth'lu, kulak arkası, kulak içi (görünmez)" },
  ],
};
