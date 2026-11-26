// Kuruluş ve Kurumsal Bilgiler — ValueGrid üzerinden render edilir (Hakkımızda).
// Kaynak: işletme sahibinin 2026-11-25 beyanı + İŞİTKOOP'un resmî yönetim kurulu sayfası
// (https://www.isitkoop.com/yonetim-kurulu). Yalnızca doğrulanmış bilgiler:
//   • 2009 = Avrasya İşitme Cihazları'nın KURULUŞ yılı; Ağustos 2024 = Darıca merkezinin AÇILIŞ tarihi. İkisi
//     birbirine karıştırılmaz (BUSINESS_SOT §4: "2009'dan beri Darıca'da" gibi ifadeler yasaktır).
//   • Erdinç Kılıç'ın İKİ görevi İŞİTKOOP'a aittir. Eğitim, unvan, sertifika, deneyim yılı, dil veya
//     "işletme sahibi/kurucu" gibi yayımlanması onaylanmamış hiçbir kişisel özellik eklenmez.
//   • Alttaki not, İŞİTKOOP ortaklar sayfasındaki İŞLETME profiline gider (BUSINESS_SOT §3.1). Karttaki yönetim
//     kurulu bağlantısından ayrıdır; yeni üyelik, ticari bağlılık veya yetki iddiası taşımaz.
import { CalendarDays, Handshake, MapPin } from "lucide-astro";
import { ISITKOOP_BOARD_URL, ISITKOOP_PROFILE_URL } from "../../lib/schema";
import type { ValueGridContent } from "../../components/shared/ValueGrid/ValueGrid.astro";

export const hakkimizdaKurumsal: ValueGridContent = {
  badge: "Kurumsal Bilgiler",
  heading: "Kuruluş ve Kurumsal Bilgiler",
  intro: "Kuruluş yılımız ile Darıca merkezimizin açılış tarihi farklı bilgilerdir; ikisini ayrı ayrı veriyoruz.",
  items: [
    {
      icon: CalendarDays,
      title: "2009: Kuruluş",
      description: "Avrasya İşitme Cihazları 2009 yılında kurulmuştur.",
    },
    {
      icon: MapPin,
      title: "Ağustos 2024: Darıca Merkezi",
      description: "Darıca'daki fiziksel merkezimiz Ağustos 2024'te açılmıştır. Tek fiziksel merkezimiz Darıca'dadır.",
    },
    {
      icon: Handshake,
      title: "Erdinç Kılıç: İŞİTKOOP Görevleri",
      description:
        "Avrasya İşitme Cihazları'nda görev yapan Erdinç Kılıç, İŞİTKOOP (İşitme Sağlığı Kooperatifi) Yönetim Kurulu Başkan Yardımcısı ve Tedarik, Lojistik ve Kurumsal İlişkiler Direktörüdür.",
      link: { label: "İŞİTKOOP yönetim kurulu sayfası (resmî kaynak)", href: ISITKOOP_BOARD_URL, external: true },
    },
  ],
  footnote: {
    label: "İŞİTKOOP ortaklar sayfasındaki Avrasya İşitme profilimizi inceleyebilirsiniz.",
    href: ISITKOOP_PROFILE_URL,
    external: true,
  },
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
};
