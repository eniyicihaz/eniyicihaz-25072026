# REDIRECT_AUDIT.md

> **Durum:** ACTIVE · Teknik belge · Oluşturulma: 2026-11-11 (2. tur)
> **Amaç:** `REDIRECTS_AND_HUBS.md` §3.1'de "uygun hedef yok" diye ayrılan **20 eski URL**'yi tek tek denetler: eski URL, ilgili sorgular, Search Console tıklama/gösterim, en yakın mevcut sayfa, öneri ve gerekçe.
> **Kural (kullanıcı):** Yalnızca **gerçek eşleşme** varsa yönlendirilir; aksi halde raporlanır. Alakasız URL ana sayfaya yönlendirilmez. Eşleşme yoksa **410 veya yeni sayfa kararı verilmez**, karar kullanıcıya bırakılır. Mevcut 122 yönlendirme ve hub hiyerarşisi bozulmadı.
> **Sonuç (özet):** 20 URL'den **19'u karar bekliyor** (yakın/doğru bir hedef yok; yönlendirme eklenmedi, 404 dönüyor). **1'i yönlendirildi:** #18, mevcut `/isitme-kaybi-belirtileri` kuralının bozuk kodlanmış yazımıdır — niyet ve hedef birebir aynı; eşleşme 2026-11-11'de `wrangler pages dev` ile yerelde doğrulandı (§5). Toplam: **48 tıklama / 3.760 gösterim** (eski URL'lerin toplamı 1.378 / 82.936; yani tıklamaların ≈ %3,5'i). Her URL için risk değerlendirmesi: §6.

**Veri:** Search Console `sc-domain:eniyicihaz.com`, **2026-05-01 → 2026-11-09**, web. Konum = ortalama konum. "Sorgular" parantezde gösterim sayısıyla. Salt-okunur erişim; hiçbir ayar değişmedi.

---

## 1. Model aileleri (12 URL) — sitede **hiç geçmeyen** modeller

Sitede `Oticon More`, `Signia Intuis`, `ReSound Linx/ONE` ifadeleri hiçbir sayfada **geçmiyor** (kaynak taraması: `src/data`, `src/pages`, `src/components`). Güncel marka sayfaları şu aileleri listeler: Oticon (Intent, Real, Zeal, Own, Opn, Xceed, Play, Ruby, Zircon, Jet …), Signia (Pure, Silk, Insio, Active, Styletto), ReSound (Key, Nexia, Omnia, Vivia). Bu yüzden marka sayfasına yönlendirme, ziyaretçinin aradığı **model** ve **fiyat** niyetini karşılamaz; boş vaat olur ("More 3 fiyat" arayan kişi More'un olmadığı sayfaya gelir).

| # | Eski URL | Tık / Gösterim / Konum | İlgili sorgular (gösterim) | En yakın mevcut sayfa | Öneri | Gerekçe |
|---|---|---|---|---|---|---|
| 1 | `/oticon-more-3-isitme-cihazi` | 7 / 435 / 10,0 | oticon more 3 fiyat (110, konum 4,9) · oticon işitme cihazı fiyatları (45) · oticon more 3 (43) · oticon işitme cihazı (28) · oticon kulak içi işitme cihazı (18) | `/markalar/oticon/` | **Yönlendirme yok — karar bekliyor** | More ailesi marka sayfasında listelenmiyor; sorguların çoğu model-fiyat niyeti. Fiyat yalnızca `/isitme-cihazi-fiyatlari/` sayfasında ve **model fiyatı vermeden** (K-Fiyat-1) anlatılıyor |
| 2 | `/oticon-more-isitme-cihazi` | 4 / 217 / 15,8 | oticon more (43) · more işitme (23, 1 tık) · oticon işitme cihazı (15) · oticon more 2 (12) | `/markalar/oticon/` | **Yönlendirme yok — karar bekliyor** | #1 ile aynı |
| 3 | `/oticon-more-1-isitme-cihazi` | 1 / 235 / 7,5 | oticon more 1 (39) · oticon 1 (10) · oticon more (8) · oticon işitme cihazı fiyatları (6) | `/markalar/oticon/` | **Yönlendirme yok — karar bekliyor** | #1 ile aynı |
| 4 | `/oticon-more-2-isitme-cihazi` | 1 / 78 / 14,5 | oticon more 2 (17) · oticon ria 2 fiyatı (4) · oticon zircon 2 fiyat (3) | `/markalar/oticon/` | **Yönlendirme yok — karar bekliyor** | #1 ile aynı |
| 5 | `/signia-intuis-4` | 9 / 328 / 11,6 | intuis (35) · siemens intuis 2 fiyat (13) · 4 kanallı işitme cihazları fiyatları (11) · signia işitme cihazı fiyatları 2021 (9) | `/markalar/signia/` | **Yönlendirme yok — karar bekliyor** | Intuis (eski Siemens/Sivantos serisi) sitede yok; sorgular model/eski fiyat listesi niyetinde |
| 6 | `/signia-intuis-4-isitme-cihazi` | 5 / 105 / 10,0 | siemens intuis 2 fiyat (5) · sivantos işitme cihazları (4) · intuis (3) | `/markalar/signia/` | **Yönlendirme yok — karar bekliyor** | #5 ile aynı |
| 7 | `/signia-intuis-3-cic` | 2 / 169 / 27,8 | intuis (16) · signia işitme cihazı (12, konum 82) · signia intuis 3 cic (7) · siemens signia işitme cihazı (7) | `/markalar/signia/`; tür olarak `/isitme-cihazlari/gorunmez-cic/` | **Yönlendirme yok — karar bekliyor** | CIC bir **tür**, bu sayfa belirli bir **model**; tür sayfası model sorgusunu karşılamaz |
| 8 | `/signia-cros-silk` | 1 / 90 / 9,2 | (bu URL için ayrı sorgu satırı dönmedi; kardeş `/signia-cros-isitme-cihazi` satırları: cros işitme cihazı (17, konum 40) · signia işitme cihazı hangi ülkenin (30)) | `/markalar/signia/`; konu olarak `/ihtiyaciniza-gore/tek-tarafli-isitme-kaybi/` | **Yönlendirme yok — karar bekliyor** | CROS (tek taraflı kayıp çözümü) Signia sayfasında geçmiyor; tek taraflı kayıp sayfası marka/ürün sorgusunu karşılamaz. **Not:** `/signia-cros-isitme-cihazi` de `_redirects`'te yok (ilk 250 sayfa satırının dışında kaldı); aynı karar geçerli |
| 9 | `/resound-linx-quattro-5-kulak-ici-isitme-cihazi` | 3 / 269 / 8,5 | resound işitme cihazı hangi ülkenin (137, 1 tık) · özellikleri (2) | `/markalar/resound/` | **Yönlendirme yok — karar bekliyor** | Linx Quattro sitede yok; baskın sorgu **marka menşei** ("hangi ülkenin") — bkz. §3 içerik fırsatı |
| 10 | `/resound-linx-quattro-7-kulak-ici-isitme-cihazi` | 3 / 137 / 7,2 | resound işitme cihazı hangi ülkenin (85, 2 tık) | `/markalar/resound/` | **Yönlendirme yok — karar bekliyor** | #9 ile aynı |
| 11 | `/resound-one-7-isitme-cihazi` | 3 / 59 / 22,5 | resound işitme cihazları fiyatları (5) · resound işitme cihazları (4) · resound (3) | `/markalar/resound/` | **Yönlendirme yok — karar bekliyor** | ONE ailesi sitede yok; sorgular marka geneli ama konum 22+ (zayıf talep) |
| 12 | `/resound-one-9-isitme-cihazi` | 1 / 65 / 19,0 | (sorgu satırı listelenmedi) | `/markalar/resound/` | **Yönlendirme yok — karar bekliyor** | #11 ile aynı |

**Seçenekler (12 URL için ortak):** (a) Aileyi ilgili marka sayfasının "model aileleri" bölümüne eklemek — **model bilgisi doğrulanmadan yapılmaz** (cihaz özelliği/fiyat uydurulmaz); (b) 410; (c) mevcut 404 davranışı (404 sayfası marka izini yakalayıp marka sayfasını **öneriyor** — `404.astro`, yönlendirme değil). Karar sahibi: işletme sahibi.

## 2. Konu (bilgi) sayfaları (6 URL)

| # | Eski URL | Tık / Gösterim / Konum | İlgili sorgular (gösterim) | En yakın mevcut sayfa | Öneri | Gerekçe |
|---|---|---|---|---|---|---|
| 13 | `/isitme-cihazini-kim-icat-etti` | 6 / 744 / 11,8 | işitme cihazı ne zaman icat edildi (34, konum 6,1) · işitme cihazını kim icat etti (28, 1 tık) · dijital programlanabilir işitme cihazı (46, konum 63) · ilk işitme cihazını kim icat etti (16, konum 3,7) · miller reese hutchison (14) | — (`/rehberler/isitme-kaybi-nedir/` konu olarak farklı) | **Yönlendirme yok — karar bekliyor** | Tarih/mucit sorusu; sitede karşılığı yok. Yanıt **doğrulanmış kaynak** ister (EEAT_AND_EDITORIAL). Aday: Bilgi Merkezi'ne kaynaklı "İşitme cihazının tarihi" makalesi — içerik/kaynak kararı sahibinde |
| 14 | `/isitme-cihazi-kullananlar-ehliyet-alabilir-mi` | 2 / 805 / 14,6 | işitme engelliler ehliyet alabilir mi (24) · h sınıfı ehliyet işitme engelli (15) · işitme cihazı ehliyet (13) · işitme cihazı kullananlar hangi araçları kullanabilir (12) · …hangi sınıf sürücü belgeleri ile araç kullanabilir (8) | — | **Yönlendirme yok — karar bekliyor** | Hukuki/mevzuat sorusu (sürücü belgesi sağlık şartları); **resmî kaynak doğrulaması olmadan yazılmaz**. Gösterim yüksek (805) ama konum 14–50 |
| 15 | `/ani-isitme-kaybi` | 0 / 10 / 26,3 | ani işitme kaybı (2, konum 98) | — | **Yönlendirme yok** | Tıbbi **acil** konu: genel bir rehbere yönlendirmek yanlış beklenti yaratır. Sitede zaten "ani işitme kaybı/ağrı/akıntı → önce sağlık kuruluşu" güvenlik cümlesi var (evde hizmet sayfası, hizmet akışı). Yeni sayfa kararı sahibinde |
| 16 | `/isitme-cihazini-icat-edti` | 0 / 1 / 1,0 | — | (#13'ün yazım hatası) | **Yönlendirme yok** | #13 ile birlikte karara bağlanır |
| 17 | `/isitme-cihazini-kim-icat-ettti` | 0 / 1 / 1,0 | — | (#13'ün yazım hatası) | **Yönlendirme yok** | #13 ile birlikte karara bağlanır |
| 18 | `/isitme-kaybi-beli%CC%87rti%CC%87leri%CC%87` | 0 / 1 / 1,0 | — | `/rehberler/isitme-kaybi-nedir/` (mevcut kural `/isitme-kaybi-belirtileri` zaten buraya gidiyor) | **Yönlendirme eklendi** (2026-11-11, 2. oturum) → `/rehberler/isitme-kaybi-nedir/` | Adres, "belirtileri" yazımının birleştirici-nokta (U+0307) ile bozuk kodlanmış biçimi: niyet, mevcut `/isitme-kaybi-belirtileri` kuralıyla **birebir aynı**, hedef de o kuralın hedefi. Önceki oturumda "yerelde doğrulanamıyor" diye bekletilmişti; `wrangler pages dev` ile denendi: kural yüzde-kodlu **ve** çözülmüş yazımla, büyük/küçük onaltılık istekte eşleşiyor (§5). Canlı kenarda (Cloudflare) davranış dağıtımdan sonra bir kez daha denenmeli; eşleşmezse kural zararsızdır (adres yine 404 döner) |

## 3. Diğer (2 URL)

| # | Eski URL | Tık / Gösterim / Konum | İlgili sorgular | En yakın mevcut sayfa | Öneri | Gerekçe |
|---|---|---|---|---|---|---|
| 19 | `/kaynaklar` | 0 / 7 / 11,3 | tercih edilen kaynaklar (1, konum 66) | `/bilgi-merkezi/` (benzer rol) | **Yönlendirme yok** | Eski sayfanın içeriği bilinmiyor; sorgu bağlamsız (alakasız) — "ana sayfaya yönlendirme yapma" kuralı gereği sırf yakın görünen sayfaya gönderilmedi |
| 20 | `/pediatrik-isitme-kaybi` | 0 / 4 / 19,8 | (sorgu satırı listelenmedi) | `/degerlendirme/cocuk-isitme-testi/`, `/sgk/cocuklarda-sgk/`, `/isitme-cihazlari/cocuklara-ozel/` | **Yönlendirme yok — karar bekliyor** | Tıbbi konu ("pediatrik işitme kaybı" bilgisi) üç mevcut sayfada **parça parça** (test, SGK, cihaz) var ama hiçbiri konuyu karşılamıyor; 4 gösterim |

## 4. İçerik fırsatları (yönlendirme değil, **karar/malzeme** gerektirir)

1. **Marka menşei sorusu:** "resound işitme cihazı hangi ülkenin" ≈ **550+ gösterim** (eski ReSound URL'leri toplamı), "signia işitme cihazı hangi ülkenin" ≈ 30. Bu sorgular için marka sayfalarında kısa, **doğrulanmış** bir menşe cümlesi yararlı olur; sahiplik/grup bilgisi SoT kuralıyla kaldırıldığı için **işletme sahibi doğrulamalı**.
2. **Oticon More / Signia Intuis / ReSound ONE:** Marka sayfalarına "eski/önceki aileler" notu ancak model gerçekleri doğrulanınca eklenebilir; aksi halde 410 veya 404 öneri sayfası yeterlidir.
3. **Tarihçe ve ehliyet makaleleri:** Gösterimi yüksek, rekabeti düşük konular; ama **kaynak ister** (tarih ve mevzuat). Taslak yazılmadı.
4. **İlk 250 sayfa satırı sınırı:** Bu denetim, önceki turdaki ilk 250 sayfa satırına dayanır. Search Console'da daha düşük gösterimli başka eski adresler olabilir (örn. `/signia-cros-isitme-cihazi`); `public/_redirects` her eski adres için yeni satır eklemeye uygundur (2.000 kural sınırının çok altındayız).

## 5. Doğrulama

- `public/_redirects`: **122 mevcut kural korundu** (eğik çizgili + eğik çizgisiz çiftler; satırları değişmedi). 2. oturumda dosyanın **sonuna 1 kaynak yol (2 satır)** eklendi: #18.
- Statik doğrulama (`qa.mjs`, son derleme): `public/_redirects` **254 kural satırı, 127 benzersiz kaynak yol** (122 eski model/konu URL'si + önceki turlardan kalan 4 + #18), hepsi **301**; **her hedef derlenmiş bir sayfaya çıkıyor (0 sorun)** ve **hiçbiri ana sayfaya gitmiyor**.
- **Cloudflare Pages öykünmesi (`wrangler pages dev`, 4.149.0, yerel; Cloudflare hesabına bağlanmadan):** "Parsed 254 valid redirect rules / 3 valid header rules". 254 kuralın tamamı **301 + tam `Location`**, hedeflerin tamamı **200**; 112 site haritası adresi 200 ve güvenlik başlıkları mevcut; bilinmeyen adres 404 + `noindex`.
- **20 eski URL'nin durumu (aynı öykünme, eğik çizgili ve çizgisiz):** 19'u **404** (`noindex`), #18 **301 → `/rehberler/isitme-kaybi-nedir/`**.
- **#18 için kural yazımı denemesi** (derlemenin karalama kopyasında; projenin dosyasına dokunmadan): kaynak yol hem yüzde-kodlu (`/isitme-kaybi-beli%CC%87rti%CC%87leri%CC%87`) hem çözülmüş UTF-8 yazımla denendi; ikisi de `%CC%87` ve `%cc%87` isteklerini eşleştirdi. Dosyaya yalnızca ASCII olan yüzde-kodlu yazım kondu.
- Hub hiyerarşisi (`REDIRECTS_AND_HUBS.md` §1) değişmedi.
- **Sınır:** Öykünme canlı Cloudflare kenarı değildir (URL normalleştirme ayarları canlıda farklı olabilir). Search Console verisi bu oturumda yeniden çekilmedi; tablolardaki rakamlar 2026-05-01 → 2026-11-09 aralığına aittir.

## 6. Risk değerlendirmesi (her URL için)

"Bırakılırsa" = bugünkü durum (404 + `noindex`; 404 sayfası marka izini yakalarsa ilgili marka sayfasını **önerir**, yönlendirmez). "En yakın sayfaya yönlendirilirse" = §1–§3'te adı geçen aday hedefe 301.

| # | Eski URL | Bırakılırsa risk | En yakın sayfaya yönlendirilirse risk | Değerlendirme |
|---|---|---|---|---|
| 1 | `/oticon-more-3-isitme-cihazi` | **Orta.** 6 ayda 7 tıklama / 435 gösterim (konum 10) zamanla dizinden düşer; "oticon more 3 fiyat" (konum 4,9) görünürlüğü kaybolur | **Orta–yüksek.** Hedefte More ailesi ve model fiyatı yok → ziyaretçi aradığını bulamaz; Google bunu "soft 404" sayıp yönlendirmeyi yok sayabilir | Karar sahibinde. Kalıcı çözüm içerik: More ailesi doğrulanırsa marka sayfasına eklenir, sonra yönlendirilir |
| 2 | `/oticon-more-isitme-cihazi` | Düşük–orta (4 / 217, konum 15,8) | #1 ile aynı | #1 ile birlikte |
| 3 | `/oticon-more-1-isitme-cihazi` | Düşük–orta (1 / 235, konum 7,5 — gösterim var, tıklama az) | #1 ile aynı | #1 ile birlikte |
| 4 | `/oticon-more-2-isitme-cihazi` | Düşük (1 / 78) | #1 ile aynı | #1 ile birlikte |
| 5 | `/signia-intuis-4` | **Orta.** Listenin en çok tıklananı (9 / 328, konum 11,6) | **Orta–yüksek.** Intuis eski bir seri; Signia sayfasında yok; sorgular eski fiyat listesi niyetinde | Karar sahibinde |
| 6 | `/signia-intuis-4-isitme-cihazi` | Düşük–orta (5 / 105) | #5 ile aynı | #5 ile birlikte |
| 7 | `/signia-intuis-3-cic` | Düşük (2 / 169, konum 27,8) | **Yüksek** (tür sayfasına giderse): model arayan kişi genel CIC anlatımına düşer | Yönlendirme önerilmez |
| 8 | `/signia-cros-silk` | Düşük (1 / 90) | Orta: CROS ürünü Signia sayfasında geçmiyor; tek taraflı kayıp sayfası ürün sorgusunu karşılamaz | Karar sahibinde; `/signia-cros-isitme-cihazi` ile birlikte ele alınmalı |
| 9 | `/resound-linx-quattro-5-kulak-ici-isitme-cihazi` | Düşük–orta (3 / 269; baskın sorgu marka menşei, 137 gösterim) | Orta: marka sayfası "hangi ülkenin" sorusunu yanıtlamıyor (sahiplik bilgisi SoT kuralıyla kaldırılmış) | Önce §4-1'deki menşe cümlesi kararı; sonra yönlendirme anlamlı olur |
| 10 | `/resound-linx-quattro-7-kulak-ici-isitme-cihazi` | Düşük–orta (3 / 137) | #9 ile aynı | #9 ile birlikte |
| 11 | `/resound-one-7-isitme-cihazi` | Düşük (3 / 59, konum 22,5) | Düşük–orta: sorgular marka geneli; ONE ailesi sayfada yok | Marka sayfasına yönlendirme bu grupta en savunulabilir olanı; yine de karar sahibinde |
| 12 | `/resound-one-9-isitme-cihazi` | Düşük (1 / 65) | #11 ile aynı | #11 ile birlikte |
| 13 | `/isitme-cihazini-kim-icat-etti` | **Orta.** 6 / 744; "ilk işitme cihazını kim icat etti" konum 3,7 — bilgi araması görünürlüğü kaybolur | **Yüksek:** sitede tarihçe içeriği yok; herhangi bir hedef alakasız olur | Yönlendirme önerilmez. Değer, kaynaklı bir makaleyle geri kazanılır (içerik + kaynak kararı sahibinde) |
| 14 | `/isitme-cihazi-kullananlar-ehliyet-alabilir-mi` | **Orta.** Gösterimi en yüksek adres (2 / 805) ama konum 14–50 | **Yüksek:** hukuki konu; alakasız sayfaya yönlendirme yanıltıcı olur | Yönlendirme önerilmez. Resmî kaynak doğrulaması olmadan içerik yazılmaz |
| 15 | `/ani-isitme-kaybi` | Çok düşük (0 / 10) | **Yüksek:** tıbbi **acil** konu genel rehbere gönderilirse yanlış beklenti doğar | Yönlendirme önerilmez |
| 16 | `/isitme-cihazini-icat-edti` | Yok (0 / 1; yazım hatası) | #13 ile aynı | #13 ile birlikte |
| 17 | `/isitme-cihazini-kim-icat-ettti` | Yok (0 / 1; yazım hatası) | #13 ile aynı | #13 ile birlikte |
| 18 | `/isitme-kaybi-beli%CC%87rti%CC%87leri%CC%87` | — (yönlendirildi) | **Çok düşük.** Niyet ve hedef mevcut kuralla aynı; 0 tıklama / 1 gösterim. Canlıda eşleşmezse sonuç bugünküyle aynıdır (404) | **Uygulandı**; geri almak için `_redirects` sonundaki iki satır silinir |
| 19 | `/kaynaklar` | Çok düşük (0 / 7; sorgu bağlamsız) | Orta: eski sayfanın içeriği bilinmiyor; `/bilgi-merkezi/` yalnızca "benzer rol" | Yönlendirme önerilmez; sahibi eski sayfanın ne olduğunu biliyorsa karar verir |
| 20 | `/pediatrik-isitme-kaybi` | Çok düşük (0 / 4) | Orta: üç çocuk sayfası konuyu parça parça işliyor, hiçbiri "pediatrik işitme kaybı" bilgisini karşılamıyor | Karar sahibinde (hangi çocuk sayfası hedef olsun, ya da yeni içerik) |

**Genel risk notu.** 19 adresin toplamı 48 tıklama / 3.759 gösterimdir (6 ay). Hepsini bugünkü hâlinde bırakmanın **en kötü** sonucu bu trafiğin (aylık ≈ 8 tıklama) kaybıdır; alakasız hedefe toplu yönlendirmenin riski ise "soft 404" sayılması ve ziyaretçinin yanlış sayfaya düşmesidir. Bu yüzden karar adres adres ve işletme sahibince verilmelidir.
