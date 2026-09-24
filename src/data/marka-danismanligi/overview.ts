// Hızlı Bilgiler — Marka Danışmanlığı, plan §D. Renders through the
// existing BrandPageOverview (zero code changes).
import type { BrandPageOverviewContent } from "../../components/brand-page/BrandPageOverview/BrandPageOverview.astro";

export const markaDanismanligiOverview: BrandPageOverviewContent = {
  badge: "HIZLI BİLGİLER",
  heading: "Marka Danışmanlığı Hakkında",
  intro: "Değerlendirmeye başlamadan önce merak edebileceğiniz birkaç pratik bilgi.",
  cards: [
    { icon: "map-pin", label: "Merkez Konum", value: "Darıca" },
    { icon: "cpu", label: "Kapsam", value: "18 Marka" },
    { icon: "users", label: "Yöntem", value: "İhtiyaç Odaklı" },
    { icon: "sparkles", label: "Yaklaşım", value: "Marka Bağımsız" },
  ],
};
