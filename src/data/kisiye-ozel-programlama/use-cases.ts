// "Kişiye Özel Programlamada Neler Ayarlanır?" teaser grid for the
// /uygulama-ayar/kisiye-ozel-programlama page. Renders through the
// shared BrandPageTechnology component (6-card grid), same technique
// every prior series' use-cases.ts uses, here scoped to the concrete
// parameters that get fine-tuned during a session.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const kisiyeOzelProgramlamaUseCases: BrandPageTechnologyContent = {
  badge: "KİŞİYE ÖZEL PROGRAMLAMADA NELER AYARLANIR",
  heading: "Kişiye Özel Programlamada Neler Ayarlanır?",
  intro: "İnce ayar seansı sırasında düzenlenen bileşenlere daha yakından bakalım.",
  items: [
    {
      label: "KAZANÇ SEVİYESİ",
      title: "Frekans Bazlı Kazanç Seviyesi",
      description: "Farklı frekans bantlarındaki ses yükseltme miktarı, geri bildiriminize göre ayarlanır.",
    },
    {
      label: "SIKIŞTIRMA",
      title: "Ses Sıkıştırma (Kompresyon) Ayarı",
      description: "Yüksek ve düşük seslerin nasıl dengeleneceği, konforunuza göre düzenlenir.",
    },
    {
      label: "GÜRÜLTÜ AZALTMA",
      title: "Gürültü Azaltma Hassasiyeti",
      description: "Arka plan gürültüsünün ne kadar bastırılacağı, ortam tercihinize göre ayarlanır.",
    },
    {
      label: "YÖNLÜ MİKROFON",
      title: "Yönlü Mikrofon Davranışı",
      description: "Cihazın hangi yöndeki seslere odaklanacağı, kullanım ihtiyacınıza göre ayarlanabilir.",
    },
    {
      label: "ORTAM PROGRAMLARI",
      title: "Ortama Özel Dinleme Programları",
      description: "Sessiz, gürültülü, müzik gibi farklı ortamlar için ayrı programlar oluşturulabilir.",
    },
    {
      label: "TELEFON AYARI",
      title: "Telefon Görüşmesi Ayarı",
      description: "Telefon görüşmelerinde ses netliğini artıracak özel bir ayar yapılabilir.",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorHoverBorder: "rgb(124 58 237 / 0.5)",
};
