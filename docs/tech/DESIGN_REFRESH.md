# DESIGN_REFRESH.md

> **Durum:** ACTIVE · Teknik belge · Oluşturulma: 2026-11-11 (kurumsal tasarım yenilemesi)
> **Amaç:** Yenilemenin tasarım sistemi kararlarını (marka paleti, tipografi, ortak bileşenler, hero sistemi, erişilebilirlik) tek yerde toplar. Marka bilgisi değil, **sunum** kararlarıdır; marka gerçekleri SoT'tadır.

---

## 1. Marka paleti (gerçek logodan ölçüldü)

Kaynak: `public/images/brand/avrasya-isitme-cihazlari-logo-yatay.webp` (1774×887, RGBA). Ölçüm: bölgesel medyan renk. Logo yeniden çizilmedi veya yeniden renklendirilmedi; header/footer sürümleri yalnızca çevresindeki boşluğu kırpılmış ve yeniden boyutlandırılmış kopyalardır (`…-logo-header-360.webp`, `…-720.webp`).

| Logodaki yer | Ölçülen | Token |
|---|---|---|
| "Avrasya" yazısı | `#043556` | `--brand-navy` |
| Kulak dış hat | `#024972` | (navy→blue geçişi) |
| Kulak alt mavi | `#0476a3` | `--brand-blue` |
| Ses dalgaları | `#3ea4aa` | `--brand-teal` |
| "İşitme Cihazları" yazısı | `#5b626b` | `--brand-gray` |

Türetilenler (tümü `src/ds/styles/base/variables.css` içinde, tek kaynak):
- `--color-primary: #05618a` — logo mavisi, beyaz metinle **6,8:1** kontrast olacak kadar koyulaştırıldı (eski parlak mavi `#2563eb` ve amber bant kaldırıldı). Hover `#04526f` (8,6:1), aktif `#033f56`.
- `--color-accent-text: #1a7077` (5,8:1) — turkuaz metin/ikon; `--color-accent: #3ea4aa` yalnızca dekoratif (beyazda 2,96:1).
- Nötrler lacivert tonlu: `--color-text #0b2236` (16:1), `--color-text-muted #3d4a59` (9:1), `--color-text-soft #66717e`.
- `--hero-bg`: lacivert→logo-mavisi gradyan, turkuaz parıltı.

Eski sabit renkler (`#2563eb`, `#1d4ed8`, `#1e40af`, `rgb(37 99 235 / …)`, açık mavi tonlar, `#1e3a8a`, `#0f2547`) `<style>` bloklarında **311 yerde** token referansına çevrildi; paleti değiştirmek artık tek dosyadır.

## 2. Tipografi (MASTER_PLAN K5: gövde 17 px, 14 px altı yok)

| Token | Eski | Yeni |
|---|---:|---:|
| `--font-size-xs` | 12 px | **15 px** |
| `--font-size-sm` | 14 px | **16 px** |
| `--font-size-md` (gövde) | 16 px | **17 px** |
| `--font-size-lg` | 18 px | 19 px |

Sabit yazılmış 14 px altı değerler (83 bildirim) 14 px tabanına çekildi; gövde türü sınıfların bir bölümü 17 px'e alındı. Ölçüm (1440/390 px, sayfa ana içeriği): **14 px altı metin %0** (eski: %5–9 ≤12 px); 16 px altı pay %46–68 → %5–11.

## 3. Ortak bileşenler

| Bileşen | Dosya | Not |
|---|---|---|
| Header | `components/header/Header/*` | Gerçek logo; birincil CTA "Ücretsiz İşitme Testi"; ana numara telefon + WhatsApp; ≤1279 px'te telefon/WhatsApp simgeleri çubukta, menü çekmecesinde hızlı sayfa kutuları ve Ara/WhatsApp/Test |
| Duyuru bandı | `announcement-bar/*` | Lacivert; metin mantığı değişmedi |
| **ContactDock** (yeni) | `contact-dock/ContactDock/*` | <1024 px: sabit alt çubuk (Ara · WhatsApp · Yol tarifi, `--dock-h`); ≥1024 px: sağ altta yüzen çift. Olay adı yok, `data-track-location="contact_dock"` |
| Çerez bandı | `consent/ConsentManager/*` | Mobilde 390×844'te 326 px (%38,6) → 225 px (%26,7); gövde metni büyütüldüğü için daha fazla küçültülmedi; kabul ve ret yan yana ve aynı stil; çubuğun üstünde durur. Davranış/mantık aynı |
| Footer | `footer/Footer/*` | Gerçek logo beyaz levha üzerinde; lacivert token'lar |
| Sayfa breadcrumb'ı | `layouts/MainLayout.astro` + `components/page/PageBreadcrumb.astro` | Rota ağacından (`config/site-map.ts`) otomatik; 102/103 sayfa |
| İçindekiler | `lib/page-enhance.ts` + `ds/styles/base/page-toc.css` | ≥6 H2 ve ≥1.200 kelimelik sayfalarda hero'nun ardından; mobilde kapalı, masaüstünde açık; H2'lere kararlı `id` |
| Hub sayfası | `components/hub/HubPage/*` | 9 kategori hub'ı |
| Ana sayfa | `HomeHero`, `HomeRouter` (yeni) | Birincil CTA test; "Size nasıl yardımcı olabiliriz?" 6 kart; Merkez bloğu hizmetlerin ardına alındı |

## 4. Hero sistemi

- **Kurumsal hero** (varsayılan): tek lacivert yüzey + turkuaz vurgu. `lib/hero-theme.ts` renk alanlarını değiştirir, içerik alanlarına dokunmaz. `BrandPageHero`, `TeknikServisHero`, `OnarimTakibiHero`, `YayginServisAgiHero`, `SgkKatkiPayiHero`, `SikSorulanSorularHero` kullanır (≈45 sayfa).
- **Marka sayfaları** (`/markalar/*`, 18) `variant="brand"` ile kendi marka renklerini korur (konuya özgü fark bilinçli olarak sürüyor).
- Zaten açık zeminli hero'lar (ana sayfa, iletişim, fiyat, SGK pillar, bilgi/servis hub'ları) açık kalır; sayfa içi bölüm vurguları `withCorporateSection()` ile logo mavisine çekildi.

## 5. Erişilebilirlik

- Odak halkası: 2 px beyaz + 3 px birincil renk (`--focus-ring`).
- Logo bağlantısı: görünen metin = erişilebilir ad ("Avrasya İşitme Cihazları") → WCAG 2.5.3.
- Marka şeridi (kayan logo): durdur/başlat düğmesi (WCAG 2.2.2); `prefers-reduced-motion` altında düğme gizlenir ve hareket yoktur.
- Dokunma hedefleri ≥48 px (mobil menü bağlantıları 39 → 48 px).
- Kontrast: SGK hero açıklaması 2,56:1 → token düzeltmesiyle ≥5:1.

---

## 6. Tur 2 eklemeleri (2026-11-11)

Yeni ortak bileşenler (hepsi mevcut token'ları kullanır; 14 px altı metin yok, dokunma hedefleri ≥ 44–48 px):

| Bileşen | Dosya | Not |
|---|---|---|
| Süzülen cihaz (hero) | `components/home/HeroDeviceStage.astro` | Şeffaf zeminli cihaz görseli, ince ses dalgası yayları (logo mavisi/turkuazı); hareket yüklemeden sonra, `reduced-motion`'da yok. Görsel 2026-11-12'den beri 3B görüntüleyicideki markasız temsili modelin başlangıç karesidir (önceki: fotoğraftan kesilmiş gerçek cihaz) → `BTE_3D_VIEWER.md` §12 |
| Cihaz türü carousel'i | `components/device-types/DeviceTypeCarousel.astro` | Mobil: dokunmatik kaydırma (scroll-snap); ≥ 768 px: oklar; klavye |
| Kaydırmalı tür bölümü | `components/device-types/DeviceTypeScroller.astro` | Yapışkan sahne + adımlar; `earImage`/`pin` ile kulak katmanı hazır |
| Tür karşılaştırma aracı | `components/device-types/DeviceTypeCompare.astro` | En fazla 3 tür; fiyat/tanı yok |
| 360° · 3B cihaz görüntüleyici | `components/bte3d/BteViewer3D.astro` | Markasız, özgün 3B kulak arkası cihaz modeli (three.js); sürükle-döndür, dikey açı, otomatik dönüş; kod ve model tembel yüklenir. 2026-11-12'de kare dizili eski `viewer360` bileşeninin yerini aldı → `BTE_3D_VIEWER.md` |
| Hizmet sihirbazı | `components/services/ServiceWizard/*` | 2 adım; veri toplamaz |
| Evde hizmet akışı | `components/shared/HomeVisitFlow/*` | Bölge → ihtiyaç → mevcut bilgi + hazır WhatsApp |
| SGK kontrol listesi | `components/sgk/SgkStepGuide/*` | İşaretlenebilir + yazdırılabilir (kâğıt başlığında doğrulanmış NAP) |
| Açık/kapalı satırı | `components/shared/OpenStatus/*` | İstanbul saati; doğrulanamıyorsa iddia yok |
| Erişilebilirlik paneli | `components/a11y/A11yPanel.astro` + `ds/styles/base/a11y-prefs.css` | %100–150 yazı, yüksek kontrast, hareketi azalt; `<head>`'de ilk boyamadan önce uygulanır |
| Yukarı dön | `components/page/BackToTop.astro` | Yalnızca içindekileri olan uzun sayfalarda |
| Geri arama formu (**kullanılmıyor**) | `components/contact/CallbackRequestForm/*` | Yalnızca tasarım/hazırlık |

Büyütülmüş yazı uyumluluğu (a11y paneli): `minmax(Nrem,1fr)` → `minmax(min(Nrem,100%),1fr)`; `a[data-contact-action]` sarmalayabilir (`white-space: normal`, `min-height`); sabit iletişim çubuğu büyük yazıda simge-üstte düzene geçer.
