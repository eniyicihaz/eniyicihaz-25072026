// "Deneyim Yolculuğu" — redesign plan §1, Bölüm 3. Renders through
// BrandBuyingGuide (numbered 01-06 editorial list, no icons/cards/track
// line), used on this page for the first time — deliberately does NOT
// repeat ProcessTimeline's node+track visual from the Ücretsiz İşitme
// Testi redesign. Replaces the retired evolution.ts/BrandPageTechEvolution
// section (which also carried a known 3-column/4-item grid bug).
import type { BrandBuyingGuideContent } from "../../components/brands/BrandBuyingGuide/BrandBuyingGuide.astro";

export const cihazDenemeJourney: BrandBuyingGuideContent = {
  eyebrow: "DENEYİM YOLCULUĞU",
  heading: "Cihaz Deneme Sürecinde Neler Yaşanır?",
  intro: "İhtiyaç görüşmesinden karar anına kadar izlenen altı adım.",
  criteria: [
    {
      title: "İhtiyacınızı Konuşuyoruz",
      description: "İhtiyaçlarınız ve bütçeniz doğrultusunda deneme için uygun model veya modeller birlikte belirlenir.",
    },
    {
      title: "Uygun Seçenekleri Belirliyoruz",
      description: "Seçilen cihaz, odyogramınıza göre deneme sürecine uygun şekilde programlanır.",
    },
    {
      title: "Cihazı Uyguluyoruz",
      description: "Cihazı belirlenen süre boyunca ev, iş ve sosyal ortamlarınızda kullanmaya başlarsınız.",
    },
    {
      title: "Kişisel Ayarları Yapıyoruz",
      description: "Deneme süresinin ortasında, deneyiminiz değerlendirilir ve gerekirse küçük ayarlar yapılır.",
    },
    {
      title: "Günlük Kullanım Deneyiminizi Değerlendiriyoruz",
      description: "Farklı ortamlardaki deneyiminizi birlikte gözden geçiririz.",
    },
    {
      title: "Geri Bildirimlerinize Göre Yeniden Ayarlıyoruz",
      description: "Deneme süresi sonunda, deneyiminize göre satın alma kararınızı birlikte değerlendirirsiniz.",
    },
  ],
  closing: "Süreç boyunca hiçbir aşamada satın alma yükümlülüğünüz bulunmaz.",
};
