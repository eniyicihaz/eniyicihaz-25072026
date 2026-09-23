// "Dikkat Edilmesi Gerekenler" section for the /neden-orijinal/
// yaygin-servis-agi page. Reuses the shared BrandPageIdealUser
// component, same technique every prior page uses — visually
// differentiated from the "Yetkisiz Serviste Sıkça Karşılaşılan
// Riskler" section above by using the design system's own
// --color-warning token (#d97706) instead of the page's orange accent.

import { AlertTriangle, Clock, FileX, MapPin, Gauge } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const yayginServisAgiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Servis Desteği Alırken Dikkat Edilmesi Gereken Noktalar",
  intro: "Yetkili servis kullanımı faydalı bir adımdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Her Bayi Yetkili Servis Sunmayabilir",
      description: "Ürünü satın aldığınız yer ile yetkili servis hizmeti sunan nokta farklı olabilir; satın alma öncesi kontrol edilmelidir.",
      suggestedFamilies: ["Servis Noktası Kontrolü"],
    },
    {
      icon: Clock,
      title: "Bazı Onarımlar Parça Temini Nedeniyle Zaman Alabilir",
      description: "Nadir kullanılan parçaların temini, onarım süresini uzatabilir.",
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
      title: "Servis Noktası Yoğunluğu Bölgeye Göre Değişebilir",
      description: "Yetkili servis noktalarının yoğunluğu şehir ve bölgeye göre farklılık gösterebilir.",
      suggestedFamilies: ["Bölgesel Kapsama Kontrolü"],
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
