# CHOOSER_SPECIFICATION.md

> **⚠ ESKİ 20 BÖLÜMLÜ HOMEPAGE PLANINA AİT SPESİFİKASYON (2026-09).** Bölüm **hâlâ ayrı** ve geçerli (bugün #5). Not: sonuç mantığı sonradan **ağırlıklı skorlamaya** çevrildi (her seçenek tip başına `weights` taşır, en fazla 3 sonuç, puana göre sıralı, tercih rehberi — teşhis değil); bu spec sonuç hesabını bu ayrıntıda tarif etmez; güncel davranış için `chooser.data.ts` ve `Chooser.astro`. Güncel ana sayfa mimarisi (10 ana bölüm) için tek doğru kaynak: `HOMEPAGE_SPECIFICATION.md`. Bu belge, o bölümün **içerik/gerekçe kaydı** olarak durur; bölüm numaraları, "yeni pozisyon N", "TASLAK — henüz üretimde değil" ve "ayrı section" ifadeleri eski 20 bölümlü sıraya aittir, geçerli değildir. Dosya, kod yorumlarından hâlâ referans alındığı için arşive taşınmamıştır.

> **TASLAK — henüz üretimde değil.** Ana sayfaya eklenmesi planlanan yeni bölüm: "Size Hangi Çözüm Uygun?" — sayfanın ikinci gerçek interaktif anı (ilki SoundRoom). Karşılaştırma tablosundan (Bölüm 6) sonra kullanıcıyı pasif bilgiden kişisel bir öneriye geçirir. Kod içermez; yalnızca içerik/etkileşim/erişilebilirlik taslağıdır.
>
> **Kanonik kaynaklar:** sayfa mimarisi/sıra → `docs/HOMEPAGE_SPECIFICATION.md` (yeni pozisyon 7) · etik/teşhis sınırları → `PRINCIPLES.md §5/§11` (bu dosyanın en kritik bölümü — bkz. §2) · etkileşim mimarisi emsali → `docs/SOUND_ROOM_SPECIFICATION.md` · görsel dil → `docs/DESIGN_SYSTEM.md`.
>
> **Sabit çerçeve:** Amaç = "kişisel, gerçek bir öneri" · Lider katman = interaktif · Tasarım deseni = gerçek client-side mantıklı soru-cevap (dekoratif DEĞİL) · CTA = sonuç ekranında, ilgili tip sayfasına + her zaman "emin değilseniz" çıkışı.

---

## 1. Amaç ve Sıradaki Yeri

Bölüm 6 (Karşılaştırma) kullanıcıya objektif bir tablo verdi. Bu bölüm aynı bilgiyi **kişiselleştirilmiş bir sonuca** çevirir — kullanıcı artık 7 tipi karşılaştırmıyor, kendisi için 1-2 tanesini öğreniyor. Psikolojik karşılığı: pasif "bilgi alma"dan aktif "kendim için karar alma"ya geçiş.

**Kritik sınır — bu bir teşhis aracı DEĞİLDİR:** SoundRoom'un etik çerçevesiyle birebir aynı disiplin (`docs/SOUND_ROOM_SPECIFICATION.md §2`) burada da geçerlidir. Chooser, kullanıcının işitme kaybı derecesi/durumu hakkında hiçbir sonuç çıkarmaz; yalnızca **tercih/yaşam tarzı** sorularına göre, hangi cihaz *tipinin* daha çok araştırmaya değer olabileceğini önerir. Kesin uygunluk her zaman gerçek değerlendirmeye (`/iletisim`) yönlendirilir.

---

## 2. İçerik ve Karar Mantığı (taslak)

**Eyebrow:** "Size Özel"
**Başlık (H2):** "Size Hangi Çözüm Uygun?"
**Giriş cümlesi:** "Üç kısa soru, size uygun olabilecek cihaz tipini göstersin. Bu bir tercih rehberidir, işitme testi değildir."

**Sabit, her zaman görünür uyarı metni (SoundRoom'un etik uyarı deseniyle tutarlı, kilitli):**
> "Bu sonuç bir tercih önerisidir, tıbbi bir değerlendirme değildir. Kesin öneri için ücretsiz işitme testimize davetlisiniz."

**3 soru (tek seçimli, buton/kart formatında):**

1. **"Hangi ortamda daha çok zorlanıyorsunuz?"**
   - Sessiz ortamda bile bazı sesleri kaçırıyorum
   - Kalabalık/gürültülü ortamlarda zorlanıyorum
   - Telefon veya TV'de netlik istiyorum

2. **"Görünürlük sizin için ne kadar önemli?"**
   - Fark edilmesin isterim
   - Önemli değil, kullanım kolaylığı önceliğim

3. **"Şarj mı, pil mi tercih edersiniz?"**
   - Her gün şarj etmek sorun değil
   - Pil değiştirmek daha pratik geliyor / fark etmez

**Sonuç eşleme mantığı (taslak, implementasyonda tablo olarak kilitlenecek):**
- Görünürlük="fark edilmesin" + gürültü="kalabalık/telefon-TV" → **Görünmez (CIC)** veya **Bluetooth Özellikli** önerilir (ikisi de gösterilir, tek zorunlu sonuç dayatılmaz).
- Şarj="her gün sorun değil" → sonuca **Şarj Edilebilir** ikinci öneri olarak eklenir.
- Görünürlük="önemli değil" + gürültü="sessiz ortamda bile" → **Kulak Arkası (BTE)** (geniş güç aralığı) önerilir.
- Hiçbir kombinasyon **tek, kesin** bir sonuca kilitlenmez — sonuç ekranı her zaman 1-2 öneri + "emin değilseniz" çıkışını birlikte gösterir (kesinlik/teşhis izlenimi vermemek için).

**Sonuç ekranı:** Önerilen tip(ler) için CategoryExplorer'daki gerçek açıklama cümlesi tekrar kullanılır (yeni kopya icat edilmez) + `/isitme-cihazlari/{tip}` linki + her zaman "Emin değil misiniz? Ücretsiz işitme testi" → `/iletisim`.

---

## 3. Tasarım Deseni / Art Direction

**Desen:** gerçek interaktif soru-cevap — SoundRoom'dan sonra sayfanın ikinci ve son tam-interaktif anı; birbirini tekrar etmemesi için SoundRoom'un "sürekli kaydırıcı" mekaniğinden tamamen farklı bir mekanik kullanır (adım adım seçim, ilerleme göstergesi).

**Kompozisyon:**
- **Desktop:** Tek kart/panel içinde adım adım ilerleme (1/3, 2/3, 3/3), her adımda 2-3 büyük, tıklanabilir seçenek kartı. Geri dönüş mümkün (önceki adıma dön).
- **Tablet/Mobile:** Aynı adım mantığı, seçenek kartları dikey/tek sütun, dokunma hedefi ≥44px.

**Görsel dil:** Sayfanın genel slate+mavi dili; SoundRoom'un cam paneli burada **tekrarlanmaz** (o istisna yalnızca SoundRoom'a özgü kalır — `docs/HOMEPAGE_SPECIFICATION.md` "Premium/glass uyarısı"). Seçili seçenek `--color-primary` vurgusu ile işaretlenir.

**Motion:** Adımlar arası geçiş imza easing'iyle (`cubic-bezier(0.22,1,0.36,1)`), ilerleme göstergesi sade bir çizgi/nokta dizisi (SoundRoom'un "sayaç/skor/kutlama yok" kuralı burada da geçerli — bu bir oyun değil).

---

## 4. Internal Link Planı

Sonuca göre değişken: ilgili `/isitme-cihazlari/{tip}` sayfaları (CategoryExplorer ile aynı 7 URL havuzundan). Her sonuçta sabit: `/iletisim` ("emin değilseniz" çıkışı).

## 5. SEO/GEO Amacı

Doğrudan bir sıralama sinyali değil — asıl değeri **etkileşim/dwell-time** ve "kişiye özel öneri" konumlandırması (PRINCIPLES §5, superlative değil kişiye-özel dil). Sonuç ekranındaki linkler, karşılaştırma bölümüyle aynı 7 tip sayfasına authority akıtmaya devam eder (SEARCH_STRATEGY §15 Hub-and-Spoke).

## 6. Gerekli Görseller

Yok — tamamen ikon/UI tabanlı (mevcut lucide-astro ikon setiyle tutarlı).

## 7. Atomic Design (planlanan)

**Component Decision Tree kontrolü (SoundRoom'un uyguladığı disiplinle aynı):** Yeni bir frontend mimarisi icat edilmez — `SoundRoom.astro`'nun kanıtlanmış `is:inline` script + basit state machine + `data-rise`/`data-anim` giriş deseni + `prefers-reduced-motion` disiplini emsal alınır. `DecisionCockpit.astro` **kullanılmaz** (kasıtlı olarak dekoratif/CSS-only, gerçek mantık taşımıyor).

- **Atoms:** `ChooserOption.astro` (tek seçenek kartı; `label`, `selected` prop'ları).
- **Molecules:** `ChooserStep.astro` (bir sorunun tüm seçenekleri + ilerleme göstergesi).
- **Organism:** `Chooser.astro` — adım state'ini (client-side, basit JS obje) yönetir, sonuç eşleme mantığını uygular, sonuç ekranını render eder.
- **Data/type sözleşmesi:** `chooser.data.ts` — sorular, seçenekler, sonuç eşleme tablosu; CategoryExplorer'ın açıklama cümleleriyle senkron tutulur (aynı kopyanın iki yerde farklılaşmaması için import/paylaşım düşünülebilir).

## 8. Erişilebilirlik

- Her adım gerçek, klavye ile gezilebilir buton/radio grubu (native `<button>`/`role="radiogroup"`), yeni bir dokunma/sürükleme mekanizması icat edilmez.
- İlerleme durumu `aria-live="polite"` ile duyurulur ("Soru 2 / 3" gibi).
- Sonuç ekranı odak yönetimi: sonuç göründüğünde odak sonuç başlığına taşınır (ekran okuyucu kullanıcısı kaçırmaz).
- Sabit etik uyarı metni her zaman DOM'da, her zaman görünür (SoundRoom §2/§12 ile aynı disiplin).
- `prefers-reduced-motion`: adım geçişleri anında olur, yalnızca dekoratif geçiş kaldırılır.

## 9. Design Review Checklist

- Hiçbir soru/sonuç teşhis/kesinlik imasına kayıyor mu (PRINCIPLES §5/§11 kontrolü) — hayır olmalı.
- Sonuç her zaman 1-2 öneri + "emin değilseniz" çıkışıyla birlikte sunuluyor, tek kesin sonuç dayatılmıyor.
- Sayaç/skor/kutlama animasyonu yok (SoundRoom'un "oyun değil" kuralı burada da geçerli).
- SoundRoom'un cam paneli tekrarlanmadı.
- Sonuç linkleri CategoryExplorer'la aynı 7 gerçek URL'e işaret ediyor, yeni URL icat edilmedi.
