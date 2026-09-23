// Overview content for the Philips Hearing brand page
// (/markalar/philips-hearing) — the "Brand Overview" section right after
// the Hero. Renders through the shared, cross-brand BrandPageOverview
// component.
//
// Demant lisans anlaşması ve Velox-S platformu bağımsız kaynaklarla
// doğrulanmış genel şirket bilgileridir — yayından önce son bir insan
// kontrolü önerilir.

export interface PhilipsHearingOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface PhilipsHearingOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: PhilipsHearingOverviewCard[];
}

export const philipsHearingOverview: PhilipsHearingOverviewContent = {
  badge: "PHILIPS HEARLINK'E HIZLI BAKIŞ",
  heading: "Philips HearLink'i 30 Saniyede Tanıyın",
  intro: "Philips HearLink hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "sparkles", label: "Marka Felsefesi", value: "Tanıdık marka + anlaşılır kademelendirme" },
    { icon: "cpu", label: "Öne Çıkan Teknoloji", value: "Velox-S Platformu (Demant lisansıyla)" },
    { icon: "map-pin", label: "Üretim İlişkisi", value: "Demant ile lisans anlaşması" },
    { icon: "users", label: "Hedef Kullanıcı", value: "İlk kez cihaz alacak veya tanıdık bir marka arayanlar" },
    { icon: "bluetooth", label: "Kademe Sistemi", value: "HearLink 50 / 40 / 30" },
    { icon: "calendar", label: "Yerleşim Seçenekleri", value: "RIC, BTE, ITC, CIC, IIC" },
  ],
};
