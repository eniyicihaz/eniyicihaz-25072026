// M3 (Criteria) content for the /bilgi-merkezi hub page. Renders through
// the now-generic BrandCriteria component. Distinct framing from the
// other three hub pages: this one reasons about CONTENT CATEGORIES —
// what kind of information lives where in the Bilgi Merkezi, not a
// product/service/brand decision.

import { BookOpen, Landmark, Newspaper, Search, ShieldQuestion, Lightbulb } from "lucide-astro";
import type { BrandCriteriaContent } from "../../components/brands/BrandCriteria/BrandCriteria.astro";

export const knowledgeCriteria: BrandCriteriaContent = {
  eyebrow: "İçerik Rehberi",
  heading: "Bilgi Merkezi'nde Ne Bulabilirsiniz?",
  intro:
    "Bilgi Merkezi, işitme sağlığıyla ilgili farklı ihtiyaçlara yönelik içerik kategorilerinden oluşur. Aradığınız bilgiye göre doğru kategoriye yönelebilirsiniz.",
  criteria: [
    {
      icon: BookOpen,
      title: "Rehberler",
      description:
        "İşitme kaybından cihaz seçimine, ilk kullanımdan uyum sürecine kadar temel bilgileri içeren kapsamlı rehberler.",
    },
    {
      icon: Landmark,
      title: "SGK & Haklar",
      description:
        "SGK katkı payı, rapor süreci ve gerekli belgeler gibi devlet destekli süreçler hakkında bilgiler.",
    },
    {
      icon: Newspaper,
      title: "Blog & Haberler",
      description:
        "Yeni teknolojiler, uzman görüşleri ve güncel kampanyalar hakkında içerikler.",
    },
    {
      icon: ShieldQuestion,
      title: "Uzman Görüşleri",
      description:
        "İşitme sağlığı hakkında sık karşılaşılan yanlış bilgileri düzelten, uzman bakış açısıyla hazırlanan içerikler.",
    },
    {
      icon: Search,
      title: "Sık Sorulan Sorular",
      description:
        "Randevu, süreç ve hizmetlerimizle ilgili en çok merak edilen soruların yanıtları.",
    },
    {
      icon: Lightbulb,
      title: "Genel Bilgilendirme",
      description:
        "Kişisel tanının yerini tutmayan, genel bilgilendirme amaçlı eğitici içerikler.",
    },
  ],
  closing:
    "Aradığınız bilgiyi bulamazsanız veya kendi durumunuz için değerlendirme istiyorsanız, uzman ekibimize doğrudan ulaşabilirsiniz.",
};
