// SSS — Marka Danışmanlığı, plan §I. Renders through the existing
// BrandPageFaq (FAQPage schema auto-generated). Bu sorular guvenilir-
// teknoloji/yaygin-servis-agi/orijinal-aksesuar sayfalarının SSS'leriyle
// örtüşmüyor — yalnızca "hangi marka" sorusuna odaklanıyor.
import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const markaDanismanligiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Marka Danışmanlığı Hakkında Merak Edilenler",
  intro: "Marka seçimi, karşılaştırma ve bölgeden ulaşım hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Marka Danışmanlığı Randevusu Hakkında Bilgi Almak İster misiniz?",
    points: ["18 marka seçeneği", "Marka bağımsız değerlendirme", "İhtiyaç odaklı yaklaşım", "Darıca'da yüz yüze randevu"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        { question: "İşitme cihazı markası seçerken nelere bakılır?", answer: "İşitme kaybınızın düzeyi, günlük yaşamınız, teknolojiden beklentiniz ve bütçeniz, hangi markanın size uygun olabileceğini şekillendiren temel başlıklardır." },
        { question: "Farklı markaları karşılaştırabilir miyim?", answer: "Evet; danışmanlık sırasında farklı markaların teknoloji yaklaşımlarını ihtiyacınıza göre birlikte değerlendirebiliriz." },
        { question: "Hangi marka benim için daha uygun, nasıl karar verebilirim?", answer: "Kesin bir \"en iyi marka\" yoktur; karar, işitme profiliniz ve günlük yaşamınızla markanın sunduğu seçeneklerin örtüşmesine göre verilir." },
      ],
    },
    {
      label: "Süreç",
      items: [
        { question: "Marka değişikliği yapabilir miyim?", answer: "Evet; mevcut cihazınızdan memnun değilseniz, farklı bir marka veya modeli değerlendirme sürecine başlayabilirsiniz." },
        { question: "Marka danışmanlığı için işitme testi gerekir mi?", answer: "Evet; size uygun markaların belirlenebilmesi için güncel bir işitme değerlendirmesi gereklidir." },
      ],
    },
    {
      label: "Bölgemizden Ulaşım",
      items: [
        { question: "Darıca'da marka danışmanlığı nereden alınır?", answer: "Darıca'daki merkezimizde randevu alarak marka danışmanlığı hizmetinden faydalanabilirsiniz." },
        { question: "Gebze'den marka danışmanlığı için nasıl ulaşabilirim?", answer: "Gebze'den Darıca'daki merkezimize kolayca ulaşabilir, randevunuzu alabilirsiniz." },
        { question: "Çayırova'dan marka danışmanlığı için nereye başvurmalıyım?", answer: "Çayırova'dan da Darıca'daki merkezimize ulaşabilir, aynı süreçten faydalanabilirsiniz." },
      ],
    },
  ],
  accentColor: "#b45309",
  accentColorBadgeBg: "rgb(180 83 9 / 0.08)",
  accentColorBadgeBorder: "rgb(180 83 9 / 0.35)",
  accentColorBadgeText: "#92400e",
};
