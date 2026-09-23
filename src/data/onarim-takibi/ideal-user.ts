// "Onarım Takibi Kimler İçin Uygundur?" section for the /servis-bakim/
// onarim-takibi page. Reuses the shared BrandPageIdealUser component in
// its original candidacy sense.

import { PackageSearch, Bell, HeartPulse, Truck, MessageCircle } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const onarimTakibiIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUNDUR?",
  heading: "Onarım Takibi Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller, onarım takibinin sıkça değer sunduğu kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: PackageSearch,
      title: "Cihazı Şu Anda Onarımda Olan Kullanıcılar",
      description: "Cihazı teknik servis veya garanti kapsamında incelemede olan kullanıcılar için güncel durum bilgisi sunulur.",
      suggestedFamilies: ["Aktif Onarım Takibi"],
    },
    {
      icon: Bell,
      title: "Bildirim Almayı Tercih Edenler",
      description: "Her aşamada kendisi aramak yerine bildirim almayı tercih eden kullanıcılar için SMS/WhatsApp güncellemeleri sunulur.",
      suggestedFamilies: ["Otomatik Bildirim"],
    },
    {
      icon: HeartPulse,
      title: "Cihazsız Kalmaktan Endişe Duyanlar",
      description: "Cihazsız geçirdiği süreden endişe duyan kullanıcılar için net bir zaman beklentisi sunulur.",
      suggestedFamilies: ["Süre Beklentisi"],
    },
    {
      icon: Truck,
      title: "Üretici Servisine Gönderilen Cihaz Sahipleri",
      description: "Cihazı üretici servisine gönderilen kullanıcılar için kargo ve inceleme sürecinin takibi önem kazanır.",
      suggestedFamilies: ["Üretici Servisi Takibi"],
    },
    {
      icon: MessageCircle,
      title: "Güncelleme Almayan ve Merak Edenler",
      description: "Bir süredir güncelleme almayan ve durumu merak eden kullanıcılar için hızlı bir bilgi kanalı sunulur.",
      suggestedFamilies: ["Durum Sorgulama"],
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
  accentColorIconBg: "rgb(192 38 211 / 0.1)",
};
