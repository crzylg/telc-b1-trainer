// ===== Prüfungsinformationen: telc Deutsch B1 & Goethe-Zertifikat B1 =====
// Sprache: sehr einfach (A1), wie für Kinder erklärt.
window.PRUEFUNG = {
  intro: {
    de: "Es gibt zwei wichtige B1-Prüfungen. Die erste heißt telc Deutsch B1. Die zweite heißt Goethe-Zertifikat B1. Beide Prüfungen sind fast gleich schwer. Aber der Aufbau ist anders. Hier zeigen wir dir beide Prüfungen genau.",
    tr: "İki önemli B1 sınavı var. Birincisi telc Deutsch B1. İkincisi Goethe-Zertifikat B1. İki sınav da aynı zorlukta. Ama yapıları farklı. Burada sana iki sınavı da tam olarak gösteriyoruz."
  },
  telc: {
    name: "telc Deutsch B1 (Zertifikat Deutsch)",
    summary: {
      de: "Du kannst 300 Punkte bekommen. Der schriftliche Teil hat 225 Punkte. Der mündliche Teil hat 75 Punkte. Du musst in JEDEM Teil mindestens 60 % schaffen. Das sind 135 Punkte schriftlich. Und 45 Punkte mündlich.",
      tr: "300 puan alabilirsin. Yazılı bölüm 225 puan. Sözlü bölüm 75 puan. HER bölümde en az %60 almalısın. Bu, yazılıda 135 puan demek. Sözlüde ise 45 puan demek."
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
        "Lesen und Sprachbausteine sind zusammen. Du hast dafür 90 Minuten Zeit.",
        "Eine falsche Antwort ist nicht schlimm. Du bekommst keine Minuspunkte. Rate lieber, als nichts zu schreiben!",
        "Ein Wörterbuch ist nicht erlaubt.",
        "Ein Computer liest deinen Antwortbogen (S30). Schreibe deshalb sauber. Trage deine Antworten rechtzeitig ein.",
        "Vor dem Sprechen hast du 20 Minuten Zeit. In dieser Zeit darfst du Notizen machen.",
        "So bekommst du deine Note: 270–300 Punkte = sehr gut. 240–269,5 = gut. 210–239,5 = befriedigend. 180–209,5 = ausreichend. Unter 180 = nicht bestanden."
      ],
      tr: [
        "Okuma ve Sprachbausteine birliktedir. Bunun için 90 dakikan var.",
        "Yanlış cevap kötü değildir. Eksi puan almazsın. Boş bırakmaktansa tahmin et!",
        "Sözlük kullanmak yasaktır.",
        "Cevap kağıdını (S30) bir bilgisayar okur. Bu yüzden temiz yaz. Cevaplarını zamanında işaretle.",
        "Konuşmadan önce 20 dakikan var. Bu sürede not alabilirsin.",
        "Notun şöyle hesaplanır: 270–300 puan = pekiyi. 240–269,5 = iyi. 210–239,5 = orta. 180–209,5 = geçer. 180'in altı = kaldın."
      ]
    }
  },
  goethe: {
    name: "Goethe-Zertifikat B1",
    summary: {
      de: "Diese Prüfung hat vier Teile: Lesen, Hören, Schreiben, Sprechen. Jeder Teil hat 100 Punkte. Du kannst jeden Teil einzeln machen. Du brauchst pro Teil mindestens 60 Punkte.",
      tr: "Bu sınavın dört bölümü var: Okuma, Dinleme, Yazma, Konuşma. Her bölüm 100 puandır. Her bölümü ayrı ayrı girebilirsin. Her bölümde en az 60 puan gerekir."
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
        "Der Teil Lesen hat 5 Aufgaben. Dafür hast du 65 Minuten Zeit. Es gibt 30 Fragen.",
        "Du kannst einen Teil noch einmal machen. Zum Beispiel: Du bestehst nur Schreiben nicht. Dann machst du nur Schreiben noch einmal.",
        "Bei Lesen Teil 3 gibt es die Antwort „x“. Das heißt: Keine Anzeige passt. Diese Antwort „x“ gibt es auch bei telc!",
        "Vor dem Sprechen hast du 15 Minuten Zeit zum Vorbereiten."
      ],
      tr: [
        "Okuma bölümünün 5 kısmı var. Bunun için 65 dakikan var. Toplam 30 soru vardır.",
        "Bir bölümü tekrar yapabilirsin. Örnek: Sadece Yazma'dan kaldın. O zaman sadece Yazma'yı tekrar yaparsın.",
        "Okuma Teil 3'te „x“ cevabı vardır. Bu, hiçbir ilanın uymadığı anlamına gelir. Bu „x“ telc'de de vardır!",
        "Konuşmadan önce hazırlanmak için 15 dakikan var."
      ]
    }
  },
  dtz: {
    name: "DTZ – Deutsch-Test für Zuwanderer (A2–B1)",
    summary: {
      de: "Der DTZ ist eine Prüfung für Integrationskurse. Es gibt zwei Stufen: A2 oder B1. Für die Einbürgerung reicht das Ergebnis B1. Wichtig: Du brauchst B1 im Sprechen UND im Schreiben.",
      tr: "DTZ, entegrasyon kursları için bir sınavdır. İki seviyesi vardır: A2 veya B1. Vatandaşlık için B1 sonucu yeterlidir. Önemli: Konuşmada VE yazmada B1 seviyesi gerekir."
    },
    parts: [
      { teil: "Hören Teil 1–4", zeit: "25 Min.", punkte: "20 Items", aufgabe: "Ansagen am Telefon, Radio-Infos, Gespräche, Meinungen – Multiple Choice", tr: "Telefon anonsları, radyo bilgileri, konuşmalar, görüşler – çoktan seçmeli" },
      { teil: "Lesen Teil 1–5", zeit: "45 Min.", punkte: "25 Items", aufgabe: "Kataloge/Wegweiser, Anzeigen, Infotexte (Presse/Amt), Zuordnungen, Multiple Choice", tr: "Kataloglar/yön levhaları, ilanlar, bilgi metinleri (basın/resmi daire), eşleştirme, çoktan seçmeli" },
      { teil: "Schreiben", zeit: "30 Min.", punkte: "–", aufgabe: "Halbformelle oder formelle Kurznachricht/E-Mail (z. B. an Schule, Vermieter, Amt)", tr: "Yarı resmi veya resmi kısa mesaj/e-posta (örn. okula, ev sahibine, resmi daireye)" },
      { teil: "Sprechen (Paarprüfung)", zeit: "≈ 16 Min.", punkte: "–", aufgabe: "Über sich sprechen, über ein Bild/Erfahrungen sprechen, gemeinsam etwas planen", tr: "Kendinden bahsetme, bir resim/deneyimler hakkında konuşma, birlikte plan yapma" }
    ],
    hinweise: {
      de: [
        "Zwei Aufgaben sind fast wie bei telc B1: Lesen Teil 3 (Anzeigen) und das gemeinsame Planen. Wenn du für telc übst, übst du also auch für den DTZ!",
        "Beim Sprechen bekommst du ein Bild. Du musst das Bild beschreiben. Lerne dafür Sätze wie „Auf dem Bild sehe ich …“.",
        "Das Schreiben ist kürzer als bei telc B1. Du schreibst eine kurze Nachricht mit meistens 3 Punkten."
      ],
      tr: [
        "İki görev telc B1'e çok benzer: Lesen Teil 3 (ilanlar) ve birlikte plan yapma. telc için çalışırsan DTZ için de çalışmış olursun!",
        "Konuşma sınavında bir resim alırsın. Bu resmi anlatmalısın. Bunun için „Auf dem Bild sehe ich …“ (Resimde … görüyorum) gibi cümleler öğren.",
        "Yazma bölümü telc B1'den daha kısadır. Genelde 3 maddelik kısa bir mesaj yazarsın."
      ]
    }
  },
  vergleich: {
    de: "Welche Prüfung ist gut für dich? telc B1 ist gut für die Einbürgerung. Der DTZ ist auch eine telc-Prüfung. Goethe B1 kennen viele Länder auf der Welt. Ein Tipp für beide Prüfungen: Übe die Aufgabentypen. Dann hast du einen großen Vorteil!",
    tr: "Hangi sınav sana uygun? telc B1, vatandaşlık için iyidir. DTZ de bir telc sınavıdır. Goethe B1'i dünyada birçok ülke tanır. İki sınav için de bir ipucu: Soru tiplerini çalış. O zaman büyük avantaj kazanırsın!"
  }
};
