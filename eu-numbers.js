// Display-only European number format (DEPTH-466): "7.99 m²" → "7,99 m²" in visible text. Data and code values are unchanged.
(function () {
  if (window.__euNumbers) return; window.__euNumbers = true;
  var RE = /(\d)\.(\d+)(\s?(?:m²|mm|m|kWh|kWp|kW|Wh|W|V|Ah|A|kg|L|ha|%))(?![A-Za-z0-9])/g;
  var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, INPUT: 1, CODE: 1, PRE: 1 };
  function fix(node) {
    if (node.nodeType === 3) { var v = node.nodeValue; if (v && v.indexOf(".") > -1) { var n = v.replace(RE, "$1,$2$3"); if (n !== v) node.nodeValue = n; } return; }
    if (node.nodeType !== 1 || SKIP[node.nodeName]) return;
    for (var c = node.firstChild; c; c = c.nextSibling) fix(c);
  }
  function start() {
    fix(document.body);
    new MutationObserver(function (ms) { ms.forEach(function (m) { if (m.type === "characterData") fix(m.target); else m.addedNodes.forEach(fix); }); })
      .observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
