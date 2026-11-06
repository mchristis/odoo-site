// Project request method per brand (DEPTH-461, from _project_method_qa.md, user answers 19 Oct 2026).
(function () {
  const INSTALL_EPC = "STRØHM.ENERGY engineers and manufactures. Installation is carried out by an EPC partner we assign to your project.";
  const RECEIVE = ["Structural calculation", "Bill of materials (BOM)", "Lead time", "EMON energy forecast", "Price through the EPC partner", "Financing on request"];
  const CONTACT_ROLES = ["Owner or client", "EPC or installer", "Architect or engineer", "Developer", "Public body", "Other"];
  window.STROHM_PROJECT = {
    MOX: {
      intro: "PERGOLA, PORCH, FENCE, OMBRAS and BALCONY are in the shop and can also be made to size on request. FACADE, BIPV Curtain Wall and BIPV Cladding are project-based.",
      send: ["Location", "Dimensions (W × D × H) or a sketch", "Site photos", "Preferred module type", "Technical files: drawings, structural data", "Optional: budget and timing"],
      receive: RECEIVE, install: INSTALL_EPC, types: ["Project", "Made to size"], roles: CONTACT_ROLES,
      fields: ["Location", "Product", "Dimensions (W × D × H)", "Preferred module type", "Budget (optional)", "Timing (optional)"],
    },
    AGRIX: {
      intro: "Standard HEDGE and TWIG kits are in the shop. Larger and custom sites are project-based.",
      send: ["Location", "Land size (ha) or parcel map / coordinates", "Crop or livestock type", "Current farming method: row spacing, machinery width", "Site photos and technical files", "Optional: grid connection, budget and timing"],
      receive: ["Structural calculation", "Bill of materials (BOM)", "Lead time", "EMON energy forecast", "Crop and light assessment", "Price through the EPC partner", "Financing on request"],
      install: INSTALL_EPC, types: ["Project", "Standard kit"], roles: CONTACT_ROLES,
      fields: ["Location", "Land size (ha)", "Crop or livestock", "Row spacing / widest implement", "Grid connection (optional)", "Budget (optional)", "Timing (optional)"],
      calc: { label: "AGRIX Calculator", href: "AGRIX - PRODUCT - Calculator - EN.dc.html", key: "strohm-agrix-calc" },
    },
    TERRIX: {
      intro: "TERRIX is project-based. Selected sets will be available in the shop later.",
      send: ["Location or coordinates", "Land area or parcel map (KML, DWG)", "Target capacity (MWp)", "Grid connection point and capacity", "Terrain: slope, soil or geotechnical report if available", "Preferred module type", "Technical files: topographic survey, layouts", "Optional: fixed-tilt or tracker, budget and timing"],
      receive: ["Structural calculation with pile and foundation design", "Bill of materials (BOM)", "Lead time", "EMON energy forecast", "Price through the EPC partner", "Financing on request"],
      install: INSTALL_EPC, types: ["Project"], roles: CONTACT_ROLES,
      fields: ["Location or coordinates", "Land area (ha)", "Target capacity (MWp)", "Grid connection point and capacity", "Fixed-tilt or tracker (optional)", "Budget (optional)", "Timing (optional)"],
    },
    PONTIX: {
      intro: "PONTIX is project-based. Selected sets will be available in the shop later.",
      send: ["Location or coordinates", "Water body type and surface area", "Depth and bed type", "Water-level variation (min / max)", "Wind, wave and ice conditions if known", "Target capacity (MWp)", "Grid connection point", "Shore access for assembly", "Water-use rules: drinking water, recreation", "Technical files: bathymetry, surveys", "Optional: budget and timing"],
      receive: ["Structural calculation with float layout, mooring and anchoring design", "Bill of materials (BOM)", "Lead time", "EMON energy forecast", "Price through the EPC partner", "Financing on request"],
      install: INSTALL_EPC, types: ["Project"], roles: CONTACT_ROLES,
      fields: ["Location or coordinates", "Water body type", "Surface area (ha)", "Depth and water-level variation", "Target capacity (MWp)", "Grid connection point", "Budget (optional)", "Timing (optional)"],
    },
    TECTIX: {
      intro: "Standard roof sets are in the shop. Commercial roofs are project-based.",
      send: ["Location", "Roof type: flat or pitched; tiles, slate, metal, bitumen, membrane", "Roof dimensions or plan", "Roof pitch and building height", "Roof load capacity or structural report if available", "Preferred module type and number", "Roof photos and technical files", "Optional: budget and timing"],
      receive: ["Structural calculation with wind, snow and ballast or fixing plan", "Bill of materials (BOM)", "Lead time", "EMON energy forecast", "Price through the EPC partner", "Financing on request"],
      install: INSTALL_EPC, types: ["Project", "Roof set"], roles: CONTACT_ROLES,
      fields: ["Location", "Roof type and covering", "Roof dimensions", "Roof pitch", "Building height", "Module type and number", "Budget (optional)", "Timing (optional)"],
    },
    PARX: {
      intro: "RESIDENTIAL Carport and HOME Bikeport are in the shop and can also be made to size on request. CLASSIC, CURVE and PUBLIC Bikeport are project-based.",
      send: ["Location", "Number of parking spaces: cars, bikes, scooters", "Layout: single or double row", "Site plan or dimensions", "Ground type and existing surface", "EV charging: number of points", "Grid connection", "Site photos and technical files", "Optional: budget and timing"],
      receive: ["Structural calculation with foundation design", "Bill of materials (BOM)", "Lead time", "EMON energy forecast", "XOOM charger proposal when EV charging is requested", "Price through the EPC partner", "Financing on request"],
      install: INSTALL_EPC, types: ["Project", "Made to size"], roles: CONTACT_ROLES,
      fields: ["Location", "Number of spaces", "Layout (single / double row)", "Ground type", "EV charging points", "Grid connection", "Budget (optional)", "Timing (optional)"],
    },
    CHILL: {
      intro: "Solar street furniture is in the shop. Public infrastructure is project-based or by tender. Specific designs can be developed on request, and EPCs can ask for tender support.",
      send: ["Location", "Product or design type", "Number of units or route length", "Site plan or dimensions", "Functions: lighting, charging, display, Wi-Fi", "Grid connection or off-grid", "Site photos and technical files", "Tenders: tender documents and deadline", "Optional: budget and timing"],
      receive: ["Structural calculation", "Bill of materials (BOM)", "Lead time", "EMON energy forecast", "Price through the EPC partner", "Financing on request", "Tenders: company profile, references, certifications, indicative technical proposal"],
      install: INSTALL_EPC, types: ["Project", "Custom design", "Tender or RFP"], roles: CONTACT_ROLES,
      fields: ["Location", "Product or design type", "Units or route length", "Functions", "Grid or off-grid", "Tender deadline (tenders)", "Budget (optional)", "Timing (optional)"],
    },
    TOGU: {
      intro: "TOGU is sold through the shop. For large projects or cable and tray sizing, EPCs can request a TOGU BOM. This route is for EPCs only.",
      send: ["PV layout or single-line diagram", "Cable routes and lengths if known", "Roof or ground type", "Number of strings or inverters", "Technical files"],
      receive: ["TOGU BOM: cable, connectors, conduit, trays, grounding", "Lead time", "Price through your shop account or EPC"],
      install: "Installed by a qualified electrician or your EPC partner.", types: ["TOGU BOM"], roles: ["EPC or installer"], epcOnly: true,
      fields: ["Project location", "Roof or ground type", "Number of strings", "Number of inverters", "Cable route lengths (if known)"],
    },
  };
})();
