# DESIGN_SYSTEM_GUIDE.md

> Bu proje üç temel referans doküman üzerine kuruludur, her biri farklı bir soruyu cevaplar:
>
> **COMPANY.md** — *Kimiz?* Şirketi ve markayı tanımlar.
>
> **PRINCIPLES.md** — *Nasıl konuşuruz ve nasıl davranırız?* Marka dilini, UX felsefesini, içerik ve güven kurallarını tanımlar.
>
> **DESIGN_SYSTEM_GUIDE.md** (bu doküman) — *Nasıl inşa ederiz?* Tasarım sistemini, component mimarisini, görsel dili ve geliştirme standartlarını tanımlar.
>
> Bu doküman kod içermez, CSS içermez, Astro sözdizimi içermez ve bir Figma dosyası değildir. Yalnızca kural ve standartları tanımlar. Bundan sonra üretilecek her Atom, Molecule, Organism, Template ve Page bu dokümana uymak zorundadır.

---

# 1. Önsöz

## Amaç

Bu doküman, projede geliştirilen ve geliştirilecek olan her arayüz bileşeninin aynı görsel dile, aynı mimari kurallara ve aynı kalite standardına sahip olmasını garanti eder. Amaç; Apple, Stripe, Linear, Vercel, Material Design, Shopify Polaris, IBM Carbon ve Atlassian Design System seviyesinde tutarlı, sade ve güvenilir bir tasarım sistemi kurmaktır.

## Kapsam

Bu doküman şunları kapsar: tasarım felsefesi, görsel dil, component mimarisi, erişilebilirlik, responsive strateji, motion, isimlendirme, dokümantasyon ve kalite standartları. Belirli bir renk kodu, piksel değeri veya kod örneği içermez — bu detaylar tasarım token'ları ve component kaynak kodu seviyesinde yaşar, bu doküman yalnızca onları yöneten *kuralları* tanımlar.

## Yetki Alanı

Bu doküman, sitede üretilen her Astro component'inin, her Pattern Library sayfasının ve her arayüz kararının bağlayıcı referansıdır. Bir component bu dokümana aykırıysa, component hatalıdır — doküman değil.

## Diğer Dokümanlarla İlişki

Üç doküman birbirini geçersiz kılmaz, tamamlar:

| Doküman | Soru | Yetki Alanı |
|---|---|---|
| COMPANY.md | Kimiz? | Şirket ve marka gerçekleri |
| PRINCIPLES.md | Nasıl davranırız? | Ton, UX felsefesi, içerik, güven, CTA |
| DESIGN_SYSTEM_GUIDE.md | Nasıl inşa ederiz? | Görsel sistem, component mimarisi, kod standartları |

Bir component'in *metni* PRINCIPLES.md'ye, *yapısı ve görünümü* bu dokümana uyar. Çelişki durumunda her doküman kendi yetki alanında esas alınır.

---

# 2. Design Philosophy

Sistem sekiz temel karakterle tanımlanır. Bunlar dekoratif sıfatlar değil, her tasarım kararında sınayıcı sorulardır.

- **Minimal** — Gerekli olmayan hiçbir öğe eklenmez. Boşluk bir eksiklik değil, tasarımın parçasıdır.
- **Premium** — Kalite; malzeme, hizalama ve detay tutarlılığından hissedilir; süsleme veya parlaklıktan değil.
- **Timeless** — Trend'e değil, ilkeye dayanır. Bir bileşen beş yıl sonra da eskimiş görünmemelidir.
- **Functional** — Her görsel karar bir işlevi destekler. "Güzel ama işe yaramaz" hiçbir öğe kabul edilmez.
- **Accessible** — Erişilebilirlik sonradan eklenen bir katman değil, tasarımın başlangıç koşuludur.
- **Modern** — Güncel web standartlarını ve etkileşim beklentilerini yansıtır; nostaljik veya eski moda değildir.
- **Calm** — Arayüz kullanıcıyı yormaz, aceleye getirmez, bağırmaz. Sessiz bir güven verir.
- **Confident** — Belirsiz, kararsız veya "belki böyle de olur" hissi veren tasarım kabul edilmez; her karar nettir.

Bu sekiz karakter, markanın davranış katmanının görsel karşılığıdır — özellikle **Calm** ve **Confident**, markanın merkez duygusu (Güven) ile atmosferinin (Sakinlik) tasarıma yansımasıdır. Marka amacı, duygusu ve karakteri burada yeniden tanımlanmaz.
> Canonical Source: PRINCIPLES.md §1 Brand DNA

---

# 3. Design Principles

- **Tutarlılık (Consistency)** — Aynı problem, sistemin her yerinde aynı çözümle karşılanır. İki farklı component aynı işi iki farklı şekilde yapmaz.
- **Basitlik (Simplicity)** — En az karmaşıklıkla en net sonuç hedeflenir. Karmaşıklık gerekiyorsa, kullanıcıdan değil sistemden gizlenir.
- **Tekrar Kullanılabilirlik (Reusability)** — Bir component tek bir sayfa için değil, her bağlamda çalışacak şekilde tasarlanır.
- **Öngörülebilirlik (Predictability)** — Bir component'in bir yerdeki davranışı, başka bir yerdeki davranışıyla aynıdır. Sürpriz yoktur.
- **Esneklik (Flexibility)** — Component'ler gerçek kullanım senaryolarına uyum sağlar; ama esneklik asla tutarlılığın önüne geçmez.
- **Ölçeklenebilirlik (Scalability)** — Sistem, 10 component ile de 200 component ile de aynı mantıkla çalışır.
- **Bakım Kolaylığı (Maintainability)** — Bir değişiklik tek bir yerden yapılır ve sistemin geneline yayılır; component'ler tek tek elle güncellenmez.

---

# 4. Terminology

Sistemde kullanılan terimler herkes için aynı anlama gelir:

- **Design System** — Bu üç dokümanın ve onlara bağlı component kütüphanesinin bütünü.
- **Token** — Boşluk, radius, gölge, renk veya tipografi için tanımlanmış, tekrar kullanılan tek bir değer kaynağı.
- **Atom** — Daha küçük parçalara bölünemeyen, tek başına anlamlı en küçük arayüz birimi.
- **Molecule** — Birden fazla Atom'un birlikte tek bir işlevi yerine getirdiği küçük fonksiyonel grup.
- **Organism** — Kendi başına anlamlı, tam bir arayüz bölümü oluşturan Molecule ve Atom birleşimi.
- **Template** — Gerçek içerik olmadan, yalnızca yerleşim iskeletini tanımlayan sayfa taslağı.
- **Page** — Bir Template'in gerçek içerikle doldurulmuş hâli.
- **Component** — Atom, Molecule veya Organism seviyesindeki herhangi bir arayüz birimi için genel terim.
- **Variant** — Bir component'in aynı kimliği koruyarak sunduğu alternatif görünümü (ör. boyut, önem derecesi).
- **Pattern** — Bir component'in gerçek bir ürün senaryosunda, gerçekçi içerikle kurulmuş somut kullanımı.
- **Pattern Library** — Her component'in gerçek dünya senaryolarıyla belgelendiği referans sayfaların bütünü.

---

# 5. Design Tokens

Token'lar sistemin tek doğruluk kaynağıdır. Hiçbir component; boşluk, radius, gölge, renk veya yazı boyutu için elle yazılmış, tek seferlik ("magic") bir değer içermez — her değer bir token'a referans verir.

## Token Kategorileri

- **Spacing** — Boşluk ölçeği; sayfa içi tüm aralıklar bu ölçekten seçilir.
- **Radius** — Köşe yuvarlaklığı ölçeği; her component aynı radius kademelerini paylaşır.
- **Shadow** — Yükseklik/derinlik ölçeği; gölgeler rastgele değil, tanımlı kademelere göre kullanılır.
- **Color** — Marka ve fonksiyon renkleri (bkz. Bölüm 7).
- **Typography** — Yazı tipi ailesi, ağırlık ve boyut ölçeği (bkz. Bölüm 8).
- **Motion** — Süre ve easing değerleri (bkz. Bölüm 12).

## Kural

Yeni bir görsel ihtiyaç ortaya çıktığında önce mevcut token'lar arasından uygun olan seçilir. Hiçbir token karşılamıyorsa, önce token seviyesinde bir karar verilir — component seviyesinde doğaçlama yapılmaz. Bu, sistemin büyüdükçe dağılmasını engelleyen en temel disiplindir.

---

# 6. Visual Language

- **Boşluk (Space)** — Boşluk, öğeler arasındaki ilişkiyi tanımlar. Yakın öğeler ilişkilidir, uzak öğeler bağımsızdır. Boşluk asla rastgele değildir.
- **Hiyerarşi** — Kullanıcının gözü, en önemli bilgiye önce gitmelidir. Hiyerarşi; boyut, ağırlık ve konumla kurulur — sadece renkle değil.
- **Kontrast** — Kontrast, dikkat çekmek için değil, anlaşılırlık için kullanılır. Aşırı kontrast, "premium" değil "gürültülü" hissettirir.
- **Radius** — Yuvarlaklık, sistemin tamamında tutarlı bir "kişilik" oluşturur; bir component keskin köşeli, komşusu aşırı yuvarlak olamaz.
- **Shadow** — Gölge, gerçek bir yükseklik ilişkisini temsil eder; dekoratif amaçla kullanılmaz.
- **Grid** — Her yerleşim görünmez bir ızgaraya oturur; hizalama tesadüfi değildir.
- **Whitespace** — Boş alan, tasarımın eksik kısmı değil, kullanıcıya nefes alma alanı tanıyan bilinçli bir karardır.
- **Ritim (Rhythm)** — Tekrar eden boşluk ve boyut ilişkileri, sayfada öngörülebilir bir "nabız" oluşturur.
- **Denge (Balance)** — Görsel ağırlık sayfanın genelinde dengeli dağıtılır; tek bir bölge kalabalıklaşmaz.

## Marka Görsel Dili: Noise → Signal

Markanın imza görsel dilidir ve §1'deki Core Philosophy'nin (Netlik) görsel ifadesidir. Netlik, optik "blur → focus" (bulanıklık, görme duyusuna ait ve klişe) ile **değil**, akustik bir dille anlatılır: dağınık/kaotik dalgaların hizalanıp tek temiz sinyale çözülmesi. Bu dil cihazdan bağımsızdır, erişilebilirdir, zamansızdır ve "kamera/gözlük" değil "işitme" çağrışımı yapar.

> Canonical Source: PRINCIPLES.md §1 Brand DNA (Core Philosophy: Netlik)

- **İlke** — Her akustik öğe *bilgi taşır* (hangi ses kaybolur, cihaz neyi geri getirir); dekoratif değildir. Anlam taşımayan dalga kullanılmaz.
- **Yoğunluk yayı** — Aynı dil, bağlama göre değişen yoğunlukta kullanılır: bazı bölümlerde zengin ama sakin, bazılarında neredeyse görünmez tek çizgi, etkileşimli anlarda tam "gürültü → sinyal" kontrastı, kapanışta tek ve hizalanmış sinyal. Yoğunluk düz bir çizgi değil, koreografili bir eğridir.
- **Kasıtlı sessizlik** — Akustik dil her yerde bulunmaz; bazı bölümler bilinçli olarak sessiz kalır. Sessizlik bir eksiklik değil, sinyalin belirginleşmesi için bırakılan nefestir (bkz. Bölüm 6 Whitespace).
- **Değişmez gramer** — Yoğunluk değişse de sabit kalan öğeler vardır: aynı çizgi/partikül karakteri, tek vurgu rengi (bkz. Bölüm 7), aynı easing (bkz. Bölüm 12) ve her zaman aynı çözünme yönü (gürültü → hizalı sinyal). Aynı gramer, farklı cümle uzunluğu.
- **Erişilebilirlik** — Tüm akustik hareketin `prefers-reduced-motion` karşılığı bulunur (bkz. Bölüm 12); dil, hareket olmadan da statik olarak okunabilir kalır.

---

# 7. Color Philosophy

Renk dekorasyon değil, iletişim aracıdır. Her rengin bir anlamı vardır ve o anlam sistem genelinde asla değişmez.

- **Primary** — Marka kimliğini taşır; birincil eylemleri işaret eder.
- **Success** — Yalnızca gerçekten olumlu bir sonucu bildirir (tamamlandı, onaylandı, aktif).
- **Warning** — Dikkat gerektiren ama kritik olmayan durumları bildirir.
- **Danger** — Geri alınamaz veya kritik durumları bildirir; asla dekoratif kullanılmaz.
- **Surface** — Zemin ve kart renkleri; içeriği taşır, öne çıkmaz.
- **Neutral** — Metin, çizgi ve ikincil bilgiler için kullanılan gri tonları.

## Accent Kullanımı

Vurgu rengi kıt bir kaynak gibi davranılır. Bir ekranda çok fazla vurgulu öğe olursa, hiçbiri vurgulu hissettirmez.

## Koyu Yüzeyler

Sistemde koyu arka planlı bölümler (kurumsal/teknik bağlamları vurgulamak için) kullanılabilir. Koyu bir yüzey kullanıldığında, o yüzeydeki her metin ve ikon, açık yüzeyle aynı okunabilirlik ve kontrast standardını karşılamak zorundadır — koyu zemin, erişilebilirlik standardını düşürmek için bir gerekçe değildir.

## Erişilebilirlik Bağı

Renk seçimleri her zaman Bölüm 17'deki kontrast gereksinimleriyle birlikte değerlendirilir; görsel olarak "doğru" görünen bir renk çifti, kontrast oranını karşılamıyorsa kullanılmaz.

---

# 8. Typography Philosophy

- **Heading** — Hiyerarşi kurar, tarar; okunmaz, taranır. Kısa ve net olmalıdır.
- **Body** — Okunabilirlik önceliklidir; uzun metinler için optimize edilir.
- **Caption** — Destekleyici, ikincil bilgi taşır; asla ana bilgiyi taşımaz.

## Hiyerarşi Kuralı

Başlık seviyeleri arasındaki fark; yalnızca boyutla değil, ağırlık ve boşlukla birlikte kurulur. İki komşu seviye arasındaki fark, göz ile anında ayırt edilebilir olmalıdır.

## Okunabilirlik ve Satır Uzunluğu

Bir satırdaki karakter sayısı, okumayı yorucu hale getirmeyecek bir aralıkta tutulur — ne çok kısa (gözü sık sık satır değiştirmeye zorlayan), ne çok uzun (satır takibini zorlaştıran). PRINCIPLES.md'de tanımlanan yaşlı kullanıcı kitlesi göz önünde bulundurulduğunda, okunabilirlik her zaman yoğunluğa tercih edilir.

---

# 9. Iconography

- Sistemde tek bir ikon dili kullanılır; farklı görsel tarzda ikon setleri birlikte kullanılmaz.
- İkon boyutları, sistemin genel ölçeğine bağlı, sınırlı sayıda kademeden seçilir.
- Aynı ikon, sistemin her yerinde aynı anlama gelir; bir ikon bir bağlamda "kapat", başka bir bağlamda "sil" anlamına gelemez.
- İkonlar tek başlarına anlam taşıyacak şekilde kullanılmaz; işlevsel bir ikon her zaman erişilebilir bir etiketle (görünür metin veya ekran okuyucu için gizli metin) desteklenir.
- Salt dekoratif ikonlar, yardımcı teknolojilerden gizlenir.

---

# 10. Layout Principles

- **Container** — İçerik, ekran genişliğine değil, tanımlı bir maksimum genişliğe oturur; aşırı geniş ekranlarda metin satırları sonsuza uzamaz.
- **Section** — Sayfa, birbirinden net biçimde ayrılan bölümlere ayrılır; her bölümün tek bir amacı vardır.
- **Grid** — Yerleşim, tutarlı bir sütun sistemine dayanır; öğeler gelişigüzel konumlandırılmaz.
- **Spacing** — Bölümler arası boşluk, bölüm içi boşluktan her zaman daha büyüktür — bu fark, gruplamayı gözle okunur kılar.
- **Alignment** — Bir sayfadaki tüm öğeler görünmez ortak hizalama çizgilerini paylaşır.

---

# 11. Responsive Strategy

Sistem **mobil öncelikli (mobile-first)** tasarlanır. Bu bir tercih değil, PRINCIPLES.md'de tanımlanan kullanıcı kitlesinin (büyük oranda telefondan erişen, 40+ yaş grubu ağırlıklı) doğrudan sonucudur.

- Tasarım en dar ekrandan başlar, genişledikçe zenginleşir — tam tersi değil.
- Breakpoint'ler cihaz markalarına göre değil, içeriğin kırılma noktasına göre belirlenir.
- Container genişlikleri, ekran boyutuna göre kademeli olarak büyür; ani sıçramalar yapmaz.
- Dokunmatik hedefler (buton, bağlantı, form kontrolü) her ekran boyutunda rahatça dokunulabilir büyüklükte kalır.
- Masaüstünde fazladan alan, fazladan yoğunluk için değil, fazladan nefes alanı için kullanılır.

---

# 12. Motion Principles

Hareket dekorasyon değildir; kullanıcıya geri bildirim verir, yön gösterir veya bir durum değişikliğini anlaşılır kılar.

- **Amaç** — Her animasyonun cevaplaması gereken bir soru vardır: "Bu hareket kullanıcıya ne anlatıyor?" Cevap yoksa, animasyon kaldırılır.
- **Hover** — Etkileşimli bir öğe, fare üzerine geldiğinde fark edilir ama abartılı olmayan bir tepki verir.
- **Transition** — Durum değişiklikleri (açılma, kapanma, geçiş) her zaman ani değil, yumuşak gerçekleşir.
- **Duration** — Süreler kısa ve tutarlıdır; kullanıcıyı bekletecek kadar uzun animasyon kullanılmaz.
- **Easing** — Hareket doğal ivmelenir ve yavaşlar; mekanik, sabit hızlı hareket kullanılmaz.
- **Motion Azaltma** — Kullanıcının azaltılmış hareket tercihi sistem tarafından saygıyla karşılanır; gerekli olmayan tüm hareket bu tercihte devre dışı kalır.

---

# 13. Component Philosophy

- Her component **tek bir işi** yapar ve onu iyi yapar. Birden fazla sorumluluğu olan bir component, ikiye bölünmelidir.
- Component'ler **bağımsızdır** — bir component, başka bir component'in iç yapısını bilmeden çalışabilmelidir.
- Component'ler **yeniden kullanılabilirdir** — belirli bir sayfaya veya senaryoya kilitlenmez.
- Component'ler **genişletilebilirdir** — yeni bir kullanım senaryosu, çoğu zaman component'i yeniden yazmadan, sunduğu esneklik içinde karşılanabilmelidir.

---

# 14. Atomic Design Rules

Sistem beş net katmandan oluşur ve her katmanın rolü birbirine karışmaz:

- **Atoms** — Bölünemeyen en küçük birimler. İş mantığı taşımaz, yalnızca kendi görünümünden ve davranışından sorumludur.
- **Molecules** — Birkaç Atom'un birlikte tek bir küçük işlevi yerine getirdiği gruplar.
- **Organisms** — Kendi başına anlamlı, tam bir arayüz bölümü oluşturan yapılar.
- **Templates** — Gerçek içerik taşımayan, yalnızca yerleşimi tanımlayan iskeletler.
- **Pages** — Template'lerin gerçek içerikle doldurulmuş, yayına hazır hâli.

## Katman Kuralları

- Bir katman, kendinden düşük bir katmanın işini tekrar icat etmez — var olan bir Atom yeniden yazılmaz, kullanılır.
- Bir katman, kendinden yüksek bir katmanın sorumluluğunu üstlenmez — bir Atom, bir Organism'in yerleşim mantığını içermez.
- Katman atlanabilir (bir Organism doğrudan Atom kullanabilir) ama katman sırası asla tersine çevrilmez.

## Mevcut Durum

Atom katmanı, bu dokümanın yazıldığı tarihte, kendi Pattern Library'siyle birlikte tamamlanmış durumdadır. Molecule, Organism, Template ve Page katmanları bu doküman esas alınarak inşa edilecektir.

---

# 15. Component API Principles

- **Props** — Bir component'in dışa açtığı her prop, sistemin genelinde aynı isimlendirme mantığını izler (ör. boyut, önem derecesi ve durum için aynı kavramsal isimler kullanılır).
- **Variants** — Varyantlar sonlu, tanımlı bir listedir; her yeni ihtiyaç için serbestçe yeni varyant icat edilmez.
- **Slots** — İçerik esnekliği gerektiğinde, sayısız prop eklemek yerine slot/composition tercih edilir.
- **Composition** — Karmaşık arayüzler, tek bir aşırı yapılandırılabilir component yerine, daha küçük component'lerin bir araya gelmesiyle kurulur.
- **Naming** — Prop ve varyant isimleri, ne yaptığını anında anlatır; kısaltma veya belirsiz isim kullanılmaz.
- **Consistency** — Aynı kavram (ör. "boyut", "önem derecesi", "devre dışı") her component'te aynı isimle ifade edilir.
- **Sözleşme İstikrarı** — Yayınlanmış bir component'in dışa açık arayüzü, gerçek bir hata düzeltmesi dışında geriye dönük uyumsuz şekilde değiştirilmez.

---

# 16. State Design Principles

Etkileşimli her component, geçerli olduğu ölçüde aşağıdaki durumların tamamı için tasarlanır:

- **Default** — Temel, dinlenme hâli.
- **Hover** — İşaretçi öğenin üzerindeyken.
- **Focus** — Klavye ile öğeye ulaşıldığında; her zaman görünür olmalıdır.
- **Active/Pressed** — Öğeyle etkileşim anında.
- **Disabled** — Öğe kullanılamaz durumdayken; neden kullanılamadığı, mümkünse ayrıca iletilir.
- **Loading** — Bir işlem sürerken; kullanıcı bekleme süresi boyunca yönlendirilmeden bırakılmaz.
- **Error/Invalid** — Form öğeleri için; hatanın ne olduğu net ifade edilir.
- **Empty** — Veri taşıyan bir component'te veri yokken; boş bir alan yerine anlamlı bir mesaj gösterilir.
- **Success** — Bir işlem başarıyla tamamlandığında.

Durum değişiklikleri yalnızca renkle değil; ikon, metin veya biçimle desteklenerek iletilir — böylece renk körü kullanıcılar da durumu ayırt edebilir.

---

# 17. Accessibility

Erişilebilirlik, sistemin ayrılmaz bir parçasıdır; ayrı bir "iyileştirme aşaması" değildir.

- **WCAG** — Sistem, WCAG 2.1 AA seviyesini asgari standart olarak kabul eder.
- **Keyboard** — Her etkileşimli öğe, yalnızca klavye ile tam olarak kullanılabilir olmalıdır.
- **Focus** — Görünür odak göstergesi hiçbir zaman kaldırılmaz; bir bileşenin varsayılan odak stili değiştiriliyorsa, en az onun kadar görünür bir alternatifle değiştirilir.
- **ARIA** — ARIA, yalnızca semantik HTML yetersiz kaldığında kullanılır; doğru bir HTML etiketinin yerine geçmez.
- **Contrast** — Metin ve arka plan arasındaki kontrast, WCAG AA eşiklerini karşılar.
- **Touch Target** — Dokunmatik hedefler, rahat ve hatasız etkileşim için yeterli büyüklükte tutulur.
- **Motion** — Kullanıcının azaltılmış hareket tercihine uyulur (bkz. Bölüm 12).

---

# 18. UI Content & Microcopy Standards

Bu bölüm, marka sesini değil (bkz. PRINCIPLES.md), arayüz metninin mekanik tutarlılığını yönetir:

- Buton etiketleri fiille başlar ve kısadır ("Gönder", "Devam et" — "Tamam mısınız, göndermek ister misiniz?" değil).
- Aynı işlem, sistemin her yerinde aynı kelimeyle ifade edilir (ör. bir yerde "Kapat", başka yerde "Vazgeç" kullanılmaz).
- Büyük/küçük harf kullanımı (başlık biçimi) sistem genelinde tutarlıdır.
- Hata mesajları; ne yanlış gittiğini ve kullanıcının ne yapması gerektiğini birlikte söyler.
- Boş durum (empty state) mesajları, eksikliği değil bir sonraki adımı vurgular.

---

# 19. Documentation Rules

Her component, aşağıdaki bölümlerin tamamına sahip olmadan tamamlanmış sayılmaz:

- **Purpose** — Component ne için var, hangi problemi çözer.
- **Anatomy** — Component'i oluşturan parçaların tanımı.
- **When to Use** — Doğru kullanım senaryoları.
- **When NOT to Use** — Yanlış kullanım senaryoları ve önerilen alternatif.
- **Props** — Dışa açık her prop'un anlamı ve olası değerleri.
- **Accessibility** — Component'in klavye ve ekran okuyucu davranışı.
- **Examples** — Pattern Library yaklaşımıyla, gerçek ürün senaryolarında kurulmuş örnekler.
- **Notes** — Bilinen sınırlamalar, ilişkili component'ler ve gelecekteki geliştirme notları.

---

# 20. Naming Convention

- **Dosya İsimleri** — Her component kendi klasöründe yaşar; klasör adı ve ana component dosyasının adı birebir aynıdır.
- **Component İsimleri** — PascalCase kullanılır ve component'in ne olduğunu doğrudan anlatır (kısaltma veya belirsiz isim kullanılmaz).
- **CSS Class İsimleri** — Sistemin kendi öneki ile başlar ve component adıyla doğrudan ilişkilidir; iki farklı component aynı sınıf adını paylaşmaz.
- **Variant İsimleri** — Sistem genelinde sabit bir kelime dağarcığından seçilir (ör. boyut için her zaman aynı terim seti kullanılır).
- **Token İsimleri** — Ne olduğunu değil, neyi temsil ettiğini anlatır (ör. bir rengin görünen tonu yerine, taşıdığı anlam isimlendirilir).

---

# 21. Performance Philosophy

- **Minimal DOM** — Bir component, amacını karşılayacak en az sayıda öğeyle kurulur.
- **Az JavaScript** — Statik olarak çözülebilecek hiçbir davranış JavaScript'e taşınmaz; framework'ün sıfır-JS-varsayılan gücünden mümkün olduğunca yararlanılır.
- **Lazy Load** — Görünüm dışındaki ağır medya (görsel, video), ilk yüklemeyi geciktirmeyecek şekilde ele alınır.
- **Semantic HTML** — Doğru HTML etiketi kullanmak, hem performans hem erişilebilirlik hem de daha az kod anlamına gelir; her zaman ilk tercihtir.

---

# 22. AI Development Rules

Yapay zekâ (veya herhangi bir katkı sağlayan), yeni bir component üretirken şu kurallara uymak zorundadır:

- Yeni component, mevcut sistemi bozamaz; var olan bir component'in genel API'sini sessizce değiştiremez.
- Var olan bir pattern, farklı bir isimle veya küçük bir varyasyonla tekrar üretilmez — önce mevcut sistemde arama yapılır.
- Yeni component, Bölüm 14'teki Atomic Design katman kurallarına uyar.
- Yeni component, Bölüm 5'teki token'ları kullanır; hiçbir ham değer elle yazılmaz.
- Yeni component, Bölüm 19'daki dokümantasyon bölümlerinin tamamıyla teslim edilir.
- Yeni component, Bölüm 16'daki durum tasarımı ve Bölüm 17'deki erişilebilirlik standardını karşılar.
- Şüpheli bir durumda (mevcut bir component'e mi ekleme yapılmalı, yoksa yeni bir component mi oluşturulmalı) karar, Bölüm 24'teki büyüme kriterlerine göre verilir.

---

# 23. Quality Checklist

Bir component, aşağıdaki kriterlerin tamamını karşılamadan tamamlanmış kabul edilmez:

- Derleme (build) hatasız tamamlanıyor.
- Tip (TypeScript) hatası yok.
- Kullanılmayan import veya ölü kod yok.
- Bölüm 20'deki isimlendirme kurallarına uyuyor.
- Bölüm 15'teki API prensiplerine uyuyor.
- Bölüm 5'teki token'lar kullanılıyor, hiçbir ham değer elle yazılmamış.
- Bölüm 16'daki tüm geçerli durumlar (hover, focus, disabled, loading, error, empty vb.) tasarlanmış.
- Bölüm 17'deki erişilebilirlik standardını karşılıyor (klavye, odak, kontrast, ARIA).
- Bölüm 11'deki responsive stratejisine uyuyor.
- Bölüm 19'daki dokümantasyon bölümlerinin tamamı mevcut.
- Sistemde aynı işlevi gören başka bir component veya pattern ile çakışmıyor, onu tekrar etmiyor.

---

# 24. Design System Governance

## Sistem Nasıl Büyür

Yeni bir component; "olabilir" ya da "ileride lazım olur" düşüncesiyle değil, gerçek ve tekrar eden bir ihtiyaçla eklenir. Bir ihtiyaç iki veya daha fazla farklı bağlamda ortaya çıkıyorsa, bu bir component adayıdır.

## Ne Zaman Yeni Component, Ne Zaman Güncelleme

Var olan bir component'in kapsamına giren bir ihtiyaç, yeni bir component olarak değil, mevcut component'in varyantı veya prop'u olarak karşılanır. Yeni bir component yalnızca, var olan hiçbir component'in sorumluluk alanına makul şekilde girmeyen bir ihtiyaç ortaya çıktığında oluşturulur.

## Breaking Change Yönetimi

Yayınlanmış bir component'in genel arayüzünü (API'sini) geriye dönük uyumsuz şekilde değiştirmek son çaredir. Gerekli olduğunda: değişikliğin nedeni gerçek bir hata veya erişilebilirlik sorunu olmalı, değişiklik açıkça işaretlenmeli ve etkilenen tüm kullanım noktaları aynı geçişte güncellenmelidir. Sessiz, fark edilmeyen breaking change kabul edilmez.

## İnceleme

Sisteme eklenen her component, yayınlanmadan önce Bölüm 23'teki Quality Checklist'in tamamından geçer.

---

---

# 25. Component Lifecycle

Her component, sistemde aşağıdaki yaşam döngüsünü takip eder. Bu süreç; kaliteyi, tutarlılığı ve uzun vadeli sürdürülebilirliği korumak için zorunludur.

## 1. Idea

Yeni bir ihtiyaç tanımlanır.

Bu aşamada ilk soru şudur:

> Gerçekten yeni bir component'e ihtiyaç var mı?

Mevcut component'ler, variant'lar veya prop'lar ihtiyacı karşılıyorsa yeni component oluşturulmaz.

---

## 2. Validation

İhtiyacın en az iki farklı kullanım senaryosunda tekrar ettiği doğrulanır.

Tek bir sayfa veya tek bir özel durum için component oluşturulmaz.

---

## 3. Design

Component'in;

- amacı,
- sorumluluğu,
- Atomic Design katmanı,
- API yaklaşımı,
- varyantları,
- durumları,
- erişilebilirlik gereksinimleri

tasarlanır.

Bu aşamada görsel tasarım, mevcut Design System diliyle tamamen uyumlu olmalıdır.

---

## 4. Implementation

Component geliştirilir.

Geliştirme sırasında;

- mevcut token'lar kullanılır,
- mevcut pattern'ler korunur,
- gereksiz DOM oluşturulmaz,
- erişilebilirlik standartlarından taviz verilmez.

---

## 5. Documentation

Component, Pattern Library içerisinde belgelenir.

Dokümantasyon en az şu bölümleri içerir:

- Purpose
- Anatomy
- When to Use
- When NOT to Use
- Props
- Accessibility
- Examples
- Notes

Dokümantasyonu olmayan bir component tamamlanmış kabul edilmez.

---

## 6. Review

Component aşağıdaki açılardan incelenir:

- Design Review
- Accessibility Review
- API Review
- Performance Review
- Naming Review
- Documentation Review

Kalite kontrolünden geçmeyen component yayınlanmaz.

---

## 7. Production

Component artık sistemin resmi bir parçasıdır.

Bu aşamadan sonra API kararlılığı korunur ve geriye dönük uyumluluk esas alınır.

---

## 8. Maintenance

Component düzenli olarak gözden geçirilir.

Yeni ihtiyaçlar mümkün olduğunca:

- variant,
- prop,
- composition

yaklaşımıyla karşılanır.

Component'in temel sorumluluğu değiştirilmez.

---

## 9. Deprecation

Bir component artık önerilmiyorsa doğrudan silinmez.

Önce "Deprecated" olarak işaretlenir.

Alternatif component açıkça belirtilir.

Geçiş süreci tamamlanmadan kaldırılmaz.

---

## 10. Removal

Component yalnızca;

- yerine daha doğru bir çözüm geldiğinde,
- kullanım noktaları tamamen kaldırıldığında,
- sistemde gereksiz tekrar oluşturduğunda

kaldırılabilir.

Hiçbir component sessizce silinmez.

Her kaldırma işlemi belgelenmeli ve sistem genelinde etkileri değerlendirilmelidir.

---

---

# 26. Component Decision Tree

Yeni bir component oluşturmadan önce, aşağıdaki karar süreci eksiksiz uygulanmalıdır.

Bu süreç; sistemin gereksiz büyümesini, aynı problemi çözen birden fazla component oluşmasını ve Design System'in zamanla tutarsız hale gelmesini önlemek için zorunludur.

## Decision Flow

### 1. İhtiyaç gerçekten yeni mi?

Öncelikle çözülmesi gereken problem net olarak tanımlanır.

Yeni bir component hiçbir zaman yalnızca "farklı görünsün" diye oluşturulmaz.

↓

### 2. Sistemde aynı problemi çözen bir component var mı?

**Evet**

→ Mevcut component kullanılır.

Yeni component oluşturulmaz.

**Hayır**

↓

### 3. Bu ihtiyaç mevcut component'in bir Variant'ı olabilir mi?

Görsel farklılık dışında aynı davranışı gösteriyorsa,

yeni component yerine Variant eklenir.

**Evet**

→ Variant oluştur.

**Hayır**

↓

### 4. Bu ihtiyaç yeni bir Prop ile çözülebilir mi?

Davranış aynı kalıyor ancak küçük bir esneklik gerekiyorsa,

API genişletilir.

**Evet**

→ Prop ekle.

**Hayır**

↓

### 5. Composition ile çözülebilir mi?

Mevcut Atom, Molecule veya Organism'lerin birlikte kullanılması problemi çözüyorsa,

yeni component oluşturulmaz.

**Evet**

→ Composition kullan.

**Hayır**

↓

### 6. Yeni Component oluştur.

Yalnızca önceki tüm adımlar yetersiz kaldığında yeni bir component oluşturulabilir.

Yeni component;

- tek bir sorumluluğa sahip olmalı,
- mevcut Design Language'e uymalı,
- Atomic Design kurallarını takip etmeli,
- mevcut Token sistemini kullanmalı,
- Documentation Rules bölümünü eksiksiz karşılamalıdır.

---

## Decision Principles

Yeni bir component oluşturmak her zaman **son seçenek** olmalıdır.

Öncelik sırası değişmez:

1. Mevcut Component'i Kullan
2. Variant Ekle
3. Prop Ekle
4. Composition Kullan
5. Yeni Component Oluştur

Bu sıra hiçbir koşulda tersine çevrilmez.

---

## AI Decision Rule

Yapay zekâ tarafından geliştirilen her yeni component de aynı karar sürecini uygulamak zorundadır.

AI;

- mevcut component'leri araştırmadan,
- mevcut Variant'ları incelemeden,
- mevcut API'yi değerlendirmeden,
- Composition olasılığını kontrol etmeden

yeni bir component oluşturamaz.

Şüphe durumunda varsayılan karar **yeni component oluşturmamak** olmalıdır.

---

# 27. Doküman Otoritesi

Bu doküman, COMPANY.md ve PRINCIPLES.md ile eşdeğer bağlayıcılığa sahiptir. Üçü birlikte projenin tam referans katmanını oluşturur: COMPANY.md gerçekleri, PRINCIPLES.md davranışı, bu doküman ise yapıyı ve görsel sistemi yönetir.

Bu doküman, projede zaten inşa edilmiş olan mimariyi (Astro, Atomic Design, kendi klasöründe her component, Pattern Library yaklaşımı) doğrular ve ileriye taşır — geriye dönük olarak var olan Atom katmanını geçersiz kılmaz. Sistem büyüdükçe bu doküman da güncellenir; ancak güncelleme yapılmadığı sürece burada yazılan kurallar bağlayıcıdır.
