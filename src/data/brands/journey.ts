// "Marka Seçimini Birlikte Netleştirelim" süreç grafiği (/markalar/) — 4 aşama.
// Tüm metinler sitedeki mevcut içerikle tutarlıdır (yeni hizmet, sıralama, klinik sonuç veya sayı iddiası yoktur):
//   • "merkezimizde 18 marka" → docs/COMPANY.md ve /neden-orijinal/marka-danismanligi/ meta açıklaması
//   • "sıralama değildir"     → PRINCIPLES.md §5 ve /isitme-cihazi-markalari/ politikası
// Bağlantı hedefleri dist'te doğrulandı: aynı sayfadaki #brand-showcase-title (BrandShowcase başlık kimliği),
// /markalar/oticon/ (marka sayfası, model aileleri bölümü var), /isitme-cihazi-markalari/ ve
// /neden-orijinal/marka-danismanligi/. Hiçbiri events.ts'te bir ölçüm olayına sınıflanmaz (tel/wa/harita/test yolu değil).
import { Compass, Layers, ListChecks, UserCheck } from "lucide-astro";

export type JourneyTone = "blue" | "teal" | "violet" | "amber";

export interface JourneyStep {
  tone: JourneyTone;
  icon: any;
  label: string;
  title: string;
  text: string;
  linkLabel: string;
  href: string;
}

export const brandJourney = {
  eyebrow: "Marka Yolculuğu",
  heading: "Marka Seçimini Birlikte Netleştirelim",
  intro:
    "Dört adımda ilerleyin: markaları tanıyın, model ailelerini inceleyin, seçenekleri kıyaslayın ve kararınızı uzmanla netleştirin.",
  steps: [
    {
      tone: "blue",
      icon: Compass,
      label: "Adım 01",
      title: "Markaları Keşfedin",
      text: "Öne çıkan markalara ve merkezimizde desteklenen diğer markalara tek sayfadan göz atın.",
      linkLabel: "Markalara göz atın",
      href: "#brand-showcase-title",
    },
    {
      tone: "teal",
      icon: Layers,
      label: "Adım 02",
      title: "Ürün Ailelerini Tanıyın",
      text: "Her marka sayfasında o markanın model ailelerini ve cihaz türü etiketlerini inceleyebilirsiniz.",
      linkLabel: "Örnek: Oticon sayfası",
      href: "/markalar/oticon/",
    },
    {
      tone: "violet",
      icon: ListChecks,
      label: "Adım 03",
      title: "Seçenekleri Değerlendirin",
      text: "Marka ve model ailelerini ölçütler üzerinden yan yana görün; bu bir sıralama değil, seçim rehberidir.",
      linkLabel: "Marka ve model rehberi",
      href: "/isitme-cihazi-markalari/",
    },
    {
      tone: "amber",
      icon: UserCheck,
      label: "Adım 04",
      title: "Uzman Desteği Alın",
      text: "Merkezimizde 18 marka arasından ihtiyacınıza uygun marka ve model ailesini birlikte değerlendiriyoruz.",
      linkLabel: "Marka danışmanlığı",
      href: "/neden-orijinal/marka-danismanligi/",
    },
  ] as JourneyStep[],
};
