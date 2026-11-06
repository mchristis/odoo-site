// XOOM (Use energy) part 1. Source: user brief 23 Oct 2026; responsibility table omitted; supplier wording neutralised.
window.EM_XOOM_A = { phases: [
  ['Production routes', 'WISP, COIL, POST, STUMP, PAVE and LUMO share electronics but need very different mechanical construction. The main sequence covers AC equipment.', [
    ['Plastic injection moulding', 'Housings, covers, supports, buttons, light guides and connector surrounds'], ['Metal fabrication', 'Pedestals, bollards, mounting plates, pavement frames and lamp-post interfaces'],
    ['SMT electronics', 'Charging controller, sensing, communication and auxiliary power boards'], ['Power assembly', 'Contactors, terminals, current paths, protection and metering'],
    ['Cables and connectors', 'Charging cables, sockets, harnesses and strain relief'], ['Mechanical assembly', 'Product-specific enclosure and mounting'],
    ['Software and testing', 'Firmware, calibration, charging simulation, protection and backend'], ['Packaging', 'Product kits, serial verification and shipment']], 'nonum'],
  ['Engineering before tooling', 'Each family has a released specification before production.', [
    ['Define the product model', 'Family and variant'], ['Define AC or DC charging', 'Electrical architecture'],
    ['Define supply and output ratings', 'Voltage, phases, current and power'], ['Define the vehicle connection', 'Socket or tethered cable'],
    ['Define the charging control interface', 'Vehicle communication'], ['Define switching architecture', 'Contactors or relays'],
    ['Define protective functions', 'Product and installation protection'], ['Define metering', 'Quantities, accuracy and use'],
    ['Define thermal management', 'Passive or additional cooling'], ['Define environmental exposure', 'Temperature, moisture and impact'],
    ['Define mechanical mounting', 'Wall, pedestal, bollard, pavement or lamp-post'], ['Define cable handling', 'Storage, reach and strain'],
    ['Define local operation', 'Behaviour without internet or backend'], ['Define OCPP version and functions', 'Explicit scope'],
    ['Define EMON coordination', 'Solar, tariffs and load management'], ['Release drawings and bill of materials', 'Controlled revisions'],
    ['Define production tests', 'Model-specific limits'], ['Validate prototypes', 'Electrical, mechanical, thermal and software'],
    ['Complete qualification', 'Safety, EMC, radio and environmental'], ['Run pilot production', 'Repeatability'], ['Authorise serial production', 'Approved hardware, software and instructions']]],
  ['Design and make the plastic moulds', 'Tooling preserves sealing, electrical separation and component positions.', [
    ['Review mouldability', 'Walls, ribs, draft'], ['Define PCB supports', 'Stable mounting'], ['Define electrical barriers', 'Insulating geometry'],
    ['Define terminal and contactor supports', 'Retention'], ['Define gasket grooves', 'Seal compression'], ['Define connector openings', 'Alignment'],
    ['Define light guide and button interfaces', 'Operation'], ['Define antenna and identification locations', 'RF, QR and NFC'],
    ['Design gates and runners', 'Filling'], ['Design cooling and ejection', 'Distortion control'], ['Add cavity identification', 'Traceability'],
    ['Machine mould components', 'Precision tooling'], ['Heat treat and finish', 'Durability'], ['Assemble and inspect the mould', 'Operation'],
    ['Run mould trials', 'First samples'], ['Measure critical dimensions', 'Drawing compliance'], ['Trial-fit electronics, connectors and seals', 'Assembly'],
    ['Correct tooling', 'Defects resolved'], ['Approve reference samples', 'Standard'], ['Release the tooling', 'Maintenance plan']]],
  ['Injection-mould plastic parts', 'Material per part location and function.', [
    ['Receive resin', 'Grade and batch'], ['Review material documentation', 'Thermal, electrical and outdoor properties'], ['Verify colour and additives', 'Approved recipe'],
    ['Store and dry where required', 'Specified conditions'], ['Install the qualified mould', 'Tool identity'], ['Load the recipe', 'Controlled settings'],
    ['Purge previous material', 'No contamination'], ['Produce start-up samples', 'Stable output'], ['Approve start-up inspection', 'Dimensions and appearance'],
    ['Inject the polymer', 'Filling'], ['Apply holding pressure', 'Packing'], ['Cool the part', 'Defined cycle'], ['Open and eject', 'No distortion'],
    ['Remove parts robotically', 'Protected'], ['Trim gates', 'Clean edges'], ['Install inserts', 'Controlled insertion'],
    ['Inspect dimensions and appearance', 'Accepted'], ['Record material and cavity', 'Traceable'], ['Pack in protective trays', 'No damage']]],
  ['Metal enclosures and supports', 'POST, STUMP, PAVE and LUMO need their own metalwork and structural checks.', [
    ['Receive sheet, tube or profiles', 'Material and batch'], ['Cut blanks and members', 'Dimensions'], ['Punch or machine openings', 'Interfaces'],
    ['Bend and form', 'Geometry'], ['Make mounting plates and baseplates', 'Fastening positions'], ['Join components', 'Welding or mechanical assembly'],
    ['Inspect welds', 'Acceptance'], ['Deburr edges', 'Cables and installers protected'], ['Prepare bonding points', 'Conductive interfaces'],
    ['Clean and pretreat', 'Finish preparation'], ['Apply corrosion protection and finish', 'Exposure-appropriate'], ['Inspect coating and dimensions', 'Accepted'],
    ['Make locks and service doors', 'Access and retention'], ['Trial-fit covers, seals and equipment', 'Assembly'], ['Identify and release', 'Traceable']]],
  ['SMT electronics', 'Boards are identified and tested individually before final assembly.', [
    ['Receive bare PCBs', 'Revision and batch'], ['Receive components', 'Identity and condition'], ['Store sensitive components', 'ESD and moisture'],
    ['Load the production order', 'Bill of materials'], ['Verify feeders', 'Barcode-controlled'], ['Load PCB panels', 'Automatic loader'],
    ['Read or apply board identity', 'Traceability'], ['Print solder paste', 'Stencil printer'], ['Inspect paste', 'Solder paste inspection'],
    ['Place components', 'Pick-and-place'], ['Reflow solder', 'Validated profile'], ['Inspect boards', 'AOI'], ['Inspect hidden joints', 'X-ray'],
    ['Assemble the second side', 'Approved sequence'], ['Insert terminals and large parts', 'Controlled'], ['Through-hole soldering', 'Approved process'],
    ['Inspect soldering and clearances', 'Accepted'], ['Clean where required', 'Compatible'], ['Separate boards', 'Depaneling'],
    ['Circuit tests', 'Electrical fixture'], ['Program initial firmware', 'Controlled release'], ['Test controller functions', 'Processor, sensing, outputs and interfaces'],
    ['Apply coating', 'Masking and curing'], ['Rework and retest', 'Documented'], ['Release boards', 'Test status']]],
  ['Power and protection assembly', 'Vehicle signalling, contactor control, metering and residual current detection are tested together.', [
    ['Verify component ratings', 'Model configuration'], ['Install supply terminals', 'Secure'], ['Install contactors or relays', 'Approved switching'],
    ['Install metering sensors', 'Position and polarity'], ['Install residual current sensing', 'Conductor arrangement'], ['Install protection components', 'Ratings and connections'],
    ['Install auxiliary power supply', 'Isolation and mounting'], ['Install conductors or busbars', 'Cross-section and routing'], ['Complete power connections', 'Controlled fastening'],
    ['Install thermal sensors', 'Defined locations'], ['Connect protective earth', 'Continuous path'], ['Install insulating barriers', 'Separation'],
    ['Inspect current paths', 'No loose strands'], ['Verify fastening results', 'Recorded'], ['Test the subassembly', 'Faults found before closure']]],
  ['Cables and charging interfaces', 'Cables and sockets are checked on arrival and after integration.', [
    ['Select the approved cable', 'Current and environmental rating'], ['Cut to length', 'Model-specific reach'], ['Prepare conductor ends', 'No damage'],
    ['Crimp or join terminals', 'Validated process'], ['Assemble connector contacts', 'Pin assignment'], ['Fit housings and strain relief', 'Retention'],
    ['Overmould where specified', 'Controlled'], ['Install temperature sensing', 'Position'], ['Test continuity and pins', 'Connections'],
    ['Insulation tests', 'Accepted'], ['Retention checks', 'Strength'], ['Inspect finish and seals', 'No damage'], ['Identify and release', 'Traceable']]]
] };
