// Dört belgede de aynen tekrarlanan üst bilgi ve "İletişim ve Başvuru"
// bölümü (kaynak: KVK-AYD-04 / WEB-GIZ-05 / WEB-CRZ-06 / KVK-FRM-14).
import type { LegalMetaItem, LegalSection } from "./types";

export const controllerMeta: LegalMetaItem[] = [
  { label: "Veri Sorumlusu", value: "Avrasya İşitme Cihazları Satış ve Uygulama Merkezi" },
  {
    label: "Adres",
    value: "Fevziçakmak Mah. Dr. Zeki Acar Cad. No:77/7, Asansör 1. Kat, Darıca/Kocaeli",
  },
  { label: "KEP", value: "erdinc.kilic.3@hs01.kep.tr" },
  { label: "E-posta", value: "eniyicihaz@gmail.com" },
];

export const EFFECTIVE_DATE = "01.10.2026";

export const contactSection: LegalSection = {
  heading: "İletişim ve Başvuru",
  level: 3,
  blocks: [
    {
      type: "p",
      text: "KVKK kapsamındaki taleplerinizi yazılı olarak Fevziçakmak Mah. Dr. Zeki Acar Cad. No:77/7, Asansör 1. Kat, Darıca/Kocaeli adresine, KEP yoluyla erdinc.kilic.3@hs01.kep.tr adresine veya daha önce sistemimizde kayıtlı bulunan elektronik posta adresiniz üzerinden eniyicihaz@gmail.com adresine iletebilirsiniz. Başvurular en kısa sürede ve en geç otuz gün içinde sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi hâlinde yürürlükteki mevzuat ve Kurul tarafından belirlenen ücret esasları uygulanır.",
    },
    {
      type: "p",
      text: "İletişim: 0533 773 31 99 / 0262 656 32 77 | eniyicihaz@gmail.com | www.eniyicihaz.com",
    },
  ],
};
