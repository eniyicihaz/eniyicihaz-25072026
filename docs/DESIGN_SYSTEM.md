> **DURUM: ARŞİVLENECEK / GÜNCELLEME BEKLİYOR** (Faz 1 durum bandı, 2026-10-07). Başlıktaki eski proje adı marka adı olarak kullanılmaz; tek marka Avrasya İşitme Cihazları'dır (BRAND_SOT §1). Teknik içerik ileride `docs/tech/` mimarisine eşlenecektir. Bu belge güncel tasarım kuralları için kanonik kaynak değildir ve arşivlenmeye adaydır: güncel tasarım kuralları `DESIGN_SYSTEM_GUIDE.md` (kök), canlı tasarım token'ları `src/ds/styles/base/variables.css` dosyasındadır. Bu belgenin içeriği Faz 1'de **değiştirilmedi**; sonradan yalnızca "Uygulama notları" bloğu eklendi ("Component Kuralları" bölümünün sonunda) ve bu notlar ileride uygun bir teknik belgeye taşınmalıdır. Çelişki olursa öncelik: SoT (`docs/source-of-truth/*`) > `MASTER_PLAN.md` > kök belgeler > `docs/strategy/*` ve `docs/tech/*` > bu belge. Ayrıntı: `docs/tech/DOC_MIGRATION_MAP.md` §5–§6.

# En İyi Cihaz - Design System

> Son Güncelleme: 2026-09 (kapsam notu ve token değerleri gerçek koda göre senkronize edildi)

---

# Kapsam

> **Bu belge yalnızca canlı sitenin** (`src/pages`, `src/components`, `src/layouts`) tasarım kurallarını tanımlar. `/ds/` demo/katalog sistemi (çoklu tasarım dili: Corporate/Soft/Premium/Glass/Dark) bu belgenin kapsamı **dışındadır** ve canlı sitede kullanılmaz — Canonical Source: `src/ds/DESIGN_LANGUAGES.md`, `src/ds/README.md`.

---

# Amaç

Bu belge, En İyi Cihaz projesinin görsel tasarım kurallarını tanımlar.

Gerçek tasarım değerleri (`renk`, `spacing`, `font`, `shadow`, `animation` vb.) **`src/ds/styles/base/variables.css`** dosyasında tutulur.

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

Tek spacing ölçeği kullanılır. Gerçek token adları ve px karşılıkları (`src/ds/styles/base/variables.css`):

```
--space-0   0px
--space-1   4px
--space-2   8px
--space-3   12px
--space-4   16px
--space-5   20px
--space-6   24px
--space-8   32px
--space-10  40px
--space-12  48px
--space-16  64px
--space-20  80px
--space-24  96px
```

Margin ve padding rastgele verilmez; yalnızca yukarıdaki token adlarıyla (`var(--space-N)`) tanımlanır, ham px değeri yazılmaz.

> **Bilinen teknik borç (bu tur kapsamında düzeltilmedi — yalnızca dokümantasyon güncellendi, koda dokunulmadı):** Kod tabanında `--space-7` ve `--space-14` adında, yukarıdaki listede **tanımlı olmayan** iki değişkene birden fazla component'te referans verilmiştir. Bunlar geçerli token değildir; yeni geliştirmede kullanılmamalıdır. Mevcut kullanımlarının temizlenmesi, ayrı bir kod (CSS) görevi olarak ele alınmalıdır — bu doküman değişikliği bunu kapsamaz.

---

# Grid Sistemi

Container genişliği

Maksimum içerik genişliği

Grid kolon sistemi

tamamı `variables.css` üzerinden yönetilir.

---

# Border Radius

Tek radius ölçeği kullanılır. Gerçek token adları (`src/ds/styles/base/variables.css`):

```
--radius-none  0px
--radius-xs    2px
--radius-sm    4px
--radius-md    8px
--radius-lg    12px
--radius-xl    16px
--radius-2xl   24px
--radius-full  9999px
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

Bu proje (canlı site — bkz. Kapsam) şu an yalnızca Light Theme desteklemektedir.

Dark Mode geliştirilecekse mevcut Design Token sistemi genişletilmelidir. (Not: `/ds/` demo kataloğunun kendi, canlı siteden bağımsız bir Dark teması zaten mevcuttur — bkz. Kapsam notu; bu, canlı sitenin Light-only durumuyla çelişmez çünkü ikisi farklı, birbirinden ayrı sistemlerdir.)

---

# Component Kuralları

Her component

- tek göreve sahip olmalıdır.
- tekrar kullanılabilir olmalıdır.
- kendi klasöründe bulunmalıdır.
- kendi CSS dosyasını kullanmalıdır.
- yalnızca Design Token kullanmalıdır.

---

## Uygulama notları (projede doğrulanmış tuzaklar)

- **Kategori rengi sıraya değil veriye bağlanır.** Örnek: bağlantı yoluna göre (`/uygulama-ayar/…` turkuaz, `/servis-bakim/…` amber). Kart sırası değişince renk bozulmaz.
- **Ortak bileşeni değiştirmeden:** sayfa kapsamlı `<style is:global>` blokları yalnızca o sayfanın CSS paketine girer. Bileşenlerin kapsamlı (`data-astro-cid`) kuralları için seçici `body` ile, ikon hover kuralları ayrıca `[class]` ile güçlendirilir.
- **Giriş animasyonu hover yükselmesini ezer.** `data-rise` animasyonunun son kareyi tutan (`fill-mode: both`) olduğu kartlarda `transform` hover'ı yalnızca `!important` ile çalışır; bu durumda `prefers-reduced-motion` kuralı da `!important` olmalıdır.
- **Tanımsız spacing token'ı bildirimi geçersiz kılar.** Ölçekte yalnızca `--space-0…6, 8, 10, 12, 16, 20, 24` vardır; `--space-7`, `--space-14` gibi adlar padding/margin'i sessizce 0 yapar.
- **Ölçüm bozulmaz.** Telefon, WhatsApp ve yol tarifi bağlantıları `src/lib/consent/events.ts` ile hedeften sınıflandırılır; `link_location` ata sınıf adlarından türer. Hero gibi bölümlerde yeni sınıf adı kuralları tetikleyebilir; bu durumda `data-track-location` kullanılır.
- **İletişim butonları** `data-contact-action` ile ortak görünümü alır (`src/ds/styles/base/contact-actions.css`, `src/lib/contact-action.ts`).
- **Henüz token olmayan renkler:** Kategori vurgu renkleri (turkuaz `#0f766e`, amber `#b45309`, açık mavi `#eff6ff`) şu an sayfa kapsamlı CSS'te sabittir. Kalıcı token'a çevrilmesi `variables.css` değişikliği gerektirir ve ayrı kararla yapılır; bu bölüm token'ları değiştirmez.

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
src/ds/styles/base/variables.css
```

Tasarımsal bir değişiklik yapılacaksa önce bu dosya güncellenmelidir.

---

# Tasarım Hedefi

Amaç;

- hızlı görünen değil,
- tutarlı görünen,

bir arayüz oluşturmaktır.

Her yeni component mevcut tasarım sistemine uyum sağlamak zorundadır.