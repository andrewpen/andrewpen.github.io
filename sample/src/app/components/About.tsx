import { Sparkles, Users, Target } from "lucide-react";

const highlights = [
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


export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-indigo-600">About</span>
          <h2 className="tracking-tight text-slate-900 mt-2 mb-4">
            I build design infrastructure that humans and AI agents both build from.
          </h2>
          <p className="text-slate-600">
            With 12+ years at Verizon — starting as a developer and growing into a Senior Director
            owning enterprise design infrastructure — I specialize in transforming fragmented
            component libraries into opinionated, agent-native platforms. I reduce accumulated
            complexity, enforce quality and accessibility at scale, and drive cross-functional
            alignment across design, engineering, and product without relying on mandate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="group p-7 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <h.icon size={22} />
              </div>
              <h3 className="text-slate-900 mb-2">{h.title}</h3>
              <p className="text-slate-600">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
