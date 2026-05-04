import { useState } from "react";
import {
  Layers, Brain, Globe2, ShieldCheck, BarChart3,
  Users, Cpu, RefreshCw, Handshake,
} from "lucide-react";

const skills = [
  { name: "Enterprise Platform Strategy", icon: Layers, level: 96, desc: "Defining multi-year roadmaps for systems that serve entire organizations — balancing velocity, quality, and adoption at scale." },
  { name: "Agent-Native Platform Architecture", icon: Brain, level: 91, desc: "Designed Verizon's first MCP server enabling AI agents to consume and generate from a design system in real time. Pioneer in making enterprise platforms agent-readable, generative-UI-ready, and developer-tool native." },
  { name: "Global Team Leadership", icon: Globe2, level: 93, desc: "Leading cross-functional, cross-geographic teams spanning the US and India across product, design, engineering, and content disciplines." },
  { name: "Accessibility at Scale", icon: ShieldCheck, level: 94, desc: "Embedded accessibility-by-default into a design system used across 86% of a Fortune 50 company's product surfaces. Awarded Verizon Accessibility Champion (2025). Championed WCAG compliance, dynamic type, and inclusive design as a core system primitive — not an afterthought." },
  { name: "Data-Driven Adoption Models", icon: BarChart3, level: 90, desc: "Built intelligent adoption dashboards with automated measurement, achieving 86% design system adoption against a 75% target — without organizational mandate." },
  { name: "Stakeholder & Executive Alignment", icon: Handshake, level: 95, desc: "Driving strategic buy-in across VP, SVP, and C-suite levels. Secured additional Q4 capital to accelerate roadmap initiatives based on performance evidence." },
  { name: "Cross-Functional Org Design", icon: Users, level: 89, desc: "Structured and scaled product, design, and engineering squads under a unified operating model, eliminating silos across disciplines and time zones." },
  { name: "Design-to-Code Infrastructure", icon: Cpu, level: 97, desc: "Shipped a VS Code Dev Assistant and Figma Design Assistant that translate design intent cleanly into developer workflows. Proven experience building design-to-code systems that bridge disciplines and reduce implementation drift at scale." },
  { name: "Organizational Change Management", icon: RefreshCw, level: 88, desc: "Guided an 18-month enterprise rebranding (Monarch) and led adoption of new systems across dozens of teams — through partnership, not mandate." },
];

export function Skills() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-indigo-600">Capabilities</span>
          <h2 className="tracking-tight text-slate-900 mt-2 mb-4">Core skills</h2>
          <p className="text-slate-600">
            Hover or tap each card to explore how I apply these capabilities in practice.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => {
            const isActive = active === i;
            return (
              <button
                key={s.name}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : i)}
                className={`relative text-left p-6 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "bg-slate-900 border-slate-900 text-white shadow-2xl -translate-y-1"
                    : "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? "bg-indigo-500 text-white" : "bg-indigo-50 text-indigo-600"
                    }`}
                  >
                    <s.icon size={20} />
                  </div>
                  <span className={isActive ? "text-indigo-300" : "text-slate-400"}>
                    {s.level}%
                  </span>
                </div>

                <h3 className={`mb-2 ${isActive ? "text-white" : "text-slate-900"}`}>
                  {s.name}
                </h3>
                <p className={`mb-4 ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                  {isActive ? s.desc : "Click to learn more"}
                </p>

                <div className={`h-1.5 w-full rounded-full overflow-hidden ${isActive ? "bg-white/10" : "bg-slate-100"}`}>
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-blue-400 transition-all duration-700"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

