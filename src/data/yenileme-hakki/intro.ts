// "Yenileme Hakkı Nedir?" section for the /sgk/yenileme-hakki page.
// Renders through the shared BrandPageIntro component. The 5-year
// renewal period is stated here, in the first section after the hero
// (owner-confirmed MEDULA information; see hero.ts and renewal-guide.ts
// for the source split between SUT text and MEDULA process information).
// The old "güncel süre SGK rehberinde" redirect loop is gone.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const yenilemeHakkiIntro: BrandPageIntroContent = {
  badge: "YENİLEME HAKKI NEDİR?",
  heading: "SGK İşitme Cihazı Yenileme Hakkı Nedir?",
  paragraphs: [
    "SGK, kullanılmakta olan işitme cihazının 5 yıllık sürenin ardından yeniden SGK desteği kapsamında yenilenmesine imkân tanır. Bu süre, çocuklar dâhil bütün yaş gruplarında aynıdır.",
    "Süre, önceki cihazın MEDULA sistemine kaydedildiği tarihten itibaren hesaplanır. Sağ ve sol kulak cihazlarının kayıt tarihleri farklıysa her kulağın süresi ayrı hesaplanır.",
    "Süre dolmadan yenileme yalnızca SUT'taki istisnalarda mümkündür: büyüme ve gelişme çağındaki çocuğun cihazı kullanamaması ya da cihazın kullanıcı kusuru olmadan kullanılamaz hâle gelip onarılamaması. İkisinde de sağlık raporu gerekir. İşitme kaybının ilerlemesi tek başına yeterli değildir.",
    "Hesap örneği, süre dolmadan yenileme kuralları ve e-Devlet sorgulama bilgisi bu sayfanın devamındadır; SGK ödeme tutarları için SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi sayfamıza bakabilirsiniz.",
  ],
  stats: [
    { value: "5 Yıl", label: "Standart Yenileme Süresi" },
    { value: "MEDULA Kayıt Tarihi", label: "Sürenin Başlangıcı" },
    { value: "Her Kulak Ayrı", label: "Süre Hesabı" },
    { value: "Sağlık Raporu", label: "Süre Dolmadan Yenileme" },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
