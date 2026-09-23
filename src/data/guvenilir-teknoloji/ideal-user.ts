// "Orijinal Olmayan Bir Üründe Nelere Dikkat Edilmeli?" section for the
// /neden-orijinal/guvenilir-teknoloji page. Reuses the shared
// BrandPageIdealUser component, repurposed here — same technique as the
// need-based pages' symptom sections — into authenticity red flags
// rather than hearing-loss symptoms or user scenarios, since this page's
// subject is product trust, not hearing health.

import { Tag, FileX, ShieldQuestion, Store, WifiOff } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const guvenilirTeknolojiIdealUser: BrandPageIdealUserContent = {
  badge: "SIKÇA KARŞILAŞILAN İŞARETLER",
  heading: "Orijinal Olmayan Bir Üründe Nelere Dikkat Edilmeli?",
  intro: "Aşağıdaki işaretler, bir ürünün orijinal olmayan bir kanaldan gelmiş olabileceğine dair sıkça karşılaşılan uyarılardır.",
  profiles: [
    {
      icon: Tag,
      title: "Piyasa Ortalamasının Çok Altında Fiyat",
      description: "Aşırı düşük fiyatlı teklifler, ürünün orijinal olmayan bir kanaldan geldiğine işaret edebilir.",
      suggestedFamilies: ["Fiyat Karşılaştırması"],
    },
    {
      icon: FileX,
      title: "Fatura veya Garanti Belgesi Verilmemesi",
      description: "Faturasız veya garanti belgesiz satılan cihazlar, orijinallik açısından risk taşır.",
      suggestedFamilies: ["Faturalı Satış Kontrolü"],
    },
    {
      icon: ShieldQuestion,
      title: "Seri Numarasının Doğrulanamaması",
      description: "Üreticinin resmi sisteminde bulunamayan seri numaraları, orijinal olmayan bir ürüne işaret edebilir.",
      suggestedFamilies: ["Seri Numarası Doğrulama"],
    },
    {
      icon: Store,
      title: "Yetkili Satıcı Listesinde Bulunmayan Satıcılar",
      description: "Üreticinin resmi yetkili satıcı listesinde yer almayan kaynaklardan alışveriş riskli olabilir.",
      suggestedFamilies: ["Yetkili Bayi Kontrolü"],
    },
    {
      icon: WifiOff,
      title: "Yazılım Güncellemelerinin Alınamaması",
      description: "Orijinal olmayan cihazlar, üreticinin resmi yazılım güncellemelerini alamayabilir.",
      suggestedFamilies: ["Yazılım Güncelleme Kontrolü"],
    },
  ],
  accentColor: "#1d4ed8",
  accentColorBadgeBg: "rgb(29 78 216 / 0.08)",
  accentColorBadgeBorder: "rgb(29 78 216 / 0.35)",
  accentColorBadgeText: "#1e40af",
  accentColorIconBg: "rgb(29 78 216 / 0.1)",
};
