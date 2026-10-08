// "İlgili içerikler" (iç bağlantı merkezi) ve final CTA (5 aksiyon).
// Bağlantıların tamamı gerçek route'lara gider; yeni URL uydurulmamıştır.
import { contactConfig } from "../../config/contact";
import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";
import type { GuideCtaContent } from "../isitme-cihazi-fiyatlari/related-cta";

export const brandsRelated: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Kararınızı Netleştirmek İçin",
  links: [
    { label: "İşitme Cihazları", description: "Cihaz türlerini, özellikleri ve seçim ölçütlerini tanıyın.", href: "/isitme-cihazlari/" },
    { label: "İşitme Cihazı Fiyatları", description: "Fiyatı neyin belirlediğini ve toplam maliyet kalemlerini okuyun.", href: "/isitme-cihazi-fiyatlari/" },
    { label: "SGK İşitme Cihazı Ödemesi", description: "Güncel SGK desteği, katkı payı ve başvuru sürecini öğrenin.", href: "/sgk-isitme-cihazi-odemesi/" },
    { label: "Tüm Markalar", description: "18 markanın dizinine ve marka sayfalarına tek yerden ulaşın.", href: "/markalar/" },
    { label: "Ücretsiz İşitme Testi", description: "Doğru cihaz ve marka kararının ilk adımı.", href: "/degerlendirme/ucretsiz-isitme-testi/" },
    { label: "Marka Danışmanlığı", description: "Marka ve model seçimi hakkında bilgi alın.", href: "/neden-orijinal/marka-danismanligi/" },
    { label: "Cihaz Deneme", description: "Merkezde ücretsiz demo ve satın alarak 7 güne kadar deneme sürecini öğrenin.", href: "/uygulama-ayar/cihaz-deneme/" },
    { label: "Darıca İşitme Cihazları", description: "Gerçek merkezimizi ve Darıca'daki sürecimizi görün.", href: "/darica-isitme-cihazlari/" },
    { label: "Gebze İşitme Cihazları", description: "Gebze'den gelen danışanlarımız için Darıca merkezimizdeki süreç.", href: "/gebze-isitme-cihazlari/" },
    { label: "Çayırova İşitme Cihazları", description: "Çayırova'dan gelen danışanlarımız için Darıca merkezimizdeki süreç.", href: "/cayirova-isitme-cihazlari/" },
    { label: "Kocaeli İşitme Cihazları", description: "Kocaeli genelinde bilgi ve hizmet kanallarımız.", href: "/kocaeli-isitme-cihazlari/" },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};

const whatsappText = encodeURIComponent("Merhaba, işitme cihazı markaları ve modelleri hakkında bilgi almak istiyorum.");

export const brandsCta: GuideCtaContent = {
  eyebrow: "Sıradaki Adım",
  heading: "Size uygun marka ve modeli birlikte değerlendirelim.",
  text: "Ücretsiz işitme testiyle başlayın; ihtiyacınıza uygun model ailelerini kriterlere göre birlikte netleştirelim.",
  actions: [
    { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi/", variant: "primary" },
    { label: "İşitme Cihazlarını Keşfet", href: "/isitme-cihazlari/", variant: "outline" },
    { label: "Güncel Fiyat Bilgisi", href: "/isitme-cihazi-fiyatlari/", variant: "outline" },
    { label: "WhatsApp'tan Yazın", href: `${contactConfig.whatsapp.href}?text=${whatsappText}`, variant: "outline", external: true },
    { label: "Darıca Merkezimiz", href: "/darica-isitme-cihazlari/", variant: "outline" },
  ],
  reassurance: ["18 marka", "18 markada teknik servis", "SGK anlaşmalı merkez"],
};
