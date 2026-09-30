import { Activity, Home, EyeOff, BatteryCharging, Bluetooth } from "lucide-astro";
import type { BuyingCriteriaContent } from "./buying-criteria.types";

// Locked content — docs/BUYING_CRITERIA_SPECIFICATION.md §2. Every criterion
// is deliberately non-diagnostic and brand/model-independent (PRINCIPLES §5)
// — no price criterion (price is never a claim on this site). `image` is the
// custom-produced conceptual/lifestyle illustration
// (docs/BUYING_CRITERIA_SPECIFICATION.md §6) — NOT stock and NOT a photo of
// the real Avrasya center (real center photography lives in HomeLocal).
export const buyingCriteria: BuyingCriteriaContent = {
  eyebrow: "Karar Vermeden Önce",
  heading: "İşitme Cihazı Seçerken Nelere Bakılır?",
  intro:
    "Doğru cihaz, markadan çok, sizin gündelik ihtiyaçlarınıza göre belirlenir. İşte gözden geçirmenizde fayda olan birkaç gerçek kriter.",
  image: {
    src: "/images/homepage/buying-criteria-isitme-cihazi-secimi.webp",
    alt: "Bir işitme uzmanı, masanın üzerindeki farklı işitme cihazı modellerini göstererek karşısındaki kişiyle cihaz seçimini konuşuyor",
    width: 1672,
    height: 941,
  },
  criteria: [
    {
      icon: Activity,
      title: "İşitme kaybının derecesi",
      description: "Hafif, orta veya ileri derece kayıplar farklı güç aralığı gerektirebilir.",
    },
    {
      icon: Home,
      title: "Günlük ortamınız",
      description: "Sessiz bir ev mi, kalabalık bir iş ortamı mı — kullanım ortamınız cihaz tipini etkiler.",
    },
    {
      icon: EyeOff,
      title: "Görünürlük tercihiniz",
      description: "Kimileri fark edilmeyen bir cihaz ister, kimileri kullanım kolaylığını önceliklendirir — ikisi de geçerli bir tercihtir.",
    },
    {
      icon: BatteryCharging,
      title: "Şarj mı, pil mi",
      description: "Günlük şarj alışkanlığı mı, pil değiştirme kolaylığı mı sizin için daha pratik?",
    },
    {
      icon: Bluetooth,
      title: "Bağlantı ihtiyacınız",
      description: "Telefon, TV gibi cihazlarla kablosuz bağlantı önemliyse bu da bir kriterdir.",
    },
  ],
  closing: "Bu kriterleri birlikte netleştirmek isterseniz, ücretsiz değerlendirmemizde konuşabiliriz.",
  hubCta: { label: "Cihaz tiplerini keşfedin", href: "/isitme-cihazlari/" },
};
