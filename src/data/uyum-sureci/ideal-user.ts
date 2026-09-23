// "Bu Rehber Kimler İçin Faydalıdır?" section for the /rehberler/
// uyum-sureci page. Reuses the shared BrandPageIdealUser component,
// here scoped to reader profiles rather than product candidacy.

import { Sparkles, History, Users, Clock, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const uyumSureciIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN FAYDALIDIR?",
  heading: "Bu Rehber Kimler İçin Faydalıdır?",
  intro: "Aşağıdaki profiller, uyum süreci rehberinden faydalanabilecek okuyucu gruplarını yansıtır.",
  profiles: [
    {
      icon: Sparkles,
      title: "Yeni Cihaz Kullanmaya Başlayanlar",
      description: "Cihazını yeni kullanmaya başlayan ve alışma sürecinde ne bekleyeceğini merak eden kullanıcılar için faydalıdır.",
      suggestedFamilies: ["Alışma Süreci Rehberliği"],
    },
    {
      icon: History,
      title: "Uzun Süredir İşitme Kaybı Yaşayanlar",
      description: "Uzun süredir tedavi edilmemiş bir işitme kaybından sonra cihaz kullanmaya başlayan kullanıcılar için özellikle faydalıdır.",
      suggestedFamilies: ["Uzun Vadeli Uyum"],
    },
    {
      icon: Users,
      title: "Aile Üyelerine Bilgi Vermek İsteyenler",
      description: "Yakınlarının uyum sürecini anlamasına yardımcı olmak isteyen kullanıcılar için pratik bir referans sunar.",
      suggestedFamilies: ["Aile Bilgilendirmesi"],
    },
    {
      icon: Clock,
      title: "Alışma Sürecinde Sabırsızlanan Kullanıcılar",
      description: "Sürecin ne kadar süreceğini merak eden ve gerçekçi bir zaman çerçevesi arayan kullanıcılar için faydalıdır.",
      suggestedFamilies: ["Gerçekçi Beklenti"],
    },
    {
      icon: RefreshCcw,
      title: "Farklı Bir Teknolojiye Geçiş Yapanlar",
      description: "Önceki cihazından farklı bir teknolojiye geçen kullanıcılar için yeniden uyum sürecine dair bilgi sunar.",
      suggestedFamilies: ["Model Geçiş Uyumu"],
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorIconBg: "rgb(124 58 237 / 0.1)",
};
