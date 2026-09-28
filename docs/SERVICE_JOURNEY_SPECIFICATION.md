# SERVICE_JOURNEY_SPECIFICATION.md

> **⚠ ESKİ 20 BÖLÜMLÜ HOMEPAGE PLANINA AİT SPESİFİKASYON (2026-09).** Ayrı Service Journey bölümü artık **yok**; içeriği (aynı 5 adım ve hrefler, `src/data/home/service-journey.ts`) #7 `HomeJourney` içinde Guide ve Hizmetler ile tek bölümde yaşar (Değerlendir → Seç → Dene → Ayarla → Servis). Güncel ana sayfa mimarisi (10 ana bölüm) için tek doğru kaynak: `HOMEPAGE_SPECIFICATION.md`. Bu belge, o bölümün **içerik/gerekçe kaydı** olarak durur; bölüm numaraları, "yeni pozisyon N", "TASLAK — henüz üretimde değil" ve "ayrı section" ifadeleri eski 20 bölümlü sıraya aittir, geçerli değildir. Dosya, kod yorumlarından hâlâ referans alındığı için arşive taşınmamıştır.

> **TASLAK — henüz üretimde değil.** Ana sayfaya eklenmesi planlanan yeni bölüm: Süreç Haritası (Değerlendirme → Seçim → Deneme → Ayar → Servis). SGK Rehberi'nin (Bölüm 15) hemen ardından, KnowledgeGate'ten (pozisyon 17) önce; tüm gerçek hizmet yolculuğunu somut sayfalara bağlayan bir harita. Kod içermez; yalnızca içerik/tasarım/erişilebilirlik taslağıdır.
>
> **Kanonik kaynaklar:** sayfa mimarisi/sıra → `docs/HOMEPAGE_SPECIFICATION.md` (yeni pozisyon 16) · doğrudan reuse edilecek component → `src/components/shared/ProcessTimeline/ProcessTimeline.astro` · Guide'la farkı → `docs/GUIDE_SPECIFICATION.md` (Guide değiştirilmiyor) · internal linking → `SEARCH_STRATEGY.md §15`.
>
> **Sabit çerçeve:** Amaç = "gerçek süreci somut sayfalara bağlamak" · Lider katman = bilgi/yapı · Tasarım deseni = process/timeline (5 adım) · CTA = yok (her adım kendi sayfasına gider, ayrı bir CTA gerekmez).

---

## 1. Amaç ve Sıradaki Yeri

**Guide (pozisyon 12) ile karıştırılmamalı:** Guide, "şimdi ne olacak" sorusuna duygusal/kısa 3 adımla (konuşma → değerlendirme → deneme) cevap verir — amacı güvence vermek, `/iletisim`'e yönlendirmek. Bu bölüm farklı bir işi yapar: **tüm** gerçek hizmet yolculuğunu (değerlendirme'den servise kadar 5 adım), her adımı kendi gerçek sayfasına bağlayarak somutlaştırır — amacı internal-linking + "bu süreç gerçek, adım adım var" kanıtı, duygusal güvence değil. İkisi bilinçli olarak sayfada birbirinden uzak tutulur (Guide=12, bu bölüm=16) ki art arda iki "adım" bölümü gibi tekrar hissettirmesin.

---

## 2. İçerik (taslak)

**Eyebrow:** "Süreç"
**Başlık (H2):** "Değerlendirmeden Servise, Tüm Süreç"
**Intro:** "İşitme sağlığınızla ilgili yolculuğun her adımında, ihtiyaç duyduğunuz desteği buluyorsunuz."

**5 adım (ikon + başlık + tek cümle + gerçek link):**

| # | Adım | Açıklama | Link |
|---|---|---|---|
| 1 | Değerlendirme | Ücretsiz işitme testiyle mevcut durumunuzu netleştiriyoruz. | `/degerlendirme/ucretsiz-isitme-testi` (ikincil: `/degerlendirme/online-isitme-testi`) |
| 2 | Cihaz Seçimi | İhtiyacınıza uygun cihaz tipini birlikte belirliyoruz. | `/rehberler/cihaz-secim-rehberi` |
| 3 | Deneme | Karar vermeden önce cihazı deneyebilirsiniz. | `/uygulama-ayar/cihaz-deneme` |
| 4 | Kişiye Özel Ayar | Cihazınızı işitme profilinize göre ayarlıyoruz. | `/uygulama-ayar/kisiye-ozel-ayar` (ilgiliyse `/uygulama-ayar/uzaktan-ayar` ikincil) |
| 5 | Teknik Servis | Kullanım süresince bakım ve teknik destek sağlıyoruz. | `/servis-bakim/teknik-servis` |

**Kapanış (opsiyonel, hafif):** "Her adımda yanınızdayız — nerede olduğunuzdan bağımsız." (Bölüm 14'ün hizmet ağı fikrine sessiz bir gönderme, yeni bir iddia eklemez.)

**Kırmızı çizgi:** 5 adımın hepsi gerçek, mevcut sayfalara işaret eder (`/degerlendirme/online-isitme-testi`, `/uygulama-ayar/cihaz-deneme` dahil — doğrulandı, `src/pages/` altında mevcut). Hiçbir adımda süre/garanti taahhüdü yok (PRINCIPLES §5).

---

## 3. Tasarım Deseni / Art Direction

**Desen:** process/timeline — `ProcessTimeline.astro`'nun zaten kanıtlanmış, N-adım agnostik görsel dili birebir kullanılır.

**Kompozisyon:**
- **Desktop (≥1024px):** `ProcessTimeline`'ın mevcut düzeni — numaralı ikon-node + bağlantı çizgisi, 5 adım yatay sırada.
- **Tablet (768–1023px):** `ProcessTimeline`'ın mevcut 2-kolon grid davranışı.
- **Mobile (<768px):** `ProcessTimeline`'ın mevcut sol-hizalı dikey timeline davranışı.

Bunların hepsi component'in kendi belgelenmiş, zaten 5 ve 7 adımda test edilmiş responsive davranışı — yeniden tasarlanmaz.

**Görsel dil:** Homepage'in tek-mavi accent'i (`ProcessTimeline`'ın `accentColor` prop'u homepage'in `--color-primary`'sine ayarlanır) — SGK sayfasındaki veya diğer sayfalardaki farklı accent renkleri burada tekrarlanmaz (marka tutarlılığı, HOMEPAGE_SPECIFICATION.md "değişmez gramer" ilkesi).

---

## 4. Internal Link Planı

`/degerlendirme/ucretsiz-isitme-testi`, `/degerlendirme/online-isitme-testi` (ikincil), `/rehberler/cihaz-secim-rehberi`, `/uygulama-ayar/cihaz-deneme`, `/uygulama-ayar/kisiye-ozel-ayar`, `/uygulama-ayar/uzaktan-ayar` (ikincil), `/servis-bakim/teknik-servis`. Bunların üçü (`online-isitme-testi`, `cihaz-deneme`, `uzaktan-ayar`) şu an homepage'den hiç linklenmiyor — bu bölüm onları ilk kez devreye sokar.

## 5. SEO/GEO Amacı

Şu an homepage'den hiç linklenmeyen gerçek hizmet sayfalarını devreye sokar; "işitme cihazı deneme", "işitme cihazı ayarı", "teknik servis" gibi süreç-odaklı arama niyetlerini karşılar (SEARCH_STRATEGY §7). Hub-and-Spoke ilkesi (§15) gereği homepage'den bu 5+ sayfaya authority akışı sağlar.

## 6. Gerekli Görseller

Yok — ikon tabanlı (lucide-astro, `ProcessTimeline`'ın zaten kullandığı ikon deseniyle tutarlı).

## 7. Atomic Design (planlanan)

**Doğrudan reuse, yeni component gerekmiyor:** `ProcessTimeline.astro` aynen kullanılır (zaten "N-adım agnostik", 5 ve 7 adımda kullanıldığı belgelenmiş). Yeni ihtiyaç yalnızca veri: `src/data/home/service-journey.ts` (taslak isim) — `ProcessTimelineContent` tipini implement eden 5 adımlık veri.

## 8. Erişilebilirlik

`ProcessTimeline.astro` zaten üretimde kanıtlanmış erişilebilirlik davranışını taşır (görünür başlıklar, klavye ile erişilebilir linkler, responsive dikey/yatay geçişte anlam kaybı yok) — ek risk yaratmaz.

## 9. Design Review Checklist

- 5 adımın hepsi gerçek, mevcut sayfalara gidiyor — uydurma link yok.
- Guide (pozisyon 12) ile içerik/kopya tekrarı yok — bu bölüm farklı bir işi yapıyor (tam süreç haritası vs. duygusal 3-adım güvence).
- `ProcessTimeline.astro` değiştirilmedi, yalnızca yeni veriyle çağrıldı.
- Accent rengi homepage'in tek-mavi diliyle tutarlı.
- Süre/garanti taahhüdü yok.
