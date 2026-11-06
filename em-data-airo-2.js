// AIRO (Use energy) part 2.
window.EM_AIRO_B = { phases: [
  ['Assemble SHIFT', 'Single units and coordinated groups are both validated.', [
    ['Prepare the wall sleeve', 'Dimensions'], ['Install seals and insulation', 'Construction'], ['Fit the regenerative core', 'Support'],
    ['Install the reversible fan', 'Orientation'], ['Fit filters', 'Direction and sealing'], ['Install shutters', 'Movement'],
    ['Fit indoor and outdoor terminals', 'Airflow path'], ['Install controls and sensors', 'Positions'], ['Complete wiring and closure', 'Safe assembly'],
    ['Test both airflow directions', 'Reversal'], ['Test cycle timing', 'Regeneration sequence'], ['Test paired or grouped operation', 'Coordinated supply and extract'], ['Inspect filter and core removal', 'Serviceable']]],
  ['Assemble SWAP, FLOW and WAVE', 'Separate supply and extract paths stay sealed through the whole unit.', [
    ['Load the casing or shell', 'Variant'], ['Install air-path partitions', 'Separation'], ['Fit the recovery core', 'Orientation'],
    ['Install core seals', 'No bypass or cross-leakage'], ['Install supply and extract fans', 'Directions'], ['Fit filter assemblies', 'Correct air streams'],
    ['Install bypass damper', 'Routing'], ['Install frost protection', 'Configuration'], ['Fit condensate tray and drain', 'Slope and sealing'],
    ['Install acoustic components', 'Airflow kept clear'], ['Install temperature and pressure sensing', 'Positions'], ['Install control electronics', 'Protected'],
    ['Connect fans, actuators and sensors', 'Mapping'], ['Install auxiliary heater', 'Protection and clearances'], ['Fit service panels and seals', 'Repeatable access'],
    ['Inspect the complete air path', 'No debris or displaced seals'], ['Close and identify', 'Ready for testing']]],
  ['Add the GUST heat-pump circuit', 'A refrigeration route on top of ventilation assembly. Airflow, heating, cooling and moisture removal are stated separately.', [
    ['Verify compressor and refrigerant parts', 'Model and ratings'], ['Install compressor supports', 'Vibration isolation'], ['Install refrigeration exchangers', 'Airflow positions'],
    ['Install expansion and reversing components', 'Approved circuit'], ['Fit and join pipework', 'Validated process'], ['Inspect joints and supports', 'No stress or rubbing'],
    ['Pressure integrity test', 'Approved procedure'], ['Sensitive leak test', 'Accepted circuit'], ['Evacuate and dehydrate', 'Acceptance criteria'],
    ['Charge refrigerant by mass', 'Calibrated equipment'], ['Final closure', 'Approved method'], ['Post-charge leak check', 'Including closure points'],
    ['Install refrigeration sensors and drive', 'Configuration'], ['Fit condensate collection', 'Cooling and dehumidification'], ['Insulate cold surfaces', 'No unwanted condensation'],
    ['Test heating and cooling', 'Stable'], ['Verify dehumidification', 'Defined conditions'], ['Record refrigerant and results', 'Serial-linked']]],
  ['ROUTE ducts and fittings', 'Duct method follows the selected construction. Factory gaskets help; installed airtightness depends on the whole assembly.', [
    ['Smooth polymer duct', 'Extruded, controlled dimensions and cooling'], ['Corrugated polymer duct', 'Extruded and corrugated'],
    ['Rigid plastic fittings', 'Injection moulded'], ['Metal ducts and plenums', 'Cut, formed, joined and sealed'],
    ['Seals', 'Elastomer extrusion or moulding'], ['Terminals and balancing parts', 'Moulded, formed or machined'],
    ['ROUTE acceptance', 'Mating dimensions, joint retention, leakage, pressure loss, internal cleanliness, end caps and batch identity']], 'nonum'],
  ['Assemble and verify CONTROL products', 'Checks match what each sensor actually measures.', [
    ['Assemble sensor boards into housings', 'Exposure to room air'], ['Protect sensor openings', 'No contamination'], ['Verify temperature', 'Reference comparison'],
    ['Verify humidity', 'Reference conditions'], ['Verify CO₂ where fitted', 'Approved method'], ['Verify particle sensing where fitted', 'Functional or reference test'],
    ['Verify pressure or airflow sensing', 'Response'], ['Apply corrections', 'Controlled values'], ['Test controls and interface', 'Operation'],
    ['Verify communication', 'Identity and data'], ['Inspect finished product', 'Openings not blocked'], ['Record results', 'Traceable']]],
  ['Program and test local controls and EMON', 'EMON functions are model-dependent. A recovery value calculated from a few sensors is not laboratory-rated recovery efficiency.', [
    ['Load approved firmware', 'Hardware variant'], ['Configure fan maps and modes', 'Product settings'], ['Configure sensors and actuators', 'Mapping'],
    ['Assign device identity', 'Unique serial and network reference'], ['Provision credentials', 'Controlled'], ['Test local operation', 'Standalone functions'],
    ['Simulate CO₂ and humidity demand', 'Response'], ['Test boost and schedules', 'Operation'], ['Test bypass and frost logic', 'Sequence'],
    ['Verify filter status logic', 'Measured pressure vs runtime estimate'], ['Connect to an EMON test environment', 'Association'], ['Verify measurements and units', 'Reporting'],
    ['Verify permitted commands', 'Physical response'], ['Interrupt internet and controller separately', 'Fallback'], ['Restore communication', 'Recovery'],
    ['Verify authorised updates', 'Security and recovery'], ['Remove factory bindings', 'Customer-ready']]],
  ['Test every finished unit', 'Routine tests find assembly defects and confirm conformity with the qualified design.', [
    ['Scan unit identity', 'Test recipe'], ['Electrical safety tests', 'Construction'], ['Controlled start', 'No abnormal behaviour'],
    ['Verify each fan and speed', 'Response'], ['Measure airflow at test points', 'Production limits'], ['Check supply and extract', 'Direction and balance'],
    ['Check air-path leakage', 'Separation'], ['Verify dampers and shutters', 'Movement'], ['Verify sensor readings', 'Plausible and mapped'],
    ['Test heaters and protection', 'Approved method'], ['Check drain integrity', 'No leakage'], ['Screen noise and vibration', 'Production limits'],
    ['Verify filter presence and orientation', 'Assembly'], ['Verify service panels', 'Closure'], ['Run the functional cycle', 'Stable'],
    ['Save results', 'Serial-linked'], ['Divert failed units', 'Repair and retest']]],
  ['Qualification and audit tests', 'Full performance claims need separate controlled evaluation.', [
    ['Airflow and pressure curves', 'Usable performance'], ['Heat recovery', 'Stated conditions'], ['Moisture recovery', 'Enthalpy where supported'],
    ['Internal and external leakage', 'Complete air path'], ['Acoustic performance', 'Sound power or stated results'], ['Electrical consumption', 'Fan and unit power'],
    ['Frost behaviour', 'Cold operation'], ['Condensate management', 'Collection and drainage'], ['Filtration', 'Filter construction and bypass'],
    ['GUST refrigeration', 'Heating, cooling and dehumidification'], ['Mechanical durability', 'Fans, dampers, covers and supports'], ['EMC and radio', 'Controls and communication'],
    ['Hygiene and cleanability', 'Materials, access and maintenance'], ['Packaging', 'Transport protection']], 'nonum'],
  ['Finish, identify and release', 'The complete unit and its accessories are verified.', [
    ['Clean exterior and air paths', 'No debris'], ['Inspect casing and grilles', 'No damage'], ['Fit clean filters', 'Correct model'],
    ['Cap duct connections', 'No contamination'], ['Apply rating labels', 'Electrical and product information'], ['Apply serial and QR', 'Durable'],
    ['Verify NFC', 'Association'], ['Review firmware and tests', 'Accepted'], ['Confirm accessory configuration', 'Installation kit'], ['Authorise factory release', 'Quality approval']]],
  ['Pack units and ROUTE kits', 'Tools carry the structure, never grilles, duct spigots or condensate outlets.', [
    ['Scan the released product', 'Unapproved blocked'], ['Select the packing recipe', 'Family and variant'], ['Erect carton or pallet', 'Approved packaging'],
    ['Insert bottom supports', 'Load points'], ['Apply surface protection', 'No scratches'], ['Engage gripper or cradle', 'Structural contact'],
    ['Verify secure pickup', 'Feedback'], ['Transfer into the package', 'Controlled'], ['Protect duct and drain connections', 'No concentrated loads'],
    ['Insert mounting hardware', 'Kit'], ['Insert wall sleeves and terminals', 'Variant'], ['Insert controls and accessories', 'Complete order'],
    ['Insert documents', 'Language and revision'], ['Verify contents', 'Scanning, vision and weight'], ['Fit top and side protection', 'No movement'],
    ['Close and seal', 'Approved closure'], ['Label and check', 'Identity and weight'], ['Pack ROUTE parts by project or size', 'Counted, capped and identified'],
    ['Palletise and secure', 'Validated stacking'], ['Record dispatch', 'Carrier, destination and identities']]],
  ['Commission the installed system', 'Factory tests cannot establish room airflow in the finished building.', [
    ['Inspect delivery and installation', 'Products and condition'], ['Verify intake and exhaust positions', 'Separation and access'], ['Inspect duct routing and seals', 'Connections'],
    ['Verify condensate arrangement', 'Slope and drainage'], ['Electrical checks', 'Installation acceptance'], ['Measure supply and extract flows', 'Installed performance'],
    ['Balance room terminals', 'Ventilation design'], ['Verify SHIFT coordination', 'Paired or grouped operation'], ['Verify sensors and demand control', 'Room response'],
    ['Commission EMON', 'Data and commands'], ['Record final settings and measurements', 'As-built record'], ['Deliver maintenance instructions', 'Filter, core, fan and duct access'],
    ['Complete digital handover', 'Product, installation and warranty']]]
], records: [
  ['Product identity', 'Family, model, revision and serial'], ['Housing', 'Resin, mould, cavity and metal batches'],
  ['Insulated air paths', 'Material, tooling and inspection'], ['Recovery core', 'Type and acceptance'],
  ['Fans', 'Model, batch and test status'], ['Filters', 'Construction and batch'],
  ['Electronics', 'Board identity, software and tests'], ['Sensors', 'Verification and calibration'],
  ['GUST refrigeration', 'Circuit tests, refrigerant charge and performance'], ['Factory acceptance', 'Airflow, safety and functional results'],
  ['ROUTE components', 'Materials, dimensions and leakage'], ['Packaging', 'Accessories and shipment'],
  ['Commissioning', 'Room flows, balancing and settings'], ['Service', 'Filter changes, faults and replacements']
] };
