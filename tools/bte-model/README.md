# tools/bte-model — 3B kulak arkası (BTE) cihaz modelinin kaynağı

Sitedeki 3 boyutlu görüntüleyicinin (`src/components/bte3d/`) gösterdiği model **bu klasördeki betikle, sıfırdan ve
parametrik olarak** üretilir. Elle çizilmiş bir `.blend` dosyası yoktur; modelin tek kaynağı `build_bte.py`'dir.
Bu klasör derlemeye girmez ve yayımlanmaz (Astro yalnızca `src/` ve `public/` ile çalışır).

Tasarım, yöntem seçimi, ölçümler ve görsel kontrol sonuçları: [`docs/tech/BTE_3D_VIEWER.md`](../../docs/tech/BTE_3D_VIEWER.md)

## Model nedir, ne değildir

- Markasız, logosuz, **özgün (jenerik)** bir kulak arkası işitme cihazıdır. Hiçbir üreticinin modelinin kopyası değildir;
  üzerinde yazı, logo, simge veya marka işareti yoktur. Böyle bir şey **eklenmemelidir**.
- Klasik BTE'dir: gövde + sert şeffaf **kulak kancası** + şeffaf **ses tüpü** + **kulak kalıbı**. Kanal içi alıcılı (RIC)
  cihaz değildir: ince kablo ve kulak içi hoparlör yoktur.
- Ölçüler gerçek cihaz ölçülerine yakındır (gövde ≈ 35 mm, kancayla birlikte ≈ 41 mm; tüp dış çapı 3,2 mm).

## Dosyalar

| Dosya | Görev |
|---|---|
| `build_bte.py` | Blender betiği: geometriyi üretir, GLB olarak dışa aktarır, isteğe bağlı kontrol renderları alır |
| `optimize.mjs` | Ham GLB'yi web için küçültür (parçaları malzemeye göre birleştirir, meshopt ile sıkıştırır) |
| `make-posters.cjs` | Görüntüleyicinin poster görsellerini canlı sahnenin başlangıç karesinden üretir |
| `make-hero-frame.cjs` | Ana sayfa hero'sunda süzülen cihaz görselini (aynı başlangıç karesi, şeffaf zeminli) canlı sahneden üretir |

## Yeniden üretme

Gereken tek program **Blender 4.5 LTS**'dir (ücretsiz; <https://www.blender.org/download/lts/4-5/>). Kurulum şart değil:
"portable (.zip)" sürümü bir klasöre açmak yeterlidir.

```powershell
# 1) Modeli üret ve ham GLB'yi yaz (≈ 20 sn)
& "C:\yol\blender-4.5.x-windows-x64\blender.exe" -b --factory-startup -P tools\bte-model\build_bte.py -- --out "$env:TEMP\bte-out" --export bte-raw.glb

# 2) Web için küçült (bağımlılıklar projeye değil, geçici bir klasöre kurulur)
mkdir "$env:TEMP\bte-opt"; cd "$env:TEMP\bte-opt"
npm init -y; npm i @gltf-transform/core @gltf-transform/extensions @gltf-transform/functions meshoptimizer
copy "<proje>\tools\bte-model\optimize.mjs" .
node optimize.mjs "$env:TEMP\bte-out\bte-raw.glb" "<proje>\src\components\bte3d\bte-generic.glb"

# 3) Siteyi derle, yerelde sun (npx astro preview) ve posterleri yenile (model değiştiyse ŞART: poster = ilk canlı kare)
#    make-posters.cjs'in başındaki kullanım notuna bakın.

# 4) Ana sayfa hero'sundaki cihaz görselini yenile (model, malzeme veya ışık değiştiyse; yoksa hero eski modeli gösterir)
#    Geliştirme sunucusu gerekir (npx astro dev); make-hero-frame.cjs'in başındaki kullanım notuna bakın.
```

Biçim değiştirmek için `build_bte.py`'nin başındaki **PARAMETERS** bloğundaki sayılar düzenlenir (milimetre). Sık
kullanılanlar: `MASTER` (gövde + kanca orta çizgisi), `PROF_A` / `PROF_B` (gövde kesiti), `DOOR_L0` (pil kapağı çizgisi),
`ROCKER` / `BUTTON` / `MICS` (düğmeler), `TUBE_PATH` (tüp), `MOULD_OUTLINE` (kulak kalıbının dış hattı).
Renk ve malzeme görüntüleyicide tanımlıdır: `src/components/bte3d/bte3d.client.js` → `makeMaterials()`.

## Kontrol renderları (isteğe bağlı)

```powershell
& blender.exe -b --factory-startup -P tools\bte-model\build_bte.py -- --out "$env:TEMP\bte-out" --render --res 640
```

12 açıdan Cycles renderı ve hepsini bir arada gösteren `qc-sheet.png` üretir. Bu renderlar yalnızca geometri kontrolü
içindir; sitede görünen görüntü tarayıcıda (three.js) çizilir ve asıl kalite kontrolü orada yapılır.
