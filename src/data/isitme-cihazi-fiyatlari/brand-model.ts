// "Marka ve model" bölümü. Modeller, ana sayfanın doğrulanmış gerçek ürün
// verisinden (src/data/home/models.ts) gelir — yeni model veya özellik
// uydurulmaz; her model kendi marka sayfasına bağlanır. MODEL FİYATI YOK:
// doğrulanmış fiyat verisi olmadığı gibi, site fiyat yayımlamaz.
import { homeModels } from "../home/models";
import { nuearModels } from "../nuear/models";
import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";
import type { GuideCard, GuideSectionMeta } from "../../components/price-guide/price-guide.types";

export const brandModelSection: GuideSectionMeta = {
  id: "marka-model",
  eyebrow: "Marka ve Model",
  heading: "İşitme Cihazı Markaları ve Modelleri: Fiyatı Marka Değil, Seçim Belirler",
  intro:
    "18 markayla çalışıyoruz; hiçbirine bağlı değiliz. Aynı marka içinde bile seri, teknoloji seviyesi ve özellikler bedeli değiştirir. Bu yüzden 'hangi marka daha ucuz?' sorusu yerine 'hangi model benim ihtiyacıma uygun?' sorusu sorulmalıdır.",
};

/** Sayfada öne çıkarılan 6 marka — hepsinin gerçek /markalar/{slug}/ sayfası var. */
export const brandLinks: GuideCard[] = [
  { title: "Oticon", text: "Oticon işitme cihazı ailelerini, teknolojilerini ve hangi kullanıcılara uygun olabileceğini marka sayfasında inceleyin.", href: "/markalar/oticon/", linkLabel: "Oticon sayfası" },
  { title: "Phonak", text: "Phonak modellerini, cihaz türlerini ve özelliklerini marka sayfasında karşılaştırın.", href: "/markalar/phonak/", linkLabel: "Phonak sayfası" },
  { title: "Signia", text: "Signia ürün ailelerini ve şarjlı, kulak içi seçeneklerini marka sayfasında görün.", href: "/markalar/signia/", linkLabel: "Signia sayfası" },
  { title: "Widex", text: "Widex modellerini ve teknoloji yaklaşımını marka sayfasında inceleyin.", href: "/markalar/widex/", linkLabel: "Widex sayfası" },
  { title: "ReSound", text: "ReSound ailelerini ve özelliklerini marka sayfasında değerlendirin.", href: "/markalar/resound/", linkLabel: "ReSound sayfası" },
  { title: "NuEar", text: "NuEar modellerini ve hangi kullanıcılar için değerlendirilebileceğini marka sayfasında öğrenin.", href: "/markalar/nuear/", linkLabel: "NuEar sayfası" },
];

export const brandNote =
  "Marka sırası bir fiyat ya da kalite sıralaması değildir. Bir markanın hangi serisinin sizin işitme kaybınıza ve yaşam tarzınıza uygun olduğu, işitme değerlendirmesi sonrasında belirlenir.";

// Model listesi bu sayfaya özeldir — ana sayfanın `homeModels` verisi DEĞİŞMEZ.
// Ana sayfadaki iki Phonak modelinden (Audéo, Naída) Audéo çıkarıldı (Widex
// SmartRIC ile aynı RIC/Bluetooth/şarjlı profili); yerine repodaki GERÇEK
// NuEar Circa görseli (public/images/nuear/models/circa.webp) ve NuEar'ın
// kendi doğrulanmış model verisi (src/data/nuear/models.ts) kullanıldı.
// Yeni görsel üretilmedi. Phonak Naída, "güçlü kayıp" ihtiyacını temsil ettiği
// için kalır. Circa'nın etiketleri/açıklaması NuEar veri dosyasından gelir.
// Kartın görünen marka rozeti "NuEar", model adı "NuEar Circa",
// bağlantısı /markalar/nuear/ (kesin metin — kullanıcı kararı).
const nuearCirca = nuearModels.items.find((item) => item.slug === "circa");
if (!nuearCirca) throw new Error("NuEar Circa model verisi bulunamadı (src/data/nuear/models.ts)");

const priceGuideModelItems = homeModels.items
  .filter((item) => item.slug !== "phonak-audeo")
  .flatMap((item) =>
    item.slug === "oticon-intent"
      ? [item, { ...nuearCirca, category: "NuEar", href: "/markalar/nuear/" }]
      : [item],
  );

export const modelsShowcase: BrandPageModelsContent = {
  ...homeModels,
  badge: "GERÇEK MODELLER",
  heading: "Farklı İhtiyaçlara Örnek Modeller",
  intro:
    "Aşağıdaki modeller farklı ihtiyaçlara örnek olarak seçildi. Model fiyatı yazmıyoruz; hangisinin sizin için uygun olduğu ve güncel bilgi, işitme testi sonrasında netleşir.",
  ctaLabel: "Marka sayfası",
  items: priceGuideModelItems,
};
