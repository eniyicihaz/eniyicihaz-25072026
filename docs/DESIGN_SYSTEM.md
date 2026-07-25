# En İyi Cihaz - Design System

> Son Güncelleme: 16 Temmuz 2026

---

# Amaç

Bu belge, En İyi Cihaz projesinin görsel tasarım kurallarını tanımlar.

Gerçek tasarım değerleri (`renk`, `spacing`, `font`, `shadow`, `animation` vb.) **`src/styles/base/variables.css`** dosyasında tutulur.

Bu belge kuralları tanımlar.

Kod tekrar edilmez.

---

# Tasarım Prensipleri

- Sade
- Modern
- Güven veren
- Erişilebilir
- Mobil öncelikli
- Uzun ömürlü
- Tutarlı

Her yeni component mevcut tasarım dilini korumalıdır.

---

# Design Token Sistemi

Projedeki tüm görsel değerler yalnızca Design Token üzerinden kullanılır.

Component içerisinde;

- HEX renk
- px font
- rastgele shadow
- rastgele transition
- rastgele z-index

kullanılmaz.

Tüm değerler `variables.css` içerisindeki CSS değişkenlerinden alınır.

---

# Renk Sistemi

Her renk aşağıdaki ölçeğe sahip olmalıdır.

```
Primary

50
100
200
300
400
500
600
700
800
900
```

Aynı yapı aşağıdaki renkler için de uygulanır.

- Secondary
- Success
- Warning
- Danger
- Info
- Neutral

Renkler component içerisine HEX olarak yazılmaz.

---

# Tipografi

## Font

Proje boyunca tek font ailesi kullanılır.

Font ailesi `variables.css` içerisinde tanımlanır.

---

## Başlık Hiyerarşisi

```
Display

H1

H2

H3

H4

H5

H6
```

Tüm yazılar responsive olmalıdır.

Font boyutları rem birimi ile tanımlanır.

---

## Gövde Metni

Minimum gövde metni

```
1.0625rem
```

Satır yüksekliği

```
1.6–1.75
```

Maksimum satır uzunluğu

```
60–75 karakter
```

---

# Spacing Sistemi

Tek spacing ölçeği kullanılır.

```
4
8
12
16
24
32
48
64
96
128
```

Margin ve padding rastgele verilmez.

---

# Grid Sistemi

Container genişliği

Maksimum içerik genişliği

Grid kolon sistemi

tamamı `variables.css` üzerinden yönetilir.

---

# Border Radius

Tek radius ölçeği kullanılır.

```
4
8
12
16
24
9999
```

---

# Shadow Sistemi

Shadow kullanılacaksa yalnızca Design Token kullanılabilir.

```
Shadow Small

Shadow Medium

Shadow Large
```

Her component gölge kullanmak zorunda değildir.

---

# Z-Index Sistemi

Sabit katmanlar ortak ölçek kullanır.

Örnek

```
Base

Sticky

Header

Dropdown

Modal

Toast
```

Component içerisine rastgele z-index yazılmaz.

---

# Hareket Sistemi

Animasyon süreleri Design Token üzerinden alınır.

Örnek

```
Fast

Base

Slow
```

Hover

Focus

Modal

Dropdown

aynı süre sistemini kullanmalıdır.

---

## Reduced Motion

Kullanıcının işletim sistemi

```
prefers-reduced-motion
```

ayarına uyulur.

Animasyonlar gerektiğinde kapatılır veya azaltılır.

---

# Buton Sistemi

Tek Button component bulunur.

Variant örnekleri

- Primary
- Secondary
- Outline
- Ghost
- Link

Her variant aynı ölçü sistemini kullanır.

---

# Form Sistemi

Tek tip form görünümü kullanılır.

- Input
- Select
- Textarea
- Checkbox
- Radio

Focus görünümü proje genelinde aynıdır.

---

# Kart Sistemi

Kartlar;

- ortak spacing
- ortak radius
- ortak border
- ortak shadow
- ortak transition

kullanır.

---

# İkon Sistemi

Tek ikon kütüphanesi kullanılır.

İkon boyutları Design Token üzerinden belirlenir.

İkonlar dekoratif ise gizlenir.

Anlam taşıyorsa erişilebilir isim (aria-label) sağlanır.

---

# Görseller

Tercih edilen format

```
WebP
```

Kurallar

- Responsive
- Lazy Loading
- Alt metni zorunlu
- Gereksiz büyük görsel kullanılmaz

---

# Responsive

Breakpointler

| Mobile | 0–767px |
| Tablet | 768–1279px |
| Desktop | 1280px+ |

Tipografi ve spacing breakpointlere göre ölçeklenmelidir.

---

# Erişilebilirlik

Minimum kurallar

- WCAG AA kontrast
- Minimum 48×48px dokunma alanı
- Minimum 1.0625rem gövde metni
- Klavye ile tam kullanım
- Görsellerde alt metni
- Belirgin focus görünümü
- Renk tek başına anlam taşımaz

---

# Dark Mode

Bu proje şu an yalnızca Light Theme desteklemektedir.

Dark Mode geliştirilecekse mevcut Design Token sistemi genişletilmelidir.

---

# Component Kuralları

Her component

- tek göreve sahip olmalıdır.
- tekrar kullanılabilir olmalıdır.
- kendi klasöründe bulunmalıdır.
- kendi CSS dosyasını kullanmalıdır.
- yalnızca Design Token kullanmalıdır.

---

# Yasaklar

- HEX renk yazmak
- px ile font tanımlamak
- Inline style kullanmak
- Rastgele z-index kullanmak
- Rastgele transition kullanmak
- Rastgele shadow kullanmak
- Component içerisine tasarım değeri gömmek

---

# Tek Doğruluk Kaynağı

Bu belgede açıklanan tüm tasarım kuralları aşağıdaki dosya tarafından uygulanır.

```
src/styles/base/variables.css
```

Tasarımsal bir değişiklik yapılacaksa önce bu dosya güncellenmelidir.

---

# Tasarım Hedefi

Amaç;

- hızlı görünen değil,
- tutarlı görünen,

bir arayüz oluşturmaktır.

Her yeni component mevcut tasarım sistemine uyum sağlamak zorundadır.