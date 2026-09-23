// "Kimler İçin Uygundur?" profile grid for the /teknolojiler/
// tinnitus-cozumleri page. Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça değerlendirilir" tone, never
// "kesin sizin içindir" — especially important here, where the real
// answer always starts with a medical/audiological evaluation.

import { Ear, Moon, Stethoscope, Smartphone, Volume2 } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const tinnitusCozumleriIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Tinnitus Desteği Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir kulak burun boğaz ve işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Ear,
      title: "Kulak Çınlamasından Rahatsızlık Duyanlar",
      description: "Günlük yaşamında çınlama hissini fark eden ve bu konuda destek arayan kullanıcılar için sıkça değerlendirilir.",
      suggestedFamilies: ["Tinnitus Destekli Modeller"],
    },
    {
      icon: Moon,
      title: "Sessiz Ortamda Çınlamayı Daha Çok Fark Edenler",
      description: "Özellikle sessiz ortamlarda veya gece çınlamanın belirginleştiğini fark eden kullanıcılar için uygundur.",
      suggestedFamilies: ["Rahatlatıcı Ses Üreteçli Modeller"],
    },
    {
      icon: Stethoscope,
      title: "İşitme Kaybı ile Birlikte Tinnitus Yaşayanlar",
      description: "İşitme kaybı ve tinnitus birlikte görüldüğünde, işitme cihazı hem işitmeyi desteklemek hem de rahatlatıcı ses sunmak için değerlendirilebilir.",
      suggestedFamilies: ["Kombine Destekli Modeller"],
    },
    {
      icon: Smartphone,
      title: "Uygulama Üzerinden Kontrol Etmek İsteyenler",
      description: "Ses üretecini ihtiyaç anında telefonundan açıp kapatmak isteyen kullanıcılar için uygundur.",
      suggestedFamilies: ["Uygulama Kontrollü Tinnitus Desteği"],
    },
    {
      icon: Volume2,
      title: "Uzman Değerlendirmesi Sonrası Yönlendirilen Kullanıcılar",
      description: "Kulak burun boğaz ve odyoloji değerlendirmesi sonrası tinnitus desteği önerilen kullanıcılar için uygundur.",
      suggestedFamilies: ["Uzman Yönlendirmesiyle Değerlendirilen Modeller"],
    },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
  accentColorIconBg: "rgb(147 51 234 / 0.1)",
};
