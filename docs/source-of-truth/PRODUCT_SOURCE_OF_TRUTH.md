# PRODUCT_SOURCE_OF_TRUTH.md

> **Durum:** ACTIVE · Faz 0 · Oluşturulma: 2026-10-06 · Son güncelleme: 2026-10-07 (Faz 0 son bilgi aktarımı)
> **Amaç:** Tek kaynak olarak şunları tutar:
> - çalışılan markalar ve her biriyle ilişkinin türü,
> - ürün grupları,
> - pil ve aksesuar,
> - fiyat politikası, kampanyalar, ödeme.

**Kurallar** (tam metin: `BUSINESS_SOURCE_OF_TRUTH.md` §0)
- **Etiketler:** [DOĞRULANDI] · [MEVCUT BELGELERDE VAR] · [KULLANICIDAN BİLGİ GEREKLİ] · [ERİŞİM GEREKLİ] · [MEVCUT — AUDIT GEREKLİ] · [TIME-SENSITIVE] · [VERİ BEKLENİYOR] · [DOĞRULAMA GEREKLİ] · [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] · [ESKİ / GEÇERSİZ]
- **Çatışma hiyerarşisi:** Kullanıcının güncel doğrulaması > SoT [DOĞRULANDI] > MASTER STRATEGY > DECISIONS > strateji/teknik belgeler > eski dokümanlar > koddan çıkarılan varsayım.
- **Güvenlik:** Credential bilgisi yazılmaz.
- **Marka bilgisi sınırı:** Doğrulanmış bilgi dışında marka hakkında içerik üretilmez. Kuruluş yılı, ana şirket ve teknoloji adı gibi üretici bilgileri yalnızca kaynaklı ve onaylı olarak kullanılır.

---

## 1. Çalışılan Markalar

- **Liste:** COMPANY.md §8.
- **Satılan marka sayısı: 18.** Başka satılan marka yok. Satılan markalar bu 18 markadır; liste esas alınır, yeni marka eklenmez. **[DOĞRULANDI]** · Kaynak: İşletme sahibi · Son doğrulama: 2026-10-07 · Freshness: STATIC
- **Kanonik ifade:**
  - "18 marka satıyoruz."
  - Uygun bağlamda: "18 farklı işitme cihazı markasıyla çalışıyoruz."
  - Bu ifadeler bayilik, yetkili servis, distribütörlük gibi ilişki türlerinin doğrulandığı anlamında kullanılmaz.
  - "Yaklaşık 20 marka" ifadesi geçerli bilgi değildir, kullanılmaz.
- **Sitede sayfası olanlar:** 18 markanın hepsinin `/markalar/<marka>/` sayfası var [V].
- **Teknik servis:** Satılan 18 markanın tamamında teknik servis veriliyor. **[DOĞRULANDI]** · İşletme sahibi · 2026-10-07
- **İlişki türü** (yetkili bayi / satıcı / distribütör): **[DOĞRULAMA GEREKLİ]**.
  - Kullanıcının açıklaması "bayilik anlaşması kalktı, bu yüzden yetkili bayi diyebiliriz" şeklinde. Bu hukuki ve kurumsal açıdan çelişkili olabilir.
  - "Bütün markalarda yetkili bayi" ya da "tüm markaların yetkili bayisiyiz" ifadeleri kamuya açık iddia olarak **kullanılmaz** ve kilitlenmez.
- **Marka bazında demo/deneme:** Doğrulanmadı.

| Marka | Site sayfası | Satılıyor mu | Demo / deneme | Servis | İlişki türü (yetkili bayi / satıcı / distribütör) ve belge | Hâlâ çalışılıyor mu |
|---|---|---|---|---|---|---|
| Signia | `/markalar/signia/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |
| Oticon | `/markalar/oticon/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |
| Phonak | `/markalar/phonak/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |
| Widex | `/markalar/widex/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |
| ReSound | `/markalar/resound/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |
| NuEar | `/markalar/nuear/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] (Starkey ile ilişkisi: §2) | Evet (satılıyor) |
| Unitron | `/markalar/unitron/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |
| Bernafon | `/markalar/bernafon/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |
| Audio Service | `/markalar/audio-service/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |
| Rexton | `/markalar/rexton/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |
| Sonic | `/markalar/sonic/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |
| Philips | `/markalar/philips-hearing/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |
| A&M | `/markalar/am/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |
| Audifon | `/markalar/audifon/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |
| Beltone | `/markalar/beltone/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |
| Coselgi | `/markalar/coselgi/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |
| Maico | `/markalar/maico/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |
| Vista | `/markalar/vista/` | Evet | 〃 | Evet | [DOĞRULAMA GEREKLİ] | Evet (satılıyor) |

*(〃 = [KULLANICIDAN BİLGİ GEREKLİ])*
*("Satılıyor mu", "Servis" ve "Hâlâ çalışılıyor mu" sütunlarındaki "Evet" değerleri: [DOĞRULANDI] · İşletme sahibi · 2026-10-07)*
*(Uzaktan ayar A&M ve Audifon dışındaki cihazlarda yapılabiliyor [DOĞRULANDI, 2026-10-07]; bkz. SERVICE_SOT H14, §4)*

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Freshness |
|---|---|---|---|---|---|
| Marka sayısı | **18 marka satılıyor; başka satılan marka yok** | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| Sitede ve belgelerde geçen "18+ marka" ifadesi | Başka satılan marka olmadığı için "18+" yerine "18" kullanılır. Sitedeki "18+" metinleri sonraki uygulama fazında düzeltilecek; bu turda kod değişmedi | [DOĞRULANDI] (kural) · Mevcut "18+" metinleri: [MEVCUT BELGELERDE VAR] | İşletme sahibi; COMPANY §8 ve site | 2026-10-07 | STATIC |
| "Yaklaşık 20 marka" ifadesi | Geçerli bilgi değildir, kullanılmaz | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| En sık kullanılan markalar | NuEar, Oticon, Phonak, Signia | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
| Stok durumu (marka bazında) | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | [TIME-SENSITIVE] |
| Marka seçim mantığı | Marka tek başına ilk kriter değildir. Önce işitme kaybı derecesi ve kulak yapısı; sonra kullanım kolaylığı, yaşam tarzı ve estetik; ardından fiyat/performans ve teknoloji seviyesi (SERVICE_SOT §2.7) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| Satılan 18 marka dışında satılan marka | Yok | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| Çalışılmayan ama sık sorulan markalar ve verilen cevap | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — |
| Marka sayfalarındaki üretici bilgilerinin kaynağı ve onaylayan kişi | — | [KULLANICIDAN BİLGİ GEREKLİ] | PRINCIPLES.md §12 insan onayı | — |
| Üretici ürün fotoğraflarının kullanım izni | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — |

## 2. Bilinen Tutarsızlıklar

| Konu | Mevcut durum | Durum |
|---|---|---|
| Starkey ve NuEar | Kullanıcıya göre Starkey işletmenin ana markalarından biri ve NuEar ile Starkey teknolojisi arasında ilişki var [DOĞRULANDI, 2026-10-07: kullanıcı beyanı]. Satılan 18 markalık listede bu ilişki **NuEar** olarak yer alıyor; liste değiştirilmez | Satılan marka sayısı 18 olarak kalır [DOĞRULANDI]. **NuEar–Starkey hukuki/kurumsal ilişkisi ve Starkey'in kamuya açık içerikte nasıl anılacağı: [DOĞRULAMA GEREKLİ]**. "Yetkili resmî bayi" gibi bir iddia eklenmez. *(Önceki "Starkey satılan markalar arasında ayrı marka olarak yok" ifadesi bu kayıtla düzeltildi.)* |
| Sitedeki "Starkey NuEar" adlandırması | `/isitme-cihazi-markalari/` verisinde "Starkey NuEar", COMPANY.md'de "NuEar" | Nasıl yazılacağı yukarıdaki doğrulamayla birlikte belirlenecek [DOĞRULAMA GEREKLİ] |
| Marka logo görsellerinde Starkey | `public/images/brands/starkey-logo-seffaf.webp` var (kullanılmıyor). Bazı birleşik görsellerde Starkey logosu geçiyor | Kullanımı, NuEar–Starkey doğrulaması ve sonraki görsel fazıyla birlikte değerlendirilecek |

## 3. Ürün Grupları

| Bilgi | Değer | Durum | Kaynak |
|---|---|---|---|
| Ürün grupları (belgede) | Kulak arkası, kulak içi, şarjlı, Bluetooth, premium, aksesuarlar, pil, uygun fiyatlı cihazlar | [MEVCUT BELGELERDE VAR] | COMPANY.md §7 |
| Sitedeki cihaz türü sayfaları | Kulak arkası (BTE), kulak içi (ITE), görünmez (CIC), şarj edilebilir, Bluetooth, suya dayanıklı, çocuklara özel | [MEVCUT BELGELERDE VAR] | `src/pages/isitme-cihazlari/*` |
| RIC tipi cihazlar | Sitede sayfası yok; strateji boşluğu olarak işaretli | [DOĞRULANDI] (strateji kararı). Ürün olarak satılıp satılmadığı: [KULLANICIDAN BİLGİ GEREKLİ] |
| Gerçekte satılan tipler ve segmentler (ekonomik, standart, premium) | — | [KULLANICIDAN BİLGİ GEREKLİ] | — |
| Cihaz seçiminde anlatılan türler | Kulak arkası, kulak içi, pilli, şarjlı ve diğer model ve türler (SERVICE_SOT §2.7) | [DOĞRULANDI] · Son doğrulama 2026-10-07 | İşletme sahibi |
| Kulak içi cihazlarda deneme | Merkezde demo/deneme yapılabilir. Eve verilen 7 günlük deneme kapsamına **girmez** (bkz. §6) | [DOĞRULANDI] · Son doğrulama 2026-10-07 | İşletme sahibi |

## 4. Fiyat Politikası

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Freshness |
|---|---|---|---|---|---|
| Cihaz fiyatının web sitesinde yayınlanması | **Henüz kararlaştırılmadı.** Mevcut belgeler (PRINCIPLES.md §5, COMPANY §23) "fiyat yayımlanmaz" diyor. Fiyat yayınlama kararı verilmedi; "site fiyat yayınlayacak" şeklinde bir karar yoktur | Karar: [KULLANICIDAN BİLGİ GEREKLİ] · Belge politikası: [MEVCUT BELGELERDE VAR] | İşletme sahibi (karar verilmediği bilgisi) | 2026-10-07 | — |
| Fiyat niyetine verilecek cevap modeli | Fiyatı belirleyen etkenler + resmî SGK tutarları (tarih ve kaynakla) + ücretsiz değerlendirme daveti | [DOĞRULANDI] (strateji) | MASTER STRATEGY | 2026-10-06 | STATIC |
| İşitme cihazı başlangıç fiyatı (iç bilgi) | Yaklaşık 20.000 TL | [DOĞRULANDI] (kullanıcı bilgisi) **[TIME-SENSITIVE]** | İşletme sahibi | 2026-10-07 | GÜNCEL TUTULMALI. Evergreen bilgi değildir |
| Başlangıç fiyatının kamuya açık kullanımı | Yaklaşık 20.000 TL yalnızca **TIME-SENSITIVE işletme bilgisi** olarak tutulur. Sitede yayınlanıp yayınlanmayacağı **henüz kararlaştırılmadı**; karar verilene kadar içerikte veya schema'da kullanılmaz | [KULLANICIDAN BİLGİ GEREKLİ] (karar) | İşletme sahibi | 2026-10-07 | — |
| Telefonda fiyat sorulduğunda verilen gerçek cevap | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | YENİDEN DOĞRULA |
| Ödeme yöntemleri | Nakit; banka ve kredi kartı | [MEVCUT BELGELERDE VAR] | COMPANY.md §20 | — | YENİDEN DOĞRULA |
| Taksit seçenekleri | 9 aya kadar taksit | [DOĞRULANDI] **[TIME-SENSITIVE]** | İşletme sahibi | 2026-10-07 | GÜNCEL TUTULMALI |

## 5. Pil / Aksesuar / Kampanyalar

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Kullanım | Freshness |
|---|---|---|---|---|---|---|
| Pil kampanyası | **Güncel kampanya: pil 50 TL.** Sitede ana sayfa hero slide 6'da görselin içinde "50 TL'den başlayan" olarak geçiyor (`public/images/heroes/isitme-cihazi-pili-fiyati.webp`) | [DOĞRULANDI] (2026-10-07) **[TIME-SENSITIVE]** | İşletme sahibi | 2026-10-07 | Kampanya alanı; kalıcı içerik veya schema'ya **alınmaz** | GÜNCEL TUTULMALI (kampanya bitince kaldırılır) |
| Pil fiyatı kuralı (K3) | Zaman duyarlı kampanya bilgisi olarak kalır: tarih, kaynak, sorumlu; görsele gömülmez (görseldeki metin sonraki fazda değerlendirilecek) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | — | — |
| Satılan ürün türleri (pil ve aksesuar) | Pil ve aksesuar (H23); tıkaç ve yüzücü kulaklıkları, su geçirmez (H30); nem alıcı ürünler, kapsül ve kutular (H33); hijyen ve bakım ürünleri (H34); işitme cihazı tutacağı (H35); koklear implant pili (H36). Hepsi ücretli; fiyat tutarı kayıtlı değil | [DOĞRULANDI] | İşletme sahibi (SERVICE_SOT §1) | 2026-10-07 | Pil & aksesuar sayfası | [TIME-SENSITIVE] (fiyat) |
| İşitme cihazı pil markaları | Duracell, Varta, Rayovac | [DOĞRULANDI] [TIME-SENSITIVE] | İşletme sahibi | 2026-10-07 | Pil & aksesuar sayfası | YENİDEN DOĞRULA |
| Koklear implant pil markaları | Power One, Rayovac, Biyotron | [DOĞRULANDI] [TIME-SENSITIVE] | İşletme sahibi | 2026-10-07 | Pil & aksesuar sayfası | YENİDEN DOĞRULA |
| Diğer aksesuar markaları | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | Pil & aksesuar sayfası | — |
| Dönemsel kampanya | Güncel kampanya: pil 50 TL (yukarıda). Diğer kampanyalar: [KULLANICIDAN BİLGİ GEREKLİ] | [DOĞRULANDI] (pil) [TIME-SENSITIVE] | İşletme sahibi | 2026-10-07 | `/blog/kampanyalar/` kararı | GÜNCEL TUTULMALI |
| Mevcut kampanya sayfası | `/blog/kampanyalar/` gerçek bir kampanya içermiyor | [MEVCUT BELGELERDE VAR] | Site analizi | — | Konsolidasyon adayı | — |

## 6. Deneme Uygulaması: ürün bağlamı (İşletme sahibi, 2026-10-07) [DOĞRULANDI]

> Kaynak: SERVICE_SOURCE_OF_TRUTH §1.5 ve §2.8. Bu bölüm o kayıtların ürün tarafındaki özetidir; tutarsızlık olursa SERVICE_SOT geçerlidir.
> **Hukuki sınır:** Bu bölüm işletmenin mevcut uygulamasını anlatır. Yasal hak veya hüküm olarak yazılmaz.

| Kural | Değer | Durum | Kaynak | Son doğrulama | Freshness |
|---|---|---|---|---|---|
| 7 güne kadar deneme: kanonik ifade | "**Cihazı satın alarak 7 güne kadar deneme; uygun bulunmaması halinde ücret iadesi.**" | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| 7 günlük deneme süreci | Hasta cihaz ücretini öder ve cihazı deneme amacıyla kullanır. Süre 7 güne kadardır. Uygun bulunmazsa cihaz iade alınır, ödenen ücret kesintisiz iade edilir (H28) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| Merkezde demo | Merkezde yaklaşık 20 dakikalık cihaz demosu/denemesi, ücretsiz (H7). 7 günlük eve verilen denemeyle karıştırılmaz; H7 ile H28 ayrı kayıtlardır | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| "Ücretsiz deneme" ifadesi | Geçerli kanonik bilgi değildir, kullanılmaz | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| Kulak içi cihazlar | Merkezde demo/deneme yapılabilir. Eve verilen 7 günlük deneme kapsamına girmez; genel 7 günlük deneme ifadesi bu cihazlara uygulanmaz | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
