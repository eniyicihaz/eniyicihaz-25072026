# MEASUREMENT_PLAN.md

> **Durum:** ACTIVE · Teknik belge · Faz 1 Commit 3 · Oluşturulma: 2026-10-07
> **Amaç:** Mevcut ölçüm altyapısının (GTM, GA4, consent, dönüşüm event'leri) belge düzeyinde envanteri, audit maddeleri ve ölçüm kuralları.
> **Kaynak sırası:** Envanter GOOGLE_SOT §1–§3'te, dönüşüm hedefleri CONVERSION_SOT §1, §4, §5'tedir. Bu belge onları tekrar etmez. Çelişkide SoT geçerlidir.
> **Sınır:** Analytics, GTM, GA4, consent veya event kodu değiştirilmez. Yeni hesap, etiket, piksel veya ölçüm sistemi oluşturulmaz. Canlı hesaplara erişim istenmez.

---

## 1. Temel İlkeler

1. **Mevcut altyapı korunur; yeniden kurulmaz** (GOOGLE_SOT §2).
2. **Mevcut davranış peşinen hata kabul edilmez.** Kod okumasıyla tespit edilen riskler çalıştırılarak test edilir; sonuca göre karar verilir (DECISIONS.md, 2026-10-07).
3. **PII ve sağlık verisi gönderilmez.** Event parametrelerinde ad, telefon, e-posta, sağlık bilgisi veya serbest metin yer almaz (GOOGLE_SOT §2, CONVERSION_SOT başlığı).
4. **Event adları onaysız değiştirilmez** (QUALITY_GATES.md §12.7).
5. **Ölçüm iş hedefine hizmet eder:** öncelik telefon, WhatsApp, cihaz satışı ve merkeze ziyarettir (CONVERSION_SOT §5).

## 2. Envanter (belge düzeyi)

| Sistem | Durum | Kaynak |
|---|---|---|
| Google Tag Manager | Aktif container mevcut; yalnızca onaydan sonra yükleniyor. Container içeriği [ERİŞİM GEREKLİ] | GOOGLE_SOT §1, §2 |
| GA4 | Mevcut (kullanıcı teyidi); mülk ve key event'ler [ERİŞİM GEREKLİ] | GOOGLE_SOT §1 |
| Consent | Dört kategori; Consent Mode v2 varsayılan "denied"; onay sonrası güncelleme; geri çekmede çerez temizliği | GOOGLE_SOT §2 |
| Onay süresi ve politika sürümü | Kodda kayıtlı; tercih [KULLANICIDAN BİLGİ GEREKLİ] | GOOGLE_SOT §2, BUSINESS_SOT §6 |
| Google Ads | Hesap **mevcut**, şu anda **aktif reklam yok**; dönüşüm aktarımı [ERİŞİM GEREKLİ] | GOOGLE_SOT §1 |
| Meta Pixel | **Yok.** İleride değerlendirilebilir; eklenirse consent kapsamına alınır ve ayrı planla yapılır | GOOGLE_SOT §1 |
| Search Console | Repoda iz yok; mevcut olabilir. "Kurulacak" değil, "doğrulanacak" | GOOGLE_SOT §1 |
| GBP | Mevcut; yönetim ve audit bilgisi | GOOGLE_SOT §1 |

## 3. Dönüşüm Event'leri (mevcut)

Tanım kaynağı: GOOGLE_SOT §2, CONVERSION_SOT §4.

| Event | Tetikleyici (mevcut tanım) | İş hedefi eşlemesi | Audit notu |
|---|---|---|---|
| `phone_click` | `tel:` bağlantısına tıklama | Telefon (öncelik 1) | Ana numara ve diğer numaraların ayrımı raporlamada gerekli mi: değerlendirme |
| `whatsapp_click` | WhatsApp bağlantısına tıklama | WhatsApp (öncelik 2) | — |
| `directions_click` | Harita / yol tarifi bağlantısına tıklama | Merkeze ziyaret (öncelik 4) | — |
| `hearing_test_cta` | Ücretsiz işitme testi sayfasına giden bağlantılar | Test talebi → ziyaret | Test CTA hedefleri audit konusu (§4, A2) |

Parametreler: mevcut allow-list (konum, link türü, CTA etiketi, cihaz, sayfa tipi) ve PII deseni filtresi korunur (GOOGLE_SOT §2).

Cihaz satışı (öncelik 3) site içinde doğrudan ölçülmez; çevrimdışı gerçekleşir. Satışla ilişkilendirme yöntemi (ör. kaynak sorusu) ayrı karar konusudur.

## 4. Audit Maddeleri

Audit Faz 2'de yapılır (MASTER_PLAN.md §7). Her madde test edilir, sonuç raporlanır, düzeltme gerekiyorsa ayrı onayla planlanır.

| # | Madde | Mevcut bilgi | Yöntem |
|---|---|---|---|
| A1 | Consent ↔ event ilişkisi: yalnızca pazarlama onayı verildiğinde event'lerin iletilip iletilmediği | Kod okumasıyla bir risk not edildi; çalıştırılarak doğrulanmadı [MEVCUT — AUDIT GEREKLİ] (GOOGLE_SOT §2) | Tag Assistant / GTM Preview ve DebugView ile her onay kombinasyonu ayrı test edilir |
| A2 | Test CTA hedefleri: "Ücretsiz İşitme Testi" etiketli CTA'ların gittiği sayfa | Bazı CTA'ların test sayfası yerine iletişim sayfasına gittiği kayıtlı (CONVERSION_SOT §4) | Etiket = hedef kuralına göre CTA envanteri; event'in tetiklenip tetiklenmediği test edilir |
| A3 | GTM container içeriği | [ERİŞİM GEREKLİ] | Erişim sağlanınca etiket, tetikleyici ve değişken listesi çıkarılır |
| A4 | GA4 key event eşlemesi | [ERİŞİM GEREKLİ] | İş önceliğiyle (§1.5) karşılaştırılır |
| A5 | Ads dönüşüm aktarımı | Hesap mevcut, reklam pasif | Erişim sağlanınca kontrol; reklam açılmadan önce tamamlanır |
| A6 | Event konum parametresinin güvenilirliği | Konum tespiti sınıf adına dayanıyor (GOOGLE_SOT §2 kaynak dosyaları) | Kırılganlık değerlendirilir; açık bir veri özniteliğine geçiş **öneri** olarak kalır |
| A7 | Onay süresi | Kodda süresiz | Tercih kullanıcıdan alınır; KVKK değerlendirmesiyle |
| A8 | PII filtresi | Mevcut | Örnek event'lerde parametreler gözden geçirilir |
| A9 | Mobil sabit eylem çubuğu eklendiğinde event kapsamı | Çubuk henüz yok (CONVERSION_SOT §4) | Uygulandığında aynı dört event'i kullanır; yeni event adı gerekirse ayrı onay |

## 5. Gelecekteki Ölçüm Konuları (planlama; uygulama yok)

| Konu | Not | Bağlı karar |
|---|---|---|
| Form (K4) | Form gelirse talep event'i (ör. lead) eklenir; form içeriği event'e gönderilmez | CONVERSION_SOT §2; ayrı KVKK planı |
| Meta Pixel | Eklenmesi değerlendirilebilir; pazarlama onayına bağlı olur | Kullanıcı kararı |
| Search Console ve Bing Webmaster | Erişim ve doğrulama | GOOGLE_SOT §1 |
| UTM / kaynak takibi | Mevcut durum [ERİŞİM GEREKLİ] | GOOGLE_SOT §3 |
| AI görünürlük ölçümü | Sabit sorgu setiyle periyodik manuel kontrol | MASTER_PLAN.md §7 (Faz 9) |

## 6. KPI Referansları

Hedefler ve başlangıç değerleri CONVERSION_SOT §5 ve BUSINESS_SOT §8'dedir; bu belgede tekrar edilmez. Raporlama, bu hedeflerle aynı öncelik sırasını kullanır.

## 7. Release Test Protokolü (uygulama fazlarında)

1. Onaysız durumda hiçbir analytics/pazarlama etiketinin yüklenmediği kontrol edilir.
2. Her onay kombinasyonunda dört event test edilir.
3. Event parametrelerinde PII olmadığı kontrol edilir.
4. Sonuç QUALITY_GATES.md §12.7 kapsamında raporlanır.

## 8. İlgili Belgeler
- GOOGLE_SOT: envanter ve audit listesi.
- CONVERSION_SOT: kanallar, CTA kuralları, hedefler.
- QUALITY_GATES.md §12.7: consent/PII kapısı.
- TEMPLATES.md §4: CTA mimarisi.
