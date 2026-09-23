// "Cihaz Uygulama Kimler İçin Uygundur?" section for the
// /uygulama-ayar/cihaz-uygulama page. Reuses the shared
// BrandPageIdealUser component in its original candidacy sense.

import { Headphones, RefreshCcw, Users, Home, Wrench } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cihazUygulamaIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUNDUR?",
  heading: "Cihaz Uygulama Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller, cihaz uygulama randevusunun sıkça planlandığı kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: Headphones,
      title: "Yeni Bir İşitme Cihazı Alan Kullanıcılar",
      description: "Kendisine yeni bir işitme cihazı önerilen ve ilk kez kullanacak kullanıcılar için uygulama randevusu planlanır.",
      suggestedFamilies: ["İlk Uygulama Randevusu"],
    },
    {
      icon: RefreshCcw,
      title: "Eski Cihazından Yeni Bir Modele Geçenler",
      description: "Önceki cihazından farklı bir modele geçiş yapan kullanıcılar için yeniden uygulama ve karşılaştırmalı ayar yapılır.",
      suggestedFamilies: ["Model Geçiş Uygulaması"],
    },
    {
      icon: Users,
      title: "İlk Kez İşitme Cihazı Kullanacak Kullanıcılar",
      description: "Daha önce hiç işitme cihazı kullanmamış kullanıcılar için kapsamlı bir yönlendirme ve alışma süreci desteği sunulur.",
      suggestedFamilies: ["Kullanım Eğitimi"],
    },
    {
      icon: Home,
      title: "Cihazını Farklı Bir Klinikten Getiren Kullanıcılar",
      description: "Cihazını başka bir yerden temin eden ancak yerel takip ve ayar desteği arayan kullanıcılar için değerlendirme yapılabilir.",
      suggestedFamilies: ["Bağımsız Ayar Değerlendirmesi"],
    },
    {
      icon: Wrench,
      title: "Mevcut Ayarlarından Memnun Olmayanlar",
      description: "Mevcut cihaz ayarlarının kendisine uygun olmadığını düşünen kullanıcılar için yeniden değerlendirme ve uygulama önerilebilir.",
      suggestedFamilies: ["Yeniden Uygulama"],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
};
