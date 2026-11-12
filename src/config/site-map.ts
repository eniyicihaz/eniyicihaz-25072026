// Site map (single source for breadcrumbs, hub pages and the human sitemap).
// Every entry is a real URL of the site (the 103 existing pages + the new category hubs). `parent` forms the visible
// breadcrumb chain and the BreadcrumbList; `label` is the short crumb text. `summary` (children of hubs only) is the
// page's own meta description, reused as the hub card text — no new claims.
export interface RouteInfo {
  path: string;
  label: string;
  parent: string | null;
  summary?: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/", label: "Ana Sayfa", parent: null },
  { path: "/hakkimizda/", label: "Hakkımızda", parent: "/" },
  { path: "/iletisim/", label: "İletişim", parent: "/" },
  { path: "/hizmetlerimiz/", label: "Hizmetlerimiz", parent: "/" },
  { path: "/bilgi-merkezi/", label: "Bilgi Merkezi", parent: "/" },
  { path: "/site-haritasi/", label: "Site Haritası", parent: "/" },
  { path: "/isitme-cihazi-fiyatlari/", label: "İşitme Cihazı Fiyatları", parent: "/" },
  { path: "/sgk-isitme-cihazi-odemesi/", label: "SGK İşitme Cihazı Ödemesi", parent: "/" },
  { path: "/darica-isitme-cihazlari/", label: "Darıca İşitme Cihazları", parent: "/" },
  { path: "/gebze-isitme-cihazlari/", label: "Gebze İşitme Cihazları", parent: "/" },
  { path: "/cayirova-isitme-cihazlari/", label: "Çayırova İşitme Cihazları", parent: "/" },
  { path: "/kocaeli-isitme-cihazlari/", label: "Kocaeli İşitme Cihazları", parent: "/" },
  { path: "/isitme-cihazlari/", label: "İşitme Cihazları", parent: "/" },
  { path: "/isitme-cihazlari/bluetooth-ozellikli/", label: "Bluetooth Özellikli Cihazlar", parent: "/isitme-cihazlari/" },
  { path: "/isitme-cihazlari/cocuklara-ozel/", label: "Çocuklara Özel Cihazlar", parent: "/isitme-cihazlari/" },
  { path: "/isitme-cihazlari/gorunmez-cic/", label: "Görünmez (CIC) Cihazlar", parent: "/isitme-cihazlari/" },
  { path: "/isitme-cihazlari/kulak-arkasi-bte/", label: "Kulak Arkası (BTE) Cihazlar", parent: "/isitme-cihazlari/" },
  { path: "/isitme-cihazlari/kulak-ici-ite/", label: "Kulak İçi (ITE) Cihazlar", parent: "/isitme-cihazlari/" },
  { path: "/isitme-cihazlari/sarj-edilebilir/", label: "Şarj Edilebilir Cihazlar", parent: "/isitme-cihazlari/" },
  { path: "/isitme-cihazlari/suya-dayanikli/", label: "Suya Dayanıklı Cihazlar", parent: "/isitme-cihazlari/" },
  { path: "/markalar/", label: "Markalar", parent: "/" },
  { path: "/isitme-cihazi-markalari/", label: "Markalar ve Modeller Rehberi", parent: "/markalar/" },
  { path: "/markalar/am/", label: "A&M", parent: "/markalar/" },
  { path: "/markalar/audifon/", label: "Audifon", parent: "/markalar/" },
  { path: "/markalar/audio-service/", label: "Audio Service", parent: "/markalar/" },
  { path: "/markalar/beltone/", label: "Beltone", parent: "/markalar/" },
  { path: "/markalar/bernafon/", label: "Bernafon", parent: "/markalar/" },
  { path: "/markalar/coselgi/", label: "Coselgi", parent: "/markalar/" },
  { path: "/markalar/maico/", label: "Maico", parent: "/markalar/" },
  { path: "/markalar/nuear/", label: "NuEar", parent: "/markalar/" },
  { path: "/markalar/oticon/", label: "Oticon", parent: "/markalar/" },
  { path: "/markalar/philips-hearing/", label: "Philips Hearing", parent: "/markalar/" },
  { path: "/markalar/phonak/", label: "Phonak", parent: "/markalar/" },
  { path: "/markalar/resound/", label: "ReSound", parent: "/markalar/" },
  { path: "/markalar/rexton/", label: "Rexton", parent: "/markalar/" },
  { path: "/markalar/signia/", label: "Signia", parent: "/markalar/" },
  { path: "/markalar/sonic/", label: "Sonic", parent: "/markalar/" },
  { path: "/markalar/unitron/", label: "Unitron", parent: "/markalar/" },
  { path: "/markalar/vista/", label: "Vista", parent: "/markalar/" },
  { path: "/markalar/widex/", label: "Widex", parent: "/markalar/" },
  { path: "/teknolojiler/", label: "Teknolojiler", parent: "/isitme-cihazlari/" },
  { path: "/teknolojiler/gurultu-engelleme/", label: "Gürültü Engelleme", parent: "/teknolojiler/", summary: "Gürültü engelleme teknolojisi nedir, nasıl çalışır? Avantajları, dikkat edilmesi gerekenler ve standart (gürültü engellemesiz) cihazlarla karşılaştırma." },
  { path: "/teknolojiler/kablosuz-baglanti/", label: "Kablosuz Bağlantı", parent: "/teknolojiler/", summary: "Kablosuz bağlantı özellikleri nedir, telesarmal ve Roger/FM sistemleri nasıl çalışır? Avantajları, dikkat edilecekler ve standart cihazlarla karşılaştırma." },
  { path: "/teknolojiler/konusma-odakli/", label: "Konuşma Odaklı Teknolojiler", parent: "/teknolojiler/", summary: "Konuşma odaklı teknolojiler nedir, yönlü mikrofon nasıl çalışır? Avantajları, dikkat edilmesi gerekenler ve standart (omnidirectional) cihazlarla karşılaştırma." },
  { path: "/teknolojiler/sarjli-teknolojiler/", label: "Şarjlı Teknolojiler", parent: "/teknolojiler/", summary: "Şarjlı teknolojiler nedir, lityum-iyon pil ve akıllı şarj yönetimi nasıl çalışır? Avantajları, dikkat edilmesi gerekenler ve standart şarjlı cihazlarla farkı." },
  { path: "/teknolojiler/tinnitus-cozumleri/", label: "Tinnitus Çözümleri", parent: "/teknolojiler/", summary: "Tinnitus (kulak çınlaması) destek özelliği nedir, nasıl çalışır? Bir tedavi yöntemi değildir. Avantajları, dikkat edilecekler ve standart cihazlarla farkı." },
  { path: "/teknolojiler/uzaktan-kontrol/", label: "Uzaktan Kontrol", parent: "/teknolojiler/", summary: "Uzaktan kontrol özellikleri nedir, uygulama ve uzaktan destek (TeleCare) nasıl çalışır? Avantajları, dikkat edilmesi gerekenler ve standart cihazlarla farkı." },
  { path: "/teknolojiler/yapay-zeka-destekli/", label: "Yapay Zeka Destekli Cihazlar", parent: "/teknolojiler/", summary: "Yapay zeka destekli işitme cihazı nedir, nasıl çalışır? Avantajları, dikkat edilmesi gerekenler ve standart (kural tabanlı) cihazlarla karşılaştırma." },
  { path: "/ihtiyaciniza-gore/", label: "İhtiyacınıza Göre", parent: "/isitme-cihazlari/" },
  { path: "/ihtiyaciniza-gore/aktif-yasam-icin-cihazlar/", label: "Aktif Yaşam İçin Cihazlar", parent: "/ihtiyaciniza-gore/", summary: "Spor yapan, sık seyahat eden veya hareketli yaşayanlar için hangi cihaz özellikleri öne çıkar? Güvenli oturma, rüzgar gürültüsü azaltma ve hızlı şarj." },
  { path: "/ihtiyaciniza-gore/cok-ileri-derece-isitme-kaybi/", label: "Çok İleri Derece İşitme Kaybı", parent: "/ihtiyaciniza-gore/", summary: "Çok ileri derece işitme kaybı (91 dB ve üzeri) nedir, nasıl anlaşılır? Günlük belirtileri, öne çıkan power BTE cihaz özellikleri ve değerlendirme süreci." },
  { path: "/ihtiyaciniza-gore/hafif-isitme-kaybi/", label: "Hafif İşitme Kaybı", parent: "/ihtiyaciniza-gore/", summary: "Hafif işitme kaybı (26-40 dB) nedir, nasıl anlaşılır? Günlük yaşamdaki belirtileri, öne çıkan cihaz özellikleri ve orta derece kayıpla karşılaştırma." },
  { path: "/ihtiyaciniza-gore/ileri-derece-isitme-kaybi/", label: "İleri Derece İşitme Kaybı", parent: "/ihtiyaciniza-gore/", summary: "İleri derece işitme kaybı (71-90 dB) nedir, nasıl anlaşılır? Günlük belirtileri, öne çıkan cihaz özellikleri ve çok ileri dereceyle karşılaştırma." },
  { path: "/ihtiyaciniza-gore/orta-derece-isitme-kaybi/", label: "Orta Derece İşitme Kaybı", parent: "/ihtiyaciniza-gore/", summary: "Orta derece işitme kaybı (41-55 dB) nedir, nasıl anlaşılır? Günlük belirtileri, öne çıkan cihaz özellikleri ve orta-ileri dereceyle karşılaştırma." },
  { path: "/ihtiyaciniza-gore/tek-tarafli-isitme-kaybi/", label: "Tek Taraflı İşitme Kaybı", parent: "/ihtiyaciniza-gore/", summary: "Tek taraflı işitme kaybı nedir, CROS ve BiCROS sistemleri nasıl çalışır? Günlük belirtileri, öne çıkan cihaz özellikleri ve standart cihazla karşılaştırma." },
  { path: "/ihtiyaciniza-gore/yaslilar-icin-cihazlar/", label: "Yaşlılar İçin Cihazlar", parent: "/ihtiyaciniza-gore/", summary: "Yaşa bağlı işitme kaybında hangi cihaz özellikleri önceliklidir? Kolay kullanım, aile destekli uzaktan ayar ve şarj kolaylığı seçeneklerini keşfedin." },
  { path: "/segmentler/", label: "Segmentler", parent: "/markalar/" },
  { path: "/segmentler/ekonomik-seri/", label: "Ekonomik Seri", parent: "/segmentler/", summary: "Ekonomik seri işitme cihazları nedir, kimler için uygundur? Uygun fiyat, sade kullanım ve üretici garantisi hakkında bilmeniz gerekenler." },
  { path: "/segmentler/premium-seri/", label: "Premium Seri", parent: "/segmentler/", summary: "Premium seri işitme cihazları nedir, kimler için uygundur? Yapay zeka destekli ses işleme, tam kablosuz bağlantı ve standart seriyle karşılaştırma." },
  { path: "/segmentler/standart-seri/", label: "Standart Seri", parent: "/segmentler/", summary: "Standart seri işitme cihazları nedir, kimler için uygundur? Dengeli teknoloji, fiyat-performans dengesi ve ekonomik seriyle karşılaştırma." },
  { path: "/neden-orijinal/", label: "Neden Orijinal", parent: "/markalar/" },
  { path: "/neden-orijinal/guvenilir-teknoloji/", label: "Güvenilir Teknoloji", parent: "/neden-orijinal/", summary: "Orijinal işitme cihazı nasıl doğrulanır? Satış kanalı ve seri numarası kontrolünü ve paralel ithal ürün risklerini öğrenin." },
  { path: "/neden-orijinal/kolay-degisim/", label: "Kolay Değişim", parent: "/neden-orijinal/", summary: "Orijinal işitme cihazlarında kolay değişim süreci nasıl işler? Deneme sonrası değerlendirme, üretim hatası güvencesi ve ihtiyaç değişikliğinde model geçişi." },
  { path: "/neden-orijinal/marka-danismanligi/", label: "Marka Danışmanlığı", parent: "/neden-orijinal/", summary: "Darıca'daki merkezimizde 18 marka arasından ihtiyacınıza uygun işitme cihazı marka ve model ailesini birlikte değerlendiriyoruz. Marka değil, size uyan çözüm." },
  { path: "/neden-orijinal/orijinal-aksesuar/", label: "Orijinal Aksesuar", parent: "/neden-orijinal/", summary: "Orijinal işitme cihazı aksesuarları neden önemlidir? Kulak ucu, cerumen filtresi, pil ve şarj aksesuarlarında doğru uyum ve hijyen için bilmeniz gerekenler." },
  { path: "/neden-orijinal/ucretsiz-danismanlik/", label: "Ücretsiz Danışmanlık", parent: "/neden-orijinal/", summary: "Ücretsiz işitme testi ve uzman danışmanlığımızla size en uygun işitme cihazını satış baskısı olmadan birlikte belirleyin. SGK bilgilendirmesi ve demo deneme." },
  { path: "/neden-orijinal/uzun-omurlu-cihazlar/", label: "Uzun Ömürlü Cihazlar", parent: "/neden-orijinal/", summary: "Orijinal işitme cihazlarını uzun ömürlü kılan nedir? Kaliteli bileşenler, düzenli bakım, yedek parçanın önemi ve cihaz ömrünü uzatma adımlarını öğrenin." },
  { path: "/neden-orijinal/yaygin-servis-agi/", label: "Üretici Yetkili Servis Desteği", parent: "/neden-orijinal/", summary: "18 markanın tamamı için üretici servis yetkisi: garanti koşulları, doğru parça ve belgeli işlem açısından yetkili servis desteğinin önemi. Hizmet noktamız Darıca." },
  { path: "/rehberler/", label: "Rehberler", parent: "/bilgi-merkezi/" },
  { path: "/rehberler/cihaz-secim-rehberi/", label: "Cihaz Seçim Rehberi", parent: "/rehberler/", summary: "İşitme cihazı seçerken nelere dikkat etmelisiniz? Derece ve tür, yaşam tarzı, bütçe, form faktörü ve bağlantı ihtiyaçlarına göre doğru cihazı seçme rehberi." },
  { path: "/rehberler/ilk-kullanim-rehberi/", label: "İlk Kullanım Rehberi", parent: "/rehberler/", summary: "Yeni işitme cihazınızı ilk günlerde nasıl kullanmalısınız? Temel kontroller, kullanım süresi önerileri ve basit sorun giderme adımları hakkında bilgi edinin." },
  { path: "/rehberler/isitme-kaybi-nedir/", label: "İşitme Kaybı Nedir?", parent: "/rehberler/", summary: "İşitme kaybı nedir, türleri ve nedenleri nelerdir? İletim tipi, sensörinöral ve karma işitme kaybı ile ne zaman uzmana başvurulması gerektiği." },
  { path: "/rehberler/uyum-sureci/", label: "Uyum Süreci", parent: "/rehberler/", summary: "İşitme cihazınıza uyum süreci nasıl işler? Beynin yeniden kalibrasyonu, uyum sürecinin aşamaları ve sık yaşanan deneyimler hakkında bilgi edinin." },
  { path: "/blog/basari-hikayeleri/", label: "Başarı Hikayeleri", parent: "/bilgi-merkezi/" },
  { path: "/blog/etkinlikler/", label: "Etkinlikler", parent: "/bilgi-merkezi/" },
  { path: "/blog/kampanyalar/", label: "Kampanyalar", parent: "/bilgi-merkezi/" },
  { path: "/blog/sik-sorulan-sorular/", label: "Sık Sorulan Sorular", parent: "/bilgi-merkezi/" },
  { path: "/blog/uzman-gorusleri/", label: "Uzman Görüşleri", parent: "/bilgi-merkezi/" },
  { path: "/blog/yeni-teknolojiler/", label: "Yeni Teknolojiler", parent: "/bilgi-merkezi/" },
  { path: "/sgk/cocuklarda-sgk/", label: "Çocuklarda SGK", parent: "/sgk-isitme-cihazi-odemesi/" },
  { path: "/sgk/gerekli-belgeler/", label: "Gerekli Belgeler", parent: "/sgk-isitme-cihazi-odemesi/" },
  { path: "/sgk/katki-payi/", label: "SGK Katkı Payı", parent: "/sgk-isitme-cihazi-odemesi/" },
  { path: "/sgk/rapor-sureci/", label: "SGK Rapor Süreci", parent: "/sgk-isitme-cihazi-odemesi/" },
  { path: "/sgk/yenileme-hakki/", label: "Yenileme Hakkı", parent: "/sgk-isitme-cihazi-odemesi/" },
  { path: "/degerlendirme/", label: "Değerlendirme", parent: "/hizmetlerimiz/" },
  { path: "/degerlendirme/cocuk-isitme-testi/", label: "Çocuk İşitme Testi", parent: "/degerlendirme/", summary: "Çocuklarda işitme testi nasıl yapılır? Yenidoğan taraması, ABR, oyun odyometrisi ve yaşa göre kullanılan test yöntemleri hakkında bilgi edinin." },
  { path: "/degerlendirme/odyometri/", label: "Odyometri", parent: "/degerlendirme/", summary: "Odyometri nasıl yapılır, neyi ölçer? Hava yolu ve kemik yolu iletimi, konuşma odyometrisi ve odyogram sonuçlarının nasıl okunduğu hakkında bilgi edinin." },
  { path: "/degerlendirme/online-isitme-testi/", label: "Online İşitme Testi", parent: "/degerlendirme/", summary: "Kulaklığınızla birkaç dakikada yapılan online işitme taraması. Klinik teşhis aracı değildir; ücretsiz işitme testi için Darıca'daki merkezimizden randevu alın." },
  { path: "/degerlendirme/timpanometri/", label: "Timpanometri", parent: "/degerlendirme/", summary: "Timpanometri nasıl yapılır, neyi değerlendirir? Orta kulak basıncı, kulak zarı hareketliliği ve akustik refleks ölçümü hakkında bilgi edinin." },
  { path: "/degerlendirme/tinnitus-degerlendirme/", label: "Tinnitus Değerlendirme", parent: "/degerlendirme/", summary: "Tinnitus (kulak çınlaması) değerlendirmesi nasıl yapılır? Öykü alma, odyometri, tinnitus eşleştirme ve THI anketiyle süreç hakkında bilgi edinin." },
  { path: "/degerlendirme/ucretsiz-isitme-testi/", label: "Ücretsiz İşitme Testi", parent: "/degerlendirme/", summary: "İşitme testi nasıl yapılır, sonuç nasıl okunur? Odyogram rehberi; Darıca'da odyometrist eşliğinde ücretsiz test, Gebze ve Çayırova'dan ulaşım." },
  { path: "/uygulama-ayar/", label: "Uygulama ve Ayar", parent: "/hizmetlerimiz/" },
  { path: "/uygulama-ayar/cihaz-deneme/", label: "Cihaz Deneme", parent: "/uygulama-ayar/", summary: "Darıca'daki merkezimizde ücretsiz, yaklaşık 20 dakikalık cihaz demosu; cihazı satın alarak 7 güne kadar deneme ve uygun bulunmazsa kesintisiz ücret iadesi." },
  { path: "/uygulama-ayar/cihaz-uygulama/", label: "Cihaz Uygulama", parent: "/uygulama-ayar/", summary: "İşitme cihazı uygulama randevusu nasıl işler? Fiziksel yerleştirme, odyograma dayalı programlama, doğrulama ölçümü ve kullanım eğitimi hakkında bilgi edinin." },
  { path: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/", label: "Evde Hizmet", parent: "/uygulama-ayar/", summary: "Kocaeli'nin tamamında ve İstanbul Anadolu Yakası'nın tüm ilçelerinde ücretsiz, randevulu evde işitme cihazı hizmeti. Bizi arayın veya WhatsApp'tan yazın." },
  { path: "/uygulama-ayar/kalip-alimi/", label: "Kalıp Alımı", parent: "/uygulama-ayar/", summary: "Kulak kalıbı alımı nasıl yapılır? Kulak muayenesi, kalıp malzemesi enjeksiyonu ve laboratuvar üretimiyle kişiye özel kulak kalıbı süreci hakkında bilgi edinin." },
  { path: "/uygulama-ayar/kisiye-ozel-ayar/", label: "Kişiye Özel Ayar", parent: "/uygulama-ayar/", summary: "İşitme cihazınızın günlük yaşamınıza ve dinleme ihtiyaçlarınıza göre kişiye özel ayarı: süreç, sık sorulan sorular ve randevu. Merkezimiz Darıca'dadır." },
  { path: "/uygulama-ayar/kisiye-ozel-programlama/", label: "Kişiye Özel Programlama", parent: "/uygulama-ayar/", summary: "İşitme cihazınızın kişiye özel programlanması nasıl yapılır? Geri bildirime dayalı ince ayar, ortama özel programlar ve veri kaydı desteği hakkında bilgi." },
  { path: "/uygulama-ayar/kontrol-randevusu/", label: "Kontrol Randevusu", parent: "/uygulama-ayar/", summary: "Kontrol randevusu ne zaman ve neden gerekir? İşitme yeniden değerlendirmesi, cihaz performans kontrolü ve fiziksel muayeneyi kapsayan düzenli kontrol süreci." },
  { path: "/uygulama-ayar/uzaktan-ayar/", label: "Uzaktan Ayar", parent: "/uygulama-ayar/", summary: "Uzaktan ayar hizmeti nasıl işler? Merkeze gelmeden video görüşmeyle işitme cihazı ayar güncellemesi almak için uygunluk, güvenlik ve süreç hakkında bilgi." },
  { path: "/servis-bakim/", label: "Servis ve Bakım", parent: "/hizmetlerimiz/" },
  { path: "/servis-bakim/cihaz-temizligi/", label: "Cihaz Temizliği", parent: "/servis-bakim/", summary: "İşitme cihazınızı günlük olarak nasıl temizlemeli ve saklamalısınız? Doğru malzeme, kuru saklama ve kaçınılması gereken temizlik hataları hakkında bilgi edinin." },
  { path: "/servis-bakim/garanti-islemleri/", label: "Garanti İşlemleri", parent: "/servis-bakim/", summary: "İşitme cihazı garanti işlemleri nasıl yürütülür? Garanti kapsamı, gerekli belgeler, kapsam dışı durumlar ve garanti talep süreci hakkında bilgi edinin." },
  { path: "/servis-bakim/onarim-takibi/", label: "Onarım Takibi", parent: "/servis-bakim/", summary: "Cihazınızı servise teslim ettiyseniz: dijital servis kaydı, gerektiğinde SMS/WhatsApp ile manuel bilgilendirme ve telefon veya WhatsApp'tan durum sorma yolları." },
  { path: "/servis-bakim/periyodik-bakim/", label: "Periyodik Bakım", parent: "/servis-bakim/", summary: "Periyodik bakım randevusu ne içerir? Kulak kiri filtresi ve tüp değişimi, aşınma kontrolü ve fonksiyon testiyle önleyici işitme cihazı bakımı hakkında bilgi." },
  { path: "/servis-bakim/pil-aksesuar/", label: "Pil ve Aksesuar", parent: "/servis-bakim/", summary: "İşitme cihazınız için pil ve aksesuar seçenekleri nelerdir? Çinko-hava pil, şarjlı lityum-iyon sistem, saklama kutusu ve yedek parça seçenekleri." },
  { path: "/servis-bakim/teknik-servis/", label: "Teknik Servis", parent: "/servis-bakim/", summary: "İşitme cihazı arızası mı yaşıyorsunuz? Ses kesintisi, açılmama veya hasar için Darıca merkezimizde ilk değerlendirme, teknik servise gönderim ve teknik kontrol." },
  { path: "/kvkk/", label: "KVKK ve Gizlilik", parent: "/" },
  { path: "/kvkk/aydinlatma-metni/", label: "Aydınlatma Metni", parent: "/kvkk/", summary: "Avrasya İşitme Cihazları web sitesi KVKK aydınlatma metni: toplanan teknik veriler, Google hizmetleri, yurt dışı aktarım ve başvuru yolları." },
  { path: "/kvkk/cerez-politikasi/", label: "Çerez Politikası", parent: "/kvkk/", summary: "eniyicihaz.com çerez politikası: zorunlu, analitik ve reklam ölçüm çerez kategorileri, üçüncü taraf gömme içerikler, tercih yönetimi ve çerezleri silme." },
  { path: "/kvkk/gizlilik-politikasi/", label: "Gizlilik Politikası", parent: "/kvkk/", summary: "Avrasya İşitme Cihazları'nın gizlilik ve kişisel verilerin korunması politikası: veri güvenliği, üçüncü taraf hizmetler, pazarlama izinleri, kişi hakları." },
  { path: "/kvkk/ilgili-kisi-basvuru-formu/", label: "İlgili Kişi Başvuru Formu", parent: "/kvkk/", summary: "KVKK kapsamında Avrasya İşitme Cihazları'na kişisel veri başvurusu yapmak için ilgili kişi başvuru formu ve başvuru adresleri." },
];

const BY_PATH = new Map(ROUTES.map((r) => [r.path, r]));

/** Normalises "/a/b" and "/a/b/" to "/a/b/". */
export function normalizePath(pathname: string): string {
  const p = pathname.split("?")[0].split("#")[0];
  return p.endsWith("/") ? p : p + "/";
}

export function routeFor(pathname: string): RouteInfo | undefined {
  return BY_PATH.get(normalizePath(pathname));
}

/** Breadcrumb trail (root first, current page last) or null for unknown paths / the home page. */
export function breadcrumbTrail(pathname: string): RouteInfo[] | null {
  const here = routeFor(pathname);
  if (!here || here.path === "/") return null;
  const chain: RouteInfo[] = [];
  let node: RouteInfo | undefined = here;
  let guard = 0;
  while (node && guard++ < 8) {
    chain.unshift(node);
    node = node.parent ? BY_PATH.get(node.parent) : undefined;
  }
  return chain;
}

export function childrenOf(path: string): RouteInfo[] {
  return ROUTES.filter((r) => r.parent === path);
}
