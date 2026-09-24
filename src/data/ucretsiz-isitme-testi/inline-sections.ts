// Small page-level content blocks that don't warrant their own component
// (redesign plan §2, Bölüm 8/9/12, and the closing line after Bölüm 4).
// Kept as data (not hardcoded copy in the .astro page) for consistency
// with the rest of the site's "veri component/sayfa içine gömülmez"
// convention (PROJECT_ARCHITECTURE.md §4), even though these render via
// plain markup in ucretsiz-isitme-testi.astro rather than a dedicated
// component.
import { contactConfig } from "../../config";

export const idealUserClosing = {
  text: "İşitmenizi merak ediyorsanız test için beklemeyin.",
  ctaLabel: "Ücretsiz İşitme Testi İçin Randevu Al",
  href: contactConfig.phone.href,
};

export const sgkSection = {
  eyebrow: "SGK DESTEĞİ",
  heading: "İşitme Cihazı Alımında SGK Desteğini Merak Ediyor Musunuz?",
  body: "SGK anlaşmalı bir işitme merkezi olarak, işitme cihazı alımınızda SGK desteğinden nasıl yararlanabileceğiniz konusunda size yol gösteriyoruz. Güncel katkı payı ve rapor süreciyle ilgili ayrıntılı rehberimizi inceleyebilirsiniz.",
  linkLabel: "SGK İşitme Cihazı Desteği",
  href: "/sgk-isitme-cihazi-odemesi",
};

export const trialSection = {
  eyebrow: "CİHAZ DENEME",
  heading: "İşitme Cihazınızı Almadan Önce Deneyin",
  body: "Test sonucunuza göre değerlendirilebilecek cihaz seçeneklerini, karar vermeden önce merkezimizde deneyebilirsiniz.",
  bullets: [
    "Farklı teknoloji seviyeleri",
    "Farklı cihaz tipleri",
    "İhtiyacınıza göre seçenekler",
    "Kişiye özel ayarlama",
  ],
};

export const onlineScreeningSection = {
  eyebrow: "MERKEZE GELMEDEN ÖNCE",
  heading: "Online İşitme Taramasını Deneyin",
  body: "Merkeze gelmeden önce, kulaklığınızla birkaç dakikada tamamlayabileceğiniz online işitme taramasını deneyebilirsiniz.",
  note: "Online tarama yalnızca bir ön değerlendirmedir; Darıca'daki merkezimizde yapılan ücretsiz işitme testinin yerine geçmez.",
  ctaLabel: "Online İşitme Taramasını Başlat",
  href: "/degerlendirme/online-isitme-testi",
};
