// "Dikkat Edilmesi Gerekenler" section for the /isitme-cihazlari/
// bluetooth-ozellikli page. Reuses the shared BrandPageIdealUser
// component, same technique the BTE/ITE/Şarj Edilebilir master pages
// use — visually differentiated from the "Kimler İçin Uygun" section
// above by using the design system's own --color-warning token (#d97706)
// instead of the page's cyan accent, so the two sections read as distinct
// despite sharing markup.

import { Battery, Smartphone, WifiOff, Layers, ShieldCheck } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const bluetoothConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Bluetooth Özellikli Cihaz Seçerken Dikkat Edilmesi Gereken Noktalar",
  intro: "Bluetooth özelliği kullanım kolaylığı açısından güçlü bir seçenektir; yine de ihtiyaçlarınıza göre değerlendirmeniz gereken birkaç pratik nokta vardır.",
  profiles: [
    {
      icon: Battery,
      title: "Pil Tüketiminin Artabilmesi",
      description: "Sürekli aktif Bluetooth bağlantısı, bazı modellerde pil ömrünü kısaltabilir.",
      suggestedFamilies: ["Düşük Enerji (LE) Destekli Modeller"],
    },
    {
      icon: Smartphone,
      title: "Telefon Uyumluluğunun Modelden Modele Değişmesi",
      description: "Bazı eski Android telefonlar, iPhone'larda yaygın olan doğrudan bağlantı standardını desteklemeyebilir.",
      suggestedFamilies: ["Made for iPhone / Android Uyumlu Modeller"],
    },
    {
      icon: WifiOff,
      title: "Eşleştirme ve Bağlantı Kesintileri",
      description: "Kalabalık kablosuz sinyal ortamlarında bağlantıda ara sıra kesinti yaşanabilir.",
      suggestedFamilies: ["Güncel Bluetooth Sürümü"],
    },
    {
      icon: Layers,
      title: "Aynı Anda Bağlanabilecek Cihaz Sayısının Sınırlı Olması",
      description: "Çoğu model, aynı anda bağlanabileceği cihaz sayısında bir sınıra sahiptir.",
      suggestedFamilies: ["Çoklu Cihaz Destekli Modeller"],
    },
    {
      icon: ShieldCheck,
      title: "Bağlantı Güvenliği",
      description: "Kablosuz bağlantı özellikleri, üreticinin güvenlik protokollerine göre değişebilir; teslim sırasında bilgilendirilirsiniz.",
      suggestedFamilies: ["Üretici Güvenlik Protokolleri"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
