// Overview content for the A&M brand page (/markalar/am) — the "Brand
// Overview" section right after the Hero. Renders through the shared,
// cross-brand BrandPageOverview component.
//
// WS Audiology grup ilişkisi ve Hindistan üretim merkezi, bağımsız
// kaynaklarla doğrulanmış genel şirket bilgileridir — yayından önce son
// bir insan kontrolü önerilir.

export interface AmOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface AmOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: AmOverviewCard[];
}

export const amOverview: AmOverviewContent = {
  badge: "A&M'E HIZLI BAKIŞ",
  heading: "A&M Hearing'i 30 Saniyede Tanıyın",
  intro: "A&M hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "map-pin", label: "Üretim Merkezi", value: "Bengaluru, Hindistan" },
    { icon: "sparkles", label: "Bağlı Olduğu Grup", value: "WS Audiology (Signia, Widex, Rexton)" },
    { icon: "cpu", label: "Öne Çıkan Seri", value: "XTM (P4 / P6 / P8 / P12 / A4)" },
    { icon: "users", label: "Hedef Kullanıcı", value: "Erişilebilir fiyatta güvenilir teknoloji arayanlar" },
    { icon: "calendar", label: "Konum", value: "Global grup üretim ağının bir parçası" },
    { icon: "bluetooth", label: "Yerleşim Seçenekleri", value: "Kulak arkası (BTE) ve kulak içi (ITE)" },
  ],
};
