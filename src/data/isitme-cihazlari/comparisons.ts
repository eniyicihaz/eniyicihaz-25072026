// Karşılaştırma tabloları (5). Fiyat sayfasındaki tablolar "neyin fiyatı
// değiştirdiğini" karşılaştırır; buradaki tablolar "cihazı nasıl tanırım, hangisi
// hangi kullanım için düşünülebilir" eksenindedir: satırlar/sütunlar farklıdır ve
// hiçbir hücrede fiyat, oran ya da "daha ucuz/daha iyi" hükmü yoktur.
// Hücre değerleri "genellikle / modele göre" ile temkinli genellemelerdir ve
// sitenin mevcut cihaz-türü sayfalarıyla tutarlıdır.
import type { GuideTableContent } from "../../components/price-guide/price-guide.types";

/** 1 — Cihaz türleri (satır = tür). */
export const typesTable: GuideTableContent = {
  id: "tur-karsilastirma-tablosu",
  eyebrow: "Tablo 1",
  heading: "İşitme Cihazı Türleri Karşılaştırma Tablosu",
  intro: "Her satır bir cihaz türüdür; sütunlar kulaktaki konumunu, görünürlüğünü ve öne çıkan yönünü gösterir.",
  caption: "İşitme cihazı türlerinin konum, görünürlük, kullanım, şarj/pil ve öne çıkan nokta karşılaştırması",
  criterionLabel: "Tür",
  columns: [
    { name: "Konum" },
    { name: "Görünürlük" },
    { name: "Kullanım" },
    { name: "Şarj / pil" },
    { name: "Öne çıkan nokta" },
  ],
  rows: [
    { label: "Kulak arkası (BTE)", cells: ["Kulak arkası, tüple", "Standart", "Kolay", "Pilli veya şarjlı", "Geniş kullanım aralığı, büyük gövde"] },
    { label: "RIC / RITE", cells: ["Kulak arkası, alıcı kanalda", "Az görünür", "Kolay–orta", "Pilli veya şarjlı", "İnce tasarım, geniş özellik seçeneği"] },
    { label: "Kulak içi (ITE)", cells: ["Kulak kepçesi ve kanalı içi", "Dengeli", "Orta", "Genellikle pilli; modele göre şarjlı", "Kulak ölçüsüne göre üretim"] },
    { label: "Yarım kanal içi (ITC)", cells: ["Kanal girişi", "Az görünür", "Orta", "Genellikle pilli", "Kulak içi ile kanal içi arası boyut"] },
    { label: "Kanal içi (CIC)", cells: ["Kulak kanalı içi", "Çok az görünür", "İnce beceri gerekebilir", "Genellikle pilli", "Küçük boyut, doğal konum"] },
    { label: "Görünmez (IIC)", cells: ["Kanalın derini", "Görünmemesi hedeflenir", "İnce beceri gerekir", "Genellikle pilli", "En küçük tür"] },
  ],
  note: "Uygunluk; işitme kaybınıza, kulak yapınıza ve cihazın modeline göre değişir. Bu tablo bir ön fikir verir, kişiye özel değerlendirmenin yerine geçmez.",
  links: [{ label: "Ücretsiz işitme testi", href: "/degerlendirme/ucretsiz-isitme-testi/" }],
};

/** 2 — Kulak içi vs RIC vs BTE (satır = kriter). */
export const inVsBehindTable: GuideTableContent = {
  id: "kulak-ici-arkasi-tablosu",
  eyebrow: "Tablo 2",
  heading: "Kulak İçi, RIC ve Kulak Arkası: Günlük Kullanımda Fark",
  intro: "Aşağıdaki kriterler, üç yerleşimin günlük yaşamda nasıl farklı hissettirebileceğini gösterir.",
  caption: "Kulak içi, RIC ve kulak arkası işitme cihazlarının günlük kullanım karşılaştırması",
  criterionLabel: "Kriter",
  columns: [
    { name: "Kulak içi", href: "/isitme-cihazlari/kulak-ici-ite/" },
    { name: "RIC", href: "#ric-rite" },
    { name: "Kulak arkası", href: "/isitme-cihazlari/kulak-arkasi-bte/" },
  ],
  rows: [
    { label: "Görünürlük", cells: ["Kulak kepçesinde küçük bir alan", "Kulak arkası; ince kablo", "Kulak arkası; daha belirgin gövde"] },
    { label: "Kulak anatomisi", cells: ["Kulak ölçüsüne göre üretilir; yapı uygunluğu önemlidir", "Standart uçla veya kalıpla denenebilir", "Kalıp veya uçla; geniş uyum imkânı"] },
    { label: "Güç / kullanım kapsamı", cells: ["Genellikle hafif–orta; bazı modellerde daha ileri", "Hafiften ileriye geniş aralık (modele göre)", "En geniş aralık"] },
    { label: "Pil ve şarj", cells: ["Genellikle pilli; şarjlı seçenek sınırlı", "Pilli veya şarjlı", "Pilli veya şarjlı"] },
    { label: "Bakım", cells: ["Kulak kirine karşı düzenli temizlik", "Alıcı ucu ve kablo kontrolü", "Tüp/kalıp temizliği; büyük parçalarla kolay"] },
    { label: "Gözlük ve maske ile", cells: ["Ek yer paylaşımı olmaz", "Etki azdır", "Kulak çevresinde yer paylaşımı olur"] },
    { label: "Günlük kullanım", cells: ["Telefon görüşmesinde doğal konum; küçük düğmeler", "Hafif, rahat; alıcı ucuna dikkat", "Kolay takıp çıkarma; büyük düğmeler"] },
  ],
  note: "Bu üç türden birinin 'daha iyi' olduğu söylenemez; doğru seçim, kulak yapınıza ve günlük önceliklerinize bağlıdır.",
  links: [{ label: "Cihaz seçim rehberi", href: "/rehberler/cihaz-secim-rehberi/" }],
};

/** 3 — Şarjlı vs pilli (satır = avantaj/dikkat çerçevesi). */
export const chargeVsBatteryTable: GuideTableContent = {
  id: "sarjli-pilli-karsilastirma",
  eyebrow: "Tablo 3",
  heading: "Şarjlı ve Pilli İşitme Cihazı: Avantajlar ve Dikkat Edilecekler",
  intro: "İki seçenek de doğru olabilir; önemli olan hangisinin alışkanlıklarınıza uyduğudur.",
  caption: "Şarj edilebilir ve pilli işitme cihazlarının avantajları, dikkat edilecek noktaları ve uygun kullanıcı profilleri",
  criterionLabel: "Başlık",
  columns: [{ name: "Şarj edilebilir", href: "/isitme-cihazlari/sarj-edilebilir/" }, { name: "Pilli" }],
  rows: [
    { label: "Avantajlar", cells: ["Küçük pil değiştirme yok; şarj kutusuyla düzenli rutin", "Pil bitince yedek pille hızlı devam; şarj gerektirmez"] },
    { label: "Dikkat edilecekler", cells: ["Şarj kutusu ve elektrik gerekir; batarya zamanla kapasite kaybedebilir", "Küçük pilleri değiştirmek ve yedek taşımak gerekir"] },
    { label: "Kimler için uygun olabilir?", cells: ["Pil değiştirmekte zorlananlar; düzenli şarj alışkanlığı kurabilenler", "Şarj rutinini istemeyenler; sık seyahat edenler"] },
    { label: "Hangi türlerde bulunur?", cells: ["Kulak arkası ve RIC'te yaygın; diğer tiplerde modele göre", "Tüm türlerde bulunabilir; kanal içi tiplerde yaygındır"] },
    { label: "İlk hazırlık", cells: ["Şarj kutusunu evde sabit bir yere koymak", "Pil boyutunu ve yedek stoğu öğrenmek"] },
  ],
  note: "Bu tabloda fiyat karşılaştırması yoktur. Şarj ve pil maliyetlerini fiyat rehberimizde ele alıyoruz.",
  links: [
    { label: "Şarjlı cihazlar", href: "/isitme-cihazlari/sarj-edilebilir/" },
    { label: "Pil ve aksesuar", href: "/servis-bakim/pil-aksesuar/" },
    { label: "Fiyat rehberi", href: "/isitme-cihazi-fiyatlari/" },
  ],
};

/** 4 — Özellikler (satır = özellik). */
export const featuresTable: GuideTableContent = {
  id: "ozellik-karsilastirma-tablosu",
  eyebrow: "Tablo 4",
  heading: "İşitme Cihazı Özellikleri Tablosu",
  intro: "Her özelliğin nasıl çalıştığını, hangi cihaz türlerinde bulunabildiğini ve alışırken nelere dikkat edileceğini görün.",
  caption: "İşitme cihazı özelliklerinin nasıl çalıştığı, hangi tiplerde bulunabildiği ve kullanım notu",
  criterionLabel: "Özellik",
  columns: [{ name: "Nasıl çalışır?" }, { name: "Hangi tiplerde bulunur?" }, { name: "Kullanım notu" }],
  rows: [
    { label: "Bluetooth", cells: ["Telefon, televizyon ve uyumlu cihazlarla kablosuz bağlanır", "RIC ve kulak arkasında yaygın; kulak içinde modele göre", "Telefon uyumluluğu modele göre değişir"] },
    { label: "Şarj edilebilir pil", cells: ["Dahili bataryayı şarj kutusu doldurur", "Kulak arkası ve RIC'te yaygın", "Şarj rutini gerekir"] },
    { label: "Gürültü yönetimi", cells: ["Ses ortamını analiz edip konuşmayı öne çıkarmayı hedefler", "Çoğu türde; kapsamı model seviyesine göre değişir", "Alışma dönemi gerektirebilir"] },
    { label: "Konuşma netliği", cells: ["Konuşma seslerinin anlaşılırlığına odaklanır", "Çoğu türde bulunur", "Kişiye özel ayarla tamamlanır"] },
    { label: "Mobil uygulama", cells: ["Ses ve program ayarını telefondan yapmayı sağlar", "Bağlantılı modellerde", "Her kullanıcı için gerekli değildir"] },
    { label: "Su / nem dayanıklılığı", cells: ["Ter ve neme karşı koruma sunar", "Modele göre; koruma sınıfı değişir", "Tam su geçirmezlik anlamına gelmez"] },
    { label: "Uzaktan ayar", cells: ["Ayar desteği merkeze gelmeden verilebilir", "Uyumlu marka ve modellerde", "Kapsam hizmet ve modele göre değişir"] },
  ],
  note: "Bir özelliğin sizin için anlamlı olup olmadığı, günlük hayatınızda ne kadar kullandığınıza bağlıdır.",
  links: [{ label: "Kablosuz bağlantı", href: "/teknolojiler/kablosuz-baglanti/" }, { label: "Gürültü engelleme", href: "/teknolojiler/gurultu-engelleme/" }],
};

/** 5 — Kullanım senaryoları (satır = senaryo). */
export const scenariosTable: GuideTableContent = {
  id: "senaryo-tablosu",
  eyebrow: "Tablo 5",
  heading: "Kullanım Senaryosuna Göre Ne Düşünülebilir?",
  intro: "Bu tablo bir öneri değil, değerlendirmeye hazırlıklı gelmeniz için bir başlangıç sorusu listesidir.",
  caption: "Kullanım senaryolarına göre öne çıkan özellik, değerlendirilebilecek tür ve sorulacak soru",
  criterionLabel: "Senaryo",
  columns: [{ name: "Öne çıkan özellik" }, { name: "Değerlendirilebilecek tür" }, { name: "Sorulacak soru" }],
  rows: [
    { label: "Sık telefonda konuşuyorum", cells: ["Bluetooth, telefon bağlantısı", "RIC, kulak arkası, bazı kulak içi modeller", "Telefonumla uyumlu mu?"] },
    { label: "Televizyonu rahat izlemek istiyorum", cells: ["TV bağlantısı", "Bağlantılı RIC ve kulak arkası", "TV için hangi aksesuar gerekiyor?"] },
    { label: "Kalabalık ortamlarda zorlanıyorum", cells: ["Gürültü yönetimi, konuşma odaklı işleme", "Çoğu tür; model seviyesi önemli", "Kalabalıkta ne bekleyebilirim?"] },
    { label: "Cihaz mümkün olduğunca küçük olsun", cells: ["Küçük boyut", "CIC, IIC, ITC", "Kulak yapım buna uygun mu?"] },
    { label: "Şarj etmek istiyorum", cells: ["Şarjlı pil", "Şarjlı RIC ve kulak arkası", "Bir şarj ne kadar kullanım sağlıyor?"] },
    { label: "Kolay kullanmak istiyorum", cells: ["Büyük düğme, basit kullanım", "Kulak arkası, RIC", "Takıp çıkarmayı deneyebilir miyim?"] },
  ],
  note: "Her senaryo için tek doğru yanıt yoktur; işitme kaybınız ve tercihleriniz değerlendirmeyle netleşir.",
  links: [{ label: "Cihaz deneme", href: "/uygulama-ayar/cihaz-deneme/" }],
};
