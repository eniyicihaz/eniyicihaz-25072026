# CONVERSION_SOURCE_OF_TRUTH.md

> **Durum:** ACTIVE · Faz 0 · Oluşturulma: 2026-10-06 · Son güncelleme: 2026-10-07 (Faz 0 son bilgi aktarımı)
> **Amaç:** Dönüşümle ilgili bilgilerin tek kaynağı. Kapsadığı konular:
> - Dönüşüm kanalları: telefon, WhatsApp, yol tarifi, ücretsiz test, ileride form
> - CTA kuralları
> - Ölçülecek iş sonuçları ve KPI hedefleri
>
> Teknik ölçüm kurulumu (GTM, GA4, consent) **GOOGLE_SOURCE_OF_TRUTH**'ta yer alır.

**Kurallar** (tam metin: `BUSINESS_SOURCE_OF_TRUTH.md` §0)
- **Etiketler:** [DOĞRULANDI] · [MEVCUT BELGELERDE VAR] · [KULLANICIDAN BİLGİ GEREKLİ] · [ERİŞİM GEREKLİ] · [MEVCUT — AUDIT GEREKLİ] · [TIME-SENSITIVE] · [VERİ BEKLENİYOR] · [DOĞRULAMA GEREKLİ] · [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] · [ESKİ / GEÇERSİZ]
- **Çatışma hiyerarşisi:** Kullanıcının güncel doğrulaması > SoT [DOĞRULANDI] > MASTER STRATEGY > DECISIONS > strateji/teknik belgeler > eski dokümanlar > koddan çıkarılan varsayım
- **Güvenlik:** Credential bilgisi yazılmaz. Event payload'larına kişisel veya sağlık verisi gönderilmez.

---

## 1. Dönüşüm Kanalları

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Kullanım | Freshness |
|---|---|---|---|---|---|---|
| Ana dönüşüm kanalları | Telefon ve WhatsApp | [DOĞRULANDI] | İşletme sahibi (K4) | 2026-10-06 | Tüm CTA'lar | STATIC |
| Gerçek iletişim ve randevu kanalı kullanımı | Hastalar çoğunlukla telefonla ulaşıyor; WhatsApp daha nadir. Randevular çoğunlukla telefonla, çok nadiren WhatsApp'tan alınıyor (SERVICE_SOT §2.1–§2.2) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | CTA önceliği | YENİDEN DOĞRULA |
| Ana telefon (header ve birincil CTA) | 0533 773 31 99 · `tel:+905337733199` | [DOĞRULANDI] | K2 | 2026-10-06 | Header, birincil CTA | STATIC |
| WhatsApp | 0533 773 31 99 · `https://wa.me/905337733199` | [DOĞRULANDI] | K2 | 2026-10-06 | WhatsApp CTA'ları | STATIC |
| Ofis mobil | 0543 386 63 60: footer ve İletişim'de rol etiketiyle | [DOĞRULANDI] | D2 / K2 | 2026-10-06 | Footer, İletişim | STATIC |
| Ofis sabit | 0262 656 32 77: footer ve İletişim'de rol etiketiyle | [DOĞRULANDI] | D2 / K2 | 2026-10-06 | Footer, İletişim | STATIC |
| Rol etiketlerinin metni (ör. "Ofis mobil", "Ofis sabit") | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | Footer, İletişim | — |
| Hangi numaranın hangi saatte ve hangi iş için aranacağı | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | İletişim, SSS | — |
| WhatsApp Business mı? Mesai dışında yanıt veriliyor mu? | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | CTA metni | — |
| WhatsApp ön-mesaj metinleri (sayfa bağlamlı; kişisel veri içermez) | — | [KULLANICIDAN BİLGİ GEREKLİ] (tercih) | — | — | WhatsApp CTA'ları | — |
| Mesai dışı arama ve geri arama uygulaması | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — | İletişim | — |
| Yol tarifi | Google Maps kısa linki (bkz. LOCAL_SOT §1) | [MEVCUT BELGELERDE VAR] [MEVCUT — AUDIT GEREKLİ] | `company.ts` | — | Yol tarifi CTA'ları | — |
| Ücretsiz işitme testi CTA'sının hedefi | `/degerlendirme/ucretsiz-isitme-testi/` | [DOĞRULANDI] (strateji: etiket = hedef) | MASTER STRATEGY | 2026-10-06 | Test CTA'ları | STATIC |
| E-posta (iletişim ve form) | **eniyicihaz@gmail.com**: birincil e-posta ve form hedefi aynı adres. avrasyaisitme@gmail.com birincil değildir [ESKİ / GEÇERSİZ] | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | İletişim, ileride form | STATIC |
| Walk-in ve randevu | Merkez walk-in ziyaretleri kabul ediyor; **hizmet bazında randevu gerekliliği devam ediyor** (SERVICE_SOT §1, T5). CTA'larda ikisi birlikte doğru anlatılır: walk-in kabulü randevu gerekliliğini ortadan kaldırıyormuş gibi yazılmaz | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | CTA metni | YENİDEN DOĞRULA |

## 2. Form (ileride, K4)

| Bilgi | Değer | Durum | Kaynak | Son doğrulama |
|---|---|---|---|---|
| Form türü | Kısa "Randevu / Ücretsiz İşitme Testi Talebi" formu, ileride | [DOĞRULANDI] | K4 | 2026-10-06 |
| Kapsam | Faz 0 ve Faz 1'de **yok**. Ayrı plan gerekir: KVKK, veri minimizasyonu, gönderim altyapısı, conversion tracking | [DOĞRULANDI] | K4 | 2026-10-06 |
| Sağlık verisi | Toplanmaz | [DOĞRULANDI] | K4 | 2026-10-06 |
| **Taleplerin gideceği e-posta** | **eniyicihaz@gmail.com** (birincil e-postayla aynı; form adresi uyumsuzluğu yok) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 |
| Saklama süresi, aydınlatma/açık rıza metni ve KVKK sorumlusu | — | [KULLANICIDAN BİLGİ GEREKLİ] | — | — |
| Mevcut durum | Sitede form yok; "Randevu Al" CTA'ları `tel:` linki | [MEVCUT BELGELERDE VAR] | `src/data/contact/hero.ts:11-14` | — |

## 3. CTA Kuralları

| Kural | Durum | Kaynak |
|---|---|---|
| CTA etiketi gittiği yeri doğru söyler (etiket = hedef) | [DOĞRULANDI] | MASTER STRATEGY |
| Header ve birincil CTA'larda yalnızca 0533 kullanılır | [DOĞRULANDI] | K2 |
| Aciliyet veya baskı dili yok (geri sayım, "son fırsat" vb.) | [MEVCUT BELGELERDE VAR] | PRINCIPLES.md §9 |
| Mobile-first; dokunma hedefi en az 48×48 px | [DOĞRULANDI] | K5 |
| "Ücretsiz işitme testi" ifadesi kullanılabilir (H1 ücretsiz olarak doğrulandı) | [DOĞRULANDI] (İşletme sahibi, 2026-10-07) | SERVICE_SOT §1, §5 |
| Deneme CTA'larında kanonik ifade: "Cihazı satın alarak 7 güne kadar deneme; uygun bulunmaması halinde ücret iadesi." **"Ücretsiz deneme" ifadesi kullanılmaz** | [DOĞRULANDI] (İşletme sahibi, 2026-10-07) | SERVICE_SOT §1.5 |
| Merkezdeki ücretsiz demo (H7, yaklaşık 20 dakika) ile eve verilen 7 günlük deneme (H28) CTA'larda birbirine karıştırılmaz | [DOĞRULANDI] (İşletme sahibi, 2026-10-07) | SERVICE_SOT §1.5 |
| Kulak içi cihazlarla ilgili içerik ve CTA'larda 7 günlük eve deneme vaat edilmez; bu cihazlarda merkezde demo/deneme yapılabilir | [DOĞRULANDI] (İşletme sahibi, 2026-10-07) | SERVICE_SOT §1.5 |
| Deneme ve iade anlatımı yalnızca işletmenin mevcut uygulaması olarak yazılır; yasal hak veya hüküm ifadesi kullanılmaz | [DOĞRULANDI] (İşletme sahibi, 2026-10-07) | SERVICE_SOT §2.8, §2.14 |
| Marka sayısı CTA ve metinlerde "18 marka" olarak geçer ("18+" ve "yaklaşık 20" kullanılmaz) | [DOĞRULANDI] (İşletme sahibi, 2026-10-07) | PRODUCT_SOT §1 |

## 4. Mevcut Ölçüm ve Bilinen Dönüşüm Sorunları (değiştirilmedi)

| Bilgi | Değer | Durum | Kaynak |
|---|---|---|---|
| Mevcut dönüşüm event'leri | `phone_click`, `whatsapp_click`, `directions_click`, `hearing_test_cta` | [MEVCUT BELGELERDE VAR] [MEVCUT — AUDIT GEREKLİ] | `src/lib/consent/events.ts` |
| "Ücretsiz İşitme Testi" yazan hero ve Closing CTA'ları `/iletisim/`'e gidiyor | `hearing_test_cta` bu tıklamalarda tetiklenmiyor | [MEVCUT BELGELERDE VAR] | `src/components/closing/Closing/closing.data.ts:13`, hero verisi |
| Yalnızca pazarlama onayı verildiğinde event'lerin düşme riski | Kod okumasıyla tespit edildi; çalıştırılarak doğrulanmadı | [MEVCUT — AUDIT GEREKLİ] | `src/lib/consent/google.ts:324` ↔ `src/lib/consent/analytics.ts:41` |
| Mobilde sabit iletişim çubuğu | Yok | [MEVCUT BELGELERDE VAR] | Site analizi |

## 5. İş Sonuçları ve Hedefler

| Bilgi | Değer | Durum | Kaynak | Son doğrulama | Kullanım |
|---|---|---|---|---|---|
| Temel dönüşüm hedefleri (öncelik sırasıyla) | 1) Telefon, 2) WhatsApp, 3) İşitme cihazı satışı, 4) Fiziksel merkeze ziyaret | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | GA4 key event önceliği |
| Mobilde öncelikli 3 CTA | 1) **Ara**, 2) **Yol tarifi**, 3) **Mesaj** (WhatsApp) | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | Sabit mobil çubuk |
| Aylık fiziksel talep / lead | Yaklaşık 4–15 (değişken) | [DOĞRULANDI] [TIME-SENSITIVE] | İşletme sahibi | 2026-10-07 | Başlangıç değeri |
| Talep kaynağı | Tabela, tavsiye, Google (SERVICE_SOT §2.1). Sitenin ve Instagram'ın payı ile Google içinde arama ve Haritalar ayrımı: [KULLANICIDAN BİLGİ GEREKLİ] | [DOĞRULANDI] (kaynaklar) | İşletme sahibi | 2026-10-07 | Kanal analizi |
| 3 aylık hedef | Telefon ve mesajları artırmak | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | KPI |
| 1 yıllık hedef | Ayda 20–30 fiziksel hasta. **Minimum: ayda 20 fiziksel merkez hastası** | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | KPI |
| 3 yıllık hedef | Kocaeli ve hedeflenen hizmet alanlarında arama sonuçlarında çok güçlü görünürlük | [DOĞRULANDI] | İşletme sahibi | 2026-10-07 | SEO/GEO |
