// "Dikkat Edilmesi Gerekenler" section for the
// /blog/sik-sorulan-sorular page. Reuses the shared BrandPageIdealUser
// component, visually differentiated by the design system's own
// --color-warning token (#d97706). The first item is this page's key
// scope flag — explicitly directs readers to the many topic-specific
// FAQ sections already built this session, avoiding duplication.

import { AlertTriangle, ShieldQuestion, MessageSquareText, Clock, HeartPulse } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const sikSorulanSorularConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Bu Sayfayı Kullanırken Dikkat Edilmesi Gerekenler",
  intro: "Bu sayfa genel sorulara odaklanır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Konuya Özel Sorular İçin İlgili Sayfayı İnceleyin",
      description: "SGK, cihaz seçimi veya servis gibi konularda derinlemesine sorularınız için ilgili rehber ve hizmet sayfalarımızdaki kendi SSS bölümlerini inceleyebilirsiniz.",
      suggestedFamilies: ["Konuya Özel Bilgi"],
    },
    {
      icon: ShieldQuestion,
      title: "Genel Bilgi Kişisel Değerlendirmenin Yerini Tutmaz",
      description: "Buradaki yanıtlar genel bilgilendirme amaçlıdır; kendi durumunuz için bir randevu almanızı öneririz.",
      suggestedFamilies: ["Kişisel Değerlendirme"],
    },
    {
      icon: Clock,
      title: "Süreçle İlgili Detaylar Değişebilir",
      description: "Randevu ve süreçle ilgili bazı detaylar zaman içinde güncellenebilir; en güncel bilgi için bizi aramanızı öneririz.",
      suggestedFamilies: ["Güncel Bilgi"],
    },
    {
      icon: HeartPulse,
      title: "Acil Durumlar İçin Beklemeyin",
      description: "Ani başlayan bir işitme kaybı gibi acil bir durum yaşıyorsanız, bu sayfayı beklemeden bir KBB uzmanına başvurmanızı öneririz.",
      suggestedFamilies: ["Acil Durum"],
    },
    {
      icon: MessageSquareText,
      title: "Yanıtını Bulamadığınız Sorular İçin Bize Sorun",
      description: "Aradığınız yanıtı burada bulamazsanız, telefon veya WhatsApp üzerinden bize doğrudan sorabilirsiniz.",
      suggestedFamilies: ["Doğrudan İletişim"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
