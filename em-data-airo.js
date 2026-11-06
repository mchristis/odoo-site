// AIRO (Use energy) part 1. Source: user brief 23 Oct 2026; responsibility table and supplier references omitted.
window.EM_AIRO_A = { phases: [
  ['Production routes', 'AIRO controls the complete air path, not only fans in a housing: leakage, filter bypass, imbalance, condensate and sensor errors are all checked.', [
    ['SHIFT', 'Reversible fan, regenerative heat storage core, wall sleeve, filters and coordinated controls'], ['SWAP', 'Separate supply and extract paths, fans, recovery exchanger, filters and controls'],
    ['FLOW', 'Central MVHR casing, insulated air paths, fans, recovery core, drainage and duct connections'], ['WAVE', 'Larger in-room unit, filtration, acoustic treatment and controls'],
    ['GUST', 'Ventilation plus heat-pump refrigeration circuit and condensate management'], ['ROUTE', 'Ducts, plenums, fittings, seals, terminals and balancing parts'],
    ['CONTROL', 'Sensors, user interfaces, control boards and communication']], 'nonum'],
  ['Engineering before production', 'Every model gets a controlled air-path and component specification.', [
    ['Define the product model', 'Family and variant'], ['Define the ventilation principle', 'Regenerative or continuous separate-flow'],
    ['Define airflow requirements', 'Rated flow at specified pressure'], ['Define supply and extract paths', 'Circuit separation'],
    ['Select recovery technology', 'Core construction'], ['Select fans and motors', 'Duty and control'],
    ['Select filters', 'Filtration and pressure characteristics'], ['Define leakage limits', 'Internal and external'],
    ['Define thermal insulation', 'Material and thickness'], ['Define acoustic construction', 'Fan isolation, casing and attenuation'],
    ['Define bypass operation', 'Airflow route'], ['Define frost protection', 'Model strategy'],
    ['Define condensate handling', 'Drainage and orientation'], ['Define sensing', 'Temperature, humidity, CO₂, particles or airflow'],
    ['Define electrical protection', 'Construction'], ['Define local controls', 'Operation without remote services'],
    ['Define EMON functions', 'Measurements and commands'], ['Release drawings and bill of materials', 'Controlled revisions'],
    ['Define production tests', 'Model-specific limits'], ['Validate prototypes and pilot production', 'Accepted'], ['Authorise serial production', 'Approved package']]],
  ['Design and make the plastic moulds', 'Tooling preserves air-path geometry, sealing and service access.', [
    ['Review mouldability', 'Walls, ribs and draft'], ['Define fan and core supports', 'Positioning'], ['Define filter frame interfaces', 'Sealing'],
    ['Define gasket grooves', 'Compression'], ['Define grille geometry', 'Opening area'], ['Define covers and clips', 'Repeatable access'],
    ['Define sensor and electronics supports', 'Locations'], ['Design gates, runners and vents', 'Filling'], ['Design cooling and ejection', 'Distortion'],
    ['Add cavity identification', 'Traceability'], ['Make mould components', 'Precision machining'], ['Assemble and inspect tooling', 'Operation'],
    ['Run mould trials', 'First samples'], ['Measure critical dimensions', 'Compliance'], ['Trial-fit fans, filters, cores and seals', 'Assembly'],
    ['Correct tooling', 'Defects'], ['Approve reference samples', 'Standard'], ['Release the mould', 'Maintenance plan']]],
  ['Injection-mould housings and fittings', 'Different parts may use different polymers.', [
    ['Receive resin', 'Grade and batch'], ['Review material documentation', 'Properties'], ['Prepare material', 'Specified conditioning'],
    ['Install the qualified mould', 'Tool'], ['Load the recipe', 'Settings'], ['Purge previous material', 'No contamination'],
    ['Produce start-up samples', 'Stable'], ['Approve start-up output', 'Geometry'], ['Inject the polymer', 'Filling'],
    ['Hold and cool', 'Cycle'], ['Eject and remove', 'Robot or controlled'], ['Trim gates', 'Clean edges'],
    ['Inspect dimensions and appearance', 'Accepted'], ['Check sealing and mating features', 'Fit'], ['Record batch and cavity', 'Traceable'], ['Protect parts in storage', 'No distortion']]],
  ['Insulated internal air paths', 'Where AIRO uses expanded polypropylene (EPP), it is steam-chest moulded, a different process from solid plastic moulding.', [
    ['Release the air-path geometry', 'Channels and partitions'], ['Specify foam grade and density', 'Insulation and mechanics'],
    ['Design steam-chest tools', 'Filling, venting and release'], ['Make and trial the tools', 'Sample shells'],
    ['Prepare the EPP beads', 'Material condition'], ['Fill the mould', 'Bead distribution'], ['Fuse the beads', 'Component formation'],
    ['Cool and demould', 'No distortion'], ['Condition the parts', 'Stabilisation'], ['Inspect fusion and surface', 'No voids'],
    ['Measure core and fan interfaces', 'Fit'], ['Inspect separating walls', 'Continuous separation'], ['Trial-assemble shell sections', 'Sealing'], ['Release components', 'Traceable']]],
  ['Metal casings and supports', 'For larger units and mounting systems.', [
    ['Receive sheet and profiles', 'Material'], ['Cut blanks', 'Dimensions'], ['Produce duct and service openings', 'Positions'],
    ['Bend casing panels', 'Geometry'], ['Make mounting brackets', 'Load interfaces'], ['Join assemblies', 'Welding or fastening'],
    ['Deburr edges', 'Safe handling and wiring'], ['Clean and pretreat', 'Finish preparation'], ['Apply corrosion protection', 'Approved process'],
    ['Inspect finish and dimensions', 'Accepted'], ['Check doors and removable panels', 'Access'], ['Identify and release', 'Traceable']]],
  ['Recovery cores', 'SHIFT uses a regenerative storage core; continuous-flow units use plate or enthalpy cores. A core efficiency figure is not the performance of the whole unit.', [
    ['Regenerative core (SHIFT)', 'Storage material, flow channels, curing or firing where applicable, integrity check, seals and supports'],
    ['Recuperative plate core', 'Plates or layers stacked, edges joined and sealed, framed, channel geometry and leakage inspected'],
    ['Enthalpy core where specified', 'Membrane and spacers assembled and sealed under controlled conditions; leakage and transfer verified'],
    ['Acceptance of every core', 'Identity, channels, dimensions, pressure loss, leakage, performance evidence, perimeter seals and batch']], 'nonum'],
  ['Fans and filter assemblies', 'Incoming condition verified, then tested in the complete unit.', [
    ['Make or receive impellers', 'Geometry and material'], ['Assemble motors and impellers', 'Alignment'], ['Balance rotating assemblies', 'Vibration limits'],
    ['Test motor operation', 'Speed and electrical behaviour'], ['Verify fan identity', 'Airflow duty'], ['Fit vibration isolators', 'Support'],
    ['Receive filter media', 'Specified grade'], ['Cut and pleat media', 'Geometry'], ['Assemble filter frames', 'Dimensions'],
    ['Seal media to frames', 'No bypass'], ['Fit perimeter gaskets', 'Retention'], ['Inspect filter condition', 'No tears'],
    ['Verify pressure loss and filtration', 'Approved testing'], ['Mark flow direction and identity', 'Installation'], ['Protect before assembly', 'No contamination']]],
  ['SMT controls and sensor boards', 'Sensors are handled per component instructions; contamination affects readings.', [
    ['Receive PCBs and components', 'Identity and batch'], ['Store sensitive components', 'ESD and moisture'], ['Load the SMT recipe', 'Board revision'],
    ['Verify feeders', 'Scanned setup'], ['Print solder paste', 'Stencil'], ['Inspect paste', 'SPI'], ['Place components', 'Pick-and-place'],
    ['Reflow solder', 'Validated profile'], ['Inspect boards', 'Optical'], ['Inspect hidden joints', 'Additional inspection'],
    ['Fit terminals and large parts', 'Soldering'], ['Circuit tests', 'Electrical operation'], ['Program firmware', 'Controlled release'],
    ['Test fan and actuator outputs', 'Control'], ['Test sensor interfaces', 'Readings and fault detection'], ['Apply coating', 'Sensing elements excluded'],
    ['Rework and retest', 'Controlled'], ['Release electronics', 'Test status']]]
] };
