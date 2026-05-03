import { useState } from "react";
import {
  Crown, DollarSign, Cog, TrendingUp, RefreshCw,
  Handshake, Lightbulb, Globe2, BarChart3,
} from "lucide-react";

const skills = [
  { name: "Strategic Leadership", icon: Crown, level: 95, desc: "Setting vision and aligning organizations around long-term outcomes." },
  { name: "Financial Acumen", icon: DollarSign, level: 88, desc: "Translating strategy into measurable business and financial impact." },
  { name: "Operational Excellence", icon: Cog, level: 92, desc: "Building scalable systems and workflows for high-performing teams." },
  { name: "Business Development", icon: TrendingUp, level: 85, desc: "Forging partnerships that unlock new growth opportunities." },
  { name: "Change Management", icon: RefreshCw, level: 90, desc: "Guiding organizations through transformation with clarity and care." },
  { name: "Stakeholder Management", icon: Handshake, level: 93, desc: "Building consensus across executive and working teams." },
  { name: "Innovation & Transformation", icon: Lightbulb, level: 94, desc: "Pioneering new approaches to digital experience at scale." },
  { name: "Global Team Building", icon: Globe2, level: 91, desc: "Cultivating high-trust, distributed teams across geographies." },
  { name: "Data-Driven Decision Making", icon: BarChart3, level: 89, desc: "Pairing intuition with analytics for confident strategic moves." },
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
