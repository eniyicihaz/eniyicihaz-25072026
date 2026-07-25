# SOUND_ROOM_SPECIFICATION.md

> Ana sayfanın etkileşimli merkezi — akustik yoğunluk yayının zirvesi ("● ZİRVE, kullanıcı çözer" — `HOMEPAGE_MOODBOARD.md`). Hero'nun ve Empati'nin kurduğu görsel dile ve motion diline sadıktır; buradaki fark yoğunluk ve etkileşimdir, dilbilgisi değil. Doküman Astro geliştirmesinde doğrudan kullanılacak; kod içermez, yalnızca Art Direction ve spesifikasyon tanımlar.
>
> **Kanonik kaynaklar:** amaç/hikâye → `HOMEPAGE_CREATIVE_DIRECTION.md` (Bölüm 2 · Sound Room) · sayfa ritmi → `HOMEPAGE_MOODBOARD.md` · ton/etik sınırlar → `PRINCIPLES.md §5/§11` · görsel dil/yoğunluk yayı → `DESIGN_SYSTEM_GUIDE.md §6` · Hero'nun/Empati'nin kurduğu değişmez gramer → `docs/HERO_SPECIFICATION.md` / `docs/EMPATHY_SPECIFICATION.md`. Çelişkide kanonik doküman esastır.
>
> **Sabit çerçeve (moodboard):** Amaç = "Büyük fikri deneyimletmek" · Lider katman = akustik · Kompozisyon = geniş interaktif sahne + kaydırıcı · Tipografi hissi = minimal, destekleyici · Işık/Gölge = ◐ cam panel çerçeve · Noise→Signal = ● ZİRVE · CTA = yok (etkileşimin kendisi davettir).

---

# 1. Deneyimin Amacı

**Kullanıcının zihninde ne değişmeli?** Hero'da marka güven verdi; Empati'de kullanıcı kendini tanıdı. Sound Room'da bu ikisi *kanıta* dönüşür: kullanıcı markanın büyük fikrini ("netlik") pasif okumaz, kendi eliyle üretir. Psikolojik yolculuktaki karşılığı: **"Aa, gerçekten böyle."** — soyut bir vaat, elle tutulur bir deneyime dönüşür.

**Neden tam interaktif?** Bu, sitenin *"işitme sektörünün yapabileceği tek görsel-duyusal an"* olarak tasarlandığı yer (`HOMEPAGE_CREATIVE_DIRECTION.md`, Kesişen İlkeler). Pasif bir animasyon aynı fikri anlatabilirdi, ama kullanıcının kendi hareketiyle "gürültü"yü "sinyal"e çevirmesi, markanın vaadini (yeniden duymak, yeniden bağlanmak) kelimelerle değil, bir eylemle hissettirir. Bu, Core Emotion **Güven**'e giden en kısa yoldur: kullanıcı kendi kontrolündedir, hiçbir şey ona *anlatılmaz*.

**Neden Empati'den hemen sonra?** Empati "bunu ben de yaşıyorum" dedirtti ama çözümsüz bıraktı — bilinçli bir gerilim. Sound Room bu gerilimi çözer: "işte tam olarak bahsettiğim şey." Kullanıcı duygusal olarak yatırım yapmış durumda geliyor; deneyim ona soyut değil kişisel gelir.

**Sırada niye burada duruyor (Bilgilendir'den önce):** Kullanıcı önce *hisseder* (deneyim), sonra *anlar* (Bilgilendir bölümünün bilimsel çerçevesi). Deneyim önce gelirse bilgi bir vaaz değil, az önce yaşadığı şeyin açıklaması olur.

---

# 2. Etik Çerçeve ve Sınırlar

Bu bölüm, sağlıkla ilgili bir markanın en hassas noktasıdır ve doğrudan bağlayıcıdır — `PRINCIPLES.md §5` (İçerik Bütünlüğü) ve `§11` (Yasal ve Etik Sınırlar) buraya birebir uygulanır.

- **Gerçek ses simülasyonu YOK.** Bu, tasarım sürecinin başında bilinçli olarak reddedildi (bkz. `HOMEPAGE_CREATIVE_DIRECTION.md`): işitme kaybını, kaybı olan bir kişiye gerçek sesle göstermek hem hedef kitlede deneyimi çökertir (zaten duymadığı bir farkı duyamaz) hem de cihaz/dereceye göre yanıltıcıdır. Deneyim tamamen **görseldir** — kullanıcı duymaz, **görür**.
- **Teşhis değil, örnekleme.** Kaydırıcı bir tanı aracı değildir ve hiçbir noktada kullanıcının kendi işitme durumu hakkında sonuç çıkarmaz. Ekranda her zaman görünür, kalıcı bir açıklama bulunur (bkz. §4 Kopya) — bir defalık tooltip değil, sabit bir alt metin.
- **Cihazdan bağımsız.** Hiçbir marka, model veya "bizim cihazımız böyle düzeltir" iması yapılmaz — bu genel bir netlik kavramının görselleştirilmesidir, ürün karşılaştırması değildir.
- **Garanti/kesinlik dili yok.** "Cihazınız tam olarak bunu yapar" gibi ima edilebilecek hiçbir cümle kullanılmaz (`PRINCIPLES §5/§11` — kesin tedavi/iyileşme vaadi yasağı). Kopya her zaman "örnektir", "bir fikir verir" gibi çerçeveler.
- **Herkese açık, kişiselleştirme yok.** Kaydırıcı yaş, cihaz veya kayıp derecesi sormaz; herkes aynı genel deneyimi yaşar. Kişiselleştirme = teşhis anlamına gelebileceği için kasıtlı olarak yoktur.

**Sabit uyarı metni (kilitli, kopyada değişmez):**
> "Bu bir örnekleme deneyimidir, işitme testi değildir. Gerçek değerlendirme için ücretsiz işitme testimize davetlisiniz."

Bu metin, deneyimin hemen altında/yanında, her zaman görünür (gizli tooltip değil) yer alır ve deneyimin sonunda Sound Room'un tek CTA'sına (uzman testi daveti) doğal olarak bağlanır.

---

# 3. Interaction Concept

**Kontrol:** Tek bir yatay kaydırıcı — etiketi **"Netlik"**. Sol uç = "gürültü" (0), sağ uç = "sinyal" (100). Sürükleme, klavye okları, Home/End ile kullanılabilir (bkz. §12).

**Bileşen kararı — mevcut sistemi kullan:** Projede zaten bir `Slider` atomu var (`src/ds/components/ui/atoms/Slider/Slider.astro`), native `<input type="range">` üzerine kurulu. `DESIGN_SYSTEM_GUIDE.md §26` (Component Decision Tree) gereği, yeni bir sürükle-bırak kaydırıcı **icat edilmeyecek** — bu atom yeniden kullanılır. Bu aynı zamanda erişilebilirlik açısından da doğru karardır: native `range` input, klavye ve ekran okuyucu desteğini sıfırdan inşa etmeden ücretsiz sağlar.

**Sesin temsili — bilgi taşıyan öğeler, dekor değil (`DESIGN_SYSTEM §6` ilkesi):** Alan, altı adet etiketli "çizgi/iz" içerir — Hero'nun sinyal alanının kalabalıklaştırılmış hali. Her iz gerçek bir ses kategorisini temsil eder ve klinik olarak bilinen bir örüntüyü (yüksek frekanslı sesler yaşa bağlı işitme kaybında genellikle önce etkilenir) sadakatle ama iddiasız yansıtır — bu genel, tartışmasız bir bilgidir, kullanıcı hakkında bir iddia değildir:

| Sıra (önce netleşen → son netleşen) | Temsil ettiği ses | Neden bu sırada |
|---|---|---|
| 1 | Trafik / motor uğultusu | Düşük frekans — en dayanıklı, kaydırıcı 0'dayken bile kısmen ayırt edilir |
| 2 | Konuşma / kelimeler | Orta frekans — markanın merkezi vaadi ("duymak, anlamaktır"), ~%40-50'de belirginleşmeye başlar |
| 3 | Kapı zili | Orta-yüksek |
| 4 | Fısıltı / "s, f, ş" sesleri | Yüksek frekans — genellikle ilk kaybolanlardan |
| 5 | Kuş cıvıltısı | Yüksek frekans |
| 6 | Çocuk kahkahası | Yüksek frekans — duygusal olarak en yüklü, kasıtlı olarak son |

**Davranış:** Kaydırıcı 0'dayken tüm izler dağınık, soluk, hizasız (Hero'nun "pending" durumuna akraba ama 6 kat daha yoğun ve rastgele). Kaydırıcı sağa hareket ettikçe, izler **kendi eşiklerine ulaştıkça** teker teker (yukarıdaki sırayla) hizalanıp aydınlanır — sürekli, sürtünmesiz bir gradyan, adım adım değil. 100'e ulaşıldığında altısı da tek, temiz, hizalı bir sinyal demeti oluşturur (Dönüşüm bölümünün habercisi). Kullanıcı kaydırıcıyı geri çekerse, tam simetrik şekilde geri dağılır — tek yönlü bir "başarı" animasyonu değil, gerçek, tersinir bir keşif.

**Etiketleme:** Her iz, netleştiğinde küçük bir metin etiketiyle kendini açıklar (örn. "Konuşma" iz hizalandığında yanında belirir) — kullanıcı yalnızca soyut bir çizgi görmez, *neyin* netleştiğini anlar. Etiketler yalnızca kendi izleri hizaya yeterince yaklaştığında görünür (erken, dağınık haldeyken metin gösterip okunaksız bir gürültüye çevirmez).

---

# 4. Art Direction

**Genel atmosfer:** Empati'nin sessizliğinden sonra sahneye çıkış — ama gösteriş değil, bir *enstrümana* yaklaşmak gibi. Sakin bir laboratuvar/stüdyo hissi: odaklı, davetkâr, ölçülü.

**Cam panel — bilinçli tek istisna:** `DESIGN_SYSTEM_GUIDE`'ın genel uyarısı camın aşırı kullanımının "generic ve soğuk/klinik" hissettirdiğidir (`HOMEPAGE_CREATIVE_DIRECTION.md`, Premium/glass uyarısı). Sound Room, sayfada camın kullanıldığı **tek yer** olarak tasarlanır — deneyimi bir "sahne/enstrüman" çerçevesine oturtan ince bir cam panel kenarlığı (çok düşük opaklıkta yüzey + ince kenarlık + hafif iç gölge). İstisna kasıtlıdır: cam burada dekor değil, "bu özel bir an" sinyalidir — sayfanın başka hiçbir yerinde tekrarlanmaz.

**Minimalizm seviyesi:** Çerçevenin dışında hiçbir şey yok — istatistik yok, ikon yığını yok, kart yok. Yalnızca: kısa bir bağlam cümlesi, deneyim sahnesi, kaydırıcı, sabit etik uyarı metni.

**Işık:** Sahnenin kendisi hafif aydınlatılmış hisseder (cam panelin içinde bulunmanın getirdiği doğal derinlik); dışarısı Hero/Empati ile aynı sakin `--color-background`/`--color-surface` sürekliliği.

**Motion karakteri:** Bu, sayfanın *tek* sürekli, kullanıcı-güdümlü hareketidir — her yerdeki "bir kere oynar, durur" girişlerinin aksine, kaydırıcı hareket ettiği sürece iz alanı canlı kalır. Idle halde (kullanıcı dokunmadan) alan ya başlangıç (0) konumunda sakin durur ya da çok hafif, davetkâr bir "nefes" ile dikkat çeker (bkz. §9).

---

# 5. Creative References — alınan prensip (kopya değil)

| Referans | Alınan prensip | Bizim yorumumuz |
|---|---|---|
| **Ses ekolayzır arayüzleri** (stüdyo yazılımları) | Çoklu-bant görselleştirme, sürükleme = anlık geri bildirim | Ekolayzırın "teknik/mühendis" havasını değil, yalnızca "çoklu iz aynı anda tepki verir" mantığını alıyoruz — bizimki duygusal, teknik değil |
| **Apple (ör. İşitme/Erişilebilirlik tanıtımları)** | Karmaşık bir yeteneği tek dokunuşla hissettirme | Tek kaydırıcı, tek fikir — özellik listesi değil |
| **Linear/Stripe** | Etkileşimin kendisinin "kaliteli hissettirmesi" — gecikme yok, pürüzsüz | 60fps sürükleme, sıfır gecikme hissi zorunlu (bkz. §13) |
| **Bang & Olufsen** | Sesi malzeme/zanaat olarak sunmak | Cam panel = enstrümana dokunma hissi, "cihaz" değil "deneyim" |

**Sentez:** Ekolayzırın *duyarlılığı* + Apple'ın *tek-dokunuş netliği* + Linear/Stripe'ın *pürüzsüzlüğü* + B&O'nun *malzeme saygısı* → işitmeye özgü, kendi kendini açıklayan bir "netlik enstrümanı".

---

# 6. Visual Moodboard

- **Renk** — Aynı slate tuval + tek mavi vurgu (Hero/Empati ile birebir). Dağınık haldeki izler nötr/soluk slate (`--color-border-hover` civarı); hizalandıkça `--color-primary`'ye geçer — Hero'nun "signal" rengiyle birebir aynı mantık.
- **Cam panel** — çok düşük opaklıkta açık yüzey + ince `--color-border` kenarlık + hafif iç gölge (yükseklik hissi, dekoratif gölge değil — `DESIGN_SYSTEM §6` Shadow ilkesi).
- **İzler** — Hero'nun `HeroSignalField` çizgi karakteriyle aynı DNA (ince yatay çizgi, yuvarlak uçlar), ama altı tanesi bağımsız hareket eder ve her biri kendi etiketiyle eşleşir.
- **Kaydırıcı** — Mevcut `Slider` atomunun görsel reçetesi (bkz. `src/ds/components/ui/atoms/Slider`); "Netlik" etiketiyle, sol/sağ uçlarında sessiz "Gürültü"/"Sinyal" mikro-etiketleri.
- **Boşluk** — Sahnenin etrafında bol nefes; Empati'nin sessizliğinden bu "zirve"ye geçiş ani değil, kademeli bir büyümedir (bkz. §9 giriş animasyonu).
- **Kontrast** — Zirve an kaydırıcı 0'dayken en yüksek görsel "kargaşa" (yine de asla kaotik/rahatsız edici değil — altı ince çizgi, altmış değil); 100'de en yüksek düzen. Kontrastın kendisi anlatının motorudur.

---

# 7. Composition

### Desktop (≥1024px)
- Cam panel, `--container-lg`/`--container-xl` genişliğinde, ortalı; içinde üstte kısa bağlam cümlesi, ortada iz alanı (Hero'nunkinden daha geniş ve daha yüksek — altı iz için yer), altta kaydırıcı + uç etiketleri, en altta sabit etik uyarı metni.
- Etiketler, hizalanan izin hemen yanında (sağında) belirir — sahneyi genişletmez, mevcut boşluğu kullanır.

### Tablet (768–1023px)
- Aynı dikey istif; iz alanı yüksekliği biraz azalır; etiketler iz üstünde/altında da konumlanabilir (yan boşluk daralırsa).

### Mobile (<768px)
- Cam panel tam genişliğe yakın (yan boşluk `--space-4`); iz alanı sadeleşir ama **altı iz de kalır** — sadeleşme iz sayısında değil, boyut/aralıkta olur (içerik/bilgi kaybı yok, yalnızca ölçek). Kaydırıcı dokunma hedefi ≥44px. Kaydırıcı her zaman ekranın "kolay erişilir" bir bölgesinde (ne çok üstte ne çok altta).

---

# 8. Typography Direction

Minimal ve destekleyici — bu bölümde tipografi lider değil, deneyim lider.

| Öğe | Yön |
|---|---|
| **Bağlam cümlesi** (panelin üstünde) | Tek kısa cümle, `--font-size-lg`, `--font-weight-normal`, `--color-text-muted` — örn. "Kaydırıcıyı sağa doğru hareket ettirin." |
| **Kaydırıcı etiketi ("Netlik")** | `--font-size-sm`, `--font-weight-semibold`, uppercase, Hero'nun eyebrow tracking'iyle tutarlı (`0.12em`) |
| **Uç mikro-etiketleri (Gürültü/Sinyal)** | `--font-size-xs`, `--color-text-soft` — fısıltı düzeyinde, kaydırıcıyı boğmaz |
| **İz etiketleri** (Konuşma, Kuş cıvıltısı, vb.) | `--font-size-xs`/`sm`, hizalandıkça `--color-text-muted` → `--color-text` (Empati'nin satır-düzeyi renk netleşmesiyle aynı ilke) |
| **Sabit etik uyarı metni** | `--font-size-xs`, `--color-text-soft`, her zaman görünür (gizlenmez/daraltılmaz) |

---

# 9. Motion & Visualization Language (yalnızca davranış — kod yok)

- **Sürükleme tepkisi:** Kaydırıcı değeri her değiştiğinde (native `input` olayı, `change` değil — anlık geri bildirim için), her izin hizalanma durumu bu değere **sürekli** bağlıdır — adım adım "tetiklenen" ayrı animasyonlar değil, değerin kendisiyle senkronize, kesintisiz bir geçiş. Kullanıcı kaydırıcıyı yavaş hareket ettirirse, izler de aynı yavaşlıkta hizalanır; hızlı hareket ettirirse, izler de hızlı hizalanır. Gecikme hissi olmamalı (bkz. §13 performans).
- **Sıralı eşikler:** Her izin kendi "hizalanma eşiği" vardır (§3 tablosundaki sıra) — kaydırıcı o eşiği geçtiğinde iz görsel olarak "kilitlenmeye" başlar. Eşikler eşit aralıklı değildir; düşük frekans izleri erken eşiklerde, yüksek frekans izleri geç eşiklerde hizalanır — bu, tesadüfi değil bilgi taşıyan bir sıralamadır (§3).
- **Easing:** Sayfanın imza eğrisi `cubic-bezier(0.22, 1, 0.36, 1)` yalnızca *ayrık* geçişlerde (etiket belirmesi, panelin girişi) kullanılır. Kaydırıcıyla senkronize iz hizalanması bizzat kullanıcı girdisiyle sürüldüğü için kendi "easing"i kullanıcının elidir — yapay bir gecikme eğrisi eklenmez (aksi halde kaydırıcı "yapışkan" hissettirir).
- **Giriş animasyonu (bölüm ilk görünürken):** Cam panel ve kaydırıcı, Hero/Empati'nin `data-rise` deseniyle belirir (opacity+translateY, imza easing) — ama iz alanının kendisi *daima* kaydırıcının o anki değerine göre render edilir (varsayılan: 0, yani tam dağınık) — ayrı bir "giriş koreografisi" yok, çünkü asıl koreografi kullanıcının elindedir.
- **Idle davet:** Kullanıcı sahneye ulaştığında henüz dokunmamışsa, kaydırıcının etrafında çok hafif, tekrar eden bir "dokunun" ipucu (Hero'nun scroll-cue'suna akraba, sabit genlikte, agresif olmayan bir nabız) — sürekli değil, birkaç kez tekrarlayıp sakinleşir.
- **Reduced motion:** Kaydırıcı sürükleme sırasında canlı geri bildirim **korunur** (bu dekoratif hareket değil, işlevsel bir kontrol geri bildirimidir — `DESIGN_SYSTEM §12`: "hareket kullanıcıya bir şey anlatıyorsa kalır"). Kaldırılan yalnızca *dekoratif* hareketlerdir: idle "dokunun" nabzı ve panelin giriş animasyonu (bunlar anında, hareketsiz belirir). Bu ayrım net tutulur: işlevsel geri bildirim ≠ dekoratif giriş animasyonu.

---

# 10. Atomic Design Architecture (henüz kod yok — yalnızca yapı)

**Component Decision Tree kontrolü:** Kaydırıcı için mevcut `ds/components/ui/atoms/Slider` **yeniden kullanılır**, yeniden yazılmaz. Hero'nun `[data-rise]`/`data-anim` giriş deseni panel/kaydırıcının kendisi için yeniden kullanılır. Yeni olan tek şey, kullanıcı girdisine sürekli bağlı iz-hizalanma mekanizmasıdır — bu, Hero'nun tek seferlik "noise→signal" koreografisinden yeterince farklı olduğu için yeni bir atom'u haklı çıkarır.

- **Atoms**
  - `SoundRoomThread.astro` — tek bir etiketli iz; `label`, `alignThreshold` (0-100), `order` prop'ları. `HeroSignalField`'ın tek-çizgi mantığının kullanıcı-girdisine bağlı hali.
- **Molecules**
  - `SoundRoomStage.astro` — altı `SoundRoomThread`'i barındıran sahne; cam panel çerçevesi, kaydırıcı değerini prop olarak alıp izlere dağıtır.
  - `SoundRoomControls.astro` — mevcut `Slider` atomunu sarmalayan, "Netlik" etiketi + uç mikro-etiketleri + sabit etik uyarı metnini içeren kontrol grubu.
- **Organism**
  - `SoundRoom.astro` — düzeni kurar, kaydırıcı değerini (client-side state) yönetir, `Stage` ve `Controls`'a dağıtır, giriş animasyonunu (Hero deseni) ve idle-davet nabzını yönetir.
- **Data/type sözleşmesi:** `sound-room.data.ts` — altı `{ label, alignThreshold, order }` girdisi; `sound-room.types.ts`.
- **Yeniden kullanılan altyapı:** `Slider` atomu (ds), `data-rise`/`data-anim` giriş deseni, imza easing.

---

# 11. Design Tokens

| İhtiyaç | Karşılanma |
|---|---|
| **Renk** | Mevcut `--color-primary`, `--color-border-hover`, `--color-text-muted/soft/text` — yeni renk yok. |
| **Cam panel** | Yeni bir "glass" tokeni gerekmez; mevcut `--color-surface` + düşük opaklıklı `--color-border` + `--shadow-sm/md` kombinasyonu yeterli (`DESIGN_SYSTEM §6` Shadow ilkesine uygun — gerçek yükseklik hissi, dekoratif değil). |
| **Motion (easing)** | Sahnenin *ayrık* geçişleri için `--empathy-ease` ile aynı imza değer; bu artık **dördüncü** tekrar (Hero, Footer, Empati, Sound Room) — `--ease-signature` DS tokenına yükseltme önerisi güçleniyor (bağımsız bir DESIGN_SYSTEM iyileştirmesi olarak, bu spec'ten ayrı). |
| **Spacing/Typography** | Mevcut ölçek yeterli; yeni tipografi/spacing tokenı gerekmiyor. |
| **Slider** | Yeni bir slider tokeni yok — mevcut `ds/components/ui/atoms/Slider/Slider.css` reçetesi kullanılır. |

---

# 12. Accessibility

Bu bölüm, Sound Room'un en kritik tasarım problemidir: deneyimin özü *görsel*dir ("kullanıcı duymaz, görür") — bu, ekranı göremeyen bir kullanıcı için doğrudan bir eşitsizlik yaratır. Çözüm yeniden ses eklemek değildir (bkz. §2 — gerçek ses simülasyonu kasıtlı olarak yok) — çözüm, deneyimin **anlamını** metinle eşdeğer kılmaktır.

- **`aria-valuetext` ile eşdeğer anlatı (çekirdek çözüm):** Native `range` input'un `aria-valuetext` özelliği, ekran okuyucunun anons ettiği değeri sayısal yüzdenin ötesine taşır. Kaydırıcı hareket ettikçe `aria-valuetext`, o andaki netlik durumunu **sözel olarak** tarif eder — örn. "%30 netlik: yalnızca trafik sesi ve konuşmanın ana hatları seçilebiliyor" → "%90 netlik: kuş cıvıltısı ve fısıltılar da netleşti." Görme engelli bir kullanıcı, görsel izleri hiç görmeden, aynı deneyimin **anlamını** kaydırırken canlı olarak duyar — bu, dekoratif bir açıklama değil, deneyimin kendisinin erişilebilir versiyonudur. Bu metin her `input` tetiklemesinde değil, yalnızca anlamlı ayrık eşiklerde (örn. her iz hizaya girdiğinde) güncellenir/throttle edilir — aksi halde hızlı bir sürüklemede ekran okuyucu art arda gelen anonsları kuyruğa alır ve anlaşılmaz hale getirir.
- **Klavye:** Native `range` input zaten tam klavye desteği taşır (ok tuşları, Home/End, Page Up/Down) — ekstra bir şey icat edilmez (`DESIGN_SYSTEM §26` — mevcut atomu kullanmanın erişilebilirlik kazancı budur).
- **Odak:** Kaydırıcının odak göstergesi asla kaldırılmaz; mevcut `--focus-ring` kullanılır.
- **İzler dekoratiftir, kaydırıcı değildir:** Altı `SoundRoomThread` görsel olarak `aria-hidden="true"`'dur (Hero/Empati ile aynı ilke) — anlamları yalnızca `aria-valuetext` üzerinden taşınır, ikinci kez (ve tutarsız şekilde) DOM'da tekrar edilmez.
- **Etiketlerin görünürlüğü:** Hizalanan izlerin yanında beliren metin etiketleri (§3) gerçek, erişilebilir metindir (yalnızca görsel dekor değil) — ama `aria-valuetext` zaten aynı bilgiyi taşıdığı için bunlar da `aria-hidden` olabilir (tekrar/karmaşa yaratmamak için) — nihai karar implementasyon aşamasında netleşir.
- **Sabit etik uyarı metni:** Her zaman DOM'da, her zaman görünür — gizli/collapsed değil (`PRINCIPLES §5/§11` gereği bu metnin erişilebilir olmaması kabul edilemez).
- **Kontrast:** Tüm metin durumları (muted→text geçişi dahil) token tabanlı, AA+ garantili — Empati'de kurulan disiplinin aynısı.
- **Reduced motion:** §9'daki ayrım geçerli — işlevsel geri bildirim (kaydırma tepkisi) kalır, yalnızca dekoratif hareket (idle nabız, giriş animasyonu) kaldırılır.
- **Dokunmatik:** Kaydırıcı thumb'ı ≥44px dokunma hedefi (mobilde büyütülmüş görünür thumb).

---

# 13. Performance

- **Girdi → görsel güncelleme yolu:** Kaydırıcının `input` olayı, DOM'da yalnızca **CSS custom property** (`--clarity` gibi bir üst-seviye değişken) günceller; her iz kendi hizalanma durumunu bu tek değişkenden ve kendi `alignThreshold`'undan CSS içinde (`calc()`/`clamp()`) türetir. JavaScript her iz için ayrı ayrı stil hesaplamaz — tarayıcı, tek bir custom-property güncellemesinden altı izin durumunu paralel ve ucuza türetir.
- **Yalnızca compositor-dostu özellikler:** `transform`/`opacity` (Hero/Empati ile aynı disiplin) — sürükleme sırasında layout veya paint tetikleyen hiçbir özellik değişmez.
- **`mask-image` kullanılmaz** — Hero'nun Design Review dersinin burada da geçerli olduğu açıkça not edilir; iz alanının kenar solması (gerekirse) ucuz bir `linear-gradient` maskesi/arka planıyla çözülür.
- **Olay sıklığı:** `input` olayı tarayıcı tarafından zaten makul sıklıkta ateşlenir; ek bir `requestAnimationFrame` throttle'ı yalnızca gerçek bir gecikme/jank ölçülürse eklenir (erken optimizasyon yapılmaz — ama izlenir).
- **Cam panel:** Gerçek bir `backdrop-filter` bulanıklığı yerine (pahalı, GPU yükü yüksek) düşük opaklıklı düz yüzey + ince kenarlık tercih edilir — "cam hissi" `box-shadow`/border ile, gerçek blur olmadan verilir.
- **LCP/CLS:** Bölüm katlama altında; panel boyutu sabit/`min-height` ile önceden ayrılır — kaydırıcı etkileşimi hiçbir noktada reflow tetiklemez.

---

# 14. Design Review Checklist

- Kullanıcı kaydırıcıyı hareket ettirdiğinde "Aa, gerçekten böyle" hissi oluşuyor mu — yoksa soyut bir animasyon gibi mi kalıyor?
- Sabit etik uyarı metni her zaman görünür, gizlenmiş/daraltılmış değil.
- Altı iz doğru sırayla (§3 tablosu) hizalanıyor; sıralama tesadüfi değil.
- `aria-valuetext` gerçekten anlamlı, güncel bir anlatı taşıyor — yalnızca "%42" gibi bir sayı değil.
- Native `Slider` atomu yeniden kullanıldı, yeni bir kaydırıcı icat edilmedi.
- Sürükleme sırasında gecikme/jank hissi yok (60fps).
- `mask-image` veya `backdrop-filter` gibi pahalı katman yok.
- Cam panel yalnızca burada var — sayfanın başka hiçbir yerinde tekrarlanmıyor.
- Reduced motion: işlevsel geri bildirim kalıyor, yalnızca dekoratif hareket kayboluyor.
- Hiçbir cümle teşhis/garanti/kesinlik imasına kayıyor mu (PRINCIPLES §5/§11 kontrolü) — hayır olmalı.

---

# 15. Creative North Star

Bu bölümün başarısı, kullanıcının "havalı bir animasyon gördüm" demesi değildir. Başarı, kullanıcının kaydırıcıyı bıraktığında şunu hissetmesidir:

> "Az önce, kelimelerle anlatamayacakları bir şeyi bana gösterdiler.
> Ve bunu bana hiçbir şey satmadan yaptılar."

Deneyim bittiğinde kullanıcı bir ürün görmüş değil, markanın *nasıl düşündüğünü* görmüş olmalıdır — sabırlı, dürüst, gösterişsiz. Kaydırıcı bir oyuncak değildir; markanın "netlik" felsefesinin elle tutulur hâlidir. Bu his oluşmuyorsa — kullanıcı yalnızca eğlenceli bir widget'la oynadıysa, bir şey öğrenmediyse — bölüm amacına ulaşmamış demektir.

**Kaçınılması gerekenler (kilitli):** Sayaç, skor, yüzde göstergesi, "başarı" durumu, kutlama niteliğinde hareket (konfeti, sıçrama, parlama patlaması vb.), oyunlaştırılmış kopya ("Harika!", "Tebrikler!", "Kazandın!" gibi). Bunların hiçbiri "Sakin Usta" karakteriyle uyuşmaz — deneyim bir oyun değil, sessiz bir gösterimdir.

**Değerlendirme ölçütü:** §14'teki checklist teknik/etik/erişilebilirlik tarafını doğrular; ama nihai kabul kriteri her zaman bu North Star'dır.
