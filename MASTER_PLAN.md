# MASTER_PLAN.md: Avrasya İşitme Cihazları / eniyicihaz.com

> **Durum:** ACTIVE · Kilitli ana strateji · Oluşturulma: 2026-10-07 (Faz 1)
> **Amaç:** Projenin tek ana planı. Bütün tasarım, içerik, SEO, GEO, teknik, ölçüm ve dönüşüm işleri bu plana göre yürür.
> **Bu dosya işletme gerçeği tutmaz.** İşletme gerçekleri yalnızca `docs/source-of-truth/*` içindedir; bu plan onlara referans verir.
> Daha önce plan dosyasında bulunan taslak, v1, v2 ve v3 strateji metinlerinin **yerine geçer**. O metinler kaynak olarak kullanılmaz (bkz. `docs/tech/DOC_MIGRATION_MAP.md` §7).

---

## 1. Kaynak Hiyerarşisi

Bilgi veya kural çelişirse öncelik sırası:

| Sıra | Kaynak | Ne için |
|---|---|---|
| 1 | **Faz 0 Source of Truth**: `docs/source-of-truth/*` (commit `f02b7c4` ve sonraki onaylı güncellemeler) | **Tüm işletme gerçekleri** (kimlik, ekip, hizmet, ürün, yerel, dönüşüm, Google, asset). Kullanıcının açık ve güncel doğrulaması SoT'a işlenerek bu seviyeye girer |
| 2 | `MASTER_PLAN.md` (bu dosya) | Kilitli strateji, faz sınırları |
| 3 | `docs/DECISIONS.md` | Tarihli kararlar |
| 4 | Kök anayasa belgeleri: `COMPANY.md`, `PRINCIPLES.md`, `SEARCH_STRATEGY.md`, `QUALITY_GATES.md`, `DESIGN_SYSTEM_GUIDE.md`, `IMPLEMENTATION_STANDARD.md` | Kendi yetki alanlarındaki kurallar |
| 5 | `docs/strategy/*`, `docs/tech/*` | Operasyonel ve teknik ayrıntı |
| 6 | Eski belgeler (`docs/*_SPECIFICATION.md` vb.) | Tarihsel ve bileşen bağlamı |
| 7 | Mevcut kod ve eski site metinleri | Yalnızca mevcut durumun tespiti. **Doğrulanmış işletme bilgisini geçersiz kılamaz** |

**Kurallar**
- Belgeler işletme gerçeklerini kopyalamaz; ilgili SoT bölümüne referans verir.
- SoT'ta [DOĞRULANDI] olmayan bilgi kamuya açık içerikte, schema'da veya CTA'da kesin bilgi gibi kullanılmaz.
  - [DOĞRULAMA GEREKLİ], [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] ve [VERİ BEKLENİYOR] etiketli bilgiler doğrulanana kadar kullanılmaz.
- Geçersiz ifadeler listesi tek yerde tutulur: `BUSINESS_SOURCE_OF_TRUTH.md` §12.

## 2. Ana Hedef

- Avrasya İşitme Cihazları'nın Darıca'daki tek fiziksel merkezini yerel otorite hâline getirmek.
- Kullanıcının karar yolculuğunun tamamını (şüphe → test → SGK → seçim → deneme → alışma → servis) gerçek bilgiyle cevaplayan bir bilgi ve hizmet sitesi kurmak.
- Ölçülebilir iş hedefleri SoT'tadır: `BUSINESS_SOURCE_OF_TRUTH.md` §8 ve `CONVERSION_SOURCE_OF_TRUTH.md` §5.

## 3. Kilitli Kararlar

> Kararların tarihli kaydı `docs/DECISIONS.md` içindedir. Burada yalnızca kuralın kendisi yer alır; işletme verisi SoT'tadır.

| # | Karar | Kural | SoT referansı |
|---|---|---|---|
| **K1** | Marka | Tek ve resmî marka "Avrasya İşitme Cihazları". eniyicihaz.com yalnızca alan adıdır. Title'a marka eki yalnızca gerektiğinde eklenir, mekanik olarak eklenmez | BRAND_SOT §1 |
| **K2** | Telefon rolleri | Ana numara (telefon ve WhatsApp) header'da ve birincil CTA'larda. Diğer iki numara footer ve İletişim'de, rol etiketiyle | LOCAL_SOT §1, CONVERSION_SOT §1 |
| **K3** | Zaman duyarlı fiyat | Fiyat ve kampanya bilgileri TIME-SENSITIVE'dir: tarih, kaynak ve sorumlu kaydıyla tutulur, görsele gömülmez. **Sitede cihaz fiyatı yayınlanıp yayınlanmayacağına henüz karar verilmedi** | PRODUCT_SOT §4–5 |
| **K4** | Form | Kısa randevu / ücretsiz test talebi formu ileride eklenebilir. Sağlık verisi toplanmaz. Ayrı KVKK ve altyapı planı gerekir. Hedef e-posta SoT'ta | CONVERSION_SOT §2 |
| **K5** | UX | Mobile-first. Dokunma hedefi en az 48×48 px. Gövde metni için temel değer 17 px | BRAND_SOT §6–7 |
| **K6** | Sayfa açma | Her keyword için sayfa açılmaz; aynı niyet tek kanonik sayfada toplanır. Yeni sayfa ancak farklı niyet, ihtiyaç, konu, yerel ihtiyaç veya güçlü bir mimari gerekçe varsa açılır. Doorway yok | SERVICE_SOT §6 |
| **K7** | Yerel model | Tek fiziksel merkez Darıca'dadır. Yerel SEO önceliği: Darıca > Gebze > Çayırova > Kocaeli > diğer hizmet alanları. Gebze ve Çayırova şube gibi gösterilmez. Evde hizmet alanı, yerel SEO kapsamından ayrı bir bilgidir | LOCAL_SOT §1, §3 |
| **A1** | Logo | Header ve footer'da gerçek logo dosyaları kullanılır. Logo yeniden çizilmez. Erişilebilir adı marka adıdır. Logodaki tagline site metnine kopyalanmaz | ASSET_SOT §1 |
| **A2** | Marka kullanımı | İlk ve resmî kullanımda tam ad, sonraki doğal kullanımlarda kısa ad. Marka tekrarı keyword stuffing'e dönüşmez | BRAND_SOT §1 |
| **A3** | GBP | Mevcut GBP vardır; sıfırdan kurulmaz. Profil, NAP ve bağlantılar ilerideki audit fazında doğrulanır | GOOGLE_SOT §1 |
| **B1** | Belge mimarisi | Kök anayasa belgeleri + `MASTER_PLAN.md` + `docs/source-of-truth/` + `docs/strategy/` + `docs/tech/`. Belgeler silinmez; taşıma ayrı onayla yapılır | DOC_MIGRATION_MAP |
| **B2** | Kuruluş ve Darıca ayrımı | Kuruluş yılı ve yeri ile Darıca merkezinin açılışı ayrı tutulur. "2009'dan beri Darıca'da", "2009'dan beri aynı ekip" ve "2009'dan beri işitme sektöründe" ifadeleri yasaktır | BUSINESS_SOT §0.5, §2, §4 |
| **B3** | Marka gösterimi | Eski "ENİYİCİHAZ" gösterimi ve "En İyi" içeren tagline kullanılmaz. Yeni slogan üretilmez | BRAND_SOT §2, §4 |

## 4. Kararı Verilmemiş Konular

> Aşağıdakiler **karar verilmiş gibi yazılmaz**, kamuya açık içerikte kesin bilgi olarak kullanılmaz.

| Konu | Durum | Nerede |
|---|---|---|
| "Yetkili bayi" iddiası | [DOĞRULAMA GEREKLİ] | BUSINESS_SOT §5, PRODUCT_SOT §1 |
| NuEar–Starkey ilişkisi ve adlandırma | [DOĞRULAMA GEREKLİ] | PRODUCT_SOT §2 |
| SGK güncel tutarları ve prosedürleri | [TIME-SENSITIVE] [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] | SERVICE_SOT §3 |
| Cihaz fiyatlarının sitede yayınlanması | Karar verilmedi | PRODUCT_SOT §4 |
| Maps'te görünen "Avrasia" adı | [MEVCUT — AUDIT GEREKLİ]; değiştirme kararı yok | LOCAL_SOT §1, GOOGLE_SOT §1 |
| Schema varlık ve tip modeli (tek düğüm mü, Organization ve LocalBusiness alt tipi ayrımı, yerel sayfalarda kullanım) | Teknik doğrulama gerekli. Faz 3 uygulamasından önce şunlar birlikte değerlendirilerek kesinleşir: Schema.org yapısı, Google structured data uygunluğu, gerçek işletme modeli | `docs/tech/SCHEMA_GRAPH.md` (Faz 1 Commit 3) |
| Consent ve event davranışı | Yeniden audit edilecek; mevcut davranış hata olarak kabul edilmez | `docs/tech/MEASUREMENT_PLAN.md` (Faz 1 Commit 3) |

## 5. Stratejik Sütunlar

| Sütun | İlke | Ayrıntılı belge |
|---|---|---|
| Search intent | Mimari niyete göre kurulur; keyword başına sayfa açılmaz (K6) | `SEARCH_STRATEGY.md` §7, `docs/strategy/INTENT_MAP.md` (planlandı) |
| Yerel SEO | Darıca hub'ı önce. Gebze ve Çayırova yalnızca gerçek veriyle, kopya olmadan. Kocaeli yönlendirici sayfa | `SEARCH_STRATEGY.md` §10, `docs/strategy/LOCAL_SEO_PLAYBOOK.md` (planlandı) |
| Topical authority | Pillar → cluster → SSS → yerel bağlam → iç link. Thin content yok | `docs/strategy/CONTENT_ARCHITECTURE.md` (planlandı) |
| GEO / AI arama | Answer-first, varlık tutarlılığı, kaynak gösterme, güncellik | `SEARCH_STRATEGY.md` §9 |
| E-E-A-T | Yalnızca SoT'taki ekip ve işletme olguları kullanılır; uydurma yok | `docs/strategy/EEAT_AND_EDITORIAL.md` (planlandı) |
| Görsel | Gerçek fotoğraflar niyete göre dağıtılır; "kullanılmayacak foto" listesi yoktur; teknik ve SEO uygunluğu audit edilir | `docs/strategy/IMAGE_GUIDELINES.md` (planlandı) |
| UX ve dönüşüm | Mobil öncelikli CTA'lar, telefon rolleri, walk-in + hizmet bazında randevu, deneme dili | `PRINCIPLES.md` §9, CONVERSION_SOT |
| Teknik SEO ve ölçüm | Mevcut altyapı korunur; değişiklikten önce audit | `QUALITY_GATES.md`, `docs/tech/*` (planlandı) |

## 6. Belge Mimarisi

```
/ (kök)
  MASTER_PLAN.md            ana plan (bu dosya)
  COMPANY.md                kısa kanonik özet → SoT
  PRINCIPLES.md             davranış, ton, çalışma ilkeleri
  SEARCH_STRATEGY.md        arama, yerel SEO ve GEO stratejisi
  QUALITY_GATES.md          yayın kapıları
  DESIGN_SYSTEM_GUIDE.md    tasarım sistemi yönetişimi
  IMPLEMENTATION_STANDARD.md uygulama kalite standardı
docs/source-of-truth/       Faz 0: işletme gerçekleri (birinci kaynak)
docs/strategy/              INTENT_MAP, LOCAL_SEO_PLAYBOOK, CONTENT_ARCHITECTURE,
                            EEAT_AND_EDITORIAL, IMAGE_GUIDELINES          (Faz 1 Commit 2)
docs/tech/                  DOC_MIGRATION_MAP (Commit 1), BRAND_MIGRATION, SCHEMA_GRAPH,
                            MEASUREMENT_PLAN, TEMPLATES                   (Faz 1 Commit 3)
docs/DECISIONS.md           tarihli karar günlüğü
docs/*_SPECIFICATION.md     bileşen spec'leri (Commit 3'te durum bandı)
```

## 7. Fazlar ve Sınırlar

> Her faz şu döngüyle yürür: **ANALYZE → PLAN → APPROVE → IMPLEMENT → TEST/QA → APPROVE → PRODUCTION**.
> - Commit ve push yalnızca kullanıcı onayıyla yapılır.
> - Production deploy hiçbir zaman otomatik yapılmaz.

| Faz | Kapsam | Sınır (yapılmayacaklar) | Durum |
|---|---|---|---|
| **Faz 0** Business & Governance Foundation | İşletme gerçekleri SoT'a işlendi | Kod yok | **Tamamlandı** (`f02b7c4`) |
| **Faz 1** Belge ve strateji mimarisi | Commit 1: anayasa belgeleri + DOC_MIGRATION_MAP + bu plan. Commit 2: strategy belgeleri. Commit 3: tech belgeleri + DSG/IMPL güncellemeleri + eski spec bantları | Yalnızca `.md`. Kod, içerik, asset, schema ve tracking yok. Belge silme/taşıma yok. Plan dosyası temizliği yok (ayrı onay) | **Sürüyor** |
| **Faz 2** Hızlı ve güvenli düzeltmeler | Önce **yeniden kod taraması**, sonra: 2009/Darıca/"aynı ekip" ifadeleri durumlarına göre (kesin hatalı / dolaylı sorunlu / doğrulama bekleyen); "18+" metinleri bağlama göre; kırık linkler; test CTA hedefi; consent/event audit'i ve gerekiyorsa düzeltme; Gebze ve Çayırova sadeleştirmesi; KVKK e-postası (onaylı); zaman duyarlı pil kampanyasının görselden metne alınması | Yeni sayfa yok; tasarım geçişi yok | Planlı |
| **Faz 3** Altyapı | Marka geçişi ve logo/favicon; NAP ve GBP audit; schema varlık modelinin kesinleşmesi ve uygulanması; breadcrumb; navigasyon; mobil sabit çubuk; 48/17 token'ları; görsel teknik işleri | Schema, doğrulama tamamlanmadan uygulanmaz | Planlı |
| **Faz 4** Darıca otoritesi | Darıca hub'ı, merkez hizmetleri, ekip ve editoryal politika (rıza ile), gerçek fotoğraf dağıtımı | Doğrulanmamış yerel bilgi yok | Planlı |
| **Faz 5** Bilgi Merkezi ve şablon sadeleştirme | Pillar'lar, konsolidasyon, yeni rehberler, form (KVKK planıyla) | Thin content yok; SGK rakamları yalnızca resmî doğrulamadan sonra | Planlı |
| **Faz 6–8** Gebze → Çayırova → Kocaeli | Gerçek yerel veriyle genişleme | Kopya ve şehir adı değiştirilmiş sayfa yok | Planlı |
| **Faz 9** Sürekli iyileştirme | Ölçüm, freshness kontrolleri, AI görünürlük testi | — | Planlı |
| Ayrı faz: Governance Hardening | CLAUDE.md ve benzeri çalışma kuralları | Faz 1'e dahil değil | Planlı |

## 8. Kalite ve Süreç
- Yayın kapıları: `QUALITY_GATES.md` (Faz 1'de eklenen §12 kapıları dahil).
- Her iş kapanmadan önce kontrol edilir:
  - SoT çelişki taraması
  - Yasak ifade taraması (BRAND_SOT §3, BUSINESS_SOT §12)
  - `git diff --check`
  - Credential/secret taraması
  - Değişikliklerin kapsam içinde kaldığının doğrulanması
- Production deploy için **o release'e özel, açık kullanıcı onayı** gerekir (QUALITY_GATES §10).
