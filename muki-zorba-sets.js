// DEPTH-1058: MUKI ZORBA proposed standard sets (source: uploads MUKI_zorba.docx, 28 Oct 2026). Proposed, under development.
const sets = [
  { id: "UK-3.68kVA", market: "UK single-phase", ceil: ["3,68", "kVA"], batt: ["16,08", "kWh"], mods: "1", hp: ["5", "kW"], dhw: ["300", "L"], buf: ["70", "L"] },
  { id: "BE-5kVA", market: "BE single-phase", ceil: ["5", "kVA"], batt: ["16,08", "kWh"], mods: "1", hp: ["6", "kW"], dhw: ["300", "L"], buf: ["70", "L"] },
  { id: "NL-6kVA", market: "NL single-phase", ceil: ["6", "kVA"], batt: ["32,15", "kWh"], mods: "2", hp: ["8", "kW"], dhw: ["300", "L"], buf: ["70", "L"] },
  { id: "3P-10kVA", market: "Three-phase", ceil: ["10", "kVA"], batt: ["32,15", "kWh"], mods: "2", hp: ["10", "kW"], dhw: ["300", "L"], buf: ["70", "L"] },
  { id: "3P-15kVA", market: "Three-phase", ceil: ["15", "kVA"], batt: ["48,23", "kWh"], mods: "3", hp: ["12", "kW"], dhw: ["300", "L"], buf: ["70", "L"] },
  { id: "3P-20kVA", market: "Three-phase", ceil: ["20", "kVA"], batt: ["64,31", "kWh"], mods: "4", hp: ["14", "kW"], dhw: ["300", "L"], buf: ["70", "L"] },
];
const label = (s) => s.market + " · " + s.ceil.join(" ");
export default { sets, label };
