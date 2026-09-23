// M4 (Decision) content for the /hizmetlerimiz hub page. Renders through
// the now-generic BrandDecision component. Scenario set reasons about
// SERVICE fit — which stage of the process matches the reader's current
// situation, distinct from brands' (brand fit) and devices' (device-type
// fit) own scenario sets.

import { Stethoscope, Sliders, Wrench, RefreshCcw, ShieldQuestion, Radio } from "lucide-astro";
import type { BrandDecisionContent } from "../../components/brands/BrandDecision/BrandDecision.astro";

export const servicesDecision: BrandDecisionContent = {
  eyebrow: "Karar Adımı",
  heading: "Şu An Hangi Aşamadasınız?",
  intro:
    "İhtiyacınız olan hizmet, işitme sağlığı sürecinde bulunduğunuz aşamaya göre değişir. Aşağıdaki tanımlardan size en yakın olanı bulmanız, doğru yönlendirmeyi almanızı kolaylaştırır.",
  scenarios: [
    {
      icon: Stethoscope,
      title: "Yeni Cihaz Almayı Düşünüyorum",
      description: "Ücretsiz işitme testiyle sürecinize başlayabilir, ihtiyacınızı netleştirebilirsiniz.",
    },
    {
      icon: Sliders,
      title: "Cihazımı Aldım, Ayarlanması Gerekiyor",
      description: "Cihaz uygulama ve kişiye özel programlama hizmetlerimizden faydalanabilirsiniz.",
    },
    {
      icon: Wrench,
      title: "Cihazım Arızalandı",
      description: "Teknik servis ekibimiz sorununuzu hızlı ve güvenilir bir şekilde çözer.",
    },
    {
      icon: RefreshCcw,
      title: "Düzenli Bakım Yaptırmak İstiyorum",
      description: "Periyodik bakım ve cihaz temizliği hizmetlerimiz cihazınızın ömrünü destekler.",
    },
    {
      icon: ShieldQuestion,
      title: "Garanti Kapsamında mıyım Bilmiyorum",
      description: "Garanti işlemleri sayfamızdan cihazınızın garanti durumunu öğrenebilirsiniz.",
    },
    {
      icon: Radio,
      title: "Merkeze Gelmeden Destek İstiyorum",
      description: "Uzaktan ayar hizmetimizle bazı ihtiyaçlarınız merkeze gelmeden karşılanabilir.",
    },
  ],
  panel: {
    title: "Hangi Aşamada Olursanız Olun",
    description:
      "Uzman ekibimiz, ücretsiz bir görüşme sonrasında size en uygun hizmeti birlikte belirler.",
    ctaPrimary: { label: "Hemen Ara", href: "tel:+905337733199" },
    ctaSecondary: { label: "WhatsApp'tan Yazın", href: "https://wa.me/905337733199" },
  },
};
