// "İlgili içerikler" (iç bağlantı merkezi). Sayfanın kapanış CTA'sı artık "Randevu ve İletişim"
// kartıdır (location.ts); ayrı bir final CTA bloğu yoktur.
// Tüm bağlantılar gerçek route'lara gider ve sitenin standart trailing-slash biçimini
// kullanır (eski sayfada slash'sızdı). Yeni URL uydurulmamıştır.
import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const testRelated: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    { label: "Online İşitme Taraması", description: "Merkeze gelmeden önce kulaklığınızla online bir ön değerlendirme yapın.", href: "/degerlendirme/online-isitme-testi/" },
    { label: "Odyometri", description: "Odyometrinin nasıl çalıştığını ve neler ölçtüğünü daha yakından tanıyın.", href: "/degerlendirme/odyometri/" },
    { label: "Timpanometri", description: "Orta kulak değerlendirmesi hakkında detaylı bilgi edinin.", href: "/degerlendirme/timpanometri/" },
    { label: "Çocuk İşitme Testi", description: "Çocuklar için işitme testi sürecini yakından tanıyın.", href: "/degerlendirme/cocuk-isitme-testi/" },
    { label: "Tinnitus (Kulak Çınlaması) Değerlendirmesi", description: "Kulak çınlaması şikayetiniz varsa değerlendirme sürecini öğrenin.", href: "/degerlendirme/tinnitus-degerlendirme/" },
    { label: "İşitme Kaybı Nedir?", description: "İşitme kaybının türlerini, nedenlerini ve ne zaman uzmana başvurulacağını okuyun.", href: "/rehberler/isitme-kaybi-nedir/" },
    { label: "İşitme Cihazları", description: "Test sonrasında cihaz gündeme gelirse cihaz türlerini ve özelliklerini tanıyın.", href: "/isitme-cihazlari/" },
    { label: "İşitme Cihazı Fiyatları", description: "Fiyatı neyin belirlediğini ve toplam maliyet kalemlerini okuyun.", href: "/isitme-cihazi-fiyatlari/" },
    { label: "SGK İşitme Cihazı Ödemesi", description: "SGK desteğini ve uygunluk kriterlerini öğrenin.", href: "/sgk-isitme-cihazi-odemesi/" },
    { label: "Ücretsiz Danışmanlık", description: "İhtiyaç analizi, cihaz deneme ve SGK bilgilendirmesi için uzman desteği.", href: "/neden-orijinal/ucretsiz-danismanlik/" },
    { label: "Bilgi Merkezi", description: "İşitme sağlığı hakkındaki tüm rehberlerimizi tek sayfada keşfedin.", href: "/bilgi-merkezi/" },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
