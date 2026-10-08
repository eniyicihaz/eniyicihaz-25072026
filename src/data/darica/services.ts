// Darıca hub — "Merkezimizde Verilen Hizmetler" (BrandCriteria, 6 kart).
// Kısa hizmet özeti; her kart en fazla bir kanonik sayfaya bağlanır, süreç
// burada tekrar yazılmaz. Ana sayfanın "hizmet akışı"ndan farkı: merkezdeki
// işleyiş (randevu, ücretsiz olanlar, yaş kapsamı) öne çıkar.
// Kaynak: SERVICE_SOURCE_OF_TRUTH §1 (H1 5 yaş ve üstü ücretsiz test; H6,
// H7, H11, H15, H16 ücretsiz; H24 dışındaki hizmetler randevulu), §1.5 ve
// H28 (kanonik deneme modeli — ana sayfayla aynı ifade), §2.7 (seçim
// kriterleri), §2.12 (ilk kontrol ~2 hafta, YENİDEN DOĞRULA), §4 (18
// markanın tamamında teknik servis; onarımda yedek cihaz — YENİDEN DOĞRULA).
// "Merkezde ücretsiz demo" ayrıca İlk Ziyaret bölümünde (20 dk) anlatılıyor;
// burada kısa tutuldu.
import { Stethoscope, Compass, PlayCircle, SlidersHorizontal, Wrench, House } from "lucide-astro";
import type { BrandCriteriaContent } from "../../components/brands/BrandCriteria/BrandCriteria.astro";

export const daricaServices: BrandCriteriaContent = {
  eyebrow: "MERKEZİMİZDE",
  heading: "Merkezimizde Verilen Hizmetler",
  intro: "SGK işlemlerindeki destek dışındaki hizmetlerimiz randevuyla verilir; gelmeden önce arayarak size uygun saati öğrenebilirsiniz.",
  criteria: [
    {
      icon: Stethoscope,
      title: "Ücretsiz İşitme Testi",
      description: "5 yaş ve üzeri herkes için yapılır.",
      href: "/degerlendirme/ucretsiz-isitme-testi/",
    },
    {
      icon: Compass,
      title: "Cihaz Seçimi",
      description: "İşitme kaybınızın derecesine, kulak yapınıza ve yaşam tarzınıza uygun cihazı ücretsiz olarak birlikte belirliyoruz.",
    },
    {
      icon: PlayCircle,
      title: "Merkezde Demo ve 7 Güne Kadar Deneme",
      description:
        "Merkezde demo ücretsizdir. Satın alma sonrası 7 güne kadar deneme: uygun olmadığı durumda ödediğiniz tutarın tamamı iade edilir. Kulak içi cihazlar bu kapsama dahil değildir.",
      href: "/uygulama-ayar/cihaz-deneme/",
    },
    {
      icon: SlidersHorizontal,
      title: "Kişiye Özel Ayar ve Kontrol",
      description: "Cihazınızı işitme ihtiyacınıza göre ayarlıyoruz; ilk kontrol teslimden yaklaşık 2 hafta sonradır. Ayar ve kontrol ücretsizdir.",
      href: "/uygulama-ayar/kisiye-ozel-ayar/",
    },
    {
      icon: Wrench,
      title: "18 Markada Teknik Servis",
      description: "18 markanın tamamı için teknik servis başvurularınızı merkezimizde alıyoruz; onarım sürecinde ücretsiz yedek cihaz sağlıyoruz.",
      href: "/servis-bakim/teknik-servis/",
    },
    {
      icon: House,
      title: "Evde Hizmet",
      description: "Merkeze gelemiyorsanız Kocaeli geneli ve İstanbul Anadolu Yakası'nda randevulu ve ücretsiz evde hizmet veriyoruz.",
      href: "/uygulama-ayar/evde-isitme-cihazi-hizmeti/",
    },
  ],
  closing: "Sattığımız 18 markayı ve modellerini marka sayfalarımızda inceleyebilirsiniz.",
  closingCta: { label: "Markaları inceleyin", href: "/isitme-cihazi-markalari/" },
};
