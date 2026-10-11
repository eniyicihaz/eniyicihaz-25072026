// Teknik Servis hero'sundaki 5 aşamalı süreç infografiği (/servis-bakim/teknik-servis).
//
// DOĞRULAMA NOTU — her cümle bu sayfanın kendi içeriğinden ve SERVICE_SOURCE_OF_TRUTH §4'ten gelir; yeni iddia yoktur:
//   1  src/data/teknik-servis/evolution.ts "Sorun Bildirimi ve Ön Değerlendirme" + SERVICE_SOT H17 "randevu gerekli"
//   2  technology.ts "Yerinde Teknik Teşhis": ses çıkışı, mikrofon ve bağlantı gibi temel işlevlerin testi
//   3  advantages.ts "Şeffaf Teşhis" + evolution.ts "Yerinde Teşhis": kaynağın belirlenmeye çalışılması, teşhis sonrası paylaşım
//   4  evolution.ts "Onarım Kararı" + comparison.ts notu: yerinde çözülebiliyorsa merkezde, garanti kapsamındakiler gerektiğinde dış servise
//   5  faq.ts "Onarım sürecimi nasıl takip edebilirim?" (takip kaydı, aşamalar hakkında iletişim) + evolution.ts "Teslim ve Kontrol"
// Bilerek YER ALMAYANLAR: süre/teslim günü (3 gün, 1–3 gün), her işlemde aynı kontroller, garanti/onarımın kesin sonuçlanacağı,
// cihazın her zaman merkezde onarıldığı, yedek cihaz garantisi, ücret tutarı. "Her işlemde aynı kontroller" iddiası olmadığından
// 2. aşama "temel işlevler açısından test edilir" ifadesiyle sayfanın kendi cümlesiyle sınırlıdır.
// İŞLETMENİN DOĞRULAMASI GEREKEN NOKTA: sayfa içeriği "yerinde teşhis"i tek aşama olarak anlatır; burada 2 (ilk kontrol) ve
// 3 (teknik değerlendirme) olarak iki ayrı sunulmuştur. Bu ayrımın uygulamadaki sıraya karşılık geldiği teyit edilmelidir.
import { ClipboardList, SearchCheck, Wrench, Route, BellRing } from "lucide-astro";

export type ProcessTone = "red" | "orange" | "amber" | "sky" | "emerald";

export interface ProcessStep {
  tone: ProcessTone;
  icon: any;
  label: string;
  title: string;
  text: string;
  /** Mobil (<720 px) için kısaltılmış metin; aynı bilgiyi korur, yeni iddia içermez. */
  short: string;
  /** Yalnızca gerçekten var olan hedefler (dist'te doğrulandı); yoksa kart bağlantısız kalır. */
  link?: { label: string; href: string };
}

export const teknikServisProcess = {
  heading: "5 Aşamada Teknik Servis",
  steps: [
    {
      tone: "red",
      icon: ClipboardList,
      label: "Adım 01",
      title: "Başvuru ve Sorunun Belirlenmesi",
      text: "Yaşadığınız sorunu bizimle paylaşırsınız; gerekli randevu türü birlikte belirlenir.",
      short: "Sorunu paylaşırsınız; gerekli randevu türü birlikte belirlenir.",
    },
    {
      tone: "orange",
      icon: SearchCheck,
      label: "Adım 02",
      title: "Merkezde İlk Değerlendirme",
      text: "Cihazınız merkezimizde uzmanımızca ilk kez değerlendirilir; ses çıkışı, mikrofon ve bağlantı gibi temel işlevler incelenir, bazı sorunlar burada çözülebilir.",
      short: "Cihaz merkezimizde ilk kez değerlendirilir; bazı sorunlar burada çözülebilir.",
    },
    {
      tone: "amber",
      icon: Wrench,
      label: "Adım 03",
      title: "Gerekirse Teknik Servise Gönderim",
      text: "Merkezde çözülemeyen cihaz teknik servise gönderilir; çözülebilen sorunlarda bu adıma gerek kalmaz.",
      short: "Merkezde çözülemeyen cihaz teknik servise gönderilir.",
    },
    {
      tone: "sky",
      icon: Route,
      label: "Adım 04",
      title: "Teknik Serviste İlk Teknik Kontrol",
      text: "Teknik serviste yapılan ilk teknik kontrolle arıza daha net belirlenir.",
      short: "Teknik serviste ilk teknik kontrolle arıza netleşir.",
      link: { label: "Merkezde çözüm ve teknik servis karşılaştırması", href: "#ka-comparison-title" },
    },
    {
      tone: "emerald",
      icon: BellRing,
      label: "Adım 05",
      title: "Süre ve Ücret Bilgilendirmesi",
      text: "Tahmini onarım süresi ve varsa onarım ücreti, teknik servisteki ilk teknik kontrolden sonra size bildirilir.",
      short: "Tahmini onarım süresi ve varsa ücret, teknik serviste ilk teknik kontrolden sonra bildirilir.",
      link: { label: "Onarım takibi", href: "/servis-bakim/onarim-takibi/" },
    },
  ] as ProcessStep[],
  detailLink: { label: "Sorununuza göre izlenecek yolu görün", href: "#brand-page-techevo-title" },
};
