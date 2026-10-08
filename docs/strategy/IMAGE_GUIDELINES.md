# IMAGE_GUIDELINES.md

> **Durum:** ACTIVE · Strateji belgesi · Faz 1 Commit 2 · Oluşturulma: 2026-10-07
> **Amaç:** Görsellerin seçimi, dağıtımı ve teknik kullanımı için kuralları tanımlar: gerçek işletme fotoğrafları, section/niyet uygunluğu, alt metin, dosya adı, çözünürlük, mobil kırpma, performans, loading, OG, logo ve favicon prensipleri.
> **Kaynak sırası:** Görsel envanteri ve logo standardı ASSET_SOT'tadır. Bu belge envanteri tekrar etmez. Çelişkide SoT geçerlidir.
> **Sınır:** Strateji belgesidir. Hiçbir görsel, logo veya favicon dosyası eklenmez, değiştirilmez, taşınmaz, silinmez veya üretilmez. Uygulama asset/altyapı fazında ve ayrı onayla yapılır (MASTER_PLAN.md §7, Faz 3).

---

## 1. Temel Kurallar

| Kural | Kaynak |
|---|---|
| Sitede gerçek merkez fotoğrafı olarak kullanılan görseller gerçektir ve işletmeye aittir. Bu konuda yeni bir varsayım üretilmez; gerçek olmadıkları gerekçesiyle değiştirilmez | ASSET_SOT §2 (D1) |
| Kullanılmayacak fotoğraf listesi (blacklist) yoktur | ASSET_SOT §2, §4 |
| Blacklist olmaması, her fotoğrafın her yerde kullanılacağı anlamına gelmez. Uygunluk section ve search intent'e göre değerlendirilir | ASSET_SOT §2 |
| Diğer görsellerin (hero slaytları vb.) gerçek fotoğraf mı tasarım mı olduğu doğrulanmadı; bu görseller gerçek merkez fotoğrafı gibi sunulmaz ve tersine de varsayım yapılmaz | ASSET_SOT §3 |
| Görsele fiyat gömülmez; zaman duyarlı bilgi metin katmanında verilir | PRODUCT_SOT §5 (K3) |
| İnsan içeren yeni görsellerde yazılı rıza gerekir | BUSINESS_SOT §6, EEAT_AND_EDITORIAL.md §3 |

## 2. Section / Search Intent Uygunluğu

Her görsel için yayın öncesi şu sorular sorulur:
1. Görsel, bulunduğu bölümün ve sayfanın niyetini destekliyor mu?
2. Kullanıcıya gerçek bir bilgi veriyor mu (yer, mekân, süreç, ürün türü)?
3. Aynı görsel başka sayfalarda aynı rolle zaten kullanılıyor mu (§3)?
4. Teknik kalite ve kırpma bu yerleşime uygun mu (§5–§6)?

Niyete göre eşleme önerisi (envanter ASSET_SOT §2'deki dosyalarla; kesin seçim uygulama fazında):

| Sayfa / bölüm niyeti | Uygun görsel türü |
|---|---|
| Darıca hub, İletişim, yerel | Cadde cephesi / tabela, resepsiyon ve bekleme alanı |
| İşitme testi | Test odası, odyometri odası |
| Danışma, cihaz seçimi, SGK görüşmesi | Danışma odası |
| Markalar | Marka duvarı; marka sayfasında o markanın ürünü |
| Bilgi / rehber (marka-nötr) | Marka-nötr görsel; ilgili merkez fotoğrafı veya açıklayıcı diyagram. Tek bir markanın ürünü nötr bilgi sayfasında hero olarak kullanılmaz |
| Gebze / Çayırova | Ulaşım ve konumu doğru anlatan görsel; Darıca hub'ının görsel seti kopyalanmaz |
| Teknik servis, kalıp | Servis/kalıp alanı fotoğrafları gelirse (ASSET_SOT §4, [KULLANICIDAN BİLGİ GEREKLİ]) |

## 3. Tekrar Kullanım

- Aynı merkez fotoğrafının aynı rolle çok sayıda sayfada tekrarı azaltılır (ASSET_SOT §2: mevcut tekrar durumu). Her sayfa, niyetine en uygun kareyi kullanır.
- Aynı görsel farklı sayfalarda kullanılabilir, ancak her kullanımın bağlam gerekçesi olmalıdır; galeri bloğu sayfadan sayfaya kopyalanmaz.
- Aynı dosyanın birebir kopyası farklı klasörlerde tutulmaz (bilinen kopya: ASSET_SOT §3). Temizlik ayrı onayla yapılır.
- Kullanılmayan dosyalar raporlanır; silme kararı ayrı onaya bağlıdır.

## 4. Alt Metin ve Dosya Adı

**Alt metin**
- Görselde ne olduğunu tarif eder; sayfa bağlamı veya pazarlama cümlesi değildir.
- Bir dosyanın alt metni kullanıldığı her yerde aynıdır (görselin rolü değişmiyorsa).
- Kısa tutulur (öneri: 125 karakteri aşmaz); "görseli", "resmi" gibi ekler kullanılmaz.
- Anahtar kelime doldurma ve ilçe adı tekrarı yapılmaz. Konum yalnızca görselde gerçekten görünüyorsa anılır.
- Dekoratif görsellerde `alt=""` kullanılır.
- Logo alt metni: "Avrasya İşitme Cihazları" (ASSET_SOT §1).

**Dosya adı**
- Kalıp: `konu-baglam-yer.webp`; küçük harf, ASCII, Türkçe karakter ve boşluk olmadan.
- Dosya adı içeriği tarif eder; sayfa adına (ör. yalnızca sayfa öneki) bağlı kalmaz.
- Dosya adı değişirse tüm referanslar aynı işte güncellenir; kırık görsel bırakılmaz.

## 5. Çözünürlük, Format ve Performans

| Kural | Ayrıntı |
|---|---|
| Format | WebP temel; AVIF ve `astro:assets` geçişi ayrı bir iştir, ayrı onayla planlanır (fazı MASTER_PLAN'da henüz atanmadı) |
| Çözünürlük | Hero görselleri geniş ekranda net görünecek çözünürlükte (öneri: en az 1600 px genişlik). Yetersizse orijinal yüksek çözünürlüklü dosya istenir (ASSET_SOT §2, [KULLANICIDAN BİLGİ GEREKLİ]) |
| Boyut | Gösterim boyutundan çok büyük dosya kullanılmaz; hedef dosya boyutu sayfa tipine göre belirlenir (öneri: içerik görsellerinde 200 KB civarı) |
| width / height | Her `<img>` için gerçek oranla zorunlu (CLS) |
| Responsive | Mümkün olduğunda birden fazla genişlik varyantı |
| Loading | LCP görseli `eager` ve `fetchpriority="high"`; diğerleri `loading="lazy"` |
| Gereksiz yük | Mobilde gösterilmeyen görsel yüklenmez |

## 6. Mobil Kırpma

- Her hero ve kart görseli mobil oranda kontrol edilir; kırpmada asıl konu (tabela, oda, cihaz) kadraj dışında kalmamalıdır.
- Gerekirse odak noktası (`object-position`) tanımlanır veya mobil için ayrı kırpım kullanılır.
- Metin içeren görseller (ör. tabela) mobilde okunabilirlik açısından ayrıca kontrol edilir.
- Kontrol, QUALITY_GATES.md §8'deki 7 viewport testiyle birlikte yapılır.

## 7. OG ve Paylaşım Görseli

- Şu an tüm sayfalarda tek varsayılan OG görseli var (ASSET_SOT §3). Sayfa tipine göre OG kararı Faz 3'tedir.
- Öneri: marka, iletişim ve yerel sayfalarda merkez/cephe fotoğrafı; pillar ve rehberlerde konuya uygun görsel; marka sayfalarında o markanın görseli.
- OG görseli 1200 × 630 oranına uygun kırpılır; kritik içerik merkezde tutulur.
- OG görseline fiyat veya zaman duyarlı bilgi gömülmez.
- Schema'daki `image` alanının hangi görseli kullanacağı schema kararına bağlıdır (`docs/tech/SCHEMA_GRAPH.md`, planlandı).

## 8. Logo ve Favicon Prensipleri

Kaynak: ASSET_SOT §1 (A1), BRAND_SOT §1–§2. **Bu commit'te logo veya favicon dosyası değiştirilmez.**

| Konu | Prensip |
|---|---|
| Logolar | İki gerçek logo vardır (yatay, kare). Yeniden çizilmez, değiştirilmez; yeni marka üretilmez |
| Yatay logo | Masaüstü header, footer, geniş kurumsal alanlar, uygun OG/sosyal alanlar |
| Kare logo | Mobil ve dar alanlar, avatar/profil alanları, uygun GBP alanları, favicon/ikon türetmede kaynak |
| Erişilebilir ad | "Avrasya İşitme Cihazları" |
| Tagline | Yalnızca logonun parçası olarak kalır; site metnine, title'a, schema'ya veya meta description'a taşınmaz |
| Favicon | Yazılı tam logo favicon'a sıkıştırılmaz. Favicon kare logodan türetilebilir; türetme asset fazında ve onayla yapılır. Mevcut favicon o zamana kadar kalır |
| Projeye alma | Önerilen konum ve adlar ASSET_SOT §1'dedir; uygulama Faz 3 |
| Koyu zemin | Footer gibi koyu alanlarda şeffaflık ve kontrast test edilir; varyant ihtiyacı [VERİ BEKLENİYOR] |
| Eski marka gösterimi | Eski wordmark ve "En İyi" içeren tagline kullanılmaz (MASTER_PLAN B3) |

## 9. Üçüncü Taraf Görseller

- Üretici ürün fotoğraflarının ve marka logolarının kullanım izni [KULLANICIDAN BİLGİ GEREKLİ] (ASSET_SOT §3, PRODUCT_SOT §1).
- Marka görselleri yetki veya ilişki izlenimi yaratacak biçimde kullanılmaz (BRAND_SOT §3).
- NuEar–Starkey ilişkisi doğrulanana kadar Starkey logosunun kullanımı değerlendirmeye bağlıdır (PRODUCT_SOT §2).

## 10. Yayın Öncesi Görsel Kontrol Listesi

- [ ] Görsel section ve sayfa niyetiyle uyumlu (§2).
- [ ] Gereksiz tekrar yok (§3).
- [ ] Alt metin tarif edici ve tutarlı; dosya adı kalıba uygun (§4).
- [ ] width/height var; loading ve fetchpriority doğru (§5).
- [ ] Mobil kırpma kontrol edildi (§6).
- [ ] Görselde fiyat veya zaman duyarlı bilgi gömülü değil (§1).
- [ ] İnsan içeren görselde rıza kaydı var (§1).
- [ ] Logo kullanımı §8'e uygun.

## 11. İlgili Belgeler
- LOCAL_SEO_PLAYBOOK.md §3: Darıca hub görsel bağlamı.
- EEAT_AND_EDITORIAL.md §3: yayın rızası.
- QUALITY_GATES.md §1, §8, §12.9: OG, responsive ve mobil kapıları.
