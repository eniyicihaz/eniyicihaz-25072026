# PAGE_CONTROL_MATRIX.md

> **Durum:** ACTIVE · Teknik belge · Oluşturulma: 2026-11-11 (2. tur) · **Otomatik üretildi** (`scratchpad/t-matrix.cjs` + `gen-matrix.cjs`)
> **Amaç:** 112 URL'nin (103 mevcut + 9 hub) tasarım / içerik / SEO / iç bağlantı / mobil kontrol matrisi. Ölçümler **gerçek tarayıcıda 390 px mobil** yüklemeden alındı (yerel derleme, `_headers` açık).
> **Dürüstlük notu:** Bu matris bir **denetimdir**. 112 sayfanın tamamının metni bu turda **yeniden yazılmadı**; yeniden yazma/sadeleştirme yalnızca tabloda "R2:" ile işaretli sayfalarda ve yerel SEO verisinin gerektirdiği yerlerde yapıldı. Kalan işler §3'te grup grup listeli.

## 1. Özet

| Kontrol | Sonuç |
|---|---|
| Taranan URL | **112** (sitemap; 404 hariç) |
| Tek H1 | **112 / 112** |
| Başlık ≤ 60 karakter | **111 / 112** (kalan: /) |
| Açıklama 80–160 karakter | **112 / 112** |
| Canonical (noindex dışında) | **112 / 112** |
| H1 sonrası giriş paragrafı (≥ 12 kelime) | **112 / 112** |
| Başlık seviyesi atlaması | **0** sayfada |
| Görünür breadcrumb + BreadcrumbList | **111 / 112** (ana sayfa hariç tümü) |
| JSON-LD (WebPage türü) | **112 / 112** |
| Alt metni olmayan görsel | **0** (tüm sayfalarda) |
| SSS bölümü / FAQPage | **97 / 112** (yok: /, /degerlendirme/, /ihtiyaciniza-gore/, /kvkk/, /kvkk/aydinlatma-metni/, /kvkk/cerez-politikasi/, /kvkk/gizlilik-politikasi/, /kvkk/ilgili-kisi-basvuru-formu/, /neden-orijinal/, /rehberler/, /segmentler/, /servis-bakim/, /site-haritasi/, /teknolojiler/, /uygulama-ayar/) |
| İlgili/sonraki adım bölümü | **102 / 112** |
| Sayfaya özel telefon/WhatsApp CTA | **106 / 112** (yok: KVKK belgeleri ve site haritası — yasal sayfalar CTA'dan muaf, PRINCIPLES §9) |
| "Bu sayfada" içindekiler (uzun sayfalar) | **65** sayfada; ≥ 1.200 kelime ve ≥ 6 H2 olup içindekileri olmayan: **0** |
| Mobil yatay taşma (390 px) | **0** sayfa |
| 44 px altı dokunma hedefi (satır içi bağlantılar hariç) | **0** sayfa |
| 14 px altı metin | **0** sayfa |
| Konsol / HTTP ≥ 400 hatası | **0** sayfa |

Not: "Kısa cevap" ölçütü, sayfanın ilk bölümünde doğrudan cevap bileşeni (`DirectAnswer`/`quick-answer`/`hizli-cevap`) olup olmadığına bakar; birçok sayfada kısa cevap hero açıklamasının kendisidir (giriş paragrafı sütununa bakın).

## 2. Matris (112 URL)

Kelime sayıları **görünür metindir** (betik/stil/JSON-LD hariç). Sütunlar: **T**asarım = hero/sistem sınıfı · **İ**çerik = kelime · H2 · giriş(kelime) · kısa cevap(KC) · SSS · ilgili(İL) · CTA(tel/wa) · **S**EO = başlık/açıklama uzunluğu · JSON-LD türleri · breadcrumb · **İç bağlantı** = ana içerikte benzersiz iç bağlantı · **M**obil = taşma/küçük hedef/küçük yazı · **Durum**.

| URL | Grup | T: hero | İ: görünür kelime · H2 · giriş · KC · SSS · İL · CTA | S: başlık/açıklama · JSON-LD · BC | İç bağ. | M | Durum |
|---|---|---|---|---|---:|---|---|
| `/` | Kurumsal / ana | SCRIPT | 828 · 8 · 26w · ✗ · ✗ · ✗ · 4 | 63/145 · WebPage+MedicalBusiness+WebSite · ✗ | 47 | ✓·0·0 | R2: hero cihaz animasyonu, cihaz-türü carousel, açık/kapalı göstergesi |
| `/bilgi-merkezi/` | Kurumsal / ana | page-breadcrumb | 595 · 8 · 16w · ✗ · ✓ · ✓ · 6 | 47/125 · BreadcrumbList+CollectionPage+FAQPage · ✓ | 19 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/blog/basari-hikayeleri/` | Blog | page-breadcrumb | 1305 · 13 · 16w · ✓ · ✓ · ✓ · 5 | 54/145 · BreadcrumbList+WebPage+FAQPage · ✓ | 13 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/blog/etkinlikler/` | Blog | page-breadcrumb | 1099 · 13 · 12w · ✓ · ✓ · ✓ · 5 | 44/150 · BreadcrumbList+WebPage+FAQPage · ✓ | 13 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/blog/kampanyalar/` | Blog | page-breadcrumb | 1125 · 13 · 14w · ✓ · ✓ · ✓ · 5 | 40/133 · BreadcrumbList+WebPage+FAQPage · ✓ | 12 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/blog/sik-sorulan-sorular/` | Blog | page-breadcrumb | 1375 · 14 · 16w · ✓ · ✓ · ✓ · 5 | 49/131 · BreadcrumbList+WebPage+FAQPage · ✓ | 13 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/blog/uzman-gorusleri/` | Blog | page-breadcrumb | 1386 · 13 · 12w · ✓ · ✓ · ✓ · 5 | 57/100 · BreadcrumbList+WebPage+FAQPage · ✓ | 13 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/blog/yeni-teknolojiler/` | Blog | page-breadcrumb | 1368 · 13 · 19w · ✓ · ✓ · ✓ · 5 | 56/124 · BreadcrumbList+WebPage+FAQPage · ✓ | 13 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/cayirova-isitme-cihazlari/` | Yerel | page-breadcrumb | 333 · 5 · 23w · ✗ · ✓ · ✓ · 7 | 55/157 · BreadcrumbList+WebPage+MedicalBusiness+FAQPage · ✓ | 5 | ✓·0·0 | R2: ilgili sayfalar bloğu (Darıca'ya özgü farklı bağlantı kümesi) |
| `/darica-isitme-cihazlari/` | Yerel | page-breadcrumb | 765 · 8 · 30w · ✗ · ✓ · ✓ · 7 | 58/151 · BreadcrumbList+WebPage+MedicalBusiness+FAQPage · ✓ | 12 | ✓·0·0 | R2: LCP (AVIF hero), başlık/H1 çoğul sorgu biçimine (GSC), ilgili sayfalar bloğu, açık/kapalı göstergesi |
| `/degerlendirme/` | Hub (yeni, tur 1) | page-breadcrumb | 198 · 2 · 24w · ✗ · ✗ · ✓ · 4 | 58/153 · BreadcrumbList+CollectionPage · ✓ | 8 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/degerlendirme/cocuk-isitme-testi/` | Değerlendirme | page-breadcrumb | 1479 · 13 · 20w · ✓ · ✓ · ✓ · 5 | 57/143 · BreadcrumbList+WebPage+Service+FAQPage · ✓ | 14 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/degerlendirme/odyometri/` | Değerlendirme | page-breadcrumb | 1375 · 13 · 19w · ✓ · ✓ · ✓ · 5 | 47/152 · BreadcrumbList+WebPage+Service+FAQPage · ✓ | 14 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/degerlendirme/online-isitme-testi/` | Değerlendirme | page-breadcrumb | 869 · 5 · 25w · ✗ · ✓ · ✓ · 4 | 47/159 · BreadcrumbList+WebPage+FAQPage · ✓ | 7 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/degerlendirme/timpanometri/` | Değerlendirme | page-breadcrumb | 1313 · 13 · 15w · ✓ · ✓ · ✓ · 5 | 46/141 · BreadcrumbList+WebPage+Service+FAQPage · ✓ | 14 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/degerlendirme/tinnitus-degerlendirme/` | Değerlendirme | page-breadcrumb | 1435 · 13 · 17w · ✓ · ✓ · ✓ · 5 | 50/145 · BreadcrumbList+WebPage+Service+FAQPage · ✓ | 14 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/degerlendirme/ucretsiz-isitme-testi/` | Değerlendirme | page-breadcrumb | 2956 · 14 · 22w · ✓ · ✓ · ✓ · 5 | 58/142 · BreadcrumbList+WebPage+Service+MedicalBusiness+FAQPage · ✓ | 26 | ✓·0·0 | R2: dokunma hedefleri ≥ 44 px |
| `/gebze-isitme-cihazlari/` | Yerel | page-breadcrumb | 720 · 11 · 29w · ✗ · ✓ · ✓ · 7 | 59/152 · BreadcrumbList+WebPage+MedicalBusiness+FAQPage · ✓ | 13 | ✓·0·0 | R2: ilgili sayfalar bloğu (Darıca'ya özgü farklı bağlantı kümesi) |
| `/hakkimizda/` | Kurumsal / ana | page-breadcrumb | 682 · 11 · 28w · ✗ · ✓ · ✓ · 6 | 57/153 · BreadcrumbList+AboutPage+MedicalBusiness+FAQPage · ✓ | 14 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/hizmetlerimiz/` | Kurumsal / ana | page-breadcrumb | 1285 · 9 · 13w · ✓ · ✓ · ✗ · 32 | 48/123 · BreadcrumbList+CollectionPage+FAQPage · ✓ | 28 | ✓·0·0 | R2: hizmet seçim sihirbazı |
| `/ihtiyaciniza-gore/` | Hub (yeni, tur 1) | page-breadcrumb | 245 · 2 · 21w · ✗ · ✗ · ✓ · 4 | 59/136 · BreadcrumbList+CollectionPage · ✓ | 9 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/ihtiyaciniza-gore/aktif-yasam-icin-cihazlar/` | İhtiyaca göre | page-breadcrumb | 1879 · 13 · 31w · ✓ · ✓ · ✓ · 5 | 38/150 · BreadcrumbList+WebPage+FAQPage · ✓ | 16 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/ihtiyaciniza-gore/cok-ileri-derece-isitme-kaybi/` | İhtiyaca göre | page-breadcrumb | 1833 · 13 · 26w · ✓ · ✓ · ✓ · 5 | 48/153 · BreadcrumbList+WebPage+FAQPage · ✓ | 16 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/ihtiyaciniza-gore/hafif-isitme-kaybi/` | İhtiyaca göre | page-breadcrumb | 1683 · 13 · 23w · ✓ · ✓ · ✓ · 5 | 37/149 · BreadcrumbList+WebPage+FAQPage · ✓ | 16 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/ihtiyaciniza-gore/ileri-derece-isitme-kaybi/` | İhtiyaca göre | page-breadcrumb | 1711 · 13 · 21w · ✓ · ✓ · ✓ · 5 | 44/146 · BreadcrumbList+WebPage+FAQPage · ✓ | 18 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/ihtiyaciniza-gore/orta-derece-isitme-kaybi/` | İhtiyaca göre | page-breadcrumb | 1685 · 13 · 21w · ✓ · ✓ · ✓ · 5 | 43/146 · BreadcrumbList+WebPage+FAQPage · ✓ | 16 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/ihtiyaciniza-gore/tek-tarafli-isitme-kaybi/` | İhtiyaca göre | page-breadcrumb | 1800 · 13 · 28w · ✓ · ✓ · ✓ · 5 | 43/155 · BreadcrumbList+WebPage+FAQPage · ✓ | 16 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/ihtiyaciniza-gore/yaslilar-icin-cihazlar/` | İhtiyaca göre | page-breadcrumb | 1798 · 13 · 27w · ✓ · ✓ · ✓ · 5 | 35/149 · BreadcrumbList+WebPage+FAQPage · ✓ | 16 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/iletisim/` | Kurumsal / ana | page-breadcrumb | 443 · 6 · 16w · ✗ · ✓ · ✗ · 7 | 53/155 · BreadcrumbList+ContactPage+MedicalBusiness+FAQPage · ✓ | 9 | ✓·0·0 | R2: açık/kapalı göstergesi |
| `/isitme-cihazi-fiyatlari/` | Pillar | page-breadcrumb | 4800 · 20 · 14w · ✓ · ✓ · ✓ · 10 | 53/158 · BreadcrumbList+WebPage+MedicalBusiness+FAQPage · ✓ | 63 | ✓·0·0 | R2: dokunma hedefleri ≥ 44 px |
| `/isitme-cihazi-markalari/` | Pillar | page-breadcrumb | 3472 · 21 · 23w · ✓ · ✓ · ✓ · 7 | 53/147 · BreadcrumbList+WebPage+MedicalBusiness+ItemList+FAQPage · ✓ | 46 | ✓·0·0 | R2: başlık ≤ 60 |
| `/isitme-cihazlari/` | Pillar | page-breadcrumb | 5923 · 26 · 32w · ✓ · ✓ · ✓ · 7 | 54/144 · BreadcrumbList+CollectionPage+MedicalBusiness+ItemList+FAQPage · ✓ | 65 | ✓·0·0 | R2: kaydırmalı "kulakta nerede durur" bölümü, tür karşılaştırma aracı, başlık kısaltıldı |
| `/isitme-cihazlari/bluetooth-ozellikli/` | Cihaz türü | page-breadcrumb | 1816 · 13 · 18w · ✓ · ✓ · ✓ · 5 | 40/148 · BreadcrumbList+WebPage+FAQPage · ✓ | 15 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/isitme-cihazlari/cocuklara-ozel/` | Cihaz türü | page-breadcrumb | 1763 · 13 · 21w · ✓ · ✓ · ✓ · 5 | 35/147 · BreadcrumbList+WebPage+FAQPage · ✓ | 11 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/isitme-cihazlari/gorunmez-cic/` | Cihaz türü | page-breadcrumb | 1843 · 13 · 24w · ✓ · ✓ · ✓ · 5 | 35/150 · BreadcrumbList+WebPage+FAQPage · ✓ | 12 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/isitme-cihazlari/kulak-arkasi-bte/` | Cihaz türü | page-breadcrumb | 1788 · 13 · 23w · ✓ · ✓ · ✓ · 5 | 39/148 · BreadcrumbList+WebPage+FAQPage · ✓ | 24 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/isitme-cihazlari/kulak-ici-ite/` | Cihaz türü | page-breadcrumb | 2198 · 13 · 24w · ✓ · ✓ · ✓ · 5 | 36/153 · BreadcrumbList+WebPage+FAQPage · ✓ | 23 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/isitme-cihazlari/sarj-edilebilir/` | Cihaz türü | page-breadcrumb | 1931 · 13 · 24w · ✓ · ✓ · ✓ · 5 | 36/135 · BreadcrumbList+WebPage+FAQPage · ✓ | 24 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/isitme-cihazlari/suya-dayanikli/` | Cihaz türü | page-breadcrumb | 1840 · 13 · 22w · ✓ · ✓ · ✓ · 5 | 35/154 · BreadcrumbList+WebPage+FAQPage · ✓ | 15 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/kocaeli-isitme-cihazlari/` | Yerel | page-breadcrumb | 329 · 7 · 26w · ✗ · ✓ · ✓ · 7 | 51/153 · BreadcrumbList+WebPage+MedicalBusiness+FAQPage · ✓ | 9 | ✓·0·0 | R2: ilgili sayfalar bloğu |
| `/kvkk/` | Hub (yeni, tur 1) | page-breadcrumb | 92 · 0 · 12w · ✗ · ✗ · ✗ · 0 | 43/134 · BreadcrumbList+CollectionPage · ✓ | 5 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/kvkk/aydinlatma-metni/` | KVKK | page-breadcrumb | 624 · 7 · 36w · ✗ · ✗ · ✗ · 0 | 44/140 · BreadcrumbList+WebPage · ✓ | 2 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/kvkk/cerez-politikasi/` | KVKK | page-breadcrumb | 768 · 9 · 20w · ✗ · ✗ · ✗ · 0 | 43/152 · BreadcrumbList+WebPage · ✓ | 2 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/kvkk/gizlilik-politikasi/` | KVKK | page-breadcrumb | 268 · 5 · 32w · ✗ · ✗ · ✗ · 0 | 50/154 · BreadcrumbList+WebPage · ✓ | 2 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/kvkk/ilgili-kisi-basvuru-formu/` | KVKK | page-breadcrumb | 151 · 6 · 12w · ✗ · ✗ · ✗ · 0 | 38/126 · BreadcrumbList+WebPage · ✓ | 2 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/` | Pillar | page-breadcrumb | 860 · 8 · 13w · ✗ · ✓ · ✗ · 6 | 39/136 · BreadcrumbList+CollectionPage+FAQPage · ✓ | 21 | ✓·0·0 | R2: dokunma hedefleri ≥ 44 px |
| `/markalar/am/` | Marka | page-breadcrumb | 623 · 6 · 35w · ✗ · ✓ · ✓ · 5 | 45/149 · BreadcrumbList+WebPage+FAQPage · ✓ | 9 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/audifon/` | Marka | page-breadcrumb | 603 · 6 · 34w · ✗ · ✓ · ✓ · 5 | 40/157 · BreadcrumbList+WebPage+FAQPage · ✓ | 9 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/audio-service/` | Marka | page-breadcrumb | 578 · 6 · 32w · ✗ · ✓ · ✓ · 5 | 45/146 · BreadcrumbList+WebPage+FAQPage · ✓ | 9 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/beltone/` | Marka | page-breadcrumb | 571 · 6 · 23w · ✗ · ✓ · ✓ · 5 | 42/132 · BreadcrumbList+WebPage+FAQPage · ✓ | 9 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/bernafon/` | Marka | page-breadcrumb | 635 · 6 · 32w · ✗ · ✓ · ✓ · 5 | 42/147 · BreadcrumbList+WebPage+FAQPage · ✓ | 9 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/coselgi/` | Marka | page-breadcrumb | 407 · 6 · 19w · ✗ · ✓ · ✓ · 5 | 40/123 · BreadcrumbList+WebPage+FAQPage · ✓ | 8 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/maico/` | Marka | page-breadcrumb | 442 · 6 · 28w · ✗ · ✓ · ✓ · 5 | 45/149 · BreadcrumbList+WebPage+FAQPage · ✓ | 8 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/nuear/` | Marka | page-breadcrumb | 654 · 6 · 26w · ✗ · ✓ · ✓ · 5 | 45/141 · BreadcrumbList+WebPage+FAQPage · ✓ | 11 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/oticon/` | Marka | page-breadcrumb | 672 · 6 · 24w · ✗ · ✓ · ✓ · 5 | 43/151 · BreadcrumbList+WebPage+FAQPage · ✓ | 10 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/philips-hearing/` | Marka | page-breadcrumb | 614 · 6 · 30w · ✗ · ✓ · ✓ · 5 | 41/143 · BreadcrumbList+WebPage+FAQPage · ✓ | 9 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/phonak/` | Marka | page-breadcrumb | 617 · 6 · 33w · ✗ · ✓ · ✓ · 5 | 43/149 · BreadcrumbList+WebPage+FAQPage · ✓ | 10 | ✓·0·0 | R2: LCP ölçümü/yazı tipi iyileştirmesi |
| `/markalar/resound/` | Marka | page-breadcrumb | 589 · 6 · 26w · ✗ · ✓ · ✓ · 5 | 46/145 · BreadcrumbList+WebPage+FAQPage · ✓ | 10 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/rexton/` | Marka | page-breadcrumb | 424 · 6 · 20w · ✗ · ✓ · ✓ · 5 | 45/133 · BreadcrumbList+WebPage+FAQPage · ✓ | 8 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/signia/` | Marka | page-breadcrumb | 605 · 6 · 31w · ✗ · ✓ · ✓ · 5 | 46/138 · BreadcrumbList+WebPage+FAQPage · ✓ | 10 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/sonic/` | Marka | page-breadcrumb | 555 · 6 · 27w · ✗ · ✓ · ✓ · 5 | 42/139 · BreadcrumbList+WebPage+FAQPage · ✓ | 9 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/unitron/` | Marka | page-breadcrumb | 528 · 6 · 19w · ✗ · ✓ · ✓ · 5 | 44/156 · BreadcrumbList+WebPage+FAQPage · ✓ | 10 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/vista/` | Marka | page-breadcrumb | 503 · 6 · 22w · ✗ · ✓ · ✓ · 5 | 37/154 · BreadcrumbList+WebPage+FAQPage · ✓ | 8 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/markalar/widex/` | Marka | page-breadcrumb | 582 · 6 · 26w · ✗ · ✓ · ✓ · 5 | 48/154 · BreadcrumbList+WebPage+FAQPage · ✓ | 10 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/neden-orijinal/` | Hub (yeni, tur 1) | page-breadcrumb | 235 · 2 · 27w · ✗ · ✗ · ✓ · 4 | 48/153 · BreadcrumbList+CollectionPage · ✓ | 9 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/neden-orijinal/guvenilir-teknoloji/` | Neden orijinal | page-breadcrumb | 1544 · 13 · 20w · ✓ · ✓ · ✓ · 5 | 53/123 · BreadcrumbList+WebPage+FAQPage · ✓ | 13 | ✓·0·0 | R2: başlık ≤ 60 |
| `/neden-orijinal/kolay-degisim/` | Neden orijinal | page-breadcrumb | 1371 · 13 · 22w · ✓ · ✓ · ✓ · 5 | 57/156 · BreadcrumbList+WebPage+FAQPage · ✓ | 14 | ✓·0·0 | R2: başlık ≤ 60 |
| `/neden-orijinal/marka-danismanligi/` | Neden orijinal | page-breadcrumb | 702 · 9 · 24w · ✗ · ✓ · ✓ · 8 | 53/158 · BreadcrumbList+WebPage+MedicalBusiness+FAQPage · ✓ | 30 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/neden-orijinal/orijinal-aksesuar/` | Neden orijinal | page-breadcrumb | 1385 · 13 · 17w · ✓ · ✓ · ✓ · 5 | 57/156 · BreadcrumbList+WebPage+FAQPage · ✓ | 14 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/neden-orijinal/ucretsiz-danismanlik/` | Neden orijinal | page-breadcrumb | 1358 · 13 · 22w · ✓ · ✓ · ✓ · 5 | 59/157 · BreadcrumbList+WebPage+FAQPage · ✓ | 15 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/neden-orijinal/uzun-omurlu-cihazlar/` | Neden orijinal | page-breadcrumb | 1509 · 13 · 18w · ✓ · ✓ · ✓ · 5 | 60/152 · BreadcrumbList+WebPage+FAQPage · ✓ | 13 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/neden-orijinal/yaygin-servis-agi/` | Neden orijinal | page-breadcrumb | 1036 · 10 · 23w · ✗ · ✓ · ✓ · 5 | 58/153 · BreadcrumbList+WebPage+FAQPage · ✓ | 14 | ✓·0·0 | R2: açıklama ≤ 160, küçük yazı 12 → 14 px+ |
| `/rehberler/` | Hub (yeni, tur 1) | page-breadcrumb | 151 · 2 · 14w · ✗ · ✗ · ✓ · 4 | 51/125 · BreadcrumbList+CollectionPage · ✓ | 6 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/rehberler/cihaz-secim-rehberi/` | Rehber | page-breadcrumb | 1384 · 13 · 18w · ✓ · ✓ · ✓ · 5 | 54/156 · BreadcrumbList+WebPage+FAQPage · ✓ | 16 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/rehberler/ilk-kullanim-rehberi/` | Rehber | page-breadcrumb | 1349 · 13 · 25w · ✓ · ✓ · ✓ · 5 | 52/157 · BreadcrumbList+WebPage+FAQPage · ✓ | 14 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/rehberler/isitme-kaybi-nedir/` | Rehber | page-breadcrumb | 1505 · 13 · 21w · ✓ · ✓ · ✓ · 5 | 55/142 · BreadcrumbList+WebPage+FAQPage · ✓ | 14 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/rehberler/uyum-sureci/` | Rehber | page-breadcrumb | 1434 · 13 · 19w · ✓ · ✓ · ✓ · 5 | 51/145 · BreadcrumbList+WebPage+FAQPage · ✓ | 14 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/segmentler/` | Hub (yeni, tur 1) | page-breadcrumb | 136 · 2 · 20w · ✗ · ✗ · ✓ · 4 | 51/140 · BreadcrumbList+CollectionPage · ✓ | 5 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/segmentler/ekonomik-seri/` | Segment | page-breadcrumb | 1458 · 13 · 16w · ✓ · ✓ · ✓ · 5 | 57/137 · BreadcrumbList+WebPage+FAQPage · ✓ | 17 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/segmentler/premium-seri/` | Segment | page-breadcrumb | 1477 · 13 · 22w · ✓ · ✓ · ✓ · 5 | 56/147 · BreadcrumbList+WebPage+FAQPage · ✓ | 17 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/segmentler/standart-seri/` | Segment | page-breadcrumb | 1452 · 13 · 19w · ✓ · ✓ · ✓ · 5 | 57/138 · BreadcrumbList+WebPage+FAQPage · ✓ | 17 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/servis-bakim/` | Hub (yeni, tur 1) | page-breadcrumb | 208 · 2 · 24w · ✗ · ✗ · ✓ · 4 | 60/156 · BreadcrumbList+CollectionPage · ✓ | 8 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/servis-bakim/cihaz-temizligi/` | Servis ve bakım | page-breadcrumb | 1398 · 13 · 19w · ✓ · ✓ · ✓ · 5 | 52/160 · BreadcrumbList+WebPage+FAQPage · ✓ | 14 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/servis-bakim/garanti-islemleri/` | Servis ve bakım | page-breadcrumb | 1324 · 13 · 20w · ✓ · ✓ · ✓ · 5 | 48/151 · BreadcrumbList+WebPage+Service+FAQPage · ✓ | 14 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/servis-bakim/onarim-takibi/` | Servis ve bakım | page-breadcrumb | 1247 · 10 · 19w · ✓ · ✓ · ✓ · 7 | 45/160 · BreadcrumbList+WebPage+Service+FAQPage · ✓ | 8 | ✓·0·0 | R2: dokunma hedefi ≥ 44 px |
| `/servis-bakim/periyodik-bakim/` | Servis ve bakım | page-breadcrumb | 1348 · 13 · 20w · ✓ · ✓ · ✓ · 5 | 47/154 · BreadcrumbList+WebPage+Service+FAQPage · ✓ | 14 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/servis-bakim/pil-aksesuar/` | Servis ve bakım | page-breadcrumb | 1345 · 13 · 21w · ✓ · ✓ · ✓ · 5 | 58/145 · BreadcrumbList+WebPage+FAQPage · ✓ | 13 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/servis-bakim/teknik-servis/` | Servis ve bakım | page-breadcrumb | 1678 · 13 · 19w · ✓ · ✓ · ✓ · 5 | 44/160 · BreadcrumbList+WebPage+Service+FAQPage · ✓ | 15 | ✓·0·0 | R2: dokunma hedefi ≥ 44 px |
| `/sgk-isitme-cihazi-odemesi/` | Pillar | page-breadcrumb | 2059 · 13 · 33w · ✓ · ✓ · ✓ · 17 | 52/150 · BreadcrumbList+WebPage+MedicalBusiness+FAQPage · ✓ | 32 | ✓·0·0 | R2: yazdırılabilir SGK kontrol listesi |
| `/sgk/cocuklarda-sgk/` | SGK | page-breadcrumb | 1397 · 13 · 15w · ✓ · ✓ · ✓ · 5 | 53/135 · BreadcrumbList+WebPage+FAQPage · ✓ | 12 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/sgk/gerekli-belgeler/` | SGK | page-breadcrumb | 1301 · 13 · 19w · ✓ · ✓ · ✓ · 5 | 60/143 · BreadcrumbList+WebPage+FAQPage · ✓ | 12 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/sgk/katki-payi/` | SGK | page-breadcrumb | 1453 · 14 · 18w · ✓ · ✓ · ✓ · 5 | 50/149 · BreadcrumbList+WebPage+FAQPage · ✓ | 13 | ✓·0·0 | R2: başlık ≤ 60 |
| `/sgk/rapor-sureci/` | SGK | page-breadcrumb | 1363 · 13 · 19w · ✓ · ✓ · ✓ · 5 | 53/124 · BreadcrumbList+WebPage+FAQPage · ✓ | 12 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/sgk/yenileme-hakki/` | SGK | page-breadcrumb | 1326 · 13 · 13w · ✓ · ✓ · ✓ · 5 | 50/130 · BreadcrumbList+WebPage+FAQPage · ✓ | 13 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/site-haritasi/` | Kurumsal / ana | page-breadcrumb | 166 · 16 · 284w · ✗ · ✗ · ✗ · 0 | 40/158 · BreadcrumbList+CollectionPage · ✓ | 106 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/teknolojiler/` | Hub (yeni, tur 1) | page-breadcrumb | 213 · 2 · 24w · ✗ · ✗ · ✓ · 4 | 54/154 · BreadcrumbList+CollectionPage · ✓ | 9 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/teknolojiler/gurultu-engelleme/` | Teknoloji | page-breadcrumb | 1809 · 13 · 26w · ✓ · ✓ · ✓ · 5 | 36/152 · BreadcrumbList+WebPage+FAQPage · ✓ | 16 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/teknolojiler/kablosuz-baglanti/` | Teknoloji | page-breadcrumb | 1868 · 13 · 31w · ✓ · ✓ · ✓ · 5 | 36/155 · BreadcrumbList+WebPage+FAQPage · ✓ | 16 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/teknolojiler/konusma-odakli/` | Teknoloji | page-breadcrumb | 1829 · 13 · 24w · ✓ · ✓ · ✓ · 5 | 34/160 · BreadcrumbList+WebPage+FAQPage · ✓ | 16 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/teknolojiler/sarjli-teknolojiler/` | Teknoloji | page-breadcrumb | 1788 · 13 · 25w · ✓ · ✓ · ✓ · 5 | 53/158 · BreadcrumbList+WebPage+FAQPage · ✓ | 16 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/teknolojiler/tinnitus-cozumleri/` | Teknoloji | page-breadcrumb | 1716 · 13 · 26w · ✓ · ✓ · ✓ · 5 | 41/155 · BreadcrumbList+WebPage+FAQPage · ✓ | 16 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/teknolojiler/uzaktan-kontrol/` | Teknoloji | page-breadcrumb | 1731 · 13 · 27w · ✓ · ✓ · ✓ · 5 | 34/157 · BreadcrumbList+WebPage+FAQPage · ✓ | 16 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/teknolojiler/yapay-zeka-destekli/` | Teknoloji | page-breadcrumb | 1872 · 13 · 25w · ✓ · ✓ · ✓ · 5 | 40/149 · BreadcrumbList+WebPage+FAQPage · ✓ | 16 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/uygulama-ayar/` | Hub (yeni, tur 1) | page-breadcrumb | 257 · 2 · 22w · ✗ · ✗ · ✓ · 4 | 60/149 · BreadcrumbList+CollectionPage · ✓ | 10 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/uygulama-ayar/cihaz-deneme/` | Uygulama ve ayar | page-breadcrumb | 480 · 6 · 27w · ✗ · ✓ · ✓ · 7 | 57/155 · BreadcrumbList+WebPage+Service+MedicalBusiness+FAQPage · ✓ | 7 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/uygulama-ayar/cihaz-uygulama/` | Uygulama ve ayar | page-breadcrumb | 1411 · 13 · 19w · ✓ · ✓ · ✓ · 5 | 49/157 · BreadcrumbList+WebPage+Service+FAQPage · ✓ | 14 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/uygulama-ayar/evde-isitme-cihazi-hizmeti/` | Uygulama ve ayar | page-breadcrumb | 641 · 8 · 20w · ✗ · ✓ · ✓ · 11 | 54/153 · BreadcrumbList+WebPage+Service+MedicalBusiness+FAQPage · ✓ | 7 | ✓·0·0 | R2: evde hizmet mini akışı |
| `/uygulama-ayar/kalip-alimi/` | Uygulama ve ayar | page-breadcrumb | 1580 · 13 · 24w · ✓ · ✓ · ✓ · 5 | 45/159 · BreadcrumbList+WebPage+Service+FAQPage · ✓ | 22 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/uygulama-ayar/kisiye-ozel-ayar/` | Uygulama ve ayar | page-breadcrumb | 995 · 11 · 18w · ✗ · ✓ · ✓ · 8 | 40/151 · BreadcrumbList+WebPage+Service+MedicalBusiness+FAQPage · ✓ | 9 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/uygulama-ayar/kisiye-ozel-programlama/` | Uygulama ve ayar | page-breadcrumb | 1534 · 13 · 19w · ✓ · ✓ · ✓ · 5 | 50/154 · BreadcrumbList+WebPage+Service+FAQPage · ✓ | 14 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/uygulama-ayar/kontrol-randevusu/` | Uygulama ve ayar | page-breadcrumb | 1420 · 13 · 20w · ✓ · ✓ · ✓ · 5 | 52/157 · BreadcrumbList+WebPage+Service+FAQPage · ✓ | 14 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |
| `/uygulama-ayar/uzaktan-ayar/` | Uygulama ve ayar | page-breadcrumb | 1412 · 13 · 20w · ✓ · ✓ · ✓ · 5 | 51/154 · BreadcrumbList+WebPage+Service+FAQPage · ✓ | 14 | ✓·0·0 | Otomatik kontroller temiz; metin bu turda yeniden yazılmadı |

## 3. Gruplara göre durum ve **kalan işler**

| Grup | URL | Görünür kelime (medyan · aralık) | Tur 2'de yapılan | Kalan / tamamlanmamış |
|---|---:|---|---|---|
| Kurumsal / ana | 6 | 682 · 166–1285 | Ana sayfa: hero cihaz animasyonu, cihaz carousel'i, açık/kapalı; hizmet sihirbazı; erişilebilirlik | Hakkımızda ve Bilgi Merkezi metinleri gözden geçirilmedi (gerçek ekip fotoğrafı/isim/yorum sahibinden gelmeli) |
| Blog | 6 | 1368 · 1099–1386 | Yok | Başarı hikayeleri: gerçek yorum/fotoğraf/isim sahibinden; sahte içerik yazılmadı |
| Yerel | 4 | 720 · 329–765 | GSC verisiyle Darıca başlık/H1; 4 sayfaya farklı ilgili-sayfalar blokları; açık/kapalı; LCP | Çayırova (≈330 görünür kelime) ve Kocaeli (≈330) ince; gerçek yerel veri (mahalle payı, sorular) **bekleniyor** (SoT: [VERİ BEKLENİYOR]). Gebze "yorumları" sorgusu için gerçek Google yorumu sahibinden |
| Hub (yeni, tur 1) | 9 | 208 · 92–257 | Tur 1'de oluşturuldu | Hub kart metinleri hedef sayfaların meta açıklamasıdır; özgün giriş metni kısa — sahibi onayıyla genişletilebilir |
| Değerlendirme | 6 | 1435 · 869–2956 | Dokunma hedefleri | Metin turu yapılmadı |
| İhtiyaca göre | 7 | 1798 · 1683–1879 | Yok | Metinler yeniden yazılmadı |
| Pillar | 5 | 3472 · 860–5923 | Kaydırmalı tür bölümü + karşılaştırma aracı; SGK kontrol listesi; başlık kısaltma; dokunma hedefleri | Fiyat sayfası: K-Fiyat-1 gereği model fiyatı yok — Oticon More/Signia Intuis fiyat sorguları (bkz. REDIRECT_AUDIT) için karar bekleniyor |
| Cihaz türü | 7 | 1840 · 1763–2198 | Yok (içerik gözden geçirildi, değişmedi) | IIC/RIC için ayrı detay sayfası yok (ana sayfadaki bölümlere bağlanıyor); yeni sayfa kararı sahibinde |
| KVKK | 4 | 624 · 151–768 | Yok (yasal metin; dokunulmadı) | Aydınlatma metni geri arama formu için güncellenmeli (hukuki; form canlıya alınırken) |
| Marka | 18 | 589 · 407–672 | Yok (özgün içerik önceki fazda); Phonak LCP ölçüldü | 18 marka sayfası: marka menşei sorusu ("hangi ülkenin", ≈ 580 gösterim) için doğrulanmış cümle sahibinden; model aileleri güncelliği |
| Neden orijinal | 7 | 1371 · 702–1544 | 3 başlık ≤ 60, 1 açıklama/yazı boyutu düzeltmesi | Metinler yeniden yazılmadı |
| Rehber | 4 | 1434 · 1349–1505 | Yok | Metinler yeniden yazılmadı |
| Segment | 3 | 1458 · 1452–1477 | Yok | Metinler yeniden yazılmadı |
| Servis ve bakım | 6 | 1348 · 1247–1678 | Dokunma hedefleri | Metin turu yapılmadı |
| SGK | 5 | 1363 · 1301–1453 | Katkı payı başlığı ≤ 60 | Tutarlar tek kaynaktan; metin turu yapılmadı |
| Teknoloji | 7 | 1809 · 1716–1872 | Yok | Metinler yeniden yazılmadı; uzun sayfalar — kısa cevap/sadeleştirme turu |
| Uygulama ve ayar | 8 | 1412 · 480–1580 | Evde hizmet mini akışı | Metin turu yapılmadı |

## 4. Açık (düzeltilmemiş) bulgular

Kayda değer açık otomatik bulgu yok.

## 5. İkinci oturum eki (2026-11-11) — bu belgenin hangi satırları güncelliğini yitirdi

Yukarıdaki matris ilk oturumun **otomatik ölçümüdür** ve o hâliyle korunmuştur. İkinci oturumda aşağıdakiler değişti; güncel kayıt için parantez içindeki belgeye bakın.

| Yukarıda yazan | Güncel durum | Kayıt |
|---|---|---|
| "112 sayfanın tamamının metni bu turda yeniden yazılmadı", gruplarda "Metinler yeniden yazılmadı / metin turu yapılmadı" | 112 sayfanın **tamamı tek tek okundu** (8 grup, sayfa başına 13 kontrol). Nesnel düzeltmeler uygulandı: 94 sayfada görünür metin değişti; 12 sayfa yalnızca denetlendi. Üslup/yapı önerileri (410 madde) ve işletme bilgisi çelişkileri (287 madde) **uygulanmadı**, sahibinin kararını bekliyor | `page-review/README.md`, `page-review/sayfa-degisiklik-ozeti.tsv` |
| Mobil yatay taşma yalnızca 390 px'te ölçüldü | 320 / 344 / 360 / 390 / 768 / 1024 / 1440 px × %100 ve %150 yazı: **1.568 yüklemede 0 taşma** (320–359 px'te her sayfada bulunan 27 px'lik üst çubuk taşması ve dört tekil taşma giderildi) | `docs/DECISIONS.md` (ikinci oturum) |
| Cihaz türü grubunda "Yok (içerik gözden geçirildi, değişmedi)" | Kulak Arkası (BTE) sayfasına gerçek karelerle 360° görüntüleyici eklendi; carousel altı tür; kulak şeması. **2026-11-12:** kare dizili görüntüleyici kaldırıldı, yerine markasız 3B model geldi (ana sayfa + BTE sayfası); ana sayfa hero'sunda süzülen cihaz görseli de aynı modelin karesi oldu | `VIEWER_360.md`, `BTE_3D_VIEWER.md` (§12: hero) |
| Marka grubunda "Yok" | 18 marka sayfasında bitişik hero başlığı, marka adı büyük harf bozulması ve eksik Bluetooth çipleri düzeltildi; görsel–etiket uyuşmazlıkları sahibine bırakıldı | `page-review/G4-markalar.md` |
| Erişilebilirlik: axe 7 sayfa | Ek olarak 112 sayfada "gizli bölge içinde odaklanabilir öğe" taraması: **0** (iç bağlantı katmanının kapalı SSS panellerinde yarattığı 24 sayfalık hata giderildi) | `PERFORMANCE_LCP.md` §8.3 |
| Yönlendirme: 126 benzersiz kaynak | **127** (#18 eklendi); 254 kural satırı | `REDIRECT_AUDIT.md` §5 |

Bu ek elle yazılmıştır; matrisin kendisi (§1–§4) yeniden üretilmemiştir.
