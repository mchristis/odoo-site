/* Single data source for the global NavBar and its four menus (rendered by ProductsPanel.dc.html).
   Edit menu texts here only. History: NAV-2 (moved from NavBar), NAV-8 (all four menus, one pattern). */
(function () {
  const COLOUR = {
    ANDO:"#CDD62B", LINA:"#B5C64A", PROP:"#527A83", MOEBIUS:"#F1931B", FLUXX:"#FDC706", NENDO:"#1B8B9A", FEU:"#ED704C",
    OGO:"#00A0E3", XOOM:"#8EB15F", AIRO:"#0083BB", GLOW:"#FCDE15", CHILL:"#6BC0B0", SYNQ:"#598F94",
    OZZY:"#8BCF3F", MOX:"#D8392C", TOGU:"#C48723", DODO:"#E5B73B", SHELTR:"#5B6592", MUKI:"#DF550C", WURK:"#9E3D2E",
    EMON:"#21AE8F", KALK:"#C4B1C8", TRIBE:"#689AB2", PUSH:"#3EAB57", PACT:"#D6990E", KERN:"#1DABC1", DEPOT:"#7690C9", AGRIX:"#6B8E4E", TERRIX:"#6B755F", PONTIX:"#06768A", TECTIX:"#4A5B73", PARX:"#7A9337",
  };
  const HREF = {
    ANDO:"ANDO - PRODUCT - Overview - EN.dc.html", LINA:"LINA - PRODUCT - Overview - EN.dc.html", MOEBIUS:"MOEBIUS - PRODUCT - Overview - EN.dc.html", AGRIX:"AGRIX - PRODUCT - Overview - EN.dc.html", TERRIX:"TERRIX - PRODUCT - Overview - EN.dc.html", PONTIX:"PONTIX - PRODUCT - Overview - EN.dc.html", TECTIX:"TECTIX - PRODUCT - Overview - EN.dc.html", PARX:"PARX - PRODUCT - Overview - EN.dc.html", NENDO:"NENDO - PRODUCT - Overview - EN.dc.html",
    SYNQ:"SYNQ - PRODUCT - Overview - EN.dc.html", OZZY:"OZZY - PRODUCT - Overview - EN.dc.html", MOX:"MOX - PRODUCT - Overview - EN.dc.html", TOGU:"TOGU - PRODUCT - Overview - EN.dc.html",
    FLUXX:"FLUXX - PRODUCT - Overview - EN.dc.html", OGO:"OGO - PRODUCT - Overview - EN.dc.html", XOOM:"XOOM - PRODUCT - Overview - EN.dc.html", AIRO:"AIRO - PRODUCT - Overview - EN.dc.html",
    FEU:"FEU - PRODUCT - Overview - EN.dc.html", CHILL:"CHILL - PRODUCT - Overview - EN.dc.html", GLOW:"GLOW - PRODUCT - Overview - EN.dc.html", PROP:"PROP - PRODUCT - Overview - EN.dc.html",
    DODO:"DODO - PRODUCT - Overview - EN.dc.html", SHELTR:"SHELTR - PRODUCT - Overview - EN.dc.html", MUKI:"MUKI - PRODUCT - Overview - EN.dc.html", WURK:"WURK - PRODUCT - Overview - EN.dc.html",
    EMON:"EMON - SYSTEM - Overview - EN.dc.html", KALK:"KALK - SYSTEM - Overview - EN.dc.html", TRIBE:"TRIBE - SYSTEM - Overview - EN.dc.html", PUSH:"PUSH - SYSTEM - Overview - EN.dc.html", PACT:"PACT - SYSTEM - Overview - EN.dc.html", KERN:"KERN - SYSTEM - Overview - EN.dc.html", DEPOT:"DEPOT - SYSTEM - Overview - EN.dc.html",
  };
  // Brand / system item: name = code, what = short descriptor, text = one explanatory sentence, hover = brand accent.
  const b = (code, what, text) => ({ name: code, subtitle: what, text, href: HREF[code] || "#", colour: COLOUR[code] || "#4F4F4E" });
  // Plain item: hover = dark grey.
  const i = (name, what, text, href) => ({ name, subtitle: what, text, href, colour: "#4F4F4E" });

  // layout (desktop): columns = [{ span, groups: [group indexes stacked in that column] }]; a group's split = items per inner column when span > 1.
  const MENUS = [
    { key: "products", label: "Products", columns: 5, keepHeadings: true, viewAll: null, compact: true,
      landing: { label: "All products", href: "STROHM.ENERGY - SITE - Homepage - EN.dc.html#ecosystem" },
      layout: [ { span: 1, groups: [0, 1] }, { span: 1, groups: [2, 9, 4] }, { span: 1, groups: [3] }, { span: 1, groups: [5] }, { span: 1, groups: [6, 7, 8] } ],
      groups: [
      { title: "Generate Energy", items: [b("ANDO","Solar generation","Solar modules for residential, commercial and utility applications."), b("LINA","Vertical flat-roof solar","Bifacial solar panels and integrated mounting for flat roofs and green roofs."), b("PROP","Wind generation","Wind turbines for distributed renewable electricity generation.")] },
      { title: "Convert Energy", items: [b("MOEBIUS","Power conversion","Inverters converting and managing power from solar and battery systems.")] },
      { title: "Store Energy", items: [b("FLUXX","Energy storage","Battery systems for storing solar energy and managing electricity demand.")] },
      { title: "Use Energy", items: [b("NENDO","Thermal systems","Heat pumps for space heating, cooling and hot water."), b("FEU","Radiant heating","Infrared heating systems for direct and targeted warmth."), b("XOOM","EV charging","Smart charging systems for electric vehicles."), b("AIRO","Airflow systems","Ventilation and heat recovery systems for indoor environments."), b("GLOW","Solar lighting","Solar-powered lighting for outdoor and infrastructure applications.")] },
      { title: "Measure and Control", items: [b("SYNQ","Energy metering","Smart meters and sensors providing real-time energy data."), b("OZZY","Energy switching","Smart plugs and switches controlling connected electrical loads.")] },
      { title: "Build and Connect", items: [b("MOX","Architectural PV","Architectural solar PV structures."), b("AGRIX","Agri-PV structures","Structures combining agricultural land use with solar generation."), b("TERRIX","Utility PV mounting","Ground-mounted structures for utility-scale solar installations."), b("PONTIX","Floating PV mounting","Floating mounting structures designed to support photovoltaic modules on suitable water surfaces."), b("TECTIX","Roof PV mounting","Mounting systems for flat roofs and pitched roofs with tiles, slates and other coverings."), b("PARX","Solar parking","Solar parking structures for bicycles, scooters, motorhomes, cars and trucks."), b("CHILL","Energy-integrated infrastructure","Outdoor furniture and infrastructure integrating renewable energy."), b("TOGU","Electrical connectivity","Cables, connectors and electrical installation components.")] },
      { title: "Protect the System", items: [b("DODO","Bird protection","Protective solutions preventing birds from nesting beneath solar modules."), b("SHELTR","Asset protection","Protective enclosures and shelters for energy equipment.")] },
      { title: "Complete Systems", items: [b("MUKI","Energy sets, defined","Preconfigured energy packages with compatible system components.")] },
      { title: "Tools", items: [b("WURK","Installation equipment","Practical tools, access equipment and handling systems for installers.")] },
      { title: "Store Water", items: [b("OGO","Water storage","Rainwater storage with EMON monitoring and control.")] },
    ] },
    { key: "systems", label: "Systems", columns: 3, keepHeadings: true, viewAll: null,
      landing: { label: "All systems", href: "STROHM.ENERGY - SITE - Homepage - EN.dc.html#systems" },
      layout: [ { span: 1, groups: [0] }, { span: 2, groups: [1] } ],
      groups: [
      { title: "Energy Platform", items: [b("EMON","Energy management","Monitor, control and optimise energy generation, storage and consumption."), b("KALK","Energy calculation","Design energy systems, calculate performance and prepare technical proposals.")] },
      { title: "Installer and Partner Network", split: [3, 2], items: [b("KERN","Operational control","Manage installation workflows, projects, teams and business operations."), b("TRIBE","Distributed energy systems","Connect installers, distributors and technical partners within an energy network."), b("PUSH","Installer lead distribution","Assign qualified customer enquiries exclusively to one selected installer."), b("PACT","Group purchasing","Combine approved partner demand to coordinate collective purchasing."), b("DEPOT","Partner stockholding","Enable approved partners to hold and release contracted EU stock locally.")] },
    ] },
    { key: "projects", label: "Projects", columns: 3, keepHeadings: true, viewAll: null,
      landing: { label: "Projects overview", href: "STROHM.ENERGY - PROJECT - Overview - EN.dc.html" },
      layout: [ { span: 1, groups: [0] }, { span: 1, groups: [1] }, { span: 1, groups: [2] } ],
      groups: [
      { title: "Engineering for EPC Partners", items: [
        i("STRØHM LAB", "Custom Product engineering", "Design and develop dedicated products, hardware and components for EPC partners.", "STROHM.ENERGY - SITE - Product Lab and R and D - EN.dc.html"),
        i("STRØHM ENGINEERING", "Project engineering", "Technical design, dimensioning and system integration for EPC-led energy projects.", "STROHM.ENERGY - PROJECT - Engineering - EN.dc.html"),
      ] },
      { title: "Project Applications", items: [
        i("Residential", "Homes and communities", "Energy solutions for houses, apartments and shared residential buildings.", "STROHM.ENERGY - PROJECT - Residential - EN.dc.html"),
        i("Commercial", "Business and industry", "Energy systems for commercial buildings, agriculture and industrial sites.", "STROHM.ENERGY - PROJECT - Commercial - EN.dc.html"),
        i("Utility and Infrastructure", "Large-scale applications", "Renewable energy projects for larger sites and public infrastructure.", "STROHM.ENERGY - PROJECT - Utility - EN.dc.html"),
      ] },
      { title: "Project Partners", items: [
        i("Find Project Partners", "Partner network", "Find EPC contractors, installers and technical partners for project delivery.", "STROHM.ENERGY - SITE - Find an Installer - EN.dc.html"),
      ] },
    ] },
    { key: "finance", label: "Finance", columns: 4, keepHeadings: true, viewAll: null,
      landing: { label: "Finance overview", href: "STROHM.ENERGY - FINANCE - Overview - EN.dc.html" },
      layout: [ { span: 1, groups: [0] }, { span: 1, groups: [1] }, { span: 1, groups: [2] }, { span: 1, groups: [3] } ],
      groups: [
      { title: "Finance Equipment", items: [
        i("Asset Finance", "Equipment financing", "Finance energy equipment through structured payment or leasing arrangements.", "STROHM.ENERGY - FINANCE - LEASE - EN.dc.html"),
      ] },
      { title: "Invest in Projects", items: [
        i("Project Investment", "Energy project capital", "Submit projects or explore opportunities to invest in energy infrastructure.", "STROHM.ENERGY - FINANCE - Invest - EN.dc.html"),
      ] },
      { title: "Invest in Products", items: [
        i("Product Investment", "Product Angel", "Support product development and deployment through structured investment.", "STROHM.ENERGY - FINANCE - Product Angel - EN.dc.html"),
      ] },
      { title: "Invest Together", items: [
        i("Energy Cooperatives", "Collective ownership", "Develop and finance energy projects through shared participation.", "STROHM.ENERGY - FINANCE - Cooperatives - EN.dc.html"),
      ] },
    ] },
    { key: "company", label: "Company", right: true, columns: 3, keepHeadings: true, viewAll: null,
      layout: [ { span: 3, groups: [0] } ],
      groups: [
      { title: "All about", href: "STROHM.ENERGY - SITE - About - EN.dc.html", split: [2, 2, 2], rowsFirst: true, items: [
        i("Why", "Purpose", "Why energy systems need connection and what makes STRØHM.ENERGY different.", "STROHM.ENERGY - COMPANY - Why - EN.dc.html"),
        i("What", "Activities", "Our products, systems and engineering activities.", "STROHM.ENERGY - COMPANY - What - EN.dc.html"),
        i("Who", "People", "The people who make it happen.", "STROHM.ENERGY - COMPANY - Who - EN.dc.html"),
        i("Where", "Locations and data", "Twelve hubs, one manufacturing organisation, and where your energy data is stored.", "STROHM.ENERGY - COMPANY - Where - EN.dc.html"),
        i("How", "Methods", "Product development, manufacturing, quality and operational processes.", "STROHM.ENERGY - COMPANY - How - EN.dc.html"),
        i("When", "Timeline", "Our experience, milestones and future development.", "STROHM.ENERGY - COMPANY - When - EN.dc.html"),
      ] },
    ] },
  ];

  window.STROHM_NAV = { COLOUR, HREF, MENUS, menu: (k) => MENUS.find((m) => m.key === k) };
})();
