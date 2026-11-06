/* ANDO webshop data + rules (DEPTH-1025). Decisions: _AUDIT_WEBSHOP_ANDO/_AUDIT_2026-10-27.md (W-Q1–W-Q16).
   Technical values: the site's 8 SKUs (W-Q1). Stock, prices, dates, warehouses: DEMONSTRATION DATA.
   Moved from the old shop page (archive _ARCHIVE/DEPTH-1025 ANDO webshop v2/): products, warehouse surcharge, status engine, spec rows, generated description. */
(function () {
  const L = (w, q) => ({ w, q });
  const PRODUCTS = [
    { art: "AND-N-AB-BI-BG-GG-460WP-V1", series: "AALTO", variant: "", power: 460, frame: "Black anodised", rear: "Full black", construction: "Rigid double-glass", glass: "1.6 mm", application: ["Residential"], length: 1762, warranty: 35, efficiency: 23.0, prov: false,
      rt: { EU: { pr: 101, locs: [L("Milan IT", 108), L("Hamburg DE", 36), L("Poznan PL", 108)] }, Floating: { q: 180, r: 0, pr: 99, sh: "FL 2026 28", wk: 3 }, Factory: { q: 432, r: 432, pr: 100 }, MTO: { pr: 104 } } },
    { art: "AND-N-AB-BI-TRA-GG-470WP-V1", series: "AALTO", variant: "", power: 470, frame: "Black anodised", rear: "Transparent", construction: "Rigid double-glass", glass: "2.0 mm", application: ["Residential"], length: 1762, warranty: 35, efficiency: 23.5, prov: false,
      rt: { EU: { pr: 103, locs: [L("Madrid ES", 36), L("Hamburg DE", 72), L("Poznan PL", 36)] }, Floating: { q: 144, r: 36, pr: 101, sh: "FL 2026 00", wk: 4 }, Factory: { q: 432, r: 0, pr: 102 }, MTO: { pr: 106 } } },
    { art: "AND-N-MI-BI-BG-GG-500WP-V1", series: "MIES", variant: "", power: 500, frame: "Black anodised", rear: "Full black", construction: "Rigid double-glass", glass: "2.0 mm", application: ["Residential", "Commercial"], length: 1961, warranty: 30, efficiency: 22.6, prov: false,
      rt: { EU: { pr: 110, locs: [L("Poznan PL", 36), L("Milan IT", 108), L("Hamburg DE", 108)] }, Floating: { q: 180, r: 36, pr: 108, sh: "FL 2026 13", wk: 4 }, Factory: { q: 432, r: 0, pr: 109 }, MTO: { pr: 113 } } },
    { art: "AND-N-MI-BI-TRA-GG-505WP-V1", series: "MIES", variant: "", power: 505, frame: "Black anodised", rear: "Transparent", construction: "Rigid double-glass", glass: "2.0 mm", application: ["Residential", "Commercial"], length: 1961, warranty: 30, efficiency: 22.8, prov: false,
      rt: { EU: { pr: 111, locs: [L("Milan IT", 36), L("Poznan PL", 36), L("Rotterdam NL", 36)] }, Floating: { q: 144, r: 0, pr: 109, sh: "FL 2026 26", wk: 5 }, Factory: { q: 432, r: 36, pr: 110 }, MTO: { pr: 114 } } },
    { art: "AND-N-FO-BI-BG-GG-600WP-V1", series: "FOSTER", variant: "", power: 600, frame: "Black anodised", rear: "Full black", construction: "Rigid double-glass", glass: "2.0 mm", application: ["Commercial", "Utility"], length: 2278, warranty: 30, efficiency: 22.0, prov: true,
      rt: { EU: { pr: 128, locs: [L("Poznan PL", 108), L("Hamburg DE", 72), L("Rotterdam NL", 108)] }, Floating: { q: 180, r: 0, pr: 125, sh: "FL 2026 22", wk: 5 }, Factory: { q: 288, r: 0, pr: 127 }, MTO: { pr: 132 } } },
    { art: "AND-N-FO-BI-TRA-GG-620WP-V1", series: "FOSTER", variant: "", power: 620, frame: "Aluminium", rear: "Transparent", construction: "Rigid double-glass", glass: "2.0 mm", application: ["Commercial", "Utility"], length: 2278, warranty: 30, efficiency: 22.3, prov: true,
      rt: { EU: { pr: 136, locs: [L("Rotterdam NL", 108), L("Hamburg DE", 108), L("Madrid ES", 36)] }, Floating: { q: 108, r: 0, pr: 133, sh: "FL 2026 23", wk: 6 }, Factory: { q: 288, r: 0, pr: 135 }, MTO: { pr: 140 } } },
    { art: "AND-N-NV-L-FL-FR-460WP-V1", series: "NOUVEL", variant: "L", power: 460, frame: "Frameless", rear: "Flexible foil", construction: "Flexible laminate", glass: "Flexible", application: ["Residential", "Commercial"], length: 1722, warranty: 15, efficiency: 21.0, prov: true,
      rt: { EU: { pr: 100, locs: [L("Poznan PL", 72), L("Madrid ES", 108), L("Hamburg DE", 72)] }, Floating: { q: 72, r: 0, pr: 98, sh: "FL 2026 29", wk: 3 }, Factory: { q: 432, r: 36, pr: 99 }, MTO: { pr: 103 } } },
    { art: "AND-N-NV-XL-FL-FR-555WP-V1", series: "NOUVEL", variant: "XL", power: 555, frame: "Frameless", rear: "Flexible foil", construction: "Flexible laminate", glass: "Flexible", application: ["Residential", "Commercial"], length: 2050, warranty: 15, efficiency: 21.0, prov: true,
      rt: { EU: { pr: 120, locs: [L("Poznan PL", 108), L("Hamburg DE", 72), L("Rotterdam NL", 72)] }, Floating: { q: 108, r: 36, pr: 118, sh: "FL 2026 26", wk: 6 }, Factory: { q: 432, r: 0, pr: 119 }, MTO: { pr: 124 } } },
  ];
  PRODUCTS.forEach((p) => { p.rt.EU.q = p.rt.EU.locs.reduce((a, l) => a + l.q, 0); p.rt.EU.r = 0; });

  /* Routes (W-Q3–W-Q6). Demonstration data. */
  const ORDER = ["EU", "Floating", "Factory", "MTO"];
  const ROUTES = {
    EU: { label: "EU Stock", moq: 36, moqText: "1 pallet (36 pcs)", lead: "< 1 week", where: "EU warehouse", pay: "100 % before dispatch",
      hold: "Checkout holds the stock for 30 minutes while you pay. With bank transfer, the order is then held for 24 h.", note: "*Ships from the selected EU warehouse. Dispatch cut-off 14:00 CET." },
    Floating: { label: "Floating Stock", moq: 36, moqText: "1 pallet (36 pcs)", lead: null, where: "In transit under a named shipment", pay: "100 % before dispatch",
      hold: "Checkout holds the stock for 30 minutes while you pay. With bank transfer, the order is then held for 12 h.", note: "*In transit under a named shipment. ETA confirmed before payment. Reserved by others reduces the free-to-order count." },
    Factory: { label: "Factory Stock", moq: 144, moqText: "4 pallets (144 pcs)", lead: "< 8 weeks", where: "Ex-factory warehouse", pay: "30 % deposit on order, 70 % before dispatch",
      hold: "Checkout holds the stock for 30 minutes while you pay. With bank transfer, the order is then held for 48 h.", note: "*Ex-factory warehouse. Reserved by others reduces the free-to-order count." },
    MTO: { label: "Manufacturing Order", moq: 936, moqText: "40 ft container (936 pcs)", lead: "< 10 weeks", where: "Made to order at factory", pay: "30 % deposit on order, 70 % before dispatch",
      hold: "No hold. A 30 % deposit confirms the production slot.", note: "*Made to order at the factory." },
  };
  const STEP = 36, MTO_MAX = 4 * 936;

  /* Warehouse surcharge by distance to the delivery address (demo: Amsterdam). Moved from the old page. */
  const ORIGIN = { n: "Amsterdam", la: 52.37, lo: 4.9 };
  const WCO = { "Rotterdam NL": { la: 51.92, lo: 4.48 }, "Hamburg DE": { la: 53.55, lo: 9.99 }, "Madrid ES": { la: 40.42, lo: -3.7 }, "Poznan PL": { la: 52.41, lo: 16.93 }, "Milan IT": { la: 45.46, lo: 9.19 } };
  const WSUR = { "< 50 km": 0, "50 to 100 km": 0.02, "100 to 250 km": 0.04, "250 to 500 km": 0.07, "> 500 km": 0.11 };
  const hav = (a, b) => { const R = 6371, d = (x) => (x * Math.PI) / 180; const dla = d(b.la - a.la), dlo = d(b.lo - a.lo); const q = Math.sin(dla / 2) ** 2 + Math.cos(d(a.la)) * Math.cos(d(b.la)) * Math.sin(dlo / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(q)); };
  const band = (km) => (km < 50 ? "< 50 km" : km < 100 ? "50 to 100 km" : km < 250 ? "100 to 250 km" : km < 500 ? "250 to 500 km" : "> 500 km");
  const whDist = (n) => band(hav(ORIGIN, WCO[n]));
  const whPrice = (base, n) => Math.round(base * (1 + WSUR[whDist(n)]));

  /* Status engine (moved from the old page): fixed shipment cost 120 on non-EU routes, minimum order value floors. */
  const FLOOR = { EU: 300, Floating: 1500, Factory: 3000, MTO: 5000 }, FIXED = 120;
  const STAT = {
    allowed: { lab: "Allowed", btn: "Order now", ok: true },
    minval: { lab: "Minimum order value required", btn: "Minimum order value {floor}", ok: false },
    consol: { lab: "Eligible for consolidation", btn: "Add to weekly consolidation", ok: true },
    approval: { lab: "Management approval required", btn: "Request approval", ok: true },
    blocked: { lab: "Blocked, order too small", btn: "Blocked", ok: false },
  };
  function status(route, q, unitAtMoq, moq) {
    const isEU = route === "EU", fixed = isEU ? 0 : FIXED, base = unitAtMoq - (fixed ? fixed / moq : 0), floor = FLOOR[route];
    const unit = base + (fixed ? fixed / q : 0), total = q * unit, burden = fixed ? fixed / total : 0;
    let key; if (isEU) key = total < floor ? "minval" : "allowed"; else key = total < floor ? "consol" : burden > 0.15 ? "blocked" : burden > 0.1 ? "approval" : "allowed";
    const S = STAT[key];
    return { key, unit: Math.round(unit), total: Math.round(unit) * q, label: S.lab, btn: S.btn.replace("{floor}", eur(floor)), ok: S.ok };
  }

  const num = (v, dec) => Number(v).toLocaleString("de-DE", { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 });
  const eur = (n) => "\u20AC " + num(Math.round(n));
  const fmtDate = (d) => d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  const eta = (wk) => { const d = new Date(); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() + wk * 7); return { date: fmtDate(d), days: wk * 7 }; };
  function cutoff() {
    const t = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Amsterdam", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()).split(":");
    const n = +t[0] * 60 + +t[1], c = 14 * 60;
    if (n < c) { const r = c - n; return { title: "Order before 14:00 CET", line: Math.floor(r / 60) + " h " + String(r % 60).padStart(2, "0") + " min left · Ships today" }; }
    return { title: "Cut-off 14:00 CET passed", line: "Ships next business day" };
  }

  const title = (p) => "ANDO " + p.series + (p.variant ? " " + p.variant : "") + " " + p.power + " Wp";
  const free = (p, r) => (r === "MTO" ? Infinity : Math.max(0, (p.rt[r].q || 0) - (p.rt[r].r || 0)));
  const unitAtMoq = (p, r, wh) => (r === "EU" ? whPrice(p.rt.EU.pr, wh || cheapestWh(p)) : p.rt[r].pr);
  const cheapestWh = (p) => { const l = p.rt.EU.locs.filter((x) => x.q > 0); return l.sort((a, b) => whPrice(p.rt.EU.pr, a.w) - whPrice(p.rt.EU.pr, b.w))[0].w; };
  const minPrice = (p) => Math.min(...ORDER.map((r) => unitAtMoq(p, r)));
  const bestRoute = (p) => { for (let i = 0; i < ORDER.length; i++) if (free(p, ORDER[i]) >= ROUTES[ORDER[i]].moq) return i; return 3; };

  /* Content. AALTO 460: Sneha text (05–07) with W-Q8, W-Q9, W-Q11 applied. Other SKUs: generated text moved from the old page. */
  const PEND = "Datasheet pending";
  const AALTO460 = "AND-N-AB-BI-BG-GG-460WP-V1";
  const genDesc = (p) => { const apps = p.application.map((a) => a.toLowerCase()).join(" and ");
    return [`The ANDO ${p.series} is a ${p.power} Wp ${p.construction.toLowerCase()} solar module rated at ${num(p.efficiency, 1)} % efficiency. Frame is ${p.frame.toLowerCase()}, rear appearance ${p.rear.toLowerCase()}. Module length ${p.length} mm. Suited to ${apps} use. Product warranty ${p.warranty} years.`]; };
  function content(p) {
    const base = {
      subtitle: "N-Type bifacial · " + (p.construction === "Flexible laminate" ? "Flexible laminate" : "Glass-glass") + " · " + p.rear,
      desc: genDesc(p),
      features: [["Power", `${p.power} Wp with ${num(p.efficiency, 1)} % module efficiency.`], ["Construction", p.construction + "."], ["Appearance", `${p.frame} frame, ${p.rear.toLowerCase()} rear.`], ["Glass", p.glass + "."], ["Application", p.application.join(", ") + "."]],
      warrantyText: `Product warranty ${p.warranty} years. Degradation figures: datasheet pending.`, degradation: [],
      dims: { width: PEND, height: PEND, weight: PEND, tolerance: PEND },
    };
    if (p.art !== AALTO460) return base;
    return Object.assign(base, {
      subtitle: "N-Type Bifacial · Glass-Glass Full Black",
      desc: [
        "The ANDO AALTO 460 Wp solar module combines high output, N-Type bifacial cell technology and a full black residential design. It is built as a long-life solar module, but also as a registered system component inside the Strohm.energy ecosystem.",
        "Each ANDO panel carries a unique QR identity. During installation, the installer scans the panel and links the serial number to its roof position, orientation and warranty record in EMON. Monitoring happens at system level, through the inverter and EMON. This creates a complete digital record from the first installation step.",
      ],
      features: [
        ["Power", "460 Wp with 23,0 % module efficiency."], ["Cell technology", "N-Type 16BB for stable long-term output and low degradation."],
        ["Bifacial design", "rear-side light capture can increase total yield."], ["Construction", "glass-glass module structure for long-term protection."],
        ["Appearance", "full black frame and black cell layout."], ["Power tolerance", "0 to +5 W."],
        ["Dimensions", "approx. 1762 x 1134 x 30 mm. Weight: approx. 21,5 kg. To confirm (datasheet)."],
      ],
      warrantyText: "Warranty coverage can extend up to 35 years. Through EMON, the warranty is linked to the installed product record, and system output can be compared with the expected curve.",
      degradation: [["After year 1", "99 % · To confirm (datasheet)"], ["Each year after year 1", "0,4 %"], ["After 25 years", "89,4 %"], ["After 30 years", "87,4 %"], ["After 35 years", "To confirm (datasheet)"]],
      dims: { width: "approx. 1134 mm · To confirm (datasheet)", height: "approx. 30 mm · To confirm (datasheet)", weight: "approx. 21,5 kg · To confirm (datasheet)", tolerance: "0 to +5 W" },
    });
  }
  function specs(p) {
    const c = content(p);
    return [["Brand", "ANDO"], ["Series", p.series + (p.variant ? " " + p.variant : "")], ["Cell type", "N-Type bifacial"], ["Application", p.application.join(", ")],
      ["Rated power", p.power + " Wp"], ["Power tolerance", c.dims.tolerance], ["Efficiency", num(p.efficiency, 1) + " %"], ["Module length", p.length + " mm"],
      ["Module width", c.dims.width], ["Module height", c.dims.height], ["Net weight", c.dims.weight], ["Product warranty", p.warranty + " yr"],
      ["Frame", p.frame], ["Rear appearance", p.rear], ["Construction", p.construction], ["Glass", p.glass],
      ["Cell count", PEND], ["Connector", PEND], ["IP rating", PEND], ["Temperature coefficient", PEND], ["Bifacial gain", PEND], ["HS-code", PEND]];
  }
  const DOCS = ["Datasheet", "Catalogue", "User manual", "Installation guide", "Warranty statement", "Flash test report"];
  const docHref = (p, d) => "Content Pending.dc.html?brand=ANDO&topic=" + encodeURIComponent(title(p) + " " + d);
  const productHref = (p) => "ANDO - WEBSHOP - Product - EN.dc.html?sku=" + encodeURIComponent(p.art);

  /* Filters (moved from the old page). Values and counts come from PRODUCTS. */
  const RANGES = [
    { key: "power", label: "Power", unit: "Wp", step: 5, dec: 0 }, { key: "length", label: "Module length", unit: "mm", step: 1, dec: 0 },
    { key: "efficiency", label: "Module efficiency", unit: "%", step: 0.1, dec: 1 },
  ];
  const CHECKS = [
    { key: "series", label: "Series", get: (p) => [p.series], order: ["AALTO", "MIES", "FOSTER", "NOUVEL"] },
    { key: "application", label: "Application", get: (p) => p.application, order: ["Residential", "Commercial", "Utility"] },
    { key: "frame", label: "Frame colour", get: (p) => [p.frame], order: ["Black anodised", "Aluminium", "Frameless"] },
    { key: "rear", label: "Rear appearance", get: (p) => [p.rear], order: ["Full black", "Transparent", "Flexible foil"] },
    { key: "glass", label: "Glass thickness", get: (p) => [p.glass], order: ["1.6 mm", "2.0 mm", "Flexible"] },
    { key: "construction", label: "Construction", get: (p) => [p.construction], order: ["Rigid double-glass", "Flexible laminate"] },
  ];
  const WARRANTY = { key: "warranty", label: "Product warranty", unit: "yr", step: 1, dec: 0 };
  const AVAIL = { key: "av", label: "Availability", get: (p) => ORDER.filter((r) => free(p, r) >= ROUTES[r].moq).map((r) => ROUTES[r].label), order: ORDER.map((r) => ROUTES[r].label), authOnly: true };

  const VIEWS = [["main", "Main"], ["rear", "Rear"], ["detail", "Detail"], ["application", "Application"]];
  /* Notify copy (W-Q7). launch = Sneha verbatim (06/07), for products marked launched:false. stock = route without free stock. */
  const NOTIFY = {
    launch: { title: "Be among the first to work with this exclusive product", mail: "We'll email you the moment the launch date is locked in", lock: "Nothing to pay now — the real order screen opens after that email" },
    stock: { title: "No free stock on this route", mail: "We'll email you when stock is free to order on this route", lock: "Nothing to pay now" },
  };
  const AUTH_KEY = "ando-shop-demo-auth";
  const getAuth = () => { try { return localStorage.getItem(AUTH_KEY) === "1"; } catch (e) { return false; } };
  /* DEPTH-1032: demo order lines kept in this browser so the header Order (n) and every page share them. Line = { sku, r, q, wh }. */
  const ORDER_KEY = "ando-shop-demo-order";
  const emit = () => { try { window.dispatchEvent(new Event("ando-shop-change")); } catch (e) {} };
  const getOrder = () => { try { const v = JSON.parse(localStorage.getItem(ORDER_KEY) || "[]"); return Array.isArray(v) ? v : []; } catch (e) { return []; } };
  const setOrder = (lines) => { try { localStorage.setItem(ORDER_KEY, JSON.stringify(lines)); } catch (e) {} emit(); };
  const setAuth = (v) => { try { localStorage.setItem(AUTH_KEY, v ? "1" : "0"); if (!v) localStorage.setItem(ORDER_KEY, "[]"); } catch (e) {} emit(); };
  function orderRows() {
    return getOrder().map((l) => { const p = PRODUCTS.find((x) => x.art === l.sku); if (!p || !ROUTES[l.r]) return null;
      const R = ROUTES[l.r], s = status(l.r, l.q, unitAtMoq(p, l.r, l.wh), R.moq);
      return { sku: l.sku, r: l.r, q: l.q, wh: l.wh, product: title(p), route: R.label + (l.wh ? " · " + l.wh : ""), unit: s.unit, total: s.total, status: s.label,
        lead: l.r === "Floating" ? "ETA " + eta(p.rt.Floating.wk).date : "Lead time " + R.lead, pay: R.pay, hold: R.hold, href: productHref(p) }; }).filter(Boolean);
  }

  window.ANDO_SHOP = { PRODUCTS, ORDER, ROUTES, STEP, MTO_MAX, whDist, whPrice, status, num, eur, eta, cutoff, title, free, unitAtMoq, cheapestWh, minPrice, bestRoute,
    content, specs, DOCS, docHref, productHref, VIEWS, NOTIFY, RANGES, CHECKS, WARRANTY, AVAIL, getAuth, setAuth, getOrder, setOrder, orderRows, ORIGIN, DEFAULT_SKU: AALTO460,
    CATALOGUE: "ANDO - WEBSHOP - Shop - EN.dc.html", SERIES: ["AALTO", "MIES", "FOSTER", "NOUVEL"], LOGIN: "STROHM.ENERGY - SITE - Login - EN.dc.html",
    DEMO: "Demonstration data. Stock, prices, dates and warehouses are examples." };
})();
