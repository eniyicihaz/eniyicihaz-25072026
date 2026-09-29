// "Teknoloji ve özellikler" (8 kart) ve "Kullanım senaryoları" (5 kart).
// Her kart özellik listesi değil, "bana ne faydası var?" sorusuna cevaptır.
// Özelliklerin kapsamı marka/modele göre değiştiğinden ifadeler temkinlidir;
// hiçbir model için doğrulanmamış teknik iddia yoktur.
import {
  Bluetooth, BatteryCharging, Smartphone, Tv, Sliders, Volume2, Mic, Droplets,
  Phone, Users, Briefcase, Home,
} from "lucide-astro";
import type { GuideCard, GuideSectionMeta } from "../../components/price-guide/price-guide.types";

export const featuresSection: GuideSectionMeta = {
  id: "ozellikler",
  eyebrow: "Teknoloji ve Özellikler",
  heading: "Özellikler Size Ne Kazandırır?",
  intro:
    "Fiyat farkını anlamlı kılan, özelliğin adı değil, günlük hayatınızda sağladığı fayda. Her özelliği bu gözle okuyun.",
};

export const features: GuideCard[] = [
  {
    icon: Bluetooth,
    title: "Bluetooth işitme cihazı",
    text: "Cihazınız telefon, televizyon ve uyumlu aygıtlarla kablosuz bağlanır. Faydası: sesi çevre gürültüsüne karışmadan doğrudan kulağınıza alırsınız. Uyumluluk modele ve telefona göre değişir.",
    bullets: ["Telefon görüşmesi", "Müzik ve video", "Uygulama ile ayar"],
    href: "/teknolojiler/kablosuz-baglanti/",
    linkLabel: "Kablosuz bağlantı",
  },
  {
    icon: BatteryCharging,
    title: "Şarjlı işitme cihazı",
    text: "Pil değiştirmek yerine cihazı geceleri şarj edersiniz. Faydası: küçük pillerle uğraşmazsınız ve günlük rutininiz basitleşir. Şarj süresi ve kullanım süresi modele göre farklıdır.",
    bullets: ["Pil değiştirme yok", "Şarj kutusuyla saklama", "Kulak arkası tiplerde yaygın"],
    href: "/teknolojiler/sarjli-teknolojiler/",
    linkLabel: "Şarjlı teknolojiler",
  },
  {
    icon: Phone,
    title: "Telefon bağlantısı",
    text: "Telefon görüşmelerinde karşı tarafın sesi doğrudan cihazlarınıza gelir. Faydası: telefonu kulağa tutmadan, daha net konuşma. Bağlantı türü, telefonunuzun modeline göre değişebilir.",
    bullets: ["Eller serbest konuşma", "Daha net telefon sesi", "Modele göre uyumluluk"],
    href: "/isitme-cihazlari/bluetooth-ozellikli/",
    linkLabel: "Bluetooth cihazlar",
  },
  {
    icon: Tv,
    title: "Televizyon bağlantısı",
    text: "Televizyon sesi, modele göre bir aksesuar veya doğrudan bağlantıyla cihazınıza aktarılır. Faydası: sesi evdeki herkes için yükseltmeden, kendi düzeyinizde dinlersiniz.",
    bullets: ["Sesi kısmadan dinleme", "Ev içinde konfor", "Aksesuar gereksinimi modele bağlı"],
    href: "/teknolojiler/kablosuz-baglanti/",
    linkLabel: "TV bağlantısı hakkında",
  },
  {
    icon: Sliders,
    title: "Uygulama ile kontrol",
    text: "Ses seviyesi ve programları telefondan ayarlarsınız; bazı modellerde uzaktan ayar desteği vardır. Faydası: merkeze gitmeden küçük düzeltmeler yapabilirsiniz. Kapsamı marka ve modele göre değişir.",
    bullets: ["Ses ve program ayarı", "Bazı modellerde uzaktan destek", "Kendi kontrolünüz"],
    href: "/uygulama-ayar/uzaktan-ayar/",
    linkLabel: "Uzaktan ayar",
  },
  {
    icon: Volume2,
    title: "Gürültülü ortamlarda kullanım",
    text: "Gürültü yönetimi ve yönlü mikrofonlar konuşmayı öne çıkarmayı hedefler. Faydası: kalabalık sofralarda, restoranlarda ve toplantılarda konuşmayı takip etmek daha az yorucu olabilir.",
    bullets: ["Kalabalık ortam desteği", "Konuşmayı öne çıkarma", "Seviye arttıkça ayrıntı artar"],
    href: "/teknolojiler/gurultu-engelleme/",
    linkLabel: "Gürültü engelleme",
  },
  {
    icon: Mic,
    title: "Konuşma netliği",
    text: "Konuşma odaklı işleme, ses ortamında konuşmanın anlaşılırlığını öne çıkarmayı amaçlar. Faydası: sesin yüksekliği değil, kelimelerin netliği. Bu, en çok işitme kaybının derecesine ve ayara bağlıdır.",
    bullets: ["Anlaşılırlık odaklı", "Kişiye özel ayarla tamamlanır", "Alışma dönemi gerektirir"],
    href: "/teknolojiler/konusma-odakli/",
    linkLabel: "Konuşma odaklı teknoloji",
  },
  {
    icon: Droplets,
    title: "Su ve neme dayanıklılık",
    text: "Bazı modeller ter, nem ve günlük koşullara karşı ek koruma sunar. Faydası: aktif yaşamda ve dışarıda çalışırken cihazın daha güvende olması. Koruma sınıfı modele göre farklıdır; tam su geçirmezlik anlamına gelmez.",
    bullets: ["Ter ve nem koruması", "Aktif yaşam için", "Koruma sınıfı modele göre"],
    href: "/isitme-cihazlari/suya-dayanikli/",
    linkLabel: "Suya dayanıklı cihazlar",
  },
];

export const scenariosSection: GuideSectionMeta = {
  id: "kullanim-senaryolari",
  eyebrow: "Kullanım Senaryoları",
  heading: "Hayatınıza Göre: Hangi Özellik Sizin İçin Önemli?",
  intro:
    "Özelliğin faydası, kullanım ortamınızla ölçülür. Aşağıdaki senaryolardan size yakın olanları, cihaz seçiminde önceliklendirin.",
};

export const scenarios: GuideCard[] = [
  {
    icon: Smartphone,
    tag: "Telefon kullananlar",
    title: "Sık telefonda konuşuyorsanız",
    text: "Telefon bağlantısı ve Bluetooth özelliği, fiyat farkını en çok karşılayan özelliklerden biri olabilir. Telefonunuzun modelinin cihazla uyumunu satın almadan önce doğrulayın.",
    href: "/isitme-cihazlari/bluetooth-ozellikli/",
    linkLabel: "Bluetooth cihazlar",
  },
  {
    icon: Tv,
    tag: "Televizyon izleyenler",
    title: "Televizyonu sesi yükseltmeden izlemek istiyorsanız",
    text: "TV bağlantısı sesi evde herkes için yükseltmeden dinlemenizi kolaylaştırabilir. Bunun için hangi aksesuarın gerektiğini seçeceğiniz modelde öğrenin.",
    href: "/teknolojiler/kablosuz-baglanti/",
    linkLabel: "Kablosuz bağlantı",
  },
  {
    icon: Users,
    tag: "Kalabalık ortamlar",
    title: "Aile sofrası, restoran ve toplantılarda zorlanıyorsanız",
    text: "Gürültü yönetimi ve yönlü mikrofon özellikleri burada daha çok değer taşır. Sessiz ortamlarda yaşıyorsanız bu özellik için fazla ödemeniz gerekmeyebilir.",
    href: "/teknolojiler/gurultu-engelleme/",
    linkLabel: "Gürültü engelleme",
  },
  {
    icon: Briefcase,
    tag: "Aktif çalışanlar",
    title: "Gün boyu hareketli veya dışarıda çalışıyorsanız",
    text: "Dayanıklılık, ter ve neme karşı koruma ve gün boyu enerji, öncelikleriniz arasında olabilir. Şarjlı seçenekler ve koruma sınıfı yüksek modeller değerlendirilebilir.",
    href: "/isitme-cihazlari/suya-dayanikli/",
    linkLabel: "Suya dayanıklı cihazlar",
  },
  {
    icon: Home,
    tag: "Günlük kullanım",
    title: "Daha çok evde ve sakin ortamlarda vakit geçiriyorsanız",
    text: "Sade, kullanımı kolay bir model çoğu zaman yeterli olabilir. Kullanmayacağınız özelliğe ödeme yapmamak için ihtiyaçlarınızı işitme testinde birlikte netleştirin.",
    href: "/ihtiyaciniza-gore/yaslilar-icin-cihazlar/",
    linkLabel: "Yaşlılar için cihazlar",
  },
];
