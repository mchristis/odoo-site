// XOOM (Use energy) part 2.
window.EM_XOOM_B = { phases: [
  ['Assemble the complete charger', 'Fixtures prevent mixing hardware, phase and regional variants.', [
    ['Load the enclosure', 'Correct model'], ['Scan the production order', 'Variant'], ['Install the power assembly', 'Support'],
    ['Install the controller board', 'Revision'], ['Install communication modules', 'Interface options'], ['Install antennas', 'Clearance and routing'],
    ['Fit socket or tethered cable', 'Orientation'], ['Install connector locking', 'Operation'], ['Connect control pilot and signals', 'Wiring'],
    ['Install controls and indicators', 'Alignment'], ['Install identification components', 'Readable'], ['Route harnesses', 'No pinching'],
    ['Fit cable glands and strain relief', 'Retention'], ['Connect enclosure bonding', 'Conductive interfaces'], ['Fit gaskets', 'No twisting'],
    ['Inspect the open assembly', 'No loose parts'], ['Close the enclosure', 'Controlled fastening'], ['Inspect gaps and interfaces', 'Accepted']]],
  ['Family-specific checks', 'On top of the shared tests. COIL’s rule for charging while wound follows thermal validation. PAVE is not assumed fit for vehicle loads or immersion, and LUMO needs site confirmation of the lighting circuit.', [
    ['WISP', 'Wall mounting, cable entry, connector storage and internal temperatures'], ['COIL', 'Reel mechanism, cable bending, retention, retraction and heating when wound'],
    ['POST', 'Baseplate, equipment support, service access and cable routing'], ['STUMP', 'Bollard construction, access doors, ground interface and impact resistance'],
    ['PAVE', 'Walking surface, mechanical loads, water ingress, drainage and service access'], ['LUMO', 'Lamp-post attachment, existing wiring, supply and maintenance access']], 'nonum'],
  ['DC route where specified', 'Added only for released models that supply DC to the vehicle.', [
    ['Power conversion modules', 'Approved conversion stages'], ['DC distribution', 'Busbars, switching and protection'], ['Cooling equipment', 'Defined thermal performance'],
    ['Insulation monitoring', 'Protective function'], ['Vehicle communication', 'Charging protocol'], ['Controlled output test', 'Voltage, current and power'],
    ['DC protection and shutdown test', 'Fault response'], ['Loaded thermal test', 'Temperatures'], ['Complete DC charging sequence', 'Compatible operation']], 'nonum'],
  ['Program, provision and identify', 'Software configuration is controlled as part of manufacturing.', [
    ['Load boot software', 'Release'], ['Load charging controller firmware', 'Hardware variant'], ['Load communication software', 'Compatible versions'],
    ['Configure phases and current limits', 'Match hardware'], ['Configure protection options', 'Installed architecture'], ['Assign device and connector identities', 'Unique'],
    ['Provision credentials and certificates', 'Device-specific'], ['Configure update verification', 'Approved acceptance'], ['Configure OCPP version and functions', 'Explicit'],
    ['Configure local behaviour', 'Offline functions'], ['Generate QR and NFC data', 'Matching identity'], ['Verify physical and electronic identity', 'No mismatch'],
    ['Record software and configuration', 'Serial-linked']]],
  ['Calibrate and verify metering', 'Factory calibration is not approval for public charging billing.', [
    ['Connect the reference system', 'Channel mapping'], ['Verify reference equipment', 'Calibrated'], ['Stabilise', 'Warm-up'],
    ['Apply reference voltage and current', 'Controlled'], ['Calibrate channels', 'Approved procedure'], ['Store coefficients', 'Protected'],
    ['Verify independent points', 'Accuracy'], ['Verify each phase or output', 'No mismatch'], ['Verify power and energy', 'Declared limits'],
    ['Compare reported values', 'Units and scaling'], ['Save results', 'Traceable']]],
  ['Charging control and electrical safety', 'Every charger is tested with a vehicle simulator. A commanded switching state is not the same as actual isolation; welded contacts are detected.', [
    ['Scan charger identity', 'Test recipe'], ['Verify input and output wiring', 'Phase arrangement'], ['Test protective earth', 'Approved'],
    ['Insulation and dielectric tests', 'Separation'], ['Controlled power-up', 'No abnormal behaviour'], ['Simulate vehicle connection states', 'Recognition'],
    ['Verify control pilot signal', 'Level, waveform and current advertisement'], ['Verify cable capability detection', 'Current limit'], ['Test connector locking', 'Sequence'],
    ['Request charging', 'Contactor sequence'], ['Verify actual output energisation', 'Physical result'], ['Apply a controlled load', 'Stable'],
    ['Change the allowed current', 'Advertised limit'], ['Stop charging', 'Controlled disconnection'], ['Simulate vehicle disconnection', 'Response'],
    ['Inject residual current test signals', 'Integrated protection'], ['Simulate contactor faults', 'Detection and response'], ['Test temperature controls', 'Derating or shutdown'],
    ['Test loss of control signals', 'Safe behaviour'], ['Test supply interruption', 'Restart state'], ['Run the loaded thermal test', 'Temperatures'],
    ['Inspect after testing', 'No damage'], ['Save acceptance results', 'Serial-linked'], ['Divert failed units', 'Repair and retest']]],
  ['Verify EMON, app and OCPP', 'Messages and actual charger behaviour are both checked. OCPP implementation and OCPP certification are separate claims, published per product.', [
    ['Commission in a test environment', 'Onboarding'], ['Verify device and connector identity', 'Backend association'], ['Test authorisation', 'Permitted and rejected'],
    ['Start a session', 'Transaction record'], ['Verify status reporting', 'Physical and reported agree'], ['Verify meter reporting', 'Values and timestamps'],
    ['Apply a charging limit', 'Control response'], ['Simulate solar surplus', 'EMON behaviour'], ['Simulate tariff scheduling', 'Start and stop policy'],
    ['Simulate site capacity limits', 'Load allocation'], ['Test multiple chargers', 'Coordinated'], ['Stop the session remotely', 'Completion'],
    ['Interrupt internet', 'Offline operation'], ['Interrupt the local controller', 'Fallback'], ['Restore communication', 'Recovery and reconciliation'],
    ['Test supported backend commands', 'Responses'], ['Verify authorised updates', 'Verification and recovery'], ['Remove factory accounts', 'Customer-ready']]],
  ['Qualification and audit tests', 'Model-specific plan alongside routine acceptance.', [
    ['Temperature rise', 'Sustained charging'], ['Protective functions', 'Fault conditions'], ['Switching endurance', 'Contactors and relays'],
    ['Connector endurance', 'Connection and locking'], ['Cable retention and bending', 'Durability'], ['Reel cycling', 'COIL mechanism and wiring'],
    ['Moisture and ingress', 'Declared exposure'], ['Impact and structural loads', 'Enclosure and mounting'], ['Corrosion and UV', 'Outdoor materials'],
    ['EMC and radio', 'Emissions, immunity and communication'], ['Vehicle interoperability', 'Representative vehicles'], ['OCPP interoperability', 'Released implementation'],
    ['Security and updates', 'Access, credentials and recovery'], ['Packaging', 'Transport protection']], 'nonum'],
  ['Finish and release', 'Hardware is linked to its factory test record.', [
    ['Clean the exterior', 'No residue'], ['Inspect enclosure and connector', 'No damage'], ['Verify seals and covers', 'Assembly'],
    ['Apply rating and installation labels', 'Model and ratings'], ['Apply serial and QR', 'Durable'], ['Verify NFC', 'Association'],
    ['Review test and calibration records', 'Accepted'], ['Verify software configuration', 'Approved release'], ['Set the shipping state', 'Commissioning condition'],
    ['Authorise factory release', 'Quality approval']]],
  ['Robotic packing', 'Compact robots for WISP; supported tooling for long pedestals and heavy bollards.', [
    ['Scan the released charger', 'Unapproved blocked'], ['Select the packing recipe', 'Model and kit'], ['Erect the carton or pallet base', 'Approved packaging'],
    ['Insert bottom supports', 'Load-bearing locations'], ['Apply surface protection', 'No scratches'], ['Present in the pickup fixture', 'Orientation'],
    ['Engage gripper or cradle', 'Structural surfaces'], ['Verify secure pickup', 'Feedback'], ['Transfer into the package', 'Controlled'],
    ['Arrange charging cable', 'Bend radius'], ['Protect the vehicle connector', 'No impact or contamination'], ['Insert mounting hardware', 'Kit'],
    ['Insert keys or access parts', 'Controlled allocation'], ['Insert documents', 'Language and revision'], ['Verify kit completeness', 'Scanning, vision and weight'],
    ['Fit top and side protection', 'No movement'], ['Close and seal', 'Approved closure'], ['Apply package identification', 'Model, serial and handling'],
    ['Check weight and labels', 'Accepted'], ['Release to palletising', 'Record complete']]],
  ['Dispatch and installation records', 'Factory release and site commissioning are distinct, linked records.', [
    ['Palletise', 'Stable load'], ['Secure and label the pallet', 'Traceable'], ['Verify quantities', 'Complete order'],
    ['Record dispatch', 'Carrier, destination and serials'], ['Inspect on arrival', 'Transport condition'], ['Verify site supply and mounting', 'Appropriate to model'],
    ['Install and complete electrical checks', 'Site acceptance'], ['Commission app, EMON and backend', 'Configuration'], ['Verify site load management', 'Meter and charging integration'],
    ['Complete a charging session', 'Functional verification'], ['Record installation and tests', 'Device-linked evidence'], ['Generate the handover file', 'Configuration, checks, maintenance and warranty']]]
], records: [
  ['Product identity', 'Family, model, hardware revision and serial'], ['Moulded parts', 'Resin, mould, cavity and inspection batch'],
  ['Metalwork', 'Materials, fabrication and finish'], ['Electronics', 'Board identities and tests'],
  ['Power components', 'Contactors, protection, sensors and terminals'], ['Cable assembly', 'Type and test records'],
  ['Metering', 'Calibration and verification'], ['Charging tests', 'Vehicle simulation, switching and protection'],
  ['Software', 'Firmware, configuration and provisioning'], ['Connectivity', 'EMON and OCPP checks'],
  ['Factory release', 'Quality authorisation'], ['Packaging', 'Accessories, package and pallet'],
  ['Installation', 'Supply, mounting, commissioning and backend'], ['Service', 'Faults, updates, repairs and replacements']
] };
