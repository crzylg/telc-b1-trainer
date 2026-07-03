// ===== Grammatik-Lernziele B1 (sehr ausführlich, DE + TR) =====
window.GRAMMATIK = [
  {
    id: "perfekt",
    emoji: "⏮️",
    title: "Perfekt & Präteritum",
    titleTr: "Geçmiş Zaman",
    de: "Das Perfekt ist für das Sprechen. Auch für Briefe an Freunde. Beispiel: „Ich habe gestern gearbeitet.“ Das Präteritum ist für „sein“ und „haben“. Auch für Modalverben. Zum Beispiel: „ich war“, „ich hatte“, „ich musste“. Zeitungen benutzen oft das Präteritum. So bildest du das Perfekt: haben ODER sein + Partizip II. Du brauchst SEIN bei Bewegung. Zum Beispiel: gehen, fahren, fliegen, kommen. Du brauchst SEIN auch bei: aufstehen, einschlafen, sterben, bleiben, passieren.",
    tr: "Perfekt, konuşmak içindir. Arkadaşlara mektup için de kullanılır. Örnek: „Ich habe gestern gearbeitet.“ (Dün çalıştım.) Präteritum, „sein“ ve „haben“ içindir. Modal fiiller için de kullanılır. Örneğin: „ich war“, „ich hatte“, „ich musste“. Gazeteler genelde Präteritum kullanır. Perfekt böyle yapılır: haben VEYA sein + Partizip II. Hareket fiillerinde SEIN gerekir. Örneğin: gehen, fahren, fliegen, kommen. Şunlarda da SEIN gerekir: aufstehen, einschlafen, sterben, bleiben, passieren.",
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
      de: "Diese Fehler sind oft: ✗ „Ich bin gearbeitet“ ist falsch. ✓ Richtig ist: „Ich habe gearbeitet“. ✗ „Ich habe nach Berlin gefahren“ ist falsch. ✓ Richtig ist: „Ich bin nach Berlin gefahren“. Verben mit -ieren haben kein ge-: ✓ „hat telefoniert“. Verben mit be-, ver-, er- haben auch kein ge-: ✓ „hat verstanden“.",
      tr: "Bu hatalar sık yapılır: ✗ „Ich bin gearbeitet“ yanlıştır. ✓ Doğrusu: „Ich habe gearbeitet“. ✗ „Ich habe nach Berlin gefahren“ yanlıştır. ✓ Doğrusu: „Ich bin nach Berlin gefahren“ (hareket → sein). -ieren ile biten fiillerde ge- olmaz: ✓ „hat telefoniert“. be-, ver-, er- ile başlayan fiillerde de ge- olmaz: ✓ „hat verstanden“."
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
    de: "In einem Nebensatz steht das Verb am ENDE. Wichtige Wörter für einen Nebensatz sind: dass, weil, wenn, als, ob, obwohl, damit, bevor, nachdem, während. Wichtig: Zwischen den zwei Sätzen steht IMMER ein Komma. Kommt der Nebensatz zuerst? Dann beginnt der Hauptsatz mit dem Verb: „Weil ich krank bin, BLEIBE ich zu Hause.“",
    tr: "Bir yan cümlede fiil SONDA olur. Yan cümle için önemli kelimeler: dass, weil, wenn, als, ob, obwohl, damit, bevor, nachdem, während. Önemli: İki cümle arasına HER ZAMAN virgül konur. Yan cümle önce mi geliyor? O zaman ana cümle fiille başlar: „Weil ich krank bin, BLEIBE ich zu Hause.“ (Hastayım, bu yüzden evde kalıyorum.)",
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
      de: "Dieser Fehler ist oft: ✗ „Ich glaube, dass er hat Recht“ ist falsch. ✓ Richtig ist: „…, dass er Recht hat“. Trennbare Verben im Nebensatz bleiben zusammen: ✓ „…, weil er früh aufsteht“.",
      tr: "Bu hata sık yapılır: ✗ „Ich glaube, dass er hat Recht“ yanlıştır. ✓ Doğrusu: „…, dass er Recht hat“. Ayrılabilen fiiller yan cümlede birleşik kalır: ✓ „…, weil er früh aufsteht“."
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
    de: "Ein Relativsatz gibt mehr Information über ein Nomen. Beispiel: „Das ist der Mann, DER nebenan wohnt.“ Das kleine Wort (der/die/das) passt zum Nomen davor. Das Verb steht am Ende vom Relativsatz. Mit einer Präposition: Die Präposition steht VOR dem kleinen Wort. Beispiel: „die Frau, MIT DER ich arbeite“.",
    tr: "Bir ilgi cümlesi bir isim hakkında daha çok bilgi verir. Örnek: „Das ist der Mann, DER nebenan wohnt.“ (Yan tarafta oturan adam bu.) Küçük kelime (der/die/das) önceki isme uyar. Fiil, ilgi cümlesinin sonunda olur. Bir edatla: Edat, küçük kelimenin ÖNÜNDE olur. Örnek: „die Frau, MIT DER ich arbeite“ (birlikte çalıştığım kadın).",
    table: {
      head: ["", "maskulin", "feminin", "neutral", "Plural"],
      rows: [
        ["Nominativ", "der", "die", "das", "die"],
        ["Akkusativ", "den", "die", "das", "die"],
        ["Dativ", "dem", "der", "dem", "denen"]
      ]
    },
    fehler: {
      de: "Dieser Fehler ist oft: ✗ „der Film, das ich gesehen habe“ ist falsch. ✓ Richtig ist: „der Film, DEN ich gesehen habe“. Nach den Wörtern „alles“, „etwas“, „nichts“ benutzt man „was“: „alles, was ich brauche“.",
      tr: "Bu hata sık yapılır: ✗ „der Film, das ich gesehen habe“ yanlıştır. ✓ Doğrusu: „der Film, DEN ich gesehen habe“. „alles“, „etwas“, „nichts“ kelimelerinden sonra „was“ kullanılır: „alles, was ich brauche“ (ihtiyacım olan her şey)."
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
    de: "Der Konjunktiv II hat drei Funktionen. 1) EINE HÖFLICHE BITTE: „Könnten Sie mir helfen?“ Das ist sehr wichtig für Briefe! 2) EIN WUNSCH: „Ich wäre jetzt gern am Meer.“ 3) EINE BEDINGUNG: „Wenn ich mehr Zeit hätte, würde ich Sport machen.“ So bildest du es: würde + Infinitiv. Aber sein macht „wäre“. Haben macht „hätte“. Modalverben machen: könnte, müsste, sollte, dürfte.",
    tr: "Konjunktiv II'nin üç işlevi vardır. 1) KİBAR BİR RİCA: „Könnten Sie mir helfen?“ (Bana yardım edebilir miydiniz?) Bu, mektuplar için çok önemli! 2) BİR DİLEK: „Ich wäre jetzt gern am Meer.“ (Şimdi denizde olsam ne güzel olurdu.) 3) BİR KOŞUL: „Wenn ich mehr Zeit hätte, würde ich Sport machen.“ (Daha çok vaktim olsaydı spor yapardım.) Böyle yapılır: würde + mastar. Ama sein „wäre“ olur. Haben „hätte“ olur. Modal fiiller: könnte, müsste, sollte, dürfte olur.",
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
      de: "Dieser Fehler ist oft: ✗ „Wenn ich würde Zeit haben“ ist falsch. ✓ Richtig ist: „Wenn ich Zeit HÄTTE“. Im wenn-Satz steht das Verb am Ende: „Wenn ich reich wäre, …“",
      tr: "Bu hata sık yapılır: ✗ „Wenn ich würde Zeit haben“ yanlıştır. ✓ Doğrusu: „Wenn ich Zeit HÄTTE“. wenn cümlesinde fiil sonda olur: „Wenn ich reich wäre, …“"
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
    de: "Das Passiv ist wichtig, wenn die AKTION wichtiger ist als die Person. Beispiel: „Das Brot WIRD GEBACKEN.“ Wer backt? Das ist nicht wichtig! So bildest du es: werden + Partizip II. Präsens: „wird repariert“. Präteritum: „wurde repariert“. Mit einem Modalverb: „Das Auto muss repariert WERDEN.“ Das Passiv kommt oft in Zeitungen vor.",
    tr: "Edilgen çatı önemlidir. Kişiden çok eylem önemli olduğunda kullanılır. Örnek: „Das Brot WIRD GEBACKEN.“ (Ekmek pişiriliyor.) Kim pişiriyor? Bu önemli değil! Böyle yapılır: werden + Partizip II. Şimdiki zaman: „wird repariert“ (tamir ediliyor). Geçmiş zaman: „wurde repariert“ (tamir edildi). Modal fiille: „Das Auto muss repariert WERDEN.“ (Araba tamir edilmeli.) Edilgen çatı gazetelerde sık çıkar.",
    table: {
      head: ["Zeit", "Aktiv", "Passiv", "Türkçe"],
      rows: [
        ["Präsens", "Man baut ein Haus.", "Ein Haus wird gebaut.", "Bir ev inşa ediliyor."],
        ["Präteritum", "Man baute ein Haus.", "Ein Haus wurde gebaut.", "Bir ev inşa edildi."],
        ["mit Modalverb", "Man muss das Haus bauen.", "Das Haus muss gebaut werden.", "Ev inşa edilmeli."]
      ]
    },
    fehler: {
      de: "Achtung: „Das Haus ist gebaut“ heißt: Das Haus ist FERTIG. „Das Haus wird gebaut“ heißt: Man baut JETZT. Wer die Aktion macht, steht mit „von“: „Der Brief wurde VON der Chefin geschrieben.“",
      tr: "Dikkat: „Das Haus ist gebaut“ demek: Ev BİTMİŞ. „Das Haus wird gebaut“ demek: ŞİMDİ inşa ediliyor. Eylemi yapan kişi „von“ ile belirtilir: „Der Brief wurde VON der Chefin geschrieben.“ (Mektup müdire tarafından yazıldı.)"
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
    de: "Vor einem Nomen bekommt das Adjektiv eine Endung. Die Endung hängt vom kleinen Wort davor ab (der/die/das oder ein/kein). Nach der/die/das: meistens -e oder -en. Nach ein/kein zeigt das Adjektiv, ob es maskulin, feminin oder neutral ist: „ein kleinER Mann, eine kleinE Frau, ein kleinES Kind“. Ohne Artikel: fast wie der/die/das. Im Dativ und im Plural mit Artikel: fast immer -en!",
    tr: "İsimden önce gelen sıfat bir ek alır. Bu ek, öndeki küçük kelimeye (der/die/das veya ein/kein) bağlıdır. der/die/das'tan sonra: çoğunlukla -e veya -en. ein/kein'dan sonra sıfat, eril mi dişil mi nötr mü olduğunu gösterir: „ein kleinER Mann, eine kleinE Frau, ein kleinES Kind“. Artikelsiz: neredeyse der/die/das gibi. Dativ'de ve artikelli çoğulda: neredeyse her zaman -en!",
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
      de: "Diese Fehler sind oft: ✗ „ein interessante Buch“ ist falsch. ✓ Richtig ist: „ein interessantES Buch“. ✗ „mit meinem alte Auto“ ist falsch. ✓ Richtig ist: „mit meinem altEN Auto“.",
      tr: "Bu hatalar sık yapılır: ✗ „ein interessante Buch“ yanlıştır. ✓ Doğrusu: „ein interessantES Buch“. ✗ „mit meinem alte Auto“ yanlıştır. ✓ Doğrusu: „mit meinem altEN Auto“."
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
    de: "Es gibt drei Gruppen. 1) IMMER DATIV: aus, bei, mit, nach, seit, von, zu. 2) IMMER AKKUSATIV: durch, für, gegen, ohne, um. 3) MANCHMAL DATIV, MANCHMAL AKKUSATIV: an, auf, hinter, in, neben, über, unter, vor, zwischen. Frage WOHIN? Das ist eine Bewegung. Dann Akkusativ: „Ich hänge das Bild AN DIE Wand.“ Frage WO? Das ist ein Ort. Dann Dativ: „Das Bild hängt AN DER Wand.“",
    tr: "Üç grup vardır. 1) HER ZAMAN DATIV: aus, bei, mit, nach, seit, von, zu. 2) HER ZAMAN AKKUSATIV: durch, für, gegen, ohne, um. 3) BAZEN DATIV, BAZEN AKKUSATIV: an, auf, hinter, in, neben, über, unter, vor, zwischen. NEREYE sorusu mu? Bu bir harekettir. O zaman Akkusativ: „Ich hänge das Bild AN DIE Wand.“ (Resmi duvara asıyorum.) NEREDE sorusu mu? Bu bir yerdir. O zaman Dativ: „Das Bild hängt AN DER Wand.“ (Resim duvarda asılı.)",
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
      de: "Dieser Fehler ist oft: ✗ „Ich gehe in dem Supermarkt“ ist falsch. ✓ Richtig ist: „in den Supermarkt“. Merke diese kurzen Formen: in + das = ins, in + dem = im, an + das = ans, zu + der = zur, zu + dem = zum. Bei Ländern und Städten benutzt man oft „nach“: „nach Berlin“.",
      tr: "Bu hata sık yapılır: ✗ „Ich gehe in dem Supermarkt“ yanlıştır. ✓ Doğrusu: „in den Supermarkt“. Bu kısa formları ezberle: in + das = ins, in + dem = im, an + das = ans, zu + der = zur, zu + dem = zum. Ülke ve şehirlerde genelde „nach“ kullanılır: „nach Berlin“."
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
    de: "Nach manchen Wörtern steht „zu + Infinitiv“. Zum Beispiel nach Verben: anfangen, versuchen, vergessen, hoffen. Auch nach Adjektiven: wichtig, schwierig, leicht. Beispiel: „Ich habe vergessen, die Tür ZU schließen.“ Bei trennbaren Verben geht „zu“ in die Mitte: „einzukaufen“. KEIN „zu“ nach Modalverben: „ich muss gehen“.",
    tr: "Bazı kelimelerden sonra „zu + mastar“ gelir. Örneğin fiillerden sonra: anfangen, versuchen, vergessen, hoffen. Sıfatlardan sonra da: wichtig, schwierig, leicht. Örnek: „Ich habe vergessen, die Tür ZU schließen.“ (Kapıyı kapatmayı unuttum.) Ayrılabilen fiillerde „zu“ ortaya girer: „einzukaufen“. Modal fiillerden sonra „zu“ YOKTUR: „ich muss gehen“.",
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
      de: "Dieser Fehler ist oft: ✗ „Ich muss zu arbeiten“ ist falsch. ✓ Richtig ist: „Ich muss arbeiten“. Das zu-Wort steht ganz am Ende: ✓ „…, um 8 Uhr auszusteigen“.",
      tr: "Bu hata sık yapılır: ✗ „Ich muss zu arbeiten“ yanlıştır. ✓ Doğrusu: „Ich muss arbeiten“. zu'lu kelime grubu en sona gider: ✓ „…, um 8 Uhr auszusteigen“."
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
    de: "Der Genitiv zeigt: Das gehört zu jemandem. Beispiel: „das Auto MEINES Vaters“. Bei maskulin und neutral: des + Nomen mit -(e)s. Bei feminin und Plural: der. Wichtige Wörter mit Genitiv: wegen, trotz, während, statt. Die n-Deklination: Einige Nomen bekommen ein -n. Zum Beispiel: der Junge, der Kollege, der Kunde, der Student. Beispiel: „Ich helfe dem KollegeN.“",
    tr: "Genitiv şunu gösterir: Bu, birine aittir. Örnek: „das Auto MEINES Vaters“ (babamın arabası). Eril ve nötrde: des + isim -(e)s ekiyle. Dişil ve çoğulda: der. Genitiv ile kullanılan önemli kelimeler: wegen, trotz, während, statt. n-Çekimi: Bazı isimler -n eki alır. Örneğin: der Junge, der Kollege, der Kunde, der Student. Örnek: „Ich helfe dem KollegeN.“ (İş arkadaşıma yardım ediyorum.)",
    table: {
      head: ["", "maskulin", "feminin", "neutral", "Plural"],
      rows: [
        ["Genitiv", "des netten Mannes", "der netten Frau", "des kleinen Kindes", "der netten Leute"],
        ["Beispiel", "das Haus des Mannes", "die Tasche der Frau", "das Spielzeug des Kindes", "die Autos der Leute"]
      ]
    },
    fehler: {
      de: "In der Prüfung ist besser: ✓ „wegen des Regens“ (nicht „wegen dem Regen“). Dieser Fehler ist auch oft: ✗ „Ich frage der Student“ ist falsch. ✓ Richtig ist: „Ich frage den StudentEN“.",
      tr: "Sınavda daha iyisi: ✓ „wegen des Regens“ („wegen dem Regen“ değil). Bu hata da sık yapılır: ✗ „Ich frage der Student“ yanlıştır. ✓ Doğrusu: „Ich frage den StudentEN“."
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
    de: "Eine indirekte Frage ist höflich. Das ist gut für Briefe! Bei W-Fragen: Das Fragewort steht vorne. Das Verb geht ans Ende. Beispiel: „Wann beginnt der Kurs?“ wird zu „Können Sie mir sagen, WANN der Kurs BEGINNT?“ Bei Ja/Nein-Fragen benutzt du „ob“: „Hat er Zeit?“ wird zu „Ich weiß nicht, OB er Zeit HAT.“",
    tr: "Dolaylı bir soru kibardır. Bu, mektuplar için iyidir! W-sorularında: Soru kelimesi önde durur. Fiil sona gider. Örnek: „Wann beginnt der Kurs?“ şuna dönüşür: „Können Sie mir sagen, WANN der Kurs BEGINNT?“ (Kursun ne zaman başladığını söyleyebilir misiniz?) Evet/Hayır sorularında „ob“ kullanılır: „Hat er Zeit?“ şuna dönüşür: „Ich weiß nicht, OB er Zeit HAT.“",
    table: {
      head: ["Direkte Frage", "Indirekte Frage", "Türkçe"],
      rows: [
        ["Wo ist der Bahnhof?", "Wissen Sie, wo der Bahnhof ist?", "Garın nerede olduğunu biliyor musunuz?"],
        ["Wie viel kostet der Kurs?", "Ich möchte wissen, wie viel der Kurs kostet.", "Kursun ne kadar tuttuğunu öğrenmek istiyorum."],
        ["Gibt es eine Ermäßigung?", "Können Sie mir sagen, ob es eine Ermäßigung gibt?", "İndirim olup olmadığını söyleyebilir misiniz?"]
      ]
    },
    fehler: {
      de: "Dieser Fehler ist oft: ✗ „Wissen Sie, wo ist der Bahnhof?“ ist falsch. ✓ Richtig ist: „…, wo der Bahnhof IST?“. Bei Ja/Nein-Fragen brauchst du „ob“, nicht „wenn“: ✓ „Ich weiß nicht, OB er kommt.“",
      tr: "Bu hata sık yapılır: ✗ „Wissen Sie, wo ist der Bahnhof?“ yanlıştır. ✓ Doğrusu: „…, wo der Bahnhof IST?“. Evet/hayır sorularında „ob“ gerekir, „wenn“ değil: ✓ „Ich weiß nicht, OB er kommt.“"
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
    de: "FUTUR I ist für Pläne. Du bildest es so: werden + Infinitiv. Beispiel: „Ich werde nächstes Jahr die B2-Prüfung machen.“ Oft reicht auch das Präsens: „Morgen fahre ich nach Köln.“ PLUSQUAMPERFEKT ist für etwas ganz Altes. Es passierte VOR einer anderen Sache. Du bildest es so: hatte/war + Partizip II. Es kommt fast immer mit „nachdem“ vor: „Nachdem ich gegessen HATTE, ging ich spazieren.“",
    tr: "FUTUR I planlar içindir. Böyle yapılır: werden + mastar. Örnek: „Ich werde nächstes Jahr die B2-Prüfung machen.“ (Gelecek yıl B2 sınavına gireceğim.) Çoğu zaman şimdiki zaman da yeter: „Morgen fahre ich nach Köln.“ PLUSQUAMPERFEKT çok eski bir şey içindir. Başka bir şeyden ÖNCE olmuştur. Böyle yapılır: hatte/war + Partizip II. Neredeyse her zaman „nachdem“ ile kullanılır: „Nachdem ich gegessen HATTE, ging ich spazieren.“ (Yemek yedikten sonra yürüyüşe çıktım.)",
    table: {
      head: ["Zeit", "Beispiel", "Türkçe"],
      rows: [
        ["Futur I", "Ich werde dich morgen anrufen.", "Yarın seni arayacağım."],
        ["Futur I (Vermutung)", "Er wird wohl krank sein.", "Muhtemelen hastadır."],
        ["Plusquamperfekt", "Nachdem sie gegangen war, kam er.", "O gittikten sonra, adam geldi."]
      ]
    },
    fehler: {
      de: "Dieser Fehler ist oft: ✗ „Ich will morgen arbeiten werden“ ist falsch. ✓ Richtig ist: „Ich werde morgen arbeiten“. Nach „nachdem“ brauchst du IMMER eine ältere Zeitform.",
      tr: "Bu hata sık yapılır: ✗ „Ich will morgen arbeiten werden“ yanlıştır. ✓ Doğrusu: „Ich werde morgen arbeiten“. „nachdem“den sonra HER ZAMAN daha eski bir zaman gerekir."
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
    de: "Der Imperativ sagt: Mach das! Die du-Form hat kein -st: „Komm! Lies! Nimm!“ Die ihr-Form ist wie das Präsens: „Kommt!“ Die Sie-Form braucht das Wort „Sie“: „Kommen Sie!“ Willst du höflicher sein? Dann sag „bitte“: „Kommen Sie bitte!“ Oder benutze Konjunktiv II: „Würden Sie bitte das Fenster schließen?“",
    tr: "Emir kipi „Bunu yap!“ demektir. du-formunda -st yoktur: „Komm! Lies! Nimm!“ ihr-formu şimdiki zaman gibidir: „Kommt!“ Sie-formu „Sie“ kelimesini gerektirir: „Kommen Sie!“ Daha kibar olmak mı istiyorsun? O zaman „bitte“ de: „Kommen Sie bitte!“ Veya Konjunktiv II kullan: „Würden Sie bitte das Fenster schließen?“",
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
      de: "Diese Fehler sind oft: ✗ „Kommst du her!“ ist falsch. ✓ Richtig ist: „Komm her!“. ✗ „Ist ruhig!“ ist falsch. ✓ Richtig ist: „Sei ruhig!“",
      tr: "Bu hatalar sık yapılır: ✗ „Kommst du her!“ yanlıştır. ✓ Doğrusu: „Komm her!“. ✗ „Ist ruhig!“ yanlıştır. ✓ Doğrusu: „Sei ruhig!“"
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
    de: "„lassen“ hat drei Bedeutungen. 1) DU MACHST ES NICHT SELBST: „Ich lasse mein Auto reparieren.“ Eine andere Person repariert es. 2) ERLAUBEN: „Meine Eltern lassen mich lange schlafen.“ 3) NICHT MITNEHMEN: „Ich lasse den Schlüssel zu Hause.“ So sagst du es: ich lasse, du lässt, er/sie lässt, wir lassen. Im Perfekt sagst du: „Ich habe die Haare schneiden lassen.“",
    tr: "„lassen“ fiilinin üç anlamı vardır. 1) BİR ŞEYİ KENDİN YAPMAZSIN: „Ich lasse mein Auto reparieren.“ (Arabamı tamir ettiriyorum.) Başka biri tamir eder. 2) İZİN VERMEK: „Meine Eltern lassen mich lange schlafen.“ (Ailem geç saate kadar uyumama izin veriyor.) 3) BIRAKIP GİTMEK: „Ich lasse den Schlüssel zu Hause.“ (Anahtarı evde bırakıyorum.) Böyle söylersin: ich lasse, du lässt, er/sie lässt, wir lassen. Perfekt'te şöyle dersin: „Ich habe die Haare schneiden lassen.“ (Saçımı kestirdim.)",
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
      de: "Dieser Fehler ist oft: ✗ „Ich lasse reparieren mein Auto“ ist falsch. ✓ Richtig ist: „Ich lasse mein Auto reparieren“. ✗ „du lasst“ ist falsch. ✓ Richtig ist: „du lässt“. Verwechsle nicht: „lassen“ und „verlassen“ (= weggehen). „Er verlässt das Haus um 8 Uhr.“",
      tr: "Bu hata sık yapılır: ✗ „Ich lasse reparieren mein Auto“ yanlıştır. ✓ Doğrusu: „Ich lasse mein Auto reparieren“. ✗ „du lasst“ yanlıştır. ✓ Doğrusu: „du lässt“. Bunları karıştırma: „lassen“ ve „verlassen“ (= ayrılmak, terk etmek). „Er verlässt das Haus um 8 Uhr.“ (Evden saat 8'de çıkıyor.)"
    },
    quiz: [
      { q: "Meine Haare sind zu lang. Ich ___ sie morgen ___.", options: ["lasse … schneiden", "werde … schneiden lassen werden", "schneide … lassen"], answer: 0, explain: { de: "„Ich lasse sie schneiden“ – jemand anderes schneidet.", tr: "„Kestiriyorum“ – başkası kesiyor." } },
      { q: "___ du mich bitte ausreden?", options: ["Lässt", "Lasst", "Lassen"], answer: 0, explain: { de: "du-Form: „du lässt“ – hier: erlauben.", tr: "du formu: „du lässt“ – burada: izin vermek." } },
      { q: "Wir haben die Wohnung ___ .", options: ["putzen lassen", "gelassen putzen", "putzen gelassen"], answer: 0, explain: { de: "Perfekt mit doppeltem Infinitiv: „haben + putzen lassen“.", tr: "Çift mastarlı Perfekt: „haben + putzen lassen“ (temizlettik)." } }
    ]
  }
];
