// "Farklı ihtiyaçlara örnek modeller" — 5 gerçek model, marka sayfalarının kendi
// doğrulanmış model verisinden (src/data/{marka}/models.ts) alınır: Oticon Intent,
// Starkey NuEar — NuEar Circa, Signia Styletto, Widex SmartRIC, Phonak Naída.
// (Ana sayfanın `homeModels` verisi bilerek kullanılmadı: Signia Styletto'yu orada
// "Kulak İçi", signia/models.ts'te "RIC" olarak etiketli; marka sayfası verisi esas alındı.)
// Fiyat gösterilmez. Amaç form, kullanım senaryosu, özellik ve marka keşfidir;
// her kart kendi marka sayfasına gider (model sayfası yoktur — sahte bağlantı üretilmez).
import { homeModels } from "../home/models";
import { oticonModels } from "../oticon/models";
import { phonakModels } from "../phonak/models";
import { signiaModels } from "../signia/models";
import { widexModels } from "../widex/models";
import { nuearModels } from "../nuear/models";
import type { BrandPageModelsContent, BrandPageProduct } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

function find(items: { slug: string }[], slug: string) {
  const item = items.find((i) => i.slug === slug);
  if (!item) throw new Error(`Model verisi bulunamadı: ${slug}`);
  return item as unknown as BrandPageProduct;
}

const items: BrandPageProduct[] = [
  { ...find(oticonModels.items, "intent"), category: "Oticon", href: "/markalar/oticon/" },
  { ...find(nuearModels.items, "circa"), category: "Starkey NuEar", href: "/markalar/nuear/" },
  { ...find(signiaModels.items, "styletto"), category: "Signia", href: "/markalar/signia/" },
  { ...find(widexModels.items, "smartric"), category: "Widex", href: "/markalar/widex/" },
  { ...find(phonakModels.items, "naida"), category: "Phonak", href: "/markalar/phonak/" },
];

export const modelsShowcase: BrandPageModelsContent = {
  ...homeModels,
  badge: "GERÇEK MODELLER",
  heading: "Farklı İhtiyaçlara Örnek Modeller",
  intro:
    "Aşağıdaki beş model, farklı markaların farklı yaklaşımlarını gerçek ürünler üzerinden göstermek için seçildi: yapay zekâ destekli, şarjlı RIC, ince tasarımlı, gürültü azaltmaya yönelik ve güçlü kayıplara yönelik. Model fiyatı yazmıyoruz; fiyat için fiyat rehberimize bakabilirsiniz.",
  ctaLabel: "Marka sayfası",
  items,
};
