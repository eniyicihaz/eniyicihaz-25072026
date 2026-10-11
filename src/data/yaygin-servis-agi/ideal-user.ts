// "Yetkisiz Serviste Sıkça Karşılaşılan Riskler" section for the
// /neden-orijinal/yaygin-servis-agi page. Reuses the shared
// BrandPageIdealUser component, same technique used on Güvenilir
// Teknoloji and Uzun Ömürlü Cihazlar — repurposed into risks of
// unauthorized/informal repair rather than hearing-loss symptoms or
// authenticity red flags.

import { UserX, PackageX, FileX, ShieldOff, AlertTriangle } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const yayginServisAgiIdealUser: BrandPageIdealUserContent = {
  badge: "ORİJİNAL ÜRÜN VE DOĞRU PARÇA",
  heading: "Doğru Parça ve Uygun Müdahale Neden Önemlidir?",
  intro: "Orijinal ürün, doğru parça ve uygun teknik müdahale, cihazın servis sonrasında da beklenen şekilde çalışması açısından önemlidir.",
  profiles: [
    {
      icon: UserX,
      title: "Uygun Teknik Müdahale",
      description: "Cihaza yapılacak müdahalenin cihazın yapısına ve üreticinin koşullarına uygun olması, işlemin cihaza zarar vermeden yürütülmesi açısından önemlidir.",
      suggestedFamilies: ["Uygun Müdahale"],
    },
    {
      icon: PackageX,
      title: "Cihaza Uygun Parça",
      description: "Parça değişimi gereken onarımlarda cihazla uyumlu, doğru parçanın kullanılması önemlidir. Parçanın bulunabilirliği ve temin süresi marka ve modele göre değişebilir.",
      suggestedFamilies: ["Doğru Parça"],
    },
    {
      icon: FileX,
      title: "Garanti Koşullarına Uygunluk",
      description: "Garanti kapsamındaki işlemler üreticinin koşullarına göre yürütülür; yetkisi olmayan kişilerce yapılan müdahaleler garanti kapsamını etkileyebilir.",
      suggestedFamilies: ["Garanti Koşulları"],
    },
    {
      icon: ShieldOff,
      title: "İşlemin Kaydı ve Belgesi",
      description: "Yapılan servis işlemi için kayıt veya belge talep etmek, ileride yaşanabilecek belirsizlikleri önlemeye yardımcı olur.",
      suggestedFamilies: ["Belgeli İşlem"],
    },
    {
      icon: AlertTriangle,
      title: "Cihaz Performansının Korunması",
      description: "Uygun olmayan müdahaleler cihazın performansını etkileyebilir; bu nedenle işlemin kapsamı netleştirilmeden müdahale yapılmamalıdır.",
      suggestedFamilies: ["Performans"],
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorIconBg: "rgb(234 88 12 / 0.1)",
};
