// "Hızlı Bilgiler" strip right under the Hero — redesign plan §1.
// Renders through BrandPageOverview, used on this page for the first
// time sitewide (brand-neutral primary-blue "ID card" register,
// deliberately different from the page's own teal accent — see the
// component's own header comment for why).
import type { BrandPageOverviewContent } from "../../components/brand-page/BrandPageOverview/BrandPageOverview.astro";

export const cihazDenemeOverview: BrandPageOverviewContent = {
  badge: "HIZLI BİLGİLER",
  heading: "Cihaz Deneme Süreci Bir Bakışta",
  intro: "Karar vermeden önce bilmeniz gereken temel bilgiler.",
  cards: [
    { icon: "calendar", label: "Deneme Süresi", value: "Günler / Haftalar" },
    { icon: "map-pin", label: "Deneme Merkezi", value: "Darıca" },
    { icon: "sparkles", label: "Maliyet", value: "Ücretsiz" },
    { icon: "users", label: "Model Seçenekleri", value: "Birden Fazla Marka" },
  ],
};
