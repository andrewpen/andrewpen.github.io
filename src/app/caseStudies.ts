// Case study content for the "Bold" editorial redesign.
// Kept separate from content.ts: the homepage `projects` entries are the teaser
// cards that link here, these are the full studies behind them.
import { BLUE, PINK, MINT, CYAN, DEEP } from "./boldPalette";

// Rule colors cycle in this order for phases and lessons.
export const RULES = [BLUE, PINK, CYAN, DEEP];

export type Signal = { value: string; label: string };
export type Phase = { num: string; title: string; sub: string; did: string[]; signals: Signal[] };
export type Lesson = { num: string; title: string; text: string };
export type Quote = { text: string; source: string };

export type CaseStudy = {
  id: string;
  href: string;
  label: string;
  tag: string;
  org: string;
  years: string;
  titleA: string;
  titleB: string;
  deck: string;
  metrics: { value: string; label: string; color: string }[];
  meta: { label: string; value: string }[];
  challengeTitle: string;
  challengeBody: string[];
  challengeQuote: string;
  before: string[];
  after: string[];
  approachTitle: string;
  approachBody: string[];
  principles: string[];
  phases: Phase[];
  resultsTitle: string;
  resultsBody: string;
  bar: { label: string; value: string; targetLabel: string; target: string; pct: string; foot: string };
  results: { value: string; label: string; rule: string }[];
  quotes: Quote[];
  reflectionsBody: string;
  lessons: Lesson[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "ai",
    href: "/case-studies/ai-ready-design-system.html",
    label: "AI-ready architecture",
    tag: "Agent-native infrastructure",
    org: "Verizon Design System",
    years: "2024 — 2026",
    titleA: "AI-ready architecture.",
    titleB: "A design system as an LLM knowledge source.",
    deck: "Transforming the Verizon Design System from a passive code repository into an active AI infrastructure layer — making compliant code the default output of every AI tool in designers' and engineers' hands.",
    metrics: [
      { value: "48", label: "Components normalized for AI", color: CYAN },
      { value: "6", label: "AI tools integrated", color: MINT },
      { value: "1", label: "Of Verizon's first MCP servers", color: "#ffffff" },
      { value: "700hrs", label: "Engineering hours reclaimed", color: CYAN },
    ],
    meta: [
      { label: "Role", value: "Sr. Director, Design Systems" },
      { label: "Team", value: "Design · Eng · Product · Content, US & India" },
      { label: "Surfaces", value: "Gemini · Claude Code · Cursor · Notebook LM · Figma Make" },
    ],
    challengeTitle: "The AI hallucination tax.",
    challengeBody: [
      "Commercial LLMs are trained on general public repositories. They do not understand the private design tokens, theme variations, and component signatures of an enterprise platform. Asked to build a feature, an agent generates clean-looking code built on arbitrary CSS, non-standard layout blocks, and broken accessibility patterns.",
      "The instinct is to treat this as a prompt engineering problem. It is not. LLMs are a new user persona the design system was not serving. Rather than speeding up delivery, teams were spending sprint cycles fixing and refactoring AI output to fit production standards. To capture the actual promise, the design system team had to become the systemic context provider for the models.",
    ],
    challengeQuote: "The design system had thousands of human adopters and zero AI ones. That had to change.",
    before: [
      "Public LLMs with no knowledge of VDS tokens, themes, or component signatures",
      "AI-generated code requiring extensive manual refactoring every sprint",
      "Accessibility violations introduced at code generation, not caught until review",
      "Design intent lost in translation between Figma specs and AI output",
    ],
    after: [
      "VDS exposed as a real-time context source for every major AI tool in the ecosystem",
      "AI-generated code grounded in actual components, not guessed abstractions",
      "Design and engineering aligned in a single AI-assisted context loop",
      "Automated verification catching non-compliant code before it merges",
    ],
    approachTitle: "The smarter code pipeline.",
    approachBody: [
      "Making the right thing the easy thing for AI tools requires the same infrastructure investment it required for human teams. We could not train every LLM on VDS, but we could make VDS legible to every LLM that mattered.",
      "Four phases: structure the context, serve it live, integrate it into the tools people already use, and verify the output automatically.",
    ],
    principles: ["Build the guardrails into the runway", "LLMs are a user persona", "Anticipate the workflow, don't react to it"],
    phases: [
      {
        num: "01",
        title: "Structuring context",
        sub: "Making the system legible to machines, not just to designers and engineers.",
        did: [
          "Normalized all 48 component properties, style tokens, and implementation guidelines into rigid machine-readable JSON schemas",
          "Structured design tokens as platform-agnostic data that LLM attention mechanisms could natively parse",
          "Translated visual specifications and behavioral rules into a private, authoritative data foundation",
          "Eliminated the gap between what the system defines and what AI tools could understand",
        ],
        signals: [
          { value: "48 components", label: "normalized for AI context" },
          { value: "JSON schemas", label: "machine-readable architecture" },
        ],
      },
      {
        num: "02",
        title: "Live data serving",
        sub: "A real-time bridge between AI agents and system knowledge.",
        did: [
          "Architected a secure, lightweight MCP server exposing live schemas, design patterns, and component lookup APIs",
          "Shipped one of Verizon's first MCP servers, establishing VDS as an authoritative real-time context source",
          "Enabled agents to query the system directly so generated code mapped to real components",
          "Created a secure bridge between proprietary design knowledge and commercial AI tools",
        ],
        signals: [
          { value: "1 of the first", label: "MCP servers deployed at Verizon" },
          { value: "6 tools", label: "connected across design and engineering" },
        ],
      },
      {
        num: "03",
        title: "IDE tooling",
        sub: "Delivering context inside the tools teams already had open.",
        did: [
          "Configured developer environments to surface the MCP server as a background daemon feeding Copilot and Cursor",
          "Integrated Figma Make to deliver compliant context to design workflows",
          "Enabled developers to generate correct, high-fidelity layouts on the first try",
          "Brought design and engineering into the same AI-assisted context loop for the first time",
        ],
        signals: [
          { value: "2 disciplines", label: "design and engineering in one loop" },
          { value: "Clean handoff", label: "design to dev via IDE integration" },
        ],
      },
      {
        num: "04",
        title: "Automated verification",
        sub: "Making the wrong thing harder than the right thing, automatically.",
        did: [
          "Deployed semantic AI linters in CI/CD to flag unapproved inline styling",
          "Configured linters to recommend component replacements at the pull-request phase",
          "Enforced accessibility at the code-generation phase, not as a downstream audit",
          "Closed the loop: every AI-generated submission is verified before it merges",
        ],
        signals: [{ value: "CI/CD linter", label: "semantic verification in the pipeline" }],
      },
    ],
    resultsTitle: "Early signals. Real infrastructure.",
    resultsBody:
      "These are not projected outcomes. They are proof points from work already in production. The design system became a live context source for every major AI tool in the ecosystem, and the hallucination tax stopped being a given.",
    bar: {
      label: "Engineering hours reclaimed",
      value: "700hrs",
      targetLabel: "Manual estimate",
      target: "800hrs",
      pct: "87.5%",
      foot: "0 — 200 — 400 — 600 — 700 saved of 800 estimated",
    },
    results: [
      { value: "48", label: "components serving AI context", rule: BLUE },
      { value: "6", label: "AI tools integrated", rule: PINK },
      { value: "1", label: "live MCP bridge", rule: CYAN },
      { value: "2", label: "disciplines unified", rule: MINT },
    ],
    quotes: [
      {
        text: "Preparing an enterprise design system for AI is the ultimate evolution of outreach and enablement. Treating LLMs as a critical new user persona moved the system beyond a passive code repository into an active, intelligent infrastructure layer.",
        source: "Leadership retrospective, AI-Ready Design Systems initiative",
      },
      {
        text: "Andrew architected and prototyped one of Verizon's first Model Context Protocol servers, creating a live bridge between AI agents and VDS documentation.",
        source: "Richard Dalton, VP CX Design",
      },
    ],
    reflectionsBody: "The infrastructure is the early win. The strategic model is the lasting asset.",
    lessons: [
      {
        num: "01",
        title: "Treat LLMs as a user persona, not a tool.",
        text: "The moment we asked what an AI needs from the design system, instead of how we use AI on the design system, the entire strategy changed.",
      },
      {
        num: "02",
        title: "Trailblaze in a way others can follow.",
        text: "Moving first only has value if others can replicate the path. Every decision was built to be legible, documented, and extensible by the teams that follow.",
      },
      {
        num: "03",
        title: "Bet on where the industry is going.",
        text: "AI coding assistants are already in every developer's hands. The organizations that built AI-readable infrastructure now set the standards everyone else adopts later.",
      },
    ],
  },
  {
    id: "alignment",
    href: "/case-studies/value-driven-alignment.html",
    label: "Value-driven alignment",
    tag: "Partnership and adoption",
    org: "Verizon Design System",
    years: "2021 — 2026",
    titleA: "Value-driven alignment.",
    titleB: "Enterprise adoption without a mandate.",
    deck: "How a deliberate stakeholder strategy built on empathy, tailored value propositions, shared governance, and measurable outcomes moved a contested platform to a funded enterprise standard.",
    metrics: [
      { value: "86%", label: "Adoption across digital experiences", color: CYAN },
      { value: "42+", label: "Stakeholders on the listening tour", color: MINT },
      { value: "0", label: "Mandates required", color: "#ffffff" },
      { value: "3", label: "Leadership verticals aligned", color: CYAN },
    ],
    meta: [
      { label: "Role", value: "Sr. Director, Design Systems" },
      { label: "Scope", value: "Enterprise-wide, US & India" },
      { label: "Mandate", value: "None — earned, not enforced" },
    ],
    challengeTitle: "The illusion of the mandate.",
    challengeBody: [
      "The most common mistake in enterprise platform management is relying on an executive mandate to force adoption. Mandates create compliance theater: teams do the bare minimum to pass audits while building unaligned workarounds in the shadows to preserve sprint velocity. That friction pits the central systems team against the delivery teams.",
      "Recognizing that lasting alignment cannot be legislated, we treated adoption as a relationship and value-exchange framework — winning the engineering, product, and design trios by solving their specific, day-to-day operational pain.",
    ],
    challengeQuote:
      "Your product model is a company-leading example of how to design, deliver, and manage software — an example we need more teams to adopt.",
    before: [
      "Executive mandates driving after-thought usage, not true integration",
      "Design, product, and engineering operating as siloed, autonomous divisions",
      "A value proposition focused only on design-specific concerns",
      "The systems team positioned as enforcer, not enabler",
    ],
    after: [
      "Cross-functional collaboration with shared roadmap ownership",
      "Tailored value propositions securing buy-in from all three leadership verticals",
      "Skeptical organizational leads converted into active platform advocates",
      "Permanent corporate funding secured on measurable business outcomes",
    ],
    approachTitle: "The value-exchange model.",
    approachBody: [
      "Adoption is earned through demonstrated value. The model starts with understanding what each leadership vertical actually needs, then proving, explicitly, that the system solves it.",
      "By mapping each stakeholder's pressures, tailoring the proposition to their KPIs, and co-creating governance with their input, the system became a shared asset every vertical had a stake in protecting.",
    ],
    principles: ["Influence, not authority", "Value before adoption", "Partnership, not policing"],
    phases: [
      {
        num: "01",
        title: "Empathy mapping",
        sub: "Understanding each vertical's pressures before prescribing solutions.",
        did: [
          "Ran an internal listening tour with directors and VPs across design, product, and engineering to map their operational pressures",
          "Uncovered the friction stalling delivery: designers bogged down by repetitive layouts, PMs fearing missed deadlines, engineers drowning in technical debt",
          "Identified exactly where the system could unlock velocity for each team",
        ],
        signals: [
          { value: "42+", label: "cross-disciplinary stakeholders engaged" },
          { value: "3", label: "leadership verticals mapped" },
        ],
      },
      {
        num: "02",
        title: "Value proposition",
        sub: "Speaking each vertical's language, in terms of their KPIs.",
        did: [
          "Translated the system's capabilities into three distinct value messages tailored to each executive vertical's explicit KPIs",
          "Framed it as liberating infrastructure for design, a prototype accelerator for product, and a regression-free library for engineering",
          "Turned skeptical department heads into active champions",
        ],
        signals: [
          { value: "3", label: "distinct value propositions crafted" },
          { value: "0 mandates", label: "required to secure buy-in" },
        ],
      },
      {
        num: "03",
        title: "Governance model",
        sub: "Giving delivery teams a seat at the table, permanently.",
        did: [
          "Dismantled the top-down, centralized control model",
          "Established regular meetups with department leaders for shared governance and co-authored roadmap standards",
          "Shifted the culture from passive compliance to active ownership",
          "Transformed former internal critics into platform advocates",
        ],
        signals: [
          { value: "Co-authored", label: "roadmap standards, not mandated ones" },
          { value: "3 verticals", label: "with permanent seats" },
        ],
      },
      {
        num: "04",
        title: "Bottom-line impact",
        sub: "Translating system output into business outcomes leadership could fund.",
        did: [
          "Established transparent telemetry to measure and broadcast hours saved, accessibility risks avoided, and launch acceleration",
          "Moved from abstract output metrics to actual business outcomes — dollars saved and speed-to-market margins",
          "Proved financial return, cementing the system as an essential enterprise asset rather than an experiment",
        ],
        signals: [
          { value: "86%", label: "adoption across digital experiences" },
          { value: "Q4 capital", label: "additional funding secured" },
        ],
      },
    ],
    resultsTitle: "The compounding number.",
    resultsBody:
      "Partnership is the precondition for everything downstream: stakeholder advocacy, shared ownership, sustained funding, and measurable adoption.",
    bar: {
      label: "Enterprise adoption",
      value: "86%",
      targetLabel: "Target",
      target: "75%",
      pct: "86%",
      foot: "0% — 25% — 50% — 75% target — 86% actual",
    },
    results: [
      { value: "3", label: "verticals aligned without mandate", rule: BLUE },
      { value: "0", label: "mandates — influence, not authority", rule: PINK },
      { value: "Permanent", label: "corporate funding secured", rule: CYAN },
      { value: "Q4", label: "capital, roadmap pulled a year early", rule: MINT },
    ],
    quotes: [
      {
        text: "Adoption is a natural byproduct of delivered value. Aligning the system with the organic motivations of design, product, and engineering broke down historical organizational silos.",
        source: "VDS partnership & alignment retrospective",
      },
    ],
    reflectionsBody: "The alignment is the headline. The model is the asset.",
    lessons: [
      {
        num: "01",
        title: "Lead with influence, not authority.",
        text: "The product model that earns trust outlasts any mandate. Diplomatic, value-driven leadership is what makes a platform worth adopting and worth replicating.",
      },
      {
        num: "02",
        title: "Solve their problem, not yours.",
        text: "Aligning the system with each vertical's organic motivations is what turns skeptics into advocates. That's the mechanism behind the model.",
      },
      {
        num: "03",
        title: "Prove value before asking for commitment.",
        text: "Measurable outcomes, not outputs, are what secure permanent investment. Funding follows proof.",
      },
    ],
  },
  {
    id: "crossplatform",
    href: "/case-studies/cross-platform-evolution.html",
    label: "Cross-platform evolution",
    tag: "Cross-platform infrastructure",
    org: "Verizon Design System",
    years: "2025 — 2026",
    titleA: "Cross-platform evolution.",
    titleB: "One token engine, three platforms.",
    deck: "How a token-first architecture and federated governance model expanded a web component library into a unified native platform, delivering iOS and Android parity a full year ahead of schedule.",
    metrics: [
      { value: "45 of 48", label: "Native components delivered", color: CYAN },
      { value: "100%", label: "Token parity across platforms", color: MINT },
      { value: "1yr", label: "Ahead of schedule", color: "#ffffff" },
      { value: "3", label: "Platforms unified", color: CYAN },
    ],
    meta: [
      { label: "Role", value: "Sr. Director, Design Systems" },
      { label: "Team", value: "Design · Eng · Product · Content, US & India" },
      { label: "Surfaces", value: "Web · iOS (SwiftUI) · Android (Jetpack Compose)" },
    ],
    challengeTitle: "The multi-channel fracture.",
    challengeBody: [
      "When a design system is confined to a single platform, the ecosystem around it fractures. As native apps grew in strategic importance, mobile engineering teams were forced to independently interpret design specifications — producing fragmented experiences, duplicated discovery cycles, and a mounting maintenance tax across web, iOS, and Android.",
      "The instinct is to treat this as a component problem. It is an infrastructure problem. We repositioned the system from a web code library into an omni-channel platform built on token-first architecture, shared governance, and native libraries that give mobile teams the leverage web teams had for years.",
    ],
    challengeQuote:
      "Native developers had no components to build with. Every interaction pattern and accessibility behavior was being reinvented in isolation, twice.",
    before: [
      "Web-only component library with no native equivalent",
      "Native teams independently interpreting design specifications",
      "Fragmented user experiences across desktop and mobile apps",
      "Three separate development cycles for every brand or compliance update",
    ],
    after: [
      "Unified token engine compiling to web, iOS, and Android simultaneously",
      "45 native components giving mobile teams parity with web",
      "Consistent brand and accessibility standards across all four flagship apps",
      "A single release cadence, eliminating mobile-release lag",
    ],
    approachTitle: "Unifying the core engine.",
    approachBody: [
      "Platform parity is achieved by building the right foundation first. Token-first means every design decision — color, spacing, type, motion — compiles automatically to every platform runtime. Components become portable because the substrate they sit on is platform-agnostic.",
      "From that foundation: establish the token engine, build the native libraries, federate governance across mobile verticals, and scale to every digital touchpoint.",
    ],
    principles: ["Token-first, not platform-first", "Parity by design, not by accident", "Ship early, scale continuously"],
    phases: [
      {
        num: "01",
        title: "Token-first architecture",
        sub: "The platform-agnostic substrate that makes everything else portable.",
        did: [
          "Built an automated token compilation engine on platform-agnostic JSON schemas",
          "Tokens distribute into native formats: CSS for web, SwiftUI for iOS, Jetpack Compose for Android",
          "Eliminated visual design QA loops across platform runtimes",
          "Brand-wide updates to color, spacing, and type now compile instantly across all three platforms",
        ],
        signals: [
          { value: "100%", label: "token parity across web, iOS, Android" },
          { value: "Weeks → sec", label: "brand sync time across platforms" },
        ],
      },
      {
        num: "02",
        title: "Native component parity",
        sub: "Giving native developers the leverage web teams have had for years.",
        did: [
          "Built native libraries for iOS and Android from shared behavioral and accessibility specifications",
          "Embedded Dynamic Type across all native components as a system primitive",
          "Used AI code translation to refactor existing web components for native runtimes, compressing the delivery arc",
          "Secured Q4 capital to pull the 2026 roadmap forward",
        ],
        signals: [
          { value: "45 of 48", label: "components delivered per platform" },
          { value: "1 yr", label: "ahead of original schedule" },
        ],
      },
      {
        num: "03",
        title: "Federated governance",
        sub: "Synchronizing mobile roadmaps through shared ownership, not central control.",
        did: [
          "Established cross-platform mobile working groups with iOS and Android leadership",
          "Brought native engineering leads to the core systems table",
          "Synchronized multi-channel roadmaps, eliminating mobile-release lag",
          "Teams now ship to the app stores and desktop web simultaneously",
        ],
        signals: [
          { value: "4 apps", label: "flagship apps aligned" },
          { value: "1 cadence", label: "unified release schedule" },
        ],
      },
      {
        num: "04",
        title: "All digital experiences",
        sub: "Scaling the investment to every touchpoint in the ecosystem.",
        did: [
          "Extended the platform beyond flagship apps into the wider digital estate",
          "Made the token engine the single source for every surface the brand ships",
          "Turned a one-time native investment into a permanent multi-channel foundation",
        ],
        signals: [{ value: "3 platforms", label: "on one foundation" }],
      },
    ],
    resultsTitle: "The compounding platform.",
    resultsBody:
      "Platform parity is a leading indicator for everything downstream: accessibility coverage, ship velocity, brand consistency, and reduced engineering overhead.",
    bar: {
      label: "Native components delivered per platform",
      value: "45 of 48",
      targetLabel: "Target",
      target: "48",
      pct: "93.75%",
      foot: "0 — 12 — 24 — 36 — 45 delivered of 48 target",
    },
    results: [
      { value: "100%", label: "token parity across all platforms", rule: BLUE },
      { value: "1 yr", label: "ahead of original schedule", rule: PINK },
      { value: "3", label: "platforms unified", rule: CYAN },
      { value: "4", label: "flagship apps served", rule: MINT },
    ],
    quotes: [
      {
        text: "This critical enablement piece allows native developers to finally achieve parity with web teams. By breaking down silos between web and mobile, Andrew's team delivered a unified experience that serves the broader engineering organization.",
        source: "Richard Dalton, VP CX Design",
      },
    ],
    reflectionsBody: "The components are the headline. The architecture and the decision-making model are the asset.",
    lessons: [
      {
        num: "01",
        title: "Use AI as a development accelerant, not just a product feature.",
        text: "AI code translation from web to native was an internal force multiplier, compressing a multi-year delivery arc into months.",
      },
      {
        num: "02",
        title: "Strategic funding at the right moment compounds outcomes.",
        text: "Securing Q4 capital to pull the 2026 roadmap forward was deliberate. The right investment at the right phase of maturity changes what's possible.",
      },
      {
        num: "03",
        title: "Accessibility is and should always be foundational.",
        text: "Embedding Dynamic Type into every native component means every adopting team inherits inclusive design without extra effort — the difference between compliance as a gate and accessibility as infrastructure.",
      },
    ],
  },
];

export function studyById(id: string): CaseStudy {
  const found = caseStudies.find((s) => s.id === id);
  if (!found) throw new Error(`Unknown case study: ${id}`);
  return found;
}
