/* STROHM.ENERGY — News / Knowledge / References content system
   Structured tagging model + per-brand taxonomies + realistic placeholder generator.
   Scales to thousands of items: pages read via getContent()/getArchive(), never hard-coded lists. */
(function () {
  // ---- Content-type vocabularies (spec §6) ----
  const TYPES = {
    news: ["Company news", "Product update", "Product launch", "Project update", "Market update", "Certification update", "Regulation update", "R&D update", "Manufacturing update", "Event", "Partnership"],
    knowledge: ["Explainer", "Technical article", "Engineering guide", "Installation guide", "Design guide", "Regulation guide", "Comparison", "Checklist", "White paper", "Video", "Webinar", "Calculator", "Download"],
    references: ["Residential case", "Commercial case", "Industrial case", "Agricultural case", "Utility case", "Infrastructure case", "Pilot project", "Demonstration project", "System integration", "International project"],
  };

  const AUDIENCES = ["Homeowner", "Installer", "Engineer", "Architect", "Project developer", "Buyer", "Distributor", "Investor", "Facility manager", "Service technician"];
  const LEVELS = ["Introduction", "Professional", "Advanced", "Engineering"];

  // ---- CTA vocabularies (spec §17) ----
  const CTA = {
    news: ["Read the update", "See what changed", "View the announcement", "Explore the launch"],
    knowledge: ["Read the explanation", "Understand the technology", "View the technical guide", "Download the guide", "Ask an engineer"],
    references: ["View the project", "See the system in use", "Explore the installation", "Request a comparable solution"],
  };

  // ---- Per-brand taxonomies (spec §7) ----
  const TAX = {
    ANDO: {
      label: "Solar panels", accent: "#8b9a3a",
      news: ["New modules", "Product launches", "Cell technology", "Manufacturing", "Testing & certification", "Warranty", "Project modules", "Market developments", "Regulations", "Supply & availability", "R&D", "Events"],
      knowledge: ["Solar cell technology", "N-type technology", "Bifacial modules", "Glass-glass modules", "Module efficiency", "Mechanical loading", "Fire classification", "Flash testing", "EL testing", "IV curves", "Degradation", "Shading", "String design", "Module selection", "Installation", "Warranty & traceability", "Recycling", "Regulations"],
      references: ["Residential roofs", "Commercial roofs", "Industrial roofs", "Façades", "Carports", "Agri-PV", "Ground-mounted solar", "Utility-scale solar", "Special-format modules", "Integrated solar systems"],
    },
    MOX: {
      label: "Structural systems", accent: "#D8392C",
      news: ["New mounting systems", "New product families", "Structural engineering", "Materials & finishes", "Manufacturing", "Static calculations", "Certifications", "Installation developments", "Carports", "Roof systems", "Ground systems", "R&D", "Market updates"],
      knowledge: ["Structural design", "Static calculations", "Wind loads", "Snow loads", "Roof loads", "Aluminium profiles", "Steel components", "Corrosion protection", "Fasteners", "Roof interfaces", "Flat-roof systems", "Pitched-roof systems", "Façade mounting", "Ground mounting", "Carports", "Installation planning", "Engineering files", "Manufacturing", "Logistics", "Standards & compliance"],
      references: ["Residential roofs", "Commercial roofs", "Industrial roofs", "Flat roofs", "Pitched roofs", "Façades", "Carports", "Bikeports", "Pergolas", "Vertical bifacial systems", "Ground-mounted systems", "Special structures", "Large-scale projects"],
    },
    MOEBIUS: {
      label: "Inverters", accent: "#F1931B",
      news: ["New inverters", "Microinverters", "Hybrid inverters", "Commercial inverters", "Firmware updates", "Grid certification", "Monitoring", "Energy management", "Product compatibility", "R&D", "Manufacturing", "Market developments", "Country approvals"],
      knowledge: ["Inverter technology", "MPPT design", "String design", "Microinverters", "Hybrid systems", "Grid interaction", "Commissioning", "Monitoring", "QR & NFC access", "Firmware", "Modbus", "Energy management", "Dynamic tariffs", "Backup power", "Off-grid systems", "Battery integration", "Troubleshooting", "Grid regulations", "Installer configuration"],
      references: ["Residential systems", "Commercial systems", "Industrial systems", "Hybrid systems", "Microinverter systems", "Battery systems", "Backup systems", "Off-grid systems", "Dynamic tariff projects", "Multi-building projects", "Large inverter projects"],
    },
    FLUXX: {
      label: "Battery storage", accent: "#e0947f",
      news: ["New batteries", "Residential storage", "Commercial storage", "Industrial storage", "Cell technology", "Battery management", "Certifications", "Firmware", "Manufacturing", "R&D", "Recycling", "Market developments"],
      knowledge: ["Battery chemistry", "Battery capacity", "Charge & discharge rates", "Depth of discharge", "Cycle life", "Battery management systems", "Thermal management", "Safety", "Installation", "Indoor & outdoor placement", "Backup power", "Self-consumption", "Peak shaving", "Dynamic tariffs", "Commercial storage", "Industrial storage", "Warranty", "Recycling", "Inverter compatibility"],
      references: ["Residential storage", "Commercial storage", "Industrial storage", "Backup systems", "Off-grid systems", "Peak shaving", "Dynamic tariff projects", "EV charging integration", "Solar-plus-storage", "Multi-building systems"],
    },
    SYNQ: {
      label: "Smart metering", accent: "#598F94",
      news: ["Connectivity", "Product integration", "QR & NFC", "Monitoring", "Commissioning", "Cloud services", "Firmware", "New integrations", "Cybersecurity", "R&D", "Installer tools", "Service developments"],
      knowledge: ["Product connectivity", "QR codes", "NFC access", "Digital commissioning", "Product registration", "Warranty activation", "Serial-number tracking", "Factory test records", "Installation documentation", "Remote diagnostics", "Data ownership", "Cybersecurity", "Product traceability", "Service workflows", "ERP integration"],
      references: ["Digital commissioning", "Installer workflows", "Warranty registration", "Remote support", "Connected product systems", "Multi-brand installations", "Service & maintenance", "Product traceability projects"],
    },
    OZZY: {
      label: "Energy switching", accent: "#6DAE2E",
      news: ["Energy management", "New integrations", "Dynamic tariffs", "Grid services", "VPP", "Load control", "Capacity tariffs", "Software updates", "AI developments", "Market regulation", "Utility partnerships", "R&D"],
      knowledge: ["Energy management systems", "Dynamic electricity tariffs", "Time-of-use optimisation", "Self-consumption", "Load shifting", "Peak shaving", "Capacity tariffs", "Solar forecasting", "Consumption forecasting", "Battery control", "EV charging control", "Heat-pump control", "Grid constraints", "Curtailment", "VPP", "Modbus", "Smart meters", "Energy alerts", "System integration"],
      references: ["Residential energy management", "Commercial optimisation", "Dynamic tariff projects", "Battery optimisation", "EV charging integration", "Heat-pump integration", "Peak shaving", "Capacity tariff control", "VPP projects", "Multi-building energy management"],
    },
    NENDO: {
      label: "Heat pumps", accent: "#4E958F",
      news: ["New heat-pump products", "Indoor monobloc systems", "Heating technology", "Cooling technology", "Refrigerants", "Certifications", "Dynamic tariff integration", "Installation developments", "R&D", "Market developments"],
      knowledge: ["Heat-pump technology", "Indoor monobloc systems", "Heating", "Cooling", "Seasonal efficiency", "COP & SCOP", "Gas replacement", "Oil heating replacement", "Installation speed", "Hydraulic integration", "Domestic hot water", "Solar integration", "Battery integration", "Dynamic tariffs", "Off-grid operation", "Noise", "Maintenance", "Regulations"],
      references: ["Residential heating", "Residential cooling", "Renovation projects", "Gas replacement", "Oil heating replacement", "Solar-assisted heating", "Battery-assisted heating", "Dynamic tariff projects", "Off-grid buildings", "Light-commercial projects"],
    },
    OGO: {
      label: "Water systems", accent: "#00A0E3",
      news: ["New storage formats", "Rainwater harvesting", "EMON water control", "Pumps and irrigation", "Sensors and monitoring", "Installation", "Water reuse", "Regulations", "R&D", "Reference projects"],
      knowledge: ["Rainwater collection", "Downpipe diverters", "Overflow routes", "Tank sizing", "Tank level and stored volume", "Water temperature", "Pressure and flow", "Pump control", "Irrigation zones", "Drip irrigation", "Garden hose and wash brush", "Non-potable use", "Car washing", "Cleaning", "Toilet flushing", "Leak detection", "Winter and frost", "NFC, QR and Wi-Fi Mesh", "Maintenance", "Regulations"],
      references: ["Private gardens", "Terraces and patios", "Allotments and vegetable gardens", "Car washing", "Toilet flushing", "Schools and public buildings", "Commercial sites", "Multi-tank systems"],
    },
    TOGU: {
      label: "Electrical connectivity", accent: "#C48723",
      news: ["New cable products", "Cable manufacturing", "Copper markets", "CPR classification", "Fire regulations", "Certifications", "Quality testing", "Connector compatibility", "Project supply", "Logistics", "R&D"],
      knowledge: ["DC solar cable", "AC cable", "Copper conductors", "Insulation materials", "Extrusion", "Cable cross-sections", "Voltage drop", "Current capacity", "Temperature ratings", "UV resistance", "Fire classification", "CPR", "CCA", "ECA", "Hospital requirements", "Public-building requirements", "Cable routing", "Connector installation", "Testing", "Packaging", "Traceability"],
      references: ["Residential solar", "Commercial solar", "Industrial solar", "Hospitals", "Public buildings", "Fire-sensitive projects", "Utility projects", "Large cable supply", "Custom cable projects", "Multi-brand solar systems"],
    },
    XOOM: {
      label: "EV charging", accent: "#8EB15F",
      news: ["Product launches", "Charging technology", "Installation", "Engineering", "Manufacturing", "System integration", "Regulations", "Applications", "Service", "Reference projects"],
      knowledge: ["Charging technology", "AC & DC charging", "Load balancing", "Smart charging", "Dynamic tariffs", "Installation", "System integration", "Grid connection", "Regulations", "Service & maintenance"],
      references: ["Residential charging", "Commercial charging", "Fleet charging", "Public charging", "Solar-integrated charging", "Battery-integrated charging", "Multi-building charging"],
      provisional: true,
    },
    AIRO: {
      label: "Airflow systems", accent: "#0083BB",
      news: ["Product development", "Ventilation", "Indoor air quality", "Energy efficiency", "Controls", "Installation", "Regulations", "Applications", "Completed projects"],
      knowledge: ["Ventilation", "Air movement", "Indoor air quality", "Energy efficiency", "Heating & cooling integration", "Controls", "Installation", "Maintenance", "Regulations"],
      references: ["Residential ventilation", "Commercial ventilation", "Renovation projects", "Air-quality projects", "Integrated climate systems"],
      provisional: true,
    },
    FEU: {
      label: "Radiant heating", accent: "#ED704C",
      news: ["Heating technology", "Thermal performance", "Safety", "Controls", "Installation", "Regulations", "Emissions", "Energy efficiency", "System integration", "Reference projects"],
      knowledge: ["Heating technology", "Thermal performance", "Safety", "Energy source", "Controls", "Installation", "Maintenance", "Regulations", "Emissions", "Energy efficiency", "System integration"],
      references: ["Residential heating", "Commercial heating", "Renovation projects", "Integrated heating systems", "Light-commercial projects"],
      provisional: true,
    },
    CHILL: {
      label: "Integrated infrastructure", accent: "#4F9A8E",
      news: ["Cooling technology", "Thermal management", "Efficiency", "Controls", "Refrigerants", "Installation", "Applications", "Project references"],
      knowledge: ["Cooling technology", "Thermal management", "Efficiency", "Controls", "Installation", "Refrigerants", "Maintenance", "Dynamic tariffs", "Solar integration", "Battery integration"],
      references: ["Commercial cooling", "Public-space infrastructure", "Solar-integrated cooling", "Battery-integrated cooling", "Demonstration projects"],
      provisional: true,
    },
    GLOW: {
      label: "Solar lighting", accent: "#c9bc3f",
      news: ["New lighting products", "Solar lighting", "Battery developments", "LED technology", "Control systems", "Certifications", "Municipal projects", "R&D", "Manufacturing", "Market developments"],
      knowledge: ["Solar street lighting", "LED efficiency", "Light distribution", "Battery autonomy", "Solar charging", "Pole design", "Wind loading", "Lighting calculations", "Motion sensors", "Dimming", "Smart controls", "Installation", "Maintenance", "Public-space standards", "Road lighting", "Security lighting"],
      references: ["Roads", "Paths", "Parks", "Car parks", "Industrial sites", "Residential developments", "Municipal projects", "Remote locations", "Off-grid lighting", "Security lighting"],
    },
    PROP: {
      label: "Wind generation", accent: "#527A83",
      news: ["New products", "Product development", "Technical design", "Engineering", "Installation", "Manufacturing", "Compatibility", "Regulations", "Applications", "Completed projects"],
      knowledge: ["Wind generation technology", "Turbine design", "Technical design", "Engineering", "Installation", "Compatibility", "Regulations", "Applications", "Maintenance"],
      references: ["Residential wind", "Commercial wind", "Hybrid wind-solar", "Off-grid wind", "Demonstration projects"],
      provisional: true,
    },
    MUKI: {
      label: "Plug-in appliances", accent: "#9A3D63",
      news: ["Product development", "New products", "Certifications", "Manufacturing", "Applications"],
      knowledge: ["Getting started", "Compatibility", "Safety", "Installation", "Maintenance"],
      references: ["Residential use", "Small-space use", "Entry-level projects"],
      provisional: true,
    },
    WURK: {
      label: "Installation equipment", accent: "#F2C200",
      news: ["Product development", "New tools", "Certifications", "Manufacturing", "Applications"],
      knowledge: ["Tool selection", "Safety standards", "Calibration", "Maintenance", "Compliance"],
      references: ["Installer tooling", "Fleet equipment", "Certified equipment projects"],
      provisional: true,
    },
    DODO: {
      label: "Asset protection", accent: "#A0642E",
      news: ["Product development", "New products", "Certifications", "Manufacturing", "Applications"],
      knowledge: ["Protection selection", "Installation", "Standards", "Maintenance"],
      references: ["Residential protection", "Commercial protection", "Industrial protection"],
      provisional: true,
    },
    SHELTR: {
      label: "Inverter RoofShelter", accent: "#6E6A8C",
      news: ["Product development", "New products", "Certifications", "Manufacturing", "Applications"],
      knowledge: ["Shelter selection", "Installation", "Weatherproofing", "Maintenance"],
      references: ["Residential shelters", "Commercial shelters", "Industrial shelters"],
      provisional: true,
    },
    EMON: {
      label: "Energy management", accent: "#21AE8F",
      news: ["Platform development", "New integrations", "Certifications", "Firmware", "Applications"],
      knowledge: ["Monitoring", "Commissioning", "Compatibility", "Cybersecurity", "Maintenance"],
      references: ["Residential monitoring", "Commercial monitoring", "Multi-brand installations"],
      provisional: true,
    },
    PARX: {
      label: "Solar parking", accent: "#7A9337",
      news: ["Product development", "Structural engineering", "Certifications", "Manufacturing", "Projects"],
      knowledge: ["Site assessment", "Foundations", "EV charging integration", "Drainage and cabling", "Maintenance"],
      references: ["Residential carports", "Commercial car parks", "Bicycle parking"],
      provisional: true,
    },
    TECTIX: {
      label: "Roof PV mounting", accent: "#4A5B73",
      news: ["Product development", "Structural engineering", "Certifications", "Manufacturing", "Projects"],
      knowledge: ["Roof assessment", "Flat roofs", "Tiled and slate roofs", "Installation", "Maintenance"],
      references: ["Flat roofs", "Pitched roofs"],
      provisional: true,
    },
    PONTIX: {
      label: "Floating PV mounting", accent: "#06768A",
      news: ["Product development", "Structural engineering", "Certifications", "Manufacturing", "Projects"],
      knowledge: ["Site assessment", "Mooring and anchoring", "Water-level movement", "Installation", "Maintenance"],
      references: ["Reservoirs", "Industrial basins", "Quarry lakes"],
      provisional: true,
    },
    TERRIX: {
      label: "Utility PV mounting", accent: "#6B755F",
      news: ["Product development", "Structural engineering", "Certifications", "Manufacturing", "Projects"],
      knowledge: ["Site assessment", "Foundations", "Structural design", "Installation", "Maintenance"],
      references: ["Fixed-tilt parks", "Tracker parks"],
      provisional: true,
    },
    AGRIX: {
      label: "Agri-PV structures", accent: "#6B8E4E",
      news: ["Product development", "Structural engineering", "Certifications", "Manufacturing", "Applications"],
      knowledge: ["Structural design", "Crop compatibility", "Installation", "Maintenance", "Regulations"],
      references: ["Arable", "Orchards", "Livestock", "Berries", "Tropical crops"],
      provisional: true,
    },
    LINA: {
      label: "Vertical rooftop solar", accent: "#4F4F4E",
      news: ["Product development", "Certifications", "Manufacturing", "Applications"],
      knowledge: ["Roof suitability", "Installation", "Maintenance", "Compatibility"],
      references: ["Flat commercial roofs", "Industrial roofs", "Warehouse roofs"],
      provisional: true,
    },
    WEBSHOP: {
      label: "B2B webshop", accent: "#4F4F4E",
      news: ["Webshop launch", "Product lines", "Stock routes", "Logistics", "Country availability", "Pricing & terms", "Platform updates", "Pre-order windows", "Certifications", "Supply network", "Partnerships", "Account access"],
      references: ["Stock Partner reorders", "Multi-brand orders", "Manufacturing Order projects"],
      knowledge: ["Four ways to order", "EU Stock route", "Factory Stock route", "Floating Stock route", "Manufacturing Order route", "Logistics & delivery", "Lead times", "VAT & export", "Warranty & RMA", "Technical documents", "Account access levels", "Registration & review", "Pre-order requests", "Reordering & order history", "Payment & invoicing", "Stock Partner programme", "Serial & QR tracking", "Returns handling"],
    },
    STROHM: {
      label: "Company", accent: "#4F4F4E", company: true,
      news: ["Company developments", "International expansion", "Product launches", "Partnerships", "Major projects", "Trade fairs & events", "Certifications", "Manufacturing", "Logistics", "Market updates", "Regulatory developments", "Company milestones"],
      knowledge: ["Product design", "System design", "Industrial design", "Mechanical engineering", "Electrical engineering", "Structural engineering", "Product development", "R&D", "Prototyping", "Testing", "Certification", "Production", "Quality control", "Sourcing", "Logistics", "Project engineering", "Technical file creation", "Installation support", "Warranty registration", "QR & NFC documentation", "ERP project follow-up", "Service & traceability", "Multi-brand integration"],
      references: ["Residential projects", "Commercial projects", "Industrial projects", "Agricultural projects", "Utility projects", "Infrastructure projects", "Pilot projects", "Demonstration projects", "Product integrations", "Complete multi-brand systems"],
    },
  };

  // ---- Systems (DEPTH-236): sample items only, marked SAMPLE on the cards
  Object.assign(TAX, {
    TRIBE: {
      label: "Distributed energy systems", accent: "#4F4F4E", system: true,
      news: ["Programme updates","Partner news","Events","Regulation"],
      knowledge: ["How TRIBE works","Communities","Municipalities","Energy systems"],
      references: ["Community projects","Municipal projects","Pilot projects","Distributed systems"],
    },
    KERN: {
      label: "Operational control", accent: "#4F4F4E", system: true,
      news: ["Product updates","Release notes","Integrations","Events"],
      knowledge: ["Quoting","Project handling","Documents","Operations"],
      references: ["Installer case","Multi-site rollout","Pilot","Integration"],
    },
    PUSH: {
      label: "Installer growth", accent: "#4F4F4E", system: true,
      news: ["Network updates","Categories","Events","Regulation"],
      knowledge: ["Lead assignment","Joining the network","Installation categories","Quality standards"],
      references: ["Installer case","Regional network","Pilot","Category launch"],
    },
    PACT: {
      label: "Group purchasing", accent: "#4F4F4E", system: true,
      news: ["Campaign updates","Supplier news","Events","Regulation"],
      knowledge: ["Group purchasing","Joining a group","Professional buyers","Municipalities"],
      references: ["Community campaign","Municipal campaign","Pilot","Installer case"],
    },
    DEPOT: {
      label: "Supply", accent: "#4F4F4E", system: true,
      news: ["Programme updates","Product availability","Logistics","Events"],
      knowledge: ["Stock Partner programme","ERP and API","Logistics","Requirements"],
      references: ["Stock partner case","Regional partner","Pilot","Distributor case"],
    },
    KALK: {
      label: "Energy calculation", accent: "#4F4F4E", system: true,
      news: ["Platform updates","New tools","Events","Regulation"],
      knowledge: ["KALK PLAN","Storage sizing","Energy calculation","Comparing options"],
      references: ["Planned project","Installer case","Pilot","Comparison case"],
    },
  });

  // ---- Product-page routing hints: map a page to its brand + optional family ----
  const PAGE_HREF = {
    ANDO: "ANDO - PRODUCT - Overview - EN.dc.html", MOX: "MOX - PRODUCT - Overview - EN.dc.html", MOEBIUS: "MOEBIUS - PRODUCT - Overview - EN.dc.html",
    SYNQ: "SYNQ - PRODUCT - Overview - EN.dc.html", OZZY: "OZZY - PRODUCT - Overview - EN.dc.html", NENDO: "NENDO - PRODUCT - Overview - EN.dc.html",
    TOGU: "TOGU - PRODUCT - Overview - EN.dc.html", WEBSHOP: "WEBSHOP - SITE - Catalogue - EN.dc.html",
    FLUXX: "FLUXX - PRODUCT - Overview - EN.dc.html", OGO: "OGO - PRODUCT - Overview - EN.dc.html", XOOM: "XOOM - PRODUCT - Overview - EN.dc.html",
    AIRO: "AIRO - PRODUCT - Overview - EN.dc.html", FEU: "FEU - PRODUCT - Overview - EN.dc.html", CHILL: "CHILL - PRODUCT - Overview - EN.dc.html",
    GLOW: "GLOW - PRODUCT - Overview - EN.dc.html", PROP: "PROP - PRODUCT - Overview - EN.dc.html",
    MUKI: "MUKI - PRODUCT - Overview - EN.dc.html", WURK: "WURK - PRODUCT - Overview - EN.dc.html", DODO: "DODO - PRODUCT - Overview - EN.dc.html",
    SHELTR: "SHELTR - PRODUCT - Overview - EN.dc.html", EMON: "EMON - SYSTEM - Overview - EN.dc.html", AGRIX: "AGRIX - PRODUCT - Overview - EN.dc.html", TERRIX: "TERRIX - PRODUCT - Overview - EN.dc.html", PONTIX: "PONTIX - PRODUCT - Overview - EN.dc.html", TECTIX: "TECTIX - PRODUCT - Overview - EN.dc.html", PARX: "PARX - PRODUCT - Overview - EN.dc.html",
    LINA: "LINA - PRODUCT - Overview - EN.dc.html",
    TRIBE: "TRIBE - SYSTEM - Overview - EN.dc.html",
    KERN: "KERN - SYSTEM - Overview - EN.dc.html",
    PUSH: "PUSH - SYSTEM - Overview - EN.dc.html",
    PACT: "PACT - SYSTEM - Overview - EN.dc.html",
    DEPOT: "DEPOT - SYSTEM - Overview - EN.dc.html",
    KALK: "KALK - SYSTEM - Overview - EN.dc.html",
  };

  // ---- Placeholder generators (spec §19: realistic, never lorem) ----
  const NEWS_TITLE = [
    (b, t) => `${b} expands its ${t.toLowerCase()} programme`,
    (b, t) => `New ${t.toLowerCase()} announced across the ${b} range`,
    (b, t) => `${t}: what changed this quarter`,
    (b, t) => `${b} reaches a milestone in ${t.toLowerCase()}`,
    (b, t) => `Inside the latest ${t.toLowerCase()} at ${b}`,
  ];
  const KNOW_TITLE = [
    (b, t) => `Understanding ${t.toLowerCase()}`,
    (b, t) => `${t}: a practical guide`,
    (b, t) => `How ${t.toLowerCase()} affects your system`,
    (b, t) => `${t}, explained for installers and engineers`,
    (b, t) => `Getting ${t.toLowerCase()} right the first time`,
  ];
  const REF_TITLE = [
    (b, t) => `${t}: a documented ${b} installation`,
    (b, t) => `${t} — measured, monitored and traceable`,
    (b, t) => `A ${t.toLowerCase()} project built on ${b}`,
    (b, t) => `${t} in practice`,
  ];
  const NEWS_SUM = (b, t) => `A company-level update on ${t.toLowerCase()} — what it means for ${b} customers, installers and partners. Content placeholder for editorial completion.`;
  const KNOW_SUM = (b, t) => `A functional explanation of ${t.toLowerCase()} and how it is engineered, specified and installed. Content placeholder for editorial completion.`;
  const REF_SUM = (b, t) => `A ${t.toLowerCase()} reference with project data, system configuration and measured outcome. Content placeholder for editorial completion.`;
  const IMG_DIR = {
    news: (b, t) => `${b} ${t} · restrained editorial photo, V3-R3 casting, logo-colour wash, product 5–15%`,
    knowledge: (b, t) => `${b} ${t} · technical diagram or engineer-in-context, calm overlay, one colour-matched cue`,
    references: (b, t) => `${b} ${t} · installed system in real context, blurred secondary figure, logo-colour accent`,
  };

  function pick(arr, i) { return arr[i % arr.length]; }
  function slug(s) { return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  // Build a deterministic set of items per brand+section from its taxonomy.
  function buildItems() {
    const items = [];
    const now = Date.UTC(2026, 6, 10); // 2026-07-10
    const DAY = 86400000;
    Object.keys(TAX).forEach((brand) => {
      const tx = TAX[brand];
      // News and references: only verified items are published (decision Q29, 24 Sep 2026). Add them to VERIFIED below.
      // Provisional brands (no confirmed content yet) get no generated knowledge either — designed empty state instead of fabricated cards.
      if (tx.system) {
        ["news", "knowledge", "references"].forEach((section) => {
          const tg = section === "news" ? NEWS_TITLE : section === "knowledge" ? KNOW_TITLE : REF_TITLE;
          const sg = section === "news" ? NEWS_SUM : section === "knowledge" ? KNOW_SUM : REF_SUM;
          (tx[section] || []).forEach((topic, i) => {
            items.push({ id: `${brand.toLowerCase()}-${section}-${slug(topic)}-${i}`, brand, section, topic, type: pick(TYPES[section], i), title: pick(tg, i)(brand, topic), summary: sg(brand, topic), date: "", sample: true, imageDir: IMG_DIR[section](brand, topic), audience: null, level: null, application: null, cta: pick(CTA[section], i), provisional: false, featured: i === 0, href: PAGE_HREF[brand] });
          });
        });
        return;
      }
      if (tx.provisional) return;
      ["knowledge"].forEach((section) => {
        const topics = tx[section] || [];
        const titleGen = section === "news" ? NEWS_TITLE : section === "knowledge" ? KNOW_TITLE : REF_TITLE;
        const sumGen = section === "news" ? NEWS_SUM : section === "knowledge" ? KNOW_SUM : REF_SUM;
        topics.forEach((topic, i) => {
          const type = pick(TYPES[section], i);
          const title = pick(titleGen, i)(brand, topic);
          const date = new Date(now - (i * 9 + section.length) * DAY).toISOString().slice(0, 10);
          const id = `${brand.toLowerCase()}-${section}-${slug(topic)}-${i}`;
          items.push({
            id,
            brand, section, topic, type, title,
            summary: sumGen(brand, topic),
            date,
            imageDir: IMG_DIR[section](brand, topic),
            audience: section === "knowledge" ? pick(AUDIENCES, i + 1) : null,
            level: section === "knowledge" ? pick(LEVELS, i) : null,
            application: section === "references" ? topic : null,
            cta: pick(CTA[section], i),
            provisional: !!tx.provisional,
            featured: i === 0,
            href: section === "knowledge" ? `KnowledgeArticle.dc.html#${id}` : "#",
          });
        });
      });
    });
    return items.concat(VERIFIED);
  }

  // Verified news/references: { id, brand, section:"news"|"references", topic, type, title, summary, date:"YYYY-MM-DD", imageDir, application, cta, href }
  const VERIFIED = [];

  const ITEMS = buildItems();
  /* DEPTH-1250: one Knowledge source per brand. ANDO Knowledge = its own 77 articles in 7 topics (incl. former FAQ items); the strip on every ANDO page and the Knowledge page read the same list. */
  const OWN_KNOWLEDGE = (function () {
    const GROUPS = [
      { key: "cell", title: "Cells & module fundamentals", articles: [
        "What is a photovoltaic cell?", "Monocrystalline versus polycrystalline", "What is PERC?", "What is TOPCon?", "What is heterojunction (HJT)?", "What is a half-cell module?", "What are busbars and multi-busbar?", "What is a bifacial module?", "Glass-glass versus glass-backsheet", "What does a module laminate contain?", "What is a junction box?", "Why cell efficiency is not module efficiency" ] },
      { key: "performance", title: "Performance & ratings", articles: [
        "What is Wp (watt-peak)?", "What are STC and NOCT?", "What is the temperature coefficient?", "What is low-light performance?", "What is the bifacial gain factor?", "What is the incidence-angle modifier (IAM)?", "What is module efficiency?", "How shading affects output", "What is a power-tolerance range?", "Reading an I-V curve", "What is fill factor?" ] },
      { key: "degradation", title: "Durability & degradation", articles: [
        "What is first-year degradation?", "What is the annual degradation rate?", "What is LID and LeTID?", "What is PID (potential-induced degradation)?", "What is microcracking?", "What is hot-spot formation?", "How hail and load ratings work", "What is a damp-heat test?", "What is a thermal-cycling test?", "Expected module lifetime", "Why glass-glass ages more slowly" ] },
      { key: "install", title: "Installation & mounting", articles: [
        "Portrait versus landscape mounting", "Clamping zones and load limits", "Recommended module clearances", "How bifacial modules need ground reflection", "Grounding and bonding a module frame", "String length and voltage limits", "Connector compatibility and mating", "Cable management on the array", "Torque and clamp selection", "Rooftop versus ground-mount considerations", "Avoiding module mismatch" ] },
      { key: "electrical", title: "Electrical & system design", articles: [
        "Open-circuit voltage and temperature", "Short-circuit current explained", "Maximum system voltage (1000 / 1500 V)", "How modules form strings", "MPPT matching for a module string", "DC oversizing with modules", "Series versus parallel strings", "Reverse-current and string fusing", "Why module orientation affects MPPT", "Bypass diodes explained" ] },
      { key: "compliance", title: "Standards & certification", articles: [
        "IEC 61215 explained", "IEC 61730 explained", "What is a CE declaration?", "Fire classification for modules", "Salt-mist and ammonia resistance", "What is a factory (BNEF) tier?", "Carbon-footprint declarations", "What certificates ship with a module?", "Ecodesign and energy labelling" ] },
      { key: "service", title: "Records, warranty & service", articles: [
        "Product warranty versus performance warranty", "What a performance-warranty curve means", "How QR and NFC identify a module", "What is stored in a module passport?", "Filing a warranty claim", "Replacing a single module in a string", "Matching a replacement module", "Recycling an end-of-life module", "Transferring records on sale of a building" ] },
    ];
    const TITLES = { cell: "Cells and module fundamentals", performance: "Performance and ratings", degradation: "Durability and degradation", install: "Installation and mounting", electrical: "Electrical and system design", compliance: "Standards and certification", service: "Records, warranty and service" };
    const INTROS = { cell: "How a solar cell and a module are built, and the cell technologies in use.", performance: "How module output is rated and what affects it.", degradation: "How modules age, the tests behind the ratings and the expected lifetime.", install: "Mounting, clearances, load limits and cabling on the array.", electrical: "Voltage, current and string design for a module array.", compliance: "The standards, declarations and certificates that apply to a module.", service: "Warranty, records, identification and service over the life of a module." };
    const NOTE = { "Product warranty versus performance warranty": "Also answers: what is the difference between product warranty and power warranty?", "How QR and NFC identify a module": "Also answers: how does the QR registration system work?", "Rooftop versus ground-mount considerations": "Also answers: are ANDO panels suitable for flat roofs and ground-mounted arrays?" };
    const ADD = { service: [{ title: "Mounting position and the warranty", note: "Do position and orientation on the roof affect the warranty?" }, { title: "Support when the installer is not reachable", note: "What to do if the installer cannot be reached after installation. Contact a specialist." }, { title: "Monitoring data in EMON", note: "What monitoring data EMON shows for an ANDO array." }], compliance: [{ title: "PFAS in module materials", note: "Are ANDO panels PFAS-free? Answer TO CONFIRM." }] };
    const SHOP = "ANDO - WEBSHOP - Shop - EN.dc.html", EXPERT = "ANDO - SUPPORT - Talk to an Expert - EN.dc.html";
    const REL = { install: [{ label: "Plan your roof", href: "ANDO - PRODUCT - Roof Planner - EN.dc.html" }], compliance: [{ label: "Certificates and declarations in the webshop", href: SHOP }], service: [{ label: "Warranty documents in the webshop", href: SHOP }, { label: "ANDO with EMON", href: "ANDO - PRODUCT - ANDO with EMON - EN.dc.html" }, { label: "Contact a specialist", href: EXPERT }] };
    
    return { ANDO: GROUPS.map((g) => ({ topic: TITLES[g.key] || g.title, articles: g.articles.map((a) => (NOTE[a] ? { title: a, note: NOTE[a] } : { title: a })).concat(ADD[g.key] || []) })) };
  })();
  /* DEPTH-1251 (user Knowledge decisions 1–5): 6 shared subjects, 4 formats. Generated items = SAMPLE placeholders spread over subjects and formats; calculators, downloads and FAQ items leave Knowledge. Brands with real titles (ANDO) re-sorted into the subjects; warranty/records/service articles leave Knowledge (kept in STROHM_CONTENT.ownership for Ownership and support). */
  const SUBJECTS = ["Technology", "Applications", "Selection guides", "System design and integration", "Engineering and manufacturing", "Comparisons"];
  TYPES.knowledge = ["Article", "Guide", "Video", "Webinar"];
  const FMT = (t) => (/guide|checklist/i.test(t) ? "Guide" : t === "Video" ? "Video" : t === "Webinar" ? "Webinar" : "Article");
  const SAMPLE_T = { "Technology": (b) => "How " + b + " technology works", "Applications": (b) => "Where " + b + " is used", "Selection guides": (b) => "Choosing the right " + b + " product", "System design and integration": (b) => b + " in a connected system", "Engineering and manufacturing": (b) => "How " + b + " is engineered and tested", "Comparisons": (b) => b + " configurations compared" };
  const kidx = {};
  for (let i = ITEMS.length - 1; i >= 0; i--) { const x = ITEMS[i]; if (x.section !== "knowledge") continue; if (/^(calculator|download|faq|white paper)$/i.test(x.type)) { ITEMS.splice(i, 1); continue; } }
  ITEMS.forEach((x) => { if (x.section !== "knowledge" || OWN_KNOWLEDGE[x.brand]) return; const n = (kidx[x.brand] = (kidx[x.brand] || 0) + 1) - 1; const s = SUBJECTS[n % 6]; x.topic = s; x.type = FMT(x.type); x.title = SAMPLE_T[s](x.brand === "STROHM" ? "STRØHM.ENERGY" : x.brand) + (n >= 6 ? " (" + (Math.floor(n / 6) + 1) + ")" : ""); x.summary = "Sample. " + s + " article for " + (x.brand === "STROHM" ? "STRØHM.ENERGY" : x.brand) + ", to be written."; x.sample = true; });
  Object.keys(TAX).forEach((b) => { if (TAX[b]) TAX[b].knowledge = SUBJECTS.slice(); });
  const ANDO_MAP = { cell: "Technology", performance: "Technology", degradation: "Technology", compliance: "Technology", install: "System design and integration", electrical: "System design and integration", service: null };
  const OWNERSHIP = {};
  Object.keys(OWN_KNOWLEDGE).forEach((b) => {
    for (let i = ITEMS.length - 1; i >= 0; i--) if (ITEMS[i].brand === b && ITEMS[i].section === "knowledge") ITEMS.splice(i, 1);
    const keys = ["cell", "performance", "degradation", "install", "electrical", "compliance", "service"];
    const used = {};
    OWN_KNOWLEDGE[b].forEach((c, ci) => c.articles.forEach((a, ai) => {
      let subj = ANDO_MAP[keys[ci]];
      if (subj !== null && /versus/i.test(a.title)) subj = "Comparisons";
      if (/EMON/.test(a.title)) subj = "System design and integration"; /* EMON monitoring stays in Knowledge (system integration) */
      if (subj === null) { (OWNERSHIP[b] = OWNERSHIP[b] || []).push(a); return; }
      used[subj] = 1;
      ITEMS.push({ id: b.toLowerCase() + "-k-" + ci + "-" + ai, brand: b, section: "knowledge", topic: subj, type: keys[ci] === "install" ? "Guide" : "Article", title: a.title, summary: a.note || "Content placeholder for editorial completion.", date: "", imageDir: b + " " + subj + " · " + a.title + " · technical diagram or engineer-in-context", cta: "Read the explanation", href: a.href || "#" });
    }));
    SUBJECTS.filter((s) => !used[s]).forEach((s, i) => ITEMS.push({ id: b.toLowerCase() + "-ks-" + i, brand: b, section: "knowledge", topic: s, type: "Article", title: SAMPLE_T[s](b), summary: "Sample. " + s + " article for " + b + ", to be written.", date: "", sample: true, imageDir: b + " " + s + " · technical diagram or engineer-in-context", cta: "Read the explanation", href: "#" }));
  });

  // ---- Query helpers ----
  // Company scope: "ALL" and "STROHM" both resolve to company-level content only (never product/project items).
  function getContent(brand, section, opts) {
    opts = opts || {};
    const target = (!brand || brand === "ALL") ? "STROHM" : brand;
    let pool = ITEMS.filter((x) => x.section === section && x.brand === target);
    if (opts.topic && opts.topic !== "All") pool = pool.filter((x) => x.topic === opts.topic);
    if (opts.type && opts.type !== "All") pool = pool.filter((x) => x.type === opts.type);
    pool = pool.slice().sort((a, b) => ((a.sample ? 1 : 0) - (b.sample ? 1 : 0)) || (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)); /* DEPTH-1251b: samples last, stable */
    if (opts.limit) pool = pool.slice(0, opts.limit);
    return pool;
  }

  function getArchive(brand, section) {
    return { items: getContent(brand, section), taxonomy: (TAX[brand] || {})[section] || [], types: TYPES[section] };
  }

  /* DEPTH-1252: former FAQ pages moved into Knowledge (AGRIX, NENDO). Question = descriptive title, answer kept as the card text. Map: _MIGRATION_FAQ_2026-10-31.md. SAMPLE cards removed in subjects that now have real articles. */
  const FAQ_KNOWLEDGE = {"AGRIX":[["Selection guides","Project size and suitability","Projects may start around 50–100 kWp, but suitability depends on value, site and complexity."],["Applications","Crop suitability under Agri-PV","No. The selector screens crops, but local agronomic validation remains necessary."],["System design and integration","How TWIG geometry is determined","Standard components and height classes are used, but final geometry follows crop, machinery, soil and loads."],["System design and integration","HEDGE row spacing and machinery","Possibly, but the distance follows the machinery and crop plan rather than a standard marketing number."],["Technology","Rain-through, sealed and drained canopy zones","It can combine rain-through, sealed and drained zones across one project."],["Applications","Using collected rainwater for livestock","Only after suitable treatment, protected storage, testing and local approval."],["System design and integration","Adding wind turbines to an AGRIX structure","Only after project-specific vibration, fatigue, load, lightning and maintenance engineering."],["System design and integration","What EMON records for an AGRIX project","Layout, modules, strings, serials, warranty, commissioning, production, faults, replacements and project documents."],["Selection guides","From project brief to engineering meeting","The project brief is completed first, then the relevant engineering meeting is scheduled."]],"NENDO":[["Technology","How a heat pump boiler works","A heat pump boiler is a water heating system that transfers heat from a surrounding energy source, commonly air, into domestic hot water. Electricity powers the heat pump cycle rather than supplying all heat directly through electrical resistance."],["Comparisons","Heat pump boiler versus electric boiler","No. Both use electricity, but the energy conversion process is different. A resistance boiler converts electricity directly into heat. A heat pump uses electricity to transfer additional heat from the environment."],["Comparisons","NENDO and air conditioning","No. NENDO is designed to produce domestic hot water. However, the refrigeration cycle uses principles also found in refrigerators, air conditioners and heat pumps."],["System design and integration","Operating NENDO without solar panels","Yes. PV is optional."],["System design and integration","Standalone operation without EMON","Depending on the selected NENDO model, standalone operation is possible. EMON provides the advanced energy management functions."],["Applications","Storing solar surplus as hot water","Solar electricity can be used to operate NENDO. This allows surplus solar energy to be converted into thermal energy and stored as hot water."],["System design and integration","Scheduling on dynamic electricity tariffs","With appropriate EMON tariff integration, NENDO operation can be scheduled toward favourable electricity price periods while maintaining the configured hot water reserve."],["Comparisons","NENDO alongside a FLUXX battery","No. They store different forms of energy. FLUXX stores electricity. NENDO stores thermal energy. Yes. EMON can coordinate both resources."],["Comparisons","Running costs compared with gas","Not necessarily. Energy prices and system performance differ between buildings and markets. That is why NENDO provides a calculator rather than a universal claim."],["System design and integration","When NENDO runs on low-price electricity","Not necessarily. There must be useful thermal storage capacity and the system must maintain comfort and operating limits."],["Technology","Local control and internet access","This depends on the selected control architecture and EMON functions. Core safety and product operation must not depend on cloud availability where local product control is required."],["Technology","Setting the hot water temperature","Yes, within the operating range supported by the selected NENDO configuration."],["Technology","Temporary boost for extra hot water","A boost function can be provided where supported by the NENDO product configuration."],["Applications","Away mode during holidays","Away mode can reduce unnecessary heating while maintaining the required protection strategy."]]};
  Object.keys(FAQ_KNOWLEDGE).forEach((b) => {
    const subs = {}; FAQ_KNOWLEDGE[b].forEach((x) => { subs[x[0]] = 1; });
    for (let i = ITEMS.length - 1; i >= 0; i--) { const x = ITEMS[i]; if (x.brand === b && x.section === "knowledge" && x.sample && subs[x.topic]) ITEMS.splice(i, 1); }
    FAQ_KNOWLEDGE[b].forEach((x, i) => ITEMS.push({ id: b.toLowerCase() + "-kf-" + i, brand: b, section: "knowledge", topic: x[0], type: "Article", title: x[1], summary: x[2], date: "", imageDir: b + " " + x[0] + " · " + x[1] + " · technical diagram or engineer-in-context", cta: "Read the explanation", href: "#" }));
  });
  window.STROHM_CONTENT = {
    types: TYPES, audiences: AUDIENCES, levels: LEVELS, cta: CTA,
    taxonomy: TAX, pageHref: PAGE_HREF, items: ITEMS, ownership: OWNERSHIP, subjects: SUBJECTS,
    getContent, getArchive,
    brandLabel: (b) => (TAX[b] ? TAX[b].label : ""),
    brandAccent: (b) => (TAX[b] ? TAX[b].accent : "#4F4F4E"),
    archiveHref: (b, section) => { const B = ({strohm:"STROHM.ENERGY",webshop:"WEBSHOP"})[(b || "strohm").toLowerCase()] || (b || "strohm").toUpperCase(); const S = section.charAt(0).toUpperCase() + section.slice(1); const ARC = {}; /* DEPTH-1248: archives merged into the main Knowledge/News/References pages */ return B + " - CONTENT - " + S + (ARC[B + " " + section] ? " Archive" : "") + " - EN.dc.html"; } /* DEPTH-353 */,
  };
})();
