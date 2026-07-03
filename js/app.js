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

  // ---------- Empfohlene Lernreihenfolge / Önerilen çalışma sırası ----------
  // Das ist wie ein Wegweiser. Der erste Eintrag ist der beste Start für Anfänger.
  // Bu bir yol tabelası gibidir. İlk sıradaki, yeni başlayanlar için en iyi başlangıçtır.
  const START_ORDER = {
    vokabeln: ["pruefungswortschatz", "familie", "einkaufen", "essen", "wohnen", "gesundheit", "arbeit", "bildung", "gefuehle", "verben", "stadt", "reisen", "freizeit", "medien", "wetter", "amt", "nachbarn", "flughafen", "onlineshopping", "unterhaltung", "geschichte", "umwelt"],
    grammatik: ["perfekt", "praepositionen", "adjektive", "nebensaetze", "relativsaetze", "konjunktiv2", "passiv", "infinitiv", "genitiv", "indirekte-fragen", "futur", "imperativ", "lassen"],
    lesen: ["t1-a", "t3-a", "t1-b", "t1-c", "t3-b", "t2-a", "t2-b", "t2-c", "g1-blog", "g4-a", "g5-hausordnung"],
    hoeren: ["h1-ansagen", "h4-dtz", "h3-kurztexte", "h2-gespraech"]
  };
  function orderByStart(list, key, groupKey) {
    const order = START_ORDER[groupKey] || [];
    return list.map((item, i) => ({ item, i })).sort((a, b) => {
      const ia = order.indexOf(a.item[key]); const ib = order.indexOf(b.item[key]);
      const ra = ia === -1 ? 999 + a.i : ia; const rb = ib === -1 ? 999 + b.i : ib;
      return ra - rb;
    }).map(x => x.item);
  }
  function firstOf(groupKey, list, key) {
    const id = (START_ORDER[groupKey] || [])[0];
    return list.find(x => x[key] === id) || list[0];
  }
  function startBadge() {
    return `<span class="start-badge">🚀 Hier starten!<br><small>Buradan başla!</small></span>`;
  }

  // ---------- Bunte Modul-Farben (Duolingo-Stil) ----------
  const MODULE_COLORS = {
    pruefung: { c: "var(--mod-pruefung)", d: "#0d8fd0", icon: "📋" },
    vokabeln: { c: "var(--mod-vokabeln)", d: "var(--mod-vokabeln-dark)", icon: "🗂️" },
    grammatik: { c: "var(--mod-grammatik)", d: "#a95cf0", icon: "📐" },
    konnektoren: { c: "var(--mod-konnektoren)", d: "#17a693", icon: "🔗" },
    sprachbausteine: { c: "var(--mod-sprachbausteine)", d: "#c96e00", icon: "🧩" },
    strategien: { c: "var(--mod-strategien)", d: "#d43333", icon: "🎯" },
    lesen: { c: "var(--mod-lesen)", d: "#b38f00", icon: "📖" },
    hoeren: { c: "var(--mod-hoeren)", d: "#d6389f", icon: "🎧" },
    skills: { c: "var(--mod-skills)", d: "#5a5fd6", icon: "✍️" }
  };
  function nodeStyle(routeName) {
    const m = MODULE_COLORS[routeName] || { c: "var(--blue)", d: "var(--blue-dark)" };
    return `--node-color:${m.c};--node-dark:${m.d}`;
  }
  function tileStyle(routeName) {
    const m = MODULE_COLORS[routeName] || { c: "var(--blue-light)", d: "var(--blue-dark)" };
    return `--tile-color:${m.c};--tile-dark:${m.d}`;
  }

  // ---------- Serie (Streak) & XP ----------
  function todayStr() { return new Date().toISOString().slice(0, 10); }
  function registerVisitAndGetStreak() {
    const visits = store.get("b1_visits", []);
    const today = todayStr();
    if (visits[visits.length - 1] !== today) { visits.push(today); store.set("b1_visits", visits); }
    let streak = 0;
    let cursor = new Date();
    for (let i = 0; i < 400; i++) {
      const d = cursor.toISOString().slice(0, 10);
      if (visits.includes(d)) { streak++; cursor.setDate(cursor.getDate() - 1); }
      else if (d === today) { cursor.setDate(cursor.getDate() - 1); } // heute zählt nicht als Bruch
      else break;
    }
    return streak;
  }
  function getXP() {
    const knownWords = Object.values(known).reduce((n, a) => n + a.length, 0);
    const exXP = Object.values(scores).reduce((n, s) => n + Math.round((s.score / s.total) * 20), 0);
    return knownWords * 2 + exXP;
  }

  // ---------- Rozetler / Badges ----------
  const BADGES = [
    { id: "start", icon: "🌱", color: "var(--mod-vokabeln)", dark: "var(--mod-vokabeln-dark)", title: "Erste Schritte", titleTr: "İlk Adım", cond: () => Object.values(known).reduce((n, a) => n + a.length, 0) >= 1 },
    { id: "vok50", icon: "📚", color: "var(--mod-pruefung)", dark: "#0d8fd0", title: "Wort-Sammler", titleTr: "Kelime Avcısı", cond: () => Object.values(known).reduce((n, a) => n + a.length, 0) >= 50 },
    { id: "vok200", icon: "🏆", color: "var(--gold)", dark: "#b38f00", title: "Wort-Meister", titleTr: "Kelime Ustası", cond: () => Object.values(known).reduce((n, a) => n + a.length, 0) >= 200 },
    { id: "perfekt", icon: "💯", color: "var(--mod-strategien)", dark: "#d43333", title: "Perfekt!", titleTr: "Mükemmel!", cond: () => Object.values(scores).some(s => s.score === s.total && s.total > 0) },
    { id: "gram", icon: "📐", color: "var(--mod-grammatik)", dark: "#a95cf0", title: "Grammatik-Profi", titleTr: "Dilbilgisi Ustası", cond: () => window.GRAMMATIK.every(g => scores["gram-" + g.id]) },
    { id: "lesen", icon: "📖", color: "var(--mod-lesen)", dark: "#b38f00", title: "Lese-Champion", titleTr: "Okuma Şampiyonu", cond: () => allIds("lesen").every(id => scores[id]) },
    { id: "hoeren", icon: "🎧", color: "var(--mod-hoeren)", dark: "#d6389f", title: "Ohren-Profi", titleTr: "Dinleme Ustası", cond: () => allIds("hoeren").every(id => scores[id]) },
    { id: "streak3", icon: "🔥", color: "var(--streak-orange)", dark: "#c96e00", title: "3 Tage dabei", titleTr: "3 Gündür Buradasın", cond: () => registerVisitAndGetStreak() >= 3 },
    { id: "streak7", icon: "🔥", color: "#ff4b4b", dark: "#d43333", title: "7 Tage Serie", titleTr: "7 Günlük Seri", cond: () => registerVisitAndGetStreak() >= 7 }
  ];
  function renderBadges() {
    const wrap = el(`<div class="card"><h3>🏅 Rozetler / Başarılar</h3><div class="badge-grid"></div></div>`);
    const grid = wrap.querySelector(".badge-grid");
    BADGES.forEach(b => {
      const unlocked = b.cond();
      const item = el(`<div class="badge-item${unlocked ? "" : " locked"}">
        <div class="badge-circle" style="--badge-color:${b.color};--badge-dark:${b.dark}"><span>${b.icon}</span></div>
        <div class="badge-label">${esc(b.title)}<br><span style="font-weight:400">${esc(b.titleTr)}</span></div>
      </div>`);
      grid.appendChild(item);
    });
    return wrap;
  }

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
    const streak = registerVisitAndGetStreak();
    const xp = getXP();
    const box = document.getElementById("headerProgress");
    box.innerHTML = `
      <span class="stat-pill${streak > 0 ? " streak-on" : ""}">🔥 ${streak}</span>
      <span class="stat-pill xp">⚡ ${xp}</span>
    `;
  }

  // ---------- Navigation ----------
  const routes = {};
  function navigate(name) {
    tabs.forEach(t => t.classList.toggle("active", t.dataset.view === name));
    window.scrollTo(0, 0);
    view.innerHTML = "";
    stopSpeech();
    if (name !== "home") {
      store.set("b1_last", name);
      const visited = store.get("b1_visited", []);
      if (!visited.includes(name)) { visited.push(name); store.set("b1_visited", visited); }
    }
    routes[name]();
  }
  tabs.forEach(t => t.addEventListener("click", () => navigate(t.dataset.view)));

  // ---------- HOME: Lernweg ----------
  routes.home = function () {
    const totalWords = window.VOKABELN.reduce((n, t) => n + t.words.length, 0);
    const knownWords = Object.values(known).reduce((n, a) => n + a.length, 0);
    view.appendChild(el(`
      <div class="card">
        <h2>Willkommen! · Hoş geldin!</h2>
        <p>Diese App hilft dir für <strong>telc B1</strong>, <strong>Goethe B1</strong> und <strong>DTZ</strong>. Wichtig ist vor allem <strong>Lesen &amp; Verstehen</strong>. Mach einfach Schritt 1. Dann Schritt 2. Dann Schritt 3. Und so weiter bis 9.</p>
        ${trBox("Bu uygulama sana telc B1, Goethe B1 ve DTZ için yardımcı olur. En önemlisi Okuma ve Anlama'dır. Önce 1. Adımı yap. Sonra 2. Adımı. Sonra 3. Adımı. Böyle devam et, 9'a kadar. Her gün 15 dakika yeter!")}
        <div class="stat-row">
          <div class="stat-box"><div class="num">${knownWords}</div><div class="lbl">Wörter gelernt<br>öğrenilen kelime</div></div>
          <div class="stat-box"><div class="num">${totalWords}</div><div class="lbl">Wörter gesamt<br>toplam kelime</div></div>
          <div class="stat-box"><div class="num">${Object.keys(scores).length}</div><div class="lbl">Übungen gemacht<br>yapılan alıştırma</div></div>
        </div>
      </div>`));
    const last = store.get("b1_last", null);
    if (last && routes[last]) {
      const cont = el(`<button class="continue-btn">▶️ Weiterlernen / Kaldığın yerden devam et</button>`);
      cont.addEventListener("click", () => navigate(last));
      view.appendChild(cont);
    }
    const lesenList = [].concat(window.LESEN.teil1, window.LESEN.teil2, window.LESEN.teil3, window.LESEN.goethe4, window.LESEN.goethe5 || []);
    const startVok = firstOf("vokabeln", window.VOKABELN, "id");
    const startGram = firstOf("grammatik", window.GRAMMATIK, "id");
    const startLesen = firstOf("lesen", lesenList, "id");
    const startHoeren = firstOf("hoeren", window.HOEREN.uebungen, "id");
    const steps = [
      ["pruefung", "Die Prüfung kennenlernen", "1. Adım: Sınavı tanı – telc, Goethe & DTZ", null, null],
      ["vokabeln", "Wortschatz aufbauen", "2. Adım: Kelime dağarcığını kur – her gün 1 konu", `⭐ ${knownWords}/${totalWords} Wörter`, startVok.title],
      ["grammatik", "Grammatik verstehen", "3. Adım: Dilbilgisi hedeflerini çalış", stepProgress(window.GRAMMATIK.map(g => "gram-" + g.id)), startGram.title],
      ["konnektoren", "Konnektoren meistern", "4. Adım: Bağlaçları ve kelime dizilişini öğren", stepProgress(["konnektoren-quiz"]), null],
      ["sprachbausteine", "Sprachbausteine trainieren", "5. Adım: Sınav formatında dil yapıları", stepProgress(allIds("sb")), null],
      ["strategien", "Taktiken lernen", "6. Adım: Sınav taktiklerini ve tuzakları öğren", null, null],
      ["lesen", "Lesen trainieren (Schwerpunkt!)", "7. Adım: Okuma antrenmanı – en çok puan burada", stepProgress(allIds("lesen")), startLesen.title],
      ["hoeren", "Hören trainieren (mit Audio)", "8. Adım: Sesli dinleme antrenmanı", stepProgress(allIds("hoeren")), startHoeren.title],
      ["skills", "Schreiben & Sprechen", "9. Adım: Mektup kalıpları ve konuşma", null, null]
    ];
    const visited = store.get("b1_visited", []);
    const doneFlags = steps.map(([r, , , prog]) => prog ? (prog.done === prog.total && prog.total > 0) : visited.includes(r));
    const firstOpenIdx = doneFlags.findIndex(d => !d);
    const path = el(`<div class="path"></div>`);
    steps.forEach(([r, title, sub, prog, startTitle], i) => {
      const done = doneFlags[i];
      const isCurrent = i === firstOpenIdx;
      const m = MODULE_COLORS[r] || { icon: "⭐" };
      const card = el(`<button class="step-card${done ? " done" : ""}${isCurrent ? " current" : ""}" style="${nodeStyle(r)}">
        ${isCurrent ? `<span class="start-pill">LOS! · BAŞLA!</span>` : ""}
        <span class="step-num">${done ? "" : m.icon}${done ? `<span class="step-check">✓</span>` : ""}</span>
        <span class="step-body">
          <span class="step-title">${i + 1}. ${esc(title)}</span><br>
          <span class="step-sub">🇹🇷 ${esc(sub)}</span>
          ${startTitle ? `<span class="step-start">🚀 Zuerst / Önce: ${esc(startTitle)}</span>` : ""}
          ${prog ? `<span class="step-progress">${typeof prog === "string" ? prog : prog.done + "/" + prog.total + " Übungen ✓"}</span>` : ""}
        </span>
        <span class="step-arrow">›</span>
      </button>`);
      card.addEventListener("click", () => navigate(r));
      path.appendChild(card);
    });
    view.appendChild(path);
    view.appendChild(renderBadges());
  };

  function allIds(kind) {
    if (kind === "sb") return window.SPRACHBAUSTEINE.teil1.concat(window.SPRACHBAUSTEINE.teil2).map(e => e.id);
    if (kind === "lesen") {
      const L = window.LESEN;
      return [].concat(L.teil1, L.teil2, L.teil3, L.goethe4, L.goethe5 || []).map(e => e.id);
    }
    if (kind === "hoeren") return window.HOEREN.uebungen.map(e => e.id);
    return [];
  }
  function stepProgress(ids) {
    const done = ids.filter(id => scores[id]).length;
    return { done, total: ids.length };
  }

  // ---------- PRÜFUNG ----------
  routes.pruefung = function () {
    const P = window.PRUEFUNG;
    view.appendChild(el(`<div class="card"><h2>Die B1-Prüfungen im Überblick</h2><p class="subtitle-tr">B1 sınavlarına genel bakış</p><p>${esc(P.intro.de)}</p>${trBox(P.intro.tr)}</div>`));
    [P.telc, P.goethe, P.dtz].forEach(exam => {
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
    view.appendChild(el(`<div class="card"><h2>🎯 Taktiken &amp; Strategien</h2><p class="subtitle-tr">Sınav taktikleri – okuma bölümüne özel ağırlık verilmiştir</p><p>Diese Tipps kommen aus echten telc- und Goethe-Tests. Teile mit <span class="badge orange">FOKUS</span> sind sehr wichtig für Lesen-Punkte.</p>${trBox("Bu ipuçları gerçek telc ve Goethe testlerinden gelir. FOKUS işaretli bölümler okuma puanları için çok önemlidir.")}</div>`));
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
    view.appendChild(el(`<div class="card"><h2>📖 Leseverstehen trainieren</h2><p class="subtitle-tr">Okuma-anlama antrenmanı – telc formatında</p><p>Wähle eine Übung. Sie ist genau wie im echten telc-Test. Tipp: Lies zuerst „Taktik“!</p>${trBox("Bir alıştırma seç. Gerçek telc testi gibidir. İpucu: Önce „Taktik“ bölümünü oku!")}</div>`));
    const grid = el(`<div class="tile-grid"></div>`);
    const items = [];
    window.LESEN.teil1.forEach(ex => items.push(["Teil 1", ex, () => renderTeil1(ex)]));
    window.LESEN.teil2.forEach(ex => items.push(["Teil 2", ex, () => renderTeil2(ex)]));
    window.LESEN.teil3.forEach(ex => items.push(["Teil 3", ex, () => renderTeil3(ex)]));
    window.LESEN.goethe4.forEach(ex => items.push(["Goethe-Stil", ex, () => renderGoethe4(ex)]));
    (window.LESEN.goethe5 || []).forEach(ex => items.push(["Goethe Teil 5", ex, () => renderTeil2(ex)]));
    const lesenOrder = START_ORDER.lesen;
    items.sort((a, b) => {
      const ia = lesenOrder.indexOf(a[1].id), ib = lesenOrder.indexOf(b[1].id);
      return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
    });
    items.forEach(([label, ex, fn], idx) => {
      const tile = el(`<button class="tile${idx === 0 ? " start-here" : ""}" style="${tileStyle("lesen")}">${idx === 0 ? startBadge() : ""}<span class="icon-circle">📖</span><span class="tile-title">${esc(label)}</span><span class="tile-sub">${esc(ex.title)}</span><span class="tile-meta">${scoreBadge(ex.id)}</span></button>`);
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

  // Goethe Teil 1/4: Ja/Nein bzw. Richtig/Falsch
  function renderGoethe4(ex) {
    anleitungCard(ex);
    if (ex.blocktext) view.appendChild(el(`<div class="card"><div class="exercise-text" style="white-space:pre-line">${esc(ex.blocktext)}</div></div>`));
    const labels = ex.labels || { yes: "RICHTIG / Doğru", no: "FALSCH / Yanlış" };
    const card = el(`<div class="card"></div>`);
    const groups = [];
    ex.statements.forEach((st, i) => {
      const qEl = el(`<div class="question"><span class="q-label">${i + 1}.</span><div class="exercise-text">${esc(st.s)}</div></div>`);
      const yes = el(`<label class="option"><input type="radio" name="${ex.id}-s${i}" value="1"><span>${esc(labels.yes)}</span></label>`);
      const no = el(`<label class="option"><input type="radio" name="${ex.id}-s${i}" value="0"><span>${esc(labels.no)}</span></label>`);
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
    view.appendChild(el(`<div class="card"><h2>🧩 Sprachbausteine</h2><p class="subtitle-tr">Dil yapıları – dilbilgisi ve kelime bilgisi</p><p>Teil 1 ist Grammatik (a/b/c). Teil 2 ist Wortschatz. Du hast 15 Wörter und 10 Lücken. 5 Wörter bleiben übrig.</p>${trBox("Teil 1 dilbilgisidir (a/b/c). Teil 2 kelime bilgisidir. 15 kelimen ve 10 boşluğun var. 5 kelime kullanılmadan kalır.")}</div>`));
    const grid = el(`<div class="tile-grid"></div>`);
    window.SPRACHBAUSTEINE.teil1.forEach(ex => {
      const tile = el(`<button class="tile" style="${tileStyle("sprachbausteine")}"><span class="icon-circle">🧩</span><span class="tile-title">${esc(ex.title)}</span><span class="tile-meta">${scoreBadge(ex.id)}</span></button>`);
      tile.addEventListener("click", () => { view.innerHTML = ""; backLink("sprachbausteine"); renderSB1(ex); });
      grid.appendChild(tile);
    });
    window.SPRACHBAUSTEINE.teil2.forEach(ex => {
      const tile = el(`<button class="tile" style="${tileStyle("sprachbausteine")}"><span class="icon-circle">🔤</span><span class="tile-title">${esc(ex.title)}</span><span class="tile-meta">${scoreBadge(ex.id)}</span></button>`);
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
      <p>Hier sind alle wichtigen B1-Wörter. Sie sind nach Themen sortiert. Mit Beispielsätzen. Du kannst lernen mit: der Liste, den Karten (Flashcards) oder dem Quiz. Kannst du ein Wort schon gut? Dann markiere es mit ⭐.</p>
      ${trBox("Burada tüm önemli B1 kelimeleri var. Konulara göre sıralanmıştır. Örnek cümlelerle. Şununla öğrenebilirsin: liste, kartlar (Flashcards) veya quiz. Bir kelimeyi iyi biliyor musun? O zaman ⭐ ile işaretle.")}
      <div class="progress-bar"><div class="progress-fill" style="width:${totalWords ? Math.round(knownWords / totalWords * 100) : 0}%"></div></div>
      <p><strong>${knownWords} / ${totalWords}</strong> Wörter gelernt / kelime öğrenildi</p></div>`));
    const due = dueCards();
    if (due.length) {
      const btn = el(`<button class="continue-btn" style="margin-bottom:4px">🔁 ${due.length} Wörter wiederholen! / ${due.length} kelimeyi tekrar et!</button>`);
      btn.addEventListener("click", () => {
        view.innerHTML = "";
        backLink("vokabeln");
        view.appendChild(el(`<div class="card"><h2>🔁 Wiederholung / Tekrar</h2><p>Diese Wörter sind heute dran. Die App hat sie mit dem FSRS-System (Spaced Repetition) ausgewählt.</p>${trBox("Bugün sırası gelen kelimeler. Uygulama bunları FSRS sistemi (aralıklı tekrar) ile seçti.")}</div>`));
        const c = el(`<div></div>`);
        view.appendChild(c);
        renderFlashcards(c, due);
      });
      view.appendChild(btn);
    }
    const grid = el(`<div class="tile-grid"></div>`);
    orderByStart(window.VOKABELN, "id", "vokabeln").forEach((topic, idx) => {
      const k = (known[topic.id] || []).length;
      const tile = el(`<button class="tile${idx === 0 ? " start-here" : ""}" style="${tileStyle("vokabeln")}">${idx === 0 ? startBadge() : ""}<span class="icon-circle">${topic.emoji}</span><span class="tile-title">${esc(topic.title)}</span><span class="tile-sub">${esc(topic.titleTr)}</span><span class="tile-meta">⭐ ${k}/${topic.words.length}</span></button>`);
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
      if (mode === "karten") renderFlashcards(content, topic.words.map((w, i) => ({ t: topic.id, i, w })));
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

  // ---------- FSRS-Wiederholung (Spaced Repetition, nach open-spaced-repetition/FSRS) ----------
  // Jede Karte hat: s = Stabilität (Tage), d = Schwierigkeit (1–10), due = nächster Termin, reps.
  let fsrs = store.get("b1_fsrs", {});
  const DAY = 24 * 60 * 60 * 1000;
  function fsrsRate(topicId, idx, rating) { // rating: 1 = Nochmal, 2 = Gut, 3 = Einfach
    const key = topicId + ":" + idx;
    const now = Date.now();
    let c = fsrs[key];
    if (!c) {
      // Erste Bewertung: Startwerte wie FSRS-Initialstabilität
      c = { s: [0.4, 3, 8][rating - 1], d: [7.5, 5, 3.5][rating - 1], reps: 0 };
    } else if (rating === 1) {
      // Vergessen: Stabilität fällt stark, Karte wird schwieriger
      c.s = Math.max(0.4, c.s * 0.35);
      c.d = Math.min(10, c.d + 0.8);
    } else {
      // Erinnert: Stabilität wächst – leichtere Karten wachsen schneller (FSRS-Prinzip)
      const bonus = rating === 3 ? 1.4 : 1.0;
      const growth = 1 + (11 - c.d) * 0.28 * Math.pow(c.s, -0.15) * bonus;
      c.s = Math.min(365, c.s * growth);
      c.d = Math.max(1, c.d - (rating === 3 ? 0.4 : 0.15));
    }
    c.reps++;
    c.due = now + Math.round(c.s * DAY);
    fsrs[key] = c;
    store.set("b1_fsrs", fsrs);
    if (rating >= 2) toggleKnown(topicId, idx, true);
  }
  function dueCards() {
    const now = Date.now();
    const due = [];
    window.VOKABELN.forEach(t => t.words.forEach((w, i) => {
      const c = fsrs[t.id + ":" + i];
      if (c && c.due <= now) due.push({ t: t.id, i, w, label: t.emoji + " " + t.title });
    }));
    return due;
  }

  // Karteikarten: cards = [{t: topicId, i: index, w: wort, label?}]
  function renderFlashcards(container, cards) {
    let queue = cards.slice().sort(() => Math.random() - 0.5);
    let pos = 0;
    const wrap = el(`<div class="card"></div>`);
    const counter = el(`<p style="text-align:center;font-weight:700"></p>`);
    const cardEl = el(`<div class="flashcard"><div class="flashcard-inner">
        <div class="flashcard-face flashcard-front"><div class="flashcard-word"></div><div class="flashcard-hint">Tippen zum Umdrehen / Çevirmek için dokun</div></div>
        <div class="flashcard-face flashcard-back"><div class="flashcard-word" style="color:var(--blue-dark)"></div><div class="flashcard-example"></div></div>
      </div></div>`);
    const topicLabel = el(`<p style="text-align:center;font-size:.8rem;color:var(--ink-soft)"></p>`);
    const controls = el(`<div class="btn-row" style="justify-content:center">
        <button class="btn orange">🔁 Nochmal<br><small>Tekrar (bugün)</small></button>
        <button class="btn">👍 Gut<br><small>İyi (bald wieder)</small></button>
        <button class="btn green">⭐ Einfach<br><small>Kolay (später)</small></button>
      </div>`);
    const hint = el(`<p style="text-align:center;font-size:.75rem;color:var(--ink-soft)">Die App merkt sich deine Antwort und fragt das Wort zur richtigen Zeit wieder (Spaced Repetition / aralıklı tekrar sistemi).</p>`);
    function show() {
      if (pos >= queue.length) {
        counter.textContent = "Fertig für heute! / Bugünlük bitti! 🎉";
        cardEl.style.display = "none";
        controls.style.display = "none";
        topicLabel.textContent = "";
        return;
      }
      const c = queue[pos];
      cardEl.classList.remove("flipped");
      cardEl.querySelector(".flashcard-front .flashcard-word").textContent = c.w.de;
      cardEl.querySelector(".flashcard-back .flashcard-word").textContent = "🇹🇷 " + c.w.tr;
      cardEl.querySelector(".flashcard-example").textContent = "„" + c.w.ex + "“";
      counter.textContent = `Karte ${pos + 1} / ${queue.length}`;
      topicLabel.textContent = c.label || "";
    }
    cardEl.addEventListener("click", () => cardEl.classList.toggle("flipped"));
    const btns = controls.querySelectorAll("button");
    btns.forEach((b, bi) => b.addEventListener("click", () => {
      const c = queue[pos];
      fsrsRate(c.t, c.i, bi + 1);
      if (bi === 0) queue.push(c); // Nochmal: gleich noch einmal in dieser Runde
      pos++;
      show();
    }));
    wrap.appendChild(counter); wrap.appendChild(topicLabel); wrap.appendChild(cardEl); wrap.appendChild(controls); wrap.appendChild(hint);
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

  // ---------- TTS (Sprachausgabe) ----------
  let ttsRate = 1.0;
  let currentBtn = null;
  function getGermanVoice() {
    const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    return voices.find(v => v.lang === "de-DE") || voices.find(v => v.lang && v.lang.indexOf("de") === 0) || null;
  }
  function stopSpeech() {
    if (window.speechSynthesis) speechSynthesis.cancel();
    if (currentBtn) { currentBtn.classList.remove("playing"); currentBtn = null; }
  }
  function speak(text, btn) {
    if (!window.speechSynthesis) return;
    if (currentBtn === btn && speechSynthesis.speaking) { stopSpeech(); return; }
    stopSpeech();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    const v = getGermanVoice();
    if (v) u.voice = v;
    u.rate = ttsRate;
    currentBtn = btn;
    btn.classList.add("playing");
    u.onend = u.onerror = function () { btn.classList.remove("playing"); if (currentBtn === btn) currentBtn = null; };
    speechSynthesis.speak(u);
  }
  if (window.speechSynthesis) speechSynthesis.getVoices(); // Stimmen früh laden (Safari/Chrome)

  function speedToggleCard() {
    const card = el(`<div class="card"><strong>🔊 Geschwindigkeit / Hız:</strong>
      <div class="speed-toggle">
        <button data-rate="1" class="${ttsRate === 1 ? "on" : ""}">Normal (Prüfungstempo)</button>
        <button data-rate="0.8" class="${ttsRate === 0.8 ? "on" : ""}">Langsam / Yavaş</button>
      </div></div>`);
    card.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
      ttsRate = parseFloat(b.dataset.rate);
      card.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
    }));
    return card;
  }
  function playBtn(text, label) {
    const b = el(`<button class="audio-btn">▶️ ${esc(label || "Anhören / Dinle")}</button>`);
    b.addEventListener("click", () => speak(text, b));
    return b;
  }

  // ---------- HÖREN ----------
  routes.hoeren = function () {
    const H = window.HOEREN;
    view.appendChild(el(`<div class="card"><h2>🎧 Hörverstehen mit Audio</h2><p class="subtitle-tr">Sesli dinleme antrenmanı</p><p>${esc(H.intro.de)}</p>${trBox(H.intro.tr)}</div>`));
    if (!window.speechSynthesis) {
      view.appendChild(el(`<div class="card"><div class="tts-warning">⚠️ Dein Browser unterstützt keine Sprachausgabe. Bitte benutze Safari, Chrome oder Edge. / Tarayıcın sesli okumayı desteklemiyor. Lütfen Safari, Chrome veya Edge kullan.</div></div>`));
      return;
    }
    const grid = el(`<div class="tile-grid"></div>`);
    orderByStart(H.uebungen, "id", "hoeren").forEach((ex, idx) => {
      const tile = el(`<button class="tile${idx === 0 ? " start-here" : ""}" style="${tileStyle("hoeren")}">${idx === 0 ? startBadge() : ""}<span class="icon-circle">🎧</span><span class="tile-title">${esc(ex.title)}</span><span class="tile-sub">${esc(ex.titleTr)}</span><span class="tile-meta">${scoreBadge(ex.id)}</span></button>`);
      tile.addEventListener("click", () => { view.innerHTML = ""; backLink("hoeren"); renderHoeren(ex); });
      grid.appendChild(tile);
    });
    view.appendChild(grid);
  };

  function renderHoeren(ex) {
    anleitungCard(ex);
    view.appendChild(speedToggleCard());
    const card = el(`<div class="card"></div>`);
    const groups = [];
    const transcripts = [];

    if (ex.longAudio) {
      const audioRow = el(`<div class="btn-row" style="align-items:center"></div>`);
      audioRow.appendChild(playBtn(ex.longAudio, "Gespräch anhören / Konuşmayı dinle"));
      card.appendChild(audioRow);
      const ts = el(`<div class="transcript">📄 ${esc(ex.longAudio)}</div>`);
      transcripts.push(ts);
      ex.items.forEach((st, i) => {
        const qEl = el(`<div class="question"><span class="q-label">${i + 1}. ${esc(st.statement)}</span></div>`);
        const yes = el(`<label class="option"><input type="radio" name="${ex.id}-s${i}" value="1"><span>RICHTIG (+) / Doğru</span></label>`);
        const no = el(`<label class="option"><input type="radio" name="${ex.id}-s${i}" value="0"><span>FALSCH (–) / Yanlış</span></label>`);
        const exp = el(`<div class="explain">💡 ${esc(st.explain.de)}<br>🇹🇷 ${esc(st.explain.tr)}</div>`);
        qEl.appendChild(yes); qEl.appendChild(no); qEl.appendChild(exp);
        groups.push({ type: "rf", yes, no, exp, answer: st.answer });
        card.appendChild(qEl);
      });
      card.appendChild(ts);
    } else if (ex.items) {
      ex.items.forEach((it, i) => {
        const qEl = el(`<div class="question"></div>`);
        qEl.appendChild(el(`<span class="q-label">Text ${i + 1}</span>`));
        qEl.appendChild(playBtn(it.audio));
        qEl.appendChild(el(`<p style="margin-top:10px"><strong>${esc(it.statement)}</strong></p>`));
        const yes = el(`<label class="option"><input type="radio" name="${ex.id}-i${i}" value="1"><span>RICHTIG (+) / Doğru</span></label>`);
        const no = el(`<label class="option"><input type="radio" name="${ex.id}-i${i}" value="0"><span>FALSCH (–) / Yanlış</span></label>`);
        const exp = el(`<div class="explain">💡 ${esc(it.explain.de)}<br>🇹🇷 ${esc(it.explain.tr)}</div>`);
        const ts = el(`<div class="transcript">📄 ${esc(it.audio)}</div>`);
        transcripts.push(ts);
        qEl.appendChild(yes); qEl.appendChild(no); qEl.appendChild(exp); qEl.appendChild(ts);
        groups.push({ type: "rf", yes, no, exp, answer: it.answer });
        card.appendChild(qEl);
      });
    }
    if (ex.mcItems) {
      ex.mcItems.forEach((it, i) => {
        const qEl = el(`<div class="question"></div>`);
        qEl.appendChild(el(`<span class="q-label">Text ${i + 1}</span>`));
        qEl.appendChild(playBtn(it.audio));
        qEl.appendChild(el(`<p style="margin-top:10px"><strong>${esc(it.q)}</strong></p>`));
        const radios = [];
        it.options.forEach((opt, oi) => {
          const o = el(`<label class="option"><input type="radio" name="${ex.id}-m${i}" value="${oi}"><span><strong>${letter(oi)})</strong> ${esc(opt)}</span></label>`);
          radios.push(o); qEl.appendChild(o);
        });
        const exp = el(`<div class="explain">💡 ${esc(it.explain.de)}<br>🇹🇷 ${esc(it.explain.tr)}</div>`);
        const ts = el(`<div class="transcript">📄 ${esc(it.audio)}</div>`);
        transcripts.push(ts);
        qEl.appendChild(exp); qEl.appendChild(ts);
        groups.push({ type: "mc", radios, exp, answer: it.answer });
        card.appendChild(qEl);
      });
    }

    const btn = el(`<div class="btn-row"><button class="btn green">Prüfen / Kontrol et</button></div>`);
    btn.querySelector("button").addEventListener("click", () => {
      stopSpeech();
      let score = 0;
      groups.forEach(g => {
        if (g.type === "rf") {
          [g.yes, g.no].forEach(o => o.classList.remove("correct", "wrong"));
          const correctEl = g.answer ? g.yes : g.no;
          const wrongEl = g.answer ? g.no : g.yes;
          correctEl.classList.add("correct");
          if (wrongEl.querySelector("input").checked) wrongEl.classList.add("wrong");
          if (correctEl.querySelector("input").checked) score++;
        } else {
          g.radios.forEach((r, i) => {
            r.classList.remove("correct", "wrong");
            const checked = r.querySelector("input").checked;
            if (i === g.answer) r.classList.add("correct");
            else if (checked) r.classList.add("wrong");
            if (checked && i === g.answer) score++;
          });
        }
        g.exp.classList.add("show");
      });
      transcripts.forEach(t => t.classList.add("show"));
      feedback(card, score, groups.length);
      saveScore(ex.id, score, groups.length);
    });
    card.appendChild(btn);
    view.appendChild(card);
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
    view.appendChild(el(`<div class="card"><h2>📐 Grammatik-Lernziele B1</h2><p class="subtitle-tr">B1 dilbilgisi öğrenme hedefleri</p><p>Jedes Thema hat: eine einfache Erklärung, eine Tabelle, typische Fehler und ein Mini-Quiz. Diese Themen kommen auch in den Sprachbausteinen!</p>${trBox("Her konuda şunlar var: basit bir açıklama, bir tablo, tipik hatalar ve bir mini test. Bu konular Sprachbausteine'de de çıkar!")}</div>`));
    const grid = el(`<div class="tile-grid"></div>`);
    orderByStart(window.GRAMMATIK, "id", "grammatik").forEach((g, idx) => {
      const tile = el(`<button class="tile${idx === 0 ? " start-here" : ""}" style="${tileStyle("grammatik")}">${idx === 0 ? startBadge() : ""}<span class="icon-circle">${g.emoji}</span><span class="tile-title">${esc(g.title)}</span><span class="tile-sub">${esc(g.titleTr)}</span><span class="tile-meta">${scoreBadge("gram-" + g.id)}</span></button>`);
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

  // ---------- Schreibtrainer (LanguageTool API) ----------
  function schreibtrainerCard() {
    const card = el(`<div class="card">
      <h2>🖊️ Schreibtrainer mit Fehler-Check</h2>
      <p class="subtitle-tr">Hata kontrollü yazma antrenörü (LanguageTool)</p>
      <p>Schreib hier deinen Brief oder deine Sätze. Klick dann auf „Fehler suchen“. Das Programm LanguageTool findet Fehler und macht Vorschläge. Du brauchst dafür Internet.</p>
      ${trBox("Buraya mektubunu veya cümlelerini yaz. Sonra „Fehler suchen“ (hata ara) düğmesine bas. LanguageTool programı hataları bulur ve öneri yapar. Bunun için internet gerekir.")}
      <textarea id="ltText" rows="7" style="width:100%;font-family:inherit;font-size:.95rem;padding:12px;border:1.5px solid var(--line);border-radius:10px" placeholder="Sehr geehrte Damen und Herren, ich schreibe Ihnen, weil ..."></textarea>
      <div class="btn-row"><button class="btn green" id="ltCheck">🔍 Fehler suchen / Hata ara</button></div>
      <div id="ltResult"></div>
    </div>`);
    const resBox = card.querySelector("#ltResult");
    card.querySelector("#ltCheck").addEventListener("click", async () => {
      const text = card.querySelector("#ltText").value.trim();
      if (!text) { resBox.innerHTML = `<div class="tr">Bitte zuerst etwas schreiben. / Önce bir şey yaz.</div>`; return; }
      resBox.innerHTML = `<p>⏳ Prüfe deinen Text ... / Metnin kontrol ediliyor ...</p>`;
      try {
        const body = new URLSearchParams({ text, language: "de-DE" });
        const resp = await fetch("https://api.languagetool.org/v2/check", { method: "POST", body });
        if (!resp.ok) throw new Error("HTTP " + resp.status);
        const data = await resp.json();
        if (!data.matches.length) {
          resBox.innerHTML = `<div class="feedback good">Super! LanguageTool hat keine Fehler gefunden. 🎉 / Süper! LanguageTool hata bulamadı. 🎉</div>`;
          return;
        }
        resBox.innerHTML = `<div class="feedback mid">${data.matches.length} Hinweis(e) gefunden / ${data.matches.length} uyarı bulundu:</div>` +
          data.matches.slice(0, 15).map(m => {
            const bad = m.context.text.substr(m.context.offset, m.context.length);
            const sugg = m.replacements.slice(0, 3).map(r => `<strong>${esc(r.value)}</strong>`).join(", ");
            return `<div class="question"><span style="color:var(--red);font-weight:700">„${esc(bad)}“</span> – ${esc(m.message)}${sugg ? `<div class="explain show">💡 Vorschlag / Öneri: ${sugg}</div>` : ""}</div>`;
          }).join("");
      } catch (e) {
        resBox.innerHTML = `<div class="tts-warning">⚠️ Der Fehler-Check hat nicht geklappt. Hast du Internet? / Hata kontrolü çalışmadı. İnternetin var mı? (${esc(e.message)})</div>`;
      }
    });
    return card;
  }

  // ---------- Aussprache-Trainer (Spracherkennung) ----------
  function ausspracheCard() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const card = el(`<div class="card">
      <h2>🎤 Aussprache-Trainer</h2>
      <p class="subtitle-tr">Telaffuz antrenörü (konuşma tanıma)</p>
      <p>So geht es: 1) Hör dir den Satz an. 2) Drück auf 🎤 und sprich den Satz laut. 3) Das Gerät schreibt auf, was es hört. Du siehst sofort, wie gut es war.</p>
      ${trBox("Şöyle çalışır: 1) Cümleyi dinle. 2) 🎤 düğmesine bas ve cümleyi yüksek sesle söyle. 3) Cihaz duyduğunu yazar. Ne kadar iyi olduğunu hemen görürsün.")}
      <div id="asContent"></div>
    </div>`);
    const content = card.querySelector("#asContent");
    if (!SR) {
      content.appendChild(el(`<div class="tts-warning">⚠️ Dein Browser kann keine Sprache erkennen. Auf dem iPhone: Benutze Safari und erlaube das Mikrofon. / Tarayıcın konuşma tanımıyor. iPhone'da: Safari kullan ve mikrofona izin ver.</div>`));
      return card;
    }
    let idx = 0;
    const sentences = window.SKILLS.aussprache;
    const sentEl = el(`<div class="exercise-text" style="font-size:1.1rem;font-weight:700"></div>`);
    const controls = el(`<div class="btn-row"></div>`);
    const micBtn = el(`<button class="audio-btn">🎤 Sprechen / Konuş</button>`);
    const nextBtn = el(`<button class="btn secondary">Nächster Satz / Sonraki ➡️</button>`);
    const result = el(`<div></div>`);
    function show() {
      sentEl.textContent = sentences[idx];
      result.innerHTML = "";
    }
    const listen2 = el(`<button class="audio-btn">▶️ Anhören / Dinle</button>`);
    listen2.addEventListener("click", () => speak(sentences[idx], listen2));
    micBtn.addEventListener("click", () => {
      stopSpeech();
      const rec = new SR();
      rec.lang = "de-DE";
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      micBtn.classList.add("playing");
      micBtn.textContent = "🔴 Ich höre zu ... / Dinliyorum ...";
      result.innerHTML = "";
      rec.onresult = ev => {
        const heard = ev.results[0][0].transcript;
        const sim = similarity(sentences[idx], heard);
        const cls = sim >= 80 ? "good" : sim >= 55 ? "mid" : "bad";
        const msg = sim >= 80 ? "Super Aussprache! / Süper telaffuz!" : sim >= 55 ? "Gut! Übe noch ein bisschen. / İyi! Biraz daha çalış." : "Versuch es noch einmal – langsam sprechen hilft. / Bir daha dene – yavaş konuşmak yardımcı olur.";
        result.innerHTML = `<div class="feedback ${cls}">${sim} % – ${msg}</div><p style="margin-top:8px">Ich habe verstanden / Anladığım: <em>„${esc(heard)}“</em></p>`;
      };
      rec.onerror = ev => { result.innerHTML = `<div class="tts-warning">⚠️ Mikrofon-Problem (${esc(ev.error)}). Erlaube das Mikrofon in den Einstellungen. / Mikrofon sorunu. Ayarlardan mikrofona izin ver.</div>`; };
      rec.onend = () => { micBtn.classList.remove("playing"); micBtn.textContent = "🎤 Sprechen / Konuş"; };
      rec.start();
    });
    nextBtn.addEventListener("click", () => { idx = (idx + 1) % sentences.length; show(); });
    controls.appendChild(listen2); controls.appendChild(micBtn); controls.appendChild(nextBtn);
    content.appendChild(sentEl); content.appendChild(controls); content.appendChild(result);
    show();
    return card;
  }
  function similarity(a, b) {
    const norm = s => s.toLowerCase().replace(/[^a-zäöüß ]/g, "").split(/\s+/).filter(Boolean);
    const wa = norm(a), wb = norm(b);
    if (!wa.length) return 0;
    let hit = 0;
    const used = new Set();
    wa.forEach(w => {
      const j = wb.findIndex((x, k) => !used.has(k) && (x === w || (w.length > 3 && (x.startsWith(w.slice(0, -1)) || w.startsWith(x.slice(0, -1))))));
      if (j > -1) { hit++; used.add(j); }
    });
    return Math.round(hit / wa.length * 100);
  }

  // ---------- SKILLS (Schreiben, Hören, Sprechen) ----------
  routes.skills = function () {
    const S = window.SKILLS;
    // Schreiben
    view.appendChild(el(`<div class="card"><h2>✍️ ${esc(S.schreiben.title)}</h2><p class="subtitle-tr">${esc(S.schreiben.titleTr)}</p></div>`));
    view.appendChild(schreibtrainerCard());
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
    view.appendChild(ausspracheCard());
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
