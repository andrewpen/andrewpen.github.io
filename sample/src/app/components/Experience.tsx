import { useState } from "react";
import { Building2, ChevronRight } from "lucide-react";

const roles = [
  {
    company: "Verizon",
    title: "Sr Director, Design Systems",
    period: "2021 — Present",
    summary:
      "Lead a global team of product managers, designers, engineers, and content strategists optimizing Verizon's digital experiences.",
    achievements: [
      "Built content and design systems scaling research, accessibility, and engineering across the enterprise",
      "Partnered with executive leadership to advocate for adoption of unified systems",
      "Established cross-functional north stars for usability and accessibility",
    ],
  },
  {
    company: "Verizon",
    title: "Sr Manager, Digital Marketing Business Operations",
    period: "2016 — 2021",
    summary:
      "Led a global team of 20+ engineers delivering best-in-class customer experiences on Verizon.com.",
    achievements: [
      "Ensured all web pages met the highest accessibility and usability standards",
      "Partnered across business units to drive cross-functional alignment",
      "Grew engineering leadership across multiple geographies",
    ],
  },
  {
    company: "Verizon",
    title: "Manager, Front End Web Development",
    period: "2014 — 2016",
    summary: "Promoted to manager leading front-end development teams.",
    achievements: ["Built and scaled the front-end engineering practice"],
  },
  {
    company: "Verizon",
    title: "Consultant, Front End Web Development",
    period: "2013 — 2014",
    summary: "Joined Verizon delivering front-end web development capabilities.",
    achievements: ["Established foundational front-end patterns"],
  },
  {
    company: "Baptist Health",
    title: "Web Application Developer",
    period: "2011 — 2013",
    summary: "Started career building healthcare web applications.",
    achievements: ["Delivered patient-facing digital experiences"],
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
