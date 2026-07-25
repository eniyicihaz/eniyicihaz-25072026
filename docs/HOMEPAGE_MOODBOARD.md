# HOMEPAGE_MOODBOARD.md

> Ana sayfa bölümlerinin sanat yönü, kopya ve hareket senaryosu. Bölüm bölüm büyür. Kod değildir; component geliştirmeden önceki tasarım katmanıdır.
>
> Kanonik kaynaklar: hikâye/amaç → `HOMEPAGE_CREATIVE_DIRECTION.md`; token/görsel sistem → `DESIGN_SYSTEM_GUIDE.md`; ton/içerik → `PRINCIPLES.md`; gerçekler → `COMPANY.md`. Çelişkide kanonik doküman esastır.

---

## Sayfa Ritmi — tek bakışta
Tüm sayfanın görsel nabzı. Amaç: bölümlerin akustik yoğunluk, ışık ve yoğunluk ritmini bir arada görmek. Işık/Gölge ve Noise→Signal: ○ düşük · ◐ orta · ● yüksek/zirve.

| # | Bölüm | Amaç | Ana kompozisyon | Tipografi hissi | Işık/Gölge | Noise→Signal | CTA |
|---|---|---|---|---|---|---|---|
| 0 | **Hero** | Merak + güven; "burası farklı" | Ortalı tek kolon, tam viewport, bol boşluk | Büyük display, sıkı tracking | ◐ yumuşak tek yön | ◐ poised → hizalanır | ✔ Ücretsiz İşitme Testi |
| 1 | **Empati** | Görülmek | Dar kolon, ortalı, şiirsel satırlar | Orta-büyük, sakin, satır satır | ○ neredeyse düz | ○ tek soluk çizgi | — |
| 2 | **Sound Room** | Büyük fikri deneyimletmek | Geniş interaktif sahne + kaydırıcı | Minimal, destekleyici | ◐ cam panel çerçeve | ● ZİRVE (kullanıcı çözer) | — (etkileşim) |
| 3 | **Bilgilendir** | Bilgilendir, yetkinlik | 3 kart / adımlı diyagram | Net başlık + okunabilir gövde | ○–◐ kartlarda hafif | ◐ okunabilir bilimsel | ~ Bilgi CTA |
| 4 | **Rehber** | Kişisel alaka, ilk adım | Adımlı interaktif kart akışı | Soru başlıkları, net | ◐ kart lift | ◐ işlevsel çizgi | ✔ Uzman testi daveti |
| 5 | **Güven** | "Doğru ellerdeyim" | Gerçek fotoğraf + kimlik, asimetrik | Sıcak, insani başlık | ◐–● fotoğraf derinliği | ○ fısıltı | ~ hafif |
| 6 | **Tarafsızlık** | Bağımsızlık güveni | Sessiz marka duvarı (18 logo) | Minimal başlık | ○ düşük | ○ sessizlik (rest) | — |
| 7 | **Süreç & Deneme** | Riski kaldır | 4 adımlı stepper | Net adım başlıkları | ◐ orta | ○–◐ adım çizgileri | ✔ Randevu/deneme |
| 8 | **Gerçek Hikâyeler** | Akran kanıtı | Alıntı kartları / tek güçlü hikâye | Sıcak, büyük alıntı | ◐ orta | ○ sessizlik→fısıltı | — |
| 9 | **Dönüşüm** | Sıcak davet | Premium kapanış paneli, 3 mod | Büyük davet başlığı | ● panel + glow (footer geçişi) | ● çözünüm (tek hizalı sinyal) | ✔ güçlü (randevu/ara/gel) |

**Ritim okuması:** ışık ve Noise→Signal iki tepe yapar — **Sound Room** (deneyim zirvesi) ve **Dönüşüm** (çözünüm zirvesi); aralarında bilinçli sessizlikler (Empati, Tarafsızlık) nefes verir. Akustik yoğunluk baştan sona kaostan çözünüme bir yay çizer.

---

## Bölüm 0 · Hero — "İlk Netlik Anı"

**Amaç (CD):** Merak ve güven uyandırır; "burası farklı" dedirtir.
**Lider katman:** Akustik · **Akustik yoğunluk:** zengin ama sakin (poised) — zirve kaos DEĞİL (o Sound Room'da).
**Zincir:** Purpose (hayatın içinde kalmak) → Emotion (güven) → Character (Sakin Usta) → Visual (Noise→Signal).

### 1. Sanat Yönü / Atmosfer
- İlk izlenim: ışıkla dolu, sakin, ferah bir muayenehaneye girmek. "Klinik ama soğuk değil; lüks ama gösterişsiz."
- Bol beyaz alan (baskısızlık = sakinlik). Hero neredeyse tam viewport yüksekliğinde ama içerik yoğun değil; tek bir güçlü fikir nefes alır.
- Ürün fotoğrafı YOK, stok "reklam yüzü" YOK. Odak: tipografi + akustik sinyal alanı.
- Gösterişçi efekt yok; derinlik gradient'le değil katmanlı ışık gölgesiyle kurulur (DESIGN_SYSTEM §6–7).

### 2. Renk & Işık
- Zemin: `--color-background` (#ffffff) → çok hafif `--color-surface` (#f8fafc) dikey nefes.
- Metin: `--color-text` (#0f172a) başlık; `--color-text-muted` (#475569) alt metin.
- Tek vurgu: `--color-primary` (#2563eb) — yalnızca akustik sinyalin "hizalanmış" hali ve birincil CTA'da. Vurgu kıt kaynak (DESIGN_SYSTEM §7 Accent).
- Işık: üstten çok yumuşak, tek yönlü ışık hissi; sıcak premium.

### 3. Tipografi
- Başlık: Inter, büyük `clamp()` display (footer CTA ölçeğiyle akraba, ör. `clamp(2.5rem, 1.6rem + 3vw, 4rem)`), ağırlık 700, sıkı negatif tracking (`-0.02em`).
- Alt metin: `--font-size-lg`/`xl`, ağırlık 400–500, `--line-height-relaxed`, yüksek okunabilirlik (yaş kitlesi, PRINCIPLES §6).
- Eyebrow: uppercase micro-caption, pozitif tracking (`0.08em`), `--color-primary` veya muted.

### 4. Kompozisyon / Yerleşim
- 1440 / 48px master grid (footer/header ile aynı ritim).
- Sol hizalı ya da ortalı tek kolon; öneri: **ortalı**, çünkü tek fikir + tören havası (premium, sakin). Akustik sinyal alanı başlığın arkasında/altında yatay bir bant olarak yaşar.
- Dikey istif: Eyebrow → Başlık → Alt metin → Birincil CTA → (altta) sessiz scroll ipucu.
- Çift marka kilidi (PRINCIPLES §2) ince: eyebrow ya da alt metinde "Eniyicihaz.com güvencesiyle, Avrasya İşitme uzmanlığıyla."

### 5. Akustik İmza (Noise → Signal) — Hero uygulaması
- Başlığı çevreleyen/altındaki yatay alan, çok ince çizgi/partikül dalgalarından oluşur.
- Açılışta: dağınık, soluk, hizasız (noise) → ~700–900ms içinde tek sakin, hizalı yatay sinyale çözülür (signal). "Poised": zengin ama huzurlu; asla kaotik/telaşlı değil.
- Renk: çözülmeden önce nötr/soluk slate → çözüldükçe tek mavi vurgu belirir.
- Değişmez gramer (DESIGN_SYSTEM §6): aynı çizgi DNA'sı, tek mavi+slate, çözünme yönü hep gürültü→hizalı sinyal.

### 6. Kopya (TR) — Sakin Usta sesi, korku yok, garanti yok

**Yapı:** `Eyebrow → Headline (büyük fikir) → Destekleyen açıklama → CTA → Tagline (marka imzası)`. Headline ≠ Tagline. Tagline sabit: **"Daha net duyun, hayata daha yakın olun."**

**KİLİTLİ kopya:**
- Eyebrow: `2009'DAN BERİ · SGK ANLAŞMALI`
- Headline: **"Duymak, anlamaktır."**
- Destekleyen: "Mesele sesin ne kadar yüksek olduğu değil, ne kadar anlaşılıyor olduğu."
- CTA: **"Ücretsiz İşitme Testi"** (gerçek hizmet — COMPANY.md §6)
- Tagline (marka imzası, ince): "Daha net duyun, hayata daha yakın olun."
- Marka kilidi (ince, PRINCIPLES §2): "Eniyicihaz.com güvencesiyle, Avrasya İşitme uzmanlığıyla."
- Scroll ipucu: "Netliği görün ↓"

*Değerlendirilen diğer adaylar (arşiv):* Sesi değil hayatı duyun · Kaçırdığınız her şey hâlâ orada · En küçük sesler en çok şeyi anlatır · Bir fısıltı kadar net · Netlik en insani teknolojidir · Hayatın içinde yeniden · Her ses yeniden yerini bulsun · Yeniden net yeniden yakın.

*Kural kontrolü:* garanti/kesin sonuç yok · "en iyi/mucize" yok · fiyat yok · "siz" hitabı · baskı/aciliyet yok (PRINCIPLES §4/§5).

### 7. Hareket Senaryosu
- **Açılış (0–900ms):** akustik alan noise→signal hizalanır; başlık + alt metin hafif rise (12px) + opacity 0→1, sinyalle senkron. Easing `cubic-bezier(0.22,1,0.36,1)`. CTA en son, yumuşak belirir.
- **Idle:** hizalanmış sinyal ya tamamen durur ya da neredeyse algılanamaz bir "nefes" alır (sakinlik önce gelir). Abartılı sürekli animasyon yok.
- **Scroll:** scroll ipucu aşağı inildikçe sönümlenir; Hero'nun akustik yoğunluğu bir sonraki bölüme (Empati) doğru tek ince çizgiye iner.
- **prefers-reduced-motion:** alan doğrudan hizalanmış (statik) halde; metin statik; hiçbir otomatik hareket yok. Sayfa hareketsiz de tam etkili.

### 8. Erişilebilirlik
- Başlık gerçek `<h1>`; akustik alan dekoratif → `aria-hidden`.
- Kontrast WCAG AA+ (büyük başlık, yüksek kontrast). CTA 56px hedef, görünür focus ring (mevcut CTA reçetesi — HeaderActions).
- Mobil öncelikli: başlık `clamp` ile küçülür, akustik alan sadeleşir; CTA tam genişlik dokunulabilir.

### 9. Definition of Done (Hero)
- Zincir sınandı: Purpose/Güven/Sakin Usta/Noise→Signal hepsi hissediliyor.
- İlk 3 saniyede "sıradan işitme sitesi değil" + güven; korku/aciliyet sıfır.
- Reduced-motion ve mobilde tam etkili. Tek net CTA. Çift marka kilidi mevcut.
