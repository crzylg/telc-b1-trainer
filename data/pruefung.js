// ===== Prüfungsinformationen: telc Deutsch B1 & Goethe-Zertifikat B1 =====
window.PRUEFUNG = {
  intro: {
    de: "Hier findest du den genauen Aufbau der beiden wichtigsten B1-Prüfungen: telc Deutsch B1 (Zertifikat Deutsch) und Goethe-Zertifikat B1. Beide Prüfungen testen die gleichen Fähigkeiten, aber der Aufbau ist unterschiedlich.",
    tr: "Burada en önemli iki B1 sınavının tam yapısını bulacaksın: telc Deutsch B1 (Zertifikat Deutsch) ve Goethe-Zertifikat B1. İki sınav da aynı becerileri test eder, ancak yapıları farklıdır."
  },
  telc: {
    name: "telc Deutsch B1 (Zertifikat Deutsch)",
    summary: {
      de: "Gesamtpunktzahl: 300 Punkte (schriftlich 225 + mündlich 75). Zum Bestehen brauchst du mindestens 60 % im schriftlichen Teil UND 60 % im mündlichen Teil – also 135 Punkte schriftlich und 45 Punkte mündlich.",
      tr: "Toplam puan: 300 (yazılı 225 + sözlü 75). Geçmek için yazılı bölümde en az %60 VE sözlü bölümde en az %60 gerekir – yani yazılıda 135, sözlüde 45 puan."
    },
    parts: [
      { teil: "Leseverstehen Teil 1", zeit: "≈ 15 Min.", punkte: "25", aufgabe: "5 Zeitungstexte → 10 Überschriften zuordnen", tr: "5 gazete metnine 10 başlıktan uygun olanı eşleştir" },
      { teil: "Leseverstehen Teil 2", zeit: "≈ 20 Min.", punkte: "25", aufgabe: "1 langer Zeitungsartikel → 5 Multiple-Choice-Fragen (a/b/c)", tr: "1 uzun gazete makalesi → 5 çoktan seçmeli soru (a/b/c)" },
      { teil: "Leseverstehen Teil 3", zeit: "≈ 15 Min.", punkte: "25", aufgabe: "12 Anzeigen (a–l) → 10 Situationen zuordnen; passt keine Anzeige: „x“ markieren", tr: "12 ilan (a–l) → 10 duruma uygun ilanı bul; uygun ilan yoksa „x“ işaretle" },
      { teil: "Sprachbausteine Teil 1", zeit: "≈ 10 Min.", punkte: "15", aufgabe: "Brief mit 10 Lücken → Multiple Choice (a/b/c) – Grammatik", tr: "10 boşluklu mektup → çoktan seçmeli (a/b/c) – dilbilgisi" },
      { teil: "Sprachbausteine Teil 2", zeit: "≈ 10 Min.", punkte: "15", aufgabe: "Brief mit 10 Lücken → 15 Wörter (a–o) einsetzen – Wortschatz", tr: "10 boşluklu mektup → 15 kelimeden (a–o) doğrusunu yerleştir – kelime bilgisi" },
      { teil: "Hörverstehen Teil 1–3", zeit: "≈ 30 Min.", punkte: "75", aufgabe: "Ansagen, Radiobeiträge, Gespräche → richtig/falsch", tr: "Anonslar, radyo programları, konuşmalar → doğru/yanlış" },
      { teil: "Schriftlicher Ausdruck", zeit: "30 Min.", punkte: "45", aufgabe: "Halbformellen Brief/E-Mail schreiben – 4 Leitpunkte bearbeiten", tr: "Yarı resmi mektup/e-posta yaz – 4 içerik maddesini işle" },
      { teil: "Mündliche Prüfung (Teil 1–3)", zeit: "≈ 15 Min.", punkte: "75", aufgabe: "Kontakt aufnehmen, über ein Thema sprechen, gemeinsam etwas planen", tr: "Tanışma, bir konu hakkında konuşma, birlikte plan yapma" }
    ],
    hinweise: {
      de: [
        "Leseverstehen + Sprachbausteine zusammen: 90 Minuten. Du teilst dir die Zeit selbst ein!",
        "Falsche Antworten geben KEINE Minuspunkte – rate immer, wenn du unsicher bist.",
        "Du darfst kein Wörterbuch benutzen.",
        "Der Antwortbogen (S30) wird maschinell gelesen – markiere sauber und übertrage deine Lösungen rechtzeitig.",
        "Vor der Mündlichen Prüfung hast du 20 Minuten Vorbereitungszeit und darfst Notizen machen.",
        "Noten: 270–300 sehr gut, 240–269,5 gut, 210–239,5 befriedigend, 180–209,5 ausreichend, unter 180 nicht bestanden."
      ],
      tr: [
        "Okuma + Sprachbausteine birlikte: 90 dakika. Zamanı kendin bölüştürürsün!",
        "Yanlış cevaplar puan DÜŞÜRMEZ – emin değilsen mutlaka tahmin et.",
        "Sözlük kullanmak yasaktır.",
        "Cevap kağıdı (S30) makinede okunur – temiz işaretle ve cevaplarını zamanında aktar.",
        "Sözlü sınavdan önce 20 dakika hazırlık süren var ve not alabilirsin.",
        "Notlar: 270–300 pekiyi, 240–269,5 iyi, 210–239,5 orta, 180–209,5 geçer, 180 altı başarısız."
      ]
    }
  },
  goethe: {
    name: "Goethe-Zertifikat B1",
    summary: {
      de: "Vier Module: Lesen, Hören, Schreiben, Sprechen. Jedes Modul hat 100 Punkte und kann einzeln abgelegt und einzeln bestanden werden (mindestens 60 Punkte pro Modul).",
      tr: "Dört modül: Okuma, Dinleme, Yazma, Konuşma. Her modül 100 puandır ve ayrı ayrı girilebilir, ayrı ayrı geçilebilir (her modülde en az 60 puan)."
    },
    parts: [
      { teil: "Lesen Teil 1", zeit: "10 Min.", punkte: "6 Items", aufgabe: "Blog/Brief lesen → richtig/falsch", tr: "Blog/mektup oku → doğru/yanlış" },
      { teil: "Lesen Teil 2", zeit: "20 Min.", punkte: "6 Items", aufgabe: "2 Presseartikel → Multiple Choice (a/b/c)", tr: "2 basın makalesi → çoktan seçmeli (a/b/c)" },
      { teil: "Lesen Teil 3", zeit: "10 Min.", punkte: "7 Items", aufgabe: "Anzeigen → Situationen zuordnen (mit „x“ = keine Anzeige passt)", tr: "İlanları durumlara eşleştir („x“ = uygun ilan yok seçeneği var)" },
      { teil: "Lesen Teil 4", zeit: "15 Min.", punkte: "7 Items", aufgabe: "Meinungsäußerungen → Ja/Nein zuordnen", tr: "Görüş yazıları → Evet/Hayır olarak sınıfla" },
      { teil: "Lesen Teil 5", zeit: "10 Min.", punkte: "4 Items", aufgabe: "Regeln/Anleitung → Multiple Choice", tr: "Kurallar/talimat → çoktan seçmeli" },
      { teil: "Hören Teil 1–4", zeit: "40 Min.", punkte: "30 Items", aufgabe: "Durchsagen, Vortrag, Gespräch, Radiodiskussion", tr: "Anonslar, sunum, konuşma, radyo tartışması" },
      { teil: "Schreiben Teil 1–3", zeit: "60 Min.", punkte: "100", aufgabe: "Informelle E-Mail (~80 Wörter), Forumsbeitrag (~80 Wörter), halbformelle E-Mail (~40 Wörter)", tr: "Gayri resmi e-posta (~80 kelime), forum yazısı (~80 kelime), yarı resmi e-posta (~40 kelime)" },
      { teil: "Sprechen Teil 1–3", zeit: "≈ 15 Min.", punkte: "100", aufgabe: "Gemeinsam planen, Präsentation halten, Feedback geben & Fragen stellen", tr: "Birlikte plan yapma, sunum yapma, geri bildirim verme ve soru sorma" }
    ],
    hinweise: {
      de: [
        "Lesen: 65 Minuten für 5 Teile mit insgesamt 30 Items.",
        "Module können einzeln wiederholt werden – wenn du z. B. nur Schreiben nicht bestehst, wiederholst du nur Schreiben.",
        "Bei Lesen Teil 3 gibt es die Antwort „x“ (keine Anzeige passt) – dieses „x“ gibt es übrigens auch bei telc Lesen Teil 3!",
        "Beim Sprechen hast du 15 Minuten Vorbereitungszeit."
      ],
      tr: [
        "Okuma: 5 bölüm, toplam 30 soru için 65 dakika.",
        "Modüller ayrı ayrı tekrarlanabilir – örneğin sadece Yazma'dan kalırsan, sadece Yazma'yı tekrar edersin.",
        "Okuma Teil 3'te „x“ cevabı vardır (uygun ilan yok) – bu „x“ telc Lesen Teil 3'te de vardır!",
        "Konuşma sınavından önce 15 dakika hazırlık süresi verilir."
      ]
    }
  },
  dtz: {
    name: "DTZ – Deutsch-Test für Zuwanderer (A2–B1)",
    summary: {
      de: "Der DTZ ist die Abschlussprüfung des Integrationskurses (eine telc-Prüfung auf zwei Stufen: A2 oder B1). Für die Einbürgerung und den Abschluss des Integrationskurses reicht der DTZ mit dem Ergebnis B1. Wichtig: Für B1 musst du im mündlichen UND im schriftlichen Teil B1-Niveau erreichen.",
      tr: "DTZ, uyum kursunun bitirme sınavıdır (iki seviyeli bir telc sınavı: A2 veya B1). Vatandaşlık ve uyum kursu bitirmesi için B1 sonuçlu DTZ yeterlidir. Önemli: B1 için hem sözlü HEM yazılı bölümde B1 seviyesine ulaşmalısın."
    },
    parts: [
      { teil: "Hören Teil 1–4", zeit: "25 Min.", punkte: "20 Items", aufgabe: "Ansagen am Telefon, Radio-Infos, Gespräche, Meinungen – Multiple Choice", tr: "Telefon anonsları, radyo bilgileri, konuşmalar, görüşler – çoktan seçmeli" },
      { teil: "Lesen Teil 1–5", zeit: "45 Min.", punkte: "25 Items", aufgabe: "Kataloge/Wegweiser, Anzeigen, Infotexte (Presse/Amt), Zuordnungen, Multiple Choice", tr: "Kataloglar/yön levhaları, ilanlar, bilgi metinleri (basın/resmi daire), eşleştirme, çoktan seçmeli" },
      { teil: "Schreiben", zeit: "30 Min.", punkte: "–", aufgabe: "Halbformelle oder formelle Kurznachricht/E-Mail (z. B. an Schule, Vermieter, Amt)", tr: "Yarı resmi veya resmi kısa mesaj/e-posta (örn. okula, ev sahibine, resmi daireye)" },
      { teil: "Sprechen (Paarprüfung)", zeit: "≈ 16 Min.", punkte: "–", aufgabe: "Über sich sprechen, über ein Bild/Erfahrungen sprechen, gemeinsam etwas planen", tr: "Kendinden bahsetme, bir resim/deneyimler hakkında konuşma, birlikte plan yapma" }
    ],
    hinweise: {
      de: [
        "Die Aufgabenformate von Lesen Teil 3 (Anzeigen) und dem gemeinsamen Planen sind fast identisch mit telc B1 – dieses Training hilft dir also auch direkt für den DTZ!",
        "Beim DTZ-Sprechen gibt es eine Bildbeschreibung – bereite Redemittel wie „Auf dem Bild sehe ich …“, „Im Vordergrund/Hintergrund …“ vor.",
        "Das Schreiben ist kürzer als bei telc B1: eine halbformelle Nachricht mit meist 3 Leitpunkten."
      ],
      tr: [
        "Lesen Teil 3 (ilanlar) ve birlikte plan yapma bölümlerinin formatları telc B1 ile neredeyse aynı – bu antrenman DTZ için de doğrudan işine yarar!",
        "DTZ konuşma sınavında resim anlatma vardır – „Auf dem Bild sehe ich …“ (Resimde … görüyorum), „Im Vordergrund/Hintergrund …“ (Ön planda/arka planda …) gibi kalıpları hazırla.",
        "Yazma bölümü telc B1'den kısadır: genelde 3 maddelik yarı resmi bir mesaj."
      ]
    }
  },
  vergleich: {
    de: "Welche Prüfung passt zu dir? telc B1 wird oft für die Einbürgerung und von Integrationskursen verwendet (der Deutsch-Test für Zuwanderer DTZ ist eine telc-Prüfung auf A2–B1). Goethe B1 ist international sehr bekannt und modular. Für beide gilt: Wer die Aufgabentypen kennt und trainiert, hat einen großen Vorteil!",
    tr: "Hangi sınav sana uygun? telc B1 genellikle vatandaşlık başvurusu ve entegrasyon kursları için kullanılır (Deutsch-Test für Zuwanderer DTZ, A2–B1 seviyesinde bir telc sınavıdır). Goethe B1 uluslararası alanda çok tanınır ve modülerdir. Her ikisi için de geçerli: Soru tiplerini tanıyan ve pratik yapan büyük avantaj sağlar!"
  }
};
