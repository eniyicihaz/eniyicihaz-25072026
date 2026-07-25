# HEADER IMPLEMENTATION

## Amaç

Bu doküman Header component'inin birebir implementasyonu içindir.

Bu bir tasarım görevi değildir.

Amaç, referans tasarımı piksel hassasiyetinde Astro projesine uygulamaktır.

Hiçbir tasarım kararı verilmez.

Hiçbir spacing değiştirilmez.

Hiçbir renk değiştirilmez.

Hiçbir radius değiştirilmez.

Hiçbir shadow değiştirilmez.

Hiçbir hover değiştirilmez.

Hiçbir animasyon değiştirilmez.

Hiçbir component yeniden tasarlanmaz.

Sadece implementasyon yapılacaktır.

---

# Header Genel Yapısı

Header iki katmandan oluşur.

1.

Top Bar

2.

Main Navigation

Top Bar mavi zemindir.

Navigation ise beyaz floating card görünümündedir.

Navigation Top Bar'ın üzerine oturur.

Altında yumuşak gölge bulunur.

Kullanıcı ilk bakışta tek premium component görmelidir.

---

# Tasarım Karakteri

Header;

Apple

Stripe

Linear

Vercel

seviyesinde premium his vermelidir.

Gösterişli değil,

minimal,

ferah,

dengeli,

sessiz,

güven veren

bir görünüm oluşturmalıdır.

---

# Genel Yerleşim

Sayfa tam genişliktedir.

Container ortalanır.

Container maksimum genişlik kullanır.

Navigation kartı container içinde durur.

TopBar tüm ekranı kaplar.

Navigation ekranın tamamını kaplamaz.

Yanlarda boşluk bırakır.

Bu boşluk premium hissin önemli parçasıdır.

---

# Katmanlar

Header

↓

TopBar

↓

Navigation Card

↓

Navigation Inner

↓

Logo

↓

Menu

↓

Actions

↓

Search

↓

Phone CTA

---

# Header Ölçü Hissi

TopBar

ince görünür.

Navigation

yüksekliği belirgin fakat ağır değildir.

Phone CTA

header içinde en dikkat çeken öğedir.

Search butonu

telefon butonundan önce gelir.

Logo

sol tarafta güçlü yer kaplar.

Menu

tam ortalanır.

Actions

sağa yaslanır.

---

# Z-Index

TopBar

↓

Navigation

↓

Mega Menu

↓

Overlay

şeklinde ilerlemelidir.

Hiçbir katman çakışmamalıdır.

---

# Scroll Davranışı

Header sticky çalışacaktır.

Scroll sırasında

yükseklik hafif küçülür.

Shadow artar.

Blur korunur.

Animasyon yumuşaktır.

Ani geçiş yapılmaz.

---

# Responsive

Desktop

Tablet

Mobile

ayrı ayrı optimize edilir.

Mobilde hamburger kullanılacaktır.

Desktop görünümü bozulmayacaktır.

---

# Yasaklar

Gradient eklenmez.

Yeni ikon eklenmez.

Yeni renk eklenmez.

Yeni spacing eklenmez.

Yeni radius eklenmez.

Yeni hover tasarlanmaz.

Referans görünüm değiştirilmez.

---

# Header Architecture Requirements

Header, mevcut projenin mimarisine tamamen uyumlu olacak şekilde geliştirilmelidir.

Yeni bir dosya yapısı önerilmez.

Mevcut klasör yapısı korunur.

Mevcut naming convention korunur.

Mevcut component mimarisi korunur.

Mevcut import yapısı korunur.

Mevcut Design System yapısı korunur.

Header implementasyonu, projedeki mevcut standartlara entegre edilmelidir.

---

# Component Responsibilities

Header, tek sorumluluk ilkesine uygun geliştirilmelidir.

Header yalnızca üst navigasyon sistemini yönetmelidir.

İçerik, veri veya iş mantığı Header içine taşınmamalıdır.

Her alt bölüm yalnızca kendi görevinden sorumludur.

Bir component başka bir component'in iç yapısını bilmemelidir.

Component'ler birbirine sıkı bağlı olmamalıdır.

Composition yaklaşımı tercih edilmelidir.

---

# Semantic HTML

Header semantik HTML kullanmalıdır.

Navigation alanı uygun HTML etiketleriyle oluşturulmalıdır.

Logo ana sayfa bağlantısı olmalıdır.

Menü erişilebilir bir navigasyon yapısına sahip olmalıdır.

Telefon bağlantısı uygun bağlantı yapısını kullanmalıdır.

Etkileşimli tüm öğeler doğru HTML elemanlarıyla oluşturulmalıdır.

---

# Accessibility

Header tamamen klavye ile kullanılabilir olmalıdır.

Tüm etkileşimli öğeler görünür focus durumuna sahip olmalıdır.

Screen reader desteği eksiksiz olmalıdır.

ARIA yalnızca gerçekten gerekli olduğu durumlarda kullanılmalıdır.

Semantik HTML her zaman ilk tercih olmalıdır.

---

# Layout Requirements

Logo

Menu

Actions

alanları dengeli hizalanmalıdır.

Yerleşim modern CSS teknikleriyle oluşturulmalıdır.

Magic number kullanılmamalıdır.

Position hack'leri kullanılmamalıdır.

Responsive davranış CSS ile çözülmelidir.

JavaScript yalnızca gerçekten gerekli olduğu durumlarda kullanılmalıdır.

---

# Integration Rules

Mevcut projedeki hiçbir component kırılmamalıdır.

Mevcut tasarım sistemi korunmalıdır.

Yeni kod mevcut kod tabanına doğal şekilde entegre olmalıdır.

Kod tekrarından kaçınılmalıdır.

Var olan çözümler yeniden yazılmamalıdır.

Header tamamlandıktan sonra proje hatasız derlenmelidir.

---

# Visual Design Requirements

Header ilk bakışta premium, güven veren ve modern bir görünüm sunmalıdır.

Kullanıcı Header'ı gördüğünde sağlık sektörüne uygun, kaliteli ve kurumsal bir marka algısı edinmelidir.

Gösterişli efektlerden kaçınılmalıdır.

Minimal tasarım dili benimsenmelidir.

---

# Top Bar

Top Bar, Header'ın üst kısmında yer alan ikincil bilgi alanıdır.

Yüksekliği düşük tutulmalıdır.

Ana navigasyonun önüne geçmemelidir.

Arka plan rengi marka kimliğiyle uyumlu koyu mavi tonunda olmalıdır.

İçerik sade ve okunabilir olmalıdır.

Desktop görünümde tek satır kullanılmalıdır.

Mobil cihazlarda gerektiğinde sadeleştirilebilir veya gizlenebilir.

---

# Navigation Card

Ana navigasyon beyaz, floating (yüzer) bir kart görünümünde olmalıdır.

Kart doğrudan ekran kenarlarına yaslanmamalıdır.

Her iki tarafta nefes alan boşluklar bulunmalıdır.

Köşeler modern ve yumuşak bir radius ile tasarlanmalıdır.

Kart zeminden hafif yükselmiş hissi vermelidir.

Shadow derinliği abartılı olmamalıdır.

Premium hissi destekleyen yumuşak bir gölge tercih edilmelidir.

---

# Logo

Logo Header içerisinde en güçlü görsel öğelerden biri olmalıdır.

Yeterli boş alana sahip olmalıdır.

Sıkışık görünmemelidir.

Boyutu navigasyonu domine etmeyecek, ancak rahat fark edilecek seviyede olmalıdır.

Logo hiçbir ekranda deforme edilmemelidir.

---

# Navigation Menu

Menü Header'ın görsel merkezini oluşturmalıdır.

Menü öğeleri dengeli aralıklarla yerleştirilmelidir.

Linkler kolay okunabilir olmalıdır.

Yatay hizalama bozulmamalıdır.

Hover durumunda kullanıcıya etkileşim hissi verilmelidir.

Hover efekti sade ve premium olmalıdır.

Ani renk değişimleri kullanılmamalıdır.

---

# Search Button

Arama butonu ikincil aksiyon olarak konumlandırılmalıdır.

Boyutu telefon butonundan daha küçük olmalıdır.

İkon merkezlenmiş olmalıdır.

Hover durumunda hafif geri bildirim vermelidir.

Gösterişli animasyonlardan kaçınılmalıdır.

---

# Phone CTA

Telefon butonu Header'ın birincil aksiyonudur.

Diğer tüm öğelerden daha fazla dikkat çekmelidir.

Ancak agresif görünmemelidir.

Köşeleri tamamen modern bir görünüm sunmalıdır.

İç boşlukları rahat olmalıdır.

Metin ve ikon dengeli hizalanmalıdır.

Hover durumunda premium mikro etkileşim uygulanmalıdır.

---

# Spacing

Header içerisinde tüm boşluklar tutarlı olmalıdır.

Hiçbir öğe sıkışık görünmemelidir.

Yatay ve dikey hizalamalar optik olarak dengeli olmalıdır.

Padding ve gap değerleri rastgele belirlenmemelidir.

Gözle algılanan denge korunmalıdır.

---

# Border Radius

Radius sistemi Header genelinde tutarlı olmalıdır.

Farklı bileşenlerde rastgele radius değerleri kullanılmamalıdır.

Tüm radius değerleri aynı tasarım dilini yansıtmalıdır.

---

# Shadow

Shadow yalnızca derinlik hissi oluşturmak için kullanılmalıdır.

Yoğun blur veya ağır gölgeler kullanılmamalıdır.

Header modern bir kart hissi vermelidir.

---

# Motion

Tüm geçişler akıcı olmalıdır.

Hover

Focus

Active

Scroll

durumları yumuşak geçişlerle desteklenmelidir.

Animasyonlar kullanıcıyı rahatsız edecek seviyede olmamalıdır.

---

# Responsive Behaviour

Desktop deneyimi önceliklidir.

Tablet görünümünde düzen korunmalıdır.

Mobil görünümde kullanılabilirlik ön planda tutulmalıdır.

Hiçbir kırılımda hizalamalar bozulmamalıdır.

Menü taşmamalıdır.

CTA her zaman kolay erişilebilir olmalıdır.

---

# Visual Quality

Ortaya çıkacak Header;

Apple

Stripe

Linear

Vercel

seviyesinde temiz, dengeli ve premium görünmelidir.

Amacı dikkat çekmek değil, güven vermektir.

Kullanıcı ilk bakışta kaliteli bir sağlık markası ile karşılaştığını hissetmelidir.

---

# Interaction & Behavior

Header yalnızca statik bir navigasyon alanı değildir.

Kullanıcıyla etkileşime giren yaşayan bir bileşendir.

Tüm etkileşimler akıcı, tutarlı ve doğal olmalıdır.

---

# Hover States

Tüm etkileşimli öğeler hover durumunda kullanıcıya görsel geri bildirim vermelidir.

Hover efektleri sade olmalıdır.

Ani renk değişimleri kullanılmamalıdır.

Abartılı animasyonlardan kaçınılmalıdır.

Hover davranışı tüm Header boyunca tutarlı olmalıdır.

---

# Active States

Bulunulan sayfa kullanıcı tarafından kolayca anlaşılmalıdır.

Aktif menü öğesi hover ile karıştırılmamalıdır.

Aktif durum kalıcı ve tutarlı olmalıdır.

---

# Focus States

Header tamamen klavye ile kullanılabilir olmalıdır.

Tüm odaklanabilir öğeler görünür focus durumuna sahip olmalıdır.

Focus göstergesi tasarımın doğal bir parçası gibi görünmelidir.

Hiçbir durumda focus tamamen kaldırılmamalıdır.

---

# Sticky Header

Header sayfa boyunca görünür kalmalıdır.

Sticky davranışı doğal hissettirmelidir.

Header sayfa içeriğini rahatsız etmemelidir.

İçerik Header'ın altında kaybolmamalıdır.

---

# Scroll Behavior

Sayfa aşağı kaydırıldığında Header daha kompakt hale gelebilir.

Bu geçiş yumuşak olmalıdır.

Ani yükseklik değişimleri yapılmamalıdır.

Kullanıcı yukarı döndüğünde Header doğal şekilde eski görünümüne dönmelidir.

---

# Transition Quality

Header içerisindeki tüm geçişler aynı hareket dilini kullanmalıdır.

Hover

Focus

Scroll

Open

Close

durumları arasında tutarlı geçiş süreleri kullanılmalıdır.

Hiçbir animasyon sert başlamamalı veya aniden bitmemelidir.

---

# Click Feedback

Tıklanabilir tüm öğeler kullanıcıya anında geri bildirim vermelidir.

Bu geri bildirim sade ve profesyonel olmalıdır.

Kullanıcı etkileşimin gerçekleştiğini rahatlıkla anlayabilmelidir.

---

# Navigation Experience

Kullanıcı Header üzerinde yönünü kolayca bulabilmelidir.

Navigasyon tahmin edilebilir davranmalıdır.

Beklenmeyen hareketler yapılmamalıdır.

Menü davranışı tüm sayfalarda aynı olmalıdır.

---

# Performance

Header mümkün olduğunca hafif çalışmalıdır.

Gereksiz JavaScript kullanılmamalıdır.

CSS öncelikli çözümler tercih edilmelidir.

Animasyonlar performansı olumsuz etkilememelidir.

Mobil cihazlarda akıcılık korunmalıdır.

---

# User Experience

Kullanıcı Header'ı öğrenmek zorunda kalmamalıdır.

İlk kullanımda anlaşılır olmalıdır.

Tüm etkileşimler sezgisel olmalıdır.

Header kullanıcıyı yönlendirmeli, dikkatini dağıtmamalıdır.

Amacı gösteriş yapmak değil, güven veren ve kolay kullanılabilen bir navigasyon deneyimi sunmaktır.

---

# Code Quality Requirements

Kod yalnızca çalışıyor olması nedeniyle tamamlanmış kabul edilmez.

Üretilen kod okunabilir, sürdürülebilir ve mevcut projeyle uyumlu olmalıdır.

Gereksiz karmaşıklıktan kaçınılmalıdır.

Kod tekrarları oluşturulmamalıdır.

Var olan yapılar yeniden yazılmamalıdır.

Mevcut çözümler mümkün olduğunca yeniden kullanılmalıdır.

---

# Maintainability

Kod gelecekte kolayca güncellenebilir olmalıdır.

Anlaşılması zor çözümlerden kaçınılmalıdır.

Okunabilirlik performanstan ödün vermeden korunmalıdır.

Tüm isimlendirmeler mevcut proje standartlarına uygun olmalıdır.

---

# Performance

Header mümkün olan en düşük maliyetle çalışmalıdır.

Gereksiz DOM oluşturulmamalıdır.

Gereksiz JavaScript kullanılmamalıdır.

Render maliyeti düşük tutulmalıdır.

Animasyonlar performansı olumsuz etkilememelidir.

Mobil cihazlarda akıcılık korunmalıdır.

---

# Browser Compatibility

Modern masaüstü ve mobil tarayıcılarda tutarlı görünüm sağlanmalıdır.

Responsive davranış tüm kırılım noktalarında test edilmelidir.

Taşma, hizalama veya kırılma oluşmamalıdır.

---

# Error Prevention

Hiçbir mevcut component bozulmamalıdır.

Hiçbir import hatası oluşmamalıdır.

Hiçbir build hatası oluşmamalıdır.

Hiçbir console hatası oluşmamalıdır.

Hiçbir lint hatası oluşturulmamalıdır.

---

# Acceptance Criteria

Implementasyon aşağıdaki şartların tamamını sağladığında tamamlanmış kabul edilir.

- Referans tasarım yüksek doğrulukla uygulanmıştır.
- Mevcut proje mimarisi korunmuştur.
- Kod okunabilir ve sürdürülebilirdir.
- Responsive görünüm eksiksiz çalışmaktadır.
- Sticky davranışı sorunsuz çalışmaktadır.
- Hover, Focus ve Active durumları eksiksiz uygulanmıştır.
- Klavye ile tam erişilebilirlik sağlanmıştır.
- Performans açısından gereksiz maliyet oluşturulmamıştır.
- Proje hatasız derlenmektedir.
- Mevcut sayfalarda herhangi bir görsel bozulma oluşmamıştır.

---

# Final Validation

Görev tamamlanmadan önce aşağıdaki kontroller yapılmalıdır.

- Tüm dosyalar başarıyla derleniyor.
- Tüm importlar doğru çalışıyor.
- Responsive görünüm kontrol edildi.
- Etkileşimler test edildi.
- Erişilebilirlik kontrol edildi.
- Tasarım referansıyla karşılaştırıldı.
- Mevcut projede herhangi bir regresyon oluşmadığı doğrulandı.

Bu kontroller tamamlanmadan implementasyon bitmiş kabul edilmemelidir.

