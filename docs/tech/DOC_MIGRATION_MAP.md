# DOC_MIGRATION_MAP.md

> **Durum:** ACTIVE · Faz 1 · Oluşturulma: 2026-10-07
> **Amaç:** Eski belgelerdeki her bilgi ve kuralın yeni belge mimarisinde nereye taşındığını, nerede kaldığını ve hangi durumda olduğunu göstermek. Böylece Faz 1 güncellemelerinde **bilgi kaybı olmaz**.
> **Kural (B1):** Bu harita yalnızca eşleştirme yapar. Hiçbir belge silinmez veya klasörler arasında fiziksel olarak taşınmaz. Arşivleme ileride ayrı onayla yapılır.

## 0. Kullanım

### 0.1 Durum değerleri
| Durum | Anlamı |
|---|---|
| **KORUNDU** | İçerik geçerli; aynı yerde kalıyor. |
| **GÜNCELLENDİ** | Aynı yerde kalıyor, ama içeriği Faz 0 SoT ve kilitli kararlarla uyumlu hâle getirildi (Faz 1). |
| **SoT'A TAŞINDI** | İşletme gerçeğidir. Kanonik kaynağı artık `docs/source-of-truth/*`. Eski belge yalnızca kısa özet veya referans tutar. |
| **ARŞİVLENECEK** | Tarihsel değeri var; ileride `docs/archive/` altına alınacak. Faz 1'de dosyaya yalnızca durum bandı eklenir (Commit 3). Taşıma ayrı onaylı. |
| **GEÇERSİZ** | Faz 0 SoT veya kilitli kararla çelişiyor. Hiçbir yerde kullanılmaz; gerekçesi yazılır. |
| **PLANLANDI** | Hedef belge Faz 1'in sonraki commit'lerinde oluşturulacak. Eşleme hazır, içerik henüz yazılmadı. |

### 0.2 Kaynak önceliği
1. Faz 0 Source of Truth (`docs/source-of-truth/*`, commit `f02b7c4`)
2. `MASTER_PLAN.md` (kilitli strateji)
3. `docs/DECISIONS.md`
4. Strateji ve teknik belgeler
5. Eski belgeler
6. Kod ve eski site metinleri

### 0.3 Geçersiz ifadeler
Geçersiz ifadelerin tam listesi tek yerde tutulur: `BUSINESS_SOURCE_OF_TRUTH.md` §12. Bu harita o listeyi tekrar etmez.

---

## 1. COMPANY.md (Faz 1'de kısa kanonik özete dönüştürüldü)

| Eski bölüm | Eski içerik (özet) | Durum | Yeni yer / gerekçe |
|---|---|---|---|
| Üst not (olgusal kaynak) | Şirket gerçeklerinin tek kaynağı olduğu iddiası | GÜNCELLENDİ | Kanonik kaynak artık SoT. COMPANY.md özet ve referans dosyasıdır |
| §1 Şirket bilgileri | Resmî ad, ana marka "Eniyicihaz.com", destekleyici marka, kuruluş, şirket türü, faaliyet, adres, tarif, 2 telefon, e-posta | SoT'A TAŞINDI + GÜNCELLENDİ | BUSINESS_SOT §1–3; LOCAL_SOT §1. "Ana marka Eniyicihaz.com" **GEÇERSİZ** (K1). "2 telefon" **GEÇERSİZ** (3 numara). E-posta: eniyicihaz@gmail.com |
| §1 Hizmet verilen şehirler | "Başta Kocaeli ve İstanbul…" | GÜNCELLENDİ | COMPANY "Hizmet alanı" + LOCAL_SOT §3: fiziksel merkez Darıca; evde hizmet Kocaeli'nin tamamı ve İstanbul Anadolu Yakası; bilgi içeriği ulusal |
| §2 Marka bilgileri | Ana marka Eniyicihaz.com; konumlandırma "Türkiye'nin en güvenilir…" | GEÇERSİZ | K1: tek marka Avrasya İşitme Cihazları (BRAND_SOT §1). Üstünlük ifadesi yasak (BRAND_SOT §3) |
| §3 Şirket hakkında | Kısa/ayrıntılı tanıtım, şirket hikâyesi | GÜNCELLENDİ | COMPANY kanonik tanım = BUSINESS_SOT §1 (2009 kuruluş, Ağustos 2024 Darıca) |
| §4 Misyon | İşitme kaybı yaşayanlar için doğru bilgi ve çözüm | KORUNDU | COMPANY.md (üstünlük ifadesi içermiyor) |
| §5 Vizyon | "Türkiye'nin en güvenilir…" | GEÇERSİZ (üstünlük) | Faz 1'de üstünlük içermeyen hedefe çevrildi; iş hedefleri BUSINESS_SOT §8 |
| §6 Hizmetler | 11 maddelik genel liste | SoT'A TAŞINDI | SERVICE_SOT §1 (H1–H40, doğrulanmış) |
| §7 Ürün grupları | 8 grup | SoT'A TAŞINDI | PRODUCT_SOT §3, §5 |
| §8 Çalışılan markalar | 18 marka | SoT'A TAŞINDI | PRODUCT_SOT §1 (18 marka satılıyor, başka marka yok) |
| §9 Uzmanlık alanları | Genel liste | SoT'A TAŞINDI | SERVICE_SOT §1; BUSINESS_SOT §4 |
| §10 Hedef kitle | Yetişkinler, aileler, karar vericiler | SoT'A TAŞINDI + GÜNCELLENDİ | BUSINESS_SOT §9: ana grup 50+, kararı kullanıcı veriyor |
| §11 Hizmet süreci | 8 adım | SoT'A TAŞINDI + GÜNCELLENDİ | SERVICE_SOT §2 (15 aşama, doğrulanmış). Eski 8 adım bunun yerine geçmez |
| §12 Rekabet avantajları | Uzman danışmanlık, yedek cihaz, 3D kalıp atölyesi vb. | SoT'A TAŞINDI | BUSINESS_SOT §5, §7. Yedek cihaz DOĞRULANDI; "atölye" ifadesi doğrulanmadı |
| §13 Güçlü yönler | "Türkiye geneli yaygın ağ" dahil | GEÇERSİZ ("yaygın ağ") / SoT'A TAŞINDI (diğerleri) | BUSINESS_SOT §5: "yaygın ağ" [KULLANICIDAN BİLGİ GEREKLİ]; tek merkez gerçeğiyle çelişiyor, kullanılmaz |
| §14 Kullanılan teknolojiler | Dijital cihazlar, REM, fitting yazılımları | SoT'A TAŞINDI | SERVICE_SOT §4 (Noah, İŞİTSOFT, REM hizmeti) |
| §15 Belgeler/sertifikalar | SGK, odyometrist/odyolog yetkinliği, bilirkişi | SoT'A TAŞINDI | BUSINESS_SOT §1, §4 (kişi bazında; SGK numarası kamuya açık yazılmaz) |
| §16 İş ortakları | Kooperatif, merkez ağı | SoT'A TAŞINDI ([KULLANICIDAN BİLGİ GEREKLİ]) | BUSINESS_SOT §5; doğrulanmadan kullanılmaz |
| §17 Hizmet bölgeleri | 4 kademe (Darıca → Gebze/Çayırova → Kocaeli → Dilovası/Tuzla/Pendik) + kapsam dışı ilçeler | GÜNCELLENDİ (F1-3) | COMPANY "Yerel SEO kapsamı" (liste korundu, sıra Darıca > Gebze > Çayırova > Kocaeli olarak güncellendi) + ayrı başlık "Evde hizmet alanı". Ayrıntı: LOCAL_SOT §3 |
| §18 Müşteri profili | Yaş grupları vb. | SoT'A TAŞINDI | BUSINESS_SOT §9 |
| §19 Çalışma saatleri | Hafta içi/Cmt/Pazar | SoT'A TAŞINDI | LOCAL_SOT §1 (+ öğle arası yok, resmî tatillerde kapalı) |
| §20 Şirket politikaları | Ödeme, garanti, servis, randevu, gizlilik | SoT'A TAŞINDI | PRODUCT_SOT §4 (ödeme, taksit); SERVICE_SOT §4 (garanti, servis); LOCAL_SOT §2 (walk-in + hizmet bazında randevu) |
| §21 Sık sorulan konular | 9 başlık | SoT'A TAŞINDI | BUSINESS_SOT §10 (20+ gerçek SSS konusu) |
| §22 Gelecek hedefleri | "En kapsamlı platform" | GEÇERSİZ (üstünlük) / SoT'A TAŞINDI | BUSINESS_SOT §8 (ölçülebilir iş hedefleri) |
| §23 Doküman otoritesi | COMPANY = olgusal kaynak; fiyat yayımlanmaz | GÜNCELLENDİ | Olgusal kaynak SoT. Fiyat yayınlama kararı **henüz verilmedi** (PRODUCT_SOT §4) |

## 2. PRINCIPLES.md (yerinde güncellendi)

| Bölüm | Durum | Not / yeni yer |
|---|---|---|
| Üst not | GÜNCELLENDİ | Belge haritası SoT ve MASTER_PLAN ile güncellendi |
| §0 (yeni) Çalışma ilkeleri | GÜNCELLENDİ (eklendi) | SoT, iş akışı, kaynak önceliği, doğrulanmış bilgi önceliği |
| §1 Brand DNA | KORUNDU | Purpose/Promise/Philosophy/Emotion/Character değişmedi |
| §2 Marka mimarisi | GÜNCELLENDİ | "Birincil marka Eniyicihaz.com" **GEÇERSİZ**. Tek marka Avrasya İşitme Cihazları; eniyicihaz.com alan adı (K1, A2) |
| §3 Kullanıcı yolculuğu | GÜNCELLENDİ | Niyete göre sıralama eklendi |
| §4 Kişilik ve ton | KORUNDU | — |
| §5 İçerik bütünlüğü | GÜNCELLENDİ | Fiyat: üretme/tahmin yasağı korundu; yayınlama kararı verilmedi. Yasaklı ifade listesi genişletildi (BRAND_SOT §3) |
| §6 Erişilebilirlik | GÜNCELLENDİ | 48 px / 17 px (K5) |
| §7 Güven | GÜNCELLENDİ | Gerçek fotoğraf (D1); rıza; doğrulanmamış iddia yok |
| §8 Satış yaklaşımı | KORUNDU | — |
| §9 CTA sistemi | GÜNCELLENDİ | Mobil öncelikli 3 CTA, telefon rolleri, deneme dili (CONVERSION_SOT) |
| §10 Tasarım | GÜNCELLENDİ | Premium hedef (BRAND_SOT §7) |
| §11 Yasal | KORUNDU | — |
| §12 Yapay zekâ kuralları | GÜNCELLENDİ | SoT dışı bilgi üretme yasağı açıkça eklendi |
| §13 Karar filtresi | GÜNCELLENDİ | 3. soru "Eniyicihaz.com markası" → "Avrasya İşitme Cihazları markası" |
| §14 Doküman otoritesi | GÜNCELLENDİ | Kaynak önceliği (SoT birinci) |

## 3. SEARCH_STRATEGY.md (yerinde güncellendi)

| Bölüm | Durum | Not / yeni yer |
|---|---|---|
| Üst not / §1 | GÜNCELLENDİ | Belge haritası (SoT, MASTER_PLAN) |
| §2–§3 Arama ve SEO felsefesi | KORUNDU | — |
| §4 Entity stratejisi | GÜNCELLENDİ | Tek marka entity'si; "Eniyicihaz.com birincil marka" **GEÇERSİZ** |
| §5 Bilgi grafiği | GÜNCELLENDİ | İlişki cümleleri K1'e göre |
| §6 Topical authority | GÜNCELLENDİ | Kaynak gösterme YMYL içerikte zorunlu; ayrıntı → CONTENT_ARCHITECTURE (PLANLANDI) |
| §7 Search intent | GÜNCELLENDİ | Keyword başına sayfa reddedildi (K6); INTENT_MAP (PLANLANDI) |
| §8 AEO | KORUNDU | — |
| §9 GEO | GÜNCELLENDİ | Kanonik tanım SoT'tan; AI-crawler yönü |
| §10 Local SEO | GÜNCELLENDİ | Öncelik, evde hizmet ayrımı, Gebze/Çayırova kopya yasağı; ayrıntı → LOCAL_SEO_PLAYBOOK (PLANLANDI) |
| §11 Yapısal veri | GÜNCELLENDİ | Tip eşlemesi **karar bekleyen** hâle getirildi (Faz 3 öncesi doğrulama); SCHEMA_GRAPH (PLANLANDI) |
| §12 Medya SEO | KORUNDU | Ayrıntı → IMAGE_GUIDELINES (PLANLANDI) |
| §13 E-E-A-T | GÜNCELLENDİ | Ekip ve inceleyen SoT'tan; EEAT_AND_EDITORIAL (PLANLANDI) |
| §14–§19 | KORUNDU | — |
| §20 Doküman otoritesi | GÜNCELLENDİ | Kaynak önceliği |

## 4. QUALITY_GATES.md (yerinde güncellendi)

| Bölüm | Durum | Not |
|---|---|---|
| Üst not / §0 | GÜNCELLENDİ | Belge haritası |
| §1 SEO Gate | KORUNDU + GÜNCELLENDİ | Niyet ve metadata kuralları (mekanik marka/sayı ekleme yok) |
| §2 Local SEO Gate | GÜNCELLENDİ | Hiyerarşi kaynağı LOCAL_SOT §3 + COMPANY; evde hizmet ayrımı |
| §3 GEO Gate | KORUNDU + GÜNCELLENDİ | — |
| §4 Schema Gate | GÜNCELLENDİ | Tip eşlemesi kilitlenmedi; uygulamadan önce doğrulama zorunlu |
| §5–§7 | KORUNDU | — |
| §8 Responsive QA | GÜNCELLENDİ | Dokunma hedefi en az 48 px (K5) |
| §9–§10 | KORUNDU | Deploy onay kuralı aynen |
| §12 (yeni) Faz 1 ek kapıları | GÜNCELLENDİ (eklendi) | Business truth, yasak iddia, doorway, niyet, E-E-A-T, teknik güvenlik, consent/PII, schema doğrulama, mobil/erişilebilirlik/dönüşüm, production onayı |
| §11 Doküman otoritesi | GÜNCELLENDİ | Kaynak önceliği |

## 5. Diğer kök belgeler (Faz 1 sonraki commit'leri)

| Belge | Durum | Plan |
|---|---|---|
| DESIGN_SYSTEM_GUIDE.md | PLANLANDI (Commit 3) | Belge haritası, canlı durum, kanonik bileşenler, K5 |
| IMPLEMENTATION_STANDARD.md | PLANLANDI (Commit 3) | Yalnızca belge haritası satırı |
| IMPLEMENTATION_GUIDE.md | ARŞİVLENECEK | Header brifi (tarihsel). Commit 3'te durum bandı |

## 6. docs/ belgeleri

| Belge | Durum | Not |
|---|---|---|
| `docs/DECISIONS.md` | GÜNCELLENDİ (Faz 1 Commit 1) | Faz 0 ve Faz 1 kararları eklendi; eski kayıtlar silinmedi |
| `docs/PROJECT_ARCHITECTURE.md` | ARŞİVLENECEK / GÜNCELLENECEK | Commit 3'te durum bandı; içerik ileride `docs/tech/` mimarisine eşlenecek |
| `docs/DESIGN_SYSTEM.md` | ARŞİVLENECEK / GÜNCELLENECEK | Commit 3'te durum bandı; token gerçekliği TEMPLATES ve DSG ile |
| `docs/HOMEPAGE_SPECIFICATION.md`, `HERO_`, `CLOSING_`, `TRUST_`, `CENTER_NETWORK_`, `BUYING_CRITERIA_`, `HOMEPAGE_FAQ_` | ARŞİVLENECEK / GÜNCELLENECEK | Commit 3'te "güncelleme bekliyor" bandı; içerik ilgili kod fazında güncellenir |
| `docs/GUIDE_`, `SOLUTION_`, `KNOWLEDGE_GATE_`, `CATEGORY_EXPLORER_`, `BRAND_CRITERIA_SPECIFICATION.md` | ARŞİVLENECEK | Render edilmeyen veya birleştirilmiş bileşenler; Commit 3'te bant |
| Diğer `docs/*_SPECIFICATION.md` (SOUND_ROOM, EMPATHY, CHOOSER, MODEL_SHOWCASE, BRANDS, SERVICE_JOURNEY, DEVICE_COMPARISON) | KORUNDU | Kodla uyumlu (Faz 0 öncesi audit) |
| `docs/HOMEPAGE_CREATIVE_DIRECTION.md`, `HOMEPAGE_MOODBOARD.md`, `docs/archive/*` | ARŞİVLENECEK / KORUNDU | Zaten arşiv kökçüğü veya arşiv |

## 7. Plan dosyası (güvenlik kopyası; repo dışı)

> Konum: `C:\Users\…\.claude\plans\pasted-content-id-75a5-…md`. Bu dosya **kaynak olarak kullanılmaz** (F1-5: temizliği ayrı onayla).

| Plan dosyası bölümü | Durum | Yeni yer / not |
|---|---|---|
| Kapsamlı site analizi (EK) | KORUNDU (tarihsel referans) | Bulguları Faz 2 audit listelerinde yeniden doğrulanacak; sayıları sabit gerçek kabul edilmez |
| Belge uyum raporu | GÜNCELLENDİ | Bulguları bu harita ve MASTER_PLAN'a işlendi |
| Taslak / v1 / v2 / v3 / FINAL MASTER STRATEGY özetleri | GÜNCELLENDİ | Tek geçerli sürüm `MASTER_PLAN.md`. Eski sürümlerdeki çelişkili ifadeler GEÇERSİZ (BUSINESS_SOT §12) |
| "Doğrulanmış düzeltmeler D1/D2" | SoT'A TAŞINDI | ASSET_SOT §2 (D1), LOCAL_SOT §1 ve CONVERSION_SOT §1 (D2) |
| "Business Source of Truth envanteri" (42 madde) | SoT'A TAŞINDI | Faz 0 SoT dosyaları |
| **158 soruluk işletme formu (20 kategori)** | SoT'A TAŞINDI (sorular). **Eski formun cevap/not alanları yeni gerçek olarak kullanılmaz** | Eşleme §7.1 |

### 7.1 158 soruluk formun eşlemesi

| Eski kategori | Yeni soru bölümü (`FAZ0_QUESTIONNAIRE.md`) | Kanonik SoT |
|---|---|---|
| 1 İşletme bilgileri | §1 | BUSINESS_SOT §1–3, §5 |
| 2 Darıca merkez bilgileri | §2, §3 | LOCAL_SOT §1–2 |
| 3 Ekip / uzman | §6, §25 | BUSINESS_SOT §4 |
| 4 Hizmetler | §4 | SERVICE_SOT §1 |
| 5 Hasta süreci | §5 | SERVICE_SOT §2 |
| 6 SGK süreci | §8 | SERVICE_SOT §3 |
| 7 Teknik servis | §9 | SERVICE_SOT §4 |
| 8 Cihaz deneme | §4, §5 | SERVICE_SOT §1.5 |
| 9 Markalar | §7 | PRODUCT_SOT §1–2 |
| 10 Darıca'ya özgü | §11 | LOCAL_SOT §4 |
| 11 Gebze'ye özgü | §12 | LOCAL_SOT §5 |
| 12 Çayırova'ya özgü | §13 | LOCAL_SOT §6 |
| 13 Yerel çalışmalar | §11 (Q11.3–Q11.4) | LOCAL_SOT §4 |
| 14 Fotoğraf / video | §27 | ASSET_SOT |
| 15 İletişim bilgileri | §20 | BUSINESS_SOT §3, CONVERSION_SOT §1 |
| 16 Google Business Profile | §14 | GOOGLE_SOT §1 |
| 17 Analytics / GA4 / GTM / GSC | §15–§17 | GOOGLE_SOT §1–3 |
| 18 Google Ads | §18 | GOOGLE_SOT §1 |
| 19 Sık sorulan sorular | §23 | BUSINESS_SOT §10 |
| 20 Farklılaştıran özellikler | §24, §25 | BUSINESS_SOT §7 |

- Eski formdaki "(D)" işaretli notlar (ör. "0543 numarası nedir", "görsel AI mı") **GEÇERSİZ**. D1/D2 ve Faz 0 SoT ile kapandılar.

## 8. OWNER_INPUTS.md

| Konu | Durum | Not |
|---|---|---|
| `OWNER_INPUTS.md` | **Oluşturulmadı (F1-1)** | Görevi `FAZ0_QUESTIONNAIRE.md` ve SoT dosyaları üstlendi. Güvenlik kopyası §7'de eşlendi |
