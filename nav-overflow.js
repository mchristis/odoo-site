/* Arrow buttons for brand bar tabs that do not fit. Applies to any nav that scrolls sideways (custom brand bars and SectionNav). */
(function () {
  if (window.__navOverflow) return;
  window.__navOverflow = true;
  var CHEV = { left: "M6.5 1.5 3 5l3.5 3.5", right: "M3.5 1.5 7 5 3.5 8.5" };
  function mk(dir) {
    var b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", dir === "left" ? "Scroll tabs left" : "Scroll tabs right");
    b.style.cssText = "flex:none;display:none;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;border:1px solid #DDDDDD;background:#FFFFFF;color:#4F4F4E;cursor:pointer;padding:0;";
    b.innerHTML = '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.3"><path d="' + CHEV[dir] + '"></path></svg>';
    return b;
  }
  function enhance(nav) {
    if (nav.__nof) return;
    var cs = getComputedStyle(nav);
    if (cs.overflowX !== "auto" && cs.overflowX !== "scroll") return;
    if (!nav.parentElement || getComputedStyle(nav.parentElement).display.indexOf("flex") < 0) return;
    nav.__nof = true;
    var l = mk("left"), r = mk("right");
    nav.parentElement.insertBefore(l, nav);
    nav.parentElement.insertBefore(r, nav.nextSibling);
    function upd() {
      var max = nav.scrollWidth - nav.clientWidth;
      l.style.display = nav.scrollLeft > 2 ? "inline-flex" : "none";
      r.style.display = nav.scrollLeft < max - 2 && max > 2 ? "inline-flex" : "none";
    }
    l.onclick = function () { nav.scrollBy({ left: -240, behavior: "smooth" }); };
    r.onclick = function () { nav.scrollBy({ left: 240, behavior: "smooth" }); };
    nav.addEventListener("scroll", upd, { passive: true });
    window.addEventListener("resize", upd);
    if (window.ResizeObserver) new ResizeObserver(upd).observe(nav);
    setTimeout(upd, 50); setTimeout(upd, 600);
  }
  function scan() { document.querySelectorAll("nav").forEach(enhance); }
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
  scan();
})();
