// "Dikkat Edilmesi Gerekenler" section for the /neden-orijinal/
// guvenilir-teknoloji page. Reuses the shared BrandPageIdealUser
// component, same technique every prior page uses — visually
// differentiated from the "Sıkça Karşılaşılan İşaretler" section above
// by using the design system's own --color-warning token (#d97706)
// instead of the page's blue accent. Framed as consequences of skipping
// verification, rather than a health-safety warning.

import { AlertTriangle, ShieldOff, FileX, Store, Gauge } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const guvenilirTeknolojiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Orijinal Ürün Satın Alırken Dikkat Edilmesi Gereken Noktalar",
  intro: "Doğru kanaldan alışveriş faydalı bir adımdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Faturasız Satın Alma Hak Kaybına Yol Açabilir",
      description: "Fatura olmadan satın alınan ürünlerde garanti ve iade hakları kullanılamayabilir.",
      suggestedFamilies: ["Faturalı Alışveriş"],
    },
    {
      icon: ShieldOff,
      title: "Sahte Ürünler Güvenlik Riski Taşıyabilir",
      description: "Sertifikasız veya taklit bileşenler içeren ürünler, performans ve güvenlik açısından risk oluşturabilir.",
      suggestedFamilies: ["Sertifika Kontrolü"],
    },
    {
      icon: FileX,
      title: "Garanti Belgesi Olmayan Ürünlerde Servis Reddedilebilir",
      description: "Yetkili servisler, garanti belgesi bulunmayan ürünlere hizmet vermeyi reddedebilir.",
      suggestedFamilies: ["Garanti Belgesi Kontrolü"],
    },
    {
      icon: Store,
      title: "Her Satıcı Yetkili Değildir",
      description: "Ürünü satın almadan önce satıcının markanın resmi yetkili listesinde olduğunu kontrol etmek önemlidir.",
      suggestedFamilies: ["Yetkili Bayi Doğrulama"],
    },
    {
      icon: Gauge,
      title: "Fiyat Tek Başına Belirleyici Olmamalıdır",
      description: "Çok düşük fiyatlı teklifler, orijinallik ve güvenlikten ödün verilmiş olabileceğinin bir işareti olabilir.",
      suggestedFamilies: ["Bilinçli Satın Alma"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
