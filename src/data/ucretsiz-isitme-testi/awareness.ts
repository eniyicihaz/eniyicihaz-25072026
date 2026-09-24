// "İşitmenizi Ertelemeyin" — new section right after the Hero (redesign
// plan §2, Bölüm 1). Renders through the shared, generic
// BrandPageSignalList component. Deliberately text-forward/quiet (no
// card chrome) — an emotional, real-life-signs section, distinct from
// the card-grid "Kimler İşitme Testi Yaptırmalı?" section that follows
// later (ideal-user.ts uses the same signs from a different, "is this
// page about me" candidate-profile angle; some repetition of subject
// matter across the two sections is intentional — emotional hook here,
// rational candidacy check there — PRINCIPLES §5: no diagnosis language
// anywhere in this list).
import type { BrandPageSignalListContent } from "../../components/brand-page/BrandPageSignalList/BrandPageSignalList.astro";
import { Volume2, Repeat, Users, Phone, MessageCircle, MessagesSquare, Ear } from "lucide-astro";

export const ucretsizIsitmeTestiAwareness: BrandPageSignalListContent = {
  badge: "İŞİTME SAĞLIĞINIZ",
  heading: "İşitmenizi Ertelemeyin",
  intro:
    "Aşağıdaki deneyimlerin bazıları size tanıdık geliyorsa, işitme sağlığınızı bir uzmanla birlikte değerlendirmek iyi bir ilk adım olabilir.",
  signals: [
    {
      icon: Volume2,
      title: "Televizyon veya Radyo Sesini Eskisinden Daha Fazla Açmak",
      description: "Evdeki diğer kişilere göre daha yüksek sesle televizyon izleme alışkanlığı fark ediliyor olabilir.",
    },
    {
      icon: Repeat,
      title: "\"Ne Dedin?\" Sorusunu Sık Sık Sormak",
      description: "Karşınızdaki kişiye söylediklerini tekrar ettirme ihtiyacı zamanla artmış olabilir.",
    },
    {
      icon: Users,
      title: "Kalabalık Ortamlarda Konuşmaları Takip Etmekte Zorlanmak",
      description: "Restoran, davet veya kalabalık bir ortamda konuşmaları ayırt etmek eskisinden daha güç gelebilir.",
    },
    {
      icon: Phone,
      title: "Telefonda Konuşurken Zorlanmak",
      description: "Telefon görüşmelerinde karşı tarafı anlamak, yüz yüze sohbete göre daha yorucu hale gelmiş olabilir.",
    },
    {
      icon: MessageCircle,
      title: "Sesleri Duyup Kelimeleri Anlamakta Güçlük Çekmek",
      description: "Konuşulanı duymanıza rağmen kelimeleri tam olarak ayırt edemediğinizi hissedebilirsiniz.",
    },
    {
      icon: MessagesSquare,
      title: "Yakınlarınızın \"Duymuyorsun\" Demesi",
      description: "Aile üyelerinin veya yakın çevrenizin bu konuda sizi uyarması sık karşılaşılan bir işarettir.",
    },
    {
      icon: Ear,
      title: "Bir Kulağınızın Diğerinden Daha Az Duyduğunu Fark Etmek",
      description: "İki kulak arasında fark olduğunu hissetmek, değerlendirme için bir neden olabilir.",
    },
  ],
  closing:
    "Bu işaretlerden biri veya birkaçı size tanıdık geliyorsa, Darıca'daki merkezimizde ücretsiz işitme testiyle netlik kazanabilirsiniz.",
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
