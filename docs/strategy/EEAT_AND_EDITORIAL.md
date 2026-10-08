# EEAT_AND_EDITORIAL.md

> **Durum:** ACTIVE · Strateji belgesi · Faz 1 Commit 2 · Oluşturulma: 2026-10-07
> **Amaç:** Deneyim, uzmanlık, yetkinlik ve güven (E-E-A-T) sinyallerinin yalnızca doğrulanmış bilgiyle nasıl kurulacağını; ekip bilgisi, yayın rızası, iddia politikası, YMYL editoryal süreci ve yorum kullanımını tanımlar.
> **Kaynak sırası:** Ekip ve işletme bilgisi yalnızca SoT'tadır (BUSINESS_SOT §1–§5, SERVICE_SOT §1.1, §4). Bu belge bilgiyi tekrar etmez, nasıl kullanılacağını tanımlar. Çelişkide SoT geçerlidir.
> **Sınır:** Strateji belgesidir. Ekip sayfası, Person schema veya içerik oluşturulmaz.

---

## 1. Temel Kural

E-E-A-T sinyali olarak yalnızca SoT'ta **[DOĞRULANDI]** olan bilgi kullanılır. [KULLANICIDAN BİLGİ GEREKLİ], [DOĞRULAMA GEREKLİ] veya [VERİ BEKLENİYOR] durumundaki bilgi, doğrulanana kadar kamuya açık içerikte yer almaz. Hiçbir isim, unvan, eğitim, sertifika, yıl veya sayı tahmin edilmez.

## 2. Ekip Bilgisi: Kullanım Kuralları

Değerler BUSINESS_SOT §4 ve SERVICE_SOT §1.1'dedir. Bu tablo yalnızca nasıl yazılacağını belirler.

| Kişi | Doğrulanmış unsurlar (kaynak) | Yazım kuralı |
|---|---|---|
| **Odym. Erdinç Kılıç** | Odyometri mezunu; işletme sahibi; 2009'dan beri organizasyonda; işitme sektöründe yaklaşık 6 yıllık profesyonel deneyim; bilirkişilik sertifikası ve üretici eğitimleri mevcut (ayrıntıları verilmedi); içerik inceleyicisi (BUSINESS_SOT §4) | **Organizasyondaki süre ile sektör deneyimi ayrı cümlelerde ve ayrı kavramlar olarak yazılır.** İkisini birleştiren veya kuruluş yılını sektör deneyimine bağlayan hiçbir ifade oluşturulmaz. "İşletme sahibi" unvanıyla gösterim kararı ayrıca verilmedi |
| **Od. Sunay Özgür** | Odyoloji mezunu; yaklaşık 28 yıl deneyim; üretici eğitimleri mevcut (BUSINESS_SOT §4) | Eğitim alanı Odyoloji olarak yazılır; Erdinç Kılıç'ın eğitimiyle karıştırılmaz |
| **Birsen Şahin** | Teknik servis personeli; yaklaşık 12 yıl deneyim; üretici eğitimleri mevcut (BUSINESS_SOT §4) | Unvan verildiği biçimde korunur |

Ortak kurallar:
- Unvanlar verildiği biçimde korunur; yeni unvan üretilmez, kısaltmalar açılmaz (SERVICE_SOT §1.1).
- Kişilerin eğitim ve deneyim bilgileri birbirine aktarılmaz.
- "Yaklaşık" ifadesi korunur; deneyim yılları yuvarlanmaz veya artırılmaz. Yıllık YENİDEN DOĞRULA.
- Okul adları, mezuniyet yılları, sertifika adı/kurumu/yılı [KULLANICIDAN BİLGİ GEREKLİ]; yazılmaz.
- Ekip 2009'dan beri aynı ekip değildir; "aynı ekip" kalıbı kullanılmaz (BUSINESS_SOT §2).

## 3. Yayın Rızası

- Kişi adı, fotoğrafı, unvanı ve eğitim bilgisinin sitede yayınlanması için **yazılı yayın rızası (KVKK)** gerekir. Durum: [KULLANICIDAN BİLGİ GEREKLİ] (BUSINESS_SOT §4, SERVICE_SOT §1.1, ASSET_SOT §4).
- Rıza alınana kadar ekip sayfası, kişi profili, kişi fotoğrafı veya Person schema yayınlanmaz. İçerik "merkez ekibi" gibi kurumsal ifadelerle, kişi adı olmadan yazılır.
- Rıza kapsamı kişi bazında kaydedilir (ad / fotoğraf / eğitim / deneyim ayrı ayrı). Rıza geri çekilirse ilgili bilgi kaldırılır.
- Danışan içeren fotoğraf, video veya hikâye için ayrı yazılı rıza gerekir; rıza alma yöntemi [KULLANICIDAN BİLGİ GEREKLİ] (BUSINESS_SOT §6).

## 4. İçerik İnceleyicisi

| Rol | Kişi | Kaynak |
|---|---|---|
| İçerik inceleyicisi ("İnceleyen") | Erdinç Kılıç | BUSINESS_SOT §4 |

- YMYL içerikler ve işletme bilgisi içeren sayfalar yayından önce inceleyicinin onayından geçer.
- "İnceleyen" ve "son inceleme tarihi" bilgisi sayfada gösterilecekse, kişi adının yayın rızası tamamlanmış olmalıdır (§3).
- Yazar bilgisi: içerik bir kişi tarafından yazılmadıysa kişi adı yazar olarak gösterilmez. Yapay zekâ yardımıyla hazırlanan içerik insan onayı olmadan yayınlanmaz (PRINCIPLES.md §12).

## 5. YMYL Editoryal Süreç

| Adım | İçerik | Sorumlu |
|---|---|---|
| 1. Kapsam | Sayfanın niyeti ve kanonik sahipliği INTENT_MAP'te tanımlı | Hazırlayan |
| 2. Olgu kontrolü | İşletme bilgisi SoT'ta [DOĞRULANDI] mı? (QUALITY_GATES.md §12.1) | Hazırlayan |
| 3. Kaynak | Tıbbi/teknik/istatistiksel her iddia kaynaklı (CONTENT_ARCHITECTURE.md §6) | Hazırlayan |
| 4. İddia kontrolü | §6'daki yasak ve kilitlenmemiş ifadeler yok | Hazırlayan |
| 5. Tıbbi sınır | Teşhis/tedavi vaadi yok; belirti anlatımı KBB kriterleriyle sınırlı (SERVICE_SOT §1.2.1) | İnceleyen |
| 6. İnsan onayı | İçerik okunup onaylandı | İnceleyen (§4) |
| 7. Tarih | Zaman duyarlı bilgide kaynak tarihi ve son inceleme tarihi kaydedildi | Hazırlayan |
| 8. Yeniden inceleme | TIME-SENSITIVE içerik freshness kuralına göre tekrar kontrol edilir (SGK en geç 6 ayda bir: SERVICE_SOT §3) | İnceleyen |

Kaynak gösterim biçimi (öneri): kurum adı, belge/sayfa adı, bağlantı ve erişim tarihi. Kaynak bağlantısı olmayan bir sayı yazılmaz.

## 6. İddia Politikası

Kaynak: BRAND_SOT §3, BUSINESS_SOT §5, PRODUCT_SOT §1–§2.

**Kilitlenmeyen ve kullanılmayan ifadeler (doğrulanmadan):**
- "Yetkili bayi", "tüm markaların yetkili bayisi" ve benzeri yetki/ilişki iddiaları ([DOĞRULAMA GEREKLİ]).
- "En iyi", "en güvenilir", "en ileri", "tek", "ilk", "1 numara", "en büyük", "en kapsamlı" ve benzeri üstünlük ifadeleri.
- "Türkiye geneli yaygın ağ" ve doğrulanmamış iş ortaklığı ifadeleri (BUSINESS_SOT §5).
- NuEar–Starkey ilişkisine dair kurumsal/hukuki ifadeler ([DOĞRULAMA GEREKLİ], PRODUCT_SOT §2).
- Sayısal iddialar (danışan sayısı, başarı oranı vb.) kayıtla doğrulanmadan.

**Olgu olarak kullanılabilecek doğrulanmış uzmanlık unsurları** (BUSINESS_SOT §4 ve §7, SERVICE_SOT §1 ve §4):
- 2009'dan gelen işletme geçmişi ve Darıca merkezinin Ağustos 2024'te açılması (ayrı ayrı).
- Ekibin eğitim alanları ve deneyimleri (§2 kurallarıyla).
- Üretici eğitimlerinin varlığı (ayrıntı yazılmadan).
- Noah (fitting ve programlama) ve İŞİTSOFT (takip) altyapısı.
- Satılan 18 markanın tamamında teknik servis; onarım sürecinde yedek cihaz.
- Hizmet yapısı: işitme testleri, REM ölçümü, kalıp, merkezde demo ve satın alarak 7 güne kadar deneme, uzaktan ayar kapsamı, evde hizmet, SGK işlemlerinin merkezde yürütülmesi.
- Gerçek merkez deneyimi: tek fiziksel merkez, gerçek merkez fotoğrafları, hasta sürecinin gerçek uygulaması.

Bu unsurlar **"farklılaşma" veya üstünlük iddiasına dönüştürülmez**; olgu olarak, kaynağına sadık yazılır (BUSINESS_SOT §7). Teknik servis kapsamına dair kullanıcı beyanı "tek merkez / tek firma" gibi bir iddiaya çevrilmez (SERVICE_SOT §4).

**Kanonik ifadeler**
- İşletme tanımı: BUSINESS_SOT §1.
- Deneme: SERVICE_SOT §1.5. "Ücretsiz deneme" ifadesi kullanılmaz.
- Marka sayısı: "18 marka", yalnızca bağlam gerektirdiğinde (PRODUCT_SOT §1).
- "Ücretsiz" yalnızca SERVICE_SOT §5'teki listeyle uyumlu kullanılır.

## 7. Yorum ve Testimonial Kullanımı

| Kural | Ayrıntı |
|---|---|
| Uydurma yasağı | Uydurma, kurgusal veya "temsili" yorum kullanılmaz |
| Değiştirme yasağı | Gerçek yorumlar kısaltılmaz, düzeltilmez, yeniden yazılmaz, birleştirilmez veya bağlamından koparılmaz |
| Kaynak | Yalnızca doğrulanabilir kaynaktan (ör. GBP) ve kaynağına bağlantıyla |
| Seçicilik | Yalnızca olumlu yorumları seçip tüm memnuniyeti temsil ediyormuş gibi sunmak yapılmaz; puan/ortalama yazılacaksa kaynaktaki güncel değer ve tarih verilir |
| Kişisel veri | Yorum sahibinin kişisel ve sağlık bilgisi, rızası olmadan gösterilmez |
| Danışan hikâyesi | Yalnızca yazılı rızayla ve gerçek olarak; sağlık sonucu vaadi içermeden |
| Schema | Sahte veya site içi seçilmiş yorumlarla rating/review şeması üretilmez (QUALITY_GATES.md §4) |
| Uzman görüşü blokları | İsimli uzman bilgisi ve yayın rızası tamamlanana kadar kişi adı içermez; kişi gibi sunulmaz |

## 8. Güven Sinyalleri: Neler Kullanılabilir, Neler Beklemede

| Sinyal | Durum |
|---|---|
| Tutarlı NAP, saatler, üç telefon ve rolleri | Kullanılabilir (LOCAL_SOT §1, CONVERSION_SOT §1); NAP audit'i Faz 3 |
| SGK anlaşmalı merkez | Kullanılabilir (BUSINESS_SOT §1); sözleşme tarihi ve tesis numarası **yazılmaz** |
| KVKK belgeleri | Mevcut (BUSINESS_SOT §6) |
| Ekip bilgisi | Yayın rızasından sonra (§3) |
| Sertifika / belge görselleri | Ayrıntı ve izin [KULLANICIDAN BİLGİ GEREKLİ] |
| Mesleki dernek / oda üyeliği | [KULLANICIDAN BİLGİ GEREKLİ] |
| Sağlık Bakanlığı / ÜTS kaydı | [KULLANICIDAN BİLGİ GEREKLİ] |
| Editoryal politika sayfası | Planlı (Faz 4); bu belgedeki süreç temel alınır |
| GBP yorumları | §7 kurallarıyla |

## 9. İlgili Belgeler
- CONTENT_ARCHITECTURE.md §6: YMYL kaynak kuralları.
- IMAGE_GUIDELINES.md: ekip ve danışan görsellerinde rıza.
- QUALITY_GATES.md §12.2, §12.5: iddia ve E-E-A-T kapıları.
