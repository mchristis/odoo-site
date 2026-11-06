// PROP (Generate) part 1. Source: user brief 23 Oct 2026; responsibility table and external references omitted.
window.EM_PROP_A = { phases: [
  ['Production routes', 'Rotor, generator, braking, mast and controller are verified together. Bench output does not establish annual energy, storm behaviour or installed vibration.', [
    ['Composite blades', 'Moulded blades, root reinforcements and bonded shells'], ['Metal blades', 'Formed, extruded or fabricated blades'],
    ['Precision machining', 'Shafts, hubs, flanges, bearing seats and connections'], ['Generator', 'Stator, windings, rotor, magnets, housing and connections'],
    ['Structural fabrication', 'Mast, baseplate, arms, braces and foundation interfaces'], ['Mechanical assembly', 'Bearings, drivetrain, brakes and yaw or pitch mechanisms'],
    ['SMT and power electronics', 'Controller, rectifier, conversion, sensors and communications'], ['System integration', 'Rotor assembly, alignment, balancing and tests'],
    ['Packaging', 'Supported blade crates, restrained rotating parts and mast bundles']], 'nonum'],
  ['Site assessment before order release', 'Annual energy estimates need a model-specific power curve and site wind data at hub height; rated power alone is not enough.', [
    ['Create the project identity', 'Site reference'], ['Record location and terrain', 'Wind exposure'], ['Map buildings, trees and obstacles', 'Turbulence inputs'],
    ['Define hub height', 'Assessment height'], ['Review wind data', 'Evidence and uncertainty'], ['Decide whether to measure', 'Assessment plan'],
    ['Assess turbulence and extremes', 'Model suitability'], ['Review land and access', 'Erection and maintenance'], ['Review mast or building attachment', 'Structural interface'],
    ['Review ground conditions', 'Foundation inputs'], ['Review noise-sensitive locations', 'Acoustic assessment'], ['Review permitting and grid', 'Constraints'],
    ['Define energy use and storage', 'Electrical design'], ['Estimate production with stated assumptions', 'Reviewable assessment'], ['Approve site suitability', 'Release or reject']]],
  ['Engineer the turbine', 'A complete design definition, not a generator rating.', [
    ['Define rotor architecture', 'Vertical or horizontal axis'], ['Define rotor size and speed range', 'Envelope'], ['Select blade construction', 'Material and structure'],
    ['Calculate aerodynamic and structural loads', 'Design basis'], ['Define fatigue requirements', 'Repeated loads'], ['Define drivetrain', 'Direct drive or geared'],
    ['Select generator', 'Speed and torque'], ['Define bearings and shaft', 'Load path'], ['Define speed limitation and shutdown', 'Independent protection'],
    ['Define braking and dissipation', 'Architecture'], ['Define mast and foundation', 'Verified support'], ['Define electrical conversion', 'Grid or storage interface'],
    ['Define lightning and bonding', 'Protection'], ['Define sensors and communications', 'Measurements'], ['Define service and lowering', 'Maintainable'],
    ['Release drawings and bill of materials', 'Revisions'], ['Define qualification and production tests', 'Acceptance'], ['Validate prototypes and pilot production', 'Accepted']]],
  ['Blade tooling', 'Moulds for composite blades; extrusion dies or forming tools for metal blades.', [
    ['Freeze blade geometry', 'Aerodynamic and structural shape'], ['Define tolerances', 'Profile, twist and attachment'], ['Produce the master model', 'Reference geometry'],
    ['Inspect the master', 'Compliance'], ['Make mould halves or forming tools', 'Construction'], ['Make root-location fixtures', 'Attachment geometry'],
    ['Add vacuum, heating or cooling', 'Process-compatible'], ['Finish tooling surfaces', 'Surface quality'], ['Run first articles', 'Initial blades'],
    ['Measure blade geometry', 'Profile'], ['Inspect root interfaces', 'Fit'], ['Correct tooling', 'Deviations'], ['Approve reference samples', 'Standard'], ['Release tooling', 'Maintenance plan']]],
  ['Composite blades where specified', 'Infusion, prepreg or another qualified process.', [
    ['Receive reinforcement and resin', 'Batches'], ['Verify storage life', 'Condition'], ['Prepare mould surfaces', 'Release system'],
    ['Cut reinforcement kits', 'Orientation and quantity'], ['Place surface layers', 'Finish'], ['Lay structural reinforcement', 'Fibre placement'],
    ['Install cores and root reinforcement', 'Position'], ['Install inserts', 'Load transfer'], ['Prepare the resin process', 'Setup'],
    ['Infuse or consolidate', 'Qualified method'], ['Cure', 'Time and temperature recorded'], ['Demould on supports', 'No damage'],
    ['Bond shells and internals', 'Adhesive joints'], ['Cure bonds', 'Process'], ['Trim and finish edges', 'Geometry'],
    ['Inspect laminate and bonds', 'Visual and additional methods'], ['Measure mass and centre of gravity', 'Blade matching'], ['Inspect attachment dimensions', 'Root'],
    ['Apply protective finish', 'Durability'], ['Identify the blade', 'Serial and materials']]],
  ['Metal blades where specified', 'Own forming and fatigue validation.', [
    ['Receive sheet or profiles', 'Alloy and batch'], ['Cut blanks', 'Geometry'], ['Form or extrude the section', 'Profile'],
    ['Produce attachment features', 'Locations'], ['Assemble internal supports', 'Stiffness'], ['Join components', 'Welding or fastening'],
    ['Inspect joints and surfaces', 'No defects'], ['Measure profile and straightness', 'Tolerance'], ['Measure mass and centre of gravity', 'Matching'],
    ['Apply corrosion protection', 'Finish'], ['Identify and release', 'Traceable']]],
  ['Shafts, hubs and rotating parts', 'Critical fits are inspected before assembly.', [
    ['Receive blanks', 'Grade and batch'], ['Rough machine', 'Geometry'], ['Heat treat', 'Properties'], ['Finish machine', 'Compliance'],
    ['Grind bearing seats', 'Fit'], ['Machine flange faces and holes', 'Alignment'], ['Produce torque interfaces', 'Geometry'],
    ['Inspect critical surfaces', 'No damage'], ['Material examination', 'Requirements'], ['Check runout and concentricity', 'Limits'],
    ['Clean and protect', 'Assembly-ready'], ['Identify parts', 'Traceable']]],
  ['Generator', 'Shown for a permanent-magnet generator; other designs use their own rotor process.', [
    ['Produce or receive laminations', 'Material and geometry'], ['Stack laminations', 'Alignment'], ['Install slot insulation', 'Separation'],
    ['Wind the stator', 'Turns and arrangement'], ['Complete winding connections', 'Joining'], ['Secure and impregnate windings', 'Stability'],
    ['Cure insulation', 'Recorded'], ['Measure winding resistance', 'Phase balance'], ['Winding insulation tests', 'Acceptance'],
    ['Machine the rotor carrier', 'Geometry'], ['Install magnets', 'Polarity and placement'], ['Secure magnet retention', 'Structural method'],
    ['Balance the rotor', 'Acceptance'], ['Assemble rotor and stator', 'Air gap'], ['Install bearings and seals', 'Fit'],
    ['Fit leads and terminals', 'Secure'], ['Bench test', 'Voltage, speed and load'], ['Efficiency and thermal checks', 'Accepted'], ['Identify and release', 'Serial-linked']]],
  ['Mast and supports', 'Designed for turbine loads including dynamic effects.', [
    ['Receive structural material', 'Grade and batch'], ['Cut mast and supports', 'Dimensions'], ['Form tapered or tubular sections', 'Geometry'],
    ['Produce flanges and baseplates', 'Interfaces'], ['Prepare welds', 'Joint details'], ['Weld in fixtures', 'Qualified process'],
    ['Inspect welds', 'Examination'], ['Check straightness and alignment', 'Limits'], ['Produce cable access openings', 'Details'],
    ['Make lowering or hinge parts', 'Load-rated'], ['Produce guy attachments', 'Geometry'], ['Apply corrosion protection', 'Finish'],
    ['Inspect treatment and interfaces', 'Accepted'], ['Produce foundation templates', 'Anchor layout'], ['Identify and release', 'Traceable']]]
] };
