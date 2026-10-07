# SERVICE_SOURCE_OF_TRUTH.md

> **Durum:** ACTIVE · Faz 0 · Oluşturulma: 2026-10-06 · Son güncelleme: 2026-10-07 (Faz 0 son bilgi aktarımı)
> **Amaç:** Bu dosya şu konuların tek kaynağıdır: gerçekte verilen hizmetler, gerçek hasta/müşteri süreci, SGK işleyişi ve teknik servis.

**Kurallar** (tam metin: `BUSINESS_SOURCE_OF_TRUTH.md` §0)
- **Etiketler:** [DOĞRULANDI] · [MEVCUT BELGELERDE VAR] · [KULLANICIDAN BİLGİ GEREKLİ] · [ERİŞİM GEREKLİ] · [MEVCUT — AUDIT GEREKLİ] · [TIME-SENSITIVE] · [VERİ BEKLENİYOR] · [DOĞRULAMA GEREKLİ] · [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] · [ESKİ / GEÇERSİZ]
- **Çatışma hiyerarşisi:** Kullanıcının güncel doğrulaması > SoT [DOĞRULANDI] > MASTER STRATEGY > DECISIONS > strateji/teknik belgeler > eski dokümanlar > koddan çıkarılan varsayım.
- **Güvenlik:** Bu dosyaya credential bilgisi yazılmaz.

> ⚠️ **BU DOSYAYA ÖZEL KURAL**
> - Hizmet ve hasta süreci bilgileri **varsayımla veya mevcut site metnine dayanarak doldurulmaz**.
> - §1'deki bilgilerin tamamı işletme sahibi tarafından verilmiştir ve **verildiği haliyle** kaydedilmiştir. Yeni hizmet, süre, ücret, yaş grubu veya yönlendirme kriteri eklenmemiştir; genel tıbbi bilgiyle genişletilmemiştir.
> - İşletme sahibinin henüz cevaplamadığı alanlar **[KULLANICIDAN BİLGİ GEREKLİ]** veya **[VERİ BEKLENİYOR]** olarak kalır.

---

## 1. Hizmet Kaydı: İşletme sahibi doğrulaması (2026-10-07)

**Tablo kısaltmaları**
- **Durum:** Her satırdaki bütün doldurulmuş alanlar için geçerlidir.
- **Uygulayan:** "Ekip" = §1.1'deki üç personel. İşletme sahibine göre 1–40 arasındaki hizmetlerin tamamını bu üç kişi yapabiliyor.
- **Yaş:** "Tüm yaşlar" = tüm yaş grupları; yaş açısından özel bir sınır belirtilmedi (ürün ve hizmet bağlamında).
- **Süreler:**
  - **İşlem süresi:** Merkezde işlemin sürdüğü zaman.
  - **Teslim süresi:** Ürünün veya işin teslim edildiği zaman.
  - İki süre birbirinin yerine kullanılmaz.

| No | Hizmet | Durum | Ücret | Randevu | Uygulayan | Yaş | İşlem süresi | Teslim süresi | Yönlendirme | Not | Kaynak | Son doğrulama | Freshness |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| H1 | Ücretsiz işitme testi | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | 5 yaş ve üstü | 10 dakika | — | Genel kriterler: §1.2 | — | İşletme sahibi | 2026-10-07 | STATIC |
| H2 | Odyometri | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | 5 yaş ve üstü | 15 dakika | — | Genel kriterler: §1.2 | — | İşletme sahibi | 2026-10-07 | STATIC |
| H3 | Timpanometri | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | 5 yaş ve üstü | 10 dakika | — | Genel kriterler: §1.2 | — | İşletme sahibi | 2026-10-07 | STATIC |
| H4 | Çocuklar için işitme testi / Oyun odyometrisi | [DOĞRULANDI] Veriliyor | **Ücretli** | Gerekli | Ekip | **3 yaş ve üstü** | 10 dakika | — | Genel kriterler: §1.2 | — | İşletme sahibi | 2026-10-07 | STATIC |
| H5 | Tinnitus (çınlama) değerlendirmesi | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | 5 yaş ve üstü | 10 dakika | — | Genel kriterler: §1.2 | H29'dan ayrı kayıt | İşletme sahibi | 2026-10-07 | STATIC |
| H6 | İşitme cihazı seçimi | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 10 dakika | — | — | — | İşletme sahibi | 2026-10-07 | STATIC |
| H7 | İşitme cihazı denemesi / demo | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 20 dakika | — | — | H28'den ayrı kayıt; birleştirilmedi. **Kulak içi cihazlarda deneme merkezde demo olarak yapılabilir** (§1.5). Kamuya açık dilde H28 ile karışmaması için "ücretsiz deneme" ifadesi kullanılmaz (§1.5) | İşletme sahibi | 2026-10-07 | STATIC |
| H8 | Kulak kalıbı | [DOĞRULANDI] Veriliyor | **Ücretli**; cihaz satın alımlarında ilk kalıplar **ücretsiz** | Gerekli | Ekip | Tüm yaşlar | Kulak izi alma: 10 dakika | 3 gün içinde | — | — | İşletme sahibi | 2026-10-07 | STATIC |
| H9 | 3D kulak kalıbı | [DOĞRULANDI] Veriliyor | **Ücretli**; cihaz satın alımlarında ilk kalıplar **ücretsiz** | Gerekli | Ekip | Tüm yaşlar | Kulak izi alma: 10 dakika | 3 gün içinde | — | — | İşletme sahibi | 2026-10-07 | STATIC |
| H10 | Cihaz teslimi | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 10–15 dakika (değişken) | — | — | — | İşletme sahibi | 2026-10-07 | STATIC |
| H11 | Cihaz ayarı | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 5–15 dakika (değişken) | — | — | — | İşletme sahibi | 2026-10-07 | STATIC |
| H12 | REM / gerçek kulak ölçümü | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 10–15 dakika (değişken) | — | — | — | İşletme sahibi | 2026-10-07 | STATIC |
| H13 | Cihaz programlama | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 10 dakika | — | — | — | İşletme sahibi | 2026-10-07 | STATIC |
| H14 | Uzaktan cihaz ayarı | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 15 dakika | — | — | **A&M ve Audifon dışındaki cihazlarda yapılabiliyor** [DOĞRULANDI, 2026-10-07] | İşletme sahibi | 2026-10-07 | STATIC |
| H15 | Kontrol randevusu | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 5 dakika | — | — | Sıklık ve kapsam: hasta süreci P12 (ilk kontrol yaklaşık 2 hafta sonra) ve P13 (uzun dönem takip) | İşletme sahibi | 2026-10-07 | STATIC |
| H16 | Evde hizmet | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 10–60 dakika (değişken) | — | — | **Alan: Kocaeli'nin tamamı ve İstanbul Anadolu Yakası'nın tüm ilçeleri.** Merkezde verilen hizmetlerin kapsamı doğrultusunda sunuluyor [DOĞRULANDI, 2026-10-07]. Fiziksel merkez yalnızca Darıca | İşletme sahibi | 2026-10-07 | STATIC |
| H17 | Teknik servis | [DOĞRULANDI] Veriliyor | **Duruma göre** | Gerekli | Ekip | Tüm yaşlar | — | 3 gün içinde | — | "Duruma göre ücretli" bilgisi korunur | İşletme sahibi | 2026-10-07 | STATIC |
| H18 | Bakım | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 10 dakika | — | — | — | İşletme sahibi | 2026-10-07 | STATIC |
| H19 | Temizlik | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 10 dakika | — | — | — | İşletme sahibi | 2026-10-07 | STATIC |
| H20 | Onarım | [DOĞRULANDI] Veriliyor | **Duruma göre** | Gerekli | Ekip | Tüm yaşlar | — | 1–3 gün içinde | — | "Duruma göre ücretli" bilgisi korunur | İşletme sahibi | 2026-10-07 | STATIC |
| H21 | Garanti işlemleri | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 1–5 gün (değişken) | — | — | Sürenin işlem mi teslim mi olduğu belirtilmedi; verildiği gibi kaydedildi | İşletme sahibi | 2026-10-07 | STATIC |
| H22 | Yedek / geçici cihaz | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 10 dakika | — | — | H28 (deneme cihazı) ile aynı hizmet kabul edilmez | İşletme sahibi | 2026-10-07 | STATIC |
| H23 | Pil ve aksesuar satışı | [DOĞRULANDI] Veriliyor | **Ücretli** | **Gerekmez** | Ekip | Tüm yaşlar | 5 dakika | — | — | Fiyat tutarı kaydedilmedi | İşletme sahibi | 2026-10-07 | [TIME-SENSITIVE] (fiyat) |
| H24 | SGK işlemlerinde destek | [DOĞRULANDI] Veriliyor | Ücretsiz | **Gerekmez** | Ekip | Tüm yaşlar | 10 dakika | — | — | Süreç ayrıntısı: §3 | İşletme sahibi | 2026-10-07 | STATIC |
| H25 | İade / cayma süreci | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 10 dakika | — | — | Mevcut uygulama: hasta süreci P14 (yalnızca işletme uygulaması; hukuki yorum yok) | İşletme sahibi | 2026-10-07 | STATIC |
| H26 | Randevu | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 1 dakika | — | — | İşletme bilgisindeki haliyle ayrı kayıt; anlamı yeniden yorumlanmadı | İşletme sahibi | 2026-10-07 | STATIC |
| H27 | Gerektiğinde KBB'ye yönlendirme | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 5 dakika | — | §1.2 kriterleri | — | İşletme sahibi | 2026-10-07 | STATIC |
| H28 | **Cihazı satın alarak 7 güne kadar deneme; uygun bulunmaması halinde ücret iadesi** (eski ad: "Denemek amacıyla cihaz verilmesi") | [DOĞRULANDI] Veriliyor | **Cihaz ücreti ödenir; uygun bulunmazsa cihaz iade alınır ve ödenen ücret kesintisiz iade edilir** (düzeltme 2026-10-07; önceki "ücretsiz" kaydı geçersiz) | Gerekli | Ekip | Tüm yaşlar | 10 dakika | — | — | Deneme süresi 7 güne kadar. **Kulak içi cihazlar bu kapsamda değildir**, eve 7 günlük deneme olarak verilmez (§1.5). H7 ve H22'den ayrı kayıt | İşletme sahibi | 2026-10-07 | STATIC |
| H29 | Tinnitus (çınlama) değerlendirmesi ve maskeleme testleri | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 10–15 dakika (değişken) | — | — | H5'ten ayrı kayıt | İşletme sahibi | 2026-10-07 | STATIC |
| H30 | Tıkaç ve yüzücü kulaklıkları (su geçirmez) | [DOĞRULANDI] Veriliyor | **Ücretli** | Gerekli | Ekip | Tüm yaşlar | Kulak izi alma: 10 dakika | 3 gün içinde | — | Fiyat tutarı kaydedilmedi | İşletme sahibi | 2026-10-07 | [TIME-SENSITIVE] (fiyat) |
| H31 | Periyodik cihaz bakımı ve temizliği | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 10 dakika | — | — | Sıklık: hasta süreci P13 (yaklaşık 3 ayda bir hortum/filtre; satın almadan 2 yıl sonra bakım, sonra yıllık) | İşletme sahibi | 2026-10-07 | STATIC |
| H32 | Geçici cihaz / yedek cihaz temini | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 10 dakika | — | — | H28 ile aynı hizmet kabul edilmez | İşletme sahibi | 2026-10-07 | STATIC |
| H33 | Nem alıcı ürünler (kapsül ve kutular) | [DOĞRULANDI] Veriliyor | **Ücretli** | **Gerekmez** | Ekip | Tüm yaşlar | 1 dakika | — | — | Fiyat tutarı kaydedilmedi | İşletme sahibi | 2026-10-07 | [TIME-SENSITIVE] (fiyat) |
| H34 | Hijyen ve bakım ürünleri | [DOĞRULANDI] Veriliyor | **Ücretli** | **Gerekmez** | Ekip | Tüm yaşlar | 1 dakika | — | — | Fiyat tutarı kaydedilmedi | İşletme sahibi | 2026-10-07 | [TIME-SENSITIVE] (fiyat) |
| H35 | İşitme cihazı tutacağı (tutaç) | [DOĞRULANDI] Veriliyor | **Ücretli** | **Gerekmez** | Ekip | Tüm yaşlar | 1 dakika | — | — | Fiyat tutarı kaydedilmedi | İşletme sahibi | 2026-10-07 | [TIME-SENSITIVE] (fiyat) |
| H36 | Koklear implant pili satışı | [DOĞRULANDI] Veriliyor | **Ücretli** | **Gerekmez** | Ekip | Tüm yaşlar | 1 dakika | — | — | Fiyat tutarı kaydedilmedi | İşletme sahibi | 2026-10-07 | [TIME-SENSITIVE] (fiyat) |
| H37 | SGK süreçleri hakkında bilgilendirme | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 10 dakika | — | — | — | İşletme sahibi | 2026-10-07 | STATIC |
| H38 | Kulak temizliği | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 5–10 dakika (değişken) | — | Genel kriterler: §1.2 | **Yalnızca:** çok fazla kir yoksa basit aparatlarla küçük kulak temizliği. Tıbbi KBB kulak temizliği veya ileri medikal işlem değildir; bu yönde genişletilmez | İşletme sahibi | 2026-10-07 | STATIC |
| H39 | İşitme kaybının olumsuz etkileri hakkında bilgilendirme | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 10 dakika | — | — | — | İşletme sahibi | 2026-10-07 | STATIC |
| H40 | İşitme cihazının faydaları hakkında bilgilendirme | [DOĞRULANDI] Veriliyor | Ücretsiz | Gerekli | Ekip | Tüm yaşlar | 10 dakika | — | — | — | İşletme sahibi | 2026-10-07 | STATIC |

**Randevu özeti** (İşletme sahibi, 2026-10-07):
- **Gerekli:** H1–H22, H25–H32, H37–H40.
- **Gerekmez:** H23, H24, H33, H34, H35, H36.

**Ücretli kalemler:**
- **Ücretli:** H4, H8, H9, H23, H30, H33–H36.
- **Duruma göre:** H17, H20.
- **Satın alarak deneme, uygun bulunmazsa ücret iadesi:** H28.
- **Ücretsiz:** Diğer tüm hizmetler.
- **Kalıp istisnası:** H8 ve H9'da cihaz satın alımlarında ilk kalıplar ücretsizdir.

### 1.1 Uygulayan Personel

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Freshness |
|---|---|---|---|---|---|
| H1–H40 hizmetlerini yapabilen personel | **Odym. Erdinç Kılıç** · **Od. Sunay Özgür** · **Teknik servis personeli Birsen Şahin** | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA (personel değişiminde) |
| Unvan yazımı | Verildiği biçimde korunur. Yeni unvan üretilmez, kısaltmalar açılmaz | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| Eğitim ve deneyim | **Erdinç Kılıç: Odyometri mezunu** · **Sunay Özgür: Odyoloji mezunu**, yaklaşık 28 yıl deneyim · **Birsen Şahin: teknik servis**, yaklaşık 12 yıl deneyim. Üçünde de üretici eğitimleri var. Ayrıntılar BUSINESS_SOT §4'te. Eğitim bilgileri birbirine karıştırılmaz | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA (yıllık) |
| İsim ve fotoğrafların sitede yayın rızası (KVKK) | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | — |

### 1.2 KBB / Başka Sağlık Kuruluşuna Yönlendirme (işletme sahibinin gerçek uygulaması)

> Bu liste genişletilmez. Genel tıbbi bilgiyle yeni kriter eklenmez.

| # | Durum | Yönlendirme | Durum etiketi | Kaynak | Son doğrulama |
|---|---|---|---|---|---|
| 1 | İşitme testinde şüpheli / olağandışı sonuç | KBB | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| 2 | Ani işitme kaybı | KBB / acil | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| 3 | Çok yoğun kulak kiri | KBB | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| 4 | Kulak ağrısı / akıntı | KBB | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| 5 | Çocuklarda belirli durumlar | KBB | [DOĞRULANDI]. "Belirli durumlar"ın ayrıntısı verilmedi | İşletme sahibi | 2026-10-07 |
| 6 | Cihaz gerektirmeyen durumlar | Uygun yönlendirme | [DOĞRULANDI]. **Ayrıntı [VERİ BEKLENİYOR]** | İşletme sahibi | 2026-10-07 |

#### 1.2.1 KBB'ye yönlendirme kriterleri: ayrıntılı liste (İşletme sahibi, 2026-10-07) [DOĞRULANDI]

> Yukarıdaki 6 maddelik özet ile bu 12 maddelik liste **işletme sahibinin verdiği haliyle** birlikte korunur. Liste genişletilmez; doğrulanmamış kriter eklenmez. Bu bir klinik protokol değil, merkezin yönlendirme uygulamasıdır.

| # | Kriter | Yönlendirme | Durum | Kaynak | Son doğrulama | Freshness |
|---|---|---|---|---|---|---|
| K1 | Ani işitme kaybı | KBB | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| K2 | Aktif kulak akıntısı / enfeksiyon | KBB | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| K3 | Şiddetli kulak ağrısı | KBB | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| K4 | Akut / kronik otitis media | KBB | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| K5 | Yabancı cisim / yoğun serumen | KBB | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| K6 | Kulak kepçesi / dış kulak yolu anomalileri | KBB | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| K7 | Cauliflower ear / travmatik deformiteler | KBB | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| K8 | Objektif ve subjektif test sonuçlarının uyuşmaması | KBB | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| K9 | Tek taraflı işitme kaybı | KBB | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| K10 | Nedeni açıklanamayan, dalgalanan işitme kaybı | KBB | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| K11 | Çocuk öyküsündeki risk faktörleri | KBB | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| K12 | Belirgin konuşma / dil gelişimi gecikmesi | KBB | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |

- K11 ve K12, özetteki "çocuklarda belirli durumlar" maddesinin işletme sahibinin verdiği ayrıntısıdır. Başka bir çocuk kriteri eklenmez.
- "Cihaz gerektirmeyen durumlar → uygun yönlendirme" maddesinin ayrıntısı hâlâ **[VERİ BEKLENİYOR]**.

### 1.3 Önemli Açıklamalar (işletme sahibi talimatı, 2026-10-07)

- Oyun odyometrisi (H4) 3 yaş ve üstü içindir.
- Tinnitus değerlendirmesi (H5) ile tinnitus maskeleme testleri (H29) **ayrı kayıtlar** olarak tutulur.
- Cihaz denemesi (H7) ile 7 güne kadar denemek amacıyla cihaz verilmesi (H28) ayrı kayıtlardır. Otomatik olarak **birleştirilmez**.
- Yedek/geçici cihaz (H22, H32) ile 7 günlük deneme cihazı (H28) otomatik olarak **aynı hizmet kabul edilmez**. (H22 ile H32'nin birbirine göre ilişkisi de yorumlanmamıştır.)
- Kulak içi cihaz istisnası ve "ücretsiz deneme" dil kuralı: §1.5.

### 1.5 Deneme Kuralları (İşletme sahibi, 2026-10-07) [DOĞRULANDI]

| Kural | Değer | Durum | Kaynak | Son doğrulama | Freshness |
|---|---|---|---|---|---|
| 7 güne kadar deneme: kanonik ifade | "**Cihazı satın alarak 7 güne kadar deneme; uygun bulunmaması halinde ücret iadesi.**" | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| 7 günlük denemenin gerçek süreci | Hasta satın almak istediği cihazın ücretini öder. Cihazı deneme amacıyla kullanır. Süre 7 güne kadardır. Uygun bulmazsa cihaz iade alınır ve ödenen ücret kesinti yapılmadan iade edilir | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| "Ücretsiz deneme" ifadesi | Kamuya açık strateji ve SoT dilinde **kullanılmaz**. Yalnızca gerçekten farklı bir hizmeti ifade ediyorsa kullanılabilir | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| Kulak içi cihazlarda deneme | Merkezde demo/deneme yapılabilir (H7 kapsamı) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| Kulak içi cihazlar ve 7 günlük deneme | Kulak içi cihazlar **eve verilen 7 günlük deneme kapsamına girmez**. H28 ve P8'deki genel 7 günlük deneme kuralı kulak içi cihazlara uygulanmaz | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| Kayıt ayrımı | Kulak içi cihazlarda merkez denemesi (H7) ile eve verilen 7 günlük deneme (H28) ayrı kayıtlardır | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| İlgili iade uygulaması | Kulak içi cihazlarda iade süreci işletilmiyor (P14, §2.14) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
- Kulak kalıbı (H8), 3D kulak kalıbı (H9) ve tıkaç/yüzücü kulaklığında (H30) **işlem süresi** (kulak izi alma 10 dakika) ile **teslim süresi** (3 gün içinde) ayrı kaydedilir.
- Teknik servis (H17) ve onarımda (H20) "duruma göre ücretli" bilgisi korunur.
- Fiyatı değişebilecek kalemler (H23, H30, H33–H36) [TIME-SENSITIVE] olarak işaretlidir. Fiyat tutarı kaydedilmemiştir.
- Kulak temizliği (H38) yalnızca işletme sahibinin tarif ettiği sınırlı uygulama olarak anlatılır.

### 1.4 Sitedeki Sayfalarla Eşleme (bilgi amaçlı; sayfa varlığı doğrulama sayılmaz)

| Hizmet (H) | Eski kayıt kodu (2026-10-06) | Sitedeki sayfa [MEVCUT BELGELERDE VAR] |
|---|---|---|
| H1 | S1 | `/degerlendirme/ucretsiz-isitme-testi/` |
| H2 | S2 | `/degerlendirme/odyometri/` |
| H3 | S3 | `/degerlendirme/timpanometri/` |
| H4 | S4 | `/degerlendirme/cocuk-isitme-testi/` |
| H5, H29 | S5 | `/degerlendirme/tinnitus-degerlendirme/` |
| H6 | S7 | `/neden-orijinal/marka-danismanligi/`, `/neden-orijinal/ucretsiz-danismanlik/` |
| H7, H28 | S8 | `/uygulama-ayar/cihaz-deneme/` |
| H8, H9 | S9 | `/uygulama-ayar/kalip-alimi/` |
| H10 | S10 | `/uygulama-ayar/cihaz-uygulama/` |
| H11, H12 | S11 | `/uygulama-ayar/kisiye-ozel-ayar/` |
| H13 | S12 | `/uygulama-ayar/kisiye-ozel-programlama/` |
| H14 | S13 | `/uygulama-ayar/uzaktan-ayar/` |
| H15 | S14 | `/uygulama-ayar/kontrol-randevusu/` |
| H16 | S15 | `/uygulama-ayar/evde-isitme-cihazi-hizmeti/` |
| H17 | S16 | `/servis-bakim/teknik-servis/` |
| H18, H31 | S17 | `/servis-bakim/periyodik-bakim/` |
| H19 | S18 | `/servis-bakim/cihaz-temizligi/` |
| H20 | S19 | `/servis-bakim/onarim-takibi/` |
| H21 | S20 | `/servis-bakim/garanti-islemleri/` |
| H22, H32 | S21 | Sayfası yok |
| H23, H33–H36 | S22 | `/servis-bakim/pil-aksesuar/`, `/neden-orijinal/orijinal-aksesuar/` |
| H24, H37 | S23 | `/sgk-isitme-cihazi-odemesi/`, `/sgk/*` |
| H25 | S24 | `/neden-orijinal/kolay-degisim/` |
| H26 | S25 | Ayrı sayfası yok (CTA'lar `tel:`) |
| H27, H38 | S26 | Sayfası yok |
| H30 | — | Sayfası yok (`/isitme-cihazlari/suya-dayanikli/` cihaz türü sayfasıdır, bu ürünle eşlenmedi) |
| H39, H40 | — | Ayrı sayfası yok (rehber içerikleriyle ilişkisi sonraki fazda değerlendirilecek) |
| — | S6 | `/degerlendirme/online-isitme-testi/`: site üzerindeki tarama aracı. Merkez hizmeti listesinde yok [MEVCUT BELGELERDE VAR] |

## 2. Gerçek Hasta / Müşteri Süreci

> **[DOĞRULANDI]**
> - **Kaynak:** İşletme sahibi. **Son doğrulama:** 2026-10-07.
> - **Kapsam:** Aşağıdaki 15 aşama, işletme sahibinin gerçek merkez uygulamasını anlatır.
> - **Freshness:** Süreçlerin ana mantığı STATIC. Zamanla değişebilecek operasyonel süreler ve uygulamalar "YENİDEN DOĞRULA" olarak işaretlidir.
>
> **Kurallar**
> - Metin işletme sahibinin verdiği haliyle kaydedildi.
> - Yeni aşama, genel tıbbi bilgi veya klinik protokol dili eklenmedi.
> - Hukuki sonuç üretilmedi. Özellikle iade/cayma yalnızca **işletmenin mevcut uygulaması** olarak kayıtlıdır.
> - Belgedeki eski genel sıra (COMPANY.md §11) bu tablonun yerine geçmez. Çelişki olursa bu tablo geçerlidir.

### 2.0 Kanonik Hasta Süreci Tablosu

**Tablo kısaltmaları:**
- **Kaynak** sütunu her satırda "İşletme sahibi"dir.
- **Son doğrulama** sütunu her satırda 2026-10-07'dir.
- **Tam metin** her aşamanın kendi alt bölümündedir (§2.1–§2.15).

| # | Aşama | Gerçek uygulama (özet; tam metin alt bölümde) | Süre | Gerekli belge/nesne | İlgili hizmet | KBB / yönlendirme | Not | Kaynak | Son doğrulama | Freshness |
|---|---|---|---|---|---|---|---|---|---|---|
| P1 | İlk temas | Gelişler en çok sırasıyla tabela (doğrudan geliş), tavsiye ve Google üzerinden. İletişim çoğunlukla telefonla; WhatsApp daha nadir | — | — | — | — | §2.1 | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
| P2 | Randevu | Çoğunlukla telefonla, çok nadiren WhatsApp'tan. İşleme göre saat aralığı verilir; işleme göre ön sorular sorulur | — | İşleme göre: deneme ve ayar için ilgili cihaz; tamir için işitme cihazı; pil ve aksesuar için pil numarası veya aksesuar modeli | H26 | — | Geç kalınacaksa en az 1 saat önceden bilgi istenir. §2.2 | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
| P3 | Gelirken getirilecekler | İlk ziyarette **varsa** işitme testi, reçete ve rapor istenir | — | Varsa: işitme testi, reçete, rapor | — | — | Başka belge veya nesne doğrulanmadı. §2.3 | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
| P4 | İlk görüşme | Hastanın talepleri sorulur; anamnez alınır | — | — | — | — | §2.4 | İşletme sahibi | 2026-10-07 | STATIC |
| P5 | İşitme testi / değerlendirme | Son 1 ay içinde test yaptırmışsa rutin olarak tekrar test yapılmaz, mevcut testle ilerlenir. Şüphe varsa test yenilenir. Timpanometri ve REM gerekli görülen hallerde yapılır | Test süreleri: H1–H3, H12 | Varsa mevcut test | H1, H2, H3, H12 | — | Herkese aynı testler uygulanmaz. §2.5 | İşletme sahibi | 2026-10-07 | STATIC |
| P6 | Test sonrası karar | Normal sonuçta buna göre ilerlenir. İşitme kaybı varsa cihaz bilgilendirme ve deneme sürecine geçilir. Şüpheli durumda KBB hekimine yönlendirilir | — | — | H27, H39, H40 | Şüpheli durumda KBB hekimi | §2.6 | İşletme sahibi | 2026-10-07 | STATIC |
| P7 | Cihaz seçimi | Önce tüm cihaz türleri anlatılır. Öncelik işitme kaybının derecesi ve kulak yapısı; sonra kullanım kolaylığı, yaşam tarzı ve estetik kaygılar. Marka belirlenmesi: §2.7 | — | — | H6 | — | **18 marka satılıyor; başka satılan marka yok.** §2.7 | İşletme sahibi | 2026-10-07 | STATIC |
| P8 | Cihaz denemesi | İşletmenin uygun gördüğü marka, genellikle orta veya üst teknoloji. Memnun kalınırsa ikinci deneme yapılmaz; farklı teknoloji seviyesi istenirse yapılabilir. Cihazı satın alarak 7 güne kadar deneme; uygun bulunmaması halinde ücret iadesi (kesintisiz). **Kulak içi cihazlar hariç:** eve 7 günlük deneme verilmez, merkezde demo/deneme yapılabilir | 7 güne kadar | — | H7, H28 | — | İşletmenin mevcut uygulaması; hukuki ifade içermez. §2.8, §1.5 | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
| P9 | SGK süreci | İki başlangıç senaryosu (A ve B). Ayrıntılar [VERİ BEKLENİYOR] | Hastane süresi işletmenin kontrolünde değil (P15) | Rapor, reçete, işitme testi (senaryoya göre sonradan temin edilebilir) | H24, H37 | — | Mevzuat yorumu yok. §2.9 | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
| P10 | Kalıp / teslim | Kalıp gerekiyorsa cihaz ilk teslimde standart prop veya dome ile verilir; kalıplar gelince değişim yapılır | Kulak izi alma 10 dakika; kalıp teslimi 3 gün içinde (H8/H9) | — | H8, H9, H10 | — | §2.10 | İşletme sahibi | 2026-10-07 | STATIC |
| P11 | Kullanım eğitimi | Takma/çıkarma, pil değişimi, şarj kutusu, kullanım süresi. Başlangıçta ilk hafta günde 2 saat, ikinci hafta günde 5 saat. İlk kontrole kadar gürültülü ortamda kullanılmaması. Temizlik eğitimi | — | — | H10 | — | §2.11 | İşletme sahibi | 2026-10-07 | STATIC |
| P12 | İlk kontrol | Teslimden yaklaşık 2 hafta sonra. Ayrıntılar §2.12 | Kontrol süresi: H15 | — | H15, H11 | — | Ses "**genellikle** 1 seviye" artırılır. §2.12 | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
| P13 | Uzun dönem takip | Her yıl test yenileme ve telefonla çağrı; ayarların güncellenmesi; yaklaşık 3 ayda bir hortum/filtre; 2. yılda bakım, sonra yıllık | — | — | H15, H18, H31 | — | §2.13 | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
| P14 | İade / cayma | Kulak içi cihazlarda iade alınmıyor. Talepte önce neden sorulur, çözüm denenir. İade başlarsa imza alınır; ücret 3–10 gün içinde, ödeme şekline göre. Özel durum yoksa kesinti yok | 3–10 gün (ödeme şekline göre) | İade edildiğine dair imza | H25 | — | **Yalnızca işletmenin mevcut uygulaması**; hukuki yorum yok. §2.14 | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
| P15 | Toplam süre | İlk gelişten cihaz teslimine yaklaşık 1 saat (işlemlere göre yaklaşık 1–2 saat). SGK'lı ve SGK'sız hasta için merkez içi süre aynı. Test, reçete ve rapor yoksa hastane süresine bağlı | Yaklaşık 1 saat (1–2 saat) | — | — | — | Aksine bir durum yoksa cihaz kullanımı aynı gün başlayabilir. §2.15 | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |

### 2.1 İlk Temas (P1)
- Hastalar en çok şu yollarla geliyor:
  1. Tabelayı görüp doğrudan merkeze gelerek,
  2. Tavsiye ile,
  3. Google üzerinden.
- İletişim:
  - Çoğunlukla telefon üzerinden ulaşıyorlar.
  - WhatsApp üzerinden iletişim daha nadir.

### 2.2 Randevu (P2)
- Randevular çoğunlukla telefon üzerinden, çok nadiren WhatsApp üzerinden oluşturuluyor.
- Randevu oluşturulurken:
  - Yapılacak işleme göre belirli bir saat aralığı veriliyor.
  - Hastaya hangi işlemi yapmak istediği soruluyor.
  - İşitme testi için test talebi soruluyor.
  - Cihaz denemesi ve ayar için ilgili cihazın getirilmesi ve işleme uygunluk durumu soruluyor.
  - Tamir için işitme cihazının getirilmesi isteniyor.
  - Pil ve aksesuar için pil numarası veya aksesuar modeli soruluyor.
  - Hastanın randevuya geç kalması halinde en az 1 saat önceden bilgi vermesi isteniyor.
  - Randevu sırasında özel bir talebi veya önceden bildirmesi gereken özel bir durumu olup olmadığı soruluyor.
- Bu bilgiler gerçek operasyonel randevu sürecidir.

### 2.3 Hastanın Merkeze Gelirken Getirmesi Gerekenler (P3)
- İlk ziyarette **varsa** şunlar isteniyor:
  - işitme testi,
  - reçete,
  - rapor.
- Başka belge veya nesne işletme sahibi tarafından doğrulanmadı.

### 2.4 İlk Görüşme (P4)
- Hastanın talepleri soruluyor.
- Anamnez alınıyor.

### 2.5 İşitme Testi / Değerlendirme (P5)
- Son 1 ay içinde işitme testi yaptırmış hastalara rutin olarak tekrar test yapılmıyor.
- Mevcut test üzerinden ilerleniyor.
- Mevcut testten şüphe duyulursa test yenileniyor.
- Timpanometri ve REM gerekli görülen hallerde yapılıyor.
- *Not:* "Herkese aynı testler uygulanır" şeklinde genelleme yapılmaz.

### 2.6 Test Sonrası Karar (P6)
- Testler normal çıkarsa buna göre ilerleniyor.
- İşitme kaybı mevcutsa işitme cihazı bilgilendirme ve deneme sürecine geçiliyor.
- Şüpheli bir durum görülürse KBB hekimine yönlendiriliyor.

### 2.7 Cihaz Seçimi (P7)
- **Bilgilendirme:** Öncelikle bütün işitme cihazı türleri hakkında bilgi veriliyor: kulak arkası, kulak içi, pilli, şarjlı ve diğer model ve türler.
- **Öncelikli kriterler:** İşitme kaybının derecesi ve kulak yapısı.
- **Sonraki kriterler:** Kullanım kolaylığı, yaşam tarzı ve estetik kaygılar.
- **Marka seçimi:**
  - **18 marka satılıyor; başka satılan marka yok.** (İşletme sahibi düzeltmesi, 2026-10-07. Önceki "yaklaşık 20 marka" ifadesi geçersizdir ve kullanılmaz. Mevcut 18 markalık liste korunur, yeni marka eklenmez.)
  - Kanonik ifade: "18 marka satıyoruz." İçeriğe göre "18 farklı işitme cihazı markasıyla çalışıyoruz" da kullanılabilir. Bu ifade, marka ilişkilerinin türü (yetkili bayi vb.) ayrıca doğrulanmış gibi bir anlam taşıyacak şekilde kullanılmaz (bkz. PRODUCT_SOT).
  - Hasta özellikle bir marka istemiyorsa marka; fiyat/performans veya teknolojik açıdan işletmenin değerlendirmesine göre seçiliyor.
  - Seçilen markanın neden uygun olduğu hastaya anlatılıyor.
- *Not:* Bu bilgi ileride PRODUCT_SOURCE_OF_TRUTH ile ilişkilendirilecek. Bu turda PRODUCT dosyası değiştirilmedi.

### 2.8 Cihaz Denemesi (P8): işletmenin mevcut uygulaması
- Deneme, öncelikle işletmenin uygun gördüğü marka üzerinden yapılıyor.
- Genellikle orta veya üst teknoloji işitme cihazıyla deneme yapılıyor.
- Hasta denenen cihazdan memnun kaldığı sürece ikinci cihaz denemesi yapılmıyor.
- Hasta farklı bir teknoloji seviyesi isterse ikinci deneme yapılabiliyor.
- Verilen bütün işitme cihazlarında 7 güne kadar deneme süresi bulunuyor. **Kulak içi cihazlar hariçtir.** Bu cihazlar eve verilen 7 günlük deneme kapsamına girmez; merkezde demo/deneme yapılabilir (düzeltme 2026-10-07, §1.5).
- Kanonik ifade: "Cihazı satın alarak 7 güne kadar deneme; uygun bulunmaması halinde ücret iadesi." Bu süreç için "ücretsiz deneme" ifadesi kullanılmaz.
- Hasta satın almak istediği cihazın ücretini ödüyor ve cihazı deneme için alıyor.
- 7 gün içinde olumsuzluk yaşanırsa cihaz iade alınıyor ve kesinti yapılmadan ücret iade ediliyor.
- *Not:* "7 gün yasal zorunluluktur" veya benzeri hukuki ifade eklenmez.

### 2.9 SGK Süreci (P9)
- **Senaryo A**
  - Hasta önce merkeze geliyor.
  - Cihazı satın alabiliyor.
  - Daha sonra SGK için rapor, reçete ve işitme testini temin edebiliyor.
- **Senaryo B**
  - Hasta önce işitme testini yaptırıp merkeze gelebiliyor.
  - Cihaz satın alma süreci başlatıldığında daha sonra rapor ve reçete alınabiliyor.
- SGK'nın hangi koşullarda ve nasıl uygulanacağına dair ayrıntılar **[VERİ BEKLENİYOR]** (bkz. §3). Mevzuat yorumu eklenmez.

### 2.10 Kalıp / Teslim (P10)
- Kalıp gerekiyorsa işitme cihazları ilk teslimde standart prop veya dome ile teslim ediliyor.
- Kalıplar geldiğinde değişim yapılıyor.
- Önceden doğrulanmış süreler (H8/H9 ile tutarlı):
  - kulak izi alma 10 dakika,
  - kalıp teslimi 3 gün içinde.

### 2.11 Kullanım Eğitimi (P11)
- **Teslim sırasında anlatılanlar:**
  - işitme cihazını takma ve çıkarma,
  - pil değişimi,
  - şarj kutusu kullanımı,
  - kullanım süresi.
- **Kullanım başlangıcı önerisi:**
  - ilk hafta günde 2 saat,
  - ikinci hafta günde 5 saat.
- **İlk kontrole kadar:** Gürültülü ortamlarda kullanmaması gerektiği anlatılıyor.
- **Temizlik eğitimi:** İşitme cihazı, kulak kalıbı, receiver, dome ve prop temizliği anlatılıyor.

### 2.12 İlk Kontrol (P12)
- Teslimden yaklaşık 2 hafta sonra hasta ilk kontrole çağrılıyor.
- İlk kontrolde:
  - İlk filtre değişimi veya hortum değişimi ücretsiz yapılabiliyor.
  - Filtre temizliği ve değişimi anlatılıyor.
  - İşitme cihazı sesi **genellikle** 1 seviye artırılıyor.
  - Hastanın ilk deneyimleri soruluyor.
  - Olumlu ve olumsuz yaşadıkları soruluyor ve not ediliyor.
  - Gereken bilgi ve ayar düzeltmeleri yapılıyor.
  - Hangi durumlarda merkeze tekrar gelmesi gerektiği anlatılıyor.
  - Talep edilirse telefon bağlantısı ve uygulama kurulumu yapılıyor.

### 2.13 Uzun Dönem Takip (P13)
- Hastaya her yıl işitme testini yenilemesi gerektiği söyleniyor.
- Her yıl sonunda telefonla iletişime geçilip hasta çağrılıyor.
- Güncel test verilerine göre işitme cihazı ayarları güncelleniyor.
- Yaklaşık 3 ayda bir hortum veya filtre değişimi için çağrılıyor.
- Cihaz satın alındıktan 2 yıl sonra cihaz bakımı öneriliyor.
- Sonrasında bakımın periyodik olarak, yıllık yapılması öneriliyor.

### 2.14 İade / Cayma (P14): yalnızca işletmenin mevcut uygulaması
- Kulak içi işitme cihazlarında iade süreci işletilmiyor; iade alınmıyor.
- Hasta iade talebinde bulunduğunda öncelikle nedeni soruluyor.
- Düzeltilebilecek bir durum varsa önce çözüm veya değişiklik yapılmaya çalışılıyor.
- İade süreci başlatılırsa cihazın iade edildiğine dair imza alınıyor.
- Ücretin 3–10 gün içinde iade edileceği belirtiliyor.
- Süre, nakit veya kartla ödeme durumuna göre değişebiliyor.
- Özel bir durum yoksa hastadan kesinti yapılmıyor.
- **Hukuk notu:** Bu bölüm yalnızca işletmenin mevcut uygulamasıdır.
  - "Tüketici hukuku gereği…" veya "yasal olarak…" şeklinde sonuç üretilmez.
  - Hukuk, tüketici hakları ve KVKK değerlendirmesi gerekirse ayrı bir audit'te yapılır [VERİ BEKLENİYOR].

### 2.15 Toplam Süre (P15)
- **Merkez içi süre:**
  - Hasta ilk gelişinden itibaren işitme cihazını yaklaşık 1 saat içinde teslim alabilir.
  - Süre işlemlere bağlı olarak yaklaşık 1–2 saat arasında değişebilir.
  - SGK'lı ve SGK'sız hastalar açısından merkez içindeki bu süre değişmez.
- **Hastane süreci:**
  - Hasta işitme testi yaptırmamış, reçete almamış, rapor almamış ve ilk kez başvuruyorsa süreç değişebilir. Süreyi hastaneden alınacak muayene günü ve saati ile hastanın tercihi belirler.
  - Bu hastane süresi işletmenin kontrolünde değildir; hastanın tercihine ve hastaneden alacağı muayene zamanına bağlıdır.
- **Aynı gün kullanım:** İşletme, aksine bir durum yoksa cihaz kullanımına aynı gün içinde başlayabilir.

### 2.16 Tutarlılık Notları (sonraki tutarlılık fazında netleştirilecek; bu turda çözülmedi)

| # | Konu | Durum |
|---|---|---|
| T1 | Marka sayısı ("yaklaşık 20" ↔ 18) | **ÇÖZÜLDÜ [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** 18 marka satılıyor, başka satılan marka yok. 18 markalık liste korunur |
| T2 | H28 "ücretsiz" ↔ P8 "ücret ödenir, iade edilir" | **ÇÖZÜLDÜ [DOĞRULANDI] (2026-10-07):** H28 = "Cihazı satın alarak 7 güne kadar deneme; uygun bulunmaması halinde ücret iadesi." "Ücretsiz deneme" ifadesi kullanılmaz (§1.5) |
| T3 | P8 "bütün cihazlarda 7 gün" ↔ P14 "kulak içi iade yok" | **ÇÖZÜLDÜ [DOĞRULANDI] (2026-10-07):** Kulak içi cihazlar eve verilen 7 günlük deneme kapsamına girmez; merkezde demo/deneme yapılabilir (§1.5) |
| T4 | H15 "Kontrol: 5 dakika" ile P12 ilk kontrol kapsamı | Çelişki değil. İlk kontrolün toplam süresi ayrıca belirtilmedi |
| T5 | Walk-in ↔ hizmet bazında randevu | **NETLEŞTİ [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** İki bilgi birlikte geçerlidir ve çelişmez. Merkez **walk-in ziyaretleri kabul eder**; **hizmet bazında randevu gerekliliği ise devam eder** (§1 "Randevu" sütunu ve randevu özeti geçerlidir). Randevusuz gelen danışana hangi hizmetin aynı gün verilebileceği ayrıca tanımlanmadı; bu konuda varsayım yapılmaz |
| T6 | Hizmet adlarının kısa varyantları (son aktarımdaki listede: 15 "Takip", 20 "Tamir", 25 "İade / iptal", 33 "Nem alma cihazı ürünleri", 35 "İşitme cihazı tutucu") | Çelişki değil. Aynı hizmetlerin farklı adlandırmasıdır (H15, H20, H25, H33, H35). Kayıt adları korunur |

## 3. SGK

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Kullanım | Freshness |
|---|---|---|---|---|---|---|
| SGK işlemlerinde destek | Veriliyor; ücretsiz; randevu gerekmez; 10 dakika (H24) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | SGK sayfaları | STATIC |
| SGK süreçleri hakkında bilgilendirme | Veriliyor; ücretsiz; randevu gerekli; 10 dakika (H37) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | SGK sayfaları | STATIC |
| SGK başlangıç senaryoları | Senaryo A: önce merkeze gelip cihazı satın alma, sonra rapor, reçete ve işitme testinin temini. Senaryo B: önce işitme testi yaptırıp merkeze gelme, satın alma başlatıldığında sonra rapor ve reçete alınması (tam metin: §2.9) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | SGK süreç anlatımı | STATIC |
| SGK'lı ve SGK'sız hasta için merkez içi süre | Değişmez; yaklaşık 1 saat (1–2 saat). Hastane süresi işletmenin kontrolünde değil (§2.15) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | SSS | YENİDEN DOĞRULA |
| SGK anlaşması | SGK anlaşmalı işitme merkezi | [MEVCUT BELGELERDE VAR] | COMPANY.md §15 | — | Güven, SGK sayfaları | YENİDEN DOĞRULA (yıllık) |
| Sitedeki SGK ödeme tutarları | "26 Ocak 2026 itibarıyla" tablosu ve pil yardımı (`/sgk-isitme-cihazi-odemesi/` verisi ve `public/images/pages/sgk-2026-odeme-tablosu.webp`) | [MEVCUT BELGELERDE VAR] [TIME-SENSITIVE]. **Güncelliği doğrulanmadı** | Site verisi | — | SGK pillar | GÜNCEL TUTULMALI (en geç 6 ayda bir) |
| Güncel tutarlar ve resmî kaynak (SUT / duyuru linki) | — | [VERİ BEKLENİYOR] [TIME-SENSITIVE] | — | — | SGK pillar | GÜNCEL TUTULMALI |
| Rapor / kurul süreci (operasyonel bilgi) | 3 KBB hekiminin onayının gerektiği kurul süreci. "İşitme testi yeterli" (kullanıcının ifadesi). Hasta işitme testi, rapor ve reçete ile geliyor | [DOĞRULANDI] (işletmenin operasyonel bilgisi) [TIME-SENSITIVE] **[WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ]** | İşletme sahibi | 2026-10-07 | SGK sayfaları (yalnızca resmî doğrulamadan sonra) | GÜNCEL TUTULMALI |
| Genellikle kullanılan hastaneler | Darıca Farabi Devlet Hastanesi · Gebze Fatih Devlet Hastanesi · Tuzla Devlet Hastanesi | [DOĞRULANDI] [TIME-SENSITIVE] **[WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ]** (hastane ve başvuru ayrıntıları) | İşletme sahibi | 2026-10-07 | LOCAL_SOT, Darıca hub, SGK sayfaları | YENİDEN DOĞRULA |
| Merkezde yapılan SGK işlemleri | SGK işlemleri merkez tarafından yürütülüyor. Destek tablosu merkezde gösteriliyor ve sözlü olarak açıklanıyor. Hastanın ödeyeceği kalan tutar açıklanıyor | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | SGK süreç anlatımı | YENİDEN DOĞRULA |
| Hastanede yapılması gereken adımların resmî ayrıntısı | — | [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] | — | — | SGK sayfaları | GÜNCEL TUTULMALI |
| Kullanıcının verdiği Danıştay kaynağı | Sonraki resmî doğrulama aşamasında kullanılacak (kaynak metni bu SoT'a aktarılmadı) | [VERİ BEKLENİYOR] | İşletme sahibi | 2026-10-07 | SGK doğrulama | — |
| SGK numarası, sözleşme tarihi vb. kurum kimlik bilgileri | **Kamuya açık içerikte yazılmaz** | [DOĞRULANDI] (kural) | İşletme sahibi | 2026-10-07 | — | STATIC |
| Gerekli belgeler | — | [KULLANICIDAN BİLGİ GEREKLİ] [TIME-SENSITIVE] | — | — | `/sgk/gerekli-belgeler/` | GÜNCEL TUTULMALI |
| Katkı payı ve fark ücreti mantığı (fiyat verilmeden) | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | Fiyat ve SGK sayfaları | YENİDEN DOĞRULA |
| Yenileme süresi | 5 yıl (kullanıcının verdiği bilgi) | [DOĞRULANDI] (kullanıcı bilgisi) [TIME-SENSITIVE] **[WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ]** | İşletme sahibi | 2026-10-07 | SGK cluster sayfaları (resmî doğrulamadan sonra) | GÜNCEL TUTULMALI |
| Yararlanabilecek kişiler; çocuk, emekli, memur ve özel sigorta farkları | — | [KULLANICIDAN BİLGİ GEREKLİ] [TIME-SENSITIVE] [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] | — | — | SGK cluster sayfaları | GÜNCEL TUTULMALI |
| Rapordan sonra cihaz teslimi | 1–3 gün; çoğunlukla aynı gün | [DOĞRULANDI] [TIME-SENSITIVE] | İşletme sahibi | 2026-10-07 | SSS | YENİDEN DOĞRULA |
| SGK ödeme tutarları, pil desteği, güncel SUT hükümleri, kurul/rapor prosedürü | Canlı mevzuat ve resmî kaynak denetiminden geçmeden **kalıcı bilgi olarak kilitlenmez** | [TIME-SENSITIVE] **[WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ]** | İşletme sahibi (kural) | 2026-10-07 | — | GÜNCEL TUTULMALI |

> Tarihi geçmiş SGK tutarları kesin bilgi olarak yazılmaz. Güncel veri yoksa [VERİ BEKLENİYOR] olarak kalır.

## 4. Teknik Servis

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Freshness |
|---|---|---|---|---|---|
| Teknik servis (H17) | Veriliyor; ücret duruma göre; randevu gerekli; teslim 3 gün içinde | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| Onarım (H20) | Veriliyor; ücret duruma göre; randevu gerekli; teslim 1–3 gün içinde | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| Garanti işlemleri (H21) | Veriliyor; ücretsiz; randevu gerekli; 1–5 gün (değişken) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| Bakım (H18), temizlik (H19), periyodik bakım ve temizlik (H31) | Veriliyor; ücretsiz; randevu gerekli; 10 dakika | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| Yedek / geçici cihaz (H22, H32) | Veriliyor; ücretsiz; randevu gerekli; 10 dakika | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| Onarım sürecinde yedek cihaz | Sağlanıyor | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| Teknik servis politikası (belgede) | "Yetkili servis süreçleri uygulanır." | [MEVCUT BELGELERDE VAR] | COMPANY.md §20 | — | — |
| Garanti politikası (belgede) | "Üretici garanti koşulları geçerlidir." | [MEVCUT BELGELERDE VAR] | COMPANY.md §20 | — | YENİDEN DOĞRULA |
| Servis kapsamı: markalar | Satılan **18 markanın tamamında** teknik servis var | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
| Servis kapsamı: diğer cihazlar | Kullanıcının ifadesi: Türkiye'de satılan işitme cihazlarının tamamına teknik servis sağlanabiliyor | [DOĞRULANDI] (kullanıcı beyanı). **Üstünlük iddiasına dönüştürülmez** ("Türkiye'de tek firma", "tek merkez", "tek biz yapıyoruz" yasak) | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
| Garanti cihazları | Gerektiğinde dış servise gönderiliyor | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | STATIC |
| Merkezde yerinde yapılan onarım işlemlerinin listesi | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | — |
| Garanti dışı durumlar | Garanti kapsamı dışındaki kullanıcı hataları ayrıca değerlendiriliyor ("duruma göre" ücret). Ücret tutarları kayıtlı değil | [DOĞRULANDI] · Tutarlar: [TIME-SENSITIVE] | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
| Parça ve pil tedariki | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | — |
| Teknik altyapı: yazılım | **Noah**: fitting ve programlama · **İŞİTSOFT CRM**: takip | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
| Uzaktan ayar kapsamı | A&M ve Audifon dışındaki cihazlarda yapılabiliyor (H14) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | YENİDEN DOĞRULA |
| Teknik altyapı: donanım (REM cihazı, 3D tarayıcı/yazıcı, test kabini modeli) | REM ölçümü (H12) ve 3D kulak kalıbı (H9) hizmet olarak doğrulandı; cihaz modelleri doğrulanmadı | Hizmet: [DOĞRULANDI] · Donanım: [KULLANICIDAN BİLGİ GEREKLİ] | İşletme sahibi (hizmet) | 2026-10-07 | — |
| En sık arızalar ve ilk çözüm önerileri | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | — |

## 5. Ücretsiz Hizmetler (İşletme sahibi, 2026-10-07) [DOĞRULANDI]

**Ücretsiz:**
- H1 Ücretsiz işitme testi · H2 Odyometri · H3 Timpanometri · H5 Tinnitus değerlendirmesi
- H6 Cihaz seçimi · H7 Cihaz denemesi · H10 Cihaz teslimi · H11 Cihaz ayarı · H12 REM · H13 Programlama · H14 Uzaktan ayar · H15 Kontrol · H16 Evde hizmet
- H18 Bakım · H19 Temizlik · H21 Garanti işlemleri · H22 Yedek/geçici cihaz
- H24 SGK süreç desteği · H25 İade/cayma · H26 Randevu · H27 KBB yönlendirmesi
- H29 Tinnitus maskeleme testleri · H31 Periyodik bakım · H32 Geçici cihaz temini
- H37 SGK bilgilendirme · H38 Kulak temizliği · H39–H40 Bilgilendirme

**Koşullu ücretsiz:** H8 Kulak kalıbı ve H9 3D kulak kalıbı. Cihaz satın alımlarında ilk kalıplar ücretsiz, diğer durumlarda ücretli.

**Ücretsiz listesinde değil:** H28. Kanonik ifadesi: "Cihazı satın alarak 7 güne kadar deneme; uygun bulunmaması halinde ücret iadesi." Kulak içi cihazlar bu kapsamda değildir (§1.5).

**Duruma göre:** H17 Teknik servis, H20 Onarım.

**Ücretli:** H4 Oyun odyometrisi, H23 Pil ve aksesuar, H30 Tıkaç / yüzücü kulaklığı, H33 Nem alıcı ürünler, H34 Hijyen / bakım ürünleri, H35 Cihaz tutacağı, H36 Koklear implant pili.

> "Ücretsiz" ifadesi sitede yalnızca bu listeyle uyumlu biçimde kullanılır (BRAND_SOT §3).

## 6. Kalıcı Kural: Sayfa Mimarisi (İşletme sahibi, 2026-10-07) [DOĞRULANDI]

> Bu bilgiler ileride site tasarımında kullanılabilir. Bu turda sayfa tasarımı yapılmadı.

- **Kopya sayfa yok:** Hiçbir hizmet sayfası veya yerel sayfa, başka bir sayfanın şehir ya da ad değiştirilerek kopyalanmış versiyonu olmayacak.
- **Ortak yapı serbest:** Ortak Design System ve component kullanılabilir.
- **Her sayfaya özgü olanlar:** Her sayfanın şunları kendine ait olacak:
  - search intent,
  - bilgi mimarisi,
  - içerik amacı,
  - kullanıcı ihtiyacı,
  - FAQ'lar,
  - gerektiğinde görsel seçimi.
- **Yasak yöntem:** "Şehir adı değiştir, aynı sayfayı yayınla" yöntemi kesinlikle kullanılmayacak.
