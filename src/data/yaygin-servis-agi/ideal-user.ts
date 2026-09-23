// "Yetkisiz Serviste Sıkça Karşılaşılan Riskler" section for the
// /neden-orijinal/yaygin-servis-agi page. Reuses the shared
// BrandPageIdealUser component, same technique used on Güvenilir
// Teknoloji and Uzun Ömürlü Cihazlar — repurposed into risks of
// unauthorized/informal repair rather than hearing-loss symptoms or
// authenticity red flags.

import { UserX, PackageX, FileX, ShieldOff, AlertTriangle } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const yayginServisAgiIdealUser: BrandPageIdealUserContent = {
  badge: "YETKİSİZ SERVİSTE SIKÇA KARŞILAŞILAN RİSKLER",
  heading: "Yetkisiz Serviste Sıkça Karşılaşılan Riskler",
  intro: "Aşağıdaki riskler, yetkili olmayan servis noktalarında sıkça karşılaşılan durumlar arasında yer alır.",
  profiles: [
    {
      icon: UserX,
      title: "Kalifiye Olmayan Teknisyenlerce Müdahale",
      description: "Yetkili eğitim almamış kişilerce yapılan müdahaleler, cihaza kalıcı hasar verebilir.",
      suggestedFamilies: ["Yetkili Teknisyen Kontrolü"],
    },
    {
      icon: PackageX,
      title: "Orijinal Olmayan Yedek Parça Kullanımı",
      description: "Yetkisiz servislerde sıklıkla uyumsuz veya taklit yedek parçalar kullanılabilir.",
      suggestedFamilies: ["Orijinal Yedek Parça"],
    },
    {
      icon: FileX,
      title: "Garantiyi Geçersiz Kılan İşlemler",
      description: "Yetkisiz serviste yapılan müdahaleler, cihazın üretici garantisini geçersiz kılabilir.",
      suggestedFamilies: ["Garanti Koruma"],
    },
    {
      icon: ShieldOff,
      title: "Kayıt Dışı ve Belgesiz İşlemler",
      description: "Fatura veya belge verilmeyen servis işlemlerinde sorumluluk takibi zorlaşabilir.",
      suggestedFamilies: ["Belgeli İşlem"],
    },
    {
      icon: AlertTriangle,
      title: "Kalıcı Performans Kaybı Riski",
      description: "Uygun olmayan müdahaleler, cihazın performansında kalıcı kayıplara yol açabilir.",
      suggestedFamilies: ["Yetkili Servis Güvencesi"],
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorIconBg: "rgb(234 88 12 / 0.1)",
};
