// TOGU (Build and connect) part 1. Source: user brief 23 Oct 2026; responsibility table and manufacturer references omitted.
window.EM_TOGU_A = { phases: [
  ['Production routes per family', 'Sixteen families, each with its own specification and inspection plan. The finished electrical assembly is verified beyond its individual parts.', [
    ['GROUND', 'Copper drawing and stranding, insulation extrusion, rods, clamp forming and machining'], ['DC Solar Cable', 'Drawing, annealing, tinning, stranding, insulation and sheath extrusion, crosslinking'],
    ['CONNECT', 'Contacts, plastic moulding, sealing, crimping and harness assembly'], ['Wire-mesh Tray', 'Wire preparation, resistance welding, forming and surface treatment'],
    ['Metal Cable Tray', 'Punching, roll forming, bending and joining'], ['Conduit', 'Polymer extrusion, sizing, cooling and corrugation'],
    ['Trunking', 'Profile extrusion, covers and moulded fittings'], ['FIX', 'Injection moulding, stamping, forming and supports'],
    ['Distribution Boxes', 'Enclosures, machining and optional electrical assembly'], ['MOUNT', 'DIN rail forming, plates and moulded accessories'],
    ['ENTRY', 'Moulding, metal machining, seals and assembly'], ['TERMINAL', 'Conductive forming, springs, moulding and assembly'],
    ['SWITCH', 'Contact systems, insulation moulding, mechanisms and electrical testing'], ['PROTECT', 'Fuses, fuse holders and surge protection'],
    ['LABEL', 'Printing, laser marking, converting and data verification'], ['Consumables', 'Moulding, metal forming, extrusion and formulation per product']], 'nonum'],
  ['Release specifications', 'Every article has its own controlled technical definition.', [
    ['Assign article code and revision', 'Unique identity'], ['Define intended application', 'Solar, battery, AC, communication or earth'],
    ['Define electrical ratings', 'Voltage, current and conditions'], ['Define mechanical requirements', 'Dimensions, loads and interfaces'],
    ['Define environmental requirements', 'Temperature, moisture, UV and corrosion'], ['Select materials', 'Approved grades'],
    ['Define installation interfaces', 'Cable range, threads, rails and mating parts'], ['Define compatible combinations', 'Explicit product matrix'],
    ['Release drawings and bill of materials', 'Production package'], ['Define tooling and work instructions', 'Repeatable'],
    ['Define routine and qualification tests', 'Product-specific'], ['Approve prototypes and pilot production', 'Verified']]],
  ['Copper conductors', 'For solar cable, grounding conductors and internal wiring.', [
    ['Receive copper rod or wire', 'Grade and batch'], ['Verify material documentation', 'Composition and conductivity'], ['Inspect incoming material', 'No contamination'],
    ['Draw wire through dies', 'Diameter'], ['Control drawing lubrication', 'Surface'], ['Anneal', 'Flexibility'],
    ['Clean the wire', 'Residues removed'], ['Tin where specified', 'Coating'], ['Inspect diameter and coating', 'Limits'],
    ['Strand into conductors', 'Construction'], ['Verify strand count and lay', 'Geometry'], ['Measure conductor resistance', 'Electrical acceptance'],
    ['Test mechanical properties', 'Strength and elongation'], ['Identify conductor batches', 'Traceable']]],
  ['Extrude and finish DC solar cable', 'Insulation and crosslinking match the qualified construction. A cable type name does not by itself establish fire class, burial or water-contact rating.', [
    ['Receive compounds', 'Formulation and batch'], ['Verify storage and preparation', 'Specified conditions'], ['Prepare extrusion tooling', 'Size and layers'],
    ['Feed the conductor', 'Tension'], ['Extrude insulation', 'Thickness and concentricity'], ['Apply the sheath', 'Construction'],
    ['Cool the cable', 'Stability'], ['Monitor outside diameter', 'Limits'], ['Check insulation continuity', 'Inline test'],
    ['Crosslink', 'Qualified process'], ['Verify crosslinking', 'Sample tests'], ['Print identification', 'Type, size, rating, batch and length'],
    ['Measure conductor resistance', 'Acceptance'], ['Voltage and insulation tests', 'Construction'], ['Inspect layers and surface', 'No defects'],
    ['Wind onto drums or coils', 'Tension and bend radius'], ['Verify supplied length', 'Calibrated'], ['Seal ends and label', 'Traceable']]],
  ['Grounding products', 'Conductors, electrodes and clamps each have their own controls.', [
    ['Produce or receive conductors', 'Construction'], ['Extrude insulation', 'Thickness and identification'], ['Make earth rods', 'Material and geometry'],
    ['Apply copper bonding or treatment', 'Qualified construction'], ['Machine rod ends and couplings', 'Fit'], ['Stamp, forge or machine clamps', 'Dimensions'],
    ['Produce bonding straps and links', 'Conductive section'], ['Fit terminals or lugs', 'Termination'], ['Inspect coatings and interfaces', 'Corrosion protection'],
    ['Verify mechanical retention', 'Test plan'], ['Verify connection resistance', 'Defined checks'], ['Identify and pack grounding kits', 'Complete']]],
  ['CONNECT housings and contacts', 'A qualified system of contacts, housings, seals, cable and tooling. Physical mating does not prove compatibility; only same-family approved combinations are used.', [
    ['Release connector drawings', 'Mating system'], ['Select conductive alloys', 'Properties'], ['Stamp or machine contacts', 'Dimensions'],
    ['Form spring contact features', 'Engagement'], ['Apply plating', 'Surface'], ['Make housing moulds', 'Qualified tooling'],
    ['Injection-mould housings', 'Polymer and geometry'], ['Make seals', 'Elastomer and dimensions'], ['Inspect contacts and housings', 'Mating interfaces'],
    ['Assemble connectors', 'Sequence'], ['Verify locking and retention', 'Mechanical behaviour'], ['Electrical checks', 'Contact system'], ['Record approved mating combinations', 'Compatibility record']]],
  ['Cables and harnesses', 'Every harness gets identity, continuity and polarity checks.', [
    ['Select approved cable and connectors', 'Combination'], ['Cut cable lengths', 'Drawing'], ['Strip insulation', 'No conductor damage'],
    ['Prepare crimp tooling', 'Die and settings'], ['Crimp contacts or lugs', 'Validated process'], ['Check crimp dimensions', 'Accepted'],
    ['Scheduled pull tests', 'Retention'], ['Insert contacts into housings', 'Full engagement'], ['Fit seals and glands', 'Approved method'],
    ['Apply circuit and polarity labels', 'Identification'], ['Test continuity and pin assignment', 'No open or crossed circuits'], ['Insulation tests', 'Construction'],
    ['Inspect the harness', 'No damage'], ['Record components and results', 'Traceability']]],
  ['Wire-mesh trays', 'Spot-welded steel wire, formed and surface-treated.', [
    ['Receive wire', 'Material and diameter'], ['Straighten and cut', 'Lengths'], ['Position wires', 'Grid spacing'],
    ['Resistance-weld intersections', 'Controlled'], ['Inspect welds', 'Attachment'], ['Form tray sides', 'Width and height'],
    ['Finish wire ends', 'No sharp points'], ['Make junctions and accessories', 'System'], ['Apply corrosion protection', 'Finish'],
    ['Inspect dimensions and coating', 'Accepted'], ['Load and weld checks', 'Performance'], ['Identify and bundle', 'Traceable']]],
  ['Metal trays and ladders', 'Perforated, solid-bottom and ladder products use distinct tooling.', [
    ['Receive sheet, coil or profiles', 'Grade and thickness'], ['Punch perforations and slots', 'Pattern'], ['Roll-form or bend sections', 'Geometry'],
    ['Cut lengths', 'Dimensions'], ['Make side rails and rungs', 'Sections'], ['Join ladders', 'Welding or fastening'],
    ['Form covers, bends, tees and reducers', 'Accessories'], ['Deburr edges', 'Cable protection'], ['Apply surface treatment', 'Corrosion protection'],
    ['Inspect dimensions and joints', 'Accepted'], ['Verify load performance', 'Span and loading'], ['Verify continuity where claimed', 'Tested configuration'], ['Mark and bundle', 'Identity']]]
] };
