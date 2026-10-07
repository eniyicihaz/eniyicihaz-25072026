# FAZ0_QUESTIONNAIRE.md: İşletme Bilgi Anketi (yalnızca açık sorular)

> **Durum:** ACTIVE · Faz 0 · Oluşturulma: 2026-10-06 · Son güncelleme: 2026-10-07 (Faz 0 son bilgi aktarımı)

## Nasıl kullanılır
- Bu ankette yalnızca **henüz cevaplanmamış** sorular var. Daha önce doğrulanan bilgiler Source of Truth (SoT) dosyalarına işlendi ve burada tekrar sorulmuyor. Bunlar: marka, 2009, Darıca merkezinin Ağustos 2024 açılışı, tek merkez, üç telefon, mevcut GBP, iki logo ve gerçek fotoğraflar.
- Cevaplar "Cevap" sütununa yazılır. Cevaplanan her bilgi ilgili SoT dosyasına **[DOĞRULANDI]** olarak, kaynak "İşletme sahibi" ve tarihle işlenir.
- "Bilmiyorum", "yok" veya "paylaşmak istemiyorum" da geçerli bir cevaptır. Böyle cevaplanan konu sitede **kullanılmaz**.
- **Güvenlik:** Hiçbir soruya şifre, API key, token, giriş bilgisi veya doğrulama kodu yazmayın. Google hesaplarıyla ilgili sorular yalnızca "var mı / kim yönetiyor" bilgisini istiyor.
- **Önem:** BLOCKER (ilgili fazı durdurur) · HIGH · MEDIUM · LOW.
- **Faz:** F1 belgeler · F2 hızlı düzeltmeler · F3 altyapı / marka / NAP · F4 Darıca · F5 bilgi merkezi ve form · F6–F8 Gebze, Çayırova, Kocaeli.

---

## 1. İşletme Kimliği → BUSINESS_SOT
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q1.1 | Vergi levhasındaki **tam ticari unvan** nedir? KVKK'daki "Avrasya İşitme Cihazları Satış ve Uygulama Merkezi" ifadesi bu unvan mı? | HIGH | F1 | |
| Q1.2 | Şahıs şirketi sahibinin adı Hakkımızda veya KVKK sayfasında gösterilebilir mi? | MEDIUM | F4 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** İşletme sahibi Erdinç Kılıç. **Açık kalan:** "İşletme sahibi" unvanıyla kamuya açık gösterim [KULLANICIDAN BİLGİ GEREKLİ] |
| Q1.3 | Darıca merkezinin **açılış yılı** nedir? (Ay ve gün gerekmez.) | HIGH | F2 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Ağustos 2024. (Önceki "yaklaşık 3 yıl" kaydı [ESKİ / GEÇERSİZ]) |
| Q1.4 | 2009'da işletme hangi ilçede ve adreste kuruldu? Darıca öncesindeki adresler neler? | MEDIUM | F3 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** 2009, Afyon Merkez. **Açık kalan:** Darıca öncesindeki diğer adresler [KULLANICIDAN BİLGİ GEREKLİ] |
| Q1.5 | Sitede "2009'dan beri **aynı ekiple**" yazıyor. Ekip 2009'dan beri aynı mı? | HIGH | F2 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Hayır, ekip 2009'dan beri aynı değil. Erdinç Kılıç 2009'dan beri organizasyonda. "2009'dan beri aynı ekip" ifadesi kullanılmaz |
| Q1.6 | COMPANY.md'de "Türkiye geneli yaygın ağ" yazıyor. Bu ne anlama geliyor? Gerçek değilse kaldıralım mı? | HIGH | F1 | |
| Q1.7 | "İşitme Kooperatifi" ve "Anlaşmalı İşitme Merkezi Ağı" ortaklıkları gerçek mi? Gerçekse adları nedir? | HIGH | F1 | |
| Q1.8 | SGK sözleşme tarihi ve tesis numarası sitede gösterilebilir mi? | MEDIUM | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** SGK numarası, sözleşme tarihi gibi kurum kimlik bilgileri kamuya açık içerikte yazılmaz |
| Q1.9 | Sağlık Bakanlığı / ÜTS kaydı veya satış merkezi izin belgesi var mı? Varsa belge adı nedir? | MEDIUM | F4 | |
| Q1.10 | Mesleki dernek veya oda üyeliğiniz var mı? | LOW | F4 | |

## 2. Fiziksel Merkez → LOCAL_SOT §2
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q2.1 | Merkezde hangi bölümler var? (bekleme, danışma, test kabini/odası, ayar odası, kalıp atölyesi, servis alanı, diğer) | HIGH | F4 | |
| Q2.2 | Test odası sessiz kabin mi? Hangi cihazlar kullanılıyor? (odyometre, timpanometre, REM sistemi, 3D tarayıcı/yazıcı) | MEDIUM | F4 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** REM ve 3D kulak kalıbı hizmet olarak var; Noah ve İŞİTSOFT kullanılıyor. **Açık kalan:** Kabin tipi ve cihaz modelleri [KULLANICIDAN BİLGİ GEREKLİ] |
| Q2.3 | Öğle arası var mı? Resmî tatil ve bayramlarda çalışıyor musunuz? | MEDIUM | F3 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Öğle arası yok. Resmî tatillerde kapalı |

## 3. Adres ve Erişim → LOCAL_SOT §1–2
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q3.1 | Asansör dışında (merdiven) erişim nasıl? Rampa var mı? Tekerlekli sandalyeyle girilebiliyor mu? | HIGH | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Asansör var; tekerlekli sandalye için uygun |
| Q3.2 | Merkezin önüne park edilebiliyor mu? En yakın otopark hangisi? | HIGH | F4 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Merkeze özel otopark var. **Açık kalan:** Otoparkın ayrıntısı [KULLANICIDAN BİLGİ GEREKLİ] |
| Q3.3 | Toplu taşımayla nasıl gelinir? (hat numaraları, en yakın durak adı, yaklaşık yürüme süresi) | HIGH | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Farabi Devlet Hastanesi durağının karşısında. Hatlar: Gebze 502/440/510/515 · Çayırova 550 · Beylikbağı 415/425 · Dilovası 410 · Mutlukent 510 [TIME-SENSITIVE]. Yürüme süresi verilmedi |
| Q3.4 | Eczane ve Farabi Diş dışında bilinen başka referans noktaları var mı? | MEDIUM | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Palandöken Eczanesi üst kat; yeni metro durağı çapraz tarafta |
| Q3.5 | Adres yazımı ve posta kodu (41700) doğru mu? | MEDIUM | F3 | |

## 4. Hizmetler: "Hangi hizmetleri GERÇEKTEN veriyoruz?" → SERVICE_SOT §1
> **CEVAPLANDI [DOĞRULANDI]**
> - Kaynak: İşletme sahibi. Son doğrulama: 2026-10-07.
> - Doğrulanan bilgiler: 40 hizmetin hepsinin verildiği; ücret, randevu, uygulayan, yaş grubu, işlem süresi ve teslim süresi; KBB yönlendirme kriterleri.
> - Kayıtların tamamı `SERVICE_SOURCE_OF_TRUTH.md` §1 (H1–H40), §1.1 (personel), §1.2 (yönlendirme) ve §1.3 (ayrımlar) içinde.
> - Eski S-kodlarının H-kodlarıyla eşlemesi: SERVICE_SOT §1.4.

| Eski ID | Hizmet | Durum | Cevap özeti (ayrıntı: SERVICE_SOT §1) |
|---|---|---|---|
| S1 | Ücretsiz işitme testi | **CEVAPLANDI [DOĞRULANDI]** | H1: Veriliyor · Ücretsiz · Randevu gerekli · 5 yaş ve üstü · 10 dakika |
| S2 | Odyometri | **CEVAPLANDI [DOĞRULANDI]** | H2: Veriliyor · Ücretsiz · Randevu gerekli · 5 yaş ve üstü · 15 dakika |
| S3 | Timpanometri | **CEVAPLANDI [DOĞRULANDI]** | H3: Veriliyor · Ücretsiz · Randevu gerekli · 5 yaş ve üstü · 10 dakika |
| S4 | Çocuk işitme testi / oyun odyometrisi | **CEVAPLANDI [DOĞRULANDI]** | H4: Veriliyor · Ücretli · Randevu gerekli · 3 yaş ve üstü · 10 dakika |
| S5 | Tinnitus değerlendirmesi | **CEVAPLANDI [DOĞRULANDI]** | H5: Veriliyor · Ücretsiz · Randevu gerekli · 5 yaş ve üstü · 10 dakika. Maskeleme testleri ayrı kayıt: H29 |
| S7 | Cihaz seçimi | **CEVAPLANDI [DOĞRULANDI]** | H6: Veriliyor · Ücretsiz · Randevu gerekli · 10 dakika |
| S8 | Cihaz deneme | **CEVAPLANDI [DOĞRULANDI]** (düzeltme 2026-10-07) | İki ayrı kayıt: <br>• **H7**: demo, 20 dakika, ücretsiz. <br>• **H28**: "Cihazı satın alarak 7 güne kadar deneme; uygun bulunmaması halinde ücret iadesi" (kesintisiz). <br>**Kulak içi cihazlar** H28 kapsamında değildir; merkezde demo/deneme yapılabilir. "Ücretsiz deneme" ifadesi kullanılmaz (SERVICE_SOT §1.5) |
| S9 | Kulak kalıbı / 3D kalıp | **CEVAPLANDI [DOĞRULANDI]** | H8 / H9: Veriliyor · Ücretli (cihaz alımında ilk kalıplar ücretsiz) · İz alma 10 dakika · Teslim 3 gün içinde |
| S10 | Cihaz teslimi | **CEVAPLANDI [DOĞRULANDI]** | H10: Veriliyor · Ücretsiz · 10–15 dakika (değişken) |
| S11 | Ayar / REM | **CEVAPLANDI [DOĞRULANDI]** | H11 (5–15 dakika) ve H12 REM (10–15 dakika). İkisi de ücretsiz |
| S12 | Programlama | **CEVAPLANDI [DOĞRULANDI]** | H13: Ücretsiz · 10 dakika |
| S13 | Uzaktan ayar | **CEVAPLANDI [DOĞRULANDI]** | H14: Ücretsiz · 15 dakika |
| S14 | Kontrol randevusu | **CEVAPLANDI [DOĞRULANDI]** | H15: Ücretsiz · 5 dakika |
| S15 | Evde hizmet | **CEVAPLANDI [DOĞRULANDI]** | H16: Ücretsiz · 10–60 dakika (değişken) |
| S16 | Teknik servis | **CEVAPLANDI [DOĞRULANDI]** | H17: Duruma göre ücretli · Teslim 3 gün içinde |
| S17 | Periyodik bakım | **CEVAPLANDI [DOĞRULANDI]** | H18 / H31: Ücretsiz · 10 dakika |
| S18 | Cihaz temizliği | **CEVAPLANDI [DOĞRULANDI]** | H19: Ücretsiz · 10 dakika |
| S19 | Onarım | **CEVAPLANDI [DOĞRULANDI]** | H20: Duruma göre ücretli · Teslim 1–3 gün içinde |
| S20 | Garanti işlemleri | **CEVAPLANDI [DOĞRULANDI]** | H21: Ücretsiz · 1–5 gün (değişken) |
| S21 | Yedek / ödünç cihaz | **CEVAPLANDI [DOĞRULANDI]** | H22 / H32: Ücretsiz · 10 dakika |
| S22 | Pil ve aksesuar | **CEVAPLANDI [DOĞRULANDI]** | H23: Ücretli · Randevu gerekmez · 5 dakika. Ek ürünler: H30, H33–H36 |
| S23 | SGK işlemleri | **CEVAPLANDI [DOĞRULANDI]** | H24 (destek; randevu gerekmez) ve H37 (bilgilendirme; randevu gerekli). İkisi de ücretsiz · 10 dakika |
| S24 | İade / cayma | **CEVAPLANDI [DOĞRULANDI]** | H25: Ücretsiz · 10 dakika |
| S25 | Randevu | **CEVAPLANDI [DOĞRULANDI]** | H26: Ücretsiz · 1 dakika. Randevu gereklilikleri her hizmette ayrıca kayıtlı |
| S26 | Kulak kiri / KBB yönlendirmesi | **CEVAPLANDI [DOĞRULANDI]** | H27 (KBB yönlendirmesi, 5 dakika) ve H38 (sınırlı kulak temizliği, 5–10 dakika). Kriterler: SERVICE_SOT §1.2 |
| — | Uygulayan ("Kim?" sütunu) | **CEVAPLANDI [DOĞRULANDI]** | H1–H40'ın hepsi için: Odym. Erdinç Kılıç · Od. Sunay Özgür · Teknik servis personeli Birsen Şahin |

| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q4.1 | **Sitede sayfası olup aslında verilmeyen bir hizmet var mı?** Hangileri? | **BLOCKER** | F2 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Sorulan 27 hizmetin hepsi veriliyor. **Açık kalan:** Hizmet listesinde doğrudan karşılığı olmayan site sayfalarının durumu: `/degerlendirme/online-isitme-testi/` (site aracı), `/neden-orijinal/marka-danismanligi/` ve `/neden-orijinal/ucretsiz-danismanlik/` (H6 ile aynı hizmet mi?), `/neden-orijinal/kolay-degisim/` (H25 ile aynı mı?) [KULLANICIDAN BİLGİ GEREKLİ] |
| Q4.2 | Kesin olarak **ücretsiz** olan hizmetler hangileri? (test, danışmanlık, temizlik, kontrol, ön inceleme) | **BLOCKER** | F4 | **CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Ücretsiz, koşullu, duruma göre ve ücretli tam listesi SERVICE_SOT §5'te. Not: "ön inceleme" ayrı bir kalem olarak belirtilmedi. Teknik servis ve onarım "duruma göre" |
| Q4.3 | Bu listede olmayan ama verdiğiniz bir hizmet var mı? | MEDIUM | F4 | **CEVAPLANDI [DOĞRULANDI] (2026-10-07):** H28–H40 eklendi (cihazı satın alarak 7 güne kadar deneme ve uygun bulunmazsa ücret iadesi; kulak içi hariç, tinnitus maskeleme testleri, tıkaç/yüzücü kulaklığı, periyodik bakım ve temizlik, geçici cihaz temini, nem alıcı ürünler, hijyen ve bakım ürünleri, cihaz tutacağı, koklear implant pili, SGK bilgilendirme, kulak temizliği, iki bilgilendirme hizmeti) |
| Q4.4 | Her hizmetin **nasıl** yapıldığı (1–2 cümle). Yalnızca H38 için sınırlı açıklama verildi | MEDIUM | F4 | [KULLANICIDAN BİLGİ GEREKLİ] |
| Q4.5 | "Cihaz gerektirmeyen durumlar → uygun yönlendirme": hangi durumlar, nereye? | LOW | F4 | [VERİ BEKLENİYOR] |
| Q4.6 | "Çocuklarda belirli durumlar → KBB": hangi durumlar? (isteğe bağlı) | LOW | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Ayrıntılı listede çocuklara ilişkin kriterler: çocuk öyküsündeki risk faktörleri; belirgin konuşma/dil gelişimi gecikmesi (SERVICE_SOT §1.2.1, K11–K12) |
| Q4.7 | H14 uzaktan ayar hangi markalarda ve uygulamalarla yapılıyor? H16 evde hizmet hangi ilçelere ve hangi işlemleri kapsıyor? | MEDIUM | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Uzaktan ayar A&M ve Audifon dışındaki cihazlarda yapılabiliyor. Evde hizmet: Kocaeli'nin tamamı ve İstanbul Anadolu Yakası'nın tüm ilçeleri |

## 5. Gerçek Hasta / Müşteri Süreci → SERVICE_SOT §2
> **CEVAPLANDI [DOĞRULANDI]**
> - Kaynak: İşletme sahibi. Son doğrulama: 2026-10-07.
> - 15 aşamanın tamamı SERVICE_SOT'a işlendi: §2.0 kanonik tablo, tam metinler §2.1–§2.15.
> - Tutarlılık notları T1–T3 (SERVICE_SOT §2.16) **çözüldü** (İşletme sahibi, 2026-10-07). Açık kalan: Q5.4.

| ID | Aşama | Durum | Cevap özeti (tam metin: SERVICE_SOT §2) |
|---|---|---|---|
| P1 | İlk temas | **CEVAPLANDI [DOĞRULANDI]** | En çok: tabela (doğrudan geliş), tavsiye, Google. İletişim çoğunlukla telefon; WhatsApp daha nadir |
| P2 | Randevu | **CEVAPLANDI [DOĞRULANDI]** | Çoğunlukla telefonla, çok nadiren WhatsApp. İşleme göre saat aralığı ve işleme göre ön sorular. Geç kalınacaksa en az 1 saat önceden haber istenir |
| P3 | Gelirken getirilecekler | **CEVAPLANDI [DOĞRULANDI]** | Varsa işitme testi, reçete, rapor. Başka belge doğrulanmadı |
| P4 | İlk görüşme | **CEVAPLANDI [DOĞRULANDI]** | Talepler sorulur, anamnez alınır |
| P5 | İşitme testi | **CEVAPLANDI [DOĞRULANDI]** | Son 1 ayda test varsa rutin tekrar yapılmaz, şüphede yenilenir. Timpanometri ve REM gerektiğinde. Uygulayan ve süreler: §1 |
| P6 | Test sonrası karar | **CEVAPLANDI [DOĞRULANDI]** | Normal sonuçta buna göre; işitme kaybında bilgilendirme ve deneme; şüpheli durumda KBB hekimi |
| P7 | Cihaz seçimi | **CEVAPLANDI [DOĞRULANDI]** | Tüm türler anlatılır. Önce derece ve kulak yapısı, sonra kullanım kolaylığı, yaşam tarzı, estetik. **18 marka satılıyor, başka satılan marka yok** (düzeltme 2026-10-07). Tercih yoksa fiyat/performans veya teknoloji değerlendirmesi |
| P8 | Cihaz denemesi | **CEVAPLANDI [DOĞRULANDI]** | Uygun görülen marka, genellikle orta veya üst teknoloji. "Cihazı satın alarak 7 güne kadar deneme; uygun bulunmaması halinde ücret iadesi" (kesintisiz; işletmenin mevcut uygulaması). **Kulak içi cihazlar hariç:** eve 7 günlük deneme verilmez, merkezde demo/deneme yapılabilir |
| P9 | SGK süreci | **CEVAPLANDI [DOĞRULANDI]** (başlangıç senaryoları) | Senaryo A / B: SERVICE_SOT §2.9. Ayrıntılar açık (Q8.x) |
| P10 | Kalıp / teslim | **CEVAPLANDI [DOĞRULANDI]** | Kalıp gerekiyorsa ilk teslim standart prop veya dome ile; kalıp gelince değişim |
| P11 | Kullanım eğitimi | **CEVAPLANDI [DOĞRULANDI]** | Takma/çıkarma, pil, şarj kutusu, kullanım süresi. İlk hafta günde 2 saat, ikinci hafta günde 5 saat. İlk kontrole kadar gürültülü ortamda kullanılmaz. Temizlik eğitimi |
| P12 | İlk kontrol | **CEVAPLANDI [DOĞRULANDI]** | Yaklaşık 2 hafta sonra. İlk filtre veya hortum değişimi ücretsiz yapılabiliyor. Ses genellikle 1 seviye artırılır. Deneyimler not edilir. Talep edilirse telefon ve uygulama kurulumu |
| P13 | Uzun dönem takip | **CEVAPLANDI [DOĞRULANDI]** | Yıllık test yenileme ve telefonla çağrı; ayar güncellemesi; yaklaşık 3 ayda bir hortum/filtre; 2. yılda bakım, sonra yıllık |
| P14 | İade / cayma | **CEVAPLANDI [DOĞRULANDI]** (yalnızca işletmenin mevcut uygulaması) | Kulak içi cihazlarda iade alınmıyor. Önce neden sorulur ve çözüm denenir. İade başlarsa imza alınır; 3–10 gün içinde, ödeme şekline göre. Özel durum yoksa kesinti yok |
| P15 | Toplam süre | **CEVAPLANDI [DOĞRULANDI]** | Merkez içi yaklaşık 1 saat (1–2 saat); SGK'lı ve SGK'sız hasta için aynı. Hastane süresi işletmenin kontrolünde değil. Aksine durum yoksa aynı gün kullanım |

| ID | Hasta süreciyle ilgili açık kalan soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q5.1 | Sitede "ücretsiz deneme" ifadesi nasıl kullanılsın? | HIGH | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Kanonik ifade: "Cihazı satın alarak 7 güne kadar deneme; uygun bulunmaması halinde ücret iadesi." "Ücretsiz deneme" ifadesi kullanılmaz; yalnızca gerçekten farklı bir hizmeti ifade ediyorsa kullanılabilir |
| Q5.2 | Kulak içi cihazlarda 7 günlük deneme ve iade akışı nasıl işliyor? | HIGH | F4 | **CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Kulak içi cihazlar eve verilen 7 günlük deneme kapsamına girmez; merkezde demo/deneme yapılabilir. İki deneme ayrı kayıt. Kulak içi cihazlarda iade süreci işletilmiyor (P14) |
| Q5.3 | Marka sayısı: COMPANY.md'deki 18 markanın dışında marka var mı? | MEDIUM | F5 | **CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Satılan marka sayısı 18; başka satılan marka yok. "Yaklaşık 20 marka" ifadesi kullanılmaz. 18 markalık liste korunur |
| Q5.4 | İade/cayma uygulamasının hukuki değerlendirmesi (tüketici hukuku, KVKK) | MEDIUM | Ayrı audit | [VERİ BEKLENİYOR] |

## 6. Ekip ve Uzmanlık → BUSINESS_SOT §4
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q6.1 | Merkezde kimler çalışıyor? (ad soyad, unvan: odyolog / odyometrist / teknisyen / danışman, rol) | HIGH | F4 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Odym. Erdinç Kılıç (işletme sahibi) · Od. Sunay Özgür · Teknik servis personeli Birsen Şahin (SERVICE_SOT §1.1, BUSINESS_SOT §4). **Açık kalan:** Bu üç kişi dışında çalışan var mı; yayın rızası [KULLANICIDAN BİLGİ GEREKLİ] |
| Q6.2 | Her kişinin eğitimi (okul, bölüm, yıl), sertifikaları ve deneyim yılı | HIGH | F4 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Erdinç Kılıç: **Odyometri mezunu**. Sunay Özgür: **Odyoloji mezunu**, yaklaşık 28 yıl. Birsen Şahin: yaklaşık 12 yıl. Erdinç Kılıç: 2009'dan beri organizasyonda; işitme sektöründe profesyonel deneyimi yaklaşık 6 yıl (farklı kavramlar; "2009'dan beri işitme sektöründe" ifadesi kullanılmaz). **Açık kalan:** Okul ve mezuniyet yılları [KULLANICIDAN BİLGİ GEREKLİ] |
| Q6.3 | Odyolog yetkinliği, odyometrist yetkinliği ve bilirkişi belgesi kimde? | MEDIUM | F4 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Bilirkişilik sertifikası: Erdinç Kılıç. Eğitimler: Erdinç Odyometri, Sunay Odyoloji. **Açık kalan:** Sertifikanın adı, kurumu ve yılı [KULLANICIDAN BİLGİ GEREKLİ] |
| Q6.4 | Üretici eğitimleri veya sertifikaları | LOW | F4 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Üç kişinin de üretici eğitimleri var. **Açık kalan:** Eğitimlerin ayrıntısı [KULLANICIDAN BİLGİ GEREKLİ] |
| Q6.5 | Rehber içeriklerini kim inceleyip onaylayacak ("İnceleyen uzman")? | HIGH | F5 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Erdinç Kılıç |
| Q6.6 | Konuşulan diller | LOW | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Erdinç Kılıç: İngilizce. Sunay Özgür: İngilizce, Almanca, Rusça |
| Q6.7 | Kamuya açık **paylaşılmasını istemediğiniz** ekip bilgileri neler? | HIGH | F1 | |

## 7. Cihaz Markaları ve Ürünler → PRODUCT_SOT
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q7.1 | 18 markanın her biri için: satılıyor mu / demo var mı / servis veriliyor mu / hâlâ çalışılıyor mu / ilişki türü nedir (yetkili bayi, satıcı, distribütörden alım) ve belgesi var mı? *(PRODUCT_SOT §1 tablosunu doldurabilirsiniz.)* | HIGH | F5 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** 18 markanın hepsi satılıyor ve hepsinde teknik servis var. **Açık kalan:** Marka bazında demo [KULLANICIDAN BİLGİ GEREKLİ]. İlişki türü (yetkili bayi vb.) [DOĞRULAMA GEREKLİ], kamuya açık iddia olarak kullanılmaz |
| Q7.2 | En çok çalıştığınız ve stokta bulunan markalar hangileri? | MEDIUM | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** En sık kullanılanlar: NuEar, Oticon, Phonak, Signia |
| Q7.3 | Starkey ile çalışıyor musunuz? NuEar mı, "Starkey NuEar" mı? | MEDIUM | F5 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Kullanıcıya göre Starkey ana markalardan biri; NuEar ile Starkey teknolojisi arasında ilişki var. Satılan marka sayısı 18 olarak kalır. **Açık kalan:** Hukuki/kurumsal ilişki ve sitedeki adlandırma [DOĞRULAMA GEREKLİ] |
| Q7.4 | Hangi cihaz tiplerini satıyorsunuz? (RIC, kulak arkası, kulak içi, CIC, şarjlı, pilli) Hangi segmentler? | MEDIUM | F5 | |
| Q7.5 | Marka sayfalarındaki üretici bilgilerini kim onaylayacak? Üretici fotoğraflarını kullanma izniniz var mı? | MEDIUM | F5 | |
| Q7.6 | Çalışmadığınız ama sık sorulan markalar hangileri? Sorulduğunda ne cevap veriyorsunuz? | LOW | F5 | |

## 8. SGK → SERVICE_SOT §3
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q8.1 | Güncel SGK işitme cihazı ödeme tutarları ve pil yardımı nedir? Resmî kaynak linkiniz var mı? (Sitede 26 Ocak 2026 tarihli tutarlar var.) | **BLOCKER** | F2 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** SGK bilgileri [TIME-SENSITIVE] ve [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] olarak tutuluyor. **Açık kalan:** Güncel tutarlar ve pil desteği verilmedi; resmî kaynak doğrulaması gerekli. Kullanıcının verdiği Danıştay kaynağı sonraki doğrulamada kullanılacak |
| Q8.2 | Rapor ve reçete süreci: hangi branş, hangi testler, randevu nasıl alınıyor? | HIGH | F4 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Senaryo A/B (SERVICE_SOT §2.9). Kurul: 3 KBB hekiminin onayı. "İşitme testi yeterli" (kullanıcı ifadesi). Hepsi [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ]. **Açık kalan:** Resmî prosedür ayrıntısı |
| Q8.3 | Darıca, Gebze ve Çayırova'dan gelen danışanlar raporu genelde hangi hastanelerden alıyor? (Genel bilgi; kişisel veri yok.) | HIGH | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Genellikle Darıca Farabi Devlet Hastanesi, Gebze Fatih Devlet Hastanesi, Tuzla Devlet Hastanesi [TIME-SENSITIVE] [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ] |
| Q8.4 | SGK işlemlerinin hangileri merkezde yapılıyor (e-reçete, MEDULA vb.)? Hangileri hastanede? | HIGH | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** SGK işlemleri merkez tarafından yürütülüyor. Hasta işitme testi, rapor ve reçete ile geliyor |
| Q8.5 | Gerekli belgelerin güncel listesi | HIGH | F4 | |
| Q8.6 | Katkı payı ve fark ücreti, fiyat verilmeden nasıl anlatılsın? | HIGH | F5 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Destek tablosu merkezde gösteriliyor ve sözlü açıklanıyor; hastanın ödeyeceği kalan tutar açıklanıyor. **Açık kalan:** Sitede nasıl anlatılacağı [KULLANICIDAN BİLGİ GEREKLİ] |
| Q8.7 | Yenileme süresi; çocuk, emekli, memur ve özel sigorta farkları | MEDIUM | F5 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Yenileme: 5 yıl (kullanıcı bilgisi) [TIME-SENSITIVE] [WEB / RESMİ KAYNAK DOĞRULAMASI GEREKLİ]. **Açık kalan:** Grup farkları |
| Q8.8 | Rapordan cihaz teslimine ortalama süre | MEDIUM | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** 1–3 gün; çoğunlukla aynı gün [TIME-SENSITIVE] |

## 9. Teknik Servis → SERVICE_SOT §4
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q9.1 | Hangi markalara servis veriyorsunuz? Başka yerden alınmış cihazı kabul ediyor musunuz? | HIGH | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Satılan 18 markanın tamamında teknik servis var. Kullanıcı beyanı: Türkiye'de satılan işitme cihazlarının tamamına teknik servis sağlanabiliyor (üstünlük iddiasına dönüştürülmez) |
| Q9.2 | Hangi işlemler merkezde yapılıyor, hangileri üreticiye gönderiliyor? Ortalama süreler ne kadar? | HIGH | F4 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Teknik servis teslimi 3 gün; onarım 1–3 gün; garanti 1–5 gün. Garanti cihazları gerektiğinde dış servise gönderiliyor. **Açık kalan:** Merkezde yapılan onarımların listesi [KULLANICIDAN BİLGİ GEREKLİ] |
| Q9.3 | Garanti dışı işlemlerde ücretlendirme nasıl? Ön inceleme ücretli mi? | MEDIUM | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Garanti kapsamı dışındaki kullanıcı hataları ayrıca değerlendiriliyor ("duruma göre"). Tutarlar kayıtlı değil [TIME-SENSITIVE] |
| Q9.4 | Onarım süresince yedek cihaz veriliyor mu? Ücretli mi? | HIGH | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Onarım sürecinde yedek cihaz sağlanıyor; yedek/geçici cihaz ücretsiz |
| Q9.5 | Hangi fitting yazılımlarını ve teknik altyapıyı kullanıyorsunuz? | MEDIUM | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Noah (fitting/programlama), İŞİTSOFT CRM (takip) |
| Q9.6 | En sık gelen arızalar ve danışana verdiğiniz ilk öneriler | HIGH | F5 | |

## 10. Fiyat / Kampanya → PRODUCT_SOT §4–5
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q10.1 | Ana sayfadaki "**50 TL'den başlayan pil**" bilgisi güncel mi? Kalsın mı, kaldırılsın mı? | HIGH | F2 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Güncel kampanya: pil 50 TL [TIME-SENSITIVE]. Kampanya bilgisi olarak tutulur; evergreen içerik veya schema'ya alınmaz |
| Q10.2 | Telefonda fiyat sorulduğunda tam olarak ne cevap veriyorsunuz? | HIGH | F5 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** İç bilgi: işitme cihazında başlangıç fiyatı yaklaşık 20.000 TL [TIME-SENSITIVE]. **Açık kalan:** Telefonda verilen cevabın metni; sitede cihaz fiyatı yayınlanıp yayınlanmayacağı **henüz kararlaştırılmadı** [KULLANICIDAN BİLGİ GEREKLİ] |
| Q10.3 | Dönemsel kampanya veya indirim yapıyor musunuz? "Kampanyalar" sayfası kalsın mı? | MEDIUM | F5 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Güncel kampanya: pil 50 TL. **Açık kalan:** Diğer dönemsel kampanyalar; Kampanyalar sayfasının durumu [KULLANICIDAN BİLGİ GEREKLİ] |
| Q10.4 | Taksit seçenekleri | LOW | F5 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** 9 aya kadar taksit [TIME-SENSITIVE] |
| Q10.5 | Hangi pil markalarını ve aksesuarları satıyorsunuz? | LOW | F5 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Ürün türleri: H23, H30, H33–H36. Pil markaları: Duracell, Varta, Rayovac. Koklear implant pili: Power One, Rayovac, Biyotron [TIME-SENSITIVE] |

## 11. Darıca Yerel Bilgiler → LOCAL_SOT §4
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q11.1 | Danışanlar Darıca'nın en çok hangi mahallelerinden geliyor? | HIGH | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Fevziçakmak, Abdi İpekçi, Bağlarbaşı, Kazımkarabekir |
| Q11.2 | Darıcalı danışanların en sık sorduğu 5–10 soru | HIGH | F4 | |
| Q11.3 | Yerel kurum, dernek, huzurevi veya belediyeyle ilişkiler ya da gerçek etkinlikler (tarih, yer, varsa fotoğraf) | MEDIUM | F4 | |
| Q11.4 | Yerel basında veya belediye sitesinde hakkınızda haber var mı? (link) | LOW | F4 | |
| Q11.5 | Evde hizmet ve teslimi hangi mesafeye kadar yapıyorsunuz? | MEDIUM | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Evde hizmet: Kocaeli'nin tamamı ve İstanbul Anadolu Yakası'nın tüm ilçeleri |

## 12. Gebze → LOCAL_SOT §5
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q12.1 | Gebze'den gelen danışanların kabaca oranı ve mahalleleri | MEDIUM | F6 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Gebze müşteri payı yaklaşık %20. **Açık kalan:** Mahalleler [KULLANICIDAN BİLGİ GEREKLİ] |
| Q12.2 | Gebze'den merkeze ulaşım (araçla süre, güzergâh, hatlar) | MEDIUM | F6 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Toplu taşıma hatları 502, 440, 510, 515 [TIME-SENSITIVE]. **Açık kalan:** Araçla süre, güzergâh |
| Q12.3 | Gebze'ye özel verdiğiniz bir hizmet var mı? (evde hizmet, teslim) | MEDIUM | F2 / F6 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Gebze evde hizmet alanı içinde (Kocaeli'nin tamamı) |
| Q12.4 | Gebze'ye özgü, gerçekten gözlediğiniz bir ihtiyaç var mı? | LOW | F6 | |
| Q12.5 | Gebzeli danışanların gerçek soruları | MEDIUM | F6 | |

## 13. Çayırova → LOCAL_SOT §6
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q13.1 | Çayırova'dan gelen danışanların kabaca oranı ve mahalleleri | MEDIUM | F7 | [VERİ BEKLENİYOR]: Gebze verisi Çayırova'ya kopyalanmaz |
| Q13.2 | Çayırova'dan merkeze ulaşım | MEDIUM | F7 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Toplu taşıma hattı 550 [TIME-SENSITIVE]. **Açık kalan:** Araçla süre, güzergâh |
| Q13.3 | Çayırova'ya özel verdiğiniz bir hizmet var mı? | MEDIUM | F2 / F7 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Çayırova evde hizmet alanı içinde (Kocaeli'nin tamamı) |
| Q13.4 | Çayırova'ya özgü, gerçekten gözlediğiniz bir ihtiyaç var mı? | LOW | F7 | [VERİ BEKLENİYOR] |
| Q13.5 | Çayırovalı danışanların gerçek soruları | MEDIUM | F7 | [VERİ BEKLENİYOR] |
| Q13.6 | Gebze ve Çayırova dışında gerçekten danışan gelen yerler var mı? (Dilovası, Tuzla, Pendik, İzmit vb.) | LOW | F8 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Erişim hatları: Beylikbağı 415/425, Dilovası 410, Mutlukent 510. SGK'da Tuzla Devlet Hastanesi de kullanılıyor. Evde hizmet İstanbul Anadolu Yakası'nı kapsıyor. **Açık kalan:** Danışan payları |

## 14. Google Business Profile → GOOGLE_SOT
> GBP'nin mevcut olduğu biliniyor. Burada erişim veya şifre **istenmiyor**.

| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q14.1 | GBP'yi kim yönetiyor? (kişi veya rol; giriş bilgisi yazmayın) | MEDIUM | F3 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Erdinç Kılıç (yalnızca kişi bilgisi; giriş bilgisi yok) |
| Q14.2 | Haritadaki yer adı "**Darıca Avrasia İşitme Cihazları**" olarak görünüyor ("Avrasia" yazımı). Bunu biliyor muydunuz? Düzeltilmesini ister misiniz? | HIGH | F3 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Maps'te görünen ad "Darıca Avrasia İşitme Cihazları". Resmî GBP/NAP audit kapsamında incelenecek; hemen değiştirme kararı verilmeyecek |
| Q14.3 | Aynı işletme için eski veya ikinci bir GBP kaydı var mı? (eski adres, farklı isim) | MEDIUM | F3 | |

## 15. GA4 → GOOGLE_SOT
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q15.1 | GA4 mülkünü kim yönetiyor? Raporlara bakıyor musunuz? | MEDIUM | F3 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** GA4 mevcut. **Açık kalan:** Yönetici ve rapor kullanımı [KULLANICIDAN BİLGİ GEREKLİ] |

## 16. GTM → GOOGLE_SOT
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q16.1 | GTM hesabını kim yönetiyor? Eski container (`GTM-NRWFGX8D`) silinebilir mi? | LOW | F3 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** GTM mevcut. **Açık kalan:** Yönetici; eski container kararı [KULLANICIDAN BİLGİ GEREKLİ] |

## 17. Search Console → GOOGLE_SOT
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q17.1 | Search Console kurulu mu, biliyor musunuz? Kim yönetiyor? | MEDIUM | F3 | |
| Q17.2 | İleride son 3–6 ayın sorgu raporunu dışa aktarıp paylaşabilir misiniz? | HIGH | F1 / F3 | |

## 18. Google Ads → GOOGLE_SOT
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q18.1 | Google Ads şu anda aktif mi? Kim yönetiyor? (ajans / kendiniz) | MEDIUM | F3 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Google Ads hesabı mevcut; şu anda aktif reklam yok. **Açık kalan:** Yönetici [KULLANICIDAN BİLGİ GEREKLİ] |
| Q18.2 | Reklamlar hangi bölgeyi ve hangi hizmetleri hedefliyor? Aylık bütçe aralığı nedir? (isteğe bağlı) | LOW | F3 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Şu anda aktif reklam yok (geçerli değil) |
| Q18.3 | Meta (Facebook/Instagram) reklamı veya pikseli kullanıyor musunuz? | LOW | F3 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Meta Pixel şu anda yok; ileride değerlendirilebilir |

## 19. Sosyal Medya → BUSINESS_SOT §3
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q19.1 | Facebook (`daricaisitmecihazi`), Instagram (`avrasyaisitme`) ve YouTube (`@EniyiCihaz`) hesapları aktif mi? | LOW | F3 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Aktif hesaplar: Instagram, Facebook, TikTok, YouTube |
| Q19.2 | YouTube ve Facebook adlarının yeni markaya (Avrasya İşitme Cihazları) göre değişmesi düşünülüyor mu? | LOW | F3 | |
| Q19.3 | Başka sosyal hesap var mı? (TikTok, LinkedIn vb.) | LOW | F3 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** TikTok hesabı var. **Açık kalan:** TikTok URL'si [KULLANICIDAN BİLGİ GEREKLİ] |

## 20. Telefon / WhatsApp / E-posta → CONVERSION_SOT §1, BUSINESS_SOT §3
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q20.1 | 0543 ve 0262 numaraları footer ve İletişim'de hangi etiketle görünsün? (ör. "Ofis mobil", "Ofis sabit") | MEDIUM | F3 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** 0543 386 63 60: ofis mobil. 0262 656 32 77: ofis sabit. 0533 773 31 99: ana telefon ve WhatsApp |
| Q20.2 | Hangi numara hangi saatlerde ve hangi iş için aranmalı? | MEDIUM | F3 | |
| Q20.3 | WhatsApp Business mı kullanılıyor? Mesai dışında yanıt veriliyor mu? | MEDIUM | F3 | |
| Q20.4 | Birincil e-posta hangisi: eniyicihaz@gmail.com mı, avrasyaisitme@gmail.com mı? İkisi de aktif mi? | HIGH | F3 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** **eniyicihaz@gmail.com** hem birincil e-posta hem form e-postası. avrasyaisitme@gmail.com birincil değil [ESKİ / GEÇERSİZ] |
| Q20.5 | Başka alan adınız var mı? (ör. avrasyaisitme.com) | LOW | F3 | |

## 21. Conversion Hedefleri → CONVERSION_SOT §5
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q21.1 | Ölçülmesi en önemli 3 sonuç hangisi? (telefon, WhatsApp, yol tarifi, ücretsiz test talebi, randevu) | HIGH | F3 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** 1) Telefon, 2) WhatsApp, 3) İşitme cihazı satışı, 4) Fiziksel merkeze ziyaret |
| Q21.2 | Aylık yaklaşık telefon ve WhatsApp talebi ne kadar? (kabaca) | MEDIUM | F3 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Aylık fiziksel talep yaklaşık 4–15 (değişken) [TIME-SENSITIVE] |
| Q21.3 | Talepler genelde nereden geliyor? (site, Google Haritalar, Instagram, tavsiye) | MEDIUM | F3 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Kaynaklar: tabela, tavsiye, Google. **Açık kalan:** Sitenin ve Instagram'ın payı; Google içinde arama ve Haritalar ayrımı [KULLANICIDAN BİLGİ GEREKLİ] |
| Q21.4 | İleride form gelirse talepler nereye düşsün? Kim takip etsin? | MEDIUM | F5 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** eniyicihaz@gmail.com |

## 22. Müşteri Profilleri → BUSINESS_SOT §9
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q22.1 | En sık gelen 3–5 danışan tipi (ör. "yakınıyla gelen 70+", "SGK raporuyla gelen emekli") | HIGH | F1 / F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Ana yaş grubu 50+. Ana problem ifadesi: "Duyuyorum ama anlamıyorum." |
| Q22.2 | Cihaz almanın en sık nedenleri ve en büyük tereddütler (görünürlük, fiyat, alışma vb.) | HIGH | F5 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Ana endişe: fiyat/performans. **Açık kalan:** Diğer tereddütler [KULLANICIDAN BİLGİ GEREKLİ] |
| Q22.3 | Kararı genelde kim veriyor? Danışanlar yakınlarıyla mı geliyor? | MEDIUM | F4 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Kararı işitme cihazı kullanıcısı veriyor |

## 23. Sık Sorular → BUSINESS_SOT §10
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q23.1 | Telefonda ve WhatsApp'ta en sık sorulan 15–20 soru (sorulduğu gibi yazın) | **HIGH** | F4 / F5 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** 20+ gerçek SSS konusu verildi (BUSINESS_SOT §10). **Açık kalan:** Soruların kullanıcı ağzından tam metinlerinin SoT'a aktarımı [KULLANICIDAN BİLGİ GEREKLİ] |
| Q23.2 | Fiyat, SGK, test ve cihaz seçimi konularında 3–5'er örnek soru | HIGH | F5 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Konu listesinde fiyat, en iyi marka, SGK, fiyat farkları var. Tam metinler: Q23.1 |
| Q23.3 | Kullanım sorunlarıyla ilgili sorular (TV, telefon, gürültülü ortam, ötme, şarj) | HIGH | F5 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Konu listesinde uygulama/telefon, ötme, kulaktan düşme, konuşmayı anlamama, basınç hissi, filtre/tıkanma var. Tam metinler: Q23.1 |

## 24. Rakipler → BUSINESS_SOT §7
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q24.1 | Bildiğiniz yakın rakipler (yalnızca biliyorsanız) | LOW | F4 | |
| Q24.2 | Sizi ayıran, **kanıtlanabilir** 3–5 özellik ve güçlü olduğunuz hizmetler | HIGH | F4 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Olgu olarak kullanılabilecek unsurlar BUSINESS_SOT §7'de (40 hizmet, deneme yapısı, yedek cihaz, 18 markada servis, evde hizmet, Noah/İŞİTSOFT). Üstünlük iddiasına dönüştürülmez |
| Q24.3 | Danışanlarınız sizi tavsiye ederken en sık ne söylüyor? | MEDIUM | F4 | |

## 25. E-E-A-T (belge ve güven) → BUSINESS_SOT §1, §4
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q25.1 | Sitede gösterilebilecek gerçek belgeler hangileri? (SGK sözleşmesi, diplomalar, yetki belgeleri) | MEDIUM | F4 | |
| Q25.2 | 2009'dan bugüne kadar hizmet verilen danışan sayısı gibi bir rakam kayıtla doğrulanabilir mi? (Doğrulanamıyorsa hiç yazılmaz.) | LOW | F4 | |
| Q25.3 | Bilinçli olarak yapmadığınız uygulamalar neler? (ör. baskılı satış, reçetesiz uzaktan satış) | LOW | F4 | |

## 26. KVKK → BUSINESS_SOT §6
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q26.1 | KVKK kaynak belge setinin tamamı sizde mi? (04/05/06/14 dışındaki numaralı belgeler) Sitede yayımlanması gereken başka belge var mı? | MEDIUM | F5 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** KVKK belgeleri büyük ölçüde mevcut. **Açık kalan:** Eksik belge var mı [KULLANICIDAN BİLGİ GEREKLİ]. KVKK metinlerindeki e-posta güncellenmeli |
| Q26.2 | Form gelirse aydınlatma ve açık rıza metnini kim hazırlayacak veya onaylayacak? Veriler ne kadar saklanacak? | **BLOCKER (form)** | F5 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Form hedef e-postası eniyicihaz@gmail.com. **Açık kalan:** Aydınlatma/açık rıza metni ve saklama süresi [KULLANICIDAN BİLGİ GEREKLİ] |
| Q26.3 | Fotoğraf, video ve yorum kullanım izinlerini nasıl alıyorsunuz? | MEDIUM | F4 | |
| Q26.4 | Çerez onayı ne kadar geçerli olsun? (öneri: 12 ay) | LOW | F3 | |

## 27. Görsel / Video Varlıkları → ASSET_SOT
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q27.1 | Mevcut 7 gerçek merkez fotoğrafının orijinal, yüksek çözünürlüklü dosyaları sizde var mı? Ne zaman çekildi? | MEDIUM | F3 | |
| Q27.2 | Ek fotoğraf çekilebilir mi? (dış cephe, servis tezgâhı, kalıp atölyesi, test anı, ekip; rızalı) | HIGH | F4 | |
| Q27.3 | Kullanılabilir video veya sosyal medya görselleri var mı? | LOW | F5 | |
| Q27.4 | Sitede kullanılmasını **istemediğiniz** görseller var mı? | MEDIUM | F3 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Kullanılmasını istemediğiniz fotoğraf yok. Uygunluk teknik/UX/SEO audit'inde değerlendirilir |
| Q27.5 | Hero slaytlarındaki görseller gerçek fotoğraf mı, tasarım mı? (`isitme-testi-darica`, `kocaeli-isitme-cihazlari`, `darica-gebze-cayirova-hizmet-bolgesi`, `isitme-cihazi-turleri`, `isitme-cihazi-markalari`, `isitme-cihazi-pili-fiyati`) | LOW | F3 | |
| Q27.6 | Logo varyantları sağlanabilir mi? (tagline'sız yatay, koyu zemin, SVG, yalnızca simgeden ikon) | MEDIUM | F3 | |
| Q27.7 | Favicon için kare logodaki simgenin kırpılmasına onay veriyor musunuz, yoksa ayrı bir ikon mu sağlanacak? | LOW | F3 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Favicon için kare logodan ikon türetilebilir (asset fazında; Faz 0'da yapılmaz) |

## 28. Tasarım Tercihleri → BRAND_SOT §6–7
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q28.1 | Beğendiğiniz ve beğenmediğiniz 2–3 web sitesi | MEDIUM | F3 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Referans: phonak.com, hearingtracker.com (görsel tasarım kopyalanmaz). **Açık kalan:** Beğenilmeyen siteler |
| Q28.2 | Ton sıralaması: modern, premium, kurumsal, sıcak, sağlık odaklı | MEDIUM | F3 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Premium; modern ve premium görünüm |
| Q28.3 | Site renkleri logo renklerine (lacivert/mavi/turkuaz/gri) geçsin mi? Kurumsal renk kodları veya marka kılavuzu var mı? | MEDIUM | F3 | |
| Q28.4 | Animasyon tercihi: az, orta, yok | LOW | F3 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Gerektiğinde kontrollü animasyon |
| Q28.5 | Kesinlikle istemediğiniz tasarım biçimleri | MEDIUM | F3 | |
| Q28.6 | Mobilde ilk 3 eylem ne olmalı? (öneri: Ara, WhatsApp, Yol Tarifi) | MEDIUM | F3 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Ara, Yol tarifi, Mesaj |
| Q28.7 | Sitede kullanılmasını istemediğiniz ek ifadeler var mı? | MEDIUM | F1 | |

## 29. İşletme Hedefleri → BUSINESS_SOT §8
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q29.1 | Web sitesinden asıl beklentiniz nedir? (tek cümle) | **HIGH** | F1 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Temel hedefler: telefon, WhatsApp, işitme cihazı satışı, fiziksel merkeze ziyaret |
| Q29.2 | Aylık yaklaşık hedefler: arama, WhatsApp, randevu, ücretsiz test | HIGH | F1 / F3 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** 1 yıl: ayda 20–30 fiziksel hasta (minimum 20). Mevcut aylık talep yaklaşık 4–15 |
| Q29.3 | Büyütmek istediğiniz hizmetler | HIGH | F1 | |
| Q29.4 | 3 aylık, 1 yıllık ve 3 yıllık hedefler | HIGH | F1 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** 3 ay: telefon ve mesajları artırmak. 1 yıl: ayda 20–30 fiziksel hasta (minimum 20). 3 yıl: Kocaeli ve hedeflenen hizmet alanlarında arama sonuçlarında çok güçlü görünürlük |

## 30. Bilgi Merkezi Konu Havuzu → BUSINESS_SOT §11
| ID | Soru | Önem | Faz | Cevap |
|---|---|---|---|---|
| Q30.1 | Danışanlara en sık anlattığınız 10 konu | HIGH | F5 | **KISMEN CEVAPLANDI [DOĞRULANDI] (2026-10-07):** Bilgi Merkezi konu kümeleri verildi (BUSINESS_SOT §11). **Açık kalan:** Danışanlara en sık anlatılan konuların serbest metni |
| Q30.2 | Bakım, temizlik ve günlük kullanım için verdiğiniz pratik öneriler (TV, telefon, gürültülü ortam) | HIGH | F5 | |
| Q30.3 | En çok yanlış bilinen konular (ör. "cihaz kulağı tembelleştirir") | MEDIUM | F5 | |
| Q30.4 | Güvendiğiniz resmî veya kurumsal kaynak siteler | MEDIUM | F5 | **CEVAPLANDI [DOĞRULANDI] (İşletme sahibi, 2026-10-07):** Aday kaynaklar: SGK / SUT, WHO, EHIMA, EuroTrak, MarkeTrak |

---

## Öncelik Özeti (güncel, 2026-10-07 son aktarımdan sonra)
- **Kapanan BLOCKER:** Q4.2 (ücretsiz hizmetler). Q26.2'nin form e-postası kısmı kapandı.
- **Açık BLOCKER (yalnızca ilgili fazı durdurur):**
  - Q4.1: listede karşılığı olmayan site sayfaları (F2)
  - Q8.1: SGK güncel tutarları ve resmî kaynak doğrulaması (F2)
  - Q26.2: form aydınlatma/rıza ve saklama süresi (form fazı)
- **[DOĞRULAMA GEREKLİ] kalanlar:**
  - Yetkili bayi iddiası
  - NuEar–Starkey ilişkisi ve adlandırması
  - Sitede cihaz fiyatı yayınlanıp yayınlanmayacağı (henüz kararlaştırılmadı)
  - "Farabi Ağız ve Diş" tarifinin kullanımı
- **Faz 1 için yararlı açık sorular:** Q1.1, Q1.6, Q1.7, Q6.7, Q28.7
- **Faz 4 (Darıca) için açık sorular:** Q2.1, Q3.2 ayrıntısı, Q4.4, Q11.2–Q11.4, Q23.1 tam metinler
