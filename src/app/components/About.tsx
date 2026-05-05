import { GraduationCap } from "lucide-react";
import { about, aboutHighlights, education } from "../content";


export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-indigo-600">About</span>
          <h2 className="tracking-tight text-slate-900 mt-2 mb-4">
            {about.heading}
          </h2>
          <p className="text-slate-600">
            {about.bio}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {aboutHighlights.map((h) => (
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

        <div className="mt-16">
          <div className="flex items-start gap-3 mb-4">
            <GraduationCap className="text-indigo-600 shrink-0 mt-1" size={28} />
            <div>
              <span className="text-indigo-600">Academic background</span>
              <h3 className="tracking-tight text-slate-900 mt-2">Education</h3>
            </div>
          </div>
          <p className="text-slate-500 mb-10 max-w-2xl">
            Two degrees in CS and design. Two graduate degrees in management and AI. The combination is intentional.
          </p>

          <div className="max-w-3xl space-y-10">
            {(["graduate", "undergraduate"] as const).map((level) => {
              const group = education.filter((e) => e.level === level);
              return (
                <div key={level}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                    {level === "graduate" ? "Graduate" : "Undergraduate"}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {group.map((e) => (
                      <div
                        key={e.degree}
                        className="p-5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div className="text-slate-900">{e.degree}</div>
                          {e.inProgress && (
                            <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200">
                              In Progress
                            </span>
                          )}
                        </div>
                        <div className="text-slate-500 mb-4">{e.school}</div>
                        <img src={e.logo} alt={e.school} className="w-36 h-16 sm:w-40 sm:h-20 rounded-xl object-contain bg-white border border-slate-100 p-2" />
                      </div>
                    ))}
                  </div>
                  {level === "undergraduate" && (
                    <p className="text-slate-400 text-sm mt-4">
                      CS and design — two disciplines, one perspective.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
