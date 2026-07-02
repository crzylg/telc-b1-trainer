// ===== Leseverstehen – Übungen im telc/Goethe-Format =====
window.LESEN = {

  // ---------- TEIL 1: Überschriften zuordnen ----------
  teil1: [
    {
      id: "t1-a",
      title: "Übung 1: Überschriften zuordnen",
      anleitung: {
        de: "Lesen Sie zuerst die 10 Überschriften. Lesen Sie dann die 5 Texte und entscheiden Sie, welche Überschrift (a–j) am besten passt.",
        tr: "Önce 10 başlığı oku. Sonra 5 metni oku ve hangi başlığın (a–j) en iyi uyduğuna karar ver."
      },
      headings: [
        "Immer mehr Deutsche arbeiten von zu Hause",
        "Neues Schwimmbad öffnet im Sommer",
        "Bahn wird teurer: Kunden sind sauer",
        "Mit dem Rad zur Arbeit: gesund und günstig",
        "Supermärkte verkaufen weniger Fleisch",
        "Stadt plant mehr Busse am Wochenende",
        "Deutsche essen wieder mehr Bio-Produkte",
        "Streik: Am Montag fahren keine Züge",
        "Sport im Alter: Nie zu spät anzufangen",
        "Homeoffice: Firmen holen Mitarbeiter zurück"
      ],
      texts: [
        {
          text: "Gute Nachrichten für alle, die im Sommer gern baden gehen: Nach drei Jahren Bauzeit ist das neue Freibad an der Parkstraße endlich fertig. Ab dem 15. Juni können Besucher dort schwimmen. Es gibt ein großes Becken, eine Rutsche für Kinder und eine Liegewiese. Der Eintritt kostet für Erwachsene 4 Euro, Kinder unter sechs Jahren zahlen nichts.",
          answer: 1,
          explain: { de: "Der Text handelt vom neuen Freibad, das im Sommer (15. Juni) öffnet → Überschrift b.", tr: "Metin yazın (15 Haziran) açılacak yeni yüzme havuzunu anlatıyor → başlık b." }
        },
        {
          text: "Viele Menschen glauben, dass Sport nur etwas für junge Leute ist. Doch Ärzte sagen etwas anderes: Auch wer erst mit 60 oder 70 Jahren anfängt, sich regelmäßig zu bewegen, lebt gesünder. Schon dreimal pro Woche spazieren gehen oder leichte Gymnastik machen hilft dem Herzen und den Muskeln. Wichtig ist nur, langsam anzufangen und vorher mit dem Hausarzt zu sprechen.",
          answer: 8,
          explain: { de: "Hauptaussage: Auch ältere Menschen können mit Sport beginnen → Überschrift i. Achtung: Es geht nicht ums Fahrradfahren (d)!", tr: "Ana fikir: Yaşlılar da spora başlayabilir → başlık i. Dikkat: Konu bisiklet (d) değil!" }
        },
        {
          text: "Während der Corona-Zeit arbeiteten Millionen Deutsche von zu Hause. Doch jetzt ändert sich das Bild wieder: Immer mehr Unternehmen verlangen, dass ihre Angestellten mindestens drei Tage pro Woche ins Büro kommen. Die Chefs sagen, die Zusammenarbeit im Team funktioniere vor Ort besser. Viele Beschäftigte sind damit allerdings nicht einverstanden und suchen sogar eine neue Stelle.",
          answer: 9,
          explain: { de: "Kernaussage: Firmen holen die Mitarbeiter zurück ins Büro → Überschrift j. Überschrift a (immer mehr im Homeoffice) sagt das Gegenteil – typische Falle!", tr: "Ana fikir: Firmalar çalışanları ofise geri çağırıyor → başlık j. Başlık a (giderek daha çok evden çalışma) tam tersini söylüyor – tipik tuzak!" }
        },
        {
          text: "Ab Dezember müssen Fahrgäste wieder tiefer in die Tasche greifen: Die Deutsche Bahn erhöht die Preise für Fernfahrten um durchschnittlich 5,9 Prozent. Auch die BahnCard wird teurer. Der Fahrgastverband kritisiert die Entscheidung scharf: Wer mehr Menschen in die Züge bringen wolle, dürfe die Tickets nicht ständig teurer machen, sagte ein Sprecher.",
          answer: 2,
          explain: { de: "Preiserhöhung + Kritik der Kunden → Überschrift c. Es geht nicht um einen Streik (h) – die Züge fahren ja.", tr: "Fiyat artışı + müşterilerin tepkisi → başlık c. Konu grev (h) değil – trenler çalışıyor." }
        },
        {
          text: "Wurst und Schnitzel landen bei den Deutschen immer seltener im Einkaufswagen. Wie das Statistische Bundesamt mitteilt, kauften die Haushalte im vergangenen Jahr rund acht Prozent weniger Fleisch als im Jahr davor. Als Gründe nennen Experten die gestiegenen Preise, aber auch das wachsende Interesse an gesunder Ernährung und am Klimaschutz.",
          answer: 4,
          explain: { de: "Es geht um sinkenden Fleischverkauf → Überschrift e. Bio-Produkte (g) werden nicht erwähnt – gleiche Themenwelt, aber falscher Inhalt.", tr: "Konu düşen et satışı → başlık e. Bio ürünlerden (g) bahsedilmiyor – benzer konu dünyası ama yanlış içerik." }
        }
      ]
    },
    {
      id: "t1-b",
      title: "Übung 2: Überschriften zuordnen",
      anleitung: {
        de: "Lesen Sie zuerst die 10 Überschriften. Lesen Sie dann die 5 Texte und entscheiden Sie, welche Überschrift (a–j) am besten passt.",
        tr: "Önce 10 başlığı oku. Sonra 5 metni oku ve hangi başlığın (a–j) en iyi uyduğuna karar ver."
      },
      headings: [
        "Handy in der Schule: Lehrer fordern Verbot",
        "Neue App hilft beim Deutschlernen",
        "Bibliothek jetzt auch sonntags geöffnet",
        "Junge Leute lesen mehr E-Books",
        "Stadtfest: Straßen am Samstag gesperrt",
        "Weniger Unfälle dank neuer Ampeln",
        "Ferienjobs: Was Schüler wissen müssen",
        "Deutschkurse der Volkshochschule sind voll",
        "Mehr Geld für Familien ab Januar",
        "Flohmarkt sammelt Spenden für Kinder"
      ],
      texts: [
        {
          text: "Wer in den Sommerferien arbeiten möchte, sollte einige Regeln kennen: Schülerinnen und Schüler ab 15 Jahren dürfen in den Ferien maximal vier Wochen pro Jahr jobben, höchstens acht Stunden am Tag. Nachtarbeit ist verboten. Wichtig: Auch für einen Ferienjob braucht man einen schriftlichen Vertrag, und die Eltern müssen zustimmen.",
          answer: 6,
          explain: { de: "Regeln für Schüler-Ferienjobs → Überschrift g.", tr: "Öğrenci yaz işleri için kurallar → başlık g." }
        },
        {
          text: "Am kommenden Samstag feiert unsere Stadt ihr großes Sommerfest. Von 10 bis 22 Uhr gibt es Musik, Essen aus aller Welt und ein Programm für Kinder. Autofahrer müssen sich allerdings umstellen: Die Hauptstraße und der Marktplatz sind den ganzen Tag für den Verkehr gesperrt. Die Stadt empfiehlt, mit Bus und Bahn zu kommen.",
          answer: 4,
          explain: { de: "Stadtfest + gesperrte Straßen am Samstag → Überschrift e.", tr: "Şehir festivali + cumartesi kapalı yollar → başlık e." }
        },
        {
          text: "Die Nachfrage ist riesig: Alle Deutschkurse der Volkshochschule für das kommende Semester sind bereits ausgebucht, besonders die Kurse auf den Niveaus A2 und B1. Die VHS will deshalb ab Herbst zusätzliche Kurse am Abend und am Wochenende anbieten. Wer auf der Warteliste steht, wird automatisch informiert.",
          answer: 7,
          explain: { de: "Volle Deutschkurse an der VHS → Überschrift h. Es geht nicht um eine App (b)!", tr: "Halk eğitim merkezinin dolu Almanca kursları → başlık h. Konu bir uygulama (b) değil!" }
        },
        {
          text: "Gute Nachrichten für Leseratten: Die Stadtbibliothek ändert ihre Öffnungszeiten. Ab nächstem Monat kann man dort auch am Sonntag von 10 bis 16 Uhr Bücher ausleihen, lernen oder Zeitungen lesen. Damit reagiert die Stadt auf viele Wünsche von Studierenden und Familien, die unter der Woche wenig Zeit haben.",
          answer: 2,
          explain: { de: "Bibliothek öffnet sonntags → Überschrift c. E-Books (d) kommen nicht vor.", tr: "Kütüphane pazar günleri açılıyor → başlık c. E-kitaplardan (d) söz edilmiyor." }
        },
        {
          text: "An der Kreuzung vor dem Bahnhof hat es früher fast jede Woche gekracht. Vor einem Jahr hat die Stadt dort moderne Ampeln mit Sensoren aufgestellt – mit Erfolg: Die Polizei zählte seitdem 40 Prozent weniger Unfälle. Nun sollen auch an anderen gefährlichen Kreuzungen solche Anlagen gebaut werden.",
          answer: 5,
          explain: { de: "Neue Ampeln → weniger Unfälle → Überschrift f.", tr: "Yeni trafik ışıkları → daha az kaza → başlık f." }
        }
      ]
    }
  ],

  // ---------- TEIL 2: Multiple Choice zu einem Zeitungsartikel ----------
  teil2: [
    {
      id: "t2-a",
      title: "Übung 1: Zeitungsartikel „Ehrenamt“",
      anleitung: {
        de: "Lesen Sie den Text und die Aufgaben 1–5. Welche Lösung (a, b oder c) ist richtig?",
        tr: "Metni ve 1–5 arası soruları oku. Hangi cevap (a, b veya c) doğru?"
      },
      text: "<strong>Arbeiten ohne Geld – warum Millionen Deutsche ein Ehrenamt haben</strong><br><br>Ob bei der Freiwilligen Feuerwehr, im Sportverein oder in der Flüchtlingshilfe: Rund 29 Millionen Menschen in Deutschland arbeiten in ihrer Freizeit freiwillig und ohne Bezahlung – das ist fast jeder Dritte. Warum machen sie das?<br><br>Maria Schneider (54) aus Köln trainiert seit zwölf Jahren eine Mädchen-Fußballmannschaft. „Am Anfang habe ich nur ausgeholfen, weil die Trainerin krank war“, erzählt sie. „Aber die Arbeit mit den Kindern hat mir so viel Freude gemacht, dass ich geblieben bin.“ Zweimal pro Woche steht sie auf dem Platz, am Wochenende fährt sie mit dem Team zu Spielen. Geld bekommt sie dafür nicht – nur die Fahrtkosten werden ihr ersetzt.<br><br>Wissenschaftler haben untersucht, was Menschen zum Ehrenamt motiviert. Das Ergebnis: Die meisten wollen anderen helfen, aber fast genauso wichtig ist der Kontakt zu anderen Menschen. Viele sagen auch, dass sie durch das Ehrenamt neue Fähigkeiten lernen, die ihnen im Beruf helfen.<br><br>Es gibt allerdings auch Probleme: Viele Vereine finden immer schwerer Freiwillige, besonders junge Leute. Experten meinen, das liege nicht am fehlenden Interesse, sondern an der fehlenden Zeit: Wer lange arbeitet oder studiert, hat oft keine Kraft mehr für regelmäßige Termine. Deshalb bieten manche Organisationen jetzt flexible Projekte an, bei denen man auch nur einmal im Monat helfen kann.",
      questions: [
        {
          q: "1. In Deutschland arbeitet etwa jeder dritte Mensch …",
          options: ["freiwillig und ohne Bezahlung.", "bei der Feuerwehr.", "in einem Sportverein."],
          answer: 0,
          explain: { de: "„Rund 29 Millionen … das ist fast jeder Dritte“ – Feuerwehr und Sportverein sind nur Beispiele.", tr: "„Yaklaşık 29 milyon … neredeyse her üç kişiden biri“ – itfaiye ve spor kulübü sadece örnek." }
        },
        {
          q: "2. Maria Schneider hat mit dem Training angefangen, weil …",
          options: ["sie schon immer Trainerin werden wollte.", "die Trainerin krank war und sie aushalf.", "ihre Tochter in der Mannschaft spielte."],
          answer: 1,
          explain: { de: "„Am Anfang habe ich nur ausgeholfen, weil die Trainerin krank war.“ Option c steht nicht im Text!", tr: "„Başta sadece yardım ettim, çünkü antrenör hastaydı.“ c seçeneği metinde yok!" }
        },
        {
          q: "3. Für ihre Arbeit bekommt Maria …",
          options: ["ein kleines Gehalt.", "gar nichts.", "nur die Fahrtkosten zurück."],
          answer: 2,
          explain: { de: "„Geld bekommt sie dafür nicht – nur die Fahrtkosten werden ihr ersetzt.“ Option b ist eine Falle: Sie bekommt zwar kein Gehalt, aber die Fahrtkosten.", tr: "„Para almıyor – sadece yol masrafları karşılanıyor.“ b seçeneği tuzak: Maaş almıyor ama yol parası alıyor." }
        },
        {
          q: "4. Laut der Untersuchung ist für viele Ehrenamtliche besonders wichtig, …",
          options: ["dass sie mehr Geld verdienen.", "dass sie anderen helfen und Menschen treffen.", "dass sie im Beruf schneller Karriere machen."],
          answer: 1,
          explain: { de: "„Die meisten wollen anderen helfen, aber fast genauso wichtig ist der Kontakt zu anderen Menschen.“", tr: "„Çoğu başkalarına yardım etmek istiyor, ama insanlarla temas neredeyse aynı derecede önemli.“" }
        },
        {
          q: "5. Junge Leute engagieren sich seltener, weil sie …",
          options: ["kein Interesse haben.", "wenig Zeit haben.", "lieber Geld verdienen wollen."],
          answer: 1,
          explain: { de: "„… das liege nicht am fehlenden Interesse, sondern an der fehlenden Zeit.“ Der Konnektor „nicht …, sondern …“ ist hier entscheidend!", tr: "„… ilgisizlikten değil, zamansızlıktan.“ Buradaki „nicht …, sondern …“ (değil …, aksine …) bağlacı belirleyici!" }
        }
      ]
    },
    {
      id: "t2-b",
      title: "Übung 2: Zeitungsartikel „Wochenmarkt“",
      anleitung: {
        de: "Lesen Sie den Text und die Aufgaben 1–5. Welche Lösung (a, b oder c) ist richtig?",
        tr: "Metni ve 1–5 arası soruları oku. Hangi cevap (a, b veya c) doğru?"
      },
      text: "<strong>Einkaufen mit allen Sinnen – der Wochenmarkt erlebt ein Comeback</strong><br><br>Jahrelang sah es so aus, als hätten die Wochenmärkte gegen die großen Supermärkte keine Chance. Doch seit einiger Zeit ändert sich das: Immer mehr Menschen, vor allem in den Städten, kaufen ihr Obst und Gemüse wieder am Marktstand.<br><br>Ein Grund dafür ist das gestiegene Interesse an regionalen Lebensmitteln. „Meine Kunden wollen wissen, woher die Kartoffeln kommen“, sagt Bauer Heinrich Mertens, der seit 30 Jahren auf dem Markt in Frankfurt steht. „Bei mir kommt alles vom eigenen Feld, keine 40 Kilometer von hier.“ Im Supermarkt dagegen kommen Tomaten oft aus Spanien und Äpfel sogar aus Neuseeland.<br><br>Auch die Atmosphäre spielt eine Rolle. Auf dem Markt trifft man Nachbarn, probiert einen neuen Käse, bekommt vom Händler ein Rezept empfohlen. „Das kann kein Online-Shop und kein Supermarkt bieten“, meint eine Kundin, die jeden Samstag zum Markt kommt.<br><br>Ein Problem bleibt allerdings der Preis: Auf dem Markt kostet vieles mehr als im Discounter. Händler Mertens versteht, dass nicht jeder so viel ausgeben kann. Er beobachtet aber, dass viele Kunden lieber weniger, dafür aber bessere Lebensmittel kaufen. Und wer kurz vor Marktschluss kommt, bekommt Obst und Gemüse oft deutlich billiger – die Händler wollen ihre Ware nicht wieder mit nach Hause nehmen.",
      questions: [
        {
          q: "1. Die Wochenmärkte …",
          options: ["verlieren immer mehr Kunden.", "werden wieder beliebter.", "sind billiger als Supermärkte."],
          answer: 1,
          explain: { de: "„… erlebt ein Comeback“, „immer mehr Menschen … kaufen wieder am Marktstand“.", tr: "„… yeniden yükselişte“, „giderek daha fazla insan pazardan alışveriş yapıyor“." }
        },
        {
          q: "2. Die Kunden von Bauer Mertens möchten …",
          options: ["möglichst billig einkaufen.", "wissen, woher die Produkte kommen.", "Produkte aus Spanien kaufen."],
          answer: 1,
          explain: { de: "„Meine Kunden wollen wissen, woher die Kartoffeln kommen.“", tr: "„Müşterilerim patateslerin nereden geldiğini bilmek istiyor.“" }
        },
        {
          q: "3. Was gibt es laut Text nur auf dem Markt?",
          options: ["Persönlichen Kontakt und Beratung.", "Frisches Obst und Gemüse.", "Produkte aus Neuseeland."],
          answer: 0,
          explain: { de: "„Auf dem Markt trifft man Nachbarn … bekommt ein Rezept empfohlen. Das kann kein Online-Shop und kein Supermarkt bieten.“", tr: "„Pazarda komşularla karşılaşırsın … tarif önerisi alırsın. Bunu ne online mağaza ne süpermarket sunabilir.“" }
        },
        {
          q: "4. Viele Marktkunden kaufen lieber …",
          options: ["große Mengen zu kleinen Preisen.", "weniger, aber bessere Qualität.", "nur noch im Discounter."],
          answer: 1,
          explain: { de: "„… dass viele Kunden lieber weniger, dafür aber bessere Lebensmittel kaufen.“", tr: "„… birçok müşteri daha az ama daha kaliteli gıda almayı tercih ediyor.“" }
        },
        {
          q: "5. Kurz vor Marktschluss …",
          options: ["sind viele Produkte günstiger.", "ist die Ware schon ausverkauft.", "schließen die Händler ihre Stände früher."],
          answer: 0,
          explain: { de: "„Wer kurz vor Marktschluss kommt, bekommt Obst und Gemüse oft deutlich billiger.“", tr: "„Pazar kapanışından hemen önce gelen, meyve ve sebzeyi genelde çok daha ucuza alır.“" }
        }
      ]
    }
  ],

  // ---------- TEIL 3: Anzeigen zuordnen ----------
  teil3: [
    {
      id: "t3-a",
      title: "Übung: Anzeigen zuordnen",
      anleitung: {
        de: "Lesen Sie die Situationen 1–10 und die Anzeigen a–l. Finden Sie für jede Situation die passende Anzeige. Sie können jede Anzeige nur einmal benutzen. Wenn Sie zu einer Situation keine Anzeige finden, markieren Sie ein „x“ (wie in der echten telc-Prüfung!).",
        tr: "1–10 arası durumları ve a–l arası ilanları oku. Her durum için uygun ilanı bul. Her ilanı sadece bir kez kullanabilirsin. Bir duruma uygun ilan bulamazsan „x“ işaretle (gerçek telc sınavındaki gibi!)."
      },
      ads: [
        "Nachhilfe in Mathe und Physik! Lehramtsstudent gibt Schülern aller Klassen Unterricht bei Ihnen zu Hause. 15 €/Stunde. Tel. 0171-2345678",
        "Umzüge Schmidt – schnell & günstig! Wir transportieren Ihre Möbel sicher in die neue Wohnung. Auch am Wochenende. Kostenloses Angebot: www.umzug-schmidt.de",
        "Deutsch am Abend! Intensivkurs B1–B2 für Berufstätige, Mo–Do 18:30–20:30, Start jeden Monat. Sprachschule Lingua, Bahnhofstr. 12",
        "3-Zimmer-Wohnung (75 m²) mit Balkon ab 1. September zu vermieten. Nähe U-Bahn, 890 € warm. Keine Haustiere. Tel. 069-998877",
        "Flohmarkt am Sonntag! Verkaufen Sie Ihre gebrauchten Sachen – Standgebühr nur 10 €. Anmeldung im Bürgerhaus.",
        "Fahrräder aller Art – neu und gebraucht! Große Auswahl, faire Preise, eigene Werkstatt für Reparaturen. Radhaus am Ring, Mo–Sa 9–18 Uhr",
        "Suchen Sie einen Babysitter? Erfahrene Erzieherin betreut Ihre Kinder abends und am Wochenende. 12 €/Stunde. Tel. 0160-445566",
        "Kellner/in gesucht! Restaurant Adria sucht ab sofort freundliche Mitarbeiter für abends und am Wochenende. Erfahrung nicht nötig. Bewerbung an info@adria-restaurant.de",
        "Computerhilfe für Senioren: Geduldiger IT-Fachmann erklärt Ihnen Handy, Tablet und PC – bei Ihnen zu Hause. Erste Stunde gratis! Tel. 0152-778899",
        "Günstige Flüge & Hotels! Reisebüro Sonnenschein plant Ihren Urlaub – persönliche Beratung, beste Preise. Marktplatz 3, Mo–Fr 10–18 Uhr",
        "Gitarrenunterricht vom Profi-Musiker: Einzelunterricht für Anfänger und Fortgeschrittene, alle Altersgruppen. Erste Probestunde kostenlos. Tel. 0176-334455",
        "Fitness 50+: Sanftes Training für ältere Menschen, zweimal pro Woche vormittags, mit erfahrenen Trainern. Sportzentrum West, Info: 069-112233"
      ],
      situations: [
        { s: "1. Ihr Sohn hat Probleme in Mathematik und braucht Hilfe.", answer: 0, explain: { de: "Nachhilfe in Mathe → Anzeige a.", tr: "Matematik özel dersi → ilan a." } },
        { s: "2. Sie ziehen nächsten Monat um und brauchen Hilfe beim Transport Ihrer Möbel.", answer: 1, explain: { de: "Umzugsfirma → Anzeige b.", tr: "Nakliye firması → ilan b." } },
        { s: "3. Sie arbeiten tagsüber und möchten abends Ihr Deutsch verbessern.", answer: 2, explain: { de: "Abendkurs für Berufstätige → Anzeige c. „Tagsüber arbeiten“ + „abends lernen“ müssen beide passen!", tr: "Çalışanlar için akşam kursu → ilan c. „Gündüz çalışmak“ + „akşam öğrenmek“ ikisi de uymalı!" } },
        { s: "4. Ihre Freundin sucht eine Wohnung mit Balkon, in der auch ihre Katze wohnen darf.", answer: -1, explain: { de: "FALLE! Anzeige d hat zwar einen Balkon, aber dort steht „Keine Haustiere“ – die Katze darf nicht mit. Also: „x“. Genau solche Fallen gibt es in der echten Prüfung!", tr: "TUZAK! İlan d'de balkon var ama „Keine Haustiere“ (evcil hayvan yasak) yazıyor – kedi giremez. Yani: „x“. Gerçek sınavda tam böyle tuzaklar var!" } },
        { s: "5. Sie möchten alte Kleidung und Bücher verkaufen.", answer: 4, explain: { de: "Flohmarkt mit Verkaufsstand → Anzeige e.", tr: "Satış standı olan bit pazarı → ilan e." } },
        { s: "6. Ihr Fahrrad ist kaputt und muss repariert werden.", answer: 5, explain: { de: "„eigene Werkstatt für Reparaturen“ → Anzeige f.", tr: "„tamir için kendi atölyemiz“ → ilan f." } },
        { s: "7. Sie und Ihr Mann möchten am Samstagabend ins Theater. Jemand soll auf Ihre kleine Tochter aufpassen.", answer: 6, explain: { de: "Babysitter am Abend/Wochenende → Anzeige g.", tr: "Akşam/hafta sonu bakıcı → ilan g." } },
        { s: "8. Ihr Neffe (19) sucht einen Job für abends. Er hat noch nie gearbeitet.", answer: 7, explain: { de: "Kellner-Job abends, „Erfahrung nicht nötig“ → Anzeige h.", tr: "Akşamları garsonluk, „deneyim gerekmiyor“ → ilan h." } },
        { s: "9. Ihre Mutter (70) hat ein neues Smartphone bekommen und versteht es nicht.", answer: 8, explain: { de: "Computerhilfe für Senioren, erklärt Handys → Anzeige i. Nicht l – dort geht es um Fitness!", tr: "Yaşlılara teknoloji yardımı, telefon anlatıyor → ilan i. l değil – orada konu spor!" } },
        { s: "10. Ihr Vater möchte etwas für seine Gesundheit tun und mit anderen älteren Menschen Sport machen.", answer: 11, explain: { de: "Fitness 50+ für ältere Menschen → Anzeige l. Übrig bleiben d (Wohnung), j (Reisebüro) und k (Gitarre).", tr: "Yaşlılar için Fitness 50+ → ilan l. Artan ilanlar: d (daire), j (seyahat acentesi) ve k (gitar)." } }
      ]
    }
  ],

  // ---------- GOETHE-STIL: Teil 4 – Meinungen Ja/Nein ----------
  goethe4: [
    {
      id: "g4-a",
      title: "Goethe-Stil Teil 4: Meinungen – Ja oder Nein?",
      anleitung: {
        de: "Thema: „Sollen Handys an Schulen verboten werden?“ Lesen Sie die Meinungen 1–7. Ist die Person FÜR ein Verbot (Ja) oder DAGEGEN (Nein)?",
        tr: "Konu: „Okullarda cep telefonu yasaklanmalı mı?“ 1–7 arası görüşleri oku. Kişi yasağa TARAFTAR mı (Ja) yoksa KARŞI mı (Nein)?"
      },
      statements: [
        { s: "Tim: In der Pause schauen alle nur auf ihr Handy, niemand redet mehr miteinander. Ohne Handys würden die Schüler wieder echte Gespräche führen. Ein Verbot wäre deshalb ein Gewinn für alle.", answer: true, explain: { de: "„Ein Verbot wäre ein Gewinn“ → JA, für das Verbot.", tr: "„Yasak herkes için kazanç olur“ → EVET, yasaktan yana." } },
        { s: "Ayşe: Meine Kinder lernen mit Lern-Apps Vokabeln und Mathe – auch in der Schule. Man sollte das Handy als Werkzeug nutzen, statt es zu verbieten. Verbote lösen keine Probleme.", answer: false, explain: { de: "„statt es zu verbieten“, „Verbote lösen keine Probleme“ → NEIN, gegen das Verbot.", tr: "„yasaklamak yerine“, „yasaklar sorun çözmez“ → HAYIR, yasağa karşı." } },
        { s: "Jonas: Ich verstehe beide Seiten. Aber ehrlich gesagt: Wer während des Unterrichts Nachrichten schreibt, kann sich nicht konzentrieren. Bei uns gilt seit einem Jahr ein Verbot, und die Noten sind besser geworden. Ich finde das richtig so.", answer: true, explain: { de: "Trotz „ich verstehe beide Seiten“: Am Ende sagt er klar „Ich finde das richtig“ → JA. Achte immer auf den SCHLUSS der Meinung!", tr: "„İki tarafı da anlıyorum“ demesine rağmen sonunda net: „Bence doğru“ → EVET. Her zaman görüşün SONUNA dikkat et!" } },
        { s: "Petra: Ein totales Verbot ist übertrieben. Es reicht doch, wenn die Handys im Unterricht in der Tasche bleiben. In den Pausen sollen die Jugendlichen selbst entscheiden dürfen.", answer: false, explain: { de: "„Ein totales Verbot ist übertrieben“ → NEIN.", tr: "„Tam yasak abartı“ → HAYIR." } },
        { s: "Murat: Viele Eltern wollen ihre Kinder erreichen können, zum Beispiel wenn der Bus ausfällt. Ein Verbot macht das unmöglich und schafft mehr Probleme, als es löst.", answer: false, explain: { de: "„Ein Verbot … schafft mehr Probleme, als es löst“ → NEIN.", tr: "„Yasak çözdüğünden fazla sorun yaratır“ → HAYIR." } },
        { s: "Sofia: An unserer Schule wurden schon mehrmals Schüler in der Pause gefilmt und die Videos ins Internet gestellt. Solange so etwas passiert, gehören Handys nicht in die Schule – Punkt.", answer: true, explain: { de: "„Handys gehören nicht in die Schule“ → JA.", tr: "„Telefonların okulda yeri yok“ → EVET." } },
        { s: "Lukas: Klar, Handys können stören. Aber die Schule muss junge Menschen auf das Leben vorbereiten – und dazu gehört der richtige Umgang mit Medien. Wegnehmen ist der falsche Weg.", answer: false, explain: { de: "„Wegnehmen ist der falsche Weg“ → NEIN. Der erste Satz („können stören“) ist eine Falle – entscheidend ist die Kernaussage.", tr: "„Elinden almak yanlış yol“ → HAYIR. İlk cümle („rahatsız edebilir“) tuzak – belirleyici olan ana görüş." } }
      ]
    }
  ]
};
