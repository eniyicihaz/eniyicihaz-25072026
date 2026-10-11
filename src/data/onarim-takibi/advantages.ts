// "Avantajları" bento section for the /servis-bakim/onarim-takibi
// page — framed as the genuine advantages of transparent status
// tracking. Renders through the shared BrandPageAdvantages component —
// items must be exactly 5 entries: [slot1, slot2, slot3(wide),
// slot4(wide), slot5(wide)], same contract every brand/category page's
// advantages data follows.

import { PackageSearch, Bell, Clock, MessageCircle, Users2, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const onarimTakibiAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Onarım Takibinin Sunduğu Avantajlar",
  intro: "Servis sürecinde bilgi almayı kolaylaştıran özellikler.",
  hero: {
    icon: PackageSearch,
    category: "Dijital Servis Kaydı",
    title: "Cihazınız İçin Servis Kaydı Oluşturulur",
    description: "Cihazınız teslim edildiğinde dijital bir servis kaydı oluşturulur ve süreç bu kayıt üzerinden takip edilir.",
  },
  items: [
    {
      icon: Bell,
      category: "Manuel Bilgilendirme",
      title: "Gerektiğinde SMS veya WhatsApp ile Bilgi",
      description: "Personelimiz gerektiğinde sizi SMS veya WhatsApp üzerinden manuel olarak bilgilendirir; her aşamada mesaj gönderileceği anlamına gelmez.",
    },
    {
      icon: MessageCircle,
      category: "Kolay Erişim",
      title: "Telefon veya WhatsApp ile Bilgi Alma",
      description: "Güncel durumu öğrenmek için bizi telefonla arayabilir veya WhatsApp'tan yazabilirsiniz.",
    },
    {
      icon: Clock,
      category: "Süre Beklentisi",
      title: "Tahmini Süre İlk Teknik Kontrolden Sonra Bildirilir",
      description: "Süre arızaya ve gerektiğinde teknik servise göre değiştiğinden, tahmini onarım süresi ve varsa ücret teknik servisteki ilk teknik kontrolden sonra bildirilir.",
    },
    {
      icon: Users2,
      category: "Gecikme ve Ek Değerlendirme",
      title: "Gerektiğinde Sizinle İletişime Geçilir",
      description: "Gecikme veya ek bir değerlendirme ihtiyacı doğarsa sizinle iletişime geçilir.",
    },
    {
      icon: Sparkles,
      category: "Genel Aşamalar",
      title: "Sürecin Genel Aşamalarını Bilirsiniz",
      description: "Teslim alma, teşhis, onarım, kalite kontrolü ve teslim gibi genel aşamalar, onarımın nasıl ilerlediğini anlamanıza yardımcı olur.",
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
  accentColorIconBg: "rgb(192 38 211 / 0.1)",
  accentColorHoverBorder: "rgb(192 38 211 / 0.45)",
};
