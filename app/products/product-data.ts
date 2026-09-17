export type ProductMedia = {
  src: string;
  alt: string;
  caption: string;
  kind?: "diagram" | "mark";
};

export type ProductBrief = {
  slug: string;
  code: string;
  title: string;
  shortTitle: string;
  category: string;
  deck: string;
  stage: string;
  sponsor: string;
  sourceType: string;
  thesis: string;
  challenge: string;
  approach: { title: string; body: string }[];
  outcomes: string[];
  applications: string[];
  services: string[];
  media: ProductMedia[];
  sources: { label: string; href: string }[];
  sourceNote: string;
};

export const products: ProductBrief[] = [
  {
    slug: "medos",
    code: "AE-01",
    title: "MEDOS: Module for the Event Driven Operation of Spacecraft",
    shortTitle: "MEDOS",
    category: "Autonomous operations",
    deck: "A transparent decision framework that turns mission telemetry into meaningful events, confidence estimates, and bounded operational responses.",
    stage: "Flight heritage",
    sponsor: "Mission-configurable",
    sourceType: "Aurora capability brief",
    thesis: "Move expert operational judgment closer to the instrument while preserving physical meaning, traceability, and operator control.",
    challenge: "Missions can encounter consequential conditions faster than traditional ground analysis and commanding cycles can respond. Operators need a dependable way to combine multiple measurements, recognize mission-relevant context, and act within approved boundaries without turning the spacecraft into an opaque black box.",
    approach: [
      { title: "Define mission meaning", body: "Aurora works with subject-matter experts to translate mission knowledge into understandable event concepts and decision boundaries." },
      { title: "Fuse trusted telemetry", body: "Measurements from instruments and spacecraft systems are combined into physically meaningful indicators instead of isolated threshold crossings." },
      { title: "Evaluate context", body: "The system considers the combined evidence for an event and reports confidence in a form that operators can inspect and tune." },
      { title: "Connect bounded responses", body: "Detected events can inform alerts, science capture, protection, planning, or other responses selected for the client mission." },
    ],
    outcomes: [
      "Flight heritage on NASA's Magnetospheric Multiscale mission.",
      "Demonstrated real-time recognition of an environmental transition that differed from a ground prediction.",
      "Explainable, expert-informed logic that can be adapted without requiring a large labeled training set.",
    ],
    applications: ["Event-driven science", "Instrument protection", "Health and safety monitoring", "Distributed mission operations"],
    services: ["Mission concept and autonomy architecture", "Event model development", "Flight and ground software integration", "Verification with mission data"],
    media: [
      { src: "/product-medos-01.png", alt: "Concept diagram showing multiple sensor inputs combined into physical parameters and event classifications", caption: "Illustrative event-recognition flow from mission measurements to operational context." },
      { src: "/product-medos-02.png", alt: "Flight result comparing a predicted environmental region with an event detected during a spacecraft pass", caption: "Representative flight heritage showing event recognition when observed conditions differed from a prediction." },
      { src: "/product-medos-03.png", alt: "Aurora Engineering wordmark", caption: "Aurora Engineering", kind: "mark" },
      { src: "/product-medos-04.png", alt: "MEDOS product mark", caption: "MEDOS capability mark", kind: "mark" },
    ],
    sources: [
      { label: "NASA technology highlight", href: "https://science.nasa.gov/science-research/science-enabling-technology/technology-highlights/new-onboard-capability-to-enable-autonomous-spacecraft-operations/" },
      { label: "NASA Technical Reports Server", href: "https://ntrs.nasa.gov/citations/20250002215" },
    ],
    sourceNote: "Public language is intentionally broader than the underlying engineering one-pager. Detailed implementation discussions are available for qualified project teams.",
  },
  {
    slug: "recap",
    code: "AE-02",
    title: "ReCAP: Cooperative Planning for Heterogeneous Systems",
    shortTitle: "ReCAP",
    category: "Multi-agent autonomy",
    deck: "Capability-based coordination for mixed fleets that need to plan, allocate work, and respond as mission conditions change.",
    stage: "Prototype capability",
    sponsor: "Client-configurable",
    sourceType: "Aurora capability brief",
    thesis: "Give each mission asset a clear understanding of what it can contribute, then coordinate the team around outcomes instead of rigid platform assumptions.",
    challenge: "Future missions may combine spacecraft, surface systems, instruments, and human operators with different capabilities and communications constraints. Fixed plans can become brittle when an asset is unavailable, a new observation changes priorities, or connectivity varies across the team.",
    approach: [
      { title: "Describe capabilities", body: "Represent what each participant can sense, decide, communicate, and accomplish in mission-relevant terms." },
      { title: "Plan around outcomes", body: "Translate mission objectives into tasks that can be evaluated against the available team rather than a single preassigned platform." },
      { title: "Allocate cooperatively", body: "Use distributed coordination to match work with the right assets as availability, priority, and context evolve." },
      { title: "Integrate incrementally", body: "Connect planning and execution services to existing vehicle, payload, or ground-system interfaces with mission-defined authority." },
    ],
    outcomes: [
      "A reusable pattern for coordinating heterogeneous autonomous and human-operated assets.",
      "Mission logic that remains understandable to domain experts and adaptable to changing team composition.",
      "A path from simulation and tabletop scenarios to hardware and operational integration.",
    ],
    applications: ["Planetary surface teams", "Distributed spacecraft", "Remote sensing fleets", "Human-autonomy teaming"],
    services: ["Multi-agent mission architecture", "Capability and task modeling", "Coordination software integration", "Scenario-based verification"],
    media: [
      { src: "/product-recap-01.png", alt: "Concept scene where an orbiter identifies an observation and requests support from surface vehicles", caption: "Illustrative cooperative response across orbital and surface assets." },
      { src: "/product-recap-02.png", alt: "Architecture diagram linking capability planning, task allocation, actuation, and vehicle control", caption: "Generalized coordination architecture spanning planning, allocation, execution, and control." },
      { src: "/product-recap-03.png", alt: "Aurora Engineering wordmark", caption: "Aurora Engineering", kind: "mark" },
      { src: "/product-recap-04.png", alt: "MEDOS product mark included in the ReCAP source one-pager", caption: "Autonomy technology heritage referenced by the source brief", kind: "mark" },
    ],
    sources: [],
    sourceNote: "This public brief presents the transferable coordination capability. Project-specific architecture and allocation details are shared within an appropriate client engagement.",
  },
  {
    slug: "surfas",
    code: "AE-03",
    title: "SURFAS: Mission-Aware Scene Understanding",
    shortTitle: "SURFAS",
    category: "Scene intelligence",
    deck: "A holistic scene-analysis capability that combines perception, mission value, risk, and operational context for better autonomous decisions.",
    stage: "Prototype capability",
    sponsor: "Client-configurable",
    sourceType: "Aurora capability brief",
    thesis: "Autonomous systems should understand not only where they can go, but why one action is more valuable to the mission than another.",
    challenge: "Perception products are often delivered as separate maps, classifications, or sensor outputs. A planner still needs a coherent interpretation of terrain, uncertainty, scientific interest, operational risk, and mission reward before it can make a useful decision.",
    approach: [
      { title: "Ingest varied perception", body: "Combine approved imagery, point clouds, classifications, sensor data, and prior knowledge without requiring a single sensor stack." },
      { title: "Build mission layers", body: "Express hazards, access, interest, uncertainty, and other client-defined factors in a shared operational frame." },
      { title: "Balance risk and reward", body: "Evaluate candidate actions against mission priorities instead of optimizing only for obstacle avoidance or shortest path." },
      { title: "Serve downstream decisions", body: "Deliver a concise scene-impact product to planning, scheduling, operator displays, or autonomous control services." },
    ],
    outcomes: [
      "A common decision surface for otherwise disconnected perception products.",
      "Mission priorities that can be reviewed and adjusted by engineers and operators.",
      "A flexible interface for mobile, remote, and science-driven autonomous systems.",
    ],
    applications: ["Planetary mobility", "Remote inspection", "Science targeting", "Autonomous field systems"],
    services: ["Perception and autonomy architecture", "Mission-layer definition", "Planner and display integration", "Simulation and field evaluation"],
    media: [
      { src: "/product-surfas-01.png", alt: "Layered scene-analysis diagram combining terrain, perception, and mission-relevant information", caption: "Representative fusion of scene layers into a mission-aware decision product." },
      { src: "/product-surfas-02.png", alt: "Grid-based example comparing environmental risk, mission reward, and candidate routes", caption: "Illustrative route analysis that balances operational risk with mission value." },
      { src: "/product-surfas-03.png", alt: "Aurora Engineering wordmark", caption: "Aurora Engineering", kind: "mark" },
      { src: "/product-surfas-04.png", alt: "MEDOS product mark included in the SURFAS source one-pager", caption: "Autonomy technology heritage referenced by the source brief", kind: "mark" },
    ],
    sources: [],
    sourceNote: "The public page describes the general scene-understanding pattern. Client data products, scoring logic, and operating constraints remain engagement-specific.",
  },
  {
    slug: "telemetry-dashboard",
    code: "AE-04",
    title: "Context-Aware Telemetry Dashboard",
    shortTitle: "Telem Dashboard",
    category: "Mission operations",
    deck: "Explainable monitoring that adapts expected behavior to operational context so mission teams can focus on the alerts that matter.",
    stage: "Operational heritage",
    sponsor: "Mission-configurable",
    sourceType: "Aurora capability brief",
    thesis: "A useful dashboard should help operators understand whether a change is expected, consequential, or still unknown, not simply report that a static limit was crossed.",
    challenge: "Large telemetry streams can overwhelm small teams with false alerts while subtle anomalies remain hidden inside apparently valid ranges. Expected behavior often changes with mode, environment, configuration, or recent commands, so one fixed limit rarely captures the full operating context.",
    approach: [
      { title: "Map operational context", body: "Identify the states, transitions, and dependencies that change what normal telemetry should look like." },
      { title: "Define explainable expectations", body: "Build reviewable monitoring logic that distinguishes expected transients from conditions requiring attention." },
      { title: "Prioritize operator attention", body: "Present the most meaningful deviations with the surrounding evidence needed for rapid assessment." },
      { title: "Fit existing ground systems", body: "Integrate displays and analytics with approved telemetry sources, workflows, and mission operations tools." },
    ],
    outcomes: [
      "Fewer low-value alerts and clearer context around off-nominal behavior.",
      "Earlier visibility into subtle changes that static upper and lower limits may miss.",
      "A scalable monitoring pattern informed by mission operations heritage.",
    ],
    applications: ["Spacecraft telemetry", "Instrument health", "Test operations", "Distributed asset monitoring"],
    services: ["Telemetry and alert strategy", "Operator-centered dashboard design", "Data pipeline integration", "Anomaly workflow development"],
    media: [
      { src: "/product-telemetry-dashboard-01.png", alt: "Diagram comparing static limits with context-aware expected behavior and an unknown violation", caption: "Context-aware expectations help separate normal transitions from meaningful deviations." },
      { src: "/product-telemetry-dashboard-02.png", alt: "Mission telemetry dashboard showing multiple spacecraft views and contextual status information", caption: "Representative mission dashboard view supplied in the Aurora source one-pager." },
      { src: "/product-telemetry-dashboard-03.png", alt: "Aurora Engineering wordmark", caption: "Aurora Engineering", kind: "mark" },
      { src: "/product-telemetry-dashboard-04.png", alt: "MEDOS product mark included in the telemetry dashboard source one-pager", caption: "Autonomy technology heritage referenced by the source brief", kind: "mark" },
    ],
    sources: [],
    sourceNote: "Images are retained from the supplied Aurora one-pager. Mission identifiers, thresholds, and detailed operating logic are intentionally not expanded in this public brief.",
  },
  {
    slug: "mission-assistant-ai",
    code: "AE-05",
    title: "Mission Assistant AI",
    shortTitle: "Mission Assistant AI",
    category: "Knowledge and operations AI",
    deck: "A secure, traceable assistant that helps mission teams find approved information, investigate questions, and preserve operational knowledge.",
    stage: "Applied capability",
    sponsor: "Client-controlled deployment",
    sourceType: "Aurora capability brief",
    thesis: "Small mission teams should be able to ask a focused question across their approved information environment and receive a useful answer with evidence they can verify.",
    challenge: "Mission knowledge is spread across documents, databases, code repositories, work systems, and telemetry. Engineers lose time reconstructing context, while critical understanding can remain locked in a few experienced team members or disconnected tools.",
    approach: [
      { title: "Connect approved sources", body: "Integrate only the repositories, documents, databases, and mission systems selected by the client." },
      { title: "Retrieve with provenance", body: "Ground responses in available evidence and retain links back to the originating material for review." },
      { title: "Support mission workflows", body: "Shape the assistant around real tasks such as specification lookup, anomaly investigation, work planning, and telemetry exploration." },
      { title: "Deploy to fit the environment", body: "Adapt models, access controls, interfaces, and hosting patterns to the client's technical and security constraints." },
    ],
    outcomes: [
      "Faster access to mission context without replacing engineering judgment.",
      "Traceable answers that let users inspect the evidence behind a response.",
      "A modular foundation that can grow from a focused pilot into a broader operations tool.",
    ],
    applications: ["Mission knowledge search", "Anomaly investigation", "Requirements support", "Operations handover"],
    services: ["Mission AI use-case design", "Secure retrieval architecture", "Data-source integration", "Evaluation and operator adoption"],
    media: [],
    sources: [],
    sourceNote: "The supplied white paper contains no embedded imagery. This public brief omits organization-specific system details and presents the reusable service offering.",
  },
  {
    slug: "ground-systems",
    code: "AE-06",
    title: "Ground Systems Engineering",
    shortTitle: "Ground Systems",
    category: "Mission ground systems",
    deck: "Purpose-built software, data flows, and operator tools that connect mission objectives with reliable day-to-day operations.",
    stage: "Capability brief",
    sponsor: "Client-configurable",
    sourceType: "Aurora service overview",
    thesis: "Ground systems create the most value when software, data, procedures, and human decisions are engineered as one operational system.",
    challenge: "Mission teams often inherit disconnected tools, evolving interfaces, and data products that were designed around individual subsystems. The result can be duplicated work, fragile handoffs, and limited visibility across planning, commanding, monitoring, and science operations.",
    approach: [
      { title: "Map the operating concept", body: "Start with mission decisions, roles, timelines, constraints, and the information each operator needs." },
      { title: "Design resilient interfaces", body: "Define clear boundaries between telemetry, commanding, planning, data processing, and external services." },
      { title: "Build useful operator tools", body: "Deliver software and displays that support real workflows and keep important context close to the decision." },
      { title: "Verify end to end", body: "Exercise the system through representative scenarios, failure cases, and operational rehearsals before transition." },
    ],
    outcomes: [
      "Ground software aligned with the mission concept of operations.",
      "Clearer interfaces and more resilient data movement across the mission stack.",
      "Operator-centered tools that can evolve as the program matures.",
    ],
    applications: ["Mission operations centers", "Science operations", "Test and integration systems", "Data processing pipelines"],
    services: ["Ground-system architecture", "Flight-to-ground interfaces", "Operations software development", "Integration, test, and transition"],
    media: [],
    sources: [],
    sourceNote: "This public overview presents Aurora's transferable ground-systems capability. Approved project examples and system-specific discussions are available during project scoping.",
  },
  {
    slug: "ep-modeling-simulation",
    code: "AE-07",
    title: "Electric Propulsion Modeling and Simulation",
    shortTitle: "EP Mod and Sim",
    category: "Physics-based engineering",
    deck: "Modeling, numerical analysis, and simulation support for electric propulsion concepts, subsystem decisions, and mission integration.",
    stage: "Capability brief",
    sponsor: "Client-configurable",
    sourceType: "Aurora service overview",
    thesis: "Useful propulsion analysis connects the physics model to the engineering decision, the available evidence, and the mission consequence.",
    challenge: "Electric propulsion development spans interacting plasma, electrical, thermal, structural, and operational concerns. Teams need appropriately scoped models that clarify design tradeoffs and uncertainty without adding complexity that does not improve the decision.",
    approach: [
      { title: "Frame the decision", body: "Define the performance question, fidelity required, available data, and interfaces to the wider spacecraft or test system." },
      { title: "Select the right model", body: "Match analytical, numerical, reduced-order, or coupled methods to the client's decision and schedule." },
      { title: "Compare with evidence", body: "Use available test, literature, or system data to evaluate assumptions, sensitivity, and uncertainty." },
      { title: "Translate to engineering action", body: "Present results in terms that support design reviews, test planning, operations, and mission trades." },
    ],
    outcomes: [
      "Decision-focused models with documented assumptions and limitations.",
      "Clear sensitivity and uncertainty analysis around mission-relevant quantities.",
      "Simulation products that can support design, test, and integration teams.",
    ],
    applications: ["Thruster and plasma analysis", "Subsystem trades", "Test planning", "Spacecraft integration"],
    services: ["Physics model development", "Numerical simulation", "Test and data interpretation", "Mission and subsystem trade studies"],
    media: [],
    sources: [],
    sourceNote: "This public overview presents Aurora's transferable modeling and simulation capability. Technical examples and project-specific methods are available during project scoping.",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
