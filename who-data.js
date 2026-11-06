// DEPTH-620 · WHO navigation data: roles, regions, coverage and people index.
// Source text stays in who-content.js (WHO_SRC, verbatim from the live Who page), regional-map-data.js (RAM_DATA) and field-sales-data.js (FIELD_SALES).
// Non-European local sales contacts below come from the LAB v2 brief and are CONCEPT PROFILES (fictional). Replace before go-live.
(function () {
  var T = { terracotta: '#F1931B', brick: '#D8392C', ochre: '#FDC706', ultra: '#0083BB', soft: '#6BC0B0', sand: '#CDD62B', charcoal: '#5B6592' }; /* DEPTH-655: brand registry colours (MOEBIUS, MOX, FLUXX, AIRO, CHILL, ANDO, SHELTR) replace LAB tints */
  var CONCEPT = 'CONCEPT PROFILE · FICTIONAL';

  var ROLES = [
    { id: 'founders', n: '01', label: 'Founders', sub: 'Direction, decisions and leadership', tint: T.terracotta },
    { id: 'builders', n: '02', label: 'The Builders', sub: 'Design, engineering, manufacturing and development', tint: T.ultra },
    { id: 'product', n: '03', label: 'Product Specialists', srcTitle: 'Product specialist', tint: T.brick },
    { id: 'system', n: '04', label: 'System Specialists', sub: 'Platform support for energy management, calculation, installer operations, partner networks and stockholding.', tint: T.soft },
    { id: 'project', n: '05', label: 'Project Specialists', sub: 'Engineering, calculation and technical review for residential, commercial and utility projects.', tint: T.charcoal },
    { id: 'webshop', n: '06', label: 'Webshop & Account Managers', srcTitle: 'Webshop specialist & account manager', tint: T.ochre },
    { id: 'local', n: '07', label: 'Local Sales', srcTitle: 'Local sales', tint: T.brick }
  ];

  var REGIONS = [
    { id: 'europe', label: 'Europe', box: [[-25, 34], [42, 71]] },
    { id: 'middleeast', label: 'Middle East', box: [[25, 11], [64, 43]] },
    { id: 'africa', label: 'Africa', box: [[-19, -36], [52, 38]] },
    { id: 'asia', label: 'Asia', box: [[44, -11], [148, 56]] },
    { id: 'oceania', label: 'Oceania', box: [[110, -48], [180, 2]] },
    { id: 'americas', label: 'Americas', box: [[-168, -56], [-32, 72]] }
  ];

  // code: [ISO numeric, name, region]
  var C0 = {
    NL: [528, 'Netherlands', 'europe'], BE: [56, 'Belgium', 'europe'], FR: [250, 'France', 'europe'], LU: [442, 'Luxembourg', 'europe'], CH: [756, 'Switzerland', 'europe'], MC: [492, 'Monaco', 'europe'],
    DE: [276, 'Germany', 'europe'], AT: [40, 'Austria', 'europe'], LI: [438, 'Liechtenstein', 'europe'], GB: [826, 'United Kingdom', 'europe'], IE: [372, 'Ireland', 'europe'],
    ES: [724, 'Spain', 'europe'], PT: [620, 'Portugal', 'europe'], AD: [20, 'Andorra', 'europe'], IT: [380, 'Italy', 'europe'], MT: [470, 'Malta', 'europe'], SM: [674, 'San Marino', 'europe'], VA: [336, 'Vatican City', 'europe'],
    SE: [752, 'Sweden', 'europe'], DK: [208, 'Denmark', 'europe'], NO: [578, 'Norway', 'europe'], FI: [246, 'Finland', 'europe'], IS: [352, 'Iceland', 'europe'],
    PL: [616, 'Poland', 'europe'], LT: [440, 'Lithuania', 'europe'], LV: [428, 'Latvia', 'europe'], EE: [233, 'Estonia', 'europe'], CZ: [203, 'Czechia', 'europe'], SK: [703, 'Slovakia', 'europe'], HU: [348, 'Hungary', 'europe'],
    RO: [642, 'Romania', 'europe'], BG: [100, 'Bulgaria', 'europe'], GR: [300, 'Greece', 'europe'], CY: [196, 'Cyprus', 'europe'], MD: [498, 'Moldova', 'europe'],
    SI: [705, 'Slovenia', 'europe'], HR: [191, 'Croatia', 'europe'], RS: [688, 'Serbia', 'europe'], BA: [70, 'Bosnia and Herzegovina', 'europe'], ME: [499, 'Montenegro', 'europe'], XK: [0, 'Kosovo', 'europe'], AL: [8, 'Albania', 'europe'], MK: [807, 'North Macedonia', 'europe'],
    UA: [804, 'Ukraine', 'europe'], BY: [112, 'Belarus', 'europe'], RU: [643, 'Russia', 'europe'],
    TR: [792, 'Türkiye', 'middleeast'], GE: [268, 'Georgia', 'middleeast'], AM: [51, 'Armenia', 'middleeast'], AZ: [31, 'Azerbaijan', 'middleeast'],
    AE: [784, 'United Arab Emirates', 'middleeast'], SA: [682, 'Saudi Arabia', 'middleeast'], QA: [634, 'Qatar', 'middleeast'], OM: [512, 'Oman', 'middleeast'], KW: [414, 'Kuwait', 'middleeast'], BH: [48, 'Bahrain', 'middleeast'],
    JO: [400, 'Jordan', 'middleeast'], LB: [422, 'Lebanon', 'middleeast'], IQ: [368, 'Iraq', 'middleeast'], IL: [376, 'Israel', 'middleeast'], PS: [275, 'Palestine', 'middleeast'], YE: [887, 'Yemen', 'middleeast'], IR: [364, 'Iran', 'middleeast'], SY: [760, 'Syria', 'middleeast'],
    MA: [504, 'Morocco', 'africa'], DZ: [12, 'Algeria', 'africa'], TN: [788, 'Tunisia', 'africa'], EG: [818, 'Egypt', 'africa'], LY: [434, 'Libya', 'africa'], EH: [732, 'Western Sahara', 'africa'],
    NG: [566, 'Nigeria', 'africa'], GH: [288, 'Ghana', 'africa'], SN: [686, 'Senegal', 'africa'], CI: [384, "Côte d'Ivoire", 'africa'], BJ: [204, 'Benin', 'africa'], TG: [768, 'Togo', 'africa'],
    ML: [466, 'Mali', 'africa'], BF: [854, 'Burkina Faso', 'africa'], NE: [562, 'Niger', 'africa'], GN: [324, 'Guinea', 'africa'], SL: [694, 'Sierra Leone', 'africa'], LR: [430, 'Liberia', 'africa'], GM: [270, 'Gambia', 'africa'], GW: [624, 'Guinea-Bissau', 'africa'], MR: [478, 'Mauritania', 'africa'],
    CM: [120, 'Cameroon', 'africa'], CD: [180, 'DR Congo', 'africa'], CG: [178, 'Congo', 'africa'], GA: [266, 'Gabon', 'africa'], TD: [148, 'Chad', 'africa'], CF: [140, 'Central African Republic', 'africa'], GQ: [226, 'Equatorial Guinea', 'africa'],
    KE: [404, 'Kenya', 'africa'], ET: [231, 'Ethiopia', 'africa'], TZ: [834, 'Tanzania', 'africa'], UG: [800, 'Uganda', 'africa'], RW: [646, 'Rwanda', 'africa'], MG: [450, 'Madagascar', 'africa'],
    SO: [706, 'Somalia', 'africa'], DJ: [262, 'Djibouti', 'africa'], ER: [232, 'Eritrea', 'africa'], SS: [728, 'South Sudan', 'africa'], SD: [729, 'Sudan', 'africa'], BI: [108, 'Burundi', 'africa'],
    ZA: [710, 'South Africa', 'africa'], NA: [516, 'Namibia', 'africa'], BW: [72, 'Botswana', 'africa'], ZM: [894, 'Zambia', 'africa'], ZW: [716, 'Zimbabwe', 'africa'], MZ: [508, 'Mozambique', 'africa'],
    AO: [24, 'Angola', 'africa'], MW: [454, 'Malawi', 'africa'], LS: [426, 'Lesotho', 'africa'], SZ: [748, 'Eswatini', 'africa'],
    KZ: [398, 'Kazakhstan', 'asia'], UZ: [860, 'Uzbekistan', 'asia'], KG: [417, 'Kyrgyzstan', 'asia'], MN: [496, 'Mongolia', 'asia'], TJ: [762, 'Tajikistan', 'asia'], TM: [795, 'Turkmenistan', 'asia'],
    AF: [4, 'Afghanistan', 'asia'], IN: [356, 'India', 'asia'], PK: [586, 'Pakistan', 'asia'], BD: [50, 'Bangladesh', 'asia'], LK: [144, 'Sri Lanka', 'asia'], NP: [524, 'Nepal', 'asia'], BT: [64, 'Bhutan', 'asia'],
    VN: [704, 'Vietnam', 'asia'], TH: [764, 'Thailand', 'asia'], PH: [608, 'Philippines', 'asia'], ID: [360, 'Indonesia', 'asia'], MY: [458, 'Malaysia', 'asia'], SG: [702, 'Singapore', 'asia'],
    KH: [116, 'Cambodia', 'asia'], LA: [418, 'Laos', 'asia'], MM: [104, 'Myanmar', 'asia'], BN: [96, 'Brunei', 'asia'], TL: [626, 'Timor-Leste', 'asia'],
    HK: [344, 'Hong Kong', 'asia'], TW: [158, 'Taiwan', 'asia'], CN: [156, 'Mainland China', 'asia'], JP: [392, 'Japan', 'asia'], KR: [410, 'South Korea', 'asia'], KP: [408, 'North Korea', 'asia'],
    AU: [36, 'Australia', 'oceania'], NZ: [554, 'New Zealand', 'oceania'], FJ: [242, 'Fiji', 'oceania'], PG: [598, 'Papua New Guinea', 'oceania'], SB: [90, 'Solomon Islands', 'oceania'], VU: [548, 'Vanuatu', 'oceania'], NC: [540, 'New Caledonia', 'oceania'],
    CA: [124, 'Canada', 'americas'], US: [840, 'United States of America', 'americas'], MX: [484, 'Mexico', 'americas'], GT: [320, 'Guatemala', 'americas'], CR: [188, 'Costa Rica', 'americas'], PA: [591, 'Panama', 'americas'], HN: [340, 'Honduras', 'americas'],
    BZ: [84, 'Belize', 'americas'], SV: [222, 'El Salvador', 'americas'], NI: [558, 'Nicaragua', 'americas'], DO: [214, 'Dominican Republic', 'americas'], JM: [388, 'Jamaica', 'americas'], TT: [780, 'Trinidad and Tobago', 'americas'], BB: [52, 'Barbados', 'americas'],
    CU: [192, 'Cuba', 'americas'], HT: [332, 'Haiti', 'americas'], BS: [44, 'Bahamas', 'americas'], PR: [630, 'Puerto Rico', 'americas'],
    CO: [170, 'Colombia', 'americas'], PE: [604, 'Peru', 'americas'], EC: [218, 'Ecuador', 'americas'], BO: [68, 'Bolivia', 'americas'], VE: [862, 'Venezuela', 'americas'], GY: [328, 'Guyana', 'americas'], SR: [740, 'Suriname', 'americas'],
    BR: [76, 'Brazil', 'americas'], CL: [152, 'Chile', 'americas'], AR: [32, 'Argentina', 'americas'], UY: [858, 'Uruguay', 'americas'], PY: [600, 'Paraguay', 'americas'], FK: [238, 'Falkland Islands', 'americas'], GL: [304, 'Greenland', 'americas']
  };
  // Not in the 110m world geometry: drawn as one tile at this point [lon, lat].
  var MICRO = { MC: [7.42, 43.73], LI: [9.55, 47.16], AD: [1.6, 42.55], MT: [14.45, 35.9], SM: [12.46, 43.94], VA: [12.45, 41.9], SG: [103.82, 1.35], BH: [50.55, 26.07], HK: [114.17, 22.32], BB: [-59.54, 13.19] };

  var EXCLUDED = ['RU', 'KP', 'BY', 'IR', 'SY']; /* DEPTH-652: US and PR served (EN + ES via language people) */
  var EXCLUDED_NOTE = { UA: 'Occupied regions (Crimea, occupied Donetsk, Luhansk, Zaporizhzhia, Kherson) are not served.', PR: 'United States territory. To confirm.' };

  var LANG = { TR: 'Turkish', EN: 'English', AR: 'Arabic', FR: 'French', SW: 'Swahili', ZU: 'Zulu', PT: 'Portuguese', KK: 'Kazakh', VI: 'Vietnamese', ES: 'Spanish', ZH: 'Chinese' };

  // LAB v2 sub-regions outside Europe. Europe keeps the existing 12 regions from RAM_DATA.
  var SUBS = [
    { id: 'ME-TC', region: 'middleeast', label: 'Türkiye & Caucasus', key: ['TR', 'GE', 'AM', 'AZ'], tint: T.brick, contact: { name: 'Deniz Aydın', base: 'Istanbul', tz: 'Europe/Istanbul', lang: ['TR', 'EN'] } },
    { id: 'ME-GU', region: 'middleeast', label: 'Gulf', key: ['AE', 'SA', 'QA', 'OM', 'KW', 'BH'], tint: T.terracotta, contact: { name: 'Omar Al-Mansouri', base: 'Dubai', tz: 'Asia/Dubai', lang: ['AR', 'EN'] } },
    { id: 'ME-LI', region: 'middleeast', label: 'Levant & Iraq', key: ['JO', 'LB', 'IQ'], note: 'Other countries to confirm.', tint: T.ultra, contact: { name: 'Rania Haddad', base: 'Amman', tz: 'Asia/Amman', lang: ['AR', 'FR', 'EN'] } },
    { id: 'AF-N', region: 'africa', label: 'North Africa', key: ['MA', 'DZ', 'TN', 'EG', 'LY'], tint: T.ochre, contact: { name: 'Youssef Benali', base: 'Casablanca', tz: 'Africa/Casablanca', lang: ['AR', 'FR', 'EN'] } },
    { id: 'AF-W', region: 'africa', label: 'West Africa', key: ['NG', 'GH', 'SN', 'CI', 'BJ', 'TG'], also: ['ML', 'BF', 'NE', 'GN', 'SL', 'LR', 'GM', 'GW', 'MR'], tint: T.terracotta, contact: { name: 'Kwame Mensah', base: 'Accra', tz: 'Africa/Accra', lang: ['EN', 'FR'] } },
    { id: 'AF-C', region: 'africa', label: 'Central Africa', key: ['CM', 'CD', 'CG', 'GA', 'TD'], also: ['CF', 'GQ'], tint: T.ultra, contact: { name: 'Aline Mbala', base: 'Douala', tz: 'Africa/Douala', lang: ['FR', 'EN'] } },
    { id: 'AF-E', region: 'africa', label: 'East Africa', key: ['KE', 'ET', 'TZ', 'UG', 'RW', 'MG'], also: ['SO', 'DJ', 'ER', 'SS', 'SD', 'BI'], tint: T.brick, contact: { name: 'Amani Wanjiru', base: 'Nairobi', tz: 'Africa/Nairobi', lang: ['EN', 'SW'] } },
    { id: 'AF-S', region: 'africa', label: 'Southern Africa', key: ['ZA', 'NA', 'BW', 'ZM', 'ZW', 'MZ'], also: ['AO', 'MW', 'LS', 'SZ'], tint: T.soft, contact: { name: 'Thabo Nkosi', base: 'Cape Town', tz: 'Africa/Johannesburg', lang: ['EN', 'ZU', 'PT'] } },
    { id: 'AS-C', region: 'asia', label: 'Central Asia', key: ['KZ', 'UZ', 'KG', 'MN'], also: ['TJ', 'TM'], tint: T.ochre, contact: { name: 'Aigerim Seitkali', base: 'Almaty', tz: 'Asia/Almaty', lang: ['KK', 'EN'] } },
    { id: 'AS-S', region: 'asia', label: 'South Asia', key: ['IN', 'PK', 'BD', 'LK', 'NP', 'BT'], note: 'Key countries and regional contact to confirm by Mathieu.', tint: T.sand, contact: null },
    { id: 'AS-SE', region: 'asia', label: 'Southeast Asia', key: ['VN', 'TH', 'PH', 'ID', 'MY', 'SG'], also: ['KH', 'LA', 'MM', 'BN', 'TL'], tint: T.terracotta, contact: { name: 'Nguyen Minh Anh', base: 'Ho Chi Minh City', tz: 'Asia/Ho_Chi_Minh', lang: ['VI', 'EN'] } },
    { id: 'AS-E', region: 'asia', label: 'Greater China & East Asia', key: ['HK', 'TW', 'CN', 'JP', 'KR'], note: 'Founders and team are based in Hong Kong, Taiwan and Shenzhen. A commercial contact for this sub-region is to be confirmed.', tint: T.ultra, contact: null },
    { id: 'OC', region: 'oceania', label: 'Australia & Pacific', key: ['AU', 'NZ', 'FJ', 'PG'], also: ['SB', 'VU', 'NC'], tint: T.brick, contact: { name: 'Harper Wilson', base: 'Brisbane', tz: 'Australia/Brisbane', lang: ['EN'] } },
    { id: 'AM-CA', region: 'americas', label: 'Canada', key: ['CA'], tint: T.ultra, contact: { name: 'Émilie Tremblay', base: 'Montréal', tz: 'America/Toronto', lang: ['EN', 'FR'] } },
    { id: 'AM-MX', region: 'americas', label: 'Mexico & Central America', key: ['MX', 'GT', 'CR', 'PA', 'HN'], also: ['BZ', 'SV', 'NI'], tint: T.terracotta, contact: { name: 'Diego Hernández', base: 'Monterrey', tz: 'America/Monterrey', lang: ['ES', 'EN'] } },
    { id: 'AM-CB', region: 'americas', label: 'Caribbean', key: ['DO', 'JM', 'TT', 'BB'], also: ['CU', 'HT', 'BS'], tint: T.soft, contact: { name: 'Marisol Peña', base: 'Santo Domingo', tz: 'America/Santo_Domingo', lang: ['ES', 'EN'] } },
    { id: 'AM-AN', region: 'americas', label: 'Andean', key: ['CO', 'PE', 'EC', 'BO'], also: ['VE', 'GY', 'SR'], tint: T.ochre, contact: { name: 'Valentina Ríos', base: 'Bogotá', tz: 'America/Bogota', lang: ['ES', 'EN'] } },
    { id: 'AM-BR', region: 'americas', label: 'Brazil', key: ['BR'], tint: T.brick, contact: { name: 'Rafael Oliveira', base: 'São Paulo', tz: 'America/Sao_Paulo', lang: ['PT', 'EN'] } },
    { id: 'AM-SC', region: 'americas', label: 'Southern Cone', key: ['CL', 'AR', 'UY', 'PY'], tint: T.ultra, contact: { name: 'Martina Silva', base: 'Santiago', tz: 'America/Santiago', lang: ['ES', 'EN'] } }
  ];

  var RAM_TINT = { 'RAM-01': T.terracotta, 'RAM-02': T.ultra, 'RAM-03': T.ochre, 'RAM-04': T.brick, 'RAM-05': T.soft, 'RAM-06': T.ochre, 'RAM-07': T.terracotta, 'RAM-08': T.ultra, 'RAM-09': T.brick, 'RAM-10': T.soft, 'RAM-11': T.ochre, 'RAM-12': T.ultra, CENTRAL: T.charcoal };
  var RAM_TZ = { 'RAM-01': 'Europe/Brussels', 'RAM-02': 'Europe/Paris', 'RAM-03': 'Europe/Berlin', 'RAM-04': 'Europe/Vienna', 'RAM-05': 'Europe/London', 'RAM-06': 'Europe/Madrid', 'RAM-07': 'Europe/Rome', 'RAM-08': 'Europe/Stockholm', 'RAM-09': 'Europe/Warsaw', 'RAM-10': 'Europe/Prague', 'RAM-11': 'Europe/Bucharest', 'RAM-12': 'Europe/Belgrade', CENTRAL: 'Europe/Brussels' };
  var UNIT_LABEL = { 'BE-VLG': 'Belgium · Flanders (Dutch)', 'BE-WAL': 'Belgium · Wallonia (French)', 'BE-BRU-FR': 'Belgium · Brussels (French)', 'LU-FR': 'Luxembourg (French)', 'CH-FR': 'Switzerland · French-speaking', 'CH-DE': 'Switzerland · German-speaking', 'CH-IT': 'Switzerland · Italian-speaking' };
  var WEBSHOP_RESP = ['Webshop account registration and onboarding.', 'Customer account administration.', 'Quotation coordination.', 'Order administration and follow-up.', 'Delivery coordination.', 'Commercial documentation.', 'Supporting webshop-related customer enquiries.'];

  // Product brands and specialists, from the live Who page expert list (all marked "Fictional example, to confirm" there).
  var EX = [['ando', 'ANDO', 'Thomas Vermeulen', 'Solar PV Technical Specialist', 'Solar panels', 'solar pv module panel'], ['lina', 'LINA', 'Piotr Zieliński', 'Vertical Solar & Flat-Roof Mounting Specialist', 'Vertical solar', 'vertical flat roof mounting'], ['prop', 'PROP', 'Viktoria Stoyanova', 'Wind Turbine Specialist', 'Wind generation', 'wind turbine'], ['moebius', 'MOEBIUS', 'Arjun Menon', 'Power Conversion Specialist', 'Inverters', 'inverter power conversion'], ['fluxx', 'FLUXX', 'Bram de Vries', 'Battery Systems Specialist', 'Battery storage', 'battery storage bess'], ['nendo', 'NENDO', 'Mihai Ionescu', 'Thermal Systems Specialist', 'Heat pumps', 'heat pump thermal'], ['nendo', 'OGO', 'Mihai Ionescu', 'Thermal Systems Specialist', 'Water systems', 'boiler hot water tank'], ['feu', 'FEU', 'Kateryna Hrytsenko', 'Radiant Heating Specialist', 'Radiant heating', 'infrared heating'], ['xoom', 'XOOM', 'Lukas Schneider', 'EV Charging Specialist', 'EV charging', 'ev charger charging'], ['airo', 'AIRO', 'Andrei Popescu', 'Ventilation & Indoor Air Quality Specialist', 'Airflow systems', 'ventilation air'], ['glow', 'GLOW', 'Milica Petrović', 'Solar Lighting Specialist', 'Solar lighting', 'lighting lamp'], ['synq', 'SYNQ', 'Ananya Rao', 'Smart Metering Specialist', 'Smart meters', 'meter metering monitoring'], ['ozzy', 'OZZY', 'Meera Kulkarni', 'Smart Switching Specialist', 'Energy switching', 'plug switch'], ['mox', 'MOX', 'Hendrik Van Aelst', 'Structural & Protection Specialist', 'Structural mounting', 'mounting structure'], ['agrix', 'AGRIX', 'Dr. Klaus Reinhardt', 'Agricultural Solar & Agrivoltaics Specialist', 'Agri-PV', 'agri agrivoltaics farm'], ['mox', 'TERRIX', 'Hendrik Van Aelst', 'Structural & Protection Specialist', 'Ground mounting', 'ground mount utility'], ['mox', 'TECTIX', 'Hendrik Van Aelst', 'Structural & Protection Specialist', 'Roof mounting', 'roof mounting'], ['mox', 'PARX', 'Hendrik Van Aelst', 'Structural & Protection Specialist', 'Solar parking', 'carport parking'], ['chill', 'CHILL', 'Elīna Ozoliņa', 'Architectural Product & Infrastructure Specialist', 'Energy-integrated infrastructure', 'architectural infrastructure'], ['mox', 'PONTIX', 'Hendrik Van Aelst', 'Structural & Protection Specialist', 'Floating solar', 'floating water'], ['togu', 'TOGU', 'Mei-Ling Lin', 'Electrical Connectivity Specialist', 'Electrical connectivity', 'cable connector'], ['dodo', 'DODO', 'Charlotte Whitmore', 'Product Safety & Protection Specialist', 'Bird protection', 'bird protection'], ['mox', 'SHELTR', 'Hendrik Van Aelst', 'Structural & Protection Specialist', 'Asset protection', 'enclosure protection'], ['muki', 'MUKI', 'Filip De Smet', 'Integrated Energy Systems Specialist', 'Energy sets', 'kit set'], ['wurk', 'WURK', 'Marek Kováč', 'Installation Equipment & Site Safety Specialist', 'Installation equipment', 'tools safety']];
  var LOGO = { AGRIX: 'png', TERRIX: 'png', PARX: 'png', PONTIX: 'png', TECTIX: 'png', LINA: 'png' };

  function slug(s) { return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function initials(n) { return n.replace(/^Dr\.\s*/, '').split(/\s+/).filter(Boolean).map(function (w) { return w[0]; }).slice(0, 2).join('').toUpperCase(); }

  function build() {
    var R = window.RAM_DATA, FS = window.FIELD_SALES || {}, S = window.WHO_SRC;
    if (!R || !S) return null;
    var C = {}, code;
    for (code in C0) C[code] = { code: code, num: C0[code][0], name: C0[code][1], region: C0[code][2], sub: null, state: 'dotted', units: [] };
    var subs = {};
    R.regions.forEach(function (r) {
      subs[r.id] = { id: r.id, region: 'europe', label: r.name, n: r.number, tint: RAM_TINT[r.id], tz: RAM_TZ[r.id], languages: r.languages, units: r.units, key: [] };
      r.units.forEach(function (u) { var iso = u.split('-')[0]; var c = C[iso]; if (!c) return; c.units.push(u); if (!c.sub) c.sub = r.id; c.state = 'solid'; if (subs[r.id].key.indexOf(iso) < 0) subs[r.id].key.push(iso); });
    });
    Object.keys(R.rules || {}).forEach(function (iso) { if (C[iso] && R.rules[iso].default && subs[R.rules[iso].default]) C[iso].sub = R.rules[iso].default; });
    subs.CENTRAL = { id: 'CENTRAL', region: 'europe', label: 'Central team', tint: T.charcoal, tz: RAM_TZ.CENTRAL, note: (R.central && R.central.note) || '', key: ['UA'] };
    C.UA.sub = 'CENTRAL'; C.UA.state = 'dotted';
    SUBS.forEach(function (s) {
      subs[s.id] = s;
      s.key.forEach(function (k) { C[k].sub = s.id; C[k].state = s.contact ? 'solid' : 'dotted'; });
      (s.also || []).forEach(function (k) { C[k].sub = s.id; C[k].state = s.contact ? 'outlined' : 'dotted'; });
    });
    EXCLUDED.forEach(function (k) { C[k].state = 'excluded'; C[k].sub = null; });

    var P = {};
    S.founders.forEach(function (f) {
      P['f-' + f.id] = { id: 'f-' + f.id, role: 'founders', roleTitle: f.label, name: f.name, title: f.role, base: f.loc, intro: f.mission, statement: f.statement, statementNote: f.statementNote, flags: f.flags, slot: f.slot, slotPh: f.slotPlaceholder, concept: false, kind: 'founder', src: f, lang: [], markets: [], products: [] };
    });
    var langSplit = function (s) { return (s || '').split(/,\s*|\s+and\s+/).map(function (x) { return x.trim(); }).filter(Boolean); };
    var unitName = function (u) { return UNIT_LABEL[u] || (R.countries && R.countries[u]) || (C[u] && C[u].name) || u; };
    R.regions.forEach(function (r) {
      var fs = FS[r.id], m = r.manager || {};
      P['w-' + r.id] = { id: 'w-' + r.id, role: 'webshop', roleTitle: 'Webshop specialist & account manager', name: m.name, title: m.title || 'B2B Webshop Account Manager', sub: r.id, region: 'europe', tz: RAM_TZ[r.id], base: 'Base to confirm', lang: langSplit(r.languages), markets: r.units.map(unitName), products: [], intro: (fs && fs.webshop) || 'B2B webshop accounts, quotations and orders.', resp: WEBSHOP_RESP, concept: m.fictionalConcept !== false, kind: 'webshop', slot: 'who-lab-' + slug(m.name || r.id), href: 'STROHM.ENERGY - SITE - Regional Account Management - EN.dc.html' };
      var list = [];
      if (r.fieldSales && r.fieldSales.fictionalConcept === false) {
        var id = 'l-' + slug(r.fieldSales.name);
        P[id] = { id: id, role: 'local', roleTitle: 'Local sales', name: r.fieldSales.name, title: r.fieldSales.title || 'Field Sales Representative', sub: r.id, region: 'europe', tz: RAM_TZ[r.id], base: 'Base to confirm', lang: langSplit(r.languages), markets: r.units.map(unitName), products: [], intro: r.fieldSales.note || 'Visits installers, EPC partners and distributors in the region.', concept: false, kind: 'local', flags: ['PORTRAIT PENDING'], slot: 'who-lab-' + slug(r.fieldSales.name), href: 'STROHM.ENERGY - SITE - Regional Account Management - EN.dc.html' };
        list.push(id);
      }
      if (fs) {
        var id2 = 'l-' + slug(fs.name);
        P[id2] = { id: id2, role: 'local', roleTitle: 'Local sales', name: fs.name, title: fs.role, sub: r.id, region: 'europe', tz: RAM_TZ[r.id], base: 'Base to confirm', lang: langSplit(r.languages), markets: r.units.map(unitName), products: [], intro: fs.intro, profile: fs.profile, resp: fs.resp, approach: fs.approach, webshopNote: fs.webshop, concept: true, kind: 'local', slot: 'who-lab-' + slug(fs.name), href: 'STROHM.ENERGY - SITE - Regional Account Management - EN.dc.html' };
        list.push(id2);
      }
      subs[r.id].local = list; subs[r.id].webshop = ['w-' + r.id];
    });
    SUBS.forEach(function (s) {
      s.local = []; s.webshop = [];
      if (!s.contact) return;
      var id = 'x-' + slug(s.contact.name);
      P[id] = { id: id, role: 'local', roleTitle: 'Local sales', name: s.contact.name, title: 'Local Sales · ' + s.label, sub: s.id, region: s.region, tz: s.contact.tz, base: s.contact.base, lang: s.contact.lang.map(function (l) { return LANG[l] || l; }), markets: s.key.map(function (k) { return C[k].name; }), products: [], intro: '', concept: true, kind: 'lab', slot: 'who-lab-' + slug(s.contact.name) };
      s.local = [id];
    });
    var products = [];
    EX.forEach(function (e) {
      var id = 'p-' + slug(e[2]);
      if (!P[id]) P[id] = { id: id, role: 'product', roleTitle: 'Product specialist', name: e[2], title: e[3], products: [], lang: [], markets: [], base: 'Base to confirm', intro: '', concept: true, kind: 'product', slot: 'who-lab-' + slug(e[2]), href: 'STROHM.ENERGY - COMPANY - Who - Product Experts - EN.dc.html#expert-' + e[0] };
      P[id].products.push(e[1]);
      var sp = [id];
      if (e[1] === 'FLUXX') {
        var bid = 'p-dr-markus-feldmann';
        P[bid] = { id: bid, role: 'product', roleTitle: 'Product specialist', name: 'Dr. Markus Feldmann', title: 'BESS Specialist', products: ['FLUXX'], lang: [], markets: [], base: 'Base to confirm', intro: '', concept: true, kind: 'product', slot: 'who-lab-dr-markus-feldmann', href: 'STROHM.ENERGY - COMPANY - Who - Product Experts - EN.dc.html#expert-fluxx' };
        sp.push(bid);
      }
      products.push({ id: e[1], label: e[1], cat: e[4], kw: (e[1] + ' ' + e[4] + ' ' + e[5]).toLowerCase(), logo: 'assets/logos/' + e[1] + '-symbol.' + (LOGO[e[1]] || 'svg'), specialists: sp });
    });

    // DEPTH-648: 30 language people (CONCEPT PROFILE · FICTIONAL): one per route × language. Replace before go-live.
    var LP = {
      product: { English: ['Oliver Grant', 'London'], Dutch: ['Sanne de Wit', 'Antwerp'], German: ['Jonas Keller', 'Cologne'], Italian: ['Chiara Conti', 'Turin'], Spanish: ['Pablo Navarro', 'Madrid'], French: ['Léa Martin', 'Lille'] },
      system: { English: ['Hannah Price', 'Bristol'], Dutch: ['Daan Peeters', 'Ghent'], German: ['Mia Hoffmann', 'Stuttgart'], Italian: ['Luca Ferri', 'Bologna'], Spanish: ['Carmen Ruiz', 'Barcelona'], French: ['Hugo Lefèvre', 'Lyon'] },
      project: { English: ['James Whitfield', 'Leeds'], Dutch: ['Eva Janssens', 'Leuven'], German: ['Tobias Wagner', 'Munich'], Italian: ['Marco Rinaldi', 'Milan'], Spanish: ['Lucía Ortega', 'Valencia'], French: ['Camille Bernard', 'Nantes'] },
      webshop: { English: ['Emily Carter', 'Manchester'], Dutch: ['Lotte Vermeulen', 'Rotterdam'], German: ['Lena Fischer', 'Hamburg'], Italian: ['Giorgia Bassi', 'Florence'], Spanish: ['Marta Gil', 'Seville'], French: ['Chloé Dubois', 'Bordeaux'] },
      local: { English: ['Daniel Brooks', 'Dublin'], Dutch: ['Thijs Bakker', 'Utrecht'], German: ['Felix Braun', 'Vienna'], Italian: ['Alessandro Greco', 'Rome'], Spanish: ['Javier Morales', 'Zaragoza'], French: ['Antoine Girard', 'Toulouse'] }
    };
    LP.product.Arabic = ["Omar Haddad","Dubai"]; LP.system.Arabic = ["Layla Nasser","Amman"]; LP.project.Arabic = ["Karim Saleh","Riyadh"]; LP.webshop.Arabic = ["Nour Khalil","Doha"]; LP.local.Arabic = ["Yasmin Farouk","Cairo"]; LP.product.Chinese = ["Chen Wei","Shenzhen"]; LP.system.Chinese = ["Lin Mei","Taipei"]; LP.project.Chinese = ["Zhang Hao","Shanghai"]; LP.webshop.Chinese = ["Wong Ka Yan","Hong Kong"]; LP.local.Chinese = ["Tan Li Ting","Singapore"]; LP.product.Portuguese = ["Tiago Almeida","Lisbon"]; LP.system.Portuguese = ["Beatriz Costa","Porto"]; LP.project.Portuguese = ["Rafael Lima","São Paulo"]; LP.webshop.Portuguese = ["Inês Rocha","Lisbon"]; LP.local.Portuguese = ["Lucas Pereira","Rio de Janeiro"]; LP.product.Turkish = ["Emre Yılmaz","Istanbul"]; LP.system.Turkish = ["Elif Demir","Ankara"]; LP.project.Turkish = ["Burak Kaya","Izmir"]; LP.webshop.Turkish = ["Zeynep Çelik","Istanbul"]; LP.local.Turkish = ["Mert Şahin","Bursa"]; LP.product.Hindi = ["Arjun Sharma","Pune"]; LP.system.Hindi = ["Priya Nair","Bengaluru"]; LP.project.Hindi = ["Rohan Gupta","Delhi"]; LP.webshop.Hindi = ["Ananya Iyer","Mumbai"]; LP.local.Hindi = ["Vikram Singh","Jaipur"]; LP.product.Japanese = ["Haruto Sato","Tokyo"]; LP.system.Japanese = ["Yui Tanaka","Osaka"]; LP.project.Japanese = ["Kenji Watanabe","Nagoya"]; LP.webshop.Japanese = ["Aiko Suzuki","Tokyo"]; LP.local.Japanese = ["Ren Kobayashi","Fukuoka"]; LP.product.Ukrainian = ["Oksana Kovalenko","Kyiv"]; LP.system.Ukrainian = ["Andrii Shevchenko","Lviv"]; LP.project.Ukrainian = ["Iryna Bondarenko","Kyiv"]; LP.webshop.Ukrainian = ["Taras Melnyk","Lviv"]; LP.local.Ukrainian = ["Olena Tkachenko","Odesa"]; /* DEPTH-657 */
    var LPT = { product: 'Product specialist', system: 'System specialist', project: 'Project specialist', webshop: 'Webshop specialist & account manager', local: 'Local sales' };
    Object.keys(LP).forEach(function (r) { Object.keys(LP[r]).forEach(function (lg) { var x = LP[r][lg], id = 'lp-' + r + '-' + lg.toLowerCase(); P[id] = { id: id, role: r, roleTitle: LPT[r], name: x[0], title: LPT[r] + ' · ' + lg, base: x[1], lang: lg === 'English' ? ['English'] : [lg, 'English'], markets: [], products: [], intro: '', concept: true, kind: 'lang', slot: 'who-lab-' + id }; }); });
    P.intl = { id: 'intl', role: 'route', roleTitle: 'International Sales & Partnerships', name: 'International Sales & Partnerships', title: 'Central International Sales team', base: 'Central team', tz: 'Europe/Brussels', lang: ['English'], markets: [], products: [], intro: '', concept: false, kind: 'route', href: '#contact', slot: 'who-lab-international-sales' };
    Object.keys(P).forEach(function (k) { P[k].initials = initials(P[k].name || '?'); P[k].tag = P[k].concept ? CONCEPT : ''; });
    return { C: C, subs: subs, P: P, products: products, roles: ROLES, regions: REGIONS };
  }

  // Coverage of one country for a role: solid | outlined | dotted | excluded
  function coverage(db, code, role) {
    var c = db.C[code];
    if (!c) return { state: 'dotted', sub: null };
    if (c.state === 'excluded') return { state: 'excluded', sub: null };
    if (role === 'webshop') return (c.region === 'europe' && c.sub && c.sub !== 'CENTRAL') ? { state: 'solid', sub: c.sub } : { state: 'dotted', sub: c.sub };
    return { state: c.state, sub: c.sub };
  }
  function subForUnit(db, code, unit) {
    var c = db.C[code]; if (!c) return null;
    if (unit) { for (var k in db.subs) { if ((db.subs[k].units || []).indexOf(unit) >= 0) return k; } }
    return c.sub;
  }


  // DEPTH-648: official languages among the six (EN, NL, DE, IT, ES, FR). English is always added.
  var OFFICIAL = { BE: ['Dutch', 'French', 'German'], NL: ['Dutch', 'German'], SR: ['Dutch'], LU: ['French', 'German'], CH: ['German', 'French', 'Italian'], AT: ['German'], DE: ['German'], LI: ['German'], FR: ['French'], MC: ['French', 'Italian'], IT: ['Italian'], SM: ['Italian'], VA: ['Italian'], ES: ['Spanish'], AD: ['Spanish', 'French'], CA: ['French'], HT: ['French'], GQ: ['Spanish', 'French'],
    MX: ['Spanish'], GT: ['Spanish'], HN: ['Spanish'], SV: ['Spanish'], NI: ['Spanish'], CR: ['Spanish'], PA: ['Spanish'], CU: ['Spanish'], DO: ['Spanish'], CO: ['Spanish'], VE: ['Spanish'], EC: ['Spanish'], PE: ['Spanish'], BO: ['Spanish'], CL: ['Spanish'], AR: ['Spanish'], UY: ['Spanish'], PY: ['Spanish'],
    SN: ['French'], US: ['Spanish'], PR: ['Spanish'], PT: ['Spanish'], MT: ['Italian'], RO: ['French'], MD: ['French'], DZ: ['French'], MA: ['French', 'Spanish'], TN: ['French'], MR: ['French'], LB: ['French'], CI: ['French'], BJ: ['French'], TG: ['French'], ML: ['French'], BF: ['French'], NE: ['French'], GN: ['French'], CM: ['French'], CD: ['French'], CG: ['French'], GA: ['French'], TD: ['French'], CF: ['French'], MG: ['French'], RW: ['French'], BI: ['French'], DJ: ['French'], KM: ['French'], SC: ['French'], VU: ['French'], NC: ['French'] };
  var EXTRA = {"UA":["Ukrainian"],"ES":["Portuguese"],"BR":["Spanish"],"AE":["Arabic"],"SA":["Arabic"],"QA":["Arabic"],"OM":["Arabic"],"KW":["Arabic"],"BH":["Arabic"],"JO":["Arabic"],"LB":["Arabic"],"IQ":["Arabic"],"EG":["Arabic"],"LY":["Arabic"],"DZ":["Arabic"],"MA":["Arabic"],"TN":["Arabic"],"MR":["Arabic"],"SD":["Arabic"],"YE":["Arabic"],"PS":["Arabic"],"SY":["Arabic"],"DJ":["Arabic"],"KM":["Arabic"],"TD":["Arabic"],"CN":["Chinese"],"HK":["Chinese"],"TW":["Chinese"],"SG":["Chinese"],"MO":["Chinese"],"PT":["Portuguese"],"BR":["Portuguese"],"AO":["Portuguese"],"MZ":["Portuguese"],"CV":["Portuguese"],"GW":["Portuguese"],"ST":["Portuguese"],"TL":["Portuguese"],"TR":["Turkish"],"CY":["Turkish"],"IN":["Hindi"],"JP":["Japanese"]}; /* DEPTH-657 */
  Object.keys(EXTRA).forEach(function (c) { OFFICIAL[c] = (OFFICIAL[c] || []).concat(EXTRA[c].filter(function (l) { return (OFFICIAL[c] || []).indexOf(l) < 0; })); });
  function langsFor(code) { var o = (OFFICIAL[code] || []).slice(); if (o.indexOf('English') < 0) o.push('English'); return o; }
  window.WHO_LAB = { T: T, CONCEPT: CONCEPT, ROLES: ROLES, REGIONS: REGIONS, C0: C0, MICRO: MICRO, EXCLUDED: EXCLUDED, EXCLUDED_NOTE: EXCLUDED_NOTE, SUBS: SUBS, LANG: LANG, UNIT_LABEL: UNIT_LABEL, build: build, langsFor: langsFor, OFFICIAL: OFFICIAL, coverage: coverage, subForUnit: subForUnit, slug: slug };
})();
