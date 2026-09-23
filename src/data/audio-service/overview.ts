// Overview content for the Audio Service brand page
// (/markalar/audio-service) — the "Brand Overview" section right after
// the Hero. Renders through the shared, cross-brand BrandPageOverview
// component.
//
// Kuruluş yılı, Löhne/Almanya konumu ve WS Audiology grup ilişkisi
// bağımsız kaynaklarla doğrulanmış genel şirket bilgileridir — yayından
// önce son bir insan kontrolü önerilir.

export interface AudioServiceOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface AudioServiceOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: AudioServiceOverviewCard[];
}

export const audioServiceOverview: AudioServiceOverviewContent = {
  badge: "AUDIO SERVICE'E HIZLI BAKIŞ",
  heading: "Audio Service'i 30 Saniyede Tanıyın",
  intro: "Audio Service hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "calendar", label: "Kuruluş", value: "1977" },
    { icon: "map-pin", label: "Menşei", value: "Löhne, Almanya (WS Audiology)" },
    { icon: "sparkles", label: "Marka Felsefesi", value: "Kulak içi (ITE) uzmanlığı" },
    { icon: "cpu", label: "Öne Çıkan Seri", value: "Mood, Quix, Stiline" },
    { icon: "users", label: "Hedef Kullanıcı", value: "Kulak içi estetiği önceliklendirenler" },
    { icon: "bluetooth", label: "Dağıtım", value: "30'dan fazla ülkede satış" },
  ],
};
