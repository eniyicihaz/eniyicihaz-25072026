// Overview content for the Phonak brand page (/markalar/phonak) — the
// "Brand Overview" section right after the Hero (see PHONAK MASTER
// BLUEPRINT §3.1/§6.2). Renders through the shared, cross-brand
// BrandPageOverview component; every future brand page reuses the same
// component with its own six cards.
//
// Six quick-scan facts, not new information — each restates something
// already established in intro.ts/technology.ts/ecosystem.ts at a
// glance. Founding year and Sonova affiliation are general, well-known
// corporate facts (same confidence level as Oticon's own "1904,
// Danimarka" — see oticon/heritage.ts) and are flagged in the blueprint
// for a final human check before publishing.

export interface PhonakOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface PhonakOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: PhonakOverviewCard[];
}

export const phonakOverview: PhonakOverviewContent = {
  badge: "PHONAK'A HIZLI BAKIŞ",
  heading: "Phonak'ı 30 Saniyede Tanıyın",
  intro: "Phonak hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "calendar", label: "Kuruluş", value: "1947" },
    { icon: "map-pin", label: "Menşei", value: "İsviçre (Sonova Grubu)" },
    { icon: "sparkles", label: "Marka Felsefesi", value: "\"Life is on.\" — kesintisiz bağlantı ve aktif yaşam" },
    { icon: "cpu", label: "Öne Çıkan Teknoloji", value: "Konuşma odaklı ses işleme" },
    { icon: "bluetooth", label: "Bağlantı Özellikleri", value: "Evrensel Bluetooth (iPhone + Android)" },
    { icon: "users", label: "Hedef Kullanıcı", value: "Aktif, sosyal ve bağlantıda kalmak isteyen kullanıcılar" },
  ],
};
