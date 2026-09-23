// Overview content for the Coselgi brand page (/markalar/coselgi) — the
// "Brand Overview" section right after the Hero. Renders through the
// shared, cross-brand BrandPageOverview component.
//
// Widex bağlılığı ve Acoustic Environment Technology bağımsız kaynaklarla
// doğrulanmıştır. Kuruluş yılı tek bir kaynakta bulunmuştur ve tam
// güvenle doğrulanamamıştır — bu kart setinde kuruluş yılına yer
// verilmedi, yayından önce insan kontrolüyle eklenmesi önerilir.

export interface CoselgiOverviewCard {
  icon: "calendar" | "map-pin" | "sparkles" | "cpu" | "bluetooth" | "users";
  label: string;
  value: string;
}

export interface CoselgiOverviewContent {
  badge: string;
  heading: string;
  intro: string;
  cards: CoselgiOverviewCard[];
}

export const coselgiOverview: CoselgiOverviewContent = {
  badge: "COSELGI'YE HIZLI BAKIŞ",
  heading: "Coselgi'yi 30 Saniyede Tanıyın",
  intro: "Coselgi hakkında bilmeniz gereken temel bilgileri aşağıda özetledik.",
  cards: [
    { icon: "map-pin", label: "Bağlı Olduğu Marka", value: "Widex (Danimarka)" },
    { icon: "sparkles", label: "Marka Felsefesi", value: "Otomatik ortam uyumu + erişilebilirlik" },
    { icon: "cpu", label: "Öne Çıkan Teknoloji", value: "Acoustic Environment Technology" },
    { icon: "users", label: "Hedef Kullanıcı", value: "SGK'ya uygun, güvenilir bir çözüm arayanlar" },
    { icon: "calendar", label: "Dağıtım", value: "30 ülkede satış" },
    { icon: "bluetooth", label: "Ürün Aileleri", value: "Mojo, Effect" },
  ],
};
