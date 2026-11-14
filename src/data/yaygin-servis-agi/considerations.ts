// "Dikkat Edilmesi Gerekenler" section for the /neden-orijinal/
// yaygin-servis-agi page. Reuses the shared BrandPageIdealUser
// component, same technique every prior page uses — visually
// differentiated from the "Doğru Parça ve Uygun Müdahale" section
// above by using the design system's own
// --color-warning token (#d97706) instead of the page's orange accent.

import { AlertTriangle, Clock, FileX, MapPin, Gauge } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const yayginServisAgiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Servis Desteği Alırken Dikkat Edilmesi Gereken Noktalar",
  intro: "Servis desteği alırken göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Servis Desteği Satış Noktasına Göre Değişebilir",
      description: "Ürünü satın aldığınız yer ile servis desteği alacağınız nokta farklı olabilir; satın alma öncesinde servis desteğinin nasıl sağlandığını sormanız yararlı olur.",
      suggestedFamilies: ["Servis Noktası Kontrolü"],
    },
    {
      icon: Clock,
      title: "Bazı Onarımlar Parça Temini Nedeniyle Zaman Alabilir",
      description: "Parçanın bulunabilirliği ve temin süresi marka ve modele göre değişebilir; tahmini süre, değerlendirme sonrasında paylaşılır.",
      suggestedFamilies: ["Gerçekçi Süre Beklentisi"],
    },
    {
      icon: FileX,
      title: "Servis İşlemlerinde Belge Talep Edilmelidir",
      description: "Yapılan her servis işlemi için belge veya kayıt talep etmek, ileride yaşanabilecek anlaşmazlıkları önlemeye yardımcı olur.",
      suggestedFamilies: ["Belgeli Servis Süreci"],
    },
    {
      icon: MapPin,
      title: "Hizmet Noktamız Darıca'dadır",
      description: "Fiziksel hizmet noktamız Darıca'daki merkezimizdir; bakım ve teknik destek için randevu gerekir.",
      suggestedFamilies: ["Hizmet Noktası"],
    },
    {
      icon: Gauge,
      title: "Garanti Kapsamı Servis Türüne Göre Değişebilir",
      description: "Bazı işlemler garanti kapsamında değerlendirilirken bazıları ücretli olabilir; net bilgi servis öncesinde alınmalıdır.",
      suggestedFamilies: ["Kapsam Netleştirme"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
