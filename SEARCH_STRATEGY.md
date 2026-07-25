# SEARCH_STRATEGY.md

> Proje dört temel referans doküman üzerine kuruludur:
>
> **COMPANY.md** — *Kimiz?* Şirketi ve markayı tanımlar.
>
> **PRINCIPLES.md** — *Nasıl konuşuruz ve nasıl davranırız?* Marka dilini, UX felsefesini, içerik ve güven kurallarını tanımlar.
>
> **DESIGN_SYSTEM_GUIDE.md** — *Nasıl inşa ederiz?* Tasarım sistemini ve component mimarisini tanımlar.
>
> **SEARCH_STRATEGY.md** (bu doküman) — *Nasıl bulunuruz ve nasıl güvenilir kaynak gösteriliriz?* Arama motorları, cevap motorları (AI Overview, AI Mode) ve üretken yapay zekâ sistemleri (ChatGPT, Gemini, Claude, Copilot, Perplexity) tarafından nasıl keşfedildiğimizi, anlaşıldığımızı ve kaynak gösterildiğimizi yönetir.
>
> Bu doküman kod içermez, schema kodu içermez, HTML içermez, CSS içermez. Yalnızca strateji ve ilkeleri tanımlar. İleride üretilecek her sayfa, her landing page, her blog yazısı, her marka sayfası, her şehir sayfası ve yapay zekâ tarafından üretilecek her içerik bu dokümana uymak zorundadır.

---

# 1. Önsöz

## Amaç

Bu doküman, Eniyicihaz.com'un yalnızca arama motorlarında değil; Google AI Overview, Google AI Mode, ChatGPT, Gemini, Claude, Microsoft Copilot, Perplexity ve bugün henüz var olmayan gelecekteki arama/cevap sistemlerinde de Türkiye'nin işitme sağlığı konusundaki en güvenilir referans kaynağı olarak tanınmasını sağlayacak stratejiyi tanımlar.

## Diğer Dokümanlarla İlişki

| Doküman | Soru | Yetki Alanı |
|---|---|---|
| COMPANY.md | Kimiz? | Şirket ve marka gerçekleri |
| PRINCIPLES.md | Neden + nasıl davranırız? | Brand DNA, ton, UX felsefesi, içerik, güven, CTA |
| DESIGN_SYSTEM_GUIDE.md | Nasıl inşa ederiz? | Görsel sistem, marka görsel dili, component mimarisi |
| SEARCH_STRATEGY.md | Nasıl bulunuruz? | Arama, cevap motoru ve AI görünürlüğü |

Bu doküman, PRINCIPLES.md'nin içerik ve ton kurallarını, DESIGN_SYSTEM_GUIDE.md'nin yapı kurallarını çiğnemez — onların üzerine, "bu doğru şekilde üretilen içerik nasıl keşfedilir ve kaynak gösterilir" katmanını ekler.

Bu doküman hiçbir marka felsefesini (amaç, vaat, güven, ton, kişilik) yeniden tanımlamaz; bu kavramlara yalnızca referansla bağlanır. Bir kavramın kaynağına işaret ederken `> Canonical Source: <DOSYA> §<no> <başlık>` biçimi kullanılır (bkz. PRINCIPLES.md §14 Doküman Otoritesi).

## Yetki Alanı

Bu doküman; içerik mimarisi, entity stratejisi, arama niyeti hizalaması, yapısal veri stratejisi (kavramsal düzeyde), yerel arama stratejisi ve AI görünürlük stratejisi konularında bağlayıcıdır. Belirli bir anahtar kelime listesi, sıralama hedefi veya araç önerisi içermez — bunlar zamanla değişir; bu doküman değişmeyen ilkeleri tanımlar.

## Dayanıklılık İlkesi

Arama motorlarının arayüzleri, yapay zekâ ürünlerinin isimleri ve özellikleri zamanla değişecektir. Bu doküman, belirli bir ürünün bugünkü davranışına değil; bilgiyi doğrulamak, güvenilirliği ölçmek ve en iyi cevabı yüzeye çıkarmak isteyen her sistemin **değişmeyen ortak mantığına** dayanır. Bu nedenle doküman boyunca "şu an Google şunu yapıyor" değil, "bir sistem neden bu içeriği güvenilir bulur" sorusu esas alınır.

---

# 2. Search Philosophy

Üç farklı taraf, aynı sayfaya farklı beklentilerle gelir — ama nihayetinde hepsi aynı şeyi arar.

- **Arama motorlarının amacı** — Kullanıcının sorgusuna en alakalı, en güvenilir ve en eksiksiz cevabı veren kaynağı yüzeye çıkarmak.
- **İnsanların amacı** — Sorusuna hızlı, doğru ve anlaşılır bir cevap bulmak; kandırılmadığından emin olmak.
- **Yapay zekâların amacı** — Bir soruyu yanıtlarken, dayanabileceği; çelişkisiz, açık, kaynağı belli, kendi içinde tutarlı bir bilgi birimi bulmak.

## Ortak Nokta

Üç tarafın da aradığı şey aslında aynıdır: **gerçek uzmanlık + netlik + doğrulanabilirlik.** Bir içerik bu üçünü taşıyorsa, hem insan hem arama motoru hem de yapay zekâ tarafından tercih edilir. Strateji, üç ayrı taraf için üç ayrı içerik üretmek değil; bu ortak noktayı en güçlü şekilde karşılayan **tek bir içerik** üretmektir.

---

# 3. SEO Philosophy

- **Keyword yerine Topic** — İçerik, tek bir anahtar kelimeye değil, kullanıcının gerçekte anlamak istediği konuya göre kurulur. Bir konu, o konuyla ilgili sorulabilecek her makul soruyu kapsayacak derinlikte ele alınır.
- **Authority** — Bir sayfanın gücü, ne kadar çok kelime içerdiğinden değil, o konuda ne kadar güvenilir ve eksiksiz olduğundan gelir.
- **E-E-A-T** — Deneyim (Experience), Uzmanlık (Expertise), Yetkinlik (Authoritativeness) ve Güven (Trust) her içerik kararının arka planındaki dört süzgeçtir (bkz. Bölüm 13).
- **Semantic Search** — Modern arama, kelime eşleşmesi değil, anlam eşleşmesi üzerinden çalışır. İçerik, tam ifadeyi tekrarlamak yerine konuyu gerçekten açıklar.
- **Search Intent** — İçerik, kullanıcının o an neyi başarmaya çalıştığına göre şekillenir (bkz. Bölüm 7).

---

# 4. Entity Strategy

## Entity Nedir

Bir entity; bir isim, kavram veya nesne olarak arama ve yapay zekâ sistemleri tarafından tek, tanımlı bir "şey" olarak tanınan varlıktır. Arama motorları ve yapay zekâlar artık kelime dizileri değil, entity'ler ve aralarındaki ilişkiler üzerinden düşünür.

## Bu Projedeki Ana Entity'ler

- **Eniyicihaz.com** — dijital bilgi platformu / birincil marka.
- **Avrasya İşitme** — gerçek işletme, SGK anlaşmalı işitme merkezi.
- **İşitme Kaybı** — konu/kavram entity'si.
- **İşitme Cihazı** — ürün kategorisi entity'si (kulak arkası, kulak içi, şarjlı, Bluetooth gibi alt entity'lerle).
- **SGK** — kurum entity'si, hizmetle ilişkilendirilir.
- **Çalışılan markalar** (Signia, Oticon, Phonak, Widex, ReSound vb.) — üretici entity'leri.
- **Hizmet bölgeleri** (Darıca, Kocaeli ve COMPANY.md'de tanımlı diğer bölgeler) — yer entity'leri.
- **Hizmetler** (işitme testi, cihaz uygulaması, teknik servis, SGK danışmanlığı) — hizmet entity'leri.

## Entity Tutarlılığı Kuralı

Her entity, sitenin her yerinde **aynı isimle, aynı tanımla ve aynı ilişkiyle** anılır. Bir entity bir sayfada "Avrasya İşitme Cihazları", başka bir sayfada "Avrasya Hearing" gibi farklı biçimlerde geçemez. Tutarsızlık, bir arama veya yapay zekâ sisteminin iki farklı entity'yle karşı karşıya olduğunu sanmasına yol açar — bu, güvenilirliği doğrudan zedeler.

---

# 5. Knowledge Graph & Semantic Relationships

Bir bilgi grafiği, entity'lerin birbirine nasıl bağlı olduğunu tanımlar. Bu bölüm kod veya şema içermez; yalnızca **ilişkilerin kavramsal modelini** tanımlar.

## Temel İlişki Cümleleri

Aşağıdaki ilişkiler, site genelinde tutarlı ve değişmeyen şekilde ifade edilir:

- Eniyicihaz.com, Avrasya İşitme'nin dijital bilgi platformudur.
- Avrasya İşitme, SGK anlaşmalı bir işitme merkezidir.
- İşitme cihazı, işitme kaybı yaşayan bireyler için kullanılan bir çözümdür.
- Her hizmet, belirli bir hizmet bölgesinde sunulur.
- Her ürün grubu, belirli üretici markalarla ilişkilidir.

## Kural

Bir ilişki bir kez doğru şekilde kurulduktan sonra, sitenin hiçbir yerinde bu ilişkiyle çelişen bir ifade kullanılmaz. Tutarlı, tekrar eden ilişki cümleleri; arama motorlarının ve yapay zekâların markayı doğru bir bilgi grafiğine yerleştirmesini sağlayan en güçlü sinyaldir.

---

# 6. Topical Authority & Content Architecture

## Hub / Pillar / Cluster Modeli

- **Hub (Pillar) İçerik** — Bir ana konuyu (ör. "İşitme Kaybı") geniş ve eksiksiz şekilde ele alan kapsamlı sayfa.
- **Cluster (Destekleyici) İçerik** — Hub'ın alt konularını (ör. "Yaşlılıkta işitme kaybı", "Çocuklarda işitme kaybı") derinlemesine işleyen sayfalar.
- **Kural** — Her cluster içerik, ilgili hub'a bağlanır; her hub, kendi cluster'larına bağlanır. Bir konu asla sahipsiz veya izole bırakılmaz.

## Tekil İçerik İskeleti

Her içerik parçası, aşağıdaki iskelete uyar:

- **Başlık Yapısı** — Sayfanın ana konusunu net ve tek anlamlı şekilde ifade eder.
- **Alt Başlık Yapısı** — İçerik, kullanıcının sorabileceği alt sorulara göre mantıksal bölümlere ayrılır.
- **Özet** — Uzun içeriklerde, sayfanın en başında veya sonunda konunun özü tek bir bölümde toplanır.
- **FAQ** — Konuyla doğrudan ilgili, gerçek kullanıcı sorularına dayanan soru-cevap blokları eklenir (bkz. Bölüm 8).
- **Karşılaştırmalar ve Tablolar** — Karşılaştırılabilir bilgi (ör. cihaz tipleri), düz metin yerine yapılandırılmış tablo veya liste ile sunulur.
- **CTA** — Sayfa sonunda, PRINCIPLES.md'nin CTA sisteminde tanımlanan üç katmandan (Bilgi / Uzman / Cihaz-Avrasya) sayfa tipine uygun olanı yer alır.
- **Internal Link** — İlgili hub ve cluster içeriklere doğal, bağlamsal bağlantılar verilir.
- **External Reference** — Tıbbi veya teknik bir iddia yapıldığında, mümkünse güvenilir, doğrulanabilir bir dış kaynağa atıf yapılır.

---

# 7. Search Intent Strategy

| Niyet | Kullanıcının Amacı | İçerik Stratejisi |
|---|---|---|
| **Informational** | Bir konuyu anlamak istiyor | Derinlemesine açıklayıcı içerik, Bilgi CTA |
| **Commercial Investigation** | Seçenekleri karşılaştırıyor | Karşılaştırma, tablo, kriter bazlı rehber içerik, Uzman CTA |
| **Navigational** | Markayı veya belirli bir sayfayı arıyor | Net, hızlı erişilebilir marka/hizmet sayfaları |
| **Transactional** | Harekete geçmeye hazır (randevu, iletişim) | Net ve sürtünmesiz iletişim akışı, Uzman ve Cihaz-Avrasya CTA |

Her sayfa, hangi niyete hizmet ettiğini bilerek tasarlanır; tek bir sayfa dört niyete birden hizmet etmeye çalışmaz.

---

# 8. AEO Strategy — Answer Engine Optimization

Cevap motorları (Google AI Overview, AI Mode ve benzerleri), bir sayfanın tamamını değil, doğrudan çıkarılabilir bir cevap birimini ödüllendirir. İçerik, aşağıdaki kalıplardan uygun olanlarla desteklenir:

- **Definition (Tanım)** — Bir kavram, ilk geçtiği yerde tek, net ve kendi başına anlaşılır bir cümleyle tanımlanır.
- **Comparison (Karşılaştırma)** — İki veya daha fazla seçenek, aynı kriterler üzerinden yan yana ele alınır.
- **Question Answering / FAQ** — Gerçek kullanıcı sorusu, doğrudan ve tam cümleyle cevaplanır; cevap, sorunun hemen altında bağımsız olarak anlaşılabilir.
- **HowTo / Adım Adım** — Bir süreç, sıralı ve numaralandırılmış adımlarla anlatılır.
- **Checklist** — Kontrol edilmesi gereken maddeler, taranabilir bir liste olarak sunulur.
- **Table** — Karşılaştırılabilir veya kategorik bilgi, düz yazı yerine tablo yapısında sunulur.

## Kural

Bir kalıp, yalnızca gerçekten o soruyu cevaplıyorsa kullanılır. Cevap motoru optimizasyonu, mevcut olmayan bir soruyu icat etmek değil; gerçek soruları en çıkarılabilir biçimde cevaplamaktır.

---

# 9. GEO & AI Citation Strategy

Üretken yapay zekâ sistemleri (ChatGPT, Gemini, Claude, Copilot, Perplexity), bir cevap üretirken güvenebileceği kaynakları seçer. Bir sayfanın kaynak gösterilme olasılığını artıran, zamana dayanıklı özellikler şunlardır:

- **Kendi Başına Yeterli Cevap Birimleri** — Bir paragraf veya bölüm, sayfanın geri kalanına ihtiyaç duymadan tek başına doğru ve eksiksiz bir cevap sunar.
- **Doğrulanabilir Spesifiklik** — Belirsiz üstünlük iddiaları yerine somut, doğrulanabilir bilgi kullanılır.
  > Canonical Source: PRINCIPLES.md §5 İçerik Bütünlüğü ve İddia Politikası
- **Entity Tutarlılığı** — Aynı entity, aynı isim ve tanımla anılır (bkz. Bölüm 4); bu, bir yapay zekânın bilgiyi doğru varlığa bağlamasını kolaylaştırır.
- **Yapısal Çıkarılabilirlik** — Bilgi; net başlıklar, kısa paragraflar, listeler ve tablolarla, bir makine tarafından kolayca ayrıştırılabilir şekilde sunulur.
- **Çelişkisizlik** — Aynı gerçek (adres, hizmet, marka ilişkisi), sitenin hiçbir yerinde bir diğeriyle çelişmez. Yapay zekâ sistemleri, çelişkili bilgi taşıyan kaynaklara daha az güvenir.
- **Güncellik ve Doğruluk Sinyali** — İçerik doğru kaldığı sürece değerlidir; yanlış veya eskimiş bilgi fark edildiğinde güncellenir (bkz. Bölüm 19).

## Neden Kaynak Gösterilir

Bir yapay zekâ sistemi bir sayfayı, "bu bilgi açık, doğrulanabilir, çelişkisiz ve konunun gerçek bir uzmanından geliyor" sinyalini aldığında kaynak gösterir. Strateji budur — belirli bir aracı "kandırmak" değil, her sistemin aradığı bu temel güven sinyalini gerçekten karşılamaktır.

---

# 10. Local SEO Strategy

Bu, işletmenin fiziksel hizmet bölgesi olan bir yerel işletme için **en kritik** stratejidir.

## Hizmet Bölgesi

Merkez ve öncelikli hizmet bölgeleri, çalışılan iller ve ilçeler için COMPANY.md tek doğruluk kaynağıdır. Bu doküman kendi şehir listesini üretmez veya tekrar etmez — hangi bölgenin resmi hizmet alanı olduğu her zaman COMPANY.md'den okunur; bu, iki dokümanın zamanla birbirinden farklılaşmasını (drift) engeller.

## Hub-Şehir Modeli

Merkez konum (COMPANY.md'de tanımlı) bir "hub" olarak ele alınır; çevresindeki öncelikli hizmet bölgeleri bu hub'a bağlı, ona atıfta bulunan destekleyici içerikler olarak kurulur. Her bölge sayfası, o bölgeye özgü gerçek bilgi taşır — aynı içeriğin yalnızca şehir adı değiştirilerek çoğaltılması (bkz. Bölüm 16, Duplicate Content) kesinlikle yapılmaz.

## NAP Tutarlılığı

İsim (Name), Adres (Address) ve Telefon (Phone) bilgisi; sitenin her sayfasında, Google Business Profile'da ve her dış platformda **birebir aynı biçimde** yer alır. Kısaltma, farklı yazım veya farklı format kullanılmaz.

## Google Business Profile Hizalaması

İşletme profili bilgileri (kategori, hizmet alanı, çalışma saatleri, iletişim) site içeriğiyle her zaman birebir örtüşür; hiçbir kanalda çelişen bilgi bulunmaz.

## Konum Sinyalleri

Hizmet bölgesi, yalnızca bir sayfa başlığında değil; içerik içinde doğal biçimde, gerçek bağlamla (ör. "Darıca ve çevresinde hizmet veriyoruz" gibi doğal bir cümlede) tekrarlanır — konum adının yapay biçimde metne sıkıştırılması (keyword stuffing, bkz. Bölüm 16) uygulanmaz.

---

# 11. Structured Data Strategy

Bu bölüm hiçbir şema kodu içermez; yalnızca **hangi sayfa tipinin hangi yapısal veri kavramıyla eşleştiğini** tanımlar.

| Sayfa Tipi | Kavramsal Şema Yönü |
|---|---|
| Kurumsal / Ana Sayfa | Organizasyon kimliği (marka ilişkisi, iletişim bilgisi) |
| Şube / Hizmet Bölgesi Sayfası | Yerel işletme kimliği (adres, çalışma saatleri, hizmet alanı) |
| Ürün / Cihaz Sayfası | Ürün kimliği — **fiyat veya teklif bilgisi asla eklenmez** (bkz. COMPANY.md ve PRINCIPLES.md, fiyat yasağı) |
| Bilgi / Rehber İçerik | Makale kimliği (yazar, konu, güncellenme bağlamı) |
| Soru-Cevap Blokları | Soru-cevap kimliği, yalnızca sayfada gerçekten görünen sorular için |
| Adım Adım İçerik | Süreç/adım kimliği |
| Site Navigasyonu | Sayfa hiyerarşisi kimliği (breadcrumb) |

## Kural

Yapısal veri, sayfada zaten görünür olan bilgiyi makinelere açıklar — sayfada olmayan veya kullanıcının görmediği bir bilgiyi asla temsil etmez. Fiyat, garanti oranı veya doğrulanmamış herhangi bir sayısal veri, yapısal veri katmanında da üretilmez.

---

# 12. Media SEO

## Görsel

- Dosya adları, görselin ne olduğunu betimler; anlamsız kodlar (ör. rastgele sayı dizileri) kullanılmaz.
- Her görsel, içeriğini gerçekten anlatan bir alternatif metne (alt text) sahiptir; alt text anahtar kelime doldurmak için kullanılmaz.
- Görsel altyazıları (caption), görselin bağlamını ve varsa ilgili entity'yi (ör. ürün adı, bölge adı) doğal dille belirtir.
- Modern, verimli görsel formatları tercih edilir; büyük, optimize edilmemiş dosyalar kullanılmaz.

## Video

- Video, yalnızca metnin yeterince iyi anlatamayacağı bir konu (ör. bir cihazın kullanımı, bir sürecin gösterimi) için kullanılır.
- Her video, yazılı bir transkript veya özetle desteklenir — bu hem erişilebilirlik hem de yapay zekâ sistemlerinin videoyu "okuyabilmesi" için gereklidir.
- Video başlığı ve açıklaması, ilgili entity ve konuyla tutarlıdır; tıklama tuzağı (clickbait) başlık kullanılmaz.
- Video, ilgili yazılı içerikle (hub veya cluster sayfa) karşılıklı bağlantılıdır; izole bırakılmaz.

---

# 13. E-E-A-T & Trust Signals

COMPANY.md'de tanımlı gerçek kimlik bilgileri, arama ve yapay zekâ sistemlerinin doğrudan algılayabileceği sinyallere çevrilir:

- **Experience (Deneyim)** — 2009'dan beri süren gerçek faaliyet, somut ve tutarlı biçimde belirtilir.
- **Expertise (Uzmanlık)** — Odyometrist/odyolog yetkinliği ve teknik bilgi, içerik kalitesiyle birlikte gösterilir.
- **Authoritativeness (Yetkinlik)** — SGK anlaşmalı statü, çalışılan üretici markaları ve sektördeki konum açıkça belirtilir.
- **Trust (Güven)** — Tutarlı NAP bilgisi, gerçek ekip görselleri, doğrulanabilir iletişim kanalları ve şeffaf içerik politikası.
  > Canonical Source: PRINCIPLES.md §7 Güven Oluşturma Mekanizmaları

Bu dört sinyal, tek bir sayfada değil; sitenin tamamında tutarlı biçimde tekrar eder. E-E-A-T bir "bölüm" değil, her sayfanın arka planında çalışan bir standarttır. Markanın merkez duygusu olan Güven'in kaynağı için: Canonical Source: PRINCIPLES.md §1 Brand DNA.

---

# 14. Technical Performance & Crawlability

Bu bölüm, arama ve yapay zekâ sistemlerinin siteyi **bulabilmesi ve doğru okuyabilmesi** ile ilgilidir; bileşen düzeyinde performans standartları DESIGN_SYSTEM_GUIDE.md'nin "Performance Philosophy" bölümünde tanımlıdır ve burada tekrar edilmez.

- **Indexability** — Her önemli sayfa, arama motorları tarafından dizinlenebilir durumda tutulur; yanlışlıkla dizin dışı bırakılan sayfa olmaz.
- **Crawlability** — Site yapısı, bir tarama botunun her önemli sayfaya makul sayıda adımda ulaşabileceği şekilde kurulur.
- **Site Speed** — Yavaş yüklenen sayfalar hem kullanıcı hem de arama motoru tarafından cezalandırılır; hız, bir "ekstra" değil temel gerekliliktir.
- **Semantic HTML** — Doğru anlamsal yapı (başlık, liste, tablo, bağlantı), içeriğin makineler tarafından doğru yorumlanmasının temelidir.
- **Temiz URL Yapısı** — URL'ler, sayfanın konusunu insan tarafından okunabilir şekilde yansıtır; anlamsız parametre yığınları taşımaz.

---

# 15. Internal Linking Strategy

- **Hub-and-Spoke** — Her hub içerik kendi cluster'larına, her cluster kendi hub'ına bağlanır (bkz. Bölüm 6).
- **Breadcrumb** — Kullanıcı ve arama motoru, her sayfanın site hiyerarşisindeki yerini net biçimde görür.
- **İlgili İçerikler** — Bir sayfanın sonunda, gerçekten ilgili olan diğer içeriklere doğal bağlantılar sunulur; alakasız içerik zorla bağlanmaz.
- **Authority Flow** — Otorite, güçlü hub sayfalardan destekleyici sayfalara ve geri akar; hiçbir güçlü sayfa, gereksiz dış veya alakasız bağlantılarla zayıflatılmaz.

---

# 16. SEO Anti-Patterns

Aşağıdakiler, hiçbir koşulda, hiçbir sayfada uygulanmaz:

- **Keyword Stuffing** — Bir kelimenin doğal olmayan sıklıkta tekrarlanması.
- **Doorway Pages** — Yalnızca arama motorunu yönlendirmek için var olan, gerçek değer taşımayan sayfalar.
- **Thin Content** — Konuyu gerçekten karşılamayan, yüzeysel içerik.
- **Duplicate Content** — Aynı içeriğin küçük değişikliklerle birden fazla sayfada tekrarlanması (özellikle bölge sayfalarında, bkz. Bölüm 10).
- **Parasite SEO** — Otoriteyi üçüncü taraf platformlar üzerinden yapay şekilde ödünç almaya çalışmak.
- **AI Spam** — Yapay zekâ ile kitlesel, denetimsiz, değersiz içerik üretimi.
- **Fake Reviews** — Gerçek olmayan yorum veya değerlendirme (bkz. PRINCIPLES.md, Güven Oluşturma Mekanizmaları).
- **Clickbait** — Gerçek içerikle örtüşmeyen, yalnızca tıklama almak için abartılmış başlık.
- **Manipülatif SEO** — Kullanıcıyı değil, yalnızca algoritmayı hedefleyen herhangi bir teknik.

Bu liste, PRINCIPLES.md'nin yasaklı ifadeler politikasının arama/AI görünürlüğü bağlamındaki uzantısıdır.

---

# 17. AI Content Generation Rules

Arama ve AI görünürlüğüne yönelik içerik üretiminde, yapay zekâ (veya herhangi bir katkı sağlayan) şu kurallara uyar:

- **Uydurma yasaktır.** İstatistik, oran, ödül, kullanıcı sayısı veya herhangi bir doğrulanmamış veri üretilmez (bkz. PRINCIPLES.md, İçerik Bütünlüğü ve İddia Politikası).
- **Kaynak zorunludur.** Tıbbi veya teknik bir iddia, doğrulanabilir bir kaynağa veya COMPANY.md'deki bir gerçeğe dayanmıyorsa yazılmaz.
- **Karşılaştırma yalnızca tarafsız yapılabilir.** Rakip marka veya ürün küçümsenmez; karşılaştırma, ölçülebilir ve doğrulanabilir kriterlere dayanır.
- **Entity ve ilişki tutarlılığı korunur.** Bölüm 4 ve 5'te tanımlanan isimlendirme ve ilişkiler hiçbir içerikte bozulmaz.
- **Şema önerisi kavramsal kalır.** Yapay zekâ, bir sayfa için hangi yapısal veri kavramının uygun olduğunu önerebilir (bkz. Bölüm 11) ama gerçek şema kodu bu doküman kapsamında üretilmez.

---

# 18. Search Quality Checklist

Yeni oluşturulan her sayfa, yayınlanmadan önce aşağıdakilerin tamamını karşılar:

- Sayfanın hizmet ettiği arama niyeti (Bölüm 7) nettir.
- Sayfa, bir hub veya cluster içinde konumlandırılmıştır (Bölüm 6); sahipsiz değildir.
- Kullanılan her entity, sitenin geri kalanıyla tutarlı isimlendirilmiştir (Bölüm 4).
- İçerik, en az bir AEO kalıbını (tanım, karşılaştırma, FAQ, adım adım, tablo) gerçek bir ihtiyaçtan doğru şekilde kullanır (Bölüm 8).
- Hiçbir cümle Bölüm 16'daki anti-pattern'lerden birine girmez.
- Görsel ve varsa video, Bölüm 12'deki standarda uyar.
- Sayfa sonunda PRINCIPLES.md'nin CTA sistemine uygun, doğal bir yönlendirme vardır.
- Sayfa, ilgili iç bağlantılarla (Bölüm 15) bağlanmıştır.
- Sayfada hiçbir fiyat, garanti oranı veya uydurma veri yoktur.
- Sayfa mobil öncelikli ve erişilebilir yapıdadır (bkz. DESIGN_SYSTEM_GUIDE.md).

---

# 19. Search Governance

## Yeni Konu Ne Zaman Açılır

Yeni bir konu; gerçek ve tekrar eden bir kullanıcı sorusu veya ihtiyacı ortaya çıktığında açılır — yalnızca "arama hacmi var" varsayımıyla, gerçek bir soruya karşılık gelmeyen içerik üretilmez.

## İçerik Ne Zaman Güncellenir

Bir bilgi eskidiğinde, yanlış hale geldiğinde veya konuyla ilgili yeni ve gerçek bir gelişme olduğunda içerik güncellenir. İçerik, yalnızca "daha yeni görünmek" için yüzeysel olarak değiştirilmez.

## Authority Nasıl Korunur

Her konu, sitede yalnızca **bir** kanonik sayfa tarafından sahiplenilir. Aynı konu ikinci bir sayfada tekrar açılmaz — bu, mevcut sayfanın otoritesini böler ve zayıflatır. Yeni bir ihtiyaç, önce var olan kanonik sayfanın genişletilip genişletilemeyeceği sorusuyla karşılanır.

---

# 20. Doküman Otoritesi

Bu doküman, COMPANY.md, PRINCIPLES.md ve DESIGN_SYSTEM_GUIDE.md ile eşdeğer bağlayıcılığa sahiptir. Dördü birlikte projenin tam referans katmanını oluşturur: COMPANY.md gerçekleri, PRINCIPLES.md davranışı, DESIGN_SYSTEM_GUIDE.md yapıyı, bu doküman ise keşfedilebilirlik ve güvenilirlik stratejisini yönetir.

Bir çelişki ortaya çıkarsa: gerçek bilgi konusunda COMPANY.md, ton ve CTA konusunda PRINCIPLES.md, görsel/mimari yapı konusunda DESIGN_SYSTEM_GUIDE.md, arama ve AI görünürlük stratejisi konusunda bu doküman esas alınır. Sistem büyüdükçe bu doküman da güncellenir; ancak güncelleme yapılmadığı sürece burada yazılan ilkeler bağlayıcıdır.
