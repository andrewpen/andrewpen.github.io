import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "MS in Analytics & Applied AI",
    school: "Dakota State University (In Progress, Est. 2028)",
  },
  {
    degree: "Master of Management Information Systems",
    school: "University of Arkansas, Little Rock",
  },
  {
    degree: "Bachelor of Computer Sciences",
    school: "Henderson State University",
  },
  {
    degree: "Bachelor of Digital Art & Design",
    school: "Henderson State University",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start gap-3 mb-14">
          <GraduationCap className="text-indigo-600 shrink-0 mt-1" size={28} />
          <div>
            <span className="text-indigo-600">Academic background</span>
            <h2 className="tracking-tight text-slate-900 mt-2">Education</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          {education.map((e) => (
            <div
              key={e.degree}
              className="p-5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 transition-colors"
            >
              <div className="text-slate-900">{e.degree}</div>
              <div className="text-slate-500">{e.school}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
