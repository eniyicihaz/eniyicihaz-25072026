// SSS — Kişiye Özel Ayar, plan §3/§4. Renders through the existing
// BrandPageFaq (FAQPage schema auto-generated). Sorular brief'in GEO
// bölümünden (§12) birebir alındı; fiyat rakamı ve garanti dili yok.
import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const kisiyeOzelAyarFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Kişiye Özel Ayar Hakkında Merak Edilenler",
  intro: "Ayarın neden yapıldığı, süreci ve bölgeden ulaşım hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Kişiye Özel Ayar Randevusu Hakkında Bilgi Almak İster misiniz?",
    points: ["Marka bağımsız değerlendirme", "Geri bildirime dayalı süreç", "Mevcut cihazınızla gelebilirsiniz", "Darıca'da yüz yüze randevu"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        { question: "İşitme cihazı ayarı neden yapılır?", answer: "Cihazın, kişinin işitme kaybına ve günlük yaşamındaki dinleme ihtiyaçlarına uygun şekilde çalışması için ayar yapılır." },
        { question: "İşitme cihazı nasıl kişiye özel ayarlanır?", answer: "İşitme değerlendirmesi sonuçları, kullanılan cihaz ve kişinin günlük yaşamı bir arada değerlendirilerek cihaz kişiye özel şekilde ayarlanır." },
        { question: "İşitme cihazımın sesi neden fazla yüksek geliyor?", answer: "Bu genellikle belirli frekans bantlarındaki kazanç seviyesinin gözden geçirilmesi gerektiğinin bir işaretidir; kesin neden randevuda değerlendirilir." },
        { question: "İşitme cihazım neden rahatsız edici geliyor?", answer: "Rahatsızlık hissi genellikle ayar, kulak kalıbı veya kullanım süresiyle ilgili olabilir; neden randevu sırasında birlikte değerlendirilir." },
      ],
    },
    {
      label: "Süreç",
      items: [
        { question: "İşitme cihazı ayarı ne kadar sürer?", answer: "Süre kişiden kişiye değişir; randevu sırasında netleşir." },
        { question: "İşitme cihazı ayarı için işitme testi gerekir mi?", answer: "Evet; güncel bir işitme değerlendirmesi, ayarın doğru yapılabilmesi için gereklidir." },
        { question: "Başka yerden alınan işitme cihazı kontrol edilebilir mi?", answer: "Evet; başka bir merkezden alınmış cihazınızı getirip durumunu ve ayarlarını kontrol ettirebilirsiniz." },
      ],
    },
    {
      label: "Bölgemizden Ulaşım",
      items: [
        { question: "Darıca'da işitme cihazı ayarı nerede yapılır?", answer: "Darıca'daki merkezimizde randevu alarak kişiye özel ayar hizmetinden faydalanabilirsiniz." },
        { question: "Gebze'de işitme cihazı ayarı nerede yapılır?", answer: "Gebze'den Darıca'daki merkezimize kolayca ulaşabilir, ayar randevunuzu alabilirsiniz." },
        { question: "Çayırova'da işitme cihazı ayarı için nereye başvurulur?", answer: "Çayırova'dan da Darıca'daki merkezimize ulaşabilir, aynı süreçten faydalanabilirsiniz." },
      ],
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
