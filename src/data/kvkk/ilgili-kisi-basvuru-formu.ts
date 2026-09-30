// Kaynak: 14_Ilgili_Kisi_Basvuru_Formu.docx (KVK-FRM-14)
// Basılı/imzalı doldurulan bir belgedir; sayfada alanlar boş bırakılır,
// web üzerinden veri toplanmaz.
import type { LegalDocumentData } from "./types";
import { controllerMeta, EFFECTIVE_DATE } from "./common";

export const ilgiliKisiBasvuruFormu: LegalDocumentData = {
  title: "İlgili Kişi Kişisel Veri Başvuru Formu",
  meta: [
    ...controllerMeta,
    { label: "Doküman Kodu", value: "KVK-FRM-14" },
    { label: "Yürürlük", value: EFFECTIVE_DATE },
  ],
  sections: [
    {
      heading: "Başvuru Sahibi Bilgileri",
      blocks: [
        {
          type: "table",
          head: ["Alan", "Bilgi"],
          fillable: true,
          rows: [
            ["Ad Soyad", ""],
            ["T.C. Kimlik No / Yabancı Kimlik veya Pasaport No", ""],
            ["Adres", ""],
            ["E-posta", ""],
            ["Telefon", ""],
            ["Başvuru Tarihi", ""],
          ],
        },
      ],
    },
    {
      heading: "Başvuru Konusu",
      blocks: [
        {
          type: "p",
          text: "Talep edilen KVKK hakkını/haklarını ve mümkünse ilgili kayıt veya işlem tarihini açıklayınız:",
        },
        { type: "fill", lines: 3 },
      ],
    },
    {
      heading: "Talep Edilebilecek Haklar",
      blocks: [
        {
          type: "ul",
          items: [
            "Kişisel verilerimin işlenip işlenmediğini öğrenmek istiyorum.",
            "Kişisel verilerim işlenmişse buna ilişkin bilgi istiyorum.",
            "İşlenme amacını ve amaca uygun kullanımı öğrenmek istiyorum.",
            "Aktarılan üçüncü kişileri öğrenmek istiyorum.",
            "Eksik/yanlış verilerin düzeltilmesini talep ediyorum.",
            "Kanundaki şartlar oluşmuşsa silme/yok etme talep ediyorum.",
            "Aktarılan üçüncü kişilere bildirim yapılmasını talep ediyorum.",
            "Otomatik sistemle analiz sonucu aleyhe sonuca itiraz ediyorum.",
            "Zararım varsa giderilmesini talep ediyorum.",
          ],
        },
      ],
    },
    {
      heading: "Teslim Yöntemi",
      blocks: [{ type: "checks", items: ["E-posta", "KEP", "Posta", "Elden"] }],
    },
    {
      heading: "Kimlik / Temsil",
      blocks: [
        {
          type: "p",
          text: "Başvuru sahibinin kimliğini ve gerekiyorsa temsil yetkisini doğrulamaya yarayan belgeler başvurunun niteliğine göre sunulur.",
        },
        { type: "fields", items: ["Başvuru Sahibi İmza", "Tarih"] },
      ],
    },
    {
      heading: "Veri Sorumlusu Kullanım Alanı",
      blocks: [
        {
          type: "table",
          head: ["Alan", "Kayıt"],
          fillable: true,
          rows: [
            ["Başvuru geliş tarihi", ""],
            ["Kayıt no", ""],
            ["Doğrulama sonucu", ""],
            ["Sorumlu", ""],
            ["Cevap tarihi", ""],
            ["Sonuç / gerekçe", ""],
          ],
        },
        {
          type: "p",
          text: "Başvuru adresi: Fevziçakmak Mah. Dr. Zeki Acar Cad. No:77/7, Asansör 1. Kat, Darıca/Kocaeli | KEP: erdinc.kilic.3@hs01.kep.tr | E-posta: avrasyaisitme@gmail.com",
        },
      ],
    },
  ],
};
