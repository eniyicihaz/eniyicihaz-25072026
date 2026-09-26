// ==========================================================
// Header — Content
// Every individual mega-menu link, column footer CTA and top-level nav
// item points to a real page — no "#" placeholders remain anywhere in
// this file. Where a reference redesign asked for a column/support-item
// grouping that doesn't map to one single real hub page, the closest
// real destination already in the project is used instead (see each
// mega's own inline comments for the specific substitution).
// ==========================================================

import type { HeaderData, MegaMenuData } from "./header.types";

const devicesMega: MegaMenuData = {
  id: "cihazlar",
  promo: {
    badge: "Modern İşitme Teknolojileri",
    title: "Size Uygun İşitme Cihazını Keşfedin",
    text: "En yeni teknoloji işitme cihazları ve uzman kadromuzla duyma deneyiminizi yeniden keşfedin.",
    cta: { label: "Tüm İşitme Cihazları", href: "/isitme-cihazlari" },
    image: "/images/ui/mega-menu-isitme-cihazlari.webp",
  },
  columns: [
    {
      icon: "ear",
      title: "Cihaz Türleri",
      description: "İhtiyacınıza uygun cihaz tipini keşfedin.",
      links: [
        { label: "Kulak Arkası (BTE)", href: "/isitme-cihazlari/kulak-arkasi-bte" },
        { label: "Kulak İçi (ITE)", href: "/isitme-cihazlari/kulak-ici-ite" },
        { label: "Şarj Edilebilir Cihazlar", href: "/isitme-cihazlari/sarj-edilebilir" },
        { label: "Bluetooth Özellikli Cihazlar", href: "/isitme-cihazlari/bluetooth-ozellikli" },
        { label: "Çocuklara Özel Cihazlar", href: "/isitme-cihazlari/cocuklara-ozel" },
        { label: "Görünmez (CIC) Cihazlar", href: "/isitme-cihazlari/gorunmez-cic" },
        { label: "Suya Dayanıklı Cihazlar", href: "/isitme-cihazlari/suya-dayanikli" },
      ],
      footer: { label: "Tüm İşitme Cihazları", href: "/isitme-cihazlari" },
    },
    {
      icon: "star",
      title: "Seriler & Özellikler",
      description: "En yeni işitme teknolojilerini inceleyin.",
      links: [
        { label: "Yapay Zeka Destekli Cihazlar", href: "/teknolojiler/yapay-zeka-destekli" },
        { label: "Gürültü Engelleme Teknolojisi", href: "/teknolojiler/gurultu-engelleme" },
        { label: "Konuşma Odaklı Teknolojiler", href: "/teknolojiler/konusma-odakli" },
        { label: "Şarjlı Teknolojiler", href: "/teknolojiler/sarjli-teknolojiler" },
        { label: "Uzaktan Kontrol Özellikleri", href: "/teknolojiler/uzaktan-kontrol" },
        { label: "Tinnitus (Kulak Çınlaması) Çözümleri", href: "/teknolojiler/tinnitus-cozumleri" },
      ],
      footer: { label: "Tüm Teknolojiler", href: "/isitme-cihazlari" },
    },
    {
      icon: "target",
      title: "İhtiyacınıza Göre",
      description: "İhtiyacınıza ve yaşam tarzınıza uygun segmenti keşfedin.",
      links: [
        { label: "Hafif İşitme Kaybı", href: "/ihtiyaciniza-gore/hafif-isitme-kaybi" },
        { label: "Orta Derece İşitme Kaybı", href: "/ihtiyaciniza-gore/orta-derece-isitme-kaybi" },
        { label: "İleri Derece İşitme Kaybı", href: "/ihtiyaciniza-gore/ileri-derece-isitme-kaybi" },
        { label: "Çok İleri Derece İşitme Kaybı", href: "/ihtiyaciniza-gore/cok-ileri-derece-isitme-kaybi" },
        { label: "Tek Taraflı İşitme Kaybı", href: "/ihtiyaciniza-gore/tek-tarafli-isitme-kaybi" },
        { label: "Yaşlılar İçin Cihazlar", href: "/ihtiyaciniza-gore/yaslilar-icin-cihazlar" },
        { label: "Aktif Yaşam İçin Cihazlar", href: "/ihtiyaciniza-gore/aktif-yasam-icin-cihazlar" },
      ],
      footer: { label: "Size Özel Çözümler", href: "/isitme-cihazlari" },
    },
  ],
  support: {
    icon: "headset",
    title: "Size Özel Destek",
    items: [
      { icon: "stethoscope", title: "Ücretsiz İşitme Testi", desc: "Uzman ekibimizle", href: "/degerlendirme/ucretsiz-isitme-testi" },
      { icon: "headphones", title: "Cihaz Deneme", desc: "Cihazları ücretsiz deneyin", href: "/uygulama-ayar/cihaz-deneme" },
      { icon: "sliders", title: "Kişiye Özel Ayar", desc: "Size özel programlama", href: "/uygulama-ayar/kisiye-ozel-ayar" },
      { icon: "wrench", title: "Teknik Servis", desc: "Hızlı ve güvenilir destek", href: "/servis-bakim/teknik-servis" },
    ],
    footer: { label: "Tüm Hizmetler", href: "/hizmetlerimiz" },
  },
};

// ---- Placeholder megas (structure final, content to be provided) ----

const brandsMega: MegaMenuData = {
  id: "markalar",
  promo: {
    badge: "Dünya Markaları Bir Arada",
    title: "Önde Gelen İşitme Cihazı Markaları",
    text: "Güvenilir global üreticilerin en yeni teknolojilerini orijinal ve garantili olarak sunuyoruz.",
    cta: { label: "Tüm Markalar", href: "/markalar" },
    image: "/images/ui/mega-menu-markalar.webp",
  },
  columns: [
    {
      icon: "award",
      title: "Popüler Markalar",
      description: "Dünyanın önde gelen işitme cihazı markaları.",
      links: [
        { label: "Oticon", href: "/markalar/oticon", logo: "/images/brands/oticon-logo-seffaf.webp" },
        { label: "Phonak", href: "/markalar/phonak", logo: "/images/brands/phonak-logo-seffaf.webp" },
        { label: "Signia", href: "/markalar/signia", logo: "/images/brands/signia-logo-seffaf.webp" },
        { label: "Widex", href: "/markalar/widex", logo: "/images/brands/widex-logo-seffaf.webp" },
        { label: "ReSound", href: "/markalar/resound", logo: "/images/brands/resound-logo-seffaf.webp" },
        { label: "NuEar", href: "/markalar/nuear", logo: "/images/brands/nuear-logo-seffaf.webp" },
      ],
      footer: { label: "Tüm Markalar", href: "/markalar" },
    },
    {
      icon: "shield",
      title: "Marka Rehberi",
      description: "Orijinal ürün seçmenin gerçek faydaları.",
      links: [
        { label: "Güvenilir Teknoloji", href: "/neden-orijinal/guvenilir-teknoloji" },
        { label: "Uzun Ömürlü Cihazlar", href: "/neden-orijinal/uzun-omurlu-cihazlar" },
        { label: "Yaygın Servis Ağı", href: "/neden-orijinal/yaygin-servis-agi" },
        { label: "Orijinal Aksesuar", href: "/neden-orijinal/orijinal-aksesuar" },
        { label: "Ücretsiz Danışmanlık", href: "/neden-orijinal/ucretsiz-danismanlik" },
        { label: "Kolay Değişim", href: "/neden-orijinal/kolay-degisim" },
      ],
      footer: { label: "Detaylı Bilgi", href: "/markalar" },
    },
    {
      icon: "sparkles",
      title: "Segmentler",
      description: "İhtiyacınıza ve yaşam tarzınıza uygun segmenti keşfedin.",
      links: [
        { label: "Premium Seri", href: "/segmentler/premium-seri" },
        { label: "Standart Seri", href: "/segmentler/standart-seri" },
        { label: "Ekonomik Seri", href: "/segmentler/ekonomik-seri" },
        { label: "Şarj Edilebilir Seri", href: "/isitme-cihazlari/sarj-edilebilir" },
        { label: "Görünmez Seri", href: "/isitme-cihazlari/gorunmez-cic" },
        { label: "Çocuk Serisi", href: "/isitme-cihazlari/cocuklara-ozel" },
      ],
      footer: { label: "Tüm Seriler", href: "/markalar" },
    },
  ],
  support: {
    icon: "headset",
    title: "Marka Desteği",
    items: [
      { icon: "shield", title: "Orijinallik Garantisi", desc: "Yetkili satıcı güvencesi", href: "/neden-orijinal/guvenilir-teknoloji" },
      { icon: "wrench", title: "Yetkili Servis", desc: "Tüm markalar için", href: "/neden-orijinal/yaygin-servis-agi" },
      { icon: "battery", title: "Aksesuar & Yedek", desc: "Orijinal parçalar", href: "/neden-orijinal/orijinal-aksesuar" },
      { icon: "headphones", title: "Marka Danışmanlığı", desc: "Size uygun markayı seçin", href: "/neden-orijinal/marka-danismanligi" },
    ],
    footer: { label: "Tüm Hizmetler", href: "/hizmetlerimiz" },
  },
};

const servicesMega: MegaMenuData = {
  id: "hizmetler",
  promo: {
    badge: "Daha İyi Duymanız İçin",
    title: "Profesyonel Hizmetlerimiz",
    text: "Ücretsiz testten cihaz uygulamasına, teknik servisten danışmanlığa kadar tüm süreçte yanınızdayız.",
    cta: { label: "Tüm Hizmetler", href: "/hizmetlerimiz" },
    trustItems: ["Uzman ekibimiz", "Kişiye özel çözümler", "Tüm markalarda hizmet", "Darıca'da kolay ulaşım"],
    floatingBadge: "Tüm Markalarda Profesyonel Hizmet",
  },
  columns: [
    {
      icon: "stethoscope",
      title: "Değerlendirme",
      description: "İşitme sağlığınızı profesyonel olarak değerlendirin.",
      links: [
        { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi" },
        { label: "Odyometri", href: "/degerlendirme/odyometri" },
        { label: "Timpanometri", href: "/degerlendirme/timpanometri" },
        { label: "Çocuk İşitme Testi", href: "/degerlendirme/cocuk-isitme-testi" },
        { label: "Tinnitus Değerlendirme", href: "/degerlendirme/tinnitus-degerlendirme" },
        { label: "İşitme Danışmanlığı", href: "/neden-orijinal/ucretsiz-danismanlik" },
        { label: "Online İşitme Testi", href: "/degerlendirme/online-isitme-testi" },
      ],
      footer: { label: "Değerlendirme Hizmetleri", href: "/hizmetlerimiz" },
    },
    {
      icon: "sliders",
      title: "Uygulama & Ayar",
      description: "Cihazınızı size özel ayarlarla en iyi şekilde kullanın.",
      links: [
        { label: "Cihaz Uygulama", href: "/uygulama-ayar/cihaz-uygulama" },
        { label: "Kişiye Özel Programlama", href: "/uygulama-ayar/kisiye-ozel-programlama" },
        { label: "Cihaz Deneme", href: "/uygulama-ayar/cihaz-deneme" },
        { label: "Kalıp Alımı", href: "/uygulama-ayar/kalip-alimi" },
        { label: "Uzaktan Ayar", href: "/uygulama-ayar/uzaktan-ayar" },
        { label: "Kontrol Randevusu", href: "/uygulama-ayar/kontrol-randevusu" },
        { label: "Evde Cihaz Hizmeti", href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti" },
      ],
      footer: { label: "Uygulama Hizmetleri", href: "/hizmetlerimiz" },
    },
    {
      icon: "wrench",
      title: "Servis & Bakım",
      description: "Cihazınızın performansını her zaman en iyi seviyede tutun.",
      links: [
        { label: "Teknik Servis", href: "/servis-bakim/teknik-servis" },
        { label: "Periyodik Bakım", href: "/servis-bakim/periyodik-bakim" },
        { label: "Cihaz Temizliği", href: "/servis-bakim/cihaz-temizligi" },
        { label: "Pil & Aksesuar", href: "/servis-bakim/pil-aksesuar" },
        { label: "Garanti İşlemleri", href: "/servis-bakim/garanti-islemleri" },
        { label: "Onarım Takibi", href: "/servis-bakim/onarim-takibi" },
      ],
      footer: { label: "Servis Hizmetleri", href: "/hizmetlerimiz" },
    },
  ],
  support: {
    icon: "headset",
    title: "Hızlı Erişim",
    items: [
      { icon: "calendar", title: "Randevu Al", desc: "Size uygun saatte", href: "tel:+905337733199" },
      { icon: "phone", title: "Bizi Arayın", desc: "Uzman desteği", href: "tel:+905337733199" },
      { icon: "building", title: "Merkezimiz", desc: "Darıca'da yanınızdayız", href: "/iletisim" },
      { icon: "shield", title: "SGK İşlemleri", desc: "Anlaşmalı merkez", href: "/sgk-isitme-cihazi-odemesi" },
    ],
    footer: { label: "İletişime Geç", href: "/iletisim" },
  },
};

const knowledgeMega: MegaMenuData = {
  id: "bilgi",
  promo: {
    badge: "Güvenilir Bilgi Kaynağı",
    title: "İşitme Sağlığı Hakkında Her Şey.",
    text: "İşitme kaybından cihaz bakımına, merak ettiğiniz tüm konularda güvenilir bilgi kaynağınız.",
    cta: { label: "Tüm İçerikler", href: "/bilgi-merkezi" },
    image: "/images/ui/mega-menu-bilgi-merkezi.webp",
  },
  columns: [
    {
      icon: "stethoscope",
      title: "İşitme Sağlığı",
      description: "İşitme kaybını ve değerlendirme yöntemlerini öğrenin.",
      links: [
        { label: "İşitme Kaybı Nedir?", href: "/rehberler/isitme-kaybi-nedir" },
        { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi" },
        { label: "Online İşitme Testi", href: "/degerlendirme/online-isitme-testi" },
        { label: "Odyometri", href: "/degerlendirme/odyometri" },
        { label: "Tinnitus Değerlendirme", href: "/degerlendirme/tinnitus-degerlendirme" },
        { label: "Çocuk İşitme Testi", href: "/degerlendirme/cocuk-isitme-testi" },
      ],
      footer: { label: "Tüm Değerlendirmeler", href: "/bilgi-merkezi" },
    },
    {
      icon: "sliders",
      title: "Cihaz Kullanımı",
      description: "Cihazınızdan en iyi verimi almanın yolları.",
      links: [
        { label: "İlk Kullanım Rehberi", href: "/rehberler/ilk-kullanim-rehberi" },
        { label: "Uyum Süreci", href: "/rehberler/uyum-sureci" },
        { label: "Cihaz Temizliği", href: "/servis-bakim/cihaz-temizligi" },
        { label: "Periyodik Bakım", href: "/servis-bakim/periyodik-bakim" },
        { label: "Pil & Aksesuar", href: "/servis-bakim/pil-aksesuar" },
        { label: "Onarım Takibi", href: "/servis-bakim/onarim-takibi" },
      ],
      footer: { label: "Tüm Rehberler", href: "/bilgi-merkezi" },
    },
    {
      icon: "shield",
      title: "SGK & Destek",
      description: "SGK süreciniz hakkında bilmeniz gerekenler.",
      links: [
        { label: "SGK Katkı Payı", href: "/sgk/katki-payi" },
        { label: "Rapor Süreci", href: "/sgk/rapor-sureci" },
        { label: "Gerekli Belgeler", href: "/sgk/gerekli-belgeler" },
        { label: "Çocuklarda SGK", href: "/sgk/cocuklarda-sgk" },
        { label: "Yenileme Hakkı", href: "/sgk/yenileme-hakki" },
        { label: "Sık Sorulanlar", href: "/sgk-isitme-cihazi-odemesi#sgk-faq-title" },
      ],
      footer: { label: "SGK Rehberi", href: "/sgk-isitme-cihazi-odemesi" },
    },
  ],
  support: {
    icon: "headset",
    title: "Yardıma mı İhtiyacınız Var?",
    items: [
      { icon: "learn", title: "Rehberleri Keşfedin", desc: "Adım adım anlatım", href: "/bilgi-merkezi" },
      { icon: "help", title: "Sık Sorulan Sorular", desc: "Hızlı yanıtlar", href: "/blog/sik-sorulan-sorular" },
      { icon: "phone", title: "Uzmana Sorun", desc: "Bize ulaşın", href: "tel:+905337733199" },
      { icon: "shield", title: "SGK Rehberi", desc: "Katkı payı ve rapor süreci", href: "/sgk-isitme-cihazi-odemesi" },
    ],
    footer: { label: "İletişime Geç", href: "/iletisim" },
  },
};

export const headerData: HeaderData = {
  brand: {
    name: "ENİYİCİHAZ",
    tagline: "İşitme Sağlığınız İçin En İyi Çözümler",
    href: "/",
  },
  nav: [
    { label: "Ana Sayfa", href: "/" },
    { label: "İşitme Cihazları", href: "/isitme-cihazlari", mega: devicesMega },
    { label: "Markalar", href: "/markalar", mega: brandsMega },
    { label: "Hizmetlerimiz", href: "/hizmetlerimiz", mega: servicesMega },
    { label: "Bilgi Merkezi", href: "/bilgi-merkezi", mega: knowledgeMega },
    { label: "İletişim", href: "/iletisim" },
  ],
  phone: {
    number: "0533 773 31 99",
    label: "Bizi Arayın",
    href: "tel:+905337733199",
  },
  cta: { label: "Randevu Al", href: "tel:+905337733199", icon: "calendar" },
};
