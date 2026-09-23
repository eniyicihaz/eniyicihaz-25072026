// "Kimler İçin Uygundur?" profile grid for the /teknolojiler/
// kablosuz-baglanti page. Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça değerlendirilir" tone, never
// "kesin sizin içindir".

import { Landmark, GraduationCap, Presentation, Ear, Users } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kablosuzBaglantiIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Kablosuz Bağlantı Özellikleri Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Landmark,
      title: "Toplu Alan Sistemi Bulunan Mekanlara Sık Gidenler",
      description: "Tiyatro, cami veya toplantı salonu gibi telesarmal döngü sistemi bulunan mekanlarda doğrudan ses almak isteyenler için uygundur.",
      suggestedFamilies: ["Telesarmal (T-Coil) Destekli Modeller"],
    },
    {
      icon: GraduationCap,
      title: "Okul Çağındaki Öğrenciler",
      description: "Öğretmenin taktığı Roger/FM verici mikrofonuyla sınıf ortamında konuşmayı doğrudan almak isteyen öğrenciler için sıkça tercih edilir.",
      suggestedFamilies: ["Roger / FM Uyumlu Modeller"],
    },
    {
      icon: Presentation,
      title: "Toplantı ve Konferanslara Sık Katılanlar",
      description: "Uzak mesafeden konuşan bir sunucuyu net duymak isteyen iş ortamındaki kullanıcılar için uygundur.",
      suggestedFamilies: ["Uzaktan Mikrofon Uyumlu Modeller"],
    },
    {
      icon: Ear,
      title: "Çift Taraflı Cihaz Kullanan Kullanıcılar",
      description: "Kulaktan kulağa bağlantı avantajı, iki kulakta da uyumlu cihaz kullanan kişilerde daha belirgin şekilde hissedilir.",
      suggestedFamilies: ["Kulaktan Kulağa Bağlantılı Modeller"],
    },
    {
      icon: Users,
      title: "Tek Taraflı İşitme Kaybı Olan Kullanıcılar",
      description: "Sesi iyi duyan kulağa kablosuz olarak aktaran sistemler, tek taraflı kayıplarda sıkça değerlendirilir.",
      suggestedFamilies: ["CROS / BiCROS Sistemleri"],
    },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
  accentColorIconBg: "rgb(101 163 13 / 0.1)",
};
