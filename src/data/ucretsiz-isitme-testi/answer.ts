// "İşitme testi nedir?" — kısa doğrudan cevap (H2) + devamı (H3'ler).
// Sayfadaki en sık aranan soruların ilk cevapları yan listede kısaca verilir;
// her biri ilgili bölümde ayrıntılandırılır. Süre ve KBB gibi doğrulanmamış
// konularda kesin vaat yoktur (genel, temkinli ifade).
import { Ear, ShieldAlert } from "lucide-astro";
import type { QuickAnswerContent } from "../isitme-cihazi-fiyatlari/quick-answer";
import type { GuideCard } from "../../components/price-guide/price-guide.types";

export const testQuickAnswer: QuickAnswerContent = {
  id: "hizli-cevap",
  eyebrow: "Kısa Cevap",
  question: "İşitme Testi Nedir?",
  answer:
    "İşitme testi, farklı frekans ve şiddetteki seslere verdiğiniz tepkilerin ölçülerek işitme durumunuzun değerlendirildiği bir muayenedir; sonuçlar odyogram adı verilen bir grafikte kaydedilir. Darıca'daki merkezimizde bu test bir odyometrist eşliğinde, herhangi bir ücret talep edilmeden ve satın alma taahhüdü olmadan yapılır. Sonuç tek başına kesin tanı koymaz; bir uzman tarafından diğer bulgularla birlikte yorumlanır.",
  factorsHeading: "Sık sorulan sorulara kısa cevaplar",
  factors: [
    "Nasıl yapılır? Kulaklıkla verilen seslerin ne zaman duyulduğu ölçülür; adım adım anlatım aşağıda.",
    "Ne kadar sürer? Süre, uygulanacak değerlendirmelere göre değişir; genellikle kısa sürede tamamlanır.",
    "Sonuç nasıl okunur? Odyogramda frekans (Hz) ve işitme seviyesi (dB) sağ ve sol kulak için ayrı gösterilir.",
    "KBB gerekir mi? İşitme testi ihtiyacınıza göre doğrudan planlanabilir; ancak bazı durumlarda KBB değerlendirmesi gerekebilir. Ani kayıp, ağrı veya akıntıda önce KBB'ye başvurun.",
    "Ücretsiz mi? Evet; merkezimizde herhangi bir ücret talep edilmeden ve satın alma taahhüdü olmadan yapılır.",
  ],
  transparency: {
    title: "Bu sayfa nasıl kullanılmalı?",
    paragraphs: [
      "Bu sayfa genel bir bilgilendirme amacı taşır; kendi kendine tanı koymak için kullanılmamalıdır. İşitme durumunuzu öğrenmenin güvenilir yolu, bir odyometrist tarafından yapılan değerlendirmedir ve kesin tanı ile tedavi yönlendirmesi için sonuçların bir uzman tarafından yorumlanması gerekir.",
      "Ani başlayan işitme kaybı, kulak ağrısı veya akıntı gibi durumlarda önceliğiniz işitme testi değil, vakit kaybetmeden tıbbi değerlendirmedir (aşağıdaki KBB bölümüne bakın).",
    ],
  },
  links: [
    { label: "Randevu ve iletişim", href: "/iletisim/" },
    { label: "İşitme kaybı nedir?", href: "/rehberler/isitme-kaybi-nedir/" },
  ],
};

/** "İşitme testi nedir?" bölümünün devamı — H3 kartları. */
export const basicsCards: GuideCard[] = [
  {
    icon: Ear,
    title: "İşitme testi ile odyometri arasındaki fark",
    text: "Gündelik dilde 'işitme testi' işitme durumunun değerlendirildiği sürecin tamamını, 'odyometri' ise bu sürecin çekirdeğindeki ölçümü (kulaklıkla verilen seslerin duyulma eşiklerinin ölçülmesi) anlatır. İşitme testi; ön görüşme, kulak muayenesi ve sonuçların açıklanmasını da içerebilir. Odyometrinin teknik ayrıntıları için odyometri sayfamıza bakabilirsiniz.",
    href: "/degerlendirme/odyometri/",
    linkLabel: "Odyometri nedir?",
  },
  {
    icon: ShieldAlert,
    title: "İşitme testinin yapmadığı şeyler",
    text: "İşitme testi işitme kaybının varlığını ve derecesini ölçmeye yardımcı olur; ancak tek başına bir hastalığı teşhis etmez ve tedavi kararı vermez. Kulakla ilgili tıbbi bir sorundan şüpheleniliyorsa, gerekli değerlendirme bir KBB uzmanı tarafından yapılır.",
  },
];
