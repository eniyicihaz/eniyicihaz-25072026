// "İşitme Kaybı Nedir?" section for the /rehberler/isitme-kaybi-nedir
// page. Renders through the shared BrandPageIntro component. Full
// health-content safety discipline returns here, same as the
// Değerlendirme series — paragraph 4 is the load-bearing disclaimer:
// general information, not a self-diagnosis tool.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const isitmeKaybiNedirIntro: BrandPageIntroContent = {
  badge: "İŞİTME KAYBI NEDİR?",
  heading: "İşitme Kaybı Nedir?",
  paragraphs: [
    "Sesler, dış kulaktan orta kulağa, oradan iç kulağa ve işitme siniri yoluyla beyne ulaşarak anlamlı hale gelir; işitme kaybı, bu yolun herhangi bir noktasındaki aksama sonucu ortaya çıkar.",
    "İşitme kaybı; doğuştan olabileceği gibi, yaşam boyunca yaş, gürültü maruziyeti, enfeksiyonlar veya genetik faktörler gibi birçok nedenle sonradan da gelişebilir.",
    "İşitme kaybı, tek bir tür veya derece değildir; aksamanın kulaktaki yerine göre farklı türlere, işitme eşiğine göre ise farklı derecelere ayrılır.",
    "Bu sayfa genel bir bilgilendirme amacı taşır, kendi kendine tanı koymak için kullanılmamalıdır; işitme durumunuz yalnızca bir odyometrist tarafından yapılan işitme testiyle belirlenebilir.",
  ],
  stats: [
    { value: "Kulaktan Beyne", label: "İşitme Yolu" },
    { value: "İletim, Sensörinöral, Karma", label: "Ana Türler" },
    { value: "Doğuştan veya Sonradan", label: "Başlangıç Şekli" },
    { value: "Odyometri ile Belirlenir", label: "Kesin Tanı Yöntemi" },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
