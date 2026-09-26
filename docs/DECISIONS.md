# Architectural Decisions

> Bu dosya canlı bir karar günlüğüdür — yeni her mimari karar, tarihli yeni bir madde olarak eklenir; eski kararlar silinmez, aşıldıklarında not düşülerek korunur.

## 2026-07-16

> **Durum notu (2026-09-26):** Bu tarihteki kararlardan üçü sonradan fiilen aşıldı — aşağıda madde madde işaretlendi. Kayıt, gerçek olanı yansıtması için silinmedi; ne karar verildiği ve neden değiştiği görünür kalsın diye korundu.

- Büyük componentler numaralandırılacak (Hero001, CTA001...) — **AŞILDI:** gerçek uygulama numarasız, betimleyici isimler kullanıyor (`Hero`, `Closing`, `Trust`...). Bkz. `docs/PROJECT_ARCHITECTURE.md` §6 (2026-09-26'da koda göre güncellendi).
- UI componentleri isim bazlı olacak (Button, Input, Badge...) — geçerli, uygulanmaya devam ediyor.
- Her component kendi klasöründe bulunacak. — geçerli.
- Her component kendi CSS dosyasına sahip olacak. — kısmen geçerli; gerçek uygulamada çoğu component Astro'nun scoped `<style>` bloğunu kullanıyor, ayrı `.css` dosyası yalnızca birkaç `*.tokens.css` dosyasında var. Bu maddenin tam kod-seviyesi denetimi bu turun kapsamı dışında bırakıldı.
- Design Token sistemi kullanılacak. — geçerli.
- Dark Mode ilk sürümde olmayacak. — **AŞILDI (kısmen):** canlı site hâlâ Light-only (bu kısım hâlâ geçerli), ama `/ds/` demo kataloğu için ayrı, canlı siteden bağımsız bir Dark tema alt sistemi zaten mevcut. Bkz. `docs/DESIGN_SYSTEM.md` Kapsam notu ve `src/ds/README.md`.
- Dokümantasyon üç dosya ile sınırlandırıldı. — **AŞILDI:** proje artık 20'den fazla `.md` dokümanına sahip (COMPANY, PRINCIPLES, DESIGN_SYSTEM_GUIDE, SEARCH_STRATEGY, IMPLEMENTATION_STANDARD, QUALITY_GATES + `docs/` altında çok sayıda spesifikasyon dosyası). Bu sınır fiilen terk edildi.

## 2026-09-26

- Coğrafi Local SEO/GEO önceliği resmî olarak 4 kademeli hiyerarşiye bağlandı: Darıca (ana merkez) → Gebze/Çayırova (öncelikli) → Kocaeli (üst bölgesel otorite) → Dilovası/Tuzla/Pendik (ikincil/çevre). Tek kaynak: COMPANY.md §17.
- `QUALITY_GATES.md` oluşturuldu — SEO, Local SEO, GEO/AI Search, Schema, Canonical, Sitemap, 404/Link QA, Responsive QA, Build & Release, Production Deploy Approval için ayrı, kontrol edilebilir yayın kapıları tanımlandı.
- `docs/HOMEPAGE_CREATIVE_DIRECTION.md` ve `docs/HOMEPAGE_MOODBOARD.md` arşivlendi; içerikleri, gerçek 11-bölüm ana sayfa mimarisiyle senkronize edilerek yeni `docs/HOMEPAGE_SPECIFICATION.md`'de birleştirildi.
- `HERO_SPECIFICATION.md` ve `TRUST_SPECIFICATION.md`'nin "kilitli kopya" bölümleri, gerçek üretim koduyla (`hero.data.ts`, `trust.data.ts`) senkronize edildi.
- `IMPLEMENTATION_GUIDE.md` (Header brifi) tamamlanmış/tarihsel olarak işaretlendi.
- Bu tur yalnızca dokümantasyon değişikliğidir; hiçbir `.astro`/`.ts`/`.css`/production kodu değiştirilmedi.