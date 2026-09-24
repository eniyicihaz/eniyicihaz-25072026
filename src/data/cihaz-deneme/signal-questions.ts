// "Deneme Sırasında Nelere Bakmalı?" — redesign plan §1, Bölüm 4.
// Renders through BrandPageSignalList as a quiet, non-diagnostic
// self-check list — deliberate consultative framing ("kendinize bu
// soruları sorun"), never a sales pitch.
import type { BrandPageSignalListContent } from "../../components/brand-page/BrandPageSignalList/BrandPageSignalList.astro";
import { MessageCircle, Tv, Waves, Mic, Ear, Phone, Users, Eye } from "lucide-astro";

export const cihazDenemeSignalQuestions: BrandPageSignalListContent = {
  badge: "DENEME SIRASINDA NELERE BAKMALI?",
  heading: "Kendinize Bu Soruları Sorun",
  intro: "Cihazı denerken aşağıdaki noktaları değerlendirmeniz, doğru kararı vermenize yardımcı olur.",
  signals: [
    {
      icon: MessageCircle,
      title: "Konuşmaları Anlamak Kolaylaşıyor mu?",
      description: "Günlük konuşmalarda kelimeleri ne kadar net ayırt ettiğinize dikkat edin.",
    },
    {
      icon: Tv,
      title: "Televizyon Sesi Daha Rahat Geliyor mu?",
      description: "Sesi eskisi kadar yükseltmeden takip edip edemediğinizi gözlemleyin.",
    },
    {
      icon: Waves,
      title: "Duyduğunuz Sesler Doğal mı?",
      description: "Seslerin yapay değil, kendi kulağınıza tanıdık gelip gelmediğine bakın.",
    },
    {
      icon: Mic,
      title: "Kendi Sesiniz Nasıl Geliyor?",
      description: "Konuşurken kendi sesinizi nasıl duyduğunuz da alışma sürecinin bir parçasıdır.",
    },
    {
      icon: Ear,
      title: "Cihaz Kulağınızda Rahat mı?",
      description: "Uzun süreli kullanımda fiziksel konforu değerlendirin.",
    },
    {
      icon: Phone,
      title: "Telefon Kullanımı Nasıl?",
      description: "Telefon görüşmelerinde karşı tarafı anlamanın ne kadar kolaylaştığını fark edin.",
    },
    {
      icon: Users,
      title: "Kalabalık Ortamda Konuşmayı Takip Edebiliyor musunuz?",
      description: "Restoran veya davet gibi ortamlardaki deneyiminizi gözlemleyin.",
    },
    {
      icon: Eye,
      title: "Görünürlük ve Kullanım Kolaylığı Sizin İçin Nasıl?",
      description: "Cihazın günlük takıp çıkarma kolaylığını ve görünürlüğünü değerlendirin.",
    },
  ],
  closing: "Bu sorulara verdiğiniz cevaplar, ara kontrol seansında uzman ekibimizle paylaşacağınız değerli bir geri bildirimdir.",
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
