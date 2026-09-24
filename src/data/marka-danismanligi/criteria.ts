// Karşılaştırırken Bakılacak Kriterler — Marka Danışmanlığı, plan §D
// Bölüm 4. Renders through the new BrandCriteriaGrid. Bilinçli kapsam
// kararı: projede marka-arası doğrulanmış teknik spec verisi yok, bu
// yüzden doldurulmuş bir marka×özellik tablosu yerine, her kriter için
// markanın kendi sayfasına bakılmasını öneren dürüst bir çerçeve.
import { Ear, Bluetooth, BatteryCharging, Cpu, Puzzle, Users } from "lucide-astro";
import type { BrandCriteriaGridContent } from "../../components/shared/BrandCriteriaGrid/BrandCriteriaGrid.astro";

export const markaDanismanligiCriteria: BrandCriteriaGridContent = {
  badge: "KARŞILAŞTIRIRKEN BAKILACAK KRİTERLER",
  heading: "Markaları Kendi Kriterlerinize Göre Değerlendirin",
  intro: "Bir markayı diğerinden \"daha iyi\" ilan etmek yerine, karar verirken bakabileceğiniz nesnel başlıkları paylaşıyoruz.",
  items: [
    { icon: Ear, title: "Cihaz Formu", description: "Kulak arkası, kulak içi veya görünmez modeller markadan markaya farklı seçeneklerle sunulur; ilgilendiğiniz markanın kendi sayfasında modelleri inceleyebilirsiniz." },
    { icon: Bluetooth, title: "Bağlantı Seçenekleri", description: "Telefon ve TV ile bağlantı, marka ve modele göre değişebilir; bu özellik ilgili markanın sayfasında belirtilir." },
    { icon: BatteryCharging, title: "Şarj Seçenekleri", description: "Şarjlı veya pilli kullanım tercihi, markaların sunduğu modellere göre değerlendirilebilir." },
    { icon: Cpu, title: "Teknoloji Yaklaşımı", description: "Her marka, ses işleme ve gürültü yönetimine kendi yaklaşımıyla yaklaşır; detaylar marka sayfalarında yer alır." },
    { icon: Puzzle, title: "Aksesuar Ekosistemi", description: "Şarj kutusu, uzaktan kumanda veya bağlantı aksesuarlarının kapsamı markaya göre değişebilir." },
    { icon: Users, title: "Kullanım Senaryosu", description: "Aktif bir yaşam, ofis ortamı veya sakin bir günlük rutin, hangi markanın öne çıkabileceğini etkileyebilir." },
  ],
  closing: "Bu kriterlerin sizin durumunuza nasıl karşılık geldiğini, Darıca'daki merkezimizde birlikte değerlendirebiliriz.",
  accentColor: "#b45309",
  accentColorBadgeBg: "rgb(180 83 9 / 0.08)",
  accentColorBadgeBorder: "rgb(180 83 9 / 0.35)",
  accentColorBadgeText: "#92400e",
  accentColorIconBg: "rgb(180 83 9 / 0.12)",
};
