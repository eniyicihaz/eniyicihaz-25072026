// ==========================================================
// Header — Content
// İşitme Cihazları mega = reference content. The other three
// megas use structured placeholder content (edit freely; links
// are "#" until real routes are provided).
// ==========================================================

import type { HeaderData, MegaMenuData } from "./header.types";

const devicesMega: MegaMenuData = {
  id: "cihazlar",
  promo: {
    title: "Daha Net Duyun, Hayata Daha Yakın Olun.",
    text: "En yeni teknoloji işitme cihazları ve uzman kadromuzla duyma deneyiminizi yeniden keşfedin.",
    cta: { label: "Ücretsiz İşitme Testi", href: "#" },
  },
  columns: [
    {
      icon: "ear",
      title: "İşitme Cihazı Çeşitleri",
      links: [
        { label: "Kulak Arkası (BTE)", href: "#" },
        { label: "Kulak İçi (ITE)", href: "#" },
        { label: "Şarj Edilebilir Cihazlar", href: "#" },
        { label: "Bluetooth Özellikli Cihazlar", href: "#" },
        { label: "Çocuklara Özel Cihazlar", href: "#" },
        { label: "Görünmez (CIC) Cihazlar", href: "#" },
        { label: "Suya Dayanıklı Cihazlar", href: "#" },
      ],
      footer: { label: "Tüm İşitme Cihazları", href: "#" },
    },
    {
      icon: "star",
      title: "Teknolojilere Göre",
      links: [
        { label: "Yapay Zeka Destekli Cihazlar", href: "#" },
        { label: "Gürültü Engelleme Teknolojisi", href: "#" },
        { label: "Konuşma Odaklı Teknolojiler", href: "#" },
        { label: "Kablosuz Bağlantı Özellikleri", href: "#" },
        { label: "Şarjlı Teknolojiler", href: "#" },
        { label: "Uzaktan Kontrol Özellikleri", href: "#" },
        { label: "Tinnitus (Kulak Çınlaması) Çözümleri", href: "#" },
      ],
      footer: { label: "Tüm Teknolojiler", href: "#" },
    },
    {
      icon: "target",
      title: "İhtiyacınıza Göre",
      links: [
        { label: "Hafif İşitme Kaybı", href: "#" },
        { label: "Orta Derece İşitme Kaybı", href: "#" },
        { label: "İleri Derece İşitme Kaybı", href: "#" },
        { label: "Çok İleri Derece İşitme Kaybı", href: "#" },
        { label: "Tek Taraflı İşitme Kaybı", href: "#" },
        { label: "Yaşlılar İçin Cihazlar", href: "#" },
        { label: "Aktif Yaşam İçin Cihazlar", href: "#" },
      ],
      footer: { label: "Size Özel Çözümler", href: "#" },
    },
  ],
  support: {
    icon: "headset",
    title: "Size Özel Destek",
    items: [
      { icon: "stethoscope", title: "Ücretsiz İşitme Testi", desc: "Profesyonel odyometristlerimizle" },
      { icon: "headphones", title: "Cihaz Deneme", desc: "Cihazları ücretsiz deneyin" },
      { icon: "sliders", title: "Kişiye Özel Ayar", desc: "Size özel programlama" },
      { icon: "wrench", title: "Teknik Servis", desc: "Hızlı ve güvenilir destek" },
    ],
    footer: { label: "Tüm Hizmetler", href: "#" },
  },
};

// ---- Placeholder megas (structure final, content to be provided) ----

const brandsMega: MegaMenuData = {
  id: "markalar",
  promo: {
    title: "Dünya Markaları, Tek Çatı Altında.",
    text: "Güvenilir global üreticilerin en yeni teknolojilerini orijinal ve garantili olarak sunuyoruz.",
    cta: { label: "Tüm Markalar", href: "#" },
  },
  columns: [
    {
      icon: "award",
      title: "Öne Çıkan Markalar",
      links: [
        { label: "Oticon", href: "#" },
        { label: "Phonak", href: "#" },
        { label: "Signia", href: "#" },
        { label: "Widex", href: "#" },
        { label: "ReSound", href: "#" },
        { label: "Starkey", href: "#" },
      ],
      footer: { label: "Tüm Markalar", href: "#" },
    },
    {
      icon: "shield",
      title: "Neden Orijinal",
      links: [
        { label: "Güvenilir Teknoloji", href: "#" },
        { label: "Uzun Ömürlü Cihazlar", href: "#" },
        { label: "Yaygın Servis Ağı", href: "#" },
        { label: "Orijinal Aksesuar", href: "#" },
        { label: "Ücretsiz Danışmanlık", href: "#" },
        { label: "Kolay Değişim", href: "#" },
      ],
      footer: { label: "Detaylı Bilgi", href: "#" },
    },
    {
      icon: "sparkles",
      title: "Segmentler",
      links: [
        { label: "Premium Seri", href: "#" },
        { label: "Standart Seri", href: "#" },
        { label: "Ekonomik Seri", href: "#" },
        { label: "Şarj Edilebilir Seri", href: "#" },
        { label: "Görünmez Seri", href: "#" },
        { label: "Çocuk Serisi", href: "#" },
      ],
      footer: { label: "Tüm Seriler", href: "#" },
    },
  ],
  support: {
    icon: "headset",
    title: "Marka Desteği",
    items: [
      { icon: "shield", title: "Orijinallik Garantisi", desc: "Yetkili satıcı güvencesi" },
      { icon: "wrench", title: "Yetkili Servis", desc: "Tüm markalar için" },
      { icon: "battery", title: "Aksesuar & Yedek", desc: "Orijinal parçalar" },
      { icon: "headphones", title: "Marka Danışmanlığı", desc: "Size uygun markayı seçin" },
    ],
    footer: { label: "Tüm Hizmetler", href: "#" },
  },
};

const servicesMega: MegaMenuData = {
  id: "hizmetler",
  promo: {
    title: "Uçtan Uca İşitme Sağlığı Hizmeti.",
    text: "Testten uygulamaya, ayardan servise kadar tüm süreçte uzman kadromuz yanınızda.",
    cta: { label: "Tüm Hizmetler", href: "#" },
  },
  columns: [
    {
      icon: "stethoscope",
      title: "Değerlendirme",
      links: [
        { label: "Ücretsiz İşitme Testi", href: "#" },
        { label: "Odyometri", href: "#" },
        { label: "Timpanometri", href: "#" },
        { label: "Çocuk İşitme Testi", href: "#" },
        { label: "Tinnitus Değerlendirme", href: "#" },
        { label: "İşitme Danışmanlığı", href: "#" },
      ],
      footer: { label: "Tüm Testler", href: "#" },
    },
    {
      icon: "sliders",
      title: "Uygulama & Ayar",
      links: [
        { label: "Cihaz Uygulama", href: "#" },
        { label: "Kişiye Özel Programlama", href: "#" },
        { label: "Cihaz Deneme", href: "#" },
        { label: "Kalıp Alımı", href: "#" },
        { label: "Uzaktan Ayar", href: "#" },
        { label: "Kontrol Randevusu", href: "#" },
      ],
      footer: { label: "Randevu Al", href: "#" },
    },
    {
      icon: "wrench",
      title: "Servis & Bakım",
      links: [
        { label: "Teknik Servis", href: "#" },
        { label: "Periyodik Bakım", href: "#" },
        { label: "Cihaz Temizliği", href: "#" },
        { label: "Pil & Aksesuar", href: "#" },
        { label: "Garanti İşlemleri", href: "#" },
        { label: "Onarım Takibi", href: "#" },
      ],
      footer: { label: "Servise Başvur", href: "#" },
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
    footer: { label: "İletişime Geç", href: "#" },
  },
};

const knowledgeMega: MegaMenuData = {
  id: "bilgi",
  promo: {
    title: "İşitme Sağlığı Hakkında Her Şey.",
    text: "İşitme kaybından cihaz bakımına, merak ettiğiniz tüm konularda güvenilir bilgi kaynağınız.",
    cta: { label: "Bilgi Merkezi", href: "#" },
  },
  columns: [
    {
      icon: "book",
      title: "Rehberler",
      links: [
        { label: "İşitme Kaybı Nedir?", href: "#" },
        { label: "Cihaz Seçim Rehberi", href: "#" },
        { label: "İlk Kullanım Rehberi", href: "#" },
        { label: "Cihaz Bakımı", href: "#" },
        { label: "Pil Kullanımı", href: "#" },
        { label: "Uyum Süreci", href: "#" },
      ],
      footer: { label: "Tüm Rehberler", href: "#" },
    },
    {
      icon: "news",
      title: "Blog & Haberler",
      links: [
        { label: "Yeni Teknolojiler", href: "#" },
        { label: "Uzman Görüşleri", href: "#" },
        { label: "Başarı Hikayeleri", href: "#" },
        { label: "Sık Sorulan Sorular", href: "#" },
        { label: "Kampanyalar", href: "#" },
        { label: "Etkinlikler", href: "#" },
      ],
      footer: { label: "Tüm Yazılar", href: "#" },
    },
    {
      icon: "shield",
      title: "SGK & Haklar",
      links: [
        { label: "SGK Katkı Payı", href: "#" },
        { label: "Rapor Süreci", href: "#" },
        { label: "Gerekli Belgeler", href: "#" },
        { label: "Çocuklarda SGK", href: "#" },
        { label: "Yenileme Hakkı", href: "#" },
        { label: "Sık Sorulanlar", href: "#" },
      ],
      footer: { label: "SGK Rehberi", href: "#" },
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
    footer: { label: "İletişime Geç", href: "#" },
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
    { label: "İşitme Cihazları", href: "#", mega: devicesMega },
    { label: "Markalar", href: "#", mega: brandsMega },
    { label: "Hizmetlerimiz", href: "#", mega: servicesMega },
    { label: "Bilgi Merkezi", href: "#", mega: knowledgeMega },
    { label: "İletişim", href: "/iletisim" },
  ],
  phone: {
    number: "0533 773 31 99",
    label: "Bizi Arayın",
    href: "tel:+905337733199",
  },
  cta: { label: "Randevu Al", href: "#", icon: "calendar" },
};
