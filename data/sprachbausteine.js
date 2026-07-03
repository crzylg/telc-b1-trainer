// ===== Sprachbausteine – Übungen im telc-Format =====
window.SPRACHBAUSTEINE = {

  // Teil 1: Multiple Choice a/b/c (Grammatik)
  teil1: [
    {
      id: "sb1-a",
      title: "Teil 1 – Übung 1: Brief an die Vermieterin",
      anleitung: {
        de: "Lesen Sie den Brief. Welches Wort (a, b oder c) passt in die Lücke?",
        tr: "Mektubu oku. Boşluğa hangi kelime (a, b veya c) uyuyor?"
      },
      intro: "Sehr geehrte Frau Weber,",
      gaps: [
        { before: "ich schreibe Ihnen, ", after: " die Heizung in meiner Wohnung seit drei Tagen nicht funktioniert.", options: ["weil", "denn", "deshalb"], answer: 0, explain: { de: "Nach „weil“ steht das Verb am Ende – das passt hier. „denn“ hätte normale Wortstellung.", tr: "„weil“den sonra fiil sona gider – buraya uyan bu. „denn“ olsaydı normal kelime sırası gerekirdi." } },
        { before: "Ich habe schon mehrmals versucht, Sie telefonisch zu ", after: ", aber leider ohne Erfolg.", options: ["erreichen", "erreiche", "erreicht"], answer: 0, explain: { de: "Nach „zu“ steht der Infinitiv: „zu erreichen“.", tr: "„zu“dan sonra mastar gelir: „zu erreichen“." } },
        { before: "In der Wohnung ist es jetzt ", after: " als draußen.", options: ["kalt", "kälter", "am kältesten"], answer: 1, explain: { de: "Vergleich mit „als“ → Komparativ: „kälter als“.", tr: "„als“ ile karşılaştırma → üstünlük derecesi: „kälter als“ (daha soğuk)." } },
        { before: "Mein Sohn, ", after: " erst zwei Jahre alt ist, ist schon erkältet.", options: ["das", "der", "den"], answer: 1, explain: { de: "Relativsatz: „der Sohn“ → Relativpronomen „der“ (Nominativ, weil er im Nebensatz das Subjekt ist).", tr: "İlgi cümlesi: „der Sohn“ → ilgi zamiri „der“ (özne olduğu için Nominativ)." } },
        { before: "Ich bitte Sie, ", after: " schnell wie möglich einen Handwerker zu schicken.", options: ["so", "sehr", "zu"], answer: 0, explain: { de: "Feste Wendung: „so schnell wie möglich“.", tr: "Kalıp ifade: „so schnell wie möglich“ (mümkün olduğunca çabuk)." } },
        { before: "Falls das Problem nicht bald gelöst ", after: ", werde ich die Miete kürzen.", options: ["wird", "werden", "wurde"], answer: 0, explain: { de: "Passiv Präsens: „das Problem wird gelöst“ – Subjekt ist Singular.", tr: "Şimdiki zaman edilgen: „das Problem wird gelöst“ – özne tekil." } },
        { before: "Ich wäre Ihnen sehr dankbar, wenn Sie ", after: " bald bei mir melden könnten.", options: ["sich", "mich", "Ihnen"], answer: 0, explain: { de: "Reflexives Verb: „sich melden“ – bei der Sie-Form bleibt es „sich“.", tr: "Dönüşlü fiil: „sich melden“ – Sie formunda „sich“ olarak kalır." } },
        { before: "Am besten erreichen Sie mich ", after: " 18 Uhr zu Hause.", options: ["ab", "seit", "vor"], answer: 0, explain: { de: "„ab 18 Uhr“ = von 18 Uhr an (Zukunft/allgemein). „seit“ nur für Vergangenheit bis jetzt.", tr: "„ab 18 Uhr“ = saat 18'den itibaren. „seit“ sadece geçmişten şimdiye kadar olan süre için." } },
        { before: "Vielen Dank ", after: " Ihre Hilfe!", options: ["über", "für", "von"], answer: 1, explain: { de: "Feste Verbindung: „sich bedanken für“ / „Danke für“.", tr: "Kalıp: „Danke für“ (bir şey için teşekkürler)." } },
        { before: "Mit ", after: " Grüßen", options: ["freundliche", "freundlichen", "freundlicher"], answer: 1, explain: { de: "„mit“ + Dativ Plural: „mit freundlichen Grüßen“.", tr: "„mit“ + Dativ çoğul: „mit freundlichen Grüßen“." } }
      ]
    },
    {
      id: "sb1-b",
      title: "Teil 1 – Übung 2: E-Mail an einen Freund",
      anleitung: {
        de: "Lesen Sie die E-Mail. Welches Wort (a, b oder c) passt in die Lücke?",
        tr: "E-postayı oku. Boşluğa hangi kelime (a, b veya c) uyuyor?"
      },
      intro: "Lieber Jan,",
      gaps: [
        { before: "endlich habe ich Zeit, dir ", after: " schreiben.", options: ["zu", "für", "um"], answer: 0, explain: { de: "Infinitiv mit „zu“: „Zeit haben, etwas zu tun“.", tr: "„zu“lu mastar: „Zeit haben, etwas zu tun“ (bir şey yapmaya vakti olmak)." } },
        { before: "Letzten Monat ", after: " ich eine neue Stelle gefunden.", options: ["bin", "habe", "werde"], answer: 1, explain: { de: "Perfekt von „finden“ mit „haben“: „ich habe gefunden“.", tr: "„finden“ fiilinin Perfekt'i „haben“ ile: „ich habe gefunden“." } },
        { before: "Ich arbeite jetzt bei einer Firma, ", after: " Software für Krankenhäuser entwickelt.", options: ["die", "der", "das"], answer: 0, explain: { de: "„die Firma“ → Relativpronomen „die“.", tr: "„die Firma“ → ilgi zamiri „die“." } },
        { before: "", after: " ich anfangs nervös war, gefällt mir die Arbeit sehr gut.", options: ["Obwohl", "Weil", "Damit"], answer: 0, explain: { de: "Logik: nervös sein ↔ trotzdem gefällt die Arbeit → Gegensatz → „obwohl“.", tr: "Mantık: gergin olmak ↔ yine de işi sevmek → zıtlık → „obwohl“ (rağmen)." } },
        { before: "Meine Kollegen sind netter, ", after: " ich erwartet hatte.", options: ["wie", "als", "dass"], answer: 1, explain: { de: "Komparativ „netter“ → Vergleich mit „als“.", tr: "Üstünlük derecesi „netter“ → „als“ ile karşılaştırma." } },
        { before: "Wenn ich mehr Geld verdienen würde, ", after: " ich mir eine größere Wohnung mieten.", options: ["würde", "werde", "will"], answer: 0, explain: { de: "Konjunktiv II (irreale Bedingung): „würde … mieten“.", tr: "Konjunktiv II (gerçek dışı koşul): „würde … mieten“ (kiralardım)." } },
        { before: "Erinnerst du ", after: " noch an unseren Urlaub in Italien?", options: ["dir", "dich", "sich"], answer: 1, explain: { de: "„sich erinnern an“ + Akkusativ-Reflexivpronomen: „du erinnerst dich“.", tr: "„sich erinnern an“ + Akkusativ dönüşlü zamir: „du erinnerst dich“ (hatırlıyorsun)." } },
        { before: "Wir sollten unbedingt wieder zusammen ", after: " fahren.", options: ["im Urlaub", "in Urlaub", "nach Urlaub"], answer: 1, explain: { de: "Feste Wendung: „in Urlaub fahren“ (Richtung). „im Urlaub sein“ = Zustand.", tr: "Kalıp: „in Urlaub fahren“ (tatile gitmek). „im Urlaub sein“ = tatilde olmak." } },
        { before: "Hast du Lust, mich ", after: " Sommer zu besuchen?", options: ["im", "am", "um"], answer: 0, explain: { de: "Jahreszeiten mit „im“: im Sommer, im Winter.", tr: "Mevsimlerle „im“: im Sommer (yazın), im Winter (kışın)." } },
        { before: "Ich freue mich schon ", after: " deine Antwort.", options: ["über", "auf", "an"], answer: 1, explain: { de: "„sich freuen AUF“ = etwas liegt in der Zukunft. „sich freuen über“ = etwas ist schon da.", tr: "„sich freuen AUF“ = gelecekteki bir şeye sevinmek. „sich freuen über“ = olmuş bir şeye sevinmek." } }
      ]
    }
  ],

  // Teil 2: Wortbank a–o (Wortschatz)
  teil2: [
    {
      id: "sb2-a",
      title: "Teil 2 – Übung 1: E-Mail an die Sprachschule",
      anleitung: {
        de: "Lesen Sie den Text. Welches Wort aus der Liste (a–o) passt in die Lücke? Jedes Wort nur einmal benutzen! Fünf Wörter bleiben übrig.",
        tr: "Metni oku. Listedeki (a–o) hangi kelime boşluğa uyuyor? Her kelimeyi sadece bir kez kullan! Beş kelime kullanılmadan kalır."
      },
      words: ["ANMELDEN", "AUSKUNFT", "BESONDERS", "DESHALB", "ERFAHRUNG", "GERN", "KOSTET", "LEIDER", "MITTEILEN", "MÖGLICHKEIT", "OBWOHL", "SEIT", "STATTFINDET", "TERMIN", "VORAUS"],
      intro: "Sehr geehrte Damen und Herren,",
      gaps: [
        { before: "ich lebe ", after: " einem Jahr in Deutschland und möchte mein Deutsch verbessern.", answer: 11, explain: { de: "„seit einem Jahr“ – Zeitraum von der Vergangenheit bis jetzt + Dativ.", tr: "„seit einem Jahr“ (bir yıldan beri) – geçmişten şimdiye süre + Dativ." } },
        { before: "Auf Ihrer Internetseite habe ich gelesen, dass bei Ihnen bald ein neuer B1-Kurs ", after: ".", answer: 12, explain: { de: "Nebensatz mit „dass“ → Verb am Ende: „stattfindet“ (kurs yapılıyor).", tr: "„dass“lı yan cümle → fiil sonda: „stattfindet“ (gerçekleşiyor)." } },
        { before: "Ich möchte mich gern für diesen Kurs ", after: ".", answer: 0, explain: { de: "„sich anmelden für“ = kaydolmak. Modalverb „möchte“ → Infinitiv am Ende.", tr: "„sich anmelden für“ = kaydolmak. „möchte” → mastar sonda." } },
        { before: "Ich habe schon ", after: " mit Onlinekursen, aber ich lerne lieber in einer Gruppe.", answer: 4, explain: { de: "„Erfahrung haben mit“ = deneyimi olmak.", tr: "„Erfahrung haben mit“ = bir konuda deneyimi olmak." } },
        { before: "", after: " interessiere ich mich für die Vorbereitung auf die telc-Prüfung.", answer: 2, explain: { de: "„Besonders“ (özellikle) am Satzanfang → Verb an Position 2.", tr: "„Besonders“ (özellikle) cümle başında → fiil 2. pozisyonda." } },
        { before: "Könnten Sie mir ", after: ", wann genau der Kurs beginnt?", answer: 8, explain: { de: "„jemandem etwas mitteilen“ = bildirmek. Höfliche Frage mit „Könnten Sie“.", tr: "„mitteilen“ = bildirmek. „Könnten Sie“ ile kibar soru." } },
        { before: "Ich möchte auch wissen, wie viel der Kurs ", after: " und ob es eine Ermäßigung für Studenten gibt.", answer: 6, explain: { de: "Indirekte Frage: „wie viel der Kurs kostet“ – Verb am Ende.", tr: "Dolaylı soru: „wie viel der Kurs kostet“ (kurs ne kadar tutuyor) – fiil sonda." } },
        { before: "Gibt es die ", after: ", vorher einen Einstufungstest zu machen?", answer: 9, explain: { de: "„die Möglichkeit haben, etwas zu tun“ = imkânı olmak.", tr: "„die Möglichkeit“ = imkân, olanak." } },
        { before: "", after: " kann ich Ihre Schule erst nach 17 Uhr besuchen, weil ich tagsüber arbeite.", answer: 7, explain: { de: "„Leider“ (maalesef) passt logisch: Einschränkung wegen der Arbeit.", tr: "„Leider“ (maalesef) mantıken uyar: iş nedeniyle kısıtlama." } },
        { before: "Vielen Dank im ", after: " für Ihre Antwort.", answer: 14, explain: { de: "Feste Formel: „Vielen Dank im Voraus“ = şimdiden teşekkürler.", tr: "Kalıp: „Vielen Dank im Voraus“ = şimdiden teşekkürler." } }
      ]
    }
  ]
};
