// OGO (Use energy) part 2.
window.EM_OGO_B = { phases: [
  ['Assemble the heat-pump module', 'Kept clean and accessible for inspection before closure.', [
    ['Load the module frame', 'Variant'], ['Install compressor mounts', 'Approved parts'], ['Place and secure the compressor', 'Fastening'],
    ['Install the evaporator', 'Airflow position'], ['Install fan and air guides', 'Direction and clearances'], ['Install expansion and circuit parts', 'Circuit'],
    ['Position tubing', 'No stress'], ['Join connections', 'Validated process'], ['Fit pressure and temperature sensing', 'Locations'],
    ['Inspect joints and supports', 'Accepted'], ['Install the condensate tray', 'Geometry'], ['Fit the drain', 'Secure and accessible'],
    ['Install acoustic treatment', 'No airflow obstruction'], ['Record component identities', 'Serial-linked']]],
  ['Leak test, evacuate and charge', 'The completed circuit is tested, including the tank condenser joints; incoming component tests do not cover assembly joints.', [
    ['Connect to the test station', 'Connections'], ['Pressure integrity test', 'Procedure'], ['Gross leak screening', 'Major defects'],
    ['Sensitive leak test', 'Acceptance'], ['Repair failed joints', 'Approved route'], ['Repeat tests after repair', 'Complete'],
    ['Remove test gas', 'Handling'], ['Evacuate and dehydrate', 'Vacuum criteria'], ['Verify evacuation', 'Recorded'],
    ['Charge refrigerant by mass', 'Calibrated'], ['Final closure', 'Approved method'], ['Post-charge leak check', 'Closure points'], ['Record refrigerant type and quantity', 'Unit record']]],
  ['Water, electrical and mechanical assembly', 'The variant sets what is factory-fitted.', [
    ['Install the immersion element', 'Rating and sealing'], ['Install temperature sensors', 'Pockets and depth'], ['Install independent high limit', 'Construction'],
    ['Install anode components', 'Connection'], ['Fit water connections', 'Seals'], ['Fit factory safety components', 'Destination configuration'],
    ['Install control electronics', 'Protected'], ['Connect compressor, fan and element', 'Mapping'], ['Install PV electronics', 'Separation'],
    ['Connect protective earth', 'Continuity'], ['Fit power and communication connections', 'Strain relief'], ['Inspect internal wiring', 'No abrasion or hot contact'],
    ['Install service covers', 'Access'], ['Fit the upper enclosure', 'Airflow and clearances'], ['Inspect the assembly', 'Ready for tests']]],
  ['Program and verify EMON control', 'Optimisation runs within locally enforced limits. Hygiene cycles have a completion deadline; low prices cannot postpone them indefinitely.', [
    ['Load firmware', 'Model'], ['Configure tank and heating parts', 'Hardware'], ['Verify temperature measurements', 'Reference checks'],
    ['Configure operating and protection limits', 'Controlled'], ['Assign device identity', 'Unique'], ['Provision credentials', 'Controlled'],
    ['Configure local schedules and fallback', 'Standalone'], ['Verify hot-water modes', 'Compressor and element use'], ['Test EMON scheduling', 'Response'],
    ['Simulate solar availability', 'Behaviour'], ['Simulate tariff changes', 'Scheduling'], ['Verify storage temperature limits', 'No overheating'],
    ['Test loss of communication', 'Local protection effective'], ['Verify hygiene programme', 'Temperature, duration and timing'], ['Verify incomplete-cycle handling', 'Retry and fault reporting'],
    ['Verify authorised updates', 'Software process'], ['Remove factory bindings', 'Customer-ready']]],
  ['Test the finished unit', 'Controlled water and air setup; the element is never energised dry.', [
    ['Scan identity', 'Recipe'], ['Fill the water circuit', 'Test condition'], ['Check water connections', 'No leakage'],
    ['Electrical safety tests', 'Construction'], ['Controlled start-up', 'No abnormal behaviour'], ['Verify compressor and fan', 'Response'],
    ['Record inlet air conditions', 'Reference'], ['Record water temperatures', 'Sensor mapping'], ['Run a heating cycle', 'Stable heat transfer'],
    ['Measure electrical input', 'Production limits'], ['Verify water temperature rise', 'Screening result'], ['Check refrigerant behaviour', 'Test envelope'],
    ['Test backup heating', 'Operation'], ['Test thermostat control', 'Shutdown'], ['Verify protection circuits', 'Approved methods'],
    ['Verify condensate drainage', 'No leakage'], ['Screen noise and vibration', 'Limits'], ['Test PV functions', 'Input and regulation'],
    ['Complete the run test', 'Accepted'], ['Drain, dry and prepare', 'Residual water'], ['Final inspection', 'No faults'], ['Divert failed units', 'Repair and retest']]],
  ['Qualification and audit tests', 'Beyond the short factory heating check. Example efficiency figures stay examples until model-specific tests support them.', [
    ['Hot-water delivery', 'Defined draw profile'], ['Recovery time', 'Reheating'], ['Energy performance', 'Stated air and water conditions'],
    ['Standing losses', 'Insulation'], ['Vessel durability', 'Pressure and thermal cycling'], ['Corrosion protection', 'Tank construction'],
    ['Electrical protection', 'Abnormal conditions'], ['Refrigeration performance', 'Operating envelope'], ['Condensate handling', 'Drainage'],
    ['Acoustic performance', 'Stated sound results'], ['PV integration', 'MPPT or surplus control'], ['Software and communication', 'Scheduling, fallback and updates'], ['Packaging', 'Handling and transport']], 'nonum'],
  ['Identification and release', 'Labels and records describe the actual variant shipped.', [
    ['Clean the exterior', 'No residue'], ['Inspect jacket and covers', 'No dents or gaps'], ['Protect water and air connections', 'No contamination'],
    ['Apply rating label', 'Capacity, electrical and refrigerant'], ['Apply serial and QR', 'Durable'], ['Verify NFC', 'Association'],
    ['Verify firmware', 'Approved release'], ['Review vessel and refrigeration tests', 'Complete'], ['Verify installation kit', 'Destination'], ['Authorise factory release', 'Quality approval']]],
  ['Robotic packing', 'Tall units are handled by structural supports, never by the plastic heat-pump covers.', [
    ['Scan the released unit', 'Unapproved blocked'], ['Select the packing recipe', 'Tank and module'], ['Present pallet or base', 'Support'],
    ['Install bottom protection', 'Load points'], ['Position for pickup', 'Fixture'], ['Engage cradle or gripper', 'Structural surfaces'],
    ['Verify secure pickup', 'Feedback'], ['Transfer onto the base', 'Permitted orientation'], ['Secure the unit', 'No movement'],
    ['Protect the upper module', 'No load on covers or spigots'], ['Protect water and drain connections', 'No impact'], ['Insert accessories', 'Kit'],
    ['Insert instructions', 'Model and language'], ['Verify kit completeness', 'Checks'], ['Fit sleeve or crate', 'Controlled'],
    ['Fit top protection', 'Construction'], ['Strap or secure', 'No jacket deformation'], ['Apply handling labels', 'Orientation and mass'],
    ['Check weight and condition', 'Accepted'], ['Record package identity', 'Packing record']]],
  ['Dispatch and commission', 'Site checks confirm the water, air and electrical conditions the design assumes. Indoor air source effects belong in the building assessment.', [
    ['Store upright as permitted', 'Refrigeration and tank protected'], ['Load and restrain', 'Transport method'], ['Record dispatch', 'Carrier and serial'],
    ['Inspect on arrival', 'Condition'], ['Verify floor and clearances', 'Installation'], ['Verify room or ducted air', 'Heat source'],
    ['Install water safety and expansion', 'Destination arrangement'], ['Connect condensate and discharge', 'Drainage'], ['Fill, vent and inspect', 'No leaks'],
    ['Electrical checks', 'Acceptance'], ['Commission heating and protection', 'Operation'], ['Connect EMON', 'Data and commands'],
    ['Record baseline operation', 'Evidence'], ['Deliver the handover file', 'Maintenance, settings and warranty']]]
], records: [
  ['Product identity', 'Model, configuration and serial'], ['Tank', 'Material, welding, protection and pressure tests'],
  ['Insulation', 'Batches and process checks'], ['Refrigeration', 'Components, leak tests, evacuation and charge'],
  ['Plastic parts', 'Resin, mould and inspection'], ['Electronics', 'Board identities and tests'],
  ['Heating element', 'Type, rating and batch'], ['Protection', 'Sensors, thermostat and limit devices'],
  ['Firmware', 'Version and configuration'], ['Factory testing', 'Electrical, heating and functional'],
  ['Solar integration', 'Architecture and tests'], ['Packaging', 'Accessories and shipment'],
  ['Commissioning', 'Water, airflow, electrical and controls'], ['Service', 'Maintenance, anode checks and replacements']
] };
