// "Ücretsiz işitme testi nedir, neleri kapsar?" — DOĞRULANMIŞ mevcut bilgilerle.
//
// Kaynaklar (eski sayfa): ücretsiz test "ön görüşme, şikayet değerlendirmesi ve temel
// odyolojik ölçümü kapsar"; "Testte Neler Değerlendirilir?" bölümü saf ses testi,
// konuşma testi, kulak muayenesi (otoskop), şikayet/sağlık geçmişi, odyogram kaydı ve
// yönlendirmeyi listeliyordu; test herhangi bir ücret / satın alma taahhüdü olmadan sunulur.
// EK testlerin (timpanometri, çocuk testi, tinnitus değerlendirmesi) ücretsiz kapsamda
// olup olmadığı DOĞRULANMAMIŞTIR → tabloda "ihtiyaca göre; randevuda bilgi alın" denir,
// vaat edilmez. Fiyat yoktur; cihaz fiyatı ayrı rehbere yönlendirilir.
import { CalendarCheck, ShieldCheck, Users } from "lucide-astro";
import type { GuideCard, GuideSectionMeta, GuideTableContent } from "../../components/price-guide/price-guide.types";

export const freeTestSection: GuideSectionMeta = {
  id: "ucretsiz-test",
  eyebrow: "Ücretsiz İşitme Testi",
  heading: "Ücretsiz İşitme Testi Nedir, Neleri Kapsar?",
  intro:
    "Ücretsiz işitme testi, Darıca'daki merkezimizde bir odyometrist eşliğinde, herhangi bir ücret talep edilmeden ve satın alma taahhüdü olmadan yapılan işitme değerlendirmesidir. Ön görüşmeyi, şikayet değerlendirmesini ve temel odyolojik ölçümü kapsar; sonuçlar sizinle birlikte değerlendirilir.",
};

export const freeTestTable: GuideTableContent = {
  id: "ucretsiz-test-kapsami",
  eyebrow: "Tablo 1",
  heading: "Ücretsiz İşitme Testinde Hangi Aşamalar Yapılır?",
  caption: "Ücretsiz işitme testinin aşamaları, ne yapıldığı ve neyi değerlendirdiği",
  criterionLabel: "Aşama / ölçüm",
  columns: [{ name: "Ne yapılır?" }, { name: "Ne sağlar?" }, { name: "Kapsam" }],
  rows: [
    { label: "Ön görüşme", cells: ["Genel sağlık durumunuz ve beklentileriniz kısaca dinlenir.", "İhtiyacınızın doğru anlaşılması", "Ücretsiz testte yapılır"] },
    { label: "Şikayet ve sağlık geçmişi", cells: ["İşitmeyle ilgili zorluklarınız ve sağlık geçmişiniz not edilir.", "Sonuçların bu bilgilerle birlikte yorumlanması", "Ücretsiz testte yapılır"] },
    { label: "Kulak muayenesi", cells: ["Dış kulak yolu ve kulak zarı otoskopla görsel olarak kontrol edilir.", "Ölçümü etkileyebilecek durumların fark edilmesi", "Ücretsiz testte yapılır"] },
    { label: "Saf ses testi", cells: ["Farklı frekanslardaki sesleri duyabildiğiniz en düşük şiddet ölçülür.", "Frekansa göre işitme eşiği", "Ücretsiz testte yapılır"] },
    { label: "Konuşma testi", cells: ["Farklı ses seviyelerinde konuşmayı ne kadar net anladığınız değerlendirilir.", "Konuşmayı anlama düzeyi", "Ücretsiz testte yapılır"] },
    { label: "Odyogram kaydı ve açıklama", cells: ["Tüm ölçümler odyogramda kaydedilir ve sizinle birlikte anlaşılır şekilde yorumlanır.", "Sonucun görsel kaydı ve açıklaması", "Ücretsiz testte yapılır"] },
    { label: "Yönlendirme (gerekirse)", cells: ["Sonuca göre uzman yönlendirmesi veya cihaz seçeneklerinin görüşülmesi yapılabilir.", "Sonraki adımın belirlenmesi", "Satın alma taahhüdü olmadan"] },
    { label: "Ek değerlendirmeler", cells: ["Timpanometri, çocuk işitme testi veya kulak çınlaması değerlendirmesi gibi tamamlayıcı testler.", "İhtiyaca göre tamamlayıcı bilgi", "İhtiyaca göre değişir; kapsam için randevuda bilgi alın"] },
  ],
  note:
    "Test sırasında ya da sonrasında herhangi bir satın alma zorunluluğu yoktur. Ek değerlendirmelerin ücretsiz testin kapsamına girip girmediği kişiye ve ihtiyaca göre değişebilir; randevuda öğrenebilirsiniz.",
  links: [
    { label: "Fiyat rehberi", href: "/isitme-cihazi-fiyatlari/" },
    { label: "SGK işitme cihazı desteği", href: "/sgk-isitme-cihazi-odemesi/" },
  ],
};

/** Güven kartları — eski "Neden Avrasya İşitme?" (doğrulanmış gerçekler, COMPANY.md). */
export const trustCards: GuideCard[] = [
  {
    icon: CalendarCheck,
    title: "2009'dan beri aynı ekip",
    text: "Avrasya İşitme, aynı ekiple ve aynı adreste yıllardır Darıca'da hizmet veriyor.",
  },
  {
    icon: ShieldCheck,
    title: "SGK anlaşmalı merkez",
    text: "Resmî olarak SGK ile anlaşmalı bir işitme merkeziyiz; süreç ve belgeler konusunda danışmanlık veriyoruz.",
    href: "/sgk-isitme-cihazi-odemesi/",
    linkLabel: "SGK rehberi",
  },
  {
    icon: Users,
    title: "Baskısız, uzman eşliğinde değerlendirme",
    text: "Test yalnızca cihaz satışı için yapılan bir işlem değildir; öncelik işitme durumunuzun değerlendirilmesidir. Uygun bir çözüm varsa bunu hiçbir baskı hissettirmeden birlikte görüşürüz.",
    href: "/neden-orijinal/ucretsiz-danismanlik/",
    linkLabel: "Ücretsiz danışmanlık",
  },
];
