// Footer link columns.
// Titles and labels mirror the header mega menus (header.data.ts) so the
// site speaks one language. Every link below now points to a real,
// existing page — audited against src/pages/ directly. Where no single
// page matches the footer label exactly (e.g. "İşitme Değerlendirmesi"),
// the closest real hub already used for that purpose elsewhere on the
// site is used instead — never "#", never an invented route.
import type { LinkColumn } from "../footer.types";

export const linkColumns: LinkColumn[] = [
  {
    title: "İşitme Cihazları",
    links: [
      { label: "Kulak Arkası (BTE)", href: "/isitme-cihazlari/kulak-arkasi-bte" },
      { label: "Kulak İçi (ITE)", href: "/isitme-cihazlari/kulak-ici-ite" },
      { label: "Şarj Edilebilir Cihazlar", href: "/isitme-cihazlari/sarj-edilebilir" },
      { label: "Bluetooth Özellikli Cihazlar", href: "/isitme-cihazlari/bluetooth-ozellikli" },
      { label: "Görünmez (CIC) Cihazlar", href: "/isitme-cihazlari/gorunmez-cic" },
      { label: "Çocuklara Özel Cihazlar", href: "/isitme-cihazlari/cocuklara-ozel" },
      { label: "Suya Dayanıklı Cihazlar", href: "/isitme-cihazlari/suya-dayanikli" },
    ],
  },
  {
    title: "Hizmetlerimiz",
    links: [
      { label: "Ücretsiz İşitme Testi", href: "/degerlendirme/ucretsiz-isitme-testi" },
      { label: "İşitme Değerlendirmesi", href: "/hizmetlerimiz" },
      { label: "Cihaz Uygulaması ve Ayarı", href: "/uygulama-ayar/cihaz-uygulama" },
      { label: "Kulak Kalıbı Uygulaması", href: "/uygulama-ayar/kalip-alimi" },
      { label: "Teknik Servis ve Bakım", href: "/servis-bakim/teknik-servis" },
      { label: "SGK Danışmanlığı", href: "/sgk-isitme-cihazi-odemesi" },
    ],
  },
  {
    title: "Bilgi Merkezi",
    links: [
      { label: "İşitme Kaybı Nedir?", href: "/rehberler/isitme-kaybi-nedir" },
      { label: "Cihaz Seçim Rehberi", href: "/rehberler/cihaz-secim-rehberi" },
      { label: "SGK Katkı Payı", href: "/sgk/katki-payi" },
      { label: "Sık Sorulan Sorular", href: "/blog/sik-sorulan-sorular" },
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
];
