// SGK Rehber Hub — SGK pillar page, redesign plan §G/§11. Renders through
// the existing BrandPageRelatedContent (first use on this page). Exactly
// the 5 real SGK sub-pages — the pillar stays "genel rehber," each linked
// page is "tek bir konunun derinlemesine cevabı" (redesign brief §11).
// This component's heading id (brand-page-related-title) is also the
// target of SgkProcess's closing CTA.
import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const sgkRelatedContent: BrandPageRelatedContentContent = {
  badge: "SGK REHBER HUB",
  heading: "Konuyu Derinlemesine İnceleyin",
  links: [
    {
      label: "SGK Katkı Payı",
      description: "Katkı payının yaş grubu ve sigortalılık durumuna göre nasıl oluştuğunu öğrenin.",
      href: "/sgk/katki-payi",
    },
    {
      label: "Rapor Süreci",
      description: "Sağlık kurulu (heyet) raporunun KBB muayenesinden reçeteye nasıl alındığını öğrenin.",
      href: "/sgk/rapor-sureci",
    },
    {
      label: "Gerekli Belgeler",
      description: "SGK başvurusu için hangi belgelerin gerektiğini tek tek inceleyin.",
      href: "/sgk/gerekli-belgeler",
    },
    {
      label: "Çocuklarda SGK",
      description: "Çocuklarda SGK işitme cihazı desteğinin nasıl işlediğini öğrenin.",
      href: "/sgk/cocuklarda-sgk",
    },
    {
      label: "Yenileme Hakkı",
      description: "İşitme cihazınızı ne zaman ve nasıl yenileyebileceğinizi öğrenin.",
      href: "/sgk/yenileme-hakki",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.22)",
  accentColorBadgeText: "#2563eb",
};
