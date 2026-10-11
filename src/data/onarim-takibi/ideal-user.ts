// "Onarım Takibi Kimler İçin Uygundur?" section for the /servis-bakim/
// onarim-takibi page. Reuses the shared BrandPageIdealUser component in
// its original candidacy sense.

import { PackageSearch, Bell, HeartPulse, Truck, MessageCircle } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const onarimTakibiIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUNDUR?",
  heading: "Onarım Takibi Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller, onarım takibi bilgisinin sıkça işe yaradığı kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: PackageSearch,
      title: "Cihazı Şu Anda Serviste Olan Kullanıcılar",
      description: "Cihazı teknik servis veya garanti kapsamında incelemede olan kullanıcılar, güncel durumu bizden sorabilir.",
      suggestedFamilies: ["Aktif Servis Süreci"],
    },
    {
      icon: Bell,
      title: "Bilgilendirme Bekleyenler",
      description: "Süreç ilerledikçe gerektiğinde personelimiz SMS veya WhatsApp üzerinden sizi manuel olarak bilgilendirir.",
      suggestedFamilies: ["Manuel Bilgilendirme"],
    },
    {
      icon: HeartPulse,
      title: "Cihazsız Kalmaktan Endişe Duyanlar",
      description: "Cihazsız geçirdiği süreden endişe duyan kullanıcılar, tahmini süreyi ve süreçteki gelişmeleri bizden öğrenebilir.",
      suggestedFamilies: ["Süre Beklentisi"],
    },
    {
      icon: Truck,
      title: "Cihazı Teknik Servise Gönderilenler",
      description: "Cihazı teknik servise gönderilen kullanıcılar, sürecin durumunu merkezimizden sorabilir.",
      suggestedFamilies: ["Teknik Servis"],
    },
    {
      icon: MessageCircle,
      title: "Bir Süredir Haber Alamayanlar",
      description: "Bir süredir güncelleme almayan ve durumu merak eden kullanıcılar, telefonla veya WhatsApp üzerinden bilgi alabilir.",
      suggestedFamilies: ["Durum Sorgulama"],
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
  accentColorIconBg: "rgb(192 38 211 / 0.1)",
};
