# INTENT_MAP.md

> **Durum:** ACTIVE · Strateji belgesi · Faz 1 Commit 2 · Oluşturulma: 2026-10-07
> **Amaç:** Sorgu kümesi → search intent → kanonik sayfa → CTA → iç link ilişkisini kurar. Önce Darıca kümeleri işlenir.
> **Kaynak sırası:** İşletme gerçekleri SoT'tadır (`docs/source-of-truth/*`). Gerçek kullanıcı soruları BUSINESS_SOT §10'dan, hasta süreci SERVICE_SOT §2'den alınır. Çelişkide SoT geçerlidir.
> **Sınır:** Strateji belgesidir. Sayfa, URL, yönlendirme veya kod değişikliği yapmaz.

---

## 1. Temel İlkeler

1. **Keyword başına sayfa yoktur.** Aynı niyete hizmet eden sorgular tek kanonik sayfada karşılanır (MASTER_PLAN K6).
2. **Her sorgu ayrı URL gerektirmez.** Bir sorgu; kanonik sayfadaki bir bölümle, bir SSS cevabıyla veya yerel sayfadaki kısa bağlamla karşılanabilir.
3. **Her niyetin tek kanonik sahibi vardır.** İki sayfa aynı niyeti hedefliyorsa biri kanonik sahip olur, diğeri farklı bir niyete yönelir veya konsolide edilir (§5).
4. **Sorgu örnekleri hipotezdir.** Arama hacmi ve sıralama verisi yok. Kümeler Search Console verisi alındığında yeniden önceliklendirilir; hacim veya sıra uydurulmaz.
5. **Kaynak gerçek kullanıcı dilidir.** Sorular işletme sahibinin verdiği SSS konularından (BUSINESS_SOT §10) ve gerçek hasta sürecinden (SERVICE_SOT §2) türetilir.
6. **CTA etiketi gittiği yeri söyler** (CONVERSION_SOT §3). Telefon ve WhatsApp için ana numara kullanılır.

## 2. Niyet Sınıfları

| Sınıf | Tanım | Tipik CTA |
|---|---|---|
| Informational | Bilgi arayan; karar öncesi | Bağlamsal iç link; sayfa sonunda yumuşak CTA |
| Commercial Investigation | Seçenek karşılaştıran; maliyet ve uygunluk araştıran | Ücretsiz işitme testi / merkeze danışma |
| Transactional | Hizmet almak isteyen | Ara / Mesaj / Yol tarifi |
| Local | Yakındaki merkezi, ulaşımı, saati arayan | Yol tarifi / Ara |
| Navigational | Markayı veya iletişim bilgisini arayan | İletişim / Yol tarifi |

Karar aşamaları (SERVICE_SOT §2 ile eşlenik): şüphe → test (P5) → karar (P6) → seçim (P7) → deneme (P8) → SGK (P9) → kalıp/teslim (P10) → kullanım ve alışma (P11–P12) → takip, bakım, servis (P13) → iade/değişim (P14).

## 3. Darıca Sorgu Kümeleri (öncelik 1)

Kanonik sayfalar mevcut URL'lerdir; bu tablo URL değişikliği önermez.

| # | Küme | Örnek sorgu biçimleri (hipotez) | Birincil niyet | Kanonik sayfa | Birincil CTA | Zorunlu iç linkler | Ayrı URL? |
|---|---|---|---|---|---|---|---|
| D1 | Merkez | darıca işitme cihazı, darıca işitme merkezi, darıca işitme cihazcısı | Local / Transactional | `/darica-isitme-cihazlari/` | Ara · Yol tarifi | Ücretsiz test, deneme, teknik servis, SGK pillar, İletişim | Mevcut |
| D2 | Test | darıca işitme testi, darıca ücretsiz işitme testi, odyometri darıca | Transactional | `/degerlendirme/ucretsiz-isitme-testi/` | Ara (test randevusu) | Darıca hub, odyometri, timpanometri, cihaz seçim rehberi | Mevcut |
| D3 | SGK | darıca sgk işitme cihazı, işitme cihazı raporu nereden alınır | Informational → Transactional | `/sgk-isitme-cihazi-odemesi/` (pillar) + Darıca hub'da kısa bağlam | Ara · Mesaj | SGK cluster sayfaları, test, Darıca hub | Hayır; ayrı "Darıca SGK" sayfası ancak §6 koşullarıyla |
| D4 | Fiyat | darıca işitme cihazı fiyatları, işitme cihazı fiyatı ne kadar | Commercial Investigation | `/isitme-cihazi-fiyatlari/` | Ücretsiz işitme testi daveti · Ara | SGK pillar, segmentler, cihaz seçim rehberi | Hayır |
| D5 | Servis | darıca işitme cihazı tamiri, işitme cihazı servisi, cihazım çalışmıyor | Transactional | `/servis-bakim/teknik-servis/` | Ara | Onarım takibi, garanti, periyodik bakım, Darıca hub | Hayır; ayrı "Darıca servis" sayfası ancak §6 koşullarıyla |
| D6 | Deneme | işitme cihazı denemek, cihazı almadan denemek | Commercial Investigation | `/uygulama-ayar/cihaz-deneme/` | Ara | Cihaz seçimi, kulak içi cihaz sayfası, iade/değişim sayfası | Mevcut |
| D7 | Cihaz türü | darıca kulak içi / kulak arkası / şarjlı işitme cihazı | Commercial Investigation | İlgili `/isitme-cihazlari/*` sayfası | Ücretsiz işitme testi | Cihaz seçim rehberi, deneme | Hayır; ilçe + tür sayfası açılmaz |
| D8 | Marka | darıca phonak / signia / oticon | Commercial / Navigational | İlgili `/markalar/*` sayfası | Ara | Markalar hub, cihaz seçim rehberi | Hayır; ilçe + marka sayfası açılmaz |
| D9 | Evde hizmet | evde işitme cihazı hizmeti, eve gelen işitme cihazı | Transactional | `/uygulama-ayar/evde-isitme-cihazi-hizmeti/` | Ara | Darıca hub, kontrol randevusu | Hayır; ilçe başına evde hizmet sayfası açılmaz |
| D10 | Ulaşım / saat | avrasya işitme nerede, darıca işitme merkezi adres, kaçta açılıyor | Local / Navigational | `/iletisim/` + Darıca hub | Yol tarifi · Ara | Darıca hub | Mevcut |
| D11 | Marka adı | avrasya işitme cihazları, avrasya işitme darıca | Navigational | Ana sayfa / `/iletisim/` | Ara · Yol tarifi | Hakkımızda, Darıca hub | Mevcut |

Kurallar:
- D3, D4 ve D5'te Darıca'ya özgü yeni sayfa, yalnızca kanonik sayfanın karşılayamadığı ve SoT'ta doğrulanmış yerel bilgiyle taşınabilen ayrı bir niyet ortaya çıkarsa açılır (§6).
- D4'te fiyat yayınlama kararı verilmedi (PRODUCT_SOT §4). Cevap modeli: fiyatı belirleyen etkenler, resmî kaynağa dayalı SGK bilgisi ve ücretsiz değerlendirme daveti. Fiyat tutarı yazılmaz.
- D6'da deneme dili SERVICE_SOT §1.5'e uyar: merkezdeki yaklaşık 20 dakikalık demo (H7) ile satın alarak 7 güne kadar deneme (H28) ayrı anlatılır; kulak içi cihazlarda eve deneme vaat edilmez.

## 4. Gerçek Kullanıcı Soruları → Kanonik Cevap Yeri

Konu listesi BUSINESS_SOT §10'dadır. Tam metinler henüz SoT'ta yok ([KULLANICIDAN BİLGİ GEREKLİ]); aşağıdaki eşleme konu düzeyindedir.

| Soru konusu | Niyet | Kanonik cevap yeri | Not |
|---|---|---|---|
| Fiyat; fiyat farkları | Commercial | `/isitme-cihazi-fiyatlari/` | Tutar yazılmaz (PRODUCT_SOT §4) |
| En iyi marka hangisi | Commercial | `/rehberler/cihaz-secim-rehberi/` + markalar hub | "En iyi marka" iddiası kurulmaz; seçim mantığı PRODUCT_SOT §1 / SERVICE_SOT §2.7 |
| SGK | Informational | SGK pillar + cluster | Rakam ve prosedür resmî doğrulamadan kilitlenmez |
| Tinnitus | Informational | `/teknolojiler/tinnitus-cozumleri/` ↔ `/degerlendirme/tinnitus-degerlendirme/` | İki sayfanın niyet ayrımı §5'te |
| Görünürlük | Commercial | `/isitme-cihazlari/gorunmez-cic/` ve tür sayfaları | — |
| Şarjlı / pilli | Commercial | `/isitme-cihazlari/sarj-edilebilir/` ↔ `/teknolojiler/sarjli-teknolojiler/` | Çakışma riski §5 |
| İki kulak | Informational | Cihaz seçim rehberi | Tıbbi iddia içermez |
| Alışma süreci | Informational | `/rehberler/uyum-sureci/` | Kullanım süreleri SERVICE_SOT §2.11 |
| Garanti / servis | Transactional | Garanti işlemleri / teknik servis | — |
| IIC / BTE | Commercial | İlgili cihaz türü sayfaları | — |
| Su dayanıklılığı | Commercial | `/isitme-cihazlari/suya-dayanikli/` | Tıkaç/yüzücü kulaklığı (H30) ayrı üründür |
| Bakım; filtre / tıkanma | Informational → Transactional | Periyodik bakım / cihaz temizliği | Sıklık SERVICE_SOT §2.13 |
| Uygulama / telefon | Informational | `/teknolojiler/kablosuz-baglanti/` / Bluetooth sayfası | Boşluk: telefon/TV rehberi (CONTENT_ARCHITECTURE.md §4) |
| Takip | Informational | Kontrol randevusu | SERVICE_SOT §2.12–§2.13 |
| Uyurken kullanım; cihazın ötmesi; kulaktan düşmesi; konuşmayı anlamama; basınç hissi | Informational | Boşluk: cihaz sorunları rehberi (planlı) | Cevaplar tıbbi iddia içermez; tıbbi belirti varsa KBB yönlendirme kriterlerine (SERVICE_SOT §1.2.1) bağlanır |

## 5. Cannibalization (Niyet Çakışması) Riskleri

Bu commit'te sayfa değiştirilmez; riskler kayda alınır, çözüm ilgili fazda ve ayrı onayla yapılır.

| Çakışan sayfalar | Risk | Önerilen yön |
|---|---|---|
| `/sgk-isitme-cihazi-odemesi/` ↔ `/sgk/katki-payi/` | Aynı ödeme niyeti | Ödeme sayfası SGK pillar'ı; katkı payı farklı niyete yönelir veya birleşir |
| `/isitme-cihazlari/sarj-edilebilir/` ↔ `/teknolojiler/sarjli-teknolojiler/` | Şarjlı cihaz niyeti | Biri ürün türü (karar), diğeri teknoloji açıklaması olarak ayrışır; ayrışamıyorsa konsolidasyon |
| `/teknolojiler/tinnitus-cozumleri/` ↔ `/degerlendirme/tinnitus-degerlendirme/` | Tinnitus niyeti | Değerlendirme = merkez hizmeti (H5, H29); çözümler = bilgi. Başlık ve CTA buna göre ayrılır |
| `/neden-orijinal/marka-danismanligi/` ↔ `/neden-orijinal/ucretsiz-danismanlik/` | Cihaz seçimi hizmeti (H6) | Tek kanonik hizmet anlatımı |
| `/segmentler/*` ↔ `/isitme-cihazi-fiyatlari/` | Fiyat niyeti | Segment içeriği fiyat pillar'ının bölümü olabilir |
| `/blog/yeni-teknolojiler/` ↔ `/teknolojiler/*` | Teknoloji niyeti | Konsolidasyon adayı |
| Yerel sayfalar ↔ hizmet sayfaları | Aynı hizmet anlatımı her yerel sayfada | Hizmet anlatımı kanonik sayfada; yerel sayfa kısa bağlam + link |
| Gebze ↔ Çayırova | Aynı şablon | LOCAL_SEO_PLAYBOOK.md §7 |

Kontrol: yeni bir sayfa veya bölüm planlanırken bu tabloya ve §3'e bakılır. Aynı küme için ikinci bir kanonik sahip oluşturulmaz.

## 6. Yeni Sayfa Kararı

Yeni URL ancak şunların hepsi sağlanırsa önerilir:
1. Mevcut kanonik sayfanın karşılamadığı ayrı bir niyet var.
2. İçeriği taşıyacak doğrulanmış bilgi SoT'ta var.
3. §5'te yeni bir çakışma yaratmıyor.
4. MASTER_PLAN K6 gerekçelerinden biri yazılı.
5. Ayrı onay alınmış.

Yerel sayfalar için ek koşullar: LOCAL_SEO_PLAYBOOK.md §9.

## 7. Gebze, Çayırova ve Kocaeli Kümeleri (iskelet)

| Bölge | Kanonik sayfa | Kapsam | Durum |
|---|---|---|---|
| Gebze | `/gebze-isitme-cihazlari/` | Gebze'den merkeze ulaşım ve ziyaret; hizmet ayrıntısı kanonik sayfalarda | Faz 6; veri: LOCAL_SOT §5 |
| Çayırova | `/cayirova-isitme-cihazlari/` | Gebze'den farklı kurgu; veri olmadan genişlemez | Faz 7; veri: LOCAL_SOT §6 [VERİ BEKLENİYOR] |
| Kocaeli | `/kocaeli-isitme-cihazlari/` | İl düzeyinde yönlendirme | Faz 8 |

İlçe + hizmet, ilçe + cihaz türü ve ilçe + marka kombinasyonları ayrı sayfa almaz; ilgili kanonik sayfada karşılanır.

## 8. Güncelleme

- Search Console verisi gelince kümeler ve öncelikler güncellenir; değişiklik DECISIONS.md'ye işlenir.
- Gerçek soruların tam metinleri SoT'a aktarıldığında §4 soru düzeyine genişletilir.
