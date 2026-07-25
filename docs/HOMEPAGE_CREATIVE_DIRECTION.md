# HOMEPAGE_CREATIVE_DIRECTION.md

> Ana sayfanın hikâyesi, psikolojik yolculuğu ve bölüm mimarisi. Bu belge sayfaya özel bir **uygulama spesifikasyonudur** — anayasal referansların (COMPANY, PRINCIPLES, DESIGN_SYSTEM_GUIDE, SEARCH_STRATEGY, IMPLEMENTATION_STANDARD) yerine geçmez, onları ana sayfaya uygular.

## Kanonik kaynaklar (SSoT)
Buradaki Brand DNA, karakter ve görsel dil kavramları burada *tanımlanmaz*; kalıcı dokümanlarda tanımlıdır:
- Brand DNA (Purpose→…→Brand Character), kişilik/ton, güven → **PRINCIPLES.md §1 / §4 / §7**
- İçerik ve iddia politikası, CTA → **PRINCIPLES.md §5 / §9**
- Görsel dil (Noise → Signal) → **DESIGN_SYSTEM_GUIDE.md §6 Visual Language**
- Şirket gerçekleri (adres, telefon, hizmetler, markalar) → **COMPANY.md**
- Arama/AI görünürlüğü → **SEARCH_STRATEGY.md** · İmplementasyon kalitesi → **IMPLEMENTATION_STANDARD.md**

Her bölüm uygulanırken zincir sınanır: `Brand DNA → Brand Character → PRINCIPLES → DESIGN_SYSTEM → Implementation`. Çelişki halinde kanonik doküman esastır.

## Bağlam
Header, Mega Menu ve Footer premium seviyede. Ana sayfa boş (`src/pages/index.astro`). Amaç: Türkiye'nin en premium işitme cihazı ana sayfası. Bağlayıcı akış (PRINCIPLES §3): önce bilgilendir → güven inşa et → iletişime yönlendir → temin imkânı. Tasarım dili: slate + tek mavi, lacivert footer, katmanlı ışık gölgeleri, elle yazılmış hareket, tam erişilebilirlik.

---

## Manifesto (ana sayfa sesi)
> Brand DNA'nın kopya olarak ifadesi. Karakter: Sakin Usta (PRINCIPLES §1/§4). Ton: güven bırakır, korku değil.

> Duymak, hayatın içinde kalmaktır.
> Ve iyi bir işitme, sesin yüksekliğiyle değil, netliğiyle ölçülür.
>
> Bizim işimiz sesi yükseltmek değil, netleştirmek —
> gürültüyü sinyale, karmaşayı berraklığa çevirmek.
>
> Size yol gösterirken de aynısını yaparız:
> önce dinler, sonra anlatırız; satmadan önce anlamaya çalışırız.
> On sekiz dünya markası arasından en pahalıyı değil,
> kulağınıza ve hayatınıza en uygun olanı öneririz.
>
> Çünkü netlik bizim için bir teknoloji değil, bir dürüstlük biçimidir.
> Acele ettirmez, baskı yapmayız; kararı, doğru bilgiyle, size bırakırız.
>
> **Daha net duyun, hayata daha yakın olun.**

---

## Büyük Fikir & Görsel Dil
**"Yeniden duymak, yeniden bağlanmaktır."** Ana sayfa katalog değil; kopuştan bağlanmaya bir yolculuk. Ürün değil, hayatın sesi.

**Metafor — Gürültüden Sinyale** (Canonical Source: DESIGN_SYSTEM_GUIDE.md §6). Netlik optik "blur→focus" ile değil, akustik dille anlatılır: dağınık dalgaların tek temiz sinyale hizalanması. Cihazdan bağımsız, erişilebilir, zamansız; "kamera" değil "işitme" der.

**Üç katmanlı dil** (eşit değil, farklı irtifa — bu yüzden çarpışmazlar):
1. **İnsan hikâyesi** — "neden umursayayım?" (kopya, gerçek yüzler). Sabit ruh.
2. **Akustik dil (noise→signal)** — "markanın fikri ne?" (hero grafiği, geçişler, veri). Konsantre imza.
3. **Premium arayüz** (ışık/derinlik/mikro-motion) — "üst düzey mi?" (malzeme, detay). Görünmez bitiş.

**Şef kuralı:** Her bölümde tek katman lider; üçü aynı anda full ses = gürültü.

**Taşıyıcı fikir:** Akustik dalga başta gürültü, sonda harmoni — kullanıcının yolculuğunu tüm scroll boyunca anlatır. Dekor değil, anlatının kendisi.

| Bölüm | Lider katman | Akustik yoğunluk |
|---|---|---|
| Hero | akustik | zengin ama sakin (poised) — zirve kaos değil |
| Empati | hikâye | neredeyse görünmez tek çizgi |
| Sound Room | akustik | zirve kontrast (kullanıcı çözer) |
| Bilgilendir · Rehber | hikâye + akustik | okunabilir, işlevsel çizgiler |
| Güven · Tarafsızlık · Hikâyeler | hikâye | fısıltı → sessizlik (rest) |
| Dönüşüm | hikâye + premium | tek, hizalanmış sinyal (çözünüm) |

**İki şart:** (1) *Kasıtlı sessizlikler* — akustik her yerde olursa duvar kâğıdı olur; rest bir nefestir. (2) *Değişmez gramer* — aynı çizgi DNA'sı, tek mavi + slate, aynı easing (`cubic-bezier(0.22,1,0.36,1)`), aynı çözünme yönü.

**Premium/glass uyarısı:** Aşırı cam = generic + soğuk/klinik. "Sıcak premium": gradient değil katmanlı ışık gölgesi; baharat gibi, okunabilirliği asla yenmez.

**Ton:** sıcak, onurlu, umutlu, bilimsel. "Klinik ama soğuk değil; lüks ama gösterişsiz."

---

## Psikolojik Yolculuk
"Burası farklı" → "Beni anlıyorlar" → "Aa, gerçekten böyle" → "Şimdi anladım" → "Bu bana uygun" → "Doğru ellerdeyim" → "Kendi markasını değil bana uygunu öneriyor" → "Korkacak bir şey yok, denemesi ücretsiz" → "Başkaları da yaşadı" → "Bir konuşmayla başlayalım."

## Bölüm Mimarisi
*Ritim: önce hisset (0–1), sonra deneyimle (2), sonra anla (3–4), sonra güven (5–6), sonra riski kaldır → kanıt → davet (7–9).*

### 0 · Hero — "İlk Netlik Anı"
**Amaç:** Merak ve güven uyandırır; "burası farklı" dedirtir.
- Ürün fotoğrafı değil; sessiz bir bağ anı, tipografi ağırlıklı, bol nefes.
- İmza hareket: dağınık akustik sinyal alanı açılışta hizalanıp yerine oturur — netleşmeyi arayüz canlandırır (reduced-motion'da statik).
- Duygusal, kendinden emin başlık; ince çift marka kilidi. Tek CTA: "Ücretsiz İşitme Testi".
- *Lider: akustik. Karakter: minimal.*

### 1 · Empati — "Tanıdık geliyor mu?"
**Amaç:** Kullanıcı kendini görülmüş, anlaşılmış hisseder.
- Nazik, korkutmayan küçük anlar ("Kalabalıkta konuşmaları kaçırmak. Torununuzun fısıltısı."); yavaş beliren satırlar.
- *Lider: hikâye. Karakter: minimal, tipografik, interaktif değil.*

### 2 · Sound Room — "Duyma Deneyimi" ★ WOW
**Amaç:** Markanın büyük fikrini (netlik) kullanıcıya deneyimletir.
- Ses yok. Kullanıcı "netlik" kaydırıcısını sürükler; frekans/dalga alanı gürültüden hizalı sinyale çözülür. İlk kaybolan sesler (kuş, sessiz harfler, çocuk sesi) görsel olarak söner ve döner. Kullanıcı duymaz, **görür**.
- *Ses simülasyonu neden yok:* işitme kaybını, kaybı olan kişiye sesle gösteremezsin + cihaz farkı + örtük garanti riski.
- Etik: "örnekleyicidir, teşhis değildir" (PRINCIPLES §5); cihazdan bağımsız, herkese açık.
- *Lider: akustik (zirve kontrast). Karakter: tam interaktif, sayfanın merkezi.*

### 3 · Bilgilendir — "İşitme nasıl çalışır, kayıp nasıl olur"
**Amaç:** Bilgilendirir; yetkinlikle güven kurar.
- Temiz, bilimsel, korkutmayan: kademeli, yaygın, yönetilebilir. Sakin kulak diyagramı ya da "3 gerçek" kartları.
- *Neden burada:* "önce bilgilendir" (PRINCIPLES §3). Karakter: yarı-interaktif / minimal-zarif.*

### 4 · Rehber — "Size uygun çözüm"
**Amaç:** Kişisel alaka kurar; kullanıcıyı ilk yumuşak adıma taşır.
- 3–5 adımlık sıcak yönlendirici (yaşam tarzı / kayıp durumu) → **teşhis değil**, ücretsiz uzman testine davetle biter. Tamamlayıcı: cihaz tipleri gezgini (BTE/ITE/CIC, şarjlı, görünmez, bluetooth).
- *Karakter: interaktif.*

### 5 · Güven — "Neden Avrasya / Eniyicihaz"
**Amaç:** "Doğru ellerdeyim" dedirtir; uzmanlığı kanıtlar.
- 2009'dan beri, uzman odyolog & odyometrist, SGK anlaşmalı. Gerçek ekip/klinik (Darıca/Kocaeli — COMPANY.md), doğrulanabilir yetkinlik, uydurma rozet yok (PRINCIPLES §7).
- *Karakter: minimal→orta; gerçek fotoğraf, sessiz özgüven.*

### 6 · Tarafsızlık — "Tek çatı, tüm dünya markaları"
**Amaç:** "Kendi markasını değil, bana uygunu öneriyor" güvenini verir.
- Marka bağımsızız — 18 dünya markası (COMPANY.md §8); komisyonu yükseği değil, size uygunu. Sessiz, premium marka duvarı.
- *Neden burada:* dönüşümden önce "sadece kendi markasını mı satıyor?" itirazını çözer. Karakter: minimal.*

### 7 · Süreç & Deneme — "Nasıl ilerliyoruz"
**Amaç:** Korkuyu ve riski kaldırır; ziyareti güvenli kılar.
- Ücretsiz test → değerlendirme → cihazı **ücretsiz deneme** → kişiye özel programlama. Baskı yok. "Ziyaret bir satış değil, bir danışma."
- *Karakter: yarı-interaktif stepper.*

### 8 · Gerçek Hikâyeler
**Amaç:** Akran kanıtıyla duygusal onay verir.
- Gerçek, dürüst hikâyeler (garanti vaadi yok — PRINCIPLES §5); açılış anına geri bağlanır.
- *Karakter: minimal, insani.*

### 9 · Dönüşüm — "Bir konuşmayla başlayalım" ★ İkna zirvesi
**Amaç:** Baskısız, sıcak bir davetle iletişime taşır.
- Premium kapanış daveti. Üç mod: **randevu** (form), **ara** (gerçek telefon — COMPANY.md), **gel** (harita/saat). Satın alma değil, sohbet.
- CTA katmanları: PRINCIPLES §9. *Karakter: ikna zirvesi. Ardından Footer.*

---

## Kesişen İlkeler
- **Netlik motifi:** sayfa indikçe gürültü→sinyal hizalanması artar (akustik; optik blur değil).
- **İnteraktiflik:** yalnızca işitme sektörünün yapabileceği görsel-duyusal an (Sound Room).
- **Rahatsız etmeyen çağrı:** hafif, bunaltmayan randevu/telefon erişimi.
- **Görsel süreklilik:** katmanlı ışık gölgesi + %3 film-grain + noktalı grid dili tüm sayfada (footer ile aynı).
- **Scroll-koreografisi:** IntersectionObserver kademeli reveal (footer failsafe + reduced-motion deseni).

**Sektörden kopuş:** görsel-sessiz Duyma Deneyimi · ürün gridi yerine şiirsel açılış · marka bağımsızlığını güven argümanına çevirmek · süreci "danışma/deneme" çerçevesi · arayüzün netliği canlandırması.
