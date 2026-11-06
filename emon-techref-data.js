/* EMON Technical reference data. Verbatim from uploads/EMON___EMON_Security_Explainer_v02.html (Edition 02, 27.10.2026). DEPTH-1041. */
window.EMON_TECHREF = {
 "sources": [
  [
   "S01",
   "European Commission",
   "GDPR fundamentals",
   "The Commission explains personal data, controller/processor roles, applicability and the principles of lawful, limited and secure processing.",
   "https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en"
  ],
  [
   "S02",
   "EDPB",
   "International access",
   "EDPB Guidelines 05/2021, version 2.0, example 11: access by a separate processor in a third country to EU-stored personal data is an international transfer. Hosting location alone does not resolve this.",
   "https://www.edpb.europa.eu/system/files/2023-02/edpb_guidelines_05-2021_interplay_between_the_application_of_art3-chapter_v_of_the_gdpr_v2_en_0.pdf"
  ],
  [
   "S03",
   "European Commission",
   "Transfer safeguards",
   "Commission guidance explains standard contractual clauses, the roles they cover and the transfer impact assessment required when relying on them. Appropriate mechanisms depend on the transfer.",
   "https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/new-standard-contractual-clauses-questions-and-answers-overview_en"
  ],
  [
   "S04",
   "RDI / Netherlands",
   "European inverter concerns",
   "The Dutch regulator’s 2023 sample of nine inverters failed the cybersecurity standard used in its study. This finding concerns that historical sample; it does not identify every current product or establish a hidden vendor switch.",
   "https://www.rdi.nl/documenten/2023/05/30/onderzoek-storingsproblematiek-en-cyberveiligheid-omvormers-voor-zonnepanelen"
  ],
  [
   "S05",
   "NIST",
   "Practical inverter security",
   "NIST IR 8498, December 2024, gives practical security guidance for residential and light-commercial smart inverters. Used here as a technical reference, not as EU legislation or EMON certification.",
   "https://csrc.nist.gov/pubs/ir/8498/final"
  ],
  [
   "S06",
   "European Commission",
   "Transparency & rights",
   "Information for individuals covers the information people should receive about processing and the qualified rights to access, erase and port personal data. Rights are subject to applicable conditions.",
   "https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en"
  ]
 ],
 "meta": {
  "architecture": [
   "01 / SYSTEM BOUNDARIES",
   "Security architecture",
   "Follow a measurement, a command or an update. Select a path, then a component to see where information travels and where decisions would be made."
  ],
  "authority": [
   "02 / AUTHORITY & HARDWARE",
   "Control & relays",
   "A software setpoint, a relay contact and a safety trip do different jobs. Explore who may request a change and which local limits must remain authoritative."
  ],
  "resilience": [
   "03 / FAILURE SCENARIOS",
   "Resilience lab",
   "Interrupt one dependency at a time. Explore the intended EMON response, the capabilities that would be lost and the tests needed to establish continuity."
  ],
  "patterns": [
   "04 / CONTROL LOCATION",
   "Architecture patterns",
   "Explore where routine decisions can run: in a cloud service, in a local controller, or across both. These are illustrative patterns. The EMON direction remains a proposed design."
  ],
  "privacy": [
   "05 / DATA RESPONSIBILITY",
   "Data & GDPR",
   "Hosting answers where records are stored. Access, legal roles, retention and international transfers answer different questions. All need explicit evidence."
  ],
  "evidence": [
   "06 / EVIDENCE & ACCEPTANCE",
   "Evidence & checks",
   "Trace the documented claims to primary sources and record the evidence an EPC should request before accepting a deployed EMON installation."
  ]
 },
 "nodes": {
  "controller": {
   "code": "LOCAL / DECISION BOUNDARY",
   "title": "Local EMON controller",
   "text": "The proposed local authority for routine energy scheduling. Cloud requests would be treated as inputs, checked against an approved site policy before execution.",
   "data": "Meter readings, device state, local schedules and an event buffer.",
   "control": "Validate role, command type, freshness, power envelope and expiry. Confirm actual device response.",
   "proof": "Controller specification, restart tests, signed policy and command audit. None supplied."
  },
  "meter": {
   "code": "SYNQ / MEASUREMENT",
   "title": "Site metering",
   "text": "A proposed local meter path gives the controller a current view of import and export. Data quality is a control dependency.",
   "data": "Timestamped power, energy and quality flags. Personal-data classification depends on whether records relate to identifiable people.",
   "control": "Measurements inform decisions. A meter reading is not permission to operate a relay.",
   "proof": "Meter mapping, CT direction, stale-data tests and loss-of-meter fallback."
  },
  "inverter": {
   "code": "MOEBIUS + FLUXX / DEVICES",
   "title": "Inverter & battery",
   "text": "Proposed local setpoints coordinate conversion and storage. Device firmware and the battery BMS must retain their own protection functions.",
   "data": "Power, state of charge, alarms and operating limits.",
   "control": "Accept only supported setpoints within device limits. BMS constraints and mandatory grid protection take priority.",
   "proof": "Actual interface register map, BMS interlock evidence, OEM cloud inventory and blocked-command tests."
  },
  "relay": {
   "code": "OZZY / SWITCHING",
   "title": "Relay & load control",
   "text": "A relay is a physical output, not a cloud service. Its contact state, load rating, wiring and failure mode must be defined per circuit.",
   "data": "Requested state and actual contact feedback where fitted.",
   "control": "Local output drives a correctly rated relay or contactor. Manual facilities must not bypass required safety protection.",
   "proof": "Circuit diagram, contactor rating, welded-contact detection where required, and power-loss tests."
  },
  "cloud": {
   "code": "REGIONAL / PROPOSED HOSTING",
   "title": "EMON platform",
   "text": "Proposed EU deployment: primary application data in Germany. Provider, backup locations, support access and subprocessors still require contractual and technical verification.",
   "data": "Minimised telemetry, account records, authorised history and audit events.",
   "control": "No direct relay path in this proposed diagram. Cloud requests pass through the local policy boundary. All other OEM routes must be checked.",
   "proof": "Hosting contract, region configuration, access logs, subprocessor list and independent architecture review."
  },
  "owner": {
   "code": "PEOPLE / DELEGATED RIGHTS",
   "title": "Owner & installer",
   "text": "Proposed roles separate viewing from changing settings. An installer receives a scoped grant; a site owner can revoke that grant through a defined process.",
   "data": "Only the sites, records and functions required for the assigned role.",
   "control": "Remote control requires authentication, authorisation and an allowed local command. Remote monitoring alone grants no actuation right.",
   "proof": "Role matrix, MFA design, revocation propagation, local credentials and offline access tests."
  },
  "grid": {
   "code": "GRID / CONTRACTUAL AUTHORITY",
   "title": "Grid or aggregator",
   "text": "Mandatory grid instructions and optional commercial flexibility are different authorities. The actual national rules, connection agreement and device capabilities define their scope.",
   "data": "Only agreed measurements needed for the service or obligation.",
   "control": "Proposed bounded, expiring requests. Optional service withdrawal must not override mandatory grid requirements.",
   "proof": "Country-specific control requirements, priority rules, authentication and agreed communication-loss response."
  },
  "update": {
   "code": "SOFTWARE / SEPARATE TRUST PATH",
   "title": "Firmware & releases",
   "text": "An update can change what a device is able to do. Restricting ordinary commands does not by itself protect against a compromised update authority.",
   "data": "Release metadata, version, compatible hardware and audit records.",
   "control": "Proposed signed packages, independent release approval, staged rollout and a tested local recovery procedure. Signed malware is still malware.",
   "proof": "Secure boot and key-custody evidence, signature rejection test, recovery image and support lifecycle."
  }
 },
 "flowText": {
  "data": "Telemetry: meter and device measurements reach the local controller, then selected records reach the regional platform and authorised people. This view shows information flow, not permission to operate equipment.",
  "control": "Control: authorised people or services may request a change. The platform passes a bounded request to the local controller; only local outputs reach devices and relays. Additional OEM control routes remain an integration risk until audited.",
  "updates": "Updates: an independently approved package reaches the controller and devices through their own verified update mechanisms. Local installation is an alternative delivery route, not a bypass of signature verification.",
  "power": "Power: the physical electrical path is separate from network traffic. Inverter conversion and load contactors remain subject to local protection. This functional view is not a wiring diagram."
 },
 "roles": {
  "owner": [
   "Site owner",
   "Authorises optional services and delegates installer access. Ownership does not permit changing legally restricted grid settings.",
   [
    "Own-site telemetry",
    "Grant / revoke installer access",
    "Request permitted schedules"
   ],
   [
    "Override BMS or grid protection",
    "Unsigned firmware",
    "Unbounded remote relay access"
   ]
  ],
  "installer": [
   "Installer / EPC",
   "Proposed named, site-specific and time-limited access. Commissioning rights should be distinguished from routine maintenance.",
   [
    "Assigned-site diagnostics",
    "Approved commissioning parameters",
    "Local recovery with documented access"
   ],
   [
    "Other customers’ sites",
    "Permanent shared credentials",
    "Protection bypass"
   ]
  ],
  "emon": [
   "EMON operations",
   "Proposed monitoring access is separate from command authority. Emergency support access needs an approval process and a visible audit trail.",
   [
    "Service health",
    "Scoped support with approval",
    "Approved release distribution"
   ],
   [
    "Universal relay switch",
    "Unlogged support access",
    "Unreviewed bulk firmware rollout"
   ]
  ],
  "aggregator": [
   "Grid / aggregator",
   "Separate mandatory connection obligations from opt-in trading. Setpoint precedence must be defined for each national installation.",
   [
    "Contracted flexibility requests",
    "Mandatory grid instructions via required path",
    "Agreed operational telemetry"
   ],
   [
    "Override independent safety",
    "Reuse expired commands",
    "Assume optional consent covers regulation"
   ]
  ]
 },
 "scenarios": {
  "internet": {
   "label": "Internet disconnected",
   "title": "The WAN link is lost.",
   "text": "Intended result: local operation continues within the approved site configuration. Remote services become unavailable. This is a design target, not a measured availability guarantee.",
   "states": [
    "Local rules continue",
    "Unavailable",
    "Buffered locally",
    "Frozen / fallback",
    "Local limits remain",
    "Per-circuit policy"
   ],
   "tests": [
    "Disconnect the WAN, then reboot controller and inverter.",
    "Confirm local authentication without cloud login.",
    "Verify export behaviour with current metering and required grid instructions.",
    "Reconnect and confirm telemetry backfill without replaying stale commands."
   ],
   "risk": "A dependency on cloud authentication, licences, certificates or time services can defeat the local-operation target."
  },
  "cloud": {
   "label": "EMON cloud unavailable",
   "title": "The platform cannot respond.",
   "text": "Intended result: the controller applies stored local rules and discards expired remote requests. Cloud forecasts, app access and fleet monitoring may stop.",
   "states": [
    "Stored policy",
    "Unavailable",
    "Buffered locally",
    "No fresh forecasts",
    "Local limits remain",
    "Per-circuit policy"
   ],
   "tests": [
    "Block EMON endpoints while the site LAN stays available.",
    "Test expired cloud sessions and DNS failure separately.",
    "Verify that stored policy remains valid across a restart.",
    "Check the local display clearly identifies cloud loss."
   ],
   "risk": "Cached rules have a defined validity period. Long outages need a documented operating and recovery policy."
  },
  "vendor": {
   "label": "Vendor service ends",
   "title": "The service is withdrawn.",
   "text": "Intended target: basic local functions should not require an active cloud subscription. Long-term survivability remains unverified until credentials, repair and recovery can be used without the vendor.",
   "states": [
    "Target only",
    "Service ended",
    "Local access needed",
    "Service ended",
    "Device dependent",
    "Recovery needed"
   ],
   "tests": [
    "Test cloud-independent credentials and configuration export.",
    "Inspect licence, certificate and pairing expiry.",
    "Document repair, replacement, firmware recovery and support end dates.",
    "Check independent OEM services and legal access to recovery materials."
   ],
   "risk": "A controller cannot guarantee indefinite operation if proprietary firmware, spare parts, signing keys or essential certificates become unavailable."
  },
  "update": {
   "label": "Malicious update",
   "title": "The update path is attacked.",
   "text": "Intended result: invalid packages are rejected. A package signed by a compromised trusted key remains a different and more serious threat.",
   "states": [
    "At risk if trusted code fails",
    "Not sufficient protection",
    "Audit needed",
    "Pause rollout",
    "May be undermined",
    "Device dependent"
   ],
   "tests": [
    "Reject modified, unsigned and wrong-hardware images.",
    "Test key revocation and interrupted-update recovery.",
    "Exercise independent release approval and limited rollout.",
    "Verify protection independence with the actual device architecture."
   ],
   "risk": "Signed malicious firmware can bypass software policies. This scenario prevents an absolute “no kill switch” claim."
  },
  "meter": {
   "label": "Meter / LAN fault",
   "title": "Local measurements disappear.",
   "text": "Intended result: stop optimisation that depends on stale data. Use the site-approved fallback. A zero-export site may need generation limiting or shutdown if compliance cannot be maintained.",
   "states": [
    "Fallback required",
    "May still work",
    "Data incomplete",
    "Optimisation suspended",
    "Follow site policy",
    "Defined safe state"
   ],
   "tests": [
    "Disconnect meter communications and reverse CT mapping in a controlled test.",
    "Measure response to missing, stale and implausible readings.",
    "Confirm the fallback satisfies the connection agreement.",
    "Verify actual contact state and recovery without oscillation."
   ],
   "risk": "Keeping generation running is not always the safe or compliant response. A cloud outage and a meter failure require different handling."
  },
  "grid": {
   "label": "Grid instruction / outage",
   "title": "Grid authority takes effect.",
   "text": "Mandatory grid limits and independent anti-islanding protection take precedence. Continued local control does not mean a grid-connected inverter may energise a failed grid.",
   "states": [
    "Within grid constraints",
    "Path dependent",
    "Record the event",
    "Secondary priority",
    "Mandatory protection",
    "Backup design only"
   ],
   "tests": [
    "Check national grid profile and authorised instruction sources.",
    "Confirm trip and reconnect behaviour with the qualified commissioning procedure.",
    "Verify backup equipment, isolation and supply mode separately.",
    "Document mandatory and optional control priorities."
   ],
   "risk": "Backup supply requires the correct certified equipment and installation. An EMS alone cannot provide island operation."
  }
 },
 "patternModels": {
  "cloud": {
   "label": "Cloud-led",
   "decision": "Cloud service",
   "gateway": "Pass-through gateway",
   "cloud": "Schedules + requests",
   "active": "cloud",
   "text": "In this illustrative pattern, routine scheduling runs in the remote service. The site gateway forwards permitted requests. Device protection still has its own role.",
   "rows": [
    [
     "Routine decisions",
     "Calculated in the remote service.",
     "Map which functions depend on a remote response."
    ],
    [
     "Connection loss",
     "Cloud-dependent scheduling cannot receive fresh instructions. Device-native functions depend on their own configuration.",
     "Specify timeout, stored settings and communication-loss behaviour."
    ],
    [
     "Remote access",
     "Cloud identities and gateway permissions are part of the control chain.",
     "Test account compromise, scope limits and revocation."
    ],
    [
     "Updates",
     "Each gateway and device update route remains a separate trust path.",
     "Verify signing, approval and recovery for every component."
    ]
   ]
  },
  "local": {
   "label": "Local",
   "decision": "Site controller",
   "gateway": "Schedules + checks",
   "cloud": "Optional records",
   "active": "local",
   "text": "In this illustrative pattern, routine scheduling runs on site. A remote service may receive selected records, but it has no scheduling role in this model.",
   "rows": [
    [
     "Routine decisions",
     "Calculated in the local controller.",
     "Test local rules, credentials and metering across restarts."
    ],
    [
     "Connection loss",
     "Local rules can be designed to continue without a cloud response. That requires implementation evidence.",
     "Test internet loss, clock dependencies and licence expiry."
    ],
    [
     "Remote access",
     "Any optional remote maintenance route is still an access path.",
     "Inventory VPNs, support tools and device-native services."
    ],
    [
     "Updates",
     "Local delivery still requires verified, authorised software.",
     "Test invalid packages and cloud-independent recovery."
    ]
   ]
  },
  "hybrid": {
   "label": "Local + cloud",
   "decision": "Local enforcement",
   "gateway": "Schedules + checks",
   "cloud": "Forecasts + requests",
   "active": "both",
   "text": "Proposed EMON direction: local scheduling and permission checks, with cloud services supplying forecasts, monitoring and bounded requests. This describes a design target, not a verified product capability.",
   "rows": [
    [
     "Routine decisions",
     "Proposed: the controller checks requested actions against the approved site policy.",
     "Prove command freshness, permitted ranges and actual device response."
    ],
    [
     "Connection loss",
     "Proposed: stored local rules continue while remote services are unavailable.",
     "Test WAN block, cloud block, restart and expired credentials."
    ],
    [
     "Remote access",
     "Proposed: named, scoped roles; cloud requests pass through the local boundary.",
     "Test owner delegation, installer revocation and event logging."
    ],
    [
     "Updates",
     "Proposed: separate approval, signed packages, staged rollout and local recovery.",
     "Provide key-custody evidence and interrupted-update tests."
    ]
   ]
  }
 },
 "privacyItems": {
  "storage": [
   "Storage location",
   "Proposed: EU application data in Germany.",
   "Obtain the provider contract and region configuration for databases, backups, logs, disaster recovery and telemetry. No deployed EMON evidence was supplied. A hosting address does not establish where support teams can access records."
  ],
  "access": [
   "People & access",
   "Separate viewing, support and actuation.",
   {
    "text": "Proposed: named accounts, scoped permissions, MFA for remote privileged access, approved support sessions and visible audit trails. Check access by every OEM, hosting provider and subprocessor. Remote access by a separate non-EEA processor can be a transfer even when storage stays in the EU.",
    "refs": [
     "S02"
    ]
   }
  ],
  "retention": [
   "Retention & rights",
   "Define purpose and a deletion schedule.",
   {
    "text": "Proposed: classify account details, site identifiers, telemetry and audit events separately. Record each purpose, legal basis and retention period. Establish access, erasure and portability workflows with applicable legal exceptions. Do not invent a universal retention term.",
    "refs": [
     "S01",
     "S06"
    ]
   }
  ]
 },
 "checks": [
  [
   "System inventory",
   "Exact models, firmware, country profile, OEM gateways and third-party services."
  ],
  [
   "Every network path",
   "Packet capture, endpoint inventory, local APIs, vendor service channels and firewall rules."
  ],
  [
   "Authority & revocation",
   "Role matrix, MFA, owner delegation, installer revocation and audit history."
  ],
  [
   "Offline & restart",
   "WAN block, cloud block, power cycle, local login and credential expiry."
  ],
  [
   "Meter & grid fallback",
   "Stale readings, meter loss, export compliance, grid instructions and reconnection."
  ],
  [
   "Relay & protection",
   "Single-line diagram, contact ratings, power-loss state and independent protection evidence."
  ],
  [
   "Firmware & recovery",
   "Signing keys, release approval, signature rejection, interrupted update and local recovery."
  ],
  [
   "Data protection pack",
   "Provider, regions, backups, legal roles, retention, processor terms and transfer safeguards."
  ],
  [
   "Service exit",
   "Configuration export, repair access, licence expiry, lifecycle and replacement procedure."
  ],
  [
   "Independent review",
   "Actual implementation audit and signed site acceptance test, with unresolved findings."
  ]
 ],
 "updateSteps": [
  {
   "h": "01 / Build & review",
   "p": "Proposed: reviewed source, dependency inventory, vulnerability handling and a reproducible release record. Keep the evidence tied to the actual hardware and firmware versions."
  },
  {
   "h": "02 / Approve & sign",
   "p": "Proposed: separate build, approval and signing privileges; protect keys and limit fleet-wide rollout. A signature establishes an approved origin. It does not establish that the code is safe."
  },
  {
   "h": "03 / Verify locally",
   "p": "Proposed: verify signature, hardware compatibility and version policy before installation, whether a file arrived through the cloud or a local technician. Use staged deployment and confirm the post-update operating state."
  },
  {
   "h": "04 / Recover & audit",
   "p": "Proposed: a verified recovery image, safe rollback policy that prevents known-vulnerable downgrades, and a local recovery procedure. Test interrupted updates, lost keys and cloud unavailability. Record who approved each release."
  }
 ],
 "stepLabels": [
  "Build & review",
  "Approve & sign",
  "Verify locally",
  "Recover & audit"
 ],
 "stepSmall": [
  "Review code and dependencies",
  "Separate release responsibilities",
  "Reject invalid packages",
  "Prove the recovery path"
 ],
 "gdprRows": [
  {
   "q": "Is energy data personal?",
   "f": {
    "text": "Data linked to an identifiable person can be personal data. Pseudonymisation does not automatically remove GDPR scope.",
    "refs": [
     "S01"
    ]
   },
   "e": "Map identifiers, account linkage, occupancy inference and every telemetry field."
  },
  {
   "q": "Who is the controller?",
   "f": {
    "text": "The party determining the purposes and means is the controller. A processor acts on documented instructions. Roles follow the actual processing.",
    "refs": [
     "S01"
    ]
   },
   "e": "Role assessment per processing purpose; do not assume the installer or site owner is always the GDPR controller."
  },
  {
   "q": "Is EU storage enough?",
   "f": {
    "text": "Non-EEA access by a separate processor may be a transfer. Appropriate transfer mechanisms and, where applicable, assessments are required.",
    "refs": [
     "S02",
     "S03"
    ]
   },
   "e": "Complete access map, processor terms, subprocessor list and transfer safeguards."
  },
  {
   "q": "Does GDPR remove remote control risk?",
   "f": "Data protection and operational control address different risks. Lawful processing does not establish immunity from a compromised command or update.",
   "e": "Data protection evidence plus command, firmware, safety and continuity tests."
  }
 ]
};
