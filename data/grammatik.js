// ===== Grammatik-Lernziele B1 (sehr ausführlich, DE + TR) =====
window.GRAMMATIK = [
  {
    id: "perfekt",
    emoji: "⏮️",
    title: "Perfekt & Präteritum",
    titleTr: "Geçmiş Zaman",
    de: "Das Perfekt benutzt du beim SPRECHEN und in persönlichen Briefen über die Vergangenheit: „Ich habe gestern gearbeitet.“ Das Präteritum benutzt du vor allem bei „sein“, „haben“ und den Modalverben („ich war, ich hatte, ich musste“) sowie in Zeitungstexten. Bildung Perfekt: haben/sein + Partizip II. Mit SEIN bei Bewegung (gehen, fahren, fliegen, kommen) und Zustandsänderung (aufstehen, einschlafen, sterben) sowie bei: bleiben, sein, passieren.",
    tr: "Perfekt'i KONUŞURKEN ve kişisel mektuplarda geçmiş için kullanırsın: „Ich habe gestern gearbeitet.“ (Dün çalıştım.) Präteritum'u özellikle „sein“, „haben“ ve modal fiillerde („ich war, ich hatte, ich musste“) ve gazete metinlerinde kullanırsın. Perfekt yapılışı: haben/sein + Partizip II. SEIN ile: hareket fiilleri (gehen, fahren, fliegen, kommen), durum değişikliği (aufstehen, einschlafen, sterben) ve bleiben, sein, passieren.",
    table: {
      head: ["Infinitiv", "Perfekt", "Präteritum", "Türkçe"],
      rows: [
        ["machen", "hat gemacht", "machte", "yapmak"],
        ["arbeiten", "hat gearbeitet", "arbeitete", "çalışmak"],
        ["gehen", "ist gegangen", "ging", "gitmek"],
        ["fahren", "ist gefahren", "fuhr", "(araçla) gitmek"],
        ["essen", "hat gegessen", "aß", "yemek"],
        ["nehmen", "hat genommen", "nahm", "almak"],
        ["bleiben", "ist geblieben", "blieb", "kalmak"],
        ["anfangen", "hat angefangen", "fing an", "başlamak"],
        ["verstehen", "hat verstanden", "verstand", "anlamak"],
        ["studieren", "hat studiert", "studierte", "üniversitede okumak"]
      ]
    },
    fehler: {
      de: "Typische Fehler: ✗ „Ich bin gearbeitet“ → ✓ „Ich habe gearbeitet“. ✗ „Ich habe nach Berlin gefahren“ → ✓ „Ich bin nach Berlin gefahren“. Verben auf -ieren ohne ge-: ✓ „hat telefoniert“ (nicht „getelefoniert“). Nicht trennbare Verben (be-, ver-, er-) ohne ge-: ✓ „hat verstanden“.",
      tr: "Tipik hatalar: ✗ „Ich bin gearbeitet“ → ✓ „Ich habe gearbeitet“. ✗ „Ich habe nach Berlin gefahren“ → ✓ „Ich bin nach Berlin gefahren“ (hareket → sein). -ieren ile biten fiiller ge- almaz: ✓ „hat telefoniert“. Ayrılmayan fiiller (be-, ver-, er-) ge- almaz: ✓ „hat verstanden“."
    },
    quiz: [
      { q: "Gestern ___ ich mit meiner Mutter telefoniert.", options: ["habe", "bin", "hatte"], answer: 0, explain: { de: "„telefonieren“ → Perfekt mit „haben“.", tr: "„telefonieren“ → Perfekt „haben“ ile." } },
      { q: "Wir ___ am Sonntag zu Hause geblieben.", options: ["haben", "sind", "waren"], answer: 1, explain: { de: "„bleiben“ bildet das Perfekt immer mit „sein“.", tr: "„bleiben“ Perfekt'i her zaman „sein“ ile yapar." } },
      { q: "Als Kind ___ ich keine Angst vor Hunden.", options: ["habe", "hatte", "bin"], answer: 1, explain: { de: "Bei „haben“ benutzt man meist das Präteritum: „hatte“.", tr: "„haben“ fiilinde genelde Präteritum kullanılır: „hatte“." } }
    ]
  },
  {
    id: "nebensaetze",
    emoji: "🧷",
    title: "Nebensätze (dass, weil, wenn, ob)",
    titleTr: "Yan Cümleler",
    de: "In einem Nebensatz wandert das konjugierte Verb ans ENDE. Nebensatz-Konnektoren sind z. B.: dass, weil, wenn, als, ob, obwohl, damit, bevor, nachdem, während. Wichtig: Zwischen Hauptsatz und Nebensatz steht IMMER ein Komma. Wenn der Nebensatz zuerst kommt, beginnt der Hauptsatz mit dem Verb: „Weil ich krank bin, BLEIBE ich zu Hause.“ (Verb – Verb in der Mitte!)",
    tr: "Yan cümlede çekimli fiil SONA gider. Yan cümle bağlaçları örn.: dass, weil, wenn, als, ob, obwohl, damit, bevor, nachdem, während. Önemli: Ana cümle ile yan cümle arasına HER ZAMAN virgül konur. Yan cümle önce gelirse ana cümle fiille başlar: „Weil ich krank bin, BLEIBE ich zu Hause.“ (Ortada fiil – fiil yan yana!)",
    table: {
      head: ["Konnektor", "Beispiel", "Türkçe"],
      rows: [
        ["dass", "Ich glaube, dass er Recht hat.", "Haklı olduğuna inanıyorum."],
        ["weil", "Sie lernt, weil sie die Prüfung besteht … bestehen will.", "Sınavı geçmek istediği için çalışıyor."],
        ["wenn", "Wenn es regnet, bleiben wir hier.", "Yağmur yağarsa burada kalırız."],
        ["ob", "Er fragt, ob du morgen Zeit hast.", "Yarın vaktin olup olmadığını soruyor."],
        ["obwohl", "Obwohl es kalt ist, trägt er ein T-Shirt.", "Hava soğuk olmasına rağmen tişört giyiyor."]
      ]
    },
    fehler: {
      de: "Typische Fehler: ✗ „Ich glaube, dass er hat Recht“ → ✓ „…, dass er Recht hat“. Bei trennbaren Verben im Nebensatz: zusammen! ✓ „…, weil er früh aufsteht“. Bei Perfekt im Nebensatz: ✓ „…, weil ich krank gewesen bin“ (konjugiertes Verb ganz am Ende).",
      tr: "Tipik hatalar: ✗ „Ich glaube, dass er hat Recht“ → ✓ „…, dass er Recht hat“. Ayrılabilen fiiller yan cümlede birleşik yazılır: ✓ „…, weil er früh aufsteht“. Yan cümlede Perfekt: ✓ „…, weil ich krank gewesen bin“ (çekimli fiil en sonda)."
    },
    quiz: [
      { q: "Ich hoffe, dass du bald ___.", options: ["kommst", "du kommst", "kommen"], answer: 0, explain: { de: "Verb am Ende des dass-Satzes: „…, dass du bald kommst.“", tr: "dass cümlesinde fiil sonda: „…, dass du bald kommst.“" } },
      { q: "___ ich müde bin, gehe ich noch nicht ins Bett.", options: ["Obwohl", "Weil", "Dass"], answer: 0, explain: { de: "Logik: müde ↔ trotzdem wach → „obwohl“.", tr: "Mantık: yorgun ↔ yine de uyanık → „obwohl“." } },
      { q: "Weißt du, ___ der Supermarkt heute geöffnet hat?", options: ["dass", "ob", "weil"], answer: 1, explain: { de: "Indirekte Ja/Nein-Frage → „ob“.", tr: "Dolaylı evet/hayır sorusu → „ob“." } }
    ]
  },
  {
    id: "relativsaetze",
    emoji: "🔍",
    title: "Relativsätze",
    titleTr: "İlgi Cümleleri",
    de: "Relativsätze geben mehr Informationen über ein Nomen: „Das ist der Mann, DER nebenan wohnt.“ Das Relativpronomen richtet sich in GENUS und NUMERUS nach dem Nomen davor, der KASUS hängt von seiner Funktion im Nebensatz ab. Das Verb steht am Ende. Mit Präposition: Die Präposition steht VOR dem Pronomen: „die Frau, MIT DER ich arbeite“.",
    tr: "İlgi cümleleri bir isim hakkında ek bilgi verir: „Das ist der Mann, DER nebenan wohnt.“ (Yan tarafta oturan adam bu.) İlgi zamiri CİNS ve SAYI olarak önceki isme uyar, HAL (Kasus) ise yan cümledeki görevine bağlıdır. Fiil sonda durur. Edatla: Edat zamirin ÖNÜNE gelir: „die Frau, MIT DER ich arbeite“ (birlikte çalıştığım kadın).",
    table: {
      head: ["", "maskulin", "feminin", "neutral", "Plural"],
      rows: [
        ["Nominativ", "der", "die", "das", "die"],
        ["Akkusativ", "den", "die", "das", "die"],
        ["Dativ", "dem", "der", "dem", "denen"]
      ]
    },
    fehler: {
      de: "Typische Fehler: ✗ „der Film, das ich gesehen habe“ → ✓ „der Film, DEN ich gesehen habe“ (der Film = maskulin, im Nebensatz Akkusativ-Objekt). Nach „alles/etwas/nichts“ benutzt man „was“: „alles, was ich brauche“.",
      tr: "Tipik hatalar: ✗ „der Film, das ich gesehen habe“ → ✓ „der Film, DEN ich gesehen habe“ (der Film = eril, yan cümlede Akkusativ nesne). „alles/etwas/nichts“ sonrasında „was“ kullanılır: „alles, was ich brauche“ (ihtiyacım olan her şey)."
    },
    quiz: [
      { q: "Das ist die Kollegin, ___ mir immer hilft.", options: ["der", "die", "das"], answer: 1, explain: { de: "die Kollegin → feminin, Subjekt im Nebensatz → „die“.", tr: "die Kollegin → dişil, yan cümlede özne → „die“." } },
      { q: "Der Kuchen, ___ du gebacken hast, schmeckt super.", options: ["der", "den", "dem"], answer: 1, explain: { de: "der Kuchen = maskulin; im Nebensatz Akkusativ (du hast IHN gebacken) → „den“.", tr: "der Kuchen = eril; yan cümlede Akkusativ (onu sen pişirdin) → „den“." } },
      { q: "Die Freunde, mit ___ ich Urlaub mache, kommen aus Köln.", options: ["den", "denen", "die"], answer: 1, explain: { de: "„mit“ + Dativ Plural → „denen“.", tr: "„mit“ + Dativ çoğul → „denen“." } }
    ]
  },
  {
    id: "konjunktiv2",
    emoji: "💭",
    title: "Konjunktiv II (würde, hätte, wäre, könnte)",
    titleTr: "Dilek/Şart Kipi",
    de: "Der Konjunktiv II hat drei Hauptfunktionen: 1) HÖFLICHE BITTEN: „Könnten Sie mir helfen?“, „Ich hätte gern…“, „Würden Sie bitte…?“ – super wichtig für Briefe und die mündliche Prüfung! 2) IRREALE WÜNSCHE: „Ich wäre jetzt gern am Meer.“ 3) IRREALE BEDINGUNGEN: „Wenn ich mehr Zeit hätte, würde ich Sport machen.“ Bildung: würde + Infinitiv, außer bei sein (wäre), haben (hätte) und Modalverben (könnte, müsste, sollte, dürfte).",
    tr: "Konjunktiv II'nin üç ana işlevi vardır: 1) KİBAR RİCALAR: „Könnten Sie mir helfen?“ (Bana yardım edebilir miydiniz?), „Ich hätte gern…“ – mektuplar ve sözlü sınav için çok önemli! 2) GERÇEK DIŞI DİLEKLER: „Ich wäre jetzt gern am Meer.“ (Şimdi denizde olsam ne güzel olurdu.) 3) GERÇEK DIŞI KOŞULLAR: „Wenn ich mehr Zeit hätte, würde ich Sport machen.“ (Daha çok vaktim olsaydı spor yapardım.) Yapılış: würde + mastar; ama sein (wäre), haben (hätte) ve modal fiiller (könnte, müsste, sollte, dürfte) kendi formlarını kullanır.",
    table: {
      head: ["Verb", "Konjunktiv II", "Beispiel", "Türkçe"],
      rows: [
        ["sein", "wäre", "Das wäre schön!", "Güzel olurdu!"],
        ["haben", "hätte", "Ich hätte eine Frage.", "Bir sorum olacaktı."],
        ["können", "könnte", "Könnten Sie das wiederholen?", "Tekrar edebilir miydiniz?"],
        ["müssen", "müsste", "Du müsstest mehr üben.", "Daha çok alıştırma yapman gerekirdi."],
        ["sollen", "sollte", "Sie sollten früher schlafen.", "Daha erken uyumalısınız."],
        ["andere Verben", "würde + Inf.", "Ich würde gern mitkommen.", "Seve seve gelirdim."]
      ]
    },
    fehler: {
      de: "Typische Fehler: ✗ „Wenn ich würde Zeit haben“ → ✓ „Wenn ich Zeit HÄTTE“ (bei haben/sein kein würde!). Im wenn-Satz steht das Verb am Ende: „Wenn ich reich wäre, …“",
      tr: "Tipik hatalar: ✗ „Wenn ich würde Zeit haben“ → ✓ „Wenn ich Zeit HÄTTE“ (haben/sein için würde kullanılmaz!). wenn cümlesinde fiil sonda: „Wenn ich reich wäre, …“"
    },
    quiz: [
      { q: "___ Sie mir bitte das Formular schicken?", options: ["Könnten", "Konnten", "Können Sie würden"], answer: 0, explain: { de: "Höfliche Bitte → Konjunktiv II: „Könnten Sie…?“", tr: "Kibar rica → Konjunktiv II: „Könnten Sie…?“" } },
      { q: "Wenn ich du ___, würde ich den Job nehmen.", options: ["bin", "wäre", "würde"], answer: 1, explain: { de: "Irreale Bedingung mit „sein“ → „wäre“.", tr: "Gerçek dışı koşul, „sein“ → „wäre“." } },
      { q: "Ich ___ gern einen Termin vereinbaren.", options: ["würde", "wäre", "hätte"], answer: 0, explain: { de: "„würde + Infinitiv“: höflicher Wunsch.", tr: "„würde + mastar“: kibar istek." } }
    ]
  },
  {
    id: "passiv",
    emoji: "🏭",
    title: "Passiv (Präsens & Präteritum)",
    titleTr: "Edilgen Çatı",
    de: "Das Passiv benutzt du, wenn die HANDLUNG wichtiger ist als die Person: „Das Brot WIRD GEBACKEN.“ (Wer? Unwichtig!) Bildung: werden + Partizip II. Präsens: „wird repariert“, Präteritum: „wurde repariert“, Perfekt: „ist repariert worden“. Mit Modalverb: „Das Auto muss repariert WERDEN.“ Das Passiv kommt oft in Zeitungstexten (Lesen Teil 2!) und in den Sprachbausteinen vor.",
    tr: "Edilgen çatıyı EYLEM kişiden önemli olduğunda kullanırsın: „Das Brot WIRD GEBACKEN.“ (Ekmek pişiriliyor – kim pişiriyor önemli değil!) Yapılış: werden + Partizip II. Şimdiki zaman: „wird repariert“ (tamir ediliyor), geçmiş: „wurde repariert“ (tamir edildi), Perfekt: „ist repariert worden“. Modal fiille: „Das Auto muss repariert WERDEN.“ (Araba tamir edilmeli.) Edilgen çatı gazete metinlerinde (Lesen Teil 2!) ve Sprachbausteine'de sık çıkar.",
    table: {
      head: ["Zeit", "Aktiv", "Passiv", "Türkçe"],
      rows: [
        ["Präsens", "Man baut ein Haus.", "Ein Haus wird gebaut.", "Bir ev inşa ediliyor."],
        ["Präteritum", "Man baute ein Haus.", "Ein Haus wurde gebaut.", "Bir ev inşa edildi."],
        ["mit Modalverb", "Man muss das Haus bauen.", "Das Haus muss gebaut werden.", "Ev inşa edilmeli."]
      ]
    },
    fehler: {
      de: "Typische Fehler: ✗ „Das Haus ist gebaut“ (Zustand) statt ✓ „Das Haus wird gebaut“ (Vorgang). Der „Täter“ steht mit „von“: „Der Brief wurde VON der Chefin geschrieben.“",
      tr: "Tipik hatalar: ✗ „Das Haus ist gebaut“ (durum) yerine ✓ „Das Haus wird gebaut“ (süreç). Eylemi yapan „von“ ile belirtilir: „Der Brief wurde VON der Chefin geschrieben.“ (Mektup müdire tarafından yazıldı.)"
    },
    quiz: [
      { q: "Die Rechnung ___ schon bezahlt.", options: ["wurde", "hat", "ist worden"], answer: 0, explain: { de: "Passiv Präteritum: „wurde bezahlt“.", tr: "Edilgen geçmiş: „wurde bezahlt“ (ödendi)." } },
      { q: "Das Formular muss vollständig ausgefüllt ___.", options: ["werden", "worden", "wird"], answer: 0, explain: { de: "Modalverb + Partizip II + „werden“ am Ende.", tr: "Modal fiil + Partizip II + sonda „werden“." } },
      { q: "In Deutschland ___ viel Brot gegessen.", options: ["wird", "ist", "hat"], answer: 0, explain: { de: "Passiv Präsens: „wird gegessen“.", tr: "Edilgen şimdiki zaman: „wird gegessen“ (yenir)." } }
    ]
  },
  {
    id: "adjektive",
    emoji: "🎨",
    title: "Adjektivdeklination",
    titleTr: "Sıfat Çekimi",
    de: "Vor einem Nomen bekommt das Adjektiv eine Endung. Die Endung hängt vom Artikel ab. Merkhilfe: Nach der/die/das meistens -e oder -en. Nach ein/kein zeigt das Adjektiv das Genus: „ein kleinER Mann, eine kleinE Frau, ein kleinES Kind“. Ohne Artikel übernimmt das Adjektiv die Artikel-Endung: „frischES Brot, mit frischEM Brot“. Im Dativ und im Plural mit Artikel: fast immer -en!",
    tr: "İsimden önce gelen sıfat bir ek alır. Ek, artikele bağlıdır. İpucu: der/die/das'tan sonra çoğunlukla -e veya -en. ein/kein'dan sonra sıfat cinsi gösterir: „ein kleinER Mann, eine kleinE Frau, ein kleinES Kind“. Artikelsiz sıfat, artikelin ekini üstlenir: „frischES Brot, mit frischEM Brot“. Dativ'de ve artikelli çoğulda: neredeyse her zaman -en!",
    table: {
      head: ["", "mit der/die/das", "mit ein/kein", "ohne Artikel"],
      rows: [
        ["Nom. mask.", "der gute Mann", "ein guter Mann", "guter Kaffee"],
        ["Nom. fem.", "die gute Idee", "eine gute Idee", "gute Musik"],
        ["Nom. neutr.", "das gute Buch", "ein gutes Buch", "gutes Essen"],
        ["Akk. mask.", "den guten Mann", "einen guten Mann", "guten Kaffee"],
        ["Dativ (alle)", "dem/der guten …", "einem/einer guten …", "gutem/guter …"],
        ["Plural", "die guten Bücher", "keine guten Bücher", "gute Bücher"]
      ]
    },
    fehler: {
      de: "Typische Fehler: ✗ „ein interessante Buch“ → ✓ „ein interessantES Buch“ (neutral!). ✗ „mit meinem alte Auto“ → ✓ „mit meinem altEN Auto“ (Dativ → -en).",
      tr: "Tipik hatalar: ✗ „ein interessante Buch“ → ✓ „ein interessantES Buch“ (nötr!). ✗ „mit meinem alte Auto“ → ✓ „mit meinem altEN Auto“ (Dativ → -en)."
    },
    quiz: [
      { q: "Ich suche eine ___ Wohnung.", options: ["größere", "größeren", "größerer"], answer: 0, explain: { de: "eine + feminin Akkusativ → -e: „eine größere Wohnung“.", tr: "eine + dişil Akkusativ → -e: „eine größere Wohnung“." } },
      { q: "Er trinkt gern ___ Kaffee.", options: ["schwarzen", "schwarze", "schwarzer"], answer: 0, explain: { de: "Ohne Artikel, maskulin Akkusativ → -en: „schwarzen Kaffee“.", tr: "Artikelsiz, eril Akkusativ → -en: „schwarzen Kaffee“." } },
      { q: "Wir wohnen in einem ___ Haus.", options: ["alten", "altes", "alte"], answer: 0, explain: { de: "in + Dativ → „einem alten Haus“.", tr: "in + Dativ → „einem alten Haus“." } }
    ]
  },
  {
    id: "praepositionen",
    emoji: "📍",
    title: "Präpositionen & Wechselpräpositionen",
    titleTr: "Edatlar",
    de: "Drei Gruppen: 1) IMMER DATIV: aus, bei, mit, nach, seit, von, zu. 2) IMMER AKKUSATIV: durch, für, gegen, ohne, um. 3) WECHSELPRÄPOSITIONEN (an, auf, hinter, in, neben, über, unter, vor, zwischen): WOHIN? (Bewegung/Richtung) → Akkusativ: „Ich hänge das Bild AN DIE Wand.“ WO? (Position) → Dativ: „Das Bild hängt AN DER Wand.“",
    tr: "Üç grup: 1) HER ZAMAN DATIV: aus, bei, mit, nach, seit, von, zu. 2) HER ZAMAN AKKUSATIV: durch, für, gegen, ohne, um. 3) DEĞİŞKEN EDATLAR (an, auf, hinter, in, neben, über, unter, vor, zwischen): NEREYE? (hareket/yön) → Akkusativ: „Ich hänge das Bild AN DIE Wand.“ (Resmi duvara asıyorum.) NEREDE? (konum) → Dativ: „Das Bild hängt AN DER Wand.“ (Resim duvarda asılı.)",
    table: {
      head: ["Frage", "Kasus", "Beispiel", "Türkçe"],
      rows: [
        ["Wohin?", "Akkusativ", "Ich gehe in die Küche.", "Mutfağa gidiyorum."],
        ["Wo?", "Dativ", "Ich bin in der Küche.", "Mutfaktayım."],
        ["Wohin?", "Akkusativ", "Er legt das Handy auf den Tisch.", "Telefonu masaya koyuyor."],
        ["Wo?", "Dativ", "Das Handy liegt auf dem Tisch.", "Telefon masada duruyor."]
      ]
    },
    fehler: {
      de: "Typische Fehler: ✗ „Ich gehe in dem Supermarkt“ → ✓ „in den Supermarkt“ (wohin? → Akk.). Merke Kurzformen: in + das = ins, in + dem = im, an + das = ans, zu + der = zur, zu + dem = zum. Bei Ländern und Städten: „nach“ (nach Berlin, in die Türkei – Ausnahme mit Artikel!).",
      tr: "Tipik hatalar: ✗ „Ich gehe in dem Supermarkt“ → ✓ „in den Supermarkt“ (nereye? → Akk.). Kısaltmalar: in + das = ins, in + dem = im, an + das = ans, zu + der = zur, zu + dem = zum. Ülke ve şehirlerde: „nach“ (nach Berlin; ama artikelli ülkeler: in die Türkei!)."
    },
    quiz: [
      { q: "Ich stelle die Vase ___ Tisch.", options: ["auf den", "auf dem", "auf der"], answer: 0, explain: { de: "Wohin? → Akkusativ: „auf den Tisch“.", tr: "Nereye? → Akkusativ: „auf den Tisch“." } },
      { q: "Wir treffen uns ___ Bahnhof.", options: ["am", "ans", "auf den"], answer: 0, explain: { de: "Wo? → Dativ: „am (an dem) Bahnhof“.", tr: "Nerede? → Dativ: „am Bahnhof“ (garda)." } },
      { q: "Sie fährt jeden Sommer ___ Türkei.", options: ["nach", "in die", "zur"], answer: 1, explain: { de: "Länder mit Artikel → „in die Türkei“.", tr: "Artikelli ülkeler → „in die Türkei“." } }
    ]
  },
  {
    id: "infinitiv",
    emoji: "🔗",
    title: "Infinitiv mit „zu“",
    titleTr: "„zu“lu Mastar",
    de: "Nach bestimmten Ausdrücken steht „zu + Infinitiv“: nach Verben (anfangen, aufhören, versuchen, vergessen, hoffen, vorhaben, sich freuen), nach Nomen (Zeit, Lust, Angst, die Möglichkeit) und nach Adjektiven (wichtig, schwierig, leicht). Beispiel: „Ich habe vergessen, die Tür ZU schließen.“ Bei trennbaren Verben geht „zu“ in die Mitte: „einzukaufen, aufzustehen“. KEIN „zu“ nach Modalverben (ich muss gehen) und nach: sehen, hören, lassen, gehen, bleiben.",
    tr: "Belirli ifadelerden sonra „zu + mastar“ gelir: fiillerden sonra (anfangen, aufhören, versuchen, vergessen, hoffen, vorhaben, sich freuen), isimlerden sonra (Zeit, Lust, Angst, die Möglichkeit) ve sıfatlardan sonra (wichtig, schwierig, leicht). Örnek: „Ich habe vergessen, die Tür ZU schließen.“ (Kapıyı kapatmayı unuttum.) Ayrılabilen fiillerde „zu“ ortaya girer: „einzukaufen, aufzustehen“. Modal fiillerden sonra „zu“ KULLANILMAZ (ich muss gehen); sehen, hören, lassen, gehen, bleiben'dan sonra da kullanılmaz.",
    table: {
      head: ["Auslöser", "Beispiel", "Türkçe"],
      rows: [
        ["Lust haben", "Ich habe Lust, ins Kino zu gehen.", "Sinemaya gitmeye niyetim var."],
        ["versuchen", "Er versucht, pünktlich zu sein.", "Dakik olmaya çalışıyor."],
        ["Es ist wichtig", "Es ist wichtig, jeden Tag zu üben.", "Her gün alıştırma yapmak önemli."],
        ["vorhaben", "Wir haben vor, umzuziehen.", "Taşınmayı planlıyoruz."],
        ["Modalverb (OHNE zu!)", "Ich muss jetzt gehen.", "Şimdi gitmem gerek."]
      ]
    },
    fehler: {
      de: "Typische Fehler: ✗ „Ich muss zu arbeiten“ → ✓ „Ich muss arbeiten“ (Modalverb ohne zu). ✗ „Ich habe vor, auszusteigen um 8 Uhr“ → Infinitiv ans Ende: ✓ „…, um 8 Uhr auszusteigen“.",
      tr: "Tipik hatalar: ✗ „Ich muss zu arbeiten“ → ✓ „Ich muss arbeiten“ (modal fiil zu almaz). Mastar grubu sona gider: ✓ „…, um 8 Uhr auszusteigen“."
    },
    quiz: [
      { q: "Hast du Zeit, mir ___?", options: ["zu helfen", "helfen", "hilfst"], answer: 0, explain: { de: "Nach „Zeit haben“ → zu + Infinitiv.", tr: "„Zeit haben“den sonra → zu + mastar." } },
      { q: "Vergiss nicht, das Fenster ___!", options: ["zuzumachen", "zu machen zu", "machen"], answer: 0, explain: { de: "Trennbares Verb „zumachen“ → „zu“ in der Mitte: „zuzumachen“.", tr: "Ayrılabilen fiil „zumachen“ → „zu“ ortada: „zuzumachen“." } },
      { q: "Ich kann heute leider nicht ___.", options: ["zu kommen", "kommen", "gekommen"], answer: 1, explain: { de: "Nach Modalverb „können“ KEIN zu.", tr: "Modal fiil „können“den sonra zu YOK." } }
    ]
  },
  {
    id: "genitiv",
    emoji: "🧾",
    title: "Genitiv & n-Deklination",
    titleTr: "Genitiv ve n-Çekimi",
    de: "Der Genitiv zeigt Besitz oder Zugehörigkeit: „das Auto MEINES Vaters“, „die Meinung DER Lehrerin“. Maskulin und neutral: des + Nomen mit -(e)s; feminin und Plural: der. Wichtige Genitiv-Präpositionen für B1: wegen, trotz, während, statt. Die n-Deklination: Einige maskuline Nomen (der Junge, der Kollege, der Kunde, der Mensch, der Herr, der Name, der Nachbar, der Student) bekommen in allen Fällen außer Nominativ ein -n: „Ich helfe dem KollegeN.“",
    tr: "Genitiv sahiplik veya aitlik gösterir: „das Auto MEINES Vaters“ (babamın arabası), „die Meinung DER Lehrerin“ (öğretmenin görüşü). Eril ve nötr: des + isim -(e)s ekiyle; dişil ve çoğul: der. B1 için önemli Genitiv edatları: wegen, trotz, während, statt. n-Çekimi: Bazı eril isimler (der Junge, der Kollege, der Kunde, der Mensch, der Herr, der Name, der Nachbar, der Student) Nominativ dışındaki tüm hallerde -n alır: „Ich helfe dem KollegeN.“ (İş arkadaşıma yardım ediyorum.)",
    table: {
      head: ["", "maskulin", "feminin", "neutral", "Plural"],
      rows: [
        ["Genitiv", "des netten Mannes", "der netten Frau", "des kleinen Kindes", "der netten Leute"],
        ["Beispiel", "das Haus des Mannes", "die Tasche der Frau", "das Spielzeug des Kindes", "die Autos der Leute"]
      ]
    },
    fehler: {
      de: "Typische Fehler: ✗ „wegen dem Regen“ (umgangssprachlich) → in der Prüfung besser ✓ „wegen des Regens“. ✗ „Ich frage der Student“ → ✓ „Ich frage den StudentEN“ (n-Deklination!).",
      tr: "Tipik hatalar: ✗ „wegen dem Regen“ (günlük dil) → sınavda tercihen ✓ „wegen des Regens“. ✗ „Ich frage der Student“ → ✓ „Ich frage den StudentEN“ (n-çekimi!)."
    },
    quiz: [
      { q: "Wegen ___ Sturms fallen alle Flüge aus.", options: ["des", "dem", "der"], answer: 0, explain: { de: "„wegen“ + Genitiv, maskulin → „des Sturms“.", tr: "„wegen“ + Genitiv, eril → „des Sturms“." } },
      { q: "Kennst du den Namen ___ neuen Kollegin?", options: ["der", "des", "die"], answer: 0, explain: { de: "Genitiv feminin → „der neuen Kollegin“.", tr: "Genitiv dişil → „der neuen Kollegin“." } },
      { q: "Ich habe gestern mit dem ___ gesprochen.", options: ["Nachbar", "Nachbarn", "Nachbares"], answer: 1, explain: { de: "n-Deklination: „mit dem Nachbarn“.", tr: "n-çekimi: „mit dem Nachbarn“ (komşuyla)." } }
    ]
  },
  {
    id: "indirekte-fragen",
    emoji: "❔",
    title: "Indirekte Fragen",
    titleTr: "Dolaylı Sorular",
    de: "Indirekte Fragen klingen höflicher – perfekt für Briefe und Ämter! W-Fragen: Das Fragewort leitet den Nebensatz ein, das Verb geht ans Ende: „Wann beginnt der Kurs?“ → „Können Sie mir sagen, WANN der Kurs BEGINNT?“ Ja/Nein-Fragen: mit „ob“: „Hat er Zeit?“ → „Ich weiß nicht, OB er Zeit HAT.“ Typische Einleitungen: Wissen Sie, …? / Können Sie mir sagen, …? / Ich möchte wissen, … / Ich frage mich, …",
    tr: "Dolaylı sorular daha kibar duyulur – mektuplar ve resmi daireler için mükemmel! W-soruları: Soru kelimesi yan cümleyi başlatır, fiil sona gider: „Wann beginnt der Kurs?“ → „Können Sie mir sagen, WANN der Kurs BEGINNT?“ (Kursun ne zaman başladığını söyleyebilir misiniz?) Evet/Hayır soruları: „ob“ ile: „Hat er Zeit?“ → „Ich weiß nicht, OB er Zeit HAT.“ Tipik girişler: Wissen Sie, …? / Können Sie mir sagen, …? / Ich möchte wissen, … / Ich frage mich, …",
    table: {
      head: ["Direkte Frage", "Indirekte Frage", "Türkçe"],
      rows: [
        ["Wo ist der Bahnhof?", "Wissen Sie, wo der Bahnhof ist?", "Garın nerede olduğunu biliyor musunuz?"],
        ["Wie viel kostet der Kurs?", "Ich möchte wissen, wie viel der Kurs kostet.", "Kursun ne kadar tuttuğunu öğrenmek istiyorum."],
        ["Gibt es eine Ermäßigung?", "Können Sie mir sagen, ob es eine Ermäßigung gibt?", "İndirim olup olmadığını söyleyebilir misiniz?"]
      ]
    },
    fehler: {
      de: "Typische Fehler: ✗ „Wissen Sie, wo ist der Bahnhof?“ → ✓ „…, wo der Bahnhof IST?“ (Verb ans Ende!). ✗ „Ich weiß nicht, wenn er kommt“ → ✓ „OB er kommt“ (Ja/Nein-Frage → ob, nicht wenn!).",
      tr: "Tipik hatalar: ✗ „Wissen Sie, wo ist der Bahnhof?“ → ✓ „…, wo der Bahnhof IST?“ (fiil sona!). ✗ „Ich weiß nicht, wenn er kommt“ → ✓ „OB er kommt“ (evet/hayır sorusu → ob, wenn değil!)."
    },
    quiz: [
      { q: "Können Sie mir sagen, wann der Zug ___?", options: ["abfährt", "fährt ab", "abfahren"], answer: 0, explain: { de: "Nebensatz: trennbares Verb zusammen am Ende → „abfährt“.", tr: "Yan cümle: ayrılabilen fiil sonda birleşik → „abfährt“." } },
      { q: "Ich möchte wissen, ___ der Kurs auch abends stattfindet.", options: ["ob", "dass", "wenn"], answer: 0, explain: { de: "Ja/Nein-Frage → „ob“.", tr: "Evet/hayır sorusu → „ob“." } },
      { q: "Er fragt, ___ du morgen kommst.", options: ["ob", "wann ob", "dass"], answer: 0, explain: { de: "„Kommst du morgen?“ (Ja/Nein) → „ob“.", tr: "„Yarın geliyor musun?“ (evet/hayır) → „ob“." } }
    ]
  },
  {
    id: "futur",
    emoji: "🔮",
    title: "Futur I & Plusquamperfekt",
    titleTr: "Gelecek Zaman ve -miş'li Geçmiş",
    de: "FUTUR I: werden + Infinitiv – für Zukunftspläne und Vermutungen: „Ich werde nächstes Jahr die B2-Prüfung machen.“ Oft reicht auch das Präsens mit Zeitangabe: „Morgen fahre ich nach Köln.“ PLUSQUAMPERFEKT: hatte/war + Partizip II – für etwas, das VOR einem anderen Ereignis in der Vergangenheit passierte. Es kommt fast immer mit „nachdem“ vor: „Nachdem ich gegessen HATTE, ging ich spazieren.“",
    tr: "FUTUR I: werden + mastar – gelecek planları ve tahminler için: „Ich werde nächstes Jahr die B2-Prüfung machen.“ (Gelecek yıl B2 sınavına gireceğim.) Zaman ifadesiyle şimdiki zaman da yeterlidir: „Morgen fahre ich nach Köln.“ PLUSQUAMPERFEKT: hatte/war + Partizip II – geçmişte başka bir olaydan ÖNCE olan şey için. Neredeyse her zaman „nachdem“ ile kullanılır: „Nachdem ich gegessen HATTE, ging ich spazieren.“ (Yemek yedikten sonra yürüyüşe çıktım.)",
    table: {
      head: ["Zeit", "Beispiel", "Türkçe"],
      rows: [
        ["Futur I", "Ich werde dich morgen anrufen.", "Yarın seni arayacağım."],
        ["Futur I (Vermutung)", "Er wird wohl krank sein.", "Muhtemelen hastadır."],
        ["Plusquamperfekt", "Nachdem sie gegangen war, kam er.", "O gittikten sonra, adam geldi."]
      ]
    },
    fehler: {
      de: "Typische Fehler: ✗ „Ich will morgen arbeiten werden“ → ✓ „Ich werde morgen arbeiten“. Nach „nachdem“ IMMER eine Zeitstufe zurück: Hauptsatz Präteritum → Nebensatz Plusquamperfekt.",
      tr: "Tipik hatalar: ✗ „Ich will morgen arbeiten werden“ → ✓ „Ich werde morgen arbeiten“. „nachdem“den sonra HER ZAMAN bir zaman geriye git: Ana cümle Präteritum → yan cümle Plusquamperfekt."
    },
    quiz: [
      { q: "Nächsten Monat ___ wir nach Berlin ziehen.", options: ["werden", "wurden", "worden"], answer: 0, explain: { de: "Futur I: „werden + Infinitiv“.", tr: "Gelecek zaman: „werden + mastar“." } },
      { q: "Nachdem er die Prüfung bestanden ___, feierte er mit Freunden.", options: ["hat", "hatte", "ist"], answer: 1, explain: { de: "nachdem + Plusquamperfekt: „bestanden hatte“.", tr: "nachdem + Plusquamperfekt: „bestanden hatte“." } },
      { q: "Das ___ schon klappen, mach dir keine Sorgen!", options: ["wird", "wurde", "werden"], answer: 0, explain: { de: "Vermutung/Beruhigung mit Futur: „Das wird schon klappen.“", tr: "Tahmin/teselli için Futur: „Das wird schon klappen.“ (Hallolur.)" } }
    ]
  },
  {
    id: "imperativ",
    emoji: "📣",
    title: "Imperativ & höfliche Aufforderungen",
    titleTr: "Emir Kipi ve Kibar Ricalar",
    de: "Der Imperativ gibt Anweisungen: du-Form ohne -st: „Komm! Lies! Nimm!“; ihr-Form wie Präsens: „Kommt!“; Sie-Form mit Pronomen: „Kommen Sie!“ Bei e→i/ie-Verben bleibt der Wechsel: „Sprich lauter!“ Höflicher geht es mit „bitte“ oder Konjunktiv II: „Würden Sie bitte das Fenster schließen?“ In der Prüfung brauchst du den Imperativ für Anleitungen und Ratschläge: „Nimm die Tabletten dreimal täglich!“",
    tr: "Emir kipi talimat verir: du-formu -st'siz: „Komm! Lies! Nimm!“; ihr-formu şimdiki zaman gibi: „Kommt!“; Sie-formu zamirle: „Kommen Sie!“ e→i/ie değişimli fiillerde değişim kalır: „Sprich lauter!“ (Daha yüksek sesle konuş!) „bitte“ veya Konjunktiv II ile daha kibar olur: „Würden Sie bitte das Fenster schließen?“ Sınavda emir kipi talimatlar ve tavsiyeler için gerekir: „Nimm die Tabletten dreimal täglich!“",
    table: {
      head: ["Infinitiv", "du", "ihr", "Sie"],
      rows: [
        ["kommen", "Komm!", "Kommt!", "Kommen Sie!"],
        ["nehmen", "Nimm!", "Nehmt!", "Nehmen Sie!"],
        ["lesen", "Lies!", "Lest!", "Lesen Sie!"],
        ["sein", "Sei ruhig!", "Seid ruhig!", "Seien Sie ruhig!"],
        ["anfangen", "Fang an!", "Fangt an!", "Fangen Sie an!"]
      ]
    },
    fehler: {
      de: "Typische Fehler: ✗ „Kommst du her!“ → ✓ „Komm her!“ (du-Imperativ ohne Pronomen und ohne -st). ✗ „Ist ruhig!“ → ✓ „Sei ruhig!“",
      tr: "Tipik hatalar: ✗ „Kommst du her!“ → ✓ „Komm her!“ (du emir kipi zamirsiz ve -st'siz). ✗ „Ist ruhig!“ → ✓ „Sei ruhig!“"
    },
    quiz: [
      { q: "___ bitte langsamer! (du)", options: ["Sprich", "Sprichst", "Sprechen"], answer: 0, explain: { de: "du-Imperativ von sprechen: „Sprich!“ (e→i bleibt).", tr: "sprechen'in du emir kipi: „Sprich!“ (e→i kalır)." } },
      { q: "___ Sie bitte hier!", options: ["Warten", "Wartet", "Warte"], answer: 0, explain: { de: "Sie-Form: „Warten Sie!“", tr: "Sie formu: „Warten Sie!“ (Bekleyin!)" } },
      { q: "Kinder, ___ eure Hausaufgaben!", options: ["macht", "machst", "machen"], answer: 0, explain: { de: "ihr-Form: „Macht!“", tr: "ihr formu: „Macht!“ (Yapın!)" } }
    ]
  },
  {
    id: "lassen",
    emoji: "🔧",
    title: "Das Verb „lassen“",
    titleTr: "„lassen“ Fiili",
    de: "„lassen“ hat drei wichtige Bedeutungen: 1) ETWAS MACHEN LASSEN (man macht es nicht selbst): „Ich lasse mein Auto reparieren.“ – jemand anderes repariert es. Struktur wie ein Modalverb: lassen + Infinitiv am Ende. 2) ERLAUBEN: „Meine Eltern lassen mich lange schlafen.“ 3) ZURÜCKLASSEN / NICHT MITNEHMEN: „Ich lasse den Schlüssel zu Hause.“ Konjugation: ich lasse, du lässt, er/sie lässt, wir lassen. Perfekt mit doppeltem Infinitiv: „Ich habe die Haare schneiden lassen.“",
    tr: "„lassen“ fiilinin üç önemli anlamı vardır: 1) BİR ŞEYİ YAPTIRMAK (kendin yapmazsın): „Ich lasse mein Auto reparieren.“ (Arabamı tamir ettiriyorum.) – başkası tamir eder. Yapı modal fiil gibi: lassen + sonda mastar. 2) İZİN VERMEK: „Meine Eltern lassen mich lange schlafen.“ (Ailem geç saate kadar uyumama izin veriyor.) 3) BIRAKMAK: „Ich lasse den Schlüssel zu Hause.“ (Anahtarı evde bırakıyorum.) Çekim: ich lasse, du lässt, er/sie lässt, wir lassen. Perfekt çift mastarla: „Ich habe die Haare schneiden lassen.“ (Saçımı kestirdim.)",
    table: {
      head: ["Bedeutung", "Beispiel", "Türkçe"],
      rows: [
        ["machen lassen", "Sie lässt ihre Steuererklärung machen.", "Vergi beyannamesini yaptırıyor."],
        ["machen lassen", "Er lässt den Motor seines Autos reparieren.", "Arabasının motorunu tamir ettiriyor."],
        ["erlauben", "Lässt du mich mal telefonieren?", "Telefon etmeme izin verir misin?"],
        ["zurücklassen", "Lass die Tasche im Auto!", "Çantayı arabada bırak!"],
        ["sich lassen (Passiv-Ersatz)", "Das Problem lässt sich lösen.", "Bu sorun çözülebilir."]
      ]
    },
    fehler: {
      de: "Typische Fehler: ✗ „Ich lasse reparieren mein Auto“ → ✓ „Ich lasse mein Auto reparieren“ (Infinitiv ans Ende!). ✗ „du lasst“ → ✓ „du lässt“. Verwechsle „lassen“ nicht mit „verlassen“ (= weggehen von): „Er verlässt das Haus um 8 Uhr.“",
      tr: "Tipik hatalar: ✗ „Ich lasse reparieren mein Auto“ → ✓ „Ich lasse mein Auto reparieren“ (mastar sona!). ✗ „du lasst“ → ✓ „du lässt“. „lassen“ ile „verlassen“ (= terk etmek, ayrılmak) fiilini karıştırma: „Er verlässt das Haus um 8 Uhr.“ (Evden saat 8'de çıkıyor.)"
    },
    quiz: [
      { q: "Meine Haare sind zu lang. Ich ___ sie morgen ___.", options: ["lasse … schneiden", "werde … schneiden lassen werden", "schneide … lassen"], answer: 0, explain: { de: "„Ich lasse sie schneiden“ – jemand anderes schneidet.", tr: "„Kestiriyorum“ – başkası kesiyor." } },
      { q: "___ du mich bitte ausreden?", options: ["Lässt", "Lasst", "Lassen"], answer: 0, explain: { de: "du-Form: „du lässt“ – hier: erlauben.", tr: "du formu: „du lässt“ – burada: izin vermek." } },
      { q: "Wir haben die Wohnung ___ .", options: ["putzen lassen", "gelassen putzen", "putzen gelassen"], answer: 0, explain: { de: "Perfekt mit doppeltem Infinitiv: „haben + putzen lassen“.", tr: "Çift mastarlı Perfekt: „haben + putzen lassen“ (temizlettik)." } }
    ]
  }
];
