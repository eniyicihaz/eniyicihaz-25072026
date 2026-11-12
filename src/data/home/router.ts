// Ana sayfa — "Size nasıl yardımcı olabiliriz?" yönlendirme kartları (araştırma raporu U2 / R4).
//
// Beş ana ziyaretçi niyeti + fiyat bilgisi. HER KART MEVCUT BİR SAYFAYA gider; açıklamalar hedef sayfaların kendi
// meta açıklamalarındaki doğrulanmış bilgilerin kısaltmasıdır — yeni hizmet, süre, fiyat veya iddia yoktur.
// `also` yalnızca aynı niyete hizmet eden ikinci mevcut sayfadır (kart içinde ayrı bağlantı).
import { Ear, RefreshCw, Stethoscope, ShieldCheck, House, Tag } from "lucide-astro";

export interface HomeRouterItem {
  icon: typeof Ear;
  title: string;
  description: string;
  href: string;
  also?: { label: string; href: string };
}

export const homeRouter = {
  eyebrow: "Nereden başlamalı?",
  heading: "Size nasıl yardımcı olabiliriz?",
  intro: "Durumunuza en yakın başlığı seçin; ilgili sayfada adım adım bilgi bulabilirsiniz.",
  items: [
    {
      icon: Ear,
      title: "İlk kez işitme cihazı alacağım",
      description: "Derece, yaşam tarzı ve ihtiyaçlara göre doğru cihazı seçme rehberi.",
      href: "/rehberler/cihaz-secim-rehberi/",
    },
    {
      icon: RefreshCw,
      title: "Cihazımı yenilemek istiyorum",
      description: "SGK yenileme hakkı, gerekli belgeler ve süreç.",
      href: "/sgk/yenileme-hakki/",
      also: { label: "İhtiyaç değişikliğinde model geçişi", href: "/neden-orijinal/kolay-degisim/" },
    },
    {
      icon: Stethoscope,
      title: "İşitme testi yaptırmak istiyorum",
      description: "Darıca'da odyometrist eşliğinde ücretsiz işitme testi; sonuç nasıl okunur?",
      href: "/degerlendirme/ucretsiz-isitme-testi/",
      also: { label: "Online ön değerlendirme", href: "/degerlendirme/online-isitme-testi/" },
    },
    {
      icon: ShieldCheck,
      title: "SGK desteğini öğrenmek istiyorum",
      description: "Ödeme, katkı payı, rapor süreci ve gerekli belgeler.",
      href: "/sgk-isitme-cihazi-odemesi/",
    },
    {
      icon: House,
      title: "Evde hizmet almak istiyorum",
      description: "Kocaeli'nin tamamında ve İstanbul Anadolu Yakası'nın tüm ilçelerinde randevulu evde hizmet.",
      href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/",
    },
    {
      icon: Tag,
      title: "Fiyat bilgisi almak istiyorum",
      description: "Fiyatı neyin belirlediğini ve toplam maliyet kalemlerini okuyun.",
      href: "/isitme-cihazi-fiyatlari/",
    },
  ] as HomeRouterItem[],
};
