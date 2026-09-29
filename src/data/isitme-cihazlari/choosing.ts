// "İşitme cihazı seçerken nelere bakılır?" (16 başlık, 3 grup) ve "Hangi
// işitme cihazı bana uygun?" (8 senaryo). Tıbbi sonuç verilmez: her kart
// "neyi düşünmelisiniz / neyi sormalısınız" biçimindedir ve ilgili sayfaya
// bağlanır. Fiyat konusu bilerek TEK kartta, kısaca ve fiyat sayfasına
// yönlendirilerek anılır (kopyalanmaz).
import {
  Stethoscope, Activity, EarOff, Home, Users, Phone, Tv, Bluetooth, BatteryCharging,
  Hand, Eye, Sliders, Wallet, Headphones, Wrench, ShieldCheck, Smartphone, Zap, Volume2, Sparkles,
} from "lucide-astro";
import type { GuideCard, GuideSectionMeta } from "../../components/price-guide/price-guide.types";

export const choosingSection: GuideSectionMeta = {
  id: "secerken",
  eyebrow: "Seçim Rehberi",
  heading: "İşitme Cihazı Nasıl Seçilir? Seçerken Nelere Dikkat Edilmeli?",
  intro:
    "Doğru işitme cihazı, en gelişmiş olan değil, işitme kaybınıza ve günlük yaşamınıza uyan cihazdır. Aşağıdaki on altı başlık, karar verirken kendinize sorabileceğiniz soruları üç grupta toplar.",
};

export const choosingGroups: { id: string; title: string; intro: string; cards: GuideCard[] }[] = [
  {
    id: "sizin-tarafiniz",
    title: "Sizin tarafınız: işitme kaybı ve günlük yaşam",
    intro: "Seçime cihazdan değil, kendinizden başlayın.",
    cards: [
      {
        icon: Stethoscope,
        title: "İşitme değerlendirmesi",
        text: "Her karar, işitme testiyle başlar. Test sonucu, hangi cihaz tiplerinin ve güç aralıklarının değerlendirilebileceğini belirler.",
        href: "/degerlendirme/ucretsiz-isitme-testi/",
        linkLabel: "Ücretsiz işitme testi",
      },
      {
        icon: Activity,
        title: "İşitme kaybının özellikleri",
        text: "Kaybın derecesi, hangi seslerde zorlandığınız ve tek/çift kulak durumu; cihazın gücünü ve türünü etkileyen temel bilgilerdir.",
        href: "/rehberler/isitme-kaybi-nedir/",
        linkLabel: "İşitme kaybı nedir?",
      },
      {
        icon: Home,
        title: "Günlük yaşam",
        text: "Evde, işte, arabada, sokakta… Zamanınızın çoğunu nerede geçirdiğiniz, hangi özelliğin işinize yarayacağını belirler.",
      },
      {
        icon: Volume2,
        title: "Gürültülü ortamlar",
        text: "Restoran, toplantı, aile sofrası gibi ortamlarda konuşmayı takip etmek sizin için öncelikse, gürültü yönetimi özelliklerini sorun.",
        href: "/teknolojiler/gurultu-engelleme/",
        linkLabel: "Gürültü engelleme",
      },
      {
        icon: Hand,
        title: "El becerisi",
        text: "Küçük pilleri değiştirmek, cihazı takıp çıkarmak veya küçük düğmelere basmak sizin için kolay mı? Bu, tür ve şarj kararını etkiler.",
      },
      {
        icon: Eye,
        title: "Görünürlük tercihi",
        text: "Cihazın ne kadar fark edilmesini istediğiniz kişiye bağlıdır. Az görünmesi önemliyse, kulak yapınızın buna uygun olup olmadığı değerlendirilir.",
        href: "#gorunmez",
        linkLabel: "Görünmez cihazlar",
      },
    ],
  },
  {
    id: "cihaz-tarafi",
    title: "Cihaz tarafı: tür ve özellikler",
    intro: "Kendinizi tanıdıktan sonra cihazın özelliklerine bakın.",
    cards: [
      {
        icon: Headphones,
        title: "Cihaz tipi",
        text: "Kulak arkası, RIC, kulak içi ya da kanal içi: kulak yapınıza, kaybınıza ve kullanım kolaylığı beklentinize göre karşılaştırılır.",
        href: "#cihaz-turleri",
        linkLabel: "Cihaz türlerine dönün",
      },
      {
        icon: Phone,
        title: "Telefon kullanımı",
        text: "Sık telefon görüşmesi yapıyorsanız, cihazın telefonunuzla uyumlu olup olmadığını satın almadan önce doğrulayın.",
        href: "/isitme-cihazlari/bluetooth-ozellikli/",
        linkLabel: "Bluetooth cihazlar",
      },
      {
        icon: Tv,
        title: "Televizyon",
        text: "Televizyon sesi için cihazın doğrudan mı yoksa bir aksesuarla mı bağlandığını sorun.",
        href: "/teknolojiler/kablosuz-baglanti/",
        linkLabel: "Kablosuz bağlantı",
      },
      {
        icon: Bluetooth,
        title: "Bluetooth",
        text: "Bluetooth, telefon ve TV sesini cihaza aktarır. Sizin için gerekli olup olmadığını kullanım alışkanlıklarınızla değerlendirin.",
      },
      {
        icon: BatteryCharging,
        title: "Şarj / pil",
        text: "Günlük rutininize hangisi uyuyor: geceleri şarj etmek mi, pil değiştirmek mi? Seyahat ve el becerisi de belirleyicidir.",
        href: "#sarjli-pilli",
        linkLabel: "Şarjlı mı pilli mi?",
      },
      {
        icon: Sliders,
        title: "Kullanım kolaylığı",
        text: "Düğmelerin boyutu, takıp çıkarma ve temizlik gibi günlük işlemlerin sizin için ne kadar rahat olduğunu cihazı elinize alarak deneyin.",
      },
    ],
  },
  {
    id: "surec-tarafi",
    title: "Süreç tarafı: bütçe, deneme, ayar ve servis",
    intro: "Cihaz kadar, cihazla birlikte aldığınız süreç de önemlidir.",
    cards: [
      {
        icon: Wallet,
        title: "Bütçe",
        text: "Bütçenizi baştan konuşmak seçimi kolaylaştırır. Fiyatı belirleyen unsurları ve toplam maliyet kalemlerini ayrı bir rehberde ele alıyoruz.",
        href: "/isitme-cihazi-fiyatlari/",
        linkLabel: "Fiyat rehberi",
      },
      {
        icon: Sparkles,
        title: "Deneme",
        text: "Cihazı günlük ortamınızda denemek, karar vermeden önce en gerçekçi bilgi kaynağıdır.",
        href: "/uygulama-ayar/cihaz-deneme/",
        linkLabel: "Cihaz deneme",
      },
      {
        icon: Sliders,
        title: "Uygulama ve ayarlama",
        text: "Cihaz, size özel ayarlandığında değer kazanır. Ayarın nasıl yapıldığını ve kaç kez tekrarlanabildiğini sorun.",
        href: "/uygulama-ayar/kisiye-ozel-ayar/",
        linkLabel: "Kişiye özel ayar",
      },
      {
        icon: Wrench,
        title: "Satış sonrası servis",
        text: "Bakım, teknik servis ve takip desteğinin nerede ve nasıl sağlandığını öğrenin.",
        href: "/servis-bakim/teknik-servis/",
        linkLabel: "Teknik servis",
      },
    ],
  },
];

export const scenariosSection: GuideSectionMeta = {
  id: "hangi-cihaz",
  eyebrow: "Hangisi Bana Uygun?",
  heading: "Hangi İşitme Cihazı Bana Uygun? Kullanım Senaryoları",
  intro:
    "Aşağıdaki cümlelerden size yakın olanı seçin; hangi türün veya özelliğin konuşulabileceğini görün. Bunlar teşhis ya da kişiye özel öneri değil, değerlendirmeye hazırlıklı gelmeniz için bir başlangıçtır.",
};

export const scenarios: GuideCard[] = [
  {
    icon: Smartphone,
    tag: "Telefon",
    title: "“Telefonu çok kullanıyorum”",
    text: "Telefon bağlantısı ve Bluetooth özelliği öne çıkar. Bağlantılı RIC ve kulak arkası modeller genellikle bu ihtiyaca yönelik seçenekler sunar; telefon uyumluluğu modele göre doğrulanmalıdır.",
    href: "/isitme-cihazlari/bluetooth-ozellikli/",
    linkLabel: "Bluetooth özellikli cihazlar",
  },
  {
    icon: Users,
    tag: "Kalabalık ortam",
    title: "“Kalabalık ortamlarda zorlanıyorum”",
    text: "Gürültü yönetimi ve konuşma odaklı işleme öne çıkar. Bu özelliklerin kapsamı model seviyesine göre değişir; ortamınızı anlatmak seçimi kolaylaştırır.",
    href: "/teknolojiler/gurultu-engelleme/",
    linkLabel: "Gürültü engelleme",
  },
  {
    icon: EarOff,
    tag: "Küçük cihaz",
    title: "“Cihazın mümkün olduğunca küçük olmasını istiyorum”",
    text: "Kanal içi ve görünmez türler değerlendirilebilir. Her kulak yapısı bu boyuta uygun olmayabilir; küçük boyut bazı özellikleri de sınırlayabilir.",
    href: "#gorunmez",
    linkLabel: "Görünmez cihazlar",
  },
  {
    icon: Zap,
    tag: "Şarj",
    title: "“Şarj etmek istiyorum”",
    text: "Şarjlı kulak arkası ve RIC modeller bu alışkanlığa uyar. Şarj süresini, kullanım süresini ve seyahatte nasıl yönetileceğini sorun.",
    href: "/isitme-cihazlari/sarj-edilebilir/",
    linkLabel: "Şarjlı cihazlar",
  },
  {
    icon: Tv,
    tag: "Televizyon",
    title: "“Televizyonu rahat takip etmek istiyorum”",
    text: "TV bağlantısı sesi evdekileri rahatsız etmeden kendi düzeyinizde dinlemenizi kolaylaştırabilir. Doğrudan bağlantı mı, aksesuar mı gerektiği modele bağlıdır.",
    href: "/teknolojiler/kablosuz-baglanti/",
    linkLabel: "Kablosuz bağlantı",
  },
  {
    icon: Hand,
    tag: "Kolay kullanım",
    title: "“Kolay kullanmak istiyorum”",
    text: "Daha büyük gövde ve düğmeler, kolay takıp çıkarma ve temizlik öne çıkar. Bu ihtiyaç için kulak arkası ve bazı RIC modeller sıklıkla düşünülür.",
    href: "/isitme-cihazlari/kulak-arkasi-bte/",
    linkLabel: "Kulak arkası cihazlar",
  },
  {
    icon: Phone,
    tag: "İş hayatı",
    title: "“İş hayatımda toplantı ve telefon çok”",
    text: "Konuşma netliği, gürültü yönetimi ve telefon bağlantısı birlikte konuşulur. Çalışma ortamınızı ve günlük programınızı anlatmak önemlidir.",
    href: "/ihtiyaciniza-gore/aktif-yasam-icin-cihazlar/",
    linkLabel: "Aktif yaşam için cihazlar",
  },
  {
    icon: ShieldCheck,
    tag: "Dayanıklılık",
    title: "“Dışarıda çalışıyorum, terliyorum”",
    text: "Ter ve neme karşı koruma sunan modeller değerlendirilebilir. Koruma sınıfı modele göre farklıdır ve tam su geçirmezlik anlamına gelmez.",
    href: "/isitme-cihazlari/suya-dayanikli/",
    linkLabel: "Suya dayanıklı cihazlar",
  },
];
