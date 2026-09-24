// "Ses Size Göre Ayarlanır." — Kişiye Özel Ayar hero (plan §2). Renders
// through the new SoundProfileHero component. accentColor: indigo
// (#4f46e5) — deliberately distinct from Cihaz Deneme's teal and Kişiye
// Özel Programlama's violet, so the two "kişiye özel" pages never share
// an accent identity even though they're cross-linked.
import { contactConfig } from "../../config";
import type { SoundProfileHeroContent } from "../../components/shared/SoundProfileHero/SoundProfileHero.astro";

export const kisiyeOzelAyarHero: SoundProfileHeroContent = {
  eyebrow: "KİŞİYE ÖZEL AYAR",
  heading: "Ses Size Göre Ayarlanır.",
  subheading:
    "İşitme cihazınızın günlük yaşamınızdaki seslere ve sizin dinleme alışkanlıklarınıza uygun şekilde ayarlanması, cihazdan alınan deneyimin önemli bir parçasıdır.",
  paragraph:
    "Darıca'da işitme cihazı kullanan kişilerin cihazlarından beklediği verimi alabilmesi için yalnızca doğru cihazı seçmek yeterli değildir. Cihazın kişinin işitme kaybına, günlük yaşamına ve dinleme ihtiyaçlarına uygun şekilde ayarlanması gerekir.",
  ctaPrimary: { label: "Ücretsiz Değerlendirme", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Bilgi Al", href: contactConfig.whatsapp.href },
  ctaTertiary: { label: "Cihazımı Getireyim", href: "#mevcut-cihaz" },
  panelLabel: "Kişiye Özel Ayar Paneli",
  panelCaption: "Her frekans bandı, sizin işitme profilinize ve dinleme ortamlarınıza göre ayrı değerlendirilir.",
  bars: [
    { label: "125Hz", value: 38 },
    { label: "250Hz", value: 52 },
    { label: "500Hz", value: 46 },
    { label: "1kHz", value: 68 },
    { label: "2kHz", value: 84, highlighted: true },
    { label: "4kHz", value: 60 },
    { label: "8kHz", value: 34 },
  ],
  accentColor: "#4f46e5",
};
