// "İşitme Testi Ne İçin ve Ne Zaman Yapılır?" (eski "Neden yapılır?" + "Ne zaman
// yaptırmalısınız?" tek bölümde birleştirildi: aynı niyet, aynı belirtiler, iki kez anlatılıyordu)
// ve "Hemen KBB'ye başvurmanız gereken durumlar".
//
// Belirtiler eski doğrulanmış içerikten korundu; "40 yaş üzeri düzenli kontrol sıkça
// önerilir" ifadesi eski ideal-user verisinden gelir. Eski "Erken fark etmenin faydası" kartı
// sağlık iddiası yerine günlük iletişim çerçevesine çekilip ilk karta katıldı.
// KBB bölümü: eski sayfadaki tek cümlelik güvenlik uyarısı ("ani başlayan işitme kaybı,
// kulak ağrısı, akıntı → önce KBB") korunarak görünür, ayrı bir bölümdür; sayfadaki tek tam
// uyarı budur, diğer bölümler buraya yönlendirir.
// Tıbbi kesinlik yoktur: "olabilir / düşündürebilir / sıkça önerilir".
import { Ear, Volume2, Users, Phone, MessageSquare, Activity, ClipboardList } from "lucide-astro";
import type { GuideCard, GuideSectionMeta } from "../../components/price-guide/price-guide.types";

export const whenSection: GuideSectionMeta = {
  id: "ne-zaman",
  eyebrow: "Ne İçin, Ne Zaman?",
  heading: "İşitme Testi Ne İçin ve Ne Zaman Yapılır?",
  intro:
    "İşitme testi; işitme kaybının olup olmadığını, varsa hangi seslerde ve ne düzeyde olduğunu ölçmek için yapılır. Konuşmaları takip etmekte zorlanmak, televizyonun sesini eskisinden fazla açmak ya da yakınlarınızın sizi uyarması gibi işaretler ise işitmenizi kontrol ettirmek için bir nedendir; bu işaretler bir sonuç değil, değerlendirme için bir başlangıçtır.",
};

/**
 * Eski "İşitme testi ne işe yarar?" H3'ü ve 3 kartı, H2'nin altında TEK kısa açıklamaya çevrildi (aynı bilgi, ayrı başlık
 * ve kart dizisi yok): ölçülebilir kayıt · yavaş değişimin geç fark edilmesi · başlangıç kaydı · yönlendirme.
 */
export const purposeText =
  "Test, 'sanki eskisi kadar duymuyorum' hissini ölçülebilir bir kayda dönüştürür: hangi seslerde, hangi kulakta ve ne kadar fark olduğu odyogramda görülür. Değişimler çoğu zaman yavaş geliştiği için geç fark edilir; ilk test bir başlangıç kaydı olur ve sonraki kontrollerde karşılaştırma yapmayı kolaylaştırır. Sonuca göre gerekirse KBB yönlendirmesi, takip veya işitme cihazı değerlendirmesi gündeme gelebilir; sonuç normal sınırlardaysa cihaz gerekmeyebilir.";

export const signsCards: GuideCard[] = [
  { icon: Volume2, title: "Televizyon veya radyo sesini fazla açmak", text: "Evdeki diğer kişilere göre daha yüksek sesle televizyon izliyor olabilirsiniz." },
  { icon: MessageSquare, title: "'Ne dedin?' sorusunu sık sormak", text: "Karşınızdakine söylediklerini tekrar ettirme ihtiyacı zamanla artmış olabilir." },
  { icon: Users, title: "Kalabalıkta konuşmaları takip etmekte zorlanmak", text: "Restoran, davet veya kalabalık bir ortamda konuşmaları ayırt etmek eskisinden güç gelebilir." },
  { icon: Phone, title: "Telefonda konuşurken zorlanmak", text: "Telefonda karşı tarafı anlamak, yüz yüze sohbete göre daha yorucu hale gelmiş olabilir." },
  { icon: Ear, title: "Duyup da kelimeleri ayırt edememek", text: "Konuşulanı duyduğunuz hâlde kelimeleri tam olarak anlayamadığınızı hissedebilirsiniz." },
  { icon: Activity, title: "Bir kulağın diğerinden az duyduğunu fark etmek", text: "İki kulak arasında fark hissetmek değerlendirme için bir nedendir; aniden gelişen bir fark ise acil değerlendirme gerektirebilir (aşağıdaki KBB bölümüne bakın)." },
];

/** H3: "Gürültü, yaş ve aile öyküsü" — eski gürültü paragrafı + yaş/aile/diğer kartları. */
export const contextCards: GuideCard[] = [
  {
    icon: Volume2,
    title: "Gürültüye maruz kalma",
    text: "Uzun süre yüksek sesli ortamlarda bulunmak (bazı iş yerleri, yüksek sesli müzik veya makineler) işitmeyi etkileyebilir. Böyle bir geçmişiniz varsa, bir şikayetiniz olmasa bile işitmenizi kontrol ettirmek faydalı olabilir.",
  },
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
  intro: "Bazı belirtiler işitme testinden önce tıbbi değerlendirme gerektirebilir.",
};

export const entPoints: { title: string; text: string }[] = [
  { title: "Ani başlayan veya hızla ilerleyen işitme kaybı", text: "Özellikle tek kulakta aniden gelişen işitme kaybı acil değerlendirme gerektirebilir; beklemeden başvurun." },
  { title: "Kulak ağrısı", text: "Şiddetli ya da devam eden kulak ağrısında önce tıbbi değerlendirme yapılmalıdır." },
  { title: "Kulaktan akıntı", text: "Kulaktan sıvı, kan veya irin gelmesi durumunda KBB uzmanına başvurun." },
];

export const entNote =
  "Bu liste eksiksiz değildir ve tanı yerine geçmez. Kendinizi endişelendiren bir belirti varsa bir sağlık profesyoneline başvurmak her zaman doğru adımdır; işitme testini tıbbi değerlendirmenin ardından da yaptırabilirsiniz.";
