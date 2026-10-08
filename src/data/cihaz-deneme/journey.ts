// Cihaz Deneme — Süreç (Faz 2 P2): 6 adımdan 4'e. "Ara kontrol", "birden
// fazla model karşılaştırma" ve "deneme ortasında ayar" gibi doğrulanmamış
// adımlar çıkarıldı. Kaynak: SERVICE_SOT P6, P8, H7, H28.
import type { BrandBuyingGuideContent } from "../../components/brands/BrandBuyingGuide/BrandBuyingGuide.astro";

export const cihazDenemeJourney: BrandBuyingGuideContent = {
  eyebrow: "SÜREÇ",
  heading: "Cihaz Deneme Süreci Nasıl İşler?",
  intro: "Randevudan karara kadar süreç dört adımda ilerler.",
  criteria: [
    {
      title: "Randevu ve İşitme Değerlendirmesi",
      description: "Telefon veya WhatsApp'tan randevu alırsınız; size uygun cihazın belirlenebilmesi için önce işitme değerlendirmesi yapılır.",
    },
    {
      title: "Merkezde Demo",
      description: "Değerlendirme sonucuna göre uygun görülen cihaz, merkezde yaklaşık 20 dakikalık ücretsiz bir demoyla denenir.",
    },
    {
      title: "Satın Alarak Deneme",
      description: "Günlük hayatınızda denemek isterseniz cihazı satın alarak en fazla 7 gün ev, iş ve sosyal ortamlarınızda kullanırsınız.",
    },
    {
      title: "Karar ve İade",
      description: "Cihazı uygun bulmazsanız iade edebilirsiniz; ödediğiniz tutar kesintisiz iade edilir.",
    },
  ],
  closing: "Kulak içi cihazlar 7 günlük deneme kapsamı dışındadır; bu cihazlar merkezimizde demo olarak denenebilir.",
};
