// "Ücretsiz işitme testi: neleri kapsar?" — DOĞRULANMIŞ mevcut bilgilerle ve KISA.
//
// Bu bölüm ölçüm tablosunu TEKRARLAMAZ (aşamalar ve ölçümler measurements.ts'deki tek tabloda).
// Yalnızca: merkezimizde ücretsiz olması, kapsamın kişiye göre belirlenmesi, satın alma taahhüdü
// olmaması ve "ücret / fiyat" sorusunun doğal cevabı.
//
// Kaynaklar (eski sayfa): ücretsiz test "ön görüşme, şikayet değerlendirmesi ve temel odyolojik
// ölçümü kapsar"; test herhangi bir ücret / satın alma taahhüdü olmadan sunulur. Ek testlerin
// (timpanometri, çocuk testi, tinnitus değerlendirmesi) ücretsiz kapsamda olup olmadığı
// DOĞRULANMAMIŞTIR → vaat edilmez; "kapsam randevuda öğrenilir" denir.
// Fiyat yoktur; cihaz fiyatı ayrı rehbere yönlendirilir.
import { BadgeCheck, SlidersHorizontal, HandHeart } from "lucide-astro";
import type { GuideCard, GuideSectionMeta } from "../../components/price-guide/price-guide.types";

export const freeTestSection: GuideSectionMeta = {
  id: "ucretsiz-test",
  eyebrow: "Ücretsiz İşitme Testi",
  heading: "Ücretsiz İşitme Testi: Neleri Kapsar?",
  intro:
    "Ücretsiz işitme testi, Darıca'daki merkezimizde bir odyometrist eşliğinde yapılan işitme değerlendirmesidir; test için ücret talep edilmez ve satın alma taahhüdü yoktur. Ön görüşmeyi, şikayet değerlendirmesini ve temel odyolojik ölçümü kapsar; hangi değerlendirmelerin yer alabileceği yukarıdaki tabloda.",
};

export const freeTestCards: GuideCard[] = [
  {
    icon: BadgeCheck,
    title: "Ücret ve fiyat",
    text: "Bu sayfa yalnızca merkezimizin uygulamasını anlatır; başka merkezlerin ücretlendirmesi farklı olabilir. İşitme cihazı fiyatları ise ayrı bir konudur ve test ücretinden bağımsız olarak kendi rehberinde ele alınır.",
    href: "/isitme-cihazi-fiyatlari/",
    linkLabel: "Cihaz fiyat rehberi",
  },
  {
    icon: SlidersHorizontal,
    title: "Kapsam kişiye göre belirlenir",
    text: "Uygulanacak değerlendirmeler, kişinin ihtiyacına ve test sürecine göre belirlenir. Ek değerlendirmelerin ücretsiz kapsama girip girmediğini randevuda öğrenebilirsiniz.",
  },
  {
    icon: HandHeart,
    title: "Baskısız değerlendirme",
    text: "Test yalnızca cihaz satışı için yapılan bir işlem değildir; öncelik işitme durumunuzun değerlendirilmesidir. Uygun bir çözüm varsa bunu hiçbir baskı hissettirmeden birlikte görüşürüz.",
    href: "/neden-orijinal/ucretsiz-danismanlik/",
    linkLabel: "Ücretsiz danışmanlık",
  },
];
