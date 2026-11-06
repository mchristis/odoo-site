// CHILL (Build and connect) part 2.
window.EM_CHILL_B = { phases: [
  ['SMT controls and service electronics', 'Only for functions in the released configuration.', [
    ['Receive PCBs and components', 'Revisions'], ['Load the SMT recipe', 'Configuration'], ['Print and inspect paste', 'Deposits'],
    ['Place components', 'Pick-and-place'], ['Reflow', 'Profile'], ['Inspect boards', 'Optical'], ['Fit terminals and large parts', 'Soldering'],
    ['Circuit tests', 'Acceptance'], ['Program firmware', 'Controlled release'], ['Test lighting outputs', 'Operation'],
    ['Test USB or wireless charging', 'Regulation and protection'], ['Test sensors and communication', 'Response'], ['Apply coating', 'Masking'],
    ['Assemble into service modules', 'Protected interfaces'], ['Identify and release', 'Recorded']]],
  ['Energy compartments', 'User interfaces are separated from service-only equipment.', [
    ['Prepare the compartment', 'Enclosure'], ['Install battery restraints', 'Support'], ['Install controller and conversion', 'Accessible'],
    ['Install electrical protection', 'Ratings'], ['Install ventilation', 'Thermal path'], ['Install temperature sensing', 'Locations'],
    ['Route and secure cables', 'No abrasion'], ['Connect bonding', 'Continuity'], ['Install water barriers and drains', 'No water path'],
    ['Fit locks and service panels', 'Controlled access'], ['Inspect clearances and wiring', 'Nothing loose'], ['Test the compartment', 'Accepted']]],
  ['Assemble the product', 'Each family follows its own fixture and sequence.', [
    ['Load the frame', 'Configuration'], ['Install supports and connections', 'Geometry'], ['Fit roof or canopy', 'Slope'],
    ['Install glazing or side panels', 'Retention'], ['Install seating', 'Ergonomics and fastening'], ['Fit PV modules', 'Support'],
    ['Install the energy compartment', 'Secure'], ['Install lighting', 'Orientation and protection'], ['Fit displays or information modules', 'Accessible'],
    ['Fit charging points and service ports', 'Exposure protection'], ['Install communication', 'Antenna position'], ['Complete harness connections', 'Identity and polarity'],
    ['Install gutters and downpipes', 'Discharge'], ['Fit caps, covers and edges', 'Complete'], ['Inspect critical fasteners', 'Recorded'], ['Verify maintenance access', 'Serviceable']]],
  ['Family-specific checks', 'On top of the shared process. Impact resistance, vandal resistance and vehicle containment are separate claims, each needing a defined test and level.', [
    ['Solar bench', 'Seating strength, stability, contact surfaces, drainage and protected ports'], ['ARCADE', 'Bay alignment, movement joints, access and module continuity'],
    ['CANOPY', 'Overhead retention, roof loads, drainage and foundations'], ['BUS Shelter', 'Passenger circulation, visibility, glazing, seating and information access'],
    ['NOISE Barrier', 'Acoustic joints, post connections, maintenance and roadside requirements']], 'nonum'],
  ['Program and verify EMON', 'Local functions stay predictable when communication fails.', [
    ['Load firmware', 'Hardware'], ['Configure installed services', 'Actual equipment'], ['Configure battery and charging limits', 'Settings'],
    ['Set load priorities', 'Energy allocation'], ['Configure lighting schedules', 'Profile'], ['Assign identities', 'Unique'],
    ['Provision credentials', 'Controlled'], ['Connect to an EMON test environment', 'Association'], ['Verify energy and status reporting', 'Values'],
    ['Test permitted commands', 'Physical response'], ['Simulate low battery', 'Load reduction'], ['Interrupt communication', 'Local fallback'],
    ['Restore communication', 'Recovery'], ['Verify updates', 'Process'], ['Remove factory accounts', 'Customer-ready'], ['Save configuration', 'Product-linked']]],
  ['Test the finished assembly', 'Routine tests confirm conformity with the qualified design.', [
    ['Verify identity', 'Recipe'], ['Inspect dimensions and assembly', 'Compliance'], ['Check seating and contact surfaces', 'No defects'],
    ['Check doors, covers and locks', 'Operation'], ['Electrical safety tests', 'Construction'], ['Verify solar polarity and charging', 'Operation'],
    ['Verify battery readings and protection', 'Behaviour'], ['Test lighting and dimming', 'Outputs'], ['Test charging ports', 'Regulation'],
    ['Test displays and communication', 'Functions'], ['Run simultaneous loads', 'Stable'], ['Check temperatures', 'Limits'],
    ['Test fault responses', 'Shutdown or limitation'], ['Check drainage', 'No leakage'], ['Inspect after testing', 'No damage'],
    ['Save results', 'Traceable'], ['Divert failures', 'Repair and retest']]],
  ['Qualification and audit tests', 'The completed product, not only its purchased modules.', [
    ['Structural performance', 'Loads, connections and foundations'], ['Seating durability', 'Strength, stability and repeated use'], ['Public-contact geometry', 'Edges, gaps and access'],
    ['Glazing', 'Construction, retention and impact'], ['Weather protection', 'Declared configuration'], ['Thermal behaviour', 'Electronics, battery and surfaces'],
    ['Corrosion and UV', 'Outdoor durability'], ['Acoustic performance', 'Complete NOISE Barrier'], ['Electrical integration', 'Assembly and faults'],
    ['Energy autonomy', 'Off-grid services and profile'], ['EMC and radio', 'Electronics and communication'], ['Maintainability', 'Cleaning, access and replacement'], ['Packaging', 'Handling and transport']], 'nonum'],
  ['Release and tender documentation', 'Tender claims link to evidence for the offered configuration. Company certifications, product certifications, project calculations and references are listed separately.', [
    ['Review fabrication and inspection records', 'Acceptance'], ['Review equipment test records', 'Versions'], ['Verify final configuration', 'Matches order'],
    ['Apply rating and identity labels', 'Information'], ['Apply QR and NFC', 'Digital record'], ['Verify installation instructions', 'Revision'],
    ['Prepare maintenance and spare parts', 'Service documents'], ['Prepare tender evidence schedule', 'Verified claims and exclusions'], ['Authorise factory release', 'Quality approval']]],
  ['Pack and prepare shipment', 'Compact furniture and large shelters use different handling.', [
    ['Select packing configuration', 'Assembled or kit'], ['Scan components', 'Allocation'], ['Apply surface protection', 'Finish-compatible'],
    ['Protect timber, glazing and PV', 'No impact or staining'], ['Prepare packing supports', 'Load points'], ['Engage robot, gantry or cradle', 'Lifting interfaces'],
    ['Transfer into supports', 'Controlled'], ['Fit separators and corners', 'No abrasion'], ['Restrain doors and loose parts', 'No movement'],
    ['Prepare batteries for shipment', 'Condition and documents'], ['Pack electronics separately', 'Protected'], ['Count and pack hardware', 'Complete'],
    ['Insert instructions and plans', 'Revision'], ['Verify contents', 'Checks'], ['Close and secure', 'No crushing'],
    ['Label mass, orientation and lifting', 'Handling'], ['Photograph packages', 'Dispatch condition'], ['Record shipment identities', 'Traceable']]],
  ['Install, commission and hand over', 'Public use, structure and energy functions are accepted together.', [
    ['Inspect delivery', 'Condition'], ['Verify foundations and utilities', 'Site interfaces'], ['Assemble and anchor', 'Instructions'],
    ['Install glazing, roof and seating', 'Retention'], ['Complete electrical connections', 'Architecture'], ['Inspect circulation and access', 'Usable'],
    ['Verify drainage', 'Discharge'], ['Electrical tests', 'Acceptance'], ['Test lighting, charging and services', 'Function'],
    ['Commission EMON', 'Reporting and control'], ['Record as-built components and settings', 'Project file'], ['Owner or municipality acceptance', 'Handover'], ['Establish maintenance responsibilities', 'Inspections and service']]]
], records: [
  ['Product configuration', 'Family, dimensions and functions'], ['Design basis', 'Public use, loads, environment and site'],
  ['Materials', 'Metals, seating, glazing and polymers'], ['Fabrication', 'Forming, machining, welding and inspection'],
  ['Finishes', 'Treatment and acceptance'], ['Acoustic construction', 'Panel design and evidence'],
  ['Energy equipment', 'PV, battery, conversion and protection'], ['Electronics', 'Hardware, firmware and tests'],
  ['Factory acceptance', 'Inspection and functional results'], ['Tender evidence', 'Claims, documents and exclusions'],
  ['Packaging', 'Components and shipment'], ['Commissioning', 'Installed arrangement, tests and settings'], ['Service', 'Cleaning, inspections, faults and replacements']
] };
