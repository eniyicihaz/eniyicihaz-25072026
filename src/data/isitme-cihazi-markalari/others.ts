// "Diğer markalar" (gerçek liste) ve "Fiyat + SGK" (kısa yönlendirme).
//
// Diğer markalar: yalnızca COMPANY.md §8'de "çalışılan marka" olarak geçen VE sitede
// gerçek bir /markalar/{slug}/ sayfası bulunan 12 marka (src/data/brands/extended.ts —
// mevcut, doğrulanmış liste; buradan okunur, elle yeniden yazılmaz). Sırf keyword
// için marka veya sayfa üretilmez; sayfası olmayan markaya bağlantı verilmez.
// 6 ana marka + 12 diğer marka = COMPANY.md'deki 18 marka.
//
// Fiyat ve SGK: KOPYALANMAZ; yalnızca neden ayrı sayfada olduğu söylenir.
import { Tag, ShieldCheck } from "lucide-astro";
import { brandExtended } from "../brands/extended";
import type { BrandExtendedContent } from "../../components/brands/BrandExtended/BrandExtended.astro";
import type { GuideCard, GuideSectionMeta } from "../../components/price-guide/price-guide.types";

export const otherBrands: BrandExtendedContent = {
  ...brandExtended,
  eyebrow: "Diğer Markalar",
  heading: "Merkezimizde Çalıştığımız Diğer 12 Marka",
  intro:
    "Altı ana markanın yanı sıra aşağıdaki markalarla da çalışıyoruz; her birinin kendi marka sayfası vardır. Toplamda 18 marka ile hizmet veriyoruz ve hiçbirine bağlı değiliz.",
};

export const priceSgkSection: GuideSectionMeta = {
  id: "fiyat-sgk",
  eyebrow: "Fiyat ve SGK",
  heading: "Marka Farkı Fiyata ve SGK Desteğine Nasıl Yansır?",
  intro:
    "Bu iki konu kendi başına ayrıntılı sayfalarda ele alınır; burada yalnızca marka açısından kısaca yönlendiriyoruz. Fiyat listesi yayımlamıyor, tahmini rakam vermiyoruz.",
};

export const priceSgkCards: GuideCard[] = [
  {
    icon: Tag,
    tag: "Fiyat",
    title: "İşitme cihazı markaları arasında fiyat farkı neden oluşur?",
    text: "Fark yalnızca markadan değil; cihaz tipi, teknoloji seviyesi, özellikler ve hizmet kapsamından gelir. Aynı markanın farklı aileleri arasında da fark olabilir. Bu unsurları fiyat rehberimizde anlatıyoruz; kesin bilgi işitme değerlendirmesinden sonra verilir.",
    href: "/isitme-cihazi-fiyatlari/",
    linkLabel: "İşitme cihazı fiyatları rehberi",
  },
  {
    icon: ShieldCheck,
    tag: "SGK",
    title: "SGK işitme cihazı desteği marka farkı oluşturur mu?",
    text: "SGK süreci, belgeler ve güncel tutarlar her yıl değişebildiği için ayrı ve güncel tutulan rehberimizde yer alır. Marka ve model seçimi ile SGK desteğinin birlikte nasıl değerlendirileceğini, SGK anlaşmalı merkezimizde görüşmede anlatıyoruz.",
    href: "/sgk-isitme-cihazi-odemesi/",
    linkLabel: "SGK işitme cihazı ödemesi",
  },
];
