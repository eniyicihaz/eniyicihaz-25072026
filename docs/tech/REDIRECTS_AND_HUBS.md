# REDIRECTS_AND_HUBS.md

> **Durum:** ACTIVE · Teknik belge · Oluşturulma: 2026-11-11
> **Amaç:** 11 üst kategori URL'sinin (404 veriyordu), eski cihaz/model URL'lerinin ve menü etiket-hedef uyuşmazlıklarının nasıl çözüldüğünü ve kararı bekleyen işleri kaydeder.
> **Sınır:** Bu belge bir uygulama kaydıdır. `public/_redirects` yalnızca dağıtımda (Cloudflare Pages) etkili olur; dağıtım ayrı onay gerektirir.

---

## 1. Üst kategori URL'leri (11)

Hiçbir URL "sırf SEO için" boş sayfa olarak açılmadı. Mevcut sayfaları gerçekten bir araya getiren kategori için hub, daha yakın bir mevcut sayfa varsa 301 seçildi (MASTER_PLAN K6: aynı niyet tek kanonik sayfada).

| URL | Çözüm | Gerekçe |
|---|---|---|
| `/degerlendirme/` | **Hub** (6 sayfa) | Test ve değerlendirme sayfalarının ortak girişi; Hizmetlerimiz altında |
| `/uygulama-ayar/` | **Hub** (8 sayfa) | Deneme, uygulama, ayar, kalıp, kontrol, uzaktan ayar, evde hizmet |
| `/servis-bakim/` | **Hub** (6 sayfa) | Teknik servis, bakım, pil/aksesuar, garanti, onarım takibi |
| `/teknolojiler/` | **Hub** (7 sayfa) | İşitme Cihazları altında teknoloji rehberleri |
| `/ihtiyaciniza-gore/` | **Hub** (7 sayfa) | Derece/ihtiyaç rehberleri |
| `/segmentler/` | **Hub** (3 sayfa) | Premium / Standart / Ekonomik seri |
| `/neden-orijinal/` | **Hub** (7 sayfa) | Orijinal cihaz ve üretici destekli servis |
| `/rehberler/` | **Hub** (4 sayfa) | Bilgi Merkezi altında rehberler |
| `/kvkk/` | **Hub** (4 belge, satış CTA'sız) | Yasal sayfalar CTA'dan muaf (PRINCIPLES §9) |
| `/sgk/` | **301 → `/sgk-isitme-cihazi-odemesi/`** | SGK pillar sayfası aynı niyeti zaten karşılıyor; ikinci bir SGK girişi kanibalizasyon yaratırdı |
| `/blog/` | **301 → `/bilgi-merkezi/`** | Bilgi Merkezi tüm blog sayfalarını listeliyor |

Hub kartlarının metni, bağlı sayfanın kendi meta açıklamasıdır (`src/config/site-map.ts`); yeni bilgi içermez. Hub'lar breadcrumb zincirinin gerçek üst halkalarıdır (ör. Ana Sayfa › Hizmetlerimiz › Uygulama ve Ayar › Cihaz Deneme).

## 2. Menü etiketi / hedef uyuşmazlıkları

`header.data.ts` içindeki sütun alt bağlantıları artık hedefini doğru adlandırıyor: Tüm Teknolojiler → `/teknolojiler/`, İhtiyaca Göre Tüm Rehberler → `/ihtiyaciniza-gore/`, Neden Orijinal? → `/neden-orijinal/`, Tüm Seriler → `/segmentler/`, Tüm Değerlendirmeler → `/degerlendirme/`, Tüm Uygulama/Servis Hizmetleri → `/uygulama-ayar/` ve `/servis-bakim/`, Tüm Rehberler → `/rehberler/`. "Cihaz Seçim Rehberi" Bilgi Merkezi menüsüne eklendi (ilk kez alacaklar için kritik sayfa menüde yoktu).

## 3. Eski cihaz/model URL'leri (Search Console, 2026-05-01 → 2026-11-09)

Kaynak: Search Console ilk 250 sayfa satırı; **144** artık var olmayan URL (1.378 tıklama, 82.936 gösterim). `public/_redirects` içine, **yalnızca yakın ve anlamlı bir hedef olanlar** 301 ile eklendi:

- **Marka/model URL'leri → ilgili marka sayfası** (`/markalar/oticon/`, `/signia/`, `/resound/`, `/am/`): yalnızca modelin ailesi o marka sayfasının "model aileleri" bölümünde listeleniyorsa.
- **Genel konu URL'leri → ilgili hizmet/rehber sayfası:** `/isitme-cihazi-pili` → `/servis-bakim/pil-aksesuar/`, `/isitme-cihazi-tamiri` → `/servis-bakim/teknik-servis/`, `/isitme-cihazi-ayari` → `/uygulama-ayar/kisiye-ozel-ayar/`, `/kulak-kalibi` → `/uygulama-ayar/kalip-alimi/`, `/isitme-kaybi*` → `/rehberler/isitme-kaybi-nedir/` vb.
- Hiçbir eski URL ana sayfaya yönlendirilmedi.

**Sonuç:** 122 eski URL yönlendirildi (1.326 tıklama / 78.925 gösterim karşılığı). Her kural eğik çizgili ve eğik çizgisiz yazıldı.

### 3.1 Yönlendirilmeyenler — KARAR BEKLİYOR (uygun hedef yok)

| URL | Neden |
|---|---|
| `/oticon-more*` (4), `/signia-intuis*` (3), `/signia-cros-silk`, `/resound-linx-quattro*` (2), `/resound-one*` (2) | Bu model aileleri güncel marka sayfalarında listelenmiyor; marka sayfasına yönlendirmek konuyu karşılamıyor. Seçenekler: aileyi marka sayfasına eklemek (içerik/doğrulama gerekir) veya 410 |
| `/isitme-cihazini-kim-icat-etti` (+ yazım hataları), `/isitme-cihazi-kullananlar-ehliyet-alabilir-mi` | Sitede karşılık gelen sayfa yok; yeni bilgi içeriği doğrulanmış kaynak ister |
| `/ani-isitme-kaybi`, `/pediatrik-isitme-kaybi` | Tıbbi içerik; yakın sayfa yok, genel sayfaya yönlendirmek yanlış beklenti yaratır |
| `/kaynaklar` | Karşılığı yok |

### 3.2 Dağıtım notları
- Cloudflare Pages `_redirects`: 2.000 statik kural sınırı vardır; mevcut dosya ≈250 satırdır. Joker (`*`) kural kullanılmadı (davranışı yerelde doğrulanamadı); yeni eski-URL'ler Search Console'dan geldikçe satır eklenir.
- Hedefler yapı denetimiyle doğrulandı (her hedef var olan bir sayfa).
- Yönlendirmeler ve hub'lar canlıya alınana kadar eski URL'ler 404 vermeye devam eder. Canlı Cloudflare ayarlarına dokunulmadı.

## 4. 404 sayfası
`404.astro`: noindex; ziyaretçi adresindeki marka/konu izine göre (marka, fiyat, SGK, pil, tamir, test, evde hizmet, ayar) en yakın sayfayı öneren küçük bir betik ve WhatsApp bağlantısı eklendi. Betik yoksa mevcut 6 bağlantılı liste çalışır.
