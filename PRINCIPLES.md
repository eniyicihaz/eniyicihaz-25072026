# PRINCIPLES.md

> **Güncelleme:** 2026-10-07 (Faz 1). Eski bölümlerin durumu için bkz. `docs/tech/DOC_MIGRATION_MAP.md` §2.
>
> - İşletme gerçekleri **`docs/source-of-truth/`** (SoT) içinde tanımlıdır. `COMPANY.md` bunların kısa kanonik özetidir.
> - Bu doküman markanın **neden var olduğunu** ve web sitesinin **nasıl davrandığını** tanımlar: gerçekler kullanıcıya hangi amaçla, hangi tonla, hangi sırayla sunulur ve hangi ifadelerden kaçınılır.
> - SoT ve COMPANY "ne" sorusuna, PRINCIPLES.md "neden ve nasıl" sorusuna cevap verir. Kilitli strateji ve fazlar `MASTER_PLAN.md` içindedir.
> - Bu dosya ileride üretilecek bütün sayfaların, bileşenlerin, metinlerin ve kullanıcı deneyimi kararlarının bağlayıcı referansıdır. Yapay zekâ veya insan, içerik üreten herkes üretime başlamadan önce bu dosyayı ve SoT'u esas alır.

---

# 0. Çalışma İlkeleri

Bu bölüm, bütün işlerin nasıl yürütüleceğini tanımlar. Diğer bölümlerin önünde gelir.

## 0.1 Tek Doğruluk Kaynağı (Single Source of Truth)
- İşletmeye ait her bilgi (kimlik, kuruluş, merkez, ekip, hizmetler, fiyat ve kampanya, marka ilişkileri, yerel bilgiler, iletişim, Google hesapları, görseller) **yalnızca SoT'tan** alınır.
- Belgeler, bileşenler ve içerikler bu bilgileri kendileri üretmez veya kopyalayarak çoğaltmaz. Gerektiğinde SoT bölümüne referans verir.
- Bir bilgi değiştiğinde önce SoT güncellenir.

## 0.2 Doğrulanmış Bilgi Önceliği
Bilgi çelişirse öncelik sırası (bkz. `MASTER_PLAN.md` §1):
1. Kullanıcının açık ve güncel doğrulaması
2. SoT içindeki [DOĞRULANDI] kayıt
3. MASTER_PLAN
4. DECISIONS
5. Strateji ve teknik belgeler
6. Eski belgeler
7. Kod veya eski site metni

**Doğrulanmış işletme bilgisi, eski kodu ve eski metni her zaman geçersiz kılar.** Eski koddaki bir ifade, doğru olduğu yönünde kanıt sayılmaz.

## 0.3 Uydurma Yasağı
- Doğrulanmamış hiçbir işletme bilgisi üretilmez. Kapsam:
  - kişi adı, unvan, eğitim, sertifika
  - kuruluş veya açılış tarihi
  - şube, hizmet bölgesi veya hizmet
  - süre, ücret, fiyat
  - marka ilişkisi
  - mahalle, ulaşım, hastane bilgisi
  - kullanıcı sayısı, istatistik, yorum, ödül
- SoT'ta [DOĞRULANDI] olmayan bilgi kamuya açık içerikte kesin bilgi gibi kullanılmaz. Bu, [DOĞRULAMA GEREKLİ], [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ], [VERİ BEKLENİYOR] ve [KULLANICIDAN BİLGİ GEREKLİ] etiketli bilgilerin tamamı için geçerlidir.
- Bilgi eksikse içerik o bilgiyi içermez. Boşluk tahminle doldurulmaz.

## 0.4 İş Akışı
Her iş şu sırayla yürür:

**ANALYZE → PLAN → APPROVE → IMPLEMENT → TEST/QA → APPROVE → PRODUCTION**

- Onaysız uygulama yapılmaz.
- Commit ve push yalnızca kullanıcı istediğinde yapılır.
- Production deploy **hiçbir zaman otomatik değildir** ve o release'e özel açık onay gerektirir (`QUALITY_GATES.md` §10).

## 0.5 Kopya Yerel Sayfa Yasağı
Hiçbir yerel veya hizmet sayfası, başka bir sayfanın şehir adı ya da hizmet adı değiştirilmiş kopyası olamaz (doorway / scaled page). Her sayfanın kendine ait şunları olur:
- search intent
- bilgi mimarisi
- içerik amacı
- kullanıcı ihtiyacı
- SSS
- gerektiğinde görsel seçimi

Ortak tasarım sistemi bileşenleri kullanılabilir; ortak metin kullanılmaz. Ayrıntı: `SEARCH_STRATEGY.md` §10, `QUALITY_GATES.md` §2.

## 0.6 Stratejik İlkeler (özet)
- **Yerel SEO:** Darıca öncelikli yerel otorite; tek fiziksel merkez gerçeği (MASTER_PLAN K7).
- **Topical authority:** Konu odaklı pillar–cluster yapısı; thin content yok.
- **E-E-A-T:** Yalnızca doğrulanmış ekip ve işletme olguları kullanılır.
- **GEO:** Önce net cevap; tutarlı varlık bilgisi; kaynak gösterme.
- **UX ve dönüşüm:** Mobil öncelik; gerçek dönüşüm kanalları (telefon, WhatsApp, yol tarifi).

Ayrıntılar `SEARCH_STRATEGY.md` ve `docs/strategy/*` belgelerindedir.

---

# 1. Brand DNA

Bu bölüm markanın tüm davranışlarının, tonunun ve tasarımının köküdür. Kısa, zamansız ve değişmezdir. Diğer her bölüm buradan türer; bir karar bu DNA ile çelişiyorsa karar hatalıdır.

## Hiyerarşi

Marka düşüncesi altı halkalı tek bir zincirdir ve tüm dokümanlarda bu sırayla korunur:

> **Purpose → Promise → Core Philosophy → Core Emotion → Brand Character → Visual Language**

Visual Language, Brand Character'ın görsel ifadesidir — zincirin son halkasıdır, ayrı bir dal değil. Görsel dilin kanonik tanımı bu dokümanda değil, tasarım katmanındadır:
> Canonical Source: DESIGN_SYSTEM_GUIDE.md §6 Visual Language

## Purpose — Neden varız?

Kimse duyamadığı için hayattan çekilmek zorunda kalmasın. Karşı durduğumuz şey *sessiz çekilmedir*: kişinin hâlâ odadayken, konuşmalardan, sofradan ve hayattan usulca uzaklaşması. Amacımız insanların hayatın içinde kalmasıdır.

*(Bu, markanın operasyonel amacıdır ve her tasarım/içerik kararını yönetir. Kurumsal misyon ve vizyon ifadeleri için: Canonical Source: COMPANY.md §3 Misyon / §4 Uzun Vadeli Yön.)*

## Promise — İnsan ne kazanır?

Yeniden duymak, yeniden bağlanmak. İnsanlar netliği değil, netliğin hayatlarında yarattığı değişimi kazanır.

*Purpose ve Promise farklı kitlelere seslenir:* Purpose *kalmak* için konuşur (henüz çekilmemiş kişi), Promise *dönmek* için (çoktan çekilmiş kişi). Kopya, hangisine seslendiğini bilir.

## Core Philosophy — Kararları ne yönetir?

**Netlik.** Bir kararın doğruluğu tek soruyla sınanır: *netliği artırıyor mu?*

- **Sese netlik** — mesele sesin ne kadar yüksek değil, ne kadar anlaşılır olduğudur.
- **Niyete netlik** — tarafsız, şeffaf, baskısız; gizli gündem yok.
- **Tasarıma netlik** — sade, okunabilir, öngörülebilir.

## Core Emotion — Geriye kalan duygu?

**Güven.** Kullanıcı siteden ayrıldığında aklında kalması gereken duygu budur. Türkçede "güven" iki şeyi birden taşır: *bize güven* ve *kendine güven*. Atmosfer sakinliktir; güvenin kaynağı dürüstlük ve uzmanlıktır. Bu duygunun nasıl inşa edildiği için: bkz. §7 Güven Oluşturma Mekanizmaları.

## Brand Character — Kim gibi konuşur?

**Sakin Usta.** Alanının en iyisi ama kanıtlama telaşında değil; deniz feneri gibi peşinden koşmaz, yerinde durur ve netlik verir. Karakterin ayrıntısı ve ses tonu: bkz. §4 Marka Kişiliği ve Ton.

## Tavizsiz Değerler

Dürüstlük · Tarafsızlık · Şeffaflık · Netlik · Saygı (yaş ve onur) · Sabır · Bilimsellik. Bu değerler dekoratif sıfat değil, davranış taahhüdüdür; her bölümde uygulanır.

---

# 2. Marka Mimarisi

> **Güncelleme (2026-10-07, MASTER_PLAN K1 / A2):** Önceki "Birincil marka Eniyicihaz.com, destekleyici marka Avrasya İşitme" mimarisi **GEÇERSİZ**dir (bkz. DOC_MIGRATION_MAP §2).

## Tek Marka: Avrasya İşitme Cihazları

Sitede tek bir marka vardır: **Avrasya İşitme Cihazları** (BRAND_SOT §1).

- **Logo ve görünür marka alanları:** Logo, header ve footer'daki marka gösterimi, erişilebilir adlar (alt / aria-label), schema ve NAP bu markayla kurulur.
- **İlk kullanım:** Resmî ve ilk kullanımda tam ad yazılır: "Avrasya İşitme Cihazları".
- **Sonraki kullanımlar:** Doğal metinde kısa ad kullanılabilir: "Avrasya İşitme". Marka adı metinde keyword stuffing'e dönüşecek kadar tekrarlanmaz.
- **Title:** Gerektiğinde "| Avrasya İşitme Cihazları" eki kullanılır. Bu ek her title'a mekanik olarak eklenmez.

## Alan Adı: eniyicihaz.com

- **eniyicihaz.com** yalnızca web sitesinin alan adıdır, marka adı değildir.
- "Eniyicihaz.com", "EniyiCihaz" ve "ENİYİCİHAZ" marka adı olarak kullanılmaz. Koddaki eski kullanımların dönüşümü Faz 2–3 kapsamındadır.

## Tek Ekip, Tek Merkez Algısı

- Telefon, adres, ekip ve hizmet tektir. Tek fiziksel merkez Darıca'dadır (LOCAL_SOT §1).
- Kullanıcı hangi kanaldan iletişime geçerse geçsin aynı ekibe ulaştığını anlamalıdır.
- Evde hizmet alanı fiziksel merkezden geniştir, ama bu alandaki ilçeler şube gibi gösterilmez.

---

# 3. Kullanıcı Yolculuğu Felsefesi

Her sayfa, her içerik ve her bileşen aşağıdaki sırayı gözetir. Bu sıra atlanamaz veya tersine çevrilemez:

1. **Bilgilendir** — Kullanıcının sorusuna, önce hiçbir şey satmadan, doğru ve anlaşılır bir cevap ver.
2. **Güven inşa et** — Uzmanlığı, deneyimi ve şeffaflığı göster.
3. **İletişime yönlendir** — Kullanıcıyı bir uzmanla konuşmaya davet et.
4. **Temin imkânını göster** — En son adımda, incelediği çözümü Avrasya İşitme üzerinden edinebileceğini hissettir.

Satış hiçbir zaman ilk temas noktası gibi görünmez. Kullanıcı bir ürün sayfasına değil, bir bilgi kaynağına girdiğini hissetmelidir; satış imkânı bu güvenin doğal bir sonucu olarak ortaya çıkar.

**Niyete göre uygulama (2026-10-07):**
- **Bilgi niyetli sayfalar:** Bu sıra aynen uygulanır.
- **Transactional ve yerel niyetli sayfalar** (ücretsiz test, iletişim, Darıca merkezi, teknik servis gibi):
  - Kısa ve net cevap ile iletişim imkânı ilk ekranda görünür.
  - Bu sıranın ihlali sayılmaz; kullanıcının o anki niyetine hizmet eder.
  - Baskı ve aciliyet dili yine yasaktır (§9).

---

# 4. Marka Kişiliği ve Ton

Bu bölüm, §1'deki Brand Character'ın ("Sakin Usta") uygulanabilir kişilik ve ses tonudur.

## Karakter: Sakin Usta

Marka bir insan olsaydı, yılların odyoloğu olurdu: sıcak ama ölçülü, kendinden emin ama gösterişsiz. Sade ve jargonsuz konuşur — "garanti ederim" değil, "birlikte bakalım" der. Cihazı konuşmadan önce hayatı sorar. Asla baskı yapmaz, korkutmaz, yapay aciliyet üretmez, en pahalıyı dayatmaz, jargonla ezmez, kimseye tepeden bakmaz.

## Kişilik

Site şu dokuz sıfatla tarif edilir: **premium, modern, uzman, kurumsal, tarafsız, bilimsel, güvenilir, şeffaf, samimi.** (Bu, markanın tek kanonik kişilik listesidir.)

## Ses Tonu

- Profesyonel ancak anlaşılır.
- Teknik ancak sade — teknik bir terim kullanılıyorsa, aynı cümlede veya yakınında sade bir açıklaması da verilir.
- Samimi ancak ciddi — bir sağlık konusunda konuşulduğu unutulmaz.
- Kısa ama sıcak; "siz" ile hitap edilir. Yol gösterici, tepeden öğretici değil.
- Sessiz özgüven: marka kendini övmez, işini konuşturur. Bilgilendiren uzman dili kullanılır; asla agresif satış dili kullanılmaz.

## Akılda Kalması Gereken

Kullanıcı 10 dakika sonra üç kelimeyle ayrılmalıdır: **Güvenilir · Net · İçten** — ve şu cümleyle: *"Bana doğruyu söylediler, baskı yapmadılar."*

## Örnekler

| Yapılmaz | Yapılır |
|---|---|
| "Hemen şimdi %50 indirimden yararlanın!" | "Cihazınız için uygun SGK desteği olup olmadığını birlikte inceleyelim." |
| "Bu, piyasadaki en iyi cihaz." | "Bu cihaz, yüksek frekans kayıplarında sık tercih edilir; size uygun olup olmadığını bir değerlendirme netleştirir." |
| "Son 3 gün, kaçırmayın!" | "İsterseniz bu hafta bir randevu planlayalım." |

---

# 5. İçerik Bütünlüğü ve İddia Politikası

Bu, sağlık bitişik bir alanda faaliyet gösteren bir marka için en kritik bölümdür.

- **Doğrulanmamış hiçbir iddia üretilmez.** Bir bilgi kaynakla desteklenemiyorsa, kesin dille yazılmaz.
- **Tıbbi teşhis veya kesin tedavi vaadi verilmez.** İçerikler bilgilendirme amaçlıdır; kullanıcıyı bir işitme değerlendirmesine yönlendirir, sonucu önceden garanti etmez.
- **Fiyat bilgisi hiçbir zaman üretilmez veya tahmin edilmez.**
  - Fiyat ve kampanya bilgileri yalnızca SoT'ta [TIME-SENSITIVE] kayıt olarak tutulur (PRODUCT_SOT §4–5).
  - **Cihaz fiyatlarının web sitesinde yayınlanıp yayınlanmayacağına henüz karar verilmedi.** Karar verilene kadar sitede cihaz fiyatı yayınlanmaz ve "site fiyat yayınlayacak" yönünde bir varsayım yapılmaz.
  - Zaman duyarlı kampanya bilgileri tarih, kaynak ve sorumlu kaydıyla ele alınır; görsele gömülmez.
- **Kaçınılması gereken ifadeler** değişmez: *"Dünyanın en iyisi", "Kesin çözüm", "%100 başarı garantisi", "Mucize sonuç"* ve bunlara benzer her türlü mutlak, ölçülemez üstünlük iddiası.
  - **Ek yasaklar (2026-10-07):**
    - "en iyi", "Türkiye'nin en güvenilir", "en kapsamlı", "1 numara", "en büyük"
    - "tek firma", "Türkiye'deki tek merkez", "Türkiye'de ilk / tek", "en ileri teknoloji"
  - **Doğrulanmadan kullanılmayacak ifade:** "yetkili bayi" ([DOĞRULAMA GEREKLİ]).
  - **Liste kaynağı:** Tüm proje için kanonik yasak liste BRAND_SOT §3'tür. Bu bölüm o listeyle tutarlıdır.
- **Deneme dili:**
  - Kanonik ifade: "Cihazı satın alarak 7 güne kadar deneme; uygun bulunmaması halinde ücret iadesi."
  - "Ücretsiz deneme" ifadesi kullanılmaz. Merkezdeki ücretsiz demo bu denemeden ayrıdır.
  - Ayrıntı: SERVICE_SOT §1.5.
- **Hukuki dil:** İade, cayma ve deneme uygulamaları yasal hak veya hüküm gibi yazılmaz; yalnızca işletmenin mevcut uygulaması olarak anlatılır.
- Karşılaştırma yapılırken marka veya ürün küçümsenmez; tarafsız, bilgilendirici bir dil korunur.
- Teknik terimler (ör. "REM ölçümü", "kulak arkası cihaz", "Bluetooth eşleştirme") ilk geçtiği yerde sade bir dille açıklanır.

---

# 6. Erişilebilirlik ve Okunabilirlik

Hedef kitlenin önemli bir bölümü 60 yaş ve üzeridir. Bu, tercih değil, tasarım zorunluluğudur.

- Metinler büyük, satır aralıkları geniş ve kontrast yüksek olmalıdır.
- Sayfalar sakin, az uyaranlı ve öngörülebilir bir düzene sahip olmalıdır; göz yorucu yoğunluktan kaçınılır.
- Her sayfa mobil öncelikli tasarlanır — büyük yaş grubu dahil çoğu kullanıcı telefondan arama yapar.
- Etkileşimli her öğe (buton, bağlantı, form alanı) klavye ile ve ekran okuyucuyla kullanılabilir olmalıdır.
- Dokunma hedefleri en az **48×48 px**, gövde metni için temel değer **17 px**'tir; responsive ihtiyaca göre ayarlanabilir (MASTER_PLAN K5).
- Karmaşık işlemler (randevu alma, iletişim formu) mümkün olduğunca az adımda tamamlanır.

---

# 7. Güven Oluşturma Mekanizmaları

Bu bölüm, §1'de tanımlanan Core Emotion'ın — **Güven** — nasıl inşa edildiğini tanımlar. Kullanıcı, siteyi gezerken fark etmeden şu düşünceye ulaşmalıdır: *"Bu insanlar gerçekten bu işi biliyor."*

Bu, tek bir büyük vaatle değil, tutarlı küçük sinyallerle inşa edilir:

- **Gerçek kimlik bilgileri görünür olmalıdır.** Kaynak yalnızca SoT'tur (BUSINESS_SOT §1–4):
  - SGK anlaşmalı statü
  - 2009 kuruluş geçmişi ve Darıca merkezinin Ağustos 2024 açılışı, birbirinden ayrı
  - Doğrulanmış ekip eğitimleri ve uzmanlıkları
  - Kişilerin eğitim ve deneyim bilgileri birbirine karıştırılmaz.
- **Gerçek olmayan hiçbir güven unsuru kullanılmaz.** Uydurma yorum, sahte kullanıcı sayısı veya gerçekliği doğrulanamayan istatistik üretilmez.
- **Ekip ve mekân görselleri:**
  - Sitedeki gerçek merkez fotoğrafları işletmeye aittir ve gerçektir (ASSET_SOT §2).
  - Stok fotoğraf hissi verilmez.
  - Kişi içeren görseller yalnızca yazılı rızayla kullanılır (KVKK).
  - Kullanıcının "kullanılmasın" dediği bir fotoğraf yoktur. Her fotoğrafın uygunluğu teknik, UX ve SEO açısından ayrıca değerlendirilir.
- **Şeffaflık:** Fiyat gösterilmemesinin nedeni kullanıcıya açıkça hissettirilir — bu bir gizleme değil, kişiye özel değerlendirme sonrası doğru bilgi verme prensibidir.
- **Tutarlılık:** Aynı bilgi (adres, telefon, çalışma saatleri, marka ilişkisi) sitenin her yerinde birebir aynı şekilde yer alır.

---

# 8. Satış Yaklaşımı

Site bir e-ticaret platformu değildir; sepet, online ödeme veya ürün fiyatı içermez.

Buna rağmen kullanıcıda şu netlik oluşmalıdır:

> "İncelediğim işitme cihazını istersem Avrasya İşitme üzerinden temin edebilirim."

Bu denge şöyle korunur: ürün ve marka içerikleri bilgilendirici kalır (özellikler, kullanım alanları, kimin için uygun olabileceği), "satın al" değil "bu cihaz hakkında bilgi al / uzmanla görüş" davetleri kullanılır. Karar süreci her zaman bir uzmanla görüşmeden geçer — bu hem güveni hem de doğru cihaz seçimini korur.

---

# 9. CTA Sistemi

Kullanım çağrıları (CTA) doğal görünmelidir; kullanıcı hiçbir noktada baskı hissetmemelidir. Sitede üç standart CTA katmanı vardır ve her biriyle tutarlı bir amaç eşleşir:

| Katman | Amaç | Örnek ifade |
|---|---|---|
| **1. Bilgi CTA** | Kullanıcıyı bilgi almaya devam etmeye teşvik eder | "Konuyla ilgili diğer yazılarımızı inceleyin" |
| **2. Uzman CTA** | Kullanıcıyı bir uzmanla görüşmeye davet eder | "Bir uzmanımızla ücretsiz görüşün" |
| **3. Cihaz / Avrasya CTA** | Kullanıcıyı Avrasya İşitme üzerinden cihaz bilgisi almaya yönlendirir | "Bu cihaz hakkında Avrasya İşitme'den bilgi alın" |

**Uygulama kuralı:** İçerik ve ürün sayfaları (blog yazıları, cihaz tanıtımları, hizmet sayfaları) bu üç seçenekten uygun olanları sayfa sonunda sunar. Yasal/kurumsal sayfalar (gizlilik politikası, KVKK metni, kullanım şartları gibi) bu kuraldan muaftır — bu sayfalarda CTA zorlanmaz.

Hiçbir CTA'da aciliyet baskısı (geri sayım, sahte stok uyarısı, "son fırsat" dili) kullanılmaz.

**Dönüşüm uygulama kuralları (2026-10-07; veriler CONVERSION_SOT'ta):**
- **Gerçek dönüşüm kanalları:** Telefon ve WhatsApp ana kanallardır; yol tarifi ve fiziksel ziyaret de dönüşüm sayılır.
- **Mobil:** Öncelikli eylemler ve sıraları CONVERSION_SOT §5'tedir.
- **Telefon numaraları:** Rolleri ve hangi alanda gösterilecekleri CONVERSION_SOT §1'dedir. Header'da ve birincil CTA'larda yalnızca ana numara kullanılır.
- **CTA etiketi gittiği yeri doğru söyler.** Örnek: "Ücretsiz İşitme Testi" yazan bir CTA test sayfasına gider.
- **Walk-in ve randevu birlikte doğru anlatılır:**
  - Merkez randevusuz ziyaretleri kabul eder, ama hizmet bazında randevu gerekliliği devam eder (SERVICE_SOT T5).
  - Walk-in kabulü, randevuyu gereksiz kılıyormuş gibi yazılmaz.
- **Deneme CTA'ları** kanonik deneme ifadesini kullanır (§5). "Ücretsiz deneme" ifadesi kullanılmaz.

---

# 10. Tasarım Prensipleri

- Görsel dil; premium, modern, bilimsel ve sakin bir izlenim vermelidir — agresif, kalabalık veya "indirim sitesi" hissi taşıyan hiçbir öğe kullanılmaz.
- Tasarım kararları, projede zaten kurulmuş olan Design System ile tutarlı kalır: aynı boşluk, radius, gölge ve tipografi ölçekleri; aynı bileşen adlandırma kuralları. Görsel sistemin ve marka görsel dilinin (Noise → Signal) kuralları burada tekrar tanımlanmaz:
  > Canonical Source: DESIGN_SYSTEM_GUIDE.md §6 Visual Language
- Her yeni bileşen veya sayfa şablonu, mevcut sistemin diline uyar; yeni bir görsel dil icat edilmez.
- Görsellerde çeşitlilik gözetilir; hedef kitlenin yaş aralığı görsellere de yansır (ana yaş grubu: BUSINESS_SOT §9). Yalnızca genç, "reklam yüzü" görseller kullanılmaz.
- **Tasarım hedefi premium'dur** (BRAND_SOT §7).
  - Referans siteler yalnızca kalite ve yaklaşım için kullanılır; **görsel tasarım kopyalanmaz**.
  - Animasyon gerektiğinde ve kontrollü kullanılır.

---

# 11. Yasal ve Etik Sınırlar

- Kişisel veriler KVKK kapsamında işlenir; her form ve iletişim akışı bu çerçeveye uygun olmalıdır.
- İşitme cihazları tıbbi cihaz sınıfına girer; bu nedenle tedavi garantisi, kesin iyileşme vaadi veya "reçetesiz kullanım önerisi" gibi ifadelerden kesinlikle kaçınılır.
- Rakip marka veya ürünler kötüleyici dille anılmaz.
- Şirket hakkında doğrulanmamış hiçbir bilgi (ödül, sertifika, sayısal başarı) üretilmez veya varsayılmaz.

---

# 12. Yapay Zekâ İçerik Üretim Kuralları

Bu bölüm, sayfa metni, bileşen kopyası veya pazarlama içeriği üreten her yapay zekâ süreci için bağlayıcıdır.

- Her içerik §1 Brand DNA ve §2'deki tek marka mimarisiyle uyumludur: Avrasya İşitme Cihazları tek markadır, eniyicihaz.com alan adıdır.
- Fiyat, istatistik, ödül, kullanıcı sayısı gibi hiçbir veri **uydurulmaz**. SoT'ta [DOĞRULANDI] olarak yoksa ya da doğrulanmış resmî bir kaynakta yoksa üretilmez (§0.3).
- §5'teki yasaklı ifadeler listesi hiçbir koşulda kullanılmaz.
- Tıbbi, hukuki veya SGK süreçleriyle ilgili kesin iddia içeren herhangi bir cümle, yayınlanmadan önce insan onayına işaretlenir.
- Üretilen her metin, §4'teki ses tonuna (profesyonel ama anlaşılır, teknik ama sade, samimi ama ciddi) uyar.
- İçerikler tarafsız, güvenilir ve kullanıcı odaklı olmalıdır; özellikle güven, uzmanlık, tarafsızlık ve deneyim vurgulanır.
- Şirket hakkında doğrulanmamış bilgi üretilmez. Avrasya İşitme Cihazları gerçek bir işletmedir ve sitedeki tek markadır.
- Yeni bir sayfa veya bileşen tasarlanırken önce SoT, sonra bu dosya ve `MASTER_PLAN.md` referans alınır.

---

# 13. Karar Verme Filtresi

Yeni eklenecek her özellik aşağıdaki dört soruyu geçmelidir.

1. Kullanıcıya gerçek fayda sağlıyor mu?
2. Güven oluşturuyor mu?
3. Avrasya İşitme Cihazları markasını güçlendiriyor mu?
4. İşletmenin doğrulanmış uzmanlığını (SoT) doğru temsil ediyor mu?

Bu sorulardan biri "Hayır" ise özellik yeniden değerlendirilmelidir.

---

# 14. Doküman Otoritesi

PRINCIPLES.md "neden ve nasıl" sorusunu cevaplar. Markanın kalbi olan §1 Brand DNA bu dokümanda yaşar ve tek kanonik kaynaktır; diğer dokümanlar DNA'ya yalnızca referansla bağlanır, tekrar tanımlamaz.

Bir çelişki ortaya çıkarsa:

- **Gerçek/olgusal bilgi** (şirket adı, adres, kuruluş, ekip, hizmetler, fiyat, yerel bilgiler) konusunda **`docs/source-of-truth/*` (SoT)** esas alınır. COMPANY.md bunun kısa özetidir.
- **Kilitli strateji ve faz sınırları** konusunda **`MASTER_PLAN.md`** esas alınır.
- **Marka amacı, davranış, ton, kullanıcı deneyimi ve iletişim stratejisi** konusunda **PRINCIPLES.md** esas alınır.
- **Görsel sistem ve marka görsel dili** konusunda **DESIGN_SYSTEM_GUIDE.md** esas alınır.

**Canonical Source kuralı:** Bir kavramı tanımlamayan ama kullanan her bölüm, tanımı tekrar etmez; başına `> Canonical Source: <DOSYA> §<no> <başlık>` notu ekleyerek kaynağa işaret eder. Böylece hiçbir kavram ikinci kez tanımlanmaz ve Single Source of Truth uzun vadede korunur.

İleride üretilecek her sayfa, bileşen ve içerik bu dokümanlara uymak zorundadır. Her dosya yaşayan bir dokümandır; şirket veya strateji değiştikçe güncellenir, ancak güncelleme yapılmadığı sürece burada yazılanlar bağlayıcıdır.
