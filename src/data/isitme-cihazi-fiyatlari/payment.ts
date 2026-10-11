// "Fiyat ve Ödeme Seçenekleri" bölümü (#fiyat-odeme) ve teknoloji seviyesi tablosunun
// altındaki yapay zekâ notu. Fiyat ve taksit metni yalnızca pricing.ts'ten gelir
// (DECISIONS K-Fiyat-1); KDV/SGK/tek-çift cihaz koşulu ve ödeme koşulu (banka, kart,
// faiz, vade) yazılmaz. Ödeme yöntemleri cümlesi, bu sayfanın mevcut SSS cevabıyla aynıdır.
// Yapay zekâ: model adı veya özelliği uydurulmaz; teknolojinin her modelde olmadığı söylenir
// ve ayrıntı mevcut /teknolojiler/yapay-zeka-destekli/ sayfasına devredilir.
import { Tag, Sparkles, CreditCard, Layers } from "lucide-astro";
import { contactConfig } from "../../config/contact";
import { pricing } from "./pricing";
import type { GuideCard, GuideLink, GuideSectionMeta } from "../../components/price-guide/price-guide.types";

export const paymentSection: GuideSectionMeta = {
  id: "fiyat-odeme",
  eyebrow: "Fiyat ve Ödeme",
  heading: "Fiyat ve Ödeme Seçenekleri",
  intro:
    "2026 başlangıç fiyatını, yapay zekâ destekli yeni nesil seçenekleri ve ödeme imkânlarını bir arada görün; size uygun seçenek ücretsiz işitme testinin ardından netleşir.",
};

export const paymentCards: GuideCard[] = [
  {
    icon: Tag,
    tag: `${pricing.year} fiyatları`,
    title: "2026 Başlangıç Fiyatı",
    text: `${pricing.message} Size uygun cihazın fiyatı; cihaz türü, teknoloji seviyesi ve özelliklere göre belirlenir.`,
    href: "#fiyati-belirleyenler",
    linkLabel: "Fiyatı belirleyen faktörler",
  },
  {
    icon: Sparkles,
    tag: "Yeni nesil",
    title: "Yapay Zekâ Destekli Cihazlar",
    text: "Yeni nesil cihazların bir bölümünde yapay zekâ destekli ses işleme bulunur; ortamdaki sesleri analiz ederek konuşmayı arka plandaki sesten ayırt etmeye yardımcı olur. Bu teknoloji her modelde bulunmaz; size uygun olup olmadığını işitme testinden sonra birlikte değerlendiririz.",
    href: "/teknolojiler/yapay-zeka-destekli/",
    linkLabel: "Yapay zekâ destekli cihazlar",
  },
  {
    icon: CreditCard,
    tag: "Ödeme",
    title: "9 Taksite Kadar Ödeme",
    text: `Cihazınız için ${pricing.installmentLabel} sunuyoruz. Size uygun ödeme seçeneğini telefonda veya merkezimizde birlikte netleştiririz.`,
  },
  {
    icon: Layers,
    tag: "Seçenekler",
    title: "Farklı Bütçe ve Teknoloji Seviyeleri",
    text: "Giriş, orta ve üst teknoloji seviyelerinde farklı bütçe ve ihtiyaçlara yönelik seçenekler bulunur. Doğru seviye; işitme kaybınıza ve günlük ortamlarınıza göre birlikte belirlenir.",
    href: "#teknoloji-seviyesi",
    linkLabel: "Teknoloji seviyelerini karşılaştırın",
  },
];

const whatsappText = encodeURIComponent("Merhaba, işitme cihazı fiyatları ve ödeme seçenekleri hakkında bilgi almak istiyorum.");

export const paymentNote =
  "Nakit, banka kartı ve kredi kartı ile ödeme kabul ediyoruz. Fiyat ve ödeme seçenekleri hakkında bilgi almak için bizi arayabilir veya WhatsApp'tan yazabilirsiniz.";

export const paymentLinks: GuideLink[] = [
  { label: "Bizi arayın", href: contactConfig.phone.href },
  { label: "WhatsApp'tan yazın", href: `${contactConfig.whatsapp.href}?text=${whatsappText}` },
];

/** Teknoloji seviyesi tablosunun altındaki kısa not — tabloya "üst seviye = yapay zekâ" satırı eklenmez. */
export const aiTechNote =
  "Yapay zekâ destekli ses işleme, yeni nesil cihazların bir bölümünde bulunan bir teknolojidir. Tek başına bir teknoloji seviyesi anlamına gelmez ve her markada ya da her seride aynı şekilde sunulmaz; hangi seçeneğin size uygun olduğunu işitme testinden sonra birlikte değerlendiririz.";

export const aiTechLinks: GuideLink[] = [
  { label: "Yapay zekâ destekli işitme cihazları", href: "/teknolojiler/yapay-zeka-destekli/" },
  { label: "Fiyat ve ödeme seçenekleri", href: "#fiyat-odeme" },
];
