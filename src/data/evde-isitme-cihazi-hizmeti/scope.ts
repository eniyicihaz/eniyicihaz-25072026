// Evde Hangi Hizmetleri Sunuyoruz? — ScenarioRail üzerinden render edilir.
import { Stethoscope, Headphones, Settings2, SlidersHorizontal, ShoppingBag, ClipboardCheck, GraduationCap, Wrench } from "lucide-astro";
import type { ScenarioRailContent } from "../../components/shared/ScenarioRail/ScenarioRail.astro";

export const evdeHizmetScope: ScenarioRailContent = {
  eyebrow: "Hizmet Kapsamı",
  heading: "Evde Hangi Hizmetleri Sunuyoruz?",
  intro: "Merkezimizdeki süreçlerin evde de yürütülebilen kısımları aşağıdadır.",
  items: [
    {
      icon: Stethoscope,
      title: "Evde İşitme Değerlendirmesi",
      description: "İşitme durumunuzu evinizde, uzman ekibimizle profesyonel şekilde değerlendiriyoruz.",
    },
    {
      icon: Headphones,
      title: "Evde Cihaz Denemesi",
      description: "Yeni bir cihaza geçmeden önce, kendi ev ortamınızda nasıl bir deneyim sunduğunu deneyebilirsiniz.",
    },
    {
      icon: Settings2,
      title: "Evde Cihaz Uygulaması",
      description: "Seçilen cihazın kulağınıza uygulanması ve ilk ayarlarının yapılması evinizde tamamlanabilir.",
    },
    {
      icon: SlidersHorizontal,
      title: "Evde Kişiye Özel Ayar",
      description: "Cihazınız; günlük yaşamınıza, dinleme ortamlarınıza ve geri bildirimlerinize göre evde yeniden ayarlanabilir.",
    },
    {
      icon: ShoppingBag,
      title: "Evde İşitme Cihazı Satışı",
      description: "İhtiyacınız değerlendirilir, uygun cihaz seçenekleri evinizde gösterilir ve sorularınız cevaplanır.",
    },
    {
      icon: ClipboardCheck,
      title: "Mevcut Cihaz Kontrolü",
      description: "Kullandığınız cihazın performansı kontrol edilir, gerekiyorsa yeniden ayarlanır.",
    },
    {
      icon: GraduationCap,
      title: "Kullanım Eğitimi & Destek",
      description: "Cihazın günlük kullanımı, temizliği ve pil değişimi konusunda size ve yakınlarınıza bilgi veriyoruz.",
    },
    {
      icon: Wrench,
      title: "Teknik Servise Yönlendirme",
      description: "Evde giderilemeyen bir arıza tespit edilirse, cihazınız teknik servis sürecine güvenle yönlendirilir.",
    },
  ],
  accentColor: "#0d9488",
};
