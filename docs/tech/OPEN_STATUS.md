# OPEN_STATUS.md

> **Durum:** ACTIVE · Teknik belge · Oluşturulma: 2026-11-11 (2. tur)
> **Amaç:** "Şu an açık / kapalı" göstergesinin (`OpenStatus.astro`, `src/lib/open-status.ts`) kurallarını ve **yıllık bakım** adımlarını kaydeder.
> **Kapsam:** Gösterge ana sayfa hero saat kartında, ana sayfa merkez bloğunda, footer iletişim bloğunda ve İletişim/Darıca konum kartlarında görünür. İstanbul saatiyle çalışır.

---

## 1. Kurallar

| Konu | Davranış |
|---|---|
| Saatler | Doğrulanmış tablo (LOCAL_SOT §1): Pazartesi–Cuma 08:45–19:00 · Cumartesi 09:00–19:00 · Pazar kapalı · öğle arası yok · resmî tatillerde kapalı. **Derleme güvencesi:** `OpenStatus.astro`, `SCHEDULE` tablosunu `company.hours` metinleriyle karşılaştırır; uyuşmazlıkta **derleme hata verir** (iki yerde farklı saat yayımlanamaz) |
| Saat dilimi | `Europe/Istanbul` (UTC+3, yıl boyu sabit). Ziyaretçinin cihaz saat diliminden **bağımsız**: yurt dışından bakan da İstanbul saatine göre doğru durumu görür (Los Angeles saat dilimiyle test edildi) |
| Açık | Çalışma saatleri içinde **ve** gün, tablo kapsamında doğrulanmış tam gün çalışma günüyse → "Şu an açık · Kapanış 19:00" |
| Kapalı | Mesai dışı/Pazar → "Şu an kapalı · Açılış: yarın 08:45" (ek `-de/-da` saate göre değiştiği için ekli yazılmaz) |
| Resmî tatil | Tam gün tatil → "Bugün resmî tatil, kapalıyız · Açılış: <sonraki doğrulanmış gün>" |
| **Doğrulanamıyorsa "açık" denmez** | (a) **Arife (yarım gün)**: kapanış saati kuruma göre değişebileceğinden durum "bilinmiyor"; (b) **Tatil tablosu kapsamı dışındaki tarihler** (şu an 2026–2027): "bilinmiyor". "Bilinmiyor" durumunda metin **gösterilmez** (satır görünmez ama yer tutar → CLS yok); yalnızca sayfadaki saat listesi görünür |
| Yer tutma | Satır, JS yüklenmeden de yer ayırır (`min-height`); JS yoksa boş kalır (saat listesi metin olarak zaten görünür) |
| Güncelleme | Yüklenince, 30 sn'de bir ve sekme tekrar görünür olunca |

## 2. Tatil tablosu ve kaynaklar

`src/lib/open-status.ts` → `SPECIAL_DAYS` (2026–2027) ve `HOLIDAY_COVERAGE` (`2026-01-01` … `2027-12-31`).

- **Sabit tarihli resmî tatiller:** 1 Ocak · 23 Nisan · 1 Mayıs · 19 Mayıs · 15 Temmuz · 30 Ağustos · 29 Ekim (28 Ekim öğleden sonra = arife, yarım gün → "bilinmiyor").
- **Dini bayramlar (her yıl değişir):**
  - 2026: Ramazan Bayramı arifesi **19 Mart** (yarım gün), bayram **20–22 Mart**; Kurban Bayramı arifesi **26 Mayıs**, bayram **27–30 Mayıs**.
  - 2027: Ramazan Bayramı arifesi **8 Mart**, bayram **9–11 Mart**; Kurban Bayramı arifesi **15 Mayıs** (Cumartesi), bayram **16–19 Mayıs** (19 Mayıs, Gençlik ve Spor Bayramı ile çakışır).
- **Kaynak durumu:** Bu tarihler Diyanet takvimine dayalı **ikincil kaynaklardan** (haber siteleri: NTV, Milliyet, CNN Türk, harbiyehukuk.com vb.) derlendi ve kaynaklar kendi aralarında tutarlıydı; **birincil kaynakla (Resmî Gazete / Diyanet İşleri Başkanlığı takvimi) doğrulanmadı.** Bu yüzden tabloya "bilinen" değil, "ikincil kaynakla tutarlı" gözüyle bakılmalı.
- **Hükümetin ek tatil/idari izin kararları** (örn. bayram tatilinin 9 güne uzatılması) kamu için geçerli olup işletmenin kapanışını belirlemez; işletmenin **kendi kararı** (özel kapanış/açılış) tabloda **yoktur**. Bu durumlar için `SPECIAL_DAYS`'e `closed` kaydı eklenmelidir.

## 3. Yıllık bakım (her yıl **Ocak'ta**)

1. Bir sonraki yılın resmî tatillerini Resmî Gazete/Diyanet'ten alın; dini bayram günlerini ve arifeleri `SPECIAL_DAYS`'e ekleyin.
2. `HOLIDAY_COVERAGE.to` değerini yıl sonuna uzatın. **Bunu yapmazsanız** kapsam bittiği tarihte gösterge kendiliğinden "bilinmiyor"a düşer (yanlış "açık" göstermez) — güvenli varsayılan budur.
3. Çalışma saatleri değişirse `company.hours` (`src/components/footer/Footer/data/company.ts`) **ve** `SCHEDULE` birlikte güncellenir (aksi halde derleme hata verir).
4. Özel kapanış/uzatılmış tatil günlerini `SPECIAL_DAYS`'e `kind: "closed"` olarak ekleyin; yarım gün/belirsiz günler için `kind: "half"`.

## 4. Test

`scratchpad/t-open-status.mts` (Node, tarayıcısız, `TZ=America/Los_Angeles` ile) — 19 durum: açılış/kapanış sınırı (08:44/08:45/18:59/19:00), Cuma akşamı → Cumartesi, Cumartesi akşamı → Pazartesi, Pazar, resmî tatil, bayram, arife, 2025/2028 kapsam dışı, yıl sonu → 1 Ocak. **19/19 geçti.**
`scratchpad/t-openstatus.cjs` — gerçek sayfada sahte saatle 6 durum (açık, mesai dışı, Pazar, tatil, arife, kapsam dışı); 3 yerde (hero kartı, merkez bloğu, footer) aynı durum; "bilinmiyor"da satır görünmez ama 30 px yer tutar.
