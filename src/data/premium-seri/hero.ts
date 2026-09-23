// Hero content for the "Premium Seri" page (/segmentler/premium-seri).
// Renders through the shared BrandPageHero component — same component
// every /isitme-cihazlari/*, /teknolojiler/*, /ihtiyaciniza-gore/* and
// /neden-orijinal/* page uses. First page of the "Segmentler" series
// (see header.data.ts's brandsMega third column) — a new content genre
// within the Markalar mega, distinct from "Neden Orijinal" (trust/
// authenticity topics): this series covers product tiers that cut
// across all brands (premium/standart/ekonomik), plus three menu items
// that duplicate existing devicesMega topics by design (Şarj Edilebilir
// Seri, Görünmez Seri, Çocuk Serisi — these will link directly to the
// already-built /isitme-cihazlari/* pages rather than getting new
// duplicate content, per related-content.ts's own note).
//
// This page reverts to the original (non-trust) Brand Component
// Architecture used throughout devicesMega — candidacy profiles,
// genuine advantages, a real tier ladder — since "which product tier
// fits your needs" is the same kind of question as the İhtiyacınıza
// Göre pages, not a trust/authenticity topic.
//
// accentColor: altın sarısı / yellow-500 (#eab308) — opens a fresh
// accent rotation for the brandsMega "Segmentler" column (independent of
// both the devicesMega and "Neden Orijinal" rotations, since Segmentler
// pages live in yet another dropdown column and won't appear alongside
// either). Chosen deliberately for its premium/gold association, and
// kept a full hue-family away from the sitewide --color-warning token
// (#d97706, amber family) used in every page's "Dikkat Edilmesi
// Gerekenler" section, to avoid the kind of accidental collision caught
// and corrected earlier this session on the Hafif İşitme Kaybı page.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const premiumSeriHero: BrandPageHeroContent = {
  badge: "MARKALAR · SEGMENTLER · PREMIUM SERİ",
  headingLines: ["Premium Seri", "İşitme Cihazları"],
  paragraphs: [
    "Premium seri işitme cihazları; en gelişmiş yapay zeka destekli ses işleme, tam kablosuz bağlantı ve en yüksek performans seviyesini bir arada sunar.",
    "Avrasya İşitme'de, dünyaca tanınan markaların premium seri modellerini; en güncel teknolojiyle ve tam garanti güvencesiyle sunuyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "EN GELİŞMİŞ TEKNOLOJİ",
      accent: "#eab308",
      title: "Yapay Zeka Destekli En Üst Düzey Performans",
      description: "Premium seri modeller, markaların sunduğu en gelişmiş ses işleme teknolojilerini taşır.",
    },
    {
      label: "TAM BAĞLANTI",
      accent: "#ca8a04",
      title: "Eksiksiz Kablosuz Bağlantı Özellikleri",
      description: "Telefon, TV ve diğer cihazlarla kesintisiz bağlantı, premium serinin standart bir parçasıdır.",
    },
    {
      label: "EN YÜKSEK KİŞİSELLEŞTİRME",
      accent: "#a16207",
      title: "İhtiyaca Göre En İnce Ayrıntısına Kadar Kişiselleştirme",
      description: "Premium modeller, dinleme ortamına göre en ince ayrıntısına kadar kişiselleştirilebilir.",
    },
  ],
  image: {
    src: "/images/oticon/models/own-si.webp",
    alt: "Premium seri özellikleriyle öne çıkan Oticon Own SI işitme cihazı görseli",
  },
  floatingCard: {
    title: "Oticon Own SI",
    description: "Kişiye özel üretim, premium serinin bir örneği.",
  },
  accentColor: "#eab308",
  accentColorHover: "#ca8a04",
  accentColorSoft: "rgb(234 179 8 / 0.12)",
  accentColorBorder: "rgb(234 179 8 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(234,179,8,0.35) 0%, rgba(234,179,8,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #221a04 60%, #713f12 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#ca8a04",
  heroWaveOpacity: "0.18",
};
