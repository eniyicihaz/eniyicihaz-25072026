// M4 (Decision) content for the /isitme-cihazlari hub page. Renders
// through the now-generic BrandDecision component. Distinct scenario set
// from brands/decision.ts (which reasons about brand fit): these
// scenarios reason about DEVICE TYPE fit — which physical form/feature
// set matches the reader's own situation.

import { Volume2, EyeOff, Droplets, Bluetooth, Baby, BatteryCharging } from "lucide-astro";
import type { BrandDecisionContent } from "../../components/brands/BrandDecision/BrandDecision.astro";

export const devicesDecision: BrandDecisionContent = {
  eyebrow: "Karar Adımı",
  heading: "Size Daha Yakın Olan Hangisi?",
  intro:
    "Doğru cihaz türü, işitme kaybınızın derecesine ve günlük önceliklerinize bağlıdır. Aşağıdaki tanımlardan size en yakın olanı bulmanız, doğru yönlendirmeyi almanızı kolaylaştırır.",
  scenarios: [
    {
      icon: Volume2,
      title: "İleri Derecede İşitme Kaybım Var",
      description: "Daha güçlü amplifikasyon sunan kulak arkası modeller sizin için uygun olabilir.",
    },
    {
      icon: EyeOff,
      title: "Görünürlük Beni Rahatsız Ediyor",
      description: "Göze çarpmayan, görünmez modelleri değerlendirmek isteyebilirsiniz.",
    },
    {
      icon: Droplets,
      title: "Aktif ve Terli Bir Yaşam Sürüyorum",
      description: "Suya dayanıklı bir cihaz türü, spor ve dış mekân kullanımında güven verir.",
    },
    {
      icon: Bluetooth,
      title: "Teknolojiyle Bağlantılı Kullanmak İstiyorum",
      description: "Bluetooth özellikli modeller, telefon ve diğer cihazlarla kablosuz bağlantı sunar.",
    },
    {
      icon: Baby,
      title: "Çocuğum İçin Cihaz Arıyorum",
      description: "Çocuklara özel tasarlanmış, dayanıklı ve güvenli modelleri inceleyebilirsiniz.",
    },
    {
      icon: BatteryCharging,
      title: "Pil Değiştirmekle Uğraşmak İstemiyorum",
      description: "Şarj edilebilir modeller, pil değişimi derdini ortadan kaldırır.",
    },
  ],
  panel: {
    title: "Hangi Tanım Size Uygun Olursa Olsun",
    description:
      "Uzman odyoloğumuz, ücretsiz işitme testi sonrasında size en uygun cihaz türünü birlikte belirler.",
    ctaPrimary: { label: "Hemen Ara", href: "tel:+905337733199" },
    ctaSecondary: { label: "WhatsApp'tan Yazın", href: "https://wa.me/905337733199" },
  },
};
