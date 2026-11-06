/* STROHM.ENERGY — PROJECTS content model (single source record, filtered views).
   One dataset drives: category landings, the 6 sections, Find a Project Type, Find Project Partners and Project Locations.
   Content status is explicit and never hidden: Completed Project / Application Example / Concept Project. */
(function () {
  const CATEGORIES = [
    { key: "residential", label: "Residential", subtitle: "Complete energy systems for individual homes, apartment buildings and residential communities." },
    { key: "commercial", label: "Commercial", subtitle: "Engineered energy systems for businesses, property portfolios, agriculture and industry." },
    { key: "utility", label: "Utility & Infrastructure", subtitle: "Large-scale energy and infrastructure projects developed for performance, durability and control." },
  ];

  const SECTIONS = [
    { key: "proven", label: "Proven in Practice", desc: "Completed projects, application examples and documented ways to use our products and systems." },
    { key: "type", label: "Find a Project Type", desc: "Find the application that matches your building, site or energy requirement." },
    { key: "develop", label: "Develop a Project", desc: "Move from an initial opportunity to a technically defined project." },
    { key: "engineering", label: "Project Engineering", desc: "Turn products and systems into coordinated, buildable projects." },
    { key: "partners", label: "Find Project Partners", desc: "Installers, engineering partners, distributors and specialists near you." },
    { key: "locations", label: "Project Locations", desc: "Where STRØHM.ENERGY products and systems are installed or available." },
  ];

  const STATUS = ["Completed Project", "Application Example", "Concept Project"];

  // Applications per category (spec §6)
  const APPLICATIONS = {
    residential: ["Detached homes", "Apartment buildings", "Residential communities", "Carports", "Home batteries", "Heat-pump systems", "EV charging", "Off-grid homes"],
    commercial: ["Offices", "Retail", "Hotels", "Restaurants", "Farms", "Warehouses", "Factories", "Commercial parking", "Property portfolios"],
    utility: ["Solar fields", "Agri-PV", "Large carports", "Energy hubs", "Public infrastructure", "Transport infrastructure", "Industrial energy sites", "Distributed energy assets"],
  };

  const PARTNER_TYPES = ["Installers", "Engineering partners", "Architects", "Project developers", "Distributors", "Resellers", "Financing partners", "Service partners"];

  const SCALES = {
    residential: ["Single home", "Multi-dwelling", "Community"],
    commercial: ["Single building", "Multi-site", "Portfolio"],
    utility: ["Sub-MW", "1–10 MW", "Above 10 MW"],
  };

  const COUNTRIES = ["Germany", "Netherlands", "France", "Poland", "Italy", "Spain", "Belgium"];
  const BRANDS = ["ANDO", "MOX", "MOEBIUS", "FLUXX", "SYNQ", "OZZY", "NENDO", "TOGU"];

  function pick(a, i) { return a[i % a.length]; }
  function slug(s) { return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  const TITLE = {
    "Completed Project": (app, cat) => `${app}: a completed ${cat} installation`,
    "Application Example": (app, cat) => `${app} — a documented ${cat} application`,
    "Concept Project": (app, cat) => `${app}: a ${cat} concept in development`,
  };
  const SUMMARY = {
    "Completed Project": (app) => `A completed and commissioned installation using ${app.toLowerCase()}, with measured results and full documentation. Placeholder for editorial completion.`,
    "Application Example": (app) => `A documented way to apply STRØHM.ENERGY products and systems to ${app.toLowerCase()}. Not a specific installed project. Placeholder for editorial completion.`,
    "Concept Project": (app) => `A proposal or concept for ${app.toLowerCase()}, shown as a development direction — not an installed system. Placeholder for editorial completion.`,
  };
  const STATUS_COLOUR = { "Completed Project": "#1F8A5B", "Application Example": "#B07818", "Concept Project": "#5B6B8A" };

  function buildItems() {
    const items = [];
    const now = Date.UTC(2026, 6, 10);
    const DAY = 86400000;
    CATEGORIES.forEach((cat) => {
      const apps = APPLICATIONS[cat.key];
      apps.forEach((app, i) => {
        // one of each status per application → guarantees Proven in Practice shows all three types
        STATUS.forEach((status, s) => {
          const idx = i * 3 + s;
          items.push({
            id: `${cat.key}-${slug(app)}-${slug(status)}`,
            category: cat.key,
            status,
            statusColour: STATUS_COLOUR[status],
            application: app,
            title: TITLE[status](app, cat.label.toLowerCase()),
            summary: SUMMARY[status](app),
            country: pick(COUNTRIES, idx),
            region: pick(COUNTRIES, idx) + " region",
            brand: pick(BRANDS, idx),
            system: "EMON",
            scale: pick(SCALES[cat.key], i),
            capacity: cat.key === "utility" ? (5 + (i * 3) % 40) + " MWp" : cat.key === "commercial" ? (60 + (i * 40) % 400) + " kWp" : (6 + (i * 2) % 18) + " kWp",
            date: new Date(now - idx * 11 * DAY).toISOString().slice(0, 10),
            featured: s === 0 && i === 0,
            imageDir: `${cat.label} · ${app} · ${status} · V3-R3 restrained editorial, real context, logo-colour cue`,
            href: "STROHM.ENERGY - PROJECT - Case Study - EN.dc.html",
            // Case-study detail fields (brochure-style: badge, client, scope, schedule). Left unset in this
            // generated placeholder set — filled in per real project when STROHM supplies completed case studies.
            client: null, mountingSystem: null, inverters: null, modules: null, timeSchedule: null,
          });
        });
      });
    });
    return items;
  }

  // Partner directory (filtered view)
  function buildPartners() {
    const list = [];
    CATEGORIES.forEach((cat) => {
      PARTNER_TYPES.slice(0, 6).forEach((type, i) => {
        list.push({
          id: `${cat.key}-${slug(type)}-${i}`,
          category: cat.key,
          type,
          name: "[PARTNER PROFILE REQUIRED FROM STRØHM.ENERGY]",
          country: pick(COUNTRIES, i),
          coverage: pick(COUNTRIES, i) + " and neighbouring regions",
          brands: [pick(BRANDS, i), pick(BRANDS, i + 3)],
          services: type,
          status: i % 2 === 0 ? "Certified partner" : "Approved partner",
        });
      });
    });
    return list;
  }

  const ITEMS = buildItems();
  const PARTNERS = buildPartners();

  function getProjects(category, opts) {
    opts = opts || {};
    let pool = ITEMS.slice();
    if (category && category !== "all") pool = pool.filter((x) => x.category === category);
    if (opts.status && opts.status !== "All") pool = pool.filter((x) => x.status === opts.status);
    if (opts.application && opts.application !== "All") pool = pool.filter((x) => x.application === opts.application);
    if (opts.country && opts.country !== "All") pool = pool.filter((x) => x.country === opts.country);
    if (opts.brand && opts.brand !== "All") pool = pool.filter((x) => x.brand === opts.brand);
    pool.sort((a, b) => (a.date < b.date ? 1 : -1));
    if (opts.limit) pool = pool.slice(0, opts.limit);
    return pool;
  }

  function getPartners(category, opts) {
    opts = opts || {};
    let pool = PARTNERS.slice();
    if (category && category !== "all") pool = pool.filter((x) => x.category === category);
    if (opts.type && opts.type !== "All") pool = pool.filter((x) => x.type === opts.type);
    if (opts.country && opts.country !== "All") pool = pool.filter((x) => x.country === opts.country);
    return pool;
  }

  window.STROHM_PROJECTS = {
    categories: CATEGORIES, sections: SECTIONS, statuses: STATUS, statusColour: STATUS_COLOUR,
    applications: APPLICATIONS, partnerTypes: PARTNER_TYPES, scales: SCALES, countries: COUNTRIES, brands: BRANDS,
    items: ITEMS, partners: PARTNERS, getProjects, getPartners,
    category: (k) => CATEGORIES.find((c) => c.key === k) || CATEGORIES[0],
    pageHref: (k) => "STROHM.ENERGY - PROJECT - All Projects - EN.dc.html#" + k,
  };
})();
