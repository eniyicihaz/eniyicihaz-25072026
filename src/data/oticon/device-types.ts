// Device types (form-factor guide) for the Oticon brand page
// (/markalar/oticon), directly under Segments. Independent of the
// /markalar hub page's M1...M8 modules — its own data namespace.
//
// This is a classification, not a hierarchy: six device categories a
// user chooses between (charging method, wear style), not tiers of
// quality. That's the deliberate structural difference from segments.ts
// — nothing here is "better" or "worse" than another row, so the
// component (OticonDeviceTypes.astro) treats them as a category grid,
// not a decreasing-weight list.
//
// Model names reused verbatim from the same real catalogue already
// established in Comparison/Segments — no invented models or specs.

export interface OticonDeviceType {
  name: string;
  description: string;
  models: string[];
  icon: "battery-charging" | "battery" | "ear" | "radio" | "headphones" | "baby";
  span: "wide" | "narrow";
}

export interface OticonDeviceTypesContent {
  badge: string;
  heading: string;
  intro: string;
  types: OticonDeviceType[];
}

export const oticonDeviceTypes: OticonDeviceTypesContent = {
  badge: "CİHAZ TÜRLERİ",
  heading: "Oticon İşitme Cihazı Türleri Nelerdir?",
  intro:
    "Oticon, farklı kullanım alışkanlıkları ve ihtiyaçlara uygun çeşitli işitme cihazı türleri sunar.",
  types: [
    {
      name: "Şarjlı İşitme Cihazları",
      description:
        "Lityum-iyon pil teknolojisiyle çalışan, tek dokunuşla şarj edilebilen modern modeller.",
      models: ["Intent", "Real", "Zeal", "Xceed"],
      icon: "battery-charging",
      span: "wide",
    },
    {
      name: "Pilli İşitme Cihazları",
      description: "Değiştirilebilir çinko-hava pille çalışan, uzun ömürlü klasik modeller.",
      models: ["Own SI", "Ruby", "Jet PX"],
      icon: "battery",
      span: "narrow",
    },
    {
      name: "Kulak İçi Modeller",
      description: "Kulak kanalı içine yerleşen, göze görünmeyen küçük yapı.",
      models: ["Own SI"],
      icon: "ear",
      span: "narrow",
    },
    {
      name: "Kulak Arkası Modeller",
      description:
        "Kulak arkasına yerleşen, geniş güç aralığı ve bağlantı seçenekleri sunan yaygın kullanılan yapı.",
      models: ["Intent", "Real", "Zircon", "Xceed"],
      icon: "radio",
      span: "wide",
    },
    {
      name: "Power Modeller",
      description: "İleri ve çok ileri derece işitme kayıpları için güçlendirilmiş modeller.",
      models: ["Xceed 1", "Xceed 2", "Xceed 3"],
      icon: "headphones",
      span: "narrow",
    },
    {
      name: "Pediatrik Modeller",
      description: "Çocuk kullanıcıların ihtiyaçlarına göre geliştirilmiş özel modeller.",
      models: ["Play PX", "Opn Play", "Xceed Play"],
      icon: "baby",
      span: "narrow",
    },
  ],
};
