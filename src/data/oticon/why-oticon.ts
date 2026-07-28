// M6 (Why Oticon) content for the Oticon brand page (/markalar/oticon),
// directly under Models (M5). Independent of the /markalar hub page's
// M1...M8 modules — its own data namespace, only ever holding this one
// brand's content.
//
// The page's first strong conversion-oriented section — not new
// information, a synthesis of facts already established elsewhere on this
// page (BrainHearing in Hero/About, the model range in M5, Play PX/Opn
// Play/Xceed Play as pediatric lines, Xceed for severe-to-profound loss).
// Copy is written fresh here (not copy-pasted from M3) even where the
// underlying fact repeats, to avoid literal duplication on the same page.

import { Brain, Cpu, Layers, BatteryCharging, Baby, Volume2 } from "lucide-astro";

export interface WhyOticonReason {
  icon: any;
  category: string;
  title: string;
  description: string;
}

export interface OticonWhyOticonContent {
  badge: string;
  heading: string;
  intro: string;
  hero: WhyOticonReason;
  items: WhyOticonReason[];
}

export const oticonWhyOticon: OticonWhyOticonContent = {
  badge: "NEDEN OTİCON?",
  heading: "Kullanıcılar Neden Oticon Tercih Ediyor?",
  intro: "Oticon'u farklı kılan yaklaşımı ve ürün çeşitliliğini bir arada sunuyoruz.",
  hero: {
    icon: Brain,
    category: "Marka Felsefesi",
    title: "BrainHearing® Yaklaşımı",
    description:
      "Sadece kulağa değil, beynin sesleri işleme şekline odaklanan bir yaklaşım benimser.",
  },
  items: [
    {
      icon: Cpu,
      category: "Teknoloji",
      title: "Yapay Zekâ Destekli İşleme",
      description: "Ortamı analiz ederek ses deneyimini gerçek zamanlı olarak destekler.",
    },
    {
      icon: Layers,
      category: "Ürün Yelpazesi",
      title: "Geniş Model Ailesi",
      description: "Intent'ten Own SI'a kadar farklı ihtiyaçlara uygun çözümler sunar.",
    },
    {
      icon: BatteryCharging,
      category: "Kullanım",
      title: "Şarjlı ve Pilli Seçenekler",
      description: "Kullanım alışkanlıklarına göre farklı alternatifler sunar.",
    },
    {
      icon: Baby,
      category: "Pediatrik",
      title: "Çocuklar İçin Çözümler",
      description: "Play PX, Opn Play ve Xceed Play serileri çocuklar için geliştirilmiştir.",
    },
    {
      icon: Volume2,
      category: "Güçlü Kayıplar",
      title: "İleri Derece Kayıplar İçin Çözümler",
      description: "Xceed ailesi güçlü amplifikasyon ihtiyacı olan kullanıcılar için geliştirilmiştir.",
    },
  ],
};
