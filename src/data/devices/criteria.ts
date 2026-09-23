// M3 (Criteria) content for the /isitme-cihazlari hub page. Renders
// through the now-generic BrandCriteria component. Distinct framing from
// brands/criteria.ts (which reasons about brand-level differentiators):
// this one reasons about DEVICE TYPE/FORM FACTOR decision axes — degree
// of hearing loss, visibility, connectivity, battery system — the
// factors that actually separate a BTE from a CIC from a rechargeable
// model, not brand-vs-brand claims.

import { Ruler, EyeOff, Bluetooth, BatteryCharging, Droplets, Baby } from "lucide-astro";
import type { BrandCriteriaContent } from "../../components/brands/BrandCriteria/BrandCriteria.astro";

export const devicesCriteria: BrandCriteriaContent = {
  eyebrow: "Seçim Rehberi",
  heading: "Doğru Cihaz Türünü Nasıl Seçersiniz?",
  intro:
    "İşitme cihazı türleri; işitme kaybı derecesi, görünürlük, bağlantı özellikleri ve pil sistemi açısından farklılık gösterir. Doğru tür, bu kriterlerin sizin için taşıdığı önceliğe göre belirlenir.",
  criteria: [
    {
      icon: Ruler,
      title: "İşitme Kaybının Derecesi",
      description:
        "Hafif, orta veya ileri derecede işitme kaybı, size uygun cihaz türünü belirleyen ilk ve en önemli kriterdir.",
    },
    {
      icon: EyeOff,
      title: "Görünürlük Tercihi",
      description:
        "Kulak arkası modeller daha esnek güç seçenekleri sunarken, görünmez modeller estetik önceliği olan kullanıcılar için tercih edilir.",
    },
    {
      icon: Bluetooth,
      title: "Bağlantı İhtiyacı",
      description:
        "Telefon, TV ve diğer cihazlarla kablosuz bağlantı istiyorsanız, bu özelliği destekleyen bir cihaz türü tercih etmeniz gerekir.",
    },
    {
      icon: BatteryCharging,
      title: "Pil Sistemi",
      description:
        "Şarj edilebilir ve pil değişimli sistemler arasındaki tercih, kullanım alışkanlıklarınıza ve pratiklik beklentinize bağlıdır.",
    },
    {
      icon: Droplets,
      title: "Kullanım Ortamı",
      description:
        "Aktif ve terli bir yaşam tarzı sürüyorsanız, suya dayanıklı bir cihaz türü sizin için daha uygun olabilir.",
    },
    {
      icon: Baby,
      title: "Kullanıcı Yaşı",
      description:
        "Çocuklarda büyümeye uygun, dayanıklı ve güvenli tasarımlı cihaz türleri öncelikli olarak değerlendirilir.",
    },
  ],
  closing:
    "Size en uygun cihaz türünü belirlemenin en güvenilir yolu, uzman işitme testi sonrasında farklı seçenekleri birlikte değerlendirmektir.",
};
