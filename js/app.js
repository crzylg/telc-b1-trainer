/* ===== B1 Prüfungstrainer – App Engine ===== */
(function () {
  "use strict";

  // ---------- Storage ----------
  const store = {
    get(key, fallback) {
      try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch (e) { return fallback; }
    },
    set(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }
  };
  let known = store.get("b1_known", {});     // topicId -> [wordIndex,...]
  let scores = store.get("b1_scores", {});   // exerciseId -> {score,total}

  const view = document.getElementById("view");
  const tabs = document.querySelectorAll(".tab");

  // ---------- Helpers ----------
  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function letter(i) { return String.fromCharCode(97 + i); }
  function saveScore(id, score, total) {
    const prev = scores[id];
    if (!prev || score > prev.score) { scores[id] = { score, total }; store.set("b1_scores", scores); }
    updateHeader();
  }
  function scoreBadge(id) {
    const s = scores[id];
    return s ? `✅ Beste: ${s.score}/${s.total}` : "Noch nicht gemacht / Henüz yapılmadı";
  }
  function feedback(container, score, total, extra) {
    const pct = score / total;
    const cls = pct >= 0.8 ? "good" : pct >= 0.5 ? "mid" : "bad";
    const msgDe = pct >= 0.8 ? "Sehr gut!" : pct >= 0.5 ? "Nicht schlecht – schau dir die Erklärungen an." : "Noch üben – lies die Erklärungen genau.";
    const msgTr = pct >= 0.8 ? "Çok iyi!" : pct >= 0.5 ? "Fena değil – açıklamalara bak." : "Daha çok çalışmalı – açıklamaları dikkatle oku.";
    let fb = container.querySelector(".feedback");
    if (!fb) { fb = el(`<div class="feedback"></div>`); container.appendChild(fb); }
    fb.className = "feedback " + cls;
    fb.textContent = `${score} / ${total} – ${msgDe} / ${msgTr}` + (extra ? " " + extra : "");
  }
  function trBox(text) { return `<div class="tr">${esc(text)}</div>`; }

  function updateHeader() {
    const totalWords = window.VOKABELN.reduce((n, t) => n + t.words.length, 0);
    const knownWords = Object.values(known).reduce((n, a) => n + a.length, 0);
    const done = Object.keys(scores).length;
    document.getElementById("headerProgress").textContent = `📚 ${knownWords}/${totalWords} · ✅ ${done}`;
  }

  // ---------- Navigation ----------
  const routes = {};
  function navigate(name) {
    tabs.forEach(t => t.classList.toggle("active", t.dataset.view === name));
    window.scrollTo(0, 0);
    view.innerHTML = "";
    routes[name]();
  }
  tabs.forEach(t => t.addEventListener("click", () => navigate(t.dataset.view)));

  // ---------- HOME ----------
  routes.home = function () {
    const totalWords = window.VOKABELN.reduce((n, t) => n + t.words.length, 0);
    const knownWords = Object.values(known).reduce((n, a) => n + a.length, 0);
    const exCount = window.LESEN.teil1.length + window.LESEN.teil2.length + window.LESEN.teil3.length + window.LESEN.goethe4.length + window.SPRACHBAUSTEINE.teil1.length + window.SPRACHBAUSTEINE.teil2.length;
    view.appendChild(el(`
      <div class="card">
        <h2>Willkommen! · Hoş geldin!</h2>
        <p>Dein persönlicher Trainer für die <strong>telc Deutsch B1</strong> und <strong>Goethe-Zertifikat B1</strong> Prüfung – mit Schwerpunkt auf <strong>Lesen &amp; Verstehen</strong>.</p>
        ${trBox("telc Deutsch B1 ve Goethe-Zertifikat B1 sınavı için kişisel antrenörün – Okuma ve Anlama ağırlıklı. Tüm açıklamalar basit Almanca ve Türkçe.")}
        <div class="stat-row">
          <div class="stat-box"><div class="num">${knownWords}</div><div class="lbl">Wörter gelernt<br>öğrenilen kelime</div></div>
          <div class="stat-box"><div class="num">${totalWords}</div><div class="lbl">Wörter gesamt<br>toplam kelime</div></div>
          <div class="stat-box"><div class="num">${Object.keys(scores).length}/${exCount + window.KONNEKTOREN.quiz.length > 0 ? exCount + 1 + window.GRAMMATIK.length : exCount}</div><div class="lbl">Übungen gemacht<br>yapılan alıştırma</div></div>
        </div>
      </div>`));
    const grid = el(`<div class="tile-grid"></div>`);
    const tiles = [
      ["pruefung", "📋", "Prüfungsaufbau", "Sınav yapısı", "telc & Goethe im Detail"],
      ["strategien", "🎯", "Taktiken & Tricks", "Taktikler", "Für jeden Prüfungsteil"],
      ["lesen", "📖", "Lesen trainieren", "Okuma antrenmanı", "Teil 1–3 + Goethe-Stil"],
      ["sprachbausteine", "🧩", "Sprachbausteine", "Dil yapıları", "Grammatik & Wortschatz"],
      ["vokabeln", "🗂️", "Vokabeltrainer", "Kelime antrenörü", `${window.VOKABELN.length} Themen, ${totalWords} Wörter`],
      ["konnektoren", "🔗", "Konnektoren", "Bağlaçlar", "Mit Wortstellung & Quiz"],
      ["grammatik", "📐", "Grammatik-Lernziele", "Dilbilgisi hedefleri", `${window.GRAMMATIK.length} Themen mit Quiz`],
      ["skills", "✍️", "Schreiben, Hören, Sprechen", "Yazma, Dinleme, Konuşma", "Musterbriefe & Redemittel"]
    ];
    tiles.forEach(([r, emoji, t, tr, sub]) => {
      const tile = el(`<button class="tile"><span class="tile-emoji">${emoji}</span><span class="tile-title">${t}</span><span class="tile-sub">${tr}</span><span class="tile-meta">${sub}</span></button>`);
      tile.addEventListener("click", () => navigate(r));
      grid.appendChild(tile);
    });
    view.appendChild(grid);
  };

  // ---------- PRÜFUNG ----------
  routes.pruefung = function () {
    const P = window.PRUEFUNG;
    view.appendChild(el(`<div class="card"><h2>Die B1-Prüfungen im Überblick</h2><p class="subtitle-tr">B1 sınavlarına genel bakış</p><p>${esc(P.intro.de)}</p>${trBox(P.intro.tr)}</div>`));
    [P.telc, P.goethe].forEach(exam => {
      const rows = exam.parts.map(p => `<tr><td><strong>${esc(p.teil)}</strong></td><td>${esc(p.zeit)}</td><td>${esc(p.punkte)}</td><td>${esc(p.aufgabe)}<div class="explain show">🇹🇷 ${esc(p.tr)}</div></td></tr>`).join("");
      const hints = exam.hinweise.de.map((h, i) => `<li>${esc(h)}<div class="explain show">🇹🇷 ${esc(exam.hinweise.tr[i])}</div></li>`).join("");
      view.appendChild(el(`
        <div class="card">
          <h2>${esc(exam.name)}</h2>
          <p>${esc(exam.summary.de)}</p>${trBox(exam.summary.tr)}
          <div class="table-wrap"><table><thead><tr><th>Teil</th><th>Zeit</th><th>Punkte/Items</th><th>Aufgabe / Görev</th></tr></thead><tbody>${rows}</tbody></table></div>
          <h3>Wichtige Hinweise / Önemli notlar</h3><ul>${hints}</ul>
        </div>`));
    });
    view.appendChild(el(`<div class="card"><h2>telc oder Goethe?</h2><p>${esc(P.vergleich.de)}</p>${trBox(P.vergleich.tr)}</div>`));
  };

  // ---------- STRATEGIEN ----------
  routes.strategien = function () {
    view.appendChild(el(`<div class="card"><h2>🎯 Taktiken &amp; Strategien</h2><p class="subtitle-tr">Sınav taktikleri – okuma bölümüne özel ağırlık verilmiştir</p><p>Diese Techniken stammen aus der Analyse der offiziellen telc- und Goethe-Übungstests. Die Teile mit <span class="badge orange">FOKUS</span> sind besonders wichtig für die Lesen-Punkte.</p>${trBox("Bu teknikler resmi telc ve Goethe deneme testlerinin analizinden çıkarılmıştır. FOKUS işaretli bölümler okuma puanları için özellikle önemlidir.")}</div>`));
    window.STRATEGIEN.forEach(s => {
      const acc = el(`<div class="accordion"><button class="accordion-head">${s.emoji} ${esc(s.title)} ${s.focus ? '<span class="badge orange">FOKUS</span>' : ""}<span style="display:block;font-weight:400;font-size:.8rem;color:var(--ink-soft)">${esc(s.titleTr)}</span></button><div class="accordion-body"></div></div>`);
      const body = acc.querySelector(".accordion-body");
      s.sections.forEach(sec => {
        body.appendChild(el(`<div><h3>${esc(sec.h)}</h3><p>${esc(sec.de)}</p>${trBox(sec.tr)}</div>`));
      });
      acc.querySelector(".accordion-head").addEventListener("click", () => acc.classList.toggle("open"));
      view.appendChild(acc);
    });
  };

  // ---------- LESEN ----------
  routes.lesen = function () {
    view.appendChild(el(`<div class="card"><h2>📖 Leseverstehen trainieren</h2><p class="subtitle-tr">Okuma-anlama antrenmanı – telc formatında</p><p>Wähle eine Übung. Format und Fallen entsprechen dem offiziellen telc Übungstest. Lies vorher die Taktiken im Bereich „Taktik“!</p>${trBox("Bir alıştırma seç. Format ve tuzaklar resmi telc deneme testine uygundur. Önce „Taktikler“ bölümünü oku!")}</div>`));
    const grid = el(`<div class="tile-grid"></div>`);
    const items = [];
    window.LESEN.teil1.forEach(ex => items.push(["Teil 1", ex, () => renderTeil1(ex)]));
    window.LESEN.teil2.forEach(ex => items.push(["Teil 2", ex, () => renderTeil2(ex)]));
    window.LESEN.teil3.forEach(ex => items.push(["Teil 3", ex, () => renderTeil3(ex)]));
    window.LESEN.goethe4.forEach(ex => items.push(["Goethe Teil 4", ex, () => renderGoethe4(ex)]));
    items.forEach(([label, ex, fn]) => {
      const tile = el(`<button class="tile"><span class="tile-emoji">📖</span><span class="tile-title">${esc(label)}</span><span class="tile-sub">${esc(ex.title)}</span><span class="tile-meta">${scoreBadge(ex.id)}</span></button>`);
      tile.addEventListener("click", () => { view.innerHTML = ""; backLink("lesen"); fn(); });
      grid.appendChild(tile);
    });
    view.appendChild(grid);
  };

  function backLink(route) {
    const b = el(`<button class="back-link">← Zurück / Geri</button>`);
    b.addEventListener("click", () => navigate(route));
    view.appendChild(b);
  }

  function anleitungCard(ex) {
    view.appendChild(el(`<div class="card"><h2>${esc(ex.title)}</h2><p><strong>Anleitung:</strong> ${esc(ex.anleitung.de)}</p>${trBox(ex.anleitung.tr)}</div>`));
  }

  // Teil 1: Überschriften zuordnen
  function renderTeil1(ex) {
    anleitungCard(ex);
    const card = el(`<div class="card"></div>`);
    card.appendChild(el(`<div><h3>Überschriften a–j</h3>${ex.headings.map((h, i) => `<div class="example-de"><strong>${letter(i)}</strong> ${esc(h)}</div>`).join("")}</div>`));
    const selects = [];
    ex.texts.forEach((t, i) => {
      const q = el(`<div class="question"><span class="q-label">Text ${i + 1}</span><div class="exercise-text">${esc(t.text)}</div></div>`);
      const sel = el(`<select class="match-select"><option value="">– Überschrift wählen / Başlık seç –</option>${ex.headings.map((h, j) => `<option value="${j}">${letter(j)} – ${esc(h.slice(0, 60))}</option>`).join("")}</select>`);
      const exp = el(`<div class="explain">💡 ${esc(t.explain.de)}<br>🇹🇷 ${esc(t.explain.tr)}</div>`);
      q.appendChild(sel); q.appendChild(exp);
      selects.push({ sel, exp, answer: t.answer });
      card.appendChild(q);
    });
    addCheck(card, ex.id, selects);
    view.appendChild(card);
  }

  // Teil 3: Anzeigen zuordnen (mit x)
  function renderTeil3(ex) {
    anleitungCard(ex);
    const adsCard = el(`<div class="card"><h3>Anzeigen a–l</h3>${ex.ads.map((a, i) => `<div class="example-de"><strong>${letter(i)}</strong> ${esc(a)}</div>`).join("")}</div>`);
    view.appendChild(adsCard);
    const card = el(`<div class="card"><h3>Situationen 1–10</h3></div>`);
    const selects = [];
    ex.situations.forEach(s => {
      const q = el(`<div class="question"><span class="q-label">${esc(s.s)}</span></div>`);
      const sel = el(`<select class="match-select"><option value="">– Anzeige wählen / İlan seç –</option>${ex.ads.map((a, j) => `<option value="${j}">${letter(j)} – ${esc(a.slice(0, 45))}…</option>`).join("")}<option value="-1">x – keine Anzeige passt / uygun ilan yok</option></select>`);
      const exp = el(`<div class="explain">💡 ${esc(s.explain.de)}<br>🇹🇷 ${esc(s.explain.tr)}</div>`);
      q.appendChild(sel); q.appendChild(exp);
      selects.push({ sel, exp, answer: s.answer });
      card.appendChild(q);
    });
    addCheck(card, ex.id, selects);
    view.appendChild(card);
  }

  function addCheck(card, id, selects) {
    const btn = el(`<div class="btn-row"><button class="btn green">Prüfen / Kontrol et</button></div>`);
    btn.querySelector("button").addEventListener("click", () => {
      let score = 0;
      selects.forEach(({ sel, exp, answer }) => {
        const val = sel.value === "" ? null : parseInt(sel.value, 10);
        const ok = val === answer;
        sel.classList.remove("correct", "wrong");
        sel.classList.add(ok ? "correct" : "wrong");
        exp.classList.add("show");
        if (ok) score++;
      });
      feedback(card, score, selects.length);
      saveScore(id, score, selects.length);
    });
    card.appendChild(btn);
  }

  // Teil 2: Multiple Choice
  function renderTeil2(ex) {
    anleitungCard(ex);
    const card = el(`<div class="card"><div class="exercise-text">${ex.text}</div></div>`);
    renderMCQuestions(card, ex.id, ex.questions);
    view.appendChild(card);
  }

  function renderMCQuestions(card, id, questions) {
    const groups = [];
    questions.forEach((q, qi) => {
      const qEl = el(`<div class="question"><span class="q-label">${esc(q.q)}</span></div>`);
      const radios = [];
      q.options.forEach((opt, oi) => {
        const o = el(`<label class="option"><input type="radio" name="${id}-q${qi}" value="${oi}"><span><strong>${letter(oi)})</strong> ${esc(opt)}</span></label>`);
        radios.push(o);
        qEl.appendChild(o);
      });
      const exp = el(`<div class="explain">💡 ${esc(q.explain.de)}<br>🇹🇷 ${esc(q.explain.tr)}</div>`);
      qEl.appendChild(exp);
      groups.push({ radios, exp, answer: q.answer });
      card.appendChild(qEl);
    });
    const btn = el(`<div class="btn-row"><button class="btn green">Prüfen / Kontrol et</button></div>`);
    btn.querySelector("button").addEventListener("click", () => {
      let score = 0;
      groups.forEach(({ radios, exp, answer }) => {
        radios.forEach((r, i) => {
          r.classList.remove("correct", "wrong");
          const checked = r.querySelector("input").checked;
          if (i === answer) r.classList.add("correct");
          else if (checked) r.classList.add("wrong");
          if (checked && i === answer) score++;
        });
        exp.classList.add("show");
      });
      feedback(card, score, groups.length);
      saveScore(id, score, groups.length);
    });
    card.appendChild(btn);
  }

  // Goethe Teil 4: Ja/Nein
  function renderGoethe4(ex) {
    anleitungCard(ex);
    const card = el(`<div class="card"></div>`);
    const groups = [];
    ex.statements.forEach((st, i) => {
      const qEl = el(`<div class="question"><span class="q-label">${i + 1}.</span><div class="exercise-text">${esc(st.s)}</div></div>`);
      const yes = el(`<label class="option"><input type="radio" name="${ex.id}-s${i}" value="1"><span>JA – für das Verbot / yasağa taraftar</span></label>`);
      const no = el(`<label class="option"><input type="radio" name="${ex.id}-s${i}" value="0"><span>NEIN – gegen das Verbot / yasağa karşı</span></label>`);
      const exp = el(`<div class="explain">💡 ${esc(st.explain.de)}<br>🇹🇷 ${esc(st.explain.tr)}</div>`);
      qEl.appendChild(yes); qEl.appendChild(no); qEl.appendChild(exp);
      groups.push({ yes, no, exp, answer: st.answer });
      card.appendChild(qEl);
    });
    const btn = el(`<div class="btn-row"><button class="btn green">Prüfen / Kontrol et</button></div>`);
    btn.querySelector("button").addEventListener("click", () => {
      let score = 0;
      groups.forEach(({ yes, no, exp, answer }) => {
        [yes, no].forEach(o => o.classList.remove("correct", "wrong"));
        const correctEl = answer ? yes : no;
        const wrongEl = answer ? no : yes;
        correctEl.classList.add("correct");
        if (wrongEl.querySelector("input").checked) wrongEl.classList.add("wrong");
        if (correctEl.querySelector("input").checked) score++;
        exp.classList.add("show");
      });
      feedback(card, score, groups.length);
      saveScore(ex.id, score, groups.length);
    });
    card.appendChild(btn);
  }

  // ---------- SPRACHBAUSTEINE ----------
  routes.sprachbausteine = function () {
    view.appendChild(el(`<div class="card"><h2>🧩 Sprachbausteine</h2><p class="subtitle-tr">Dil yapıları – dilbilgisi ve kelime bilgisi</p><p>Teil 1: Grammatik (a/b/c). Teil 2: Wortschatz – 15 Wörter, 10 Lücken, 5 bleiben übrig.</p>${trBox("Teil 1: Dilbilgisi (a/b/c). Teil 2: Kelime bilgisi – 15 kelime, 10 boşluk, 5 kelime artar.")}</div>`));
    const grid = el(`<div class="tile-grid"></div>`);
    window.SPRACHBAUSTEINE.teil1.forEach(ex => {
      const tile = el(`<button class="tile"><span class="tile-emoji">🧩</span><span class="tile-title">${esc(ex.title)}</span><span class="tile-meta">${scoreBadge(ex.id)}</span></button>`);
      tile.addEventListener("click", () => { view.innerHTML = ""; backLink("sprachbausteine"); renderSB1(ex); });
      grid.appendChild(tile);
    });
    window.SPRACHBAUSTEINE.teil2.forEach(ex => {
      const tile = el(`<button class="tile"><span class="tile-emoji">🔤</span><span class="tile-title">${esc(ex.title)}</span><span class="tile-meta">${scoreBadge(ex.id)}</span></button>`);
      tile.addEventListener("click", () => { view.innerHTML = ""; backLink("sprachbausteine"); renderSB2(ex); });
      grid.appendChild(tile);
    });
    view.appendChild(grid);
  };

  function renderSB1(ex) {
    anleitungCard(ex);
    const card = el(`<div class="card"><p><em>${esc(ex.intro)}</em></p></div>`);
    const groups = [];
    ex.gaps.forEach((g, gi) => {
      const qEl = el(`<div class="question"><span class="q-label">${gi + 1}. ${esc(g.before)} ___ ${esc(g.after)}</span></div>`);
      const radios = [];
      g.options.forEach((opt, oi) => {
        const o = el(`<label class="option"><input type="radio" name="${ex.id}-g${gi}" value="${oi}"><span><strong>${letter(oi)})</strong> ${esc(opt)}</span></label>`);
        radios.push(o); qEl.appendChild(o);
      });
      const exp = el(`<div class="explain">💡 ${esc(g.explain.de)}<br>🇹🇷 ${esc(g.explain.tr)}</div>`);
      qEl.appendChild(exp);
      groups.push({ radios, exp, answer: g.answer });
      card.appendChild(qEl);
    });
    const btn = el(`<div class="btn-row"><button class="btn green">Prüfen / Kontrol et</button></div>`);
    btn.querySelector("button").addEventListener("click", () => {
      let score = 0;
      groups.forEach(({ radios, exp, answer }) => {
        radios.forEach((r, i) => {
          r.classList.remove("correct", "wrong");
          const checked = r.querySelector("input").checked;
          if (i === answer) r.classList.add("correct");
          else if (checked) r.classList.add("wrong");
          if (checked && i === answer) score++;
        });
        exp.classList.add("show");
      });
      feedback(card, score, groups.length);
      saveScore(ex.id, score, groups.length);
    });
    card.appendChild(btn);
    view.appendChild(card);
  }

  function renderSB2(ex) {
    anleitungCard(ex);
    view.appendChild(el(`<div class="card"><h3>Wörter a–o</h3><p>${ex.words.map((w, i) => `<span class="badge">${letter(i)} ${esc(w)}</span>`).join(" ")}</p></div>`));
    const card = el(`<div class="card"><p><em>${esc(ex.intro)}</em></p></div>`);
    const selects = [];
    ex.gaps.forEach((g, gi) => {
      const q = el(`<div class="question"><span class="q-label">${gi + 1}. ${esc(g.before)} ___ ${esc(g.after)}</span></div>`);
      const sel = el(`<select class="match-select"><option value="">– Wort wählen / Kelime seç –</option>${ex.words.map((w, j) => `<option value="${j}">${letter(j)} – ${esc(w)}</option>`).join("")}</select>`);
      const exp = el(`<div class="explain">💡 ${esc(g.explain.de)}<br>🇹🇷 ${esc(g.explain.tr)}</div>`);
      q.appendChild(sel); q.appendChild(exp);
      selects.push({ sel, exp, answer: g.answer });
      card.appendChild(q);
    });
    addCheck(card, ex.id, selects);
    view.appendChild(card);
  }

  // ---------- VOKABELN ----------
  routes.vokabeln = function () {
    const totalWords = window.VOKABELN.reduce((n, t) => n + t.words.length, 0);
    const knownWords = Object.values(known).reduce((n, a) => n + a.length, 0);
    view.appendChild(el(`<div class="card"><h2>🗂️ Vokabeltrainer</h2><p class="subtitle-tr">Kelime antrenörü – konu konu, Almanca-Türkçe</p>
      <p>Alle wichtigen B1-Wörter nach Themen, mit Beispielsätzen. Lerne mit der Liste, den Karteikarten (Flashcards) oder dem Quiz. Markiere Wörter, die du sicher kannst, mit ⭐.</p>
      ${trBox("Tüm önemli B1 kelimeleri konulara göre, örnek cümlelerle. Liste, kelime kartları veya quiz ile öğren. İyi bildiğin kelimeleri ⭐ ile işaretle.")}
      <div class="progress-bar"><div class="progress-fill" style="width:${totalWords ? Math.round(knownWords / totalWords * 100) : 0}%"></div></div>
      <p><strong>${knownWords} / ${totalWords}</strong> Wörter gelernt / kelime öğrenildi</p></div>`));
    const grid = el(`<div class="tile-grid"></div>`);
    window.VOKABELN.forEach(topic => {
      const k = (known[topic.id] || []).length;
      const tile = el(`<button class="tile"><span class="tile-emoji">${topic.emoji}</span><span class="tile-title">${esc(topic.title)}</span><span class="tile-sub">${esc(topic.titleTr)}</span><span class="tile-meta">⭐ ${k}/${topic.words.length}</span></button>`);
      tile.addEventListener("click", () => { view.innerHTML = ""; backLink("vokabeln"); renderTopic(topic); });
      grid.appendChild(tile);
    });
    view.appendChild(grid);
  };

  function renderTopic(topic) {
    const head = el(`<div class="card"><h2>${topic.emoji} ${esc(topic.title)} · ${esc(topic.titleTr)}</h2>
      <div class="btn-row">
        <button class="btn" data-mode="liste">📋 Liste</button>
        <button class="btn secondary" data-mode="karten">🃏 Karteikarten / Kartlar</button>
        <button class="btn secondary" data-mode="quiz">❓ Quiz</button>
      </div></div>`);
    view.appendChild(head);
    const content = el(`<div></div>`);
    view.appendChild(content);
    const buttons = head.querySelectorAll("button");
    function setMode(mode) {
      buttons.forEach(b => b.className = "btn" + (b.dataset.mode === mode ? "" : " secondary"));
      content.innerHTML = "";
      if (mode === "liste") renderWordList(content, topic);
      if (mode === "karten") renderFlashcards(content, topic);
      if (mode === "quiz") renderVocabQuiz(content, topic);
    }
    buttons.forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));
    setMode("liste");
  }

  function toggleKnown(topicId, idx, on) {
    const arr = known[topicId] || (known[topicId] = []);
    const pos = arr.indexOf(idx);
    if (on && pos === -1) arr.push(idx);
    if (!on && pos > -1) arr.splice(pos, 1);
    store.set("b1_known", known);
    updateHeader();
  }

  function renderWordList(container, topic) {
    const card = el(`<div class="card"></div>`);
    topic.words.forEach((w, i) => {
      const isKnown = (known[topic.id] || []).includes(i);
      const row = el(`<div class="vocab-row" style="flex-wrap:wrap">
        <span class="vocab-de">${esc(w.de)}</span>
        <span class="vocab-tr-word">🇹🇷 ${esc(w.tr)}</span>
        <button class="vocab-known ${isKnown ? "on" : ""}" title="Kann ich / Biliyorum">⭐</button>
        <span class="vocab-example">„${esc(w.ex)}“</span>
      </div>`);
      const star = row.querySelector(".vocab-known");
      star.addEventListener("click", () => {
        const on = !star.classList.contains("on");
        star.classList.toggle("on", on);
        toggleKnown(topic.id, i, on);
      });
      card.appendChild(row);
    });
    container.appendChild(card);
  }

  function renderFlashcards(container, topic) {
    let order = topic.words.map((_, i) => i).sort(() => Math.random() - 0.5);
    let pos = 0;
    const wrap = el(`<div class="card"></div>`);
    const counter = el(`<p style="text-align:center;font-weight:700"></p>`);
    const cardEl = el(`<div class="flashcard"><div class="flashcard-inner">
        <div class="flashcard-face flashcard-front"><div class="flashcard-word"></div><div class="flashcard-hint">Tippen zum Umdrehen / Çevirmek için dokun</div></div>
        <div class="flashcard-face flashcard-back"><div class="flashcard-word" style="color:var(--blue-dark)"></div><div class="flashcard-example"></div></div>
      </div></div>`);
    const controls = el(`<div class="btn-row" style="justify-content:center">
        <button class="btn orange">🔁 Nochmal üben / Tekrar</button>
        <button class="btn green">⭐ Kann ich / Biliyorum</button>
      </div>`);
    function show() {
      if (pos >= order.length) {
        counter.textContent = "Fertig! / Bitti! 🎉";
        cardEl.style.display = "none";
        controls.style.display = "none";
        return;
      }
      const w = topic.words[order[pos]];
      cardEl.classList.remove("flipped");
      cardEl.querySelector(".flashcard-front .flashcard-word").textContent = w.de;
      cardEl.querySelector(".flashcard-back .flashcard-word").textContent = "🇹🇷 " + w.tr;
      cardEl.querySelector(".flashcard-example").textContent = "„" + w.ex + "“";
      counter.textContent = `Karte ${pos + 1} / ${order.length}`;
    }
    cardEl.addEventListener("click", () => cardEl.classList.toggle("flipped"));
    const [againBtn, knowBtn] = controls.querySelectorAll("button");
    againBtn.addEventListener("click", () => { order.push(order[pos]); pos++; show(); });
    knowBtn.addEventListener("click", () => { toggleKnown(topic.id, order[pos], true); pos++; show(); });
    wrap.appendChild(counter); wrap.appendChild(cardEl); wrap.appendChild(controls);
    container.appendChild(wrap);
    show();
  }

  function renderVocabQuiz(container, topic) {
    const words = topic.words;
    const count = Math.min(10, words.length);
    const picked = words.map((_, i) => i).sort(() => Math.random() - 0.5).slice(0, count);
    const card = el(`<div class="card"><h3>Quiz: Was bedeutet das Wort? / Kelimenin anlamı ne?</h3></div>`);
    const groups = [];
    picked.forEach((wi, qi) => {
      const w = words[wi];
      const wrongs = words.map((_, i) => i).filter(i => i !== wi).sort(() => Math.random() - 0.5).slice(0, 2);
      const options = [wi, ...wrongs].sort(() => Math.random() - 0.5);
      const qEl = el(`<div class="question"><span class="q-label">${qi + 1}. ${esc(w.de)}</span></div>`);
      const radios = [];
      options.forEach(oi => {
        const o = el(`<label class="option"><input type="radio" name="vq-${topic.id}-${qi}" value="${oi}"><span>${esc(words[oi].tr)}</span></label>`);
        radios.push({ el: o, idx: oi });
        qEl.appendChild(o);
      });
      groups.push({ radios, answer: wi });
      card.appendChild(qEl);
    });
    const btn = el(`<div class="btn-row"><button class="btn green">Prüfen / Kontrol et</button></div>`);
    btn.querySelector("button").addEventListener("click", () => {
      let score = 0;
      groups.forEach(({ radios, answer }) => {
        radios.forEach(({ el: o, idx }) => {
          o.classList.remove("correct", "wrong");
          const checked = o.querySelector("input").checked;
          if (idx === answer) o.classList.add("correct");
          else if (checked) o.classList.add("wrong");
          if (checked && idx === answer) score++;
        });
      });
      feedback(card, score, groups.length);
    });
    card.appendChild(btn);
    container.appendChild(card);
  }

  // ---------- KONNEKTOREN ----------
  routes.konnektoren = function () {
    const K = window.KONNEKTOREN;
    view.appendChild(el(`<div class="card"><h2>🔗 Konnektoren · Bağlaçlar</h2><p>${esc(K.intro.de)}</p>${trBox(K.intro.tr)}
      <h3>Die drei Wortstellungs-Gruppen / Üç kelime dizilişi grubu</h3>
      ${K.posRules.map(r => `<div class="example-de"><span class="konnektor-pos">${r.code}</span> <strong>${esc(r.name)}:</strong> ${esc(r.rule.de)}<div class="example-tr">${esc(r.rule.tr)}</div></div>`).join("")}
    </div>`));
    K.categories.forEach(cat => {
      const acc = el(`<div class="accordion"><button class="accordion-head">${cat.emoji} ${esc(cat.name)}</button><div class="accordion-body"></div></div>`);
      const body = acc.querySelector(".accordion-body");
      cat.items.forEach(item => {
        body.appendChild(el(`<div class="card konnektor-card" style="box-shadow:none;border:1px solid var(--line);margin:10px 0">
          <span class="konnektor-word">${esc(item.k)}</span><span class="konnektor-pos">${item.pos}</span>
          <p style="margin-top:6px">🇹🇷 <strong>${esc(item.tr)}</strong> – ${esc(item.de)}</p>
          <div class="example-de">${esc(item.ex)}</div>
          <div class="example-tr">${esc(item.exTr)}</div>
        </div>`));
      });
      acc.querySelector(".accordion-head").addEventListener("click", () => acc.classList.toggle("open"));
      view.appendChild(acc);
    });
    const quizCard = el(`<div class="card"><h2>❓ Konnektoren-Quiz</h2><p class="subtitle-tr">Bağlaç testi – Sprachbausteine formatında</p></div>`);
    renderMCQuestions(quizCard, "konnektoren-quiz", window.KONNEKTOREN.quiz.map(q => ({ q: q.q, options: q.options, answer: q.answer, explain: q.explain })));
    view.appendChild(quizCard);
  };

  // ---------- GRAMMATIK ----------
  routes.grammatik = function () {
    view.appendChild(el(`<div class="card"><h2>📐 Grammatik-Lernziele B1</h2><p class="subtitle-tr">B1 dilbilgisi öğrenme hedefleri</p><p>Jedes Lernziel enthält: einfache Erklärung (Deutsch + Türkisch), Formen-Tabelle, typische Fehler und ein Mini-Quiz. Genau diese Themen werden in den Sprachbausteinen getestet!</p>${trBox("Her öğrenme hedefi şunları içerir: basit açıklama (Almanca + Türkçe), form tablosu, tipik hatalar ve mini test. Sprachbausteine'de tam olarak bu konular test edilir!")}</div>`));
    const grid = el(`<div class="tile-grid"></div>`);
    window.GRAMMATIK.forEach(g => {
      const tile = el(`<button class="tile"><span class="tile-emoji">${g.emoji}</span><span class="tile-title">${esc(g.title)}</span><span class="tile-sub">${esc(g.titleTr)}</span><span class="tile-meta">${scoreBadge("gram-" + g.id)}</span></button>`);
      tile.addEventListener("click", () => { view.innerHTML = ""; backLink("grammatik"); renderGrammatik(g); });
      grid.appendChild(tile);
    });
    view.appendChild(grid);
  };

  function renderGrammatik(g) {
    view.appendChild(el(`<div class="card"><h2>${g.emoji} ${esc(g.title)} · ${esc(g.titleTr)}</h2>
      <h3>Erklärung / Açıklama</h3><p>${esc(g.de)}</p>${trBox(g.tr)}
      <h3>Formen &amp; Beispiele / Formlar ve örnekler</h3>
      <div class="table-wrap"><table><thead><tr>${g.table.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
      <tbody>${g.table.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
      <h3>⚠️ Typische Fehler / Tipik hatalar</h3><p>${esc(g.fehler.de)}</p>${trBox(g.fehler.tr)}
    </div>`));
    const quizCard = el(`<div class="card"><h3>❓ Mini-Quiz</h3></div>`);
    renderMCQuestions(quizCard, "gram-" + g.id, g.quiz);
    view.appendChild(quizCard);
  }

  // ---------- SKILLS (Schreiben, Hören, Sprechen) ----------
  routes.skills = function () {
    const S = window.SKILLS;
    // Schreiben
    view.appendChild(el(`<div class="card"><h2>✍️ ${esc(S.schreiben.title)}</h2><p class="subtitle-tr">${esc(S.schreiben.titleTr)}</p></div>`));
    S.schreiben.redemittel.forEach(group => {
      const acc = el(`<div class="accordion"><button class="accordion-head">💬 ${esc(group.name)}</button><div class="accordion-body"></div></div>`);
      const body = acc.querySelector(".accordion-body");
      group.items.forEach(it => body.appendChild(el(`<div class="example-de">${esc(it.de)}<div class="example-tr">${esc(it.tr)}</div></div>`)));
      acc.querySelector(".accordion-head").addEventListener("click", () => acc.classList.toggle("open"));
      view.appendChild(acc);
    });
    S.schreiben.muster.forEach(m => {
      const acc = el(`<div class="accordion"><button class="accordion-head">📄 ${esc(m.name)}</button><div class="accordion-body"></div></div>`);
      const body = acc.querySelector(".accordion-body");
      body.appendChild(el(`<div><p><strong>Aufgabe:</strong> ${esc(m.aufgabe)}</p>
        <div class="exercise-text" style="white-space:pre-line">${esc(m.text)}</div>
        <p>💡 ${esc(m.tipp.de)}</p>${trBox(m.tipp.tr)}</div>`));
      acc.querySelector(".accordion-head").addEventListener("click", () => acc.classList.toggle("open"));
      view.appendChild(acc);
    });
    // Hören
    const h = el(`<div class="card"><h2>🎧 ${esc(S.hoeren.title)}</h2><p class="subtitle-tr">${esc(S.hoeren.titleTr)}</p>
      <h3>Kostenlose Ressourcen / Ücretsiz kaynaklar</h3>
      ${S.hoeren.resources.map(r => `<div class="example-de"><strong><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.name)}</a></strong><br>${esc(r.desc.de)}<div class="example-tr">${esc(r.desc.tr)}</div></div>`).join("")}
      <h3>Tipps / İpuçları</h3>
      <ul>${S.hoeren.tipps.de.map((t, i) => `<li>${esc(t)}<div class="explain show">🇹🇷 ${esc(S.hoeren.tipps.tr[i])}</div></li>`).join("")}</ul>
    </div>`);
    view.appendChild(h);
    // Sprechen
    view.appendChild(el(`<div class="card"><h2>🗣️ ${esc(S.sprechen.title)}</h2><p class="subtitle-tr">${esc(S.sprechen.titleTr)}</p></div>`));
    S.sprechen.groups.forEach(group => {
      const acc = el(`<div class="accordion"><button class="accordion-head">💬 ${esc(group.name)}</button><div class="accordion-body"></div></div>`);
      const body = acc.querySelector(".accordion-body");
      group.items.forEach(it => body.appendChild(el(`<div class="example-de">${esc(it.de)}<div class="example-tr">${esc(it.tr)}</div></div>`)));
      acc.querySelector(".accordion-head").addEventListener("click", () => acc.classList.toggle("open"));
      view.appendChild(acc);
    });
  };

  // ---------- Init ----------
  updateHeader();
  navigate("home");
})();
