// Footer link columns.
// Titles and labels mirror the header mega menus (header.data.ts) so the
// site speaks one language. Real routes are not defined yet, so links stay
// "#" — the same convention the header already uses.
import type { LinkColumn } from "../footer.types";

export const linkColumns: LinkColumn[] = [
  {
    title: "İşitme Cihazları",
    links: [
      { label: "Kulak Arkası (BTE)", href: "#" },
      { label: "Kulak İçi (ITE)", href: "#" },
      { label: "Şarj Edilebilir Cihazlar", href: "#" },
      { label: "Bluetooth Özellikli Cihazlar", href: "#" },
      { label: "Görünmez (CIC) Cihazlar", href: "#" },
      { label: "Çocuklara Özel Cihazlar", href: "#" },
    ],
  },
  {
    title: "Hizmetlerimiz",
    links: [
      { label: "Ücretsiz İşitme Testi", href: "#" },
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
