# IMPLEMENTATION_STANDARD.md

> Bu doküman, projenin teknik anayasalarından biridir. Bir implementasyonun *nasıl* yapılacağını değil, *iyi bir implementasyonun hangi standardı karşılaması gerektiğini* tanımlar.
>
> Doküman bilinçli olarak teknoloji bağımsızdır. Hiçbir framework, kütüphane, dil, klasör yapısı, dosya organizasyonu, isimlendirme kuralı veya kod örneği içermez. Bu detaylar başka referanslarda ve projenin mevcut yapısında yaşar; bu doküman yalnızca kalite standardını tanımlar.
>
> Bu standart; bir Header, Footer, Hero, Mega Menu, Accordion, Card, Form, Modal, sayfa veya layout — ne üretilirse üretilsin — fark etmeksizin her implementasyona uygulanır.

---

# 1. Purpose

Bu dokümanın amacı, bu projede bundan sonra üretilecek her implementasyonun aynı kalite eşiğini karşılamasını güvence altına almaktır. İşlev gören bir çıktı ile *tamamlanmış* bir çıktı arasındaki farkı tanımlar.

Bu doküman bir "Definition of Done" (Bitmiş Tanımı) niteliğindedir: bir implementasyon, ancak burada tanımlanan standartların tamamını karşıladığında tamamlanmış sayılır. Çıktının kalitesini tanımlar; ona ulaşma yöntemini değil.

---

# 2. Scope

## Kapsadığı Alan

Bu standart, teknolojiden bağımsız olarak her türlü implementasyona uygulanır — küçük bir etkileşimli öğeden tam bir sayfaya kadar. Bir implementasyonun neyle gerçekleştirildiği değişebilir; karşılaması gereken kalite standardı değişmez.

## Kapsamadığı Alan (Bilinçli Sınırlar)

Bu doküman aşağıdakileri **tanımlamaz ve dayatmaz**:

- Teknoloji, framework veya kütüphane seçimi.
- Klasör yapısı veya dosya organizasyonu.
- Component isimlendirme kuralları.
- Mimari tasarım veya yeni yapı önerileri.
- Kod, kod örneği veya uygulama yöntemi.

Bu sınırlar tesadüfi değildir. Bu doküman, bir kalite standardı olmanın ötesine geçip projeye yapısal tercihler dayatmak için kullanılamaz. Bu tür kararlar projenin mevcut yapısına ve ilgili diğer referanslara aittir.

## Component Bazlı Talimatlarla İlişki

Belirli bir bileşen için hazırlanan implementasyon brief'leri (örneğin bir Header implementasyon talimatı), bu standardın somut birer uygulamasıdır. Böyle bir talimat bu standardın yerine geçmez; ona uymak zorundadır.

---

# 3. Core Implementation Principles

Her implementasyon, aşağıdaki temel niteliklerin tamamını taşır. Bunlar dekoratif ilkeler değil, sonraki bölümlerde ayrıntılanan farklı boyutların ortak temelidir.

- **Fidelity (Sadakat)** — Çıktı, hedeflenen tasarımı ve gereksinimi olduğu gibi gerçekleştirir; yorumlamaz, güzelleştirmeye çalışmaz.
- **Completeness (Eksiksizlik)** — Çıktı, yalnızca ideal durumu değil, tüm ilgili durum ve senaryoları kapsar.
- **Integration (Uyum)** — Çıktı, var olan bütünün doğal bir parçası olur; ona yama gibi eklenmez.
- **Restraint (Ölçülülük)** — Çıktı, istenen kapsamı birebir karşılar; ne eksik ne fazla.
- **Correctness (Doğruluk)** — Çıktı, iddia ettiği her şeyi gerçekten ve güvenilir şekilde yapar.

---

# 4. Integration Principles

Yeni bir implementasyon, boş bir alana değil, halihazırda var olan bir projeye eklenir. Bu nedenle:

- Mevcut mimari, kurallar ve tasarım sistemi korunur; bunlara uyum sağlanır, bunlar yeniden şekillendirilmez.
- Var olan bir çözüm zaten mevcutsa, yeniden yazılmaz; yeniden kullanılır.
- Yeni çıktı, kod tabanına doğal biçimde entegre olur; kopuk veya yabancı durmaz.
- Mevcut hiçbir davranış, görünüm veya işlev, yeni çıktı yüzünden bozulmaz.

Uyum, "çalışıyor" olmanın ötesinde bir gerekliliktir: yeni çıktı, projenin geri kalanıyla aynı dili konuşmalıdır.

---

# 5. Non-Imposition & Restraint

Bu bölüm, implementasyonu yapanın — ister insan ister yapay zekâ olsun — kendi tercihlerini projeye dayatmasını engeller.

- İstenmeyen hiçbir teknoloji, bağımlılık veya araç eklenmez.
- İstenmeyen hiçbir mimari değişiklik veya yeni yapı önerilmez.
- İstenmeyen hiçbir refactor (yeniden düzenleme) yapılmaz; çalışan mevcut yapı, "daha iyi olurdu" gerekçesiyle değiştirilmez.
- Kişisel stil, alışkanlık veya belirli bir aracın varsayılan tercihleri projeye taşınmaz.
- Kapsam, istenen işle birebir sınırlıdır; ne fazlası (kapsam kayması) ne eksiği kabul edilir.

Bir iyileştirme fikri varsa, bu bir öneri olarak dile getirilebilir; ancak istenmeden ve onaylanmadan uygulanmaz. Varsayılan tutum her zaman mevcut yapıya saygıdır.

---

# 6. Design Fidelity

Bir implementasyon, hedeflenen tasarımı yüksek doğrulukla gerçekleştirir.

- Referans tasarımdan sapılmaz; boşluk, oran, renk, radius, gölge ve tipografi kararları olduğu gibi uygulanır.
- Değerler rastgele veya sezgisel seçilmez; projenin tanımlı tasarım sisteminden gelir. Tasarım standardının kaynağı DESIGN_SYSTEM_GUIDE.md'dir ve bu implementasyon ona sadık kalmak zorundadır.
- İstenmeyen görsel "yaratıcılık" veya kişisel dokunuş eklenmez.
- Bir belirsizlik olduğunda, çözüm her zaman projenin mevcut, tanımlı sistemine doğru verilir; yeni bir görsel dil icat edilmez.

Sadakat, kopyalamak değil; hedeflenen kaliteyi eksiksiz ve tutarlı biçimde hayata geçirmektir.

---

# 7. Functional Completeness

Bir implementasyon, yalnızca en iyi senaryoda değil, karşılaşabileceği her makul durumda doğru çalışır.

- Öğenin hedeflenen tüm davranışları eksiksiz uygulanır.
- İlgili tüm durumlar (varsa boş, hatalı, yüklenen, seçili, devre dışı ve benzeri) ele alınır; hiçbir durum eksik bırakılmaz.
- Çıktı, ideal demo içeriğiyle değil, gerçek içerikle sınanmış gibi tasarlanır: uzun metin, kısa metin, eksik veri veya beklenenden farklı miktarda içerik geldiğinde de bozulmaz.

Eksik bir durum, eksik bir implementasyondur — görsel olarak tamamlanmış görünse bile.

---

# 8. Robustness

Eksiksizlik, hedeflenen durumları kapsar; sağlamlık ise beklenmeyeni kapsar.

- Çıktı, gerçek dünya koşullarında (yavaş bağlantı, eksik veya beklenmeyen girdi, olağandışı içerik boyutları) doğru davranır.
- Bir sorun oluştuğunda, çıktı sessizce çökmez; öngörülebilir ve zarif biçimde davranır.
- Hiçbir zaman "her şeyin kusursuz olduğu" bir ortam varsayılmaz.

Sağlam bir implementasyon, yalnızca doğru kullanıldığında değil, yanlış kullanıldığında da güven verir.

---

# 9. Code Quality

Bir çıktı, yalnızca çalıştığı için tamamlanmış sayılmaz. Üretilen sonuç, teknolojiden bağımsız olarak şu niteliklere sahiptir:

- Açık ve anlaşılırdır; gereksiz karmaşıklık taşımaz.
- Kendi içinde tutarlıdır; aynı problemi iki farklı yolla çözmez.
- Tekrar içermez; aynı çözüm birden çok yere kopyalanmaz.
- Ölü kod, kullanılmayan parça veya geçici hata ayıklama artığı bırakmaz.
- Rastgele, açıklanamayan değerler içermez; her değer sistemden veya gereksinimden türer.
- Yeni hata üretmez: mevcut hiçbir şeyi kırmaz ve derleme, çalışma zamanı veya kalite denetimi düzeyinde yeni bir hata ortaya çıkarmaz.

---

# 10. Maintainability

Bir implementasyon, bugünkü haliyle değil, gelecekte biri onu değiştirmek zorunda kaldığında ne kadar kolay anlaşıldığıyla ölçülür.

- Sonuç, sonradan gelen birinin "arkeoloji" yapmasına gerek kalmadan anlaşılabilir olmalıdır.
- Çevredeki mevcut kurallara ve konvansiyonlara uyar; yeni ve yalnız başına duran bir tarz getirmez.
- Okunabilirlik, zeka gösterisi uğruna feda edilmez; akıllıca ama anlaşılmaz bir çözüm, sade ve anlaşılır bir çözüme tercih edilmez.

---

# 11. Accessibility

Erişilebilirlik, bir implementasyonun tamamlanma koşuludur; sonradan eklenecek bir iyileştirme değildir.

- Çıktı, DESIGN_SYSTEM_GUIDE.md'de tanımlanan erişilebilirlik standardını karşılamak zorundadır; bu doküman o kuralları yeniden tanımlamaz, onlara uyulmasını şart koşar.
- Erişilebilirlik varsayılmaz, doğrulanır: klavyeyle kullanılabilirlik, görünür odak ve yardımcı teknoloji desteği fiilen kontrol edilir.
- Mevcut erişilebilirlik düzeyi hiçbir zaman geriletilmez.

---

# 12. Responsive Behavior

Bir implementasyon, tek bir ekran boyutunda değil, hedeflenen tüm boyut aralığında doğru çalışır.

- Çıktı, DESIGN_SYSTEM_GUIDE.md'de tanımlanan responsive stratejiye uyar.
- Hiçbir kırılım noktasında taşma, hizalama bozulması veya içerik kaybı oluşmaz.
- Farklı içerik miktarları ve gerçek içerik, her ekran boyutunda sınanmış kabul edilir.

---

# 13. Interaction Quality

Etkileşimli bir implementasyon, kullanıcıya canlı, tutarlı ve öngörülebilir bir deneyim sunar.

- Her etkileşimli öğe, etkileşime anında ve fark edilir bir geri bildirim verir.
- Tüm ilgili etkileşim durumları eksiksiz ve birbirinden ayırt edilebilir biçimde uygulanır.
- Etkileşim ve hareket, DESIGN_SYSTEM_GUIDE.md'de tanımlanan ilkelere sadık kalır; ani, sert veya rahatsız edici davranış sergilenmez.
- Aynı etkileşim, projenin her yerinde aynı şekilde davranır; kullanıcıyı şaşırtmaz.

---

# 14. Performance

Bir implementasyon, gerekenden fazla maliyet oluşturmaz.

- Çıktı, yalnızca gerçekten gerekli olan işlem ve yükü taşır.
- Projenin mevcut performans temelini geriletmez.
- Bir davranış, platformun yerleşik ve verimli yetenekleriyle karşılanabiliyorsa, gereksiz ek işlem veya betikleme tercih edilmez.

Performans, teknik bir lüks değil, kullanıcı deneyiminin ve erişilebilirliğin bir parçasıdır.

---

# 15. Validation & Regression

Bir implementasyon, tamamlandığı iddia edilmeden önce doğrulanır. Doğrulama, belirli bir araç veya yönteme bağlı değildir; projenin desteklediği hangi yöntemle mümkünse onunla yapılır. Doğrulama en az şunları kapsar:

- Çıktının, hedeflenen tasarım ve gereksinimle birebir örtüştüğünün kontrolü.
- Tüm ilgili durumların ve gerçek içeriğin sınanması.
- Tüm ekran boyutu aralığında davranışın kontrolü.
- Etkileşimlerin ve erişilebilirliğin fiilen doğrulanması.
- **Regresyon kontrolü:** yeni çıktının, projenin mevcut hiçbir parçasını (işlev veya görünüm olarak) bozmadığının doğrulanması.
- Projenin, çıktı eklendikten sonra hatasız derlenip çalıştığının teyidi.

Bu doğrulamalar tamamlanmadan hiçbir implementasyon bitmiş kabul edilmez.

---

# 16. Acceptance Criteria (Definition of Done)

Bir implementasyon, ancak aşağıdaki koşulların **tamamı** karşılandığında tamamlanmış kabul edilir:

- Hedeflenen tasarım yüksek doğrulukla gerçekleştirilmiştir (Bölüm 6).
- Tüm hedeflenen davranışlar ve ilgili durumlar eksiksizdir (Bölüm 7).
- Çıktı, gerçek ve beklenmeyen koşullar altında sağlamdır (Bölüm 8).
- Mevcut mimariye ve tasarım sistemine uyum sağlanmış, hiçbir şey kırılmamıştır (Bölüm 4).
- İstenmeyen hiçbir teknoloji, mimari, refactor veya kişisel tercih dayatılmamıştır (Bölüm 5).
- Sonuç okunabilir, tutarlı, tekrarsız ve sürdürülebilirdir (Bölüm 9, 10).
- Erişilebilirlik, responsive davranış, etkileşim ve performans standartları karşılanmıştır (Bölüm 11–14).
- Çıktı doğrulanmış ve hiçbir regresyona yol açmadığı teyit edilmiştir (Bölüm 15).

Bu kriterlerden herhangi biri karşılanmıyorsa, implementasyon eksiktir — çalışıyor olsa dahi.

---

# 17. Doküman Otoritesi

Bu doküman, projenin diğer temel referanslarıyla eşdeğer bağlayıcılığa sahiptir ve onlarla birlikte projenin referans katmanını oluşturur. Her doküman farklı bir soruyu yanıtlar: kimiz, nasıl davranırız, nasıl inşa ederiz, nasıl bulunuruz ve — bu doküman — iyi bir implementasyonun standardı nedir.

Bir çelişki durumunda her doküman kendi yetki alanında esas alınır: gerçek bilgi COMPANY.md'ye, marka davranışı ve ton PRINCIPLES.md'ye, görsel ve mimari yapı DESIGN_SYSTEM_GUIDE.md'ye, arama ve AI görünürlüğü SEARCH_STRATEGY.md'ye, implementasyon kalitesi ise bu dokümana aittir.

Bu doküman uzun ömürlü olacak şekilde, belirli teknolojilerden ve geçici tercihlerden arındırılarak hazırlanmıştır. Bu sayede, projenin kullandığı teknolojiler zamanla değişse bile burada tanımlanan kalite standardı geçerliliğini korur. Güncelleme yapılmadığı sürece burada yazılan standartlar bağlayıcıdır.
