// "İlgili içerikler" (iç bağlantı merkezi) ve final CTA (4 aksiyon).
// Bağlantıların tamamı gerçek route'lara gider; yeni URL uydurulmamıştır.
import { contactConfig } from "../../config/contact";
import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";
import type { GuideCtaContent } from "../isitme-cihazi-fiyatlari/related-cta";

export const devicesRelated: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Kararınızı Netleştirmek İçin",
  links: [
    { label: "İşitme Cihazı Fiyatları", description: "Fiyatı neyin belirlediğini ve toplam maliyet kalemlerini okuyun.", href: "/isitme-cihazi-fiyatlari/" },
    { label: "SGK İşitme Cihazı Ödemesi", description: "Güncel SGK desteği, katkı payı ve başvuru sürecini öğrenin.", href: "/sgk-isitme-cihazi-odemesi/" },
    { label: "Ücretsiz İşitme Testi", description: "Doğru cihaz kararının ilk adımı: ücretsiz işitme değerlendirmesi.", href: "/degerlendirme/ucretsiz-isitme-testi/" },
    { label: "Cihaz Seçim Rehberi", description: "İhtiyaca göre cihaz seçmenin adımlarını adım adım okuyun.", href: "/rehberler/cihaz-secim-rehberi/" },
    { label: "İşitme Cihazı Markaları", description: "18 markayı ve modellerini marka sayfalarında inceleyin.", href: "/markalar/" },
    { label: "İşitme Cihazı Markalarını Karşılaştırın", description: "Markaları ve modelleri kullanım ihtiyacına göre karşılaştıran rehber.", href: "/isitme-cihazi-markalari/" },
    { label: "Cihaz Deneme", description: "Merkezde ücretsiz demo ve satın alarak 7 güne kadar deneme sürecini öğrenin.", href: "/uygulama-ayar/cihaz-deneme/" },
    { label: "Darıca İşitme Cihazları", description: "Gerçek merkezimizi, hizmetlerimizi ve Darıca'daki sürecimizi görün.", href: "/darica-isitme-cihazlari/" },
    { label: "Gebze İşitme Cihazları", description: "Gebze'den gelen danışanlarımız için Darıca merkezimizdeki süreç.", href: "/gebze-isitme-cihazlari/" },
    { label: "Çayırova İşitme Cihazları", description: "Çayırova'dan gelen danışanlarımız için Darıca merkezimizdeki süreç.", href: "/cayirova-isitme-cihazlari/" },
    { label: "Kocaeli İşitme Cihazları", description: "Kocaeli genelinde bilgi ve hizmet kanallarımız.", href: "/kocaeli-isitme-cihazlari/" },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};

const whatsappText = encodeURIComponent("Merhaba, işitme cihazları hakkında bilgi almak istiyorum.");

export const devicesCta: GuideCtaContent = {
  eyebrow: "Sıradaki Adım",
  heading: "İşitme cihazlarını birlikte değerlendirelim.",
  text: "Ücretsiz işitme testiyle başlayın; size uygun cihaz türlerini, özellikleri ve güncel fiyat bilgisini birlikte netleştirelim.",
  actions: [
    { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi/", variant: "primary" },
    { label: "Güncel Fiyat Bilgisi", href: "/isitme-cihazi-fiyatlari/", variant: "outline" },
    { label: "WhatsApp'tan Yazın", href: `${contactConfig.whatsapp.href}?text=${whatsappText}`, variant: "outline", external: true },
    { label: "Darıca Merkezimiz", href: "/darica-isitme-cihazlari/", variant: "outline" },
  ],
  reassurance: ["Merkezde ücretsiz demo", "Satın alarak 7 güne kadar deneme", "SGK anlaşmalı merkez"],
};
