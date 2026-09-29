// Kısa cevap (GEO): "İşitme cihazı nedir?" — sayfaya gelen kullanıcı daha fazla
// okumasa bile temel cevabı burada alır. DirectAnswer bileşeninin yapısı
// (soru + iki cümlelik cevap + yan liste + not) fiyat sayfasıyla ortaktır;
// içerik bu sayfaya özeldir.
import type { QuickAnswerContent } from "../isitme-cihazi-fiyatlari/quick-answer";

export const devicesQuickAnswer: QuickAnswerContent = {
  id: "hizli-cevap",
  eyebrow: "Kısa Cevap",
  question: "İşitme cihazı nedir?",
  answer:
    "İşitme cihazı; çevredeki sesi mikrofonla alan, bir işlemciyle kişinin işitme kaybına göre ayarlayan ve kulağa ileten, günlük kullanım için tasarlanmış küçük bir elektronik cihazdır. İşitme kaybını ortadan kaldırmaz; duyulamayan sesleri daha erişilebilir hâle getirerek konuşmayı takip etmeyi kolaylaştırmayı amaçlar. Hangi cihazın uygun olduğu, işitme değerlendirmesinden sonra belirlenir.",
  factorsHeading: "İşitme cihazları hangi türlere ayrılır?",
  factors: [
    "Kulak arkası (BTE): gövde kulağın arkasında, ses tüple veya alıcıyla kulağa ulaşır",
    "RIC / RITE: ince kulak arkası cihaz; hoparlör (alıcı) kulak kanalındadır",
    "Kulak içi (ITE, ITC): kulağa göre üretilen, kulak kepçesi ve kanalına oturan cihazlar",
    "Kanal içi ve görünmez (CIC, IIC): kulak kanalına yerleşen en küçük cihazlar",
    "Ek özelliklere göre: şarjlı, Bluetooth'lu, suya dayanıklı; çocuklara yönelik çözümler",
  ],
  transparency: {
    title: "Bu sayfa nasıl okunmalı?",
    paragraphs: [
      "Bu rehber bilgilendirme amaçlıdır; teşhis koymaz, tedavi vaat etmez ve kişiye özel cihaz önerisi yerine geçmez. Kullandığımız 'genellikle' ve 'modele göre' ifadeleri bilinçlidir: uygunluk, işitme kaybınıza, kulak yapınıza ve cihazın modeline göre değişir.",
      "Fiyat ve SGK konuları ayrı sayfalarda ele alındığı için burada yalnızca kısaca yönlendiriyoruz.",
    ],
  },
  links: [
    { label: "Ücretsiz işitme testi", href: "/degerlendirme/ucretsiz-isitme-testi/" },
    { label: "Cihaz seçim rehberi", href: "/rehberler/cihaz-secim-rehberi/" },
  ],
};
