// Gerçek Hayat Senaryoları — Kişiye Özel Ayar, plan §3/Bölüm 6. Renders
// through the new SoundConcernList component. Her senaryo SORUN → OLASI
// NEDEN → AYAR SÜRECİNDE NE DEĞERLENDİRİLİR yapısında; tanı koyulmuyor,
// kesin neden verilmiyor.
import type { SoundConcernListContent } from "../../components/shared/SoundConcernList/SoundConcernList.astro";

export const kisiyeOzelAyarConcerns: SoundConcernListContent = {
  badge: "GERÇEK HAYAT SENARYOLARI",
  heading: "Kendinizi Bu Sorularda Buluyor musunuz?",
  intro: "Aşağıdaki durumlardan biri size tanıdık geliyorsa, bu genellikle ayarın gözden geçirilmesi gerektiğinin bir işaretidir.",
  causeLabel: "Olası Neden",
  evaluationLabel: "Ayar Sürecinde Ne Değerlendirilir?",
  concerns: [
    {
      question: "Televizyon sesi fazla mı geliyor?",
      cause: "Belirli frekans bantlarındaki kazanç, sizin işitme profilinize göre gerekenden yüksek ayarlanmış olabilir.",
      evaluation: "İlgili frekans bantlarındaki kazanç seviyeleri ve genel ses konforu gözden geçirilir.",
    },
    {
      question: "Kalabalıkta konuşmaları ayırt etmekte zorlanıyor musunuz?",
      cause: "Gürültülü ortam programı, konuşma sesini arka plan gürültüsünden yeterince ayıramıyor olabilir.",
      evaluation: "Yönlü mikrofon ve gürültü yönetimi ayarları, kalabalık ortam senaryosuna göre değerlendirilir.",
    },
    {
      question: "Sesler fazla keskin veya yapay mı geliyor?",
      cause: "Yüksek frekans bölgesindeki işleme, kulağınızın alışkın olduğundan farklı bir ton karakteri yaratıyor olabilir.",
      evaluation: "Ton dengesi ve yüksek frekans işleme ayarları, doğal bir dinleme hissi hedeflenerek incelenir.",
    },
    {
      question: "Telefon görüşmelerinde konuşmayı daha rahat duymak mı istiyorsunuz?",
      cause: "Telefon programı, günlük konuşma programından farklı bir dengeye ihtiyaç duyuyor olabilir.",
      evaluation: "Telefonla kullanım için ayrı bir dinleme programı gerekip gerekmediği değerlendirilir.",
    },
    {
      question: "Yakınlarınız cihazı kullanmanıza rağmen hâlâ televizyonun sesini açtığınızı söylüyor mu?",
      cause: "Genel kazanç seviyesi veya konuşma netliğine yönelik ayarlar, mevcut ihtiyacınızı tam karşılamıyor olabilir.",
      evaluation: "Genel kazanç, konuşma netliği ve televizyon dinleme alışkanlığınız birlikte gözden geçirilir.",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
