// "Bir Gününüzün Ses Haritası" — redesign plan §3, Bölüm 2. Renders
// through the new ScenarioRail component. Replaces the retired
// use-cases.ts/BrandPageTechnology section — same real scenarios,
// carried into a rail instead of a 6-card grid so this section doesn't
// repeat the card-grid rhythm used elsewhere on the page.
import type { ScenarioRailContent } from "../../components/shared/ScenarioRail/ScenarioRail.astro";
import { Tv, Phone, MessageCircle, Users, Car, HeartHandshake } from "lucide-astro";

export const cihazDenemeScenarios: ScenarioRailContent = {
  eyebrow: "BİR GÜNÜNÜZÜN SES HARİTASI",
  heading: "Cihazı Gerçek Hayatta Deneyin",
  intro:
    "İşitme cihazını yalnızca vitrinde görmek yerine, size gerçekte nasıl bir deneyim sunduğunu bu ortamlarda değerlendirin.",
  items: [
    {
      icon: Tv,
      title: "Televizyonda",
      description: "Televizyon sesini eskisi kadar yükseltmeden, konuşmaları net takip edip edemediğinizi değerlendirin.",
    },
    {
      icon: Phone,
      title: "Telefon Görüşmesinde",
      description: "Telefonda karşı tarafı ne kadar rahat anladığınızı fark edin.",
    },
    {
      icon: MessageCircle,
      title: "Yüz Yüze Sohbette",
      description: "Karşınızdaki kişiyle konuşurken kelimeleri ne kadar net ayırt ettiğinizi gözlemleyin.",
    },
    {
      icon: Users,
      title: "Kalabalık Ortamda",
      description: "Restoran veya davet gibi kalabalık bir ortamda konuşmaları takip etmenin nasıl hissettirdiğine bakın.",
    },
    {
      icon: Car,
      title: "Dışarıda ve Trafikte",
      description: "Sokak veya trafik gürültüsünün işitme deneyiminizi nasıl etkilediğini deneyimleyin.",
    },
    {
      icon: HeartHandshake,
      title: "Aile Sohbetinde",
      description: "Yakınlarınızla sohbet ederken aldığınız geri bildirimi karar sürecinize dahil edin.",
    },
  ],
  accentColor: "#0d9488",
};
