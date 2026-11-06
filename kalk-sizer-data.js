/* DEPTH-1354: configs for the shared KALK sizer (KalkSizer.dc.html). One entry per brand.
   steps: [{ id, title, intro, show(s)?, fields: [{ key, type: choice|multi|number|select|photo, label, options:[[value,label,sub]], unit }] }]
   result(s) -> { items:[{qty,name,why,code}], notes:[...], sparky }   visual(s, items) -> [[tag, attrs, text?], ...] line drawing.
   Sizing rules are indicative and invented for the prototype (user, 31 Oct 2026): TO CONFIRM by product engineering. */
(function () {
  const EU = ["Belgium", "Netherlands", "Germany", "France", "Luxembourg", "Austria", "Switzerland", "Denmark", "Sweden", "Norway", "Finland", "Poland", "Czechia", "Spain", "Portugal", "Italy", "Greece", "United Kingdom", "Ireland", "Other in Europe"];
  const COLD = ["Sweden", "Norway", "Finland", "Poland", "Czechia", "Austria", "Switzerland", "Denmark"], WARM = ["Spain", "Portugal", "Italy", "Greece"];
  const clim = (c) => (COLD.indexOf(c) >= 0 ? 1.25 : WARM.indexOf(c) >= 0 ? 0.8 : 1);
  const country = { key: "country", type: "select", label: "Country", options: EU.map((c) => [c, c]) };
  const phase = { key: "phase", type: "choice", label: "Your connection", options: [["1P", "Single phase", "230 V"], ["3P", "Three phase", "400 V"]] };
  const n = (v) => Math.max(0, +v || 0);
  const pl = (s) => Object.keys(s.places || {}).filter((k) => s.places[k]), plc = (s) => pl(s).length;
  const L = (x1, y1, x2, y2, w) => ["line", { x1, y1, x2, y2, stroke: "#252525", strokeWidth: w || 1 }];
  const R = (x, y, w, h, fill) => ["rect", { x, y, width: w, height: h, rx: 4, fill: fill || "none", stroke: "#252525", strokeWidth: 1 }];
  const T = (x, y, t) => ["text", { x, y, fontSize: 11, fill: "#252525", letterSpacing: 1 }, t];
  const house = () => [["path", { d: "M40 170 L235 40 L430 170 L430 400 L40 400 Z", fill: "none", stroke: "#252525", strokeWidth: 1 }], L(40, 290, 430, 290, 0.6)];

  window.STROHM_KALK_SIZER = {
    NENDO: {
      color: "#1B8B9A", tint: "#E1F0F2", title: "Size your heat pump", tool: "heat pump check", visualLabel: "Your house",
      intro: "Tell KALK about your house or apartment and what the heat pump should do. KALK estimates the heat demand and suggests the NENDO system. Your local distributor sends the price.",
      start: { country: "Belgium", use: "both", emit: "floor", type: "house", area: 140, insul: "reno", heat: "gas", sys: "hybrid", persons: 3, solar: "no", phase: "1P" },
      steps: [
        { id: "building", title: "Your building", fields: [country, { key: "type", type: "choice", label: "Building", options: [["house", "House", ""], ["flat", "Apartment", ""]] }, phase] },
        { id: "use", title: "What should the heat pump do", fields: [{ key: "use", type: "choice", label: "Heating, sanitary hot water or both", options: [["heat", "Heating", "Space heating only"], ["dhw", "Sanitary hot water", "Heat-pump water heater only"], ["both", "Both", "Heating and sanitary hot water"]] }] },
        { id: "home", title: "Your home", house: true, fields: [{ key: "places", type: "multi", label: "Which rooms need heat or hot water. Click in the drawing or here.", options: [["bed", "Bedrooms", ""], ["bath", "Bathroom", "Hot water"], ["living", "Living room", ""], ["kitchen", "Kitchen", "Hot water"]] }] },
        { id: "house", title: "Your home size", show: (s) => s.use !== "dhw", fields: [{ key: "area", type: "number", label: "Heated floor area", unit: "m²" }] },
        { id: "insul", title: "Insulation and heating", show: (s) => s.use !== "dhw", fields: [{ key: "emit", type: "choice", label: "Heat emitters", options: [["floor", "Underfloor heating", "Low temperature, 35 °C"], ["rad", "Radiators", "Higher temperature, 45 to 55 °C"], ["mix", "Both", "Floor and radiators"]] }, { key: "insul", type: "choice", label: "Insulation", options: [["new", "New build", "After 2015"], ["reno", "Renovated", "Roof, walls or glazing done"], ["old", "Not renovated", "Before 1980"]] }, { key: "heat", type: "choice", label: "Heating today", options: [["gas", "Gas boiler", ""], ["oil", "Oil boiler", ""], ["el", "Electric", ""], ["hp", "Heat pump", ""]] }] },
        { id: "dhw", title: "Hot water", show: (s) => s.use === "dhw", fields: [{ key: "persons", type: "number", label: "People in the house", unit: "" }, { key: "solar", type: "choice", label: "Solar panels", options: [["yes", "Yes", ""], ["no", "No", ""]] }] },
        { id: "sys", title: "Hot water and system", show: (s) => s.use !== "dhw", fields: [{ key: "sys", type: "choice", label: "System", options: [["hybrid", "Hybrid", "Keep the boiler"], ["all", "All-electric", "Replace the boiler"]] }, { key: "persons", type: "number", label: "People in the house", unit: "" }, { key: "solar", type: "choice", label: "Solar panels", options: [["yes", "Yes", ""], ["no", "No", ""]] }] },
        { id: "photo", title: "Photos", fields: [{ key: "photo", type: "photo", label: "Upload a photo of the boiler and the outside wall", sub: "The installer checks the space for the outdoor unit and the pipe route. Reading the photo automatically is TO CONFIRM." }] }
      ],
      result(s) {
        if (s.use === "dhw") { const l = n(s.persons) <= 2 ? 150 : n(s.persons) <= 4 ? 200 : 300, d = [{ qty: 1, name: "NENDO heat-pump water heater " + l + " L", why: "Hot water for " + n(s.persons) + " people, " + (s.phase === "3P" ? "three phase" : "single phase"), code: "Model TO CONFIRM" }]; if (s.solar === "yes") d.push({ qty: 1, name: "NENDO RAY", why: "Sends solar power directly to the immersion heater", code: "" }); { const hw = pl(s).filter((k) => k === "bath" || k === "kitchen").length; if (hw) d.push({ qty: hw, name: "Hot-water points", why: "Bathroom and kitchen chosen in the drawing", code: "" }); } return { items: d, sparky: "A qualified installer connects the water heater to the water pipes. The electrical connection is made by an electrician.", notes: ["Tank size from the number of people. TO CONFIRM by the installer."] }; }
        const w = { new: 30, reno: 50, old: 80 }[s.insul] * clim(s.country) * (s.emit === "rad" ? 1.1 : 1), kw = Math.max(3, Math.round(n(s.area) * w / 100) / 10), sizes = [6, 8, 12, 16];
        const it = [], one = sizes.find((x) => x >= kw);
        if (one) it.push({ qty: 1, name: (s.type === "flat" && kw <= 8 ? "NENDO CORE indoor heat pump " : "NENDO AERO outdoor heat pump ") + one + " kW", why: "Heat demand about " + kw.toString().replace(".", ",") + " kW, " + { floor: "underfloor heating", rad: "radiators", mix: "floor and radiators" }[s.emit] + ", " + (s.phase === "3P" ? "three phase" : "single phase"), code: "Model TO CONFIRM" });
        if (s.emit !== "floor") it.push({ qty: 1, name: "High-temperature setting for radiators", why: "Flow temperature 45 to 55 °C: the installer checks radiator size. TO CONFIRM", code: "" });
        else it.push({ qty: Math.ceil(kw / 16), name: "NENDO AERO 16 kW in cascade", why: "Heat demand about " + Math.round(kw) + " kW: units work together", code: "Model TO CONFIRM" });
        if (s.use === "both" && s.sys === "all") { const l = n(s.persons) <= 2 ? 150 : n(s.persons) <= 4 ? 200 : 300; it.push({ qty: 1, name: "NENDO VESSEL DHW " + l + " L", why: "Hot water for " + n(s.persons) + " people", code: "" }); it.push({ qty: 1, name: "NENDO FLOW", why: "Hydraulic distribution and control", code: "" }); }
        if (s.solar === "yes") it.push({ qty: 1, name: "NENDO RAY", why: "Sends solar power directly to the immersion heater", code: "" });
        { const heated = pl(s).filter((k) => k === "bed" || k === "living" || k === "bath" || k === "kitchen").length, hw = pl(s).filter((k) => k === "bath" || k === "kitchen").length; if (heated) it.push({ qty: heated, name: s.emit === "floor" ? "Underfloor zones" : "Radiators or heat emitters", why: "One per room chosen in the drawing" + (s.use === "both" && hw ? ", " + hw + " hot-water point" + (hw > 1 ? "s" : "") : ""), code: "" }); }
        return { items: it, sparky: "A qualified heat-pump installer (F-gas) places the unit. The electrical connection" + (s.phase === "3P" ? " on three phase" : "") + " is made by an electrician.", notes: ["Indicative heat demand from floor area, insulation, heat emitters and climate. A heat-loss calculation on site is TO CONFIRM by the installer."] };
      },
      visual(s, items) {
        const k = house(), on = items.length > 0, c = "#1B8B9A";
        if (s.use === "dhw") { k.push(R(200, 300, 60, 90, on ? c : "none"), T(185, 420, "WATER HEATER")); } else { k.push(R(440, 330, 26, 60, on ? c : "none"), T(420, 420, "OUTDOOR UNIT"), R(80, 320, 50, 70, on && s.sys === "all" ? c : "none"), T(70, 420, "TANK"), L(130, 355, 440, 355, 0.6));
        if (s.emit !== "rad") for (let i = 0; i < 9; i++) k.push(L(150 + i * 30, 280, 150 + i * 30, 286, 0.6));
        if (s.emit !== "floor") for (let i = 0; i < 4; i++) k.push(R(170 + i * 60, 240, 40, 24)); }
        if (s.solar === "yes") k.push(["path", { d: "M120 120 L200 66 L230 86 L150 140 Z", fill: on ? c : "none", stroke: "#252525", strokeWidth: 1 }]);
        return k;
      }
    },
    FEU: {
      color: "#ED704C", tint: "#FCE6DF", title: "Size your heating", tool: "radiant heating check", visualLabel: "Your rooms",
      intro: "Tell KALK which rooms or terrace you want to heat. KALK calculates the power and suggests the FEU panels or terrace heaters. Your local distributor sends the price.",
      start: { country: "Belgium", use: "room", rooms: 1, area: 20, height: "std", insul: "reno", look: "metal", place: "wall", phase: "1P" },
      steps: [
        { id: "building", title: "Your building", fields: [{ key: "type", type: "choice", label: "Building", options: [["house", "House", ""], ["flat", "Apartment", ""]] }] },
        { id: "home", title: "Your home", house: true, fields: [{ key: "places", type: "multi", label: "Where do you want radiant heat. Click in the drawing or here.", options: [["terrace", "Terrace", ""], ["living", "Living room", ""], ["bath", "Bathroom", ""], ["garage", "Garage", ""]] }] },
        { id: "use", title: "Size your heating", fields: [country, { key: "use", type: "choice", label: "What do you want to heat", options: [["room", "Rooms", "Indoor"], ["terrace", "Terrace", "Outdoor"]] }] },
        { id: "room", title: "Rooms", show: (s) => s.use === "room", fields: [{ key: "rooms", type: "number", label: "Number of rooms", unit: "" }, { key: "area", type: "number", label: "Average room area", unit: "m²" }, { key: "insul", type: "choice", label: "Insulation", options: [["new", "New build", ""], ["reno", "Renovated", ""], ["old", "Not renovated", ""]] }, { key: "height", type: "choice", label: "Ceiling height", options: [["std", "Up to 2,7 m", ""], ["high", "Higher", ""]] }] },
        { id: "look", title: "Look and place", show: (s) => s.use === "room", fields: [{ key: "place", type: "choice", label: "Mounting", options: [["wall", "Wall", ""], ["ceiling", "Ceiling", ""]] }, { key: "look", type: "choice", label: "Finish", options: [["metal", "Metal", "RADIUS"], ["glass", "Glass", "GLASS"], ["mirror", "Mirror", "MIRROR"], ["ceramic", "Paintable", "CERAMIC"]] }] },
        { id: "terrace", title: "Terrace", show: (s) => s.use === "terrace", fields: [{ key: "area", type: "number", label: "Terrace area", unit: "m²" }, { key: "tstyle", type: "choice", label: "Type", options: [["verti", "Freestanding tower", "VERTI"], ["fold", "Foldable", "FOLD"]] }] },
        { id: "conn", title: "Connection", fields: [phase, { key: "photo", type: "photo", label: "Upload a photo of the room or terrace", sub: "The installer checks wall, ceiling and the power supply. Reading the photo automatically is TO CONFIRM." }] }
      ],
      result(s) {
        const it = [];
        if (s.use === "terrace") { const w = n(s.area) * 250, verti = s.tstyle !== "fold", unit = verti ? 2700 : 2200, q = Math.max(1, Math.ceil(w / unit)); it.push({ qty: q, name: verti ? "FEU VERTI terrace heater 3 × 900 W" : "FEU FOLD terrace heater 2200 W", why: "About " + Math.round(w / 100) / 10 + " kW for " + n(s.area) + " m² outdoors", code: verti ? "FE-VERTI-3X900W-V1" : "FE-FOLD-2200W-V1" }); }
        else {
          const wm = { new: 60, reno: 80, old: 110 }[s.insul] * (s.height === "high" ? 1.2 : 1) * clim(s.country), per = n(s.area) * wm;
          if (s.place === "ceiling") { const q = Math.max(1, Math.ceil(per / 700)); it.push({ qty: q * n(s.rooms), name: "FEU GRAIN ceiling panel 1200 × 600 mm, 700 W", why: q + " per room, about " + Math.round(per) + " W per room", code: "FE-GRN-IRP-AM-CB-MSH-1200X600X20-700W-V1 (TO CONFIRM)" }); }
          else {
            const F = { metal: [["RADIUS 1200 × 500 mm, 800 W", 800, "FE-RAD-IRP-MA-WC-MSH-1200X24X500-800W-V1"], ["RADIUS 520 × 434 mm, 1000 W", 1000, "FE-RAD-IRP-MA-WC-MSH-520X89X434-1000W-V1"]], glass: [["GLASS+ 1200 × 600 mm, 900 W", 900, "FE-GLSPLUS-IRP-GL-WC-MSH-1200X600X50-900W-V1"]], mirror: [["MIRROR 600 × 1200 mm, 680 W", 680, "FE-MIR-IRP-GL-WL-MSH-600X1200-680W-V1"]], ceramic: [["CERAMIC 1200 × 600 mm, 700 W", 700, "FE-CER-IRP-CP-WL-MSH-1200X600X20-700W-V1"]] }[s.look];
            const f = F[F.length - 1], q = Math.max(1, Math.ceil(per / f[1]));
            it.push({ qty: q * n(s.rooms), name: "FEU " + f[0], why: q + " per room, about " + Math.round(per) + " W per room", code: f[2] });
          }
        }
        return { items: it, sparky: "Plug-in panels need no electrician. Hardwired panels, ceiling panels and terrace heaters on a separate circuit are connected by a qualified electrician.", notes: ["Indicative power from area, insulation, ceiling height and climate. TO CONFIRM by the installer."] };
      },
      visual(s, items) {
        const c = "#ED704C", on = items.length > 0, k = [];
        if (s.use === "terrace") { k.push(L(40, 380, 430, 380), T(40, 410, "TERRACE")); for (let i = 0; i < Math.min(items[0] ? items[0].qty : 2, 5); i++) k.push(R(70 + i * 75, 200, 16, 180, on ? c : "none")); }
        else { k.push(R(60, 60, 350, 320)); k.push(T(60, 50, "ROOM")); const q = items[0] ? Math.min(items[0].qty / Math.max(1, n(s.rooms)), 4) : 2; for (let i = 0; i < q; i++) k.push(s.place === "ceiling" ? R(90 + i * 80, 70, 60, 12, on ? c : "none") : R(80 + i * 85, 180, 60, 40, on ? c : "none")); }
        return k;
      }
    },
    XOOM: {
      color: "#8EB15F", tint: "#EDF3E5", title: "Find your charger", tool: "charger check", visualLabel: "Your parking",
      intro: "Tell KALK where you park and how you drive. KALK suggests the XOOM charger and the power. Your local distributor sends the price.",
      start: { country: "Belgium", site: "home", spots: 1, km: 15000, phase: "1P", amp: "40", place: "wall", cable: "tethered" },
      steps: [
        { id: "site", title: "Find your charger", fields: [country, { key: "site", type: "choice", label: "Where", options: [["home", "Home", "Garage or driveway"], ["work", "Workplace", "Company car park"], ["public", "Public", "Street or car park"]] }, { key: "spots", type: "number", label: "Charging spots", unit: "" }] },
        { id: "home", title: "Your home", house: true, show: (s) => s.site === "home", fields: [{ key: "places", type: "multi", label: "Where does the car charge. Click in the drawing or here.", options: [["garage", "Garage", ""], ["drive", "Driveway", ""]] }] },
        { id: "drive", title: "Driving and parking", fields: [{ key: "km", type: "number", label: "Kilometres per car per year", unit: "km" }, { key: "place", type: "choice", label: "Mounting", options: [["wall", "On a wall", ""], ["free", "Freestanding", ""], ["flush", "In the pavement", ""], ["lamp", "On a lamp post", ""]] }, { key: "cable", type: "choice", label: "Cable", options: [["tethered", "Fixed cable", ""], ["socket", "Socket", "Bring your own cable"]] }] },
        { id: "conn", title: "Connection", fields: [phase, { key: "amp", type: "choice", label: "Main fuse", options: [["25", "25 A", ""], ["40", "40 A", ""], ["63", "63 A or more", ""]] }, { key: "photo", type: "photo", label: "Upload a photo of the fuse box and the parking spot", sub: "The electrician checks the main fuse, the cable route and the earthing. Reading the photo automatically is TO CONFIRM." }] }
      ],
      result(s) {
        const kw = s.phase === "3P" ? (+s.amp >= 40 ? 22 : 11) : 7.4, kwh = Math.round(n(s.km) * 0.18 / 365 * 10) / 10, it = [];
        const fam = s.place === "free" ? (s.site === "public" ? ["STUMP bollard charger", "Socket outlet, compact footprint"] : ["POST pedestal charger", "Freestanding, fixed cable"]) : s.place === "flush" ? ["PAVE tile charger", "Flush in the pavement, socket outlet"] : s.place === "lamp" ? ["LUMO lamp post charger", "Mounted on a lamp post"] : ["WISP wall charger", s.cable === "socket" ? "Socket outlet" : "Fixed cable"];
        it.push({ qty: n(s.spots) || 1, name: "XOOM " + fam[0] + ", " + String(kw).replace(".", ",") + " kW", why: fam[1] + ". About " + String(kwh).replace(".", ",") + " kWh per car per day", code: "Model TO CONFIRM" });
        if (s.site === "home" && s.place === "wall" && s.cable === "tethered") it.push({ qty: 1, name: "XOOM COIL cable reel", why: "Optional: 8 m cable kept off the floor", code: "" });
        if (n(s.spots) > 1) it.push({ qty: 1, name: "EMON load balancing", why: "Shares the available power between " + n(s.spots) + " spots", code: "" });
        return { items: it, sparky: "A qualified electrician installs every XOOM charger on its own circuit with earth-fault protection.", notes: ["Power follows your connection and main fuse. Charging time and grid capacity TO CONFIRM by the electrician."] };
      },
      visual(s, items) {
        const c = "#8EB15F", on = items.length > 0, k = [L(30, 380, 440, 380), T(30, 410, s.site === "public" ? "STREET" : "PARKING")], q = Math.min(n(s.spots) || 1, 4);
        for (let i = 0; i < q; i++) { const x = 60 + i * 100; k.push(["path", { d: "M" + x + " 360 L" + (x + 70) + " 360 L" + (x + 62) + " 330 L" + (x + 10) + " 330 Z", fill: "none", stroke: "#252525", strokeWidth: 1 }]); k.push(s.place === "wall" ? R(x + 20, 200, 26, 40, on ? c : "none") : s.place === "flush" ? R(x + 20, 372, 30, 8, on ? c : "none") : R(x + 28, 250, 14, 130, on ? c : "none")); }
        if (s.place === "wall") k.push(L(30, 180, 440, 180));
        return k;
      }
    },
    AIRO: {
      color: "#0083BB", tint: "#DFF0F8", title: "Find your ventilation", tool: "ventilation check", visualLabel: "Your house",
      intro: "Tell KALK about the space and how airtight it is. KALK calculates the airflow and suggests the AIRO system. Your local distributor sends the price.",
      start: { country: "Belgium", klass: "home", scope: "rooms", rooms: 2, area: 120, persons: 3, ducts: "no", hp: "no", phase: "1P" },
      steps: [
        { id: "klass", title: "Find your ventilation", fields: [country, { key: "klass", type: "choice", label: "Where", options: [["home", "Home", "House or apartment"], ["business", "Business", "Office, shop, school"], ["public", "Public", "Public building"]] }] },
        { id: "building", title: "Your building", show: (s) => s.klass !== "business" && s.klass !== "public", fields: [{ key: "type", type: "choice", label: "Building", options: [["house", "House", ""], ["flat", "Apartment", ""]] }] },
        { id: "home", title: "Your home", house: true, show: (s) => s.klass !== "business" && s.klass !== "public", fields: [{ key: "places", type: "multi", label: "Which rooms need ventilation. Click in the drawing or here.", options: [["living", "Living room", ""], ["kitchen", "Kitchen", ""], ["bath", "Bathroom", ""], ["bed", "Bedrooms", ""]] }] },
        { id: "scope", title: "Find your ventilation", fields: [{ key: "scope", type: "choice", label: "What", options: [["rooms", "Single rooms", "Retrofit per room"], ["house", "Whole house", "Central unit"], ["large", "Larger space", "Office, school"]] }] },
        { id: "size", title: "Size", fields: [{ key: "rooms", type: "number", label: "Rooms to ventilate", unit: "" }, { key: "area", type: "number", label: "Floor area", unit: "m²" }, { key: "persons", type: "number", label: "People", unit: "" }] },
        { id: "sys", title: "System", fields: [{ key: "ducts", type: "choice", label: "Space for ducts", options: [["yes", "Yes", "Attic or false ceiling"], ["no", "No", ""]] }, { key: "hp", type: "choice", label: "Also heat or cool with the air", options: [["yes", "Yes", "Heat pump ERV"], ["no", "No", ""]] }, phase, { key: "photo", type: "photo", label: "Upload floor plans or photos", sub: "AIRO returns a preliminary review. Reading the plans automatically is TO CONFIRM." }] }
      ],
      result(s) {
        const m3 = Math.max(n(s.area) * 2.5 * 0.5, n(s.persons) * 30), it = [];
        if (s.hp === "yes") { const c = [350, 620, 950].find((x) => x >= m3) || 950; it.push({ qty: 1, name: "AIRO GUST heat pump ERV (HP HUB) " + c + " m³/h", why: "Airflow about " + Math.round(m3) + " m³/h, with heating and cooling", code: "AI-HP-HUB-C-MVHR-BAL-" + c + "M3-V1" }); }
        else if (s.scope === "rooms" || s.ducts === "no") it.push({ qty: Math.max(1, plc(s) || n(s.rooms)), name: "AIRO single-room ERV (SHIFT, SWAP or WAVE)", why: "One unit per room, no duct network" + (plc(s) ? ", rooms chosen in the drawing: " + plc(s) : ""), code: "Model TO CONFIRM" });
        else it.push({ qty: 1, name: "AIRO FLOW central ERV", why: "Airflow about " + Math.round(m3) + " m³/h through a duct network", code: "Model TO CONFIRM" });
        return { items: it, sparky: "Single-room units are wall-mounted by an installer. Central units and heat pump ERV need a ventilation installer and an electrician" + (s.scope === "rooms" && s.hp !== "yes" ? "." : ", " + (s.phase === "3P" ? "three phase." : "single phase.")), notes: ["Airflow from volume (0,5 air changes per hour) or 30 m³/h per person, whichever is higher. TO CONFIRM by AIRO."] };
      },
      visual(s, items) {
        const c = "#0083BB", on = items.length > 0, k = house();
        if (s.hp === "yes" || (s.scope !== "rooms" && s.ducts === "yes")) { k.push(R(200, 190, 70, 40, on ? c : "none"), L(60, 210, 200, 210, 0.6), L(270, 210, 410, 210, 0.6), L(235, 230, 235, 380, 0.6), T(190, 182, "CENTRAL UNIT")); }
        else for (let i = 0; i < Math.min(plc(s) || n(s.rooms) || 1, 4); i++) k.push(["circle", { cx: 90 + i * 100, cy: i < 2 ? 240 : 340, r: 14, fill: on ? c : "none", stroke: "#252525", strokeWidth: 1 }]);
        return k;
      }
    },
    GLOW: {
      map: true, color: "#FCDE15", tint: "#FEF8D0", title: "Plan your lighting", tool: "lighting check", visualLabel: "Your path or square",
      intro: "Tell KALK where you need light and what else the frame should do. KALK suggests the GLOW frames, modules and heads. Your local distributor sends the price.",
      start: { country: "Belgium", site: "path", length: 100, spacing: 20, extra: { solar: true }, phase: "3P" },
      steps: [
        { id: "site", title: "Plan your lighting", fields: [country, { key: "site", type: "choice", label: "Where", options: [["path", "Path or park", "Bollard height"], ["road", "Street or square", "Streetlight"]] }] },
        { id: "gmap", title: "Draw the path or street", map: { mode: "line", key: "length", unit: "m", what: "path or street to light" }, fields: [{ key: "spacing", type: "number", label: "Distance between lights", unit: "m" }, { key: "photo", type: "photo", label: "Or upload a site plan", sub: "Optional. Reading the plan automatically is TO CONFIRM." }] },
        { id: "extra", title: "What else", fields: [{ key: "extra", type: "multi", label: "Modules in the frame", options: [["solar", "Solar and battery", "Off-grid"], ["ev", "EV charging", "XOOM in the frame"], ["eco", "Wildlife", "Birdhouse, insect hotel"], ["sign", "Illuminated face", "Sign or advertising"]] }, phase] }
      ],
      result(s) {
        const q = Math.max(1, Math.ceil(n(s.length) / Math.max(1, n(s.spacing))) + 1), x = s.extra || {}, it = [];
        it.push({ qty: q, name: "GLOW ARBOR frame", why: "One every " + n(s.spacing) + " m over " + n(s.length) + " m", code: "" });
        if (s.site === "path") it.push({ qty: q, name: "GLOW WICK path module", why: "54 Wp solar with up to 15 W LED", code: "" });
        else { it.push({ qty: q, name: "GLOW CROWN streetlight head", why: "Via tender", code: "" }); if (x.solar) it.push({ qty: q, name: "GLOW HELIO solar module", why: "Panel with battery of at least 1152 Wh", code: "" }); }
        if (x.ev) it.push({ qty: Math.max(1, Math.round(q / 4)), name: "GLOW VOLT EV charger module, " + (s.phase === "3P" ? "11 or 22 kW" : "7,4 kW"), why: "XOOM pedestal charger in the frame, " + (s.phase === "3P" ? "three phase" : "single phase"), code: "" });
        if (x.eco) it.push({ qty: Math.max(1, Math.round(q / 3)), name: "GLOW NEST wildlife insert", why: "Birdhouse, insect or bee hotel", code: "" });
        if (x.sign) it.push({ qty: Math.max(1, Math.round(q / 5)), name: "GLOW LUME lighting insert", why: "Illuminated face", code: "" });
        return { items: it, sparky: x.ev ? "EV charging modules are connected to the grid by a qualified electrician." : "Solar frames run off-grid: no grid connection or electrician needed. Foundations by the contractor.", notes: ["Indicative count from length and spacing. Light levels and project combinations go through tender and custom design: TO CONFIRM."] };
      },
      visual(s, items) {
        const c = "#E3C400", on = items.length > 0, k = [L(20, 380, 450, 380), T(20, 410, s.site === "road" ? "STREET" : "PATH")], q = Math.min(items[0] ? items[0].qty : 4, 6), h = s.site === "road" ? 260 : 110;
        for (let i = 0; i < q; i++) { const x = 50 + i * 72; k.push(L(x, 380, x, 380 - h), R(x - 10, 380 - h - 14, 20, 14, on ? c : "none")); }
        return k;
      }
    },
    MOX: {
      map: true, color: "#D8392C", tint: "#F9E1DF", title: "Find your MOX structure", tool: "structure check", visualLabel: "Your building or garden",
      intro: "Tell KALK what you want to build with solar: awning, porch, pergola, fence or facade. KALK picks the MOX structure and the article codes. Your local distributor sends the price.",
      start: { country: "Belgium", fam: "pergola", area: 0, len: 0, fh: "1800", fmod: "land", mod: "1762", width: 4, phase: "1P" },
      steps: [
        { id: "fam", title: "Find your MOX structure", fields: [country, { key: "fam", type: "choice", label: "What do you want to build", options: [["ombras", "Awning", "OMBRAS, on the wall"], ["porch", "Porch canopy", "PORCH"], ["pergola", "Pergola", "PERGOLA, freestanding"], ["fence", "Fence", "FENCE with PV"], ["facade", "Facade", "FACADE and BIPV"]] }] },
        { id: "area", title: "Draw the place", show: (s) => s.fam === "porch" || s.fam === "pergola", map: { mode: "area", key: "area", unit: "m²", what: "terrace or garden" }, fields: [{ key: "photo", type: "photo", label: "Or upload a site plan", sub: "Optional. Reading the plan automatically is TO CONFIRM." }] },
        { id: "farea", title: "Facade surface", show: (s) => s.fam === "facade", fields: [{ key: "area", type: "number", label: "Surface you want to cover", unit: "m²" }] },
        { id: "awn", title: "Awning", show: (s) => s.fam === "ombras", fields: [{ key: "width", type: "number", label: "Wall length", unit: "m" }, { key: "mod", type: "choice", label: "Module length", options: [["1762", "1762 mm", ""], ["1910", "1910 mm", ""]] }] },
        { id: "fmap", title: "Draw your fence", show: (s) => s.fam === "fence", map: { mode: "line", key: "len", unit: "m", what: "fence" }, fields: [{ key: "photo", type: "photo", label: "Or upload a site plan", sub: "Optional. Reading the plan automatically is TO CONFIRM." }] },
        { id: "fence", title: "Fence", show: (s) => s.fam === "fence", fields: [{ key: "fh", type: "choice", label: "Height", options: [["1200", "1,2 m", ""], ["1800", "1,8 m", ""], ["2300", "2,3 m", ""]] }, { key: "fmod", type: "choice", label: "Modules", options: [["land", "1 × landscape", ""], ["port", "1 × portrait", ""], ["stack", "2 × stacked", ""]] }] },
        { id: "conn", title: "Connection and photo", fields: [phase, { key: "photo", type: "photo", label: "Upload a photo of the place", sub: "Used to check the wall, the ground and the wind load. Reading it automatically is TO CONFIRM." }] }
      ],
      result(s) {
        const it = [], A = n(s.area);
        if (s.fam === "porch") { const P = [["2X2", 7.99], ["2X3", 11.99], ["4X2", 15.98], ["3X3", 17.98], ["4X3", 23.98]], p = P.find((x) => x[1] >= A) || P[P.length - 1]; it.push({ qty: 1, name: "MOX PORCH PV canopy " + p[0] + " modules, " + String(p[1]).replace(".", ",") + " m²", why: "Fixed tilt 7°, modules 1134 × 1762 mm", code: "MOX-PORCH-PV-" + p[0] + "-P1134X1762-T7-V1" }); }
        if (s.fam === "pergola") { const P = [["5X2", 19.98, 4500], ["4X3", 23.98, 5400], ["5X3", 29.97, 6750], ["4X4", 31.97, 7200], ["6X3", 35.97, 8100], ["5X4", 39.96, 9000], ["7X3", 41.96, 9450], ["6X4", 47.95, 10800], ["7X4", 55.95, 12600], ["6X5", 59.94, 13500], ["8X4", 63.94, 14400], ["7X5", 69.93, 15750], ["9X4", 71.93, 16200]], p = P.find((x) => x[1] >= A) || P[P.length - 1]; it.push({ qty: 1, name: "MOX PERGOLA " + p[0] + ", " + String(p[1]).replace(".", ",") + " m²", why: "Freestanding, about " + p[2].toLocaleString("nl-BE") + " Wp, slope 7 %", code: "MOX-PERGOLA-FS-PV-" + p[0] + "-P1134X1762-S7P-V1" }); }
        if (s.fam === "ombras") { const m = s.mod === "1910" ? 1.91 : 1.762, seg = Math.max(1, Math.ceil(n(s.width) / 1.134)); it.push({ qty: seg, name: "MOX OMBRAS profile set, module " + s.mod + " mm", why: "Wall and front rail, " + seg + " modules over " + n(s.width) + " m", code: "MOX-OMBRAS-AWNG-PRF-SET-WALLFRONT-P" + (s.mod === "1910" ? "1910" : "762") + "-V1" }); it.push({ qty: 2, name: "MOX OMBRAS end bracket, adjustable tilt", why: "Start and stop", code: "MOX-OMBRAS-AWNG-BRK-END-ANGADJ-V1" }); if (seg > 1) it.push({ qty: seg - 1, name: "MOX OMBRAS middle support bracket", why: "Between modules", code: "MOX-OMBRAS-AWNG-BRK-MID-ANGADJ-V1" }); }
        if (s.fam === "fence") { const span = s.fmod === "port" ? 1.134 : 1.762, f = Math.ceil(n(s.len) / span), h = s.fh, tag = s.fmod === "stack" ? "L1762-2S" : s.fmod === "port" ? "L1134" : "L1762";
          it.push({ qty: 1, name: "MOX FENCE beginning post h" + h, why: "Start of the fence", code: "MOX-FENCE-PST-BEG-H" + h + "-V1" }, { qty: 1, name: "MOX FENCE end post h" + h, why: "End of the fence", code: "MOX-FENCE-PST-END-H" + h + "-V1" }, { qty: Math.max(0, f - 1), name: "MOX FENCE middle post h" + h, why: f + " fields over " + n(s.len) + " m", code: "MOX-FENCE-PST-MID-H" + h + "-V1" }, { qty: f, name: "MOX FENCE top rail" + (s.fmod === "stack" ? ", 2 × stacked" : ""), why: "One per field", code: "MOX-FENCE-FLD-PV-RAIL-TOP-" + tag + "-V1" });
          if (s.fmod === "stack") it.push({ qty: f, name: "MOX FENCE middle rail, 2 × stacked", why: "One per field", code: "MOX-FENCE-FLD-PV-RAIL-MID-L1762-2S-V1" });
          it.push({ qty: f, name: "MOX FENCE bottom rail" + (s.fmod === "stack" ? ", 2 × stacked" : ""), why: "One per field", code: "MOX-FENCE-FLD-PV-RAIL-BOT-" + tag + "-V1" }); }
        if (s.fam === "facade") it.push({ qty: 1, name: "MOX FACADE ventilated facade PV, curtain wall PV or BIPV cladding", why: "About " + Math.floor(A / 2) + " modules on " + A + " m², project design", code: "Ref 002.03.01, via tender" });
        return { items: it, sparky: "Structure by the installer or contractor. The DC and AC connection and the inverter by a qualified electrician" + (s.phase === "3P" ? ", three phase." : "."), notes: ["Article codes from the MOX webshop. Foundations, wind load and permits TO CONFIRM."] };
      },
      visual(s, items) { const c = "#D8392C", on = items.length > 0, k = [L(20, 380, 450, 380)];
        if (s.fam === "fence") { for (let i = 0; i < 6; i++) k.push(L(50 + i * 75, 380, 50 + i * 75, 250)); for (let i = 0; i < 5; i++) k.push(R(54 + i * 75, 260, 67, s.fmod === "stack" ? 110 : 60, on ? c : "none")); }
        else if (s.fam === "ombras") { k.push(L(80, 60, 80, 380), ["path", { d: "M80 180 L300 150 L300 160 L80 190 Z", fill: on ? c : "none", stroke: "#252525", strokeWidth: 1 }]); }
        else if (s.fam === "facade") { k.push(R(140, 50, 200, 330)); for (let r = 0; r < 6; r++) for (let q = 0; q < 4; q++) k.push(R(150 + q * 47, 60 + r * 52, 40, 44, on ? c : "none")); }
        else { const x0 = s.fam === "porch" ? 80 : 60; if (s.fam === "porch") k.push(L(80, 60, 80, 380)); k.push(R(x0, 200, 330, 12, on ? c : "none"), L(400, 212, 400, 380)); if (s.fam === "pergola") k.push(L(70, 212, 70, 380), L(235, 212, 235, 380)); }
        return k; }
    },
    AGRIX: {
      map: true, color: "#6B8E4E", tint: "#E7EEE1", title: "Plan your agri-PV", tool: "agri-PV check", visualLabel: "Your field",
      intro: "Find your field on the satellite map, draw it and tell KALK the crop or animals. KALK suggests the AGRIX structure, the row spacing and the power. Your local distributor sends the price.",
      start: { country: "Belgium", ha: 0, use: "crops", height: "high" },
      steps: [
        { id: "map", title: "Plan your agri-PV", map: { mode: "area", key: "ha", unit: "ha", what: "field" }, fields: [country, { key: "photo", type: "photo", label: "Or upload a site plan", sub: "Optional. Reading the plan automatically is TO CONFIRM." }] },
        { id: "land", title: "Land use", fields: [{ key: "use", type: "choice", label: "Use of the land", options: [["crops", "Arable crops", ""], ["fruit", "Fruit or berries", ""], ["grass", "Grazing", "Sheep, cattle"]] }] },
        { id: "struct", title: "Structure", fields: [{ key: "height", type: "choice", label: "Clearance", options: [["high", "High", "Machines pass under"], ["low", "Vertical rows", "Machines pass between"]] }, ] }
      ],
      result(s) {
        const fam = s.height === "high" ? "TWIG elevated agri-PV canopy" : "HEDGE vertical bifacial agri-PV", kwpHa = s.height === "high" ? 450 : 300, kwp = Math.round(n(s.ha) * kwpHa);
        return { items: [{ qty: 1, name: "AGRIX " + fam + " structure", why: (s.height === "high" ? "Raised structure over the crop" : "Vertical rows with space for machines") + ", about " + kwpHa + " kWp per ha", code: s.height === "high" ? "Ref 003.1, via tender" : "Ref 003.2, via tender" }, { qty: Math.round(kwp / 0.45), name: "PV modules, about 450 Wp, bifacial", why: "About " + kwp.toLocaleString("nl-BE") + " kWp in total", code: "Module TO CONFIRM" }], sparky: "Foundations and structure by the contractor. Medium-voltage grid connection by a qualified electrical contractor.", notes: ["Indicative density per hectare. Permits, crop yield and grid capacity TO CONFIRM."] };
      },
      visual(s, items) { const c = "#6B8E4E", on = items.length > 0, k = [L(20, 380, 450, 380)]; for (let i = 0; i < 6; i++) { const x = 40 + i * 70; if (s.height === "high") k.push(L(x, 380, x, 220), L(x + 50, 380, x + 50, 220), R(x - 5, 205, 60, 10, on ? c : "none")); else k.push(R(x + 20, 250, 8, 130, on ? c : "none")); } return k; }
    },
    TERRIX: {
      map: true, color: "#6B755F", tint: "#E9EBE6", title: "Plan your solar park", tool: "solar park check", visualLabel: "Your site",
      intro: "Find your land on the satellite map, draw it and choose the type of mounting. KALK estimates the power, the tables and the yield. Your local distributor sends the price.",
      start: { country: "Spain", ha: 0, type: "fixed", fence: "yes" },
      steps: [
        { id: "map", title: "Plan your solar park", map: { mode: "area", key: "ha", unit: "ha", what: "land" }, fields: [country, { key: "photo", type: "photo", label: "Or upload a site plan", sub: "Optional. Reading the plan automatically is TO CONFIRM." }] },
        { id: "site", title: "Mounting", fields: [{ key: "type", type: "choice", label: "Mounting", options: [["fixed", "Fixed tilt", "FIXED-TILT"], ["tracker", "Single-axis tracker", "TRACKER"], ["cont", "Containerized", "Mobile or temporary"]] }] },
        { id: "extra", title: "Site", fields: [{ key: "fence", type: "choice", label: "Fence with PV", options: [["yes", "Yes", "UTILITY FENCE"], ["no", "No", ""]] }, { key: "photo", type: "photo", label: "Upload a soil report", sub: "Optional, used for foundations. Reading it automatically is TO CONFIRM." }] }
      ],
      result(s) {
        const mw = Math.round(n(s.ha) * (s.type === "tracker" ? 0.6 : 0.75) * 10) / 10, it = [];
        it.push({ qty: Math.ceil(mw * 1000 / 25), name: "TERRIX " + { fixed: "FIXED-TILT table", tracker: "TRACKER row", cont: "CONTAINERIZED unit" }[s.type] + ", about 25 kWp", why: "About " + String(mw).replace(".", ",") + " MWp on " + n(s.ha) + " ha", code: "Configuration TO CONFIRM" });
        if (s.fence === "yes") it.push({ qty: Math.round(Math.sqrt(n(s.ha) * 10000) * 4), name: "TERRIX UTILITY FENCE, metre", why: "Perimeter of the site", code: "" });
        return { items: it, sparky: "Piling and structure by the EPC contractor. " + (s.type === "tracker" ? "Tracker drives and controls by a qualified electrician. " : "") + "Grid connection by a qualified electrical contractor.", notes: ["Indicative density, " + (s.type === "tracker" ? "trackers add about 15 to 25 % yield" : "fixed tilt") + ". Geotechnics and layout TO CONFIRM."] };
      },
      visual(s, items) { const c = "#6B755F", on = items.length > 0, k = [R(30, 60, 410, 320)]; for (let r = 0; r < 6; r++) k.push(R(60, 90 + r * 48, 350, 16, on ? c : "none")); return k; }
    },
    PONTIX: {
      map: true, color: "#06768A", tint: "#DDEEF1", title: "Plan your floating PV", tool: "floating PV check", visualLabel: "Your water surface",
      intro: "Find the water on the satellite map, draw its outline and tell KALK how much to cover. KALK estimates the float area, the power and the anchoring. Your local distributor sends the price.",
      start: { country: "Netherlands", ha: 0, cover: 50, depth: 6, water: "quarry" },
      steps: [
        { id: "map", title: "Plan your floating PV", map: { mode: "area", key: "ha", unit: "ha", what: "water surface" }, fields: [country, { key: "photo", type: "photo", label: "Or upload a site plan", sub: "Optional. Reading the plan automatically is TO CONFIRM." }] },
        { id: "water", title: "Water", fields: [{ key: "water", type: "choice", label: "Water", options: [["quarry", "Quarry or sand pit", ""], ["basin", "Reservoir or basin", ""], ["farm", "Irrigation pond", ""]] }] },
        { id: "use", title: "Coverage", fields: [{ key: "cover", type: "number", label: "Share to cover", unit: "%" }, { key: "depth", type: "number", label: "Water depth", unit: "m" }, { key: "photo2", type: "photo", label: "Upload a bathymetry", sub: "Optional, used for anchoring. Reading it automatically is TO CONFIRM." }] }
      ],
      result(s) {
        const a = n(s.ha) * n(s.cover) / 100, mw = Math.round(a * 0.9 * 10) / 10;
        return { items: [{ qty: Math.round(mw * 1000 / 0.45), name: "PONTIX FLOATING SOLAR float with module, about 450 Wp", why: "About " + String(mw).replace(".", ",") + " MWp on " + String(Math.round(a * 10) / 10).replace(".", ",") + " ha of water", code: "Ref 003.4, via tender" }, { qty: Math.max(4, Math.round(a * 12)), name: "PONTIX anchor line", why: n(s.depth) + " m depth", code: "" }], sparky: "Assembly on the shore and anchoring by the contractor. Floating cables and the grid connection by a qualified electrical contractor.", notes: ["Indicative density. Permits, water use and ecology TO CONFIRM."] };
      },
      visual(s, items) { const c = "#06768A", on = items.length > 0, k = [["ellipse", { cx: 235, cy: 220, rx: 200, ry: 150, fill: "none", stroke: "#252525", strokeWidth: 1 }]]; for (let r = 0; r < 4; r++) for (let q = 0; q < 5; q++) k.push(R(140 + q * 38, 150 + r * 36, 32, 28, on ? c : "none")); return k; }
    },
    TECTIX: {
      map: true, color: "#4A5B73", tint: "#E3E7EC", title: "Size your roof mounting", tool: "roof mounting check", visualLabel: "Your roof",
      intro: "Find your roof on the satellite map, draw it and tell KALK the roof type. KALK suggests the TECTIX mounting, rails and hooks or ballast. Your local distributor sends the price.",
      start: { country: "Belgium", roof: "pitched", cover: "tiles", panels: 0, layout: "portrait" },
      steps: [
        { id: "map", title: "Size your roof mounting", map: { mode: "area", key: "panels", unit: "panels", what: "roof", to: (m2) => Math.floor(m2 * 0.75 / 2) }, fields: [country, { key: "roof", type: "choice", label: "Roof", options: [["pitched", "Pitched roof", ""], ["flat", "Flat roof", ""]] }] },
        { id: "count", title: "Panels", fields: [{ key: "panels", type: "number", label: "Panels that fit (from your drawing, you can change it)", unit: "" }] },
        { id: "pitched", title: "Pitched roof", show: (s) => s.roof === "pitched", fields: [{ key: "cover", type: "choice", label: "Roof covering", options: [["tiles", "Tiles", ""], ["slate", "Slate", ""], ["metal", "Metal sheet", ""]] }, { key: "layout", type: "choice", label: "Panels", options: [["portrait", "Portrait", ""], ["landscape", "Landscape", ""]] }] },
        { id: "flat", title: "Flat roof", show: (s) => s.roof === "flat", fields: [{ key: "fdir", type: "choice", label: "Layout", options: [["south", "South facing", ""], ["ew", "East-west", ""]] }, { key: "photo", type: "photo", label: "Upload a photo of the roof", sub: "Used to check load and edges. Reading it automatically is TO CONFIRM." }] }
      ],
      result(s) {
        const p = n(s.panels), it = [];
        if (s.roof === "flat") { it.push({ qty: p, name: "TECTIX FLAT ROOF support, " + (s.fdir === "ew" ? "east-west" : "south"), why: "Ballasted, no roof penetration", code: "" }); it.push({ qty: Math.ceil(p * (s.fdir === "ew" ? 1.5 : 2)), name: "TECTIX ballast carrier", why: "Ballast per wind zone TO CONFIRM", code: "" }); }
        else { it.push({ qty: Math.ceil(p * (s.layout === "portrait" ? 1.1 : 1.7)) * 2, name: "TECTIX rail, 2,1 m", why: "Two rails per row", code: "" }); it.push({ qty: p * 2, name: "TECTIX " + { tiles: "roof hook for tiles", slate: "roof hook for slate", metal: "bracket for metal sheet" }[s.cover], why: "About 2 per panel", code: "" }); it.push({ qty: p * 2 + 4, name: "TECTIX clamps", why: "Middle and end clamps", code: "" }); }
        return { items: it, sparky: "Mounting by the roofer or solar installer. The DC and AC connection by a qualified electrician.", notes: ["Indicative quantities. Wind and snow zone and roof load TO CONFIRM. For the panel layout on your roof, use Plan your roof with ANDO."] };
      },
      visual(s, items) { const c = "#4A5B73", on = items.length > 0, k = []; if (s.roof === "flat") { k.push(L(40, 300, 430, 300)); for (let i = 0; i < 6; i++) k.push(["path", { d: "M" + (60 + i * 60) + " 300 L" + (100 + i * 60) + " 270 L" + (100 + i * 60) + " 300", fill: on ? c : "none", stroke: "#252525", strokeWidth: 1 }]); } else { k.push(["path", { d: "M40 340 L235 80 L430 340 Z", fill: "none", stroke: "#252525", strokeWidth: 1 }]); for (let r = 0; r < 3; r++) k.push(L(140 + r * 20, 230 - r * 50, 330 - r * 20, 230 - r * 50, on ? 3 : 1)); } return k; }
    },
    PARX: {
      map: true, color: "#7A9337", tint: "#ECF0E1", title: "Find your solar carport", tool: "carport check", visualLabel: "Your parking",
      intro: "Find your parking on the satellite map, draw it and tell KALK what parks there. KALK picks the PARX carport or bikeport and the article codes. Your local distributor sends the price.",
      start: { country: "Belgium", what: "home", spots: 0, size: "std", pitch: "mono", ev: "yes", phase: "1P" },
      steps: [
        { id: "map", title: "Find your solar carport", map: { mode: "area", key: "spots", unit: "spots", what: "parking area", to: (m2) => Math.max(1, Math.floor(m2 / 25)) }, fields: [country, { key: "photo0", type: "photo", label: "Or upload a site plan", sub: "Optional. Reading the plan automatically is TO CONFIRM." }] },
        { id: "park", title: "What parks here", fields: [{ key: "what", type: "choice", label: "For", options: [["home", "Home", "RESIDENTIAL CARPORT"], ["com", "Business or car park", "CURVE or CLASSIC"], ["bike", "Bikes, public", "PUBLIC BIKEPORT"]] }, { key: "spots", type: "number", label: "Parking spots (from your drawing, about 25 m² each, you can change it)", unit: "" }] },
        { id: "home", title: "Size", show: (s) => s.what === "home", fields: [{ key: "size", type: "choice", label: "Roof", options: [["small", "Compact", "2 × 4 modules"], ["std", "Standard", "2 × 5 modules"], ["large", "Large", "2 × 6 modules"]] }] },
        { id: "com", title: "Style", show: (s) => s.what === "com", fields: [{ key: "pitch", type: "choice", label: "Roof", options: [["curve", "Curved", "CURVE"], ["mono", "Mono-pitch", "CLASSIC"], ["duo", "Duo-pitch", "CLASSIC"]] }] },
        { id: "conn", title: "Charging and connection", fields: [{ key: "ev", type: "choice", label: "EV charging", options: [["yes", "Yes, with XOOM", ""], ["no", "No", ""]] }, phase, { key: "photo", type: "photo", label: "Upload a site plan or photo", sub: "Used for foundations and the cable route. Reading it automatically is TO CONFIRM." }] }
      ],
      result(s) {
        const sp = Math.max(1, n(s.spots)), it = [];
        if (s.what === "home") { if (sp >= 2) it.push({ qty: Math.ceil(sp / 2), name: "PARX RESIDENTIAL CARPORT double 3 × 5, 29,29 m²", why: "2 spaces, 15 modules", code: "PARX-RESIDENTIAL-DBL-15MOD-6DEG-V1" }); else { const m = { small: [8, "2×4", "15,62"], std: [10, "2×5", "19,53"], large: [12, "2×6", "23,43"] }[s.size]; it.push({ qty: 1, name: "PARX RESIDENTIAL CARPORT single " + m[1] + ", " + m[2] + " m²", why: "1 space, " + m[0] + " modules, 6°", code: "PARX-RESIDENTIAL-SGL-" + m[0] + "MOD-6DEG-V1" }); } }
        if (s.what === "com") { if (s.pitch === "curve") { const C = [[2, "2A", 18], [3, "3", 24], [4, "4", 27], [5, "5", 33]]; let left = sp; while (left > 0) { const c = C.find((x) => x[0] >= left) || C[C.length - 1]; it.push({ qty: 1, name: "PARX CURVE CARPORT " + c[0] + "-space, " + c[2] + " panels", why: "Commercial carport", code: "PARX-CRPT-CURVE-COM-" + c[1] + "-V1" }); left -= c[0]; } }
          else { const P = s.pitch === "duo" ? "DP" : "MP", sz = sp <= 2 ? 2 : sp <= 4 ? 4 : 6; it.push({ qty: Math.ceil(sp / sz), name: "PARX CLASSIC CARPORT " + (s.pitch === "duo" ? "duo-pitch" : "mono-pitch") + " portal, " + sz + " spaces", why: "Commercial carport", code: "PARX-CRPT-CLASSIC-" + P + "-PORTAL-" + sz + "SP-V1" }); } }
        if (s.what === "bike") it.push({ qty: Math.max(1, Math.ceil(sp / 10)), name: "PARX PUBLIC BIKEPORT", why: "Modular length, about 10 bikes per bay" + (s.ev === "yes" ? ", e-bike charging" : ""), code: "Ref 002.04, via tender" });
        if (s.ev === "yes" && s.what !== "bike") it.push({ qty: sp, name: "XOOM POST charger", why: "One per space, EMON shares the power", code: "" });
        return { items: it, sparky: "Foundations and structure by the contractor. PV, chargers and the grid connection by a qualified electrician" + (s.phase === "3P" ? ", three phase." : "."), notes: ["Article codes from the PARX webshop. Wind and snow load and permits TO CONFIRM."] };
      },
      visual(s, items) { const c = "#7A9337", on = items.length > 0, k = [L(20, 380, 450, 380)]; if (s.what === "com" && s.pitch === "curve") k.push(["path", { d: "M40 190 Q235 120 430 190", fill: "none", stroke: on ? c : "#252525", strokeWidth: on ? 6 : 1 }]); else if (s.what === "com" && s.pitch === "duo") k.push(["path", { d: "M40 190 L235 150 L430 190", fill: "none", stroke: on ? c : "#252525", strokeWidth: on ? 6 : 1 }]); else k.push(R(40, 160, 390, 14, on ? c : "none")); for (let i = 0; i < 4; i++) k.push(L(60 + i * 115, 185, 60 + i * 115, 380)); for (let i = 0; i < 3; i++) k.push(s.what === "bike" ? ["circle", { cx: 117 + i * 115, cy: 360, r: 16, fill: "none", stroke: "#252525", strokeWidth: 1 }] : ["path", { d: "M" + (85 + i * 115) + " 370 L" + (150 + i * 115) + " 370 L" + (142 + i * 115) + " 340 L" + (95 + i * 115) + " 340 Z", fill: "none", stroke: "#252525", strokeWidth: 1 }]); return k; }
    },
    CHILL: {
      map: true, color: "#6BC0B0", tint: "#E5F4F1", title: "Plan your street furniture", tool: "street furniture check", visualLabel: "Your site",
      intro: "Drop a pin on the map where you want to place it, then tell KALK what the place needs: seating, shade, charging or light. KALK suggests the CHILL modules. Your local distributor sends the price.",
      start: { country: "Belgium", site: "park", users: 50, need: { seat: true, usb: true }, phase: "1P" },
      steps: [
        { id: "map", title: "Plan your street furniture", map: { mode: "pin", key: "pin", unit: "", what: "place" }, fields: [country] },
        { id: "site", title: "The place", fields: [{ key: "site", type: "choice", label: "Where", options: [["park", "Park or square", ""], ["stop", "Bus or tram stop", ""], ["campus", "Campus or company site", ""]] }, { key: "users", type: "number", label: "People per day", unit: "" }] },
        { id: "need", title: "What it should do", fields: [{ key: "need", type: "multi", label: "Functions", options: [["seat", "Seating", ""], ["shade", "Shade roof with PV", ""], ["usb", "Phone and bike charging", ""], ["light", "Lighting", ""], ["info", "Information screen", ""]] }, phase, { key: "photo", type: "photo", label: "Upload a photo of the place", sub: "Optional. Reading it automatically is TO CONFIRM." }] }
      ],
      result(s) {
        const x = s.need || {}, q = Math.max(1, Math.round(n(s.users) / 40)), it = [];
        if (x.seat) it.push({ qty: q, name: "CHILL street furniture, bench module", why: "Seating for about " + q * 4 + " people", code: "" });
        if (x.shade) it.push({ qty: q, name: "CHILL city module with PV roof", why: "Shade and solar power", code: "" });
        if (x.usb || x.light || x.info) it.push({ qty: q, name: "CHILL public infrastructure module", why: [x.usb ? "charging" : "", x.light ? "lighting" : "", x.info ? "information screen" : ""].filter(Boolean).join(", "), code: "" });
        return { items: it, sparky: x.shade ? "Off-grid with the PV roof. A grid connection, if needed, by a qualified electrician." : "Placement by the contractor. Charging and lighting need power: PV roof or a " + (s.phase === "3P" ? "three-phase" : "single-phase") + " grid connection by an electrician.", notes: ["Indicative count from use per day. Design and permits TO CONFIRM."] };
      },
      visual(s, items) { const c = "#6BC0B0", on = items.length > 0, x = s.need || {}, k = [L(20, 380, 450, 380), R(120, 320, 230, 20, on && x.seat ? c : "none"), L(140, 340, 140, 380), L(330, 340, 330, 380)]; if (x.shade) k.push(R(90, 160, 290, 12, on ? c : "none"), L(110, 172, 110, 380), L(360, 172, 360, 380)); return k; }
    },
    TOGU: {
      map: true, color: "#C48723", tint: "#F5EADA", title: "Size your cabling", tool: "cable check", visualLabel: "Your cable route",
      intro: "Tell KALK the system, the power and the cable length. KALK suggests the TOGU cable cross-section, protection and routing. Your local distributor sends the price.",
      start: { country: "Belgium", sys: "pv", kw: 10, len: 25, phase: "3P", route: "tray" },
      steps: [
        { id: "sys", title: "Size your cabling", fields: [country, { key: "sys", type: "choice", label: "Circuit", options: [["pv", "Solar DC", "Panels to inverter"], ["ac", "AC", "Inverter, battery, charger"]] }, { key: "kw", type: "number", label: "Power", unit: "kW" }] },
        { id: "tmap", title: "Draw the cable route", map: { mode: "line", key: "len", unit: "m", what: "cable route, one way" }, fields: [{ key: "photo", type: "photo", label: "Or upload a site plan", sub: "Optional. Reading the plan automatically is TO CONFIRM." }] },
        { id: "route", title: "Route", fields: [phase, { key: "route", type: "choice", label: "Routing", options: [["tray", "Cable tray", ""], ["conduit", "Conduit", ""], ["ground", "In the ground", ""]] }] }
      ],
      result(s) {
        const v = s.sys === "pv" ? 600 : s.phase === "3P" ? 400 : 230, a = n(s.kw) * 1000 / (s.sys === "ac" && s.phase === "3P" ? v * 1.73 : v), mm = [2.5, 4, 6, 10, 16, 25, 35].find((x) => x * 8 >= a * (n(s.len) > 30 ? 1.3 : 1)) || 35, it = [];
        it.push({ qty: Math.ceil(n(s.len) * (s.sys === "pv" ? 2 : s.phase === "3P" ? 5 : 3)), name: (s.sys === "pv" ? "TOGU DC solar cable " : "TOGU AC cable ") + String(mm).replace(".", ",") + " mm², metre", why: "About " + Math.round(a) + " A over " + n(s.len) + " m", code: "" });
        it.push({ qty: 1, name: "TOGU protect and switch set", why: s.sys === "pv" ? "DC isolator and surge protection" : "Circuit breaker and RCD", code: "" });
        it.push({ qty: Math.ceil(n(s.len) / 3), name: "TOGU " + { tray: "cable tray, 3 m", conduit: "conduit, 3 m", ground: "ground duct, 3 m" }[s.route], why: "Route and support", code: "" });
        return { items: it, sparky: "Cabling and protection are installed and tested by a qualified electrician.", notes: ["Indicative cross-section from current and length. Voltage drop and local rules TO CONFIRM by the electrician."] };
      },
      visual(s, items) { const c = "#C48723", on = items.length > 0; return [R(40, 180, 60, 80), T(40, 280, s.sys === "pv" ? "PANELS" : "SOURCE"), R(370, 180, 60, 80), T(360, 280, "INVERTER"), L(100, 220, 370, 220, on ? 4 : 1), R(220, 205, 30, 30, on ? c : "none")]; }
    },
    DODO: {
      map: true, color: "#E5B73B", tint: "#FBF1D8", title: "Protect your panels", tool: "panel protection check", visualLabel: "Your roof",
      intro: "Panels already on the roof: draw the panel field on the satellite map. Not yet: enter the panel size and layout. KALK calculates the edge and the DODO QUILL strips and clips. Your local distributor sends the price.",
      start: { country: "Belgium", method: "map", edge: 0, pw: 1.134, pl: 1.762, cols: 6, rows: 2, orient: "portrait", gap: "130" },
      steps: [
        { id: "method", title: "Protect your panels", fields: [country, { key: "method", type: "choice", label: "Your panels", options: [["map", "Already on the roof", "Draw them on the map"], ["plan", "Not yet installed", "Enter size and layout"]] }] },
        { id: "map", title: "Draw your panel field", show: (s) => s.method === "map", map: { mode: "perimeter", key: "edge", unit: "m", what: "panel field (4 corners)" }, fields: [{ key: "edge", type: "number", label: "Edge length (from your drawing)", unit: "m" }] },
        { id: "plan", title: "Panel layout", show: (s) => s.method === "plan", fields: [{ key: "cols", type: "number", label: "Panels per row", unit: "" }, { key: "rows", type: "number", label: "Rows", unit: "" }, { key: "orient", type: "choice", label: "Orientation", options: [["portrait", "Portrait", ""], ["landscape", "Landscape", ""]] }, { key: "pl", type: "number", label: "Panel length", unit: "m" }, { key: "pw", type: "number", label: "Panel width", unit: "m" }] },
        { id: "gap", title: "Gap under the panels", fields: [{ key: "gap", type: "choice", label: "Gap between panel and roof", options: [["90", "Up to 90 mm", "QUILL 90"], ["130", "90 to 130 mm", "QUILL 130"], ["210", "130 to 210 mm", "QUILL 210"]] }, { key: "photo", type: "photo", label: "Upload a photo of the panel edge", sub: "Optional, used to check the gap. Reading it automatically is TO CONFIRM." }] }
      ],
      result(s) {
        let edge = +s.edge || 0, how = "From your drawing";
        if (s.method === "plan") { const w = s.orient === "portrait" ? +s.pw || 1.134 : +s.pl || 1.762, h = s.orient === "portrait" ? +s.pl || 1.762 : +s.pw || 1.134; edge = 2 * (n(s.cols) * w + n(s.rows) * h); how = n(s.cols) + " × " + n(s.rows) + " panels, " + (s.orient === "portrait" ? "portrait" : "landscape"); }
        const m = Math.ceil(edge * 1.05);
        if (!m) return { items: [], sparky: "", notes: [] };
        return { items: [{ qty: m, name: "DODO QUILL " + s.gap + " strip, metre", why: how + ": edge about " + Math.round(edge) + " m, plus 5 %", code: "" }, { qty: Math.ceil(m * 2.5), name: "DODO Aqua clip", why: "About 2,5 per metre", code: "" }], sparky: "No electrician needed: the strips clip onto the panel frame.", notes: ["Indicative edge length. TO CONFIRM by the installer."] };
      },
      visual(s, items) { const c = "#E5B73B", on = items.length > 0, k = [["path", { d: "M40 340 L235 80 L430 340 Z", fill: "none", stroke: "#252525", strokeWidth: 1 }]]; const cols = Math.min(n(s.cols) || 4, 6), rows = Math.min(n(s.rows) || 2, 3); for (let r = 0; r < rows; r++) for (let q = 0; q < cols; q++) k.push(R(150 + q * 28, 200 + r * 40, 24, 36)); k.push(["rect", { x: 146, y: 196, width: cols * 28 + 4, height: rows * 40 + 4, rx: 4, fill: "none", stroke: on ? c : "#252525", strokeWidth: on ? 5 : 1 }]); return k; }
    },
    SHELTR: {
      map: true, offer: true, color: "#5B6592", tint: "#E4E6EF", title: "Plan your SHELTR project", tool: "SHELTR project check", visualLabel: "Your project",
      intro: "Name your project, then choose the SHELTR enclosures from a list or put dots on the map where each one goes. KALK makes the product list. Your local distributor sends an offer with price and lead time.",
      start: { country: "Belgium", project: "", method: "map", locs: 0, cara: 0, kubo: 0, hush: 0, place: "outdoor", phase: "3P" },
      steps: [
        { id: "project", title: "Plan your SHELTR project", fields: [country, { key: "project", type: "text", label: "Project name", sub: "For example: Depot Gent, phase 1" }, { key: "method", type: "choice", label: "How do you want to choose", options: [["map", "On the map", "Put a dot per enclosure"], ["list", "From the list", "Enter quantities"]] }] },
        { id: "map", title: "Put your dots", show: (s) => s.method === "map", map: { mode: "pins", key: "locs", unit: "", what: "enclosure" }, fields: [] },
        { id: "list", title: "Which enclosures", fields: [{ key: "cara", type: "number", label: "CARA, compact enclosure", unit: "" }, { key: "kubo", type: "number", label: "KUBO, larger equipment", unit: "" }, { key: "hush", type: "number", label: "HUSH, with noise reduction", unit: "" }] },
        { id: "place", title: "Place and connection", fields: [{ key: "place", type: "choice", label: "Where", options: [["outdoor", "Outdoor", ""], ["indoor", "Indoor", ""]] }, phase] }
      ],
      result(s) {
        const it = [], q = { CARA: n(s.cara), KUBO: n(s.kubo), HUSH: n(s.hush) }, tot = q.CARA + q.KUBO + q.HUSH;
        Object.keys(q).forEach((k) => { if (q[k]) it.push({ qty: q[k], name: "SHELTR " + k + " enclosure", why: { CARA: "Compact enclosure", KUBO: "Larger equipment", HUSH: "With noise reduction" }[k], code: "Size TO CONFIRM" }); });
        if (tot) it.push({ qty: tot, name: "SHELTR ventilation and thermal management", why: s.place === "outdoor" ? "Rain, sun and frost protection" : "Air flow indoors", code: "" });
        const gap = s.method === "map" && n(s.locs) && tot !== n(s.locs) ? n(s.locs) + " dots on the map, " + tot + " enclosures chosen." : "";
        return { items: it, sparky: "Placement by the installer. Power to the enclosures (" + (s.phase === "3P" ? "three phase" : "single phase") + ") and the equipment connection by a qualified electrician.", notes: [(s.project ? "Project: " + s.project + ". " : "") + (gap ? gap + " " : "") + "The offer with price and lead time comes from your local distributor."] };
      },
      visual(s, items) { const c = "#5B6592", on = items.length > 0, k = [L(20, 380, 450, 380)], tot = Math.min(items.length ? items.filter((i) => /enclosure$/.test(i.name)).reduce((a, i) => a + i.qty, 0) : 0, 5) || 2; for (let i = 0; i < tot; i++) k.push(R(50 + i * 80, 260, 60, 120, on ? c : "none")); return k; }
    },
    MUKI: {
      color: "#DF550C", tint: "#FAE4D9", title: "Find your energy set", tool: "energy set check", visualLabel: "Your home",
      intro: "Tell KALK what you want to start with. KALK puts together a MUKI set from the brands that work together. Your local distributor sends the price.",
      start: { country: "Belgium", home: "flat", want: { solar: true, battery: true }, phase: "1P" },
      steps: [
        { id: "home", title: "Your home", house: true, fields: [{ key: "places", type: "multi", label: "Where does the set go. Click in the drawing or here.", options: [["living", "Living room", ""], ["kitchen", "Kitchen", ""], ["bed", "Bedrooms", ""], ["garage", "Garage", ""], ["garden", "Garden", ""], ["terrace", "Terrace", ""]] }] },
        { id: "home", title: "Find your energy set", fields: [country, { key: "home", type: "choice", label: "Home", options: [["flat", "Apartment", "Balcony"], ["house", "House", "Roof"]] }, phase] },
        { id: "want", title: "What do you want", fields: [{ key: "want", type: "multi", label: "In the set", options: [["solar", "Solar", ""], ["battery", "Battery", ""], ["plugs", "Smart plugs", ""], ["meter", "Meter reader", ""]] }] }
      ],
      result(s) {
        const x = s.want || {}, it = [], plug = s.home === "flat";
        if (x.solar) it.push({ qty: plug ? 2 : 10, name: plug ? "ANDO balcony panels, plug-in" : "ANDO panels", why: plug ? "Plug-in solar, 800 W" : "Roof system", code: "" });
        if (x.battery) it.push({ qty: 1, name: plug ? "FLUXX BENCH plug-in battery" : "FLUXX battery with MOEBIUS inverter", why: "Stores solar for the evening", code: "" });
        if (x.plugs) it.push({ qty: 3, name: "OZZY smart plug", why: "Switch and measure appliances", code: "" });
        if (x.meter) it.push({ qty: 1, name: "SYNQ P1 meter reader", why: "EMON sees the whole house", code: "" });
        it.push({ qty: 1, name: "MUKI " + (plug ? "plug-in kit" : "preassembled kit"), why: "All parts in one set", code: "Set TO CONFIRM" });
        return { items: it, sparky: plug ? "Plug-in set: no electrician needed." : "Roof panels and a fixed battery are installed by a qualified electrician.", notes: ["Indicative set. Exact set content TO CONFIRM."] };
      },
      visual(s, items) { const c = "#DF550C", on = items.length > 0, k = house(); k.push(R(100, 320, 60, 70, on ? c : "none"), R(300, 330, 20, 20, on ? c : "none")); return k; }
    },
    WURK: {
      color: "#9E3D2E", tint: "#F2E2DF", title: "Build your crew kit", tool: "crew kit check", visualLabel: "Your crew",
      intro: "Tell KALK what your crew installs. KALK puts together the WURK tools. Your local distributor sends the price.",
      start: { country: "Belgium", crew: 2, jobs: { pv: true }, roof: "yes" },
      steps: [
        { id: "crew", title: "Build your crew kit", fields: [country, { key: "crew", type: "number", label: "People in the crew", unit: "" }, { key: "jobs", type: "multi", label: "What you install", options: [["pv", "Solar", ""], ["bat", "Batteries and inverters", ""], ["ev", "EV chargers", ""], ["hp", "Heat pumps", ""]] }] },
        { id: "roof", title: "Work at height", fields: [{ key: "roof", type: "choice", label: "Roof work", options: [["yes", "Yes", ""], ["no", "No", ""]] }] }
      ],
      result(s) {
        const x = s.jobs || {}, c = n(s.crew) || 1, it = [];
        it.push({ qty: c, name: "WURK PREP and torque tools", why: "One set per person", code: "" });
        if (x.pv || x.bat) it.push({ qty: Math.ceil(c / 2), name: "WURK CRIMP tools and dies", why: "DC and battery connectors", code: "" });
        it.push({ qty: Math.ceil(c / 2), name: "WURK GAUGE and PROBE", why: "Measuring and testing", code: "" });
        if (s.roof === "yes") { it.push({ qty: c, name: "WURK HOLD fall protection", why: "One harness per person", code: "" }); it.push({ qty: 1, name: "WURK RAIL, RISE and HAUL", why: "Access and lifting to the roof", code: "" }); }
        return { items: it, sparky: "Tools only. Use by trained installers, following local safety rules.", notes: ["Indicative kit per crew. TO CONFIRM."] };
      },
      visual(s, items) { const c = "#9E3D2E", on = items.length > 0, k = []; for (let i = 0; i < Math.min(n(s.crew) || 1, 5); i++) k.push(["circle", { cx: 80 + i * 75, cy: 200, r: 18, fill: on ? c : "none", stroke: "#252525", strokeWidth: 1 }], L(80 + i * 75, 218, 80 + i * 75, 300)); return k; }
    }
  };
})();
