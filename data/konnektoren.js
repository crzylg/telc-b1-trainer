// ===== Konnektoren – Bağlaçlar (mit Wortstellung, Beispielen, DE+TR) =====
// pos: "NS" = Nebensatz (Verb am Ende), "P0" = Position 0 (normale Wortstellung), "ADV" = Adverb (Verb direkt danach)
window.KONNEKTOREN = {
  intro: {
    de: "Konnektoren sind Verbindungs-Wörter. Sie verbinden zwei Sätze. Sie machen deine Sprache besser. In der Prüfung bringen sie Punkte. Beim Schreiben. Beim Sprechen. Auch bei den Sprachbausteinen! Wichtig ist die WORTSTELLUNG. Es gibt drei Gruppen.",
    tr: "Bağlaçlar birleştirme kelimeleridir. İki cümleyi birbirine bağlarlar. Dilini daha iyi yaparlar. Sınavda puan kazandırırlar. Yazarken. Konuşurken. Sprachbausteine'de de! Önemli olan KELİME SIRASIDIR. Üç grup vardır."
  },
  posRules: [
    { code: "NS", name: "Nebensatz-Konnektor", rule: { de: "Das Verb geht ans ENDE. Beispiel: „…, weil ich müde BIN.“", tr: "Fiil SONA gider. Örnek: „…, weil ich müde BIN.“ (çünkü yorgunum)" } },
    { code: "P0", name: "Position 0 (Konjunktion)", rule: { de: "Die Wortstellung bleibt NORMAL. Beispiel: „…, denn ich BIN müde.“", tr: "Kelime sırası NORMAL kalır. Örnek: „…, denn ich BIN müde.“" } },
    { code: "ADV", name: "Adverb (Position 1)", rule: { de: "Das Verb kommt DIREKT danach. Beispiel: „…, deshalb GEHE ich ins Bett.“", tr: "Fiil HEMEN SONRA gelir. Örnek: „…, deshalb GEHE ich ins Bett.“ (bu yüzden yatıyorum)" } }
  ],
  categories: [
    {
      name: "Grund / Sebep",
      emoji: "❓",
      items: [
        { k: "weil", pos: "NS", tr: "çünkü", de: "nennt einen Grund", ex: "Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.", exTr: "Almanca öğreniyorum çünkü Almanya'da çalışmak istiyorum." },
        { k: "da", pos: "NS", tr: "-dığı için, çünkü", de: "wie „weil“, oft am Satzanfang", ex: "Da es regnete, blieben wir zu Hause.", exTr: "Yağmur yağdığı için evde kaldık." },
        { k: "denn", pos: "P0", tr: "çünkü (normal diziliş)", de: "nennt einen Grund, normale Wortstellung", ex: "Ich bleibe zu Hause, denn ich bin krank.", exTr: "Evde kalıyorum, çünkü hastayım." },
        { k: "deshalb / deswegen / darum / daher", pos: "ADV", tr: "bu yüzden, bu nedenle", de: "nennt die Folge eines Grundes", ex: "Ich bin krank, deshalb bleibe ich zu Hause.", exTr: "Hastayım, bu yüzden evde kalıyorum." },
        { k: "nämlich", pos: "ADV", tr: "şöyle ki, zira (fiilden sonra!)", de: "steht NIE am Satzanfang, sondern nach dem Verb", ex: "Ich muss gehen, ich habe nämlich einen Termin.", exTr: "Gitmem gerek, zira bir randevum var." },
        { k: "wegen + Genitiv", pos: "P0", tr: "yüzünden, nedeniyle", de: "Präposition mit Nomen", ex: "Wegen des Regens fällt das Fest aus.", exTr: "Yağmur yüzünden festival iptal." }
      ]
    },
    {
      name: "Gegensatz & Einräumung / Zıtlık",
      emoji: "⚖️",
      items: [
        { k: "aber", pos: "P0", tr: "ama, fakat", de: "einfacher Gegensatz", ex: "Die Wohnung ist schön, aber sehr teuer.", exTr: "Daire güzel ama çok pahalı." },
        { k: "obwohl", pos: "NS", tr: "-e rağmen, -dığı halde", de: "unerwarteter Gegensatz im Nebensatz", ex: "Obwohl er müde war, hat er weitergearbeitet.", exTr: "Yorgun olmasına rağmen çalışmaya devam etti." },
        { k: "trotzdem / dennoch", pos: "ADV", tr: "yine de, buna rağmen", de: "unerwartete Folge im Hauptsatz", ex: "Er war müde, trotzdem hat er weitergearbeitet.", exTr: "Yorgundu, yine de çalışmaya devam etti." },
        { k: "sondern", pos: "P0", tr: "aksine, bilakis (nicht'ten sonra)", de: "Korrektur nach einer Verneinung", ex: "Er kommt nicht heute, sondern morgen.", exTr: "Bugün değil, yarın geliyor." },
        { k: "trotz + Genitiv", pos: "P0", tr: "rağmen (isimle)", de: "Präposition mit Nomen", ex: "Trotz des schlechten Wetters gingen wir spazieren.", exTr: "Kötü havaya rağmen yürüyüşe çıktık." },
        { k: "zwar … aber", pos: "ADV", tr: "gerçi … ama", de: "Einräumung + Gegensatz", ex: "Das Auto ist zwar alt, aber es fährt noch gut.", exTr: "Araba gerçi eski ama hâlâ iyi gidiyor." },
        { k: "während", pos: "NS", tr: "oysa, -iken (karşılaştırma)", de: "stellt zwei Dinge gegenüber", ex: "Während er gern kocht, isst sie lieber im Restaurant.", exTr: "O yemek yapmayı severken, kadın restoranda yemeyi tercih ediyor." }
      ]
    },
    {
      name: "Zeit / Zaman",
      emoji: "⏰",
      items: [
        { k: "als", pos: "NS", tr: "-dığında (geçmişte BİR KEZ)", de: "einmaliges Ereignis in der Vergangenheit", ex: "Als ich 18 war, machte ich den Führerschein.", exTr: "18 yaşındayken ehliyet aldım." },
        { k: "wenn", pos: "NS", tr: "-dığında, -ınca (tekrarlanan/şimdi/gelecek)", de: "wiederholt oder Gegenwart/Zukunft", ex: "Wenn ich Zeit habe, koche ich selbst.", exTr: "Zamanım olduğunda kendim yemek yaparım." },
        { k: "während", pos: "NS", tr: "-iken, esnasında", de: "zwei Dinge passieren gleichzeitig", ex: "Während ich koche, höre ich Musik.", exTr: "Yemek yaparken müzik dinlerim." },
        { k: "bevor", pos: "NS", tr: "-meden önce", de: "die Handlung im Hauptsatz passiert zuerst … nein: der Nebensatz passiert SPÄTER", ex: "Bevor ich schlafen gehe, putze ich die Zähne.", exTr: "Uyumadan önce dişlerimi fırçalarım." },
        { k: "nachdem", pos: "NS", tr: "-dikten sonra", de: "der Nebensatz passiert ZUERST (oft Plusquamperfekt)", ex: "Nachdem ich gegessen hatte, ging ich spazieren.", exTr: "Yemek yedikten sonra yürüyüşe çıktım." },
        { k: "seit / seitdem", pos: "NS", tr: "-den beri", de: "Beginn in der Vergangenheit, dauert noch an", ex: "Seitdem ich in Berlin wohne, fahre ich Fahrrad.", exTr: "Berlin'de oturduğumdan beri bisiklete biniyorum." },
        { k: "bis", pos: "NS", tr: "-e kadar", de: "Endpunkt in der Zukunft", ex: "Warte hier, bis ich zurückkomme.", exTr: "Ben dönene kadar burada bekle." },
        { k: "sobald", pos: "NS", tr: "-er -mez", de: "direkt danach", ex: "Sobald ich ankomme, rufe ich dich an.", exTr: "Varır varmaz seni ararım." },
        { k: "solange", pos: "NS", tr: "-dığı sürece", de: "gleiche Dauer", ex: "Solange es regnet, bleiben wir drinnen.", exTr: "Yağmur yağdığı sürece içeride kalırız." },
        { k: "danach / dann / anschließend", pos: "ADV", tr: "ondan sonra / sonra / ardından", de: "Reihenfolge im Hauptsatz", ex: "Zuerst frühstücke ich, danach gehe ich zur Arbeit.", exTr: "Önce kahvaltı yaparım, ondan sonra işe giderim." }
      ]
    },
    {
      name: "Bedingung / Koşul",
      emoji: "🔀",
      items: [
        { k: "wenn", pos: "NS", tr: "eğer, -se", de: "reale Bedingung", ex: "Wenn du willst, helfe ich dir.", exTr: "İstersen sana yardım ederim." },
        { k: "falls", pos: "NS", tr: "şayet, olur da", de: "unsichere Bedingung", ex: "Falls es Probleme gibt, rufen Sie mich an.", exTr: "Sorun olursa beni arayın." },
        { k: "sonst", pos: "ADV", tr: "yoksa, aksi halde", de: "negative Folge, wenn etwas nicht passiert", ex: "Beeil dich, sonst verpassen wir den Zug!", exTr: "Acele et, yoksa treni kaçırırız!" },
        { k: "wenn … würde/hätte/wäre", pos: "NS", tr: "olsaydı (gerçek dışı)", de: "irreale Bedingung mit Konjunktiv II", ex: "Wenn ich reich wäre, würde ich viel reisen.", exTr: "Zengin olsaydım çok seyahat ederdim." }
      ]
    },
    {
      name: "Ziel & Folge / Amaç ve Sonuç",
      emoji: "🎯",
      items: [
        { k: "damit", pos: "NS", tr: "-sın diye, -mek için (farklı özneler)", de: "Ziel; Subjekte können verschieden sein", ex: "Ich spreche langsam, damit du mich verstehst.", exTr: "Beni anlayasın diye yavaş konuşuyorum." },
        { k: "um … zu + Infinitiv", pos: "NS", tr: "-mek için (aynı özne)", de: "Ziel; nur bei GLEICHEM Subjekt", ex: "Ich lerne jeden Tag, um die Prüfung zu bestehen.", exTr: "Sınavı geçmek için her gün çalışıyorum." },
        { k: "sodass / so … dass", pos: "NS", tr: "öyle ki, o kadar … ki", de: "Folge", ex: "Er sprach so leise, dass ich nichts verstand.", exTr: "O kadar sessiz konuştu ki hiçbir şey anlamadım." },
        { k: "also", pos: "ADV", tr: "demek ki, o halde", de: "logische Schlussfolgerung", ex: "Das Licht ist aus, also ist niemand zu Hause.", exTr: "Işık kapalı, demek ki evde kimse yok." }
      ]
    },
    {
      name: "Ergänzung & Aufzählung / Ekleme ve Sıralama",
      emoji: "➕",
      items: [
        { k: "und", pos: "P0", tr: "ve", de: "einfache Verbindung", ex: "Ich kaufe Brot und Käse.", exTr: "Ekmek ve peynir alıyorum." },
        { k: "außerdem", pos: "ADV", tr: "ayrıca, üstelik", de: "fügt eine Information hinzu", ex: "Die Wohnung ist groß, außerdem hat sie einen Balkon.", exTr: "Daire büyük, ayrıca balkonu da var." },
        { k: "sowohl … als auch", pos: "P0", tr: "hem … hem de", de: "beide Dinge treffen zu", ex: "Sie spricht sowohl Deutsch als auch Türkisch.", exTr: "Hem Almanca hem de Türkçe konuşuyor." },
        { k: "nicht nur … sondern auch", pos: "P0", tr: "sadece … değil, aynı zamanda", de: "Steigerung", ex: "Er ist nicht nur klug, sondern auch fleißig.", exTr: "Sadece zeki değil, aynı zamanda çalışkan." },
        { k: "weder … noch", pos: "P0", tr: "ne … ne de", de: "beides trifft NICHT zu", ex: "Ich habe weder Zeit noch Geld.", exTr: "Ne zamanım ne de param var." },
        { k: "zuerst … dann … zum Schluss", pos: "ADV", tr: "önce … sonra … en son", de: "Reihenfolge (super für Briefe!)", ex: "Zuerst lese ich die Aufgabe, dann schreibe ich, zum Schluss kontrolliere ich.", exTr: "Önce soruyu okurum, sonra yazarım, en son kontrol ederim." }
      ]
    },
    {
      name: "Alternative & Meinung / Alternatif ve Görüş",
      emoji: "💭",
      items: [
        { k: "oder", pos: "P0", tr: "veya, ya da", de: "Alternative", ex: "Kommst du mit, oder bleibst du hier?", exTr: "Geliyor musun, yoksa burada mı kalıyorsun?" },
        { k: "entweder … oder", pos: "P0", tr: "ya … ya da", de: "nur eine von zwei Möglichkeiten", ex: "Entweder gehen wir ins Kino oder wir bleiben zu Hause.", exTr: "Ya sinemaya gideriz ya da evde kalırız." },
        { k: "dass", pos: "NS", tr: "-dığını (yan cümle)", de: "nach Verben wie sagen, glauben, finden, hoffen", ex: "Ich finde, dass Deutsch interessant ist.", exTr: "Almancanın ilginç olduğunu düşünüyorum." },
        { k: "ob", pos: "NS", tr: "-ip -mediğini (evet/hayır sorusu)", de: "indirekte Ja/Nein-Frage", ex: "Ich weiß nicht, ob er heute kommt.", exTr: "Bugün gelip gelmeyeceğini bilmiyorum." },
        { k: "meiner Meinung nach", pos: "ADV", tr: "bence, benim görüşüme göre", de: "Meinung ausdrücken (Verb direkt danach!)", ex: "Meiner Meinung nach ist das eine gute Idee.", exTr: "Bence bu iyi bir fikir." }
      ]
    }
  ],
  quiz: [
    { q: "Ich nehme den Bus, ___ mein Auto kaputt ist.", options: ["weil", "deshalb", "trotzdem"], answer: 0, explain: { de: "Grund + Verb am Ende → „weil“.", tr: "Sebep + fiil sonda → „weil“." } },
    { q: "Mein Auto ist kaputt, ___ nehme ich den Bus.", options: ["weil", "deshalb", "denn"], answer: 1, explain: { de: "Folge + Verb direkt danach → „deshalb“.", tr: "Sonuç + fiil hemen sonra → „deshalb“." } },
    { q: "___ es stark regnete, sind wir spazieren gegangen.", options: ["Weil", "Obwohl", "Deshalb"], answer: 1, explain: { de: "Unerwarteter Gegensatz → „obwohl“.", tr: "Beklenmedik zıtlık → „obwohl“ (rağmen)." } },
    { q: "Er ist krank, ___ geht er zur Arbeit.", options: ["trotzdem", "obwohl", "sondern"], answer: 0, explain: { de: "Hauptsatz + unerwartete Folge → „trotzdem“.", tr: "Ana cümle + beklenmedik sonuç → „trotzdem“ (yine de)." } },
    { q: "___ ich ein Kind war, wohnten wir in Izmir.", options: ["Wenn", "Als", "Wann"], answer: 1, explain: { de: "Einmalige Zeit in der Vergangenheit → „als“.", tr: "Geçmişte bir kerelik dönem → „als“." } },
    { q: "Ich lerne viel, ___ die Prüfung zu bestehen.", options: ["damit", "um", "weil"], answer: 1, explain: { de: "Gleiches Subjekt + zu-Infinitiv → „um … zu“.", tr: "Aynı özne + zu'lu mastar → „um … zu“." } },
    { q: "Sprich lauter, ___ dich alle verstehen.", options: ["damit", "um", "denn"], answer: 0, explain: { de: "Verschiedene Subjekte (du/alle) → „damit“.", tr: "Farklı özneler (sen/herkes) → „damit“." } },
    { q: "___ ich gegessen hatte, machte ich einen Spaziergang.", options: ["Bevor", "Nachdem", "Während"], answer: 1, explain: { de: "Erst essen, dann spazieren → „nachdem“ + Plusquamperfekt.", tr: "Önce yemek, sonra yürüyüş → „nachdem“ + Plusquamperfekt." } },
    { q: "Beeil dich, ___ verpassen wir den Zug!", options: ["sonst", "falls", "sobald"], answer: 0, explain: { de: "Negative Folge → „sonst“.", tr: "Olumsuz sonuç → „sonst“ (yoksa)." } },
    { q: "Er kommt nicht am Montag, ___ am Dienstag.", options: ["aber", "sondern", "oder"], answer: 1, explain: { de: "Korrektur nach Verneinung → „sondern“.", tr: "Olumsuzlamadan sonra düzeltme → „sondern“." } },
    { q: "Ich weiß nicht, ___ der Kurs schon begonnen hat.", options: ["dass", "ob", "wenn"], answer: 1, explain: { de: "Indirekte Ja/Nein-Frage → „ob“.", tr: "Dolaylı evet/hayır sorusu → „ob“." } },
    { q: "Sie spricht ___ Deutsch ___ Englisch.", options: ["sowohl … als auch", "entweder … noch", "weder … oder"], answer: 0, explain: { de: "Beides trifft zu → „sowohl … als auch“. Die anderen Kombinationen existieren nicht!", tr: "İkisi de geçerli → „sowohl … als auch“. Diğer kombinasyonlar yanlış!" } }
  ]
};
