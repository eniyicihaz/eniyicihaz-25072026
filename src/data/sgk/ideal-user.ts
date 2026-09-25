// Ben Hangi Gruptayım? — SGK pillar page, redesign plan §G. Renders
// through the existing BrandPageIdealUser (first use on this page).
// Deliberately does NOT restate the 2026 TL figures already shown in the
// SgkPayments table above — each card only names the group and points
// back up to that table, avoiding the "same info twice" the redesign
// brief explicitly warned against. accentColor matches the page's own
// established blue identity (--color-primary), not a new accent.
import { Briefcase, HandCoins, Baby, BookOpen, GraduationCap } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const sgkIdealUser: BrandPageIdealUserContent = {
  badge: "BEN HANGİ GRUPTAYIM?",
  heading: "Kendinizi Hangi Grupta Buluyorsunuz?",
  intro: "Yukarıdaki 2026 tablosunda kendi grubunuzu bulmak için aşağıdaki kategorilerden size uyanı seçebilirsiniz.",
  profiles: [
    {
      icon: Briefcase,
      title: "Yetişkin Çalışan",
      description: "Aktif sigortalı olarak çalışıyorsanız, yukarıdaki tabloda \"Çalışan\" sütunundaki tutarlar sizin için geçerlidir.",
      suggestedFamilies: ["18 Yaş ve Üzeri", "Çalışan"],
    },
    {
      icon: HandCoins,
      title: "Yetişkin Emekli",
      description: "Emekli iseniz, tabloda \"Emekli\" sütunundaki daha yüksek destek tutarları ve maaştan kesinti bilgisi sizi ilgilendirir.",
      suggestedFamilies: ["18 Yaş ve Üzeri", "Emekli"],
    },
    {
      icon: Baby,
      title: "Çocuk (0-4 Yaş)",
      description: "0-4 yaş grubundaki çocuklar için tablodaki en yüksek destek kategorisi geçerlidir; erken rehabilitasyon önemlidir.",
      suggestedFamilies: ["0-4 Yaş"],
    },
    {
      icon: BookOpen,
      title: "Çocuk (5-12 Yaş)",
      description: "İlkokul çağındaki çocuklar için tabloda ayrı bir destek tutarı ve pil desteği geçerlidir.",
      suggestedFamilies: ["5-12 Yaş"],
    },
    {
      icon: GraduationCap,
      title: "Genç (13-18 Yaş)",
      description: "13-18 yaş grubu için tabloda yine ayrı bir destek tutarı bulunur; süreç yetişkin sürecine benzer şekilde ilerler.",
      suggestedFamilies: ["13-18 Yaş"],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.22)",
  accentColorBadgeText: "#2563eb",
  accentColorIconBg: "rgb(37 99 235 / 0.12)",
};
