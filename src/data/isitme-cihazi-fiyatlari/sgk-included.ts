// "SGK" bölümü (5 alt başlık) ve "Fiyata neler dahil?" bölümü.
//
// SGK: HİÇBİR TUTAR YAZILMAZ. Rakamlar yıllık güncellenir ve sitenin tek
// doğruluk kaynağı /sgk-isitme-cihazi-odemesi/ sayfasıdır (SgkPayments);
// burada içerik kopyalanmaz — mekanizma, kullanıcının fiyat sorusuna cevap
// verecek kadar anlatılır ve güçlü iç bağlantıyla o sayfaya devredilir.
// İfadeler, sitenin mevcut SGK verileriyle (src/data/sgk/*) birebir tutarlıdır:
// sağlık kurulu raporu + uzman hekim reçetesi; çalışan/emekli/çocuk için
// farklı tutarlar; cihaz bedeli SGK katkısını aşarsa fark kullanıcıya ait olabilir.
import {
  Wallet, FileText, Calculator, Users, ListChecks,
  ClipboardCheck, Search, PlayCircle, SlidersHorizontal, HeartHandshake, Stethoscope, Wrench, Repeat,
} from "lucide-astro";
import type { GuideCard, GuideLink, GuideSectionMeta } from "../../components/price-guide/price-guide.types";

export const sgkSection: GuideSectionMeta = {
  id: "sgk",
  eyebrow: "SGK",
  heading: "SGK ve İşitme Cihazı Fiyatları",
  intro:
    "İşitme cihazı fiyatlarını araştıranların çoğu aynı soruyu da sorar: SGK bunun ne kadarını karşılıyor? Tutarlar her yıl güncellendiği için burada rakam vermiyoruz; mantığı anlatıyor ve güncel tutarlar için tek doğru kaynağa yönlendiriyoruz.",
};

export const sgkBlocks: GuideCard[] = [
  {
    icon: Wallet,
    tag: "SGK işitme cihazı ödemesi",
    title: "SGK ne öder?",
    text: "SGK, şartları sağlayanlara işitme cihazı için belirli bir katkı tutarı öder; cihazın bedelinin tamamını değil. Bu katkı marka bazında değişmez, ancak cihazların teknolojisi, özellikleri ve bedeli farklılık gösterebilir.",
    href: "/sgk-isitme-cihazi-odemesi/",
    linkLabel: "SGK ödemesi ve katkı payı rehberi",
  },
  {
    icon: FileText,
    tag: "SGK işitme cihazı desteği",
    title: "Desteğe kimler başvurabilir?",
    text: "Yalnızca sigortalı olmak yeterli değildir: işitme kaybını gösteren sağlık kurulu raporu ve uzman hekimin düzenlediği bir reçete gerekir. Çalışan, emekli ve çocuklar için uygulamalar farklı olabilir.",
    href: "/sgk/gerekli-belgeler/",
    linkLabel: "Gerekli belgeler",
  },
  {
    icon: Calculator,
    tag: "SGK sonrası fiyat",
    title: "SGK'dan sonra ne ödersiniz?",
    text: "Ödeyeceğiniz tutar, seçtiğiniz cihazın bedeli ile SGK'nın karşıladığı tutar arasındaki farktır. Bu yüzden seçtiğiniz teknoloji seviyesi ve özellikler SGK sonrası farkı doğrudan belirler.",
    href: "/sgk/katki-payi/",
    linkLabel: "Katkı payı",
  },
  {
    icon: Users,
    tag: "Emekli kullanıcılar için SGK",
    title: "Emekli, çalışan ve çocuklar",
    text: "SGK, sigortalılık durumuna ve yaş grubuna göre farklı tutarlar uygular; çocuklar için ayrı düzenlemeler vardır. Güncel tutarlar yıllık değiştiği için SGK rehberimizdeki güncel tabloya bakın.",
    href: "/sgk/cocuklarda-sgk/",
    linkLabel: "Çocuklarda SGK",
  },
  {
    icon: ListChecks,
    tag: "SGK ile işitme cihazı alma süreci",
    title: "Süreç adım adım",
    text: "Genel akış şöyledir: işitme değerlendirmesi, sağlık kurulu raporu ve reçete, cihaz seçimi ve deneme, uygulama ve SGK işlemleri. Merkezimizde bu sürecin her aşamasında size destek oluruz.",
    href: "/sgk/rapor-sureci/",
    linkLabel: "Rapor süreci",
  },
];

export const sgkLinks: GuideLink[] = [
  { label: "Güncel SGK tutarları ve rehber", href: "/sgk-isitme-cihazi-odemesi/" },
  { label: "SGK yenileme hakkı", href: "/sgk/yenileme-hakki/" },
  { label: "Gerekli belgeler", href: "/sgk/gerekli-belgeler/" },
];

export const sgkNote =
  "SGK süreçleri ve tutarları güncellenebilir. Kararınızdan önce güncel bilgiyi merkezimizden veya SGK rehberimizden teyit edin.";

export const includedSection: GuideSectionMeta = {
  id: "fiyata-dahil",
  eyebrow: "Fiyata Neler Dahil?",
  heading: "İşitme Cihazı Fiyatına Neler Dahil Olmalı?",
  intro:
    "Aynı cihaza verilen iki teklif, hizmet kapsamı yüzünden çok farklı olabilir. Aşağıdakiler, Avrasya İşitme'nin sürecinde yer alan gerçek hizmetlerdir; kapsamı teklif aşamasında birlikte netleştiririz.",
};

export const includedServices: GuideCard[] = [
  { icon: Stethoscope, tag: "1", title: "İşitme değerlendirmesi", text: "Ücretsiz işitme testiyle mevcut durumunuzu netleştiririz; cihaz kararı bu sonuca dayanır.", href: "/degerlendirme/ucretsiz-isitme-testi/", linkLabel: "Ücretsiz işitme testi" },
  { icon: Search, tag: "2", title: "Cihaz seçimi", text: "İşitme kaybınıza ve yaşam tarzınıza uygun cihaz tipini ve özellikleri birlikte belirleriz.", href: "/rehberler/cihaz-secim-rehberi/", linkLabel: "Cihaz seçim rehberi" },
  { icon: PlayCircle, tag: "3", title: "Deneme", text: "Merkezimizde yaklaşık 20 dakikalık ücretsiz demo yapılır; cihazı satın alarak 7 güne kadar da deneyebilirsiniz. Uygun bulunmazsa ödediğiniz tutar kesintisiz iade edilir.", href: "/uygulama-ayar/cihaz-deneme/", linkLabel: "Cihaz deneme" },
  { icon: ClipboardCheck, tag: "4", title: "Uygulama", text: "Seçtiğiniz cihazı size özel olarak uygular, kullanımı ve bakımı anlatırız.", href: "/uygulama-ayar/cihaz-uygulama/", linkLabel: "Cihaz uygulaması" },
  { icon: SlidersHorizontal, tag: "5", title: "Ayarlama", text: "Cihazınızı işitme profilinize göre kişiye özel programlar ve ayarlarız.", href: "/uygulama-ayar/kisiye-ozel-ayar/", linkLabel: "Kişiye özel ayar" },
  { icon: HeartHandshake, tag: "6", title: "Kullanım desteği", text: "İlk günlerde ve alışma sürecinde sorularınız için yanınızdayız.", href: "/rehberler/ilk-kullanim-rehberi/", linkLabel: "İlk kullanım rehberi" },
  { icon: Repeat, tag: "7", title: "Takip", text: "Kontrol randevularıyla cihazınızın ve ayarlarınızın güncel kalmasını sağlarız.", href: "/uygulama-ayar/kontrol-randevusu/", linkLabel: "Kontrol randevusu" },
  { icon: Wrench, tag: "8", title: "Teknik servis", text: "Arıza, bakım ve yazılım güncelleme ihtiyaçlarınızda teknik servis desteği sunarız.", href: "/servis-bakim/teknik-servis/", linkLabel: "Teknik servis" },
];

export const includedNote =
  "Bir teklif alırken hangi hizmetlerin cihaz bedeline dahil olduğunu, hangi kalemlerin ayrıca değerlendirildiğini baştan netleştirmek en doğrusudur. Bunu her merkeze sormalısınız; biz de sorularınızı memnuniyetle cevaplarız.";
