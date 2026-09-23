// M3 (Criteria) content for the /hizmetlerimiz hub page. Renders through
// the now-generic BrandCriteria component. Distinct framing from
// brands/criteria.ts and devices/criteria.ts: this one reasons about
// WHICH SERVICE CATEGORY fits your current situation — not a product or
// brand decision, but a process-stage decision.

import { ClipboardCheck, Sliders, Wrench, RefreshCcw, ShieldCheck, HandCoins } from "lucide-astro";
import type { BrandCriteriaContent } from "../../components/brands/BrandCriteria/BrandCriteria.astro";

export const servicesCriteria: BrandCriteriaContent = {
  eyebrow: "Hizmet Rehberi",
  heading: "Hangi Hizmete İhtiyacınız Var?",
  intro:
    "İşitme sağlığı süreci, değerlendirmeden başlayıp cihaz uygulaması, ayar ve düzenli bakımla devam eder. Bulunduğunuz aşama, ihtiyacınız olan hizmeti belirler.",
  criteria: [
    {
      icon: ClipboardCheck,
      title: "Değerlendirme Aşamasındaysanız",
      description:
        "Henüz işitme testinizi yaptırmadıysanız, ücretsiz işitme testimizle sürecinize başlayabilirsiniz.",
    },
    {
      icon: Sliders,
      title: "Yeni Cihaz Sahibiyseniz",
      description:
        "Cihazınızın uygulanması ve kişiye özel programlanması, kullanım konforunuzu doğrudan etkiler.",
    },
    {
      icon: Wrench,
      title: "Cihazınızda Bir Sorun Varsa",
      description:
        "Ses kesintisi veya arıza gibi durumlarda teknik servis desteğimizden faydalanabilirsiniz.",
    },
    {
      icon: RefreshCcw,
      title: "Düzenli Bakım İstiyorsanız",
      description:
        "Periyodik bakım ve temizlik, cihazınızın ömrünü ve performansını korumaya yardımcı olur.",
    },
    {
      icon: ShieldCheck,
      title: "Garanti Kapsamınızı Merak Ediyorsanız",
      description:
        "Cihazınızın garanti durumu ve kapsamı hakkında bilgi almak istiyorsanız, garanti işlemleri sayfamızı inceleyebilirsiniz.",
    },
    {
      icon: HandCoins,
      title: "SGK Desteğinden Yararlanmak İstiyorsanız",
      description:
        "SGK süreciyle ilgili sorularınız için Bilgi Merkezi'mizdeki SGK & Haklar sayfalarını inceleyebilirsiniz.",
    },
  ],
  closing:
    "Hangi aşamada olduğunuzdan emin değilseniz, uzman ekibimiz sizi doğru hizmete yönlendirir.",
};
