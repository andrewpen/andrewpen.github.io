import { GraduationCap, Sparkles, Users, Target } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Innovation Leader",
    text: "Champion of design systems scaling research, accessibility, and engineering north stars across the enterprise.",
  },
  {
    icon: Users,
    title: "Global Team Builder",
    text: "Lead diverse teams of product managers, designers, engineers, and content strategists.",
  },
  {
    icon: Target,
    title: "Strategic Operator",
    text: "Driving organizational alignment, consensus, and unified action toward business goals.",
  },
];

const education = [
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

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-indigo-600">About</span>
          <h2 className="tracking-tight text-slate-900 mt-2 mb-4">
            Driving organizational success through strategic leadership.
          </h2>
          <p className="text-slate-600">
            With a robust foundation in web development, usability, and cross-functional
            collaboration, I optimize workflows and drive high standards in accessibility
            and customer experience. My passion lies in cultivating continuous learning
            and empowering teams to deliver exceptional outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
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

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 flex items-start gap-3">
            <GraduationCap className="text-indigo-600 shrink-0" size={28} />
            <div>
              <h3 className="text-slate-900">Education</h3>
              <p className="text-slate-500">Academic foundation</p>
            </div>
          </div>
          <div className="md:col-span-2 space-y-4">
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
      </div>
    </section>
  );
}
