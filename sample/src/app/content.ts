import {
  Sparkles, Users, Target,
  Layers, Brain, Globe2, ShieldCheck, BarChart3,
  Cpu, RefreshCw, Handshake,
} from "lucide-react";

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  name: "Andrew Pendleton",
  tagline: "Senior Executive · Design Infrastructure & Agent-Native Systems",
  headline: "Hi, I'm Andrew Pendleton.",
  subheadline: "I build the systems humans and AI agents build from.",
  bio: "Senior Director at Verizon leading enterprise design infrastructure, agent-native AI tooling, and design-to-code platform strategy. I transform component libraries into opinionated, scalable systems that enable both people and AI to generate high-quality, accessible experiences — across one of the world's largest developer ecosystems.",
  email: "andrew.d.pendleton@gmail.com",
  location: "New York, NY",
  linkedinUrl: "https://www.linkedin.com/in/andrewpendleton/",
  profileImage: "/img/profile-standing-v2.png",
};

// ─── About ────────────────────────────────────────────────────────────────────

export const about = {
  heading: "I build design infrastructure that humans and AI agents both build from.",
  bio: "With 12+ years at Verizon — starting as a developer and growing into a Senior Director owning enterprise design infrastructure — I specialize in transforming fragmented component libraries into opinionated, agent-native platforms. I reduce accumulated complexity, enforce quality and accessibility at scale, and drive cross-functional alignment across design, engineering, and product without relying on mandate.",
};

export const aboutHighlights = [
  {
    icon: Sparkles,
    title: "Agent-Native Infrastructure",
    text: "Architected Verizon's first MCP server — enabling AI agents to consume, generate from, and validate against VDS standards in real time. Transformed a component library into a living platform that both humans and AI can build from.",
  },
  {
    icon: Users,
    title: "Manager of Managers",
    text: "Lead a global team of Directors across product, design, engineering, and content strategy — spanning the US and India. Build leadership layers that drive accountability, performance, and craft.",
  },
  {
    icon: Target,
    title: "Design-to-Code Systems",
    text: "Shipped a VDS Dev Assistant for VS Code and Design Assistant for Figma — translating design intent cleanly into developer workflows. Drove 86% enterprise adoption across a Fortune 50 digital ecosystem without mandate.",
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skills = [
  {
    name: "Enterprise Platform Strategy",
    icon: Layers,
    level: 96,
    desc: "Defining multi-year roadmaps for systems that serve entire organizations — balancing velocity, quality, and adoption at scale.",
  },
  {
    name: "Agent-Native Platform Architecture",
    icon: Brain,
    level: 91,
    desc: "Designed Verizon's first MCP server enabling AI agents to consume and generate from a design system in real time. Pioneer in making enterprise platforms agent-readable, generative-UI-ready, and developer-tool native.",
  },
  {
    name: "Global Team Leadership",
    icon: Globe2,
    level: 93,
    desc: "Leading cross-functional, cross-geographic teams spanning the US and India across product, design, engineering, and content disciplines.",
  },
  {
    name: "Accessibility at Scale",
    icon: ShieldCheck,
    level: 94,
    desc: "Embedded accessibility-by-default into a design system used across 86% of a Fortune 50 company's product surfaces. Awarded Verizon Accessibility Champion (2025). Championed WCAG compliance, dynamic type, and inclusive design as a core system primitive — not an afterthought.",
  },
  {
    name: "Data-Driven Adoption Models",
    icon: BarChart3,
    level: 90,
    desc: "Built intelligent adoption dashboards with automated measurement, achieving 86% design system adoption against a 75% target — without organizational mandate.",
  },
  {
    name: "Stakeholder & Executive Alignment",
    icon: Handshake,
    level: 95,
    desc: "Driving strategic buy-in across VP, SVP, and C-suite levels. Secured additional Q4 capital to accelerate roadmap initiatives based on performance evidence.",
  },
  {
    name: "Cross-Functional Org Design",
    icon: Users,
    level: 89,
    desc: "Structured and scaled product, design, and engineering squads under a unified operating model, eliminating silos across disciplines and time zones.",
  },
  {
    name: "Design-to-Code Infrastructure",
    icon: Cpu,
    level: 97,
    desc: "Shipped a VS Code Dev Assistant and Figma Design Assistant that translate design intent cleanly into developer workflows. Proven experience building design-to-code systems that bridge disciplines and reduce implementation drift at scale.",
  },
  {
    name: "Organizational Change Management",
    icon: RefreshCw,
    level: 88,
    desc: "Guided an 18-month enterprise rebranding (Monarch) and led adoption of new systems across dozens of teams — through partnership, not mandate.",
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const roles = [
  {
    company: "Verizon",
    title: "Sr Director, Experience Design (Design Systems)",
    period: "2021 — Present",
    summary:
      "Lead the Verizon Design System (VDS) — enterprise design infrastructure spanning web, iOS, and Android — as a Senior Director managing a team of Directors across product, design, engineering, and content strategy. Transforming a component library into an agent-native platform that both humans and AI can generate high-quality, accessible experiences from.",
    achievements: [
      "Designed and shipped an agent-native layer for VDS via MCP — enabling AI agents to consume, generate from, and validate against design system standards in real time (Verizon's first MCP server)",
      "Achieved 86% VDS adoption enterprise-wide, exceeding the 75% target — without organizational mandate, through quality, tooling, and partnership",
      "Delivered VDS Native (iOS SwiftUI + Android Jetpack Compose) with 17 components — achieving mobile parity a full year ahead of schedule",
      "Shipped VDS Dev Assistant (VS Code) and Design Assistant (Figma) — translating design intent cleanly into developer workflows; both delivered a full year ahead of schedule",
      "Manage managers: lead Directors of Design, Engineering, and Product across US and India — building a high-performing, multi-disciplinary leadership layer",
      "Led Monarch: an 18-month enterprise rebranding overhaul with new visual identity, dynamic type, and built-in video transcripts",
      "Secured additional Q4 capital based on performance evidence to accelerate 2026 initiatives",
      "Embedded accessibility-by-default as a system primitive — awarded Verizon Accessibility Champion at the 2025 Accessibility Summit",
      "Built intelligent adoption dashboard with automated scoring, quality modeling, and breadth/depth metrics",
      "Reduced system complexity and accumulated technical debt through Monarch — delivering a more opinionated, scalable platform",
    ],
  },
  {
    company: "Verizon",
    title: "Sr Manager, Digital Marketing Business Operations",
    period: "2016 — 2021",
    summary:
      "Led a global team of 20+ front-end engineers delivering customer experiences on Verizon.com, driving the highest standards of accessibility and usability across the digital ecosystem.",
    achievements: [
      "Managed a globally distributed engineering team of 20+ developers across multiple time zones",
      "Ensured all verizon.com experiences met WCAG accessibility and enterprise usability standards",
      "Partnered across business units to drive cross-functional alignment on shared front-end practices",
      "Grew engineering leadership capability and established foundational front-end patterns at scale",
    ],
  },
  {
    company: "Verizon",
    title: "Manager, Front End Web Development",
    period: "2014 — 2016",
    summary:
      "Promoted to first people leadership role, overseeing front-end development teams and establishing the engineering practice.",
    achievements: [
      "Built and scaled front-end engineering team from the ground up",
      "Established development standards and practices adopted across the organization",
    ],
  },
  {
    company: "Verizon",
    title: "Consultant, Front End Web Development",
    period: "2013 — 2014",
    summary:
      "Joined Verizon as a consultant delivering front-end web capabilities, transitioning to full-time within a year.",
    achievements: [
      "Delivered impactful front-end solutions rapidly leading to full-time conversion",
    ],
  },
  {
    company: "Baptist Health",
    title: "Web Application Developer",
    period: "2011 — 2013",
    summary:
      "Began career building patient-facing digital experiences for a major healthcare system.",
    achievements: [
      "Developed and maintained healthcare web applications serving patients and clinical staff",
    ],
  },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────

export const milestones = [
  { year: "2011", title: "Started in tech", text: "Joined Baptist Health as a Web Application Developer — building patient-facing digital products from the ground up." },
  { year: "2013", title: "Joined Verizon", text: "Brought on as a Front End Web Development Consultant at one of the world's largest telecom companies." },
  { year: "2014", title: "First leadership role", text: "Promoted to Manager of Front End Web Development. Began building and scaling engineering teams." },
  { year: "2016", title: "Senior Manager", text: "Led a global team of 20+ engineers delivering accessibility and usability standards across Verizon.com." },
  { year: "2021", title: "Senior Director", text: "Appointed Senior Director of Experience Design, owning the Verizon Design System strategy, roadmap, and cross-functional team." },
  { year: "2025", title: "Accessibility Champion", text: "Awarded Verizon Accessibility Champion. Exceeded adoption targets at 86%. Shipped VDS Native mobile parity a year ahead of schedule." },
  { year: "Today", title: "Scaling AI & systems", text: "Architecting AI-native enterprise systems including VDS MCP server, AI design assistants, and pursuing an MS in Analytics & Applied AI." },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects = [
  {
    tag: "Agent-Native Infrastructure",
    title: "VDS MCP Server & AI Tooling Suite",
    text: "Designed and shipped an agent-native layer for the Verizon Design System — enabling AI agents to consume, generate from, and validate against VDS standards in real time via MCP. Paired with a VS Code Dev Assistant and Figma Design Assistant that translate design intent cleanly into developer workflows. Both tools delivered a full year ahead of schedule.",
    metric: "Verizon's first agent-native design system",
  },
  {
    tag: "Design Infrastructure",
    title: "Verizon Design System (VDS) — Monarch",
    text: "Transformed VDS from a component library into an opinionated, scalable design infrastructure platform. Led an 18-month rebranding (Monarch) reducing complexity, enforcing standards, and embedding accessibility-by-default. Achieved 86% adoption across Verizon product teams — exceeding the 75% target without mandate.",
    metric: "86% adoption · Fortune 50 scale",
  },
  {
    tag: "Mobile Platforms",
    title: "VDS Native — iOS & Android Parity",
    text: "Delivered VDS Native libraries for iOS (SwiftUI) and Android (Jetpack Compose), reaching 17 components and achieving full mobile parity with the web system — a year ahead of the original roadmap.",
    metric: "17 components · 1 year early",
  },
];

// ─── Speaking ─────────────────────────────────────────────────────────────────

export const speakingEvents = [
  {
    src: "/img/speaking%20events/2026-CES.png",
    label: "CES",
    year: "2026",
    summary: "At the 2026 CES panel \"Building Accessibility In: From Design Systems to Testing, Powered by Verizon,\" Andrew Pendleton and Fred Moltz explored how Verizon uses its design system as the \"technological representation\" of a village to scale accessibility. Instead of treating accessibility as a final compliance check, Verizon \"shifts left,\" treating it as a foundational requirement by co-creating components with accessibility experts early in the design process. To handle enterprise scale, the teams codify these standards into automated workflows, utilizing tools like the Evinced Flow Analyzer, Figma nudges, and AI assistants like Copilot to guide developers in real time. This approach not only prevents well-intentioned mistakes from reaching production but also drives immense productivity gains, reducing component iteration cycles from 18 months to just four to five months, and turning some 10-hour tasks into 30-minute exercises. Ultimately, this integration yields faster speed to market and a better customer experience.",
  },
  {
    src: "/img/speaking%20events/2025-CES.png",
    label: "CES",
    year: "2025",
    summary: "The CES panel \"UGD: User Generated Design\" focused on product development strategies that involve the accessibility community early in the design process to drive inclusive innovation. Moderated by Paul Amadeus Lane, the session was structured to explore the core principles of User Generated Design (UGD) and its critical role in fostering inclusivity. The panel featured Rebecca Rosenberg, Rob Moser, Allison Stransky representing Samsung, and Andrew Pendleton representing Verizon. The planned discussion covered the unique challenges of user generated design, accessibility in storytelling, and specific examples of corporate implementation. The session concluded with a forward-looking discussion, prompting all panelists to envision the landscape of user generated design five to ten years in the future and to share their \"secret sauce\" for professionals looking to thrive in this evolving field.",
  },
  {
    src: "/img/speaking%20events/2025-AccessibilitySummit.PNG",
    label: "Accessibility Summit",
    year: "2025",
    summary: "At the 10th Annual Accessibility Summit, Andrew's presentation, \"Partnership to Platform,\" detailed the evolution of the Verizon Design System (VDS) from a human-driven \"people partnership\" into an AI-powered intelligent platform. Originally, VDS successfully integrated accessibility by \"shifting left\" and involving experts early in the design process rather than treating them as a final compliance gate. However, this created a scaling problem, as the necessary human engagements, reviews, and meetings became a bottleneck. To solve this, Verizon is building an \"Intelligent Platform\" that embeds VDS rules, user research, and WCAG guidelines directly into an AI \"brain\". This brain acts as a proactive co-pilot in tools like Figma and code editors, shifting accessibility from reactive auditing to proactive compliance. Furthermore, AI automates complex variant testing, turning a four-to-six-hour manual task into a process that takes seconds. Ultimately, through a three-pillar framework of empowering, training, and aggregating context, Verizon uses AI to elevate its workforce, freeing them to tackle more complex, human-centered accessibility challenges.",
  },
  {
    src: "/img/speaking%20events/2025-BrowserStackEvent.jpg",
    label: "BrowserStack World",
    year: "2025",
    summary: "In \"Leveraging AI for Next-Gen Developer Enablement,\" Andrew spoke to the tech industry's obsession with AI-driven speed, defining it as a \"productivity trap\" that can lead to technical debt and inconsistent experiences. To counteract this, Verizon utilizes its Verizon Design System (VDS) as a centralized foundation built on Quality, Consistency, Inclusivity, and Efficiency. Rather than using AI exclusively for surface-level code generation, the most meaningful applications happen \"below the surface\" in complex testing and validation workflows. By implementing AI for \"Smart Diffing\" in visual regression testing, integrating automated accessibility checks into the CI/CD pipeline, and using a proactive \"VDS Guardian Angel\" in Figma, organizations can eliminate human error at the source. Ultimately, a rigorous, AI-supported focus on quality naturally results in sustainable and meaningful productivity gains.",
  },
  {
    src: "/img/speaking%20events/2023-UXIndia-1.JPG",
    label: "UX India",
    year: "2023",
    summary: "In Andrew's presentation at UX India, \"How design systems elevate UX design,\" he shared that embedding a design system directly into the product iteration cycle elevates user experience and prevents costly downstream scope cuts. Grounded in Verizon Design's principles of being \"Meaningful, Human, and Responsible,\" the talk highlights the launch of the \"myPlan\" mobile experience as a key case study. Instead of treating the Verizon Design System (VDS) as a static library of parts thrown over the wall, the VDS team embedded themselves into the creative process, acting as guardrails that encouraged targeted transformation while maintaining ecosystem alignment. To solve complex engineering handoff hurdles across multiple teams, VDS formed a sub-team to build and distribute larger \"organisms and templates,\" rather than just atomic components. By centralizing this complex UI and accessibility work, the process yielded a uniform, high-fidelity launch with drastically fewer defects, ultimately allowing designers to spend more time designing instead of triaging issues.",
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education = [
  { degree: "MS in Analytics & Applied AI", school: "Dakota State University (In Progress, Est. 2028)" },
  { degree: "Master of Management Information Systems", school: "University of Arkansas, Little Rock" },
  { degree: "Bachelor of Computer Sciences", school: "Henderson State University" },
  { degree: "Bachelor of Digital Art & Design", school: "Henderson State University" },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contact = {
  heading: "Let's build something great.",
  description: "Open to executive conversations, advisory roles, and speaking opportunities. I respond to every message personally.",
  email: "andrew.d.pendleton@gmail.com",
  location: "New York, NY",
  linkedinUrl: "https://www.linkedin.com/in/andrewpendleton/",
  footerCopyright: "© 2026 Andrew Pendleton",
  footerTagline: "Senior Product Executive · New York, NY",
};
