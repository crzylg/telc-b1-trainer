// ===== Hörverstehen – Übungen mit Sprachausgabe (TTS) im telc/DTZ-Format =====
// Die Texte werden vom Gerät auf Deutsch vorgelesen (SpeechSynthesis).
window.HOEREN = {
  intro: {
    de: "Dein Gerät liest dir die Hörtexte auf Deutsch vor – wie in der Prüfung. Höre zuerst, entscheide dann: richtig oder falsch? Das Transkript kannst du NACH dem Prüfen lesen. Tipp: Übe zuerst mit normaler Geschwindigkeit, bei Problemen wähle „langsam“.",
    tr: "Cihazın dinleme metinlerini sana Almanca okur – sınavdaki gibi. Önce dinle, sonra karar ver: doğru mu yanlış mı? Metni (transkript) kontrol ettikten SONRA okuyabilirsin. İpucu: Önce normal hızda çalış, zorlanırsan „langsam“ (yavaş) seç."
  },
  uebungen: [
    {
      id: "h1-ansagen",
      title: "Teil 1: Fünf Ansagen (richtig/falsch)",
      titleTr: "Bölüm 1: Beş anons (doğru/yanlış)",
      anleitung: {
        de: "Wie telc Hören Teil 1: Du hörst fünf kurze Texte NUR EINMAL. Lies zuerst die Aussage, höre dann den Text und entscheide: richtig (+) oder falsch (–)?",
        tr: "telc Hören Teil 1 gibi: Beş kısa metni SADECE BİR KEZ dinlersin. Önce cümleyi oku, sonra metni dinle ve karar ver: doğru (+) mu yanlış (–) mı?"
      },
      items: [
        {
          audio: "Liebe Fahrgäste, wegen einer technischen Störung fährt die Linie U4 heute nicht zwischen Hauptbahnhof und Messegelände. Bitte benutzen Sie stattdessen die Buslinie 34, die im Zehn-Minuten-Takt fährt. Wir bitten um Entschuldigung.",
          statement: "Die U4 fährt heute auf der ganzen Strecke normal.",
          answer: false,
          explain: { de: "Die U4 fährt NICHT zwischen Hauptbahnhof und Messegelände – also falsch. Ersatz: Bus 34.", tr: "U4, Hauptbahnhof ile Messegelände arasında ÇALIŞMIYOR – yani yanlış. Yerine: 34 numaralı otobüs." }
        },
        {
          audio: "Guten Tag, hier ist die Praxis Doktor Yilmaz. Ihr Termin am Donnerstag um 15 Uhr muss leider ausfallen, weil die Ärztin krank ist. Wir möchten Ihnen einen neuen Termin anbieten: Montag um 9 Uhr 30. Bitte rufen Sie uns zurück und sagen Sie, ob das für Sie passt.",
          statement: "Die Praxis bietet einen neuen Termin am Montag an.",
          answer: true,
          explain: { de: "„Wir möchten Ihnen einen neuen Termin anbieten: Montag um 9 Uhr 30“ – richtig.", tr: "„Size yeni bir randevu önermek istiyoruz: Pazartesi 9:30“ – doğru." }
        },
        {
          audio: "Und nun das Wetter für morgen: Am Vormittag ist es noch freundlich und sonnig bei Temperaturen um 22 Grad. Ab dem Nachmittag ziehen von Westen dunkle Wolken auf, und am Abend muss überall mit starkem Regen und Gewittern gerechnet werden.",
          statement: "Morgen bleibt das Wetter den ganzen Tag sonnig.",
          answer: false,
          explain: { de: "Nur am Vormittag sonnig – ab Nachmittag Wolken, abends Regen und Gewitter. Falsch. Achte auf Signalwörter wie „noch“ und „ab“!", tr: "Sadece öğleden önce güneşli – öğleden sonra bulut, akşam yağmur ve fırtına. Yanlış. „noch“ (henüz) ve „ab“ (itibaren) sinyal kelimelerine dikkat!" }
        },
        {
          audio: "Sehr geehrte Kundinnen und Kunden, herzlich willkommen im Kaufhaus Zentral. Heute finden Sie in unserer Lebensmittelabteilung im Untergeschoss frisches Obst zum halben Preis. Und für die Kleinen: Um 16 Uhr beginnt das Kinderprogramm mit dem Zauberer Momo im dritten Stock.",
          statement: "Das Obst ist heute fünfzig Prozent billiger.",
          answer: true,
          explain: { de: "„zum halben Preis“ = 50 % billiger – richtig. Die richtige Antwort benutzt oft ANDERE Wörter als der Hörtext!", tr: "„zum halben Preis“ (yarı fiyatına) = %50 daha ucuz – doğru. Doğru cevap çoğu zaman dinleme metnindekinden FARKLI kelimeler kullanır!" }
        },
        {
          audio: "Hallo Ayşe, hier ist Marco. Du, wegen Samstag: Das Fußballspiel fängt schon um 14 Uhr an, nicht erst um 16 Uhr. Können wir uns deshalb schon um 13 Uhr an der Haltestelle treffen? Ruf mich bitte kurz an. Danke, tschüss!",
          statement: "Marco möchte sich um 13 Uhr treffen.",
          answer: true,
          explain: { de: "„Können wir uns schon um 13 Uhr treffen?“ – richtig. Vorsicht: Im Text kommen DREI Uhrzeiten vor (14, 16, 13) – genau hinhören!", tr: "„13:00'te buluşabilir miyiz?“ – doğru. Dikkat: Metinde ÜÇ saat geçiyor (14, 16, 13) – dikkatli dinle!" }
        }
      ]
    },
    {
      id: "h2-gespraech",
      title: "Teil 2: Interview (10 Aufgaben)",
      titleTr: "Bölüm 2: Röportaj (10 soru)",
      anleitung: {
        de: "Wie telc Hören Teil 2: Du hörst ein längeres Gespräch ZWEIMAL. Lies zuerst alle 10 Aussagen (in der Prüfung hast du 1 Minute), höre dann und entscheide: richtig oder falsch?",
        tr: "telc Hören Teil 2 gibi: Uzun bir konuşmayı İKİ KEZ dinlersin. Önce 10 cümlenin hepsini oku (sınavda 1 dakikan var), sonra dinle ve karar ver: doğru mu yanlış mı?"
      },
      longAudio: "Herzlich willkommen zu unserer Sendung „Menschen in der Stadt“. Mein Gast heute ist Fatma Demir. Sie leitet seit fünf Jahren die Stadtteilbibliothek im Nordviertel. Frau Demir, guten Tag! – Guten Tag, ich freue mich, dass ich hier sein darf. – Frau Demir, viele Leute denken, in einer Bibliothek gibt es nur Bücher. Stimmt das noch? – Nein, überhaupt nicht. Natürlich haben wir über vierzigtausend Bücher, aber man kann bei uns auch Filme, Musik, Zeitschriften und sogar Gesellschaftsspiele ausleihen. Und seit letztem Jahr verleihen wir auch E-Book-Reader. – Das ist ja interessant! Wer kommt denn zu Ihnen in die Bibliothek? – Ganz unterschiedliche Menschen. Vormittags kommen viele Mütter und Väter mit kleinen Kindern, nachmittags Schülerinnen und Schüler, die hier ihre Hausaufgaben machen. Und am Abend nutzen viele Berufstätige unsere Lernräume. Was mich besonders freut: Immer mehr ältere Menschen besuchen unsere Computerkurse. – Sie bieten also auch Kurse an? – Ja, genau. Zweimal pro Woche gibt es einen Computerkurs für Seniorinnen und Senioren, und jeden Samstag treffen sich hier Menschen aus vielen Ländern zum Sprachcafé. Dort kann man ganz entspannt Deutsch sprechen üben – kostenlos übrigens. – Was kostet eigentlich ein Bibliotheksausweis? – Für Erwachsene fünfzehn Euro im Jahr. Kinder, Schüler und Studenten zahlen gar nichts. – Und wie sieht die Zukunft aus? – Wir bauen gerade um. Ab dem Frühjahr haben wir ein Lesecafé mit einer großen Terrasse. Darauf freue ich mich sehr, denn die Bibliothek soll ein Wohnzimmer für das ganze Viertel werden.",
      items: [
        { statement: "Frau Demir arbeitet seit fünf Jahren als Leiterin der Bibliothek.", answer: true, explain: { de: "„Sie leitet seit fünf Jahren die Stadtteilbibliothek.“", tr: "„Beş yıldır semt kütüphanesini yönetiyor.“" } },
        { statement: "In der Bibliothek kann man nur Bücher ausleihen.", answer: false, explain: { de: "Auch Filme, Musik, Zeitschriften, Spiele und E-Book-Reader.", tr: "Filmler, müzik, dergiler, oyunlar ve e-kitap okuyucular da var." } },
        { statement: "Die Bibliothek hat mehr als 40.000 Bücher.", answer: true, explain: { de: "„über vierzigtausend Bücher“ = mehr als 40.000.", tr: "„über vierzigtausend“ = 40.000'den fazla." } },
        { statement: "Vormittags kommen vor allem Berufstätige.", answer: false, explain: { de: "Vormittags kommen Eltern mit Kindern; Berufstätige kommen am Abend.", tr: "Öğleden önce çocuklu ebeveynler gelir; çalışanlar akşam gelir." } },
        { statement: "Schüler machen nachmittags in der Bibliothek Hausaufgaben.", answer: true, explain: { de: "„nachmittags Schülerinnen und Schüler, die hier ihre Hausaufgaben machen“.", tr: "„öğleden sonra ödevlerini burada yapan öğrenciler“." } },
        { statement: "Die Computerkurse sind für Kinder.", answer: false, explain: { de: "Die Computerkurse sind für Seniorinnen und Senioren.", tr: "Bilgisayar kursları yaşlılar için." } },
        { statement: "Das Sprachcafé findet einmal pro Woche statt.", answer: true, explain: { de: "„jeden Samstag“ = einmal pro Woche.", tr: "„her cumartesi“ = haftada bir kez." } },
        { statement: "Das Sprachcafé kostet fünf Euro.", answer: false, explain: { de: "„kostenlos übrigens“ – es kostet nichts.", tr: "„üstelik ücretsiz“ – hiçbir ücreti yok." } },
        { statement: "Kinder zahlen für den Bibliotheksausweis nichts.", answer: true, explain: { de: "„Kinder, Schüler und Studenten zahlen gar nichts.“", tr: "„Çocuklar, öğrenciler hiçbir şey ödemez.“" } },
        { statement: "Das Lesecafé ist schon geöffnet.", answer: false, explain: { de: "„Wir bauen gerade um. AB DEM FRÜHJAHR haben wir ein Lesecafé“ – es kommt erst noch.", tr: "„Şu anda tadilattayız. İLKBAHARDAN İTİBAREN kafemiz olacak“ – henüz açılmadı." } }
      ]
    },
    {
      id: "h3-kurztexte",
      title: "Teil 3: Fünf kurze Texte (richtig/falsch)",
      titleTr: "Bölüm 3: Beş kısa metin (doğru/yanlış)",
      anleitung: {
        de: "Wie telc Hören Teil 3: Durchsagen, Anrufbeantworter, Radio. In der Prüfung hörst du jeden Text ZWEIMAL. Lies die Aussage, höre und entscheide.",
        tr: "telc Hören Teil 3 gibi: Anonslar, telesekreter, radyo. Sınavda her metni İKİ KEZ dinlersin. Cümleyi oku, dinle ve karar ver."
      },
      items: [
        {
          audio: "Achtung an Gleis sieben: Der Intercity nach München, planmäßige Abfahrt 11 Uhr 42, verspätet sich um circa 25 Minuten. Grund ist eine Signalstörung. Reisende nach Augsburg können auch den Regionalexpress um 11 Uhr 55 von Gleis drei nehmen.",
          statement: "Der Zug nach München fällt heute aus.",
          answer: false,
          explain: { de: "Der Zug fällt nicht aus, er hat nur 25 Minuten VERSPÄTUNG.", tr: "Tren iptal değil, sadece 25 dakika RÖTARLI." }
        },
        {
          audio: "Hier ist der Anrufbeantworter der Fahrschule Blitz. Unser Büro ist montags bis freitags von 14 bis 18 Uhr geöffnet. Wenn Sie einen Termin für eine Fahrstunde vereinbaren möchten, sprechen Sie bitte nach dem Ton Ihren Namen und Ihre Telefonnummer. Wir rufen Sie zurück.",
          statement: "Das Büro der Fahrschule ist auch am Samstag geöffnet.",
          answer: false,
          explain: { de: "„montags bis freitags“ – Samstag gehört nicht dazu.", tr: "„pazartesiden cumaya“ – cumartesi dahil değil." }
        },
        {
          audio: "Liebe Hörerinnen und Hörer, hier noch ein Tipp für das Wochenende: Am Sonntag lädt der Tierpark zum Familientag ein. Der Eintritt ist für alle Besucher frei, und um 14 Uhr gibt es eine Führung zu den neuen Elefanten. Anmeldung ist nicht nötig.",
          statement: "Für die Führung muss man sich vorher anmelden.",
          answer: false,
          explain: { de: "„Anmeldung ist nicht nötig“ – man muss sich NICHT anmelden.", tr: "„Kayıt gerekli değil“ – önceden kayıt GEREKMİYOR." }
        },
        {
          audio: "Guten Morgen, Frau Kaya, hier ist Herr Lang von der Firma Solartechnik. Es geht um Ihr Vorstellungsgespräch am Mittwoch. Frau Berger, unsere Personalchefin, ist leider auf einer Dienstreise. Können wir das Gespräch auf Freitag um 10 Uhr verschieben? Bitte geben Sie mir kurz Bescheid.",
          statement: "Das Vorstellungsgespräch soll auf Freitag verschoben werden.",
          answer: true,
          explain: { de: "„Können wir das Gespräch auf Freitag um 10 Uhr verschieben?“ – richtig.", tr: "„Görüşmeyi cumaya, saat 10'a erteleyebilir miyiz?“ – doğru." }
        },
        {
          audio: "Und hier eine Durchsage für unsere Kundinnen und Kunden: Bitte beachten Sie, dass unser Markt heute bereits um 18 Uhr 30 schließt. Grund ist eine Betriebsversammlung. Ab morgen sind wir wieder wie gewohnt bis 21 Uhr für Sie da. Vielen Dank für Ihr Verständnis.",
          statement: "Der Supermarkt schließt heute früher als normal.",
          answer: true,
          explain: { de: "Heute schon um 18:30, normalerweise bis 21 Uhr – also früher. Richtig.", tr: "Bugün 18:30'da, normalde 21:00'e kadar – yani daha erken. Doğru." }
        }
      ]
    },
    {
      id: "h4-dtz",
      title: "DTZ-Stil: Ansagen mit Multiple Choice",
      titleTr: "DTZ tarzı: Çoktan seçmeli anonslar",
      anleitung: {
        de: "Im Deutsch-Test für Zuwanderer (DTZ) hörst du Ansagen und wählst die richtige Lösung a, b oder c. Höre den Text und beantworte die Frage.",
        tr: "Deutsch-Test für Zuwanderer'de (DTZ) anonsları dinler ve doğru cevabı (a, b veya c) seçersin. Metni dinle ve soruyu cevapla."
      },
      mcItems: [
        {
          audio: "Hallo Herr Öztürk, hier ist die Autowerkstatt Meier. Ihr Wagen ist fertig. Sie können ihn heute bis 18 Uhr oder morgen ab 8 Uhr abholen. Die Reparatur kostet 280 Euro, also 40 Euro weniger, als wir gedacht haben. Bis später!",
          q: "Was soll Herr Öztürk machen?",
          options: ["Das Auto in die Werkstatt bringen.", "Das Auto abholen.", "320 Euro bezahlen."],
          answer: 1,
          explain: { de: "„Ihr Wagen ist fertig. Sie können ihn abholen.“ Die Reparatur kostet 280 Euro, nicht 320.", tr: "„Arabanız hazır. Alabilirsiniz.“ Tamir 280 Euro, 320 değil." }
        },
        {
          audio: "Liebe Eltern, am kommenden Dienstag findet unser Elternabend statt. Wir beginnen um 19 Uhr 30 in der Aula. Themen sind die Klassenfahrt nach Hamburg und die neuen Bücher für das nächste Schuljahr. Bitte bringen Sie 15 Euro für die Bücher mit.",
          q: "Was sollen die Eltern mitbringen?",
          options: ["Die neuen Bücher.", "15 Euro.", "Essen für die Klassenfahrt."],
          answer: 1,
          explain: { de: "„Bitte bringen Sie 15 Euro für die Bücher mit.“", tr: "„Lütfen kitaplar için 15 Euro getirin.“" }
        },
        {
          audio: "Herzlich willkommen bei der Volkshochschule. Unser Sekretariat ist zurzeit leider nicht besetzt. Für Fragen zu den Deutschkursen drücken Sie bitte die Eins. Für Anmeldungen drücken Sie die Zwei. Wenn Sie mit einer Mitarbeiterin sprechen möchten, bleiben Sie bitte in der Leitung.",
          q: "Sie möchten sich für einen Kurs anmelden. Was machen Sie?",
          options: ["Die Eins drücken.", "Die Zwei drücken.", "Auflegen und später anrufen."],
          answer: 1,
          explain: { de: "„Für Anmeldungen drücken Sie die Zwei.“", tr: "„Kayıtlar için ikiye basın.“" }
        },
        {
          audio: "Guten Tag, hier spricht die Hausverwaltung Schmidt. Am Donnerstag werden in Ihrem Haus die Wasserleitungen geprüft. Zwischen 9 und 12 Uhr gibt es deshalb kein Wasser. Bitte füllen Sie sich vorher Wasser in Flaschen ab, wenn Sie welches brauchen.",
          q: "Was passiert am Donnerstag?",
          options: ["Es gibt den ganzen Tag kein Wasser.", "Zwischen 9 und 12 Uhr gibt es kein Wasser.", "Die Heizung wird repariert."],
          answer: 1,
          explain: { de: "„Zwischen 9 und 12 Uhr gibt es kein Wasser“ – nicht den ganzen Tag!", tr: "„9 ile 12 arası su yok“ – bütün gün değil!" }
        },
        {
          audio: "Verehrte Fluggäste, wir bitten um Ihre Aufmerksamkeit. Der Flug LH 452 nach Istanbul startet heute nicht wie geplant um 15 Uhr 20, sondern erst um 17 Uhr 45. Das Boarding beginnt um 17 Uhr am Gate B 12. Wir bitten, die Verspätung zu entschuldigen.",
          q: "Wann beginnt das Boarding?",
          options: ["Um 15:20 Uhr.", "Um 17:00 Uhr.", "Um 17:45 Uhr."],
          answer: 1,
          explain: { de: "Boarding um 17 Uhr, Abflug um 17:45. Drei Zeiten im Text – die Frage fragt nach dem BOARDING!", tr: "Biniş 17:00, kalkış 17:45. Metinde üç saat var – soru BİNİŞİ soruyor!" }
        }
      ]
    }
  ]
};
