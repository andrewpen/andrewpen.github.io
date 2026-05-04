import { ArrowUpRight } from "lucide-react";

const projects = [
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

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div className="max-w-2xl">
            <span className="text-indigo-600">Selected work</span>
            <h2 className="tracking-tight text-slate-900 mt-2">Initiatives and outcomes</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative p-7 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-indigo-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
                    {p.tag}
                  </span>
                  <ArrowUpRight
                    className="text-slate-400 group-hover:text-indigo-600 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                    size={20}
                  />
                </div>
                <h3 className="text-slate-900 mb-3">{p.title}</h3>
                <p className="text-slate-600 mb-6">{p.text}</p>
                <div className="pt-4 border-t border-slate-200 text-slate-500">
                  {p.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
