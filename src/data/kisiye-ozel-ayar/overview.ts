// Hızlı Bilgiler — Kişiye Özel Ayar, plan §3. Renders through the
// existing BrandPageOverview (zero code changes), same brand-neutral
// blue "ID card" pattern used right after every BrandPage-family hero.
import type { BrandPageOverviewContent } from "../../components/brand-page/BrandPageOverview/BrandPageOverview.astro";

export const kisiyeOzelAyarOverview: BrandPageOverviewContent = {
  badge: "HIZLI BİLGİLER",
  heading: "Kişiye Özel Ayar Süreci Hakkında",
  intro: "Randevunuza başlamadan önce merak edebileceğiniz birkaç pratik bilgi.",
  cards: [
    { icon: "map-pin", label: "Merkez Konum", value: "Darıca" },
    { icon: "calendar", label: "Süre", value: "Randevuda Netleşir" },
    { icon: "cpu", label: "Kapsam", value: "Marka Bağımsız" },
    { icon: "users", label: "Yöntem", value: "Geri Bildirime Dayalı" },
  ],
};
