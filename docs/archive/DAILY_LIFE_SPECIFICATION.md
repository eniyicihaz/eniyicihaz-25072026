# DAILY_LIFE_SPECIFICATION.md

> **⚠ ESKİ 20 BÖLÜMLÜ HOMEPAGE PLANINA AİT SPESİFİKASYON (2026-09).** Daily Life artık ana sayfada **render edilmiyor** (kullanıcı kararı: ayrı bölüm olmayacak). `DailyLife` component/data dosyaları ileride kullanım için diskte duruyor; bu spec o olası kullanımın kaydıdır. Güncel ana sayfa mimarisi (10 ana bölüm) için tek doğru kaynak: `HOMEPAGE_SPECIFICATION.md`. Bu belge, o bölümün **içerik/gerekçe kaydı** olarak durur; bölüm numaraları, "yeni pozisyon N", "TASLAK — henüz üretimde değil" ve "ayrı section" ifadeleri eski 20 bölümlü sıraya aittir, geçerli değildir. Dosya, artık ana sayfada kullanılmayan bir bölüme ait olduğu için `docs/archive/` altına taşınmıştır; ilgili component/data dosyaları ileride kullanım için diskte durur ve yorumları arşiv yolunu gösterir.

> **TASLAK — henüz üretimde değil.** Ana sayfaya eklenmesi planlanan yeni bölüm: "Günlük Yaşamda Netlik" — Chooser'daki (Bölüm 7) kişisel kararın hemen ardından, cihazların soyut özellik listesi değil, gerçek gündelik anlarda ne fark yarattığını gösteren görsel bölüm. Kod içermez; yalnızca içerik/tasarım/erişilebilirlik taslağıdır.
>
> **Kanonik kaynaklar:** sayfa mimarisi/sıra → `docs/HOMEPAGE_SPECIFICATION.md` (yeni pozisyon 8) · en yakın mevcut emsal → `src/components/shared/ScenarioRail/ScenarioRail.astro` (bilinçli olarak burada değiştirilmiyor, yeni bir kardeş organizma inşa ediliyor) · ton → `PRINCIPLES.md §5` · SEO → `SEARCH_STRATEGY.md §7` (Search Intent — uzun kuyruk senaryo niyetleri).
>
> **Sabit çerçeve:** Amaç = "duygusal köprü + gerçek link" · Lider katman = fotoğraf/görsel · Tasarım deseni = full-width lifestyle imagery grid · CTA = yok (her kart kendi ilgili sayfasına linkli, ayrı bir CTA gerekmez).

---

## 1. Amaç ve Sıradaki Yeri

Chooser kullanıcıya "size uygun olabilir" dedi; bu bölüm o öneriyi soyut bir tip adından çıkarıp **gerçek bir ana** taşır: telefon görüşmesi, TV, aile sofrası, günlük/aktif yaşam. Amaç yalnızca dekorasyon değil — her sahne, ilgili gerçek içeriğe bir kapı olur (kullanıcı onayı: "sadece dekorasyon olmayacak; ilgili içeriklere internal link verecek").

**Neden ScenarioRail değil, yeni bir organizma:** `ScenarioRail.astro` kendi yorumunda bilinçli olarak href taşımıyor ("scenarios don't link anywhere") ve ikon+metin kullanıyor, fotoğraf değil. Bu bölümün gereksinimi (gerçek/görsel + gerçek link) o bileşenin tasarım kararlarıyla doğrudan çelişiyor — bu yüzden ScenarioRail değiştirilmiyor, yeni bir kardeş organizma inşa ediliyor.

---

## 2. İçerik (taslak)

**Eyebrow:** "Hayatınızda Netlik"
**Başlık (H2):** "Günlük Yaşamda Fark Yaratır"
**Intro:** "Doğru cihaz, en çok, günün sıradan anlarında hissedilir."

**4 senaryo (görsel + kısa başlık + tek cümle + gerçek link):**

| # | Senaryo | Başlık | Açıklama | Link |
|---|---|---|---|---|
| 1 | Telefon görüşmesi | "Telefonda Netlik" | Aradığınızda, karşınızdakini ilk seferde anlamak. | `/isitme-cihazlari/bluetooth-ozellikli` |
| 2 | TV izlerken | "TV'de Kendi Sesinizi Bulun" | Sesi herkes için değil, kendi kulağınıza göre ayarlamak. | `/uygulama-ayar/uzaktan-ayar` |
| 3 | Aile sofrası / sosyal ortam | "Kalabalıkta Kaybolmadan" | Aile sohbetinde veya kalabalık bir masada konuşmayı takip edebilmek. | `/isitme-cihazlari/kulak-ici-ite` |
| 4 | Günlük/aktif yaşam (yürüyüş, dışarısı) | "Gün Boyu Yanınızda" | Dışarıda, terleme veya nem endişesi olmadan kullanım. | `/isitme-cihazlari/suya-dayanikli` |

**Kırmızı çizgi:** Her senaryo-link eşleşmesi gerçek, mevcut bir sayfaya işaret eder (yeni URL icat edilmez); hiçbir senaryo "bu cihaz olmadan hayatınız eksik" tonuna kaymaz (PRINCIPLES §5 — korku satışı yasak, "Sakin Usta" karakteri).

---

## 3. Tasarım Deseni / Art Direction

**Desen:** full-width/gerçek fotoğraf odaklı senaryo grid'i — CategoryExplorer'ın yatay rayından ve Bölüm 6'nın tablosundan görsel olarak tamamen ayrışan, büyük görsellerin öne çıktığı bir kompozisyon.

**Kompozisyon:**
- **Desktop (≥1024px):** 2×2 grid, her hücre büyük bir fotoğraf + üzerine/altına bindirilmiş kısa başlık+açıklama+"→" link ipucu (ScenarioRail'in rail'inden farklı, CategoryCard'ın linkli-kart mantığına daha yakın ama fotoğraf-öncelikli).
- **Tablet (768–1023px):** 2×2 korunur veya 1×4 dikey akışa döner (implementasyon kararı).
- **Mobile (<768px):** Tek sütun, her kart tam genişlik, fotoğraf üstte/altta kısa metin.

**Görsel dil:** Fotoğraflar sıcak, gerçek/gerçekçi, prodüksiyon kalitesinde ama "reklam çekimi" hissi vermeyen bir tonda (moodboard "sıcak premium" ilkesiyle tutarlı). Kart üzerindeki metin okunabilirliği için ince bir alt-gradient scrim.

**Motion:** Tek seferlik `data-rise` girişi, kart hover'ında hafif ölçek/gölge artışı (CategoryCard ile tutarlı, aşırıya kaçmayan).

---

## 4. Internal Link Planı

4 kart → 4 farklı gerçek sayfa (yukarıdaki tablo): `/isitme-cihazlari/bluetooth-ozellikli`, `/uygulama-ayar/uzaktan-ayar`, `/isitme-cihazlari/kulak-ici-ite`, `/isitme-cihazlari/suya-dayanikli`. Dört farklı hedef seçildi (aynı linkin tekrar etmemesi için) — bu, homepage'den şu ana kadar hiç linklenmeyen `/uygulama-ayar/uzaktan-ayar` sayfasına da ilk kez görünür bir bağlantı ekler.

## 5. SEO/GEO Amacı

Yaşam-senaryosu + cihaz/hizmet eşleşmesini doğal dille kurar; "TV izlerken işitme cihazı", "telefon görüşmesinde işitme cihazı" gibi uzun kuyruk niyetlerine dolaylı, bağlamsal yanıt (SEARCH_STRATEGY §7 Search Intent). Local SEO amacı yok — bilinçli olarak yok.

## 6. Gerekli Görseller

**Yeni görsel gerekli (kullanıcı kuralı: gerçek kullanıcı fotoğrafları tercih edilir; yoksa özel üretilmiş, stok olmayan görseller).** 4 adet — telefon görüşmesi, TV izleme, aile sofrası/sosyal ortam, dışarıda/aktif yaşam anı. Üretimden önce kullanıcıya görsel taslağı/moodboard onaya sunulmalı; hangi görsellerin gerçek çekim, hangilerinin özel üretim olacağı implementasyon öncesi netleştirilir.

## 7. Atomic Design (planlanan)

`ScenarioRail.astro` **değiştirilmez** — kendi href'siz, ikon-tabanlı tasarım kararı korunur (başka sayfalarda hâlâ kullanılıyor). Yeni bir kardeş organizma: `DailyLifeGrid.astro` (kendi klasöründe, `daily-life/` gibi). `CategoryCard.astro`'nun linkli-kart etkileşim deseni (hover/focus/klavye) mimari emsal alınır, ama görsel-öncelikli yeni bir kart atomu (`DailyLifeCard.astro`) gerekir — CategoryCard ikon-öncelikli, bu bölüm fotoğraf-öncelikli.

## 8. Erişilebilirlik

- Her kart gerçek, tek bir tıklanabilir/klavye ile erişilebilir link (`<a>`), iç içe interaktif eleman yok.
- Görseller anlamlı `alt` metni taşır (senaryoyu tarif eder, dekoratif değildir — bu görseller bilgi taşıyor, `aria-hidden` OLMAZ; SoundRoom'un dekoratif izlerinden farklı).
- Kart üstü metin kontrastı (scrim üzerinde) AA+ garantili.
- `prefers-reduced-motion`: hover/giriş animasyonları sadeleşir, işlevsellik (link) korunur.

## 9. Design Review Checklist

- 4 link, 4 farklı gerçek sayfaya işaret ediyor (tekrar yok).
- Hiçbir görsel stok hissi vermiyor; kullanıcı onayından geçti.
- Korku/eksiklik dili yok — "Sakin Usta" tonu korunuyor.
- ScenarioRail'e dokunulmadı.
- Görseller `aria-hidden` değil, gerçek `alt` metni taşıyor (bu bölümde görsel dekoratif değil, bilgi taşıyor).
