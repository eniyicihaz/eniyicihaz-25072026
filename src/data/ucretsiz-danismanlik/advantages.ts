// "Avantajları" bento section for the /neden-orijinal/
// ucretsiz-danismanlik page — framed as the advantages of the free
// consultancy process rather than a generic device-feature list.
// Renders through the shared BrandPageAdvantages component — items must
// be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { Stethoscope, Users, Wallet, ShieldCheck, Headphones, RefreshCw } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const ucretsizDanismanlikAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Ücretsiz Danışmanlıktan Faydalanmanın Avantajları",
  intro: "Objektif değerlendirmeyi ve şeffaf bilgilendirmeyi ön planda tutan bir yaklaşımı sıkça önerilen hâle getiren nedenler.",
  hero: {
    icon: Stethoscope,
    category: "Ücretsiz İşitme Testi",
    title: "Objektif Değerlendirmeyle Başlayan Süreç",
    description: "Ücretsiz işitme testi, size uygun cihaz seçiminin sağlam bir temelde başlamasını sağlar.",
  },
  items: [
    {
      icon: Users,
      category: "Satış Baskısı Yok",
      title: "İhtiyacınıza Odaklanan Yaklaşım",
      description: "Danışmanlık sürecimiz, belirli bir ürünü satmak yerine ihtiyacınıza uygun çözümü bulmayı amaçlar.",
    },
    {
      icon: Wallet,
      category: "Bütçe Uyumu",
      title: "Bütçenize Uygun Seçenekler",
      description: "Farklı fiyat aralıklarındaki seçenekler, ihtiyacınıza ve bütçenize göre birlikte değerlendirilir.",
    },
    {
      icon: ShieldCheck,
      category: "SGK Danışmanlığı",
      title: "SGK Süreciyle İlgili Bilgilendirme",
      description: "SGK desteği ve uygunluk kriterleri hakkında da danışmanlık alabilirsiniz.",
    },
    {
      icon: Headphones,
      category: "Demo Deneyimi",
      title: "Karar Öncesi Cihaz Deneme İmkânı",
      description: "Karar vermeden önce cihazı deneyerek günlük kullanım deneyimini değerlendirebilirsiniz.",
    },
    {
      icon: RefreshCw,
      category: "Sürekli Destek",
      title: "Satış Sonrası da Devam Eden Danışmanlık",
      description: "Danışmanlık süreci, cihaz teslim edildikten sonra da devam eder.",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorIconBg: "rgb(13 148 136 / 0.1)",
  accentColorHoverBorder: "rgb(13 148 136 / 0.45)",
};
