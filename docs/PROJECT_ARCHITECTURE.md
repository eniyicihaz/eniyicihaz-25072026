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

Her component kendi klasöründe bulunur.

Örnek:

Hero001/

- Hero001.astro
- Hero001.css
- preview.webp

---

## 6. İsimlendirme Standardı

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

Component isimleri PascalCase ve numaralıdır.

```
Hero001
Hero002

CTA001
CTA002

Footer001
Header001
```

Her component, `COMPONENT_LIBRARY.md` içerisinde açıklanır.

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

Her sayfa aşağıdaki yapı ile hazırlanır.

- Title
- Meta Description
- Canonical
- Open Graph
- Twitter Card
- Breadcrumb
- Schema.org

SEO bilgileri component içerisine yazılmaz.

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
- [ ] preview.webp oluşturuldu.
- [ ] COMPONENT_LIBRARY.md dosyasına eklendi.

---

# Geliştirme Prensibi

Kod kısa olduğu için değil,

anlaşılır olduğu için iyidir.

Kod çalıştığı için değil,

bakımı kolay olduğu için değerlidir.

Her yeni geliştirme, mevcut mimariyi bozmayacak şekilde yapılmalıdır.