// "Size uygun hizmeti bulun" sihirbazı (ServiceWizard) — YENİ BİLGİ YOK.
// Her seçenek MEVCUT sayfalara yönlendirir; eşleşmeler zaten sitedeki "Şu An Hangi Aşamadasınız?" (data/services/decision.ts)
// ve ana sayfa yönlendirme kartlarıyla (data/home/router.ts) aynı mantıktır. Açıklama metni, hedef sayfanın kendi kısa özetidir
// (site-map `summary`) veya yoktur — hiçbir hizmet, süre, fiyat ya da "ücretsiz" iddiası bu dosyada üretilmez.
// Veri toplama yok: sihirbaz hiçbir cevabı kaydetmez/göndermez; yalnızca ekranda yönlendirir ve WhatsApp mesajını önceden doldurur.
import { routeFor } from "../../config/site-map";

export interface WizardLink {
  href: string;
  label: string;
  /** Hedef sayfanın kendi kısa özeti (varsa). */
  summary?: string;
}

export interface WizardOption {
  id: string;
  label: string;
  /** İlk bağlantı birincil öneridir. */
  links: WizardLink[];
  /** WhatsApp mesajındaki konu cümlesi: "Merhaba, {topic} konusunda bilgi almak istiyorum." */
  topic: string;
}

export interface WizardGroup {
  id: string;
  label: string;
  hint: string;
  question: string;
  options: WizardOption[];
}

const link = (href: string, label?: string): WizardLink => {
  const r = routeFor(href);
  return { href, label: label ?? r?.label ?? href, summary: r?.summary };
};

export const serviceWizard = {
  eyebrow: "2 Adımda",
  heading: "Size Uygun Hizmeti Bulun",
  intro: "Durumunuzu seçin; sizi ilgili sayfaya yönlendirelim. Cevaplarınız kaydedilmez veya gönderilmez.",
  step1: "Şu anda nasıl bir durumdasınız?",
  groups: [
    {
      id: "yeni",
      label: "Henüz işitme cihazım yok",
      hint: "Test, cihaz seçimi veya SGK konusunda başlamak istiyorum",
      question: "Ne yapmak istiyorsunuz?",
      options: [
        { id: "test", label: "İşitme düzeyimi öğrenmek istiyorum", topic: "ücretsiz işitme testi", links: [link("/degerlendirme/ucretsiz-isitme-testi/"), link("/degerlendirme/online-isitme-testi/")] },
        { id: "secim", label: "Hangi cihaz türü bana uygun olabilir?", topic: "işitme cihazı seçimi", links: [link("/rehberler/cihaz-secim-rehberi/"), link("/isitme-cihazlari/", "İşitme cihazı türleri")] },
        { id: "sgk", label: "SGK desteğinden nasıl yararlanırım?", topic: "SGK işitme cihazı desteği", links: [link("/sgk-isitme-cihazi-odemesi/", "SGK işitme cihazı ödemesi ve katkı payı"), link("/sgk/gerekli-belgeler/")] },
        { id: "fiyat", label: "Fiyat bilgisi almak istiyorum", topic: "işitme cihazı fiyatları", links: [link("/isitme-cihazi-fiyatlari/", "İşitme cihazı fiyatları")] },
        { id: "deneme", label: "Cihazı denemek istiyorum", topic: "cihaz deneme", links: [link("/uygulama-ayar/cihaz-deneme/")] },
      ],
    },
    {
      id: "var",
      label: "İşitme cihazım var",
      hint: "Ayar, arıza, bakım, garanti veya yenileme",
      question: "Cihazınızla ilgili ne gerekiyor?",
      options: [
        { id: "ayar", label: "Ayar veya programlama istiyorum", topic: "cihaz ayarı", links: [link("/uygulama-ayar/kisiye-ozel-ayar/"), link("/uygulama-ayar/kontrol-randevusu/")] },
        { id: "ariza", label: "Cihazım arızalandı veya çalışmıyor", topic: "cihaz arızası / teknik servis", links: [link("/servis-bakim/teknik-servis/"), link("/servis-bakim/onarim-takibi/")] },
        { id: "pil", label: "Pil veya aksesuar lazım", topic: "pil ve aksesuar", links: [link("/servis-bakim/pil-aksesuar/")] },
        { id: "bakim", label: "Bakım ve temizlik yaptırmak istiyorum", topic: "cihaz bakımı ve temizliği", links: [link("/servis-bakim/periyodik-bakim/"), link("/servis-bakim/cihaz-temizligi/")] },
        { id: "garanti", label: "Garanti durumunu öğrenmek istiyorum", topic: "garanti işlemleri", links: [link("/servis-bakim/garanti-islemleri/")] },
        { id: "yenile", label: "Cihazımı yenilemek istiyorum", topic: "cihaz yenileme (SGK yenileme hakkı)", links: [link("/sgk/yenileme-hakki/", "SGK yenileme hakkı")] },
      ],
    },
    {
      id: "uzak",
      label: "Merkeze gelmem zor",
      hint: "Evde veya uzaktan destek istiyorum",
      question: "Hangi yolu tercih edersiniz?",
      options: [
        { id: "evde", label: "Evde hizmet istiyorum", topic: "evde hizmet", links: [link("/uygulama-ayar/evde-isitme-cihazi-hizmeti/")] },
        { id: "uzaktan", label: "Uzaktan ayar hakkında bilgi istiyorum", topic: "uzaktan ayar", links: [link("/uygulama-ayar/uzaktan-ayar/")] },
      ],
    },
  ] as WizardGroup[],
};
