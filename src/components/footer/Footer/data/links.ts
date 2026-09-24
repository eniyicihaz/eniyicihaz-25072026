// Footer link columns.
// Titles and labels mirror the header mega menus (header.data.ts) so the
// site speaks one language. Remaining "#" entries have no real route yet
// and stay as placeholders (the header's own convention) until one
// exists — swap to a real href here the day each page ships.
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
      { label: "İşitme Değerlendirmesi", href: "#" },
      { label: "Cihaz Uygulaması ve Ayarı", href: "#" },
      { label: "Kulak Kalıbı Uygulaması", href: "#" },
      { label: "Teknik Servis ve Bakım", href: "#" },
      { label: "SGK Danışmanlığı", href: "#" },
    ],
  },
  {
    title: "Bilgi Merkezi",
    links: [
      { label: "İşitme Kaybı Nedir?", href: "#" },
      { label: "Cihaz Seçim Rehberi", href: "#" },
      { label: "SGK Katkı Payı", href: "#" },
      { label: "Sık Sorulan Sorular", href: "#" },
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
];
