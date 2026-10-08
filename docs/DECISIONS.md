# Architectural Decisions

> Bu dosya canlı bir karar günlüğüdür — yeni her mimari karar, tarihli yeni bir madde olarak eklenir; eski kararlar silinmez, aşıldıklarında not düşülerek korunur.

## 2026-07-16

> **Durum notu (2026-09-26):** Bu tarihteki kararlardan üçü sonradan fiilen aşıldı — aşağıda madde madde işaretlendi. Kayıt, gerçek olanı yansıtması için silinmedi; ne karar verildiği ve neden değiştiği görünür kalsın diye korundu.

- Büyük componentler numaralandırılacak (Hero001, CTA001...) — **AŞILDI:** gerçek uygulama numarasız, betimleyici isimler kullanıyor (`Hero`, `Closing`, `Trust`...). Bkz. `docs/PROJECT_ARCHITECTURE.md` §6 (2026-09-26'da koda göre güncellendi).
- UI componentleri isim bazlı olacak (Button, Input, Badge...) — geçerli, uygulanmaya devam ediyor.
- Her component kendi klasöründe bulunacak. — geçerli.
- Her component kendi CSS dosyasına sahip olacak. — kısmen geçerli; gerçek uygulamada çoğu component Astro'nun scoped `<style>` bloğunu kullanıyor, ayrı `.css` dosyası yalnızca birkaç `*.tokens.css` dosyasında var. Bu maddenin tam kod-seviyesi denetimi bu turun kapsamı dışında bırakıldı.
- Design Token sistemi kullanılacak. — geçerli.
- Dark Mode ilk sürümde olmayacak. — **AŞILDI (kısmen):** canlı site hâlâ Light-only (bu kısım hâlâ geçerli), ama `/ds/` demo kataloğu için ayrı, canlı siteden bağımsız bir Dark tema alt sistemi zaten mevcut. Bkz. `docs/DESIGN_SYSTEM.md` Kapsam notu ve `src/ds/README.md`.
- Dokümantasyon üç dosya ile sınırlandırıldı. — **AŞILDI:** proje artık 20'den fazla `.md` dokümanına sahip (COMPANY, PRINCIPLES, DESIGN_SYSTEM_GUIDE, SEARCH_STRATEGY, IMPLEMENTATION_STANDARD, QUALITY_GATES + `docs/` altında çok sayıda spesifikasyon dosyası). Bu sınır fiilen terk edildi.

## 2026-09-26

- Coğrafi Local SEO/GEO önceliği resmî olarak 4 kademeli hiyerarşiye bağlandı: Darıca (ana merkez) → Gebze/Çayırova (öncelikli) → Kocaeli (üst bölgesel otorite) → Dilovası/Tuzla/Pendik (ikincil/çevre). Tek kaynak: COMPANY.md §17.
- `QUALITY_GATES.md` oluşturuldu — SEO, Local SEO, GEO/AI Search, Schema, Canonical, Sitemap, 404/Link QA, Responsive QA, Build & Release, Production Deploy Approval için ayrı, kontrol edilebilir yayın kapıları tanımlandı.
- `docs/HOMEPAGE_CREATIVE_DIRECTION.md` ve `docs/HOMEPAGE_MOODBOARD.md` arşivlendi; içerikleri, gerçek 11-bölüm ana sayfa mimarisiyle senkronize edilerek yeni `docs/HOMEPAGE_SPECIFICATION.md`'de birleştirildi.
- `HERO_SPECIFICATION.md` ve `TRUST_SPECIFICATION.md`'nin "kilitli kopya" bölümleri, gerçek üretim koduyla (`hero.data.ts`, `trust.data.ts`) senkronize edildi.
- `IMPLEMENTATION_GUIDE.md` (Header brifi) tamamlanmış/tarihsel olarak işaretlendi.
- Bu tur yalnızca dokümantasyon değişikliğidir; hiçbir `.astro`/`.ts`/`.css`/production kodu değiştirilmedi.
> **Durum notu (2026-10-07):** 2026-09-26 tarihli "4 kademeli coğrafi hiyerarşi" kararındaki sıra (Gebze/Çayırova aynı kademe) **AŞILDI**. Güncel sıra K7'dedir: Darıca > Gebze > Çayırova > Kocaeli > diğer hizmet alanları. Eski kayıt silinmedi.

## 2026-10-06 (Strateji kilitleme)

> Kaynak: kullanıcı onayları. Gerekçe ve ayrıntı: `MASTER_PLAN.md` §3. İşletme verisi: `docs/source-of-truth/*`.

- **K1 Marka:** Tek ve resmî marka "Avrasya İşitme Cihazları"; eniyicihaz.com yalnızca alan adı. Title eki "| Avrasya İşitme Cihazları" yalnızca gerektiğinde, mekanik olmadan.
- **K2 Telefon:** Ana numara (telefon + WhatsApp) header ve birincil CTA'larda; diğer iki numara footer ve İletişim'de rol etiketiyle.
- **K3 Fiyat / kampanya:** Zaman duyarlı bilgiler tarih ve kaynakla tutulur, görsele gömülmez. (Pil kampanyasının güncelliği 2026-10-07'de doğrulandı; aşağıya bkz.)
- **K4 Form:** İleride kısa randevu / ücretsiz test talebi formu; sağlık verisi yok; ayrı KVKK ve altyapı planı.
- **K5 UX:** Mobile-first; dokunma hedefi en az 48×48 px; gövde metni temel değeri 17 px.
- **K6 Sayfa açma:** Keyword başına sayfa yok; aynı niyet tek kanonik sayfada; doorway yok.
- **K7 Yerel model:** Tek fiziksel merkez Darıca; Gebze ve Çayırova şube değil; yerel SEO önceliği Darıca > Gebze > Çayırova > Kocaeli.
- **A1 Logo:** Gerçek logo dosyaları kullanılır; logo yeniden çizilmez; erişilebilir ad marka adı; tagline site metnine kopyalanmaz.
- **A2 Marka kullanımı:** İlk ve resmî kullanımda tam ad; sonraki doğal kullanımda kısa ad.
- **A3 GBP:** Mevcut GBP vardır; sıfırdan kurulmaz; audit ileride yapılır.
- **B1 Belge mimarisi:** `MASTER_PLAN.md` + `docs/strategy/` + `docs/tech/`. Belgeler silinmez veya hemen taşınmaz; önce eşleme (DOC_MIGRATION_MAP).
- **B2 Kuruluş / Darıca ayrımı:** Kuruluş bilgisi ile Darıca merkezinin açılışı ayrı tutulur. "2009'dan beri Darıca'da" ifadesi yasak. (Darıca açılış tarihi 2026-10-07'de netleşti; aşağıya bkz.)
- **B3 Marka gösterimi:** "ENİYİCİHAZ" ve "En İyi" içeren tagline kullanılmaz; yeni slogan üretilmez.
- **D1:** Sitedeki gerçek merkez fotoğrafları işletmeye aittir ve gerçektir.
- **D2:** Üç gerçek işletme telefonu vardır; rolleri K2'de.

## 2026-10-07 (Faz 0: Business & Governance Foundation tamamlandı)

- `docs/source-of-truth/` altında 8 SoT dosyası ve `FAZ0_QUESTIONNAIRE.md` oluşturuldu (commit `f02b7c4`). **İşletme gerçeklerinin birinci kaynağı SoT'tur.**
- SoT çatışma hiyerarşisi kabul edildi: kullanıcının güncel doğrulaması > SoT [DOĞRULANDI] > MASTER_PLAN > DECISIONS > strateji/teknik belgeler > eski belgeler > koddan çıkarılan varsayım.
- SoT güvenlik kuralı: şifre, API key, token, secret, OAuth bilgisi ve özel kurum numarası yazılmaz.
- Faz 0'da işletme sahibinin doğruladığı ve önceki kayıtların yerine geçen bilgiler (ayrıntı SoT'ta):
  - Darıca merkezinin açılışı Ağustos 2024; önceki "yaklaşık 3 yıl" kaydı geçersiz (BUSINESS_SOT §2).
  - Ekip 2009'dan beri aynı değil. Erdinç Kılıç'ın organizasyondaki süresi ile sektör deneyimi farklı kavramlar (BUSINESS_SOT §4).
  - Birincil ve form e-postası aynı adres (BUSINESS_SOT §3).
  - 18 marka satılıyor; başka satılan marka yok (PRODUCT_SOT §1).
  - 7 güne kadar deneme "satın alarak deneme; uygun bulunmazsa ücret iadesi" olarak anlatılır; merkezdeki demo ayrı; kulak içi cihazlar 7 günlük eve deneme kapsamı dışında (SERVICE_SOT §1.5).
  - Walk-in kabul edilir; hizmet bazında randevu gerekliliği devam eder (SERVICE_SOT T5).
  - Kullanıcı kaynaklı bir "kullanılmayacak fotoğraf" listesi yok (ASSET_SOT §2).
- **Karar verilmemiş konular** (karar gibi yazılmaz):
  - Yetkili bayi iddiası: [DOĞRULAMA GEREKLİ]
  - NuEar–Starkey ilişkisi ve adlandırması: [DOĞRULAMA GEREKLİ]
  - SGK güncel tutar ve prosedürleri: [TIME-SENSITIVE], [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ]
  - Cihaz fiyatlarının sitede yayınlanması: henüz kararlaştırılmadı
  - Maps'te görünen "Avrasia" adı: audit'te incelenecek; değiştirme kararı yok
  - Schema varlık/tip modeli: teknik doğrulama sonrası, Faz 3 uygulamasından önce kesinleşecek

## 2026-10-07 (Faz 1 planı onaylandı)

- **F1-1:** `OWNER_INPUTS.md` oluşturulmayacak. Görevini SoT ve `FAZ0_QUESTIONNAIRE.md` üstlenir; plan dosyasındaki 158 soruluk güvenlik kopyası `docs/tech/DOC_MIGRATION_MAP.md` §7'de eşlendi.
- **F1-2:** `COMPANY.md` kısa kanonik özet olur ve ayrıntılar için SoT'a referans verir.
- **F1-3:** COMPANY'deki yerel SEO kapsam listesi korunur; evde hizmet alanı ayrı başlıkta yazılır.
- **F1-4:** Faz 1 ayrı dalda (`docs/phase-1-strategy-architecture`) 3 commit ile yürür: (1) anayasa belgeleri, (2) strategy, (3) tech + bantlar. Her commit kullanıcı onayıyla atılır.
- **F1-5:** Plan dosyasındaki eski sürümlerin temizliği Faz 1'de yapılmaz; ayrı onayla yapılır.
- Faz 1 düzeltmeleri:
  - Eski audit sayıları sabit gerçek olarak kullanılmaz.
  - Consent davranışı bug olarak varsayılmaz, yeniden audit edilir.
  - Schema tip kararları kilitlenmez.
  - "18 marka" bilgisi title ve meta'ya mekanik olarak eklenmez.
- `MASTER_PLAN.md` kilitli ana plan olarak oluşturuldu; plan dosyasındaki strateji sürümlerinin yerine geçer.

## 2026-10-07 (Faz 1 kapanışı: Faz 2 temel audit kapısı)

- Faz 1 kapanış audit'i yapıldı; Faz 1 geçti. Yeni plan katmanı gerekmiyor.
- **Faz 2 temel audit kapısı (kilitli):** Faz 2'de her indekslenebilir sayfa için iki ayrı karar zorunludur.
  - **Sayfa:** KORU / YENİDEN YAZ / BİRLEŞTİR / YÖNLENDİR / KALDIR
  - **Hero:** DOĞRU / DEĞİŞMELİ / BAŞKA SAYFADAN KOPYA / İLGİSİZ
- Audit yapılmadan mevcut sayfa içeriği ve mevcut hero otomatik olarak korunmuş kabul edilmez.
- Özellikle incelenecekler: duplicate / near-copy sayfalar; şehir adı değiştirilmiş sayfalar; ilgisiz hero; başka sayfadan kopyalanmış hero; search intent ile uyuşmayan hero veya metin; eski veya yanlış işletme bilgisi; thin content; cannibalization; yanlış CTA / yanlış hedef.
- Audit önce rapor olarak sunulur; uygulama ayrı onayla yapılır. Ayrıntı: `MASTER_PLAN.md` §7.1, `docs/tech/TEMPLATES.md` §6.
- Belge tutarlılık düzeltmeleri: oluşturulmuş Faz 1 belgelerindeki "planlandı" işaretleri güncellendi; QUALITY_GATES §1 niyet sınıflarına "Local" eklendi; DESIGN_SYSTEM_GUIDE ve IMPLEMENTATION_STANDARD'daki otorite cümleleri SoT hiyerarşisine göre düzeltildi (işletme gerçeklerinin kanonik kaynağı SoT; COMPANY.md kısa kanonik özet).
