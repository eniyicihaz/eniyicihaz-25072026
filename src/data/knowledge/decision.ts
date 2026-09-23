// M4 (Decision) content for the /bilgi-merkezi hub page. Renders through
// the now-generic BrandDecision component. Scenario set reasons about
// WHICH CONTENT fits the reader's current situation, distinct from the
// other three hub pages' own (brand/device-type/service) scenario sets.

import { Stethoscope, Compass, Landmark, ShieldQuestion, Gift, HelpCircle } from "lucide-astro";
import type { BrandDecisionContent } from "../../components/brands/BrandDecision/BrandDecision.astro";

export const knowledgeDecision: BrandDecisionContent = {
  eyebrow: "Karar Adımı",
  heading: "Ne Aradığınıza Göre Size Uygun İçerik",
  intro:
    "Bilgi Merkezi'nde aradığınız içerik, mevcut durumunuza göre değişir. Aşağıdaki tanımlardan size en yakın olanı bulmanız, doğru içeriğe ulaşmanızı kolaylaştırır.",
  scenarios: [
    {
      icon: Stethoscope,
      title: "Yeni Bir İşitme Kaybı Farkındalığım Var",
      description: "İşitme Kaybı Nedir? rehberimizle konuyu genel hatlarıyla öğrenebilirsiniz.",
    },
    {
      icon: Compass,
      title: "Cihaz Seçmekte Kararsızım",
      description: "Cihaz Seçim Rehberimiz, doğru kararı vermenize yardımcı olur.",
    },
    {
      icon: Landmark,
      title: "SGK Sürecini Merak Ediyorum",
      description: "SGK & Haklar sayfalarımızda katkı payından belgelere kadar tüm süreci bulabilirsiniz.",
    },
    {
      icon: ShieldQuestion,
      title: "Yanlış Bilgilerden Kaçınmak İstiyorum",
      description: "Uzman Görüşleri sayfamız, en sık karşılaşılan yanlış inanışları düzeltir.",
    },
    {
      icon: Gift,
      title: "Güncel Kampanyaları Merak Ediyorum",
      description: "Kampanyalar sayfamızdan kategorilerimiz hakkında genel bilgi alabilirsiniz.",
    },
    {
      icon: HelpCircle,
      title: "Genel Sorularım Var",
      description: "Sık Sorulan Sorular sayfamız, randevu ve süreç hakkındaki sorularınızı yanıtlar.",
    },
  ],
  panel: {
    title: "Aradığınızı Bulamadıysanız",
    description:
      "Uzman ekibimiz, merak ettiğiniz her konuda size doğrudan yardımcı olur.",
    ctaPrimary: { label: "Hemen Ara", href: "tel:+905337733199" },
    ctaSecondary: { label: "WhatsApp'tan Yazın", href: "https://wa.me/905337733199" },
  },
};
