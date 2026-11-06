// From uploads/AIRO_Website_Content_Architecture_v1.docx sections 4.2, 5.1-5.7, 8, 9.3 (DEPTH-64). Text as written.
window.AIRO_FAMILIES = [
 {
  "code": "SHIFT",
  "id": "shift",
  "headline": "Fresh air for one room. Without a duct network.",
  "blocks": [
   {
    "k": "p",
    "t": "SHIFT ventilates an individual room through the external wall. Use one unit for local airflow or coordinate two units for alternating balanced supply and extract."
   }
  ],
  "ctas": [
   "Check whether SHIFT fits my room",
   "View technical details"
  ],
  "limit": "SHIFT alternates airflow direction during regenerative operation. Two coordinated units provide a more balanced result than one unit operating alone.",
  "matrix": {
   "standard": "Regenerative heat recovery, Wi-Fi, CO₂ sensing, three-speed EC fan, paired operation.",
   "optional": "Alternative hoods, decorative fronts, additional IAQ sensing, humidity operation.",
   "risk": "Noise value and final filter standard require confirmation."
  }
 },
 {
  "code": "SWAP",
  "id": "swap",
  "headline": "Balanced ventilation where conventional ductwork does not fit.",
  "blocks": [
   {
    "k": "p",
    "t": "SWAP supplies fresh air and extracts stale air through separate airflow paths. Flexible mounting makes it suitable for renovation, rental and room-by-room upgrades."
   }
  ],
  "ctas": [
   "Explore installation options",
   "View SWAP specifications"
  ],
  "limit": "SWAP requires two airflow openings or an approved window-related arrangement. Feasibility depends on wall, façade and window construction.",
  "matrix": {
   "standard": "60/80/100 m³/h, coarse + F7, touch/remote/Wi-Fi, heat and humidity recovery.",
   "optional": "CO₂, PM2.5, bypass, negative ion, window kit.",
   "risk": "Do not present options as standard."
  }
 },
 {
  "code": "FLOW",
  "id": "flow",
  "headline": "One central system. Fresh air throughout the home.",
  "blocks": [
   {
    "k": "p",
    "t": "FLOW continuously supplies fresh air to living spaces and removes used air from kitchens, bathrooms and utility rooms. Available in 250, 350 and 500 m³/h airflow classes."
   }
  ],
  "ctas": [
   "Choose a FLOW model",
   "Start a whole-home design"
  ],
  "limit": "FLOW requires a designed duct network and sufficient service space. It is more suitable for new construction and planned renovations than isolated room upgrades.",
  "matrix": {
   "standard": "Constant airflow EC fans, balanced airflow, bypass, heat recovery, primary filtration.",
   "optional": "F7, enthalpy exchanger, CO₂, humidity, Wi-Fi, zone control, preheater.",
   "risk": "Create final AIRO model codes and validate efficiency by model."
  }
 },
 {
  "code": "WAVE",
  "id": "wave",
  "headline": "High-volume fresh air for larger rooms.",
  "blocks": [
   {
    "k": "p",
    "t": "WAVE provides filtered ventilation for occupied spaces that need more airflow without a concealed room-by-room duct system."
   }
  ],
  "ctas": [
   "Check WAVE for my space",
   "View WAVE 750"
  ],
  "limit": "WAVE is physically larger and remains visible inside the occupied space. Location must account for airflow direction, access and acoustics.",
  "matrix": {
   "standard": "350-750 m³/h, G4 + F8, electric reheater, 10 speeds, Wi-Fi, RS485.",
   "optional": "CO₂, humidity, differential pressure, preheater, HEPA/disinfection filter.",
   "risk": "Do not advertise 1,000 m³/h without a separate confirmed model."
  }
 },
 {
  "code": "GUST",
  "id": "gust",
  "headline": "Ventilation that actively conditions incoming air.",
  "blocks": [
   {
    "k": "p",
    "t": "GUST recovers energy from outgoing air and uses an inverter heat pump to heat, cool or dehumidify incoming fresh air."
   },
   {
    "k": "table",
    "head": [
     "CAPACITY QUALIFIERGUST can reduce the load on the primary heating and cooling installation. Actual capacity depends on outdoor conditions, required airflow and the building load."
    ],
    "rows": []
   }
  ],
  "ctas": [
   "Compare GUST models",
   "Submit a GUST project"
  ],
  "limit": "",
  "matrix": {
   "standard": "Balanced ventilation, heat recovery, inverter heat pump, heating, cooling, dehumidification, R32.",
   "optional": "Expanded IAQ, BMS, additional preheating, project-specific controls.",
   "risk": "Never position as universal primary-heating replacement."
  }
 },
 {
  "code": "ROUTE",
  "id": "route",
  "headline": "Deliver the right airflow to every room.",
  "blocks": [
   {
    "k": "p",
    "t": "ROUTE creates the physical air-distribution network between the ventilation unit and each occupied or extract room. The page should explain planning, sealed connections, compact routing, terminal connections, balancing and cleaning access."
   },
   {
    "k": "p",
    "t": "Component selector categories: plenums, flat-oval ducts, couplings, vertical bends, horizontal bends, crossovers, round-to-flat transitions, terminal boxes, balancing elements and design vents."
   }
  ],
  "ctas": [],
  "limit": "",
  "matrix": {
   "standard": "Complete architectural system and component categories.",
   "optional": "Project-specific component selection.",
   "risk": "Hold dimensions, pressure loss and airtightness claims until validated."
  }
 },
 {
  "code": "CONTROL",
  "id": "control",
  "headline": "Ventilation that responds to the building.",
  "blocks": [
   {
    "k": "p",
    "t": "CONTROL combines local controls, CO₂ and humidity sensing, gateways, zone control, preheating and installation accessories. Compatibility must be shown by ventilation family and model."
   }
  ],
  "ctas": [],
  "limit": "",
  "matrix": {
   "standard": "Switches, CO₂ and RH sensors, gateway, zone kit, preheater, mounting frame.",
   "optional": "Model-dependent interfaces.",
   "risk": "Validate protocols and compatibility before publishing model-level claims."
  }
 }
];
window.AIRO_EMON = [
 {
  "k": "p",
  "t": "EMON is the preferred AIRO user interface. The website should show one coherent customer experience, while technical pages clearly state which measurements and control functions are supported by each product and configuration."
 },
 {
  "k": "table",
  "head": [
   "Layer",
   "Role",
   "Website treatment"
  ],
  "rows": [
   [
    "Local control",
    "Essential on-device or wall control",
    "Always explain what remains available without cloud access."
   ],
   [
    "AIRO CONTROL",
    "Sensors, switches, gateways and zone devices",
    "Show compatibility by family and model."
   ],
   [
    "EMON",
    "Monitoring, schedules, alerts and supported control",
    "Primary customer interface after integration validation."
   ],
   [
    "BMS / RS485",
    "Professional building integration",
    "Professional specification only; protocol-dependent."
   ],
   [
    "Supplier cloud",
    "Temporary technical dependency where applicable",
    "Do not present Smart Life or Tuya as the AIRO brand experience."
   ]
  ]
 }
];
window.AIRO_SPARES = [
 {
  "k": "p",
  "t": "Use model-specific exploded diagrams and numbered parts, following the useful structure seen in the uploaded ventilation spare-parts reference. AIRO support should help installers identify filters, fans, heat exchangers, sensors, control boards, bypass parts, panels, condensate parts and mounting components rather than defaulting to complete-unit replacement."
 }
];
