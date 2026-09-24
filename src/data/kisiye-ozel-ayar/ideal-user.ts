// Bir Cihaz, Farklı Hayatlar — Kişiye Özel Ayar, plan §3/Bölüm 4. Renders
// through the existing BrandPageIdealUser (zero code changes). Şehir
// adları etiket değil, gerçek yaşam senaryosunun başlığı olarak
// kullanılıyor — amaç kullanıcının kendini bu senaryolardan birinde
// bulabilmesi.
import { Home, Briefcase, Car, Factory } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kisiyeOzelAyarIdealUser: BrandPageIdealUserContent = {
  badge: "BİR CİHAZ, FARKLI HAYATLAR",
  heading: "Yaşadığınız Yer, İhtiyacınızı Şekillendirir",
  intro: "Aynı cihaz, farklı günlük yaşam düzenlerinde farklı şekilde ayarlanır.",
  profiles: [
    {
      icon: Home,
      title: "Darıca'da Günlük Yaşam",
      description: "Evde televizyon izlemek, ailece sohbet etmek ve mahallede günlük işleri yürütmek öncelikli dinleme ortamınızsa, ayar bu sakin/orta yoğunluktaki ortamlara göre şekillenir.",
      suggestedFamilies: ["Ev / TV", "Aile Sohbeti"],
    },
    {
      icon: Briefcase,
      title: "Gebze'de Çalışma Hayatı",
      description: "Gününüzün büyük bölümü toplantılarda ve iş görüşmelerinde geçiyorsa, konuşmayı net duymak ve arka plan gürültüsünü ayırt etmek öne çıkan ihtiyaçtır.",
      suggestedFamilies: ["İş Ortamı", "Toplantı / Konuşma"],
    },
    {
      icon: Car,
      title: "Çayırova'da Hareketli Yaşam",
      description: "Sık sık dışarıda, trafikte veya sosyal ortamlarda bulunuyorsanız, değişken ve bazen yoğun seslere hızlı uyum önemli bir başlıktır.",
      suggestedFamilies: ["Dış Ortam", "Trafik / Sosyal Ortam"],
    },
    {
      icon: Factory,
      title: "Dilovası'nda Çalışma Ortamı",
      description: "Çalışma ortamınız sürekli arka plan sesi içeriyorsa, gündelik dış ortam kullanımıyla birlikte bu ortama uygun bir denge aranır.",
      suggestedFamilies: ["Çalışma Ortamı", "Dış Ortam"],
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
  accentColorIconBg: "rgb(79 70 229 / 0.12)",
};
