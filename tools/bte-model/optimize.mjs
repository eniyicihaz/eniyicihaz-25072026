// Blender'dan çıkan ham GLB'yi web için küçültür (birleştirme + kaynak + meshopt sıkıştırması) ve boyutları yazar.
//
// Kullanım (bu betiğin bağımlılıkları projenin bağımlılığı DEĞİLDİR; geçici bir klasöre kurulur):
//   mkdir %TEMP%\bte-opt && cd %TEMP%\bte-opt
//   npm init -y && npm i @gltf-transform/core @gltf-transform/extensions @gltf-transform/functions meshoptimizer
//   copy "<proje>\tools\bte-model\optimize.mjs" .
//   node optimize.mjs <ham.glb> "<proje>\src\components\bte3d\bte-generic.glb"
//
// Konum 14 bit, normal 12 bit nicemlenir (41 mm'lik modelde konum adımı ≈ 2,5 µm; ayrım çizgileri 100 µm).
// Geometri sadeleştirilmez (simplify yok): üçgen sayısı Blender betiğindeki çözünürlük ayarlarıyla belirlenir.
import { NodeIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { dedup, flatten, join, meshopt, prune, weld } from "@gltf-transform/functions";
import { MeshoptDecoder, MeshoptEncoder } from "meshoptimizer";
import fs from "node:fs";
import zlib from "node:zlib";

const [src, out] = process.argv.slice(2);
if (!src || !out) {
  console.error("kullanım: node optimize.mjs <ham.glb> <çıktı.glb>");
  process.exit(1);
}
await MeshoptEncoder.ready;
await MeshoptDecoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ "meshopt.encoder": MeshoptEncoder, "meshopt.decoder": MeshoptDecoder });
const doc = await io.read(src);
// Aynı malzemeyi kullanan parçalar tek çizim çağrısında birleşir (14 nesne → 8). Malzeme ADLARI korunur:
// görüntüleyici malzemeleri ada göre atar (Shell, Door, Control, Gap, Metal, Clear, Tube, Mould).
await doc.transform(dedup(), flatten(), join({ keepNamed: false }), weld(), prune(), meshopt({ encoder: MeshoptEncoder, level: "high", quantizePosition: 14, quantizeNormal: 12 }));
await io.write(out, doc);

const kb = (n) => (n / 1024).toFixed(1) + " KB";
const buf = fs.readFileSync(out);
let tris = 0;
let verts = 0;
let prims = 0;
for (const m of doc.getRoot().listMeshes())
  for (const p of m.listPrimitives()) {
    prims += 1;
    tris += p.getIndices().getCount() / 3;
    verts += p.getAttribute("POSITION").getCount();
  }
console.log(`ham: ${kb(fs.statSync(src).size)} → ${out}: ${kb(buf.length)} (gzip ${kb(zlib.gzipSync(buf, { level: 9 }).length)}, brotli ${kb(zlib.brotliCompressSync(buf).length)})`);
console.log(`çizim çağrısı ${prims}, üçgen ${tris}, köşe ${verts}; malzemeler: ${doc.getRoot().listMaterials().map((m) => m.getName()).join(", ")}`);
