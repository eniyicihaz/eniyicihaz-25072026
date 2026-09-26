# En İyi Cihaz - Proje Mimarisi

> Son Güncelleme: 16 Temmuz 2026

---

# Proje Amacı

En İyi Cihaz, Türkiye'nin en kapsamlı işitme sağlığı bilgi platformunu oluşturmayı hedefleyen, Astro tabanlı, SEO odaklı ve bileşen (Component) mimarisi ile geliştirilen bir web projesidir.

Bu projenin amacı yalnızca çalışan bir web sitesi geliştirmek değil, uzun yıllar sürdürülebilecek profesyonel bir altyapı oluşturmaktır.

---

# Temel Geliştirme Felsefesi

## 1. Component First

Sayfalar doğrudan geliştirilmez.

Önce component geliştirilir.

Sayfalar yalnızca componentlerden oluşturulur.

---

## 2. Reusable

Her component tekrar kullanılabilir olmalıdır.

Bir component yalnızca tek sayfa için yazılmaz.

---

## 3. Single Responsibility

Her component yalnızca tek görevi yerine getirir.

Bir component birden fazla sorumluluk üstlenmez.

---

## 4. Veri Component İçinde Yazılmaz

Component içerisine;

- başlık
- açıklama
- buton yazısı
- liste
- içerik

gömülmez.

Yanlış:

```astro
<h1>Oticon İşitme Cihazları</h1>
```

Doğru:

```astro
<h1>{title}</h1>
```

İçerikler props, data veya content dosyalarından gelir.

---

## 5. Component Yapısı

Her component kendi klasöründe bulunur. Gerçek uygulamadaki örnek (bkz. §6 için isimlendirme detayı):

Hero/

- Hero.astro (yapı + stil birlikte, Astro'nun scoped `<style>` bloğuyla)
- hero.data.ts (içerik)
- hero.types.ts (tip tanımı)

---

## 6. İsimlendirme Standardı

> **Durum notu (2026-09):** Aşağıdaki numaralı isimlendirme (`Hero001`, `CTA001`) örneği, projenin ilk tasarım niyetini yansıtıyordu ama gerçek uygulamada hiç kullanılmadı — gerçek kod tabanı numarasız, betimleyici isimler kullanır (aşağıda güncellendi). Bu, PROJECT_ARCHITECTURE.md'nin kod ile senkronize hale getirilen ilk maddesidir.

Kategori klasörleri küçük harf kullanır.

```
hero/
cta/
header/
footer/
cards/
faq/
forms/
gallery/
stats/
comparison/
testimonials/
sections/
shared/
ui/
```

Component isimleri PascalCase'dir ve **numaralandırılmaz**; component'in ne olduğunu doğrudan anlatır. Her component kendi klasöründe, aynı adı taşıyan `.astro` dosyasıyla birlikte yaşar; ilişkili statik içerik `.data.ts`, tip tanımları `.types.ts` dosyasında tutulur.

```
Hero/
  Hero.astro
  hero.data.ts
  hero.types.ts

Closing/
  Closing.astro
  closing.data.ts
  closing.types.ts
```

Ayrı bir `COMPONENT_LIBRARY.md` dosyası tutulmaz — her component'in amacı/kullanımı kendi klasöründeki dosyalardan ve (varsa) ilgili `*_SPECIFICATION.md`'den okunur.

---

## 7. CSS Kuralları

Her component yalnızca kendi CSS dosyasını kullanır.

Örnek:

```
Hero001.css
```

Component'e özel stiller global CSS içerisine yazılmaz.

Global CSS yalnızca;

- reset
- typography
- variables
- utilities
- animations
- layout

gibi ortak kuralları içerir.

---

## 8. Responsive Standartları

Her component aşağıdaki kırılım noktalarına göre geliştirilir.

| Cihaz | Genişlik |
|--------|---------:|
| Mobile | 0 – 767px |
| Tablet | 768 – 1279px |
| Desktop | 1280px+ |

Her component üç görünümde de test edilir.

---

## 9. Accessibility (Erişilebilirlik)

Tüm componentler aşağıdaki kurallara uygun olmalıdır.

- Kontrast oranı minimum WCAG AA
- Minimum gövde yazısı 17px
- Dokunma alanı minimum 48x48px
- Klavye ile tamamen kullanılabilir olmalı
- Görseller anlamlı alt (alt) metnine sahip olmalı
- Form elemanları doğru etiketlenmeli

---

## 10. SEO Standartları

SEO bilgileri component içerisine yazılmaz; sayfa/layout seviyesinde props/data'dan gelir. Her sayfanın karşılaması gereken somut, kontrol edilebilir SEO/Schema/Canonical kriterleri burada tekrar edilmez — Canonical Source: QUALITY_GATES.md §1 SEO Gate, §4 Schema Gate, §5 Canonical Gate. Arama/AI görünürlük felsefesi için Canonical Source: SEARCH_STRATEGY.md.

---

## 11. Performans Hedefleri

Hedefler:

- Lighthouse Performance ≥ 95
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 95

Core Web Vitals hedefleri:

- LCP < 2.5 sn
- CLS < 0.1
- INP < 200 ms

---

## 12. Klasör Sorumlulukları

| Klasör | Görevi |
|--------|---------|
| components | Tüm bileşenler |
| pages | Sayfalar |
| layouts | Sayfa iskeletleri |
| styles | Ortak stil dosyaları |
| data | Statik veriler |
| content | İçerikler |
| config | Site ayarları |
| lib | Harici kütüphane yardımcıları |
| utils | Genel yardımcı fonksiyonlar |
| docs | Dokümantasyon |

---

## 13. Tıbbi İçerik Kuralları

Bu proje işitme sağlığı alanında yayın yapmaktadır.

Bu nedenle;

- Kanıtsız üstünlük iddiası kullanılmaz.
- Tanı veya tedavi garantisi verilmez.
- Yanıltıcı fiyat bilgisi paylaşılmaz.
- Sağlık mevzuatına aykırı reklam dili kullanılmaz.

---

## 14. Component Tamamlanma Kriterleri

Bir component aşağıdaki şartlar sağlandığında tamamlanmış kabul edilir.

- [ ] Desktop görünümü tamamlandı.
- [ ] Tablet görünümü tamamlandı.
- [ ] Mobile görünümü tamamlandı.
- [ ] Accessibility kurallarına uygun.
- [ ] Responsive test edildi.
- [ ] Props kullanıyor.
- [ ] İçerik component içerisine gömülü değil.
- [ ] CSS yalnızca kendi dosyasında.

---

# Geliştirme Prensibi

Kod kısa olduğu için değil,

anlaşılır olduğu için iyidir.

Kod çalıştığı için değil,

bakımı kolay olduğu için değerlidir.

Her yeni geliştirme, mevcut mimariyi bozmayacak şekilde yapılmalıdır.