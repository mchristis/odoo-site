// PROP (Generate) part 2.
window.EM_PROP_B = { phases: [
  ['Bearings, drivetrain and braking', 'Mechanisms follow the turbine architecture.', [
    ['Verify bearings', 'Identity and condition'], ['Install bearings', 'Approved method'], ['Set preload or clearance', 'Controlled'],
    ['Install shaft and generator', 'Alignment'], ['Install gearbox where used', 'Mounting'], ['Lubricate', 'Type and quantity'],
    ['Install mechanical brake', 'Clearances'], ['Install electrical braking', 'Architecture'], ['Install yaw, pitch or furling', 'Movement'],
    ['Install speed and position sensing', 'Locations'], ['Fit seals and guards', 'Protection'], ['Verify critical fastening', 'Recorded'],
    ['Check free movement', 'No binding'], ['Test braking and restraint', 'Procedure']]],
  ['Controller and power electronics', 'Conversion matched to the generator; solar inverter compatibility is not assumed.', [
    ['Receive PCBs and components', 'Revisions and batches'], ['Print and inspect paste', 'Deposits'], ['Place components', 'SMT'],
    ['Reflow', 'Profile'], ['Inspect boards', 'Optical'], ['Fit power parts and terminals', 'Assembly'],
    ['Install heatsinks', 'Thermal contact'], ['Assemble rectifier or conversion', 'Architecture'], ['Assemble diversion load', 'Thermal construction'],
    ['Circuit tests', 'Acceptance'], ['Program firmware', 'Controlled release'], ['Test sensing and outputs', 'Response'],
    ['Test regulation on a generator simulator', 'Envelope'], ['Verify protection interfaces', 'Shutdown'], ['Fit into enclosures', 'Protection'], ['Identify and release', 'Recorded']]],
  ['Assemble and balance the rotor', 'Blade matching and full rotor balancing are separate checks.', [
    ['Select an approved blade set', 'Mass and geometry'], ['Inspect blade identification', 'Model and revision'], ['Install blades or sections', 'Orientation'],
    ['Set geometry and pitch', 'Angles'], ['Tighten attachment hardware', 'Sequence'], ['Measure runout', 'Tolerance'],
    ['Static balancing', 'Residual imbalance'], ['Dynamic balancing', 'Accepted'], ['Apply approved corrections only', 'Traceable'],
    ['Verify tracking and clearance', 'No interference'], ['Inspect the rotor', 'Nothing loose'], ['Record rotor and blade association', 'Genealogy']]],
  ['Integrate the turbine', 'Reproduces the released mechanical and electrical configuration.', [
    ['Mount the drivetrain', 'Support'], ['Install the rotor', 'Attachment'], ['Connect generator wiring', 'Phase and polarity'],
    ['Install sensors and cable supports', 'Routing'], ['Connect controller and braking', 'Interfaces'], ['Install diversion components', 'Cooling and access'],
    ['Install covers and guards', 'Retention'], ['Verify bonding and protection', 'Arrangement'], ['Inspect critical fasteners', 'Accepted'],
    ['Check service access', 'Maintainable'], ['Verify configuration', 'Rotor, generator and controller'], ['Record assembly identity', 'Serial-linked']]],
  ['Routine operation and fault tests', 'Guarded equipment and controlled simulation. EMON is never the only overspeed protection; local protection works without communication.', [
    ['Verify test equipment', 'Setup'], ['Electrical safety tests', 'Construction'], ['Controlled rotation', 'Mechanical behaviour'],
    ['Measure generator output', 'Limits'], ['Verify speed sensing', 'Reporting'], ['Verify loaded operation', 'Regulation'],
    ['Screen vibration and noise', 'Limits'], ['Monitor bearing and generator temperatures', 'Behaviour'], ['Test normal shutdown', 'Sequence'],
    ['Simulate loss of grid', 'Response'], ['Simulate battery full', 'Energy management'], ['Simulate unavailable load', 'Safe speed and voltage'],
    ['Test diversion load', 'Switching and thermal'], ['Simulate controller or sensor faults', 'Protection'], ['Test emergency stop', 'Response'],
    ['Verify restart conditions', 'Controlled'], ['Save results', 'Serial-linked'], ['Divert failed units', 'Repair and retest']]],
  ['Model qualification', 'A factory run is one part of the evidence; small-wind qualification covers structure, durability, acoustics and power.', [
    ['Rotor structure', 'Blade, hub and attachment strength'], ['Fatigue', 'Repeated-load durability'], ['Mast and foundation', 'Structural and dynamic'],
    ['Speed limitation', 'Normal and fault conditions'], ['Braking', 'Operating and failure conditions'], ['Power performance', 'Measured power curve'],
    ['Acoustic performance', 'Stated method and conditions'], ['Duration testing', 'Required conditions'], ['Electrical conversion', 'Generator, controller and inverter'],
    ['Environmental durability', 'Temperature, moisture, corrosion and ingress'], ['Lightning protection', 'System design'], ['Maintenance', 'Inspection, access and replacement']], 'nonum'],
  ['EMON and hybrid integration', 'Actual measured operation is reported; local turbine control is preserved.', [
    ['Assign device identity', 'Project reference'], ['Provision credentials', 'Controlled'], ['Verify power and energy reporting', 'Values and units'],
    ['Verify speed and fault reporting', 'Interpretation'], ['Test permitted commands', 'Within local protection'], ['Test battery and inverter interfaces', 'States'],
    ['Test wind and solar together', 'System response'], ['Interrupt communications', 'Local protection effective'], ['Restore communication', 'Recovery'],
    ['Verify updates', 'Approved process'], ['Record configuration', 'Traceable']]],
  ['Finish and release', 'Turbine, mast and controller match the qualified configuration.', [
    ['Inspect blades and exterior', 'No damage'], ['Inspect structural finish', 'Protection'], ['Verify guards and covers', 'Complete'],
    ['Apply rating labels', 'Model information'], ['Apply QR identity', 'Records'], ['Review balance and tests', 'Acceptance'],
    ['Verify controller settings', 'Release'], ['Verify mast and foundation documents', 'Configuration'], ['Confirm installation hardware', 'Complete kit'], ['Authorise factory release', 'Quality approval']]],
  ['Pack PROP', 'Blades and rotating assemblies get dedicated supports, never generic gripping.', [
    ['Select packing configuration', 'Assembled or separated'], ['Scan components', 'Kit allocation'], ['Protect blade surfaces', 'Compatible material'],
    ['Place blades in shaped cradles', 'No concentrated loads'], ['Use validated robotic tooling', 'Approved handling areas'], ['Restrain the rotor', 'No rotation'],
    ['Support generator and bearings', 'Transport condition'], ['Protect machined interfaces', 'No corrosion or impact'], ['Bundle mast sections', 'No distortion'],
    ['Pack controller and electronics', 'Protected'], ['Pack brakes and diversion parts', 'Restraint'], ['Count and pack hardware', 'Complete'],
    ['Insert instructions', 'Revision'], ['Verify contents', 'Checks'], ['Close and secure crates', 'Restraint'],
    ['Label lifting points, mass and orientation', 'Handling'], ['Record package identities', 'Traceability'], ['Release dispatch', 'Accepted']]],
  ['Install, commission and document', 'Commissioning verifies the actual foundation, support and environment.', [
    ['Inspect delivery', 'Condition'], ['Verify foundation and anchors', 'Acceptance'], ['Assemble mast and supports', 'Instructions'],
    ['Install turbine and rotor', 'Geometry and fastening'], ['Complete electrical connections', 'Architecture'], ['Inspect clearances and access', 'Installation'],
    ['Verify braking and shutdown', 'Before operation'], ['Commission generator and conversion', 'Operation'], ['Record vibration baseline', 'Available conditions'],
    ['Commission EMON', 'Reporting'], ['Record as-built components and settings', 'Project file'], ['Deliver handover and maintenance plan', 'Responsibilities'], ['Monitor initial operation', 'Installation issues']]]
], records: [
  ['Site assessment', 'Wind evidence, obstacles, hub height and assumptions'], ['Design configuration', 'Rotor, generator, controller, mast and foundation'],
  ['Blades', 'Materials, tooling, process, inspection and serials'], ['Machined parts', 'Materials, critical fits and examination'],
  ['Generator', 'Windings, rotor, tests and serial'], ['Mechanical assembly', 'Bearings, lubrication, brakes and fastening'],
  ['Rotor balance', 'Blade set, corrections and results'], ['Electronics', 'Hardware, firmware and tests'],
  ['System tests', 'Operation, shutdown and faults'], ['Qualification', 'Power, sound, safety and durability'],
  ['Packaging', 'Supports, restraints and dispatch'], ['Commissioning', 'Installation, vibration baseline and settings'], ['Service', 'Inspections, faults, repairs and replacements']
] };
