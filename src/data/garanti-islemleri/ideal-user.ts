// "Garanti İşlemleri Kimler İçin Uygundur?" section for the
// /servis-bakim/garanti-islemleri page. Reuses the shared
// BrandPageIdealUser component in its original candidacy sense.

import { FileText, AlertTriangle, ShieldCheck, Users2, ScrollText } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const garantiIslemleriIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUNDUR?",
  heading: "Garanti İşlemleri Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller, garanti işlemlerinin sıkça gerekli olduğu durumları yansıtır.",
  profiles: [
    {
      icon: FileText,
      title: "Yeni Cihaz Sahibi Olan Kullanıcılar",
      description: "Garanti kapsamının ne olduğunu öğrenmek isteyen yeni cihaz sahipleri için garanti süreci anlatılır.",
      suggestedFamilies: ["Garanti Bilgilendirmesi"],
    },
    {
      icon: AlertTriangle,
      title: "Üretim Kaynaklı Sorun Şüphesi Olanlar",
      description: "Cihazında üretim kaynaklı olabilecek bir sorun fark eden kullanıcılar için garanti talebi değerlendirilir.",
      suggestedFamilies: ["Garanti Talebi"],
    },
    {
      icon: ShieldCheck,
      title: "Garanti Kapsamından Emin Olmak İsteyenler",
      description: "Cihazının hâlâ garanti kapsamında olup olmadığından emin olmak isteyen kullanıcılar için netlik sağlanır.",
      suggestedFamilies: ["Kapsam Kontrolü"],
    },
    {
      icon: Users2,
      title: "İkinci El Cihaz Devralanlar",
      description: "İkinci el bir cihaz devralan kullanıcılar için garantinin devredilebilir olup olmadığı netleştirilir.",
      suggestedFamilies: ["Garanti Devri"],
    },
    {
      icon: ScrollText,
      title: "Garanti ile Değişim Arasındaki Farkı Merak Edenler",
      description: "Garanti kapsamı ile Kolay Değişim güvencesi arasındaki farkı öğrenmek isteyen kullanıcılar için açıklama sunulur.",
      suggestedFamilies: ["Süreç Karşılaştırması"],
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
  accentColorIconBg: "rgb(79 70 229 / 0.1)",
};
