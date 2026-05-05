import { useState } from "react";
import { skills } from "../content";

export function Skills() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-indigo-600">Capabilities</span>
          <h2 className="tracking-tight text-slate-900 mt-2 mb-4">Core skills</h2>
          <p className="text-slate-600">
            Select each card to explore how I apply these capabilities in practice.
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
                aria-pressed={isActive}
                aria-label={`${s.name}${isActive ? ", expanded" : ""}`}
                className={`relative text-left p-6 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "bg-slate-900 border-slate-900 text-white shadow-2xl -translate-y-1"
                    : "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? "bg-indigo-500 text-white" : "bg-indigo-50 text-indigo-600"
                    }`}
                  >
                    <s.icon size={20} />
                  </div>
                </div>

                <h3 className={`mb-2 ${isActive ? "text-white" : "text-slate-900"}`}>
                  {s.name}
                </h3>
                <p className={`${isActive ? "text-slate-300" : "text-slate-500"}`}>
                  {isActive ? s.desc : "Click to learn more"}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

