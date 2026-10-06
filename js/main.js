/* Neuvara — hero illustration.
   Draws a synthetic axial brain slice as a dot grid (echoing the logo).
   Left half: "scanner A". Right half: the same anatomy through "scanner B",
   which has a different contrast curve, a smooth bias field and more noise.
   Nothing here is real data. */

(function () {
  "use strict";

  var BLUE = [91, 132, 247];
  var PURPLE = [154, 102, 232];

  // Deterministic noise so the picture is identical on every load.
  function hash(i, j) {
    var x = Math.sin(i * 127.1 + j * 311.7) * 43758.5453;
    return x - Math.floor(x); // 0..1
  }

  function clamp(x) {
    return x < 0 ? 0 : x > 1 ? 1 : x;
  }

  // Ground-truth "anatomy": T1-like intensity at (u, v), both roughly in [-1, 1].
  function anatomy(u, v) {
    var theta = Math.atan2(v, u);
    var rh = Math.sqrt((u / 0.8) * (u / 0.8) + (v / 0.94) * (v / 0.94));
    rh *= 1 + 0.012 * Math.sin(5 * theta) + 0.008 * Math.sin(11 * theta + 1.3);

    if (rh > 1) return 0;          // outside the head
    if (rh > 0.93) return 0.6;     // scalp
    if (rh > 0.86) return 0.06;    // skull
    if (rh > 0.83) return 0.14;    // CSF around the brain

    var rb = rh / 0.83;

    // Interhemispheric fissure
    if (Math.abs(u) < 0.02 && Math.abs(v) > 0.3) return 0.14;

    // Lateral ventricles, slightly curved
    var bend = 0.05 * v * v;
    for (var s = -1; s <= 1; s += 2) {
      var du = (u - s * (0.11 + bend)) / 0.065;
      var dv = (v + 0.03) / 0.3;
      if (du * du + dv * dv < 1) return 0.1;
    }

    // Deep grey matter beside the ventricles
    for (var t = -1; t <= 1; t += 2) {
      var gu = (u - t * 0.22) / 0.08;
      var gv = (v - 0.12) / 0.13;
      if (gu * gu + gv * gv < 1) return 0.56;
    }

    // Cortex with folds, and sulcal CSF
    var fold = 0.13 + 0.05 * Math.sin(9 * theta + 0.6) + 0.03 * Math.sin(17 * theta);
    if (rb > 0.88 && Math.cos(14 * theta) > 0.94) return 0.16;
    if (rb > 1 - fold) return 0.5;

    return 0.84; // white matter
  }

  // Scanner A: close to the ground truth, low noise.
  function scannerA(I, u, v, n) {
    if (I < 0.02) return 0;
    return clamp(I + (n - 0.5) * 0.06);
  }

  // Scanner B: compressed contrast, smooth bias field (B1-like), more noise.
  function scannerB(I, u, v, n) {
    if (I < 0.02) return 0;
    var bias = 0.9 - 0.16 * v + 0.08 * u;
    var out = (0.12 + 0.7 * Math.pow(I, 0.75)) * bias;
    return clamp(out + (n - 0.5) * 0.12);
  }

  function setup(canvas) {
    var rect = canvas.getBoundingClientRect();
    var dpr = window.devicePixelRatio || 1;
    var w = Math.max(1, Math.round(rect.width));
    var h = Math.max(1, Math.round(rect.height));
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    var ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    return { ctx: ctx, w: w, h: h };
  }

  function drawSlice(canvas) {
    var c = setup(canvas);
    var ctx = c.ctx, w = c.w, h = c.h;
    var cols = 46;
    var step = w / cols;
    var rows = Math.floor(h / step);
    var half = w / 2;
    var cy = h / 2;

    for (var j = 0; j < rows; j++) {
      for (var i = 0; i < cols; i++) {
        var x = (i + 0.5) * step;
        var y = (j + 0.5) * step + (h - rows * step) / 2;
        var u = (x - half) / half;
        var v = (y - cy) / half;
        var I = anatomy(u, v);
        if (I === 0) continue;

        var right = x > half;
        var n = hash(i, j);
        var val = right ? scannerB(I, u, v, n) : scannerA(I, u, v, n);
        var r = 0.44 * step * Math.sqrt(val);
        if (r < 0.5) continue;

        var col = right ? PURPLE : BLUE;
        var a = 0.35 + 0.65 * val;
        ctx.fillStyle = "rgba(" + col[0] + "," + col[1] + "," + col[2] + "," + a.toFixed(3) + ")";
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  function drawProfile(canvas) {
    var c = setup(canvas);
    var ctx = c.ctx, w = c.w, h = c.h;
    var samples = 240;
    var row = 0.04;
    var pad = 4;
    var a = [], b = [];

    for (var k = 0; k < samples; k++) {
      var u = -0.95 + (1.9 * k) / (samples - 1);
      var I = anatomy(u, row);
      var n = hash(k, 7);
      a.push(scannerA(I, u, row, n));
      b.push(scannerB(I, u, row, n));
    }

    function smooth(arr) {
      var out = [];
      for (var k = 0; k < arr.length; k++) {
        var sum = 0, cnt = 0;
        for (var d = -5; d <= 5; d++) {
          var idx = k + d;
          if (idx >= 0 && idx < arr.length) { sum += arr[idx]; cnt++; }
        }
        out.push(sum / cnt);
      }
      return out;
    }

    function line(arr, col) {
      ctx.strokeStyle = "rgb(" + col.join(",") + ")";
      ctx.lineWidth = 1.5;
      ctx.lineJoin = "round";
      ctx.beginPath();
      for (var k = 0; k < arr.length; k++) {
        var x = (k / (arr.length - 1)) * w;
        var y = h - pad - arr[k] * (h - 2 * pad);
        if (k === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    ctx.strokeStyle = "rgba(255,255,255,0.09)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, h - pad + 0.5);
    ctx.lineTo(w, h - pad + 0.5);
    ctx.stroke();

    line(smooth(a), BLUE);
    line(smooth(b), PURPLE);
  }

  function render() {
    var slice = document.getElementById("slice");
    var profile = document.getElementById("profile");
    if (slice) drawSlice(slice);
    if (profile) drawProfile(profile);
  }

  render();

  // Redraw when the layout changes size (fonts loading, rotation, resize).
  var pending = null;
  function schedule() {
    if (pending) return;
    pending = window.requestAnimationFrame(function () {
      pending = null;
      render();
    });
  }

  if ("ResizeObserver" in window) {
    var target = document.querySelector(".slice");
    if (target) new ResizeObserver(schedule).observe(target);
  } else {
    window.addEventListener("resize", schedule);
  }
})();

/* ---------- Mobile menu ---------- */
(function () {
  "use strict";
  var header = document.querySelector(".has-menu");
  if (!header) return;
  var toggle = header.querySelector(".menu-toggle");
  var nav = header.querySelector("nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    header.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Close after choosing a link, on Escape, or when widening past the breakpoint.
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && header.classList.contains("open")) {
      setOpen(false);
      toggle.focus();
    }
  });
  var wide = window.matchMedia("(min-width: 768px)");
  var onWide = function () { if (wide.matches) setOpen(false); };
  if (wide.addEventListener) wide.addEventListener("change", onWide);
  else if (wide.addListener) wide.addListener(onWide);
})();

/* ---------- Copy email addresses instead of opening a mail app ---------- */
(function () {
  "use strict";
  var buttons = document.querySelectorAll(".copy[data-copy]");
  if (!buttons.length) return;

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  Array.prototype.forEach.call(buttons, function (btn) {
    var timer = null;
    btn.setAttribute("aria-label", "Copy " + btn.getAttribute("data-copy") + " to clipboard");
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var done = function () {
        btn.setAttribute("data-state", "copied");
        clearTimeout(timer);
        timer = setTimeout(function () { btn.removeAttribute("data-state"); }, 1800);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(done, function () {
          if (fallbackCopy(text)) done();
        });
      } else if (fallbackCopy(text)) {
        done();
      }
    });
  });
})();

/* ---------- Contact form (Web3Forms) ---------- */
(function () {
  "use strict";
  var form = document.getElementById("contact-form");
  if (!form) return;

  var status = form.querySelector(".form-status");
  var submit = form.querySelector('button[type="submit"]');
  var keyInput = form.querySelector('input[name="access_key"]');

  // Preselect the topic when arriving from /contact/?topic=audit or ?topic=data
  var topics = { audit: "Cross-scanner audit", data: "Multi-site data preparation", rankings: "Rankings submission" };
  var match = /[?&]topic=([a-z]+)/.exec(window.location.search);
  var select = form.querySelector('select[name="topic"]');
  if (match && topics[match[1]] && select) select.value = topics[match[1]];

  function show(state, text) {
    status.setAttribute("data-state", state);
    status.textContent = text;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!keyInput || /YOUR_WEB3FORMS/.test(keyInput.value)) {
      show("error", "The form is not connected yet. Please email contact@neuvara.org.");
      return;
    }

    var data = {};
    new FormData(form).forEach(function (value, key) { data[key] = value; });
    if (data.botcheck) return; // honeypot ticked: silently drop

    submit.disabled = true;
    show("", "Sending…");

    fetch(form.action, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data)
    })
      .then(function (res) { return res.json().catch(function () { return {}; }); })
      .then(function (json) {
        if (json && json.success) {
          form.reset();
          show("ok", "Thanks, your message has been sent. We will reply by email.");
        } else {
          show("error", "Something went wrong sending that. Please try again or email contact@neuvara.org.");
        }
      })
      .catch(function () {
        show("error", "Could not send. Check your connection, or email contact@neuvara.org.");
      })
      .then(function () { submit.disabled = false; });
  });
})();

/* ---------- Rankings tables ---------- */
(function () {
  "use strict";
  var data = window.NEUVARA_RANKINGS;
  var hosts = document.querySelectorAll("[data-rankings]");
  if (!data || !hosts.length) return;

  function esc(t) {
    return String(t).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function table(key, limit) {
    var set = data.structures[key];
    var rows = set.models.slice().sort(function (a, b) { return a.cv - b.cv; });
    var max = Math.max.apply(null, rows.map(function (m) { return m.cv; }));
    if (limit) rows = rows.slice(0, limit);
    var html =
      '<table class="ranks"><caption class="sr-only">' + esc(set.label) + ' rankings, ' + esc(data.round) + '</caption>' +
      "<thead><tr>" +
      '<th scope="col" class="c-rank">#</th>' +
      '<th scope="col">Model</th>' +
      '<th scope="col" class="c-type">Type</th>' +
      '<th scope="col" class="c-var">Cross-scanner variation <span>lower is better</span></th>' +
      '<th scope="col" class="c-num">Agreement <span>Dice</span></th>' +
      '<th scope="col" class="c-num">Worst scanner <span>offset</span></th>' +
      '<th scope="col" class="c-num c-scan">Scanners</th>' +
      "</tr></thead><tbody>";
    rows.forEach(function (m, i) {
      html +=
        "<tr>" +
        '<td class="c-rank">' + (i + 1) + "</td>" +
        '<td class="c-model">' + esc(m.name) + "</td>" +
        '<td class="c-type">' + esc(m.type) + "</td>" +
        '<td class="c-var"><span class="val">' + m.cv.toFixed(1) + '%</span>' +
        '<span class="bar" aria-hidden="true"><span style="width:' + (m.cv / max * 100).toFixed(1) + '%"></span></span></td>' +
        '<td class="c-num">' + m.dice.toFixed(3) + "</td>" +
        '<td class="c-num">' + m.worst.toFixed(1) + "%</td>" +
        '<td class="c-num c-scan">' + m.scanners + "</td>" +
        "</tr>";
    });
    return html + "</tbody></table>";
  }

  Array.prototype.forEach.call(hosts, function (host) {
    var key = host.getAttribute("data-structure") || "whole";
    var limit = parseInt(host.getAttribute("data-limit"), 10) || 0;
    var slot = host.querySelector(".ranks-slot");
    var tabs = host.querySelectorAll("[data-tab]");

    function show(k) {
      key = k;
      slot.innerHTML = table(k, limit);
      Array.prototype.forEach.call(tabs, function (t) {
        t.setAttribute("aria-pressed", t.getAttribute("data-tab") === k ? "true" : "false");
      });
    }
    Array.prototype.forEach.call(tabs, function (t) {
      t.addEventListener("click", function () { show(t.getAttribute("data-tab")); });
    });
    show(key);
  });
})();
