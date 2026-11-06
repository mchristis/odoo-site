// Generated from uploads/NENDO_EMON_Functions_2026-09-26_v1.md (DEPTH-25). Text verbatim; links moved to sources.
window.NENDO_EMON_FUNCTIONS = [
 {
  "n": 2,
  "id": "ai-and-vpp",
  "title": "EMON AI and VPP",
  "heading": "2. EMON AI layer and VPP: the system-level advantage",
  "lead": "A heat pump alone saves energy; a heat pump coordinated by EMON also saves money, peaks and grid capacity, because it decides when to run instead of only how hot to run.",
  "tile": "EMON turns NENDO into a flexible load. The AI forecasts heat demand, solar yield and prices 36 hours ahead, then plans every compressor hour. Comfort limits come first. Cost, peak and grid signals decide the rest.",
  "blocks": [
   {
    "kind": "p",
    "text": "A heat pump is the largest controllable electrical load in most homes. In a typical European house it uses more electricity per year than all other appliances together. That makes it the most valuable device for energy management, and the most expensive one to leave unmanaged."
   },
   {
    "kind": "p",
    "text": "Without coordination, a heat pump reacts to one input: the room or flow temperature. It starts when the house cools down, regardless of whether electricity is cheap or expensive, whether the panels are producing, whether the battery is full or whether the car is charging at the same moment. The result is predictable: the heat pump runs hardest at 07:00 and 18:00, exactly when prices and grid load peak."
   },
   {
    "kind": "p",
    "text": "EMON changes the question the heat pump answers. Instead of \"is it cold?\" the question becomes \"when is the best moment to make the heat this house will need?\""
   },
   {
    "kind": "p",
    "text": "The EMON AI layer works in four steps."
   },
   {
    "kind": "li",
    "text": "Learn the building. From measured indoor temperature, outdoor temperature and heat pump power, EMON builds a thermal model of the house: how fast it loses heat, how long it holds heat, how much heat the floor or radiators store. The model updates continuously. After roughly two to four weeks of operation it is specific to that house.",
    "num": "1"
   },
   {
    "kind": "li",
    "text": "Forecast. EMON combines the weather forecast, the solar forecast for the installed PV array, the household consumption pattern and day-ahead electricity prices into a 36-hour outlook.",
    "num": "2"
   },
   {
    "kind": "li",
    "text": "Plan. An optimiser calculates the lowest-cost heating plan that keeps every room and the hot water tank within the comfort limits set by the homeowner. It shifts heat production to cheap hours, solar hours and low-peak hours.",
    "num": "3"
   },
   {
    "kind": "li",
    "text": "Execute and correct. The plan is sent to NENDO as set points and release signals. Every 15 minutes EMON compares forecast with reality and replans.",
    "num": "4"
   },
   {
    "kind": "p",
    "text": "The \"AI\" is not a chatbot. It is a forecasting and optimisation engine. What makes it valuable is that it controls multiple devices with one plan: NENDO, the home battery, the PV inverter and the EV charger no longer compete for the same cheap hour or push the same monthly peak."
   },
   {
    "kind": "h",
    "text": "Why this matters across Europe: capacity-based grid fees"
   },
   {
    "kind": "p",
    "text": "In a growing number of European countries, part of the grid fee depends on the highest power drawn from the grid, measured per quarter hour. A heat pump raises that peak when it runs at the same time as cooking or EV charging. Where such a capacity fee applies, it belongs in the heating cost optimisation."
   },
   {
    "kind": "p",
    "text": "EMON treats the monthly peak as a hard budget. When the heat pump, an induction hob and an EV charger would overlap, EMON delays or modulates the heat pump for a few minutes. The building's thermal mass absorbs the delay without a noticeable temperature change."
   },
   {
    "kind": "h",
    "text": "VPP: from household device to grid resource"
   },
   {
    "kind": "p",
    "text": "A virtual power plant aggregates many small flexible devices and offers their combined flexibility to the grid or the market. A fleet of NENDO heat pumps is a strong VPP asset because heat is cheap to store: in the building fabric, in the buffer tank and in the DHW tank."
   },
   {
    "kind": "table",
    "head": [
     "VPP event",
     "What NENDO does",
     "Homeowner effect"
    ],
    "rows": [
     {
      "cells": [
       "Surplus / negative prices",
       "Pre-heat house and tank, raise DHW set point within limits",
       "Heat bought at very low or negative cost"
      ]
     },
     {
      "cells": [
       "Grid stress / high prices",
       "Coast on stored heat, reduce compressor speed",
       "No action needed, comfort limits respected"
      ]
     },
     {
      "cells": [
       "Local congestion signal",
       "Cap power for a defined window",
       "Supports grid operator, avoids peak"
      ]
     }
    ]
   },
   {
    "kind": "p",
    "text": "[Likely] In most European markets, paid residential heat pump flexibility is still emerging. The honest claim today is: NENDO with EMON is VPP-ready, and every VPP function also serves the homeowner directly through dynamic prices and capacity-based grid fees. In Germany, §14a EnWG already gives reduced grid fees for controllable heat pumps: a concrete market for the same function."
   }
  ],
  "adv": [],
  "screenSpec": "\"Today's plan\" screen: 24-hour timeline with price bars (grey), solar forecast (light grey area), planned heat pump blocks (black) and battery state (dark grey line). Top card: \"Plan saves €x today vs. unmanaged\" only when measured baseline exists. Bottom: comfort band per zone.",
  "screen": "TodaysPlan",
  "sources": []
 },
 {
  "n": 3,
  "id": "heating-scheduling",
  "title": "Heating scheduling",
  "heading": "3. Heating scheduling",
  "lead": "The homeowner sets when the house must be warm; EMON decides when NENDO actually produces that heat.",
  "tile": "Set comfort periods per zone and per day. EMON translates them into an operating plan for NENDO that reaches the target temperature on time, at the lowest energy cost.",
  "blocks": [
   {
    "kind": "p",
    "text": "A classic thermostat schedule is a switch: at 06:30 the set point rises from 18 °C to 21 °C, and the heat pump starts working at full power to close the gap. With a heat pump this is inefficient. The high flow temperature needed for a fast warm-up lowers the coefficient of performance, and the warm-up usually coincides with the morning price and grid peak."
   },
   {
    "kind": "p",
    "text": "NENDO with EMON separates two things that a thermostat combines: the comfort schedule and the production schedule."
   },
   {
    "kind": "p",
    "text": "The comfort schedule is what the homeowner cares about. It defines per zone and per day which temperature is required at which time. Typical profiles are \"Home\", \"Away\", \"Night\" and \"Holiday\". The homeowner edits them in the EMON app with a simple weekly grid: drag a block, set a temperature, done. Zones follow the hydraulic layout of the installation, for example ground floor underfloor heating and first floor radiators."
   },
   {
    "kind": "p",
    "text": "The production schedule is what EMON calculates. It answers the question: at which moments must NENDO run, at which power and at which flow temperature, so that every zone reaches its comfort temperature exactly when required? Because EMON knows how fast each zone heats up and cools down, it can start earlier at a lower flow temperature instead of later at a higher one. A slower, lower-temperature warm-up improves efficiency and avoids the start-up peak."
   },
   {
    "kind": "p",
    "text": "Scheduling is also where the other EMON functions come together. A production plan can move heat into a solar hour, into a cheap tariff hour or away from a moment when the EV charger is active. The homeowner only sees the result: the house is warm when expected."
   },
   {
    "kind": "p",
    "text": "Manual overrides remain available at all times. A \"Boost\" or \"Hold\" command from the app or a room unit takes priority over the plan for a defined period, after which EMON returns to the schedule and replans around the change."
   }
  ],
  "adv": [
   {
    "t": "Learned warm-up time",
    "d": "A fixed thermostat needs a manual \"start earlier\" setting that is wrong for half the year. EMON measures the actual warm-up time per zone as a function of outdoor temperature and adapts it daily. In October a zone may need 40 minutes; in January two hours. The homeowner never adjusts this."
   },
   {
    "t": "Lower flow temperatures",
    "d": "Every degree lower flow temperature improves heat pump efficiency. Because EMON plans ahead, it can use the longest available window and the lowest possible flow temperature. [Likely] This is the single most reliable efficiency gain of scheduling, independent of tariffs."
   },
   {
    "t": "Fewer compressor starts",
    "d": "Short, frequent cycles wear the compressor and reduce efficiency. A planned schedule produces longer, steadier runs. The installer sees the effect as a lower start count per day in the diagnostics view."
   },
   {
    "t": "Occupancy-aware adjustments",
    "d": "With presence information (app geofencing or an optional sensor), EMON can shift a comfort block when the household comes home later or leaves earlier than planned. This is opt-in and always visible to the homeowner."
   },
   {
    "t": "Price and peak coordination",
    "d": "The production schedule is the input for dynamic-tariff optimisation, solar-surplus heating and capacity tariff control. Without scheduling, those functions have nothing to move. Scheduling is the base layer of the entire system."
   },
   {
    "t": "One schedule, all devices",
    "d": "Where a thermostat only knows the heat pump, EMON also knows the battery, the EV charger and the PV forecast. It avoids planning the heat pump warm-up in the same quarter hour as a planned EV charge, which keeps the monthly peak down."
   },
   {
    "t": "Transparency",
    "d": "The app shows both layers: what the homeowner asked for, and what EMON plans to do. Trust in automation comes from visibility, not from promises."
   }
  ],
  "screenSpec": "\"Schedule\" screen: weekly grid per zone, comfort blocks in dark grey with the target temperature label. Below, a toggle \"Show EMON plan\" overlays the planned NENDO operation as black bars. Override buttons: Boost 1 h, Hold until next block, Away mode.",
  "screen": "Schedule",
  "sources": []
 },
 {
  "n": 4,
  "id": "pre-heating",
  "title": "Pre-heating and pre-cooling",
  "heading": "4. Pre-heating / pre-cooling",
  "lead": "The building itself is the cheapest battery in the house; pre-heating and pre-cooling use it deliberately.",
  "tile": "EMON stores heat or cooling in the building ahead of expensive, high-demand or low-solar periods. NENDO then coasts through those periods while every room stays inside the comfort band.",
  "blocks": [
   {
    "kind": "p",
    "text": "Every building stores heat. Concrete floors, brick walls, screed with underfloor heating and the water in radiators and buffer tanks all hold thermal energy. A well-insulated house with underfloor heating can lose less than one degree over several hours without any heat input. That stored heat is flexibility: it means the heat pump does not need to run at the exact moment the heat is used."
   },
   {
    "kind": "p",
    "text": "Pre-heating raises the indoor temperature slightly above the normal set point, within a band the homeowner accepts, before a period when running the heat pump would be expensive or undesirable. Pre-cooling does the same in summer for NENDO models with cooling: the house is cooled slightly more during solar hours so it stays comfortable through the evening without running at the price peak."
   },
   {
    "kind": "p",
    "text": "Octopus Energy teaches its Cosy customers to do this by hand: raise the target temperature 1 to 2 °C during the cheap windows so the home stores extra heat and the heat pump avoids the expensive periods (Octopus Energy). That advice is correct, but it depends on fixed tariff windows and on the homeowner setting it up. With a dynamic tariff the cheap hours change every day. Manual pre-heating cannot follow them."
   },
   {
    "kind": "p",
    "text": "EMON automates the principle. The homeowner defines a comfort band per zone, for example 20.5 to 22 °C in the living room. Inside that band EMON is free to choose. It calculates each day which hours are best for storing heat, how much to store and when to let the temperature drift back down."
   }
  ],
  "adv": [
   {
    "t": "Building-specific storage model",
    "d": "How much heat a house can store and for how long depends on insulation, floor type, glazing and orientation. EMON learns this from operating data. A light timber-frame house gets short, frequent pre-heat periods; a heavy concrete house with underfloor heating gets longer, deeper ones. No generic rule can match that."
   },
   {
    "t": "Weather-aware decisions",
    "d": "Pre-heating on a sunny morning is pointless when solar gains will warm the house by noon. EMON includes solar gain and the outdoor temperature forecast in the model. It stores heat when that heat will actually be needed, not by habit."
   },
   {
    "t": "Tariff-independent",
    "d": "Pre-heating works with fixed windows (day and night tariff), with dynamic hourly or quarter-hourly prices and with grid signals. The logic is the same; only the input changes. When the homeowner changes supplier, the function keeps working."
   },
   {
    "t": "Peak avoidance",
    "d": "Where grid fees depend on the monthly peak, the most valuable pre-heat is often not the cheapest hour but the one that avoids overlap with cooking and EV charging. Pre-heating at 16:00 means NENDO can stay at minimum load at 18:30, when the monthly peak is usually set."
   },
   {
    "t": "VPP capability",
    "d": "A heat pump that can move its load by two to four hours without comfort loss is exactly what a grid operator or aggregator needs. Pre-heating is the mechanism behind every heat pump VPP event: absorb energy before the event, coast during it."
   },
   {
    "t": "Comfort protection",
    "d": "The comfort band is a hard constraint. EMON never goes below the lower limit to save money, and it never goes above the upper limit to store energy. The homeowner can narrow the band at any time; a narrower band simply means less flexibility and a smaller saving."
   },
   {
    "t": "Pre-cooling in summer",
    "d": "Where NENDO supports cooling, solar surplus between 11:00 and 16:00 is used to cool the building structure. Evening cooling demand drops, and self-consumed solar replaces imported electricity at the evening price."
   }
  ],
  "screenSpec": "\"Comfort band\" screen: per zone a vertical slider with two handles (lower and upper limit). Below, a 24-hour chart shows the planned indoor temperature curve inside the band (dark grey line in a light grey band) and the heat pump runtime blocks (black). A short label explains each stored-heat period, for example \"Storing heat before 17:00 price peak\".",
  "screen": "TodaysPlan",
  "sources": [
   {
    "label": "Octopus Energy",
    "url": "https://octopus.energy/blog/cosy-controls/"
   }
  ]
 },
 {
  "n": 5,
  "id": "solar-surplus",
  "title": "Solar-surplus heating",
  "heading": "5. Solar-surplus heating",
  "lead": "Solar power exported for a few cents and bought back in the evening at full price is the most common waste in a European solar home; NENDO converts that surplus into stored heat instead.",
  "tile": "When the PV system produces more than the house uses, EMON directs the surplus into NENDO: space heating, buffer or hot water. Solar energy is stored as heat and used later.",
  "blocks": [
   {
    "kind": "p",
    "text": "Where net metering has ended, solar export is paid at a low feed-in price while imported electricity carries the full energy price, network costs and levies. Every kilowatt-hour used on site is therefore worth several times more than a kilowatt-hour exported. Batteries are one answer. A heat pump combined with thermal storage is often the cheaper one: a litre of water heated from 45 °C to 55 °C stores energy at a fraction of the cost per kilowatt-hour of a lithium battery."
   },
   {
    "kind": "p",
    "text": "Solar-surplus heating works as follows. EMON reads the net grid flow at the connection point through the digital meter interface (P1 port) or its own meter. When export exceeds a threshold, EMON raises the NENDO set points in a defined order, for example: first the DHW tank, then the buffer, then the floor. The heat pump modulates its power to follow the available surplus as closely as possible. When the surplus falls away, set points return to normal."
   },
   {
    "kind": "p",
    "text": "Because NENDO is an inverter heat pump, it can run at partial load. That allows it to follow solar production instead of switching on and off. On a partly cloudy day EMON smooths the control so the compressor does not react to every passing cloud."
   }
  ],
  "adv": [
   {
    "t": "Forecast, not only reaction",
    "d": "Simple surplus control starts the heat pump when export is measured. EMON also uses the solar forecast. On a day with strong forecast production, it avoids heating the tank in the night at grid price and reserves that capacity for the afternoon. On a grey day it does the opposite. This prevents the most common mistake: a tank already full at 11:00 when the solar surplus starts."
   },
   {
    "t": "Priority with the battery",
    "d": "When a home battery is present, EMON decides which storage is more valuable at that moment. Heat storage is cheaper per kilowatt-hour but can only serve heat demand; the battery can serve any load. On a winter day EMON may prefer heat. On a summer day with little heat demand, the battery fills first and the tank takes the rest."
   },
   {
    "t": "Priority with the EV charger",
    "d": "EMON allocates surplus between NENDO and the EV charger according to rules the homeowner sets, for example \"car first on weekdays\" or \"hot water first, car gets the rest\"."
   },
   {
    "t": "Efficiency gain",
    "d": "Afternoon air temperatures are higher than night temperatures. An air-to-water heat pump running at 14:00 works with warmer source air than at 04:00, which improves the coefficient of performance. Solar-surplus heating is therefore not only cheaper per kilowatt-hour; each kilowatt-hour also produces more heat. [Likely] This effect is strongest in spring and autumn."
   },
   {
    "t": "Protection against feed-in limits",
    "d": "Some grid connections and inverters have export caps. Where PV output would be curtailed, NENDO absorbs the surplus instead of losing it."
   },
   {
    "t": "Year-round value",
    "d": "In winter, surplus covers part of the space heating. In summer, it covers almost all hot water. Where NENDO supports cooling, summer surplus also drives pre-cooling. The function never sleeps for a season."
   },
   {
    "t": "Measurable result",
    "d": "The app reports how many kilowatt-hours of solar energy went into NENDO per day, month and year. That figure is measured, not estimated, and it is the most convincing proof point for the homeowner."
   }
  ],
  "screenSpec": "\"Solar to heat\" screen: live energy flow diagram (PV, house, NENDO, battery, grid) with line icons and flow values in kW. Below, a daily bar chart: solar production (light grey), used by NENDO (black), exported (mid grey). Settings: surplus priority order (drag to reorder: Hot water, Buffer, Floor, Battery, EV).",
  "screen": "SolarToHeat",
  "sources": []
 },
 {
  "n": 6,
  "id": "dynamic-tariff",
  "title": "Dynamic-tariff optimisation",
  "heading": "6. Dynamic-tariff optimisation",
  "lead": "A dynamic contract without automation is a risk, not a saving; the heat pump is the load that turns it into a saving.",
  "tile": "With a dynamic electricity contract, EMON reads tomorrow's prices and plans NENDO's operation around the cheapest hours. Works with dynamic contracts across Europe, no supplier lock-in.",
  "blocks": [
   {
    "kind": "p",
    "text": "Dynamic electricity contracts pass the day-ahead wholesale price through to the consumer, hour by hour or quarter hour by quarter hour. Prices for the next day are published around midday. The spread between the cheapest and the most expensive hour of a day is often large, and on sunny, windy days prices can drop to zero or below."
   },
   {
    "kind": "p",
    "text": "For a household that consumes evenly, a dynamic contract offers little. For a household that can move consumption, it offers a lot. The heat pump is the largest movable load in the house, followed by the EV and the home battery. As Quatt puts it in its own customer material, the real gain of a dynamic contract lies in automation, not in the contract itself (Quatt)."
   },
   {
    "kind": "p",
    "text": "EMON retrieves the day-ahead prices as soon as they are published. It combines them with the heat demand forecast, the solar forecast and the building model, and calculates the cheapest production plan that respects all comfort limits. NENDO then runs harder in cheap hours, stores heat in the building and tanks, and runs at minimum or not at all in expensive hours."
   },
   {
    "kind": "p",
    "text": "The homeowner does not need to understand electricity markets. The app shows the price curve, the plan and the result."
   }
  ],
  "adv": [
   {
    "t": "No supplier lock-in",
    "d": "Quatt links its battery optimisation to its own dynamic contract, and Octopus built Cosy around its own tariff. EMON works with the price signal, not with a supplier. The homeowner or installer chooses the contract; EMON adapts. For installers selling across suppliers, this is decisive."
   },
   {
    "t": "Full cost view, not only energy price",
    "d": "A dynamic price covers only the energy component. EMON calculates with the full cost per kilowatt-hour: energy, network tariffs, levies, VAT and, where it applies, the effect on the monthly capacity peak. A cheap hour that would set a new monthly peak may cost more in capacity fees than it saves in energy. EMON weighs both."
   },
   {
    "t": "Efficiency-aware",
    "d": "The cheapest hour is not always the best hour for a heat pump. At 04:00 the outdoor air is coldest and the COP lowest. EMON calculates the cost per unit of heat delivered, not per unit of electricity consumed. An hour that is 10% more expensive but 20% more efficient wins."
   },
   {
    "t": "Negative price response",
    "d": "When prices go negative, EMON increases heat storage to the upper comfort limit and raises the DHW set point within safe limits. The household is effectively paid to store heat."
   },
   {
    "t": "Coordinated with battery and EV",
    "d": "Three flexible loads chasing the same cheap hour will all start at once and create a peak. EMON schedules them together. The heat pump gets the hours where thermal storage is most useful; the battery and car take the others."
   },
   {
    "t": "Robust against forecast errors",
    "d": "Prices are known a day ahead, but weather is not perfectly known. EMON replans every 15 minutes. If the evening turns colder than forecast, it adds heat in the next acceptable hour instead of breaking the comfort band."
   },
   {
    "t": "Transparent savings",
    "d": "The app compares actual costs with a reference calculation: the same heat produced with an unmanaged profile at the same prices. [Certain] This reference is a model, so the app labels it as calculated. It is still the fairest way to show the value of optimisation month by month."
   }
  ],
  "screenSpec": "\"Prices\" screen: tomorrow's price curve as grey bars, cheapest hours in black, current hour marked. Overlay of planned NENDO runtime. Summary line: \"Average price paid for heating this month: x c/kWh vs. y c/kWh average market price\". Contract selector in Settings: supplier and tariff type.",
  "screen": "TodaysPlan",
  "sources": [
   {
    "label": "Quatt",
    "url": "https://www.quatt.io/waarom-quatt/energy/prijs-energie-besparen"
   }
  ]
 },
 {
  "n": 7,
  "id": "battery-aware",
  "title": "Battery-aware operation",
  "heading": "7. Battery-aware operation",
  "lead": "A home battery and a heat pump without shared control work against each other: the heat pump drains the battery at the wrong moment and the battery charges from the grid when the heat pump could have stored the heat instead.",
  "tile": "EMON plans NENDO and the home battery as one system. Heat and electricity storage are used where each is most valuable, so the battery is not emptied by the compressor and grid peaks stay low.",
  "blocks": [
   {
    "kind": "p",
    "text": "Most homes with a heat pump installed in recent years also have solar panels, and a growing share adds a home battery. Each device usually comes with its own controller. The battery inverter follows a simple rule: charge on export, discharge on import. The heat pump follows its thermostat. Neither knows what the other is about to do."
   },
   {
    "kind": "p",
    "text": "The result is inefficient in three ways. First, when NENDO starts on a winter evening, the battery discharges several kilowatts into the compressor and is empty within an hour, leaving nothing for the rest of the evening's household loads. Second, on a sunny day the battery fills first and the heat pump only gets the remainder, even when stored heat would have been more useful. Third, battery and heat pump both react to the same price or solar signal and create a combined peak."
   },
   {
    "kind": "p",
    "text": "Battery-aware operation means EMON controls both devices with one plan. It treats the battery as electrical storage and the building plus tanks as thermal storage, and decides for every quarter hour which store should be charged or discharged."
   }
  ],
  "adv": [
   {
    "t": "Right storage for the right job",
    "d": "Thermal storage is cheap and large but can only deliver heat. The battery is smaller but serves every load. EMON fills thermal storage with the energy that will end up as heat anyway, and keeps battery capacity for lighting, cooking and appliances. [Likely] In winter this often means the battery lasts through the evening instead of being drained by the heat pump in the first hour."
   },
   {
    "t": "Discharge limits during heat pump runs",
    "d": "When NENDO must run in an expensive hour, EMON can decide to power it from the battery or from the grid depending on the remaining battery energy and the forecast for later hours. It avoids emptying the battery for a load that could have been moved."
   },
   {
    "t": "Peak shaving together",
    "d": "Where grid fees depend on the monthly peak, that peak matters. A heat pump start combined with a cooker and an EV charger can set a peak. EMON uses the battery to cover the short overlap, and modulates NENDO to keep the quarter-hour average below the target. Battery and heat pump become one peak-shaving tool."
   },
   {
    "t": "Grid charging only when justified",
    "d": "With a dynamic tariff, charging the battery from the grid at night can pay off. EMON compares that option with simply pre-heating the house at the same cheap hour, which has lower conversion losses. It chooses the cheaper path per day."
   },
   {
    "t": "Battery health",
    "d": "Fewer deep cycles and less high-power discharge extend battery life. Because the heat pump takes part of the load shifting, the battery cycles less for the same result."
   },
   {
    "t": "Brand-independent",
    "d": "EMON controls batteries through standard interfaces of the inverter. The installer is not forced into one battery brand to get coordinated operation. [Guessing] Supported battery and inverter models should be listed in the support matrix."
   },
   {
    "t": "Backup awareness",
    "d": "Where the battery offers backup power, EMON keeps a reserve and never lets NENDO consume it. During an outage the heat pump is not on the backup circuit unless the installer configured it; EMON respects that setting."
   },
   {
    "t": "Dynamic battery as a VPP asset",
    "d": "A battery plus a heat pump under one control is a stronger grid resource than either alone: the battery reacts in seconds, the heat pump shifts large volumes over hours. EMON presents them as one flexible unit to an aggregator."
   }
  ],
  "screenSpec": "\"Storage\" screen: two gauges side by side, battery state of charge (%) and thermal storage (buffer and DHW temperature vs. limits). Below, a 24-hour plan: battery charge and discharge (dark grey bars above and below zero), heat pump runtime (black), grid import (mid grey line). Setting: backup reserve (%).",
  "screen": "Storage",
  "sources": []
 },
 {
  "n": 8,
  "id": "cop-monitoring",
  "title": "COP monitoring",
  "heading": "8. COP monitoring",
  "lead": "COP is the only number that tells whether a heat pump is installed and running well; publishing it without saying how it is measured undermines the trust it is meant to build.",
  "tile": "EMON shows NENDO's efficiency live and over time: heat delivered divided by electricity used. Daily, monthly and seasonal (SCOP) values, with the measurement method stated per installation.",
  "blocks": [
   {
    "kind": "p",
    "text": "The coefficient of performance (COP) is the ratio between the heat a heat pump delivers and the electrical energy it consumes. A COP of 4 means that 1 kWh of electricity produces 4 kWh of heat. The seasonal coefficient of performance (SCOP) is the same ratio over a full heating season, and it is the figure that determines the real running cost."
   },
   {
    "kind": "p",
    "text": "COP is not fixed. It depends on the outdoor temperature, the flow temperature, the load, defrost cycles and hot water production. A NENDO unit may reach a high COP on a mild day with low flow temperature, and a much lower COP on a frosty morning while heating the DHW tank. A single figure on a datasheet says little about a specific house."
   },
   {
    "kind": "p",
    "text": "EMON calculates COP from two measurements. Electrical input comes from the heat pump's own power reading or a dedicated energy meter. Heat output comes from the flow rate and the temperature difference between flow and return, measured by a heat meter or by NENDO's internal sensors. Where only internal sensors are available, the app labels the value as estimated."
   },
   {
    "kind": "p",
    "text": "Octopus shows COP and SCOP in its app and warns customers that summer values drop because most operation is hot water production, so a full year of data is needed before SCOP is meaningful (Octopus Energy). EMON applies the same principle: SCOP is shown only after enough data, and seasonal context is always visible."
   }
  ],
  "adv": [
   {
    "t": "Context, not just a number",
    "d": "EMON shows COP against outdoor temperature and flow temperature. A homeowner who sees a COP of 2.8 on a cold day also sees that this is expected for that condition. Without context, a low value causes worry and support calls."
   },
   {
    "t": "Expected vs. actual",
    "d": "The AI builds a reference curve for each installation: the COP NENDO should reach at each outdoor and flow temperature. When actual COP drops below the reference over several days, EMON flags it. Typical causes are a dirty filter, low flow rate, an air bubble, too high a heating curve or an incorrectly set DHW temperature. The installer sees the flag in diagnostics before the homeowner notices higher bills."
   },
   {
    "t": "Split by use",
    "d": "COP for space heating and COP for hot water are shown separately. Hot water always has a lower COP because of the higher temperature. Mixing them hides problems in either."
   },
   {
    "t": "Optimisation feedback loop",
    "d": "COP data feeds back into the optimiser. EMON learns at which hours and flow temperatures this specific NENDO runs most efficiently and uses that in every plan. Dynamic-tariff optimisation calculates cost per unit of heat, and that calculation depends on accurate COP data."
   },
   {
    "t": "Honest seasonal reporting",
    "d": "SCOP is calculated over rolling 12 months. The app shows the heating season value separately. This avoids the misleading summer dip and gives the homeowner a figure comparable with the product datasheet."
   },
   {
    "t": "Installer quality proof",
    "d": "A good COP is the installer's best reference. With the homeowner's consent, the installer can use anonymised COP results from their installations to demonstrate installation quality. For your B2B audience this is a sales argument, not only a feature."
   },
   {
    "t": "Early warning for performance guarantees",
    "d": "Where a performance or efficiency commitment is given, measured COP data is the evidence. EMON stores it, time-stamped, for the lifetime of the installation."
   }
  ],
  "screenSpec": "\"Efficiency\" screen: large figure \"COP today\" with label Measured or Estimated. Below, a scatter chart: daily COP (y) against average outdoor temperature (x), actual points in black, expected curve in mid grey. Tabs: Heating / Hot water / Total. SCOP card appears after 12 months of data.",
  "screen": "EnergyEfficiency",
  "sources": [
   {
    "label": "Octopus Energy",
    "url": "https://octopus.energy/blog/cosy-controls/"
   }
  ]
 },
 {
  "n": 9,
  "id": "consumption-monitoring",
  "title": "Consumption monitoring",
  "heading": "9. Consumption monitoring",
  "lead": "Most heat pump owners only learn what heating costs when the annual settlement arrives; by then nothing can be corrected.",
  "tile": "EMON measures NENDO's electricity use and heat output per quarter hour and shows it next to the whole-house picture: solar, battery, grid and other loads. Costs in euro, per day, month and year.",
  "blocks": [
   {
    "kind": "p",
    "text": "Consumption monitoring answers three questions for the homeowner: how much electricity does heating use, what does it cost, and is that normal?"
   },
   {
    "kind": "p",
    "text": "EMON collects data from three sources. The digital meter interface (P1 port) or the EMON meter gives total import and export at the grid connection. NENDO provides its own electrical consumption and operating data. Other connected devices, such as the PV inverter, battery and EV charger, report their flows. Together these give a complete energy balance of the house every 15 minutes, the same interval the grid operator uses for billing peaks."
   },
   {
    "kind": "p",
    "text": "The app presents this at three levels. Live: a flow view showing where power comes from and goes to right now. Daily: a timeline showing heat pump consumption against solar production and prices. Periodic: monthly and annual totals, split into space heating, hot water and cooling, with the energy source for each kilowatt-hour: solar, battery or grid."
   },
   {
    "kind": "p",
    "text": "Costs are calculated with the homeowner's actual contract. For dynamic contracts EMON uses the real quarter-hour or hourly prices. For fixed contracts it uses the configured rates. Network costs and, where it applies, the capacity component are included so the figure matches the bill as closely as possible."
   }
  ],
  "adv": [
   {
    "t": "Heating separated from the rest",
    "d": "A digital meter alone shows total consumption. It cannot tell whether a high winter bill comes from the heat pump, a tumble dryer or an electric car. EMON separates NENDO consumption by direct measurement, not by estimation from the total."
   },
   {
    "t": "Weather-normalised comparisons",
    "d": "Comparing January this year with January last year is misleading when one was much colder. EMON normalises heating consumption with heating degree days. The homeowner sees whether the house actually used more energy, or whether the weather was colder. The AI uses the same model to forecast the month's expected consumption and cost."
   },
   {
    "t": "Anomaly detection",
    "d": "When consumption rises beyond what weather and use explain, EMON flags it. Possible causes include a changed thermostat setting, an open window, a failing component or a hot water leak. A monthly surprise becomes a same-week alert."
   },
   {
    "t": "Source attribution",
    "d": "Every kilowatt-hour NENDO uses is labelled by source. \"42% of your heating came from your own solar panels this month\" is a measurable, motivating figure. It also shows the direct value of solar-surplus heating and battery-aware operation."
   },
   {
    "t": "Peak insight",
    "d": "Where grid fees depend on the monthly peak, the app shows the peak so far, which quarter hour set it and which devices were running at that moment. When the heat pump contributed, the homeowner sees how EMON limited it. This makes the capacity tariff understandable instead of abstract."
   },
   {
    "t": "Data ownership and export",
    "d": "Consumption data belongs to the homeowner. EMON allows export as CSV for personal records, energy audits or subsidy applications. With the homeowner's consent the installer gets access for service purposes only."
   },
   {
    "t": "Foundation for everything else",
    "d": "COP monitoring, dynamic-tariff reporting, savings calculations and diagnostics all rely on accurate consumption data. Precise measurement is not a side feature; it is the base on which every other claim on this page stands."
   }
  ],
  "screenSpec": "\"Energy\" screen: segmented control Live / Day / Month / Year. Month view: stacked bar per day, heating (black), hot water (dark grey), other house loads (light grey). Right column: total kWh, total cost in euro, share from own solar (%), monthly peak (kW) with timestamp. Export button in the top right.",
  "screen": "EnergyEfficiency",
  "sources": []
 },
 {
  "n": 10,
  "id": "dhw-scheduling",
  "title": "DHW scheduling",
  "heading": "10. DHW scheduling",
  "lead": "The hot water tank is the easiest thermal battery to control and the one most often left on a fixed night timer from the analogue era.",
  "tile": "EMON plans domestic hot water production around the household's usage pattern, solar surplus and electricity prices. Hot water is ready when needed, produced when it is cheapest and most efficient.",
  "blocks": [
   {
    "kind": "p",
    "text": "Domestic hot water (DHW) typically accounts for a substantial share of a heat pump's annual electricity use, and in a well-insulated house that share grows. Hot water production requires higher temperatures than underfloor heating, so COP is lower. That makes timing important: every hour of hot water production moved to a warmer, cheaper or solar-powered moment saves more than the same shift in space heating."
   },
   {
    "kind": "p",
    "text": "A typical installation heats the tank on a fixed timer, often at night, a habit inherited from day and night meters. With solar panels and dynamic prices, the night is often the most expensive and least efficient moment: no solar, cold outside air and, under a dynamic contract, not necessarily cheap power."
   },
   {
    "kind": "p",
    "text": "Octopus advises its Cosy customers to heat the cylinder at night or early morning in the cheap window and to store it at 48 to 50 °C for efficiency (Octopus Energy). EMON starts from the same principle but replaces the fixed window with a daily calculation."
   },
   {
    "kind": "p",
    "text": "DHW scheduling in EMON works with three inputs. The usage pattern: EMON learns when the household draws hot water, typically morning showers and evening use, and how much. The storage state: tank temperature from NENDO's sensor. The cost and efficiency forecast: prices, solar surplus and outdoor temperature. From these it plans one or more heating runs per day that guarantee sufficient hot water before each usage peak."
   },
   {
    "kind": "p",
    "text": "The homeowner sets a minimum comfort temperature and, optionally, fixed \"must be hot\" times. Everything else is automatic."
   }
  ],
  "adv": [
   {
    "t": "Learned usage",
    "d": "A family with teenagers who shower at 07:00 and a retired couple who bathe at 20:00 need different plans. EMON learns this from tank temperature drops and flow data, and adjusts plans for weekdays and weekends separately."
   },
   {
    "t": "Solar first",
    "d": "On sunny days the tank is the first destination for solar surplus. A 200 to 300 litre tank absorbs several kilowatt-hours of thermal energy in one afternoon. EMON can deliberately let the tank run lower in the morning when a strong solar afternoon is forecast."
   },
   {
    "t": "Warmest hour, highest COP",
    "d": "Air-to-water heat pumps produce hot water more efficiently when outdoor air is warmer. EMON prefers afternoon production when price and solar allow, improving the COP of the most demanding task NENDO performs."
   },
   {
    "t": "Storage temperature optimisation",
    "d": "Lower storage temperatures are more efficient but hold less usable energy. EMON adjusts the target temperature daily: lower on days with small predicted use, higher before a large use or when surplus solar or negative prices make extra heat almost free. It never goes below the minimum the homeowner sets, and hygiene cycles are handled separately (see Legionella prevention cycles)."
   },
   {
    "t": "Boost on demand",
    "d": "Guests arriving or an unexpected bath: a single tap in the app starts an immediate DHW run. EMON replans the rest of the day around it."
   },
   {
    "t": "Avoiding peak overlap",
    "d": "DHW production is a high-power, high-temperature run. EMON keeps it out of the quarter hours where the house already draws a lot, which protects the monthly capacity peak where it applies."
   },
   {
    "t": "Hot water as VPP flexibility",
    "d": "A tank is a fast, reliable flexibility resource. During surplus events EMON can raise the tank temperature; during grid stress it can delay a planned run by an hour or two without comfort impact. This is among the most dependable flexibility a household can offer."
   }
  ],
  "screenSpec": "\"Hot water\" screen: tank icon with current temperature and estimated showers available (based on tank volume and set minimum). Timeline showing learned usage peaks (light grey) and planned heating runs (black). Buttons: Boost now, Holiday mode. Setting: minimum temperature.",
  "screen": "HotWater",
  "sources": [
   {
    "label": "Octopus Energy",
    "url": "https://octopus.energy/heat-pump-help/cosy-schedule/"
   }
  ]
 },
 {
  "n": 11,
  "id": "frost-protection",
  "title": "Frost protection",
  "heading": "11. Frost protection",
  "lead": "Frost protection is a safety function, so its value lies in what EMON does not do: no optimisation, price signal or user setting is allowed to override it.",
  "tile": "NENDO protects itself, the hydraulic circuit and the building against freezing. EMON monitors the protection, alerts when it activates and never lets cost optimisation interfere with it.",
  "blocks": [
   {
    "kind": "p",
    "text": "An air-to-water heat pump has water-filled components outdoors or in unheated spaces: the outdoor unit's heat exchanger, the connecting pipes and sometimes a buffer tank in a garage. If water in these parts freezes, it expands and can crack the heat exchanger or pipes. Repairs are costly and the heating is out at the coldest possible moment."
   },
   {
    "kind": "p",
    "text": "NENDO's frost protection works in levels. At the first level, when outdoor or water temperatures approach freezing, the circulation pump runs to keep water moving. At the second level, when water temperature falls further, the compressor or a backup heater warms the circuit to a safe minimum. Where applicable, the building itself is held at a frost-safe room temperature, typically around 5 to 7 °C, even when the heating is switched off or the house is in holiday mode."
   },
   {
    "kind": "p",
    "text": "This logic runs in the NENDO controller itself, locally. It does not depend on the internet, on the EMON cloud or on the app. [Guessing] Confirm with the NENDO controller specification which levels and temperatures apply per model."
   },
   {
    "kind": "p",
    "text": "EMON's role is to supervise, not to control. It reads the frost protection status from NENDO, records every activation, alerts homeowner and installer when protection is active for longer than expected and makes sure no EMON function reduces the heat pump's availability when frost protection may be needed."
   }
  ],
  "adv": [
   {
    "t": "Hard priority over optimisation",
    "d": "Dynamic-tariff optimisation, peak limiting and VPP events all reduce or delay heat pump operation. EMON treats frost protection as a hard constraint above all of these. During a frost risk period, a VPP request to reduce load is declined for that installation. A homeowner never pays for a frozen pipe to save a few cents."
   },
   {
    "t": "Forecast-based readiness",
    "d": "EMON sees frost coming in the weather forecast. Before a cold night it ensures the buffer and building are adequately warm and that no planned shutdown or power limit will coincide with the coldest hours. Most frost protection systems only react; EMON also prepares."
   },
   {
    "t": "Holiday mode without risk",
    "d": "When the homeowner sets holiday mode, heating drops to a minimum, but frost protection stays fully active. The app shows clearly that the house is protected. If the outdoor temperature drops sharply during the absence, the homeowner and installer receive a status message."
   },
   {
    "t": "Power outage awareness",
    "d": "Frost protection needs electricity. When EMON detects a grid outage through the meter or battery system, it can prioritise the heat pump's circulation pump on backup power where the installation supports it, and alerts the installer when power returns so the system can be checked."
   },
   {
    "t": "Event log for service",
    "d": "Every frost protection activation is logged with outdoor temperature, water temperatures and duration. Repeated activations may point to insufficient insulation of outdoor pipes, a wrongly placed sensor or a flow problem. The installer sees the pattern in diagnostics before it becomes a failure."
   },
   {
    "t": "Glycol-free installations",
    "d": "Some installers avoid glycol in the primary circuit because it reduces efficiency. That makes active frost protection essential. EMON's monitoring gives installers and homeowners confidence in glycol-free designs."
   },
   {
    "t": "Clear communication",
    "d": "Frost protection runs are visible consumption. Without explanation, a homeowner sees the heat pump running in holiday mode and assumes a fault. The app labels these runs: \"Frost protection active, outdoor −6 °C\"."
   }
  ],
  "screenSpec": "\"Protection\" card on the home screen: shield line icon, status Standby or Active (orange when active, as functional colour for attention). Tapping opens a log: date, time, outdoor temperature, duration. Holiday mode screen states: \"Frost protection remains active\".",
  "screen": "InstallerPortal",
  "sources": []
 },
 {
  "n": 12,
  "id": "legionella-prevention",
  "title": "Legionella prevention cycles",
  "heading": "12. Legionella prevention cycles",
  "lead": "EMON can guarantee that the thermal cycle runs; it cannot guarantee the hygiene of an entire hot water installation.",
  "tile": "NENDO periodically heats the hot water tank to a disinfection temperature. EMON schedules this cycle at the most efficient moment, verifies it completed and logs every run.",
  "blocks": [
   {
    "kind": "p",
    "text": "Legionella bacteria grow in water between roughly 25 and 50 °C and can cause serious respiratory illness when inhaled through water droplets, for example in a shower. Heat pumps store hot water efficiently at lower temperatures, often 45 to 50 °C. That is good for efficiency, but it is within the range where Legionella can multiply in a tank over time, particularly in parts with low circulation."
   },
   {
    "kind": "p",
    "text": "The standard countermeasure is thermal disinfection: periodically raising the full tank volume to a temperature at which Legionella is killed, commonly around 60 °C or higher, for a defined duration. [Likely] Required temperatures, frequencies and durations differ per country, building type and regulation; the installer sets them in line with local rules and the tank manufacturer's instructions."
   },
   {
    "kind": "p",
    "text": "Reaching 60 °C and above with a heat pump alone is demanding. The COP at that temperature is low, and some units need an electric immersion heater to complete the cycle. This makes the disinfection cycle one of the most expensive runs of the week. When and how it runs matters."
   },
   {
    "kind": "p",
    "text": "NENDO performs the cycle. EMON plans it, checks it and documents it."
   }
  ],
  "adv": [
   {
    "t": "Cheapest and most efficient moment",
    "d": "A fixed weekly cycle at 02:00 on Sunday runs at the coldest outdoor temperature and, with a dynamic contract, at whatever price that hour carries. EMON places the cycle within the required interval at the best combination of solar surplus, low price and high outdoor temperature. On a sunny spring afternoon the cycle can run largely on own solar power."
   },
   {
    "t": "Natural cycles count",
    "d": "When the tank already reaches disinfection temperature through solar-surplus heating or negative-price storage, EMON registers that as a completed cycle, if the temperature and duration criteria were met. A separate scheduled run is then unnecessary that week. This avoids paying twice for the same result."
   },
   {
    "t": "Verified completion",
    "d": "Starting a cycle is not the same as completing it. EMON checks the tank temperature against the target and duration. If a cycle was interrupted by a power cut, a user override or a fault, EMON reschedules it and alerts the installer when it fails repeatedly."
   },
   {
    "t": "Cannot be disabled by the homeowner",
    "d": "The disinfection settings belong to the installer level. Homeowners can see when the next cycle is planned, but cannot switch it off or lower its temperature. This is part of the separation between homeowner controls and installer-only safety settings stated on the product page."
   },
   {
    "t": "Scald awareness",
    "d": "Water at disinfection temperature can cause scalds. A thermostatic mixing valve at the tank outlet is the physical safeguard. EMON supports this by informing the homeowner in the app when a cycle is running and the tank is at high temperature."
   },
   {
    "t": "Documented history",
    "d": "Every cycle is logged: date, peak temperature, time above target, energy used. For rental properties, holiday homes or small commercial buildings, this log helps the owner demonstrate that preventive measures were taken. [Likely] It supports compliance but does not replace a formal risk assessment where one is required."
   },
   {
    "t": "Holiday return",
    "d": "After an absence, stagnant water carries a higher risk. EMON can schedule a disinfection cycle before the household returns, based on the end date of holiday mode."
   }
  ],
  "screenSpec": "Homeowner view: \"Hot water hygiene\" line in the Hot water screen: last cycle date, status Completed (no colour) or Rescheduled (orange), next planned cycle. Installer view: temperature, duration, frequency settings, full log with export.",
  "screen": "HotWater",
  "sources": []
 },
 {
  "n": 13,
  "id": "homeowner-controls",
  "title": "Homeowner controls",
  "heading": "13. Homeowner controls",
  "lead": "The best-optimised heat pump fails commercially if the homeowner feels they have lost control of their own house.",
  "tile": "Temperatures, schedules, hot water, holiday mode and comfort limits in one app. Homeowners control comfort; EMON handles optimisation; safety-critical settings stay with the installer.",
  "blocks": [
   {
    "kind": "p",
    "text": "Automation creates a paradox. The more a system optimises by itself, the more important it becomes that the user can see what it does and step in at any moment. People accept automation when they trust it, and they trust it when they understand it and can override it."
   },
   {
    "kind": "p",
    "text": "The EMON app gives the homeowner control over everything that concerns comfort and nothing that concerns safety or equipment protection. That line is deliberate and stated on the product page: homeowner controls are separated from installer-only technical settings."
   },
   {
    "kind": "p",
    "text": "Homeowner controls cover:"
   },
   {
    "kind": "li",
    "text": "Room temperature per zone, with direct adjustment and a weekly comfort schedule.",
    "num": ""
   },
   {
    "kind": "li",
    "text": "Comfort band per zone: the range within which EMON may pre-heat or let the temperature drift.",
    "num": ""
   },
   {
    "kind": "li",
    "text": "Hot water: minimum temperature, boost, holiday mode.",
    "num": ""
   },
   {
    "kind": "li",
    "text": "Operating mode: heating, cooling (where supported), automatic, off.",
    "num": ""
   },
   {
    "kind": "li",
    "text": "Optimisation preference: comfort first, balanced or savings first.",
    "num": ""
   },
   {
    "kind": "li",
    "text": "Priorities for solar surplus between hot water, heating, battery and EV.",
    "num": ""
   },
   {
    "kind": "li",
    "text": "Notifications: what to be informed about and how.",
    "num": ""
   },
   {
    "kind": "li",
    "text": "Access: who in the household uses the app, and whether the installer has service access.",
    "num": ""
   },
   {
    "kind": "p",
    "text": "The homeowner does not change heating curves, maximum flow temperatures, compressor limits, frost protection, disinfection settings or hydraulic parameters. Those belong to the installer, because wrong values can damage the installation, reduce efficiency or affect safety."
   },
   {
    "kind": "p",
    "text": "Octopus follows a similar pattern in its app: a Devices tab with heating and hot water zones and a target temperature wheel, simple enough to use daily (Octopus Energy). Quatt lets customers choose between Savings and Sustainability modes (Quatt Home app). EMON combines both approaches and adds the full-house energy view."
   }
  ],
  "adv": [
   {
    "t": "Intent, not settings",
    "d": "The homeowner tells EMON what they want (warm at 07:00, hot water for four showers, save where possible) instead of how the machine should do it. The AI translates intent into operation. That lowers the knowledge barrier for heat pump ownership."
   },
   {
    "t": "Explained decisions",
    "d": "Every automatic action has a short explanation in the app: \"Heating now: solar surplus\", \"Paused: price peak, house stays above 20.5 °C\". Understanding why the heat pump runs or stops is the strongest trust builder."
   },
   {
    "t": "Overrides always win, temporarily",
    "d": "Any manual change takes effect immediately. EMON then returns to the plan at the next schedule block, so a single override does not permanently degrade optimisation. The homeowner can also lock a setting for a longer period."
   },
   {
    "t": "Preference slider with honest trade-offs",
    "d": "Choosing savings first widens the comfort band; comfort first narrows it. The app shows the effect in plain terms, such as the expected monthly cost difference, once enough data exists."
   },
   {
    "t": "One app for the whole system",
    "d": "Heat pump, solar, battery, EV charger and consumption are in one place. The homeowner does not juggle four manufacturer apps with conflicting logic."
   },
   {
    "t": "Safe by design",
    "d": "Because critical settings are not available to the homeowner, the risk of support calls caused by \"I changed the curve to make it warmer\" drops sharply. [Likely] This reduces service visits for the installer."
   },
   {
    "t": "Household sharing",
    "d": "Several household members can use the app with their own login. Guests or tenants can get limited access, for example temperature only."
   }
  ],
  "screenSpec": "Home screen: large room temperature with plus and minus buttons, zone tabs at the top, status line with explanation below. Cards: Hot water, Energy today, Plan. Settings: Comfort band, Preference (three-position selector), Surplus priorities, Household access.",
  "screen": "Home",
  "sources": [
   {
    "label": "Octopus Energy",
    "url": "https://octopus.energy/blog/cosy-controls/"
   },
   {
    "label": "Quatt Home app",
    "url": "https://apps.apple.com/us/app/quatt-home/id1626258455"
   }
  ]
 },
 {
  "n": 14,
  "id": "installer-diagnostics",
  "title": "Installer diagnostics",
  "heading": "14. Installer diagnostics",
  "lead": "",
  "tile": "Installers see live operating data, fault history, efficiency trends and settings for every NENDO in their fleet. Many issues are diagnosed and solved remotely, with the homeowner's consent.",
  "blocks": [
   {
    "kind": "p",
    "text": "A heat pump service call is expensive for everyone. The installer drives to the site, often without knowing what is wrong. The homeowner takes time off. The first visit is frequently spent diagnosing, and a second visit brings the part. Many calls turn out to be a setting, a misunderstanding or a problem that could have been seen in the data."
   },
   {
    "kind": "p",
    "text": "EMON gives installers a dedicated diagnostics environment, separate from the homeowner app. After commissioning and with the homeowner's consent, the installer has service access to each installation."
   },
   {
    "kind": "p",
    "text": "The diagnostics view includes:"
   },
   {
    "kind": "li",
    "text": "Live values: outdoor, flow, return, DHW and room temperatures; compressor speed; power; flow rate; operating mode; valve positions.",
    "num": ""
   },
   {
    "kind": "li",
    "text": "History: all values stored at high resolution, with zoom from a year down to minutes.",
    "num": ""
   },
   {
    "kind": "li",
    "text": "Fault and warning log: NENDO error codes with plain-language description, timestamp and operating context at that moment.",
    "num": ""
   },
   {
    "kind": "li",
    "text": "Efficiency: measured or estimated COP against the expected curve for that installation.",
    "num": ""
   },
   {
    "kind": "li",
    "text": "Operating statistics: compressor starts per day, runtime, defrost cycles, backup heater use.",
    "num": ""
   },
   {
    "kind": "li",
    "text": "Installer settings: heating curve, flow temperature limits, DHW and disinfection parameters, frost protection levels, commissioning data.",
    "num": ""
   },
   {
    "kind": "li",
    "text": "Fleet overview: all installations of that installer on one map or list, sorted by status.",
    "num": ""
   },
   {
    "kind": "p",
    "text": "Quatt already combines homeowner functions and installer commissioning in one app (Quatt Home app). EMON separates the roles into two interfaces, which keeps the homeowner app simple and gives the installer a professional tool."
   }
  ],
  "adv": [
   {
    "t": "Remote first-line diagnosis",
    "d": "A homeowner calls with \"the house is cold\". The installer opens the installation, sees that the room set point was lowered by a household member, or that the flow rate dropped after a filter clogged. Many calls are solved by phone, and the rest arrive on site with the right part."
   },
   {
    "t": "Predictive maintenance",
    "d": "The AI compares each installation with its own history and with similar installations. Slowly rising compressor starts, falling flow rate, lengthening defrost cycles or declining COP are early signs of a developing problem. EMON flags them before a breakdown, when the fix is a planned visit instead of an emergency."
   },
   {
    "t": "Commissioning quality check",
    "d": "After installation, EMON compares the first weeks of operation with expected values. Short cycling, a heating curve set too high or an undersized flow rate show up within days. The installer corrects them before the first winter and before the first complaint."
   },
   {
    "t": "Fleet management",
    "d": "An installer with dozens or hundreds of heat pumps sees all of them in one view: green for normal, orange for attention, red for fault (functional colours only). Service planning becomes data-driven."
   },
   {
    "t": "Remote settings with audit trail",
    "d": "Installer-level changes can be made remotely. Every change is logged with who, when, old value and new value. The homeowner is informed. This protects both parties in case of disputes."
   },
   {
    "t": "Firmware and software updates",
    "d": "EMON distributes updates to NENDO and the EMON gateway in a controlled way, with installer visibility of the version per installation."
   },
   {
    "t": "Warranty support",
    "d": "Fault logs, operating history and settings history make warranty claims factual. The manufacturer, distributor and installer look at the same data."
   },
   {
    "t": "New service revenue",
    "d": "[Likely] Installers can offer monitored maintenance contracts at a recurring fee, justified by the continuous oversight EMON enables. For STRØHM.ENERGY's installer network, this turns a one-off installation into an ongoing customer relationship."
   }
  ],
  "screenSpec": "Installer portal (tablet and desktop): fleet list with status dot, address, NENDO model, last alert. Installation detail: live schematic of the hydraulic circuit with values at each sensor point, tabs for History, Faults, Efficiency, Settings, Log. Phone variant for on-site use: live values and fault codes only.",
  "screen": "InstallerPortal",
  "sources": [
   {
    "label": "Quatt Home app",
    "url": "https://apps.apple.com/us/app/quatt-home/id1626258455"
   }
  ]
 }
];
