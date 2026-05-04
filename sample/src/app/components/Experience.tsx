import { useState } from "react";
import { Building2, ChevronRight } from "lucide-react";

const roles = [
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
    summary: "Promoted to first people leadership role, overseeing front-end development teams and establishing the engineering practice.",
    achievements: [
      "Built and scaled front-end engineering team from the ground up",
      "Established development standards and practices adopted across the organization",
    ],
  },
  {
    company: "Verizon",
    title: "Consultant, Front End Web Development",
    period: "2013 — 2014",
    summary: "Joined Verizon as a consultant delivering front-end web capabilities, transitioning to full-time within a year.",
    achievements: [
      "Delivered impactful front-end solutions rapidly leading to full-time conversion",
    ],
  },
  {
    company: "Baptist Health",
    title: "Web Application Developer",
    period: "2011 — 2013",
    summary: "Began career building patient-facing digital experiences for a major healthcare system.",
    achievements: [
      "Developed and maintained healthcare web applications serving patients and clinical staff",
    ],
  },
];

export function Experience() {
  const [active, setActive] = useState(0);
  const role = roles[active];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-indigo-600">Experience</span>
          <h2 className="tracking-tight text-slate-900 mt-2 mb-4">A career of impact</h2>
          <p className="text-slate-600">
            Select a role to explore how I've contributed across each chapter.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-3">
            {roles.map((r, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left p-5 rounded-xl border transition-all ${
                  active === i
                    ? "border-indigo-600 bg-indigo-50 shadow-md"
                    : "border-slate-200 hover:border-indigo-200 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      active === i ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"
                    }`}>
                      <Building2 size={16} />
                    </div>
                    <div>
                      <div className="text-slate-900">{r.title}</div>
                      <div className="text-slate-500">{r.company} · {r.period}</div>
                    </div>
                  </div>
                  <ChevronRight
                    size={18}
                    className={`shrink-0 transition-transform ${
                      active === i ? "text-indigo-600 translate-x-1" : "text-slate-400"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="sticky top-24 p-8 rounded-2xl bg-slate-900 text-white shadow-xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-indigo-200 mb-4">
                {role.period}
              </span>
              <h3 className="mb-1">{role.title}</h3>
              <div className="text-indigo-300 mb-6">{role.company}</div>
              <p className="text-slate-300 mb-6">{role.summary}</p>
              <ul className="space-y-3">
                {role.achievements.map((a, i) => (
                  <li key={i} className="flex gap-3 text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
