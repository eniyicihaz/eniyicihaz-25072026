// "Dikkat Edilmesi Gerekenler" section for the /servis-bakim/
// periyodik-bakim page. Reuses the shared BrandPageIdealUser component,
// visually differentiated by the design system's own --color-warning
// token (#d97706). The first item cross-references Cihaz Temizliği and
// Teknik Servis so the reader lands on the right page for their actual
// need.

import { Sparkles, Wrench, Clock, PackageCheck, Ear } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const periyodikBakimConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Periyodik Bakımda Dikkat Edilmesi Gereken Noktalar",
  intro: "Periyodik bakım faydalı bir alışkanlıktır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: Sparkles,
      title: "Günlük Ev Bakımının Yerini Almaz",
      description: "Periyodik bakım, günlük temizlik ve saklama alışkanlıklarınızın yerini almaz; günlük bakım için Cihaz Temizliği sayfamızı inceleyebilirsiniz.",
      suggestedFamilies: ["Günlük Bakım"],
    },
    {
      icon: Wrench,
      title: "Mevcut Bir Arızayı Onarmaz",
      description: "Cihazınızda zaten bir arıza varsa, periyodik bakım yerine Teknik Servis değerlendirmesi daha uygun bir ilk adımdır.",
      suggestedFamilies: ["Arıza Değerlendirmesi"],
    },
    {
      icon: Clock,
      title: "Önerilen Sıklık Kullanım Yoğunluğuna Göre Değişir",
      description: "Aktif kullanım, terleme veya tozlu ortamlarda çalışma gibi etkenler, önerilen bakım sıklığını değiştirebilir.",
      suggestedFamilies: ["Kişiye Özel Sıklık"],
    },
    {
      icon: PackageCheck,
      title: "Bazı Parçalar Arada Kendi Kendinize Değiştirilebilir",
      description: "Kulak ucu gibi bazı basit parçalar, bakım randevuları arasında size gösterilen şekilde kendiniz değiştirebilirsiniz.",
      suggestedFamilies: ["Kendi Kendine Bakım"],
    },
    {
      icon: Ear,
      title: "Kulak İçi (ITE) Kabuklar Farklı Bir Süreç İzler",
      description: "Kulak içi cihazların kabuk bakımı, kulak arkası cihazların tüp/filtre bakımından farklıdır; ihtiyaç durumunda ayrıca değerlendirilir.",
      suggestedFamilies: ["Kulak İçi Bakımı"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
