// "İlgili içerikler" (iç bağlantı merkezi) ve final CTA.
//
// Kullanıcının istediği iç bağlantı listesinde iki yol projede FARKLI adlarla
// bulunuyor; gerçek URL'ler kullanıldı (uydurma yol yok):
//   /isitme-cihazi-markalari/  → gerçek: /markalar/
//   /ucretsiz-isitme-testi/    → gerçek: /degerlendirme/ucretsiz-isitme-testi/
import { contactConfig } from "../../config/contact";
import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const priceGuideRelated: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Kararınızı Netleştirmek İçin",
  links: [
    { label: "İşitme Cihazı Çeşitleri", description: "Kulak arkası, kulak içi, şarjlı, Bluetooth ve diğer cihaz türlerini yakından tanıyın.", href: "/isitme-cihazlari/" },
    { label: "İşitme Cihazı Markaları", description: "18'den fazla markayı ve modellerini marka sayfalarında inceleyin.", href: "/markalar/" },
    { label: "İşitme Cihazı Markalarını Karşılaştırın", description: "Markaları ve modelleri kullanım ihtiyacına göre karşılaştıran rehber.", href: "/isitme-cihazi-markalari/" },
    { label: "SGK İşitme Cihazı Ödemesi", description: "Güncel SGK tutarları, katkı payı ve başvuru sürecini öğrenin.", href: "/sgk-isitme-cihazi-odemesi/" },
    { label: "Ücretsiz İşitme Testi", description: "Doğru cihaz kararının ilk adımı: ücretsiz işitme değerlendirmesi.", href: "/degerlendirme/ucretsiz-isitme-testi/" },
    { label: "Cihaz Seçim Rehberi", description: "İhtiyaca göre cihaz seçmenin adımlarını adım adım okuyun.", href: "/rehberler/cihaz-secim-rehberi/" },
    { label: "Cihaz Deneme", description: "Karar vermeden önce cihazı ücretsiz ve yükümlülüksüz deneyin.", href: "/uygulama-ayar/cihaz-deneme/" },
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

export interface GuideCtaContent {
  eyebrow: string;
  heading: string;
  text: string;
  actions: { label: string; href: string; variant: "primary" | "outline"; external?: boolean }[];
  reassurance: string[];
}

export const priceGuideCta: GuideCtaContent = {
  eyebrow: "Sıradaki Adım",
  heading: "Size uygun işitme cihazını ve güncel fiyat seçeneklerini birlikte değerlendirelim.",
  text: "Ücretsiz işitme testiyle başlayın; ihtiyacınıza uygun seçenekleri, SGK durumunuzu ve fiyat bilgisini birlikte netleştirelim.",
  actions: [
    { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi/", variant: "primary" },
    { label: "WhatsApp'tan Bilgi Al", href: contactConfig.whatsapp.href, variant: "outline", external: true },
    { label: "Darıca Merkezimize Gelin", href: "/darica-isitme-cihazlari/", variant: "outline" },
  ],
  reassurance: ["Baskı yok, taahhüt yok", "Deneme ücretsiz", "SGK anlaşmalı merkez"],
};
