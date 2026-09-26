// Site Haritası — src/data/search/index.ts'teki 92 doğrulanmış gerçek
// sayfanın tamamı, 15 gerçek kategoriye (URL prefix'lerine göre)
// ayrılmış hali. Hiçbir href burada yeniden icat edilmedi — hepsi
// search index'teki (ve dolayısıyla src/pages/ altındaki gerçek route
// ağacıyla zaten doğrulanmış) URL'lerle birebir aynı. Etiketler, SEO
// title'ları yerine header.data.ts'teki daha kısa/nav-dostu gerçek
// label'lardan alındı (sitemap sayfası taranabilir olmalı).
//
// Sıralama kasıtlı olarak kategori boyutuna (link sayısına) göre artan —
// canlı tarayıcı kontrolünde, orijinal "mantıksal" sıranın 3 ve 2 kolonlu
// grid'de çok dengesiz satır yükseklikleri ürettiği görüldü (ör. Markalar
// [19] ile Segmentler [3] aynı satırda, aralarında büyük boş alan).
// Artan boyut sırası, hem 3 hem 2 kolonda ardışık kategorilerin
// birbirine yakın yükseklikte olmasını sağlıyor.
//
// Yeni bir gerçek sayfa eklendiğinde buraya da bir satır eklenmesi
// gerekir (search index'e eklenirken zaten yapılan aynı bakım adımı).
import { Home, Headset, Building2, Layers, BookOpen, Wrench, Shield, Stethoscope, Cpu, Target, ShieldCheck, Newspaper, Award, Ear, SlidersHorizontal } from "lucide-astro";
import type { SitemapSectionContent } from "../../components/shared/SitemapSection/SitemapSection.astro";

export const sitemapCategories: SitemapSectionContent[] = [
  {
    icon: Home,
    title: "Ana Sayfa",
    links: [{ label: "Ana Sayfa", href: "/" }],
  },
  {
    icon: Headset,
    title: "Hizmetlerimiz",
    links: [{ label: "Hizmetlerimiz", href: "/hizmetlerimiz" }],
  },
  {
    icon: Building2,
    title: "Kurumsal",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
  {
    icon: Layers,
    title: "Segmentler",
    links: [
      { label: "Premium Seri", href: "/segmentler/premium-seri" },
      { label: "Standart Seri", href: "/segmentler/standart-seri" },
      { label: "Ekonomik Seri", href: "/segmentler/ekonomik-seri" },
    ],
  },
  {
    icon: BookOpen,
    title: "Rehberler",
    links: [
      { label: "İşitme Kaybı Nedir?", href: "/rehberler/isitme-kaybi-nedir" },
      { label: "Cihaz Seçim Rehberi", href: "/rehberler/cihaz-secim-rehberi" },
      { label: "İlk Kullanım Rehberi", href: "/rehberler/ilk-kullanim-rehberi" },
      { label: "Uyum Süreci", href: "/rehberler/uyum-sureci" },
    ],
  },
  {
    icon: Wrench,
    title: "Servis & Bakım",
    links: [
      { label: "Teknik Servis", href: "/servis-bakim/teknik-servis" },
      { label: "Periyodik Bakım", href: "/servis-bakim/periyodik-bakim" },
      { label: "Cihaz Temizliği", href: "/servis-bakim/cihaz-temizligi" },
      { label: "Pil & Aksesuar", href: "/servis-bakim/pil-aksesuar" },
      { label: "Garanti İşlemleri", href: "/servis-bakim/garanti-islemleri" },
      { label: "Onarım Takibi", href: "/servis-bakim/onarim-takibi" },
    ],
  },
  {
    icon: Shield,
    title: "SGK",
    links: [
      { label: "SGK İşitme Cihazı Ödemesi", href: "/sgk-isitme-cihazi-odemesi" },
      { label: "SGK Katkı Payı", href: "/sgk/katki-payi" },
      { label: "SGK Rapor Süreci", href: "/sgk/rapor-sureci" },
      { label: "Gerekli Belgeler", href: "/sgk/gerekli-belgeler" },
      { label: "Çocuklarda SGK", href: "/sgk/cocuklarda-sgk" },
      { label: "Yenileme Hakkı", href: "/sgk/yenileme-hakki" },
    ],
  },
  {
    icon: Stethoscope,
    title: "Değerlendirme",
    links: [
      { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi" },
      { label: "Odyometri", href: "/degerlendirme/odyometri" },
      { label: "Timpanometri", href: "/degerlendirme/timpanometri" },
      { label: "Çocuk İşitme Testi", href: "/degerlendirme/cocuk-isitme-testi" },
      { label: "Tinnitus Değerlendirme", href: "/degerlendirme/tinnitus-degerlendirme" },
      { label: "Online İşitme Testi", href: "/degerlendirme/online-isitme-testi" },
    ],
  },
  {
    icon: Cpu,
    title: "Teknolojiler",
    links: [
      { label: "Yapay Zeka Destekli Cihazlar", href: "/teknolojiler/yapay-zeka-destekli" },
      { label: "Gürültü Engelleme Teknolojisi", href: "/teknolojiler/gurultu-engelleme" },
      { label: "Konuşma Odaklı Teknolojiler", href: "/teknolojiler/konusma-odakli" },
      { label: "Kablosuz Bağlantı Özellikleri", href: "/teknolojiler/kablosuz-baglanti" },
      { label: "Şarjlı Teknolojiler", href: "/teknolojiler/sarjli-teknolojiler" },
      { label: "Uzaktan Kontrol Özellikleri", href: "/teknolojiler/uzaktan-kontrol" },
      { label: "Tinnitus (Kulak Çınlaması) Çözümleri", href: "/teknolojiler/tinnitus-cozumleri" },
    ],
  },
  {
    icon: Target,
    title: "İhtiyacınıza Göre",
    links: [
      { label: "Hafif İşitme Kaybı", href: "/ihtiyaciniza-gore/hafif-isitme-kaybi" },
      { label: "Orta Derece İşitme Kaybı", href: "/ihtiyaciniza-gore/orta-derece-isitme-kaybi" },
      { label: "İleri Derece İşitme Kaybı", href: "/ihtiyaciniza-gore/ileri-derece-isitme-kaybi" },
      { label: "Çok İleri Derece İşitme Kaybı", href: "/ihtiyaciniza-gore/cok-ileri-derece-isitme-kaybi" },
      { label: "Tek Taraflı İşitme Kaybı", href: "/ihtiyaciniza-gore/tek-tarafli-isitme-kaybi" },
      { label: "Yaşlılar İçin Cihazlar", href: "/ihtiyaciniza-gore/yaslilar-icin-cihazlar" },
      { label: "Aktif Yaşam İçin Cihazlar", href: "/ihtiyaciniza-gore/aktif-yasam-icin-cihazlar" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Neden Orijinal?",
    links: [
      { label: "Güvenilir Teknoloji", href: "/neden-orijinal/guvenilir-teknoloji" },
      { label: "Uzun Ömürlü Cihazlar", href: "/neden-orijinal/uzun-omurlu-cihazlar" },
      { label: "Yaygın Servis Ağı", href: "/neden-orijinal/yaygin-servis-agi" },
      { label: "Orijinal Aksesuar", href: "/neden-orijinal/orijinal-aksesuar" },
      { label: "Ücretsiz Danışmanlık", href: "/neden-orijinal/ucretsiz-danismanlik" },
      { label: "Kolay Değişim", href: "/neden-orijinal/kolay-degisim" },
      { label: "Marka Danışmanlığı", href: "/neden-orijinal/marka-danismanligi" },
    ],
  },
  {
    icon: Newspaper,
    title: "Bilgi Merkezi",
    links: [
      { label: "Bilgi Merkezi", href: "/bilgi-merkezi" },
      { label: "Yeni Teknolojiler", href: "/blog/yeni-teknolojiler" },
      { label: "Uzman Görüşleri", href: "/blog/uzman-gorusleri" },
      { label: "Başarı Hikayeleri", href: "/blog/basari-hikayeleri" },
      { label: "Sık Sorulan Sorular", href: "/blog/sik-sorulan-sorular" },
      { label: "Kampanyalar", href: "/blog/kampanyalar" },
      { label: "Etkinlikler", href: "/blog/etkinlikler" },
    ],
  },
  {
    icon: Award,
    title: "Markalar",
    columns: 2,
    links: [
      { label: "Tüm Markalar", href: "/markalar" },
      { label: "Oticon", href: "/markalar/oticon", logo: "/images/brands/oticon-logo-seffaf.webp" },
      { label: "Phonak", href: "/markalar/phonak", logo: "/images/brands/phonak-logo-seffaf.webp" },
      { label: "Signia", href: "/markalar/signia", logo: "/images/brands/signia-logo-seffaf.webp" },
      { label: "Widex", href: "/markalar/widex", logo: "/images/brands/widex-logo-seffaf.webp" },
      { label: "ReSound", href: "/markalar/resound", logo: "/images/brands/resound-logo-seffaf.webp" },
      { label: "NuEar", href: "/markalar/nuear", logo: "/images/brands/nuear-logo-seffaf.webp" },
      { label: "Audio Service", href: "/markalar/audio-service", logo: "/images/brands/audio-service-logo-seffaf.webp" },
      { label: "Unitron", href: "/markalar/unitron", logo: "/images/brands/unitron-logo-seffaf.webp" },
      { label: "Bernafon", href: "/markalar/bernafon", logo: "/images/brands/bernafon-logo-seffaf.webp" },
      { label: "A&M", href: "/markalar/am", logo: "/images/brands/am-logo-seffaf.webp" },
      { label: "Philips Hearing", href: "/markalar/philips-hearing", logo: "/images/brands/philips-logo-seffaf.webp" },
      { label: "Maico", href: "/markalar/maico", logo: "/images/brands/maico-logo-seffaf.webp" },
      { label: "Beltone", href: "/markalar/beltone", logo: "/images/brands/beltone-logo-seffaf.webp" },
      { label: "Vista", href: "/markalar/vista", logo: "/images/brands/vista-logo-seffaf.webp" },
      { label: "Rexton", href: "/markalar/rexton", logo: "/images/brands/rexton-logo-seffaf.webp" },
      { label: "Sonic", href: "/markalar/sonic", logo: "/images/brands/sonic-logo-seffaf.webp" },
      { label: "Coselgi", href: "/markalar/coselgi", logo: "/images/brands/coselgi-logo-seffaf.webp" },
      { label: "Audifon", href: "/markalar/audifon", logo: "/images/brands/audifon-logo-seffaf.webp" },
    ],
  },
  {
    icon: Ear,
    title: "İşitme Cihazları",
    links: [
      { label: "Tüm İşitme Cihazları", href: "/isitme-cihazlari" },
      { label: "Kulak Arkası (BTE)", href: "/isitme-cihazlari/kulak-arkasi-bte" },
      { label: "Kulak İçi (ITE)", href: "/isitme-cihazlari/kulak-ici-ite" },
      { label: "Şarj Edilebilir Cihazlar", href: "/isitme-cihazlari/sarj-edilebilir" },
      { label: "Bluetooth Özellikli Cihazlar", href: "/isitme-cihazlari/bluetooth-ozellikli" },
      { label: "Çocuklara Özel Cihazlar", href: "/isitme-cihazlari/cocuklara-ozel" },
      { label: "Görünmez (CIC) Cihazlar", href: "/isitme-cihazlari/gorunmez-cic" },
      { label: "Suya Dayanıklı Cihazlar", href: "/isitme-cihazlari/suya-dayanikli" },
    ],
  },
  {
    icon: SlidersHorizontal,
    title: "Uygulama & Ayar",
    links: [
      { label: "Cihaz Uygulama", href: "/uygulama-ayar/cihaz-uygulama" },
      { label: "Kişiye Özel Ayar", href: "/uygulama-ayar/kisiye-ozel-ayar" },
      { label: "Kişiye Özel Programlama", href: "/uygulama-ayar/kisiye-ozel-programlama" },
      { label: "Cihaz Deneme", href: "/uygulama-ayar/cihaz-deneme" },
      { label: "Kalıp Alımı", href: "/uygulama-ayar/kalip-alimi" },
      { label: "Uzaktan Ayar", href: "/uygulama-ayar/uzaktan-ayar" },
      { label: "Kontrol Randevusu", href: "/uygulama-ayar/kontrol-randevusu" },
      { label: "Evde İşitme Cihazı Hizmeti", href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti" },
    ],
  },
];
