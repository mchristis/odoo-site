/* DEPTH-1293: long explainers behind "Read more" in EmonBlock. STROHM_EMON_LONG[BRAND][topicKey] = [paragraphs], optional product override STROHM_EMON_LONG[BRAND]["Product name"][topicKey]. Text is copied verbatim from the existing BRAND with EMON page; topics without text show a TO CONFIRM line. Add brands here, nothing else to change. */
window.STROHM_EMON_LONG = {
 "OGO": {
  "nfc": [
   "NFC access: tap the marked NFC point to open the product’s EMON dashboard; control requires authorisation."
  ],
  "mesh": [
   "The connected controller links the water level sensor, temperature sensor, flow meter, pressure sensor, pump control and irrigation valve. The pump itself does not need a separate Wi-Fi module.",
   "Wi-Fi mesh: the controller connects through the ecosystem’s specified mesh network.",
   "All connectivity and monitoring functions are development requirements, subject to integration and validation."
  ],
  "live": [
   "See the latest available measurement before deciding what to use. Review which tank supplies a pump, which destination is selected and whether the system is ready to run.",
   "A command sent from the app and a confirmed pump or valve state are shown as different events. Where a flow meter is installed, review measured delivery as well as the change in tank level.",
   "Water level: measure level and calculate estimated remaining litres and fill percentage. Water temperature: monitor stored water temperature. Flow measurement: measure delivered water volume and record consumption. Pressure monitoring: measure pressure downstream of the pump.",
   "Three kinds of evidence. Command sent: the app has sent the instruction. Equipment running: the controller reports the pump as running. Flow confirmed: a flow meter measures water moving in the circuit. EMON shows which of the three it has. Example: “Pump started. Water flow not yet confirmed.”",
   "Use EMON to view the connected tank level, estimated stored volume and water temperature."
  ],
  "schedule": [
   "Order of priority: protection of people and equipment; your reserves; water need within the time windows; energy optimisation.",
   "Settings per zone: time windows, moisture start and stop thresholds, wait time, maximum litres, maximum runtime.",
   "Irrigation control: operate the zone valve using schedules or measured water quantities."
  ],
  "control": [
   "Modes. Automatic: EMON follows your settings. Temporary manual: time-limited, protection stays active. Maintenance: for service work on the installation.",
   "Pump control: enable or inhibit operation, report running status and available faults.",
   "Clear permissions: the owner manages operational access according to the supported permission structure. An installer’s temporary access should be limited to the purpose and duration granted. An installation record, commercial invoice or equipment purchase does not by itself grant another party permission to start a pump."
  ],
  "records": [
   "Connection and local behaviour: the configuration identifies the controller, communication route, power source and local operating behaviour. If the remote connection is unavailable, the interface should show that state rather than imply that a command reached the equipment.",
   "Confirm the actual behaviour of local schedules, manual controls and protection functions during commissioning. Local operation: hose use and pump protection continue without internet.",
   "Alerts and water quality: critical alerts arrive at once. Other alerts are bundled. EMON makes no claim about water quality. Stored rainwater is not drinking water.",
   "Use EMON to view the connected tank level, estimated stored volume and water temperature. Review the history with timestamps and data-quality information."
  ],
  "commissioning": [
   "Confirm the actual behaviour of local schedules, manual controls and protection functions during commissioning.",
   "Sensor placement and settings matter. A reading from one planting area does not automatically represent the whole garden.",
   "EMON helps you understand the connected reserve through tank readings and history. Pumping and automatic operation depend on the installed equipment, power and connection conditions."
  ],
  "TONY": {
   "live": [
    "Use EMON to view the connected reservoir and operate supported water-use functions."
   ],
   "records": [
    "Connect the reservoir to EMON with the specified sensing equipment to view its estimated stored volume, temperature and history. Add a supported pump and valve arrangement for irrigation or transfer where required."
   ],
   "mesh": [
    "Optional connected level and temperature sensor (battery-powered, Wi-Fi mesh) so EMON shows the water level."
   ]
  },
  "WALL": {
   "control": [
    "Connect the selected reservoirs, sensors and water-use equipment to EMON for visibility and supported control.",
    "Minimum reserve, watering by litres and holiday watering are described on the EMON water control page."
   ],
   "schedule": [
    "Integrated low voltage lighting with local and EMON on/off, dimming and scheduling"
   ],
   "records": [
    "Unique device ID connecting the physical vessel to its EMON record",
    "The dashboard displays available water level, estimated remaining litres, temperature, pump status, pressure, measured consumption, irrigation settings and notifications. It also provides access to the product’s manual, maintenance information and service record."
   ],
   "nfc": [
    "Tap the NFC point with a compatible smartphone to open the vessel’s EMON dashboard.",
    "The NFC tag contains the product identification or dashboard link, not account credentials."
   ],
   "live": [
    "Live readings require the monitoring system to be powered and connected. If current readings are unavailable, show the last update time clearly."
   ]
  },
  "DIVAN": {
   "live": [
    "Basic hose operation is local. You do not need to open an app each time you water a plant or rinse a tool."
   ],
   "records": [
    "The connected configuration adds EMON visibility and supported control while retaining access for cleaning and service.",
    "Explore the reservoir body, connection openings, service access and the integration of the monitoring and control equipment."
   ]
  },
  "tou": [
   "The owner uploads the tariff of the energy supplier. EMON reads the peak and off-peak periods and moves OGO into the cheaper periods, within the limits you set.",
   "TO CONFIRM: direct API link to the energy supplier, and the file formats accepted for the tariff upload."
  ]
 },
 "FLUXX": {
  "commissioning": [
   "Commissioning connects the battery to EMON, sets its limits and proves it works.",
   "Register the battery in EMON, set the reserve and hand over to the owner.",
   "Six steps in the EMON installer app.",
   "Saved in EMON and shared with the owner at handover."
  ],
  "mesh": [
   "FLUXX joins the same Wi-Fi mesh as the MOEBIUS inverter. EMON finds it automatically. There is no manual pairing and no gateway to set up.",
   "The battery identifies itself, joins the mesh and appears in EMON.",
   "AC to the home, or DC to a paired inverter. Communication to EMON by cable or Wi-Fi, per model."
  ],
  "live": [
   "EMON reads solar, battery, load, grid and price, then decides when FLUXX charges, holds or discharges.",
   "EMON shows what the battery did and why. It stays inside the limits you set.",
   "EMON shows state of charge, sets the reserve and schedules charging around solar and dynamic prices."
  ],
  "dynamic": [
   "With a dynamic tariff, EMON charges the battery from the grid when the price is low and powers the home from the battery when the price is high.",
   "EMON decides when FLUXX charges, holds or discharges. Charges from your solar, or from the grid when the price is low."
  ],
  "schedule": [
   "EMON charges, holds or discharges within these limits and shows why it acted.",
   "A battery moves solar energy from the hours you make it to the hours you use it. EMON decides when to charge and when to discharge."
  ],
  "records": [
   "Saved in EMON and shared with the owner at handover.",
   "Your result depends on your tariff, your solar system and your use. EMON shows the real figure in the app."
  ],
  "Residential": {
   "nfc": [
    "Hold your phone to BENCH. EMON knows what it is.",
    "QR or NFC, joins the MOEBIUS mesh, EMON takes over."
   ],
   "qr": [
    "Plug into a wall socket, scan once, and EMON takes over. Battery and inverter are inside every piece, quiet enough for the bedroom.",
    "QR or NFC, joins the MOEBIUS mesh, EMON takes over."
   ],
   "control": [
    "BENCH is controlled by EMON, the STRØHM.ENERGY energy app. Connect it once and the app does the rest: limits, planning, backup and savings.",
    "BENCH delivers up to 2,5 kVA. Where plug-in batteries are limited to 800 W at the socket, switch on 800 W mode in the EMON app. EMON then caps the output to the legal limit for your country. Switch it off when an installer has made a fixed connection.",
    "Choose your country. EMON sets the correct feed-in limit and grid rules.",
    "With a SYNQ smart meter or meter reader, EMON delivers only what the home uses, so nothing flows back to the grid.",
    "Combine POUF, OTTO, BENCH and KUBUZ. EMON runs them together.",
    "Soft ambient light around the base. Breathing, night, solid or off, set in the EMON app."
   ],
   "live": [
    "In the evening the stored energy runs lights, TV, fridge and chargers. EMON decides when.",
    "Every BENCH comes with an EMON Smart Plug. Put it between the wall socket and an appliance, such as a washing machine, a dishwasher or a heater. It connects over Wi-Fi and appears in EMON next to your battery.",
    "The battery decides when to store and when to supply. The plug lets EMON decide when an appliance runs, so more of your solar energy is used at home.",
    "Live power and daily kWh per appliance in EMON."
   ],
   "schedule": [
    "Switch, measure and schedule an appliance from the EMON app.",
    "EMON checks everything and starts planning."
   ]
  },
  "Commercial": {
   "control": [
    "KYUZ is controlled by EMON, the STRØHM.ENERGY energy app. EMON’s AI learns how the site uses energy, reads tomorrow’s prices and weather, and plans every hour of charging and discharging. You set the rules. EMON follows them."
   ],
   "qr": [
    "Every part carries its own identity. One scan with the EMON installer app registers it to the site."
   ],
   "nfc": [
    "Every part carries its own identity. One scan with the EMON installer app registers it to the site."
   ],
   "commissioning": [
    "EMON runs the checks step by step and shows each result on screen.",
    "Battery modules stack like building blocks. Stacks connect to power modules, and power modules run in parallel. There is no fixed upper limit: the same system scales from one stack to MW projects. When the site grows, add modules, stacks or power modules. EMON recognises the new parts after one scan.",
    "KOFR holds the batteries, the inverter, cooling and safety in one weatherproof enclosure. When the site needs more storage, a battery extension of the same size is placed alongside and connected. EMON adds it after one scan.",
    "Battery modules, cooling and safety are built into one outdoor cabinet. Need more energy later? Place another cabinet alongside. EMON adds it to the site after one scan."
   ],
   "mesh": [
    "The system joins the MOEBIUS Wi-Fi mesh and appears in EMON automatically."
   ]
  },
  "Utility": {
   "live": [
    "Single battery cells are grouped into packs. Packs are stacked into racks, and the racks stand side by side in the container. Each step has its own monitoring, so a fault is found and isolated at the smallest level."
   ],
   "control": [
    "EMON’s AI learns how the site uses energy, reads tomorrow’s prices and weather, and plans every hour of charging and discharging. You set the rules. EMON follows them."
   ],
   "qr": [
    "Every part carries its own identity. One scan with the EMON installer app registers it to the site."
   ],
   "nfc": [
    "Every part carries its own identity. One scan with the EMON installer app registers it to the site."
   ],
   "mesh": [
    "The system joins the MOEBIUS Wi-Fi mesh and appears in EMON automatically."
   ]
  }
 },
 "MOEBIUS": {
  "commissioning": [
   "One scan connects the product, guides the installer, activates monitoring, confirms the warranty and creates the permanent installation record.",
   "One button uploads the complete record to EMON.",
   "Scan to open the approved project in EMON.",
   "The accepted commissioned record becomes the owner’s file — warranty confirmed, monitoring live, service worked from the record.",
   "The warranty is confirmed, monitoring is live, and every later service works from the same file the installer approved on site."
  ],
  "nfc": [
   "Because the NFC tag is passive, essential product information, documentation and support routes can be accessed while the inverter is switched off. No forgotten password should prevent someone from identifying the product or finding safety and support information. Live readings require EMON.",
   "A traditional inverter screen is small, rarely used and fixed to the technology available when the inverter was built. MOEBIUS replaces it with a digital interface that evolves. Tap the inverter through NFC and EMON opens the interface for that exact unit — in a screen you already know, in your language."
  ],
  "qr": [
   "QR activation completes in under 30 seconds. Complete connection — from power-up to live status in EMON — takes only a few minutes. These are separate claims.",
   "EMON recognises article code, serial number, rated power, firmware and warranty automatically.",
   "Five standard features turn a sealed box into a visible, monitored system in only a few minutes."
  ],
  "mesh": [
   "Every MOEBIUS inverter forms a standard Wi-Fi mesh on site. There is no manual pairing, no typing addresses and no hunting for devices.",
   "Wi-Fi Mesh is built into the inverter — SYNQ is the separate hardware range that measures energy and feeds data to EMON.",
   "The inverter detects the wireless network and communicates with EMON and compatible devices."
  ],
  "live": [
   "Live production, consumption, storage and grid flow — with essential local LED status always available, even without the app.",
   "It turns measurements into a clear operational view for owners and the technical detail installers need — on mobile, tablet and browser. The physical EMON 10.5-inch screen remains an optional accessory.",
   "For installations that want a permanent display, the optional EMON 10.5-inch screen shows local production, consumption, grid status, tariff control and installer setup information. It is an addition to the app — not a replacement for it, and not required for the inverter to work.",
   "Without a full EMON subscription, the owner can access the essential information to understand and support the inverter: is it operating correctly, how much is it producing, are there warnings, where are the warranty and documents."
  ],
  "control": [
   "EMON manages energy behaviour within the certified operating limits of the inverter. Country-specific grid certification is shown per model and power variant — MOEBIUS does not claim blanket compliance across all markets.",
   "An inverter measures and acts on what it can see. These SYNQ and OZZY devices give it accurate measurement at the meter and control at the load, so monitoring, export control and smart charging work from the first day — installed in the same visit, on the same commissioning record.",
   "The EGOM residential package includes two EMON-Link smart plugs and an energy meter. This is a residential-package feature and is not automatically included with larger commercial or utility inverters. Included accessories are specified per family and package."
  ],
  "records": [
   "Every family is built to European grid codes, with monitoring and commissioning in the same flow.",
   "All system and monitoring data is hosted in the EU — Belgium and Germany — and never processed outside it.",
   "Registered automatically through EMON at commissioning, and linked to the installed device rather than a purchase invoice. Standard and extended terms depend on the model and on residential, commercial or utility use."
  ],
  "Residential": {
   "mesh": [
    "Each module operates independently, while the microinverters form an adaptive dual-band Wi-Fi mesh across the roof — discovering their own devices, choosing the strongest route and connecting to EMON. Small systems run without a gateway; larger and three-phase systems add the EMON Gateway for advanced control.",
    "Every PIXIE joins the local network, using 2,4 GHz for range and wall penetration and 5 GHz where a cleaner link is available. Devices do not each need a direct link to the router — data hops through neighbouring PIXIE units until it reaches the internet bridge or EMON Gateway.",
    "For larger rooftops, three-phase installs and complete energy systems, the EMON Gateway becomes the local coordination and control layer."
   ],
   "control": [
    "With EMON metering, PIXIE continuously adjusts production to the permitted export limit, coordinating microinverters over the low-latency mesh. At commissioning, EMON identifies the phase associated with each PIXIE group — the installer does not assign every unit manually, and the detected phase structure becomes part of the permanent record.",
    "EMON coordinates PIXIE generation with the rest of the building, allocating surplus solar in a clear control order rather than simply displaying connected products."
   ],
   "live": [
    "A production problem and a communication problem are not the same. EMON separates them — showing which device is the active coordinator, how devices connect and where quality needs attention — helping installers diagnose the cause before visiting the site."
   ],
   "commissioning": [
    "Upload a roof drawing, system proposal or completed-installation photograph. EMON identifies visible module groups, orientations and roof sections and creates an editable first layout. The installer reviews, adjusts and assigns the detected PIXIE devices — and remains responsible for approval.",
    "Completing the EMON commissioning workflow automatically generates the installation PDF — retrievable by the customer, installer and authorised service team through EMON or the product’s QR/NFC identity.",
    "PIXIE combines module-level conversion, adaptive Wi-Fi mesh and EMON commissioning in one expandable system. Start compact and gateway-free, or connect the whole building through the EMON Gateway."
   ]
  }
 },
 "AGRIX": {
  "records": [
   "Keep the project's engineering sign-off, structural calculations and EMON as-built record together with the warranty registration."
  ],
  "commissioning": [
   "Every eligible product is identified by QR/NFC. EMON records the as-built layout, module and string positions, serial numbers, commissioning, warranty, production, faults and replacements. When a module is changed, the project file changes with it."
  ]
 },
 "DODO": {
  "records": [
   "A complete record activates the DODO product warranty. It remains transferable after a future owner verifies the property in EMON. The 15 years apply to all three QUILL models."
  ],
  "commissioning": [
   "Installer approval requires verified business and VAT information, personal identity, short product training, confirmation of the method and one approved first installation in EMON.",
   "One controlled workflow: inspect, measure, clean where required, mark, cut, position, press, add Aqua retention, secure cables and register the work in EMON."
  ]
 },
 "FEU": {
  "mesh": [
   "Every panel connects to the smart app over Wi-Fi mesh.",
   "Compatible FEU products contain their smart control and Wi-Fi mesh inside the heater and communicate directly with EMON. That means a cleaner installation and multiple heaters operating as one room or building system."
  ],
  "control": [
   "When your home produces more solar electricity than it is currently using, EMON can activate Solar Surplus mode and gently preheat approved rooms — within limits you set.",
   "Three energy modes decide how heating draws on grid, solar and a FLUXX battery. You set the reserves; EMON respects them."
  ],
  "schedule": [
   "Your main heating keeps the house at its base temperature. FEU adds extra warmth room by room: every panel has its own schedule and comfort times, and runs only when EMON has surplus solar or cheap power available. Empty rooms get nothing extra."
  ],
  "tou": [
   "On a dynamic or time-of-use tariff the electricity price changes through the day. EMON reads the price and switches FEU on only in the low-price window or the cheapest hours, and whenever your solar panels produce more than the house uses. Outside those moments FEU stays off and the main heating carries the house.",
   "FEU is not the main heating of the house. The heat pump or boiler does that job. EMON switches FEU on only when energy is plentiful or cheap: surplus from your own solar panels, the low-price window of a time-of-use tariff, or the cheapest hours of a dynamic tariff. The result is extra warmth where you are, without paying for it at the expensive moment.",
   "The owner uploads the tariff of the energy supplier. EMON reads the peak and off-peak periods and moves FEU into the cheaper periods, within the limits you set.",
   "TO CONFIRM: direct API link to the energy supplier, and the file formats accepted for the tariff upload."
  ],
  "commissioning": [
   "FEU supports installers, architects, developers and distributors from heat-loss calculation through to EMON commissioning."
  ],
  "dynamic": [
   "When your ANDO panels produce more than the house uses, EMON turns that surplus into warmth in the bathroom, the office or on the terrace instead of exporting it for a low feed-in price.",
   "EMON watches the hourly price and switches FEU on only in the cheapest hours, or when the price is negative."
  ],
  "live": [
   "EMON first covers the house, the battery and the heat pump. FEU gets the energy that is left over."
  ]
 },
 "MUKI": {
  "schedule": [
   "Schedule and monitor one appliance at a time."
  ],
  "records": [
   "Review the warranty terms for the specific plug-in kit, smart plug or monitor ordered. Outdoor use beyond the stated IP rating voids coverage."
  ],
  "tou": [
   "The owner uploads the tariff of the energy supplier. EMON reads the peak and off-peak periods and moves MUKI into the cheaper periods, within the limits you set.",
   "TO CONFIRM: direct API link to the energy supplier, and the file formats accepted for the tariff upload."
  ],
  "control": [
   "Available monitoring and control depend on connected devices, supported interfaces and commissioned functions."
  ]
 },
 "NENDO": {
  "commissioning": [
   "EMON monitoring is set up as part of commissioning.",
   "EMON fills in the official grid operator, subsidy and F-gas forms from the commissioning data.",
   "EMON turns NENDO into a flexible load. The AI forecasts heat demand, solar yield and prices 36 hours ahead, then plans every compressor hour. Comfort limits come first. Cost, peak and grid signals decide the rest. Homeowner controls are separated from installer-only technical settings. Safety-critical settings cannot be altered by users."
  ],
  "control": [
   "Before electricity becomes expensive, EMON can gently shift room temperature within a comfort range you approve, then reduce demand during the expensive period. Not overheating — working inside your limits."
  ],
  "live": [
   "Starts and adjusts the NENDO heat pump, and shows in the app what ran when.",
   "A central boiler circulates heat through a large part of the building even when one room is occupied. Each CORE unit conditions its own room or open zone. Several units across a building are coordinated by EMON as one modular system.",
   "EMON manages the energy behind it.",
   "With FLUXX and MOEBIUS, EMON considers battery state of charge and can reserve energy for night-time heating or a grid outage — prioritising the living room and one bedroom while reducing lower-priority spaces.",
   "With a FLUXX battery, EMON can keep NENDO running when the grid is down."
  ],
  "dynamic": [
   "Solar production visible in EMON; EMON adds grid power at low-price hours",
   "EMON combines information from CORE units, ANDO solar, MOEBIUS inverters, FLUXX batteries, SYNQ meters, the grid, dynamic prices, room temperatures and weather — then decides when each unit heats, cools, reduces output or waits. Four selectable energy modes set the priority."
  ],
  "mesh": [
   "Wi-Fi app per unit, and EMON for solar, battery and tariff control (see below)."
  ],
  "Hot water": {
   "control": [
    "NENDO AIO Heat Pump Boiler can be controlled by EMON.",
    "NENDO MPPT Water Tank Boiler can be controlled by EMON.",
    "NENDO AIO Heat Pump Boiler with MPPT can be controlled by EMON."
   ]
  },
  "Hydraulics and solar": {
   "dynamic": [
    "RAY connects solar panels directly to the heat pump. The heat pump then runs on solar power as it is produced, without passing through the house grid first. Dynamic tariffs are handled by EMON, not by RAY ("
   ],
   "commissioning": [
    "The extras are added when the installation needs them: FLOW for the hydraulics, RAY to send solar power directly to the immersion heater in the tank, VESSEL for buffer and sanitary hot-water storage. EMON controls the system on dynamic tariffs. Models and specifications are in the catalogue.",
    "CORE and AERO are the heat pumps. The extras are added when the installation needs them: FLOW for the hydraulics, RAY to send solar power directly to the immersion heater in the tank, VESSEL for buffer and sanitary hot-water storage. EMON controls the system on dynamic tariffs."
   ]
  },
  "tou": [
   "The owner uploads the tariff of the energy supplier. EMON reads the peak and off-peak periods and moves NENDO into the cheaper periods, within the limits you set.",
   "TO CONFIRM: direct API link to the energy supplier, and the file formats accepted for the tariff upload."
  ]
 },
 "GLOW": {
  "live": [
   "Where GLOW is combined with a XOOM charging module or other STRØHM.ENERGY products, EMON shows it as part of the site energy system."
  ],
  "records": [
   "Alerts for a dirty module, a weak battery or a failed head, so a visit is planned only when needed.",
   "Remote monitoring and EMON integration per model: TO CONFIRM."
  ],
  "tou": [
   "The owner uploads the tariff of the energy supplier. EMON reads the peak and off-peak periods and moves GLOW into the cheaper periods, within the limits you set.",
   "TO CONFIRM: direct API link to the energy supplier, and the file formats accepted for the tariff upload."
  ]
 },
 "ANDO": {
  "commissioning": [
   "The expected curve is initialised from the measured factory Pmax. Live production is measured at the available inverter, string or system level; per-panel live monitoring appears only where module-level hardware is installed."
  ],
  "qr": [
   "Each ANDO panel carries two identical QR codes — a permanent label on the module rear and one detachable duplicate. During installation the duplicate is placed in its real position on the printed EMON scan sheet. A single scan of the completed sheet registers every panel at once — serial number, position, orientation, string diagram, inverter assignment and warranty — and builds the digital twin of the roof. No individual scanning. No manual data entry.",
   "The data displayed in the EMON app at the moment of installation scan includes the measured peak power, the short-circuit current, the open-circuit voltage, the fill factor, and confirmation of positive power tolerance for that specific unit. The date of the STC measurement at the factory is also shown.",
   "No other consumer-accessible solar product delivers per-module flash test data automatically at the moment of installation via a standard phone scan. This closes the information chain from factory measurement to lifetime monitoring in a single action. TO CONFIRM: claim check.",
   "The main project QR opens the correct EMON project and approved layout. Panel identities are registered by the scan sheet."
  ],
  "records": [
   "The EMON degradation curve is initialised from the measured Pmax value, not the nominal specification. This means the 99% guarantee after year one and the 80% guarantee after 30 years are applied to the actual measured starting point — not the lower datasheet value. The monitoring is more accurate as a result."
  ]
 },
 "AIRO": {
  "records": [
   "EMON integration subject to model and configuration."
  ],
  "tou": [
   "The owner uploads the tariff of the energy supplier. EMON reads the peak and off-peak periods and moves AIRO into the cheaper periods, within the limits you set.",
   "TO CONFIRM: direct API link to the energy supplier, and the file formats accepted for the tariff upload."
  ],
  "live": [
   "Air is drawn in, filtered, passed through heat recovery, distributed to living spaces, extracted from wet rooms and returned outside — monitored and controlled at every stage.",
   "Where the model and configuration support it, AIRO reports air quality, airflow, filter status and recovery performance into EMON — next to solar, storage and heating."
  ],
  "Whole home": {
   "control": [
    "A new building provides the opportunity to design ventilation into the architecture from the beginning. Central ERV. Supply ducts. Extract ducts. Zone control. CO₂ sensors. Humidity sensors. Filtration. EMON integration. Everything can be coordinated before construction. 54"
   ]
  }
 },
 "OZZY": {
  "records": [
   "An energy passport per load: a permanent digital record in EMON of what is connected, how it should behave and what each intervention achieved.",
   "Temperature monitoring inside the device. TO CONFIRM per model."
  ],
  "schedule": [
   "Local schedules keep running. Remote control returns when the connection does."
  ],
  "commissioning": [
   "NUBO, RUGO and OCTO connect to a suitable existing socket and commission through QR, NFC, Wi-Fi mesh and EMON — within the stated voltage, current and environmental limits."
  ]
 },
 "PROP": {
  "commissioning": [
   "PROP commissioning connects the physical installation to its permanent digital record. Scan the QR or NFC tag, confirm every component, complete the safety and performance checks, upload the installation evidence and issue the customer documentation from EMON."
  ],
  "control": [
   "Coordinated with EMON, storage and controllable loads."
  ],
  "records": [
   "Vibration and temperature alerts where sensors are installed."
  ],
  "live": [
   "Wind sensor, RPM if supported, power response, controller, inverter and EMON communication."
  ]
 },
 "SYNQ": {
  "records": [
   "SYNQ reads the common smart-meter ports and the standard field buses, then carries everything into one EMON record over the connection that fits the site.",
   "Measurement, communication and automation run on site. Remote access, tariff updates and cloud services pause and resume automatically."
  ],
  "commissioning": [
   "During commissioning, EMON creates the digital installation record and links it permanently to that exact product."
  ],
  "nfc": [
   "Metering starts with how you connect to the installation. Choose the connection method, then filter by phase and current. SYNQ devices carry NFC identity and QR commissioning and report into one EMON record. CINCH, TALLY and LEDGER add integrated Wi-Fi mesh.",
   "Each active SYNQ device has its own digital identity. The installer scans a QR code or taps an NFC tag, and EMON recognises the rest.",
   "The NFC tag is passive, so product information, manuals and support routes can be reached while the device is switched off. Scanning always opens the workflow for the exact hardware installed. Live readings require EMON."
  ],
  "tou": [
   "The owner uploads the tariff of the energy supplier. EMON reads the peak and off-peak periods and uses the SYNQ measurement to show what each period costs.",
   "TO CONFIRM: direct API link to the energy supplier, and the file formats accepted for the tariff upload."
  ],
  "live": [
   "SYNQ measurement hardware feeds EMON, which turns the data into a single view of the installation. NEXUS extends this from measurement into active energy management and control.",
   "SYNQ gives EMON the data, and EMON turns it into decisions for the owner and the installer."
  ],
  "Coordinate and log": {
   "nfc": [
    "Every NEXUS hub has a unique QR code and NFC identity. Scan the code or tap the hub with a compatible phone to open the correct device directly in EMON — no searching for the installation, no serial numbers, no menus. The phone becomes the screen only when information is needed."
   ]
  }
 },
 "SHELTR": {
  "CARA": {
   "commissioning": [
    "Inverter tests and handover record via QR/NFC in EMON."
   ]
  },
  "tou": [
   "The owner uploads the tariff of the energy supplier. EMON reads the peak and off-peak periods and moves SHELTR into the cheaper periods, within the limits you set.",
   "TO CONFIRM: direct API link to the energy supplier, and the file formats accepted for the tariff upload."
  ]
 },
 "TOGU": {
  "records": [
   "Only possible because TOGU controls the wider Strohm.energy ecosystem and the EMON platform. That ecosystem-level traceability is the strongest long-term advantage. TO CONFIRM: claim check."
  ]
 },
 "XOOM": {
  "control": [
   "All XOOM families are controlled from the EMON app.",
   "App and OCPP back-office control on every model.",
   "XOOM POST, COIL, PAVE, WISP, STUMP and LUMO are controlled from the EMON app and connect to charge-point back offices."
  ],
  "commissioning": [
   "EMON monitoring is set up as part of commissioning."
  ],
  "dynamic": [
   "Coordinated with solar, storage and EMON for solar charging, tariff charging and peak avoidance."
  ]
 },
 "CHILL": {
  "commissioning": [
   "The installer registers each CHILL unit in EMON during commissioning. Location, modules, battery and connected loads are recorded with the installation."
  ],
  "qr": [
   "Each CHILL unit carries a QR code. Scanning it opens the record for that unit in EMON."
  ],
  "live": [
   "EMON shows solar generation, battery level and the power used by lighting, charging points and other loads in the unit."
  ],
  "records": [
   "Faults, low battery and damage alerts are sent to the site manager. Service visits and repairs are added to the unit record."
  ],
  "tou": [
   "The owner uploads the tariff of the energy supplier. EMON reads the peak and off-peak periods and moves CHILL into the cheaper periods, within the limits you set.",
   "TO CONFIRM: direct API link to the energy supplier, and the file formats accepted for the tariff upload."
  ],
  "nfc": [
   "Tapping the NFC tag on a CHILL unit opens its EMON dashboard. Control requires authorisation."
  ],
  "mesh": [
   "CHILL units join the site Wi-Fi mesh and report to EMON. Where no mesh is available, the connection route is set per project."
  ],
  "schedule": [
   "Set when lighting, charging points and other loads in the unit are active. EMON keeps to the schedule and to the battery reserve."
  ],
  "control": [
   "The site manager switches loads on or off and sets limits per unit. Local protection stays active when the connection is lost."
  ]
 },
 "LINA": {
  "commissioning": [
   "The expected curve is initialised from the measured factory Pmax. Live production is measured at the available inverter, string or system level; per-panel live monitoring appears only where module-level hardware is installed. TO CONFIRM: LINA wording."
  ],
  "qr": [
   "Each LINA panel carries two identical QR codes — a permanent label on the module rear and one detachable duplicate. During installation the duplicate is placed in its real position on the printed EMON scan sheet. A single scan of the completed sheet registers every panel at once — serial number, position, orientation, string diagram, inverter assignment and warranty — and builds the digital twin of the roof. No individual scanning. No manual data entry. TO CONFIRM: LINA wording.",
   "The data displayed in the EMON app at the moment of installation scan includes the measured peak power, the short-circuit current, the open-circuit voltage, the fill factor, and confirmation of positive power tolerance for that specific unit. The date of the STC measurement at the factory is also shown. TO CONFIRM: LINA wording.",
   "The main project QR opens the correct EMON project and approved layout. Panel identities are registered by the scan sheet. TO CONFIRM: LINA wording."
  ],
  "records": [
   "The EMON degradation curve is initialised from the measured Pmax value, not the nominal specification. This means the 99% guarantee after year one and the 80% guarantee after 30 years are applied to the actual measured starting point — not the lower datasheet value. The monitoring is more accurate as a result. TO CONFIRM: LINA wording."
  ]
 },
 "TERRIX": {
  "commissioning": [
   "The installer registers the TERRIX structure in EMON during commissioning. Rows, tables and the connected modules are recorded with the installation."
  ],
  "qr": [
   "Each TERRIX assembly carries a QR code. Scanning it opens the record for that structure in EMON."
  ],
  "live": [
   "EMON shows the generation of the modules on the TERRIX structure, measured at inverter, string or system level."
  ],
  "records": [
   "The commissioning record, structural documents and warranty stay with the installation in EMON. Inspections and repairs are added to the same record."
  ],
  "nfc": [
   "Where a TERRIX controller is fitted, tapping its NFC tag opens that controller in EMON."
  ],
  "mesh": [
   "TERRIX tracker controllers join the site Wi-Fi mesh and report to EMON. Fixed structures do not need a connection."
  ],
  "TRACKER": {
   "live": [
    "For a TRACKER, EMON shows the tracking angle next to the generation of each row."
   ],
   "control": [
    "The tracker controller follows the sun and moves to a safe position in high wind. EMON shows the mode and any fault."
   ],
   "records": [
    "Wind stow events, controller faults and service visits are logged per row in EMON."
   ]
  }
 },
 "PONTIX": {
  "commissioning": [
   "The installer registers the PONTIX floating structure in EMON during commissioning. Float rows, anchoring and the connected modules are recorded with the installation."
  ],
  "qr": [
   "Each PONTIX float assembly carries a QR code. Scanning it opens the record for that section of the array in EMON."
  ],
  "live": [
   "EMON shows the generation of the modules on the PONTIX structure, measured at inverter, string or system level."
  ],
  "records": [
   "The commissioning record, anchoring documents and warranty stay with the installation in EMON. Inspections, float replacements and repairs are added to the same record."
  ]
 },
 "TECTIX": {
  "commissioning": [
   "The installer registers the TECTIX mounting system in EMON during commissioning. Roof layout, rails and the connected modules are recorded with the installation."
  ],
  "qr": [
   "Each TECTIX kit carries a QR code. Scanning it opens the record for that roof installation in EMON."
  ],
  "live": [
   "EMON shows the generation of the modules on the TECTIX system, measured at inverter, string or system level."
  ],
  "records": [
   "The commissioning record, roof calculations and warranty stay with the installation in EMON. Inspections and repairs are added to the same record."
  ],
  "FLAT ROOF": {
   "records": [
    "For a FLAT ROOF, the ballast plan is stored with the installation record in EMON."
   ]
  },
  "PITCHED ROOF": {
   "records": [
    "For a PITCHED ROOF, the roof hook positions are stored with the installation record in EMON."
   ]
  }
 },
 "PARX": {
  "commissioning": [
   "The installer registers the PARX structure in EMON during commissioning. Bays, columns and the connected modules are recorded with the installation."
  ],
  "qr": [
   "Each PARX structure carries a QR code. Scanning it opens the record for that carport or bikeport in EMON."
  ],
  "live": [
   "EMON shows the generation of the modules on the PARX roof, measured at inverter, string or system level. Where XOOM chargers are fitted, EMON shows charging next to generation."
  ],
  "records": [
   "The commissioning record, structural calculations and warranty stay with the installation in EMON. Inspections and repairs are added to the same record."
  ]
 },
 "WURK": {
  "commissioning": [
   "One approved first use is registered in EMON, together with the method, before the tool is used on site. TO CONFIRM: WURK wording."
  ],
  "nfc": [
   "Tapping the NFC tag on a WURK tool opens its record in EMON: model, serial number and service status."
  ],
  "qr": [
   "Each WURK tool carries a QR code. Scanning it opens the same record in EMON."
  ],
  "records": [
   "EMON keeps the service record of each WURK tool: inspections, calibration where it applies, repairs and the crew it is assigned to."
  ],
  "GAUGE": {
   "live": [
    "Measurements taken with GAUGE can be saved to the installation record in EMON."
   ],
   "records": [
    "Calibration dates for GAUGE are kept in EMON."
   ]
  },
  "PROBE": {
   "live": [
    "Measurements taken with PROBE can be saved to the installation record in EMON."
   ],
   "records": [
    "Calibration dates for PROBE are kept in EMON."
   ]
  },
  "HOLD": {
   "records": [
    "Inspection dates for HOLD fall protection are kept in EMON."
   ]
  }
 },
 "MOX": {
  "commissioning": [
   "The installer registers the MOX mounting system in EMON during commissioning. Layout, profiles and the connected modules are recorded with the installation."
  ],
  "qr": [
   "Each MOX kit carries a QR code. Scanning it opens the record for that installation in EMON."
  ],
  "live": [
   "EMON shows the generation of the modules on the MOX system, measured at inverter, string or system level."
  ],
  "records": [
   "The commissioning record, structural calculations and warranty stay with the installation in EMON. Inspections and repairs are added to the same record."
  ],
  "Building-attached": {
   "records": [
    "For a building-attached system, the fixing points on the building are stored with the installation record in EMON."
   ]
  },
  "Building envelope": {
   "records": [
    "For a building envelope system, the facade or roof layout is stored with the installation record in EMON."
   ]
  }
 }
};
