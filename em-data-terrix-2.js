// TERRIX (Build and connect) part 2.
window.EM_TERRIX_B = { phases: [
  ['Tracker drives and actuators', 'Accepted and integrated under TERRIX control.', [
    ['Release drive specifications', 'Torque, speed and holding'], ['Make or receive gear parts', 'Materials and dimensions'], ['Inspect gears, bearings and shafts', 'Accepted'],
    ['Assemble gearbox or actuator', 'Alignment'], ['Apply lubrication', 'Type and quantity'], ['Install motor and position sensing', 'Assembly'],
    ['Fit seals and enclosure', 'Protection'], ['Test direction and travel', 'Operation'], ['Test holding and backdrive', 'Performance'],
    ['Test current draw and load response', 'Limits'], ['Inspect mechanical interfaces', 'Tracker fit'], ['Identify and release', 'Serial-linked']]],
  ['Tracker controls', 'Controlled electronics for TRACKER; FIXED-TILT has no controller boards.', [
    ['Receive PCBs and components', 'Identity and batch'], ['Load the SMT recipe', 'Revision'], ['Print and inspect paste', 'Deposits'],
    ['Place components', 'Pick-and-place'], ['Reflow', 'Profile'], ['Inspect boards', 'Optical'], ['Fit terminals and large parts', 'Soldering'],
    ['Circuit tests', 'Accepted'], ['Program firmware', 'Controlled release'], ['Test motor outputs and sensor inputs', 'Response'],
    ['Apply coating', 'Environmental protection'], ['Install in enclosures', 'Sealing'], ['Provision identity', 'Unique reference'],
    ['Configure movement limits', 'Hardware'], ['Configure communication and faults', 'Behaviour'], ['Save results', 'Traceable']]],
  ['Assemble FIXED-TILT tables', 'Representative assembly verifies geometry and installation.', [
    ['Set supports in the fixture', 'Foundation interfaces'], ['Install beams and braces', 'Arrangement'], ['Install purlins and rails', 'Spacing'],
    ['Fit modules or templates', 'Geometry'], ['Verify clamps and fastening access', 'Installable'], ['Verify dimensions and tilt', 'Compliance'],
    ['Check adjustment range', 'Tolerances'], ['Fit cable and bonding parts', 'Routing'], ['Demonstrate module replacement', 'Service'],
    ['Record deviations', 'Correction'], ['Approve the assembly', 'Verification']]],
  ['Assemble and test TRACKER rows', 'Verified as a mechanical and control system. Wind stow is validated by aerodynamic testing, not a nominal angle.', [
    ['Assemble representative supports', 'Row geometry'], ['Install bearings and torque tubes', 'Alignment'], ['Install drives', 'Interfaces'],
    ['Fit module supports', 'Spacing'], ['Fit modules or loads', 'Mass distribution'], ['Install dampers', 'Locations'],
    ['Install controller and sensors', 'Mapping'], ['Route moving cables and bonding straps', 'No pinching'], ['Rotate through the range', 'No interference'],
    ['Verify position feedback', 'Angle reporting'], ['Verify travel limits', 'Stopping'], ['Test tracking commands', 'Direction and movement'],
    ['Test stow commands', 'Response'], ['Simulate sensor and communication failures', 'Fallback'], ['Test power interruption', 'Behaviour'],
    ['Test backup supply', 'Operation'], ['Record results', 'Accepted configuration']]],
  ['CONTAINERIZED deployable structures', 'An actual freight container is distinguished from a purpose-built transport frame. Unfolding time is stated with crew, equipment, ground and scope, separate from foundations, electrics and commissioning.', [
    ['Define transport and deployed envelopes', 'Dimensions'], ['Define lifting, restraint and support points', 'Handling'], ['Fabricate the transport frame', 'Geometry'],
    ['Inspect structural joints', 'Acceptance'], ['Make folding wing frames', 'Stiffness and interfaces'], ['Make hinges, pins and bushes', 'Clearances'],
    ['Install deployment actuators', 'System'], ['Install deployed supports and braces', 'Load path'], ['Install positive operating locks', 'Secure deployed'],
    ['Install transport locks', 'No movement in transit'], ['Install cable carriers and moving harnesses', 'Bending and protection'], ['Fit module supports', 'Retention'],
    ['Fit modules where supplied', 'Protected'], ['Inspect folded clearances', 'No glass or cable contact'], ['Run controlled deployment', 'Sequence and stability'],
    ['Verify locks and supports', 'Positive confirmation'], ['Run controlled retraction', 'Nothing trapped'], ['Repeated deployment tests', 'Durability'],
    ['Verify lifting and transport', 'Handling'], ['Record results', 'Acceptance']]],
  ['UTILITY FENCE (in development)', 'A vertical PV row is not automatically a security fence, vehicle barrier or livestock barrier; each function needs its own specification.', [
    ['Define the vertical configuration', 'Heights and spans'], ['Make posts and supports', 'Sections'], ['Make module retention parts', 'Interfaces'],
    ['Produce end and corner details', 'Load transfer'], ['Provide protected cable routes', 'Access and separation'], ['Fit representative modules', 'Support'],
    ['Verify ground clearance', 'Project geometry'], ['Check servicing and replacement', 'Access'], ['Verify gates or crossings', 'Interfaces'],
    ['Test representative assemblies', 'Structural and electrical'], ['Release the qualified configuration', 'Development acceptance']]],
  ['Qualification and audit tests', 'Kept distinct from routine dimensional and assembly checks; certification is selected per destination market.', [
    ['Structural members', 'Strength, buckling and serviceability'], ['Connections', 'Slip, pull-out, joint strength and fatigue'], ['Foundations', 'Site ground performance'],
    ['Module retention', 'Approved module and clamp combinations'], ['Wind response', 'Static and dynamic'], ['Tracker operation', 'Movement, holding, faults and stow'],
    ['Bearings and drives', 'Wear, durability and environment'], ['Moving cables and bonding', 'Repeated flexing'], ['Corrosion protection', 'Material and exposure'],
    ['Deployment system', 'Stability, locking, repeated operation and handling'], ['Transport frame', 'Lifting and transport loads'], ['Electrical controls', 'Safety, EMC and environment'], ['Packaging', 'Storage and shipment']], 'nonum'],
  ['Identification and release', 'Parts are linked to their field positions.', [
    ['Assign block, row and table identifiers', 'Installation map'], ['Identify members', 'Assembly positions'], ['Link material and coating batches', 'Genealogy'],
    ['Record drive and controller serials', 'Equipment traceability'], ['Record firmware and settings', 'Configuration'], ['Generate QR references', 'Documents'],
    ['Verify inspection records', 'No open defects'], ['Verify quantities', 'Complete kit'], ['Prepare installation instructions', 'Revision'],
    ['Prepare test and maintenance forms', 'Site checks'], ['Authorise factory release', 'Quality approval']]],
  ['Pack project components', 'Rails and tubes suit robots or gantries; deployable assemblies need dedicated lifting and restraint.', [
    ['Load the packing order', 'Project and sequence'], ['Scan members', 'Identity'], ['Protect finishes and ends', 'No damage'],
    ['Present long members on supports', 'No distortion'], ['Engage distributed lifting', 'Robot, gantry or crane'], ['Transfer into bundles', 'Controlled'],
    ['Add separators', 'No abrasion'], ['Group by block or row', 'Less site sorting'], ['Count and bag hardware', 'Quantities'],
    ['Pack bearings and drives separately', 'Interfaces protected'], ['Pack controllers and sensors', 'Protective packaging'], ['Restrain deployable wings', 'Transport condition'],
    ['Verify contents', 'Independent checks'], ['Strap with load spreaders', 'No crushing'], ['Label mass and lifting', 'Handling'],
    ['Apply package identity', 'Packing list'], ['Photograph loads', 'Dispatch condition'], ['Release shipment', 'Accepted']]],
  ['Install and commission', 'Factory acceptance is followed by verification of the actual site and rows.', [
    ['Inspect delivery', 'Condition'], ['Verify setting out', 'Coordinates and levels'], ['Install and verify foundations', 'Field acceptance'],
    ['Assemble structures', 'Instructions'], ['Inspect connections and alignment', 'Records'], ['Fit modules and cable routes', 'Interfaces'],
    ['Verify tracker mechanical freedom', 'No binding'], ['Commission controllers and sensors', 'Row assignment'], ['Verify stow and fault behaviour', 'Response'],
    ['Deploy containerized structures', 'Support and locking'], ['Electrical checks', 'Acceptance'], ['Record as-built changes', 'Documentation'],
    ['Complete handover', 'Tests, settings, maintenance and warranty'], ['Establish inspection schedules', 'Foundations, joints, drives and corrosion']]]
], records: [
  ['Design basis', 'Terrain, soil, loads and operating conditions'], ['Engineering', 'Calculations, foundations and revisions'],
  ['Materials', 'Grades, thicknesses, batches and certificates'], ['Tooling', 'Roll sets, dies, moulds and samples'],
  ['Fabrication', 'Forming, machining, welding and inspection'], ['Protection', 'Coating process and acceptance'],
  ['Connections', 'Hardware and qualified combinations'], ['Tracker equipment', 'Bearings, drives, dampers and controllers'],
  ['Software', 'Firmware, settings and fault responses'], ['Deployable assembly', 'Hinges, locks, operation and transport'],
  ['Factory verification', 'Trial assembly and tests'], ['Packaging', 'Allocation and dispatch'],
  ['Commissioning', 'As-built rows, foundations and settings'], ['Service', 'Inspection, faults, repairs and replacements']
] };
