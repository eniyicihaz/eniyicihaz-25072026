// Overview content for the Signia brand page (/markalar/signia) — the
// "Brand Overview" section right after the Hero (see SIGNIA MASTER
// BLUEPRINT §9.2). Renders through the shared, cross-brand
// BrandPageOverview component.
//
// Six quick-scan facts, not new information — each restates something
// established in intro.ts/technology.ts/ecosystem.ts at a glance.
// Founding year (as "Signia" brand) and WS Audiology affiliation are
// general, well-known corporate facts (same confidence level as Oticon's
// "1904, Danimarka" and Phonak's "1947, İsviçre") and are flagged in the
// blueprint for a final human check before publishing.

export interface SignaOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface SignaOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: SignaOverviewCard[];
}

export const signiaOverview: SignaOverviewContent = {
  badge: "SIGNIA'YA HIZLI BAKIŞ",
  heading: "Signia'yı 30 Saniyede Tanıyın",
  intro: "Signia hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "calendar", label: "Kuruluş", value: "2015-2016 (Signia markası olarak)" },
    { icon: "map-pin", label: "Menşei", value: "Almanya (WS Audiology Grubu)" },
    { icon: "sparkles", label: "Marka Felsefesi", value: "\"Life sounds brilliant.\" — yapay zekâ destekli, doğal konuşma deneyimi" },
    { icon: "cpu", label: "Öne Çıkan Teknoloji", value: "Own Voice Processing (OVP)" },
    { icon: "bluetooth", label: "Bağlantı Özellikleri", value: "Entegre yapay zekâ çipi + Bluetooth" },
    { icon: "users", label: "Hedef Kullanıcı", value: "Teknolojiye ve tasarıma önem veren kullanıcılar" },
  ],
};
