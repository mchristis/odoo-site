/* Factory walk data. One set per product family. name/machine/cap/test/emon come from the approved machine chooser rows on the Generate page; why = short explainer (DEPTH-1404). */
window.FW_SETS = window.FW_SETS || {};
window.FW_SETS['ando'] = {
 "intro": "Approved solar cells are inspected, matched and interconnected into strings. Robots position the strings within the module layers before controlled lamination. The modules are finished with frames and junction boxes, individually inspected and electrically tested, then robotically packed and traced through dispatch.",
 "note": "This is the production sequence ANDO framed modules and NOUVEL flexible modules are designed around. Cell technology, materials, joining methods, automation and acceptance limits follow the approved model. Qualification tests are run on samples, not on every panel. Automated stations are shown as a capability once the line is verified.",
 "cert": "IEC 61215 and IEC 61730",
 "hint": "24 stations, from incoming cells to the scan at home. Move through the line with the arrows, the dots or Play.",
 "title": "From cell to site.",
 "usp": {
  "title": "One QR code. Its own flash test.",
  "text": "The QR code applied at labelling is linked to this module's flash test record. Scan it in EMON at home and you see the I–V curve, Pmax, Vmp, Imp, Voc, Isc and power class measured for your panel."
 },
 "steps": [
  {
   "name": "Cell inspection",
   "scene": "inspect",
   "machine": "Incoming inspection station with camera, electrical tester and electroluminescence (EL) imaging.",
   "cap": "Every cell batch is scanned and checked for chips, cracks, contamination and dimensions before it enters production.",
   "test": "Electrical verification and EL imaging to the inspection plan. Rejected cells are held separately.",
   "why": "Damaged cells are removed before glass, frame and labour are spent on them.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Detail",
     "v": "ANDO uses monocrystalline N-type TOPCon cells in 182 mm (M10) format. Every cell batch is scanned and checked for chips, cracks, contamination and dimensions before it enters production."
    },
    {
     "k": "Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    }
   ],
   "phases": [
    0,
    1,
    2
   ],
   "std": "IEC 60904-1 (I–V measurement), IEC TS 60904-13 (electroluminescence)"
  },
  {
   "name": "Cell sorting",
   "scene": "sort",
   "machine": "Automatic cell sorting machine.",
   "cap": "Cells are sorted automatically by their measured grade, so that cells of the same grade are strung together.",
   "test": "Sorted cells are checked against the grade list.",
   "why": "Cells in one string carry the same current. A weaker cell limits the whole string, so cells of one grade are kept together.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    }
   ],
   "phases": [
    3
   ],
   "std": "IEC 60904-1"
  },
  {
   "name": "Laser cutting",
   "scene": "cut",
   "machine": "Laser cutting and separation station with vision inspection.",
   "cap": "Full M10 cells are laser-cut into half cells in the factory and separated with low-stress handling.",
   "test": "Cut edges and cell condition are inspected by camera; damaged cells are removed automatically.",
   "why": "A half cell carries half the current. Lower current means lower resistive losses and less heat in the connections.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    }
   ],
   "std": "IEC TS 60904-13 (cut cells imaged); factory procedure"
  },
  {
   "name": "Stringing",
   "scene": "string",
   "machine": "Automatic tabber stringer.",
   "cap": "Multi-busbar (MBB) round copper wires are cut, aligned and soldered to the half cells, which are connected into strings of the correct length and polarity.",
   "test": "Automated optical inspection of alignment and soldering, inline imaging for cell damage and scheduled bond-strength checks.",
   "why": "These joints carry the module current for its whole life. A poor joint becomes a hot spot.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    }
   ],
   "phases": [
    4
   ],
   "std": "IEC 61215-2 MQT 11 (thermal cycling proves the joint design); factory procedure"
  },
  {
   "name": "String EL",
   "scene": "el",
   "machine": "EL tester for strings.",
   "cap": "Each string is imaged after stringing, so cell damage from soldering is found before the strings are laid up.",
   "test": "EL images are evaluated against defect criteria; faulty strings are removed.",
   "why": "Soldering can crack a cell. EL shows cracks the eye cannot see, while the string can still be replaced.",
   "emon": "EL image of each string.",
   "usp": false,
   "std": "IEC TS 60904-13"
  },
  {
   "name": "Glass preparation",
   "scene": "glass",
   "machine": "Glass loading robot, washer and dryer.",
   "cap": "Front glass is picked up sheet by sheet, washed, dried and covered with the first encapsulant layer.",
   "test": "Cleanliness and coated-side orientation are checked by camera.",
   "why": "Dirt under the encapsulant stays there for the life of the module and can weaken the bond.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    }
   ],
   "phases": [
    5
   ],
   "std": "EN 12150-1 (toughened glass), IEC 61730-1"
  },
  {
   "name": "Encapsulant cutting",
   "scene": "eva",
   "machine": "Automatic encapsulant film cutter.",
   "cap": "Encapsulant film is cut from the roll to the size of the module layers.",
   "test": "Cut size and film condition are checked.",
   "why": "Film cut to size bonds the full surface and seals the edges.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    }
   ],
   "std": "IEC 62788-1 series (encapsulant materials)"
  },
  {
   "name": "Robotic layup",
   "scene": "layup",
   "machine": "Layup robot with camera alignment and automatic bussing.",
   "cap": "Strings are placed on the encapsulant, connected with cross ribbons and the module receives its serial number.",
   "test": "Vision checks of string spacing, orientation and polarity.",
   "why": "Exact spacing keeps the electrical layout and the appearance the same on every module. The serial number is created here.",
   "emon": "The module serial number is created and becomes the key for every later result.",
   "usp": false,
   "phases": [
    6
   ],
   "std": "IEC 61730-1 (construction, insulation distances)"
  },
  {
   "name": "Pre-lamination EL",
   "scene": "el",
   "machine": "EL tester before lamination.",
   "cap": "Upper encapsulant and rear layer are added, then the full stack is imaged while it can still be repaired.",
   "test": "EL images are evaluated against defect criteria; eligible defects are repaired and re-inspected.",
   "why": "Before lamination a defect can still be repaired. After lamination it cannot.",
   "emon": "Pre-lamination EL image and inspection result.",
   "usp": false,
   "phases": [
    7
   ],
   "std": "IEC TS 60904-13"
  },
  {
   "name": "Taping",
   "scene": "tape",
   "machine": "Automatic taping machine.",
   "cap": "The strings are fixed in position with tape before the module goes into the laminator.",
   "test": "Camera check that the strings have not moved.",
   "why": "Strings that move in the laminator can misalign or touch.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    }
   ],
   "std": "IEC 61730-1"
  },
  {
   "name": "Lamination",
   "scene": "lam",
   "machine": "Vacuum laminator.",
   "cap": "The layers are bonded under a controlled vacuum, temperature and pressure cycle, then cooled and trimmed.",
   "test": "Temperature, pressure, vacuum and cycle time are recorded; laminates are inspected for bubbles and delamination.",
   "why": "The bonded layers protect the cells from moisture and mechanical stress.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    }
   ],
   "phases": [
    8
   ],
   "std": "IEC 62788-1-6 (degree of cure)"
  },
  {
   "name": "Buffer",
   "scene": "buffer",
   "machine": "Conveyor buffer.",
   "cap": "Laminates are held in a buffer between lamination and the next station so the line keeps moving.",
   "test": "Module identity is read when a laminate enters and leaves the buffer.",
   "why": "Stations have different cycle times. A buffer lets each one work without waiting for the next.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    }
   ],
   "std": "Factory procedure"
  },
  {
   "name": "Visual inspection",
   "scene": "visual",
   "machine": "Inspection station that turns the module to 90 degrees.",
   "cap": "The laminate is inspected by eye at 90 degrees for bubbles, misplaced cells and surface defects.",
   "test": "Visual criteria for appearance; failed laminates are separated.",
   "why": "Some defects, such as bubbles or particles, are only visible from an angle.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    }
   ],
   "std": "IEC 61215-2 MQT 01"
  },
  {
   "name": "Framing",
   "scene": "frame",
   "machine": "Sealant dispenser and automatic framing press.",
   "cap": "Anodised aluminium frame profiles are fitted around the laminate with silicone sealant and the corner keys are pressed.",
   "test": "Squareness, corner closure and frame attachment are checked.",
   "why": "The frame gives the module its stiffness and its mounting points.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Detail",
     "v": "ANDO: anodised aluminium frame profiles are fitted around the laminate with silicone sealant and the corner keys are pressed. NOUVEL is frameless; its edges are sealed with edge tape or encapsulant overlap."
    },
    {
     "k": "Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    }
   ],
   "phases": [
    9
   ],
   "std": "IEC 61730-1, IEC 61730-2 MST 13 (equipotential bonding)"
  },
  {
   "name": "Junction box soldering",
   "scene": "jbox",
   "machine": "Adhesive dispensing robot with soldering station.",
   "cap": "The junction box is bonded and the conductors are joined to its terminals.",
   "test": "Joint inspection, bypass diode check, cable length and connector identity.",
   "why": "This joint connects the module to the installation and carries its full current.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    }
   ],
   "phases": [
    10
   ],
   "std": "IEC 62790 (junction boxes), IEC 62852 (connectors), EN 50618 / IEC 62930 (cables)"
  },
  {
   "name": "Junction box potting",
   "scene": "pot",
   "machine": "Potting station.",
   "cap": "The box is potted and closed.",
   "test": "Fill and closure are inspected.",
   "why": "Potting keeps moisture away from the terminals and the bypass diodes.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    }
   ],
   "std": "IEC 62790"
  },
  {
   "name": "Curing",
   "scene": "cure",
   "machine": "Curing line with conveyors.",
   "cap": "Modules travel along the curing line while the adhesive and potting compound cure.",
   "test": "Curing time and conditions are recorded.",
   "why": "Adhesive and potting only reach full strength once they are fully cured.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    }
   ],
   "std": "IEC 62790; factory procedure"
  },
  {
   "name": "Flash test",
   "scene": "flash",
   "machine": "Solar simulator (flash tester).",
   "cap": "Each finished module is measured under defined conditions to determine its electrical performance and power class.",
   "test": "Complete current–voltage (I–V) curve with corrections to reference conditions.",
   "why": "Every module is measured, not estimated. Its own measured values are stored under its serial number.",
   "emon": "I–V curve, Pmax, Vmp, Imp, Voc, Isc and power class.",
   "usp": true,
   "phases": [
    11
   ],
   "std": "IEC 60904-1, IEC 60904-9 (simulator class), IEC 60904-3 (reference spectrum), IEC 60891 (corrections)"
  },
  {
   "name": "Final EL and safety",
   "scene": "safety",
   "machine": "EL camera, dielectric and insulation tester, continuity tester.",
   "cap": "Every module is imaged once more and tested for electrical safety.",
   "test": "Final EL against defect criteria, dielectric withstand, insulation and bonding continuity.",
   "why": "Handling after lamination can still damage cells. The safety tests protect the people who install the module and live with it.",
   "emon": "Final EL image and electrical safety results.",
   "usp": false,
   "std": "IEC TS 60904-13, IEC 61730-2 MST 16 (dielectric withstand), MST 13 (continuity), IEC 61215-2 MQT 03 (insulation)"
  },
  {
   "name": "Labelling",
   "scene": "label",
   "machine": "Label printer and camera verification.",
   "cap": "The rating label and the serial and QR label are applied and checked against the measured power class.",
   "test": "Camera check that label, QR code and production record match.",
   "why": "The label ties the physical module to its measured record.",
   "emon": "Link between serial number, QR code and production record.",
   "usp": true,
   "phases": [
    13
   ],
   "std": "IEC 61730-1 (marking), EN 50380 (nameplate and datasheet)"
  },
  {
   "name": "Sorting by power class",
   "scene": "sortp",
   "machine": "Automatic sorting by measured power class.",
   "cap": "Tested modules are sorted by their measured power class before packing.",
   "test": "Power class is checked against the flash test record.",
   "why": "Modules in one string should have matching power, so they are sorted by measured class.",
   "emon": "Power class sorting result per serial number.",
   "usp": false,
   "std": "IEC 61215-1 (rated power tolerance), EN 50380"
  },
  {
   "name": "Robotic packing",
   "scene": "pack",
   "machine": "Packing robot with validated vacuum tooling or frame support.",
   "cap": "Modules are lifted without flexing, fitted with corner protection and packed on pallets in the approved pattern.",
   "test": "Position check of every module; quantity and power class verified per pallet.",
   "why": "Bending in transport can crack cells, so modules are lifted and packed without flexing.",
   "emon": "Which module serials are on which pallet.",
   "usp": false,
   "phases": [
    14
   ],
   "std": "IEC 62759-1 (transport testing of modules)"
  },
  {
   "name": "Store and dispatch",
   "scene": "truck",
   "machine": "Warehouse system and transport.",
   "cap": "Pallets are moved to storage, loaded according to the transport plan and dispatched.",
   "test": "Vehicle condition, load securing and shipment documents are checked.",
   "why": "Every pallet and serial number is recorded on the way out, so each module can be traced to its delivery.",
   "emon": "Carrier, date and the serial numbers on each pallet.",
   "usp": false,
   "phases": [
    15
   ],
   "std": "IEC 62759-1"
  },
  {
   "name": "From factory to site",
   "scene": "site",
   "machine": "Phone or tablet with the EMON app.",
   "cap": "On site, the installer scans the QR code on each module. EMON finds the module with its factory results and links it to its string and position.",
   "test": "No serials are typed. The installed layout and the warranty registration are created from the scans.",
   "why": "Scanning creates the installed layout and the warranty registration without typing a single serial number.",
   "emon": "Installed position, string assignment and warranty registration, added to the same record.",
   "usp": true,
   "phases": [
    16
   ],
   "std": "IEC 62446-1 (system documentation and commissioning), IEC 60364-7-712"
  }
 ]
};
window.FW_SETS['ando-test'] = {
 "title": "Tested in production and in our lab.",
 "intro": "Part A runs on every module in production. Part B runs on sample modules in our lab, to qualify the design.",
 "unit": "Test",
 "wholeLabel": "All tests",
 "layout": "free",
 "parts": {
  "A": "A · In production · Every module",
  "B": "B · In our lab · Samples"
 },
 "usp": {
  "title": "One QR code. Its own flash test.",
  "text": "The QR code applied at labelling is linked to this module's flash test record. Scan it in EMON at home and you see the I–V curve, Pmax, Vmp, Imp, Voc, Isc and power class measured for your panel."
 },
 "steps": [
  {
   "code": "A1",
   "part": "A",
   "name": "EL imaging",
   "scene": "el",
   "machine": "Electroluminescence (EL) tester, inline in the production line.",
   "cap": "Each module is imaged under current. Cracks, broken fingers and inactive cell areas show up as dark zones.",
   "test": "Images are evaluated against defect criteria. Modules with defects are removed.",
   "why": "Micro-cracks are invisible to the eye and can grow in the field.",
   "emon": "EL image of each string.",
   "usp": false,
   "img": "assets/factory-walk/ando-test-a1-el-imaging.png",
   "phases": [
    12
   ],
   "std": "IEC TS 60904-13"
  },
  {
   "code": "A2",
   "part": "A",
   "name": "Visual inspection",
   "scene": "visual",
   "machine": "Inspection table with an even light wall.",
   "cap": "Glass, frame, backsheet, labels and junction box are checked by eye under even light.",
   "test": "Checked against the visual inspection criteria. Rejected modules are separated.",
   "why": "Bubbles, scratches and misaligned parts are found before packing.",
   "emon": "",
   "usp": false,
   "img": "assets/factory-walk/ando-test-a2-visual-inspection.png",
   "std": "IEC 61215-2 MQT 01"
  },
  {
   "code": "A3",
   "part": "A",
   "name": "Insulation test",
   "scene": "safety",
   "machine": "High-voltage insulation tester with a guarded test area.",
   "cap": "The module is connected while the tester is off. The operator leaves the guarded area, then voltage is applied between the cell circuit and the frame.",
   "test": "Insulation resistance and leakage are compared with the acceptance limit. The result is recorded per module.",
   "why": "The frame can be touched and is earthed. The insulation keeps the cell circuit separated from it.",
   "emon": "",
   "usp": false,
   "img": "assets/factory-walk/ando-test-a3-insulation-test.png",
   "std": "IEC 61215-2 MQT 03, IEC 61730-2 MST 16"
  },
  {
   "code": "A4",
   "part": "A",
   "name": "Flash test",
   "scene": "flash",
   "machine": "Solar simulator (flash tester) at standard test conditions.",
   "cap": "A short light pulse measures the I–V curve of each module. Pmax, Vmp, Imp, Voc and Isc are calculated and the power class is assigned.",
   "test": "Measured values are compared with the power class tolerance. The record is stored per serial number.",
   "why": "Each module gets its own measured power, not a catalogue value.",
   "emon": "I–V curve, Pmax, Vmp, Imp, Voc, Isc and power class.",
   "usp": true,
   "img": "assets/factory-walk/ando-test-a4-flash-test.png",
   "std": "IEC 60904-1, IEC 60904-9, IEC 60891"
  },
  {
   "code": "A5",
   "part": "A",
   "name": "QR label",
   "scene": "label",
   "machine": "Label printer and scanner.",
   "cap": "A QR label with the serial number is applied and read back. It links the module to its flash test record.",
   "test": "Every label is read back and matched to the serial number.",
   "why": "The QR code is how the flash test reaches the installer and the owner.",
   "emon": "Serial number linked to the flash test record.",
   "usp": true,
   "img": "assets/factory-walk/ando-test-a5-qr-label.png",
   "std": "IEC 61730-1 (marking), EN 50380"
  },
  {
   "code": "B1",
   "part": "B",
   "name": "Sample and baseline",
   "scene": "reception",
   "machine": "Sample reception, solar simulator and EL imaging station.",
   "cap": "Sample modules are taken from production and registered with serial number, batch and test programme. Power, I–V curve and EL image are measured before any stress.",
   "test": "Baseline values are stored and used for every later comparison.",
   "why": "A change can only be measured against a known starting point.",
   "emon": "",
   "usp": false,
   "std": "IEC 61215-2 MQT 02 / MQT 06.1, IEC TS 60904-13",
   "img": "assets/factory-walk/ando-test-b1-sample-and-baseline.png"
  },
  {
   "code": "B2",
   "part": "B",
   "name": "Wet leakage",
   "scene": "wet",
   "machine": "Water tank with conductive solution, temperature control and insulation tester.",
   "cap": "The sample is submerged in a conductive solution, connectors kept dry. The insulation tester applies voltage between the cell circuit and the solution.",
   "test": "Insulation resistance is compared with the acceptance limit.",
   "why": "Rain and dew reach every edge and seal. This test shows whether the insulation holds when the module is wet.",
   "emon": "",
   "usp": false,
   "std": "IEC 61215-2 MQT 15, IEC 61730-2 MST 17",
   "img": "assets/factory-walk/ando-test-b2-wet-leakage.png"
  },
  {
   "code": "B3",
   "part": "B",
   "name": "High-voltage withstand",
   "scene": "hv",
   "machine": "High-voltage tester with a guarded test area.",
   "cap": "The cell circuit is shorted and connected to the tester, the frame to earth. Voltage is raised to the test level and held while the operator stays outside the guarded area.",
   "test": "No breakdown or flashover. Insulation resistance is recorded.",
   "why": "The test level is far above system voltage. It proves the insulation margin of the design.",
   "emon": "",
   "usp": false,
   "std": "IEC 61730-2 MST 16",
   "img": "assets/factory-walk/ando-test-b3-high-voltage-withstand.png"
  },
  {
   "code": "B4",
   "part": "B",
   "name": "UV exposure",
   "scene": "uv",
   "machine": "UV exposure chamber with external control terminal.",
   "cap": "Samples are exposed to a controlled UV dose. The chamber returns to a safe state before the sample is removed.",
   "test": "Visual inspection and power measurement after exposure, compared with the baseline.",
   "why": "UV light ages encapsulant, backsheet and adhesives. Yellowing or loss of adhesion shows up here first.",
   "emon": "",
   "usp": false,
   "std": "IEC 61215-2 MQT 10",
   "img": "assets/factory-walk/ando-test-b4-uv-exposure.png"
  },
  {
   "code": "B5",
   "part": "B",
   "name": "Potential-induced degradation",
   "scene": "chamber",
   "machine": "Climate chamber with high-voltage supply.",
   "cap": "Samples are held at system voltage in heat and humidity for a set period.",
   "test": "Power and EL image before and after, compared with the acceptance limit.",
   "why": "High system voltage can drive ions into the cells and reduce power. This test shows how sensitive the design is.",
   "emon": "",
   "usp": false,
   "std": "IEC TS 62804-1",
   "img": "assets/factory-walk/ando-test-b5-potential-induced-degradation.png"
  },
  {
   "code": "B6",
   "part": "B",
   "name": "Thermal cycling",
   "report": "Report on request",
   "scene": "chamber",
   "machine": "Climate chamber with temperature cycling and current injection.",
   "cap": "Samples are cycled between cold and hot, many times over.",
   "test": "Visual inspection, insulation test and power measurement after the cycles.",
   "why": "Each cycle expands and contracts glass, cells, solder and frame. Weak joints crack here before they crack on a roof.",
   "emon": "",
   "usp": false,
   "std": "IEC 61215-2 MQT 11",
   "img": "assets/factory-walk/ando-test-b6-thermal-cycling.png"
  },
  {
   "code": "B7",
   "part": "B",
   "name": "Damp heat",
   "report": "Report on request",
   "scene": "chamber",
   "machine": "Climate chamber at high temperature and humidity.",
   "cap": "Samples stay in hot, humid air for a long, fixed period.",
   "test": "Insulation, wet leakage and power after exposure.",
   "why": "Moisture causes corrosion and delamination. This test shows how well the module is sealed.",
   "emon": "",
   "usp": false,
   "std": "IEC 61215-2 MQT 13",
   "img": "assets/factory-walk/ando-test-b7-damp-heat.png"
  },
  {
   "code": "B8",
   "part": "B",
   "name": "Humidity freeze",
   "report": "Report on request",
   "scene": "chamber",
   "machine": "Climate chamber with humidity and freezing cycles.",
   "cap": "Samples go from hot and humid to below freezing, cycle after cycle.",
   "test": "Visual inspection, insulation and power after the cycles.",
   "why": "Water that entered the module expands when it freezes. Weak edges and seals open up.",
   "emon": "",
   "usp": false,
   "std": "IEC 61215-2 MQT 12",
   "img": "assets/factory-walk/ando-test-b8-humidity-freeze.png"
  },
  {
   "code": "B9",
   "part": "B",
   "name": "Hail impact",
   "scene": "hail",
   "machine": "Hail launcher with ice balls of defined size and speed.",
   "cap": "Ice balls are fired at defined points on the module, one impact per point. The operator stays at a protected control position.",
   "test": "Visual inspection, EL image and power after the impacts.",
   "why": "Hail is the most common cause of glass damage on roofs.",
   "emon": "",
   "usp": false,
   "std": "IEC 61215-2 MQT 17",
   "img": "assets/factory-walk/ando-test-b9-hail-impact.png"
  },
  {
   "code": "B10",
   "part": "B",
   "name": "Dynamic load",
   "scene": "load",
   "machine": "Load frame with rows of pneumatic cylinders and suction cups, touch panel and emergency stops.",
   "cap": "The module lies in the frame at its defined clamp positions. Suction cups push and pull the surface in alternating cycles.",
   "test": "EL image and power are compared with the baseline afterwards.",
   "why": "Wind and gusts flex a module thousands of times. Repeated loading reveals fatigue in cells, joints and frame.",
   "emon": "",
   "usp": false,
   "std": "IEC TS 62782",
   "img": "assets/factory-walk/ando-test-b10-dynamic-load.png"
  },
  {
   "code": "B11",
   "part": "B",
   "name": "Static load",
   "scene": "load",
   "machine": "Aluminium frame and calibrated sandbags.",
   "cap": "The module lies in the frame at its defined clamp positions. Sandbags are laid by hand until the test load is reached, first on the front, then on the back, and held.",
   "test": "Deflection is monitored. EL image and power are compared with the baseline afterwards.",
   "why": "Snow pushes on the front for weeks; wind suction pulls on the back.",
   "emon": "",
   "usp": false,
   "std": "IEC 61215-2 MQT 16",
   "img": "assets/factory-walk/ando-test-b11-static-load.png"
  },
  {
   "code": "B12",
   "part": "B",
   "name": "Before and after",
   "scene": "report",
   "machine": "Measurement workstation and test report.",
   "cap": "All results are set side by side with the baseline: power, EL image, insulation and visual inspection.",
   "test": "Results are assessed against the acceptance criteria of each test. The report is filed per module type.",
   "why": "One report shows what changed and whether it stayed within limits.",
   "emon": "",
   "usp": false,
   "std": "IEC 61215-1 (pass criteria), IEC 61730-1",
   "img": "assets/factory-walk/ando-test-b12-before-and-after.png"
  }
 ]
};
window.FW_SETS['ando-home'] = {
 "title": "From factory to site.",
 "intro": "The QR code applied in the factory follows the module to the roof. One identity, from flash test to warranty.",
 "unit": "Step",
 "wholeLabel": "Whole route",
 "layout": "free",
 "usp": {
  "title": "One QR code. Its own flash test.",
  "text": "The QR code applied at labelling is linked to this module's flash test record. Scan it in EMON at home and you see the I–V curve, Pmax, Vmp, Imp, Voc, Isc and power class measured for your panel."
 },
 "steps": [
  {
   "code": "01",
   "part": "",
   "name": "Pallet and dispatch",
   "scene": "pallet",
   "machine": "Pallet, edge protection, strapping and stretch film.",
   "cap": "Modules are packed on pallets, secured and labelled. The pallet label lists the serial numbers it carries.",
   "test": "The pallet label is scanned before it leaves the warehouse.",
   "why": "The pallet is the first link between a shipment and each module in it.",
   "emon": "",
   "usp": false,
   "img": "assets/factory-walk/ando-home-01-pallet-and-dispatch.png",
   "std": "IEC 62759-1"
  },
  {
   "code": "02",
   "part": "",
   "name": "Truck",
   "scene": "truck",
   "machine": "Forklift and covered truck.",
   "cap": "The forklift loads the pallet into the truck. Shipment and pallet are recorded together.",
   "test": "Loading is checked against the shipment list.",
   "why": "Each pallet can be traced to its delivery.",
   "emon": "",
   "usp": false,
   "img": "assets/factory-walk/ando-home-02-truck.png",
   "std": "IEC 62759-1"
  },
  {
   "code": "03",
   "part": "",
   "name": "Installer receives and scans",
   "scene": "depot",
   "machine": "Installer warehouse and handheld scanner.",
   "cap": "The installer receives the pallet and scans the pallet label. The delivery is matched to the order.",
   "test": "Delivered serial numbers are compared with the shipment.",
   "why": "Missing or damaged modules are found at delivery, not on the roof.",
   "emon": "",
   "usp": false,
   "img": "assets/factory-walk/ando-home-03-installer-receives-and-scans.png",
   "std": "IEC 62446-1"
  },
  {
   "code": "04",
   "part": "",
   "name": "QR opens its own flash test",
   "scene": "phone",
   "machine": "Phone with EMON.",
   "cap": "The installer scans the QR code on a module. EMON opens the flash test record of that exact module.",
   "test": "",
   "why": "The installer sees the measured power of each module before it goes on the roof.",
   "emon": "I–V curve, Pmax, Vmp, Imp, Voc, Isc and power class.",
   "usp": true,
   "img": "assets/factory-walk/ando-home-04-qr-opens-its-own-flash-test.png",
   "std": "IEC 60904-1 (the record shown)"
  },
  {
   "code": "05",
   "part": "",
   "name": "Mounting on the roof",
   "scene": "roof",
   "machine": "Mounting rails, clamps and cable management.",
   "cap": "Two installers place and clamp the modules on the rails and route the cables.",
   "test": "Clamp positions and cable routing are checked before commissioning.",
   "why": "Correct clamping keeps the module within its tested load case.",
   "emon": "",
   "usp": false,
   "img": "assets/factory-walk/ando-home-05-mounting-on-the-roof.png",
   "std": "IEC 60364-7-712, manufacturer installation manual (IEC 61730-1 requires it)"
  },
  {
   "code": "06",
   "part": "",
   "name": "Scan the QR sheet",
   "scene": "sheet",
   "machine": "Removable QR labels, registration sheet and EMON.",
   "cap": "Scan the completed QR sheet in EMON to register each panel. EMON automatically generates the string wiring diagram for commissioning. The installer receives the panel layout and string wiring diagram by email.",
   "test": "",
   "why": "Each position on the roof is linked to one serial number.",
   "emon": "Panel layout and string wiring diagram.",
   "usp": false,
   "img": "assets/factory-walk/ando-home-06-scan-the-qr-sheet.png",
   "std": "IEC 62446-1"
  },
  {
   "code": "07",
   "part": "",
   "name": "Warranty by email",
   "scene": "mail",
   "machine": "EMON and email.",
   "cap": "Register each panel in EMON. The customer receives a PDF warranty document linked to the registered panels.",
   "test": "",
   "why": "The warranty document names the registered panels.",
   "emon": "Warranty document linked to the registered panels.",
   "usp": false,
   "img": "assets/factory-walk/ando-home-07-warranty-by-email.png",
   "std": "no standard"
  },
  {
   "code": "08",
   "part": "",
   "name": "Follow output in EMON",
   "scene": "phone",
   "machine": "EMON app and email reports.",
   "cap": "Follow system output and long-term performance in EMON, on your phone or through email reports.",
   "test": "",
   "why": "The flash test of each panel stays next to its output.",
   "emon": "System output and the flash test record per panel.",
   "usp": true,
   "img": "assets/factory-walk/ando-home-08-follow-output-in-emon.png",
   "std": "IEC 61724-1 (performance monitoring)"
  }
 ]
};
window.FW_SETS['ando-trace'] = {
 "title": "One identity, every record.",
 "intro": "Each station adds to the record of the module. The serial number created at layup links the results, and the QR code applied at labelling opens the parts meant for installer and owner in EMON. Internal production records are not public.",
 "unit": "Record",
 "wholeLabel": "All records",
 "layout": "free",
 "usp": {
  "title": "One QR code. Its own flash test.",
  "text": "The QR code applied at labelling is linked to this module's flash test record. Scan it in EMON at home and you see the I–V curve, Pmax, Vmp, Imp, Voc, Isc and power class measured for your panel."
 },
 "steps": [
  {
   "code": "01",
   "part": "",
   "name": "String EL",
   "scene": "el",
   "machine": "",
   "cap": "Each string is imaged after stringing, so cell damage from soldering is found before the strings are laid up.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Recorded",
     "v": "EL image of each string."
    },
    {
     "k": "Linked to",
     "v": "Stringing record: equipment, recipe and process inspection results. Joined to the module serial number at layup."
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team. Readable in EMON after a scan at home"
    },
    {
     "k": "Purpose",
     "v": "Soldering can crack a cell. EL shows cracks the eye cannot see, while the string can still be replaced."
    }
   ],
   "std": "IEC TS 60904-13; follows IEC 62941 and ISO 9001"
  },
  {
   "code": "02",
   "part": "",
   "name": "Robotic layup",
   "scene": "layup",
   "machine": "",
   "cap": "Strings are placed on the encapsulant, connected with cross ribbons and the module receives its serial number.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Recorded",
     "v": "The module serial number is created and becomes the key for every later result."
    },
    {
     "k": "Linked to",
     "v": "Module identity: model, revision and serial number. Cell genealogy and material genealogy (glass, encapsulant, backsheet, frame and junction box batches)."
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team. Readable in EMON after a scan at home"
    },
    {
     "k": "Purpose",
     "v": "Exact spacing keeps the electrical layout and the appearance the same on every module. The serial number is created here."
    }
   ],
   "std": "IEC 61730-1 (construction, insulation distances); follows IEC 62941 and ISO 9001"
  },
  {
   "code": "03",
   "part": "",
   "name": "Pre-lamination EL",
   "scene": "el",
   "machine": "",
   "cap": "Upper encapsulant and rear layer are added, then the full stack is imaged while it can still be repaired.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Recorded",
     "v": "Pre-lamination EL image and inspection result."
    },
    {
     "k": "Linked to",
     "v": "Module serial number"
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team. Readable in EMON after a scan at home"
    },
    {
     "k": "Purpose",
     "v": "Before lamination a defect can still be repaired. After lamination it cannot."
    }
   ],
   "std": "IEC TS 60904-13; follows IEC 62941 and ISO 9001"
  },
  {
   "code": "04",
   "part": "",
   "name": "Flash test",
   "scene": "flash",
   "machine": "",
   "cap": "Each finished module is measured under defined conditions to determine its electrical performance and power class.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": true,
   "rows": [
    {
     "k": "Recorded",
     "v": "I–V curve, Pmax, Vmp, Imp, Voc, Isc and power class."
    },
    {
     "k": "Linked to",
     "v": "Module serial number"
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team. Readable in EMON after a scan at home"
    },
    {
     "k": "Purpose",
     "v": "Every module is measured, not estimated. Its own measured values are stored under its serial number."
    }
   ],
   "std": "IEC 60904-1, IEC 60904-9 (simulator class), IEC 60904-3 (reference spectrum), IEC 60891 (corrections); follows IEC 62941 and ISO 9001"
  },
  {
   "code": "05",
   "part": "",
   "name": "Final EL and safety",
   "scene": "safety",
   "machine": "",
   "cap": "Every module is imaged once more and tested for electrical safety.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Recorded",
     "v": "Final EL image and electrical safety results."
    },
    {
     "k": "Linked to",
     "v": "Module serial number"
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team. Readable in EMON after a scan at home"
    },
    {
     "k": "Purpose",
     "v": "Handling after lamination can still damage cells. The safety tests protect the people who install the module and live with it."
    }
   ],
   "std": "IEC TS 60904-13, IEC 61730-2 MST 16 (dielectric withstand), MST 13 (continuity), IEC 61215-2 MQT 03 (insulation); follows IEC 62941 and ISO 9001"
  },
  {
   "code": "06",
   "part": "",
   "name": "Labelling",
   "scene": "label",
   "machine": "",
   "cap": "The rating label and the serial and QR label are applied and checked against the measured power class.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": true,
   "rows": [
    {
     "k": "Recorded",
     "v": "Link between serial number, QR code and production record."
    },
    {
     "k": "Linked to",
     "v": "Module serial number"
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team. Readable in EMON after a scan at home"
    },
    {
     "k": "Purpose",
     "v": "The label ties the physical module to its measured record."
    }
   ],
   "std": "IEC 61730-1 (marking), EN 50380 (nameplate and datasheet); follows IEC 62941 and ISO 9001"
  },
  {
   "code": "07",
   "part": "",
   "name": "Sorting by power class",
   "scene": "sortp",
   "machine": "",
   "cap": "Tested modules are sorted by their measured power class before packing.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Recorded",
     "v": "Power class sorting result per serial number."
    },
    {
     "k": "Linked to",
     "v": "Module serial number"
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team. Readable in EMON after a scan at home"
    },
    {
     "k": "Purpose",
     "v": "Modules in one string should have matching power, so they are sorted by measured class."
    }
   ],
   "std": "IEC 61215-1 (rated power tolerance), EN 50380; follows IEC 62941 and ISO 9001"
  },
  {
   "code": "08",
   "part": "",
   "name": "Robotic packing",
   "scene": "pack",
   "machine": "",
   "cap": "Modules are lifted without flexing, fitted with corner protection and packed on pallets in the approved pattern.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Recorded",
     "v": "Which module serials are on which pallet."
    },
    {
     "k": "Linked to",
     "v": "Module serial number"
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team. Readable in EMON after a scan at home"
    },
    {
     "k": "Purpose",
     "v": "Bending in transport can crack cells, so modules are lifted and packed without flexing."
    }
   ],
   "std": "IEC 62759-1 (transport testing of modules); follows IEC 62941 and ISO 9001"
  },
  {
   "code": "09",
   "part": "",
   "name": "Store and dispatch",
   "scene": "truck",
   "machine": "",
   "cap": "Pallets are moved to storage, loaded according to the transport plan and dispatched.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Recorded",
     "v": "Carrier, date and the serial numbers on each pallet."
    },
    {
     "k": "Linked to",
     "v": "Module serial number"
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team. Readable in EMON after a scan at home"
    },
    {
     "k": "Purpose",
     "v": "Every pallet and serial number is recorded on the way out, so each module can be traced to its delivery."
    }
   ],
   "std": "IEC 62759-1; follows IEC 62941 and ISO 9001"
  },
  {
   "code": "10",
   "part": "",
   "name": "From factory to site",
   "scene": "site",
   "machine": "",
   "cap": "On site, the installer scans the QR code on each module. EMON finds the module with its factory results and links it to its string and position.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": true,
   "rows": [
    {
     "k": "Recorded",
     "v": "Installed position, string assignment and warranty registration, added to the same record."
    },
    {
     "k": "Linked to",
     "v": "Module serial number"
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team. Readable in EMON after a scan at home"
    },
    {
     "k": "Purpose",
     "v": "Scanning creates the installed layout and the warranty registration without typing a single serial number."
    }
   ],
   "std": "IEC 62446-1 (system documentation and commissioning), IEC 60364-7-712; follows IEC 62941 and ISO 9001"
  },
  {
   "code": "11",
   "part": "",
   "name": "QR opens its own flash test",
   "scene": "phone",
   "machine": "",
   "cap": "The installer scans the QR code on a module. EMON opens the flash test record of that exact module.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": true,
   "rows": [
    {
     "k": "Recorded",
     "v": "I–V curve, Pmax, Vmp, Imp, Voc, Isc and power class."
    },
    {
     "k": "Linked to",
     "v": "Module serial number via the QR code"
    },
    {
     "k": "Retained in",
     "v": "EMON"
    },
    {
     "k": "Access",
     "v": "Authorised installer and owner in EMON"
    },
    {
     "k": "Purpose",
     "v": "The installer sees the measured power of each module before it goes on the roof."
    }
   ],
   "img": "assets/factory-walk/ando-home-04-qr-opens-its-own-flash-test.png",
   "std": "IEC 60904-1 (the record shown); follows IEC 62941 and ISO 9001"
  },
  {
   "code": "12",
   "part": "",
   "name": "Scan the QR sheet",
   "scene": "sheet",
   "machine": "",
   "cap": "Scan the completed QR sheet in EMON to register each panel. EMON automatically generates the string wiring diagram for commissioning. The installer receives the panel layout and string wiring diagram by email.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Recorded",
     "v": "Panel layout and string wiring diagram."
    },
    {
     "k": "Linked to",
     "v": "Module serial number via the QR code"
    },
    {
     "k": "Retained in",
     "v": "EMON"
    },
    {
     "k": "Access",
     "v": "Authorised installer and owner in EMON"
    },
    {
     "k": "Purpose",
     "v": "Each position on the roof is linked to one serial number."
    }
   ],
   "img": "assets/factory-walk/ando-home-06-scan-the-qr-sheet.png",
   "std": "IEC 62446-1; follows IEC 62941 and ISO 9001"
  },
  {
   "code": "13",
   "part": "",
   "name": "Warranty by email",
   "scene": "mail",
   "machine": "",
   "cap": "Register each panel in EMON. The customer receives a PDF warranty document linked to the registered panels.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Recorded",
     "v": "Warranty document linked to the registered panels."
    },
    {
     "k": "Linked to",
     "v": "Module serial number via the QR code"
    },
    {
     "k": "Retained in",
     "v": "EMON"
    },
    {
     "k": "Access",
     "v": "Authorised installer and owner in EMON"
    },
    {
     "k": "Purpose",
     "v": "The warranty document names the registered panels."
    }
   ],
   "img": "assets/factory-walk/ando-home-07-warranty-by-email.png",
   "std": "no standard; follows IEC 62941 and ISO 9001"
  },
  {
   "code": "14",
   "part": "",
   "name": "Follow output in EMON",
   "scene": "phone",
   "machine": "",
   "cap": "Follow system output and long-term performance in EMON, on your phone or through email reports.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": true,
   "rows": [
    {
     "k": "Recorded",
     "v": "System output and the flash test record per panel."
    },
    {
     "k": "Linked to",
     "v": "Module serial number via the QR code"
    },
    {
     "k": "Retained in",
     "v": "EMON"
    },
    {
     "k": "Access",
     "v": "Authorised installer and owner in EMON"
    },
    {
     "k": "Purpose",
     "v": "The flash test of each panel stays next to its output."
    }
   ],
   "img": "assets/factory-walk/ando-home-08-follow-output-in-emon.png",
   "std": "IEC 61724-1 (performance monitoring); follows IEC 62941 and ISO 9001"
  },
  {
   "code": "15",
   "part": "",
   "name": "Records kept for every module",
   "scene": "report",
   "machine": "",
   "cap": "They trace a delivered panel to its materials, process conditions and measured performance.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Module identity",
     "v": "Model, revision and serial number"
    },
    {
     "k": "Cell genealogy",
     "v": "Cell type, grading and batch allocation"
    },
    {
     "k": "Material genealogy",
     "v": "Glass, encapsulant, backsheet, frame and junction box batches"
    },
    {
     "k": "Stringing record",
     "v": "Equipment, recipe and process inspection results"
    },
    {
     "k": "Layup record",
     "v": "Material configuration and inspection status"
    },
    {
     "k": "Lamination record",
     "v": "Recipe, temperature, vacuum, pressure and cycle"
    },
    {
     "k": "Adhesive and potting record",
     "v": "Material batches, dispensing and curing controls"
    },
    {
     "k": "EL record",
     "v": "Images, inspection stage and acceptance result"
    },
    {
     "k": "Flash test record",
     "v": "I–V curve, measured values, rating and test equipment identity"
    },
    {
     "k": "Electrical safety record",
     "v": "Test conditions and results"
    },
    {
     "k": "Rework record",
     "v": "Defect, action and subsequent inspection"
    },
    {
     "k": "Final release",
     "v": "Quality authorisation"
    },
    {
     "k": "Shipment record",
     "v": "Module serial, pallet identity and destination"
    }
   ],
   "std": "follows IEC 62941 and ISO 9001"
  }
 ]
};
/* DEPTH-1418: Standard line per step from _STANDARDS_PER_STEP_draft_2026-11-05.md (approved by user 5 Nov 2026). */
/* LINA (DEPTH-1444): ANDO panels bought in + 5 mounting part lines from uploads/LINA_VERT_Machinepark_Masterplan_v01 (machine IDs in Read more). Previous LINA set archived. */
window.FW_SETS['lina'] = {
 "title": "From parts to roof.",
 "accent": "#B5C64A",
 "routes": [
  [
   "lina",
   "Final assembly"
  ],
  [
   "lina-alu",
   "Aluminium profiles"
  ],
  [
   "lina-steel",
   "Steel profiles"
  ],
  [
   "lina-sheet",
   "Clamps and brackets"
  ],
  [
   "lina-plastic",
   "Plastic feet and clips"
  ],
  [
   "lina-pad",
   "Roof pads"
  ]
 ],
 "usp": {
  "title": "One QR code. Its own flash test.",
  "text": "The QR code applied at labelling is linked to this module's flash test record. Scan it in EMON at home and you see the I–V curve, Pmax, Vmp, Imp, Voc, Isc and power class measured for your panel."
 },
 "intro": "LINA combines ANDO panels with mounting parts from seven production lines. Final assembly turns them into one roof unit with two, three or four panels. Choose a line above.",
 "steps": [
  {
   "name": "Incoming materials",
   "scene": "inmat",
   "machine": "Dock levellers, electric forklifts, storage racks, WMS with barcode and QR scanners, incoming inspection tables.",
   "cap": "Metal, polymer, packaging and ANDO panel pallets arrive and are booked in by batch.",
   "test": "Material, packaging and glass are inspected under directed light. Every batch is scanned into the warehouse system.",
   "why": "Every part in a LINA unit can be traced back to its batch.",
   "emon": "Aluminium alloy and batch, polymer type and batch, with their material certificates.",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "L-01, L-02, L-05, L-06, L-07"
    }
   ],
   "code": "01"
  },
  {
   "name": "ANDO panel receipt",
   "scene": "reception",
   "machine": "Panel receipt and scan system with conditioned glass buffers.",
   "cap": "Each ANDO panel is scanned on arrival and matched to its flash test report, then stored in tilt-safe glass racks.",
   "test": "Panel identity and the origin of its flash test report are checked for every panel.",
   "why": "LINA uses finished ANDO panels. The scan links each panel and its measured values to the LINA unit it goes into.",
   "emon": "Serial numbers and flash test records of the ANDO panels in your unit.",
   "usp": true,
   "extra": [
    {
     "k": "ANDO panel · Detail",
     "v": "ANDO uses monocrystalline N-type TOPCon cells in 182 mm (M10) format. Every cell batch is scanned and checked for chips, cracks, contamination and dimensions before it enters production."
    },
    {
     "k": "ANDO panel · Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    },
    {
     "k": "ANDO panel · Materials",
     "v": "Bifacial n-type cells in a glass-glass construction."
    },
    {
     "k": "ANDO panel · Incoming tests",
     "v": "Cell binning and glass certificate."
    },
    {
     "k": "ANDO panel · Quality control",
     "v": "Supplier qualification, incoming inspection, batch verification and final inspection."
    },
    {
     "k": "ANDO panel · Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    },
    {
     "k": "ANDO panel · Machine",
     "v": "Glass-glass laminators."
    },
    {
     "k": "ANDO panel · Surface",
     "v": "Frameless edges, sealed, with a UV-stable edge seal."
    },
    {
     "k": "ANDO panel · Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    },
    {
     "k": "ANDO panel · Tolerance",
     "v": "Module flatness ≤ 2 mm."
    },
    {
     "k": "ANDO panel · Kept in the factory record",
     "v": "Process data stays in the production record for this module and can be retrieved for quality investigation."
    },
    {
     "k": "ANDO panel · Process",
     "v": "Edge sealing and connectors."
    },
    {
     "k": "ANDO panel · Machine",
     "v": "Bifacial test stand."
    },
    {
     "k": "ANDO panel · Final tests",
     "v": "Bifacial flash test, front and rear power, insulation test."
    },
    {
     "k": "ANDO panel · Tolerance",
     "v": "Power tolerance 0/+5 W."
    },
    {
     "k": "ANDO panel · Standards",
     "v": "IEC 61215 and IEC 61730."
    },
    {
     "k": "Machine park",
     "v": "V-01, V-02"
    }
   ],
   "code": "02"
  },
  {
   "name": "Kitting",
   "scene": "subasm",
   "machine": "Kitting stations with pick-to-light.",
   "cap": "Profiles, feet, clamps, pads and cable sets are picked per unit, by recipe for two, three or four panels.",
   "test": "Pick-to-light prevents wrong or missing parts.",
   "why": "A complete kit at the line keeps the assembly takt stable.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "V-03"
    }
   ],
   "code": "03"
  },
  {
   "name": "Frame assembly",
   "scene": "final",
   "machine": "Adjustable frame jigs and controlled screw and clamp tools.",
   "cap": "The structure is positioned in a programmable jig and fastened.",
   "test": "Force or torque is logged on critical joints.",
   "why": "A jig gives every unit the same geometry without a tape measure.",
   "emon": "Workstation, date and fastening values.",
   "usp": false,
   "extra": [
    {
     "k": "Quality control",
     "v": "Rail fit check."
    },
    {
     "k": "Mass-production ready",
     "v": "Standardised work instructions, process control and calibrated equipment."
    },
    {
     "k": "Machine park",
     "v": "V-04, V-05"
    }
   ],
   "code": "04"
  },
  {
   "name": "Panel integration",
   "scene": "lift",
   "machine": "Vacuum lifter or robot for panel handling.",
   "cap": "The ANDO panels are lifted into the frame and locked in place.",
   "test": "Grip points and glass loads follow the validated handling plan.",
   "why": "Glass is never carried by hand at line speed.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Production capacity",
     "v": "150 MW per year. Roofs from 10 kWp. Series up to 2 MWp per roof."
    },
    {
     "k": "Machine park",
     "v": "V-06"
    }
   ],
   "code": "05"
  },
  {
   "name": "Cable preparation",
   "scene": "cable",
   "machine": "Automatic cable cutting, stripping and marking, crimp station with pull test.",
   "cap": "DC cables are cut, stripped, marked and crimped per variant, then routed and connected.",
   "test": "Crimp tools are validated. Each crimp is pull-tested and identified.",
   "why": "Only approved cable and connector combinations are used.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "V-07, V-08"
    }
   ],
   "code": "06"
  },
  {
   "name": "Mechanical vision check",
   "scene": "visual",
   "machine": "Mechanical vision station.",
   "cap": "A camera checks panel position, rail spacing and clip orientation.",
   "test": "End-of-line check on every unit.",
   "why": "Small assembly errors are found before the unit leaves the line.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "V-09"
    }
   ],
   "code": "07"
  },
  {
   "name": "Electrical end-of-line test",
   "scene": "hv",
   "machine": "Electrical unit test benches.",
   "cap": "Polarity, plausibility, continuity and insulation are tested on the finished unit.",
   "test": "Tests follow a validated protocol.",
   "why": "The unit leaves the factory electrically verified.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "V-10"
    }
   ],
   "code": "08"
  },
  {
   "name": "Unit marking and QR",
   "scene": "label",
   "machine": "Marking and unit QR station.",
   "cap": "The unit receives its own serial number and QR code, linked to its ANDO panel serial numbers, test results and pallet.",
   "test": "The link is booked as one transaction in the production system.",
   "why": "One scan on the roof shows the unit and every panel in it.",
   "emon": "Model, serial number and QR code of the unit, with the serial numbers of its panels.",
   "usp": true,
   "extra": [
    {
     "k": "Full traceability",
     "v": "Production and material batch, date, revision, serial and QR on important products."
    },
    {
     "k": "Digital Product Passport",
     "v": "Selected LINA products carry a QR code linking production batch, material batch, factory inspection, revision, certificates, warranty and installation history. The same code opens the ownership record, so years after installation the correct product can still be identified."
    },
    {
     "k": "Machine park",
     "v": "V-11, V-12"
    }
   ],
   "code": "09"
  },
  {
   "name": "Quality lab",
   "scene": "qclab",
   "machine": "Metrology, tensile and compression bench, load frame, creep and fatigue rig, climate, UV and salt spray cabinets, roof membrane friction test, electrical test set.",
   "cap": "Samples are tested for geometry, joints, loads, ageing, corrosion and roof compatibility.",
   "test": "Wind, roof fire and transport type tests are done by external specialist labs.",
   "why": "Production tests confirm each batch. Design tests prove the system before it is sold.",
   "emon": "Inspection and test results for your unit.",
   "usp": false,
   "extra": [
    {
     "k": "European engineering",
     "v": "Specified for European practice: safety, service life, easy installation, compliance."
    },
    {
     "k": "Standards",
     "v": "ISO 9001, ISO 14001. Wind tunnel tested system."
    },
    {
     "k": "Machine park",
     "v": "Q-01 to Q-11"
    }
   ],
   "code": "10"
  },
  {
   "name": "Palletising",
   "scene": "pal",
   "machine": "Variant stacking frames, palletising robot, strapping and protective covers, pallet label and weighing station.",
   "cap": "Units are stacked per variant without pressure on glass or connectors, strapped, weighed and labelled.",
   "test": "Each pallet configuration is tested.",
   "why": "Compact stacking reduces transport volume. Fixing prevents damage on the way.",
   "emon": "Pallet and shipment.",
   "usp": false,
   "extra": [
    {
     "k": "Packaging",
     "v": "Vertical crates, recyclable corner protection, rails bundled per row."
    },
    {
     "k": "Sustainable packaging",
     "v": "Recyclable and reusable packaging, chosen per product and project."
    },
    {
     "k": "Machine park",
     "v": "K-01 to K-04"
    }
   ],
   "code": "11"
  },
  {
   "name": "Store and dispatch",
   "scene": "truck",
   "machine": "Warehouse system and transport.",
   "cap": "Pallets are moved to storage, loaded according to the transport plan and dispatched.",
   "test": "Vehicle condition, load securing and shipment documents are checked.",
   "why": "Every pallet and serial number is recorded on the way out, so each module can be traced to its delivery.",
   "emon": "Carrier, date and the serial numbers on each pallet.",
   "usp": false,
   "phases": [
    15
   ],
   "std": "IEC 62759-1",
   "part": "mount",
   "code": "12",
   "extra": [
    {
     "k": "Project production",
     "v": "Project lead time 6 weeks. Kitted per roof. Rails and modules on one delivery."
    },
    {
     "k": "Fast project delivery",
     "v": "Factory stock, regional stock and project production, with phased deliveries."
    },
    {
     "k": "Transparent material pricing",
     "v": "Project quotations can separate manufacturing, solar cells and glass, assembly, packaging and logistics, so price changes in solar cells and glass stay visible."
    },
    {
     "k": "Machine park",
     "v": "K-05"
    }
   ]
  },
  {
   "name": "From factory to site",
   "scene": "site",
   "machine": "Phone or tablet with the EMON app.",
   "cap": "On site, the installer scans the QR code on each module. EMON finds the module with its factory results and links it to its string and position.",
   "test": "No serials are typed. The installed layout and the warranty registration are created from the scans.",
   "why": "Scanning creates the installed layout and the warranty registration without typing a single serial number.",
   "emon": "Installed position, string assignment and warranty registration, added to the same record.",
   "usp": true,
   "phases": [
    16
   ],
   "std": "IEC 62446-1 (system documentation and commissioning), IEC 60364-7-712",
   "part": "mount",
   "code": "13",
   "extra": [
    {
     "k": "Engineering support",
     "v": "Roof planner layout, ballast and wind calculation, green-roof compatibility check."
    }
   ],
   "badge": "",
   "planned": false
  }
 ]
};
window.FW_SETS['lina-alu'] = {
 "title": "Aluminium profiles.",
 "accent": "#B5C64A",
 "routes": [
  [
   "lina",
   "Final assembly"
  ],
  [
   "lina-alu",
   "Aluminium profiles"
  ],
  [
   "lina-steel",
   "Steel profiles"
  ],
  [
   "lina-sheet",
   "Clamps and brackets"
  ],
  [
   "lina-plastic",
   "Plastic feet and clips"
  ],
  [
   "lina-pad",
   "Roof pads"
  ]
 ],
 "intro": "The long profiles of the LINA frame: extruded, sawn, aged, then cut to length, drilled and milled per variant.",
 "steps": [
  {
   "name": "Billet storage",
   "scene": "inmat",
   "machine": "Billet and metal storage racks.",
   "cap": "Aluminium billets are stored by alloy, batch and size.",
   "test": "Every billet batch is booked with its material certificate.",
   "why": "Traceable billets mean traceable profiles.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Materials",
     "v": "Aluminium 6063-T6 vertical rails."
    },
    {
     "k": "Machine park",
     "v": "L-04"
    }
   ],
   "code": "01"
  },
  {
   "name": "Billet heating",
   "scene": "furnace",
   "machine": "Billet preheater and billet handling.",
   "cap": "Billets are heated evenly to extrusion temperature.",
   "test": "Temperature is logged per billet.",
   "why": "Even temperature gives even profile quality.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "A-01"
    }
   ],
   "code": "02"
  },
  {
   "name": "Extrusion",
   "scene": "extrude",
   "machine": "Extrusion press with hydraulics and die preheater.",
   "cap": "The heated billet is pressed through the die and leaves as a continuous profile.",
   "test": "Profile dimensions are checked at the start of every die run.",
   "why": "One common cross-section serves all three unit sizes where possible.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine",
     "v": "Rail extrusion and cutting."
    },
    {
     "k": "Machine park",
     "v": "A-02, A-03"
    }
   ],
   "code": "03"
  },
  {
   "name": "Run-out and quench",
   "scene": "runout",
   "machine": "Run-out, pullers, cooling tables and quench.",
   "cap": "The profile is pulled out of the press and cooled in a controlled way.",
   "test": "Cooling follows the regime for the chosen alloy.",
   "why": "Controlled cooling sets the basis for the final strength.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "A-04, A-05"
    }
   ],
   "code": "04"
  },
  {
   "name": "Stretching",
   "scene": "stretch",
   "machine": "Profile stretcher.",
   "cap": "The profile is stretched straight.",
   "test": "Straightness is checked against the profile drawing.",
   "why": "Straight profiles make every frame the same.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "A-06"
    }
   ],
   "code": "05"
  },
  {
   "name": "Sawing and marking",
   "scene": "saw",
   "machine": "Saw and marking unit behind the press.",
   "cap": "The long profile is sawn into stock lengths and marked with its batch.",
   "test": "Cut quality and batch marking are checked. Chips are extracted.",
   "why": "The batch mark follows the profile to the finished unit.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "A-07"
    }
   ],
   "code": "06"
  },
  {
   "name": "Ageing",
   "scene": "chamber",
   "machine": "Ageing oven with process logging.",
   "cap": "Profiles are aged at a controlled temperature to reach their strength.",
   "test": "Oven temperature and time are logged per batch.",
   "why": "Ageing gives the alloy its specified strength.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "A-08"
    }
   ],
   "code": "07"
  },
  {
   "name": "Cutting to length, drilling and milling",
   "scene": "cncp",
   "machine": "CNC profile machining centre.",
   "cap": "Profiles are cut to length, drilled, milled and slotted with one program per unit size.",
   "test": "Hole positions and lengths are measured per batch.",
   "why": "The holes and slots define where feet, clamps and panels sit.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Tolerance",
     "v": "Rail length ± 0,5 mm."
    },
    {
     "k": "Machine park",
     "v": "M-07"
    }
   ],
   "code": "08"
  },
  {
   "name": "Deburring",
   "scene": "deburr",
   "machine": "Drum or belt deburring machine.",
   "cap": "Sharp edges and burrs are removed.",
   "test": "Edges are checked by touch and sight.",
   "why": "Burr-free edges protect installers and cables.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "M-06"
    }
   ],
   "code": "09"
  },
  {
   "name": "Surface treatment",
   "scene": "surface",
   "machine": "Pre-treatment washer, anodising or powder coating line, coating thickness and adhesion gauges.",
   "cap": "Profiles are cleaned and receive their specified finish.",
   "test": "Coating thickness and adhesion are released per lot.",
   "why": "The finish protects the frame outdoors for decades.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Surface",
     "v": "Anodised rails 15 µm."
    },
    {
     "k": "Machine park",
     "v": "F-01 to F-05"
    }
   ],
   "code": "10"
  },
  {
   "name": "Profile inspection",
   "scene": "inspect",
   "machine": "Dimensional metrology, gauges and fixture gauges.",
   "cap": "Critical geometry is measured for each unit size.",
   "test": "Incoming and final inspection with calibrated gauges.",
   "why": "Only released profiles go to kitting.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "Q-01"
    }
   ],
   "code": "11"
  }
 ]
};
window.FW_SETS['lina-steel'] = {
 "title": "Steel profiles.",
 "accent": "#B5C64A",
 "routes": [
  [
   "lina",
   "Final assembly"
  ],
  [
   "lina-alu",
   "Aluminium profiles"
  ],
  [
   "lina-steel",
   "Steel profiles"
  ],
  [
   "lina-sheet",
   "Clamps and brackets"
  ],
  [
   "lina-plastic",
   "Plastic feet and clips"
  ],
  [
   "lina-pad",
   "Roof pads"
  ]
 ],
 "intro": "Cold roll-formed steel profiles, used where the released design calls for steel.",
 "steps": [
  {
   "name": "Coil handling",
   "scene": "inmat",
   "machine": "Coil handling with C-hook and crane.",
   "cap": "Steel coils are received and moved safely to the line.",
   "test": "Coil batch and certificate are booked.",
   "why": "Heavy coils need controlled handling.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "L-03"
    }
   ],
   "code": "01"
  },
  {
   "name": "Decoiling",
   "scene": "coil",
   "machine": "Coil decoiler with coil car.",
   "cap": "The steel strip is unwound into the line.",
   "test": "Strip width and thickness are checked against the order.",
   "why": "A steady feed is the start of an accurate profile.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "S-01"
    }
   ],
   "code": "02"
  },
  {
   "name": "Straightening",
   "scene": "straight",
   "machine": "Straightening and levelling machine.",
   "cap": "The strip is levelled flat.",
   "test": "Flatness is checked before punching.",
   "why": "Flat strip gives accurate holes and shape.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "S-02"
    }
   ],
   "code": "03"
  },
  {
   "name": "Punching",
   "scene": "punch",
   "machine": "Servo feed and punching unit.",
   "cap": "Mounting holes, earthing points and slots are punched by recipe.",
   "test": "Hole positions are checked per recipe.",
   "why": "Punching before forming keeps holes in the right place.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "S-03"
    }
   ],
   "code": "04"
  },
  {
   "name": "Roll forming",
   "scene": "roll",
   "machine": "Roll forming machine with cassette change.",
   "cap": "The strip is formed into the profile in a series of roll stations.",
   "test": "Cross-section is checked against the released drawing.",
   "why": "Thin-walled steel can be strong and economical for some profiles.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "S-04"
    }
   ],
   "code": "05"
  },
  {
   "name": "Cutting to length",
   "scene": "punch",
   "machine": "Flying cut-off.",
   "cap": "The moving profile is cut to the length for two, three or four panels.",
   "test": "Length and burr are checked during the run.",
   "why": "One line serves all unit sizes.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "S-05"
    }
   ],
   "code": "06"
  },
  {
   "name": "Run-out and bundling",
   "scene": "packu",
   "machine": "Run-out, straightening and bundling.",
   "cap": "Profiles are collected, bundled and labelled without damage to coating and corners.",
   "test": "Each bundle gets its own label.",
   "why": "Undamaged coating means lasting corrosion protection.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "S-06"
    }
   ],
   "code": "07"
  },
  {
   "name": "Profile measuring",
   "scene": "inspect",
   "machine": "Steel profile measuring station.",
   "cap": "Cross-section, hole position, length and coating damage are measured.",
   "test": "Periodic statistical process control with a reject regime.",
   "why": "Only released profiles go to kitting.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "S-07"
    }
   ],
   "code": "08"
  }
 ]
};
window.FW_SETS['lina-sheet'] = {
 "title": "Clamps and brackets.",
 "accent": "#B5C64A",
 "routes": [
  [
   "lina",
   "Final assembly"
  ],
  [
   "lina-alu",
   "Aluminium profiles"
  ],
  [
   "lina-steel",
   "Steel profiles"
  ],
  [
   "lina-sheet",
   "Clamps and brackets"
  ],
  [
   "lina-plastic",
   "Plastic feet and clips"
  ],
  [
   "lina-pad",
   "Roof pads"
  ]
 ],
 "intro": "Brackets, clamps and connectors cut, bent, punched and threaded from sheet metal.",
 "steps": [
  {
   "name": "Laser cutting",
   "scene": "laserc",
   "machine": "Fibre laser cutting machine.",
   "cap": "Brackets and connectors are cut from sheet in nested layouts.",
   "test": "Parts are traceable to their sheet batch.",
   "why": "Nesting keeps material use low.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "M-01"
    }
   ],
   "code": "01"
  },
  {
   "name": "Bending",
   "scene": "brake",
   "machine": "CNC press brakes.",
   "cap": "Brackets and clamps are bent to shape.",
   "test": "Bend angles are checked with gauges.",
   "why": "Repeatable bends give repeatable fits.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "M-02"
    }
   ],
   "code": "02"
  },
  {
   "name": "Punching and forming",
   "scene": "punch",
   "machine": "Eccentric or servo press with stamping tools.",
   "cap": "High-volume clips and brackets are stamped and formed.",
   "test": "Press safety and tool condition are monitored.",
   "why": "Stamping makes small parts fast and identical.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "M-03"
    }
   ],
   "code": "03"
  },
  {
   "name": "Threading",
   "scene": "tool",
   "machine": "Tapping and threading unit.",
   "cap": "Threads are cut where the design uses screw joints.",
   "test": "Thread size and position are checked against the drawing.",
   "why": "A clean thread holds its torque.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "M-04"
    }
   ],
   "code": "04"
  },
  {
   "name": "Clinching and riveting",
   "scene": "punch",
   "machine": "Clinching, riveting and pressing station.",
   "cap": "Parts are joined where the design specifies it.",
   "test": "Joining force and stroke are monitored.",
   "why": "Monitored joints are proven joints.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "M-05"
    }
   ],
   "code": "05"
  },
  {
   "name": "Deburring",
   "scene": "deburr",
   "machine": "Drum or belt deburring machine.",
   "cap": "Burrs are removed from all small metal parts.",
   "test": "Edges are checked by sample.",
   "why": "Burr-free parts protect people and cables.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "M-06"
    }
   ],
   "code": "06"
  }
 ]
};
window.FW_SETS['lina-plastic'] = {
 "title": "Plastic feet and clips.",
 "accent": "#B5C64A",
 "routes": [
  [
   "lina",
   "Final assembly"
  ],
  [
   "lina-alu",
   "Aluminium profiles"
  ],
  [
   "lina-steel",
   "Steel profiles"
  ],
  [
   "lina-sheet",
   "Clamps and brackets"
  ],
  [
   "lina-plastic",
   "Plastic feet and clips"
  ],
  [
   "lina-pad",
   "Roof pads"
  ]
 ],
 "intro": "Load-bearing roof feet, clips and caps moulded from technical polymer.",
 "steps": [
  {
   "name": "Granulate drying",
   "scene": "dryer",
   "machine": "Central granulate dryer.",
   "cap": "Polymer granulate is dried to the right moisture content.",
   "test": "Dew point, air flow and moisture are logged.",
   "why": "Polyamide-type materials lose strength if they are not dried correctly.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "P-03"
    }
   ],
   "code": "01"
  },
  {
   "name": "Dosing and mixing",
   "scene": "dryer",
   "machine": "Gravimetric dosing and mixing.",
   "cap": "Compound and approved additives are dosed by batch recipe.",
   "test": "Each lot is recorded.",
   "why": "Lot traceability down to the granulate.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "P-04"
    }
   ],
   "code": "02"
  },
  {
   "name": "Moulding the feet",
   "scene": "inject",
   "machine": "Injection moulding machines for load-bearing feet, with mould temperature control and chiller.",
   "cap": "The roof feet are moulded, several per cycle.",
   "test": "Dimensions are checked against the control plan.",
   "why": "The feet carry the unit and its wind loads to the roof.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "P-01, P-05, P-06"
    }
   ],
   "code": "03"
  },
  {
   "name": "Moulding clips and caps",
   "scene": "inject",
   "machine": "Injection moulding machines for small parts with quick mould change.",
   "cap": "Clips, cable holders and end caps are moulded.",
   "test": "Fit and snap function are checked.",
   "why": "Small parts lock the system together.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "P-02"
    }
   ],
   "code": "04"
  },
  {
   "name": "Take-out",
   "scene": "inject",
   "machine": "Take-out robots.",
   "cap": "Robots remove the parts from the mould.",
   "test": "Parts are handled without damage.",
   "why": "Consistent take-out gives a consistent cycle time.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "P-07"
    }
   ],
   "code": "05"
  },
  {
   "name": "Vision inspection",
   "scene": "inspect",
   "machine": "Vision and dimensional inspection for moulded parts.",
   "cap": "Critical fit, click function and visible defects are checked.",
   "test": "100% or sample inspection according to the control plan.",
   "why": "A faulty click joint is found before it reaches a roof.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "P-08"
    }
   ],
   "code": "06"
  },
  {
   "name": "Regrind control",
   "scene": "deburr",
   "machine": "Controlled regrind and reject cell.",
   "cap": "Rejects are separated. Regrind is only used where design and material allow it.",
   "test": "No unvalidated regrind in load-bearing feet.",
   "why": "Waste stays under control without weakening the feet.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "P-09"
    }
   ],
   "code": "07"
  }
 ]
};
window.FW_SETS['lina-pad'] = {
 "title": "Roof pads.",
 "accent": "#B5C64A",
 "routes": [
  [
   "lina",
   "Final assembly"
  ],
  [
   "lina-alu",
   "Aluminium profiles"
  ],
  [
   "lina-steel",
   "Steel profiles"
  ],
  [
   "lina-sheet",
   "Clamps and brackets"
  ],
  [
   "lina-plastic",
   "Plastic feet and clips"
  ],
  [
   "lina-pad",
   "Roof pads"
  ]
 ],
 "intro": "Elastomer pads that protect the roof membrane under every foot.",
 "steps": [
  {
   "name": "Pad moulding",
   "scene": "elast",
   "machine": "Elastomer moulding press or injection cell.",
   "cap": "Roof contact pads are moulded from the chosen compound.",
   "test": "Material compatibility is validated first.",
   "why": "The pad protects the roof membrane and keeps the unit from sliding.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "E-01"
    }
   ],
   "code": "01"
  },
  {
   "name": "Pad cutting",
   "scene": "laserc",
   "machine": "CNC or die cutting machine.",
   "cap": "Pads are cut to contour and thickness from sheet material.",
   "test": "Contour and thickness are checked.",
   "why": "An alternative route when pads start as sheet.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "E-02"
    }
   ],
   "code": "02"
  },
  {
   "name": "Post-cure",
   "scene": "chamber",
   "machine": "Post-cure and conditioning installation.",
   "cap": "Pads are conditioned where the compound requires it.",
   "test": "Cure conditions are recorded.",
   "why": "Some compounds only reach their properties after post-cure.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "E-03"
    }
   ],
   "code": "03"
  },
  {
   "name": "Bonding to the foot",
   "scene": "subasm",
   "machine": "Bonding and insert station.",
   "cap": "The pad is joined to the plastic foot.",
   "test": "Joints are tested for release after moisture and ageing.",
   "why": "A pad that stays on keeps protecting the roof.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "E-04"
    }
   ],
   "code": "04"
  }
 ]
};
/* DEPTH-1446: ANDO panel line inside the LINA walk (same line as ANDO, panels used in LINA). Steps are read live from the ANDO set. */
(function () {
  var F = window.FW_SETS, A = F.ando;
  var R = [['lina-panels', 'ANDO panels'], ['lina-alu', 'Aluminium profiles'], ['lina-steel', 'Steel profiles'], ['lina-sheet', 'Clamps and brackets'], ['lina-plastic', 'Plastic feet and clips'], ['lina-pad', 'Roof pads'], ['lina', 'Final assembly']];
  F['lina-panels'] = {
    title: 'ANDO panel line.', accent: '#B5C64A', routes: R, usp: A.usp, cert: A.cert,
    intro: 'LINA panels are made on the same production line as ANDO. Same stations, same machines, same tests. The finished panels go to LINA final assembly.',
    note: 'This is the ANDO module line. For LINA it runs up to packing; the packed panels are then received, scanned and built into LINA units.',
    steps: A.steps.filter(function (s) { return s.name !== 'Store and dispatch' && s.name !== 'From factory to site'; })
  };
  ['lina', 'lina-alu', 'lina-steel', 'lina-sheet', 'lina-plastic', 'lina-pad'].forEach(function (k) { if (F[k]) F[k].routes = R; });
})();
/* DEPTH-1447: seven machine park areas complete: Toolmaking and Surface treatment lines, coating stations in steel and sheet lines, internal transport in final assembly. */
(function () {
  var F = window.FW_SETS, P = function (x) { return x < 10 ? '0' + x : '' + x; };
  var S = function (name, scene, machine, cap, test, why, ids) { return { name: name, scene: scene, machine: machine, cap: cap, test: test, why: why, emon: '', usp: false, extra: [{ k: 'Machine park', v: ids }] }; };
  var fin = function (a) { a.forEach(function (s, k) { s.code = P(k + 1); }); return a; };
  var R = [['lina-panels', 'ANDO panels'], ['lina-alu', 'Aluminium profiles'], ['lina-steel', 'Steel profiles'], ['lina-sheet', 'Clamps and brackets'], ['lina-tool', 'Toolmaking'], ['lina-plastic', 'Plastic feet and clips'], ['lina-pad', 'Roof pads'], ['lina-coat', 'Surface treatment'], ['lina', 'Final assembly']];
  F['lina-tool'] = { title: 'Toolmaking.', accent: '#B5C64A', routes: R, intro: 'Moulds, stamping tools, assembly jigs and gauges are made and maintained in-house.', steps: fin([
    S('CNC milling', 'tool', '3-axis CNC milling machines and a 5-axis machine for complex parts.', 'Jigs, mould parts and prototypes are milled.', 'Parts are measured before use.', 'Own tooling means changes to feet and connectors do not wait for an outside toolmaker.', 'T-01, T-02'),
    S('Turning', 'tool', 'CNC lathe.', 'Cams, bushes, tool parts and maintenance parts are turned.', 'Dimensions are checked against the drawing.', 'Spare parts are made on site, so machines stand still for less time.', 'T-03'),
    S('Wire EDM', 'tool', 'Wire EDM machine.', 'Precision mould inserts and stamping tool parts are cut.', 'Contours are measured on the 3D machine.', 'Tight tool tolerances give tight part tolerances.', 'T-04'),
    S('Grinding and tool presetting', 'tool', 'Surface grinder and tool presetting.', 'Tool faces are ground and tools are preset before they go to the machine.', 'Presetting values are recorded.', 'A preset tool starts producing good parts sooner.', 'T-05'),
    S('3D measuring', 'inspect', '3D scanner or coordinate measuring machine.', 'First articles, moulds and production samples are measured.', 'Measurements are kept per tool and part revision.', 'One metrology system for toolmaking and production quality.', 'T-06'),
    S('CAD and CAM', 'report', 'CAD, CAM and PLM workstations.', 'Drawings, machining programs and revisions are managed in one system.', 'Every program is linked to a drawing revision.', 'The right revision reaches the right machine.', 'T-07')
  ]) };
  F['lina-coat'] = { title: 'Surface treatment.', accent: '#B5C64A', routes: R, intro: 'Profiles and metal parts receive their protective finish. Only finishes specified in the released design are applied.', steps: fin([
    S('Pre-treatment', 'surface', 'Pre-treatment line and industrial washer.', 'Parts are cleaned and degreased, with materials processed separately.', 'Bath condition is checked per shift.', 'A coating only lasts on a clean surface.', 'F-01'),
    S('Powder coating', 'surface', 'Powder coating booth and curing oven.', 'Profiles and parts are powder coated and cured.', 'Colour and thickness are controlled per batch.', 'Powder coating protects steel and aluminium where specified.', 'F-02'),
    S('Anodising', 'surface', 'Anodising and rinsing line.', 'Aluminium profiles are anodised where the design specifies it.', 'Layer thickness is measured per lot.', 'Anodising protects aluminium against corrosion.', 'F-03'),
    S('Coating inspection', 'inspect', 'Coating thickness and adhesion gauges.', 'Coating thickness and adhesion are measured.', 'Each lot is released on measured values.', 'Only released parts go to kitting.', 'F-04'),
    S('Waste water treatment', 'wet', 'Waste water treatment and chemical containment.', 'Rinse water and process chemicals are treated and collected.', 'Discharge follows the permit and water balance.', 'Wet processes need controlled water handling.', 'F-05')
  ]) };
  var add = function (k, afterName, st) { var s = F[k].steps, j = s.findIndex(function (x) { return x.name === afterName; }); s.splice(j + 1, 0, st); fin(s); };
  add('lina-steel', 'Cutting to length', S('Coating where needed', 'surface', 'Surface treatment line.', 'Steel profiles receive an extra coating where the design requires it.', 'Coating thickness and adhesion are released per lot.', 'Cut edges and punched holes need protection outdoors.', 'F-01, F-02, F-04'));
  add('lina-sheet', 'Deburring', S('Coating', 'surface', 'Surface treatment line.', 'Brackets and clamps receive their protective finish.', 'Coating thickness and adhesion are released per lot.', 'Small parts are exposed to the same weather as the frame.', 'F-01, F-02, F-04'));
  add('lina', 'Incoming materials', S('Internal transport', 'inmat', 'Electric forklifts and reach trucks, warehouse system with scanners, conveyors and buffers between stations.', 'Materials, parts and units move between the lines and stations with every move scanned.', 'Every movement is booked in the warehouse and production system.', 'Buffers absorb short stops so the line keeps running.', 'L-02, L-06, V-12'));
  ['lina-panels', 'lina', 'lina-alu', 'lina-steel', 'lina-sheet', 'lina-plastic', 'lina-pad'].forEach(function (k) { if (F[k]) F[k].routes = R; });
})();
/* DEPTH-1450: Circularity chapter for ANDO and LINA (FLUXX structure adapted to PV panels and mounting parts). */
window.FW_SETS['ando-circ'] = Object.assign({
 "title": "A documented lifecycle.",
 "unit": "Phase",
 "wholeLabel": "Whole lifecycle",
 "layout": "free",
 "intro": "Designed for a documented lifecycle, from first use to responsible recovery. Not every panel passes through every phase. Services are offered with approved partners and procedures.",
 "note": "PV panels fall under the WEEE Directive (2012/19/EU). Producer responsibility is assessed for each market.",
 "steps": [
  {
   "code": "01",
   "name": "Condition assessment",
   "scene": "el",
   "machine": "IV curve tracer and EL camera, on site or in an authorised workshop.",
   "cap": "A qualified technician compares the measured output with the panel’s own flash test record and inspects glass, frame, junction box and cables.",
   "test": "Assessment follows the approved procedure.",
   "why": "Decisions start from measured condition, compared with the factory record of the same panel.",
   "emon": "Your panel’s flash test record and service history.",
   "usp": false
  },
  {
   "code": "02",
   "name": "Maintenance and repair",
   "scene": "jbox",
   "machine": "Authorised service workshop.",
   "cap": "The panel is disconnected and verified safe. A defined service part, such as a connector or cable, is inspected or replaced.",
   "test": "Service date, work and replaced part are added to the record.",
   "why": "Work on DC connections is done only by qualified people.",
   "emon": "",
   "usp": false
  },
  {
   "code": "03",
   "name": "Reuse assessment",
   "scene": "flash",
   "machine": "Test bench.",
   "cap": "Panels removed in good condition are cleaned, inspected and flash-tested again to decide the next use.",
   "test": "Continued use, reuse elsewhere or end-of-life processing.",
   "why": "A panel that still performs to its record can produce energy for longer.",
   "emon": "",
   "usp": false
  },
  {
   "code": "04",
   "name": "Collection",
   "scene": "truck",
   "machine": "Qualified operator and approved transport.",
   "cap": "The decommissioned panel is disconnected, identified by its QR code and taken to a receiving facility.",
   "test": "Collection reference and date are recorded.",
   "why": "PV panels are electrical equipment and do not belong in household waste.",
   "emon": "",
   "usp": false
  },
  {
   "code": "05",
   "name": "Controlled dismantling",
   "scene": "fdismantle",
   "machine": "Specialist treatment facility.",
   "cap": "The frame, junction box and cables are removed from the laminate.",
   "test": "Material groups are recorded.",
   "why": "Separated groups can be recovered.",
   "emon": "",
   "usp": false
  },
  {
   "code": "06",
   "name": "Glass separation",
   "scene": "lam",
   "machine": "Authorised recycling facility.",
   "cap": "Glass is separated from the encapsulant, cells and ribbons.",
   "test": "Separation follows the partner’s validated process.",
   "why": "Glass is the largest part of a panel by weight.",
   "emon": "",
   "usp": false
  },
  {
   "code": "07",
   "name": "Material recovery",
   "scene": "frecov",
   "machine": "Authorised recycling facility.",
   "cap": "Glass, aluminium, silicon, copper and polymers are recovered in separate streams.",
   "test": "Recovery follows the partner’s validated process. Not every material is recovered.",
   "why": "Recovered materials can return to manufacturing.",
   "emon": "",
   "usp": false
  },
  {
   "code": "08",
   "name": "Lifecycle record",
   "scene": "sheet",
   "machine": "Digital record.",
   "cap": "Manufacturing, flash test, installation, service, collection and recovery appear in order, with actual events separated from planned ones.",
   "test": "After recycling the record is closed.",
   "why": "The record supports responsible decisions throughout the life of the panel.",
   "emon": "",
   "usp": false
  }
 ]
}, { usp: window.FW_SETS.ando.usp });
window.FW_SETS['lina-circ'] = Object.assign({
 "title": "A documented lifecycle.",
 "unit": "Phase",
 "wholeLabel": "Whole lifecycle",
 "layout": "free",
 "accent": "#B5C64A",
 "intro": "Designed for a documented lifecycle, from first use to responsible recovery. Not every unit passes through every phase. Services are offered with approved partners and procedures.",
 "note": "PV panels fall under the WEEE Directive (2012/19/EU). Metal and polymer mounting parts are recycled by material. Producer responsibility is assessed for each market.",
 "steps": [
  {
   "code": "01",
   "name": "Condition assessment",
   "scene": "el",
   "machine": "IV curve tracer, EL camera and visual inspection, on site.",
   "cap": "A qualified technician compares each panel’s output with its flash test record and checks frame, feet, clamps and roof pads for wear and corrosion.",
   "test": "Assessment follows the approved procedure.",
   "why": "Decisions start from measured condition, compared with the factory records of the same unit.",
   "emon": "Your unit’s panel records and service history.",
   "usp": false
  },
  {
   "code": "02",
   "name": "Maintenance and repair",
   "scene": "subasm",
   "machine": "Authorised service partner.",
   "cap": "The unit is disconnected and verified safe. Defined parts such as clamps, clips, roof pads or connectors are inspected or replaced.",
   "test": "Service date, work and replaced parts are added to the record.",
   "why": "Replacing a worn part keeps the rest of the unit in use.",
   "emon": "",
   "usp": false
  },
  {
   "code": "03",
   "name": "Reuse assessment",
   "scene": "flash",
   "machine": "Test bench.",
   "cap": "Units and parts removed in good condition are inspected and tested again to decide the next use.",
   "test": "Continued use, reuse on another roof or end-of-life processing.",
   "why": "A unit that still performs can produce energy for longer.",
   "emon": "",
   "usp": false
  },
  {
   "code": "04",
   "name": "Collection",
   "scene": "truck",
   "machine": "Qualified operator and approved transport.",
   "cap": "The decommissioned unit is disconnected, identified by its QR code and taken to a receiving facility.",
   "test": "Collection reference and date are recorded.",
   "why": "PV panels are electrical equipment and do not belong in household waste.",
   "emon": "",
   "usp": false
  },
  {
   "code": "05",
   "name": "Unit dismantling",
   "scene": "fdismantle",
   "machine": "Specialist treatment facility.",
   "cap": "The ANDO panels, profiles, clamps, feet, pads and cables are separated.",
   "test": "Material groups are recorded.",
   "why": "Separated groups can be recovered.",
   "emon": "",
   "usp": false
  },
  {
   "code": "06",
   "name": "Panel recycling",
   "scene": "lam",
   "machine": "Authorised recycling facility.",
   "cap": "The panels follow the ANDO recovery route: junction box and cables removed, glass separated from the laminate.",
   "test": "Separation follows the partner’s validated process.",
   "why": "Glass is the largest part of a panel by weight.",
   "emon": "",
   "usp": false
  },
  {
   "code": "07",
   "name": "Material recovery",
   "scene": "frecov",
   "machine": "Authorised recycling facility.",
   "cap": "Glass, aluminium, steel, silicon, copper and the polymers of feet, clips and pads are recovered in separate streams.",
   "test": "Recovery follows the partner’s validated process. Not every material is recovered.",
   "why": "Recovered materials can return to manufacturing.",
   "emon": "",
   "usp": false
  },
  {
   "code": "08",
   "name": "Lifecycle record",
   "scene": "sheet",
   "machine": "Digital record.",
   "cap": "Parts and panel manufacturing, assembly, installation, service, collection and recovery appear in order, with actual events separated from planned ones.",
   "test": "After recycling the record is closed.",
   "why": "The record supports responsible decisions throughout the life of the unit.",
   "emon": "",
   "usp": false
  }
 ]
}, { usp: window.FW_SETS.lina.usp });
/* DEPTH-1452: LINA chapters Testing (A = ANDO panel tests, live from ando-test part A), To site, Traceability. */
(function () {
  var F = window.FW_SETS;
  var t = {
 "title": "Tested in production and in our lab.",
 "unit": "Test",
 "wholeLabel": "All tests",
 "layout": "free",
 "accent": "#B5C64A",
 "intro": "Part A is the ANDO panel testing, done on every panel before it reaches LINA. Part B runs on every LINA part and unit in production. Part C runs on samples in our lab, to qualify the design.",
 "parts": {
  "A": "A · ANDO panels · Every panel",
  "B": "B · LINA production · Every part and unit",
  "C": "C · In our lab · Samples"
 },
 "steps": [
  {
   "code": "B1",
   "part": "B",
   "name": "Profile measuring",
   "scene": "inspect",
   "machine": "Dimensional metrology and fixture gauges.",
   "cap": "Cross-section, hole positions and length of aluminium and steel profiles are measured.",
   "test": "Statistical process control with a reject regime.",
   "why": "The holes define where feet, clamps and panels sit.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "Q-01, S-07"
    }
   ]
  },
  {
   "code": "B2",
   "part": "B",
   "name": "Moulded part inspection",
   "scene": "inspect",
   "machine": "Vision and dimensional inspection.",
   "cap": "Critical fit, click function and visible defects of feet, clips and caps are checked.",
   "test": "100% or sample inspection according to the control plan.",
   "why": "A faulty click joint is found before it reaches a roof.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "P-08"
    }
   ]
  },
  {
   "code": "B3",
   "part": "B",
   "name": "Coating release",
   "scene": "inspect",
   "machine": "Coating thickness and adhesion gauges.",
   "cap": "Coating thickness and adhesion are measured on each lot.",
   "test": "Lots are released on measured values.",
   "why": "Only released parts go to kitting.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "F-04"
    }
   ]
  },
  {
   "code": "B4",
   "part": "B",
   "name": "Crimp pull test",
   "scene": "cable",
   "machine": "Crimp station with pull tester.",
   "cap": "Crimped DC connections are pull-tested and identified.",
   "test": "Pull force is compared with the limit for the approved connector.",
   "why": "A failing crimp is found in the factory, not on the roof.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "V-08"
    }
   ]
  },
  {
   "code": "B5",
   "part": "B",
   "name": "Mechanical vision check",
   "scene": "visual",
   "machine": "Mechanical vision station.",
   "cap": "Panel position, rail spacing and clip orientation are checked on every unit.",
   "test": "Units outside the criteria are stopped.",
   "why": "Small assembly errors are found before packing.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "V-09"
    }
   ]
  },
  {
   "code": "B6",
   "part": "B",
   "name": "Electrical end-of-line test",
   "scene": "hv",
   "machine": "Electrical unit test benches.",
   "cap": "Polarity, plausibility, continuity and insulation are tested on every finished unit.",
   "test": "Results are recorded per unit serial number.",
   "why": "The unit leaves the factory electrically verified.",
   "emon": "End-of-line test result of your unit.",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "V-10"
    }
   ]
  },
  {
   "code": "C1",
   "part": "C",
   "name": "Joint and material tests",
   "scene": "qclab",
   "machine": "Universal tensile and compression bench.",
   "cap": "Clamps, feet, snap-fits and joints are pulled and pressed to failure.",
   "test": "Results are compared with the design values.",
   "why": "Every joint in the unit carries load.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "Q-02"
    }
   ]
  },
  {
   "code": "C2",
   "part": "C",
   "name": "Full unit load test",
   "scene": "load",
   "machine": "Large mechanical load frame.",
   "cap": "Complete units are loaded statically in lift, push and shear.",
   "test": "Deflection and damage are recorded.",
   "why": "Wind lifts, snow presses and both act on the whole unit.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "Q-03"
    }
   ]
  },
  {
   "code": "C3",
   "part": "C",
   "name": "Creep and fatigue of the foot",
   "scene": "load",
   "machine": "Creep and fatigue rig.",
   "cap": "Feet are held under long-term load at temperature.",
   "test": "Deformation over time is measured.",
   "why": "Plastic feet must keep their shape for decades.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "Q-04"
    }
   ]
  },
  {
   "code": "C4",
   "part": "C",
   "name": "Climate cycling",
   "scene": "chamber",
   "machine": "Climate chamber with thermal cycling.",
   "cap": "Parts are cycled through temperature and humidity.",
   "test": "Dimensions and function are checked after the cycles.",
   "why": "Expansion and moisture work on every joint.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "Q-05"
    }
   ]
  },
  {
   "code": "C5",
   "part": "C",
   "name": "UV ageing",
   "scene": "uv",
   "machine": "UV ageing chamber.",
   "cap": "Polymers and coatings are exposed to a controlled UV dose.",
   "test": "Appearance and strength are compared with unexposed samples.",
   "why": "Sunlight ages plastics and coatings first.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "Q-06"
    }
   ]
  },
  {
   "code": "C6",
   "part": "C",
   "name": "Corrosion",
   "scene": "chamber",
   "machine": "Salt spray cabinet.",
   "cap": "Metal joints, coatings and contact pairs are exposed to salt spray.",
   "test": "Corrosion is assessed against the chosen standard for the environment.",
   "why": "Aluminium and steel touching each other need proven protection.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "Q-07"
    }
   ]
  },
  {
   "code": "C7",
   "part": "C",
   "name": "Roof membrane test",
   "scene": "qclab",
   "machine": "Friction and compatibility test rig.",
   "cap": "Pads are tested on roof membranes for contact pressure, slip, creep and chemical compatibility.",
   "test": "Results are recorded per membrane type.",
   "why": "The roof must stay intact under the unit.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "Q-08"
    }
   ]
  },
  {
   "code": "C8",
   "part": "C",
   "name": "External type tests",
   "scene": "report",
   "machine": "Specialist external laboratories.",
   "cap": "Wind tunnel, roof fire and transport tests are done on representative units.",
   "test": "Reports are filed per design revision.",
   "why": "Some tests need facilities no factory has on site.",
   "emon": "",
   "usp": false,
   "extra": [
    {
     "k": "Machine park",
     "v": "Q-11"
    }
   ]
  }
 ]
};
  var a = (F['ando-test'].steps || []).filter(function (s) { return s.part === 'A'; }).map(function (s) { return Object.assign({}, s, { img: undefined }); });
  t.steps = a.concat(t.steps); t.usp = F.ando.usp;
  F['lina-test'] = t;
  F['lina-home'] = Object.assign({
 "title": "From factory to roof.",
 "unit": "Step",
 "wholeLabel": "Whole route",
 "layout": "free",
 "accent": "#B5C64A",
 "intro": "The QR code applied in the factory follows the unit to the roof. One identity for the unit and every panel in it.",
 "steps": [
  {
   "code": "01",
   "part": "",
   "name": "Pallet and dispatch",
   "scene": "pallet",
   "machine": "Variant stacking frames, strapping and pallet label.",
   "cap": "Units are stacked per variant, secured and labelled. The pallet label lists the unit serial numbers it carries.",
   "test": "The pallet label is scanned before it leaves the warehouse.",
   "why": "The pallet is the first link between a shipment and each unit in it.",
   "emon": "",
   "usp": false
  },
  {
   "code": "02",
   "part": "",
   "name": "Truck",
   "scene": "truck",
   "machine": "Forklift and covered truck.",
   "cap": "The forklift loads the pallet into the truck. Shipment and pallet are recorded together.",
   "test": "Loading is checked against the shipment list.",
   "why": "Each pallet can be traced to its delivery.",
   "emon": "",
   "usp": false
  },
  {
   "code": "03",
   "part": "",
   "name": "Installer receives and scans",
   "scene": "depot",
   "machine": "Installer warehouse and handheld scanner.",
   "cap": "The installer receives the pallet and scans the pallet label. The delivery is matched to the order.",
   "test": "Delivered serial numbers are compared with the shipment.",
   "why": "Missing or damaged units are found at delivery, not on the roof.",
   "emon": "",
   "usp": false
  },
  {
   "code": "04",
   "part": "",
   "name": "QR opens the unit record",
   "scene": "phone",
   "machine": "Phone with EMON.",
   "cap": "The installer scans the QR code on a unit. EMON opens the unit and the flash test record of each panel in it.",
   "test": "",
   "why": "The installer sees the measured power of each panel before the unit goes on the roof.",
   "emon": "Unit serial number and the flash test record of each panel.",
   "usp": true
  },
  {
   "code": "05",
   "part": "",
   "name": "Placing on the roof",
   "scene": "roof",
   "machine": "LINA units, roof pads and cable management.",
   "cap": "The units are placed on the roof according to the approved layout and connected.",
   "test": "Positions and cable routing are checked before commissioning.",
   "why": "The approved layout keeps each unit within its calculated load case.",
   "emon": "",
   "usp": false
  },
  {
   "code": "06",
   "part": "",
   "name": "Scan and register",
   "scene": "sheet",
   "machine": "EMON.",
   "cap": "Each unit QR code is scanned in EMON to register the unit and its panels on the roof.",
   "test": "",
   "why": "Each position on the roof is linked to one unit serial number.",
   "emon": "Roof layout with unit and panel serial numbers.",
   "usp": false
  },
  {
   "code": "07",
   "part": "",
   "name": "Warranty by email",
   "scene": "mail",
   "machine": "EMON and email.",
   "cap": "The customer receives a PDF warranty document linked to the registered units.",
   "test": "",
   "why": "The warranty document names the registered units.",
   "emon": "Warranty document linked to the registered units.",
   "usp": false
  },
  {
   "code": "08",
   "part": "",
   "name": "Follow output in EMON",
   "scene": "phone",
   "machine": "EMON app and email reports.",
   "cap": "Follow system output and long-term performance in EMON, on your phone or through email reports.",
   "test": "",
   "why": "The flash test of each panel stays next to its output.",
   "emon": "System output and the flash test record per panel.",
   "usp": true
  }
 ]
}, { usp: F.ando.usp });
  F['lina-trace'] = Object.assign({
 "title": "One identity, every record.",
 "unit": "Record",
 "wholeLabel": "All records",
 "layout": "free",
 "accent": "#B5C64A",
 "intro": "Each station adds to the record of the unit. The unit serial number links its parts batches, its ANDO panels and its test results. The QR code opens the parts meant for installer and owner in EMON. Internal production records are not public.",
 "steps": [
  {
   "code": "01",
   "part": "",
   "name": "Incoming materials",
   "scene": "inmat",
   "machine": "",
   "cap": "Aluminium, steel, polymer and elastomer batches are booked with their material certificates.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Recorded",
     "v": "Supplier, alloy or polymer type, batch and material certificate."
    },
    {
     "k": "Linked to",
     "v": "Parts batches"
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team."
    }
   ]
  },
  {
   "code": "02",
   "part": "",
   "name": "Moulding and machining",
   "scene": "inject",
   "machine": "",
   "cap": "Feet, clips, profiles and brackets are made with recorded tools and settings.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Recorded",
     "v": "Mould number, machine program and production settings."
    },
    {
     "k": "Linked to",
     "v": "Parts batches"
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team."
    }
   ]
  },
  {
   "code": "03",
   "part": "",
   "name": "Coating",
   "scene": "surface",
   "machine": "",
   "cap": "Profiles and metal parts receive their finish.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Recorded",
     "v": "Coating type, batch and measured thickness."
    },
    {
     "k": "Linked to",
     "v": "Parts batches"
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team."
    }
   ]
  },
  {
   "code": "04",
   "part": "",
   "name": "ANDO panel receipt",
   "scene": "reception",
   "machine": "",
   "cap": "Each ANDO panel is scanned and matched to its flash test record.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Recorded",
     "v": "Panel serial numbers and their flash test records."
    },
    {
     "k": "Linked to",
     "v": "Unit serial number at final assembly"
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team."
    }
   ]
  },
  {
   "code": "05",
   "part": "",
   "name": "Frame assembly",
   "scene": "final",
   "machine": "",
   "cap": "The structure is assembled in a jig with controlled fastening.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Recorded",
     "v": "Workstation, date and fastening values."
    },
    {
     "k": "Linked to",
     "v": "Unit serial number"
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team."
    }
   ]
  },
  {
   "code": "06",
   "part": "",
   "name": "Electrical end-of-line test",
   "scene": "hv",
   "machine": "",
   "cap": "Polarity, continuity and insulation are tested on the finished unit.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Recorded",
     "v": "Test results per unit."
    },
    {
     "k": "Linked to",
     "v": "Unit serial number"
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team. Result readable in EMON."
    }
   ]
  },
  {
   "code": "07",
   "part": "",
   "name": "Unit marking and QR",
   "scene": "label",
   "machine": "",
   "cap": "The unit receives its serial number and QR code.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": true,
   "rows": [
    {
     "k": "Recorded",
     "v": "Link between unit serial, QR code, panel serials, parts batches and tests."
    },
    {
     "k": "Linked to",
     "v": "Unit serial number"
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team."
    }
   ]
  },
  {
   "code": "08",
   "part": "",
   "name": "Palletising and dispatch",
   "scene": "pal",
   "machine": "",
   "cap": "Units are stacked, labelled and dispatched.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Recorded",
     "v": "Which unit serials are on which pallet, carrier and date."
    },
    {
     "k": "Linked to",
     "v": "Unit serial number"
    },
    {
     "k": "Retained in",
     "v": "Production record"
    },
    {
     "k": "Access",
     "v": "Factory quality team."
    }
   ]
  },
  {
   "code": "09",
   "part": "",
   "name": "On the roof",
   "scene": "phone",
   "machine": "",
   "cap": "The installer scans each unit QR code in EMON.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": true,
   "rows": [
    {
     "k": "Recorded",
     "v": "Installed position, project, roof type and installation date."
    },
    {
     "k": "Linked to",
     "v": "Unit serial number via the QR code"
    },
    {
     "k": "Retained in",
     "v": "EMON"
    },
    {
     "k": "Access",
     "v": "Authorised installer and owner in EMON."
    }
   ]
  },
  {
   "code": "10",
   "part": "",
   "name": "Records kept for every unit",
   "scene": "report",
   "machine": "",
   "cap": "They trace a delivered unit to its materials, process conditions, panels and tests.",
   "test": "",
   "why": "",
   "emon": "",
   "usp": false,
   "rows": [
    {
     "k": "Unit identity",
     "v": "Model, variant, serial number and QR code."
    },
    {
     "k": "Material genealogy",
     "v": "Aluminium, steel, polymer and elastomer batches with certificates."
    },
    {
     "k": "Process",
     "v": "Moulds, programs, fastening values and coating batches."
    },
    {
     "k": "Panels",
     "v": "ANDO panel serial numbers with their flash test records."
    },
    {
     "k": "Quality",
     "v": "Inspections and end-of-line test results."
    },
    {
     "k": "Logistics and installation",
     "v": "Pallet, shipment, destination, project, roof type and installation date."
    }
   ]
  }
 ]
}, { usp: F.ando.usp });
})();

/* DEPTH-1451: LINA solar strips route (user, 5 Nov 2026). Strip = 1 row x 12 half-cut cells, approx. 1,7 m x 0,2 m, bifacial glass-glass, same TOPCon cells and ANDO line. Standards: strips IEC 61215, IEC 61730, ISO 9001; mounting EN 1090, EN 1999, EN 1993, ISO 1461 / Magnelis, ISO 9001. Archive: _ARCHIVE/DEPTH-1451 lina strips. */
(function () {
  var F = window.FW_SETS, A = F.ando; if (!A) return;
  var STRIP = 'IEC 61215; IEC 61730; ISO 9001';
  var steps = JSON.parse(JSON.stringify(A.steps.filter(function (s) { return s.name !== 'Store and dispatch' && s.name !== 'From factory to site'; })));
  steps.forEach(function (s) { s.std = s.std ? s.std + '; ' + STRIP : STRIP; });
  var str = steps.find(function (s) { return s.name === 'Stringing'; });
  if (str) str.extra = (str.extra || []).concat([{ k: 'Strip layout', v: 'One row of 12 half-cut cells. Strip size approx. 1,7 m × 0,2 m.' }]);
  F['lina-strips'] = { title: 'Solar strips.', accent: '#B5C64A', usp: A.usp, cert: 'IEC 61215, IEC 61730 and ISO 9001',
    intro: 'LINA strips are made on the ANDO line with the same TOPCon cells, laid out as narrow strips: one row of 12 half-cut cells, approx. 1,7 m × 0,2 m. Bifacial glass-glass, frameless.',
    note: 'Stations follow the ANDO panel line. Strip format, materials and acceptance limits follow the approved LINA design.',
    steps: steps.filter(function (s) { return s.name !== 'Framing'; }) };
  var M = { 'lina-alu': 'EN 1090; EN 1999 (aluminium structures); ISO 9001', 'lina-steel': 'EN 1090; EN 1993 (steel structures); ISO 1461 / Magnelis coating; ISO 9001', 'lina-sheet': 'EN 1090; EN 1993; ISO 9001', 'lina-coat': 'ISO 1461 / Magnelis coating; ISO 9001', 'lina-plastic': 'ISO 9001', 'lina-pad': 'ISO 9001', 'lina-tool': 'ISO 9001' };
  Object.keys(M).forEach(function (k) { if (F[k]) (F[k].steps || []).forEach(function (s) { if (!s.std) s.std = M[k]; }); });
  Object.keys(F).forEach(function (k) { var r = F[k].routes; if (!r || !r.some(function (x) { return x[0] === 'lina-panels'; }) || r.some(function (x) { return x[0] === 'lina-strips'; })) return;
    var i = r.findIndex(function (x) { return x[0] === 'lina-panels'; }); F[k].routes = r.slice(0, i + 1).concat([['lina-strips', 'Solar strips']], r.slice(i + 1)); });
  F['lina-strips'].routes = (F['lina'] && F['lina'].routes) || [['lina-strips', 'Solar strips']];
})();
