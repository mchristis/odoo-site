// OGO (Use energy) part 1. Source: user brief 23 Oct 2026; responsibility table and manufacturer references omitted.
window.EM_OGO_A = { phases: [
  ['Product variants', 'Three coordinated processes: a potable-water pressure vessel, a heat-pump refrigeration assembly and the controls. Each variant has its own bill of materials and test recipe.', [
    ['Heat-pump water heater', 'Potable-water tank, refrigeration circuit, fan, insulation and controls'], ['With resistance backup', 'Plus immersion element and protection'],
    ['Electric storage water heater', 'Tank, insulation, immersion element and controls'], ['Direct PV version', 'PV input, MPPT power stage and heating interface; PV heats the element, not the compressor'],
    ['Surplus diversion version', 'Grid-connected power control with external surplus measurement'], ['Additional heat exchanger', 'Internal coil for an external heat source']], 'nonum'],
  ['Engineering before production', 'Water, refrigerant, air and electrical circuits are set before production.', [
    ['Define the OGO model', 'Capacity and configuration'], ['Define hot-water requirements', 'Operating envelope'], ['Select tank construction', 'Stainless or protected steel'],
    ['Define pressure and temperature ratings', 'Vessel limits'], ['Define corrosion protection', 'Material strategy'], ['Define condenser arrangement', 'Heat transfer interface'],
    ['Select compressor and refrigerant', 'Operating envelope'], ['Select evaporator and fan', 'Thermal and airflow duty'], ['Define air source and duct options', 'Installation'],
    ['Define condensate management', 'Collection and discharge'], ['Define insulation', 'Standing-loss performance'], ['Select immersion element', 'Voltage and power'],
    ['Define controls and independent protection', 'Safety architecture'], ['Define solar input', 'Direct PV or surplus diversion'], ['Define EMON functions', 'Scheduling, limits and fallback'],
    ['Define hygiene programme', 'Destination configuration'], ['Release drawings and bill of materials', 'Controlled revisions'], ['Define production tests', 'Limits and sequence'],
    ['Validate prototypes and pilot production', 'Accepted'], ['Authorise serial production', 'Approved package']]],
  ['Receive and inspect materials', 'Pressure-bearing and safety-critical parts stay traceable.', [
    ['Receive tank material', 'Grade, thickness and batch'], ['Review material documentation', 'Properties'], ['Receive compressor and exchangers', 'Models'],
    ['Inspect refrigeration components', 'No damage or contamination'], ['Verify tubing and fittings', 'Dimensions and ratings'], ['Receive insulation materials', 'Specification and shelf life'],
    ['Receive plastic parts and jackets', 'Revision and finish'], ['Receive control boards', 'Test status'], ['Receive elements and protection devices', 'Ratings'],
    ['Receive seals and water-contact parts', 'Approved materials'], ['Inspect harnesses and terminals', 'Construction'], ['Segregate rejected materials', 'Quality hold'], ['Release accepted components', 'Inventory']]],
  ['Fabricate the water tank', 'Follows the approved material and construction.', [
    ['Cut shell blanks', 'Dimensions'], ['Form the shell', 'Diameter'], ['Form or receive ends', 'Geometry'], ['Prepare weld edges', 'Joint preparation'],
    ['Weld the shell seam', 'Approved procedure'], ['Weld the ends', 'Alignment'], ['Produce connection openings', 'Locations'], ['Weld connection bosses', 'Construction'],
    ['Fit sensor pockets', 'Depth and position'], ['Fit service flange interfaces', 'Geometry'], ['Install internal coils', 'Connections'], ['Inspect welds', 'Examination'],
    ['Check vessel dimensions', 'Compliance'], ['Clean internal surfaces', 'No contamination'], ['Identify the vessel', 'Traceable']]],
  ['Corrosion protection', 'Enamelled and stainless steel follow different processes.', [
    ['Enamelled steel', 'Surface prepared, enamel applied, dried and fired, coating inspected'], ['Stainless steel', 'Clean welding, surface treatment and cleaning, internal condition verified'],
    ['Anode where designed', 'Sacrificial or powered anode installed and connected'], ['Acceptance', 'Treatment verified, connections and flange areas protected, results recorded']], 'nonum'],
  ['Pressure test and finish the vessel', 'Every vessel gets its production pressure and leakage tests.', [
    ['Connect to the test station', 'Fixture'], ['Verify test equipment', 'Reference checks'], ['Fill and prepare', 'Test condition'],
    ['Apply proof pressure', 'Pressure and duration'], ['Inspect for leakage and deformation', 'Accepted'], ['Test internal circuits', 'Integrity'],
    ['Release pressure safely', 'Controlled'], ['Drain and dry', 'Residual moisture'], ['Inspect after testing', 'No changes'],
    ['Segregate failed vessels', 'Investigation'], ['Release accepted tanks', 'Test record']]],
  ['Condenser and thermal interfaces', 'Per the approved condenser design.', [
    ['Prepare the exchanger interface', 'Surface condition'], ['Position the condenser', 'Geometry'], ['Secure thermal contact', 'Contact construction'],
    ['Join refrigerant connections', 'Approved process'], ['Install supports', 'No rubbing'], ['Inspect the interface', 'No gaps or damage'],
    ['Verify refrigerant and water separation', 'Design construction'], ['Identify the condenser', 'Traceable']]],
  ['Insulation and jacket', 'Coverage around connections matters as much as thickness.', [
    ['Place the tank in the fixture', 'Positioning'], ['Protect openings and connections', 'No intrusion'], ['Fit the jacket or mould', 'Alignment'],
    ['Verify insulation materials', 'Batch and condition'], ['Meter and mix foam', 'Formulation'], ['Inject or apply insulation', 'Coverage'],
    ['Allow expansion and curing', 'Conditions'], ['Remove fixtures and trim', 'Clean interfaces'], ['Inspect fill', 'No voids'],
    ['Check service access', 'Maintainable'], ['Verify jacket dimensions and finish', 'Accepted'], ['Scheduled insulation audits', 'Consistency']]],
  ['Plastic covers and air guides', 'The upper heat-pump module is designed around airflow, vibration and service.', [
    ['Release drawings', 'Geometry'], ['Select grades', 'Thermal and mechanical'], ['Design injection moulds', 'Gates, cooling and ejection'],
    ['Make and trial tooling', 'Samples'], ['Verify fit with fan and refrigeration', 'Assembly'], ['Prepare resin', 'Traceable'],
    ['Injection-mould', 'Controlled'], ['Remove robotically', 'No distortion'], ['Trim and inspect', 'Dimensions and finish'],
    ['Fit inserts or seals', 'Retention'], ['Release batches', 'Protected storage']]],
  ['Control and MPPT electronics', 'Solar electronics get their own power stage tests.', [
    ['Receive PCBs and components', 'Identity and batch'], ['Load the SMT recipe', 'Revision'], ['Print solder paste', 'Stencil'], ['Inspect paste', 'SPI'],
    ['Place components', 'Pick-and-place'], ['Reflow', 'Validated profile'], ['Inspect boards', 'Optical'], ['Fit terminals and large parts', 'Soldering'],
    ['Circuit tests', 'Operation'], ['Program firmware', 'Controlled release'], ['Test sensor and control interfaces', 'Response'], ['Assemble MPPT power devices', 'Cooling and fastening'],
    ['Test PV input and regulation', 'PV simulator and load'], ['Verify temperature protection interfaces', 'Independent limits'], ['Apply coating', 'Protection'],
    ['Rework and retest', 'Documented'], ['Release electronics', 'Status']]]
] };
