// Batch 3 stages (PONTIX, XOOM, AIRO, OGO, TOGU). Same tuple as em-stages-data.js.
window.EM_STAGES = window.EM_STAGES || {};
(function () {
  const S = window.EM_STAGES;
  const dev = (thing, data) => ['From factory to site', 'Phone or tablet with the EMON app.', 'The installer scans the QR code' + (thing === 'charger' ? ' or taps NFC' : '') + '. EMON finds the ' + thing + ' with its factory results and adds it to the site without manual entry.', 'EMON checks serial, firmware and first communication.', data, ''];
  S.pontix = { unit: 'project', stages: [
    ['Site design basis', 'Survey, bathymetry and engineering workstation.', 'Water depth, level range, wind, waves, currents, bed and bank conditions, liners and launch access are recorded.', 'The design basis is approved before engineering.', '', ''],
    ['Float design', 'Engineering workstation.', 'Float envelope, wall thickness, ribs, connecting lugs, module supports and pinch-off regions are defined from buoyancy and load calculations.', 'Design review before toolmaking.', '', ''],
    ['Blow mould', 'CNC machining, cooling circuits and trial machine.', 'Mould halves, pinch-off inserts and venting are made and trialled.', 'Trial floats are weighed, wall thickness is mapped and sample floats are sectioned.', '', ''],
    ['Polymer preparation', 'Dosing and blending equipment.', 'UV-stabilised HDPE, designed for a 25-year service life, is prepared under a controlled recipe. Drinking-water reservoir suitability is confirmed per project with the compound test report.', 'Batch documentation and dosing are verified.', '', ''],
    ['Blow moulding', 'Extrusion blow moulding machine with parison wall control.', 'A hot parison is extruded, captured in the mould and inflated against the cooled cavity.', 'Process data is logged per cycle. Startup and defective output is diverted.', '', ''],
    ['Trim and closure', 'Trimming station and closure equipment.', 'Flash is removed, inserts fitted and the float is closed with the approved method.', 'Mass, dimensions, wall thickness at defined points and lugs are checked.', '', ''],
    ['Leak test every float', 'Leak test fixture.', 'Every float is tested at the specified low pressure after stabilisation.', 'Failed floats go to quality hold; repairs only where approved, then retested.', 'Leak test result per float, linked to the project.', ''],
    ['Connectors', 'Injection moulding machines.', 'Connectors, caps and cable guides are moulded.', 'Fit and retention are checked.', '', ''],
    ['Metal supports', 'Extrusion, cutting, stamping and welding.', 'Module rails, brackets and mooring load distribution members are produced and treated.', 'Welds, dimensions and trial fit to floats.', '', ''],
    ['Mooring and anchors', 'Rope termination and anchor fabrication.', 'Lines are made to length and terminated, hardware is checked and anchors are produced.', 'Proof or sample testing to plan. Each line and anchor is identified.', '', ''],
    ['Platform assembly', 'Factory assembly area.', 'A representative section is assembled with floats, supports, walkways and mooring attachments.', 'Articulation, clearances and replacement access are verified.', '', ''],
    ['Project kit and QR', 'Kitting station.', 'Floats, metalwork and mooring kits are grouped by platform block and labelled.', 'Contents checked against the bill of materials.', 'Project QR with float leak tests, mooring records and layout.', ''],
    ['Robotic packing', 'Robot with supported float tooling.', 'Floats are stacked on approved contact points with separators; metalwork and lines are packed separately.', 'Counts, labels and photos before dispatch.', '', ''],
    ['From factory to site', 'Phone or tablet with the EMON app.', 'The installer scans the project QR. EMON opens the platform layout, float records and mooring plan and records the as-built positions.', 'Launch, mooring and freeboard checks are recorded.', 'Project QR links float tests, mooring records and the as-built layout.', '']
  ]};
  S.xoom = { unit: 'charger', stages: [
    ['Moulds', 'CNC machining, EDM and trial press.', 'Moulds for housings, covers, light guides and connector surrounds are made with electrical barriers and gasket grooves.', 'Samples are measured and test-fitted with electronics and seals.', '', ''],
    ['Moulding', 'Injection moulding machines with robotic removal.', 'Parts are moulded from the material specified for their location.', 'Dimensions and appearance; batch and cavity recorded.', '', ''],
    ['Metal posts', 'Cutting, bending, welding and coating.', 'Pedestals, bollards, pavement frames and lamp-post interfaces are fabricated and finished.', 'Welds, coating and trial fit.', '', ''],
    ['Circuit board assembly (SMT)', 'Printer, paste inspection, pick and place, reflow.', 'Controller, sensing and communication boards are assembled.', 'Optical inspection, circuit and functional tests.', '', ''],
    ['Power and protection', 'Assembly fixtures.', 'Terminals, contactors, metering sensors, residual current sensing and protection are installed.', 'Current paths, earth and the sub-assembly are tested.', '', ''],
    ['Cables', 'Cutting, crimping and test equipment.', 'Charging cables and sockets are assembled.', 'Continuity, pin assignment, insulation and retention.', '', ''],
    ['Assembly', 'Variant-locked fixtures.', 'Power assembly, controller, communication, antenna, socket or cable and indicators are fitted and the enclosure is closed.', 'Open-assembly inspection before closing.', '', ''],
    ['Programming and QR/NFC', 'Programming station.', 'Firmware, phase and current limits (AC, Mode 3, up to 22 kW three-phase), identities, credentials, OCPP version and QR and NFC data are configured.', 'Physical and electronic identity must match.', 'Firmware, OCPP version and configuration.', ''],
    ['Metering calibration', 'Reference test system.', 'Measurement channels are calibrated and coefficients stored.', 'Accuracy at independent points per phase. POST, STUMP, PAVE and LUMO have a built-in MID-certified meter (Class B) for billing. WISP and COIL have a calibrated monitoring meter, with an optional external MID meter.', 'Calibration results.', ''],
    ['Vehicle-simulator test', 'EV simulator and safety tester.', 'Connection states, control pilot, locking, contactor sequence, current limits, residual current and faults are tested under load.', 'Earth, insulation and loaded thermal test.', 'Charging and safety test results.', ''],
    ['EMON and OCPP test', 'EMON and OCPP test environment.', 'Authorisation, sessions, meter reports, limits, solar surplus, tariffs and site load management are tested.', 'Offline and recovery behaviour is checked. OCPP 1.6J implemented, OCPP 2.0.1 planned. OCA certification in progress.', 'Interface check result.', ''],
    ['Labels', 'Label printer and scanner.', 'Rating and serial and QR labels are applied.', 'Labels and NFC matched to the device.', 'Serial number linked to QR and NFC.', ''],
    ['Packing', 'Compact robot or lifting cradle.', 'The charger is packed with cable, connector protection and mounting kit.', 'Contents and weight are checked.', '', ''],
    dev('charger', 'The installed charger is linked to its factory record, site and load management.')
  ]};
  S.airo = { unit: 'unit', stages: [
    ['Moulds', 'CNC machining and trial press.', 'Moulds for housings, grilles, filter frames and fittings are made.', 'Samples are test-fitted with fans, filters, cores and seals.', '', ''],
    ['Moulding', 'Injection moulding machines.', 'Housings and fittings are moulded.', 'Dimensions and sealing features.', '', ''],
    ['EPP air paths', 'Steam chest moulding.', 'Insulated internal air paths are moulded from expanded polypropylene.', 'Fusion, interfaces and separating walls are inspected.', '', ''],
    ['Metal casings', 'Cutting, bending and coating.', 'Casings, brackets and plenums are fabricated.', 'Finish and dimensions.', '', ''],
    ['Recovery cores', 'Core assembly and test fixture.', 'Regenerative (SHIFT) or plate cores are assembled and sealed.', 'Pressure loss and leakage are checked.', '', ''],
    ['Fans and filters', 'Balancing machine and filter line.', 'Fans are balanced; filter media is pleated and sealed to frames.', 'Vibration, motor operation and filter condition.', '', ''],
    ['SMT and sensors', 'SMT line.', 'Control and sensor boards are built with protected sensing elements.', 'Output and sensor interface tests.', '', ''],
    ['Unit assembly', 'Model-specific fixtures.', 'SHIFT wall units or SWAP, FLOW and WAVE units are assembled with partitions, core, fans, filters, dampers and controls.', 'The complete air path is inspected before closing.', '', ''],
    ['GUST refrigeration', 'Leak test, vacuum and charging station.', 'The heat-pump circuit is joined, leak tested, evacuated and charged.', 'Post-charge leak check and heating, cooling and dehumidification run.', 'Refrigerant charge and leak test.', ''],
    ['ROUTE ducts', 'Extrusion and moulding.', 'Ducts, fittings and seals are produced.', 'Joint retention and leakage on samples.', '', ''],
    ['EMON test', 'EMON test environment.', 'Fan maps, sensors, modes and identity are configured; CO₂ and humidity demand is simulated.', 'Fallback without connection.', 'Firmware and sensor checks.', ''],
    ['Airflow test', 'Airflow test rig.', 'Fans, flows, balance, dampers, drain and noise are checked.', 'Electrical safety and air path leakage.', 'Airflow and leakage results.', ''],
    ['Labels', 'Label printer.', 'Rating and serial and QR labels are applied.', 'Checked against the record.', 'Serial number linked to the QR code.', ''],
    ['Packing', 'Robot with lifting cradle.', 'Units are packed with protected spigots and accessories.', 'Contents and weight.', '', ''],
    dev('unit', 'The installed unit is linked to its factory record; room flows are recorded at commissioning.')
  ]};
  S.ogo = { unit: 'unit', stages: [
    ['Material', 'Powder weighing station.', 'Polyethylene powder in the approved colour is weighed for the reservoir size.', 'Material and colour batch checked against the article.', '', 'Material declaration per article.'],
    ['Mould loading', 'Metal mould on the moulding arm.', 'The weighed powder is loaded into the mould, which is then clamped shut.', 'Mould closure and vents checked.', '', ''],
    ['Heating and rotation', 'Biaxial rotational moulding machine.', 'The mould is heated while it turns on two axes. The melting powder coats the inside of the mould and forms a one-piece hollow body without welded seams.', 'Oven temperature and cycle time recorded.', '', 'Cycle parameters per article.'],
    ['Cooling', 'Cooling station.', 'The mould keeps turning while it cools, so the wall sets evenly.', 'Cooling time recorded.', '', ''],
    ['Demoulding and finishing', 'Trimming and drilling station.', 'The body is taken out of the mould. Service openings, inlet, outlet and overflow openings are finished.', 'Visual, colour and dimension check.', '', 'Wall-thickness check method.'],
    ['Fittings', 'Assembly bench.', 'Service covers, inlet and outlet couplings and seals are fitted.', 'Fitting tightness.', '', ''],
    ['Leak test', 'Leak-test bench with water.', 'The reservoir is filled and checked for leaks at the body and fittings, then drained.', 'No leakage at body or fittings.', 'Leak test result.', 'Leak test per unit or per batch.'],
    ['Pump and connected equipment', 'Assembly and test bench.', 'For the connected version, level and temperature sensors, controller and pump are fitted and tested.', 'Sensor readings and pump start and stop.', 'Sensor and controller identity.', 'EMON water functions are Proposed.'],
    ['Labels', 'Label printer.', 'Article, serial and QR labels are applied.', 'Checked against the record.', 'Serial number linked to the QR code.', ''],
    ['Packing', 'Packing station.', 'The reservoir is protected for transport; the connection set and pump are packed with it.', 'Contents check.', '', ''],
    ['From factory to site', 'Phone or tablet with the EMON app.', 'The installer scans the QR code. EMON finds the reservoir with its factory record and adds it to the site.', 'EMON checks serial and first communication of the connected equipment.', 'The installed reservoir is linked to its factory record, installer and site.', 'EMON water functions are Proposed.']
  ]};
  /* DEPTH-989: hot-water OGO stages (content now NENDO hot water), kept for reference:
  S.ogo = { unit: 'unit', stages: [
    ['Tank fabrication', 'Shell rolling and seam welding.', 'Shells are rolled and welded, ends, bosses, sensor pockets and coils fitted.', 'Weld inspection and dimensions.', '', ''],
    ['Corrosion protection', 'Enamel line or stainless finishing.', 'The vessel inside is enamelled or finished per construction, with anode where designed.', 'Internal protection is inspected.', '', ''],
    ['Pressure test', 'Pressure test station.', 'Every vessel and internal circuit is proof tested.', 'No leakage or deformation; then drained and dried.', 'Pressure test result.', ''],
    ['Condenser', 'Assembly fixture.', 'The condenser is fitted with secured thermal contact.', 'Refrigerant and potable water separation is verified.', '', ''],
    ['Insulation and jacket', 'Foam injection fixture.', 'Foam is metered and injected between tank and jacket.', 'Fill and voids are inspected.', '', ''],
    ['Plastic covers', 'Injection moulding.', 'Covers and air guides for the heat-pump module are moulded.', 'Fit with fan and refrigeration parts.', '', ''],
    ['Control and MPPT electronics', 'SMT line and PV simulator.', 'Control boards are built for every model. The direct-PV variants (AIO Heat Pump Boiler with MPPT, MPPT Water Tank Boiler) also get an MPPT power stage that feeds solar DC to the immersion element. The other models use solar surplus measured by EMON and SYNQ, with no PV wiring to the heater.', 'Sensor, output and temperature protection tests. MPPT variants: PV regulation tested with a PV simulator.', '', ''],
    ['Heat-pump module', 'Assembly line.', 'Compressor, evaporator, fan and circuit are assembled.', 'Joints and supports inspected.', '', ''],
    ['Leak test and charge', 'Tracer gas, vacuum and charging station.', 'The full circuit is leak tested, evacuated and charged by mass.', 'Post-charge leak check.', 'Refrigerant charge and leak test.', ''],
    ['Final assembly', 'Assembly line.', 'Element, sensors, high limit, anode, controls and enclosure are fitted.', 'Wiring inspection.', '', ''],
    ['EMON test', 'EMON test environment.', 'Schedules, solar, tariffs, limits and hygiene programme are verified.', 'Local protection without connection.', 'Firmware and configuration.', ''],
    ['Heating run test', 'Test station with water and air.', 'A heating cycle runs; backup, thermostat and protection are tested.', 'Electrical safety, temperature rise and drainage. The measured COP is published after the EN 16147 test.', 'Run test result.', ''],
    ['Labels', 'Label printer.', 'Rating and serial and QR labels are applied.', 'Checked against the record.', 'Serial number linked to the QR code.', ''],
    ['Packing', 'Lifting cradle and sleeve station.', 'The unit is secured upright on its base and sleeved.', 'Contents, weight and orientation labels.', '', ''],
    dev('unit', 'The installed unit is linked to its factory record, installer and site.')
  ]};
  */
  S.togu = { unit: 'batch', stages: [
    ['Copper drawing and stranding', 'Wire drawing, annealing and stranding machines.', 'Copper is drawn, annealed, tinned where specified and stranded.', 'Diameter, resistance and strand count.', '', ''],
    ['Cable extrusion', 'Extrusion line with crosslinking.', 'Insulation and sheath are extruded, crosslinked and printed.', 'Diameter inline, voltage and insulation tests, length.', '', ''],
    ['Grounding', 'Machining and forming.', 'Earth rods, clamps and bonding straps are produced.', 'Coatings and connection resistance.', '', ''],
    ['Connectors', 'Stamping, plating and moulding.', 'Contacts, housings and seals are produced and assembled.', 'Locking, retention and electrical checks. All TOGU harnesses use genuine Stäubli MC4 EVO 2 connectors, crimped with the matching WURK CRIMP dies. They are mated only with MC4 EVO 2.', '', ''],
    ['Harness assembly', 'Cutting, crimping and test bench.', 'Cables are cut, crimped and fitted to approved connectors.', 'Crimp checks, continuity, polarity and insulation on every harness.', '', ''],
    ['Trays and ladders', 'Resistance welding, punching and roll forming.', 'Wire-mesh trays, metal trays and ladders are produced and treated.', 'Welds, dimensions and load tests to plan.', '', ''],
    ['Conduit and trunking', 'Extrusion and moulding.', 'Two lines: PVC conduit and trunking, and LSZH halogen-free polyolefin conduit and trunking for escape routes and public buildings. Covers and fittings are produced for both.', 'Fit and material claims.', '', ''],
    ['FIX and MOUNT', 'Moulding, stamping and roll forming.', 'Clips, brackets, DIN rails and mounting plates are produced.', 'Fit and retention.', '', ''],
    ['Enclosures', 'Moulding or sheet metal fabrication.', 'Distribution box bodies, covers and gaskets are produced.', 'Seals and closure.', '', ''],
    ['Glands', 'Moulding and machining.', 'Gland bodies, nuts and seals are produced.', 'Thread, cable range and sealing.', '', ''],
    ['Terminals', 'Forming and moulding.', 'Current bars, springs and insulating bodies are assembled.', 'Retention and electrical performance.', '', ''],
    ['Switches', 'Contact and mechanism assembly.', 'AC, PV DC and battery DC switches are assembled per approved design.', 'Routine electrical and mechanical tests.', '', ''],
    ['Protection', 'Product-specific lines.', 'Fuses, fuse holders and surge protection devices are produced.', 'Destructive tests on samples only.', '', ''],
    ['Labels', 'Printing and laser marking.', 'QR, circuit and cable markers are printed.', 'Data and readability.', '', ''],
    ['Prepared boxes', 'Panel assembly bench.', 'Boxes are wired to the circuit drawing.', 'Continuity and electrical tests per box.', 'Box serial with drawing revision and test record.', ''],
    ['Packing', 'Drum winding, counting and palletising.', 'Cable is wound on drums, trays bundled and small parts counted into project kits.', 'Scan and weight checks.', '', ''],
    ['From factory to site', 'Phone with the EMON app.', 'The installer scans the drum, harness or box QR. EMON links article and batch to the circuit and location in the project.', 'As-built quantities are recorded.', 'Batch QR per drum, harness or box; prepared boxes keep their test record.', '']
  ]};
})();
