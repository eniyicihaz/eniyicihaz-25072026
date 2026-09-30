// "Neden yapılır?", "Ne zaman yaptırmalısınız?" (belirtiler / gürültü / yaş-aile-diğer)
// ve "Hemen KBB'ye başvurmanız gereken durumlar".
//
// Birleştirilenler: eski "İşitmenizi Ertelemeyin" (awareness, 7 belirti) ve "Kimler
// İşitme Testi Yaptırmalı?" (ideal-user) aynı içeriği iki kez veriyordu; tek bölümde
// toplandı. Belirtiler eski doğrulanmış içerikten korundu; "40 yaş üzeri düzenli kontrol
// sıkça önerilir" ifadesi eski ideal-user verisinden gelir.
// KBB bölümü: eski sayfadaki tek cümlelik güvenlik uyarısı ("ani başlayan işitme kaybı,
// kulak ağrısı, akıntı → önce KBB") korunarak görünür, ayrı bir bölüme taşındı.
// Tıbbi kesinlik yoktur: "olabilir / düşündürebilir / sıkça önerilir".
import { Ear, Search, Repeat, Stethoscope, Volume2, Users, Phone, MessageSquare, Activity, ClipboardList } from "lucide-astro";
import type { GuideCard, GuideSectionMeta } from "../../components/price-guide/price-guide.types";

/* ---------- Neden yapılır? ---------- */
export const whySection: GuideSectionMeta = {
  id: "neden-yapilir",
  eyebrow: "Neden Yapılır?",
  heading: "İşitme Testi Neden Yapılır?",
  intro:
    "İşitme testi; işitme kaybının olup olmadığını, varsa hangi seslerde ve ne düzeyde olduğunu ölçmek, sonuca göre doğru yönlendirmeyi yapmak ve zaman içindeki değişimi izleyebilmek için yapılır. Kendinizde fark ettiğiniz bir zorluğun işitmeyle ilgili olup olmadığını netleştirmenin en güvenilir yolu budur.",
};

export const whyCards: GuideCard[] = [
  {
    icon: Search,
    title: "İşitme durumunu ölçerek görmek",
    text: "'Sanki eskisi kadar duymuyorum' hissi kişiden kişiye değişir. Test, bu hissi ölçülebilir bir kayda dönüştürür: hangi seslerde, hangi kulakta ve ne kadar fark olduğu odyogramda görülür.",
  },
  {
    icon: Stethoscope,
    title: "Doğru yönlendirmeye yardımcı olmak",
    text: "Sonuca göre gerekirse bir KBB uzmanına yönlendirme, takip veya işitme cihazı değerlendirmesi gündeme gelebilir; sonuç normal sınırlardaysa gereksiz bir işlem yapılmaz.",
  },
  {
    icon: Repeat,
    title: "Zaman içindeki değişimi izlemek",
    text: "İşitme zamanla değişebilir. İlk test bir başlangıç kaydı olur; sonraki kontrollerde karşılaştırma yapmayı kolaylaştırır.",
  },
  {
    icon: Ear,
    title: "Erken fark etmenin faydası",
    text: "İşitme kaybı çoğu zaman yavaş ilerlediği için fark edilmesi gecikebilir. Erken değerlendirme, günlük iletişimde yaşanan zorlukların ne kadarının işitmeyle ilgili olduğunu anlamaya yardımcı olabilir.",
  },
];

/* ---------- Ne zaman yaptırmalısınız? ---------- */
export const whenSection: GuideSectionMeta = {
  id: "ne-zaman",
  eyebrow: "Ne Zaman?",
  heading: "Ne Zaman İşitme Testi Yaptırmalısınız?",
  intro:
    "Günlük hayatta konuşmaları takip etmekte zorlanıyor, televizyonun sesini eskisinden fazla açıyor ya da yakınlarınız sizi işitme konusunda uyarıyorsa bir işitme testi yaptırmak iyi bir ilk adımdır. Aşağıdaki işaretler kesin bir sonuç değil, değerlendirme için bir nedendir.",
};

export const signsCards: GuideCard[] = [
  { icon: Volume2, title: "Televizyon veya radyo sesini fazla açmak", text: "Evdeki diğer kişilere göre daha yüksek sesle televizyon izliyor olabilirsiniz." },
  { icon: MessageSquare, title: "'Ne dedin?' sorusunu sık sormak", text: "Karşınızdakine söylediklerini tekrar ettirme ihtiyacı zamanla artmış olabilir." },
  { icon: Users, title: "Kalabalıkta konuşmaları takip etmekte zorlanmak", text: "Restoran, davet veya kalabalık bir ortamda konuşmaları ayırt etmek eskisinden güç gelebilir." },
  { icon: Phone, title: "Telefonda konuşurken zorlanmak", text: "Telefonda karşı tarafı anlamak, yüz yüze sohbete göre daha yorucu hale gelmiş olabilir." },
  { icon: Ear, title: "Duyup da kelimeleri ayırt edememek", text: "Konuşulanı duyduğunuz hâlde kelimeleri tam olarak anlayamadığınızı hissedebilirsiniz." },
  { icon: Activity, title: "Bir kulağın diğerinden az duyduğunu fark etmek", text: "İki kulak arasında fark hissetmek değerlendirme için bir nedendir; aniden gelişen bir fark ise acil değerlendirme gerektirebilir (aşağıya bakın)." },
];

export const noiseCard: GuideCard = {
  icon: Volume2,
  title: "Gürültüye maruz kalma",
  text: "Uzun süre yüksek sesli ortamlarda bulunmak (bazı iş yerleri, yüksek sesli müzik veya makineler) işitmeyi etkileyebilir. Böyle bir geçmişiniz varsa, bir şikayetiniz olmasa bile işitmenizi kontrol ettirmek faydalı olabilir.",
};

export const contextCards: GuideCard[] = [
  {
    icon: ClipboardList,
    title: "Yaş",
    text: "40 yaş üzeri kullanıcılar için düzenli işitme kontrolleri sıkça önerilir. Yaşla birlikte işitme değişebildiği için kontrol aralığını uzmanınızla belirleyebilirsiniz.",
  },
  {
    icon: Users,
    title: "Aile öyküsü",
    text: "Ailenizde işitme kaybı yaşayanlar varsa bunu test sırasında uzmana belirtmeniz, değerlendirmenin doğru yönlendirilmesine yardımcı olur.",
  },
  {
    icon: Ear,
    title: "Diğer durumlar",
    text: "Sık kulak enfeksiyonu geçmişi, kulak çınlaması, kulak tıkanıklığı hissi ve kullandığınız ilaçlar gibi bilgiler; ayrıca işitme cihazı kullanıp ayar kontrolüne ihtiyaç duyanlar için de test faydalıdır.",
    href: "/degerlendirme/tinnitus-degerlendirme/",
    linkLabel: "Kulak çınlaması değerlendirmesi",
  },
];

/* ---------- KBB uyarısı ---------- */
export const entSection: GuideSectionMeta = {
  id: "kbb-uyari",
  eyebrow: "Önemli Uyarı",
  heading: "Hemen KBB'ye Başvurmanız Gereken Durumlar",
  intro:
    "Aşağıdaki durumlarda öncelik işitme testi değil, vakit kaybetmeden bir kulak burun boğaz (KBB) uzmanına veya sağlık kuruluşuna başvurmaktır. Bu belirtiler tıbbi değerlendirme gerektirebilir.",
};

export const entPoints: { title: string; text: string }[] = [
  { title: "Ani başlayan veya hızla ilerleyen işitme kaybı", text: "Özellikle tek kulakta aniden gelişen işitme kaybı acil değerlendirme gerektirebilir; beklemeden başvurun." },
  { title: "Kulak ağrısı", text: "Şiddetli ya da devam eden kulak ağrısında önce tıbbi değerlendirme yapılmalıdır." },
  { title: "Kulaktan akıntı", text: "Kulaktan sıvı, kan veya irin gelmesi durumunda KBB uzmanına başvurun." },
];

export const entNote =
  "Bu liste eksiksiz değildir ve tanı yerine geçmez. Kendinizi endişelendiren bir belirti varsa bir sağlık profesyoneline başvurmak her zaman doğru adımdır; işitme testini tıbbi değerlendirmenin ardından da yaptırabilirsiniz.";
