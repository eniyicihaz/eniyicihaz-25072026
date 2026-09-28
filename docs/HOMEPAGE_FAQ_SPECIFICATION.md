# HOMEPAGE_FAQ_SPECIFICATION.md

> **⚠ ESKİ 20 BÖLÜMLÜ HOMEPAGE PLANINA AİT SPESİFİKASYON (2026-09).** Ayrı SSS bölümü artık **yok**; KnowledgeGate ile birleşerek #9 `HomeKnowledge` oldu ve **6** soruya indirildi ("Cihazım arızalanırsa" sorusu kaldırıldı; Teknik Servis #7'de linkli). Bu spec'teki 7 soruluk taslak tarihsel kayıttır; veri kaynağı (`homepage-faq.data.ts`) hâlâ kullanılır. Güncel ana sayfa mimarisi (10 ana bölüm) için tek doğru kaynak: `HOMEPAGE_SPECIFICATION.md`. Bu belge, o bölümün **içerik/gerekçe kaydı** olarak durur; bölüm numaraları, "yeni pozisyon N", "TASLAK — henüz üretimde değil" ve "ayrı section" ifadeleri eski 20 bölümlü sıraya aittir, geçerli değildir. Dosya, kod yorumlarından hâlâ referans alındığı için arşive taşınmamıştır.

> **TASLAK — henüz üretimde değil.** Ana sayfaya eklenmesi planlanan yeni bölüm: Sık Sorulan Sorular. KnowledgeGate'in (pozisyon 17) hemen ardından, Closing'e (pozisyon 19) gitmeden önce son itirazları karşılayan bölüm. Kod içermez; yalnızca içerik/tasarım/erişilebilirlik taslağıdır.
>
> **Kanonik kaynaklar:** sayfa mimarisi/sıra → `docs/HOMEPAGE_SPECIFICATION.md` (yeni pozisyon 18) · etkileşim deseni emsalleri → `src/components/brand-page/BrandPageFaq/BrandPageFaq.astro`, `src/components/sgk/SgkFaq/SgkFaq.astro` · AEO/yapısal veri kuralı → `SEARCH_STRATEGY.md §8/§11`, `QUALITY_GATES.md` (yalnızca sayfada görünen soru şemaya eklenir) · iddia disiplini → `PRINCIPLES.md §5`.
>
> **Sabit çerçeve:** Amaç = "son itirazları çözmek" · Lider katman = bilgi · Tasarım deseni = accordion FAQ · CTA = soru bazlı, ilgili olduğunda (genel bir CTA değil).

---

## 1. Amaç ve Sıradaki Yeri

KnowledgeGate kullanıcıya "öğrenmeye devam et" dedi; Closing davet ediyor. Aradaki bu bölüm, davete gitmeden önce kalan **son, somut itirazları** (SGK kapsamı, fiyat/ödeme, randevu, deneme süreci, bölgeden ulaşım) çözer — bir kullanıcı Closing'e "ikna edilmiş" değil "sorularım cevaplandı" hissiyle gelmeli.

---

## 2. İçerik (taslak — 7 gerçek soru, keyword tekrarı yok, doğal dil)

**Eyebrow:** "Sık Sorulan Sorular"
**Başlık (H2):** "Merak Edilenler"

| # | Soru | Cevap (taslak, kısa) | İlgili link |
|---|---|---|---|
| 1 | İşitme testi gerçekten ücretsiz mi? | Evet, ilk değerlendirme herhangi bir ücret veya taahhüt içermez. | `/degerlendirme/ucretsiz-isitme-testi` |
| 2 | SGK işitme cihazı masraflarını karşılıyor mu? | SGK anlaşmalı bir merkez olarak, kapsam ve katkı payı sürecinde size rehberlik ediyoruz; detaylar kişiye göre değişir. | `/sgk-isitme-cihazi-odemesi` |
| 3 | Cihazı satın almadan önce deneyebilir miyim? | Evet, karar vermeden önce cihazı deneme imkânı sunuyoruz. | `/uygulama-ayar/cihaz-deneme` |
| 4 | Randevu almak için ne yapmalıyım? | Telefon, WhatsApp veya iletişim formuyla bizimle iletişime geçmeniz yeterli. | `/iletisim` |
| 5 | Gebze veya Çayırova'dan merkeze nasıl ulaşırım? | Merkezimiz Darıca'da; Gebze ve Çayırova'dan kolayca ulaşabilirsiniz. | `/iletisim` (veya ilgili `/gebze-isitme-cihazlari/`, `/cayirova-isitme-cihazlari/`) |
| 6 | Çocuklar için de işitme cihazı seçeneğiniz var mı? | Evet, çocuklara özel tasarlanmış cihaz seçenekleri sunuyoruz. | `/isitme-cihazlari/cocuklara-ozel` |
| 7 | Cihazım arızalanırsa ne yapmalıyım? | Teknik servis desteğiyle bakım ve arıza süreçlerinde yanınızdayız. | `/servis-bakim/teknik-servis` |

**Kırmızı çizgi:** Fiyat sorusu **kasıtlı olarak yok** — site genelinde fiyat iddiası/rakamı verilmiyor (PRINCIPLES §5); "SGK katkı payı ne kadar?" gibi rakam gerektiren bir soru buraya eklenmez, yalnızca yönlendirme yapılır (soru 2). Her cevap 1-2 cümleyle sınırlı — bu bir bilgi bankası değil, hızlı bir güven turu.

---

## 3. Tasarım Deseni / Art Direction

**Desen:** accordion FAQ — sayfada ilk kez görülen bir etkileşim deseni (KnowledgeGate'in düz metin linklerinden, Closing'in CTA panelinden ayrışır).

**Kompozisyon:**
- **Desktop (≥1024px):** Tek sütun accordion, `--container-md`/`lg` genişliğinde ortalı; her soru tıklanınca/açılınca cevap genişler (yalnızca bir tanesi açık kalabilir veya çoklu açık — implementasyon kararı, `BrandPageFaq`'ın mevcut davranışıyla tutarlı olması önerilir).
- **Tablet/Mobile:** Aynı accordion, tam genişlik, dokunma hedefi ≥44px.

**Görsel dil:** `BrandPageFaq.astro`/`SgkFaq.astro`'nun accordion aç/kapa etkileşim reçetesi (chevron ikonu, yükseklik geçişi) kullanılır; kart zemini/gölge homepage'in genel sadelik diline uyarlanır (BrandPageFaq'ın marka-özel "sticky decision card" gibi ek öğeleri homepage'de gerekmez — burada amaç sade bir SSS, satış paneli değil).

---

## 4. Internal Link Planı

Soru bazlı: `/degerlendirme/ucretsiz-isitme-testi`, `/sgk-isitme-cihazi-odemesi`, `/uygulama-ayar/cihaz-deneme`, `/iletisim` (×2 soru), `/isitme-cihazlari/cocuklara-ozel`, `/servis-bakim/teknik-servis`. Yalnızca gerçekten ilgili olduğunda link verilir — her cevaba zorla link eklenmez.

## 5. SEO/GEO Amacı

AEO/GEO için en yüksek etkili bölüm (SEARCH_STRATEGY §8). Yalnızca sayfada **gerçekten görünen** 7 soru için FAQPage-tarzı yapısal veri potansiyeli değerlendirilir (§11 Structured Data — sayfada olmayan/görünmeyen soru şemaya asla eklenmez, QUALITY_GATES kuralı). Doğal dil, keyword tekrarı yok — her soru gerçek bir kullanıcı sorusu formatında (kullanıcı onayı).

## 6. Gerekli Görseller

Yok — metin/ikon tabanlı accordion.

## 7. Atomic Design (planlanan)

Sitede jenerik/paylaşılan bir FAQ accordion component'i yok — yalnızca sayfa-özel `BrandPageFaq.astro`, `SgkFaq.astro`, `BrandFaq.astro` var. Bu bölüm için, diğer 11 homepage bölümünün geleneğine uygun (`Empathy/`, `SoundRoom/` gibi kendi klasöründe) yeni bir organizma (`HomepageFaq.astro`) inşa edilir — `BrandPageFaq`'ın accordion aç/kapa etkileşim mantığı (JS state, `is:inline` veya native `<details>`) reuse edilir, ama marka-özel "decision card" gibi fazladan öğeler taşınmaz (YAGNI — Solution/Guide/Trust'ın izlediği sadelik disiplini).

**Native `<details>`/`<summary>` değerlendirmesi:** Implementasyon aşamasında, JS state yönetimi yerine native `<details>`/`<summary>` kullanımı da değerlendirilmeli — tarayıcı-yerel erişilebilirlik/klavye desteğini "ücretsiz" sağlar (SoundRoom'un native `Slider` atomu tercihiyle aynı disiplin: mevcut platform özelliği varken yeniden icat etme).

## 8. Erişilebilirlik

- Accordion native `<details>`/`<summary>` kullanılırsa klavye/ekran okuyucu desteği otomatik gelir; JS-tabanlı bir çözüm seçilirse `aria-expanded`/`aria-controls` doğru uygulanmalı.
- Her soru gerçek bir `<h3>` (H2 "Merak Edilenler" altında doğru anahat).
- Kontrast AA+ token tabanlı.
- `prefers-reduced-motion`: aç/kapa geçişi anında olur.

## 9. Design Review Checklist

- 7 soru gerçek, doğal dilde — keyword stuffing yok.
- Fiyat/rakam gerektiren soru yok veya yalnızca yönlendirme yapıyor.
- Yalnızca sayfada görünen sorular şema adayı (görünmeyen soru eklenmedi).
- Her link gerçekten ilgili sayfaya gidiyor, zorla eklenmiş link yok.
- Accordion native veya doğru `aria` ile erişilebilir.
