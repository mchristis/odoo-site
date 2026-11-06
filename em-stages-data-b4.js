// Batch 4 stages (GLOW, PROP, CHILL, WURK, OZZY, SHELTR, TERRIX). Same tuple as em-stages-data.js.
window.EM_STAGES = window.EM_STAGES || {};
(function () {
  const S = window.EM_STAGES;
  const dev = (thing, data) => ['From factory to site', 'Phone or tablet with the EMON app.', 'The installer scans the QR code. EMON finds the ' + thing + ' with its factory results and adds it to the site without manual entry.', 'EMON checks serial, firmware and first communication.', data, ''];
  const proj = (thing) => ['From factory to site', 'Phone or tablet with the EMON app.', 'The installer scans the project QR. EMON opens the layout, component batches and inspection forms and links the finished ' + thing + ' to its installer, owner and warranty record.', 'Site checks are recorded against the same project identity.', 'Project QR links layout, batches, inspections and handover. Device data only for fitted electronics.', ''];
  S.glow = { unit: 'light', stages: [
    ['Lighting and energy design', 'Engineering workstation.', 'Lighting level, mounting height, optics, night profile, solar resource, battery size and autonomy are calculated for the location. PV and battery are sized per location and lighting profile.', 'Winter energy balance is checked before release.', '', ''],
    ['ARBOR frame', 'Cutting, forming, welding and coating.', 'Frame members, baseplates, head and insert brackets are fabricated and finished.', 'Welds, straightness and coating.', '', ''],
    ['Housings and heatsinks', 'Casting or extrusion and CNC machining.', 'CROWN and LANE housings are produced and thermal and sealing surfaces machined.', 'Flatness and gasket channels.', '', ''],
    ['Lenses', 'Optical moulds and injection moulding.', 'Lenses and covers are moulded from optical polymer.', 'Flow marks, contamination and distribution.', '', ''],
    ['LED boards', 'SMT line.', 'LEDs from controlled colour bins are placed and soldered.', 'Every channel is tested and optical output screened.', '', ''],
    ['Controller and driver', 'SMT line, PV and battery simulators.', 'Charge controller, LED driver and communication boards are built and programmed.', 'MPPT, charging regulation, LED current and dimming are tested.', '', ''],
    ['Battery', 'Cell inspection and pack assembly.', 'Cells are inspected, matched and built into the pack with protection and temperature sensing.', 'Charge, discharge, protection and capacity to plan.', 'Battery chemistry, capacity and test result.', ''],
    ['Solar modules', 'Mounting fixtures.', 'Modules are fitted to their brackets and interconnected.', 'Polarity and continuity.', '', ''],
    ['CROWN and LANE heads', 'Head assembly fixture.', 'Thermal interface, LED board, driver, lens and cover are assembled.', 'Optical surfaces and sealing are inspected.', '', ''],
    ['Inserts', 'Insert assembly.', 'Solar, lighting, battery, VOLT, ecology and control inserts are assembled.', 'Fit and service access. Autonomous lighting needs no trench or grid connection. VOLT charging needs its own grid supply.', '', ''],
    ['Integration', 'Assembly fixture.', 'Battery, controller, solar, head, sensors and communication are integrated.', 'Connections and fastening are inspected.', '', ''],
    ['Profile programming', 'Programming station.', 'Battery limits, PV input, LED current, night profile, motion boost and low-energy behaviour are loaded.', 'Local lighting continues without connection.', 'Lighting profile and configuration.', ''],
    ['Functional test', 'Test station with PV simulation.', 'Charging, dusk, full output, dimming, motion, dawn and low battery are simulated.', 'Safety, thermal and light output checks.', 'Functional test result.', ''],
    ['Labels', 'Label printer.', 'Rating and serial and QR labels are applied, shipping mode set.', 'Checked against the record.', 'Serial number linked to the QR code.', ''],
    ['Packing', 'Gantry and fitted inserts.', 'Frames, heads with protected optics, batteries and modules are packed separately.', 'Contents and labels.', '', ''],
    dev('light', 'The installed light is linked to its factory record, location and lighting profile.')
  ]};
  S.prop = { unit: 'turbine', stages: [
    ['Site assessment', 'Wind data and site survey.', 'Obstacles, hub height, wind evidence, turbulence, noise and foundations are assessed before an order is released.', 'Production estimate with stated assumptions.', '', ''],
    ['Blade tooling', 'Master model and mould making.', 'Blade moulds or forming tools and root fixtures are produced and trialled.', 'First blades are measured for profile and twist.', '', ''],
    ['Blades', 'Composite layup and cure, or metal forming.', 'Glass-fibre reinforced composite blades are made by vacuum infusion with epoxy, trimmed and finished. Each rotor is balanced as a matched set.', 'Laminate, bonds, mass and centre of gravity.', '', ''],
    ['Shafts and hubs', 'CNC machining and grinding.', 'Shafts, hubs and flanges are machined and bearing seats ground.', 'Runout and concentricity.', '', ''],
    ['Generator', 'Winding and assembly line.', 'Stator is wound and impregnated, rotor assembled and balanced, generator closed.', 'Resistance, insulation and bench output.', 'Generator test result.', ''],
    ['Mast', 'Cutting, welding and coating.', 'Mast sections, flanges and baseplates are fabricated and treated.', 'Welds, alignment and coating.', '', ''],
    ['Bearings and brakes', 'Assembly fixture.', 'Bearings, drivetrain, brakes and yaw or furling mechanisms are installed.', 'Free movement and brake tests.', '', ''],
    ['Controller', 'SMT line and generator simulator.', 'Controller, rectifier and diversion load are built and programmed.', 'Regulation and protection with simulated generator.', '', ''],
    ['Rotor balancing', 'Balancing machine.', 'Matched blade sets are mounted and the rotor is balanced.', 'Residual imbalance and tracking.', 'Balance result.', ''],
    ['Integration', 'Assembly fixture.', 'Rotor, drivetrain, generator, controller and braking are integrated.', 'Fasteners and configuration verified.', '', ''],
    ['Run and fault test', 'Guarded test rig.', 'Controlled rotation, loaded operation, shutdown and fault responses are tested.', 'Overspeed protection works without EMON.', 'Run and fault test result.', ''],
    ['EMON test', 'EMON test environment.', 'Power, speed and faults are reported; battery and inverter interfaces checked.', 'Loss of connection leaves local protection working.', 'Firmware and configuration.', ''],
    ['Labels', 'Label printer.', 'Rating and serial and QR labels are applied.', 'Checked against the record.', 'Serial number linked to the QR code.', ''],
    ['Packing', 'Shaped blade cradles and crates.', 'Blades, restrained rotor, mast sections and controller are packed.', 'Contents and lifting labels.', '', ''],
    dev('turbine', 'The installed turbine is linked to its factory record and baseline vibration.')
  ]};
  S.chill = { unit: 'asset', stages: [
    ['Project brief', 'Engineering workstation.', 'Public use, circulation, accessibility, services and maintenance are defined.', 'Brief approved before geometry is frozen.', '', ''],
    ['Frame', 'Cutting, bending, welding.', 'Frames, baseplates and connections are fabricated.', 'Welds and squareness.', '', ''],
    ['Extrusions and castings', 'Dies or moulds.', 'Repeat profiles and cast parts are produced.', 'Dimensions and material.', '', ''],
    ['Seating', 'Machining and finishing.', 'Timber, metal, composite or mineral seats are produced with finished edges.', 'Public-contact surfaces inspected.', '', ''],
    ['Roof and glazing', 'Glass processing and sheet metal.', 'Glazing, roof supports, flashings and gutters are produced.', 'Drainage and sealing to plan.', '', ''],
    ['Fittings', 'Injection moulding.', 'Covers and charging surrounds are moulded.', 'Fit with metal and electronics.', '', ''],
    ['NOISE Barrier panels', 'Panel assembly.', 'Frames, facings and acoustic layers are assembled.', 'Acoustic performance (EN 1793-1 absorption and EN 1793-2 insulation) is tested per panel construction; results are published per configuration.', '', ''],
    ['Solar and storage', 'Integration bench.', 'Modules, battery packs, conversion and protection are prepared.', 'Harness continuity and polarity.', '', ''],
    ['Electronics', 'SMT line.', 'Lighting, USB and communication boards are built.', 'Output and protection tests.', '', ''],
    ['Energy compartment', 'Assembly fixture.', 'Battery, controller, protection and ventilation are installed behind locked panels.', 'Compartment test.', '', ''],
    ['Assembly', 'Model fixtures.', 'Frame, roof, glazing, seating, PV, lighting and services are assembled.', 'Fasteners and service access.', '', ''],
    ['EMON test', 'EMON test environment.', 'Load priorities, schedules and low battery behaviour are configured.', 'Local fallback without connection.', 'Firmware and configuration.', ''],
    ['Functional test', 'Test station.', 'Solar charging, lighting, charging ports and displays are run together.', 'Safety, temperatures and drainage.', 'Functional test result.', ''],
    ['Labels', 'Label printer.', 'Rating and QR and NFC identity are applied.', 'Checked against the record.', 'Asset QR.', ''],
    ['Packing', 'Lifting cradle and crates.', 'Products are packed with protected timber, glazing and PV.', 'Contents and photos.', '', ''],
    dev('asset', 'The installed asset is linked to its factory record and handover file.')
  ]};
  S.wurk = { unit: 'tool', stages: [
    ['CRIMP', 'Forging, CNC machining and heat treatment; die test bench.', 'Tool bodies are forged or machined, hardened and assembled with ratchets. Dies are machined for the Stäubli MC4 EVO 2 contacts used on TOGU harnesses.', 'Sample crimps are measured, pull tested and sectioned to qualify each tool and die combination.', '', ''],
    ['PREP', 'Blade grinding and assembly.', 'Cutting blades and stripping mechanisms are produced and assembled.', 'Cutting and stripping are tested on the declared cables.', '', ''],
    ['Torque tools', 'Calibration rig with traceable reference.', 'Torque mechanisms are assembled and preconditioned.', 'Calibrated at defined points and checked for repeatability.', 'Calibration result.', ''],
    ['GAUGE', 'Measuring fixtures with calibrated standards.', 'Tape measures, levels and laser instruments are assembled and adjusted.', 'Accuracy across the declared range.', 'Accuracy result.', ''],
    ['PROBE', 'SMT line and calibration station.', 'Protected measurement boards are built, leads assembled and instruments closed.', 'Calibration per function and routine safety checks.', 'Calibration certificate.', ''],
    ['HOLD', 'Industrial sewing and inspection.', 'Webbing and hardware are stitched into harnesses and lanyards.', 'Individual final inspection of every item; destructive tests on samples only.', 'Inspection status.', ''],
    ['RAIL', 'Cutting, forming and welding.', 'Posts, rails, bases and clamps are fabricated.', 'Representative systems are load tested.', '', ''],
    ['RISE', 'Profile assembly.', 'Ladders and towers are assembled with locks and stabilisers.', 'Locks, joints and alignment are checked. Every ladder and tower is labelled with platform height, overall height and maximum working height (platform + 2 m), per EN 131 / EN 1004.', '', ''],
    ['HAUL', 'Frame fabrication and powered assembly.', 'Frames, wheels, brakes, motors and controls are assembled.', 'Movement and brakes are tested. Rated 250 kg on straight stairs up to 35° with a minimum step depth of 220 mm, load centre within 300 mm of the backplate.', '', ''],
    ['Crew kit', 'Kitting station.', 'Tools, dies, leads and accessories are selected for the country, task and connectors.', 'Calibration and inspection status checked before packing.', 'Kit contents with each tool identity.', ''],
    ['Packing', 'Robot with fitted inserts.', 'Tools are placed in shaped case inserts with protected edges and probe tips.', 'Scan and inspection of contents.', '', ''],
    ['From factory to site', 'Phone with the EMON app.', 'The crew scans the case QR. EMON shows every tool with its calibration and inspection status and reminds when it is due.', 'Damaged tools are taken out of service in the record.', 'QR per tool and per case with calibration and inspection status.', '']
  ]};
  S.ozzy = { unit: 'device', stages: [
    ['Engineering', 'Engineering workstation.', 'What each device can safely switch and accurately measure is defined: ratings, load categories, measurement channels, local and mesh operation.', 'A single wattage label is not accepted as proof of suitability for every appliance.', '', ''],
    ['Moulds', 'CNC machining, EDM and trial press.', 'Moulds for mains enclosures are made with controlled accuracy around contacts, terminals and insulating barriers.', 'Samples are measured and test-fitted with contacts and boards.', '', ''],
    ['Moulding', 'Injection moulding machines.', 'Housings, socket parts, buttons and barriers are moulded, each from its specified grade.', 'Dimensions and appearance; batch and cavity recorded.', '', ''],
    ['Pins, contacts and busbars', 'Stamping, forming and machining.', 'Plug pins, spring socket contacts and busbars are produced and plated.', 'Dimensions, contact force and retention.', '', ''],
    ['SMT electronics', 'Printer, pick and place, reflow, test fixture.', 'Measurement, communication and relay control boards are built and programmed.', 'Optical inspection, circuit and functional tests.', '', ''],
    ['Cords and harnesses', 'Cutting, crimping and test bench.', 'Power cords and internal harnesses are assembled.', 'Continuity, polarity and retention before installation.', '', ''],
    ['Assembly', 'Fixtures per product and socket variant.', 'Contacts, relay, boards, cords and housing are assembled. Fixtures prevent mixing regional socket variants.', 'Clearances, wiring and closure are inspected.', '', ''],
    ['Variant checks', 'Variant test station.', 'Each family is checked against its own ratings; three-phase devices against declared voltage, current and load category.', 'Shared electronics do not replace variant checks.', '', ''],
    ['Programming and QR/NFC', 'Programming station with QR printer and NFC writer.', 'Firmware, device identity, credentials, NFC data and QR code are created.', 'Device, QR code and NFC tag must resolve to the same product record.', 'Firmware, device identity and QR/NFC link.', ''],
    ['Calibration', 'Calibration station with reference source.', 'Voltage, current, power and energy are calibrated on every measurement channel; multi-outlet strips per outlet.', 'Verified at independent test points and low load. Cost is calculated in EMON, not in the device.', 'Calibration coefficients and verification per channel.', ''],
    ['Switching and safety test', 'Load test station and safety tester.', 'Switching is tested under load and actual conduction is measured on and off.', 'A relay click does not count as proof. Routine electrical safety tests on every unit.', 'Switching and safety test results.', ''],
    ['EMON, mesh and offline', 'EMON test environment with mesh network.', 'Reporting, commands, mesh participation and offline schedules are verified, with load-specific rules for equipment that must not be cut repeatedly.', 'Sets the exact boundary of "internet optional".', 'EMON and mesh check result.', ''],
    ['Factory release', 'Release station.', 'The manufacturing dossier is completed before the device can be registered on site.', 'No missing tests or open defects.', 'Serial number linked to all test data.', ''],
    ['Robotic packing', 'Compact robots; supported fixtures for OCTO strips.', 'Devices are packed with accessories and grouped into case packs.', 'Scan and weight checks; serials stay traceable per case.', '', ''],
    ['From factory to site', 'Phone with the EMON app.', 'The installer scans the QR code or taps NFC. EMON finds the device with its calibration and test results and adds it to the room and load.', 'EMON checks identity and first communication.', 'The installed device is linked to its factory record, site and load.', '']
  ]};
  S.sheltr = { unit: 'enclosure', stages: [
    ['Equipment compatibility', 'Engineering workstation with selector.', 'Model, mass, mounting, heat, airflow, clearances and hazards of the protected equipment are verified before release.', 'The selector gives a preliminary configuration; release needs verified equipment data.', '', ''],
    ['Engineer the configuration', 'Engineering workstation.', 'Loads, drainage, ventilation, condensation and service access are combined into one configuration.', 'Design review before fabrication.', '', ''],
    ['Frames and supports', 'Laser cutting, press brake, welding fixtures.', 'Frames and structural supports are formed, fabricated or extruded per design.', 'Welds, squareness and mounting points.', '', ''],
    ['Custom extrusions', 'Extrusion dies and press.', 'Dedicated profiles are produced where modular volume justifies them.', 'Profile dimensions.', '', ''],
    ['Roofs, panels and doors', 'Punching, cutting and bending.', 'Roofs, panels, doors and louvres are produced, with openings made before finishing.', 'Flatness, gaps and fit.', '', ''],
    ['Finishes', 'Coating line.', 'Corrosion protection matched to material, environment and service life is applied.', 'Thickness and coverage.', '', ''],
    ['Fittings and seals', 'Moulding and cutting.', 'Plastic fittings and seals are produced for the actual thermal and outdoor exposure.', 'Fit and compression.', '', ''],
    ['HUSH acoustic assemblies', 'Acoustic assembly fixture.', 'Acoustic construction and airflow passages are built as one assembly, not insulation added to a cabinet.', 'Construction checked against the validated geometry. Noise reduction is measured per equipment combination with the heat pump running, and published as dB(A) at a stated distance.', '', ''],
    ['Ventilation and thermal', 'Assembly fixture.', 'Airflow parts for KUBO and HUSH are installed; free airflow around heat pumps is kept.', 'Airflow paths inspected.', '', ''],
    ['Controls and monitoring', 'SMT and assembly.', 'Sensors and controls are fitted only where active controls or monitoring are included. Passive CARA has none.', 'Sensor readings and communication.', 'Sensor configuration, where fitted.', ''],
    ['CARA, KUBO, HUSH assembly', 'Family-specific fixtures.', 'Each family is assembled to its declared configuration, keeping the clearances from the compatibility review.', 'Final assembly inspection.', '', ''],
    ['Test with equipment', 'Test bay with the actual or representative equipment.', 'Temperatures, pressure loss, recirculation, drainage and service access are tested with the equipment inside.', 'HUSH results state equipment, configuration and measured effect.', 'Test result for the approved configuration.', ''],
    ['Identification and packing', 'Label printer and lifting cradle.', 'The enclosure is labelled with the configuration it was approved to protect, then shipped assembled or as an identified kit.', 'Contents and labels.', 'Enclosure QR with approved configuration.', ''],
    ['From factory to site', 'Phone with the EMON app.', 'The installer scans the QR or taps NFC. EMON links the enclosure to the equipment it protects and, where fitted, its sensors.', 'Site acceptance confirms the installed environment matches the approved configuration.', 'Enclosure linked to protected equipment and site.', '']
  ]};
  S.terrix = { unit: 'project', stages: [
    ['Project design basis', 'Survey and engineering workstation.', 'Ground, loads, layout and foundations are defined before production release.', 'Calculations reviewed; standard sections reused only within verified limits.', '', ''],
    ['Roll-forming tools', 'Tool machining and trial line.', 'Tools for repetitive posts, purlins and rails are made, with punching and cutting integrated in the line.', 'Trial profiles measured.', '', ''],
    ['Steel profiles and posts', 'Roll forming line.', 'Profiles and posts are formed from bare or pre-coated material.', 'Profile, holes and coating damage.', '', ''],
    ['Fabricated members', 'Cutting and welding.', 'Heavier sections, special connections and foundation interfaces are fabricated.', 'Welds and dimensions.', '', ''],
    ['Tracker torque tubes', 'Tube processing and fixtures.', 'Torque tubes are produced with controlled torsional geometry and drive interfaces.', 'Straightness and twist.', '', ''],
    ['Aluminium and small parts', 'Extrusion, stamping and machining.', 'Module supports, clamps and brackets are produced with their own qualified tools.', 'Fit and dimensions.', '', ''],
    ['Bearings and polymer parts', 'Moulding and test bench.', 'Tracker bearings are produced as load-carrying components.', 'Load and wear checks to plan.', '', ''],
    ['Corrosion protection', 'Galvanising or coating.', 'Coating matched to soil, atmosphere and interfaces is applied.', 'Thickness and coverage.', '', ''],
    ['Tracker drives and controls', 'Assembly and test bench.', 'Drives, actuators and tracker controllers are integrated. FIXED-TILT has no controller boards.', 'Drive and controller functional test.', 'Drive and controller test, firmware.', ''],
    ['FIXED-TILT and TRACKER assembly', 'Trial bay.', 'A representative table or tracker row is assembled.', 'Geometry and installation verified. Wind stow position and trigger speed are validated by wind tunnel testing per tracker configuration; the controller stows automatically on its own anemometer, independent of EMON.', '', ''],
    ['CONTAINERIZED and UTILITY FENCE', 'Assembly fixture.', 'Deployable structures and vertical rows are assembled per their own specification.', 'Unfolding and locking tests. CONTAINERIZED unfolds in about 2 hours per container with a crew of 2 and a forklift on prepared level ground. UTILITY FENCE is in development: a PV row, not a certified security or livestock fence.', '', ''],
    ['Identification and packing', 'Gantry, counters and label printer.', 'Parts are linked to their field positions, bundled by block and labelled.', 'Contents and labels.', 'Project QR with field positions.', ''],
    proj('field')
  ]};
})();
