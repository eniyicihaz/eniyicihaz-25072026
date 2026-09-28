# SGK_TEASER_SPECIFICATION.md

> **⚠ ESKİ 20 BÖLÜMLÜ HOMEPAGE PLANINA AİT SPESİFİKASYON (2026-09).** Ayrı SGK bölümü artık **yok**; SGK, ana sayfada #8 `HomeLocal` içinde kompakt bir bilgi kutusu ("SGK işitme cihazı desteği hakkında bilgi alın →") olarak yer alır. `SgkTeaser` component'i şu an render edilmiyor. Güncel ana sayfa mimarisi (10 ana bölüm) için tek doğru kaynak: `HOMEPAGE_SPECIFICATION.md`. Bu belge, o bölümün **içerik/gerekçe kaydı** olarak durur; bölüm numaraları, "yeni pozisyon N", "TASLAK — henüz üretimde değil" ve "ayrı section" ifadeleri eski 20 bölümlü sıraya aittir, geçerli değildir. Dosya, artık ana sayfada kullanılmayan bir bölüme ait olduğu için `docs/archive/` altına taşınmıştır; ilgili component/data dosyaları ileride kullanım için diskte durur ve yorumları arşiv yolunu gösterir.

> **TASLAK — henüz üretimde değil.** Ana sayfaya eklenmesi planlanan yeni bölüm: SGK Rehberi (kısa, bağımsız). Bölüm 14'ün (Darıca + Hizmet Ağı) hemen ardından, SGK sürecine homepage'de dağınık 3 küçük referans yerine kendi kısa, anlamlı bir alan verir. Kod içermez; yalnızca içerik/tasarım/erişilebilirlik taslağıdır.
>
> **Kanonik kaynaklar:** sayfa mimarisi/sıra → `docs/HOMEPAGE_SPECIFICATION.md` (yeni pozisyon 15) · gerçek SGK bilgisi (uydurulmaz) → `COMPANY.md §6/§20` ve `/sgk-isitme-cihazi-odemesi` sayfasının kendi doğrulanmış içeriği · rakam/iddia disiplini → `PRINCIPLES.md §5` · yapısal veri kuralı → `SEARCH_STRATEGY.md §11` (görünmeyen bilgi şemaya eklenmez).
>
> **Sabit çerçeve:** Amaç = "SGK'ya kendi anlamlı alanı, ama makale değil" · Lider katman = hikâye (Trust'ın sessiz register'ına yakın) · Tasarım deseni = info block (kompakt fact-grid) · CTA = tek, net (`/sgk-isitme-cihazi-odemesi`).

---

## 1. Amaç ve Sıradaki Yeri

Şu an SGK, homepage'de 3 küçük referansla dağınık: Trust'ta 1 fact+link, BrandCriteria'da 1 kart, Brands'te 1 güven satırı. Bu, "SGK işitme cihazı" gibi yüksek niyetli bir aramayı karşılamak için yeterince güçlü/bağlamsal değil. Bu bölüm, dağınık referansları **çoğaltmaz** — SGK'ya kendi kısa, net anlatısını verir ve gerçek sayfaya (`/sgk-isitme-cihazi-odemesi`) güçlü bir köprü kurar.

**Kullanıcı sınırı (kritik):** "Homepage'de bağımsız ve anlamlı bir bilgi alanı olsun ama gereksiz uzun bir SGK makalesine dönüşmesin." Bu bölüm bir SGK rehberi **değildir** — o zaten `/sgk-isitme-cihazi-odemesi`'de var. Burada yalnızca "bu konuda size yardımcı oluyoruz, detay için tıklayın" teaser'ı vardır.

---

## 2. İçerik (taslak — yalnızca doğrulanmış, genel-geçer bilgi; katkı payı/rapor süresi gibi spesifik rakamlar burada İCAT EDİLMEZ)

**Eyebrow:** "SGK Danışmanlığı"
**Başlık (H2):** "SGK Süreciyle İlgili Yanınızdayız"
**Bağlam cümlesi:** "SGK kapsamındaki işitme cihazı sürecinde, rapor ve katkı payı aşamalarında size rehberlik ediyoruz."

**3 kompakt fact (Trust'ın "gerçek başlık + tek cümle" formatına yakın, kart zemini yok):**

| Başlık | Açıklama |
|---|---|
| SGK Anlaşmalı Merkez | Resmî olarak SGK ile anlaşmalı bir işitme merkeziyiz (Trust'taki gerçek 2'yle birebir aynı kilitli ifade — GEO non-contradiction). |
| Rapor Sürecinde Yönlendirme | Gerekli rapor ve belge sürecinde size yol gösteriyoruz. |
| Katkı Payı Danışmanlığı | Katkı payı ve kapsam soruları için detaylı bilgiyi ilgili sayfamızda bulabilirsiniz. |

**CTA:** "SGK Sürecini İnceleyin →" → `/sgk-isitme-cihazi-odemesi` (tek, net link — ikinci bir CTA yok).

**Kırmızı çizgi:** Hiçbir katkı payı tutarı, yüzde veya süre burada **uydurulmaz/verilmez** — bu tür spesifik rakamlar yalnızca `/sgk-isitme-cihazi-odemesi` sayfasının kendi doğrulanmış içeriğinde kalır (bu teaser'ın amacı derinlik değil, yönlendirmedir).

---

## 3. Tasarım Deseni / Art Direction

**Desen:** info block — Trust'ın sessiz register'ına yakın (kart zemini yok, bordür/gölge minimal), ama Trust'ın CTA'sız kararının aksine burada **tek bir net CTA** var (bu bölümün kendine özgü görevi budur).

**Kompozisyon:**
- **Desktop (≥1024px):** `--container-lg`, ortalı; üstte bağlam cümlesi, altta 3 fact yatay sırada (Trust'ın 3-sütun düzenine görsel olarak yakın ama daha kompakt, daha az dikey alan), en altta tek CTA.
- **Tablet/Mobile:** 3 fact dikey sıraya döner (Trust'ın responsive deseniyle tutarlı).

**Görsel dil:** Trust'ın devamı gibi hissettirir ama tamamen aynı değildir — CTA'nın varlığı bu bölümü Trust'tan ayıran tek görsel/işlevsel fark.

---

## 4. Internal Link Planı

`/sgk-isitme-cihazi-odemesi` — güçlü, tek net link (bağlamsal CTA + fact başlığı linki).

## 5. SEO/GEO Amacı

"SGK işitme cihazı", "SGK katkı payı işitme cihazı" gibi yüksek niyetli aramaları doğrudan, bağlamsal bir bölümle karşılar; E-E-A-T Authoritativeness sinyalini (SGK anlaşmalı statü) Trust'tan bağımsız, kendi başına da pekiştirir (SEARCH_STRATEGY §13).

## 6. Gerekli Görseller

Yok — ikon/metin tabanlı (Trust ile tutarlı, görselsiz).

## 7. Atomic Design (planlanan)

Tam eşleşen mevcut component yok. `ValueGrid.astro`'nun kısa fact-grid deseni veya `SgkTrustBar.astro`/`SgkEligibility.astro`'nun kompakt özet dili emsal alınır. `TrustFact.astro` atomunun kendisi (başlık+açıklama, kart zemini yok) **doğrudan reuse edilebilir** — yeni bir atom gerekmeyebilir, yalnızca yeni bir organizma (`SgkTeaser.astro`, kendi klasöründe) `TrustFact`'i 3 kez + tek CTA ile birleştirir.

## 8. Erişilebilirlik

Trust ile aynı disiplin: görünür `<h2>`, her fact `<h3>`, token-tabanlı AA+ kontrast, CTA gerçek `<a>`/buton, `prefers-reduced-motion`'da anında tam görünür.

## 9. Design Review Checklist

- Hiçbir SGK rakamı/oranı/süresi uydurulmadı.
- Trust'taki SGK fact'iyle çelişmiyor (aynı kilitli ifade).
- Uzun bir makaleye dönüşmedi — 3 fact + 1 CTA sınırında kaldı.
- Tek, net CTA var (`/sgk-isitme-cihazi-odemesi`), ikinci bir CTA eklenmedi.
