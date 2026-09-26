# KNOWLEDGE_GATE_SPECIFICATION.md

> Ana sayfanın kapanıştan hemen önceki, "henüz karar vermediyseniz" bölümü (`docs/HOMEPAGE_SPECIFICATION.md`'deki "KnowledgeGate" ile aynı). **Bu dosya, zaten üretimde olan gerçek içeriği belgeler.** Kod içermez.
>
> **Kanonik kaynaklar:** amaç/hikâye ve sayfa mimarisi → `docs/HOMEPAGE_SPECIFICATION.md` · ton/iddia disiplini → `PRINCIPLES.md §5` · görsel dil → `DESIGN_SYSTEM_GUIDE.md §6` · hub-cluster stratejisi → `SEARCH_STRATEGY.md §6` · yayın kriterleri → `QUALITY_GATES.md`.

## 1. Bu bölüm neden gerekli — mimari gerekçe

Ana sayfadan `/bilgi-merkezi`'ye giden **tek** bağlantı noktası budur (SEARCH_STRATEGY.md §6 Hub/Pillar/Cluster modelinin ana sayfadaki uygulanışı). Kaldırılırsa, henüz karar vermemiş, daha fazla bilgi arayan kullanıcı için ana sayfada bir sonraki doğal adım kaybolur. **Korunuyor, değiştirilmiyor.**

## 2. Gerçek içerik (mevcut üretim, `src/data/knowledge-gate/knowledge-gate.data.ts`)

- Eyebrow: "Bilgi Merkezi"
- H2: "Henüz Karar Vermediyseniz, Öğrenmeye Devam Edin"
- Intro: "İşitme sağlığı hakkında merak ettikleriniz için hazırladığımız rehberlere göz atabilirsiniz."
- 3 sade metin linki (kart süsü yok, bilinçli olarak CategoryExplorer/BrandCriteria'dan daha sessiz): "İşitme Kaybı Nedir?" (`/rehberler/isitme-kaybi-nedir`), "Cihaz Seçim Rehberi" (`/rehberler/cihaz-secim-rehberi`), "İlk Kullanım Rehberi" (`/rehberler/ilk-kullanim-rehberi`).
- Kapanış: "Bilgi Merkezi'ni Keşfedin →" → `/bilgi-merkezi`.

3 konu, kod yorumuna göre `src/data/knowledge/showcase.ts`'nin gerçek `knowledgeMega` konularını birebir yansıtıyor — uydurma link/başlık yok.

## 3. Amaç değerlendirmesi (5 kriter)

- **Kullanıcı amacı:** Henüz karar vermemiş kullanıcıyı düşük baskıyla bilgiye yönlendirmek.
- **SEO amacı:** Görünür h2, 3 gerçek rehber linki + hub link (`/bilgi-merkezi`) — hub-cluster modelinin ana sayfa ucu.
- **Local SEO amacı:** Yok — bilinçli olarak yok. Eğitici/genel bilgi içeriği lokasyondan bağımsızdır.
- **GEO/AI Search amacı:** Konu adları net topic-entity sinyalleri taşıyor; doğrudan cevaplanabilir içeriğin kendisi bu bölümde değil, hedef `/rehberler/*` sayfalarında yaşar — bu bölümün işlevi yönlendirmedir, cevap vermek değildir (doğru kapsam).
- **Dönüşüm amacı:** Yumuşak hub link.

## 4. Atomic Design (mevcut yapı)

- **Organism:** `src/components/knowledge-gate/KnowledgeGate/KnowledgeGate.astro`
- **Veri (component klasörü dışında, bilinçli — CategoryExplorer ile aynı desen):** `src/data/knowledge-gate/knowledge-gate.data.ts` (tipler de burada tanımlı)

## 5. Definition of Done

Mevcut durum yukarıdaki 5 kriteri karşılıyor — değişiklik gerekmiyor. Bu dosya mevcut durumun onaylı kaydıdır.
