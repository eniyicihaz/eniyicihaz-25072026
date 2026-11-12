# CALLBACK_FORM_PREP.md

> **Durum:** ACTIVE · Teknik belge · Oluşturulma: 2026-11-11 (2. tur)
> **Amaç:** Geri arama ("Sizi arayalım") formu için KVKK ve altyapı belgelerinin incelemesini, **verilmesi gereken kararları** ve yapılan **yalnızca görsel + teknik hazırlığı** kaydeder.
> **Sonuç:** Onay metni, saklama ve e-posta/altyapı kararı **belirsiz** olduğundan **hiçbir sayfada gerçek veri toplayan form yoktur.** Bileşen yazıldı ama hiçbir sayfada kullanılmıyor ve ağ isteği içermiyor.

---

## 1. Belge incelemesi

| Kaynak | Bulgu |
|---|---|
| `CONVERSION_SOURCE_OF_TRUTH.md` §2 (K4) | Form "ileride": kısa "Randevu / Ücretsiz İşitme Testi Talebi". Kapsam: **Faz 0 ve Faz 1'de yok; ayrı plan gerekir** — KVKK, veri minimizasyonu, gönderim altyapısı, conversion tracking. Taleplerin gideceği e-posta: **eniyicihaz@gmail.com** [DOĞRULANDI] |
| Aynı belge §2 | **Saklama süresi, aydınlatma/açık rıza metni ve KVKK sorumlusu: [KULLANICIDAN BİLGİ GEREKLİ]** |
| Aynı belge §1 | "Mesai dışı arama ve geri arama uygulaması": [KULLANICIDAN BİLGİ GEREKLİ] (yani geri arama sözü/süresi tanımlı değil) |
| `/kvkk/aydinlatma-metni/` | Mevcut aydınlatma metni **form verisini** (ad, telefon, konu, zaman) ve bu verinin işlenme amacını/saklama süresini kapsayacak biçimde güncellenmiş değil (hukuki metin; bu tur içeriği değiştirilmedi) |
| Altyapı | Statik Astro + Cloudflare Pages. **Sunucu/form arka ucu yok**; sitede veri toplayan hiçbir uç nokta yok. E-posta gönderim hizmeti seçilmemiş |
| Çerez/izleme | Analitik yalnızca onayla; `ConversionTracking` olay adları sabit. Formlar için olay adı **tanımlı değil** |

**Karar:** Onay/saklama/e-posta belirsiz → "yalnızca görsel tasarım + teknik hazırlık" (kullanıcı talimatı). Gerçek veri toplama **yok**.

## 2. Yapılan hazırlık

**Bileşen:** `src/components/contact/CallbackRequestForm/CallbackRequestForm.astro` (**hiçbir sayfada kullanılmıyor**).

- Alanlar (veri minimizasyonu): **Adınız**, **Telefon**, **Konu** (liste: işitme testi, cihaz seçimi/deneme, SGK, ayar/bakım/servis, evde hizmet, diğer), **Uygun zaman** (hafta içi/Cumartesi/fark etmez). **Serbest metin alanı yok** (sağlık verisi toplanmasın); formda "sağlık bilgilerinizi yazmayın" uyarısı var.
- **Açık rıza/aydınlatma onay kutusu** zorunlu ve `/kvkk/aydinlatma-metni/` bağlantılı (metnin nihai hâli sahibi/hukukçu onayına bağlı).
- Spam: gizli bal-tuzağı alanı (`website`); sunucu tarafında da denetlenmeli.
- Erişilebilirlik: etiketler, hata mesajları `role="alert"`, ilk hatalı alana odak, `aria-invalid`, 56 px alanlar, `autocomplete`/`inputmode`.
- Doğrulama: ad ≥ 2 karakter, Türkiye cep numarası (`05XXXXXXXXX`/`+905XXXXXXXXX`), konu, onay.
- **Güvence:** bileşende `fetch`/XHR/beacon **yok**; `<form>`'da `action`/`method` yok; gönder düğmesi yalnızca doğrular ve "Önizleme: bilgileriniz gönderilmedi" yazar (`preview` varsayılan `true`). Sözlü vaat yok ("en kısa sürede arayacağız" gibi doğrulanmamış süre yazılmadı).
- Görsel doğrulama: geçici bir sayfada 390/1440 px'te incelendi (bkz. final rapor), sonra kaldırıldı.

## 3. Canlıya almak için **sahibinin vermesi gereken kararlar**

1. **Aydınlatma/açık rıza metni** (KVKK m.10): veri sorumlusu kimliği, işleme amacı (geri arama), hukuki sebep (açık rıza), aktarım (varsa), saklama süresi, başvuru yolları. Metin `/kvkk/aydinlatma-metni/` ve forma bağlı kısa onay cümlesi için.
2. **Saklama süresi** ve silme yöntemi (örn. talep karşılandıktan X gün sonra e-postanın silinmesi).
3. **Geri arama sözü:** hangi saatlerde/ne kadar sürede aranacağı (sitede doğrulanmış bir süre yok; **uydurulmaz**).
4. **Gönderim altyapısı:** aşağıdaki seçeneklerden biri.
5. **Çerez politikası:** form çerez/depolama kullanmaz; ancak spam koruması (Turnstile) üçüncü taraf betik yükler → onay/politika güncellemesi.
6. **Olay adı** (ölçüm): form gönderimini ölçmek istenirse `docs/tech/MEASUREMENT_PLAN.md`'ye yeni olay (kişisel veri içermeyen) eklenmeli.

## 4. Teknik altyapı seçenekleri (karar bekliyor)

| Seçenek | Nasıl | Artı | Eksi |
|---|---|---|---|
| **A. Cloudflare Pages Function + e-posta API** | `functions/api/geri-arama.ts` (POST) → doğrulama + Turnstile + e-posta hizmeti (Resend/Brevo/MailChannels) → `eniyicihaz@gmail.com` | Ek sunucu yok; veri **saklanmaz** (yalnızca e-posta); KVKK açısından en yalın | Bir e-posta hizmeti hesabı/anahtarı ve alan adı doğrulaması gerekir; Pages Function dağıtımı Cloudflare tarafında yapılır |
| B. Üçüncü taraf form hizmeti (Formspree vb.) | Form `action` hizmete gider | Kurulum kolay | Verinin yurt dışı üçüncü tarafa aktarımı (KVKK m.9) ve ek aydınlatma gerekir |
| C. `mailto:`/WhatsApp mesajı | Form yerine önceden doldurulmuş WhatsApp (zaten var: sayfaya özel mesaj) | **Veri toplama yok**, kurulum yok | "Form" deneyimi yok; yine de çoğu kullanıcıya yeter |

**Öneri:** Karar verilene kadar **C** (sayfaya özel hazır WhatsApp mesajı zaten yayında hazır) ve gerekirse **A**. Tasarım + doğrulama kodu A için hazırdır; Function dosyası **bilerek eklenmedi** (dağıtımda canlı uç nokta oluşturur).

## 5. Devreye alma adımları (kararlar verildikten sonra)

1. `/kvkk/aydinlatma-metni/`'ni güncelleyin (hukuki inceleme).
2. Function + e-posta hizmeti + Turnstile anahtarlarını Cloudflare tarafında (ortam değişkeni olarak) ekleyin.
3. Bileşende `preview={false}` yapıp `submit` işleyicisine `fetch("/api/geri-arama")` ve başarı/hata durumlarını ekleyin; olay adını (varsa) `MEASUREMENT_PLAN`'a işleyin.
4. Sayfaya ekleyin (öneri: `/iletisim/` hero'sundan sonra) — tek satır: `<CallbackRequestForm preview={false} />`.
5. Uçtan uca test: gerçek e-posta ulaşıyor mu, bal-tuzağı reddediyor mu, KVKK onayı olmadan gönderilemiyor mu, hata durumlarında telefon/WhatsApp alternatifi gösteriliyor mu.
