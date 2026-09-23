// "Kimler İçin Uygundur?" profile grid for the /teknolojiler/
// uzaktan-kontrol page. Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça değerlendirilir" tone, never
// "kesin sizin içindir".

import { Smartphone, Video, Hand, Users, MapPin } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const uzaktanKontrolIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Uzaktan Kontrol Özellikleri Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Smartphone,
      title: "Uygulamayla Ayar Yapmayı Sevenler",
      description: "Ses seviyesi ve program değişikliğini telefonundan hızlıca yapmak isteyen kullanıcılar için uygundur.",
      suggestedFamilies: ["Uygulama Kontrollü Modeller"],
    },
    {
      icon: Video,
      title: "Kliniğe Sık Gelmekte Zorlananlar",
      description: "Uzaktan destek oturumuyla, kliniğe gelmeden temel ayar güncellemesi almak isteyen kullanıcılar için sıkça değerlendirilir.",
      suggestedFamilies: ["Uzaktan Destek (TeleCare) Uyumlu Modeller"],
    },
    {
      icon: Hand,
      title: "Akıllı Telefon Kullanmayan veya El Becerisi Sınırlı Kullanıcılar",
      description: "Fiziksel uzaktan kumanda, uygulama kullanmadan basit ve büyük tuşlarla ayar yapma imkânı sunar.",
      suggestedFamilies: ["Fiziksel Uzaktan Kumandalı Modeller"],
    },
    {
      icon: Users,
      title: "Bakım Veren Yakınları Olan Kullanıcılar",
      description: "Bazı uygulamalar, bakım veren bir aile üyesinin de cihaz ayarlarını takip etmesine imkân tanır.",
      suggestedFamilies: ["Aile Erişimli Uygulama Desteği"],
    },
    {
      icon: MapPin,
      title: "Kliniğe Uzak Mesafede Yaşayanlar",
      description: "Uzaktan destek özelliği, sık seyahat etmeden temel ayar ihtiyaçlarını karşılamaya yardımcı olabilir.",
      suggestedFamilies: ["Uzaktan Destek Uyumlu Modeller"],
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorIconBg: "rgb(2 132 199 / 0.1)",
};
