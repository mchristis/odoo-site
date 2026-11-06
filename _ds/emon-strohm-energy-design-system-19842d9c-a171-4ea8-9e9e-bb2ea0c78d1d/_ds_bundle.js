/* @ds-bundle: {"format":4,"namespace":"EMONSTROHMENERGYDesignSystem_19842d","components":[],"sourceHashes":{"ui_kits/emon/BatteryStatus.jsx":"404cfffe13a0","ui_kits/emon/EnergyPricing.jsx":"88387ed99e88","ui_kits/emon/Shared.jsx":"543c0d0573f6","ui_kits/emon/SolarSetup.jsx":"e424b4b6341f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EMONSTROHMENERGYDesignSystem_19842d = window.EMONSTROHMENERGYDesignSystem_19842d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/emon/BatteryStatus.jsx
try { (() => {
// EMON App — Battery Status Screen
// ui_kits/emon/BatteryStatus.jsx

const BatteryStatus = ({
  soc = 68,
  state = 'protect',
  reserve = 25,
  productColor = COLORS.ando,
  productName = 'FLUXX',
  onNavigate
}) => {
  const fillHeight = Math.round(soc * 0.72); // max fill ~72% of bar height (388px scaled)
  const reserveH = Math.round(reserve * 0.72 * 0.25);
  const stateLabels = {
    charging: 'charging',
    discharging: 'discharging',
    standby: 'standby',
    protect: 'protect'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: COLORS.bgScreen
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "Battery",
    subtitle: "Status",
    productColor: productColor,
    productName: productName
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '0 0 0 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: COLORS.surfaceCard,
      borderRadius: 12,
      width: 245,
      marginTop: 8,
      flex: 1,
      maxHeight: 388,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${fillHeight}%`,
      width: '100%',
      background: COLORS.surfaceCardMid,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${reserveH * 5}px`,
      maxHeight: 48,
      minHeight: 24,
      width: '100%',
      background: COLORS.surfaceWarning,
      borderRadius: '0 0 8px 8px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT,
      fontSize: 11,
      fontWeight: 300,
      color: COLORS.textMuted
    }
  }, "Grid balancing reserve ", reserve, "%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 72,
      fontWeight: 700,
      color: COLORS.textPrimary,
      lineHeight: 1
    }
  }, soc), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 16,
      fontWeight: 400,
      color: COLORS.textPrimary
    }
  }, stateLabels[state])), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT,
      fontSize: 16,
      fontWeight: 300,
      color: COLORS.textPrimary
    }
  }, "SoC"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: COLORS.surfaceCardMid,
      borderRadius: 12,
      padding: '10px 16px',
      marginTop: 8,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 11,
      fontWeight: 300,
      color: COLORS.textSecondary
    }
  }, "Grid import"), /*#__PURE__*/React.createElement(DataValue, {
    value: "1,28",
    unit: "kW",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 28,
      background: COLORS.divider
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 11,
      fontWeight: 300,
      color: COLORS.textSecondary
    }
  }, "Solar"), /*#__PURE__*/React.createElement(DataValue, {
    value: "3,42",
    unit: "kW",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 28,
      background: COLORS.divider
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 11,
      fontWeight: 300,
      color: COLORS.textSecondary
    }
  }, "Home"), /*#__PURE__*/React.createElement(DataValue, {
    value: "860",
    unit: "W",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: COLORS.surfaceCard,
      borderRadius: 12,
      padding: '10px 16px',
      marginTop: 8,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT,
      fontSize: 14,
      fontWeight: 300,
      color: COLORS.textPrimary
    }
  }, "Cell (avg) "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT,
      fontSize: 14,
      fontWeight: 700,
      color: COLORS.textPrimary
    }
  }, "26 \xB0C")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    color: COLORS.surfaceWarning
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT,
      fontSize: 12,
      fontWeight: 300,
      color: COLORS.textMuted
    }
  }, "Safety \xB7 Connection"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement(BtnPrimary, {
    label: "Solar Forecast",
    onClick: () => onNavigate && onNavigate('solar'),
    color: productColor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(BtnSecondary, {
    label: "Energy Pricing",
    onClick: () => onNavigate && onNavigate('pricing')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      display: 'flex',
      flexDirection: 'column',
      borderLeft: `1px solid ${COLORS.divider}`
    }
  }, /*#__PURE__*/React.createElement(MetricCircle, {
    label: "SOH",
    value: "98%",
    color: productColor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: COLORS.divider
    }
  }), /*#__PURE__*/React.createElement(MetricCircle, {
    label: "Voltage",
    value: "403",
    unit: "V",
    color: productColor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: COLORS.divider
    }
  }), /*#__PURE__*/React.createElement(MetricCircle, {
    label: "Current",
    value: "32",
    unit: "A",
    color: productColor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: COLORS.divider
    }
  }), /*#__PURE__*/React.createElement(MetricCircle, {
    label: "Power",
    value: "12",
    unit: "kW",
    color: productColor
  }))), /*#__PURE__*/React.createElement(BottomBar, null));
};
Object.assign(window, {
  BatteryStatus
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/emon/BatteryStatus.jsx", error: String((e && e.message) || e) }); }

// ui_kits/emon/EnergyPricing.jsx
try { (() => {
// EMON App — Energy Pricing Screen + Delete modal
// ui_kits/emon/EnergyPricing.jsx

const ContractCard = ({
  name,
  buyRate,
  sellRate,
  onDelete,
  onEdit
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: COLORS.surfaceCard,
    borderRadius: 12,
    margin: '8px 20px',
    padding: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: FONT,
    fontSize: 16,
    fontWeight: 700,
    color: COLORS.textPrimary
  }
}, name), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: FONT,
    fontSize: 12,
    fontWeight: 300,
    color: COLORS.textSecondary,
    marginTop: 2
  }
}, "Fixed Continuous Plan")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 8
  }
}, /*#__PURE__*/React.createElement("button", {
  onClick: onEdit,
  style: {
    background: COLORS.surfaceSecondary,
    border: 'none',
    borderRadius: 6,
    padding: '4px 12px',
    fontFamily: FONT,
    fontSize: 12,
    fontWeight: 400,
    color: COLORS.textSecondary,
    cursor: 'pointer'
  }
}, "Edit"), /*#__PURE__*/React.createElement("button", {
  onClick: onDelete,
  style: {
    background: COLORS.error,
    border: 'none',
    borderRadius: 6,
    padding: '4px 12px',
    fontFamily: FONT,
    fontSize: 12,
    fontWeight: 400,
    color: '#FFFFFF',
    cursor: 'pointer'
  }
}, "Delete"))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 24,
    marginTop: 10
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: FONT,
    fontSize: 11,
    fontWeight: 300,
    color: COLORS.textMuted
  }
}, "Buying Rate"), /*#__PURE__*/React.createElement(DataValue, {
  value: buyRate,
  unit: "per kWh",
  size: 18
})), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: FONT,
    fontSize: 11,
    fontWeight: 300,
    color: COLORS.textMuted
  }
}, "Selling Rate"), /*#__PURE__*/React.createElement(DataValue, {
  value: sellRate,
  unit: "per kWh",
  size: 18
}))));
const EnergyPricing = ({
  onBack,
  productColor = COLORS.emon,
  productName = 'EMON'
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const [contracts, setContracts] = React.useState([{
    id: 1,
    name: 'Contract Details',
    buyRate: '€ 0,28',
    sellRate: '€ 0,10'
  }]);
  const [pendingDelete, setPendingDelete] = React.useState(null);
  const handleDelete = id => {
    setPendingDelete(id);
    setShowModal(true);
  };
  const confirmDelete = () => {
    setContracts(c => c.filter(x => x.id !== pendingDelete));
    setShowModal(false);
    setPendingDelete(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: COLORS.bgScreen,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "Energy",
    subtitle: "Pricing",
    productColor: productColor,
    productName: productName,
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px',
      fontFamily: FONT,
      fontSize: 14,
      fontWeight: 300,
      color: COLORS.textSecondary
    }
  }, "Contract Management"), /*#__PURE__*/React.createElement(Divider, null), contracts.map(c => /*#__PURE__*/React.createElement(ContractCard, {
    key: c.id,
    name: c.name,
    buyRate: c.buyRate,
    sellRate: c.sellRate,
    onDelete: () => handleDelete(c.id),
    onEdit: () => {}
  })), contracts.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 20px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 18,
      fontWeight: 700,
      color: COLORS.textPrimary
    }
  }, "No contracts"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 14,
      fontWeight: 300,
      color: COLORS.textSecondary,
      marginTop: 8
    }
  }, "Add a contract to enable tariff optimisation.")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(BtnPrimary, {
    label: "Add Second Contract",
    onClick: () => setContracts(c => [...c, {
      id: Date.now(),
      name: 'Second Contract',
      buyRate: '€ 0,32',
      sellRate: '€ 0,12'
    }]),
    color: productColor
  }), /*#__PURE__*/React.createElement(BtnSecondary, {
    label: "Cancel",
    onClick: onBack
  }))), /*#__PURE__*/React.createElement(BottomBar, null), showModal && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: COLORS.bgScreen,
      borderRadius: 12,
      padding: 20,
      width: 344,
      maxWidth: '90%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 16,
      fontWeight: 700,
      color: COLORS.error,
      marginBottom: 8
    }
  }, "Delete Contract?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 14,
      fontWeight: 400,
      color: COLORS.textPrimary,
      lineHeight: 1.6,
      marginBottom: 20
    }
  }, "Deleting your contract will remove all pricing configuration."), /*#__PURE__*/React.createElement(BtnModalPair, {
    onCancel: () => setShowModal(false),
    onConfirm: confirmDelete,
    cancelLabel: "Cancel",
    confirmLabel: "Delete"
  }))));
};
Object.assign(window, {
  EnergyPricing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/emon/EnergyPricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/emon/Shared.jsx
try { (() => {
// EMON App — Shared tokens, primitives, and utility components
// ui_kits/emon/Shared.jsx

const COLORS = {
  bgScreen: '#FFFFFF',
  bgCanvas: '#F7F7F5',
  textPrimary: '#5B5B5B',
  textSecondary: '#898989',
  textMuted: '#AEAEAE',
  textOnDark: '#D9DADA',
  divider: '#DDDDDD',
  grey10: '#EBEBEB',
  grey20: '#DDDDDD',
  grey40: '#BBBBBB',
  surfaceCard: '#F4F4F4',
  surfaceCardMid: '#E3E3E3',
  surfaceSecondary: '#EBECEC',
  surfaceCta: '#5B5B5B',
  surfaceWarning: '#FFEB9E',
  surfaceInfo: '#CCEDF0',
  success: '#4CAF50',
  warning: '#FB8C00',
  error: '#D8392C',
  pressed: '#DC4040',
  // Product brands
  emon: '#25AE8E',
  ando: '#CDDB65',
  fluxx: '#FECDC0',
  moebius: '#FB8C00',
  mox: '#DC4040',
  synq: '#5F7673',
  nendo: '#7BBAB6',
  ozzy: '#8BCF3F',
  feu: '#DA6E70',
  glow: '#E3D55D'
};
const FONT = "'Noto Sans KR', 'Source Han Sans KR', sans-serif";

// Top Bar
const TopBar = ({
  title,
  subtitle,
  productColor = COLORS.emon,
  productName = 'EMON',
  onBack
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    height: 40,
    background: COLORS.bgScreen,
    borderBottom: `1px solid ${COLORS.divider}`,
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    justifyContent: 'space-between',
    flexShrink: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 8
  }
}, onBack && /*#__PURE__*/React.createElement("div", {
  onClick: onBack,
  style: {
    cursor: 'pointer',
    marginRight: 4,
    color: COLORS.textPrimary
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M10 13L5 8L10 3",
  stroke: COLORS.textPrimary,
  strokeWidth: "1.5",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "8",
  x2: "13",
  y2: "8",
  stroke: COLORS.textPrimary,
  strokeWidth: "1.5",
  strokeLinecap: "round"
}))), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: FONT,
    fontSize: 16,
    color: COLORS.textPrimary
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontWeight: 700
  }
}, title), subtitle && /*#__PURE__*/React.createElement("span", {
  style: {
    fontWeight: 300
  }
}, " ", subtitle))), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: FONT,
    fontSize: 11,
    fontWeight: 700,
    color: productColor,
    letterSpacing: '0.1em'
  }
}, productName));

// Bottom Bar
const BottomBar = () => /*#__PURE__*/React.createElement("div", {
  style: {
    height: 40,
    background: COLORS.bgScreen,
    borderTop: `1px solid ${COLORS.divider}`,
    flexShrink: 0
  }
});

// Primary Button
const BtnPrimary = ({
  label,
  onClick,
  color
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick,
  style: {
    width: 212,
    height: 48,
    background: color || COLORS.surfaceCta,
    color: COLORS.textOnDark,
    fontFamily: FONT,
    fontSize: 16,
    fontWeight: 400,
    borderRadius: 8,
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}, label);

// Secondary Button
const BtnSecondary = ({
  label,
  onClick
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick,
  style: {
    width: 212,
    height: 48,
    background: COLORS.surfaceSecondary,
    color: COLORS.textSecondary,
    fontFamily: FONT,
    fontSize: 16,
    fontWeight: 400,
    borderRadius: 8,
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}, label);

// Modal button pair
const BtnModalPair = ({
  cancelLabel = 'Cancel',
  confirmLabel = 'Delete',
  onCancel,
  onConfirm,
  confirmColor
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 8,
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement("button", {
  onClick: onCancel,
  style: {
    width: 142,
    height: 48,
    background: COLORS.surfaceSecondary,
    color: COLORS.textSecondary,
    fontFamily: FONT,
    fontSize: 16,
    fontWeight: 400,
    borderRadius: 8,
    border: 'none',
    cursor: 'pointer'
  }
}, cancelLabel), /*#__PURE__*/React.createElement("button", {
  onClick: onConfirm,
  style: {
    width: 142,
    height: 48,
    background: confirmColor || COLORS.error,
    color: '#FFFFFF',
    fontFamily: FONT,
    fontSize: 16,
    fontWeight: 400,
    borderRadius: 8,
    border: 'none',
    cursor: 'pointer'
  }
}, confirmLabel));

// Data value: number Bold + unit Light
const DataValue = ({
  value,
  unit,
  size = 24
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: FONT,
    fontSize: size,
    color: COLORS.textPrimary
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontWeight: 700
  }
}, value), /*#__PURE__*/React.createElement("span", {
  style: {
    fontWeight: 300
  }
}, " ", unit));

// Divider line
const Divider = () => /*#__PURE__*/React.createElement("div", {
  style: {
    height: 1,
    background: COLORS.divider,
    flexShrink: 0
  }
});

// Status dot
const StatusDot = ({
  color = COLORS.surfaceWarning,
  size = 12
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: size,
    height: size,
    borderRadius: '50%',
    background: color,
    flexShrink: 0
  }
});

// Metric circle (SVG)
const MetricCircle = ({
  label,
  value,
  unit,
  color = COLORS.textPrimary
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: 88,
    height: 88,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: "88",
  height: "88",
  viewBox: "0 0 88 88",
  style: {
    position: 'absolute'
  }
}, /*#__PURE__*/React.createElement("circle", {
  cx: "44",
  cy: "44",
  r: "38",
  fill: "none",
  stroke: COLORS.grey10,
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "44",
  cy: "44",
  r: "38",
  fill: "none",
  stroke: color,
  strokeWidth: "1.5",
  strokeDasharray: "200 40",
  strokeDashoffset: "15",
  strokeLinecap: "round"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: FONT,
    fontSize: 11,
    fontWeight: 300,
    color: COLORS.textPrimary
  }
}, label), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: FONT,
    fontSize: 14,
    fontWeight: 700,
    color: COLORS.textPrimary
  }
}, value), unit && /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: FONT,
    fontSize: 10,
    fontWeight: 300,
    color: COLORS.textSecondary
  }
}, unit)));

// Step progress indicator
const StepIndicator = ({
  steps,
  active
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    position: 'relative'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    top: '50%',
    left: 40,
    right: 40,
    height: 1,
    background: COLORS.divider,
    transform: 'translateY(-50%)'
  }
}), steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
    zIndex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    background: i < active ? COLORS.surfaceCta : i === active ? COLORS.textPrimary : COLORS.grey10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${i <= active ? COLORS.textPrimary : COLORS.divider}`
  }
}, i < active ? /*#__PURE__*/React.createElement("svg", {
  width: "12",
  height: "9",
  viewBox: "0 0 12 9",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M1 4L4.5 7.5L11 1",
  stroke: "white",
  strokeWidth: "1.5",
  strokeLinecap: "round"
})) : /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: FONT,
    fontSize: 12,
    fontWeight: 700,
    color: i === active ? '#FFFFFF' : COLORS.textMuted
  }
}, i + 1)), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: FONT,
    fontSize: 11,
    fontWeight: 300,
    color: COLORS.textSecondary,
    marginTop: 4
  }
}, s))));

// Info/notice card (teal)
const InfoCard = ({
  title,
  body,
  actions
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: COLORS.surfaceInfo,
    borderRadius: 12,
    padding: 16,
    margin: '0 20px'
  }
}, title && /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: FONT,
    fontSize: 14,
    fontWeight: 700,
    color: COLORS.textPrimary,
    marginBottom: 6
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: FONT,
    fontSize: 14,
    fontWeight: 300,
    color: COLORS.textPrimary,
    lineHeight: 1.6,
    marginBottom: actions ? 12 : 0
  }
}, body), actions);
Object.assign(window, {
  COLORS,
  FONT,
  TopBar,
  BottomBar,
  BtnPrimary,
  BtnSecondary,
  BtnModalPair,
  DataValue,
  Divider,
  StatusDot,
  MetricCircle,
  StepIndicator,
  InfoCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/emon/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/emon/SolarSetup.jsx
try { (() => {
// EMON App — ANDO Solar Setup flow (4-step)
// ui_kits/emon/SolarSetup.jsx

const INVERTER_BRANDS = ['ANDO', 'Fronius', 'SMA'];
const MODULE_BRANDS = ['ANDO', 'Other'];
const SolarSetup = ({
  onBack,
  onComplete,
  productColor = COLORS.ando,
  productName = 'ANDO'
}) => {
  const [step, setStep] = React.useState(0);
  const [selectedInverter, setSelectedInverter] = React.useState(null);
  const [selectedModule, setSelectedModule] = React.useState(null);
  const steps = ['Inverter', 'Brand', 'Modules', 'Confirm'];
  const handleContinue = () => {
    if (step < 3) setStep(s => s + 1);else onComplete && onComplete();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: COLORS.bgScreen
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "ANDO",
    subtitle: "Solar Setup",
    productColor: productColor,
    productName: productName,
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 0',
      borderBottom: `1px solid ${COLORS.divider}`
    }
  }, /*#__PURE__*/React.createElement(StepIndicator, {
    steps: steps,
    active: step
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px 20px'
    }
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 18,
      fontWeight: 700,
      color: COLORS.textPrimary,
      marginBottom: 4
    }
  }, "Inverters detected"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 14,
      fontWeight: 300,
      color: COLORS.textSecondary,
      marginBottom: 16
    }
  }, "Select the inverter connected to your solar array."), INVERTER_BRANDS.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: b,
    onClick: () => setSelectedInverter(b),
    style: {
      background: COLORS.surfaceCard,
      borderRadius: 8,
      padding: '14px 16px',
      marginBottom: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer',
      border: selectedInverter === b ? `1px solid ${productColor}` : '1px solid transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 6,
      background: productColor,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 16,
      fontWeight: 300,
      color: COLORS.textPrimary
    }
  }, b), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 12,
      fontWeight: 300,
      color: COLORS.textSecondary
    }
  }, "Model ", String.fromCharCode(65 + i), "-Series")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `1px solid ${selectedInverter === b ? productColor : COLORS.grey40}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, selectedInverter === b && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: productColor
    }
  }))))), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 18,
      fontWeight: 700,
      color: COLORS.textPrimary,
      marginBottom: 4
    }
  }, "Select module brand"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 14,
      fontWeight: 300,
      color: COLORS.textSecondary,
      marginBottom: 16
    }
  }, "Choose the manufacturer of your solar modules."), MODULE_BRANDS.map(b => /*#__PURE__*/React.createElement("div", {
    key: b,
    onClick: () => setSelectedModule(b),
    style: {
      background: COLORS.surfaceCard,
      borderRadius: 8,
      padding: '18px 16px',
      marginBottom: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      border: selectedModule === b ? `1px solid ${productColor}` : '1px solid transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT,
      fontSize: 18,
      fontWeight: 300,
      color: COLORS.textPrimary
    }
  }, b), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `1px solid ${selectedModule === b ? productColor : COLORS.grey40}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, selectedModule === b && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: productColor
    }
  }))))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 18,
      fontWeight: 700,
      color: COLORS.textPrimary,
      marginBottom: 4
    }
  }, "Scan layout"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 14,
      fontWeight: 300,
      color: COLORS.textSecondary,
      marginBottom: 16
    }
  }, "Take a photo of your roof layout or choose from library."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: COLORS.surfaceCard,
      borderRadius: 12,
      height: 180,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "10",
    width: "40",
    height: "32",
    rx: "4",
    stroke: COLORS.textMuted,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "26",
    r: "8",
    stroke: COLORS.textMuted,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 10L20 6H28L30 10",
    stroke: COLORS.textMuted,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 14,
      fontWeight: 300,
      color: COLORS.textMuted
    }
  }, "Camera ready"))), step === 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 18,
      fontWeight: 700,
      color: COLORS.textPrimary,
      marginBottom: 16
    }
  }, "Inverters configured"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: COLORS.surfaceInfo,
      borderRadius: 12,
      padding: 16,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 14,
      fontWeight: 300,
      color: COLORS.textPrimary,
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Inverter:"), " ", selectedInverter || INVERTER_BRANDS[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Module brand:"), " ", selectedModule || MODULE_BRANDS[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontStyle: 'italic',
      color: COLORS.textSecondary
    }
  }, "It took less arguing than expected."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(BtnPrimary, {
    label: step < 3 ? 'Continue' : 'Finish Setup',
    onClick: handleContinue,
    color: productColor
  }), step > 0 && /*#__PURE__*/React.createElement(BtnSecondary, {
    label: "Back",
    onClick: () => setStep(s => s - 1)
  })), /*#__PURE__*/React.createElement(BottomBar, null));
};

// Solar Forecast screen
const SolarForecast = ({
  onBack,
  productColor = COLORS.ando,
  productName = 'ANDO'
}) => {
  const bars = [1.2, 2.1, 3.0, 3.4, 3.1, 2.8, 2.2, 1.8, 1.4, 0.9, 0.5, 0.2];
  const maxBar = Math.max(...bars);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: COLORS.bgScreen
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "Solar",
    subtitle: "Forecast",
    productColor: productColor,
    productName: productName,
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '16px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      fontSize: 14,
      fontWeight: 300,
      color: COLORS.textSecondary,
      marginBottom: 4
    }
  }, "Today's generation"), /*#__PURE__*/React.createElement(DataValue, {
    value: "3,42",
    unit: "kW peak",
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: COLORS.surfaceCard,
      borderRadius: 12,
      padding: '16px 16px 28px',
      marginTop: 16,
      position: 'relative',
      height: 200
    }
  }, [0.25, 0.5, 0.75].map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: `${28 + p * 148}px`,
      height: 1,
      background: COLORS.divider
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      left: 16,
      fontFamily: FONT,
      fontSize: 11,
      fontWeight: 300,
      color: COLORS.textPrimary
    }
  }, "3 kW"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 28,
      left: 16,
      right: 16,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 2,
      height: 148
    }
  }, bars.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: `${v / maxBar * 100}%`,
      background: v === maxBar ? productColor : COLORS.textPrimary,
      borderRadius: '2px 2px 0 0'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 8,
      left: 16,
      right: 16,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, ['06:00', '09:00', '12:00', '15:00', '18:00'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: FONT,
      fontSize: 10,
      fontWeight: 300,
      color: COLORS.textPrimary
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 12px'
    }
  }, /*#__PURE__*/React.createElement(BtnSecondary, {
    label: "Back to Battery",
    onClick: onBack
  })), /*#__PURE__*/React.createElement(BottomBar, null));
};

// Basic Mode notice screen
const BasicModeNotice = ({
  onBack,
  onAddSynq,
  productColor = COLORS.emon,
  productName = 'EMON'
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    background: COLORS.bgScreen
  }
}, /*#__PURE__*/React.createElement(TopBar, {
  title: "Basic",
  subtitle: "Mode",
  productColor: productColor,
  productName: productName,
  onBack: onBack
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    padding: '24px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }
}, /*#__PURE__*/React.createElement(InfoCard, {
  title: "Basic Mode active",
  body: "Without a SYNQ smart meter, dynamic tariff optimisation is unavailable. You can still monitor battery state and manage energy contracts.",
  actions: /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(BtnPrimary, {
    label: "Add SYNQ Meter",
    onClick: onAddSynq,
    color: COLORS.synq
  }), /*#__PURE__*/React.createElement(BtnSecondary, {
    label: "Continue Basic",
    onClick: onBack
  }))
})), /*#__PURE__*/React.createElement(BottomBar, null));
Object.assign(window, {
  SolarSetup,
  SolarForecast,
  BasicModeNotice
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/emon/SolarSetup.jsx", error: String((e && e.message) || e) }); }

})();
