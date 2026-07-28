// M5 (Buying Guide) content for the "Tüm Markalar" (/markalar) page. This
// page is built up modularly (M1...M5…), each an independent
// section/component — this file only ever holds M5's data.
//
// Deliberately brand-agnostic and axis-shifted from M2/M3/M4: those all
// reasoned about brands (introduce → differentiate → match to the user).
// This section reasons about the PURCHASE ITSELF — generally accepted,
// non-controversial hearing-aid buying criteria, not tied to any
// manufacturer, so there's nothing here to fabricate or verify per-brand.

export interface BuyingGuideCriterion {
  title: string;
  description: string;
}

export interface BrandBuyingGuideContent {
  eyebrow: string;
  heading: string;
  intro: string;
  criteria: BuyingGuideCriterion[];
  closing: string;
}

export const brandBuyingGuide: BrandBuyingGuideContent = {
  eyebrow: "Karar Öncesi",
  heading: "İşitme Cihazı Seçerken Nelere Dikkat Edilmeli?",
  intro:
    "Doğru seçim, marka karşılaştırmasından önce gelen birkaç temel soruya bağlıdır. Karar vermeden önce aşağıdaki kriterleri gözden geçirmeniz faydalı olur.",
  criteria: [
    {
      title: "İşitme Kaybının Derecesi",
      description:
        "Hafif, orta veya ileri derecede işitme kaybı, size uygun cihaz teknolojisini belirleyen ilk kriterdir.",
    },
    {
      title: "Yaşam Tarzı",
      description:
        "Aktif, sosyal veya sakin bir günlük yaşam, ihtiyaç duyacağınız özellikleri doğrudan etkiler.",
    },
    {
      title: "Bluetooth İhtiyacı",
      description:
        "Telefon, TV ve diğer cihazlarla kablosuz bağlantının sizin için ne kadar önemli olduğunu netleştirin.",
    },
    {
      title: "Şarjlı mı, Pilli mi?",
      description:
        "Şarj edilebilir ve pil değişimli sistemler arasındaki tercih, kullanım alışkanlıklarınıza bağlıdır.",
    },
    {
      title: "Servis ve Teknik Destek",
      description:
        "Cihazın bakım, ayar ve onarım süreçlerinde ulaşabileceğiniz bir destek ağı önemlidir.",
    },
    {
      title: "SGK Desteği",
      description:
        "Seçtiğiniz cihazın SGK kapsamında olup olmadığı, bütçe planlamanızı doğrudan etkiler.",
    },
    {
      title: "Deneme Süreci",
      description:
        "Kesin karar vermeden önce cihazı gerçek ortamda deneyebilmek, doğru seçim şansınızı artırır.",
    },
    {
      title: "Kulak Yapısı ve Konfor",
      description:
        "Kulak yapınıza uygun model ve kalıp, günlük kullanım konforunu doğrudan belirler.",
    },
  ],
  closing:
    "Bu kriterleri netleştirdikten sonra, size en uygun markayı uzman desteğiyle birlikte belirleyebilirsiniz.",
};
