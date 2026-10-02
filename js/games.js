/* Game engines. Each engine: GAMES[type](el, data, done) — calls done() once when the activity is complete. */
var GAMES = (function () {
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function fb(ok, html) { return '<div class="fb" style="--c2:var(' + (ok ? "--ok" : "--bad") + ')">' + html + "</div>"; }
  function once(fn) { var d = false; return function () { if (!d) { d = true; fn(); } }; }

  /* SORT: tap a card, then tap the bin it belongs to. data:{prompt, bins:[[key,label]], cards:[[text,key,why?]]} */
  function sort(el, data, done) {
    done = once(done);
    var picked = null, placed = 0, order = shuffle(data.cards.map(function (c, i) { return i; }));
    el.innerHTML = '<p class="gi">' + esc(data.prompt || "Tap a card, then tap where it belongs.") + '</p><div class="cards">' +
      order.map(function (i) { return '<button class="card" data-i="' + i + '">' + data.cards[i][0] + "</button>"; }).join("") +
      '</div><div class="bins">' + data.bins.map(function (b) { return '<button class="bin" data-b="' + b[0] + '"><b>' + b[1] + '</b><span class="cnt">0</span></button>'; }).join("") + '</div><div class="sfb" aria-live="polite"></div>';
    var out = el.querySelector(".sfb");
    el.querySelectorAll(".card").forEach(function (c) {
      c.onclick = function () {
        if (c.classList.contains("right")) return;
        el.querySelectorAll(".card").forEach(function (x) { x.classList.remove("sel"); });
        c.classList.add("sel"); picked = +c.dataset.i;
      };
    });
    el.querySelectorAll(".bin").forEach(function (b) {
      b.onclick = function () {
        if (picked === null) { out.innerHTML = fb(false, "Pick a card first, then tap a box."); return; }
        var card = data.cards[picked], c = el.querySelector('.card[data-i="' + picked + '"]');
        var label = data.bins.filter(function (x) { return x[0] === card[1]; })[0][1];
        if (card[1] === b.dataset.b) {
          c.classList.add("right"); c.classList.remove("sel"); c.disabled = true; placed++;
          var n = b.querySelector(".cnt"); n.textContent = +n.textContent + 1;
          out.innerHTML = fb(true, "<b>Correct: " + label + ".</b> " + (card[2] || ""));
        } else {
          c.classList.add("shake"); setTimeout(function () { c.classList.remove("shake"); }, 400);
          out.innerHTML = fb(false, "<b>Not quite.</b> Try another box.");
        }
        picked = null; el.querySelectorAll(".card").forEach(function (x) { x.classList.remove("sel"); });
        if (placed === data.cards.length) { out.innerHTML = fb(true, "<b>All " + placed + " sorted.</b> " + (data.end || "")); done(); }
      };
    });
  }

  /* CHOICE: a series of scenarios with answer buttons and explanations.
     data:{skin:'mail'|'sms'|'card'|'profile', actions:[labels], items:[{..., best, why, opts?}], end} */
  function choice(el, data, done) {
    done = once(done);
    var i = 0, score = 0, items = data.keep ? data.items : shuffle(data.items);
    function face(it) {
      if (data.skin === "mail") return '<div class="mail"><div class="mh"><span>From: <code>' + esc(it.from) + "</code></span>" + (it.to ? "<span>To: " + esc(it.to) + "</span>" : "") + "<span>Subject: <b>" + esc(it.subj) + '</b></span></div><div class="mb">' + it.body + "</div>" + (it.att ? '<div class="att">📎 ' + esc(it.att) + "</div>" : "") + "</div>";
      if (data.skin === "sms") return '<div class="phone"><div class="pn">' + esc(it.who) + '</div><div class="bubble">' + it.msg + "</div></div>";
      if (data.skin === "profile") return '<div class="profile"><div class="ph"><div class="av">' + esc(it.name[0]) + "</div><div><b>" + esc(it.name) + '</b><br><span class="mono">' + esc(it.handle) + "</span></div></div>" + it.posts.map(function (p) { return '<div class="post"><small>' + esc(p[0]) + "</small>" + p[1] + "</div>"; }).join("") + "</div>";
      return '<div class="scard">' + (it.who ? '<div class="who">' + esc(it.who) + "</div>" : "") + it.text + "</div>";
    }
    function draw() {
      if (i >= items.length) {
        el.innerHTML = '<p class="score">' + score + " of " + items.length + " best answers</p><p>" + (data.end || "") + '</p><div class="row"><button class="btn ghost" data-r>Play again</button></div>';
        el.querySelector("[data-r]").onclick = function () { i = 0; score = 0; items = data.keep ? data.items : shuffle(data.items); draw(); };
        done(); return;
      }
      var it = items[i], opts = it.opts || data.actions;
      el.innerHTML = '<p class="gi">' + esc(data.prompt || "") + " (" + (i + 1) + " of " + items.length + ")</p>" + face(it) +
        '<div class="choices' + (it.opts && it.opts.join("").length > 60 ? " col" : "") + '">' + opts.map(function (a, k) { return '<button class="btn ghost" data-a="' + k + '">' + a + "</button>"; }).join("") + '</div><div class="cfb" aria-live="polite"></div>';
      el.querySelectorAll("[data-a]").forEach(function (b) {
        b.onclick = function () {
          var a = +b.dataset.a, ok = a === it.best; if (ok) score++;
          el.querySelectorAll("[data-a]").forEach(function (x) { x.disabled = true; if (+x.dataset.a === it.best) { x.classList.remove("ghost"); } });
          el.querySelector(".cfb").innerHTML = fb(ok, "<b>" + (ok ? "Best answer." : "Best answer: " + opts[it.best] + ".") + "</b> " + it.why) + '<div class="row"><button class="btn" data-n>' + (i + 1 < items.length ? "Next" : "See results") + "</button></div>";
          el.querySelector("[data-n]").onclick = function () { i++; draw(); el.scrollIntoView({ block: "nearest" }); };
        };
      });
    }
    draw();
  }

  /* RANK: put items in order with up/down buttons. data:{prompt, items:[in correct order], why} */
  function rank(el, data, done) {
    done = once(done);
    var cur = shuffle(data.items.map(function (x, i) { return i; }));
    if (cur.every(function (v, k) { return v === k; })) cur.reverse();
    function draw(check) {
      el.innerHTML = '<p class="gi">' + esc(data.prompt) + '</p><ol class="rank">' + cur.map(function (v, k) {
        var cls = check ? (v === k ? "ok" : "no") : "";
        return '<li class="' + cls + '"><span class="n">' + (k + 1) + '</span><span class="tx">' + data.items[v] + '</span><span class="mv"><button aria-label="Move up" data-u="' + k + '"' + (k === 0 ? " disabled" : "") + '>▲</button><button aria-label="Move down" data-d="' + k + '"' + (k === cur.length - 1 ? " disabled" : "") + ">▼</button></span></li>";
      }).join("") + '</ol><div class="row"><button class="btn" data-c>Check my order</button></div><div class="rfb" aria-live="polite"></div>';
      el.querySelectorAll("[data-u]").forEach(function (b) { b.onclick = function () { var k = +b.dataset.u; var t = cur[k - 1]; cur[k - 1] = cur[k]; cur[k] = t; draw(); el.querySelector('[data-u="' + (k - 1) + '"],[data-d="' + (k - 1) + '"]').focus(); }; });
      el.querySelectorAll("[data-d]").forEach(function (b) { b.onclick = function () { var k = +b.dataset.d; var t = cur[k + 1]; cur[k + 1] = cur[k]; cur[k] = t; draw(); el.querySelector('[data-d="' + (k + 1) + '"],[data-u="' + (k + 1) + '"]').focus(); }; });
      el.querySelector("[data-c]").onclick = function () {
        var right = cur.filter(function (v, k) { return v === k; }).length;
        draw(true);
        var o = el.querySelector(".rfb");
        if (right === cur.length) { o.innerHTML = fb(true, "<b>Perfect order.</b> " + (data.why || "")); el.querySelector("[data-c]").disabled = true; done(); }
        else o.innerHTML = fb(false, "<b>" + right + " of " + cur.length + " in the right spot.</b> Green items are placed correctly. Move the red ones and check again.");
      };
    }
    draw();
  }

  /* PASSWORD BUILDER: live strength meter. Nothing typed is saved or sent. data:{personal:[words]} */
  function password(el, data, done) {
    done = once(done);
    var common = ["password", "123456", "qwerty", "letmein", "welcome", "iloveyou", "admin", "monkey", "dragon", "football", "baseball", "sunshine", "princess", "abc123", "111111", "csn", "coyotes", "vegas", "lasvegas", "nevada"];
    var personal = (data.personal || []).map(function (w) { return w.toLowerCase(); });
    el.innerHTML = '<p class="gi">Build a password that would pass CISA\'s test. Try a passphrase of 5 or more unrelated words. Nothing you type here is saved or sent anywhere.</p>' +
      '<div class="pw"><label for="pwin"><b>Practice password</b></label><input id="pwin" type="text" autocomplete="off" spellcheck="false" placeholder="e.g. lantern-orbit-cactus-violin-tidepool">' +
      '<div class="meter"><i></i></div><div class="score" aria-live="polite">Start typing</div><ul class="checks">' +
      '<li data-k="len">At least 16 characters (CISA)</li><li data-k="words">Random: 5+ unrelated words, or a random mix of letters, numbers and symbols</li>' +
      '<li data-k="common">Not a common password or pattern</li><li data-k="pers">No personal details (names, pets, birthdays, teams, hometown)</li></ul>' +
      '<p class="src">Estimated time to crack assumes a fast offline attack (10 billion guesses per second). It is a rough guide, not a guarantee.</p></div>';
    var inp = el.querySelector("#pwin"), bar = el.querySelector(".meter i"), lbl = el.querySelector(".score");
    function set(k, st) { var li = el.querySelector('[data-k="' + k + '"]'); li.className = st; }
    inp.oninput = function () {
      var p = inp.value, lo = p.toLowerCase().replace(/[^a-z0-9]/g, "");
      var pool = 0; if (/[a-z]/.test(p)) pool += 26; if (/[A-Z]/.test(p)) pool += 26; if (/[0-9]/.test(p)) pool += 10; if (/[^a-zA-Z0-9]/.test(p)) pool += 33;
      var words = p.split(/[\s\-_.,!]+/).filter(function (w) { return w.length >= 3; }).length;
      var isCommon = common.some(function (c) { return lo.indexOf(c) > -1; }) || /(.)\1{3,}/.test(p) || /(0123|1234|2345|abcd|qwer|asdf)/i.test(p);
      var isPers = personal.some(function (w) { return w && lo.indexOf(w) > -1; }) || /(19[5-9]\d|20[0-2]\d)/.test(p);
      var bits = p.length ? Math.log2(Math.pow(pool || 1, p.length)) : 0;
      if (words >= 5) bits = Math.max(bits, words * 12.9);   // ~7,776-word diceware list
      if (isCommon) bits = Math.min(bits, 20); if (isPers) bits = Math.min(bits, 28);
      var secs = Math.pow(2, bits) / 1e10, t;
      t = secs < 1 ? "instantly" : secs < 3600 ? Math.round(secs / 60) + " minutes" : secs < 86400 * 365 ? Math.round(secs / 86400) + " days" : secs < 31536000 * 1e6 ? Math.round(secs / 31536000).toLocaleString() + " years" : "millions of years or more";
      if (secs >= 1 && secs < 60) t = Math.round(secs) + " seconds";
      var len = p.length >= 16, rnd = words >= 5 || (pool >= 72 && p.length >= 16);
      set("len", len ? "on" : ""); set("words", rnd ? "on" : ""); set("common", !p ? "" : isCommon ? "warn" : "on"); set("pers", !p ? "" : isPers ? "warn" : "on");
      var pct = Math.min(100, bits / 1.1); bar.style.width = pct + "%";
      bar.style.background = pct < 40 ? "var(--bad)" : pct < 70 ? "var(--w0)" : "var(--ok)";
      var strong = len && rnd && !isCommon && !isPers;
      lbl.textContent = !p ? "Start typing" : (strong ? "Strong · " : pct < 40 ? "Weak · " : "Getting there · ") + "crack time about " + t;
      if (strong) { lbl.textContent += ". You did it. Now use a password manager to create and remember passwords like this."; done(); }
    };
  }

  /* FIND RISKS: flag every risky item, then check. data:{prompt, img?, items:[{ic,label,risk,why}]} */
  function findrisks(el, data, done) {
    done = once(done);
    var need = data.items.filter(function (x) { return x.risk; }).length;
    var grid = '<div class="scene">' + data.items.map(function (x, i) { return '<button class="spot" data-i="' + i + '" aria-pressed="false">' + (x.ic ? '<span class="ic" aria-hidden="true">' + x.ic + "</span>" : "") + "<span>" + x.label + "</span></button>"; }).join("") + "</div>";
    el.innerHTML = '<p class="gi">' + esc(data.prompt) + " There are " + need + ' to find.</p>' + (data.img ? '<div class="hunt"><img src="' + data.img + '" alt="' + esc(data.alt || "") + '" data-zoom>' + grid + "</div>" : grid) + '<div class="row"><button class="btn" data-c>Check my picks</button></div><div class="ffb" aria-live="polite"></div>';
    el.querySelectorAll(".spot").forEach(function (s) { s.onclick = function () { if (s.disabled) return; s.classList.toggle("flag"); s.setAttribute("aria-pressed", s.classList.contains("flag")); }; });
    el.querySelector("[data-c]").onclick = function () {
      var hits = 0, wrong = 0, msgs = [];
      el.querySelectorAll(".spot").forEach(function (s) {
        var x = data.items[+s.dataset.i], f = s.classList.contains("flag");
        if (f && x.risk) { s.classList.add("hit"); s.classList.remove("flag"); s.disabled = true; hits++; msgs.push("✔ <b>" + x.label + ":</b> " + x.why); }
        else if (f && !x.risk) { s.classList.add("miss"); wrong++; msgs.push("✕ <b>" + x.label + ":</b> " + x.why); setTimeout(function () { s.classList.remove("miss", "flag"); }, 1600); }
      });
      var total = el.querySelectorAll(".spot.hit").length;
      var o = el.querySelector(".ffb");
      if (total === need) { o.innerHTML = fb(true, "<b>All " + need + " found.</b><br>" + msgs.join("<br>")); el.querySelector("[data-c]").disabled = true; done(); }
      else o.innerHTML = fb(false, "<b>" + total + " of " + need + " found" + (wrong ? ", plus " + wrong + " that aren't risks" : "") + ".</b> Keep looking." + (msgs.length ? "<br>" + msgs.join("<br>") : ""));
    };
  }

  /* BINGO: tap actions you have done; any full row, column or diagonal wins. data:{cells:[9]} */
  function bingo(el, data, done) {
    done = once(done);
    var on = {}, lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    el.innerHTML = '<p class="gi">' + esc(data.prompt) + '</p><div class="bingo">' + data.cells.map(function (c, i) { return '<button data-i="' + i + '" aria-pressed="false">' + c + "</button>"; }).join("") + '</div><div class="bfb" aria-live="polite"></div>';
    el.querySelectorAll("[data-i]").forEach(function (b) {
      b.onclick = function () {
        var i = +b.dataset.i; on[i] = !on[i]; b.classList.toggle("on", on[i]); b.setAttribute("aria-pressed", !!on[i]);
        if (lines.some(function (l) { return l.every(function (k) { return on[k]; }); })) { el.querySelector(".bfb").innerHTML = fb(true, "<b>BINGO!</b> " + (data.end || "")); done(); }
      };
    });
  }

  /* ANAGRAM: unscramble each word. data:{words:[[answer,hint]]} */
  function anagram(el, data, done) {
    done = once(done);
    function scr(w) { var s; do { s = shuffle(w.split("")).join(""); } while (s === w && w.length > 1); return s; }
    el.innerHTML = '<p class="gi">' + esc(data.prompt) + '</p><div class="ana">' + data.words.map(function (w, i) { return '<div class="r" data-i="' + i + '"><span class="sc">' + scr(w[0]) + '</span><input aria-label="Answer ' + (i + 1) + '" maxlength="' + w[0].length + '"><button class="btn ghost sm" data-h="' + i + '">Hint</button><span class="src hint" hidden>' + esc(w[1]) + "</span></div>"; }).join("") + '</div><div class="afb" aria-live="polite"></div>';
    el.querySelectorAll(".r input").forEach(function (inp) {
      inp.oninput = function () {
        var r = inp.parentNode, w = data.words[+r.dataset.i][0];
        if (inp.value.toUpperCase().replace(/\s/g, "") === w) { r.classList.add("ok"); inp.disabled = true; }
        if (el.querySelectorAll(".r.ok").length === data.words.length) { el.querySelector(".afb").innerHTML = fb(true, "<b>All solved.</b> " + (data.end || "")); done(); }
      };
    });
    el.querySelectorAll("[data-h]").forEach(function (b) { b.onclick = function () { b.nextElementSibling.hidden = false; b.remove(); }; });
  }

  /* WORD SEARCH: drag (or tap first and last letter) to select. data:{words:[], size} */
  function wordsearch(el, data, done) {
    done = once(done);
    var N = data.size || 12, g = [], placed = [], dirs = [[0, 1], [1, 0], [1, 1], [-1, 1]];
    for (var r = 0; r < N; r++) { g.push([]); for (var c = 0; c < N; c++) g[r].push(""); }
    data.words.forEach(function (w) {
      for (var t = 0; t < 300; t++) {
        var d = dirs[Math.floor(Math.random() * dirs.length)], r0 = Math.floor(Math.random() * N), c0 = Math.floor(Math.random() * N);
        var re = r0 + d[0] * (w.length - 1), ce = c0 + d[1] * (w.length - 1);
        if (re < 0 || re >= N || ce >= N) continue;
        var ok = true; for (var k = 0; k < w.length; k++) { var ch = g[r0 + d[0] * k][c0 + d[1] * k]; if (ch && ch !== w[k]) { ok = false; break; } }
        if (!ok) continue;
        for (k = 0; k < w.length; k++) g[r0 + d[0] * k][c0 + d[1] * k] = w[k];
        placed.push({ w: w, r: r0, c: c0, d: d }); return;
      }
    });
    var A = "ABCDEFGHIJKLMNOPRSTUVWY";
    for (r = 0; r < N; r++) for (c = 0; c < N; c++) if (!g[r][c]) g[r][c] = A[Math.floor(Math.random() * A.length)];
    el.innerHTML = '<p class="gi">' + esc(data.prompt) + '</p><div class="ws"><div class="wsg" style="grid-template-columns:repeat(' + N + ',auto)">' +
      g.map(function (row, r) { return row.map(function (ch, c) { return '<span data-r="' + r + '" data-c="' + c + '">' + ch + "</span>"; }).join(""); }).join("") +
      '</div><ul class="wsl">' + placed.map(function (p) { return '<li data-w="' + p.w + '">' + p.w + "</li>"; }).join("") + '</ul></div><div class="wfb" aria-live="polite"></div>';
    var grid = el.querySelector(".wsg"), start = null, found = 0;
    function cell(e) { var t = e.target.closest ? e.target.closest("span[data-r]") : null; if (!t && e.touches) { var p = e.touches[0]; t = document.elementFromPoint(p.clientX, p.clientY); t = t && t.closest("span[data-r]"); } return t; }
    function path(a, b) {
      var r0 = +a.dataset.r, c0 = +a.dataset.c, r1 = +b.dataset.r, c1 = +b.dataset.c, dr = Math.sign(r1 - r0), dc = Math.sign(c1 - c0), n = Math.max(Math.abs(r1 - r0), Math.abs(c1 - c0));
      if (!(r0 === r1 || c0 === c1 || Math.abs(r1 - r0) === Math.abs(c1 - c0))) return [];
      var out = []; for (var k = 0; k <= n; k++) out.push(grid.querySelector('[data-r="' + (r0 + dr * k) + '"][data-c="' + (c0 + dc * k) + '"]')); return out;
    }
    function clear() { grid.querySelectorAll(".sel").forEach(function (s) { s.classList.remove("sel"); }); }
    function finish(endCell) {
      var cells = path(start, endCell), word = cells.map(function (s) { return s.textContent; }).join(""), rev = word.split("").reverse().join("");
      var li = el.querySelector('.wsl li[data-w="' + word + '"]:not(.fd)') || el.querySelector('.wsl li[data-w="' + rev + '"]:not(.fd)');
      if (li && cells.length > 1) { cells.forEach(function (s) { s.classList.add("fd"); }); li.classList.add("fd"); found++; if (found === placed.length) { el.querySelector(".wfb").innerHTML = fb(true, "<b>All " + found + " words found.</b>"); done(); } }
      clear(); start = null;
    }
    function down(e) { var t = cell(e); if (!t) return; e.preventDefault(); if (start && start !== t) { finish(t); return; } start = t; clear(); t.classList.add("sel"); }
    function move(e) { if (!start || !(e.buttons || e.touches)) return; var t = cell(e); if (!t) return; clear(); path(start, t).forEach(function (s) { s.classList.add("sel"); }); }
    function up(e) { if (!start) return; var t = e.changedTouches ? (function () { var p = e.changedTouches[0]; var x = document.elementFromPoint(p.clientX, p.clientY); return x && x.closest("span[data-r]"); })() : cell(e); if (t && t !== start) finish(t); }
    grid.addEventListener("mousedown", down); grid.addEventListener("mousemove", move); document.addEventListener("mouseup", up);
    grid.addEventListener("touchstart", down, { passive: false }); grid.addEventListener("touchmove", function (e) { e.preventDefault(); move(e); }, { passive: false }); grid.addEventListener("touchend", up);
  }

  /* JEOPARDY: 5 categories x 5 clues. data:{cats:[{name, qs:[{q,o:[],a,why}] x5}]} */
  function jeopardy(el, data, done) {
    done = once(done);
    var answered = 0, pts = 0, total = data.cats.length * 5;
    el.innerHTML = '<p class="gi">Pick a clue. Harder clues are worth more. Answer all 25 to finish the board.</p><p class="score">Score: <span data-s>0</span></p><div class="jep">' +
      data.cats.map(function (c) { return '<div class="jc">' + c.name + "</div>"; }).join("") +
      [0, 1, 2, 3, 4].map(function (r) { return data.cats.map(function (c, ci) { return '<button data-c="' + ci + '" data-r="' + r + '" aria-label="' + esc(c.name) + " for " + (r + 1) * 100 + '">' + (r + 1) * 100 + "</button>"; }).join(""); }).join("") +
      '</div><div class="jq" aria-live="polite"></div>';
    var box = el.querySelector(".jq");
    el.querySelectorAll(".jep button").forEach(function (b) {
      b.onclick = function () {
        if (b.disabled) return;
        var ci = +b.dataset.c, r = +b.dataset.r, q = data.cats[ci].qs[r], val = (r + 1) * 100;
        el.querySelectorAll(".jep button").forEach(function (x) { if (!x.classList.contains("ok") && !x.classList.contains("no")) x.disabled = true; });
        box.innerHTML = '<div class="step" style="--c:var(--boss)"><p><b>' + data.cats[ci].name + " · " + val + "</b></p><p>" + q.q + "</p>" + q.o.map(function (o, k) { return '<button class="opt" data-k="' + k + '">' + o + "</button>"; }).join("") + "</div>";
        box.scrollIntoView({ block: "nearest" });
        box.querySelectorAll(".opt").forEach(function (o) {
          o.onclick = function () {
            var k = +o.dataset.k, ok = k === q.a; answered++; if (ok) pts += val;
            box.querySelectorAll(".opt").forEach(function (x) { x.disabled = true; if (+x.dataset.k === q.a) x.classList.add("right"); else if (x === o) x.classList.add("wrong"); });
            box.firstChild.insertAdjacentHTML("beforeend", fb(ok, "<b>" + (ok ? "+" + val : "No points") + ".</b> " + (q.why || "")));
            b.classList.add(ok ? "ok" : "no"); b.textContent = ok ? "✓" : "✕"; b.disabled = true;
            el.querySelector("[data-s]").textContent = pts.toLocaleString();
            el.querySelectorAll(".jep button").forEach(function (x) { if (!x.classList.contains("ok") && !x.classList.contains("no")) x.disabled = false; });
            if (answered === total) { box.insertAdjacentHTML("beforeend", fb(true, "<b>Board cleared with " + pts.toLocaleString() + " points!</b>")); done(); }
          };
        });
      };
    });
  }

  return { sort: sort, choice: choice, rank: rank, password: password, findrisks: findrisks, bingo: bingo, anagram: anagram, wordsearch: wordsearch, jeopardy: jeopardy, esc: esc, shuffle: shuffle };
})();
