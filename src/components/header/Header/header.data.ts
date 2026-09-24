// ==========================================================
// Header — Content
// Every individual mega-menu link and every top-level nav item now
// points to a real page. Column "footer" CTAs (e.g. "Tüm Rehberler",
// "Servise Başvur", "İletişime Geç") are wired to the closest real hub
// page where one exists. Three remain "#" because no real destination
// exists yet: the servicesMega "Uygulama & Ayar" column's own "Randevu
// Al" footer (needs an online booking form/page — every other "Randevu
// Al"/"Ücretsiz Randevu Al" CTA site-wide routes to the real phone
// number instead; the top-level header CTA now does too, via
// headerData.cta.href), "Detaylı Bilgi" (Neden Orijinal column — no
// single hub page covers those six trust pages together) and "Tüm
// Seriler" (Segmentler column — same reason). `isActive` (see
// isActive.ts) already treats "#" as never-current, so this is safe to
// leave as-is rather than inventing a page that doesn't exist.
// ==========================================================

import type { HeaderData, MegaMenuData } from "./header.types";

const devicesMega: MegaMenuData = {
  id: "cihazlar",
  promo: {
    title: "Daha Net Duyun, Hayata Daha Yakın Olun.",
    text: "En yeni teknoloji işitme cihazları ve uzman kadromuzla duyma deneyiminizi yeniden keşfedin.",
    cta: { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi" },
    image: "/images/ui/mega-menu-isitme-cihazlari.webp",
  },
  columns: [
    {
      icon: "ear",
      title: "İşitme Cihazı Çeşitleri",
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
      title: "Teknolojilere Göre",
      links: [
        { label: "Yapay Zeka Destekli Cihazlar", href: "/teknolojiler/yapay-zeka-destekli" },
        { label: "Gürültü Engelleme Teknolojisi", href: "/teknolojiler/gurultu-engelleme" },
        { label: "Konuşma Odaklı Teknolojiler", href: "/teknolojiler/konusma-odakli" },
        { label: "Kablosuz Bağlantı Özellikleri", href: "/teknolojiler/kablosuz-baglanti" },
        { label: "Şarjlı Teknolojiler", href: "/teknolojiler/sarjli-teknolojiler" },
        { label: "Uzaktan Kontrol Özellikleri", href: "/teknolojiler/uzaktan-kontrol" },
        { label: "Tinnitus (Kulak Çınlaması) Çözümleri", href: "/teknolojiler/tinnitus-cozumleri" },
      ],
      footer: { label: "Tüm Teknolojiler", href: "/isitme-cihazlari" },
    },
    {
      icon: "target",
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
    title: "Dünya Markaları, Tek Çatı Altında.",
    text: "Güvenilir global üreticilerin en yeni teknolojilerini orijinal ve garantili olarak sunuyoruz.",
    cta: { label: "Tüm Markalar", href: "/markalar" },
    image: "/images/ui/mega-menu-markalar.webp",
  },
  columns: [
    {
      icon: "award",
      title: "Öne Çıkan Markalar",
      links: [
        { label: "Oticon", href: "/markalar/oticon" },
        { label: "Phonak", href: "/markalar/phonak" },
        { label: "Signia", href: "/markalar/signia" },
        { label: "Widex", href: "/markalar/widex" },
        { label: "ReSound", href: "/markalar/resound" },
        { label: "NuEar", href: "/markalar/nuear" },
      ],
      footer: { label: "Tüm Markalar", href: "/markalar" },
    },
    {
      icon: "shield",
      title: "Neden Orijinal",
      links: [
        { label: "Güvenilir Teknoloji", href: "/neden-orijinal/guvenilir-teknoloji" },
        { label: "Uzun Ömürlü Cihazlar", href: "/neden-orijinal/uzun-omurlu-cihazlar" },
        { label: "Yaygın Servis Ağı", href: "/neden-orijinal/yaygin-servis-agi" },
        { label: "Orijinal Aksesuar", href: "/neden-orijinal/orijinal-aksesuar" },
        { label: "Ücretsiz Danışmanlık", href: "/neden-orijinal/ucretsiz-danismanlik" },
        { label: "Kolay Değişim", href: "/neden-orijinal/kolay-degisim" },
      ],
      footer: { label: "Detaylı Bilgi", href: "#" },
    },
    {
      icon: "sparkles",
      title: "Segmentler",
      links: [
        { label: "Premium Seri", href: "/segmentler/premium-seri" },
        { label: "Standart Seri", href: "/segmentler/standart-seri" },
        { label: "Ekonomik Seri", href: "/segmentler/ekonomik-seri" },
        { label: "Şarj Edilebilir Seri", href: "/isitme-cihazlari/sarj-edilebilir" },
        { label: "Görünmez Seri", href: "/isitme-cihazlari/gorunmez-cic" },
        { label: "Çocuk Serisi", href: "/isitme-cihazlari/cocuklara-ozel" },
      ],
      footer: { label: "Tüm Seriler", href: "#" },
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
    title: "Uçtan Uca İşitme Sağlığı Hizmeti.",
    text: "Testten uygulamaya, ayardan servise kadar tüm süreçte uzman kadromuz yanınızda.",
    cta: { label: "Tüm Hizmetler", href: "/hizmetlerimiz" },
    image: "/images/ui/mega-menu-hizmetlerimiz.webp",
  },
  columns: [
    {
      icon: "stethoscope",
      title: "Değerlendirme",
      links: [
        { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi" },
        { label: "Odyometri", href: "/degerlendirme/odyometri" },
        { label: "Timpanometri", href: "/degerlendirme/timpanometri" },
        { label: "Çocuk İşitme Testi", href: "/degerlendirme/cocuk-isitme-testi" },
        { label: "Tinnitus Değerlendirme", href: "/degerlendirme/tinnitus-degerlendirme" },
        { label: "İşitme Danışmanlığı", href: "/neden-orijinal/ucretsiz-danismanlik" },
        { label: "Online İşitme Testi", href: "/degerlendirme/online-isitme-testi" },
      ],
      footer: { label: "Tüm Testler", href: "/hizmetlerimiz" },
    },
    {
      icon: "sliders",
      title: "Uygulama & Ayar",
      links: [
        { label: "Cihaz Uygulama", href: "/uygulama-ayar/cihaz-uygulama" },
        { label: "Kişiye Özel Programlama", href: "/uygulama-ayar/kisiye-ozel-programlama" },
        { label: "Cihaz Deneme", href: "/uygulama-ayar/cihaz-deneme" },
        { label: "Kalıp Alımı", href: "/uygulama-ayar/kalip-alimi" },
        { label: "Uzaktan Ayar", href: "/uygulama-ayar/uzaktan-ayar" },
        { label: "Kontrol Randevusu", href: "/uygulama-ayar/kontrol-randevusu" },
      ],
      footer: { label: "Randevu Al", href: "#" },
    },
    {
      icon: "wrench",
      title: "Servis & Bakım",
      links: [
        { label: "Teknik Servis", href: "/servis-bakim/teknik-servis" },
        { label: "Periyodik Bakım", href: "/servis-bakim/periyodik-bakim" },
        { label: "Cihaz Temizliği", href: "/servis-bakim/cihaz-temizligi" },
        { label: "Pil & Aksesuar", href: "/servis-bakim/pil-aksesuar" },
        { label: "Garanti İşlemleri", href: "/servis-bakim/garanti-islemleri" },
        { label: "Onarım Takibi", href: "/servis-bakim/onarim-takibi" },
      ],
      footer: { label: "Servise Başvur", href: "/hizmetlerimiz" },
    },
  ],
  support: {
    icon: "headset",
    title: "Hızlı Erişim",
    items: [
      { icon: "calendar", title: "Randevu Al", desc: "Size uygun saatte" },
      { icon: "phone", title: "Bizi Arayın", desc: "Uzman desteği" },
      { icon: "building", title: "Merkezimiz", desc: "Darıca'da yanınızdayız" },
      { icon: "shield", title: "SGK İşlemleri", desc: "Anlaşmalı merkez" },
    ],
    footer: { label: "İletişime Geç", href: "/iletisim" },
  },
};

const knowledgeMega: MegaMenuData = {
  id: "bilgi",
  promo: {
    title: "İşitme Sağlığı Hakkında Her Şey.",
    text: "İşitme kaybından cihaz bakımına, merak ettiğiniz tüm konularda güvenilir bilgi kaynağınız.",
    cta: { label: "Bilgi Merkezi", href: "/bilgi-merkezi" },
    image: "/images/ui/mega-menu-bilgi-merkezi.webp",
  },
  columns: [
    {
      icon: "book",
      title: "Rehberler",
      links: [
        { label: "İşitme Kaybı Nedir?", href: "/rehberler/isitme-kaybi-nedir" },
        { label: "Cihaz Seçim Rehberi", href: "/rehberler/cihaz-secim-rehberi" },
        { label: "İlk Kullanım Rehberi", href: "/rehberler/ilk-kullanim-rehberi" },
        { label: "Cihaz Bakımı", href: "/servis-bakim/periyodik-bakim" },
        { label: "Pil Kullanımı", href: "/servis-bakim/pil-aksesuar" },
        { label: "Uyum Süreci", href: "/rehberler/uyum-sureci" },
      ],
      footer: { label: "Tüm Rehberler", href: "/bilgi-merkezi" },
    },
    {
      icon: "news",
      title: "Blog & Haberler",
      links: [
        { label: "Yeni Teknolojiler", href: "/blog/yeni-teknolojiler" },
        { label: "Uzman Görüşleri", href: "/blog/uzman-gorusleri" },
        { label: "Başarı Hikayeleri", href: "/blog/basari-hikayeleri" },
        { label: "Sık Sorulan Sorular", href: "/blog/sik-sorulan-sorular" },
        { label: "Kampanyalar", href: "/blog/kampanyalar" },
        { label: "Etkinlikler", href: "/blog/etkinlikler" },
      ],
      footer: { label: "Tüm Yazılar", href: "/bilgi-merkezi" },
    },
    {
      icon: "shield",
      title: "SGK & Haklar",
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
      { icon: "help", title: "Sık Sorulan Sorular", desc: "Hızlı yanıtlar" },
      { icon: "learn", title: "Eğitim İçerikleri", desc: "Adım adım anlatım" },
      { icon: "phone", title: "Uzmana Sor", desc: "Bize ulaşın" },
      { icon: "users", title: "Danışmanlık", desc: "Ücretsiz görüşme" },
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
