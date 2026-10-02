/* SCORM 1.2 wrapper: finds the LMS API in parent/opener frames; falls back to localStorage outside an LMS. */
var SCORM = (function () {
  var api = null, live = false, LS = "cyberoct26";

  function find(win) {
    var tries = 0;
    while (win && tries < 12) {
      try { if (win.API) return win.API; } catch (e) {}
      try { if (win.parent && win.parent !== win) { win = win.parent; tries++; continue; } } catch (e) {}
      break;
    }
    return null;
  }
  function locate() {
    var a = find(window);
    if (!a) { try { if (window.opener) a = find(window.opener); } catch (e) {} }
    return a;
  }
  function get(k) { if (!live) return ""; try { return String(api.LMSGetValue(k) || ""); } catch (e) { return ""; } }
  function set(k, v) { if (!live) return false; try { return api.LMSSetValue(k, String(v)) === "true"; } catch (e) { return false; } }
  function commit() { if (live) try { api.LMSCommit(""); } catch (e) {} }

  function init() {
    api = locate();
    if (api) { try { live = String(api.LMSInitialize("")) === "true"; } catch (e) { live = false; } }
    if (live) {
      var st = get("cmi.core.lesson_status");
      if (!st || st === "not attempted") set("cmi.core.lesson_status", "incomplete");
      set("cmi.core.score.min", 0); set("cmi.core.score.max", 100);
      commit();
    }
    return live;
  }
  function load() {
    if (live) return get("cmi.suspend_data");
    try { return localStorage.getItem(LS) || ""; } catch (e) { return ""; }
  }
  function save(data, score, passed) {
    if (live) {
      set("cmi.suspend_data", data.slice(0, 4000));
      set("cmi.core.score.raw", score);
      set("cmi.core.lesson_status", passed ? "passed" : "incomplete");
      set("cmi.core.exit", "suspend");
      commit();
    } else {
      try { localStorage.setItem(LS, data); } catch (e) {}
    }
  }
  function name() {
    var n = get("cmi.core.student_name");            // Canvas sends "Last, First"
    if (n.indexOf(",") > -1) { var p = n.split(","); n = (p[1] || "").trim() + " " + p[0].trim(); }
    return n.trim();
  }
  function finish() { if (live) { try { api.LMSFinish(""); } catch (e) {} live = false; } }
  window.addEventListener("pagehide", finish);
  window.addEventListener("beforeunload", finish);
  return { init: init, load: load, save: save, name: name, isLive: function () { return live; } };
})();
