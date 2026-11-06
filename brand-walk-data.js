/* DEPTH-1470 · Factory walks for further brands. Built from the approved stage rows on the company E&M pages (em-stages-data*.js): machine, what is done, how it is tested, saved to EMON. No new claims. */
window.FW_SETS = window.FW_SETS || {};
window.FW_SETS['moebius'] = {
 "accent": "#F1931B",
 "title": "From board to site.",
 "intro": "Electronic boards, power stages, magnetic components and enclosures are manufactured and inspected. Each inverter is assembled, programmed, calibrated and tested before final inspection, robotic packing and traceable dispatch.",
 "note": "Stages marked Saved to EMON store their results on the server under the inverter's serial number, so they can be viewed in EMON later.",
 "hint": "14 stations, from incoming components to the scan on site. Move through the line with the arrows, the dots or Play.",
 "steps": [
  {
   "name": "Incoming components",
   "scene": "inmat",
   "machine": "Receiving station with scanners and ESD and humidity-controlled storage.",
   "cap": "Semiconductors, boards, capacitors, magnetics, relays, enclosures and harnesses are scanned and compared with the approved bill of materials.",
   "test": "Sample measurements and document checks to the inspection plan. Rejected parts go to quality hold.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Circuit board assembly (SMT)",
   "scene": "smt",
   "machine": "Stencil printer, solder paste inspection, high-speed pick and place, reflow oven.",
   "cap": "Solder paste is printed, components are placed by robots and soldered in a controlled oven profile. Every board gets its own identifier.",
   "test": "Paste inspection after printing, automated optical inspection after reflow and X-ray for hidden joints where specified.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Board test and coating",
   "scene": "ict",
   "machine": "In-circuit or flying probe tester, programming station, selective coating machine.",
   "cap": "Boards are tested, programmed with initial firmware, masked and conformal coated where specified.",
   "test": "Functional board test after coating. Failed boards go through controlled rework and are retested.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Magnetics",
   "scene": "wind",
   "machine": "Winding machines, impregnation and curing equipment.",
   "cap": "Inductors and chokes are wound, insulated, assembled on their cores and impregnated where specified.",
   "test": "Inductance, resistance and insulation are measured on every part.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Enclosure and heatsink",
   "scene": "cncp",
   "machine": "Casting or extrusion, CNC machining and coating line.",
   "cap": "Enclosures and heatsinks are produced, thermal and sealing surfaces are machined and the finish is applied.",
   "test": "Flatness of heatsink contact areas and gasket channels is checked.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Power stage",
   "scene": "pot",
   "machine": "Thermal interface dispenser and torque-controlled fastening.",
   "cap": "Thermal material is applied, power devices are fastened to the heatsink, and the DC link capacitors, magnetics and busbars are installed.",
   "test": "Torque is recorded, thermal interface coverage and clearances are inspected, and sub-assembly tests catch defects early.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Final assembly",
   "scene": "final",
   "machine": "Conveyor line with robot or lift assist.",
   "cap": "The power stage goes into the enclosure with control board, sensing, relays, filters, protection, connectors, communication board and fans.",
   "test": "Wiring, clearances and critical fasteners are inspected before controlled first power-up.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Firmware and calibration",
   "scene": "fcomm",
   "machine": "Programming and calibration station.",
   "cap": "Bootloader, control and communication firmware and the product configuration are loaded. A unique device identity and credentials are assigned. Voltage and current measurements are calibrated.",
   "test": "Software is checked against the physical model. Update and recovery are verified.",
   "why": "",
   "emon": "Firmware versions, configuration and calibration values, linked to the inverter serial.",
   "usp": false
  },
  {
   "name": "Simulator test",
   "scene": "simt",
   "machine": "Test cell with solar array simulator, grid simulator and battery simulator for hybrid models.",
   "cap": "The inverter starts on simulated PV, each MPPT channel is checked, AC output, power levels, grid connection and protection functions are tested. Hybrid models also test charging, discharging, backup and BMS communication.",
   "test": "Insulation, bonding and dielectric tests, efficiency screening and power quality checks against production limits.",
   "why": "",
   "emon": "Electrical safety and functional test results, linked to the inverter serial.",
   "usp": false
  },
  {
   "name": "Burn-in",
   "scene": "cage",
   "machine": "Ageing station with load profile and temperature logging.",
   "cap": "4 hours at rated power at around 45 °C ambient, with temperature, output and fault logging.",
   "test": "Thermal inspection and a final electrical check after the run. Failures go to rework with a full retest.",
   "why": "",
   "emon": "Burn-in result, linked to the inverter serial.",
   "usp": false
  },
  {
   "name": "Potting (PIXIE)",
   "scene": "pot",
   "machine": "Resin mixing and dispensing system with vacuum degassing.",
   "cap": "PIXIE microinverters are fully potted with silicone resin for moisture protection and heat transfer, then cured.",
   "test": "Coverage, fill level, mass and cure are checked, then electrical safety and conversion are tested again after closure.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Labels",
   "scene": "label",
   "machine": "Label printer with scanner verification.",
   "cap": "The MOEBIUS rating label and the serial and QR label are applied. Shipping configuration and commissioning state are set.",
   "test": "Labels are scanned and matched to hardware, software and production order.",
   "why": "",
   "emon": "Serial number linked to the QR code.",
   "usp": false
  },
  {
   "name": "Robotic packing",
   "scene": "pack",
   "machine": "Carton erector, packing robot with structural gripper, checkweigher.",
   "cap": "The inverter is lifted by approved points, placed in its inserts with bracket, connectors and documents, then sealed.",
   "test": "Accessory scan, weight check and label read before palletising.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "From factory to site",
   "scene": "site",
   "machine": "Phone or tablet with the EMON app.",
   "cap": "The installer scans the QR code. EMON finds the inverter with firmware, calibration and test results and links it to the site, strings and battery.",
   "test": "EMON checks serial, firmware and the communication link.",
   "why": "",
   "emon": "The installed inverter is linked to its factory record, installer and site.",
   "usp": false
  }
 ]
};

/* DEPTH-1471 · MOEBIUS chapters Testing, To site, Traceability, Circularity (user approved 5 Nov 2026, draft _MOEBIUS_WALK_CHAPTERS_DRAFT.md). */
window.FW_SETS['moebius-test'] = {
 "title": "Tested in production.",
 "intro": "A solar array simulator, grid simulator and measurement instruments allow controlled tests without sunlight or a real battery. Limits are approved per model.",
 "steps": [
  {
   "name": "Board test",
   "scene": "ict",
   "machine": "In-circuit or flying probe tester, programming station, selective coating machine.",
   "cap": "Circuit testing, initial board firmware and board functional tests. Failed boards are repaired through a controlled route.",
   "test": "Functional board test after coating. Failed boards go through controlled rework and are retested.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Magnetics test",
   "scene": "wind",
   "machine": "Winding machines, impregnation and curing equipment.",
   "cap": "Electrical characteristics are measured and insulation is tested. Dimensions and mounting points are inspected.",
   "test": "Inductance, resistance and insulation are measured on every part.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Power stage test",
   "scene": "pot",
   "machine": "Thermal interface dispenser and torque-controlled fastening.",
   "cap": "Thermal interfaces and power circuit clearances are inspected, then the subassembly is tested.",
   "test": "Torque is recorded, thermal interface coverage and clearances are inspected, and sub-assembly tests catch defects early.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Pre-power inspection",
   "scene": "final",
   "machine": "Conveyor line with robot or lift assist.",
   "cap": "Wiring and clearances are inspected, critical fasteners are verified and the unit is checked for foreign objects before first power-up.",
   "test": "Wiring, clearances and critical fasteners are inspected before controlled first power-up.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Calibration check",
   "scene": "fcomm",
   "machine": "Programming and calibration station.",
   "cap": "Voltage and current measurements are calibrated. Temperature measurement, model identification, communication interfaces and update and recovery behaviour are verified.",
   "test": "Software is checked against the physical model. Update and recovery are verified.",
   "why": "",
   "emon": "Firmware versions, configuration and calibration values, linked to the inverter serial.",
   "usp": false
  },
  {
   "name": "Electrical safety",
   "scene": "safety",
   "machine": "Measurement instruments in the test station.",
   "cap": "Protective bonding, insulation resistance and, where specified, dielectric withstand are tested before a controlled initial power-up.",
   "test": "Limits are approved per model.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Functional test",
   "scene": "simt",
   "machine": "Test cell with solar array simulator, grid simulator and battery simulator for hybrid models.",
   "cap": "Each MPPT channel, the AC output, power quality, grid connection and disconnection and selected protection functions are verified.",
   "test": "Insulation, bonding and dielectric tests, efficiency screening and power quality checks against production limits.",
   "why": "",
   "emon": "Electrical safety and functional test results, linked to the inverter serial.",
   "usp": false
  },
  {
   "name": "Hybrid tests",
   "scene": "simt",
   "machine": "Battery simulator and meter simulator.",
   "cap": "For hybrid models with these functions: battery communication, charging and discharging, BMS stop requests, export control and, where supported, the transition to backup.",
   "test": "Hybrid test results are recorded.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Burn-in",
   "scene": "cage",
   "machine": "Ageing station with load profile and temperature logging.",
   "cap": "Burn-in conditions follow product and process validation, not an arbitrary number of hours. Internal temperatures, output and fault records are monitored under the approved load profile.",
   "test": "Thermal inspection and a final electrical check after the run. Failures go to rework with a full retest.",
   "why": "",
   "emon": "Burn-in result, linked to the inverter serial.",
   "usp": false
  },
  {
   "name": "Final electrical checks",
   "scene": "safety",
   "machine": "Test station.",
   "cap": "The cover is fitted and sealed, sealing is checked where specified and final electrical checks are made. Failed units are diverted to rework.",
   "test": "Only fully accepted units enter the packing line.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Label verification",
   "scene": "label",
   "machine": "Label printer with scanner verification.",
   "cap": "Serial and QR labels are applied and verified by scanner or camera. The production record is reviewed before factory release.",
   "test": "Labels are scanned and matched to hardware, software and production order.",
   "why": "",
   "emon": "Serial number linked to the QR code.",
   "usp": false
  }
 ],
 "accent": "#F1931B"
};
window.FW_SETS['moebius-home'] = {
 "title": "From factory to site.",
 "intro": "Each inverter stays traceable on the pallet. On site, a QR scan or NFC tap opens its own record, and EMON links it to the location, strings and battery.",
 "steps": [
  {
   "name": "Pallet and dispatch",
   "scene": "pallet",
   "machine": "Robotic palletiser, stretch wrapper and pallet label.",
   "cap": "Inverter serial numbers are linked to the pallet. The load is protected, wrapped and labelled.",
   "test": "The completed pallet is inspected and allocated to the shipment.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Truck",
   "scene": "truck",
   "machine": "Finished goods storage and transport.",
   "cap": "Shipment documentation is verified, the shipment is loaded and secured, and dispatch is recorded.",
   "test": "Dispatch is recorded against the pallet and its serial numbers.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Tap or scan on site",
   "scene": "depot",
   "machine": "Phone with NFC and the EMON app.",
   "cap": "Tap the unit with an NFC-enabled phone to open the record connected to that exact serial number. The NFC tag is passive, so product information, documentation and support routes can be accessed while the inverter is switched off.",
   "test": "The exact product record opens, with no manual serial-number entry.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Open the project",
   "scene": "sheet",
   "machine": "A4 project sheet with the project QR.",
   "cap": "One A4 project sheet carries the project QR, the device schedule and the commissioning checklist. Scan it to open the approved project, or scan the inverter QR or tap NFC to start a new one.",
   "test": "The installer follows the guided workflow. No laptop, no manual look-up.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Discover and connect",
   "scene": "phone",
   "machine": "EMON app and integrated Wi-Fi mesh.",
   "cap": "EMON discovers supported devices on the installation automatically. A standard Wi-Fi mesh links them for local communication.",
   "test": "QR activation completes in under 30 seconds. Complete connection, from power-up to live status in EMON, takes only a few minutes.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Location and strings",
   "scene": "roof",
   "machine": "EMON app.",
   "cap": "Each device is placed to its physical location on the site. String-to-MPPT allocation is recorded as it is wired.",
   "test": "Location, strings and MPPTs become part of the commissioned record.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Verify and approve",
   "scene": "sheet",
   "machine": "EMON app.",
   "cap": "Measurements, settings and photographs are captured and the record is approved. The owner summary and installer technical file are generated automatically.",
   "test": "The grid profile is selected and recorded at commissioning, not defaulted.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Warranty",
   "scene": "mail",
   "machine": "EMON.",
   "cap": "The warranty is activated from the commissioned record: the exact product identity, the installation data and the commissioning result the installer approved.",
   "test": "The factory test result is carried through to the installed warranty. Confirmation is stored in the owner's file.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Follow in EMON",
   "scene": "phone",
   "machine": "EMON app.",
   "cap": "Generation and system state are shown against the installed configuration. A fault is connected to a string, MPPT and location, not just a code.",
   "test": "Owner and installer see the same system, at the level appropriate to each.",
   "why": "",
   "emon": "The installed inverter is linked to its factory record, installer and site.",
   "usp": false
  }
 ],
 "accent": "#F1931B"
};
window.FW_SETS['moebius-trace'] = {
 "title": "One identity, every record.",
 "intro": "Records kept for every inverter. They support quality investigation, service and manufacturing changes.",
 "steps": [
  {
   "name": "Product identity",
   "scene": "inmat",
   "machine": "Production record under the inverter's serial number.",
   "cap": "Model, hardware revision and serial number.",
   "test": "Kept with the serial number and retrievable for quality investigation, service and manufacturing changes.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Circuit board genealogy",
   "scene": "smt",
   "machine": "Production record under the inverter's serial number.",
   "cap": "Board serials, revisions and component batches.",
   "test": "Kept with the serial number and retrievable for quality investigation, service and manufacturing changes.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Critical components",
   "scene": "ict",
   "machine": "Production record under the inverter's serial number.",
   "cap": "Power semiconductor, capacitor, relay and magnetics batches.",
   "test": "Kept with the serial number and retrievable for quality investigation, service and manufacturing changes.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Electronics production",
   "scene": "wind",
   "machine": "Production record under the inverter's serial number.",
   "cap": "Soldering, inspection, board testing and rework records.",
   "test": "Kept with the serial number and retrievable for quality investigation, service and manufacturing changes.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Mechanical assembly",
   "scene": "final",
   "machine": "Production record under the inverter's serial number.",
   "cap": "Critical fastening and thermal interface records.",
   "test": "Kept with the serial number and retrievable for quality investigation, service and manufacturing changes.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Firmware",
   "scene": "fcomm",
   "machine": "Production record under the inverter's serial number.",
   "cap": "Released versions, configuration and programming results.",
   "test": "Kept with the serial number and retrievable for quality investigation, service and manufacturing changes.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Calibration",
   "scene": "fcomm",
   "machine": "Production record under the inverter's serial number.",
   "cap": "Measurement corrections and verification results.",
   "test": "Kept with the serial number and retrievable for quality investigation, service and manufacturing changes.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Electrical safety",
   "scene": "safety",
   "machine": "Production record under the inverter's serial number.",
   "cap": "Test conditions, measured results and acceptance status.",
   "test": "Kept with the serial number and retrievable for quality investigation, service and manufacturing changes.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Functional testing",
   "scene": "simt",
   "machine": "Production record under the inverter's serial number.",
   "cap": "PV, grid, battery and communication results as applicable.",
   "test": "Kept with the serial number and retrievable for quality investigation, service and manufacturing changes.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Ageing",
   "scene": "cage",
   "machine": "Production record under the inverter's serial number.",
   "cap": "Load profile, duration, temperatures and recorded faults.",
   "test": "Kept with the serial number and retrievable for quality investigation, service and manufacturing changes.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Quality release",
   "scene": "label",
   "machine": "Production record under the inverter's serial number.",
   "cap": "Inspection approval and unresolved issue check.",
   "test": "Kept with the serial number and retrievable for quality investigation, service and manufacturing changes.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Packaging and shipment",
   "scene": "pallet",
   "machine": "Production record under the inverter's serial number.",
   "cap": "Accessories, carton, pallet and destination.",
   "test": "Kept with the serial number and retrievable for quality investigation, service and manufacturing changes.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "On site",
   "scene": "phone",
   "machine": "EMON app.",
   "cap": "The installed inverter is linked to its factory record, installer and site.",
   "test": "Revisions are recorded against the same file.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#F1931B"
};
window.FW_SETS['moebius-circ'] = {
 "title": "A documented lifecycle.",
 "intro": "Designed to be diagnosed, maintained and repaired from the commissioned record. Collection and recycling routes for materials, packaging and end of life depend on the country.",
 "steps": [
  {
   "name": "Diagnostics",
   "scene": "fcomm",
   "machine": "EMON app with QR or NFC.",
   "cap": "Open the project by QR or passive NFC. Identity, strings, MPPT and grid profile are already present.",
   "test": "Defined service access, with parts and revision history.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Firmware over the lifetime",
   "scene": "phone",
   "machine": "EMON.",
   "cap": "Automatic firmware keeps the fleet current, and every change is versioned against the commissioned record, so installer and owner can see what runs and when it changed.",
   "test": "Signed firmware updates.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Maintenance and repair",
   "scene": "final",
   "machine": "Service access and spare parts.",
   "cap": "Serviceability is designed in: parts, access and diagnostics are part of the product, not an afterthought.",
   "test": "Revisions are recorded against the file.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Collection and recycling",
   "scene": "truck",
   "machine": "Country collection routes.",
   "cap": "Collection and recycling routes for materials, packaging and end of life depend on the country.",
   "test": "Inverters are electrical equipment under the WEEE Directive (2012/19/EU).",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Lifecycle record",
   "scene": "sheet",
   "machine": "Project record in EMON.",
   "cap": "The record stays true to the installed system.",
   "test": "Ownership and access to project and production data are defined, not assumed.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#F1931B"
};

/* DEPTH-1474 · SYNQ production walk from em-stages-data (measure). */
window.FW_SETS['synq'] = {
 "accent": "#598F94",
 "title": "From mould to site.",
 "intro": "Precision-moulded housings and finished metal parts are combined with SMT-assembled electronics, sensors and communication components. Each device is programmed and tested; measurement products are also calibrated. Approved devices are robotically packed with their accessories and traced through dispatch.",
 "note": "Stages marked Saved to EMON store their results on the server under the device's serial number, so they can be viewed in EMON later.",
 "hint": "13 stations, from injection moulds to the scan on site. Move through the line with the arrows, the dots or Play.",
 "steps": [
  {
   "name": "Injection moulds",
   "scene": "cncp",
   "machine": "CNC machining, EDM and mould trial press.",
   "cap": "Moulds for housings, covers, connector surrounds and DIN rail parts are made, trialled and corrected.",
   "test": "First samples are measured against drawing tolerances and test-fitted with board, front plate and halo.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Moulding",
   "scene": "mould",
   "machine": "Injection moulding machines with robotic part removal.",
   "cap": "Dried resin is moulded under a controlled recipe. Runners are cut and parts are placed on supported conveyors.",
   "test": "Flash, sink marks and short shots are inspected. Critical dimensions are measured by sampling.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Halo and light guides",
   "scene": "mould",
   "machine": "Dedicated optical moulds and light test fixture.",
   "cap": "The halo and light guides are moulded from optical polymer.",
   "test": "Light distribution and brightness are checked in a fixture, along with surface quality.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Aluminium front",
   "scene": "cncp",
   "machine": "Stamping, deburring and brushing line.",
   "cap": "Front plates are cut, deburred, brushed in one direction and given a protective finish.",
   "test": "Flatness, dimensions and cosmetic quality are inspected.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Circuit board assembly (SMT)",
   "scene": "smt",
   "machine": "Stencil printer, paste inspection, pick and place, reflow oven.",
   "cap": "Boards are printed, assembled, soldered and given an identifier.",
   "test": "Optical inspection, circuit tests and a functional test of power, processor, memory, interfaces and indicators.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Cables, CTs and antenna",
   "scene": "wind",
   "machine": "Cable cutting, crimping and test equipment.",
   "cap": "P1 and USB cables, CT leads and the external antenna are assembled.",
   "test": "Continuity, retention and CT ratio and polarity are tested. The antenna gets an RF check.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Assembly",
   "scene": "final",
   "machine": "Assembly fixtures with camera-guided front plate placement.",
   "cap": "Halo, board, connectors, NFC component and front plate are fitted and the housing is closed.",
   "test": "Gaps, alignment and connector access are inspected.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Programming and identity",
   "scene": "fcomm",
   "machine": "Programming fixture with QR printer and NFC writer.",
   "cap": "Firmware is loaded, the serial number and network identifiers are assigned, credentials are provisioned, NFC data is written and the QR code is generated.",
   "test": "The station checks that QR, NFC and electronic identity point to the same device.",
   "why": "",
   "emon": "Firmware version, device identity and QR/NFC link.",
   "usp": false
  },
  {
   "name": "P1 test (P1 reader)",
   "scene": "simt",
   "machine": "P1 simulator.",
   "cap": "Valid, corrupted and missing meter messages are sent for DSMR 4.x and 5.x and the Belgian e-MUCS P1. Import and export values, timestamps, recovery, wireless link and commissioning are checked. Other markets are added as tested.",
   "test": "Every reader must decode correct values and reject invalid data.",
   "why": "",
   "emon": "P1 test result, linked to the device serial.",
   "usp": false
  },
  {
   "name": "Calibration (energy meter)",
   "scene": "ict",
   "machine": "Calibration station with reference voltage and current source.",
   "cap": "Voltage, current, phase and offset are calibrated and the coefficients are stored in the meter.",
   "test": "Accuracy is verified at independent test points, per phase and in both directions. The DIN-rail energy meters (single- and three-phase) are MID certified, Class B. The P1 reader and smart plugs are monitoring devices, not billing meters.",
   "why": "",
   "emon": "Calibration coefficients and verification results, linked to the meter serial.",
   "usp": false
  },
  {
   "name": "Labels",
   "scene": "label",
   "machine": "Label printer and scanner.",
   "cap": "The product label and the serial and QR label are applied. Factory network credentials are removed.",
   "test": "Label, NFC and electronic identity are compared.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Robotic packing",
   "scene": "pack",
   "machine": "Compact SCARA robot, carton forming and checkweigher.",
   "cap": "The device is placed in its insert with the right cables, CTs, antenna and guide.",
   "test": "Vision, scan and weight check confirm the kit is complete.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "From factory to site",
   "scene": "phone",
   "machine": "Phone with the EMON app.",
   "cap": "The installer scans the QR code or taps NFC. EMON recognises the device, its firmware and test results, and adds it to the site.",
   "test": "EMON checks identity and first data reception.",
   "why": "",
   "emon": "The installed device is linked to its factory record, installer and site.",
   "usp": false
  }
 ]
};

/* DEPTH-1476 · SYNQ chapters (user approved 5 Nov 2026; Circularity without NEW / TO CONFIRM lines). */
window.FW_SETS['synq-test'] = {
 "title": "Tested in production.",
 "intro": "Each device is programmed and tested; measurement products are also calibrated. Routine tests on every device are separate from qualification, reliability and audit tests.",
 "steps": [
  {
   "name": "Optical check",
   "scene": "mould",
   "machine": "Dedicated optical moulds and light test fixture.",
   "cap": "The halo and light guides are moulded from optical polymer.",
   "test": "Light distribution and brightness are checked in a fixture, along with surface quality.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Board test",
   "scene": "ict",
   "machine": "Stencil printer, paste inspection, pick and place, reflow oven.",
   "cap": "Circuits are tested in-circuit or by flying probe, initial firmware is programmed and power, processor, memory, interfaces and indicators are tested. Failed boards are reworked through a controlled route and retested.",
   "test": "Optical inspection, circuit tests and a functional test of power, processor, memory, interfaces and indicators.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Cables, CTs and antenna",
   "scene": "wind",
   "machine": "Cable cutting, crimping and test equipment.",
   "cap": "P1 and USB cables, CT leads and the external antenna are assembled.",
   "test": "Continuity, retention and CT ratio and polarity are tested. The antenna gets an RF check.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Identity check",
   "scene": "fcomm",
   "machine": "Programming fixture with QR printer and NFC writer.",
   "cap": "QR, NFC and electronic identity are verified against each other and the software and provisioning results are recorded.",
   "test": "The station checks that QR, NFC and electronic identity point to the same device.",
   "why": "",
   "emon": "Firmware version, device identity and QR/NFC link.",
   "usp": false
  },
  {
   "name": "P1 test",
   "scene": "simt",
   "machine": "P1 simulator.",
   "cap": "Valid, corrupted and missing meter messages are sent for DSMR 4.x and 5.x and the Belgian e-MUCS P1. Import and export values, timestamps, recovery, wireless link and commissioning are checked. Other markets are added as tested.",
   "test": "Every reader must decode correct values and reject invalid data.",
   "why": "",
   "emon": "P1 test result, linked to the device serial.",
   "usp": false
  },
  {
   "name": "Calibration",
   "scene": "ict",
   "machine": "Calibration station with reference voltage and current source.",
   "cap": "Voltage, current, phase and offset are calibrated and the coefficients are stored in the meter.",
   "test": "Accuracy is verified at independent test points, per phase and in both directions. The DIN-rail energy meters (single- and three-phase) are MID certified, Class B. The P1 reader and smart plugs are monitoring devices, not billing meters.",
   "why": "",
   "emon": "Calibration coefficients and verification results, linked to the meter serial.",
   "usp": false
  },
  {
   "name": "Electrical safety",
   "scene": "safety",
   "machine": "Calibration station.",
   "cap": "Approved insulation and dielectric procedures are applied to the meter. Failed meters are rejected for controlled investigation and retest.",
   "test": "Results are saved to the complete unit record.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Final release",
   "scene": "label",
   "machine": "Label printer and scanner.",
   "cap": "Test and calibration status are reviewed: all required stages must be accepted. Factory network credentials are removed and factory release is authorised.",
   "test": "Quality approval is recorded.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Kit check",
   "scene": "pack",
   "machine": "Compact SCARA robot, carton forming and checkweigher.",
   "cap": "The device is placed in its insert with the right cables, CTs, antenna and guide.",
   "test": "Vision, scan and weight check confirm the kit is complete.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Qualification and audit",
   "scene": "chamber",
   "machine": "Qualification and audit test equipment.",
   "cap": "EMC, radio, electrical safety, temperature and humidity, connector durability, drop, DIN-rail retention, halo ageing and packaging protection are qualified and audit-sampled.",
   "test": "A meter for billing needs its own approval route; factory calibration is not billing certification.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#598F94"
};
window.FW_SETS['synq-home'] = {
 "title": "From factory to site.",
 "intro": "Each active SYNQ device has its own digital identity. The installer scans a QR code or taps an NFC tag, and EMON recognises the rest.",
 "steps": [
  {
   "name": "Cartons and pallet",
   "scene": "pallet",
   "machine": "Case packer, pallet wrapper and labels.",
   "cap": "Retail cartons are packed into master cartons and stacked on the pallet. Device serials are linked to the master carton and the pallet.",
   "test": "Retail units stay traceable inside larger shipping packages.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Dispatch",
   "scene": "truck",
   "machine": "Finished goods storage and transport.",
   "cap": "The load is allocated to the shipment, loaded and recorded.",
   "test": "Carrier, date, cartons and device serials are recorded.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Tap or scan",
   "scene": "depot",
   "machine": "Phone with NFC and the EMON app.",
   "cap": "The NFC tag is passive, so product information, manuals and support routes can be reached while the device is switched off. Scanning always opens the workflow for the exact hardware installed.",
   "test": "No searching for the correct product or version.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "EMON recognises the device",
   "scene": "phone",
   "machine": "Phone with the EMON app.",
   "cap": "The installer scans the QR code or taps NFC. EMON recognises the device, its firmware and test results, and adds it to the site.",
   "test": "EMON checks identity and first data reception.",
   "why": "",
   "emon": "The installed device is linked to its factory record, installer and site.",
   "usp": false
  },
  {
   "name": "Installation details",
   "scene": "sheet",
   "machine": "EMON app.",
   "cap": "The device supplies its own identity. The installer adds the installation-specific details, such as the location, the circuit and the CT assignment, and never re-enters what the product already knows.",
   "test": "Location, distribution board, CT locations, meter assignments, circuit names, phase and current ratings are recorded against the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Photographs",
   "scene": "phone",
   "machine": "EMON app.",
   "cap": "Four photographs complete the installation record: meter label, serial and QR; device in the distribution board; CT clamp at the connection point; meter cabinet, full view.",
   "test": "The photographs are part of the digital installation record.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Installation record",
   "scene": "sheet",
   "machine": "EMON.",
   "cap": "During commissioning, EMON creates the digital installation record and links it permanently to that exact product.",
   "test": "The next installer arrives informed.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Follow in EMON",
   "scene": "phone",
   "machine": "EMON app.",
   "cap": "SYNQ gives EMON the data, and EMON turns it into decisions for the owner and the installer.",
   "test": "When the internet is down, measurement, communication and automation run on site. Remote access, tariff updates and cloud services pause and resume automatically.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#598F94"
};
window.FW_SETS['synq-trace'] = {
 "title": "One identity, every record.",
 "intro": "Records kept for every SYNQ device, under its serial number.",
 "steps": [
  {
   "name": "Device identity",
   "scene": "label",
   "machine": "Production record under the device's serial number.",
   "cap": "Model, revision and serial number.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Plastic parts",
   "scene": "mould",
   "machine": "Production record under the device's serial number.",
   "cap": "Resin batch, mould, cavity and inspection results.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Metal front",
   "scene": "cncp",
   "machine": "Production record under the device's serial number.",
   "cap": "Material batch, finish and dimensional checks.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Circuit board",
   "scene": "smt",
   "machine": "Production record under the device's serial number.",
   "cap": "Board serial, revision, component batches and test results.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Accessories",
   "scene": "wind",
   "machine": "Production record under the device's serial number.",
   "cap": "Cable, CT and antenna batches.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Assembly",
   "scene": "final",
   "machine": "Production record under the device's serial number.",
   "cap": "Station, date, equipment and inspection status.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Software",
   "scene": "fcomm",
   "machine": "Production record under the device's serial number.",
   "cap": "Firmware version and product configuration.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Provisioning",
   "scene": "fcomm",
   "machine": "Production record under the device's serial number.",
   "cap": "Device identity and credential status.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "P1 testing",
   "scene": "simt",
   "machine": "Production record under the device's serial number.",
   "cap": "Interface test results and data checks.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Meter calibration",
   "scene": "ict",
   "machine": "Production record under the device's serial number.",
   "cap": "Reference equipment, coefficients and verification results.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Final release",
   "scene": "label",
   "machine": "Production record under the device's serial number.",
   "cap": "Quality authorisation.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Packaging",
   "scene": "pack",
   "machine": "Production record under the device's serial number.",
   "cap": "Device, retail carton, master carton and pallet.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Dispatch",
   "scene": "truck",
   "machine": "Production record under the device's serial number.",
   "cap": "Shipment and destination.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "On site",
   "scene": "phone",
   "machine": "EMON app.",
   "cap": "The installed device is linked to its factory record, installer and site.",
   "test": "Circuit names, CT locations, meter assignments, phase and current ratings are recorded against the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#598F94"
};
window.FW_SETS['synq-circ'] = {
 "title": "A documented lifecycle.",
 "intro": "Service and extension start from the digital installation record.",
 "steps": [
  {
   "name": "Service from the record",
   "scene": "phone",
   "machine": "EMON app with QR or NFC.",
   "cap": "Every service visit starts from the digital installation record: circuits, CT locations, phases and ratings, stored against the serial number.",
   "test": "Service, extension or fault-finding starts from the installation as it is, not from a folder of unrelated manuals.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Lifecycle record",
   "scene": "sheet",
   "machine": "Project record in EMON.",
   "cap": "The installed device is linked to its factory record, installer and site.",
   "test": "The next installer arrives informed.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#598F94"
};

/* DEPTH-1477 · NENDO production walk from em-stages-data (use). */
window.FW_SETS['nendo'] = {
 "accent": "#1B8B9A",
 "title": "From compressor to site.",
 "intro": "Approved compressors, heat exchangers, hydraulic components and electronics are integrated into controlled mechanical assemblies. Refrigerant circuits are pressure tested, leak tested, evacuated and charged. Completed products are programmed, functionally tested and checked for system communication before protected packing and traceable dispatch.",
 "note": "Stages marked Saved to EMON store their results on the server under the heat pump's serial number, so they can be viewed in EMON later.",
 "hint": "15 stations, from incoming components to the scan on site. Move through the line with the arrows, the dots or Play.",
 "steps": [
  {
   "name": "Incoming components",
   "scene": "inmat",
   "machine": "Receiving station with scanners.",
   "cap": "Compressors, heat exchangers, valves, sensors, pumps and electronics are scanned and compared with the approved bill of materials.",
   "test": "Pressure ratings, cleanliness of tubing and supplier test records are checked.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Metal and moulding",
   "scene": "cncp",
   "machine": "Laser cutting, CNC press brake, coating line and injection moulding machines.",
   "cap": "Chassis, panels and plastic parts are cut, bent, coated and moulded. Acoustic and vibration parts are produced.",
   "test": "Dimensions, coating and fit are inspected.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Heat exchangers",
   "scene": "hx",
   "machine": "Brazing and pressure test equipment.",
   "cap": "Coils and plate exchangers are assembled, joined and cleaned inside. Refrigeration tubes are cut and bent.",
   "test": "Every exchanger is pressure and leak tested before it is sealed.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Electronics",
   "scene": "smt",
   "machine": "SMT line and drive test bench.",
   "cap": "Control boards, compressor drive and the AERO MPPT stage are assembled and programmed. On AERO, PV DC feeds the compressor inverter DC bus directly; grid AC tops up when PV is short.",
   "test": "Optical inspection, circuit tests and functional drive tests.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Refrigeration circuit",
   "scene": "final",
   "machine": "Assembly line with lift assist and brazing stations.",
   "cap": "The compressor is mounted on vibration isolators, exchangers, valves and sensors are installed and the circuit is joined.",
   "test": "Every accessible joint is inspected. Compressor and exchangers are linked to the unit serial.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Leak test, evacuation, charge",
   "scene": "leak",
   "machine": "Tracer gas leak test station, vacuum pump and charging unit for R290.",
   "cap": "The circuit is pressure tested, leak tested with tracer gas, evacuated and charged by mass.",
   "test": "Vacuum criteria and post-charge leak checks must pass before functional testing. Refrigerant: R290, charged by mass per model; the exact charge is on the rating label and saved in EMON.",
   "why": "",
   "emon": "Leak test result, refrigerant type and charged mass.",
   "usp": false
  },
  {
   "name": "Fans and hydraulics",
   "scene": "pot",
   "machine": "Assembly fixtures.",
   "cap": "Fans, condensate tray, pumps, valves, sensors and insulation are installed.",
   "test": "The hydraulic circuit is pressure and leak tested, then drained.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "FLOW units",
   "scene": "final",
   "machine": "Hydraulic assembly line.",
   "cap": "Manifolds, valves, pumps and sensors are built into the cabinet and the controller is programmed.",
   "test": "Pressure test, flushing and simulated hybrid operation.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "VESSEL tanks",
   "scene": "tank",
   "machine": "Shell rolling, welding and pressure test equipment.",
   "cap": "VESSEL BUFFER (heating water, steel, 150, 200 and 300 L) and VESSEL DHW (potable hot water, 150, 200 and 300 L, enamelled steel with magnesium anode and one heat-pump coil) follow separate routes: shells are rolled and welded, coils fitted, the inside treated, insulation applied and the jacket fitted.",
   "test": "Every tank is pressure tested.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "RAY controller",
   "scene": "simt",
   "machine": "SMT line, PV simulator and heater load.",
   "cap": "Control and power boards are built into the enclosure and programmed.",
   "test": "MPPT tracking, temperature control and overtemperature protection are tested. RAY sends solar power directly to the immersion heater in the tank. It does not power the heat pump compressor.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "EMON test",
   "scene": "fcomm",
   "machine": "EMON test environment.",
   "cap": "Firmware and configuration are loaded, device identity is assigned, and measurements, setpoints, schedules and tariff requests are checked.",
   "test": "Loss and return of the connection must leave local operation intact.",
   "why": "",
   "emon": "Firmware, configuration and EMON interface check.",
   "usp": false
  },
  {
   "name": "Run test",
   "scene": "simt",
   "machine": "Test station with water and electrical fixtures.",
   "cap": "The unit starts, runs heating and cooling where supported, defrost and auxiliary heaters are checked, and selected faults are simulated.",
   "test": "Electrical safety, input power, flow temperatures, noise and vibration screening, and a final leak check.",
   "why": "",
   "emon": "Run test result, linked to the unit serial.",
   "usp": false
  },
  {
   "name": "Labels",
   "scene": "label",
   "machine": "Label printer.",
   "cap": "Rating label with refrigerant information and the serial and QR label are applied.",
   "test": "Labels are checked against the production record.",
   "why": "",
   "emon": "Serial number linked to the QR code.",
   "usp": false
  },
  {
   "name": "Packing",
   "scene": "pack",
   "machine": "Robot with base support tooling and carton sleeve station.",
   "cap": "The unit is placed on its packaging base by its structure, protected and sleeved.",
   "test": "Accessories, weight and labels are checked.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "From factory to site",
   "scene": "phone",
   "machine": "Phone or tablet with the EMON app.",
   "cap": "The installer scans the QR code. EMON finds the unit with its refrigerant charge, leak test and run test and adds it to the system.",
   "test": "EMON checks serial and first communication.",
   "why": "",
   "emon": "The installed unit is linked to its factory record, installer and site.",
   "usp": false
  }
 ]
};

/* DEPTH-1479 · NENDO chapters (user approved 5 Nov 2026). */
window.FW_SETS['nendo-test'] = {
 "title": "Tested in production.",
 "intro": "Every CORE and AERO unit gets a defined production test. Full performance mapping, seasonal performance and acoustic certification belong to qualification in accredited laboratories.",
 "steps": [
  {
   "name": "Incoming checks",
   "scene": "inmat",
   "machine": "Receiving station with scanners.",
   "cap": "Compressors, heat exchangers, valves, sensors, pumps and electronics are scanned and compared with the approved bill of materials.",
   "test": "Pressure ratings, cleanliness of tubing and supplier test records are checked.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Heat exchanger test",
   "scene": "hx",
   "machine": "Brazing and pressure test equipment.",
   "cap": "Every exchanger gets a pressure integrity test and a leak test before its connections are sealed for transport.",
   "test": "Every exchanger is pressure and leak tested before it is sealed.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Drive test",
   "scene": "smt",
   "machine": "SMT line and drive test bench.",
   "cap": "Compressor drive assemblies and, where fitted, MPPT assemblies are tested. Failed boards are reworked and retested.",
   "test": "Optical inspection, circuit tests and functional drive tests.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Joint inspection",
   "scene": "final",
   "machine": "Assembly line with lift assist and brazing stations.",
   "cap": "Every accessible joint is inspected and the critical component identities are recorded.",
   "test": "Every accessible joint is inspected. Compressor and exchangers are linked to the unit serial.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Leak test and charge",
   "scene": "leak",
   "machine": "Tracer gas leak test station, vacuum pump and charging unit for R290.",
   "cap": "The circuit is pressure tested, leak tested with tracer gas, evacuated and charged by mass.",
   "test": "Vacuum criteria and post-charge leak checks must pass before functional testing. Refrigerant: R290, charged by mass per model; the exact charge is on the rating label and saved in EMON.",
   "why": "",
   "emon": "Leak test result, refrigerant type and charged mass.",
   "usp": false
  },
  {
   "name": "Hydraulic test",
   "scene": "pot",
   "machine": "Assembly fixtures.",
   "cap": "The hydraulic circuit is tested for tightness, then drained and dried as required.",
   "test": "The hydraulic circuit is pressure and leak tested, then drained.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "FLOW test",
   "scene": "final",
   "machine": "Hydraulic assembly line.",
   "cap": "Valve and pump outputs and sensor inputs are tested and hybrid system operation is simulated.",
   "test": "Pressure test, flushing and simulated hybrid operation.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "VESSEL pressure test",
   "scene": "tank",
   "machine": "Shell rolling, welding and pressure test equipment.",
   "cap": "Vessel welds are inspected, the vessel is pressure tested and coils and separate circuits are leak tested.",
   "test": "Every tank is pressure tested.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "RAY test",
   "scene": "simt",
   "machine": "SMT line, PV simulator and heater load.",
   "cap": "A PV simulator and a heater load simulator test MPPT operation, temperature control inputs, independent safety interfaces and loss and return of solar input.",
   "test": "MPPT tracking, temperature control and overtemperature protection are tested. RAY sends solar power directly to the immersion heater in the tank. It does not power the heat pump compressor.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "EMON test",
   "scene": "fcomm",
   "machine": "EMON test environment.",
   "cap": "Firmware and configuration are loaded, device identity is assigned, and measurements, setpoints, schedules and tariff requests are checked.",
   "test": "Loss and return of the connection must leave local operation intact.",
   "why": "",
   "emon": "Firmware, configuration and EMON interface check.",
   "usp": false
  },
  {
   "name": "Run test",
   "scene": "simt",
   "machine": "Test station with water and electrical fixtures.",
   "cap": "The unit starts, runs heating and cooling where supported, defrost and auxiliary heaters are checked, and selected faults are simulated.",
   "test": "Electrical safety, input power, flow temperatures, noise and vibration screening, and a final leak check.",
   "why": "",
   "emon": "Run test result, linked to the unit serial.",
   "usp": false
  },
  {
   "name": "Final release",
   "scene": "label",
   "machine": "Label printer.",
   "cap": "Labels are verified against the product record, the production record is reviewed and factory release is authorised.",
   "test": "Labels are checked against the production record.",
   "why": "",
   "emon": "Serial number linked to the QR code.",
   "usp": false
  }
 ],
 "accent": "#1B8B9A"
};
window.FW_SETS['nendo-home'] = {
 "title": "From factory to site.",
 "intro": "The result is one record per installation that stays with the house.",
 "steps": [
  {
   "name": "Packing",
   "scene": "pack",
   "machine": "Robot with base support tooling and carton sleeve station.",
   "cap": "Heavy units are carried by their structural base, never by fan grille, pipes, water connections or panels.",
   "test": "Accessories, weight and labels are checked.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Dispatch",
   "scene": "truck",
   "machine": "Finished goods storage and transport.",
   "cap": "Products are allocated to the system order, the complete shipment is verified, loaded and secured.",
   "test": "Dispatch is recorded.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Open the project",
   "scene": "sheet",
   "machine": "A4 project sheet with the project QR.",
   "cap": "Scan the A4 project QR to open the approved project, or scan the outdoor unit to start a new one.",
   "test": "One shared sheet for the whole system: MOEBIUS, FLUXX, NENDO and SYNQ.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Identify both units",
   "scene": "depot",
   "machine": "Phone with NFC and the EMON app.",
   "cap": "Scan the QR or tap the passive NFC on the outdoor and indoor unit. The exact product records open, with no manual serial entry.",
   "test": "Passive NFC responds before the units are powered.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Discover the system",
   "scene": "phone",
   "machine": "EMON app and Wi-Fi mesh.",
   "cap": "NENDO joins the same Wi-Fi mesh as MOEBIUS and FLUXX. EMON finds it and the other supported devices automatically, with no manual pairing.",
   "test": "EMON checks serial and first communication.",
   "why": "",
   "emon": "The installed unit is linked to its factory record, installer and site.",
   "usp": false
  },
  {
   "name": "Map units and lines",
   "scene": "roof",
   "machine": "EMON app.",
   "cap": "Place both units on the site with photos. Record the refrigerant or hydraulic line between them.",
   "test": "Units, lines, circuits, tanks, sensors and electrical links are recorded as the work happens.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Circuits, tanks and sensors",
   "scene": "sheet",
   "machine": "EMON app.",
   "cap": "Heating circuits and zones, buffer and DHW tank with sensor positions, room and outdoor sensors.",
   "test": "Room and outdoor sensors are checked against live readings.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Electrical links",
   "scene": "sheet",
   "machine": "EMON app.",
   "cap": "Supply and phase, SG Ready or EEBus link, backup heater and its limits, meter and CT position.",
   "test": "Meter position and CT orientation are checked against live readings.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Set, test and approve",
   "scene": "phone",
   "machine": "EMON app.",
   "cap": "Set the heating curve and limits, then run the nine-step test sequence. Measurements, settings and photos are captured and the record is approved.",
   "test": "Flow rate per circuit, flow and return temperature, DHW heat-up, forced defrost, backup heater, SG Ready or EEBus signal, sensor plausibility, noise at the property line, refrigerant pressure and leak check.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Documents",
   "scene": "mail",
   "machine": "EMON.",
   "cap": "The owner summary, technical file, hydraulic and single-line diagrams are generated automatically. Invite the owner to the EMON app.",
   "test": "Eleven documents, including warranty registration confirmation and the F-gas and refrigerant record.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#1B8B9A"
};
window.FW_SETS['nendo-trace'] = {
 "title": "One identity, every record.",
 "intro": "Records kept for every NENDO unit, under its serial number.",
 "steps": [
  {
   "name": "Product identity",
   "scene": "label",
   "machine": "Production record under the unit's serial number.",
   "cap": "Model, revision and serial number.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Critical components",
   "scene": "inmat",
   "machine": "Production record under the unit's serial number.",
   "cap": "Compressor, heat exchangers, fan, pumps and electronics.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Refrigeration assembly",
   "scene": "final",
   "machine": "Production record under the unit's serial number.",
   "cap": "Joining process and inspection records.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Circuit integrity",
   "scene": "leak",
   "machine": "Production record under the unit's serial number.",
   "cap": "Pressure and leak test results.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Refrigerant processing",
   "scene": "leak",
   "machine": "Production record under the unit's serial number.",
   "cap": "Evacuation results, refrigerant type and charged mass.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Hydraulics",
   "scene": "pot",
   "machine": "Production record under the unit's serial number.",
   "cap": "Configuration and leak test results.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Tanks",
   "scene": "tank",
   "machine": "Production record under the unit's serial number.",
   "cap": "Material, welding, treatment and pressure test records.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Electronics",
   "scene": "smt",
   "machine": "Production record under the unit's serial number.",
   "cap": "Board identities, revisions and test status.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Firmware",
   "scene": "fcomm",
   "machine": "Production record under the unit's serial number.",
   "cap": "Versions, configuration and provisioning.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Functional tests",
   "scene": "simt",
   "machine": "Production record under the unit's serial number.",
   "cap": "Operating conditions, measurements and faults.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "EMON integration",
   "scene": "fcomm",
   "machine": "Production record under the unit's serial number.",
   "cap": "Interface version and verified behaviour.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Rework",
   "scene": "final",
   "machine": "Production record under the unit's serial number.",
   "cap": "Defect, corrective action and retest.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Final release",
   "scene": "label",
   "machine": "Production record under the unit's serial number.",
   "cap": "Quality authorisation.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Packaging and dispatch",
   "scene": "pack",
   "machine": "Production record under the unit's serial number.",
   "cap": "Package identity, accessories and destination.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "On site",
   "scene": "phone",
   "machine": "EMON app.",
   "cap": "The installed unit is linked to its factory record, installer and site.",
   "test": "The result is one record per installation that stays with the house.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#1B8B9A"
};
window.FW_SETS['nendo-circ'] = {
 "title": "A documented lifecycle.",
 "intro": "The result is one record per installation that stays with the house.",
 "steps": [
  {
   "name": "Refrigerant record",
   "scene": "sheet",
   "machine": "EMON.",
   "cap": "The F-gas and refrigerant record is generated at approval.",
   "test": "Refrigerant type and charged mass are saved in EMON from the factory onwards.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Service from the record",
   "scene": "phone",
   "machine": "EMON app with QR or NFC.",
   "cap": "Unit locations are recorded with photos, so anyone can find them later.",
   "test": "The QR opens the exact product or project record.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#1B8B9A"
};

/* DEPTH-1480 · XOOM production walk from em-stages-data (xoom). */
window.FW_SETS['xoom'] = {
 "accent": "#8EB15F",
 "title": "How a XOOM charger is made.",
 "intro": "Precision-moulded housings and fabricated supports are combined with SMT-assembled charging controls, metering and protected power circuits. Each charger is programmed, tested with vehicle simulation and verified for its supported EMON and OCPP functions. Approved units are packed with their installation accessories and traced through dispatch and commissioning.",
 "note": "Stages marked Saved to EMON store their results on the server under the charger's serial number, so they can be viewed in EMON later.",
 "hint": "14 stations, from moulds to the scan on site. Move through the line with the arrows, the dots or Play.",
 "steps": [
  {
   "name": "Moulds",
   "scene": "cncp",
   "machine": "CNC machining, EDM and trial press.",
   "cap": "Moulds for housings, covers, light guides and connector surrounds are made with electrical barriers and gasket grooves.",
   "test": "Samples are measured and test-fitted with electronics and seals.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Moulding",
   "scene": "mould",
   "machine": "Injection moulding machines with robotic removal.",
   "cap": "Parts are moulded from the material specified for their location.",
   "test": "Dimensions and appearance; batch and cavity recorded.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Metal posts",
   "scene": "frame",
   "machine": "Cutting, bending, welding and coating.",
   "cap": "Pedestals, bollards, pavement frames and lamp-post interfaces are fabricated and finished.",
   "test": "Welds, coating and trial fit.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Circuit board assembly (SMT)",
   "scene": "smt",
   "machine": "Printer, paste inspection, pick and place, reflow.",
   "cap": "Controller, sensing and communication boards are assembled.",
   "test": "Optical inspection, circuit and functional tests.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Power and protection",
   "scene": "pot",
   "machine": "Assembly fixtures.",
   "cap": "Terminals, contactors, metering sensors, residual current sensing and protection are installed.",
   "test": "Current paths, earth and the sub-assembly are tested.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Cables",
   "scene": "wind",
   "machine": "Cutting, crimping and test equipment.",
   "cap": "Charging cables and sockets are assembled.",
   "test": "Continuity, pin assignment, insulation and retention.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Assembly",
   "scene": "final",
   "machine": "Variant-locked fixtures.",
   "cap": "Power assembly, controller, communication, antenna, socket or cable and indicators are fitted and the enclosure is closed.",
   "test": "Open-assembly inspection before closing.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Programming and QR/NFC",
   "scene": "fcomm",
   "machine": "Programming station.",
   "cap": "Firmware, phase and current limits (AC, Mode 3, up to 22 kW three-phase), identities, credentials, OCPP version and QR and NFC data are configured.",
   "test": "Physical and electronic identity must match.",
   "why": "",
   "emon": "Firmware, OCPP version and configuration.",
   "usp": false
  },
  {
   "name": "Metering calibration",
   "scene": "ict",
   "machine": "Reference test system.",
   "cap": "Measurement channels are calibrated and coefficients stored.",
   "test": "Accuracy at independent points per phase. POST, STUMP, PAVE and LUMO have a built-in MID-certified meter (Class B) for billing. WISP and COIL have a calibrated monitoring meter, with an optional external MID meter.",
   "why": "",
   "emon": "Calibration results.",
   "usp": false
  },
  {
   "name": "Vehicle-simulator test",
   "scene": "simt",
   "machine": "EV simulator and safety tester.",
   "cap": "Connection states, control pilot, locking, contactor sequence, current limits, residual current and faults are tested under load.",
   "test": "Earth, insulation and loaded thermal test.",
   "why": "",
   "emon": "Charging and safety test results.",
   "usp": false
  },
  {
   "name": "EMON and OCPP test",
   "scene": "fcomm",
   "machine": "EMON and OCPP test environment.",
   "cap": "Authorisation, sessions, meter reports, limits, solar surplus, tariffs and site load management are tested.",
   "test": "Offline and recovery behaviour is checked. OCPP 1.6J implemented, OCPP 2.0.1 planned. OCA certification in progress.",
   "why": "",
   "emon": "Interface check result.",
   "usp": false
  },
  {
   "name": "Labels",
   "scene": "label",
   "machine": "Label printer and scanner.",
   "cap": "Rating and serial and QR labels are applied.",
   "test": "Labels and NFC matched to the device.",
   "why": "",
   "emon": "Serial number linked to QR and NFC.",
   "usp": false
  },
  {
   "name": "Packing",
   "scene": "pack",
   "machine": "Compact robot or lifting cradle.",
   "cap": "The charger is packed with cable, connector protection and mounting kit.",
   "test": "Contents and weight are checked.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "From factory to site",
   "scene": "phone",
   "machine": "Phone or tablet with the EMON app.",
   "cap": "The installer scans the QR code or taps NFC. EMON finds the charger with its factory results and adds it to the site without manual entry.",
   "test": "EMON checks serial, firmware and first communication.",
   "why": "",
   "emon": "The installed charger is linked to its factory record, site and load management.",
   "usp": false
  }
 ]
};

/* DEPTH-1482 · XOOM chapters (user approved 5 Nov 2026). */
window.FW_SETS['xoom-test'] = {
 "title": "Tested in production.",
 "intro": "Every charger is tested with a vehicle simulator. A commanded switching state is not the same as actual isolation; welded contacts are detected.",
 "steps": [
  {
   "name": "Mould samples",
   "scene": "cncp",
   "machine": "CNC machining, EDM and trial press.",
   "cap": "Moulds for housings, covers, light guides and connector surrounds are made with electrical barriers and gasket grooves.",
   "test": "Samples are measured and test-fitted with electronics and seals.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Metalwork checks",
   "scene": "frame",
   "machine": "Cutting, bending, welding and coating.",
   "cap": "Welds are inspected, coating and dimensions are checked and covers, seals and equipment are trial-fitted.",
   "test": "Welds, coating and trial fit.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Board test",
   "scene": "smt",
   "machine": "Printer, paste inspection, pick and place, reflow.",
   "cap": "Boards are identified and tested individually before final assembly.",
   "test": "Optical inspection, circuit and functional tests.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Power assembly test",
   "scene": "pot",
   "machine": "Assembly fixtures.",
   "cap": "Vehicle signalling, contactor control, metering and residual current detection are tested together.",
   "test": "Current paths, earth and the sub-assembly are tested.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Cable test",
   "scene": "wind",
   "machine": "Cutting, crimping and test equipment.",
   "cap": "Cables and sockets are checked on arrival and after integration.",
   "test": "Continuity, pin assignment, insulation and retention.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Identity check",
   "scene": "fcomm",
   "machine": "Programming station.",
   "cap": "Firmware, phase and current limits (AC, Mode 3, up to 22 kW three-phase), identities, credentials, OCPP version and QR and NFC data are configured.",
   "test": "Physical and electronic identity must match.",
   "why": "",
   "emon": "Firmware, OCPP version and configuration.",
   "usp": false
  },
  {
   "name": "Metering calibration",
   "scene": "ict",
   "machine": "Reference test system.",
   "cap": "Measurement channels are calibrated and coefficients stored.",
   "test": "Accuracy at independent points per phase. POST, STUMP, PAVE and LUMO have a built-in MID-certified meter (Class B) for billing. WISP and COIL have a calibrated monitoring meter, with an optional external MID meter.",
   "why": "",
   "emon": "Calibration results.",
   "usp": false
  },
  {
   "name": "Vehicle-simulator test",
   "scene": "simt",
   "machine": "EV simulator and safety tester.",
   "cap": "Connection states, control pilot, locking, contactor sequence, current limits, residual current and faults are tested under load.",
   "test": "Earth, insulation and loaded thermal test.",
   "why": "",
   "emon": "Charging and safety test results.",
   "usp": false
  },
  {
   "name": "EMON and OCPP test",
   "scene": "fcomm",
   "machine": "EMON and OCPP test environment.",
   "cap": "Authorisation, sessions, meter reports, limits, solar surplus, tariffs and site load management are tested.",
   "test": "Offline and recovery behaviour is checked. OCPP 1.6J implemented, OCPP 2.0.1 planned. OCA certification in progress.",
   "why": "",
   "emon": "Interface check result.",
   "usp": false
  },
  {
   "name": "Family-specific checks",
   "scene": "safety",
   "machine": "Test station.",
   "cap": "On top of the shared tests. COIL’s rule for charging while wound follows thermal validation. PAVE is not assumed fit for vehicle loads or immersion, and LUMO needs site confirmation of the lighting circuit.",
   "test": "Checks per family: WISP, COIL, POST, STUMP, PAVE, LUMO.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Qualification and audit",
   "scene": "chamber",
   "machine": "Qualification and audit test equipment.",
   "cap": "A model-specific plan alongside routine acceptance: temperature rise, switching and connector endurance, moisture and ingress, impact, corrosion and UV, EMC and radio, vehicle and OCPP interoperability.",
   "test": "Model-specific plan alongside routine acceptance.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Factory release",
   "scene": "label",
   "machine": "Label printer and scanner.",
   "cap": "Test and calibration records and the software configuration are reviewed, the shipping state is set and factory release is authorised.",
   "test": "Hardware is linked to its factory test record.",
   "why": "",
   "emon": "Serial number linked to QR and NFC.",
   "usp": false
  }
 ],
 "accent": "#8EB15F"
};
window.FW_SETS['xoom-home'] = {
 "title": "From factory to site.",
 "intro": "Factory release and site commissioning are distinct, linked records.",
 "steps": [
  {
   "name": "Packing",
   "scene": "pack",
   "machine": "Compact robot or lifting cradle.",
   "cap": "Compact robots for WISP; supported tooling for long pedestals and heavy bollards.",
   "test": "Contents and weight are checked.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Pallet and dispatch",
   "scene": "pallet",
   "machine": "Pallet labels and dispatch records.",
   "cap": "Chargers are palletised, the pallet is secured and labelled, quantities are verified and dispatch is recorded.",
   "test": "Dispatch is recorded.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Arrival and mounting",
   "scene": "roof",
   "machine": "Site checks.",
   "cap": "The delivery is inspected on arrival and the site supply and mounting are verified.",
   "test": "Electrical checks are completed at installation.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Tap or scan",
   "scene": "depot",
   "machine": "Phone or tablet with the EMON app.",
   "cap": "The installer scans the QR code or taps NFC. EMON finds the charger with its factory results and adds it to the site without manual entry.",
   "test": "EMON checks serial, firmware and first communication.",
   "why": "",
   "emon": "The installed charger is linked to its factory record, site and load management.",
   "usp": false
  },
  {
   "name": "Commission and load management",
   "scene": "phone",
   "machine": "EMON app.",
   "cap": "App, EMON and backend are commissioned and site load management is verified.",
   "test": "A charging session is completed.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Handover file",
   "scene": "mail",
   "machine": "EMON.",
   "cap": "Installation and tests are recorded and the handover file is generated.",
   "test": "Factory release and site commissioning are distinct, linked records.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#8EB15F"
};
window.FW_SETS['xoom-trace'] = {
 "title": "One identity, every record.",
 "intro": "Records kept for every XOOM charger, under its serial number.",
 "steps": [
  {
   "name": "Product identity",
   "scene": "label",
   "machine": "Record under the charger's serial number.",
   "cap": "Family, model, hardware revision and serial.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Moulded parts",
   "scene": "mould",
   "machine": "Record under the charger's serial number.",
   "cap": "Resin, mould, cavity and inspection batch.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Metalwork",
   "scene": "frame",
   "machine": "Record under the charger's serial number.",
   "cap": "Materials, fabrication and finish.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Electronics",
   "scene": "smt",
   "machine": "Record under the charger's serial number.",
   "cap": "Board identities and tests.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Power components",
   "scene": "pot",
   "machine": "Record under the charger's serial number.",
   "cap": "Contactors, protection, sensors and terminals.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Cable assembly",
   "scene": "wind",
   "machine": "Record under the charger's serial number.",
   "cap": "Type and test records.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Metering",
   "scene": "ict",
   "machine": "Record under the charger's serial number.",
   "cap": "Calibration and verification.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Charging tests",
   "scene": "simt",
   "machine": "Record under the charger's serial number.",
   "cap": "Vehicle simulation, switching and protection.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Software",
   "scene": "fcomm",
   "machine": "Record under the charger's serial number.",
   "cap": "Firmware, configuration and provisioning.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Connectivity",
   "scene": "fcomm",
   "machine": "Record under the charger's serial number.",
   "cap": "EMON and OCPP checks.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Factory release",
   "scene": "label",
   "machine": "Record under the charger's serial number.",
   "cap": "Quality authorisation.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Packaging",
   "scene": "pack",
   "machine": "Record under the charger's serial number.",
   "cap": "Accessories, package and pallet.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Installation",
   "scene": "roof",
   "machine": "Record under the charger's serial number.",
   "cap": "Supply, mounting, commissioning and backend.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Service",
   "scene": "phone",
   "machine": "Record under the charger's serial number.",
   "cap": "Faults, updates, repairs and replacements.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#8EB15F"
};
window.FW_SETS['xoom-circ'] = {
 "title": "A documented lifecycle.",
 "intro": "Factory release and site commissioning are distinct, linked records.",
 "steps": [
  {
   "name": "Service record",
   "scene": "phone",
   "machine": "EMON.",
   "cap": "Faults, updates, repairs and replacements are recorded against the charger.",
   "test": "Kept with the serial number.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Authorised updates",
   "scene": "fcomm",
   "machine": "EMON and OCPP backend.",
   "cap": "Authorised updates are verified in production.",
   "test": "OCPP implementation and OCPP certification are separate claims, published per product.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#8EB15F"
};

/* DEPTH-1483 · OGO production walk from em-stages-data (ogo). Intro left empty: the only intro text on the site (Overview and company OGO hero) describes a heat-pump water heater, not these stages (user: stages are right). */
window.FW_SETS['ogo'] = {
 "accent": "#00A0E3",
 "title": "From tank to tap.",
 "intro": "OGO reservoirs are rotational-moulded from polyethylene, fitted, leak tested and connected before protected packing and traceable dispatch.",
 "note": "Stages marked Saved to EMON store their results on the server under the unit's serial number, so they can be viewed in EMON later.",
 "hint": "11 stations, from material to the scan on site. Move through the line with the arrows, the dots or Play.",
 "steps": [
  {
   "name": "Material",
   "scene": "inmat",
   "machine": "Powder weighing station.",
   "cap": "Polyethylene powder in the approved colour is weighed for the reservoir size.",
   "test": "Material and colour batch checked against the article.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Mould loading",
   "scene": "mould",
   "machine": "Metal mould on the moulding arm.",
   "cap": "The weighed powder is loaded into the mould, which is then clamped shut.",
   "test": "Mould closure and vents checked.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Heating and rotation",
   "scene": "cure",
   "machine": "Biaxial rotational moulding machine.",
   "cap": "The mould is heated while it turns on two axes. The melting powder coats the inside of the mould and forms a one-piece hollow body without welded seams.",
   "test": "Oven temperature and cycle time recorded.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Cooling",
   "scene": "buffer",
   "machine": "Cooling station.",
   "cap": "The mould keeps turning while it cools, so the wall sets evenly.",
   "test": "Cooling time recorded.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Demoulding and finishing",
   "scene": "cncp",
   "machine": "Trimming and drilling station.",
   "cap": "The body is taken out of the mould. Service openings, inlet, outlet and overflow openings are finished.",
   "test": "Visual, colour and dimension check.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Fittings",
   "scene": "final",
   "machine": "Assembly bench.",
   "cap": "Service covers, inlet and outlet couplings and seals are fitted.",
   "test": "Fitting tightness.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Leak test",
   "scene": "leak",
   "machine": "Leak-test bench with water.",
   "cap": "The reservoir is filled and checked for leaks at the body and fittings, then drained.",
   "test": "No leakage at body or fittings.",
   "why": "",
   "emon": "Leak test result.",
   "usp": false
  },
  {
   "name": "Pump and connected equipment",
   "scene": "simt",
   "machine": "Assembly and test bench.",
   "cap": "For the connected version, level and temperature sensors, controller and pump are fitted and tested.",
   "test": "Sensor readings and pump start and stop.",
   "why": "",
   "emon": "Sensor and controller identity.",
   "usp": false
  },
  {
   "name": "Labels",
   "scene": "label",
   "machine": "Label printer.",
   "cap": "Article, serial and QR labels are applied.",
   "test": "Checked against the record.",
   "why": "",
   "emon": "Serial number linked to the QR code.",
   "usp": false
  },
  {
   "name": "Packing",
   "scene": "pack",
   "machine": "Packing station.",
   "cap": "The reservoir is protected for transport; the connection set and pump are packed with it.",
   "test": "Contents check.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "From factory to site",
   "scene": "phone",
   "machine": "Phone or tablet with the EMON app.",
   "cap": "The installer scans the QR code. EMON finds the reservoir with its factory record and adds it to the site.",
   "test": "EMON checks serial and first communication of the connected equipment.",
   "why": "",
   "emon": "The installed reservoir is linked to its factory record, installer and site.",
   "usp": false
  }
 ]
};

/* DEPTH-1489 · OGO chapters Testing, To site, Traceability (user approved 6 Nov 2026; no Circularity yet). */
window.FW_SETS['ogo-test'] = {
 "title": "Tested in production.",
 "intro": "Each OGO reservoir is checked from powder to packing.",
 "steps": [
  {
   "name": "Material check",
   "scene": "inmat",
   "machine": "Powder weighing station.",
   "cap": "Polyethylene powder in the approved colour is weighed for the reservoir size.",
   "test": "Material and colour batch checked against the article.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Mould closure",
   "scene": "mould",
   "machine": "Metal mould on the moulding arm.",
   "cap": "The weighed powder is loaded into the mould, which is then clamped shut.",
   "test": "Mould closure and vents checked.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Cycle record",
   "scene": "cure",
   "machine": "Biaxial rotational moulding machine.",
   "cap": "The mould is heated while it turns on two axes. The melting powder coats the inside of the mould and forms a one-piece hollow body without welded seams.",
   "test": "Oven temperature and cycle time recorded.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Cooling record",
   "scene": "buffer",
   "machine": "Cooling station.",
   "cap": "The mould keeps turning while it cools, so the wall sets evenly.",
   "test": "Cooling time recorded.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Visual and dimension check",
   "scene": "cncp",
   "machine": "Trimming and drilling station.",
   "cap": "The body is taken out of the mould. Service openings, inlet, outlet and overflow openings are finished.",
   "test": "Visual, colour and dimension check.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Fitting tightness",
   "scene": "final",
   "machine": "Assembly bench.",
   "cap": "Service covers, inlet and outlet couplings and seals are fitted.",
   "test": "Fitting tightness.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Leak test",
   "scene": "leak",
   "machine": "Leak-test bench with water.",
   "cap": "The reservoir is filled and checked for leaks at the body and fittings, then drained.",
   "test": "No leakage at body or fittings.",
   "why": "",
   "emon": "Leak test result.",
   "usp": false
  },
  {
   "name": "Pump and sensor test",
   "scene": "simt",
   "machine": "Assembly and test bench.",
   "cap": "For the connected version, level and temperature sensors, controller and pump are fitted and tested.",
   "test": "Sensor readings and pump start and stop.",
   "why": "",
   "emon": "Sensor and controller identity.",
   "usp": false
  },
  {
   "name": "Label check",
   "scene": "label",
   "machine": "Label printer.",
   "cap": "Article, serial and QR labels are applied.",
   "test": "Checked against the record.",
   "why": "",
   "emon": "Serial number linked to the QR code.",
   "usp": false
  },
  {
   "name": "Contents check",
   "scene": "pack",
   "machine": "Packing station.",
   "cap": "The reservoir is protected for transport; the connection set and pump are packed with it.",
   "test": "Contents check.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#00A0E3"
};
window.FW_SETS['ogo-home'] = {
 "title": "From factory to site.",
 "intro": "Overflow is a physical installation function. An app warning should not be its only safeguard.",
 "steps": [
  {
   "name": "Confirm the location",
   "scene": "roof",
   "machine": "Site check.",
   "cap": "Check dimensions, filled weight, support, restraints where required and access to the connections.",
   "test": "Keep service openings, controls and drainage accessible after installation.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Collection and overflow",
   "scene": "site",
   "machine": "Downpipe diverter.",
   "cap": "Confirm the downpipe or other approved rainwater collection route, the correct inlet arrangement and the route taken by excess water when storage is full.",
   "test": "Overflow is a physical installation function. An app warning should not be its only safeguard.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Select the use circuit",
   "scene": "sheet",
   "machine": "Installation plan.",
   "cap": "Identify whether the installation fills watering cans, supplies a hose, serves irrigation or transfers water.",
   "test": "Specify route length, elevation, pressure and flow requirements before selecting the pump.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Measurement and control",
   "scene": "depot",
   "machine": "Sensors and controller.",
   "cap": "Fit the approved sensors and controller with appropriate mounting, power and cable arrangements.",
   "test": "Confirm each tank and circuit identity before linking it to the app.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Scan the QR code",
   "scene": "phone",
   "machine": "Phone or tablet with the EMON app.",
   "cap": "The installer scans the QR code. EMON finds the reservoir with its factory record and adds it to the site.",
   "test": "EMON checks serial and first communication of the connected equipment.",
   "why": "",
   "emon": "The installed reservoir is linked to its factory record, installer and site.",
   "usp": false
  },
  {
   "name": "Check the installation",
   "scene": "leak",
   "machine": "Installation check.",
   "cap": "Inspect for leaks, confirm inlet and overflow behaviour, calibrate the level-to-volume relationship and verify temperature readings and timestamps.",
   "test": "Test pump operation, manual stop, configured limits and any destination-high or source-low handling required for the selected circuits.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Handover",
   "scene": "mail",
   "machine": "Handover file.",
   "cap": "Provide the final equipment list, installed configuration, operating instructions, permissions and cleaning and winter procedures.",
   "test": "Make clear which features have been tested and which are not included.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#00A0E3"
};
window.FW_SETS['ogo-trace'] = {
 "title": "One identity, every record.",
 "intro": "Results kept for every OGO reservoir, under its serial number.",
 "steps": [
  {
   "name": "Leak test result",
   "scene": "leak",
   "machine": "Leak-test bench with water.",
   "cap": "The leak test result is saved for the reservoir.",
   "test": "No leakage at body or fittings.",
   "why": "",
   "emon": "Leak test result.",
   "usp": false
  },
  {
   "name": "Sensor and controller identity",
   "scene": "simt",
   "machine": "Assembly and test bench.",
   "cap": "For the connected version, the sensor and controller identities are saved.",
   "test": "Sensor readings and pump start and stop.",
   "why": "",
   "emon": "Sensor and controller identity.",
   "usp": false
  },
  {
   "name": "Serial and QR",
   "scene": "label",
   "machine": "Label printer.",
   "cap": "Article, serial and QR labels are applied.",
   "test": "Checked against the record.",
   "why": "",
   "emon": "Serial number linked to the QR code.",
   "usp": false
  },
  {
   "name": "On site",
   "scene": "phone",
   "machine": "Phone or tablet with the EMON app.",
   "cap": "The installed reservoir is linked to its factory record, installer and site.",
   "test": "EMON checks serial and first communication of the connected equipment.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#00A0E3"
};

/* DEPTH-1491 · MOX production walk from em-stages-data (mox). */
window.FW_SETS['mox'] = {
 "accent": "#D8392C",
 "title": "From profile to site.",
 "intro": "MOX structures are engineered for their application and site conditions. Custom extrusions and fabricated metal components are machined, finished and assembled with coordinated module supports, drainage, cable routes and service access. Verified components are identified and packed as project kits, with fabrication records carried through to installation and digital handover.",
 "note": "Stages marked Saved to EMON store their results on the server under the project, so they can be viewed in EMON later.",
 "hint": "12 stations, from project engineering to the scan on site. Move through the line with the arrows, the dots or Play.",
 "steps": [
  {
   "name": "Project engineering",
   "scene": "report",
   "machine": "Engineering workstation and survey data.",
   "cap": "Site, loads, supporting structure or ground, module type, drainage, cable routes and service access are defined and the fabrication drawings are released.",
   "test": "Calculations and drawings are checked before production is approved.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Extrusion dies",
   "scene": "cncp",
   "machine": "CNC machining, EDM and extrusion trial.",
   "cap": "Custom profiles for columns, beams, module supports, gutters and cable channels are designed, and the dies are made and trialled.",
   "test": "Cross section, twist and fit with gaskets and connectors are checked on trial profiles.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Extrusion",
   "scene": "frame",
   "machine": "Extrusion press with puller, saw, stretcher and ageing oven.",
   "cap": "Billets are heated and pressed through the die, cooled, straightened, cut and aged to the specified material condition.",
   "test": "Critical dimensions, straightness and material properties per batch.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Cutting and machining",
   "scene": "cncp",
   "machine": "CNC saw and machining centre.",
   "cap": "Members are cut to length, connection faces, holes, slots, drainage and cable openings are machined and every member is identified.",
   "test": "Critical features are measured and passages checked for obstruction.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Steel fabrication and welding",
   "scene": "frame",
   "machine": "Laser or plasma cutting, fixtures and welding stations.",
   "cap": "Baseplates, brackets and structural members are cut, drilled, formed and welded where steel is specified.",
   "test": "Weld inspection, dimensions and vent openings for galvanising.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Forming",
   "scene": "cncp",
   "machine": "Press brake and stamping press.",
   "cap": "Flashings, brackets, module clamps and connection blocks are formed and stamped.",
   "test": "Fit and dimensions are checked.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Finishes",
   "scene": "cure",
   "machine": "Anodising, powder coating or galvanising line.",
   "cap": "Each material gets its specified corrosion protection.",
   "test": "Coating thickness, coverage, threads and drainage openings are checked.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Drainage and seals",
   "scene": "frame",
   "machine": "Sheet metal forming and gasket production.",
   "cap": "Gutters, outlets, flashings, seals, end caps and isolators are produced.",
   "test": "Fit and sealant compatibility are checked.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Trial assembly",
   "scene": "final",
   "machine": "Factory trial bay.",
   "cap": "A representative configuration is assembled with modules, cable routes and drainage.",
   "test": "Fastening access, thermal movement, cable routing, drainage with controlled water and module replacement are verified.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Project kit and QR",
   "scene": "label",
   "machine": "Kitting station and label printer.",
   "cap": "Components are grouped by installation stage, counted and labelled with a project QR.",
   "test": "Quantities are checked against the bill of materials.",
   "why": "",
   "emon": "Project QR with layout, batches and drawings.",
   "usp": false
  },
  {
   "name": "Robotic packing",
   "scene": "pack",
   "machine": "Gantry or robot with distributed lifting supports.",
   "cap": "Long members are wrapped, end-protected and bundled. Hardware is packed by assembly location.",
   "test": "Contents are scanned and packages photographed before dispatch.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "From factory to site",
   "scene": "phone",
   "machine": "Phone or tablet with the EMON app.",
   "cap": "The installer scans the project QR code. EMON opens the layout, component batches and inspection forms, and links the finished structure to its installer, owner and warranty record.",
   "test": "Site checks are recorded against the same project identity.",
   "why": "",
   "emon": "Project QR links layout, material batches, inspections and handover. Device data only for fitted electronics.",
   "usp": false
  }
 ]
};

/* DEPTH-1494 · MOX chapters (user approved 6 Nov 2026). */
window.FW_SETS['mox-test'] = {
 "title": "Tested in production.",
 "intro": "A representative assembly verifies the coordinated interfaces. One gutter-joint water test does not prove a whole roof or façade watertight.",
 "steps": [
  {
   "name": "Drawing check",
   "scene": "report",
   "machine": "Engineering workstation and survey data.",
   "cap": "Site, loads, supporting structure or ground, module type, drainage, cable routes and service access are defined and the fabrication drawings are released.",
   "test": "Calculations and drawings are checked before production is approved.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Die trial",
   "scene": "cncp",
   "machine": "CNC machining, EDM and extrusion trial.",
   "cap": "Custom profiles for columns, beams, module supports, gutters and cable channels are designed, and the dies are made and trialled.",
   "test": "Cross section, twist and fit with gaskets and connectors are checked on trial profiles.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Profile batch check",
   "scene": "frame",
   "machine": "Extrusion press with puller, saw, stretcher and ageing oven.",
   "cap": "Billets are heated and pressed through the die, cooled, straightened, cut and aged to the specified material condition.",
   "test": "Critical dimensions, straightness and material properties per batch.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Machined members",
   "scene": "cncp",
   "machine": "CNC saw and machining centre.",
   "cap": "Members are cut to length, connection faces, holes, slots, drainage and cable openings are machined and every member is identified.",
   "test": "Critical features are measured and passages checked for obstruction.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Weld inspection",
   "scene": "frame",
   "machine": "Laser or plasma cutting, fixtures and welding stations.",
   "cap": "Baseplates, brackets and structural members are cut, drilled, formed and welded where steel is specified.",
   "test": "Weld inspection, dimensions and vent openings for galvanising.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Formed parts",
   "scene": "cncp",
   "machine": "Press brake and stamping press.",
   "cap": "Flashings, brackets, module clamps and connection blocks are formed and stamped.",
   "test": "Fit and dimensions are checked.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Coating check",
   "scene": "cure",
   "machine": "Anodising, powder coating or galvanising line.",
   "cap": "Each material gets its specified corrosion protection.",
   "test": "Coating thickness, coverage, threads and drainage openings are checked.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Seals and drainage",
   "scene": "frame",
   "machine": "Sheet metal forming and gasket production.",
   "cap": "Gutters, outlets, flashings, seals, end caps and isolators are produced.",
   "test": "Fit and sealant compatibility are checked.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Trial assembly",
   "scene": "final",
   "machine": "Factory trial bay.",
   "cap": "A representative configuration is assembled with modules, cable routes and drainage.",
   "test": "Fastening access, thermal movement, cable routing, drainage with controlled water and module replacement are verified.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Product-specific checks",
   "scene": "safety",
   "machine": "Factory trial bay.",
   "cap": "The eight products need checks beyond the shared fabrication: OMBRAS, PORCH, PERGOLA, BALCONY, FENCE, FACADE, BIPV Curtain Wall and BIPV Cladding.",
   "test": "BALCONY distinguishes a decorative PV screen from a safety barrier.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Final inspection",
   "scene": "label",
   "machine": "Kitting station and label printer.",
   "cap": "Finished components, member identification, quantities, material and fabrication records, coating results and trial assembly results are reviewed before shipment is authorised.",
   "test": "The structure identity points to its exact approved configuration.",
   "why": "",
   "emon": "Project QR with layout, batches and drawings.",
   "usp": false
  }
 ],
 "accent": "#D8392C"
};
window.FW_SETS['mox-home'] = {
 "title": "From factory to site.",
 "intro": "Factory release and site acceptance are separate stages in the same project record.",
 "steps": [
  {
   "name": "Packing",
   "scene": "pack",
   "machine": "Gantry or robot with distributed lifting supports.",
   "cap": "Long members are wrapped, end-protected and bundled. Hardware is packed by assembly location.",
   "test": "Contents are scanned and packages photographed before dispatch.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Dispatch",
   "scene": "truck",
   "machine": "Loading plan and transport supports.",
   "cap": "The loading sequence matches site unloading. Long members and glazing are protected, the load is restrained and dispatch is recorded.",
   "test": "Packages, carrier and destination are recorded.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Arrival and foundations",
   "scene": "roof",
   "machine": "Site acceptance.",
   "cap": "The transport condition is recorded on arrival and foundations and building attachments are verified.",
   "test": "Site acceptance.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Assemble and inspect",
   "scene": "site",
   "machine": "Released installation instructions.",
   "cap": "The structure is assembled to the released installation instructions and connection inspections are completed.",
   "test": "Fastening and alignment records.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Modules and drainage",
   "scene": "roof",
   "machine": "Approved interfaces.",
   "cap": "Modules and electrical equipment are installed. Drainage is verified on site: slopes, outlets and discharge.",
   "test": "Electrical tests complete installation acceptance.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Scan the project QR",
   "scene": "phone",
   "machine": "Phone or tablet with the EMON app.",
   "cap": "The installer scans the project QR code. EMON opens the layout, component batches and inspection forms, and links the finished structure to its installer, owner and warranty record.",
   "test": "Site checks are recorded against the same project identity.",
   "why": "",
   "emon": "Project QR links layout, material batches, inspections and handover. Device data only for fitted electronics.",
   "usp": false
  },
  {
   "name": "Handover",
   "scene": "mail",
   "machine": "EMON.",
   "cap": "At commissioning, configuration, components, tests and photographs are recorded against the project in EMON, and a PDF handover record is generated.",
   "test": "Owner, installer and warranty details complete the project registration.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#D8392C"
};
window.FW_SETS['mox-trace'] = {
 "title": "One identity, every record.",
 "intro": "The structure identity points to its exact approved configuration.",
 "steps": [
  {
   "name": "Design basis",
   "scene": "report",
   "machine": "Project record under the project QR.",
   "cap": "Site inputs, loads, use and approved assumptions.",
   "test": "Kept with the project identity.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Engineering",
   "scene": "report",
   "machine": "Project record under the project QR.",
   "cap": "Calculations, drawings and revisions.",
   "test": "Kept with the project identity.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Materials",
   "scene": "inmat",
   "machine": "Project record under the project QR.",
   "cap": "Aluminium and steel grades, batches and certificates.",
   "test": "Kept with the project identity.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Extrusion",
   "scene": "frame",
   "machine": "Project record under the project QR.",
   "cap": "Die identity, profile batch and material condition.",
   "test": "Kept with the project identity.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Fabrication",
   "scene": "cncp",
   "machine": "Project record under the project QR.",
   "cap": "Cutting, machining, welding and inspection.",
   "test": "Kept with the project identity.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Finishes",
   "scene": "cure",
   "machine": "Project record under the project QR.",
   "cap": "Treatment batches and inspection results.",
   "test": "Kept with the project identity.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Sealing and drainage",
   "scene": "frame",
   "machine": "Project record under the project QR.",
   "cap": "Materials, details and verification.",
   "test": "Kept with the project identity.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Modules and glazing",
   "scene": "roof",
   "machine": "Project record under the project QR.",
   "cap": "Construction, identification and compatibility.",
   "test": "Kept with the project identity.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Electrical integration",
   "scene": "pot",
   "machine": "Project record under the project QR.",
   "cap": "Equipment, harnesses and factory tests.",
   "test": "Kept with the project identity.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Trial assembly",
   "scene": "final",
   "machine": "Project record under the project QR.",
   "cap": "Fit, access, drainage and corrective actions.",
   "test": "Kept with the project identity.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Packaging",
   "scene": "pack",
   "machine": "Project record under the project QR.",
   "cap": "Component allocation and dispatch condition.",
   "test": "Kept with the project identity.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Installation",
   "scene": "site",
   "machine": "Project record under the project QR.",
   "cap": "Foundations, connections, inspections and photographs.",
   "test": "Kept with the project identity.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Handover",
   "scene": "mail",
   "machine": "Project record under the project QR.",
   "cap": "As-built configuration, maintenance and warranty.",
   "test": "Kept with the project identity.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#D8392C"
};
window.FW_SETS['mox-circ'] = {
 "title": "A documented lifecycle.",
 "intro": "Registration and periodic inspection keep the structural warranty in force.",
 "steps": [
  {
   "name": "Periodic inspection",
   "scene": "roof",
   "machine": "Project record in EMON.",
   "cap": "Registration and periodic inspection keep the structural warranty in force.",
   "test": "Coatings and fasteners are covered separately from the primary structure.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Module replacement",
   "scene": "final",
   "machine": "Factory trial bay.",
   "cap": "Module replacement is verified in the trial assembly.",
   "test": "Fastening access and thermal movement are verified with it.",
   "why": "",
   "emon": "",
   "usp": false
  },
  {
   "name": "Handover record",
   "scene": "mail",
   "machine": "EMON.",
   "cap": "The handover file holds tests, components, drawings and maintenance.",
   "test": "As-built configuration, maintenance and warranty are kept in the project record.",
   "why": "",
   "emon": "",
   "usp": false
  }
 ],
 "accent": "#D8392C"
};
