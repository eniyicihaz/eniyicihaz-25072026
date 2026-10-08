# LOCAL_SOURCE_OF_TRUTH.md

> **Durum:** ACTIVE · Faz 0 · Oluşturulma: 2026-10-06 · Son güncelleme: 2026-10-07 (Faz 0 son bilgi aktarımı)
> **Amaç:** Bu dosya şu bilgilerin tek kaynağıdır:
> - Tek fiziksel merkez, adres ve tarif, erişim, çalışma saatleri ve NAP
> - Coğrafi öncelik ve evde hizmet alanı
> - Darıca, Gebze, Çayırova ve Kocaeli için yalnızca doğrulanmış yerel bilgiler

**Kurallar** (tam metin: `BUSINESS_SOURCE_OF_TRUTH.md` §0)
- **Etiketler:** [DOĞRULANDI] · [MEVCUT BELGELERDE VAR] · [KULLANICIDAN BİLGİ GEREKLİ] · [ERİŞİM GEREKLİ] · [MEVCUT — AUDIT GEREKLİ] · [TIME-SENSITIVE] · [VERİ BEKLENİYOR] · [DOĞRULAMA GEREKLİ] · [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] · [ESKİ / GEÇERSİZ]
- **Çatışma hiyerarşisi:** Kullanıcının güncel doğrulaması > SoT'taki [DOĞRULANDI] kayıt > MASTER STRATEGY > DECISIONS > strateji/teknik belgeler > eski dokümanlar > koddan çıkarılan varsayım.
- **Güvenlik:** Credential bilgisi yazılmaz.
- **Yerel bilgi sınırı:**
  - Mahalle, ulaşım hattı, süre, mesafe, hastane, kullanıcı profili ve istatistik **uydurulmaz**.
  - Yerel SEO amacıyla şehir hakkında genel bilgi üretilmez.
  - **Şube olmayan yer şube gibi gösterilmez.**
  - Yerel bilgiler sayfalarda kullanılmadan önce gerektiğinde güncellik ve gerçeklik kontrolünden geçirilir.

---

## 1. Tek Fiziksel Merkez ve NAP

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Kullanım | Freshness |
|---|---|---|---|---|---|---|
| Fiziksel yapı | Tek fiziksel merkez Darıca'da. Gebze ve Çayırova şube değil | [DOĞRULANDI] | İşletme sahibi (K7) | 2026-10-07 | Tüm yerel içerik, schema, GBP | STATIC |
| Darıca merkezinin açılışı | **Ağustos 2024** | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Darıca hub, Hakkımızda | STATIC |
| İşletme adı (NAP) | Avrasya İşitme Cihazları | [DOĞRULANDI] | K1 / A2 | 2026-10-07 | NAP, schema | STATIC |
| Adres | Fevziçakmak Mah. Dr. Zeki Acar Cad. No:77/7 Asansör 1. Kat, Darıca / Kocaeli | [MEVCUT BELGELERDE VAR] | COMPANY.md §1, footer `company.ts`, KVKK | — | NAP, schema, İletişim | YENİDEN DOĞRULA (NAP audit) |
| Posta kodu | 41700 | [MEVCUT BELGELERDE VAR] | `src/lib/schema.ts` | — | Schema | YENİDEN DOĞRULA |
| Koordinat | 40.772815, 29.404797 | [MEVCUT BELGELERDE VAR] | `src/lib/schema.ts`, harita embed'i | — | Schema `geo` | YENİDEN DOĞRULA |
| Adres tarifi (doğrulanmış) | Palandöken Eczanesi'nin üst katı; Farabi Devlet Hastanesi durağının karşısında; yeni metro durağı çapraz tarafta; asansörle 1. kat | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Darıca hub, İletişim | YENİDEN DOĞRULA (metro durağı yeni) |
| Adres tarifi (belgede) | "Farabi Ağız ve Diş Sağlığı Merkezi girişinin tam karşısı" | [MEVCUT BELGELERDE VAR] | COMPANY.md §1 | — | Doğrulanmış tarifle birlikte kullanılıp kullanılmayacağı [DOĞRULAMA GEREKLİ] | — |
| Telefon: ana | 0533 773 31 99 (telefon + WhatsApp) | [DOĞRULANDI] | İşletme sahibi (K2/D2) | 2026-10-07 | Header, birincil CTA, WhatsApp, schema `telephone` | STATIC |
| Telefon: ofis mobil | 0543 386 63 60 | [DOĞRULANDI] | İşletme sahibi (D2) | 2026-10-07 | Footer, İletişim (rol etiketiyle) | STATIC |
| Telefon: ofis sabit | 0262 656 32 77 | [DOĞRULANDI] | İşletme sahibi (D2) | 2026-10-07 | Footer, İletişim (rol etiketiyle) | STATIC |
| E-posta | eniyicihaz@gmail.com (birincil ve form) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | İletişim, schema | STATIC |
| Sitede telefonların mevcut kullanımı | Footer'da 2 numara ("Cep" 0533, "Merkez" 0262). 0543 metin olarak sitede yok; yalnızca tabela fotoğrafında görünüyor | [MEVCUT BELGELERDE VAR] | `company.ts`, site analizi | — | NAP audit | — |
| Schema / NAP / GBP telefon biçimi | NAP/entity audit fazında netleşecek | [VERİ BEKLENİYOR] | K2 | — | — | — |
| Çalışma saatleri | Hafta içi 08:45–19:00 · Cumartesi 09:00–19:00 · Pazar kapalı | [MEVCUT BELGELERDE VAR] | COMPANY.md §19, `company.ts`, schema | — | Footer, schema, GBP | YENİDEN DOĞRULA |
| Öğle arası | Yok | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Saatler | STATIC |
| Resmî tatiller | Kapalı | [DOĞRULANDI] [TIME-SENSITIVE] | İşletme sahibi | 2026-10-07 | Schema `specialOpeningHours`, GBP | GÜNCEL TUTULMALI (her yıl tatil takvimi) |
| Google Maps kısa linki (yol tarifi) | https://maps.app.goo.gl/vKijvMzNn3D22cy26 | [MEVCUT BELGELERDE VAR] | `company.ts` (kodda "gerçek GBP konumu" yorumu) | — | Yol tarifi CTA'ları | [MEVCUT — AUDIT GEREKLİ] |
| Maps'te görünen ad | "Darıca Avrasia İşitme Cihazları" ("Avrasia" yazımı) | [DOĞRULANDI] (görünen ad) [MEVCUT — AUDIT GEREKLİ] | İşletme sahibi; `company.ts` `mapEmbedSrc` | 2026-10-07 | Resmî GBP/NAP audit kapsamında incelenecek. **Hemen değiştirme kararı verilmez** | — |

## 2. Merkez: Erişim ve Fiziksel Özellikler

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Kullanım | Freshness |
|---|---|---|---|---|---|---|
| Asansör ve tekerlekli sandalye | Asansör var; tekerlekli sandalye için uygun | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Darıca hub, İletişim, GBP erişilebilirlik özellikleri | YENİDEN DOĞRULA |
| Otopark | Merkeze özel otopark bilgisi verildi (ayrıntı: [KULLANICIDAN BİLGİ GEREKLİ]) | [DOĞRULANDI] (otopark var) | İşletme sahibi | 2026-10-07 | Darıca hub, SSS | YENİDEN DOĞRULA |
| Toplu taşıma ile erişim | Merkeze toplu taşımayla ulaşılabiliyor; Farabi Devlet Hastanesi durağının karşısında | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Darıca hub, İletişim | YENİDEN DOĞRULA |
| Hatlar | **Gebze:** 502, 440, 510, 515 · **Çayırova:** 550 · **Beylikbağı:** 415, 425 · **Dilovası:** 410 · **Mutlukent:** 510 | [DOĞRULANDI] [TIME-SENSITIVE] | İşletme sahibi | 2026-10-07 | Darıca hub, Gebze/Çayırova sayfaları, İletişim | GÜNCEL TUTULMALI (hat değişikliklerine karşı) |
| Yakındaki referanslar | Palandöken Eczanesi üst kat; yeni metro durağı çapraz tarafta | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Tarif | YENİDEN DOĞRULA |
| Walk-in ziyaret | Merkez walk-in ziyaretleri kabul ediyor | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | SSS, CTA | YENİDEN DOĞRULA |
| Hizmet bazında randevu | Walk-in kabul edilmesine rağmen **hizmet bazında randevu gerekliliği devam ediyor** (SERVICE_SOT §1 randevu sütunu). İki bilgi birlikte geçerlidir | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | SSS, CTA | YENİDEN DOĞRULA |
| Merkezdeki bölümler | Fotoğraflarda bekleme alanı, danışma odası, test odası ve odyometri odası görünüyor. Tam liste verilmedi | [MEVCUT BELGELERDE VAR] · Tam liste: [KULLANICIDAN BİLGİ GEREKLİ] | Fotoğraflar | — | Darıca hub | — |
| İlk ziyaret süresi | Merkez içinde yaklaşık 1 saat (1–2 saat) | [DOĞRULANDI] | İşletme sahibi (SERVICE_SOT §2.15) | 2026-10-07 | SSS | YENİDEN DOĞRULA |

## 3. Coğrafi Öncelik ve Hizmet Alanı

| Bilgi | Değer | Durum | Kaynak | Son doğrulama |
|---|---|---|---|---|
| Yerel SEO öncelik sırası | 1 Darıca → 2 Gebze → 3 Çayırova → 4 Kocaeli → 5 diğer hizmet alanları | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Darıca'nın rolü | Ana fiziksel merkez ve ana yerel otorite. Gebze ve Çayırova genişlemesi Darıca temeli kurulduktan sonra, gerçek verilerle yapılır | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| **Evde hizmet alanı** | **Kocaeli'nin tamamı ve İstanbul Anadolu Yakası'nın tüm ilçeleri.** Merkezde verilen hizmetlerin kapsamı doğrultusunda sunuluyor | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Fiziksel merkez ile evde hizmet alanının ilişkisi | Fiziksel merkez yalnızca Darıca'dadır; evde hizmet alanı bundan geniştir. Evde hizmet verilen ilçeler **şube gibi gösterilmez** | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| SEO önceliği ile hizmet alanının ayrımı | COMPANY.md §17'deki "kapsam dışı" ilçeler (İzmit, Körfez, Derince, Başiskele) **yerel SEO sayfası önceliği** açısından kapsam dışıdır. Evde hizmet ise Kocaeli'nin tamamını kapsar. İkisi çelişmez | [DOĞRULANDI] (evde hizmet) · [MEVCUT BELGELERDE VAR] (SEO kapsamı) | İşletme sahibi; COMPANY.md §17 | 2026-10-07 |
| Doorway yasağı | Şehir adı değiştirilerek sayfa üretmek yasaktır. Gebze ve Çayırova sayfaları Darıca'nın kopyası olmaz. Her yerel sayfanın kendi niyeti, içerik amacı, gerçek yerel bağlamı, SSS'i, müşteri davranışı ve gerçek ulaşım/erişim verisi olur | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |

## 4. Darıca: Doğrulanmış Yerel Bilgiler

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Freshness |
|---|---|---|---|---|---|
| Merkezin açılışı | Ağustos 2024 | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| ~~Merkezin Darıca'daki hizmet süresi: "yaklaşık 3 yıl"~~ | — | [ESKİ / GEÇERSİZ] | Önceki kayıt (2026-10-06) | — | — |
| Danışanların geldiği Darıca mahalleleri | Fevziçakmak, Abdi İpekçi, Bağlarbaşı, Kazımkarabekir | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
| SGK'da genellikle kullanılan hastane (Darıca) | Darıca Farabi Devlet Hastanesi (SERVICE_SOT §3) | [DOĞRULANDI] [TIME-SENSITIVE] [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
| Darıcalı danışanların gerçek sık soruları (Darıca'ya özgü) | Genel SSS konuları BUSINESS_SOT §10'da. Darıca'ya özgü sorular ayrıca verilmedi | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | — |
| Yerel kurum, dernek, belediye ilişkileri ve gerçek etkinlikler | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | — |
| Yerel basın ve belediye haber linkleri | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | — |

## 5. Gebze

> Şube yok. Gebze içeriği "Gebze'den Darıca merkezimize" modeliyle ve yalnızca gerçek veriyle yazılır.

| Bilgi | Değer | Durum | Kaynak | Son doğrulama |
|---|---|---|---|---|
| Gebze'den gelen müşteri payı | Yaklaşık %20 | [DOĞRULANDI] [TIME-SENSITIVE] | İşletme sahibi | 2026-10-07 |
| Gebze'den merkeze toplu taşıma | Hatlar 502, 440, 510, 515 | [DOĞRULANDI] [TIME-SENSITIVE] | İşletme sahibi | 2026-10-07 |
| SGK'da genellikle kullanılan hastane (Gebze) | Gebze Fatih Devlet Hastanesi (SERVICE_SOT §3) | [DOĞRULANDI] [TIME-SENSITIVE] [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] | İşletme sahibi | 2026-10-07 |
| Evde hizmet | Gebze, Kocaeli genelindeki evde hizmet alanı içinde | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Gebze'den gelen danışanların mahalleleri | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — |
| Gebze'ye özgü, gerçekten gözlenen ihtiyaç ve sorular | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — |
| Mevcut Gebze sayfasının durumu | Darıca şablonunun yakın kopyası (site analizi). Sadeleştirme planlandı | [MEVCUT BELGELERDE VAR] | — | — |

## 6. Çayırova

> Şube yok. İçerik yapısı Gebze sayfasından farklı olur. **Gebze'nin cevapları Çayırova'ya otomatik olarak kopyalanmaz.**

| Bilgi | Değer | Durum | Kaynak | Son doğrulama |
|---|---|---|---|---|
| Çayırova'dan merkeze toplu taşıma | Hat 550 | [DOĞRULANDI] [TIME-SENSITIVE] | İşletme sahibi | 2026-10-07 |
| Evde hizmet | Çayırova, Kocaeli genelindeki evde hizmet alanı içinde | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Çayırova'dan gelen müşteri payı ve mahalleler | — | [VERİ BEKLENİYOR] | — | — |
| Çayırova'ya özgü, gerçekten gözlenen ihtiyaç ve sorular | — | [VERİ BEKLENİYOR] | — | — |
| Mevcut Çayırova sayfasının durumu | Darıca şablonunun yakın kopyası. Sadeleştirme planlandı | [MEVCUT BELGELERDE VAR] | — | — |

## 7. Kocaeli ve Diğer Hizmet Alanları

| Bilgi | Değer | Durum | Kaynak | Son doğrulama |
|---|---|---|---|---|
| Kocaeli sayfasının rolü | İl düzeyinde yönlendirici sayfa. Darıca'nın ve pillar sayfaların önüne geçmez | [DOĞRULANDI] (strateji) | MASTER STRATEGY | 2026-10-06 |
| Diğer erişim hatları | Beylikbağı: 415, 425 · Dilovası: 410 · Mutlukent: 510 | [DOĞRULANDI] [TIME-SENSITIVE] | İşletme sahibi | 2026-10-07 |
| SGK'da genellikle kullanılan diğer hastane | Tuzla Devlet Hastanesi (SERVICE_SOT §3) | [DOĞRULANDI] [TIME-SENSITIVE] [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] | İşletme sahibi | 2026-10-07 |
| Evde hizmet alanı | Kocaeli'nin tamamı ve İstanbul Anadolu Yakası'nın tüm ilçeleri (§3) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Gebze ve Çayırova dışında danışanların geldiği yerlerin payları | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — |
