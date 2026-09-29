// Karşılaştırma tabloları. Hücre değerleri, sitenin mevcut cihaz-türü
// sayfalarındaki (kulak-arkasi, kulak-ici, gorunmez-cic, sarj-edilebilir)
// ifadelerle tutarlı, "genellikle / modele göre" ile temkinli genellemelerdir.
// Hiçbir satırda fiyat, oran veya "daha ucuz/daha pahalı" hükmü yoktur.
import type { GuideSectionMeta, GuideTableContent } from "../../components/price-guide/price-guide.types";

export const comparisonsSection: GuideSectionMeta = {
  id: "karsilastirmalar",
  eyebrow: "Karşılaştırmalar",
  heading: "Cihaz Türlerini ve Özellikleri Yan Yana Görün",
  intro:
    "Aşağıdaki tablolar fiyatı değil, fiyatı belirleyen farkları karşılaştırır. Tablolar mobilde yatay kaydırılır; ilk sütun kaydırma sırasında sabit kalır.",
};

export const deviceTypesTable: GuideTableContent = {
  id: "cihaz-turleri-tablosu",
  eyebrow: "Cihaz türleri",
  heading: "Kulak Arkası, RIC, Kulak İçi ve Kanal İçi Karşılaştırması",
  intro: "Yerleşim farkı; görünürlüğü, kullanım kolaylığını ve özellik seçeneklerini değiştirir.",
  caption: "Kulak arkası, RIC, kulak içi ve kanal içi işitme cihazlarının karşılaştırması",
  criterionLabel: "Kriter",
  columns: [
    { name: "Kulak arkası (BTE)", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
    { name: "RIC / RITE", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
    { name: "Kulak içi (ITE)", href: "/isitme-cihazlari/kulak-ici-ite/" },
    { name: "Kanal içi (CIC)", href: "/isitme-cihazlari/gorunmez-cic/" },
  ],
  rows: [
    { label: "Yerleşim", cells: ["Kulak arkası, tüple", "Kulak arkası, alıcı kanalda", "Kulak kepçesi ve kanalı içi", "Kulak kanalı içi"] },
    { label: "Görünürlük", cells: ["Standart", "Az görünür", "Az görünür", "Neredeyse görünmez"] },
    { label: "Kullanım kolaylığı", cells: ["Yüksek", "Yüksek–orta", "Orta", "İnce el becerisi gerektirebilir"] },
    { label: "Güç aralığı", cells: ["Geniş", "Modele göre geniş", "Hafif–orta, bazı modellerde daha ileri", "Çoğunlukla hafif–orta"] },
    { label: "Pil ve şarj", cells: ["Pilli veya şarjlı", "Pilli veya şarjlı", "Pilli veya şarjlı (modele göre)", "Genellikle pilli"] },
    { label: "Kablosuz bağlantı", cells: ["Modele göre geniş", "Modele göre geniş", "Modele göre değişir", "Boyut nedeniyle sınırlı olabilir"] },
    { label: "Fiyata etkisi", cells: ["Özellik ve teknoloji seviyesi belirleyici", "Teknoloji, şarj ve Bluetooth belirleyici", "Kişiye özel üretim + özellik paketi", "Kişiye özel üretim + minyatür teknoloji"] },
  ],
  note: "Kesin uygunluk kulak yapınıza ve işitme kaybınıza bağlıdır; bu tablo bir ön fikir verir, karar yerine geçmez.",
  links: [{ label: "Tüm cihaz türleri", href: "/isitme-cihazlari/" }],
};

export const priorityTable: GuideTableContent = {
  id: "oncelige-gore-tablo",
  eyebrow: "Önceliğinize göre",
  heading: "Önceliğiniz Hangisiyse: Kulak İçi mi, RIC mi, Kulak Arkası mı?",
  intro: "Bir önceliği öne çıkarmak, diğerinden ödün vermek anlamına gelebilir. Tablo bu dengeyi gösterir.",
  caption: "Önceliğe göre kulak arkası, RIC ve kulak içi cihaz karşılaştırması",
  criterionLabel: "Önceliğim",
  columns: [{ name: "Kulak arkası (BTE)" }, { name: "RIC" }, { name: "Kulak içi / kanal içi" }],
  rows: [
    { label: "Az fark edilsin", cells: ["Standart görünürlük", "Daha az görünür", "En az görünür seçenekler"] },
    { label: "Kolay kullanım", cells: ["Çok kolay", "Kolay", "Daha küçük, ince beceri gerekebilir"] },
    { label: "Telefon ve TV bağlantısı", cells: ["Geniş seçenek", "Geniş seçenek", "Modele göre sınırlı olabilir"] },
    { label: "Şarjlı seçenek", cells: ["Yaygın", "Yaygın", "Sınırlı sayıda modelde"] },
    { label: "Geniş kayıp aralığı", cells: ["En geniş aralık", "Geniş aralık", "Daha dar aralık"] },
    { label: "Gözlük ve maske ile kullanım", cells: ["Kulak çevresinde yer paylaşımı olur", "Bu etki azalır", "Ek bir yer paylaşımı olmaz"] },
  ],
  note: "Önceliklerinizi bir de günlük ortamlarınızla birlikte tartmak gerekir; bunu ücretsiz işitme testi sonrasında birlikte yaparız.",
  links: [{ label: "Cihaz seçim rehberi", href: "/rehberler/cihaz-secim-rehberi/" }],
};

export const chargingTable: GuideTableContent = {
  id: "sarjli-pilli-tablosu",
  eyebrow: "Şarjlı mı pilli mi?",
  heading: "Şarjlı ve Pilli İşitme Cihazlarının Karşılaştırması",
  intro: "Şarjlı cihaz ile pilli cihaz arasındaki fark, günlük rutininizde ve uzun vadeli kullanım alışkanlığınızda ortaya çıkar.",
  caption: "Şarj edilebilir ve pilli işitme cihazlarının karşılaştırması",
  criterionLabel: "Kriter",
  columns: [{ name: "Şarj edilebilir", href: "/isitme-cihazlari/sarj-edilebilir/" }, { name: "Pilli (değiştirilebilir pil)" }],
  rows: [
    { label: "Enerji kaynağı", cells: ["Dahili, yeniden şarj edilebilir pil", "Değiştirilebilir küçük pil"] },
    { label: "Günlük rutin", cells: ["Genellikle geceleri şarj kutusunda doldurulur", "Pil, kullanıma bağlı aralıklarla değiştirilir"] },
    { label: "Seyahat", cells: ["Şarj kutusu ve enerji kaynağı gerekir", "Yedek pil taşımak yeterlidir"] },
    { label: "El becerisi", cells: ["Küçük pil değiştirme gerekmez", "Küçük pilleri değiştirmek beceri gerektirebilir"] },
    { label: "Dikkat edilecek nokta", cells: ["Şarj kutusunu unutmamak; pil kapasitesi zamanla azalabilir", "Pil ömrü kullanıma göre değişir; yedek bulundurmak gerekir"] },
    { label: "Maliyet açısından", cells: ["Şarj özelliği cihaz bedelini etkileyebilir", "Pil giderleri kullanım boyunca birikir"] },
  ],
  note: "Hangisinin uygun olduğu; el becerinize, günlük rutininize ve cihaz tipine bağlıdır. Her iki seçenek de doğru olabilir.",
  links: [{ label: "Şarjlı cihazlar", href: "/isitme-cihazlari/sarj-edilebilir/" }, { label: "Pil ve aksesuar", href: "/servis-bakim/pil-aksesuar/" }],
};

export const featuresTable: GuideTableContent = {
  id: "ozellik-tablosu",
  eyebrow: "Özellik karşılaştırması",
  heading: "Hangi Özellik Ne İşe Yarar, Fiyata Nasıl Yansır?",
  intro: "Her özelliğin değeri, sizin günlük hayatınızda ne kadar yer tuttuğuna bağlıdır.",
  caption: "İşitme cihazı özelliklerinin işlevi, kimin işine yaradığı ve fiyata genel etkisi",
  criterionLabel: "Özellik",
  columns: [{ name: "Ne işe yarar?" }, { name: "Kimin işine yarar?" }, { name: "Fiyata genel etkisi" }, { name: "Dikkat" }],
  rows: [
    { label: "Bluetooth", cells: ["Telefon, TV ve müzik sesini doğrudan cihaza aktarır", "Sık telefon ve TV kullananlar", "Orta", "Telefon uyumluluğu modele göre değişir"] },
    { label: "Şarj edilebilir pil", cells: ["Pil değiştirme ihtiyacını ortadan kaldırır", "Küçük pillerle zorlananlar", "Orta", "Şarj alışkanlığı gerektirir"] },
    { label: "Yönlü mikrofon ve gürültü yönetimi", cells: ["Kalabalıkta konuşmayı öne çıkarır", "Sık kalabalık ortamda bulunanlar", "Yüksek", "Sessiz ortamda kullanan için ek fayda sınırlı olabilir"] },
    { label: "Uygulama ile kontrol", cells: ["Ses ve program ayarını telefondan yapmayı sağlar", "Kendi ayarını yönetmek isteyenler", "Düşük–orta", "Her kullanıcı için gerekli değildir"] },
    { label: "Uzaktan ayar", cells: ["Ayar desteğini merkeze gelmeden almayı kolaylaştırır", "Merkeze gelişi zor olanlar", "Değişken", "Kapsam marka ve modele bağlıdır"] },
    { label: "Su ve nem dayanıklılığı", cells: ["Ter, nem ve günlük koşullara karşı koruma sağlar", "Aktif, dışarıda çalışan kullanıcılar", "Orta", "Koruma sınıfı modele göre farklıdır; tam su geçirmezlik anlamına gelmez"] },
  ],
  note: "Bir özellik için ödeme yapmadan önce, günlük hayatınızda gerçekten kullanacağınızdan emin olun.",
  links: [{ label: "Özellikleri kullanım senaryolarıyla görün", href: "#kullanim-senaryolari" }],
};
