// "Belge Bilgisi Kimler İçin Önemlidir?" section for the
// /sgk/gerekli-belgeler page. Reuses the shared BrandPageIdealUser
// component in its original candidacy sense.

import { UserCheck, RefreshCcw, Baby, Briefcase, ShieldQuestion } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const gerekliBelgelerIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN ÖNEMLİDİR?",
  heading: "Belge Bilgisi Kimler İçin Önemlidir?",
  intro: "Aşağıdaki profiller, belge hazırlığının sıkça merak edildiği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: UserCheck,
      title: "İlk Kez Başvuracak Kullanıcılar",
      description: "SGK sürecine yeni başlayanlar için hangi belgelerin gerektiğini bilmek süreci kolaylaştırır.",
      suggestedFamilies: ["İlk Başvuru"],
    },
    {
      icon: RefreshCcw,
      title: "Cihazını Yenileyecek Kullanıcılar",
      description: "Cihaz yenileme başvurusunda istenen belgeler, ilk başvurudan farklılık gösterebilir.",
      suggestedFamilies: ["Yenileme Hakkı"],
    },
    {
      icon: Baby,
      title: "Çocuk Hastaların Aileleri",
      description: "Çocuklar için başvuruda, veli/vasi belgeleri gibi ek belgeler istenebilir.",
      suggestedFamilies: ["Çocuklarda SGK"],
    },
    {
      icon: Briefcase,
      title: "Emekli Vatandaşlar",
      description: "Emekliler için bazı belgelerin (örneğin emekli kimliği) hazır bulundurulması önerilir.",
      suggestedFamilies: ["Emekli Kategorisi"],
    },
    {
      icon: ShieldQuestion,
      title: "Belge Sürecini Merak Edenler",
      description: "Başvuru öncesinde neye ihtiyaç duyacağını önceden öğrenmek isteyen kullanıcılar için faydalıdır.",
      suggestedFamilies: ["Genel Bilgi"],
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
  accentColorIconBg: "rgb(79 70 229 / 0.1)",
};
