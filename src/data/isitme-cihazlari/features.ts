// "Özellikler" — her özellik aynı üç soruyla anlatılır: Nedir? Ne işe yarar?
// Kimler için anlamlı olabilir? Özelliklerin kapsamı marka ve modele göre
// değiştiğinden ifadeler temkinlidir; uzaktan ayar yalnızca sitedeki gerçek
// hizmet sayfasına (/uygulama-ayar/uzaktan-ayar/) dayanır. Fiyat konusu yok.
import {
  Bluetooth, BatteryCharging, Volume2, Mic, Phone, Tv, Smartphone, Droplets, Wifi,
} from "lucide-astro";
import type { GuideCard, GuideSectionMeta } from "../../components/price-guide/price-guide.types";

export const featuresSection: GuideSectionMeta = {
  id: "ozellikler",
  eyebrow: "Özellikler",
  heading: "İşitme Cihazı Özellikleri: Bluetooth, Şarj, Gürültü Yönetimi ve Daha Fazlası",
  intro:
    "Özellik listeleri uzundur; önemli olan hangisinin sizin günlük hayatınızda karşılığı olduğudur. Her özelliği üç soruyla özetledik: nedir, ne işe yarar, kimler için anlamlı olabilir.",
};

const q = (nedir: string, ise: string, kimler: string) => [
  `Nedir? ${nedir}`,
  `Ne işe yarar? ${ise}`,
  `Kimler için? ${kimler}`,
];

export const features: GuideCard[] = [
  {
    icon: Bluetooth,
    title: "Bluetooth işitme cihazı",
    text: "Cihazın telefon, televizyon ve uyumlu aygıtlarla kablosuz bağlanabilmesi.",
    bullets: q(
      "Cihaz ile telefon arasında kablosuz veri bağlantısı.",
      "Arama, müzik ve video sesini doğrudan cihaza aktarır.",
      "Sık telefon ve medya kullananlar; uyumluluk modele göre değişir.",
    ),
    href: "/isitme-cihazlari/bluetooth-ozellikli/",
    linkLabel: "Bluetooth özellikli cihazlar",
  },
  {
    icon: BatteryCharging,
    title: "Şarj edilebilir pil",
    text: "Değiştirilebilir pil yerine dahili bataryanın şarj kutusunda doldurulması.",
    bullets: q(
      "Yeniden şarj edilebilen batarya ve şarj kutusu.",
      "Küçük pil değiştirme ihtiyacını ortadan kaldırır.",
      "Pil değiştirmekte zorlananlar; düzenli şarj alışkanlığı edinebilenler.",
    ),
    href: "/teknolojiler/sarjli-teknolojiler/",
    linkLabel: "Şarjlı teknolojiler",
  },
  {
    icon: Volume2,
    title: "Gürültü yönetimi",
    text: "Ses ortamını analiz ederek konuşmayı öne çıkarmayı hedefleyen işleme.",
    bullets: q(
      "Yönlü mikrofon ve işlemci ile ortam sesini ayırma yaklaşımı.",
      "Kalabalık ortamlarda konuşmayı takip etmeyi kolaylaştırmayı amaçlar.",
      "Restoran, toplantı ve aile sofrası gibi ortamlarda bulunanlar.",
    ),
    href: "/teknolojiler/gurultu-engelleme/",
    linkLabel: "Gürültü engelleme",
  },
  {
    icon: Mic,
    title: "Konuşma netliği",
    text: "Konuşma seslerinin anlaşılırlığını öne çıkaran işleme.",
    bullets: q(
      "Konuşma frekanslarını kişinin kaybına göre işleyen ayar yaklaşımı.",
      "Sesin yüksekliğinden çok kelimelerin ayırt edilmesine odaklanır.",
      "Sesleri duyup kelimeleri anlamakta zorlananlar.",
    ),
    href: "/teknolojiler/konusma-odakli/",
    linkLabel: "Konuşma odaklı teknoloji",
  },
  {
    icon: Phone,
    title: "Telefonla kullanım",
    text: "Telefon görüşmelerinin doğrudan cihaza gelmesi.",
    bullets: q(
      "Bluetooth veya benzeri bağlantıyla telefonun cihaza eşleşmesi.",
      "Telefonu kulağa tutmadan, daha net konuşmayı destekler.",
      "İş ve günlük hayatta sık telefon görüşmesi yapanlar.",
    ),
    href: "/isitme-cihazlari/bluetooth-ozellikli/",
    linkLabel: "Bluetooth özellikli cihazlar",
  },
  {
    icon: Tv,
    title: "Televizyona bağlanma",
    text: "Televizyon sesinin cihaza aktarılması.",
    bullets: q(
      "Cihazın doğrudan veya bir aksesuar üzerinden televizyona bağlanması.",
      "Sesi yükseltmeden, kendi düzeyinizde dinlemeyi kolaylaştırır.",
      "Evde televizyon izlemekte zorlananlar; aksesuar gereksinimi modele bağlıdır.",
    ),
    href: "/teknolojiler/kablosuz-baglanti/",
    linkLabel: "Kablosuz bağlantı",
  },
  {
    icon: Smartphone,
    title: "Mobil uygulama",
    text: "Cihazın telefon uygulamasıyla kontrol edilmesi.",
    bullets: q(
      "Ses ve program ayarlarını sunan üretici uygulaması.",
      "Küçük düzeltmeleri kendiniz yapmanızı sağlar.",
      "Kendi ayarını yönetmek isteyenler; her kullanıcı için gerekli değildir.",
    ),
    href: "/teknolojiler/uzaktan-kontrol/",
    linkLabel: "Uzaktan kontrol",
  },
  {
    icon: Droplets,
    title: "Su ve nem dayanıklılığı",
    text: "Cihazın ter, nem ve günlük koşullara karşı ek koruması.",
    bullets: q(
      "Koruma sınıfına sahip, nem ve tozdan etkilenmeyi azaltmayı hedefleyen yapı.",
      "Terleme ve nemli ortamlarda cihazın daha güvende olmasına yardım eder.",
      "Dışarıda çalışanlar ve aktif yaşayanlar. Tam su geçirmezlik anlamına gelmez.",
    ),
    href: "/isitme-cihazlari/suya-dayanikli/",
    linkLabel: "Suya dayanıklı cihazlar",
  },
  {
    icon: Wifi,
    title: "Uzaktan ayar",
    text: "Ayar desteğinin merkeze gelmeden alınabilmesi.",
    bullets: q(
      "Uyumlu cihazlarda ayarın uzaktan güncellenmesi.",
      "Küçük düzeltmeler için merkeze gitme ihtiyacını azaltabilir.",
      "Merkeze gelmekte zorlananlar; kapsam marka, model ve hizmete göre değişir.",
    ),
    href: "/uygulama-ayar/uzaktan-ayar/",
    linkLabel: "Uzaktan ayar",
  },
];
