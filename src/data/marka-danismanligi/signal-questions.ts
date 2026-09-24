// 6 Soruda İhtiyacınız — Marka Danışmanlığı, plan §D Bölüm 2. Renders
// through the existing BrandPageSignalList (zero code changes). Bir
// öz-değerlendirme listesi, işlevsel bir quiz değil — kesin marka önerisi
// üretmiyor.
import { Ear, Home, Sparkles, Phone, Hand, Wallet } from "lucide-astro";
import type { BrandPageSignalListContent } from "../../components/brand-page/BrandPageSignalList/BrandPageSignalList.astro";

export const markaDanismanligiSignalQuestions: BrandPageSignalListContent = {
  badge: "6 SORUDA İHTİYACINIZ",
  heading: "Değerlendirmeye Başlamadan Önce Kendinize Sorun",
  intro: "Bu soruların cevapları, danışmanlık sırasında hangi marka ve modellerin sizin için anlamlı olabileceğini birlikte netleştirmemize yardımcı olur.",
  signals: [
    { icon: Ear, title: "İşitme Kaybınızın Düzeyi Nedir?", description: "Hafif, orta veya ileri düzey işitme kaybı, uygun teknoloji seviyesini etkiler." },
    { icon: Home, title: "Günlük Ortamlarınız Neler?", description: "Ev, iş, kalabalık veya dış ortam ağırlıklı bir yaşam farklı ihtiyaçlar doğurur." },
    { icon: Sparkles, title: "Teknolojiden Beklentiniz Ne Düzeyde?", description: "Temel işitme desteği mi, yoksa gelişmiş/akıllı özellikler mi önceliğiniz?" },
    { icon: Phone, title: "Telefon ve TV Kullanımınız Yoğun mu?", description: "Bağlantı seçenekleri, bu cihazları sık kullananlar için önem kazanabilir." },
    { icon: Hand, title: "Kullanım Kolaylığı Sizin İçin Önemli mi?", description: "Şarjlı/pilli tercih, cihazın büyüklüğü ve el becerisi burada rol oynar." },
    { icon: Wallet, title: "Bütçe Önceliğiniz Nedir?", description: "Farklı markalarda farklı fiyat/teknoloji seviyeleri değerlendirilebilir." },
  ],
  accentColor: "#b45309",
  accentColorBadgeBg: "rgb(180 83 9 / 0.08)",
  accentColorBadgeBorder: "rgb(180 83 9 / 0.35)",
  accentColorBadgeText: "#92400e",
};
