// "Avantajları" bento section for the /segmentler/standart-seri page —
// framed as the genuine feature advantages of the standard tier, same
// technique Premium Seri's advantages.ts uses. Renders through the
// shared BrandPageAdvantages component — items must be exactly 5
// entries: [slot1, slot2, slot3(wide), slot4(wide), slot5(wide)], same
// contract every brand/category page's advantages data follows.

import { Gauge, Wallet, Volume2, Radar, Bluetooth, ShieldCheck } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const standartSeriAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Standart Serinin Sunduğu Avantajlar",
  intro: "Standart seriyi geniş bir kullanıcı kitlesi için tercih edilen bir seçenek hâline getiren öne çıkan özellikler.",
  hero: {
    icon: Gauge,
    category: "Dengeli Performans",
    title: "Günlük İhtiyaçlara Uygun Dengeli Teknoloji",
    description: "Standart seri, günlük kullanım için gerekli temel ve orta düzey özellikleri bir arada sunar.",
  },
  items: [
    {
      icon: Wallet,
      category: "Fiyat-Performans",
      title: "Uygun Yatırım Dengesi",
      description: "Standart seri, premium serinin bazı ileri özellikleri olmadan dengeli bir fiyat sunar.",
    },
    {
      icon: Volume2,
      category: "Otomatik Ses Ayarı",
      title: "Günlük Kullanım İçin Otomatik Ayar",
      description: "Cihaz, günlük ortamlara göre sesi otomatik olarak ayarlayabilir.",
    },
    {
      icon: Radar,
      category: "Temel Yönlü Mikrofon",
      title: "Temel Düzeyde Konuşma Odaklanması",
      description: "Standart yönlü mikrofon desteği, günlük sohbetleri takip etmeye yardımcı olur.",
    },
    {
      icon: Bluetooth,
      category: "Temel Bağlantı",
      title: "Telefon ile Temel Kablosuz Bağlantı",
      description: "Çoğu standart seri model, telefon görüşmeleri için temel bağlantı desteği sunar.",
    },
    {
      icon: ShieldCheck,
      category: "Kanıtlanmış Teknoloji",
      title: "Geniş Kullanıcı Kitlesi Tarafından Tercih Edilir",
      description: "Standart seri, uzun süredir kullanılan ve güvenilirliği kanıtlanmış bir teknoloji seviyesi sunar.",
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorIconBg: "rgb(2 132 199 / 0.1)",
  accentColorHoverBorder: "rgb(2 132 199 / 0.45)",
};
